import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Pertanyaan",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Jawaban",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Tebal", value: "strong" },
              { title: "Miring", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Tautan",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "string",
                    description:
                      "URL lengkap (https://…), mailto:…, atau path internal seperti /#donasi.",
                    validation: (rule) => rule.required(),
                  }),
                ],
              },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Urutan",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    { title: "Urutan", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question", subtitle: "order" },
  },
});
