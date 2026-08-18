import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/content/types";
import { PROGRAM_STATUS_LABELS } from "@/content/types";
import { cn } from "@/lib/utils";
import { ResponsiveImage } from "./responsive-image";

function StatusPill({ status }: { status: Program["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "aktif" && "bg-teal-tint text-teal",
        status === "selesai" && "bg-muted text-muted-foreground",
        status === "akan-datang" && "bg-primary-tint text-primary",
      )}
    >
      {PROGRAM_STATUS_LABELS[status]}
    </span>
  );
}

/** Program card. `featured` renders the wider, image-left editorial variant. */
export function ProgramCard({
  program,
  featured = false,
  sizes,
}: {
  program: Program;
  featured?: boolean;
  sizes?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md",
        featured && "sm:flex-row",
      )}
    >
      <div className={cn(featured && "sm:w-1/2")}>
        <ResponsiveImage
          image={program.coverImage}
          ratio={featured ? "4 / 3" : "3 / 2"}
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          rounded="rounded-none"
        />
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-6", featured && "sm:justify-center")}>
        <StatusPill status={program.status} />
        <h3 className="font-heading text-xl font-semibold text-foreground">
          <Link href={`/program/${program.slug}`} className="after:absolute after:inset-0">
            {program.name}
          </Link>
        </h3>
        <p className="text-muted-foreground">{program.shortDescription}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Selengkapnya
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
