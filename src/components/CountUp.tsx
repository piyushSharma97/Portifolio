"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: reduceMotion ? 0 : 1.1, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, reduceMotion, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
