"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  link?: { href: string; label: string };
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  link,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <Reveal className="max-w-2xl">
        <span className="eyebrow block">{eyebrow}</span>
        <h2 className="display-hero mt-5 text-[clamp(2rem,5.2vw,3.9rem)] text-milk">
          {title}
        </h2>
      </Reveal>

      {link && (
        <Reveal delay={0.1}>
          <a
            href={link.href}
            data-cursor-hover
            className="group inline-flex items-center gap-3 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-text-secondary transition-colors duration-300 hover:text-champagne"
          >
            {link.label}
            <span className="grid h-9 w-9 place-items-center rounded-full border border-border-strong transition-all duration-300 group-hover:border-champagne group-hover:bg-champagne/10">
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      )}
    </div>
  );
}
