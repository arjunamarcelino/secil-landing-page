import type { Author } from "@/content/types";
import { img, local } from "./images";

export const authors = {
  ratna: {
    name: "Ratna Sari",
    role: "Koordinator Program",
    photo: local(img.author1, "Foto profil Ratna Sari, Koordinator Program Senyum Kecil"),
    bio: "Ratna mengoordinasikan program Senyum Mengajar dan pendampingan anak-anak bersama tim pengajar Senyum Kecil.",
  },
  dimas: {
    name: "Dimas Prayoga",
    role: "Relawan & Penulis Cerita",
    photo: local(img.author2, "Foto profil Dimas Prayoga, relawan dan penulis cerita Senyum Kecil"),
    bio: "Dimas mendokumentasikan perjalanan komunitas dan menuliskan cerita dampak dari lapangan.",
  },
} as const satisfies Record<string, Author>;
