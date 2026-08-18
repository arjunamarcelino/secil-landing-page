import { Container } from "@/components/common/container";

export function Intro({ description }: { description: string }) {
  return (
    <section aria-labelledby="intro-heading" className="py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <h2
          id="intro-heading"
          className="border-l-4 border-primary pl-5 font-heading text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
        >
          Kami percaya senyum kecil hari ini adalah harapan besar esok hari.
        </h2>
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
          <p>{description}</p>
          <p>
            Berawal dari sekelompok relawan yang mengajar di akhir pekan, Senyum Kecil
            tumbuh menjadi komunitas yang menjangkau ribuan anak di berbagai penjuru Kota
            Medan. Kami berjalan bersama warga, guru, dan mitra yang percaya bahwa
            pendidikan adalah hak setiap anak.
          </p>
        </div>
      </Container>
    </section>
  );
}
