import type { ImpactStatistic } from "@/content/types";

// Only facts we can state with confidence — replace/extend in Sanity later.
export const statistics = [
  {
    label: "Titik lokasi kegiatan",
    value: "25+",
    description: "Kegiatan Senyum Kecil telah terlaksana di lebih dari 25 titik lokasi.",
    order: 1,
  },
  {
    label: "Berdiri sejak",
    value: "2020",
    description: "Lahir pada 7 Agustus 2020 di Kota Medan, Sumatera Utara.",
    order: 2,
  },
  {
    label: "Program utama",
    value: "4",
    description: "Senyum Mengajar, Senyum Pendidikan, Senyum Berbagi, dan Senyum Rekreasi.",
    order: 3,
  },
] as const satisfies readonly ImpactStatistic[];
