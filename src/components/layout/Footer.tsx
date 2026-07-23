import { Send, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "#hero", label: "Головна" },
  { href: "#services", label: "Послуги" },
  { href: "#price", label: "Прайс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="relative border-t border-white/[0.08] bg-[#090909] px-6 pb-8 pt-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl tracking-[0.15em] text-white">MANIK MAMMY</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B8B8B8]">
            Преміальний манікюр, педикюр та нарощування нігтів у Боярці. Індивідуальний дизайн для кожної клієнтки.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] text-white transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              <Send size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B8B8B8]">Навігація</p>
          <ul className="mt-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} data-cursor-hover className="text-sm text-white/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B8B8B8]">Контакти</p>
          <ul className="mt-5 flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-white/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#F3E7FF]" />
              вул. Незалежності, 50, Боярка
            </li>
            <li className="flex items-start gap-3 text-sm text-white/80">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#F3E7FF]" />
              <a href="tel:+380000000000" data-cursor-hover className="hover:text-white">
                +38 (000) 000-00-00
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-[#B8B8B8] sm:flex-row">
        <p>© {new Date().getFullYear()} Manik Mammy. Усі права захищені.</p>
        <p>Боярка, вул. Незалежності, 50</p>
      </div>
    </footer>
  );
}
