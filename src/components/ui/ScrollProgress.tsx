"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-[#C9B08A] via-[#E4D2B4] to-[#C9B08A]"
      style={{ scaleX }}
    />
  );
}
