/**
 * Post-projection DOMAIN model — the single source of truth shared by GROQ
 * projection results, local fallback fixtures, and component props.
 *
 * These types describe content AFTER GROQ has dereferenced references and
 * resolved images — never a raw Sanity document (no `_ref`/`_type` internals).
 * When `sanity typegen` is adopted in a later phase, the generated types become
 * the arbiter and fixtures should be validated against them.
 */
import type { StaticImageData } from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

/** An image reference the UI can render without knowing where it came from. */
export type DomainImage =
  | { readonly kind: "sanity"; readonly source: SanityImageSource; readonly alt: string }
  | { readonly kind: "local"; readonly asset: StaticImageData; readonly alt: string };

/** A custom image block that may appear inside Portable Text content. */
export interface PortableTextImageBlock {
  readonly _type: "image";
  readonly _key: string;
  readonly image: DomainImage;
}

/** Rich text content = standard blocks plus our inline image blocks. */
export type RichText = ReadonlyArray<PortableTextBlock | PortableTextImageBlock>;

export const PROGRAM_STATUSES = ["aktif", "selesai", "akan-datang"] as const;
export type ProgramStatus = (typeof PROGRAM_STATUSES)[number];

export const PROGRAM_STATUS_LABELS: Readonly<Record<ProgramStatus, string>> = {
  aktif: "Sedang berjalan",
  selesai: "Selesai",
  "akan-datang": "Akan datang",
};

export interface Author {
  readonly name: string;
  readonly role: string;
  readonly photo: DomainImage;
  readonly bio?: string;
}

export interface Category {
  readonly title: string;
  readonly slug: string;
  readonly description?: string;
}

export interface Article {
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly coverImage: DomainImage;
  readonly content: RichText;
  readonly author: Author;
  readonly categories: readonly Category[];
  readonly publishedAt: string; // ISO date
  readonly featured: boolean;
  readonly seoTitle?: string;
  readonly seoDescription?: string;
}

export interface Program {
  readonly name: string;
  readonly slug: string;
  readonly shortDescription: string;
  readonly fullDescription: RichText;
  readonly coverImage: DomainImage;
  readonly gallery: readonly DomainImage[];
  readonly status: ProgramStatus;
  readonly startDate?: string; // ISO date
  readonly endDate?: string; // ISO date
  readonly featured: boolean;
  readonly ctaLabel?: string;
  readonly ctaUrl?: string;
}

export interface ImpactStatistic {
  readonly label: string;
  readonly value: string;
  readonly description?: string;
  readonly order: number;
}

export interface Partner {
  readonly name: string;
  readonly logo: DomainImage;
  readonly website?: string;
  readonly order: number;
}

export const TEAM_DIVISIONS = [
  "founders",
  "pengurus-inti",
  "rnd",
  "teach",
  "pr",
  "survey",
  "design",
] as const;
export type TeamDivision = (typeof TEAM_DIVISIONS)[number];

/** Display labels + order for team divisions (order = array order above). */
export const TEAM_DIVISION_LABELS: Readonly<Record<TeamDivision, string>> = {
  founders: "Founders",
  "pengurus-inti": "Pengurus Inti",
  rnd: "Research & Development",
  teach: "Teach & Materials",
  pr: "Public Relations",
  survey: "Survey Team",
  design: "Design & Documentaries",
};

export interface TeamMember {
  readonly name: string;
  readonly position: string;
  readonly division: TeamDivision;
  readonly photo?: DomainImage;
  readonly order: number;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: RichText;
  readonly order: number;
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
}

export interface ContactInfo {
  readonly email?: string;
  readonly phone?: string;
  readonly address?: string;
}

export interface DonationInfo {
  readonly bankName?: string;
  readonly accountNumber?: string;
  readonly accountHolder?: string;
  readonly note?: string;
}

export interface DefaultSeo {
  readonly title: string;
  readonly description: string;
}

/** Trademark (HKI) registration reference. */
export interface HkiInfo {
  readonly registrationNumber: string;
  readonly url: string;
}

export interface SiteSettings {
  readonly orgName: string;
  readonly description: string;
  readonly contact: ContactInfo;
  readonly socialLinks: readonly SocialLink[];
  readonly donation: DonationInfo;
  readonly defaultSeo: DefaultSeo;
  readonly hki?: HkiInfo;
}
