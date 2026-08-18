"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { ButtonLink } from "@/components/common/button-link";
import { NAV_ITEMS } from "@/lib/site";

/**
 * Mobile navigation drawer. Base UI's Dialog handles focus trapping, Escape to
 * close, and focus restoration; we add the accessible name and close-on-navigate.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Buka menu navigasi"
        className="inline-flex size-11 items-center justify-center rounded-xl border border-border-strong bg-surface text-foreground md:hidden"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 gap-0 p-0">
        <SheetHeader>
          <SheetTitle>Navigasi</SheetTitle>
        </SheetHeader>
        <nav aria-label="Navigasi utama" className="flex flex-col gap-1 px-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 px-5">
          <ButtonLink href="/#donasi" variant="primary" className="w-full">
            Dukung Senyum Mereka
          </ButtonLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
