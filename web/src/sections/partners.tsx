import { Container } from "@/components/common/container";
import { PartnerLogo } from "@/components/common/partner-logo";
import type { Partner } from "@/content/types";

export function Partners({ partners }: { partners: readonly Partner[] }) {
  if (partners.length === 0) return null;

  return (
    <section aria-labelledby="partners-heading" className="border-y border-border bg-surface-sunken py-14">
      <Container className="reveal flex flex-col items-center gap-8">
        <h2
          id="partners-heading"
          className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          Didukung oleh
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              <PartnerLogo partner={partner} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
