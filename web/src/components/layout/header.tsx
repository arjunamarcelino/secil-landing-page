import Link from "next/link";
import { Container } from "@/components/common/container";
import { ButtonLink } from "@/components/common/button-link";
import { MobileNav } from "./mobile-nav";
import { NAV_ITEMS } from "@/lib/site";

export function Header({ orgName }: { orgName: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-foreground">
          {orgName}
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/#donasi" variant="primary" className="hidden sm:inline-flex">
            Dukung Senyum Mereka
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
