import type { Metadata } from "next";
import { getAllPrograms } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ProgramCard } from "@/components/common/program-card";
import { EmptyState } from "@/components/common/empty-state";
import { CTASection } from "@/components/common/cta-section";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Program",
  description:
    "Program pendidikan dan pendampingan anak yang dijalankan Senyum Kecil Medan: kelas belajar, taman baca keliling, dan lainnya.",
  alternates: { canonical: "/program" },
};

export default async function ProgramPage() {
  const programs = await getAllPrograms();

  return (
    <>
      <PageHeader
        eyebrow="Program"
        title="Program yang kami jalankan"
        description="Setiap program dirancang untuk membuka kesempatan belajar dan bermain bagi anak-anak Medan."
      />

      <section aria-label="Daftar program" className="py-16 sm:py-20">
        <Container>
          {programs.length === 0 ? (
            <EmptyState
              title="Belum ada program"
              description="Program akan tampil di sini setelah ditambahkan melalui CMS."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title="Dukung program-program ini"
        description="Kontribusimu membantu menjaga program tetap berjalan dan menjangkau lebih banyak anak."
        primary={{ href: "/donasi", label: "Dukung Senyum Mereka" }}
        secondary={{ href: "/volunteer", label: "Jadi Relawan" }}
        labelledById="program-cta"
      />
    </>
  );
}
