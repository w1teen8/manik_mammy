"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplash } from "@/lib/img";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Послуги"
          title={<>Догляд, що підкреслює тебе</>}
          link={{ href: "#booking", label: "Переглянути всі послуги" }}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <a
                href="#booking"
                data-cursor-hover
                className="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-surface transition-colors duration-500 hover:border-border-strong"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={unsplash(s.image, 700, 78)}
                    alt={`${s.title} — Manik Mammy`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-milk">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-text-secondary">
                    {s.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                      {s.price}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border-strong text-milk transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-bg">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
