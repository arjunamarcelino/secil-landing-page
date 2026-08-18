"use client";

import { useEffect, useRef, useState } from "react";

/** Split "1.200+" / "2020" / "25+" into prefix, integer target, suffix, grouping. */
function parse(value: string) {
  const m = value.match(/^(\D*)([\d.,]+)(\D*)$/);
  if (!m) return null;
  const [, prefix, core, suffix] = m;
  const target = parseInt(core.replace(/\D/g, ""), 10);
  if (!Number.isFinite(target)) return null;
  return { prefix, suffix, target, hasGrouping: /[.,]/.test(core) };
}

const idID = new Intl.NumberFormat("id-ID");

/**
 * Counts a statistic up from 0 the first time it scrolls into view. Renders the
 * final value on the server (no layout shift) and under reduced motion.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parse(value);
    const el = ref.current;
    if (!parsed || !el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // keep the final value
    }

    const { prefix, suffix, target, hasGrouping } = parsed;
    let raf = 0;
    const render = (n: number) =>
      setDisplay(prefix + (hasGrouping ? idID.format(n) : String(n)) + suffix);

    render(0);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          render(Math.round((1 - Math.pow(1 - t, 3)) * target)); // ease-out cubic
          if (t < 1) raf = requestAnimationFrame(tick);
          else setDisplay(value); // snap to the exact original string
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
