import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookingButton from "@/components/layout/FloatingBookingButton";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import DesignGallery from "@/components/sections/DesignGallery";
import About from "@/components/sections/About";
import Masters from "@/components/sections/Masters";
import Reviews from "@/components/sections/Reviews";
import Booking from "@/components/sections/Booking";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Manik Mammy",
  image:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  url: "https://manikmammy.ua",
  telephone: "+380991234567",
  priceRange: "₴₴₴",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Хрещатик, 25",
    addressLocality: "Київ",
    addressCountry: "UA",
  },
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: ["https://instagram.com", "https://t.me", "https://tiktok.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <DesignGallery />
        <About />
        <Masters />
        <Reviews />
        <Booking />
      </main>
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
