import type { SchemaTypeDefinition } from "sanity";

import { seo } from "./objects/seo";
import { article } from "./documents/article";
import { program } from "./documents/program";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { impactStatistic } from "./documents/impactStatistic";
import { partner } from "./documents/partner";
import { transparencyReport } from "./documents/transparencyReport";
import { siteSettings } from "./documents/siteSettings";

/** Document types that exist as a single editable document (no create/delete). */
export const SINGLETON_TYPES = new Set(["siteSettings"]);

export const schemaTypes: SchemaTypeDefinition[] = [
  // objects
  seo,
  // documents
  article,
  program,
  author,
  category,
  impactStatistic,
  partner,
  transparencyReport,
  siteSettings,
];
