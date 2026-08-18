import { Container } from "@/components/common/container";
import { ButtonLink } from "@/components/common/button-link";
import { ExternalLink } from "@/components/common/external-link";
import { ResponsiveImage } from "@/components/common/responsive-image";
import { img, local } from "@/content/fallback/images";

const volunteerImage = local(
  img.gallery1,
  "Relawan Senyum Kecil mendampingi anak-anak dalam kegiatan belajar",
);

export function VolunteerInvite({
  email,
  instagramUrl,
}: {
  email?: string;
  instagramUrl?: string;
}) {
  return (
    <section id="relawan" aria-labelledby="volunteer-heading" className="py-16 sm:py-20">
      <Container className="reveal grid items-center gap-10 md:grid-cols-2">
        <ResponsiveImage
          image={volunteerImage}
          ratio="4 / 3"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
            Jadi Relawan
          </span>
          <h2
            id="volunteer-heading"
            className="font-heading text-3xl font-semibold text-foreground sm:text-4xl"
          >
            Jadi bagian dari senyum mereka
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Kamu tidak perlu keahlian khusus untuk membuat perbedaan. Cukup hadir,
            mendampingi, dan berbagi waktu. Ceritakan sedikit tentang dirimu dan waktu yang
            bisa kamu luangkan—tim kami akan menghubungimu kembali.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {email && (
              <ButtonLink href={`mailto:${email}`} variant="teal" size="lg">
                Gabung jadi relawan
              </ButtonLink>
            )}
            {instagramUrl && (
              <ExternalLink href={instagramUrl} className="inline-flex items-center font-medium">
                Pesan lewat Instagram
              </ExternalLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
