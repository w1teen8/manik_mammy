"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const PHONE_RE = /^(\+?38)?0\d{9}$/;

function normalize(value: string) {
  return value.replace(/[\s()\-]/g, "");
}

export default function Booking() {
  const fieldId = useId();
  const errId = `${fieldId}-err`;
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = normalize(phone);
    if (!raw) {
      setError("Вкажіть номер телефону");
      return;
    }
    if (!PHONE_RE.test(raw)) {
      setError("Перевірте формат: напр. +380 99 123 45 67");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section id="booking" className="section">
      <div className="container-lux">
        <div className="relative overflow-hidden rounded-[4px] border border-border bg-bg-soft px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[36rem] max-w-full rounded-full bg-champagne/10 blur-[90px]"
          />

          <Reveal>
            <span className="eyebrow block">Запис</span>
            <h2 className="display-hero mx-auto mt-5 max-w-[18ch] text-[clamp(2rem,5.4vw,4rem)] text-milk">
              Готова до нового{" "}
              <span className="text-serif-italic gold-text">манікюру?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[0.95rem] leading-relaxed text-text-secondary">
              Залиш свій номер — ми звʼяжемося з тобою та підберемо зручний час.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-[4px] border border-champagne/40 bg-champagne/10 px-6 py-5 text-sm text-milk"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-champagne text-bg">
                  <Check size={16} />
                </span>
                Дякуємо! Ми зателефонуємо вам найближчим часом.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
              >
                <div className="flex-1 text-left">
                  <label htmlFor={fieldId} className="sr-only">
                    Номер телефону
                  </label>
                  <input
                    id={fieldId}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Ваш номер телефону"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (error) setError(null);
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? errId : undefined}
                    className="h-14 w-full rounded-[2px] border border-border-strong bg-bg px-5 text-sm text-milk placeholder:text-text-muted focus:border-champagne focus:outline-none"
                  />
                  {error && (
                    <p id={errId} role="alert" className="mt-2 text-xs text-[#e5a3a3]">
                      {error}
                    </p>
                  )}
                </div>
                <button type="submit" data-cursor-hover className="btn btn-solid h-14">
                  Надіслати
                  <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>

          <p className="mx-auto mt-6 max-w-sm text-[0.72rem] leading-relaxed text-text-muted">
            Натискаючи «Надіслати», ви погоджуєтесь з обробкою персональних даних.
          </p>
        </div>
      </div>
    </section>
  );
}
