"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#booking"
          data-cursor-hover
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="btn btn-solid fixed bottom-5 right-5 z-[70] h-13 px-5 text-[0.66rem] shadow-[0_12px_40px_rgba(0,0,0,0.55)] xl:hidden"
        >
          <Calendar size={15} />
          Записатись
        </motion.a>
      )}
    </AnimatePresence>
  );
}
