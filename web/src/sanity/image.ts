import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "@/lib/env";

/** Lazily build the URL builder — only ever reached for Sanity-kind images. */
let cachedBuilder: ReturnType<typeof createImageUrlBuilder> | null = null;
function getBuilder() {
  if (!cachedBuilder) {
    cachedBuilder = createImageUrlBuilder({
      projectId: sanityProjectId,
      dataset: sanityDataset,
    });
  }
  return cachedBuilder;
}

/**
 * Build a Sanity CDN image URL. Only called for `DomainImage` of kind "sanity",
 * which exists exclusively when the CMS is configured — so the placeholder project
 * id is never used to produce a real URL.
 */
export function urlFor(source: SanityImageSource) {
  return getBuilder().image(source);
}
