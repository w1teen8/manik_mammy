"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#hero", label: "Головна" },
  { href: "#services", label: "Послуги" },
  { href: "#price", label: "Прайс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
        scrolled ? "border-b border-white/[0.08] bg-[#090909]/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#hero" data-cursor-hover className="font-display text-lg tracking-[0.15em] text-white">
          MANIK MAMMY
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="group relative text-sm tracking-wide text-[#B8B8B8] transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F3E7FF] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton
            as="a"
            href="#booking"
            className="border border-white/15 bg-white text-[#090909] hover:bg-[#F3E7FF]"
          >
            Записатися
          </MagneticButton>
        </div>

        <button
          aria-label="Відкрити меню"
          data-cursor-hover
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#090909]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-lg text-white/90 transition-colors hover:bg-white/[0.04]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3 px-4">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="flex h-14 w-full items-center justify-center rounded-[18px] bg-white text-sm font-medium text-[#090909]"
                >
                  Записатися
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
