import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://africapositiva.example";
  const pages = ["","quem-somos","equipa","travel","comunidade","servicos","vistos-e-legalizacao","viagens","noticias","perguntas-frequentes","contactos","canais-oficiais","politica-de-privacidade","termos-e-condicoes"];
  return [...pages.map(p=>({url:`${base}/${p}`,lastModified:new Date()})),...blogPosts.map(p=>({url:`${base}/noticias/${p.slug}`,lastModified:new Date()}))];
}
