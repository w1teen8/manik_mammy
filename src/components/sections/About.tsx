"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1566257584125-585d02c1fdd1?auto=format&fit=crop&w=1400&q=80"
            alt="Про Manik Mammy"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/40 via-transparent to-transparent" />
        </motion.div>

        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">01 / Про нас</p>
          </Reveal>

          <RevealText
            as="h2"
            text={"Кожна деталь\nмає значення."}
            className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          />

          <Reveal delay={0.3} className="mt-8 max-w-lg space-y-5 text-lg leading-relaxed text-[#B8B8B8]">
            <p>
              <span className="text-white">MANIK MAMMY</span> — це місце, де кожна робота створюється індивідуально.
            </p>
            <p>
              Ми працюємо лише якісними матеріалами, дотримуємося стерильності та створюємо дизайн, який підкреслює ваш стиль.
            </p>
          </Reveal>

          <Reveal delay={0.45} className="mt-10 grid grid-cols-2 gap-6 border-t border-white/[0.08] pt-8 sm:max-w-md">
            <div>
              <p className="font-display text-2xl text-white">5+ років</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">досвіду роботи</p>
            </div>
            <div>
              <p className="font-display text-2xl text-white">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">стерильність</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
