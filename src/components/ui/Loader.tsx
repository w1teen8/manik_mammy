"use client";

import { motion } from "framer-motion";

const letters = "MANIK MAMMY".split("");

export default function Loader({ progress }: { progress: number }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#090909]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
      }}
    >
      <motion.div
        exit={{ y: -40, filter: "blur(10px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex select-none font-display text-3xl tracking-[0.3em] text-white sm:text-4xl">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.045, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={char === " " ? "w-3" : ""}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <div className="relative h-px w-[220px] overflow-hidden bg-white/10 sm:w-[280px]">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#F3E7FF] to-white"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs tracking-[0.2em] text-[#B8B8B8]"
        >
          {String(Math.round(progress)).padStart(3, "0")}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
