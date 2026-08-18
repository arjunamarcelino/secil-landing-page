import Link from "next/link";
import type { Article } from "@/content/types";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { ResponsiveImage } from "./responsive-image";

/** Article/story card. `lead` renders a larger cover for the top story. */
export function ArticleCard({
  article,
  lead = false,
  sizes,
}: {
  article: Article;
  lead?: boolean;
  sizes?: string;
}) {
  return (
    <article className="group relative flex flex-col gap-4">
      <ResponsiveImage
        image={article.coverImage}
        ratio={lead ? "16 / 9" : "3 / 2"}
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
      />
      <div className="flex flex-col gap-2">
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
        <h3
          className={cn(
            "font-heading font-semibold text-foreground",
            lead ? "text-2xl sm:text-3xl" : "text-lg",
          )}
        >
          <Link href={`/cerita/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p className="text-muted-foreground">{article.excerpt}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{article.author.name}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </p>
      </div>
    </article>
  );
}
