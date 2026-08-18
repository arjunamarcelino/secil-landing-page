# Senyum Kecil Medan — Website

Foundation for the **Senyum Kecil Medan** website — a social community focused on
education, children, and positive social impact in Medan. The site is a single-page
landing (navigation scrolls to sections) plus a blog/report list and detail pages. It
reads content from a standalone Sanity Studio, but renders **fully from local fallback
content** when Sanity is not yet configured.

Instagram: https://www.instagram.com/senyumkecil.mdn/

## Tech stack

- **Next.js 16** (App Router, `src/` dir, TypeScript strict) — server components by default
- **Tailwind CSS v4** (CSS-first theme tokens) + **shadcn/ui** (Base UI) + **Lucide** icons
- **Sanity CMS** (standalone Studio) with **Portable Text**
- **next-sanity** + **@sanity/image-url** for typed content fetching and images
- **Playwright** for smoke tests
- **pnpm** as the package manager

## Repository layout

```
secil-landing-page/
├── web/      # Next.js public website (works on fallback data with no CMS)
├── studio/   # Standalone Sanity Studio (content editing)
├── docs/     # Brainstorm & plan documents (git-ignored)
└── .nvmrc    # Node 20 (Node ≥ 20 required)
```

`web/` and `studio/` are independent packages with their own `package.json` and pnpm
lockfile (no workspaces). Run each from its own directory.

## Pages

- `/` — single-page landing. The navbar scrolls to sections: Tentang, Program, Cerita,
  Relawan, Donasi (plus hero, impact, partners).
- `/cerita` — full list of stories and activity reports ("Cerita Lainnya").
- `/cerita/[slug]` — story / activity-report ("laporan kegiatan") detail.
- `/program/[slug]` — program detail.

## Requirements

- Node.js **≥ 20** (`nvm use` picks up `.nvmrc`)
- **pnpm** (`corepack enable pnpm` if you don't have it)

## Environment variables

```bash
cp web/.env.example web/.env.local
cp studio/.env.example studio/.env.local
```

**`web/.env.local`** — all public (non-secret) values:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project id. Leave as `your_project_id` to run on fallback data. |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default `production`). |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Pinned API date, e.g. `2026-03-01`. |
| `NEXT_PUBLIC_SITE_URL` | Absolute origin for metadata, canonical URLs, sitemap & robots. |

> Setting a **real** `NEXT_PUBLIC_SANITY_PROJECT_ID` switches the site out of fallback
> mode — it will then show only content that exists in that Sanity project. Keep the
> placeholder to develop against local fallback content.
>
> A Sanity **read token** (draft preview, a later phase) must be server-only and named
> **without** the `NEXT_PUBLIC_` prefix. Never commit real secrets.

**`studio/.env.local`**:

| Variable | Purpose |
|---|---|
| `SANITY_STUDIO_PROJECT_ID` | Your Sanity project id (from https://www.sanity.io/manage). |
| `SANITY_STUDIO_DATASET` | Dataset name (default `production`). |

## Running the website (`web/`)

```bash
cd web
pnpm install
pnpm dev        # http://localhost:3000
```

With placeholder credentials the site renders entirely from local fallback content in
`src/content/fallback/`. Add real Sanity credentials to switch to CMS content — no code
changes required.

Other scripts:

```bash
pnpm build      # production build (all routes prerender to static/SSG)
pnpm start      # serve the production build
pnpm typecheck  # tsc --noEmit (strict)
pnpm lint       # eslint
pnpm test:e2e   # Playwright smoke tests (run `pnpm build` first)
```

## Running Sanity Studio (`studio/`)

The Studio needs a **real Sanity project** (unlike the website, which works on fallback).

```bash
cd studio
pnpm install
# set SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET in studio/.env.local
pnpm dev        # http://localhost:3333
```

Deploying the hosted Studio (later): `pnpm deploy` (publishes to `<name>.sanity.studio`).

## Content model

| Type | Purpose |
|---|---|
| **Site Settings** | Singleton: org name, description, contact, social links, donation info, default SEO. |
| **Program** | Name, slug, short/full description, cover, gallery, status, dates, featured, CTA. |
| **Article** | Title, slug, excerpt, cover, Portable Text content, author, categories, date, featured, SEO. Stories **and** activity reports ("laporan kegiatan") are both Articles — distinguished by their **Category**. |
| **Author** | Name, role, photo, bio (referenced by articles). |
| **Category** | Name, slug, description. E.g. "Cerita", "Laporan Kegiatan". |
| **Impact Statistic** | Label, value, description, display order. |
| **Partner** | Name, logo, website, display order. |

Every URL field is scheme-validated in the Studio, and every CMS URL is re-validated in
the web app (`safeHref`) before it is rendered.

## Creating & publishing content (editors)

1. Open the Studio (`cd studio && pnpm dev`).
2. Fill in **Pengaturan Situs** (Site Settings) first — it powers the header, footer, and
   default SEO.
3. Create **Penulis** and **Kategori** (include a "Laporan Kegiatan" category for reports),
   then **Program** and **Artikel / Cerita**.
4. Toggle **featured** on a program or story to surface it on the landing page.
5. Click **Publish**. The website reads published content on its next build/revalidation.

## Directory structure (web)

```
web/src/
├── app/            # routes: / (one page), /cerita, /cerita/[slug], /program/[slug],
│                   #         layout, robots.ts, sitemap.ts, icon, og-image
├── components/
│   ├── ui/         # shadcn primitives (button, sheet)
│   ├── layout/     # Header, MobileNav (client), Footer, Container
│   └── common/     # SectionHeading, CTASection, cards, ResponsiveImage, PortableText, ExternalLink…
├── sections/       # landing-page sections (Hero, Tentang, FeaturedPrograms, Donasi, …)
├── content/
│   ├── types.ts    # domain model (single source of truth)
│   ├── data.ts     # data-layer seam: getX() → Sanity OR fallback
│   └── fallback/   # typed Indonesian fixtures + placeholder images
├── sanity/         # client, image url builder, GROQ queries
└── lib/            # env, url (safeHref), utils (cn + id-ID dates), og, site nav
```

## Accessibility & SEO

`lang="id"`, skip-to-content link, one `<h1>` per page, labelled landmarks, visible focus
ring, `prefers-reduced-motion` support, section anchors with scroll offset, AA-contrast
palette, per-route metadata, OpenGraph + default OG image, canonical URLs, JSON-LD
Organization, `robots.ts` and a dynamic `sitemap.ts`.

## Known placeholders & next steps

- **Placeholder photography** — warm generated PNGs in `web/src/assets/placeholders/`;
  replace with real photos (or Sanity images) later.
- **Fallback content** — realistic Indonesian copy in `web/src/content/fallback/`;
  replace by publishing in the Studio.
- **Contact / donation details** — sample values in Site Settings fallback; update for real.
- **Recommended next phase:** connect the Sanity project (set the same project id in both
  apps and add content), adopt `sanity typegen`, add `defineLive` preview/visual editing,
  real donation & volunteer flows, and hosting/CI.
```
