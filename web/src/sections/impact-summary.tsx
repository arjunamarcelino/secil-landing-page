import { Container } from "@/components/common/container";
import { ImpactStat } from "@/components/common/impact-stat";
import type { ImpactStatistic } from "@/content/types";

export function ImpactSummary({ statistics }: { statistics: readonly ImpactStatistic[] }) {
  if (statistics.length === 0) return null;

  return (
    <section id="dampak" aria-labelledby="impact-heading" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Dampak Bersama
          </span>
          <h2
            id="impact-heading"
            className="max-w-2xl font-heading text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Setiap dukungan berubah menjadi kesempatan belajar
          </h2>
        </div>
        <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {statistics.map((stat) => (
            <ImpactStat key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
