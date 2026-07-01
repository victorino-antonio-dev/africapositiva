import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, UsersRound } from "lucide-react";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "A Nossa Equipa",
  description:
    "Conheça a equipa da África Positiva e os profissionais que apoiam clientes em viagens, vistos, documentação e integração."
};

export default function TeamPage() {
  const [founder, ...members] = teamMembers;

  return (
    <>
      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="eyebrow">A nossa equipa</span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-[-.04em] sm:text-6xl">
              Pessoas que ajudam a transformar sonhos em caminhos.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Uma equipa próxima, multidisciplinar e comprometida com cada pessoa que procura orientação.
            </p>
            <div className="mt-9 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-wider text-orange-200">
              <span className="flex items-center gap-2"><UsersRound className="h-4 w-4" /> Atendimento humano</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Orientação responsável</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src="/images/team/equipa-africa-positiva.webp"
              alt="Equipa África Positiva"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-7 pt-24">
              <p className="font-display text-xl font-semibold">Juntos somos mais fortes!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <div className="grid overflow-hidden rounded-[32px] bg-orange-500 lg:grid-cols-2">
            <div className="relative min-h-[520px]">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-8 text-white sm:p-14">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-orange-100">{founder.area}</span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight">{founder.name}</h2>
              <p className="mt-3 font-semibold text-orange-100">{founder.role}</p>
              <p className="mt-8 text-lg leading-8 text-white/90">{founder.description}</p>
              <blockquote className="mt-10 border-l-2 border-white/50 pl-5 font-display text-xl font-semibold">
                “A jornada de um africano não precisa ser feita sozinho.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="eyebrow">Quem faz acontecer</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Especialistas, uma missão comum.
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              Cada área trabalha de forma integrada para oferecer informação clara, acompanhamento próximo e soluções adequadas.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {members.map(member => (
              <article key={member.name} className="group overflow-hidden rounded-[28px] border border-orange-100 bg-white">
                <div className="relative aspect-[4/4.35] overflow-hidden bg-stone-100">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-black/75 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    {member.area}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold text-orange-700">{member.role}</p>
                  <p className="mt-5 text-sm leading-7 text-stone-600">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="container-site flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex gap-5">
            <HeartHandshake className="mt-1 h-8 w-8 shrink-0 text-orange-500" />
            <div>
              <h2 className="font-display text-3xl font-semibold">Precisas da nossa orientação?</h2>
              <p className="mt-2 text-stone-400">A equipa África Positiva está pronta para ouvir o teu objetivo.</p>
            </div>
          </div>
          <Link href="/contactos" className="shrink-0 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold">
            Falar com a equipa <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
