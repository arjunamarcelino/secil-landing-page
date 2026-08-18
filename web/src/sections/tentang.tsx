import { Container } from "@/components/common/container";

const values = [
  { title: "Tulus", body: "Kami hadir dengan hati, tanpa pamrih, untuk mendampingi anak-anak bertumbuh." },
  { title: "Bersama", body: "Perubahan lahir dari gotong royong relawan, warga, guru, dan mitra." },
  { title: "Berkelanjutan", body: "Kami menjaga kepercayaan melalui program yang konsisten dan transparan." },
];

export function Tentang({ description }: { description: string }) {
  return (
    <section id="tentang" aria-labelledby="tentang-heading" className="py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2
            id="tentang-heading"
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
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-primary">{value.title}</h3>
              <p className="text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
