import type { FaqItem } from "@/content/types";
import { block, para } from "./blocks";

const IG = "https://www.instagram.com/senyumkecil.mdn/";

export const faq: readonly FaqItem[] = [
  {
    question: "Senyum Kecil itu apa?",
    answer: [
      block(
        "Senyum Kecil adalah organisasi nirlaba yang bergerak dalam isu pendidikan sosial anak-anak Indonesia, dimulai dari wilayah Sumatera Utara. Namanya berangkat dari keinginan untuk membawa seulas senyum pada wajah anak-anak melalui kegiatan yang dilaksanakan.",
      ),
    ],
    order: 1,
  },
  {
    question: "Sejak kapan Senyum Kecil berdiri?",
    answer: [
      block(
        "Senyum Kecil berdiri sejak 7 Agustus 2020 atas inisiasi empat orang sahabat di Medan.",
      ),
    ],
    order: 2,
  },
  {
    question: "Apa tujuan Senyum Kecil?",
    answer: [
      block(
        "Senyum Kecil memiliki visi menghadirkan pemerataan pendidikan berkualitas di Indonesia. Untuk mewujudkannya, kami memperluas akses pendidikan dan mendukung kesempatan belajar bagi anak-anak, sekaligus membantu sekitar.",
      ),
    ],
    order: 3,
  },
  {
    question: "Kegiatannya berupa apa saja?",
    answer: [
      block(
        "Saat ini Senyum Kecil memiliki empat program kerja eksternal, yaitu Senyum Mengajar, Senyum Pendidikan, Senyum Berbagi, dan Senyum Rekreasi.",
      ),
    ],
    order: 4,
  },
  {
    question: "Bagaimana cara bergabung menjadi bagian Senyum Kecil?",
    answer: [
      block(
        "Secara berkala, Senyum Kecil membuka pendaftaran anggota sesuai kebutuhan yang diumumkan melalui media sosial kami. Jadi, jangan sampai ketinggalan infonya ya!",
      ),
    ],
    order: 5,
  },
  {
    question: "Bagaimana saya bisa berkontribusi dalam kegiatan Senyum Kecil?",
    answer: [
      block(
        "Kamu dapat berkontribusi dengan berdonasi dan menjadi relawan pada program-program yang dimiliki Senyum Kecil.",
      ),
    ],
    order: 6,
  },
  {
    question: "Donasi seperti apa yang boleh diberikan dan bagaimana caranya?",
    answer: [
      para(
        "Untuk donasi berupa uang dapat disalurkan melalui ",
        { text: "tautan donasi", href: "/#donasi" },
        " atau rekening BSI 71989785657 a.n. Salsabila Antami. Senyum Kecil juga menerima donasi dalam bentuk makanan dan minuman, pakaian layak pakai, serta buku dan peralatan tulis yang dapat dikirimkan ke kantor Senyum Kecil.",
      ),
      para(
        "Donasi di luar hal-hal yang telah disebutkan dapat dibahas lebih lanjut melalui narahubung kami. Jangan lupa konfirmasi donasi kamu melalui ",
        { text: "DM Instagram @senyumkecil.mdn", href: IG },
        " ya!",
      ),
    ],
    order: 7,
  },
  {
    question: "Jika ingin menjadi relawan, bisa daftar ke mana?",
    answer: [
      para(
        "Saat pendaftaran relawan dibuka, kamu dapat mengisi data diri pada ",
        { text: "tautan daftar", href: IG },
        ". Informasi pembukaan pendaftaran diumumkan melalui media sosial kami.",
      ),
    ],
    order: 8,
  },
  {
    question: "Apakah Senyum Kecil terbuka untuk kerja sama?",
    answer: [
      para(
        "Wah, tentu saja! Kamu dapat mengirimkan proposal kerja sama melalui email ",
        {
          text: "senyumkecil.contact.us@gmail.com",
          href: "mailto:senyumkecil.contact.us@gmail.com",
        },
        " dengan subjek “Proposal Partnership (Nama Kegiatan)”, atau hubungi narahubung kami pada kontak yang tertera.",
      ),
    ],
    order: 9,
  },
];
