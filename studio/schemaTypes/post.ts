import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Notícias",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: rule => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: rule => rule.required() }),
    defineField({ name: "excerpt", title: "Resumo", type: "text", rows: 4, validation: rule => rule.required().max(220) }),
    defineField({ name: "mainImage", title: "Imagem principal", type: "image", options: { hotspot: true }, fields: [
      defineField({ name: "alt", title: "Texto alternativo", type: "string", validation: rule => rule.required() }),
      defineField({ name: "caption", title: "Legenda", type: "string" })
    ] }),
    defineField({ name: "category", title: "Categoria", type: "reference", to: [{ type: "category" }], validation: rule => rule.required() }),
    defineField({ name: "author", title: "Autor", type: "reference", to: [{ type: "author" }], validation: rule => rule.required() }),
    defineField({ name: "publishedAt", title: "Data de publicação", type: "datetime", initialValue: () => new Date().toISOString(), validation: rule => rule.required() }),
    defineField({ name: "readingTime", title: "Tempo de leitura", type: "string", initialValue: "5 min" }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Citação", value: "blockquote" }
          ],
          marks: {
            annotations: [
              defineArrayMember({
                name: "link",
                title: "Link",
                type: "object",
                fields: [defineField({ name: "href", title: "URL", type: "url" })]
              })
            ]
          }
        }),
        defineArrayMember({ type: "image", options: { hotspot: true }, fields: [
          defineField({ name: "alt", title: "Texto alternativo", type: "string", validation: rule => rule.required() }),
          defineField({ name: "caption", title: "Legenda", type: "string" })
        ] })
      ],
      validation: rule => rule.required()
    }),
    defineField({
      name: "faq",
      title: "Perguntas frequentes",
      type: "array",
      of: [defineArrayMember({
        type: "object",
        name: "faqItem",
        fields: [
          defineField({ name: "question", title: "Pergunta", type: "string", validation: rule => rule.required() }),
          defineField({ name: "answer", title: "Resposta", type: "text", rows: 4, validation: rule => rule.required() })
        ],
        preview: { select: { title: "question", subtitle: "answer" } }
      })]
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Título SEO", type: "string", validation: rule => rule.max(60) }),
        defineField({ name: "description", title: "Descrição SEO", type: "text", rows: 3, validation: rule => rule.max(160) })
      ]
    })
  ],
  orderings: [{ title: "Mais recentes", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category.title", media: "mainImage" }
  }
});
