import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const program = defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama program",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Deskripsi singkat",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "fullDescription",
      title: "Deskripsi lengkap",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Teks alternatif", type: "string" })],
        },
      ],
    }),
    imageWithAlt("coverImage", "Gambar sampul"),
    defineField({
      name: "gallery",
      title: "Galeri",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Teks alternatif", type: "string" })],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Sedang berjalan", value: "aktif" },
          { title: "Selesai", value: "selesai" },
          { title: "Akan datang", value: "akan-datang" },
        ],
        layout: "radio",
      },
      initialValue: "aktif",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "startDate", title: "Tanggal mulai", type: "date" }),
    defineField({ name: "endDate", title: "Tanggal selesai", type: "date" }),
    defineField({
      name: "featured",
      title: "Program unggulan",
      type: "boolean",
      initialValue: false,
      description: "Tampilkan di beranda.",
    }),
    defineField({ name: "ctaLabel", title: "Label tombol ajakan", type: "string" }),
    defineField({
      name: "ctaUrl",
      title: "Tautan tombol ajakan",
      type: "string",
      description: "URL internal (mis. /donasi) atau tautan lengkap.",
    }),
  ],
  orderings: [
    {
      title: "Unggulan lalu terbaru",
      name: "featuredThenDate",
      by: [
        { field: "featured", direction: "desc" },
        { field: "startDate", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "status", media: "coverImage" },
  },
});
