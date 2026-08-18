import { defineField } from "sanity";

/** An image field that always requires alt text (for accessibility + SEO). */
export function imageWithAlt(name: string, title: string, required = true) {
  return defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Teks alternatif",
        type: "string",
        description: "Deskripsi singkat gambar untuk pembaca layar dan SEO.",
        validation: (rule) => rule.required(),
      }),
    ],
    validation: required ? (rule) => rule.required() : undefined,
  });
}
