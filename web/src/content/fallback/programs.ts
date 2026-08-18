import type { Program } from "@/content/types";
import { img, local } from "./images";
import { block, bulletList } from "./blocks";

export const programs: readonly Program[] = [
  {
    name: "Senyum Mengajar",
    slug: "senyum-mengajar",
    shortDescription:
      "Program utama Senyum Kecil: pengajaran pendidikan sosial kepada anak-anak, dirancang oleh tim terbaik di bidangnya.",
    fullDescription: [
      block(
        "Senyum Mengajar adalah program utama Senyum Kecil yang berfokus pada pengajaran pendidikan sosial kepada anak-anak. Program ini dijalankan oleh tim pengajar yang dirancang dengan sungguh-sungguh, dan kini dipecah menjadi dua bentuk.",
      ),
      block("Senyum Mengajar Jangka Pendek", "h3"),
      block(
        "Pengajaran dilakukan selama satu hari dengan menargetkan sebuah hasil melalui kegiatan praktik dari pembelajaran yang sudah dilakukan. Harapannya anak-anak dapat langsung memahami dan menerapkan teori ajar di kehidupan sehari-hari, sekaligus mengasah kreativitas mereka.",
      ),
      block("Senyum Mengajar Jangka Panjang", "h3"),
      block(
        "Pengajaran dilakukan selama kurang lebih 2–3 bulan dengan target ajar yang ditetapkan berdasarkan kurikulum Senyum Kecil. Anak-anak diharapkan dapat menguasai topik pembelajaran secara bertahap, didampingi tim pengajar pada setiap pertemuan.",
      ),
      ...bulletList([
        "Materi disusun berdasarkan kurikulum ajar Senyum Kecil.",
        "Didampingi tim pengajar di setiap pertemuan.",
        "Menggabungkan teori dan praktik agar mudah diterapkan.",
      ]),
    ],
    coverImage: local(img.program1, "Anak-anak mengikuti kegiatan Senyum Mengajar bersama tim pengajar"),
    gallery: [
      local(img.gallery1, "Suasana kegiatan belajar bersama"),
      local(img.gallery2, "Tim pengajar mendampingi anak-anak"),
      local(img.gallery3, "Kegiatan praktik pembelajaran"),
    ],
    status: "aktif",
    startDate: "2020-08-07",
    featured: true,
    ctaLabel: "Jadi relawan pengajar",
    ctaUrl: "/#relawan",
  },
  {
    name: "Senyum Pendidikan",
    slug: "senyum-pendidikan",
    shortDescription:
      "Program beasiswa berupa bantuan dana sekolah dan kebutuhan pendidikan lainnya bagi anak yang membutuhkan.",
    fullDescription: [
      block(
        "Senyum Pendidikan adalah program beasiswa dari Senyum Kecil. Beasiswa ini dapat berupa bantuan dana sekolah maupun kebutuhan pendidikan lainnya.",
      ),
      block(
        "Saat ini skala program masih terbilang kecil dan terus dalam proses pengembangan. Harapannya, program ini dapat membantu anak-anak yang mengalami kesulitan untuk mendapatkan pendidikan yang tinggi dan berkualitas.",
      ),
    ],
    coverImage: local(img.program3, "Anak-anak penerima manfaat program Senyum Pendidikan"),
    gallery: [],
    status: "aktif",
    startDate: "2021-01-01",
    featured: true,
    ctaLabel: "Dukung beasiswa",
    ctaUrl: "/#donasi",
  },
  {
    name: "Senyum Berbagi",
    slug: "senyum-berbagi",
    shortDescription:
      "Program berbagi donasi materi setiap bulan—sandang, pangan, dan uang—untuk mereka yang membutuhkan.",
    fullDescription: [
      block(
        "Senyum Berbagi adalah program berbagi melalui hasil pengumpulan donasi materi yang dilaksanakan sebulan sekali. Donasi dapat berupa sandang, pangan, dan uang.",
      ),
      block(
        "Donasi berbentuk uang dibelanjakan menjadi produk makanan, lalu dibagikan setiap hari Jumat di jalanan Kota Medan bersama donasi makanan basah. Donasi materi yang dapat disimpan akan disalurkan kepada yang membutuhkan melalui program-program Senyum Kecil lainnya.",
      ),
      block(
        "Harapannya, Senyum Kecil dapat menunjukkan kepedulian terhadap sekitar dan menjadi penyalur bantuan bagi teman-teman yang membutuhkan.",
      ),
    ],
    coverImage: local(img.program2, "Kegiatan berbagi donasi Senyum Berbagi di Kota Medan"),
    gallery: [
      local(img.gallery3, "Pembagian donasi kepada yang membutuhkan"),
      local(img.gallery1, "Persiapan paket donasi bersama relawan"),
    ],
    status: "aktif",
    startDate: "2020-09-01",
    featured: true,
    ctaLabel: "Ikut berdonasi",
    ctaUrl: "/#donasi",
  },
  {
    name: "Senyum Rekreasi",
    slug: "senyum-rekreasi",
    shortDescription:
      "Belajar sambil bermain di tempat-tempat edukatif dan bersejarah, agar belajar terasa lebih seru.",
    fullDescription: [
      block(
        "Senyum Rekreasi adalah program belajar sambil bermain yang dilakukan di daerah yang memiliki unsur edukasi maupun tempat-tempat bersejarah di kota.",
      ),
      block(
        "Harapannya, melalui program ini anak-anak menjadi lebih tertarik dengan sistem belajar di luar ruangan yang lebih asyik dan menyenangkan.",
      ),
    ],
    coverImage: local(img.gallery2, "Anak-anak belajar sambil bermain dalam program Senyum Rekreasi"),
    gallery: [local(img.gallery2, "Kegiatan belajar di luar ruangan")],
    status: "aktif",
    startDate: "2021-05-01",
    featured: false,
    ctaLabel: "Kenali programnya",
    ctaUrl: "/#program",
  },
] as const;

/** Pinned slug guaranteed to exist in fallback data — used by the smoke test. */
export const PINNED_PROGRAM_SLUG = "senyum-mengajar" as const;
