import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/env";
import { STATIC_ROUTES } from "@/lib/site";
import { getArticleSlugs, getProgramSlugs } from "@/content/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [programSlugs, articleSlugs] = await Promise.all([
    getProgramSlugs(),
    getArticleSlugs(),
  ]);
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const programEntries: MetadataRoute.Sitemap = programSlugs.map((slug) => ({
    url: absoluteUrl(`/program/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: absoluteUrl(`/cerita/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...programEntries, ...articleEntries];
}
