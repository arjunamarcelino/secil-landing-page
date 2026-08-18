import type { Metadata } from "next";
import { getAllArticles } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ArticleCard } from "@/components/common/article-card";
import { SectionHeading } from "@/components/common/section-heading";
import { EmptyState } from "@/components/common/empty-state";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Cerita",
  description:
    "Kisah dampak, cerita relawan, dan artikel dari kegiatan Senyum Kecil Medan bersama anak-anak.",
  alternates: { canonical: "/cerita" },
};

export default async function CeritaPage() {
  const articles = await getAllArticles();
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => a !== featured);

  return (
    <>
      <PageHeader
        eyebrow="Cerita"
        title="Kisah dari lapangan"
        description="Cerita kecil yang mengingatkan kami mengapa pekerjaan ini penting."
      />

      <Container className="py-16 sm:py-20">
        {articles.length === 0 ? (
          <EmptyState
            title="Belum ada cerita"
            description="Cerita dan artikel akan tampil di sini setelah dipublikasikan."
          />
        ) : (
          <div className="flex flex-col gap-14">
            {featured && (
              <section aria-labelledby="cerita-pilihan" className="flex flex-col gap-6">
                <SectionHeading id="cerita-pilihan" eyebrow="Cerita Pilihan" title="Sorotan" />
                <ArticleCard article={featured} lead sizes="(min-width: 640px) 90vw, 100vw" />
              </section>
            )}
            <section aria-labelledby="semua-cerita" className="flex flex-col gap-6">
              <SectionHeading id="semua-cerita" title="Semua cerita" as="h2" />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          </div>
        )}
      </Container>
    </>
  );
}
