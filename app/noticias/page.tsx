import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts, sanityImageUrl } from "@/lib/cms";
export const metadata: Metadata = { title: "Notícias e guias", description: "Informação sobre viagens, vistos, legalização, imigração e comunidade." };
export default async function News() {
  const posts = await getBlogPosts();

  return <><section className="bg-ink py-24 text-white"><div className="container-site"><span className="eyebrow">Centro de informação</span><h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Notícias, guias e alertas úteis.</h1><p className="mt-5 text-stone-300">Conteúdo claro para decisões mais informadas.</p></div></section><section className="py-20"><div className="container-site grid gap-6 md:grid-cols-2">{posts.map(p => {
    const imageUrl = sanityImageUrl(p.image);
    return <Link key={p.slug} href={`/noticias/${p.slug}`} className="group overflow-hidden rounded-3xl border border-stone-200 hover:border-orange-300">
      {imageUrl && <div className="relative aspect-[16/9] overflow-hidden"><Image src={imageUrl} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>}
      <div className="p-8"><span className="text-xs font-bold uppercase tracking-wider text-orange-700">{p.category} • {p.read}</span><h2 className={`${imageUrl ? "mt-7" : "mt-12"} font-display text-2xl font-semibold group-hover:text-orange-700`}>{p.title}</h2><p className="mt-4 leading-7 text-stone-600">{p.excerpt}</p><span className="mt-7 inline-flex text-sm font-bold">Ler artigo <ArrowRight className="ml-2 h-4 w-4" /></span></div>
    </Link>;
  })}</div></section></>;
}
