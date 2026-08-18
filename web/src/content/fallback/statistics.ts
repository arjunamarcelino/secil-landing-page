import type { ImpactStatistic } from "@/content/types";

export const statistics = [
  {
    label: "Anak terdampak",
    value: "1.200+",
    description: "Anak yang mengikuti kelas belajar dan kegiatan komunitas sejak 2021.",
    order: 1,
  },
  {
    label: "Relawan aktif",
    value: "85",
    description: "Relawan yang rutin mendampingi kegiatan setiap pekan.",
    order: 2,
  },
  {
    label: "Titik kegiatan",
    value: "12",
    description: "Lokasi belajar dan bermain yang tersebar di sekitar Kota Medan.",
    order: 3,
  },
  {
    label: "Buku dibagikan",
    value: "3.400",
    description: "Buku bacaan anak yang disalurkan melalui taman baca keliling.",
    order: 4,
  },
] as const satisfies readonly ImpactStatistic[];
