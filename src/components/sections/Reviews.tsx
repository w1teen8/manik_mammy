"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplash } from "@/lib/img";
import reviews from "@/data/reviews.json";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const hovering = useRef(false);

  const go = useCallback((d: 1 | -1) => {
    setDir(d);
    setIndex((cur) => (cur + d + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (!hovering.current) go(1);
    }, 7000);
    return () => clearInterval(id);
  }, [go]);

  const r = reviews[index];

  return (
    <section id="reviews" className="section">
      <div className="container-lux">
        <SectionHeading eyebrow="Відгуки" title={<>Що кажуть клієнтки</>} />

        <div
          className="relative mt-14 overflow-hidden rounded-[4px] border border-border bg-surface p-8 sm:p-14"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          <Quote
            size={72}
            className="absolute -top-2 right-6 text-champagne/10"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={r.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl"
            >
              <div className="flex gap-1" aria-label={`Оцінка ${r.rating} з 5`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-champagne text-champagne" />
                ))}
              </div>

              <p className="mt-6 font-display text-[clamp(1.5rem,3.2vw,2.3rem)] leading-snug text-milk">
                «{r.text}»
              </p>

              <footer className="mt-8 flex items-center gap-4">
                <span className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                  <Image
                    src={unsplash(r.avatar, 120, 70)}
                    alt={r.name}
                    fill
                    loading="lazy"
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block text-sm font-semibold tracking-wide text-milk">
                    {r.name}
                  </span>
                  <span className="block text-[0.72rem] uppercase tracking-[0.14em] text-text-muted">
                    {r.role}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((rv, i) => (
                <button
                  key={rv.id}
                  type="button"
                  aria-label={`Відгук ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-champagne" : "w-1.5 bg-border-strong hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Попередній відгук"
                data-cursor-hover
                onClick={() => go(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk transition-colors duration-300 hover:border-champagne hover:text-champagne"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Наступний відгук"
                data-cursor-hover
                onClick={() => go(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk transition-colors duration-300 hover:border-champagne hover:text-champagne"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
