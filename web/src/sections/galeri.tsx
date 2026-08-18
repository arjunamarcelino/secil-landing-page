import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ResponsiveImage } from "@/components/common/responsive-image";
import type { GalleryPhoto } from "@/content/types";

/** Event/activity photo gallery — a responsive mosaic grid. */
export function Galeri({ photos }: { photos: readonly GalleryPhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <section id="galeri" aria-labelledby="galeri-heading" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id="galeri-heading"
          eyebrow="Galeri Kegiatan"
          title="Momen dari lapangan"
          description="Dokumentasi kegiatan dan event Senyum Kecil bersama anak-anak dan relawan."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {photos.map((photo, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border"
            >
              <ResponsiveImage
                image={photo.image}
                ratio="4 / 3"
                sizes="(min-width: 640px) 33vw, 50vw"
                rounded="rounded-none"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              {photo.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/65 to-transparent p-3 text-sm font-medium text-white">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
