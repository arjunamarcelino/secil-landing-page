import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/env";
import { getSiteSettings } from "@/content/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: settings.defaultSeo.title,
      template: `%s · ${settings.orgName}`,
    },
    description: settings.defaultSeo.description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: settings.orgName,
      title: settings.defaultSeo.title,
      description: settings.defaultSeo.description,
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: settings.defaultSeo.title,
      description: settings.defaultSeo.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Lompat ke konten
        </a>
        <Header orgName={settings.orgName} />
        <main id="konten" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
