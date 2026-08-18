import type { Article } from "@/content/types";
import { img, local } from "./images";
import { block } from "./blocks";
import { authors } from "./authors";
import { categories } from "./categories";

export const articles: readonly Article[] = [
  {
    title: "Sehari Penuh Senyum Bersama Senyum Mengajar",
    slug: "sehari-bersama-senyum-mengajar",
    excerpt:
      "Dalam satu hari kegiatan Senyum Mengajar, teori berubah menjadi praktik—dan tawa anak-anak memenuhi ruang belajar.",
    coverImage: local(img.story1, "Anak-anak antusias mengikuti kegiatan Senyum Mengajar"),
    content: [
      block(
        "Pagi itu, anak-anak berdatangan dengan semangat. Kegiatan Senyum Mengajar Jangka Pendek hari itu menargetkan satu hasil sederhana: memahami sebuah materi dan langsung mempraktikkannya.",
      ),
      block("Belajar yang langsung terasa", "h2"),
      block(
        "Di Senyum Kecil, kami percaya pembelajaran paling melekat ketika anak bisa langsung menerapkannya. Maka setiap sesi selalu ditutup dengan praktik—menggambar, bercerita ulang, atau membuat karya sederhana.",
      ),
      block(
        "Hari itu, seorang anak untuk pertama kalinya berani maju dan menjelaskan hasil karyanya di depan teman-temannya. Wajahnya berbinar, dan itu cukup membuat kami semua ikut bahagia.",
      ),
    ],
    author: authors.ratna,
    categories: [categories.pendidikan, categories.komunitas],
    publishedAt: "2026-07-20",
    featured: true,
    seoTitle: "Sehari Bersama Senyum Mengajar — Senyum Kecil",
    seoDescription:
      "Cerita dari kegiatan Senyum Mengajar Senyum Kecil, tempat teori berubah menjadi praktik bersama anak-anak.",
  },
  {
    title: "Jumat Berbagi: Menyalurkan Kebaikan di Jalanan Medan",
    slug: "jumat-berbagi-di-jalanan-medan",
    excerpt:
      "Setiap bulan, donasi yang terkumpul berubah menjadi paket makanan yang dibagikan pada hari Jumat di jalanan Kota Medan.",
    coverImage: local(img.story2, "Relawan Senyum Kecil membagikan donasi di jalanan Medan"),
    content: [
      block(
        "Senyum Berbagi mengumpulkan donasi materi sebulan sekali—berupa sandang, pangan, dan uang. Donasi uang kami belanjakan menjadi produk makanan yang siap dibagikan.",
      ),
      block(
        "Pada hari Jumat, bersama donasi makanan basah, paket-paket itu kami bagikan kepada teman-teman di jalanan Kota Medan. Sederhana, namun kami percaya kepedulian kecil bisa berarti besar.",
      ),
    ],
    author: authors.dimas,
    categories: [categories.komunitas],
    publishedAt: "2026-05-11",
    featured: false,
  },
  {
    title: "Belajar Seru di Luar Ruangan Bersama Senyum Rekreasi",
    slug: "belajar-seru-bersama-senyum-rekreasi",
    excerpt:
      "Mengajak anak-anak belajar di tempat edukatif dan bersejarah, agar rasa ingin tahu tumbuh dengan cara yang menyenangkan.",
    coverImage: local(img.story3, "Anak-anak belajar sambil bermain di luar ruangan"),
    content: [
      block(
        "Tidak semua pelajaran harus terjadi di dalam kelas. Melalui Senyum Rekreasi, kami mengajak anak-anak belajar di tempat-tempat yang punya unsur edukasi dan nilai sejarah.",
      ),
      block(
        "Di luar ruangan, anak-anak tampak lebih antusias. Mereka bertanya, mengamati, dan tertawa—belajar terasa seperti bermain.",
      ),
    ],
    author: authors.dimas,
    categories: [categories.relawan, categories.pendidikan],
    publishedAt: "2026-03-02",
    featured: false,
  },
  {
    title: "Laporan Kegiatan: Senyum Mengajar Jangka Panjang",
    slug: "laporan-senyum-mengajar-jangka-panjang",
    excerpt:
      "Rekap perjalanan satu periode Senyum Mengajar Jangka Panjang: pencapaian belajar anak dan pendampingan tim pengajar.",
    coverImage: local(img.gallery3, "Kegiatan Senyum Mengajar Jangka Panjang"),
    content: [
      block(
        "Selama kurang lebih tiga bulan, Senyum Mengajar Jangka Panjang berjalan konsisten dengan target ajar berdasarkan kurikulum Senyum Kecil.",
      ),
      block("Ringkasan capaian", "h2"),
      block(
        "Anak-anak menyelesaikan topik pembelajaran secara bertahap dengan pendampingan tim pengajar di setiap pertemuan. Kehadiran meningkat dan antusiasme tetap terjaga hingga akhir periode.",
      ),
      block(
        "Laporan lengkap dan dokumentasi kegiatan dapat diminta melalui surel kami.",
      ),
    ],
    author: authors.ratna,
    categories: [categories.laporan, categories.pendidikan],
    publishedAt: "2026-06-05",
    featured: false,
  },
  {
    title: "Laporan Kegiatan: Senyum Berbagi Bulan Ini",
    slug: "laporan-senyum-berbagi-bulanan",
    excerpt:
      "Rekap penggalangan dan penyaluran donasi Senyum Berbagi: sandang, pangan, dan uang yang telah dibagikan.",
    coverImage: local(img.gallery1, "Penyaluran donasi program Senyum Berbagi"),
    content: [
      block(
        "Pada periode ini, Senyum Berbagi kembali mengumpulkan donasi sandang, pangan, dan uang dari para donatur.",
      ),
      block(
        "Donasi uang dibelanjakan menjadi produk makanan dan dibagikan pada hari Jumat di jalanan Kota Medan. Donasi materi yang dapat disimpan disalurkan melalui program Senyum Kecil lainnya. Terima kasih untuk setiap kebaikan yang telah dititipkan.",
      ),
    ],
    author: authors.dimas,
    categories: [categories.laporan, categories.komunitas],
    publishedAt: "2026-01-18",
    featured: false,
  },
] as const;

/** Pinned slug guaranteed to exist in fallback data — used by the smoke test. */
export const PINNED_ARTICLE_SLUG = "sehari-bersama-senyum-mengajar" as const;
