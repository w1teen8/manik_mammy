# Manik Mammy

Односторінковий преміальний сайт студії манікюру **Manik Mammy** — dark luxury / editorial стиль.

## Стек

- **Next.js 16** (App Router, статичний експорт `output: export`)
- **React 19**, TypeScript
- **Tailwind CSS v4** (токени теми в `src/app/globals.css`)
- **Framer Motion** — scroll-reveal та мікровзаємодії
- **Lucide** іконки + власні бренд-іконки (`src/components/ui/icons.tsx`)
- Шрифти через `next/font`: **Cormorant Garamond** (заголовки) + **Manrope** (текст)

## Структура

```
src/
  app/            layout, page, globals.css
  components/
    layout/       Navbar, Footer, FloatingBookingButton
    sections/     Hero, Stats, Services, DesignGallery, About, Masters, Reviews, Booking
    ui/           Reveal, SectionHeading, AnimatedCounter, CustomCursor, ScrollProgress, icons
  data/           services / designs / masters / reviews (JSON-контент)
  lib/            utils, img (хелпер для Unsplash-URL)
```

## Розробка

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # статичний експорт у ./out
npm run lint
```

## Деплой

Пуш у гілку `master` запускає GitHub Actions (`.github/workflows/deploy.yml`),
який робить `next build` і публікує `./out` на GitHub Pages.
У продакшені застосовується `basePath: /manik_mammy`.

## Контент і зображення

Фото підвантажуються з Unsplash (хости дозволені в `next.config.ts`, `images.unoptimized`).
Для запуску в бойовому проєкті замініть ID зображень у `src/data/*.json` та
`src/components/sections/Hero.tsx` / `About.tsx` на власні студійні фото.
Телефон, адреса та соцмережі — у `Footer.tsx` і `src/app/page.tsx` (JSON-LD).
