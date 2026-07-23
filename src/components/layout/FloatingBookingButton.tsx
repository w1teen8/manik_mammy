"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function FloatingBookingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
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
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[70] flex items-center gap-2 rounded-[18px] bg-white px-5 py-4 text-sm font-medium text-[#090909] shadow-[0_10px_40px_rgba(0,0,0,0.5)] lg:hidden"
        >
          <CalendarCheck size={17} />
          Записатися
        </motion.a>
      )}
    </AnimatePresence>
  );
}
