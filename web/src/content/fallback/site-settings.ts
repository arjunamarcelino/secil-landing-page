import type { SiteSettings } from "@/content/types";

export const siteSettings = {
  orgName: "Senyum Kecil",
  description:
    "Organisasi nirlaba pendidikan sosial yang berfokus pada mengajar dan berbagi bagi anak-anak. Berdiri di Medan sejak 2020, kami percaya setiap anak berhak belajar, bermain, dan bermimpi—dimulai dari Sumatera Utara.",
  contact: {
    email: "senyumkecil.contact.us@gmail.com",
    phone: "0853 3488 6355",
    address:
      "Jl. Gatot Subroto, Gg. Harapan No.3, Sei Sikambing C. II, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20118",
  },
  socialLinks: [
    { platform: "Instagram", url: "https://www.instagram.com/senyumkecil.mdn/" },
    { platform: "TikTok", url: "https://www.tiktok.com/@senyumkecil.mdn" },
    { platform: "YouTube", url: "https://www.youtube.com/@senyumkecilmdn" },
  ],
  hki: {
    registrationNumber: "IDM001097863",
    url: "https://merek.dgip.go.id/AdminMerek/validate/JID2022082321",
  },
  donation: {
    bankName: "Bank Contoh Indonesia",
    accountNumber: "000-000-0000",
    accountHolder: "Yayasan Senyum Kecil Medan",
    note: "Cantumkan nama dan pesan Anda saat berdonasi agar kami dapat mengirim ucapan terima kasih.",
  },
  defaultSeo: {
    title: "Senyum Kecil — Mengajar & Berbagi untuk Anak Indonesia",
    description:
      "Organisasi nirlaba pendidikan sosial di Medan. Kami mengajar dan berbagi melalui program Senyum Mengajar, Senyum Pendidikan, Senyum Berbagi, dan Senyum Rekreasi.",
  },
} as const satisfies SiteSettings;
