import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ArticleCard } from "@/components/common/article-card";
import { ButtonLink } from "@/components/common/button-link";
import { EmptyState } from "@/components/common/empty-state";
import type { Article } from "@/content/types";

/** Magazine layout: one lead story, remaining stories in a side column. */
export function LatestStories({ articles }: { articles: readonly Article[] }) {
  const [lead, ...rest] = articles;

  return (
    <section id="cerita" aria-labelledby="stories-heading" className="bg-surface-sunken py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="stories-heading"
            eyebrow="Cerita Terbaru"
            title="Kisah dampak dari lapangan"
          />
          <ButtonLink href="/cerita" variant="secondary">
            Cerita Lainnya
          </ButtonLink>
        </div>

        {articles.length === 0 ? (
          <EmptyState
            title="Belum ada cerita"
            description="Cerita dan artikel akan tampil di sini setelah dipublikasikan."
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {lead && (
              <ArticleCard article={lead} lead sizes="(min-width: 1024px) 45vw, 100vw" />
            )}
            <div className="flex flex-col gap-8">
              {rest.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
