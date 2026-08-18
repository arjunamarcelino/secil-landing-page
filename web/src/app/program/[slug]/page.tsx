import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { getProgramBySlug, getProgramSlugs } from "@/content/data";
import { PROGRAM_STATUS_LABELS } from "@/content/types";
import { Container } from "@/components/common/container";
import { ResponsiveImage } from "@/components/common/responsive-image";
import { PortableTextRenderer } from "@/components/common/portable-text";
import { ButtonLink } from "@/components/common/button-link";
import { openGraphImage } from "@/lib/og";
import { formatDate } from "@/lib/utils";

export const dynamic = "error";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const slugs = await getProgramSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.shortDescription,
    alternates: { canonical: `/program/${program.slug}` },
    openGraph: {
      title: program.name,
      description: program.shortDescription,
      url: `/program/${program.slug}`,
      images: [openGraphImage(program.coverImage)],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) notFound();

  const dateRange = [program.startDate, program.endDate]
    .filter(Boolean)
    .map((d) => formatDate(d as string))
    .join(" – ");

  return (
    <article className="py-12 sm:py-16">
      <Container className="flex max-w-3xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary-tint px-3 py-1 text-sm font-medium text-primary">
            {PROGRAM_STATUS_LABELS[program.status]}
          </span>
          {dateRange && (
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="size-4" aria-hidden />
              {dateRange}
            </span>
          )}
        </div>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {program.name}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {program.shortDescription}
        </p>
      </Container>

      <Container className="mt-8 max-w-4xl">
        <ResponsiveImage
          image={program.coverImage}
          ratio="16 / 9"
          priority
          sizes="(min-width: 896px) 56rem, 100vw"
        />
      </Container>

      <Container className="mt-10 max-w-3xl">
        <PortableTextRenderer value={program.fullDescription} />
      </Container>

      {program.gallery.length > 0 && (
        <Container className="mt-12 max-w-4xl">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">Galeri</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.gallery.map((image, i) => (
              <ResponsiveImage
                key={i}
                image={image}
                ratio="4 / 3"
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                rounded="rounded-xl"
              />
            ))}
          </div>
        </Container>
      )}

      {program.ctaLabel && program.ctaUrl && (
        <Container className="mt-12 max-w-3xl">
          <ButtonLink href={program.ctaUrl} variant="primary" size="lg">
            {program.ctaLabel}
          </ButtonLink>
        </Container>
      )}
    </article>
  );
}
