import type { Category } from "@/content/types";

export const categories = {
  pendidikan: {
    title: "Pendidikan",
    slug: "pendidikan",
    description: "Cerita seputar kelas belajar, literasi, dan pendampingan anak.",
  },
  komunitas: {
    title: "Komunitas",
    slug: "komunitas",
    description: "Kegiatan bersama relawan, warga, dan mitra Senyum Kecil.",
  },
  relawan: {
    title: "Relawan",
    slug: "relawan",
    description: "Kisah para relawan yang menggerakkan program di lapangan.",
  },
} as const satisfies Record<string, Category>;
