"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon, TelegramIcon, TikTokIcon } from "@/components/ui/icons";

const NAV = [
  { href: "#services", label: "Послуги" },
  { href: "#gallery", label: "Каталог дизайнів" },
  { href: "#masters", label: "Майстри" },
  { href: "#about", label: "Про нас" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#booking", label: "Записатись" },
];

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://t.me", label: "Telegram", Icon: TelegramIcon },
  { href: "https://tiktok.com", label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer id="contacts" className="border-t border-border bg-bg-soft">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl tracking-[0.12em] text-milk">
                MANIK
              </span>
              <span className="text-[0.62rem] font-medium tracking-[0.5em] text-champagne">
                MAMMY
              </span>
            </div>
            <p className="mt-6 max-w-xs text-[0.88rem] leading-relaxed text-text-secondary">
              Студія манікюру, де краса зустрічається з якістю.
            </p>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor-hover
                  className="grid h-11 w-11 place-items-center rounded-full border border-border-strong text-text-secondary transition-colors duration-300 hover:border-champagne hover:text-champagne"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Футер">
            <h3 className="eyebrow">Навігація</h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    data-cursor-hover
                    className="text-[0.88rem] text-text-secondary transition-colors duration-300 hover:text-milk"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow">Контакти</h3>
            <ul className="mt-5 space-y-4 text-[0.88rem] text-text-secondary">
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-champagne" aria-hidden="true" />
                <a href="tel:+380991234567" data-cursor-hover className="hover:text-milk">
                  +380 (99) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-champagne" aria-hidden="true" />
                м. Київ, вул. Хрещатик, 25
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-champagne" aria-hidden="true" />
                Пн — Нд: 09:00 — 21:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 text-[0.72rem] uppercase tracking-[0.14em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Manik Mammy. Усі права захищено.</span>
          <a href="#booking" data-cursor-hover className="hover:text-champagne">
            Політика конфіденційності
          </a>
        </div>
      </div>
    </footer>
  );
}
