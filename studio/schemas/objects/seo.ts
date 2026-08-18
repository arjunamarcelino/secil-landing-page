import { defineType, defineField } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "Judul SEO",
      type: "string",
      description: "Judul untuk mesin pencari & pratinjau tautan. Kosongkan untuk memakai judul default.",
      validation: (rule) => rule.max(70).warning("Sebaiknya di bawah 70 karakter."),
    }),
    defineField({
      name: "description",
      title: "Deskripsi SEO",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160).warning("Sebaiknya di bawah 160 karakter."),
    }),
  ],
});
