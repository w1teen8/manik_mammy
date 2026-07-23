"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
} as const;

export default function RevealText({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.09,
  once = true,
}: RevealTextProps) {
  const lines = text.split("\n");
  const Tag = TAGS[as];

  const lineVariants: Variants = {
    hidden: { y: "110%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: delay + i * stagger,
      },
    }),
  };

  return (
    <Tag initial="hidden" whileInView="visible" viewport={{ once, margin: "-10% 0px -10% 0px" }}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          <motion.span custom={lineIdx} variants={lineVariants} className={cn("block", className)}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
