import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const author = defineType({
  name: "author",
  title: "Penulis",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Peran",
      type: "string",
      description: "Contoh: Koordinator Program, Relawan.",
      validation: (rule) => rule.required(),
    }),
    imageWithAlt("photo", "Foto profil", false),
    defineField({
      name: "bio",
      title: "Biografi singkat",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
