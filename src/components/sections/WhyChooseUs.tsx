"use client";

import { Clock, ShieldCheck, PenTool, Gem, Palette, Layers, HeartHandshake, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";

const FEATURES: { icon: LucideIcon; title: string }[] = [
  { icon: Clock, title: "Покриття за 1 годину" },
  { icon: ShieldCheck, title: "Стерильний інструмент" },
  { icon: PenTool, title: "Авторський дизайн" },
  { icon: Gem, title: "Якісні матеріали" },
  { icon: Palette, title: "Великий вибір кольорів" },
  { icon: Layers, title: "Довговічне покриття" },
  { icon: HeartHandshake, title: "Індивідуальний підхід" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">04 / Чому ми</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Стандарт, який\nвідчувається одразу."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 0.08}>
              <GlassCard className="h-full">
                <feature.icon size={22} strokeWidth={1.5} className="text-[#F3E7FF]" />
                <p className="mt-6 text-base leading-snug text-white">{feature.title}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
