import Image from "next/image";
import type { GalleryPhoto } from "@/content/types";
import { urlFor } from "@/sanity/image";

/** Full-bleed photo band used as a visual break between sections. */
export function PhotoBand({ photo }: { photo?: GalleryPhoto }) {
  if (!photo) return null;
  const { image } = photo;

  return (
    <section
      aria-label="Dokumentasi kegiatan Senyum Kecil"
      className="relative h-60 w-full overflow-hidden sm:h-80 lg:h-[26rem]"
    >
      {image.kind === "local" ? (
        <Image
          src={image.asset}
          alt={image.alt}
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
      ) : (
        <Image
          src={urlFor(image.source).width(2000).auto("format").url()}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/5 to-transparent" />
      {photo.caption && (
        <div className="absolute bottom-5 left-0 w-full">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-medium text-white drop-shadow-sm">{photo.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
