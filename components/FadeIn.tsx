"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 40,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // retrigger setiap scroll masuk
    margin: "-10% 0px", // bisa disesuaikan
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}