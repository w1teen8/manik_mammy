"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { unsplash } from "@/lib/img";
import designs from "@/data/designs.json";

export default function DesignGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 640);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + designs.length) % designs.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="section overflow-hidden bg-bg-soft">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Каталог дизайнів"
          title={<>Обери свій настрій</>}
          link={{ href: "#booking", label: "Переглянути всі дизайни" }}
        />

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Попередні дизайни"
            data-cursor-hover
            onClick={() => scrollByCards(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk transition-colors duration-300 hover:border-champagne hover:text-champagne"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Наступні дизайни"
            data-cursor-hover
            onClick={() => scrollByCards(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk transition-colors duration-300 hover:border-champagne hover:text-champagne"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-[max(1.25rem,5vw)] px-[max(1.25rem,5vw)] pb-2"
      >
        {designs.map((d, i) => (
          <button
            key={d.id}
            type="button"
            data-cursor-hover
            onClick={() => setActive(i)}
            aria-label={`Відкрити дизайн «${d.title}» крупно`}
            className="group relative aspect-[3/4] w-[76vw] shrink-0 snap-start overflow-hidden rounded-[4px] border border-border sm:w-[42vw] lg:w-[24rem]"
          >
            <Image
              src={unsplash(d.image, 640, 78)}
              alt={`Дизайн нігтів: ${d.title}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 24rem"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.09]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-left">
              <div className="translate-y-1 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="eyebrow block text-[0.58rem]">{d.tag}</span>
                <span className="mt-1 block font-display text-xl text-milk">{d.title}</span>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-milk/30 bg-bg/40 text-milk backdrop-blur-sm transition-colors duration-300 group-hover:border-champagne group-hover:bg-champagne group-hover:text-bg">
                <Plus size={15} />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Дизайн: ${designs[active].title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-md sm:p-10"
          >
            <button
              type="button"
              aria-label="Закрити"
              onClick={close}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk transition-colors hover:border-champagne hover:text-champagne"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              aria-label="Попередній"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border-strong text-milk transition-colors hover:border-champagne hover:text-champagne sm:left-8"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.figure
              key={designs[active].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[82vh] w-full max-w-3xl"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] border border-border">
                <Image
                  src={unsplash(designs[active].image, 1400, 85)}
                  alt={`Дизайн нігтів: ${designs[active].title}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 768px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="font-display text-xl text-milk">
                  {designs[active].title}
                </span>
                <span className="eyebrow text-[0.58rem]">
                  {active + 1} / {designs.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              aria-label="Наступний"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border-strong text-milk transition-colors hover:border-champagne hover:text-champagne sm:right-8"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
