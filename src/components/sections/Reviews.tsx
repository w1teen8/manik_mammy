"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";
import reviewsData from "@/data/reviews.json";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviewsData.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const review = reviewsData[index];
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <section id="reviews" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">06 / Відгуки</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Слова, які\nговорять голосніше."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div
          className="mt-16 mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass relative min-h-[320px] overflow-hidden rounded-[28px] p-10 sm:p-14">
            <Quote size={56} strokeWidth={1} className="text-[#F3E7FF]/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#F3E7FF" className="text-[#F3E7FF]" />
                  ))}
                </div>
                <p className="mt-6 text-balance text-xl leading-relaxed text-white sm:text-2xl">{review.text}</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] font-display text-sm text-[#F3E7FF]">
                    {initials}
                  </div>
                  <p className="text-sm text-[#B8B8B8]">{review.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviewsData.map((r, i) => (
                <button
                  key={r.id}
                  data-cursor-hover
                  aria-label={`Відгук ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-white" : "w-1.5 bg-white/20"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                data-cursor-hover
                aria-label="Попередній відгук"
                onClick={() => setIndex((i) => (i - 1 + reviewsData.length) % reviewsData.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                data-cursor-hover
                aria-label="Наступний відгук"
                onClick={() => setIndex((i) => (i + 1) % reviewsData.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
