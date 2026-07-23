"use client";

import Image from "next/image";
import RevealText from "@/components/ui/RevealText";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FloatingShapes from "@/components/ui/FloatingShapes";

export default function FinalCTA() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-28 text-center sm:px-10">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1782834294711-0c3661eeb62f?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#090909]/80" />
      </div>
      <FloatingShapes />

      <div className="relative mx-auto max-w-3xl">
        <RevealText
          as="h2"
          text={"Ваш ідеальний манікюр\nпочинається тут."}
          className="text-gradient-accent font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        />
        <Reveal delay={0.4} className="mt-10">
          <MagneticButton as="a" href="#booking" className="bg-white px-10 py-5 text-base text-[#090909] hover:bg-[#F3E7FF]">
            Записатися зараз
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
