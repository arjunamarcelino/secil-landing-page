import { Container } from "@/components/common/container";
import { ButtonLink } from "@/components/common/button-link";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <span className="font-heading text-6xl font-bold text-primary">404</span>
      <h1 className="font-heading text-3xl font-semibold text-foreground">
        Halaman tidak ditemukan
      </h1>
      <p className="max-w-md text-muted-foreground">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan. Mari kembali dan
        jelajahi cerita serta program kami.
      </p>
      <ButtonLink href="/" variant="primary" size="lg">
        Kembali ke beranda
      </ButtonLink>
    </Container>
  );
}
