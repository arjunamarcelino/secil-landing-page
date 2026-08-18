import { defineType, defineField } from "sanity";

export const transparencyReport = defineType({
  name: "transparencyReport",
  title: "Laporan Transparansi",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Tahun",
      type: "number",
      validation: (rule) => rule.required().min(2000).max(2100).integer(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "Berkas laporan (PDF)",
      type: "file",
      description: "Unggah berkas, atau isi Tautan eksternal di bawah. Salah satu saja.",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "externalUrl",
      title: "Tautan eksternal",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal terbit",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Tahun terbaru",
      name: "yearDesc",
      by: [
        { field: "year", direction: "desc" },
        { field: "publishedAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "year" },
  },
});
