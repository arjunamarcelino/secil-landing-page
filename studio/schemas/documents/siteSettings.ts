import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Situs",
  type: "document",
  fields: [
    defineField({
      name: "orgName",
      title: "Nama organisasi",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi singkat",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contact",
      title: "Kontak",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Surel", type: "string" }),
        defineField({ name: "phone", title: "Telepon", type: "string" }),
        defineField({ name: "address", title: "Alamat", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Media sosial",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              description: "Contoh: Instagram.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "Tautan",
              type: "url",
              validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
            }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "donation",
      title: "Informasi donasi",
      type: "object",
      fields: [
        defineField({ name: "bankName", title: "Nama bank", type: "string" }),
        defineField({ name: "accountNumber", title: "Nomor rekening", type: "string" }),
        defineField({ name: "accountHolder", title: "Atas nama", type: "string" }),
        defineField({ name: "note", title: "Catatan", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "defaultSeo",
      title: "SEO default",
      type: "seo",
    }),
    defineField({
      name: "hki",
      title: "Merek Terdaftar (HKI)",
      type: "object",
      fields: [
        defineField({
          name: "registrationNumber",
          title: "Nomor registrasi",
          type: "string",
          description: "Contoh: IDM001097863.",
        }),
        defineField({
          name: "url",
          title: "Tautan validasi (DGIP)",
          type: "url",
          validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Pengaturan Situs" }),
  },
});
