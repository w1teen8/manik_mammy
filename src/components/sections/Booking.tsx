"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import servicesData from "@/data/services.json";

const inputClass =
  "w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] px-5 py-4 text-white placeholder:text-[#6b6b6b] outline-none transition-colors focus:border-[#F3E7FF]/40";

type Status = "idle" | "submitting" | "success";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  };

  return (
    <section id="booking" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">10 / Запис</p>
          </Reveal>
          <RevealText
            as="h2"
            text={"Забронюйте\nсвій час."}
            className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-[#B8B8B8]">
              Залиште заявку — ми зв&apos;яжемося з вами протягом дня, щоб підтвердити зручний час візиту.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="glass relative overflow-hidden rounded-[28px] p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F3E7FF]/40 text-[#F3E7FF]">
                  <Check size={26} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-white">Заявку прийнято</h3>
                <p className="mt-2 max-w-xs text-[#B8B8B8]">
                  Дякуємо! Ми зв&apos;яжемося з вами найближчим часом для підтвердження запису.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="name">
                    Ім&apos;я
                  </label>
                  <input id="name" name="name" required placeholder="Ваше ім'я" className={inputClass} />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="phone">
                    Телефон
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="+38 (___) ___-__-__" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="service">
                    Послуга
                  </label>
                  <select id="service" name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Оберіть послугу
                    </option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#121212]">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="date">
                    Дата
                  </label>
                  <input id="date" name="date" type="date" required className={inputClass} />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="time">
                    Час
                  </label>
                  <input id="time" name="time" type="time" required className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="comment">
                    Коментар
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    placeholder="Побажання щодо дизайну, форми чи довжини"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-hover
                  disabled={status === "submitting"}
                  className="mt-2 flex h-16 w-full items-center justify-center gap-2 rounded-[18px] bg-white text-sm font-medium tracking-wide text-[#090909] transition-colors hover:bg-[#F3E7FF] disabled:opacity-70 sm:col-span-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Надсилаємо...
                    </>
                  ) : (
                    "Записатися"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
