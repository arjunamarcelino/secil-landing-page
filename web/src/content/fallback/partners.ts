import type { Partner } from "@/content/types";
import { img, local } from "./images";

export const partners = [
  {
    name: "Rumah Baca Medan",
    logo: local(img.partner1, "Logo mitra Rumah Baca Medan"),
    website: "https://example.org/rumah-baca-medan",
    order: 1,
  },
  {
    name: "Komunitas Guru Muda",
    logo: local(img.partner2, "Logo mitra Komunitas Guru Muda"),
    website: "https://example.org/guru-muda",
    order: 2,
  },
  {
    name: "Yayasan Cahaya Harapan",
    logo: local(img.partner3, "Logo mitra Yayasan Cahaya Harapan"),
    website: "https://example.org/cahaya-harapan",
    order: 3,
  },
  {
    name: "Toko Buku Nusantara",
    logo: local(img.partner4, "Logo mitra Toko Buku Nusantara"),
    order: 4,
  },
] as const satisfies readonly Partner[];
