"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

const STEPS = [
  { n: "01", title: "Запис", desc: "Обираєте зручні дату й час онлайн або в Instagram." },
  { n: "02", title: "Консультація", desc: "Обговорюємо форму, довжину та дизайн під ваш стиль." },
  { n: "03", title: "Процедура", desc: "Стерильні інструменти та якісні матеріали преміум-класу." },
  { n: "04", title: "Ідеальний результат", desc: "Довговічне покриття, яким хочеться ділитися." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">05 / Процес</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Чотири кроки\nдо ідеалу."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-white/[0.08] lg:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-6 top-6 hidden h-px bg-gradient-to-r from-[#F3E7FF] to-white lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.15}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#090909] font-display text-sm text-[#F3E7FF]">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-white">{step.title}</h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-[#B8B8B8]">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
