"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import Calendar from "@/components/ui/Calendar";
import { cn } from "@/lib/utils";
import servicesData from "@/data/services.json";

const inputClass =
  "w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] px-5 py-4 text-white placeholder:text-[#6b6b6b] outline-none transition-colors focus:border-[#F3E7FF]/40";

const TIME_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

type Status = "idle" | "submitting" | "success";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const canSubmit = name.trim() && phone.trim() && service && selectedDate && selectedTime;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  };

  return (
    <section id="booking" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
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
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="name">
                    Ім&apos;я *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше ім'я"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="phone">
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380 __ ___ __ __"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="instagram">
                    Instagram
                  </label>
                  <input id="instagram" name="instagram" placeholder="@ваш_нікнейм" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="service">
                    Послуга *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled className="bg-[#121212]">
                      Оберіть послугу
                    </option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#121212]">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#B8B8B8]" htmlFor="master">
                    Майстер
                  </label>
                  <select id="master" name="master" defaultValue="Не має значення" className={inputClass}>
                    <option value="Не має значення" className="bg-[#121212]">
                      Не має значення
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">Оберіть дату *</p>
                  <Calendar selected={selectedDate} onSelect={setSelectedDate} />
                  <input type="hidden" name="date" value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ""} />
                </div>

                <div className="sm:col-span-2">
                  <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#B8B8B8]">Оберіть час *</p>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        data-cursor-hover
                        onClick={() => setSelectedTime(slot)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                          selectedTime === slot
                            ? "border-white bg-white text-[#090909]"
                            : "border-white/[0.12] text-[#B8B8B8] hover:border-white/30 hover:text-white"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="time" value={selectedTime ?? ""} />
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
                  disabled={status === "submitting" || !canSubmit}
                  className="mt-2 flex h-16 w-full items-center justify-center gap-2 rounded-[18px] bg-white text-sm font-medium tracking-wide text-[#090909] transition-colors hover:bg-[#F3E7FF] disabled:cursor-not-allowed disabled:opacity-40 sm:col-span-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Надсилаємо...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Записатися зараз
                    </>
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
