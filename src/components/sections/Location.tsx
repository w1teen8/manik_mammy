"use client";

import { MapPin, Navigation } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const ADDRESS = "вул. Незалежності, 50, Боярка";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function Location() {
  return (
    <section className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">09 / Локація</p>
        </Reveal>
        <RevealText
          as="h2"
          text={"Знайти нас\nлегко."}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        />

        <Reveal delay={0.2} className="relative mt-14 overflow-hidden rounded-[28px] border border-white/[0.08]">
          <div className="relative h-[420px] w-full grayscale invert-[0.92] contrast-[1.05] sm:h-[520px]">
            <iframe
              title="Manik Mammy на карті — вул. Незалежності, 50, Боярка"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="glass absolute bottom-6 left-6 right-6 flex flex-col items-start justify-between gap-6 rounded-[24px] p-6 sm:flex-row sm:items-center sm:right-auto sm:min-w-[420px]">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-[#F3E7FF]" />
              <div>
                <p className="text-white">Боярка</p>
                <p className="text-sm text-[#B8B8B8]">{ADDRESS}</p>
              </div>
            </div>
            <MagneticButton
              as="a"
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center bg-white text-[#090909] hover:bg-[#F3E7FF] sm:w-auto"
            >
              <Navigation size={15} />
              Прокласти маршрут
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
