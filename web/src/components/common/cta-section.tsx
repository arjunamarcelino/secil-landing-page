import { Container } from "./container";
import { ButtonLink } from "./button-link";
import { cn } from "@/lib/utils";

type CTA = { href: string; label: string };

/** Reusable call-to-action band. `tone="primary"` is the bold terracotta band. */
export function CTASection({
  title,
  description,
  primary,
  secondary,
  tone = "primary",
  labelledById = "cta-heading",
}: {
  title: string;
  description?: string;
  primary: CTA;
  secondary?: CTA;
  tone?: "primary" | "tint";
  labelledById?: string;
}) {
  const isPrimary = tone === "primary";
  return (
    <section aria-labelledby={labelledById} className="py-6">
      <Container>
        <div
          className={cn(
            "flex flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center sm:px-12",
            isPrimary ? "bg-primary text-primary-foreground" : "bg-primary-tint text-foreground",
          )}
        >
          <h2
            id={labelledById}
            className="max-w-2xl font-heading text-3xl font-semibold sm:text-4xl"
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "max-w-xl text-lg",
                isPrimary ? "text-primary-foreground/90" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={primary.href}
              variant={isPrimary ? "secondary" : "primary"}
              size="lg"
            >
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink
                href={secondary.href}
                variant="ghost"
                size="lg"
                className={isPrimary ? "text-primary-foreground hover:bg-white/10" : undefined}
              >
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
