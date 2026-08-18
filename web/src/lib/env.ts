/**
 * Centralised, non-throwing environment access.
 *
 * Nothing here throws at module scope — a missing Sanity project simply puts the
 * site into "placeholder mode", where every data function returns local fallback
 * content. This is what lets the whole site render and build with no CMS.
 */

const PLACEHOLDER_PROJECT_ID = "your_project_id";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-03-01";

/**
 * Sanity is considered configured only when a real project id is present.
 * The dummy value shipped in `.env.example` is treated as placeholder mode so a
 * syntactically valid dummy id never triggers a network call at build time.
 */
export const isSanityConfigured = Boolean(
  sanityProjectId && sanityDataset && sanityProjectId !== PLACEHOLDER_PROJECT_ID,
);

/** Absolute site origin used for metadata, canonical URLs, sitemap and robots. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Build an absolute URL from a root-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
