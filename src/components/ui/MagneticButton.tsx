"use client";

import { useRef, useState, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  strength?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function MagneticButton<T extends ElementType = "button">({
  as,
  children,
  className,
  strength = 0.35,
  ...props
}: MagneticButtonProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Component = (as ?? "button") as ElementType;

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
      data-cursor-hover
    >
      <Component
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[18px] px-8 py-4 text-sm font-medium tracking-wide transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
