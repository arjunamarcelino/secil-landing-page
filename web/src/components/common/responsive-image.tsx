import Image from "next/image";
import type { DomainImage } from "@/content/types";
import { urlFor } from "@/sanity/image";
import { cn } from "@/lib/utils";

/**
 * Renders a DomainImage with no layout shift. The parent locks an aspect ratio
 * and the image fills it. Local (fallback) images ship with intrinsic dimensions
 * and a blur placeholder for free; Sanity images resolve through the CDN builder.
 * Never emits an empty `src`.
 */
export function ResponsiveImage({
  image,
  ratio = "4 / 3",
  sizes = "100vw",
  priority = false,
  className,
  rounded = "rounded-2xl",
}: {
  image: DomainImage;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  rounded?: string;
}) {
  const common = {
    fill: true,
    sizes,
    priority,
    className: "object-cover",
  } as const;

  return (
    <div
      className={cn("relative overflow-hidden bg-surface-sunken", rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      {image.kind === "local" ? (
        <Image {...common} alt={image.alt} src={image.asset} placeholder="blur" />
      ) : (
        <Image
          {...common}
          alt={image.alt}
          src={urlFor(image.source).width(1600).auto("format").url()}
        />
      )}
    </div>
  );
}
