import type { Metadata } from "next";
import { Landmark, Copy } from "lucide-react";
import { getSiteSettings } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Dukung pendidikan anak-anak Medan. Donasimu membantu menghadirkan buku, kelas belajar, dan pendampingan.",
  alternates: { canonical: "/donasi" },
};

const impactPoints = [
  "Rp50.000 — satu paket buku bacaan untuk taman baca keliling.",
  "Rp150.000 — perlengkapan belajar untuk satu kelas mingguan.",
  "Rp500.000 — mendukung satu titik kegiatan selama sebulan.",
];

export default async function DonasiPage() {
  const settings = await getSiteSettings();
  const { donation } = settings;

  return (
    <>
      <PageHeader
        eyebrow="Donasi"
        title="Dukung senyum mereka"
        description="Setiap kontribusi—sekecil apa pun—menjadi kesempatan belajar bagi anak-anak Medan."
      />

      <section aria-labelledby="cara-donasi" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 id="cara-donasi" className="font-heading text-3xl font-semibold text-foreground">
              Salurkan donasimu
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Donasi dapat disalurkan melalui transfer bank ke rekening resmi Senyum Kecil Medan
              berikut ini.
            </p>

            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-tint text-primary">
                <Landmark className="size-5" aria-hidden />
              </span>
              <dl className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <dt className="text-sm text-muted-foreground">Bank</dt>
                  <dd className="font-medium text-foreground">{donation.bankName}</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm text-muted-foreground">Nomor Rekening</dt>
                  <dd className="flex items-center gap-2 font-mono text-lg font-semibold text-foreground">
                    {donation.accountNumber}
                    <Copy className="size-4 text-muted-foreground" aria-hidden />
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm text-muted-foreground">Atas Nama</dt>
                  <dd className="font-medium text-foreground">{donation.accountHolder}</dd>
                </div>
              </dl>
              {donation.note && (
                <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
                  {donation.note}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Kemana donasimu pergi
            </h2>
            <ul className="flex flex-col gap-3">
              {impactPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-muted-foreground"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              Ingin memastikan penggunaan donasi? Lihat{" "}
              <a href="/transparansi" className="font-medium text-teal underline underline-offset-4">
                laporan transparansi
              </a>{" "}
              kami.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
