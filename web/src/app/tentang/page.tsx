import type { Metadata } from "next";
import { getImpactStatistics, getSiteSettings } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ImpactStat } from "@/components/common/impact-stat";
import { CTASection } from "@/components/common/cta-section";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Senyum Kecil Medan — komunitas sosial yang mendampingi pendidikan dan tumbuh kembang anak-anak di Kota Medan.",
  alternates: { canonical: "/tentang" },
};

const values = [
  {
    title: "Tulus",
    body: "Kami hadir dengan hati, tanpa pamrih, untuk mendampingi anak-anak bertumbuh.",
  },
  {
    title: "Bersama",
    body: "Perubahan lahir dari gotong royong relawan, warga, guru, dan mitra.",
  },
  {
    title: "Berkelanjutan",
    body: "Kami menjaga kepercayaan melalui program yang konsisten dan transparan.",
  },
];

export default async function TentangPage() {
  const [settings, statistics] = await Promise.all([
    getSiteSettings(),
    getImpactStatistics(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Menemani anak-anak Medan bertumbuh dengan gembira"
        description={settings.description}
      />

      <section aria-labelledby="cerita-kami" className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 id="cerita-kami" className="font-heading text-3xl font-semibold text-foreground">
            Cerita kami
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Senyum Kecil Medan berawal dari sekelompok relawan yang rutin mengajar anak-anak
              di akhir pekan. Dari satu titik belajar sederhana, kami tumbuh menjadi komunitas
              yang menjangkau ribuan anak di berbagai penjuru Kota Medan.
            </p>
            <p>
              Kami percaya bahwa pendidikan adalah hak setiap anak. Melalui kelas belajar,
              taman baca keliling, dan kegiatan bersama, kami berupaya membuka lebih banyak
              kesempatan bagi anak-anak untuk belajar, bermain, dan bermimpi.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="nilai-kami" className="bg-surface-sunken py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <h2 id="nilai-kami" className="font-heading text-3xl font-semibold text-foreground">
            Nilai yang kami pegang
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {statistics.length > 0 && (
        <section aria-labelledby="dampak-kami" className="py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <h2 id="dampak-kami" className="font-heading text-3xl font-semibold text-foreground">
              Dampak sejauh ini
            </h2>
            <div className="grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((stat) => (
                <ImpactStat key={stat.label} stat={stat} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Mari bertumbuh bersama kami"
        description="Jadilah bagian dari perjalanan Senyum Kecil, baik sebagai relawan maupun donatur."
        primary={{ href: "/volunteer", label: "Jadi Relawan" }}
        secondary={{ href: "/donasi", label: "Dukung Senyum Mereka" }}
        tone="tint"
        labelledById="tentang-cta"
      />
    </>
  );
}
