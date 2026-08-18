import type { Article } from "@/content/types";
import { img, local } from "./images";
import { block } from "./blocks";
import { authors } from "./authors";
import { categories } from "./categories";

export const articles: readonly Article[] = [
  {
    title: "Cerita Kecil dari Kelas Baca di Tepi Pantai",
    slug: "cerita-kecil-dari-kelas-baca",
    excerpt:
      "Setiap Sabtu pagi, tawa anak-anak memenuhi ruang belajar sederhana kami. Berikut sepenggal kisahnya.",
    coverImage: local(img.story1, "Anak-anak tersenyum saat mengikuti kelas baca di tepi pantai"),
    content: [
      block(
        "Matahari belum terlalu tinggi ketika anak-anak mulai berdatangan. Mereka membawa semangat, meski sebagian datang tanpa alas kaki.",
      ),
      block("Belajar sambil bermain", "h2"),
      block(
        "Di Senyum Kecil, kami percaya bahwa belajar paling melekat ketika anak merasa senang. Maka setiap kelas selalu diselingi permainan, lagu, dan cerita.",
      ),
      block(
        "Hari itu, seorang anak bernama Ada untuk pertama kalinya berhasil membaca satu paragraf penuh. Wajahnya berbinar, dan itu cukup untuk membuat kami semua ikut bahagia.",
      ),
    ],
    author: authors.ratna,
    categories: [categories.pendidikan, categories.komunitas],
    publishedAt: "2026-07-20",
    featured: true,
    seoTitle: "Cerita Kecil dari Kelas Baca di Tepi Pantai — Senyum Kecil Medan",
    seoDescription:
      "Sepenggal kisah dari kelas baca mingguan Senyum Kecil untuk anak-anak di kawasan pesisir Medan.",
  },
  {
    title: "Mengapa Taman Baca Keliling Penting untuk Kampung Kami",
    slug: "taman-baca-keliling-penting",
    excerpt:
      "Akses terhadap buku bukan hal yang merata. Taman Baca Keliling hadir untuk mendekatkan bacaan ke anak-anak.",
    coverImage: local(img.story2, "Anak-anak mengelilingi kendaraan taman baca keliling"),
    content: [
      block(
        "Tidak semua kampung memiliki perpustakaan. Bahkan buku bacaan anak pun kadang sulit ditemukan. Dari sinilah gagasan Taman Baca Keliling lahir.",
      ),
      block(
        "Dengan membawa buku langsung ke tengah kampung, kami melihat anak-anak yang semula ragu perlahan jatuh cinta pada membaca.",
      ),
    ],
    author: authors.dimas,
    categories: [categories.pendidikan],
    publishedAt: "2026-05-11",
    featured: false,
  },
  {
    title: "Menjadi Relawan: Memberi Sedikit, Menerima Banyak",
    slug: "menjadi-relawan-memberi-sedikit",
    excerpt:
      "Para relawan sering berkata bahwa merekalah yang justru paling banyak belajar. Ini alasannya.",
    coverImage: local(img.story3, "Relawan bersama anak-anak seusai kegiatan komunitas"),
    content: [
      block(
        "Menjadi relawan di Senyum Kecil tidak menuntut keahlian khusus. Yang dibutuhkan hanyalah kesediaan hadir dan mendampingi.",
      ),
      block(
        "Banyak relawan mengaku pulang dengan hati yang lebih penuh. Sebab di setiap senyum anak, ada pelajaran tentang ketulusan.",
      ),
    ],
    author: authors.dimas,
    categories: [categories.relawan, categories.komunitas],
    publishedAt: "2026-03-02",
    featured: false,
  },
] as const;

/** Pinned slug guaranteed to exist in fallback data — used by the smoke test. */
export const PINNED_ARTICLE_SLUG = "cerita-kecil-dari-kelas-baca" as const;
