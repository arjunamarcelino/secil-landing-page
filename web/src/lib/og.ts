import type { DomainImage } from "@/content/types";
import { urlFor } from "@/sanity/image";

/**
 * Build an OpenGraph image descriptor from a DomainImage. Local (fallback) images
 * expose their bundled path + intrinsic size; Sanity images are resolved to a
 * 1200×630 CDN URL. `metadataBase` makes the relative local path absolute.
 */
export function openGraphImage(
  image: DomainImage,
): { url: string; width: number; height: number; alt: string } {
  if (image.kind === "local") {
    return {
      url: image.asset.src,
      width: image.asset.width,
      height: image.asset.height,
      alt: image.alt,
    };
  }
  return {
    url: urlFor(image.source).width(1200).height(630).fit("crop").url(),
    width: 1200,
    height: 630,
    alt: image.alt,
  };
}
