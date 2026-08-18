import { safeHref } from "@/lib/url";
import { cn } from "@/lib/utils";

/**
 * A text link to an off-site URL. The href is scheme-validated and every link
 * opens in a new tab with rel="noopener noreferrer". Renders plain text when the
 * href is missing or unsafe, so a bad CMS value never produces a live bad link.
 */
export function ExternalLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}: {
  href?: string | null;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  const safe = safeHref(href);
  if (!safe) return <span className={className}>{children}</span>;
  return (
    <a
      href={safe}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "text-teal underline-offset-4 hover:underline focus-visible:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
