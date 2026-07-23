"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import pricesData from "@/data/prices.json";

export default function Prices() {
  return (
    <section id="price" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">03 / Прайс</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Прозорі ціни,\nбездоганний результат."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div className="mt-16 space-y-16">
          {pricesData.map((group, groupIdx) => (
            <div key={group.category}>
              <Reveal delay={groupIdx * 0.05}>
                <h3 className="mb-6 font-display text-2xl text-white">{group.category}</h3>
              </Reveal>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 0.08}>
                    <GlassCard
                      className={cn(
                        "flex h-full flex-col justify-between",
                        item.featured && "border-[#F3E7FF]/30 bg-white/[0.06]"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-sm uppercase tracking-[0.15em] text-[#B8B8B8]">{item.name}</span>
                        {item.featured && (
                          <span className="rounded-full border border-[#F3E7FF]/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[#F3E7FF]">
                            Топ вибір
                          </span>
                        )}
                      </div>
                      <div className="mt-10 flex items-end justify-between">
                        <p className="font-display text-4xl text-white">
                          {item.price}
                          <span className="ml-1 text-lg text-[#B8B8B8]">{item.unit}</span>
                        </p>
                        <a
                          href="#booking"
                          data-cursor-hover
                          aria-label={`Записатись на ${item.name}`}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
