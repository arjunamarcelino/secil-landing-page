import { cn } from "@/lib/utils";

/** Eyebrow + heading + optional description, used to open every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "start",
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "start" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-primary">
          {eyebrow}
        </span>
      )}
      <Heading
        id={id}
        className={cn(
          "font-heading font-semibold tracking-tight text-foreground",
          Heading === "h1"
            ? "text-4xl sm:text-5xl"
            : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
