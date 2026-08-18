import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProgramCard } from "@/components/common/program-card";
import { ButtonLink } from "@/components/common/button-link";
import { EmptyState } from "@/components/common/empty-state";
import type { Program } from "@/content/types";

/** Editorial mosaic: first program is a wide feature, the rest sit beside it. */
export function FeaturedPrograms({ programs }: { programs: readonly Program[] }) {
  const [lead, ...rest] = programs;

  return (
    <section aria-labelledby="programs-heading" className="bg-surface-sunken py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="programs-heading"
            eyebrow="Program Kami"
            title="Kegiatan yang sedang kami jalankan"
          />
          <ButtonLink href="/program" variant="secondary">
            Lihat semua program
          </ButtonLink>
        </div>

        {programs.length === 0 ? (
          <EmptyState
            title="Belum ada program unggulan"
            description="Program akan tampil di sini setelah ditambahkan."
          />
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {lead && (
              <ProgramCard
                program={lead}
                featured
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {rest.map((program) => (
                <ProgramCard
                  key={program.slug}
                  program={program}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
