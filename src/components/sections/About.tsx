"use client";

import Image from "next/image";
import { ShieldCheck, Diamond, Users, Coffee } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { unsplash } from "@/lib/img";

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Безпека понад усе",
    text: "Стерилізація інструментів у сухожаровій шафі та одноразові пилки для кожної клієнтки.",
  },
  {
    icon: Diamond,
    title: "Преміум матеріали",
    text: "Використовуємо лише сертифіковані бренди гель-лаків, баз і топів із насиченим пігментом.",
  },
  {
    icon: Users,
    title: "Досвідчені майстри",
    text: "Команда з профільною освітою, яка постійно вдосконалюється на профільних курсах.",
  },
  {
    icon: Coffee,
    title: "Атмосфера комфорту",
    text: "Затишний простір, ароматна кава та музика — час, який хочеться проживати повільно.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-lux grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-border">
            <Image
              src={unsplash("1600948836101-f9ffda59d250", 900, 80)}
              alt="Інтерʼєр студії манікюру Manik Mammy"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="panel absolute -bottom-6 -right-4 hidden max-w-[13rem] flex-col gap-1 p-5 sm:flex lg:-right-10">
            <span className="font-display text-3xl text-milk">2016</span>
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-text-secondary">
              рік заснування студії
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col">
          <Reveal>
            <span className="eyebrow block">Про нас</span>
            <h2 className="display-hero mt-5 text-[clamp(2rem,5vw,3.7rem)] text-milk">
              Тут створюють красу,{" "}
              <span className="text-serif-italic gold-text">якій довіряють.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-text-secondary">
              Manik Mammy — це студія, де естетика зустрічається з бездоганним
              сервісом. Ми не робимо «просто нігті»: ми підбираємо форму, відтінок
              і дизайн під твій стиль життя, працюємо делікатно й акуратно та
              дбаємо про здоровʼя натуральної нігтьової пластини.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <a href="#booking" data-cursor-hover className="btn btn-ghost mt-8 self-start">
              Дізнатись більше
            </a>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2">
            {ADVANTAGES.map((a, i) => (
              <Reveal
                key={a.title}
                delay={0.1 + i * 0.06}
                className="flex flex-col gap-3 bg-bg p-6"
              >
                <a.icon
                  size={22}
                  strokeWidth={1.3}
                  className="text-champagne"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl text-milk">{a.title}</h3>
                <p className="text-[0.8rem] leading-relaxed text-text-secondary">
                  {a.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
