/**
 * Primary navigation. The landing page is a single page; these links point at
 * section anchors via `/#id` so they scroll on the home page and navigate-then-
 * scroll from any other route (e.g. /cerita, /program/[slug]).
 */
export const NAV_ITEMS = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#program", label: "Program" },
  { href: "/#cerita", label: "Cerita" },
  { href: "/#relawan", label: "Relawan" },
  { href: "/#donasi", label: "Donasi" },
] as const;

/** Real routes (not anchors) for the sitemap. */
export const STATIC_ROUTES = ["/", "/cerita", "/tim"] as const;
