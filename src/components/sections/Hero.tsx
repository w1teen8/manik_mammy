"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FloatingShapes from "@/components/ui/FloatingShapes";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { value: 33, suffix: "+", label: "робіт" },
  { value: 250, suffix: "+", label: "клієнтів" },
  { value: 1000, suffix: "+", label: "Instagram" },
  { value: 100, suffix: "%", label: "індивідуальний дизайн" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-12 pt-28 sm:px-10 lg:px-16"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-24 h-[130%] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1609120144320-389395540740?auto=format&fit=crop&w=2000&q=80"
          alt="Преміальний манікюр Manik Mammy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/70 via-[#090909]/55 to-[#090909]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
      </motion.div>

      <FloatingShapes />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">Боярка · вул. Незалежності, 50</p>
        </Reveal>

        <RevealText
          as="h1"
          text={"Манікюр,\nякий\nнеможливо\nне помітити."}
          className="text-gradient-accent font-display text-[12vw] font-medium leading-[0.96] tracking-tight sm:text-[8vw] lg:text-[5.6vw]"
        />

        <Reveal delay={0.5} className="mt-8 max-w-md">
          <p className="text-balance text-lg leading-relaxed text-[#B8B8B8]">
            Преміальний манікюр, педикюр та нарощування нігтів у Боярці.
          </p>
        </Reveal>

        <Reveal delay={0.65} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton as="a" href="#booking" className="bg-white text-[#090909] hover:bg-[#F3E7FF]">
            Записатися
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#gallery"
            className="border border-white/20 bg-transparent text-white hover:border-white/40"
          >
            Дивитися роботи
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.8} className="mt-8 mb-10 grid grid-cols-2 gap-5 border-t border-white/[0.08] pt-5 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl text-white sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#B8B8B8]"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Гортайте</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
