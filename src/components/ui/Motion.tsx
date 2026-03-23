"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
}

export function MotionSection({ children, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function MotionDiv({ children, variants = fadeUp, ...props }: MotionDivProps) {
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
