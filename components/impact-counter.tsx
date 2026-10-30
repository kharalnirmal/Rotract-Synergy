"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Years of Service", value: 9, suffix: "+" },
  { label: "Total Members", value: 30, suffix: "" },
  { label: "Total Projects", value: 55, suffix: "+" },
];

function Counter({
  value,
  suffix,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  start: boolean;
  delay: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;

    if (reduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration: 1.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, delay, reduceMotion, start, value]);

  return (
    <span className="flex items-start justify-center">
      <motion.span>{rounded}</motion.span>
      {suffix && (
        <span className="ml-0.5 text-[0.55em] leading-[1.25] text-[#D12161]">
          {suffix}
        </span>
      )}
    </span>
  );
}

export default function ImpactCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.45 });

  return (
    <section
      ref={sectionRef}
      aria-label="Club impact"
      className="relative z-30 -mt-8 px-4 sm:-mt-10 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_55px_rgba(35,70,128,0.12)] sm:grid-cols-3"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="relative px-6 py-6 text-center after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-16 after:-translate-x-1/2 after:bg-slate-200 last:after:hidden sm:px-8 sm:py-7 sm:after:bottom-auto sm:after:left-auto sm:after:right-0 sm:after:top-1/2 sm:after:h-14 sm:after:w-px sm:after:-translate-y-1/2 sm:after:translate-x-0 sm:last:after:hidden"
          >
            <div className="font-[family-name:var(--font-josefin-sans)] text-4xl font-bold leading-none text-[#234680] sm:text-5xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                start={isInView}
                delay={index * 0.12}
              />
            </div>
            <p className="mt-2 font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
