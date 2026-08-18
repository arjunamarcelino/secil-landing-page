import {
  getAllPrograms,
  getFaq,
  getGallery,
  getImpactStatistics,
  getLatestArticles,
  getPartners,
  getSiteSettings,
} from "@/content/data";
import { absoluteUrl, siteUrl } from "@/lib/env";
import { Hero } from "@/sections/hero";
import { Tentang } from "@/sections/tentang";
import { FeaturedPrograms } from "@/sections/featured-programs";
import { ImpactSummary } from "@/sections/impact-summary";
import { LatestStories } from "@/sections/latest-stories";
import { VolunteerInvite } from "@/sections/volunteer-invite";
import { Donasi } from "@/sections/donasi";
import { Faq } from "@/sections/faq";
import { Galeri } from "@/sections/galeri";
import { PhotoBand } from "@/sections/photo-band";
import { Partners } from "@/sections/partners";
import { JsonLd } from "@/components/common/json-ld";

export const dynamic = "error";
export const revalidate = false;

export default async function HomePage() {
  const [settings, programs, statistics, articles, partners, faqItems, photos] =
    await Promise.all([
      getSiteSettings(),
      getAllPrograms(),
      getImpactStatistics(),
      getLatestArticles(3),
      getPartners(),
      getFaq(),
      getGallery(),
    ]);

  const instagram = settings.socialLinks.find((s) => s.platform === "Instagram");
  const socialUrls = settings.socialLinks.map((s) => s.url);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: settings.orgName,
    url: siteUrl,
    logo: absoluteUrl("/icon"),
    description: settings.description,
    ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero topStat={statistics[0]} />
      <Tentang description={settings.description} />
      <FeaturedPrograms programs={programs} />
      <ImpactSummary statistics={statistics} />
      <PhotoBand photo={photos[0]} />
      <LatestStories articles={articles} />
      <Galeri photos={photos.slice(1)} />
      <VolunteerInvite email={settings.contact.email} instagramUrl={instagram?.url} />
      <Donasi donation={settings.donation} />
      <Faq items={faqItems} />
      <Partners partners={partners} />
    </>
  );
}
