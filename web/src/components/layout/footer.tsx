import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/common/container";
import { ExternalLink } from "@/components/common/external-link";
import { socialIcon } from "@/components/common/icons";
import { NAV_ITEMS } from "@/lib/site";
import type { SiteSettings } from "@/content/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface-sunken">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <p className="font-heading text-lg font-bold text-foreground">{settings.orgName}</p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {settings.description}
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">Jelajahi</p>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/tim" className="text-sm text-muted-foreground hover:text-foreground">
            Tim
          </Link>
          <Link href="/cerita" className="text-sm text-muted-foreground hover:text-foreground">
            Cerita Lainnya
          </Link>
        </nav>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">Kontak</p>
          {settings.contact.email && (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="size-4 shrink-0" aria-hidden />
              {settings.contact.email}
            </span>
          )}
          {settings.contact.phone && (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 shrink-0" aria-hidden />
              {settings.contact.phone}
            </span>
          )}
          {settings.contact.address && (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {settings.contact.address}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground">Ikuti Kami</p>
          {settings.socialLinks.map((social) => {
            const Icon = socialIcon(social.platform);
            return (
              <ExternalLink
                key={social.platform}
                href={social.url}
                aria-label={`${social.platform} ${settings.orgName}`}
                className="flex items-center gap-2 text-sm"
              >
                {Icon && <Icon className="size-4 shrink-0" />}
                {social.platform}
              </ExternalLink>
            );
          })}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {settings.orgName}. Dibuat dengan sepenuh hati.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {settings.hki && (
              <>
                <ExternalLink
                  href={settings.hki.url}
                  aria-label={`Validasi merek terdaftar ${settings.hki.registrationNumber} di DGIP`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Merek terdaftar · {settings.hki.registrationNumber}
                </ExternalLink>
                <span aria-hidden className="hidden sm:inline">
                  ·
                </span>
              </>
            )}
            <span>Medan, Indonesia</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
