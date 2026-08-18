import type { Program } from "@/content/types";
import { img, local } from "./images";
import { block, bulletList } from "./blocks";

export const programs: readonly Program[] = [
  {
    name: "Kelas Baca Ceria",
    slug: "kelas-baca-ceria",
    shortDescription:
      "Kelas membaca dan bercerita mingguan untuk anak usia 5–12 tahun di kawasan pesisir Medan.",
    fullDescription: [
      block(
        "Kelas Baca Ceria adalah program rutin mingguan yang membantu anak-anak mengenal huruf, membaca, dan mencintai buku sejak dini. Kegiatan dikemas melalui permainan, lagu, dan bercerita agar belajar terasa menyenangkan.",
      ),
      block("Apa saja kegiatannya?", "h3"),
      ...bulletList([
        "Sesi membaca bersama relawan pendamping.",
        "Aktivitas kreatif: menggambar dan bercerita ulang.",
        "Pojok baca dengan koleksi buku anak yang berganti setiap bulan.",
      ]),
      block(
        "Program ini berjalan di beberapa titik komunitas dan terbuka bagi siapa saja yang ingin menjadi relawan pendamping.",
      ),
    ],
    coverImage: local(img.program1, "Anak-anak membaca buku bersama di Kelas Baca Ceria"),
    gallery: [
      local(img.gallery1, "Suasana kegiatan membaca bersama"),
      local(img.gallery2, "Relawan mendampingi anak membaca"),
      local(img.gallery3, "Pojok baca dengan koleksi buku anak"),
    ],
    status: "aktif",
    startDate: "2021-09-01",
    featured: true,
    ctaLabel: "Jadi relawan pendamping",
    ctaUrl: "/#relawan",
  },
  {
    name: "Taman Baca Keliling",
    slug: "taman-baca-keliling",
    shortDescription:
      "Perpustakaan bergerak yang membawa buku bacaan ke kampung-kampung yang jauh dari akses baca.",
    fullDescription: [
      block(
        "Taman Baca Keliling membawa ratusan buku anak ke berbagai kampung menggunakan kendaraan sederhana. Anak-anak bebas memilih, membaca, dan meminjam buku secara gratis.",
      ),
      block(
        "Setiap kunjungan diisi dengan sesi mendongeng dan permainan literasi untuk menumbuhkan minat baca.",
      ),
    ],
    coverImage: local(img.program2, "Kendaraan Taman Baca Keliling membawa buku ke kampung"),
    gallery: [
      local(img.gallery2, "Anak-anak memilih buku dari Taman Baca Keliling"),
      local(img.gallery1, "Sesi mendongeng bersama relawan"),
    ],
    status: "aktif",
    startDate: "2022-03-01",
    featured: true,
    ctaLabel: "Donasikan buku",
    ctaUrl: "/#donasi",
  },
  {
    name: "Kelas Keterampilan Remaja",
    slug: "kelas-keterampilan-remaja",
    shortDescription:
      "Pelatihan keterampilan praktis dan pengembangan diri untuk remaja agar lebih siap menyongsong masa depan.",
    fullDescription: [
      block(
        "Kelas Keterampilan Remaja memberi ruang bagi remaja untuk belajar keterampilan praktis seperti menulis, berbicara di depan umum, dan dasar-dasar wirausaha.",
      ),
      block(
        "Program ini dirancang bersama relawan profesional dari berbagai bidang dan akan dibuka kembali pada periode berikutnya.",
      ),
    ],
    coverImage: local(img.program3, "Remaja mengikuti kelas keterampilan bersama relawan"),
    gallery: [],
    status: "akan-datang",
    startDate: "2026-10-01",
    featured: false,
    ctaLabel: "Kenali programnya",
    ctaUrl: "/#program",
  },
] as const;

/** Pinned slug guaranteed to exist in fallback data — used by the smoke test. */
export const PINNED_PROGRAM_SLUG = "kelas-baca-ceria" as const;
