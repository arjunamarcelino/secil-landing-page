import { defineType, defineField } from "sanity";

export const impactStatistic = defineType({
  name: "impactStatistic",
  title: "Statistik Dampak",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Contoh: Anak terdampak.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Nilai",
      type: "string",
      description: "Contoh: 1.200+ (teks bebas agar bisa memuat simbol).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Keterangan pendukung",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "order",
      title: "Urutan tampil",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "value", subtitle: "label" },
  },
});
