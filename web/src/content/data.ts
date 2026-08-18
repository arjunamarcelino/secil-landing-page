import "server-only";
import { cache } from "react";
import { isSanityConfigured, sanityFetch } from "@/sanity/client";
import type { SanityImageSource } from "@sanity/image-url";
import * as q from "@/sanity/queries";
import type {
  Article,
  Author,
  Category,
  DomainImage,
  ImpactStatistic,
  Partner,
  Program,
  ProgramStatus,
  RichText,
  SiteSettings,
  TeamDivision,
  TeamMember,
} from "@/content/types";

import { siteSettings } from "./fallback/site-settings";
import { programs } from "./fallback/programs";
import { articles } from "./fallback/articles";
import { statistics } from "./fallback/statistics";
import { partners } from "./fallback/partners";
import { team } from "./fallback/team";

/*
  The seam. Each function returns local fallback content when Sanity is not
  configured, otherwise fetches + maps the projection into the domain model.
  Presentation components never learn which branch produced the data.
*/

// --- raw projection shapes (only used when Sanity IS configured) -------------
interface RawImage {
  ref: SanityImageSource | null;
  alt: string;
}
interface RawAuthor {
  name: string;
  role: string;
  bio?: string;
  photo: RawImage;
}
interface RawCategory {
  title: string;
  slug: string;
  description?: string;
}
interface RawProgram {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription?: RichText;
  status: ProgramStatus;
  featured: boolean;
  startDate?: string;
  endDate?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  coverImage: RawImage;
  gallery?: RawImage[];
}
interface RawArticle {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content?: RichText;
  coverImage: RawImage;
  author: RawAuthor;
  categories: RawCategory[];
}
// --- mappers ------------------------------------------------------------------
function toImage(raw: RawImage, fallbackAlt = ""): DomainImage {
  return { kind: "sanity", source: raw.ref as SanityImageSource, alt: raw.alt || fallbackAlt };
}
function toAuthor(raw: RawAuthor): Author {
  return {
    name: raw.name,
    role: raw.role,
    bio: raw.bio,
    photo: toImage(raw.photo, raw.name),
  };
}
function toProgram(raw: RawProgram): Program {
  return {
    name: raw.name,
    slug: raw.slug,
    shortDescription: raw.shortDescription,
    fullDescription: raw.fullDescription ?? [],
    coverImage: toImage(raw.coverImage, raw.name),
    gallery: (raw.gallery ?? []).map((g) => toImage(g, raw.name)),
    status: raw.status,
    startDate: raw.startDate,
    endDate: raw.endDate,
    featured: raw.featured,
    ctaLabel: raw.ctaLabel,
    ctaUrl: raw.ctaUrl,
  };
}
function toArticle(raw: RawArticle): Article {
  return {
    title: raw.title,
    slug: raw.slug,
    excerpt: raw.excerpt,
    coverImage: toImage(raw.coverImage, raw.title),
    content: raw.content ?? [],
    author: toAuthor(raw.author),
    categories: raw.categories as readonly Category[],
    publishedAt: raw.publishedAt,
    featured: raw.featured,
    seoTitle: raw.seoTitle,
    seoDescription: raw.seoDescription,
  };
}
// --- public data functions ----------------------------------------------------
export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  if (!isSanityConfigured) return siteSettings;
  const raw = await sanityFetch<SiteSettings | null>(q.siteSettingsQuery, {}, { tags: ["siteSettings"] });
  return raw ?? siteSettings;
});

export async function getFeaturedPrograms(): Promise<readonly Program[]> {
  if (!isSanityConfigured) return programs.filter((p) => p.featured).slice(0, 3);
  const raw = await sanityFetch<RawProgram[]>(q.featuredProgramsQuery, {}, { tags: ["program"] });
  return raw.map(toProgram);
}

export async function getAllPrograms(): Promise<readonly Program[]> {
  if (!isSanityConfigured) return programs;
  const raw = await sanityFetch<RawProgram[]>(q.allProgramsQuery, {}, { tags: ["program"] });
  return raw.map(toProgram);
}

export const getProgramBySlug = cache(async (slug: string): Promise<Program | null> => {
  if (!isSanityConfigured) return programs.find((p) => p.slug === slug) ?? null;
  const raw = await sanityFetch<RawProgram | null>(q.programBySlugQuery, { slug }, { tags: ["program", slug] });
  return raw ? toProgram(raw) : null;
});

export async function getProgramSlugs(): Promise<readonly string[]> {
  if (!isSanityConfigured) return programs.map((p) => p.slug);
  const raw = await sanityFetch<{ slug: string }[]>(q.programSlugsQuery, {}, { tags: ["program"] });
  return raw.map((r) => r.slug);
}

export async function getLatestArticles(limit = 3): Promise<readonly Article[]> {
  if (!isSanityConfigured) return articles.slice(0, limit);
  const raw = await sanityFetch<RawArticle[]>(q.latestArticlesQuery, {}, { tags: ["article"] });
  return raw.map(toArticle).slice(0, limit);
}

export async function getAllArticles(): Promise<readonly Article[]> {
  if (!isSanityConfigured) return articles;
  const raw = await sanityFetch<RawArticle[]>(q.allArticlesQuery, {}, { tags: ["article"] });
  return raw.map(toArticle);
}

export const getArticleBySlug = cache(async (slug: string): Promise<Article | null> => {
  if (!isSanityConfigured) return articles.find((a) => a.slug === slug) ?? null;
  const raw = await sanityFetch<RawArticle | null>(q.articleBySlugQuery, { slug }, { tags: ["article", slug] });
  return raw ? toArticle(raw) : null;
});

export async function getArticleSlugs(): Promise<readonly string[]> {
  if (!isSanityConfigured) return articles.map((a) => a.slug);
  const raw = await sanityFetch<{ slug: string }[]>(q.articleSlugsQuery, {}, { tags: ["article"] });
  return raw.map((r) => r.slug);
}

export async function getImpactStatistics(): Promise<readonly ImpactStatistic[]> {
  if (!isSanityConfigured) return statistics;
  return sanityFetch<ImpactStatistic[]>(q.impactStatisticsQuery, {}, { tags: ["impactStatistic"] });
}

export async function getPartners(): Promise<readonly Partner[]> {
  if (!isSanityConfigured) return partners;
  const raw = await sanityFetch<{ name: string; website?: string; order: number; logo: RawImage }[]>(
    q.partnersQuery,
    {},
    { tags: ["partner"] },
  );
  return raw.map((p) => ({ name: p.name, website: p.website, order: p.order, logo: toImage(p.logo, p.name) }));
}

interface RawTeamMember {
  name: string;
  position: string;
  division: TeamDivision;
  order: number;
  photo: RawImage | null;
}

export async function getTeamMembers(): Promise<readonly TeamMember[]> {
  if (!isSanityConfigured) return team;
  const raw = await sanityFetch<RawTeamMember[]>(q.teamMembersQuery, {}, { tags: ["teamMember"] });
  return raw.map((m) => ({
    name: m.name,
    position: m.position,
    division: m.division,
    order: m.order,
    photo: m.photo?.ref ? toImage(m.photo, m.name) : undefined,
  }));
}
