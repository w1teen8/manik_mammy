import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://manikmammy.ua";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Manik Mammy — преміальний манікюр у Боярці",
    template: "%s — Manik Mammy",
  },
  description:
    "Manik Mammy — преміальний манікюр, педикюр та нарощування нігтів у Боярці. Авторський дизайн, стерильність, індивідуальний підхід. вул. Незалежності, 50.",
  keywords: [
    "манікюр Боярка",
    "педикюр Боярка",
    "нарощування нігтів Боярка",
    "манікюр Київська область",
    "нейл-майстер Боярка",
    "френч манікюр Боярка",
  ],
  authors: [{ name: "Manik Mammy" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: SITE_URL,
    siteName: "Manik Mammy",
    title: "Manik Mammy — преміальний манікюр у Боярці",
    description:
      "Преміальний манікюр, педикюр та нарощування нігтів у Боярці. Авторський дизайн, стерильність, індивідуальний підхід.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609120144320-389395540740?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Manik Mammy — преміальний манікюр у Боярці",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manik Mammy — преміальний манікюр у Боярці",
    description: "Преміальний манікюр, педикюр та нарощування нігтів у Боярці.",
    images: [
      "https://images.unsplash.com/photo-1609120144320-389395540740?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="bg-[#090909] text-white antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
