import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { safeHref, isExternalHref } from "@/lib/url";

const buttonLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "border border-border-strong bg-surface text-foreground hover:bg-muted",
        teal: "bg-teal text-teal-foreground hover:opacity-90",
        ghost: "text-primary hover:bg-primary-tint",
      },
      size: {
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonLinkVariants>;

/**
 * A call-to-action rendered as a link. Internal links use next/link; external
 * links are scheme-validated (safeHref) and hardened with rel="noopener noreferrer".
 * Renders nothing for an unsafe/blocked href.
 */
export function ButtonLink({ href, children, variant, size, className }: ButtonLinkProps) {
  const safe = safeHref(href);
  if (!safe) return null;
  const classes = cn(buttonLinkVariants({ variant, size }), className);

  if (isExternalHref(safe)) {
    return (
      <a href={safe} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={safe} className={classes}>
      {children}
    </Link>
  );
}
