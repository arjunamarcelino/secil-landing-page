import Image from "next/image";
import type { Partner } from "@/content/types";
import { safeHref } from "@/lib/url";

function Logo({ partner }: { partner: Partner }) {
  // Partner logos are always local (fallback) or Sanity; render at a fixed box.
  const { logo } = partner;
  return (
    <div className="relative flex h-16 w-36 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
      {logo.kind === "local" ? (
        <Image
          src={logo.asset}
          alt={logo.alt}
          className="max-h-16 w-auto object-contain"
        />
      ) : (
        <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
      )}
    </div>
  );
}

/** Partner logo, linking to the partner site when a safe URL is available. */
export function PartnerLogo({ partner }: { partner: Partner }) {
  const href = safeHref(partner.website);
  if (!href) return <Logo partner={partner} />;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Kunjungi situs ${partner.name}`}
      className="rounded-lg"
    >
      <Logo partner={partner} />
    </a>
  );
}
