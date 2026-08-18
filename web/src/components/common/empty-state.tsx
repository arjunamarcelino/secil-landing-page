import { cn } from "@/lib/utils";

/** Neutral placeholder shown when a content list has no items. */
export function EmptyState({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border-strong bg-surface px-6 py-14 text-center",
        className,
      )}
    >
      <p className="font-heading text-lg font-semibold text-foreground">{title}</p>
      {description && (
        <p className="max-w-md text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
