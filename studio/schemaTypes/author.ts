import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autores",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: rule => rule.required() }),
    defineField({ name: "role", title: "Função", type: "string" }),
    defineField({ name: "image", title: "Fotografia", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biografia", type: "text", rows: 4 })
  ]
});
