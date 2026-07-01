"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, ShieldCheck, X } from "lucide-react";
import { contacts, whatsappMessage } from "@/data/contacts";
import { faqs } from "@/data/faqs";

export const nav = [
  ["Início", "/"], ["Quem Somos", "/quem-somos"], ["Serviços", "/servicos"],
  ["Travel", "/travel"], ["Comunidade", "/comunidade"], ["Notícias", "/noticias"], ["Contactos", "/contactos"]
];

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="flex items-center gap-3" aria-label="África Positiva — Início">
    <Image src="/images/logotipo-original.png" alt="Logótipo África Positiva Travel" width={56} height={56} className="rounded-full object-cover" priority />
    <span className={`font-display text-[15px] font-bold leading-tight ${light ? "text-white" : "text-ink"}`}>África Positiva<small className="block text-[9px] font-semibold uppercase tracking-[.28em] text-orange-500">Travel & Community</small></span>
  </Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
    <div className="container-site flex h-[78px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex">{nav.map(([label, href]) => <Link key={href} href={href} className="text-[13px] font-semibold text-stone-700 transition hover:text-orange-600">{label}</Link>)}</nav>
      <Link href="/contactos" className="hidden rounded-full bg-ink px-5 py-3 text-xs font-bold text-white transition hover:bg-orange-600 sm:inline-flex">Falar connosco <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
      <button onClick={() => setOpen(!open)} className="rounded-full border border-stone-200 p-3 lg:hidden" aria-label="Abrir menu">{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden border-t bg-white lg:hidden"><div className="container-site flex flex-col py-5">{nav.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="border-b border-stone-100 py-4 font-semibold">{label}</Link>)}</div></motion.nav>}</AnimatePresence>
  </header>;
}

export function Footer() {
  return <footer className="bg-ink py-16 text-white">
    <div className="container-site grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
      <div><Logo light /><p className="mt-6 max-w-sm text-sm leading-7 text-stone-400">Viagens, apoio documental e comunidade. Uma ponte de confiança entre África, Portugal e o mundo.</p></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-orange-400">Explorar</p>{nav.slice(1, 6).map(([l,h]) => <Link key={h} href={h} className="mb-3 block text-sm text-stone-300 hover:text-white">{l}</Link>)}</div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-orange-400">Confiança</p><Link href="/canais-oficiais" className="mb-3 block text-sm text-stone-300">Canais oficiais</Link><Link href="/politica-de-privacidade" className="mb-3 block text-sm text-stone-300">Privacidade</Link><Link href="/termos-e-condicoes" className="block text-sm text-stone-300">Termos</Link></div>
    </div>
    <div className="container-site mt-14 border-t border-white/10 pt-7 text-xs text-stone-500">© {new Date().getFullYear()} África Positiva. Todos os direitos reservados.</div>
  </footer>;
}

export function WhatsAppButton() {
  const href = contacts.whatsappPortugal ? `https://wa.me/${contacts.whatsappPortugal}?text=${encodeURIComponent(whatsappMessage)}` : "/contactos";
  return <Link href={href} className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-xl transition hover:scale-105" aria-label="Contactar por WhatsApp"><MessageCircle /></Link>;
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }} className={className}>{children}</motion.div>;
}

export function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-2xl"><span className="eyebrow">{eyebrow}</span><h2 className={`mt-5 font-display text-3xl font-semibold leading-[1.12] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>{text && <p className={`mt-5 max-w-xl leading-7 ${light ? "text-stone-300" : "text-stone-600"}`}>{text}</p>}</div>;
}

export function FAQAccordion() {
  const [active, setActive] = useState(0);
  return <div className="divide-y divide-stone-200">{faqs.map((item, i) => <div key={item.q} className="py-2"><button onClick={() => setActive(active === i ? -1 : i)} className="flex w-full items-center justify-between py-5 text-left font-display font-semibold"><span>{item.q}</span><ChevronDown className={`h-5 w-5 transition ${active === i ? "rotate-180 text-orange-600" : ""}`} /></button><AnimatePresence>{active === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-5 text-sm leading-7 text-stone-600">{item.a}</motion.p>}</AnimatePresence></div>)}</div>;
}

export function TrustBar() {
  return <div className="border-y border-stone-200 bg-white py-4"><div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-bold uppercase tracking-[.12em] text-stone-500">{["Atendimento humano","Orientação clara","Canais verificados","Dados protegidos"].map(x => <span key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-500" />{x}</span>)}</div></div>;
}

export function SafetyNote() {
  return <div className="flex gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-5"><ShieldCheck className="h-6 w-6 shrink-0 text-orange-600" /><p className="text-sm leading-6 text-stone-700"><strong>Protege-te.</strong> Antes de enviares documentos ou efetuares qualquer pagamento, confirma sempre se estás a falar com um canal oficial da África Positiva.</p></div>;
}
