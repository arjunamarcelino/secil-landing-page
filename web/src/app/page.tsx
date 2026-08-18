import {
  getFeaturedPrograms,
  getImpactStatistics,
  getLatestArticles,
  getPartners,
  getSiteSettings,
} from "@/content/data";
import { absoluteUrl, siteUrl } from "@/lib/env";
import { Hero } from "@/sections/hero";
import { Intro } from "@/sections/intro";
import { FeaturedPrograms } from "@/sections/featured-programs";
import { ImpactSummary } from "@/sections/impact-summary";
import { LatestStories } from "@/sections/latest-stories";
import { VolunteerInvite } from "@/sections/volunteer-invite";
import { Partners } from "@/sections/partners";
import { CTASection } from "@/components/common/cta-section";
import { JsonLd } from "@/components/common/json-ld";

export const dynamic = "error";
export const revalidate = false;

export default async function HomePage() {
  const [settings, programs, statistics, articles, partners] = await Promise.all([
    getSiteSettings(),
    getFeaturedPrograms(),
    getImpactStatistics(),
    getLatestArticles(3),
    getPartners(),
  ]);

  const instagram = settings.socialLinks.find((s) => s.platform === "Instagram");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: settings.orgName,
    url: siteUrl,
    logo: absoluteUrl("/icon"),
    description: settings.description,
    ...(instagram ? { sameAs: [instagram.url] } : {}),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero topStat={statistics[0]} />
      <Intro description={settings.description} />
      <FeaturedPrograms programs={programs} />
      <ImpactSummary statistics={statistics} />
      <LatestStories articles={articles} />
      <VolunteerInvite />
      <CTASection
        title="Dukung senyum mereka hari ini"
        description="Donasimu membantu menghadirkan buku, kelas belajar, dan pendampingan bagi lebih banyak anak di Medan."
        primary={{ href: "/donasi", label: "Dukung Senyum Mereka" }}
        secondary={{ href: "/tentang", label: "Kenali Kami" }}
        labelledById="home-donation-cta"
      />
      <Partners partners={partners} />
    </>
  );
}
