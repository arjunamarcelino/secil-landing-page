import type { GalleryPhoto } from "@/content/types";
import { img, local } from "./images";

// Placeholder event photos — replace with real documentation in Sanity.
export const gallery = [
  { image: local(img.eventWide, "Kegiatan Senyum Kecil bersama anak-anak"), caption: "Kegiatan bersama anak-anak", order: 1 },
  { image: local(img.event1, "Sesi Senyum Mengajar di lapangan"), caption: "Senyum Mengajar", order: 2 },
  { image: local(img.event2, "Pembagian donasi Senyum Berbagi"), caption: "Senyum Berbagi", order: 3 },
  { image: local(img.event3, "Kegiatan belajar bersama relawan"), caption: "Belajar bersama", order: 4 },
  { image: local(img.event4, "Senyum Rekreasi di tempat edukatif"), caption: "Senyum Rekreasi", order: 5 },
  { image: local(img.event5, "Momen kebersamaan tim dan anak-anak"), caption: "Kebersamaan", order: 6 },
  { image: local(img.event6, "Dokumentasi kegiatan komunitas"), caption: "Dokumentasi kegiatan", order: 7 },
] as const satisfies readonly GalleryPhoto[];
