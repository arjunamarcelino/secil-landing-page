import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const galleryPhoto = defineType({
  name: "galleryPhoto",
  title: "Galeri Kegiatan",
  type: "document",
  fields: [
    imageWithAlt("image", "Foto"),
    defineField({
      name: "caption",
      title: "Keterangan",
      type: "string",
      description: "Teks singkat yang tampil di atas foto (opsional).",
    }),
    defineField({
      name: "order",
      title: "Urutan",
      type: "number",
      initialValue: 0,
      description: "Foto pertama (urutan terkecil) dipakai sebagai banner lebar di beranda.",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "caption", media: "image" },
    prepare: ({ title, media }) => ({ title: title || "Foto kegiatan", media }),
  },
});
