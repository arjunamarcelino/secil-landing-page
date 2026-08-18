import type { Metadata } from "next";
import { HeartHandshake, BookOpen, Users, Megaphone } from "lucide-react";
import { getSiteSettings } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ButtonLink } from "@/components/common/button-link";
import { ExternalLink } from "@/components/common/external-link";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Relawan",
  description:
    "Jadi relawan Senyum Kecil Medan. Dampingi anak-anak belajar, berbagi keterampilan, dan bantu menyebarkan kebaikan.",
  alternates: { canonical: "/volunteer" },
};

const roles = [
  { icon: BookOpen, title: "Pendamping Belajar", body: "Menemani anak-anak membaca dan belajar di kelas mingguan." },
  { icon: Users, title: "Fasilitator Kegiatan", body: "Membantu menyiapkan dan memandu kegiatan bersama komunitas." },
  { icon: Megaphone, title: "Relawan Media", body: "Mendokumentasikan cerita dan mengelola media sosial komunitas." },
  { icon: HeartHandshake, title: "Relawan Dukungan", body: "Membantu logistik, penggalangan buku, dan kebutuhan program." },
];

export default async function VolunteerPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHeader
        eyebrow="Relawan"
        title="Jadi bagian dari senyum mereka"
        description="Kamu tidak perlu keahlian khusus—cukup kesediaan hadir dan mendampingi. Bersama, kita bisa membuka lebih banyak kesempatan belajar."
      />

      <section aria-labelledby="peran-relawan" className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <h2 id="peran-relawan" className="font-heading text-3xl font-semibold text-foreground">
            Cara kamu bisa membantu
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-tint text-teal">
                  <role.icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{role.title}</h3>
                  <p className="text-muted-foreground">{role.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="daftar-relawan" className="bg-surface-sunken py-16 sm:py-20">
        <Container className="flex max-w-2xl flex-col items-start gap-5">
          <h2 id="daftar-relawan" className="font-heading text-3xl font-semibold text-foreground">
            Siap bergabung?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hubungi kami melalui surel atau pesan langsung di Instagram. Ceritakan sedikit tentang
            dirimu dan waktu yang bisa kamu luangkan—tim kami akan menghubungimu kembali.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {settings.contact.email && (
              <ButtonLink href={`mailto:${settings.contact.email}`} variant="teal" size="lg">
                Kirim surel
              </ButtonLink>
            )}
            {settings.socialLinks[0] && (
              <ExternalLink
                href={settings.socialLinks[0].url}
                className="inline-flex items-center font-medium"
              >
                Pesan lewat Instagram
              </ExternalLink>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
