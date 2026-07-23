"use client";

import { Sparkles, Flower2, Gem, Wand2, Palette, Moon, Zap, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";
import servicesData from "@/data/services.json";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Flower2,
  Gem,
  Wand2,
  Palette,
  Moon,
  Zap,
};

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">02 / Послуги</p>
            </Reveal>
            <RevealText
              as="h2"
              text={"Кожна послуга —\nритуал турботи."}
              className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[#B8B8B8]">
              Від класики до сміливих рішень — обираємо підхід, який відповідає саме вашому стилю.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-[#F3E7FF] transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B8B8B8]">{service.description}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
