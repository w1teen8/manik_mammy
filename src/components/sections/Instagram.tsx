"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import galleryData from "@/data/gallery.json";

const posts = galleryData.slice(0, 6);

export default function Instagram() {
  return (
    <section id="gallery" className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#F3E7FF]">08 / Instagram</p>
            </Reveal>
            <RevealText
              as="h2"
              text={"Слідкуйте за\nнашою естетикою."}
              className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            />
          </div>
          <Reveal delay={0.2}>
            <MagneticButton
              as="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-transparent text-white hover:border-white/40"
            >
              <InstagramIcon size={16} />
              Перейти в Instagram
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={(i % 6) * 0.06}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#090909]/0 opacity-0 transition-all duration-500 group-hover:bg-[#090909]/50 group-hover:opacity-100">
                  <Heart size={18} className="text-white" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
