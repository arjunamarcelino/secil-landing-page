import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const article = defineType({
  name: "article",
  title: "Artikel / Cerita",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Ringkasan",
      type: "text",
      rows: 3,
      description: "Kalimat pembuka singkat yang tampil di kartu dan pratinjau.",
      validation: (rule) => rule.required().max(240),
    }),
    imageWithAlt("coverImage", "Gambar sampul"),
    defineField({
      name: "content",
      title: "Isi",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Teks alternatif", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "author",
      title: "Penulis",
      type: "reference",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Kategori",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal terbit",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Cerita pilihan",
      type: "boolean",
      initialValue: false,
      description: "Tampilkan sebagai sorotan di halaman Cerita.",
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  orderings: [
    {
      title: "Terbaru",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "author.name", media: "coverImage" },
  },
});
