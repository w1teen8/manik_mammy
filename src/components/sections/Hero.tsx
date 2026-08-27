"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { unsplash } from "@/lib/img";

const ease = [0.16, 1, 0.3, 1] as const;

const line = {
  hidden: { opacity: 0, y: "110%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 1, ease, delay: 0.35 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={unsplash("1487412947147-5cebf100ffc2", 2000, 80)}
          alt="Крупний план доглянутого манікюру Manik Mammy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg from-5% via-bg/80 via-45% to-bg/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/55" />
        <div className="absolute inset-0 bg-bg/15" />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-[clamp(1.25rem,5vw,5rem)] pb-28 pt-36 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="eyebrow mb-7 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-champagne/60" />
          Nails. By professionals
        </motion.span>

        <h1 className="display-hero max-w-[16ch] text-[clamp(2.8rem,8.5vw,7rem)] text-milk">
          {["Манікюр,", "який неможливо", "не помітити."].map((t, i) => (
            <span key={t} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className={i === 2 ? "block text-serif-italic gold-text" : "block"}
              >
                {t}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="mt-8 max-w-md text-[0.98rem] leading-relaxed text-text-secondary"
        >
          Беззаперечна якість, індивідуальний підхід та увага до кожної деталі —
          у студії в самому серці Києва.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.05 }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a href="#booking" data-cursor-hover className="btn btn-solid">
            Записатись
          </a>
          <a
            href="#gallery"
            data-cursor-hover
            className="group inline-flex items-center gap-3 px-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-milk"
          >
            Переглянути роботи
            <ArrowRight
              size={16}
              className="text-champagne transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Прокрутити далі"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce text-champagne" />
      </motion.a>
    </section>
  );
}
