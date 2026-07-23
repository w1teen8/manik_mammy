"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";
import faqData from "@/data/faq.json";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(faqData[0]?.id ?? null);

  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">07 / FAQ</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Питання,\nякі ставлять часто."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <div className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqData.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.06}>
                <div>
                  <button
                    data-cursor-hover
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-white sm:text-xl">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isOpen ? "border-[#F3E7FF]/40 text-[#F3E7FF]" : "border-white/[0.1] text-white"
                      )}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 leading-relaxed text-[#B8B8B8]">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
