import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const partner = defineType({
  name: "partner",
  title: "Mitra",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama mitra",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    imageWithAlt("logo", "Logo"),
    defineField({
      name: "website",
      title: "Situs web",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
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
  preview: { select: { title: "name", media: "logo" } },
});
