import type { ImpactStatistic } from "@/content/types";

/** A single impact statistic: oversized numeral, label, supporting text. */
export function ImpactStat({ stat }: { stat: ImpactStatistic }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {stat.value}
      </span>
      <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
        {stat.label}
      </span>
      {stat.description && (
        <span className="text-sm text-muted-foreground">{stat.description}</span>
      )}
    </div>
  );
}
