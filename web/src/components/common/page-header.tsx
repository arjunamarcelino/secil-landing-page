import { Container } from "./container";

/** Consistent interior-page header band with an h1 + optional lead. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section
      className="border-b border-border"
      style={{
        background:
          "radial-gradient(100% 100% at 0% 0%, var(--primary-tint) 0%, transparent 60%), var(--background)",
      }}
    >
      <Container className="flex flex-col gap-4 py-14 sm:py-18">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
