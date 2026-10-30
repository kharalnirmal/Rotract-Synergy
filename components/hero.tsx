"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] w-full items-center justify-center overflow-hidden bg-[#172033]"
    >
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/hero image.jpg"
          alt="Members of Rotaract Club of Butwal Synergy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#101c33]/60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,18,35,0.28)_80%)]"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: reduceMotion ? 0 : 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-24 pt-16 text-center sm:px-8"
      >
        <h1
          id="hero-title"
          className="font-[family-name:var(--font-josefin-sans)] text-5xl font-bold uppercase leading-[0.92] tracking-[0.08em] text-white drop-shadow-lg sm:text-7xl sm:tracking-[0.12em] lg:text-[6.5rem]"
        >
          Rotaract
        </h1>
        <p className="mt-3 font-[family-name:var(--font-josefin-sans)] text-lg font-semibold uppercase tracking-[0.2em] text-white sm:text-2xl">
          Club of Butwal Synergy
        </p>

        <p className="mt-7 max-w-3xl font-[family-name:var(--font-nunito-sans)] text-sm leading-6 text-white/90 sm:text-lg sm:leading-8">
          Together, we see a world where people unite and take action to create
          lasting change—across the globe, in our communities, and in
          ourselves.
        </p>

        <Link
          href="/about"
          className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D12161] px-7 font-[family-name:var(--font-nunito-sans)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(209,33,97,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#234680] hover:shadow-[0_14px_34px_rgba(35,70,128,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Discover our story
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M4 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-b from-transparent via-[#D12161]/30 to-white sm:h-44"
      />
    </section>
  );
}
