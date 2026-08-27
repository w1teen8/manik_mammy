"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplash } from "@/lib/img";
import masters from "@/data/masters.json";

export default function Masters() {
  return (
    <section id="masters" className="section bg-bg-soft">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Майстри"
          title={<>Руки, яким довіряєш</>}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {masters.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-bg transition-colors duration-500 hover:border-border-strong">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={unsplash(m.image, 700, 78)}
                    alt={`${m.name} — майстриня Manik Mammy`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-milk/20 bg-bg/50 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-milk backdrop-blur-sm">
                    {m.experience}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-milk">{m.name}</h3>
                  <p className="mt-1 text-[0.74rem] uppercase tracking-[0.12em] text-champagne">
                    {m.role}
                  </p>

                  <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                    {m.specialties.map((sp) => (
                      <li
                        key={sp}
                        className="rounded-full border border-border px-3 py-1 text-[0.68rem] text-text-secondary"
                      >
                        {sp}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#booking"
                    data-cursor-hover
                    className="mt-6 inline-flex items-center justify-between border-t border-border pt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-milk transition-colors duration-300 hover:text-champagne"
                  >
                    Записатись до майстра
                    <ArrowUpRight size={15} className="text-champagne" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
