import type { TransparencyReport } from "@/content/types";

export const reports = [
  {
    title: "Laporan Tahunan 2025",
    year: 2025,
    description:
      "Ringkasan kegiatan, jumlah anak terdampak, penggunaan dana, dan capaian program sepanjang tahun 2025.",
    source: { kind: "external", href: "https://example.org/laporan/senyum-kecil-2025.pdf" },
    publishedAt: "2026-02-10",
  },
  {
    title: "Laporan Tahunan 2024",
    year: 2024,
    description:
      "Rekap program belajar, taman baca keliling, dan laporan keuangan yang telah ditinjau pengurus.",
    source: { kind: "external", href: "https://example.org/laporan/senyum-kecil-2024.pdf" },
    publishedAt: "2025-02-12",
  },
  {
    title: "Laporan Semester Ganjil 2023",
    year: 2023,
    description:
      "Laporan singkat kegiatan dan penggunaan donasi pada paruh pertama tahun 2023. Dokumen lengkap sedang disiapkan.",
    source: { kind: "none" },
    publishedAt: "2023-08-01",
  },
] as const satisfies readonly TransparencyReport[];
