import { Container } from "@/components/common/container";
import { ButtonLink } from "@/components/common/button-link";
import { ResponsiveImage } from "@/components/common/responsive-image";
import { img, local } from "@/content/fallback/images";
import type { ImpactStatistic } from "@/content/types";

const heroImage = local(
  img.hero,
  "Anak-anak Senyum Kecil belajar dan bermain bersama relawan di Medan",
);

export function Hero({ topStat }: { topStat?: ImpactStatistic }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 12% 0%, var(--primary-tint) 0%, transparent 55%), radial-gradient(90% 80% at 100% 20%, var(--teal-tint) 0%, transparent 50%), var(--background)",
      }}
    >
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Komunitas untuk anak-anak Medan
          </span>
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Setiap anak berhak{" "}
            <span className="relative whitespace-nowrap text-primary">
              belajar
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-primary-bright/40"
              />
            </span>{" "}
            dan tersenyum.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Senyum Kecil Medan mendampingi pendidikan dan tumbuh kembang anak melalui
            kelas belajar, taman baca, dan kegiatan bersama relawan. Bergeraklah bersama
            kami untuk menghadirkan lebih banyak senyum.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#donasi" variant="primary" size="lg">
              Dukung Senyum Mereka
            </ButtonLink>
            <ButtonLink href="/#tentang" variant="secondary" size="lg">
              Kenali Kami
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <ResponsiveImage
            image={heroImage}
            ratio="4 / 3"
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            rounded="rounded-[2rem_2.5rem_2rem_2.75rem]"
            className="rotate-[-2deg] shadow-lg"
          />
          {topStat && (
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-surface px-5 py-3 shadow-md sm:-left-6">
              <p className="font-heading text-2xl font-bold text-primary">{topStat.value}</p>
              <p className="text-xs font-medium text-muted-foreground">{topStat.label}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
