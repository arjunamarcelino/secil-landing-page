import type { SiteSettings } from "@/content/types";

export const siteSettings = {
  orgName: "Senyum Kecil Medan",
  description:
    "Komunitas sosial untuk pendidikan dan tumbuh kembang anak-anak di Kota Medan. Kami percaya setiap anak berhak belajar, bermain, dan bermimpi.",
  contact: {
    email: "halo@senyumkecilmedan.org",
    phone: "+62 812-0000-0000",
    address: "Medan, Sumatera Utara, Indonesia",
  },
  socialLinks: [
    { platform: "Instagram", url: "https://www.instagram.com/senyumkecil.mdn/" },
  ],
  donation: {
    bankName: "Bank Contoh Indonesia",
    accountNumber: "000-000-0000",
    accountHolder: "Yayasan Senyum Kecil Medan",
    note: "Cantumkan nama dan pesan Anda saat berdonasi agar kami dapat mengirim ucapan terima kasih.",
  },
  defaultSeo: {
    title: "Senyum Kecil Medan — Pendidikan & Harapan untuk Anak Medan",
    description:
      "Komunitas sosial yang mendampingi pendidikan anak-anak di Medan melalui kelas belajar, taman baca, dan kegiatan bersama relawan.",
  },
} as const satisfies SiteSettings;
