import { defineQuery } from "next-sanity";

/*
  Explicit projections only (never a bare `*[_type==...]`) so raw Sanity internals
  never leak into the domain model. Reference fields are dereferenced and empty
  arrays coalesced, so results mirror the fallback fixture shapes field-for-field.
*/

const imageProjection = `{ "ref": asset, "alt": coalesce(alt, "") }`;

const authorProjection = `{
  name, role, "bio": bio,
  "photo": photo${imageProjection}
}`;

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  orgName, description,
  contact, socialLinks, donation, defaultSeo
}`);

export const programCardFields = `{
  name, "slug": slug.current, shortDescription, status, featured,
  startDate, endDate, ctaLabel, ctaUrl,
  "coverImage": coverImage${imageProjection}
}`;

export const allProgramsQuery = defineQuery(
  `*[_type == "program"] | order(featured desc, startDate desc) ${programCardFields}`,
);

export const featuredProgramsQuery = defineQuery(
  `*[_type == "program" && featured == true] | order(startDate desc)[0...3] ${programCardFields}`,
);

export const programBySlugQuery = defineQuery(`*[_type == "program" && slug.current == $slug][0]{
  name, "slug": slug.current, shortDescription, fullDescription, status, featured,
  startDate, endDate, ctaLabel, ctaUrl,
  "coverImage": coverImage${imageProjection},
  "gallery": coalesce(gallery[]${imageProjection}, [])
}`);

export const programSlugsQuery = defineQuery(
  `*[_type == "program" && defined(slug.current)]{ "slug": slug.current }`,
);

const articleCardFields = `{
  title, "slug": slug.current, excerpt, publishedAt, featured,
  "coverImage": coverImage${imageProjection},
  "author": author->${authorProjection},
  "categories": coalesce(categories[]->{ title, "slug": slug.current, description }, [])
}`;

export const allArticlesQuery = defineQuery(
  `*[_type == "article"] | order(publishedAt desc) ${articleCardFields}`,
);

export const latestArticlesQuery = defineQuery(
  `*[_type == "article"] | order(publishedAt desc)[0...$limit] ${articleCardFields}`,
);

export const articleBySlugQuery = defineQuery(`*[_type == "article" && slug.current == $slug][0]{
  title, "slug": slug.current, excerpt, publishedAt, featured,
  "seoTitle": seo.title, "seoDescription": seo.description,
  content,
  "coverImage": coverImage${imageProjection},
  "author": author->${authorProjection},
  "categories": coalesce(categories[]->{ title, "slug": slug.current, description }, [])
}`);

export const articleSlugsQuery = defineQuery(
  `*[_type == "article" && defined(slug.current)]{ "slug": slug.current }`,
);

export const impactStatisticsQuery = defineQuery(
  `*[_type == "impactStatistic"] | order(order asc){ label, value, description, order }`,
);

export const partnersQuery = defineQuery(
  `*[_type == "partner"] | order(order asc){ name, website, order, "logo": logo${imageProjection} }`,
);

export const transparencyReportsQuery = defineQuery(
  `*[_type == "transparencyReport"] | order(year desc, publishedAt desc){
    title, year, description, publishedAt, "fileUrl": file.asset->url, externalUrl
  }`,
);
