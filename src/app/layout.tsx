import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://manikmammy.ua";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manik Mammy — студія манікюру у Києві",
    template: "%s — Manik Mammy",
  },
  description:
    "Manik Mammy — преміальна студія манікюру у центрі Києва. Манікюр, гель-лак, авторський дизайн та зміцнення нігтів. Беззаперечна якість, індивідуальний підхід і 100% стерильність. вул. Хрещатик, 25.",
  keywords: [
    "манікюр Київ",
    "студія манікюру Київ",
    "гель-лак Київ",
    "дизайн нігтів Київ",
    "зміцнення нігтів",
    "манікюр Хрещатик",
    "преміальний манікюр",
  ],
  authors: [{ name: "Manik Mammy" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: SITE_URL,
    siteName: "Manik Mammy",
    title: "Manik Mammy — студія манікюру у Києві",
    description:
      "Преміальна студія манікюру у центрі Києва. Манікюр, гель-лак, авторський дизайн та зміцнення нігтів.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Manik Mammy — студія манікюру у Києві",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manik Mammy — студія манікюру у Києві",
    description: "Преміальна студія манікюру у центрі Києва.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-[#0B0B0C] text-[#F3EFE8] antialiased">
        <a href="#main" className="skip-link">
          Перейти до вмісту
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
