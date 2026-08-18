import { Landmark } from "lucide-react";
import { Container } from "@/components/common/container";
import type { SiteSettings } from "@/content/types";

const impactPoints = [
  "Sandang & pangan — disalurkan langsung kepada teman-teman yang membutuhkan.",
  "Donasi uang — dibelanjakan menjadi paket makanan, dibagikan tiap Jumat di jalanan Medan.",
  "Dukungan program — membantu Senyum Mengajar, Pendidikan, dan Rekreasi terus berjalan.",
];

export function Donasi({ donation }: { donation: SiteSettings["donation"] }) {
  return (
    <section id="donasi" aria-labelledby="donasi-heading" className="py-16 sm:py-20">
      <Container className="reveal">
        <div className="grid gap-10 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">
              Donasi
            </span>
            <h2 id="donasi-heading" className="font-heading text-3xl font-semibold sm:text-4xl">
              Dukung senyum mereka
            </h2>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Melalui Senyum Berbagi, kami mengumpulkan donasi materi—sandang, pangan, dan
              uang—setiap bulan untuk mereka yang membutuhkan. Donasi uang dapat disalurkan
              melalui transfer bank ke rekening resmi kami.
            </p>
            <ul className="flex flex-col gap-2">
              {impactPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-primary-foreground/90">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary-foreground/70" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-surface p-6 text-foreground">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary-tint text-primary">
              <Landmark className="size-5" aria-hidden />
            </span>
            <dl className="flex flex-col gap-3">
              <div className="flex flex-col">
                <dt className="text-sm text-muted-foreground">Bank</dt>
                <dd className="font-medium">{donation.bankName}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-muted-foreground">Nomor Rekening</dt>
                <dd className="font-mono text-lg font-semibold">{donation.accountNumber}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-muted-foreground">Atas Nama</dt>
                <dd className="font-medium">{donation.accountHolder}</dd>
              </div>
            </dl>
            {donation.note && (
              <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">{donation.note}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
