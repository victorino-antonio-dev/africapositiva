import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Globe2, HeartHandshake, Plane, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { FAQAccordion, Reveal, SectionTitle, TrustBar } from "@/components/site";
import { getBlogPosts } from "@/lib/cms";

export default async function Home() {
  const blogPosts = (await getBlogPosts()).slice(0, 4);

  return <>
    <section className="sun-grid relative overflow-hidden bg-ink pb-20 pt-16 text-white lg:pb-28 lg:pt-20">
      <div className="absolute -right-24 top-10 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-orange-950 opacity-90 blur-[1px]" />
      <div className="absolute bottom-0 right-0 h-36 w-[60%] rounded-[100%_0_0_0] bg-black/60" />
      <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal>
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-orange-200"><Sparkles className="mr-2 h-4 w-4" /> África • Portugal • Mundo</span>
          <h1 className="mt-7 max-w-4xl font-display text-[44px] font-semibold leading-[1.03] tracking-[-.04em] sm:text-6xl lg:text-[74px]">Ligamos sonhos, <span className="text-orange-100 sm:text-orange-400">viagens</span> e oportunidades.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">Apoio humano para viagens, vistos, legalização, orientação documental e integração da comunidade africana.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/contactos" className="rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white hover:bg-orange-400">Começar agora <ArrowRight className="ml-2 inline h-4 w-4" /></Link><Link href="/servicos" className="rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold hover:bg-white/10">Explorar serviços</Link></div>
        </Reveal>
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-yellow-400/30 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full drop-shadow-[0_30px_50px_rgba(0,0,0,.55)]">
            <Image src="/images/logotipo-africapositiva-perfil.png" alt="África Positiva Travel — viagens entre África e o mundo" fill sizes="(max-width: 768px) 90vw, 520px" className="scale-[1.11] object-cover" priority />
          </div>
          <div className="absolute -bottom-4 left-2 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur"><p className="text-xs text-stone-400">A nossa promessa</p><p className="mt-1 font-display font-semibold">Juntos somos mais fortes!</p></div>
        </Reveal>
      </div>
    </section>
    <TrustBar />

    <section className="py-24">
      <div className="container-site">
        <SectionTitle eyebrow="Uma marca, três caminhos" title="Feita para te ajudar a avançar." text="Informação, serviços e comunidade reunidos numa presença oficial, próxima e preparada para crescer contigo." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            { icon: Globe2, no: "01", title: "África Positiva", text: "A marca-mãe: comunicação, eventos, oportunidades e presença institucional.", href: "/quem-somos" },
            { icon: Plane, no: "02", title: "África Positiva Travel", text: "Viagens, vistos, passagens, seguros, estadias e apoio documental.", href: "/travel" },
            { icon: HeartHandshake, no: "03", title: "Comunidade de Imigrantes", text: "Acolhimento, orientação, integração e informação útil.", href: "/comunidade" }
          ].map((a, i) => <Reveal key={a.title}><Link href={a.href} className={`group block min-h-[330px] rounded-[28px] border p-8 transition hover:-translate-y-1 ${i === 1 ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-200" : "border-stone-200 bg-white hover:border-orange-300"}`}><div className="flex items-center justify-between"><a.icon className="h-8 w-8" /><span className="font-display text-xs opacity-60">{a.no}</span></div><h3 className="mt-24 font-display text-2xl font-semibold">{a.title}</h3><p className={`mt-4 text-sm leading-6 ${i === 1 ? "text-orange-50" : "text-stone-600"}`}>{a.text}</p><ArrowRight className="mt-6 h-5 w-5 transition group-hover:translate-x-2" /></Link></Reveal>)}
        </div>
      </div>
    </section>

    <section className="bg-cream py-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Serviços" title="Orientação que transforma dúvidas em próximos passos." /><Link href="/servicos" className="text-sm font-bold text-orange-700">Ver todos os serviços <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-orange-100 bg-orange-100 sm:grid-cols-2 lg:grid-cols-4">{services.map(s => <div key={s.title} className="group bg-white p-7 transition hover:bg-orange-50"><s.icon className="h-7 w-7 text-orange-600" /><p className="mt-10 text-[11px] font-bold uppercase tracking-wider text-stone-400">{s.category}</p><h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{s.description}</p></div>)}</div>
      </div>
    </section>

    <section className="overflow-hidden bg-ink py-24 text-white">
      <div className="container-site grid gap-16 lg:grid-cols-2">
        <div><SectionTitle light eyebrow="Como funciona" title="Um processo humano, simples e acompanhado." text="Cada caso começa por uma conversa. O nosso papel é ajudar-te a perceber o caminho e a preparar cada etapa com mais confiança." /><Link href="/contactos" className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-4 text-sm font-bold">Pedir orientação <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
        <div className="space-y-3">{["Entra em contacto","Conta-nos o teu objetivo","Recebe orientação personalizada","Prepara os documentos","Acompanha o processo"].map((s,i)=><Reveal key={s}><div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[.04] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-display text-sm font-bold">{String(i+1).padStart(2,"0")}</span><p className="font-display font-semibold">{s}</p></div></Reveal>)}</div>
      </div>
    </section>

    <section className="py-24"><div className="container-site"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><SectionTitle eyebrow="Notícias e guias" title="Informação clara para decisões importantes." text="Conteúdos educativos, alertas e orientações práticas para viagens e integração." /><div className="grid gap-4 sm:grid-cols-2">{blogPosts.map(post => <Link href={`/noticias/${post.slug}`} key={post.slug} className="group rounded-3xl border border-stone-200 p-6 transition hover:border-orange-300 hover:shadow-lg"><div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-orange-700"><span>{post.category}</span><span className="text-stone-400">{post.read}</span></div><h3 className="mt-10 font-display text-xl font-semibold leading-7 group-hover:text-orange-700">{post.title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{post.excerpt}</p></Link>)}</div></div></div></section>

    <section className="bg-cream py-24"><div className="container-site grid gap-12 lg:grid-cols-2"><div><SectionTitle eyebrow="Perguntas frequentes" title="Informação boa começa por perguntas honestas." /><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-stone-600"><Compass className="text-orange-600" /> Não encontras a resposta? Fala connosco.</div></div><FAQAccordion /></div></section>
    <section className="bg-orange-500 py-16 text-white"><div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">O teu próximo passo pode começar com uma orientação segura.</h2><Link href="/contactos" className="shrink-0 rounded-full bg-ink px-7 py-4 text-sm font-bold">Falar com a África Positiva <ArrowRight className="ml-2 inline h-4 w-4" /></Link></div></section>
  </>;
}
