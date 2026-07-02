import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nome", type: "string", validation: rule => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: rule => rule.required() }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 3 })
  ]
});
