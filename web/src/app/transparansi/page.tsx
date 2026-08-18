import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { getTransparencyReports } from "@/content/data";
import { Container } from "@/components/common/container";
import { PageHeader } from "@/components/common/page-header";
import { ExternalLink } from "@/components/common/external-link";
import { EmptyState } from "@/components/common/empty-state";
import { formatDate } from "@/lib/utils";

export const dynamic = "error";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Transparansi",
  description:
    "Laporan kegiatan dan keuangan Senyum Kecil Medan. Kami berkomitmen menjaga kepercayaan melalui keterbukaan.",
  alternates: { canonical: "/transparansi" },
};

export default async function TransparansiPage() {
  const reports = await getTransparencyReports();

  return (
    <>
      <PageHeader
        eyebrow="Transparansi"
        title="Keterbukaan yang menjaga kepercayaan"
        description="Kami percaya setiap dukungan layak dipertanggungjawabkan. Berikut laporan kegiatan dan keuangan kami."
      />

      <Container className="py-16 sm:py-20">
        {reports.length === 0 ? (
          <EmptyState
            title="Belum ada laporan"
            description="Laporan transparansi akan tersedia di sini setelah diterbitkan."
          />
        ) : (
          <ul className="flex flex-col gap-4">
            {reports.map((report) => (
              <li
                key={`${report.title}-${report.year}`}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-tint text-primary">
                    <FileText className="size-5" aria-hidden />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-heading text-lg font-semibold text-foreground">
                      {report.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <p className="text-xs text-muted-foreground">
                      Diterbitkan{" "}
                      <time dateTime={report.publishedAt}>{formatDate(report.publishedAt)}</time>
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pl-15 sm:pl-0">
                  {report.source.kind === "none" ? (
                    <span className="text-sm text-muted-foreground">Segera tersedia</span>
                  ) : (
                    <ExternalLink
                      href={report.source.kind === "file" ? report.source.url : report.source.href}
                      aria-label={`Unduh ${report.title}`}
                      className="inline-flex items-center gap-1.5 font-medium"
                    >
                      <Download className="size-4" aria-hidden />
                      Unduh laporan
                    </ExternalLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
