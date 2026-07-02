import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert, Clock3, ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { FAQAccordion, SafetyNote, SectionTitle } from "@/components/site";
import { brand } from "@/data/brand";
import { contacts, whatsappMessage } from "@/data/contacts";
import { officialChannels } from "@/data/officialChannels";
import { services } from "@/data/services";
import { socialLinks } from "@/data/socialLinks";

type PageData = { title: string; eyebrow: string; intro: string; kind?: "about" | "travel" | "community" | "services" | "contact" | "channels" | "faq" | "legal" };
const pages: Record<string, PageData> = {
  "quem-somos": { eyebrow: "A nossa história", title: "Somos a África Positiva.", intro: "Nascemos para aproximar pessoas, culturas, oportunidades e soluções — com clareza, segurança e confiança.", kind: "about" },
  travel: { eyebrow: "África Positiva Travel", title: "Viaja com orientação, segurança e confiança.", intro: "Da primeira conversa ao embarque: apoio em viagens, vistos e organização documental.", kind: "travel" },
  comunidade: { eyebrow: "Acolher • Conectar • Fortalecer", title: "Uma comunidade que abre caminhos.", intro: "Informação, acolhimento e ligação para fortalecer a comunidade africana e apoiar cada processo de integração.", kind: "community" },
  servicos: { eyebrow: "O que fazemos", title: "Serviços pensados para o teu próximo passo.", intro: "Soluções de viagem, vistos, documentação e comunidade, com orientação próxima e comunicação clara.", kind: "services" },
  "vistos-e-legalizacao": { eyebrow: "Documentação", title: "Vistos e legalização, explicados com clareza.", intro: "Apoio informativo e documental para preparares cada processo com maior organização.", kind: "services" },
  viagens: { eyebrow: "Viagens", title: "Planeia melhor. Viaja com mais tranquilidade.", intro: "Consultoria, passagens, alojamento, seguro e acompanhamento antes da viagem.", kind: "travel" },
  contactos: { eyebrow: "Estamos próximos", title: "Conta-nos onde queres chegar.", intro: "Partilha o teu objetivo. Respondemos com os próximos passos assim que os canais oficiais estiverem confirmados.", kind: "contact" },
  "canais-oficiais": { eyebrow: "Segurança primeiro", title: "Confirma sempre os nossos canais oficiais.", intro: "Esta é a única página de referência para contactos verificados da África Positiva.", kind: "channels" },
  "perguntas-frequentes": { eyebrow: "FAQ", title: "Perguntas frequentes.", intro: "Respostas simples para começares com mais informação e confiança.", kind: "faq" },
  "politica-de-privacidade": { eyebrow: "Informação legal", title: "Política de Privacidade", intro: "Modelo editável sobre tratamento de dados, formulários, cookies e direitos dos titulares.", kind: "legal" },
  "termos-e-condicoes": { eyebrow: "Informação legal", title: "Termos e Condições", intro: "Condições gerais e responsabilidades associadas à utilização desta plataforma.", kind: "legal" }
};

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug]; return page ? { title: page.title, description: page.intro } : {};
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <>
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="absolute right-[-100px] top-[-180px] h-[480px] w-[480px] rounded-full bg-orange-500/25 blur-3xl" />
      <div className="container-site relative"><span className="eyebrow">{page.eyebrow}</span><h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-.035em] sm:text-6xl">{page.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">{page.intro}</p></div>
    </section>
    <section className="py-20"><div className="container-site">
      {page.kind === "about" && <div>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Como tudo começou</span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl">Uma visão que se tornou caminho.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-orange-500 p-5 text-white"><p className="text-xs font-bold uppercase tracking-wider text-orange-100">Fundação</p><p className="mt-2 font-display font-semibold">{brand.foundedAt}</p></div>
              <div className="rounded-2xl bg-ink p-5 text-white"><p className="text-xs font-bold uppercase tracking-wider text-stone-400">CEO</p><p className="mt-2 text-sm font-semibold leading-5">{brand.ceo}</p></div>
            </div>
          </div>
          <div className="space-y-5 text-[17px] leading-8 text-stone-600">{brand.history.map((paragraph, index) => <p key={index} className={index === 1 ? "border-l-4 border-orange-500 pl-6 font-display text-xl font-semibold leading-8 text-ink" : ""}>{paragraph}</p>)}</div>
        </div>
        <div className="mt-20">
          <SectionTitle eyebrow="A nossa estrutura" title="Três pilares, um só propósito." text="Com o tempo, o projeto cresceu e passou a organizar-se em três áreas complementares." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{brand.pillars.map((pillar, index) => <div key={pillar.title} className="rounded-3xl border border-stone-200 p-8"><span className="text-xs font-bold text-orange-600">0{index + 1}</span><h3 className="mt-12 font-display text-xl font-semibold">{pillar.title}</h3><p className="mt-4 text-sm leading-7 text-stone-600">{pillar.description}</p></div>)}</div>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-3">{[
          ["Missão","Apoiar pessoas e comunidades africanas com orientação segura, serviços úteis e informação clara."],
          ["Visão","Ser uma referência africana em viagens, imigração, integração comunitária e comunicação positiva."],
          ["Valores","Confiança, transparência, acolhimento, proximidade, responsabilidade e impacto positivo."]
        ].map(([t,d])=><div key={t} className="rounded-3xl border border-stone-200 p-8"><h2 className="font-display text-2xl font-semibold">{t}</h2><p className="mt-4 leading-7 text-stone-600">{d}</p></div>)}</div>
      </div>}
      {(page.kind === "services" || page.kind === "travel" || page.kind === "community") && <><SectionTitle eyebrow="Áreas de apoio" title="Encontra o apoio certo para o teu objetivo." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.filter(s => page.kind !== "community" || s.category === "Comunidade" || s.category === "Documentação").map(s=><article key={s.title} className="rounded-3xl border border-stone-200 bg-white p-7"><s.icon className="h-7 w-7 text-orange-600" /><p className="mt-8 text-xs font-bold uppercase tracking-wider text-orange-700">{s.category}</p><h2 className="mt-2 font-display text-xl font-semibold">{s.title}</h2><p className="mt-3 text-sm leading-6 text-stone-600">{s.description}</p><Link href="/contactos" className="mt-6 inline-flex text-sm font-bold">Pedir informação <ArrowRight className="ml-2 h-4 w-4" /></Link></article>)}</div></>}
      {page.kind === "contact" && <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]"><form className="rounded-3xl border border-stone-200 bg-white p-7 md:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Nome<input className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 font-normal outline-none focus:border-orange-500" placeholder="O teu nome" /></label><label className="text-sm font-semibold">Email<input type="email" className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 font-normal outline-none focus:border-orange-500" placeholder="nome@email.com" /></label></div><label className="mt-5 block text-sm font-semibold">Assunto<select className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 font-normal"><option>Selecionar serviço</option><option>Viagens</option><option>Vistos</option><option>Documentação</option><option>Comunidade</option></select></label><label className="mt-5 block text-sm font-semibold">Mensagem<textarea rows={5} className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 font-normal outline-none focus:border-orange-500" placeholder="Como podemos ajudar?" /></label><button type="button" className="mt-5 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white">Enviar pedido</button></form><div><SafetyNote /><div className="mt-6 space-y-5 rounded-3xl bg-cream p-7"><div className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-orange-600" /><div><p className="font-semibold">WhatsApp</p><a className="mt-1 block text-sm text-stone-600 hover:text-orange-700" href={`https://wa.me/${contacts.whatsappAngola.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer">Angola: {contacts.whatsappAngola}</a><a className="mt-1 block text-sm text-stone-600 hover:text-orange-700" href={`https://wa.me/${contacts.whatsappPortugal.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer">Portugal: {contacts.whatsappPortugal}</a></div></div><div className="flex gap-3"><Mail className="mt-1 shrink-0 text-orange-600" /><div><p className="font-semibold">Emails</p><a href={`mailto:${contacts.emailGeneral}`} className="mt-1 block break-all text-sm text-stone-600 hover:text-orange-700">{contacts.emailGeneral}</a><a href={`mailto:${contacts.emailCommunity}`} className="mt-1 block break-all text-sm text-stone-600 hover:text-orange-700">{contacts.emailCommunity}</a></div></div><div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-orange-600" /><div><p className="font-semibold">Moradas</p><p className="mt-1 text-sm leading-6 text-stone-600">Angola: {contacts.addressAngola}</p><p className="mt-1 text-sm leading-6 text-stone-600">Portugal: {contacts.addressPortugal}</p></div></div><div className="flex gap-3"><ExternalLink className="mt-1 shrink-0 text-orange-600" /><div><p className="font-semibold">Redes sociais</p>{socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="mt-1 block text-sm text-stone-600 hover:text-orange-700">{social.name}</a>)}</div></div><p className="flex gap-3 text-sm font-semibold"><Clock3 className="shrink-0 text-orange-600" /> {contacts.schedule}</p></div></div></div>}
      {page.kind === "channels" && <div className="grid gap-4 md:grid-cols-2">{officialChannels.map(c=><div key={c.name} className="flex min-w-0 flex-col items-start gap-4 rounded-2xl border border-stone-200 p-5 sm:min-h-32 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:p-6"><div className="min-w-0 w-full"><p className="font-display font-semibold leading-6">{c.name}</p>{"url" in c ? <a href={c.url} target="_blank" rel="noreferrer" className="mt-2 block break-all text-sm leading-6 text-orange-700 hover:underline">{c.value}</a> : <p className="mt-2 break-words text-sm leading-6 text-stone-500">{c.value}</p>}</div><span className={`shrink-0 self-start rounded-full px-3 py-1.5 text-[11px] font-bold sm:self-center ${c.verified ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>{c.verified ? "Confirmado" : "Por confirmar"}</span></div>)}<div className="mt-3 md:col-span-2 md:mt-5"><SafetyNote /></div></div>}
      {page.kind === "faq" && <div className="mx-auto max-w-3xl"><FAQAccordion /></div>}
      {page.kind === "legal" && <div className="prose prose-stone mx-auto max-w-3xl"><div className="mb-6 flex gap-3 rounded-2xl bg-amber-50 p-5 text-sm text-amber-900"><CircleAlert className="shrink-0" /> Este conteúdo é um modelo e deve ser revisto juridicamente antes da publicação oficial.</div>{["Responsável pelo tratamento","Dados recolhidos","Finalidades e fundamento","Conservação e segurança","Partilha de dados","Direitos dos titulares","Cookies e alterações","Contactos"].map(t=><div key={t} className="border-b border-stone-200 py-6"><h2 className="font-display text-xl font-semibold">{t}</h2><p className="mt-3 leading-7 text-stone-600">A informação detalhada desta secção será adaptada aos processos, entidades e contactos oficiais confirmados pela África Positiva.</p></div>)}</div>}
    </div></section>
    {["about","services","travel","community"].includes(page.kind || "") && <section className="bg-orange-500 py-14 text-white"><div className="container-site flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="font-display text-2xl font-semibold">Pronto para dar o próximo passo?</p><p className="mt-2 text-orange-100">Começa com uma conversa clara e sem compromisso.</p></div><Link href="/contactos" className="rounded-full bg-ink px-6 py-4 text-sm font-bold">Falar connosco <ArrowRight className="ml-2 inline h-4 w-4" /></Link></div></section>}
  </>;
}
