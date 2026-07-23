import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookingButton from "@/components/layout/FloatingBookingButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Prices from "@/components/sections/Prices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Instagram from "@/components/sections/Instagram";
import Location from "@/components/sections/Location";
import Booking from "@/components/sections/Booking";
import FinalCTA from "@/components/sections/FinalCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Manik Mammy",
  image: "https://images.unsplash.com/photo-1609120144320-389395540740?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Незалежності, 50",
    addressLocality: "Боярка",
    addressRegion: "Київська область",
    addressCountry: "UA",
  },
  priceRange: "600–2000 грн",
  telephone: "+380000000000",
  sameAs: ["https://instagram.com", "https://t.me"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <FAQ />
        <Instagram />
        <Location />
        <Booking />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
