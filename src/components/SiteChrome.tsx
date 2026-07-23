"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const totalDuration = 2200;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader progress={progress} />}</AnimatePresence>
      <ScrollProgress />
      <CustomCursor />
      <div className="noise-overlay" />
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {children}
      </div>
    </>
  );
}
