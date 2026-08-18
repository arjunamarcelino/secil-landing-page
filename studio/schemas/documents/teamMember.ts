import { defineType, defineField } from "sanity";
import { imageWithAlt } from "../shared";

export const teamMember = defineType({
  name: "teamMember",
  title: "Anggota Tim",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Jabatan",
      type: "string",
      description: "Contoh: Founder, Executive Officer, Chief, Vice Chief, Anggota.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "division",
      title: "Divisi",
      type: "string",
      options: {
        list: [
          { title: "Founders", value: "founders" },
          { title: "Pengurus Inti", value: "pengurus-inti" },
          { title: "Research & Development", value: "rnd" },
          { title: "Teach & Materials", value: "teach" },
          { title: "Public Relations", value: "pr" },
          { title: "Survey Team", value: "survey" },
          { title: "Design & Documentaries", value: "design" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    imageWithAlt("photo", "Foto", false),
    defineField({
      name: "order",
      title: "Urutan dalam divisi",
      type: "number",
      initialValue: 0,
      description: "Semakin kecil, semakin awal (mis. Chief = 1, Vice Chief = 2).",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Divisi lalu urutan",
      name: "divisionThenOrder",
      by: [
        { field: "division", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "position", media: "photo" },
  },
});
