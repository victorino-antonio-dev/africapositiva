import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SafetyNote } from "@/components/site";
import { PortableContent } from "@/components/portable-content";
import { getBlogPost, getBlogPosts, sanityImageUrl } from "@/lib/cms";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const post=await getBlogPost(slug);
  return post ? { title: post.seoTitle || post.title, description: post.seoDescription || post.excerpt } : {};
}

export default async function Article({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=await getBlogPost(slug);
  if(!post) notFound();
  const imageUrl=sanityImageUrl(post.image,1400,800);

  return <article>
    <header className="bg-cream py-20"><div className="container-site max-w-4xl"><Link href="/noticias" className="text-sm font-bold text-orange-700"><ArrowLeft className="mr-2 inline h-4 w-4"/>Notícias</Link><p className="mt-12 text-xs font-bold uppercase tracking-[.15em] text-orange-700">{post.category} • {post.read}</p><h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">{post.title}</h1><p className="mt-6 text-xl leading-8 text-stone-600">{post.excerpt}</p>{post.author && <p className="mt-6 text-sm font-semibold text-stone-500">Por {post.author}</p>}</div></header>
    {imageUrl && <div className="container-site max-w-5xl pt-12"><div className="relative aspect-[16/9] overflow-hidden rounded-[28px]"><Image src={imageUrl} alt={post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div></div>}
    <div className="container-site max-w-3xl py-16">
      {post.body?.length ? <PortableContent value={post.body} /> : <><p className="text-lg leading-8 text-stone-700">Este conteúdo oferece uma orientação inicial. As exigências e procedimentos podem mudar; confirma sempre a informação junto das autoridades competentes.</p>{["Antes de começar","Organiza a informação","Confirma os requisitos atuais","Protege os teus dados"].map(h=><section key={h} className="py-7"><h2 className="font-display text-2xl font-semibold">{h}</h2><p className="mt-4 leading-8 text-stone-600">Cada processo deve ser analisado de acordo com o objetivo, o país de origem, o destino e a situação individual. Guarda cópias, confirma prazos e utiliza apenas canais oficiais.</p></section>)}</>}
      {post.faq?.length ? <section className="mt-14 border-t border-stone-200 pt-10"><h2 className="font-display text-3xl font-semibold">Perguntas frequentes</h2><div className="mt-6 divide-y divide-stone-200">{post.faq.map(item=><div key={item.question} className="py-5"><h3 className="font-display text-lg font-semibold">{item.question}</h3><p className="mt-3 leading-7 text-stone-600">{item.answer}</p></div>)}</div></section> : null}
      <div className="mt-12"><SafetyNote/></div><Link href="/contactos" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white">Pedir orientação <ArrowRight className="ml-2 h-4 w-4"/></Link>
    </div>
  </article>;
}
