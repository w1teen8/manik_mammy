"use client";

import { Heart, MessageCircle, Sparkles, Send } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FloatingShapes from "@/components/ui/FloatingShapes";

const MARQUEE_ITEMS = [
  "@MANIK.MAMMY",
  "АВТОРСЬКИЙ ДИЗАЙН",
  "БОЯРКА",
  "НОВІ РОБОТИ ЩОТИЖНЯ",
];

export default function Instagram() {
  return (
    <section id="gallery" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <FloatingShapes className="opacity-60" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">08 / Instagram</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Слідкуйте за\nнашою естетикою."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.15}>
            <GlassCard className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-2xl text-white">@manik.mammy</p>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#B8B8B8]">
                    Щоденна естетика студії: нові роботи, закулісся та натхнення для вашого наступного манікюру.
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[#F3E7FF]">
                  <InstagramIcon size={22} />
                </div>
              </div>

              <div className="mt-10 flex items-end justify-between gap-6">
                <div>
                  <div className="font-display text-4xl text-white sm:text-5xl">
                    <AnimatedCounter value={1000} suffix="+" />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">підписників</p>
                </div>
                <MagneticButton
                  as="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 bg-transparent text-white hover:border-white/40"
                >
                  <InstagramIcon size={16} />
                  Перейти в Instagram
                </MagneticButton>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.25} className="grid grid-cols-3 gap-4">
            {[
              { icon: Heart, label: "Вподобання" },
              { icon: MessageCircle, label: "Відгуки" },
              { icon: Sparkles, label: "Новий дизайн" },
              { icon: Send, label: "Директ 24/7" },
              { icon: InstagramIcon, label: "Stories щодня" },
              { icon: Heart, label: "Реальні клієнтки" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass flex aspect-square flex-col items-center justify-center gap-3 rounded-[24px] p-4 text-center"
              >
                <item.icon size={20} strokeWidth={1.5} className="text-[#F3E7FF]" />
                <p className="text-xs leading-snug text-[#B8B8B8]">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.3} className="relative mt-20 overflow-hidden border-y border-white/[0.08] py-6">
        <div className="animate-marquee flex w-max gap-16 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="font-display text-2xl text-white/20 sm:text-3xl">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
