"use client";

import { Star, Gem, Crown, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const STATS = [
  { icon: Star, value: 5, suffix: "+", label: "років досвіду", sub: "у nail-індустрії" },
  { icon: Gem, value: 2500, suffix: "+", label: "щасливих клієнток", sub: "повертаються знову" },
  { icon: Crown, value: 10000, suffix: "+", label: "виконаних послуг", sub: "найвищої якості" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "стерильність", sub: "та безпека" },
];

export default function Stats() {
  return (
    <section
      aria-label="Студія в цифрах"
      className="border-y border-border bg-bg-soft"
    >
      <div className="container-lux grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="flex items-start gap-5 py-10 lg:px-9 lg:first:pl-0 lg:last:pr-0"
          >
            <s.icon
              size={26}
              strokeWidth={1.2}
              className="mt-1 shrink-0 text-champagne"
              aria-hidden="true"
            />
            <div>
              <div className="font-display text-4xl leading-none text-milk sm:text-[2.75rem]">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                {s.label}
              </p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-text-muted">
                {s.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
