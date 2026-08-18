/** Primary navigation — shared by header, mobile nav, footer and sitemap. */
export const NAV_ITEMS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/program", label: "Program" },
  { href: "/cerita", label: "Cerita" },
  { href: "/transparansi", label: "Transparansi" },
  { href: "/volunteer", label: "Relawan" },
  { href: "/donasi", label: "Donasi" },
] as const;

/** Static routes (no dynamic slug) for the sitemap. */
export const STATIC_ROUTES = [
  "/",
  "/tentang",
  "/program",
  "/cerita",
  "/transparansi",
  "/volunteer",
  "/donasi",
] as const;
