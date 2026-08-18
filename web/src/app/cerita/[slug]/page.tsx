import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleSlugs } from "@/content/data";
import { Container } from "@/components/common/container";
import { ResponsiveImage } from "@/components/common/responsive-image";
import { PortableTextRenderer } from "@/components/common/portable-text";
import { openGraphImage } from "@/lib/og";
import { formatDate } from "@/lib/utils";

export const dynamic = "error";
export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;
  return {
    title: article.title,
    description,
    alternates: { canonical: `/cerita/${article.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/cerita/${article.slug}`,
      publishedTime: article.publishedAt,
      images: [openGraphImage(article.coverImage)],
    },
  };
}

export default async function CeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="py-12 sm:py-16">
      <Container className="flex max-w-3xl flex-col gap-5">
        {article.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {article.categories.map((c) => (
              <span
                key={c.slug}
                className="rounded-full bg-teal-tint px-2.5 py-0.5 text-xs font-medium text-teal"
              >
                {c.title}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {article.title}
        </h1>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{article.author.name}</span>
          <span aria-hidden>·</span>
          <span>{article.author.role}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
      </Container>

      <Container className="mt-8 max-w-4xl">
        <ResponsiveImage
          image={article.coverImage}
          ratio="16 / 9"
          priority
          sizes="(min-width: 896px) 56rem, 100vw"
        />
      </Container>

      <Container className="mt-10 max-w-3xl">
        <PortableTextRenderer value={article.content} />
      </Container>

      {article.author.bio && (
        <Container className="mt-14 max-w-3xl">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
              <ResponsiveImage
                image={article.author.photo}
                ratio="1 / 1"
                sizes="64px"
                rounded="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-heading font-semibold text-foreground">{article.author.name}</p>
              <p className="text-sm font-medium text-primary">{article.author.role}</p>
              <p className="text-sm text-muted-foreground">{article.author.bio}</p>
            </div>
          </div>
        </Container>
      )}
    </article>
  );
}
