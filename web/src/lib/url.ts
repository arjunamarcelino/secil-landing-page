const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

/**
 * Validate a URL coming from the CMS (or any untrusted source) before it is
 * rendered into an href/src. Returns the safe URL, or `undefined` if the scheme
 * is not allow-listed (e.g. `javascript:` / `data:`). Relative and anchor links
 * are allowed through unchanged.
 *
 * This is the authoritative XSS guard — schema-level `uri()` validation in Sanity
 * is only defense-in-depth and can be bypassed via the import API.
 */
export function safeHref(raw?: string | null): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (trimmed.startsWith("/") || trimmed.startsWith("#")) return trimmed;
  try {
    const url = new URL(trimmed);
    return SAFE_PROTOCOLS.has(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

/** True when the href points to a different origin (needs target/rel hardening). */
export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

/** Build a WhatsApp chat link from an Indonesian phone number (0xxx → 62xxx). */
export function whatsappLink(phone: string): string {
  const digits = phone.replace(/\D/g, "").replace(/^0/, "62");
  return `https://wa.me/${digits}`;
}

/** Build a Google Maps search link for an address. */
export function mapsLink(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
