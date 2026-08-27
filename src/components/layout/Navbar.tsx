"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Головна" },
  { href: "#services", label: "Послуги" },
  { href: "#gallery", label: "Каталог дизайнів" },
  { href: "#masters", label: "Майстри" },
  { href: "#about", label: "Про нас" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-lux flex h-[4.75rem] items-center justify-between lg:h-20">
        <a
          href="#home"
          data-cursor-hover
          className="flex flex-col leading-none"
          aria-label="Manik Mammy — на головну"
        >
          <span className="font-display text-xl tracking-[0.14em] text-milk">MANIK</span>
          <span className="text-[0.58rem] font-medium tracking-[0.5em] text-champagne">
            MAMMY
          </span>
        </a>

        <ul className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="group relative text-[0.7rem] font-medium uppercase tracking-[0.16em] text-text-secondary transition-colors duration-300 hover:text-milk"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          data-cursor-hover
          className="btn btn-solid hidden h-11 px-6 text-[0.68rem] xl:inline-flex"
        >
          Записатись
        </a>

        <button
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          data-cursor-hover
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-milk xl:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[4.75rem] h-[calc(100dvh-4.75rem)] border-t border-border bg-bg xl:hidden"
          >
            <ul className="container-lux flex h-full flex-col gap-1 overflow-y-auto py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-4 py-4 font-display text-2xl text-text-secondary transition-colors hover:text-milk"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="mt-auto px-4 pt-6">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="btn btn-solid w-full"
                >
                  Записатись
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
