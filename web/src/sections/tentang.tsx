import { Container } from "@/components/common/container";
import { ButtonLink } from "@/components/common/button-link";

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
              Senyum Kecil lahir pada 7 Agustus 2020 di Medan, digagas oleh empat sahabat
              yang prihatin terhadap kurang maksimalnya kondisi pendidikan di masa pandemi.
              Berbekal keprihatinan itu, mereka mulai bergerak dan mengajak teman-teman
              untuk memperluas akses bantuan pendidikan bagi anak-anak.
            </p>
            <p>
              Dengan fokus mengajar dan berbagi, program-program kami kini telah terlaksana
              di lebih dari 25 titik lokasi. Kami hadir dengan komitmen untuk terus
              mewujudkan pendidikan yang lebih baik bagi anak-anak Indonesia, dimulai dari
              Sumatera Utara.
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

        <div>
          <ButtonLink href="/tim" variant="secondary">
            Kenali tim kami
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
