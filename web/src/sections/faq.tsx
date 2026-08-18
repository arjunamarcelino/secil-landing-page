import { ChevronDown } from "lucide-react";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { PortableTextRenderer } from "@/components/common/portable-text";
import type { FaqItem } from "@/content/types";

/** FAQ accordion built on native <details> — no client-side JavaScript. */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
        />
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.order}
              className="group rounded-2xl border border-border bg-surface px-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="pb-5 text-base">
                <PortableTextRenderer value={item.answer} />
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
