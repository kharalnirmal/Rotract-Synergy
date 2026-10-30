"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const tags = [
  "CYBOK2026",
  "Cybersecurity",
  "CybersecurityAwareness",
  "CSITRupandehi",
  "RotaractTinauCity",
  "CybersecurityCommunity",
  "TechCommunity",
];

export default function EventSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="relative isolate overflow-hidden bg-white px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8"
    >
      <div className="absolute left-[-10rem] top-16 -z-10 size-80 rounded-full bg-[#234680]/8 blur-3xl" />
      <div className="absolute right-[-8rem] top-52 -z-10 size-72 rounded-full bg-[#D12161]/10 blur-3xl" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <span className="inline-flex rounded-full border border-[#D12161]/15 bg-[#D12161]/5 px-4 py-2 font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.2em] text-[#D12161]">
          Event Spotlight
        </span>
        <h1
          id="events-title"
          className="mt-6 font-[family-name:var(--font-josefin-sans)] text-4xl font-semibold leading-[1.05] text-[#234680] sm:text-6xl lg:text-7xl"
        >
          CYBOK 2026
          <span className="mt-2 block text-[#D12161]">
            Cybersecurity Unfiltered
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-nunito-sans)] text-base leading-7 text-slate-600 sm:text-lg">
          A day of real-world stories, expert insights, meaningful questions,
          and conversations shaping a safer digital future.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-[1.35fr_0.65fr]"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_22px_60px_rgba(35,70,128,0.14)]">
          <Image
            src="/cybok 1.jpeg"
            alt="Participants and organizers celebrating at CYBOK 2026"
            fill
            priority
            sizes="(min-width: 640px) 68vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-3xl bg-slate-100 shadow-[0_22px_60px_rgba(35,70,128,0.12)] sm:min-h-0">
          <Image
            src="/cybok.jpeg"
            alt="Guests and attendees at the CYBOK 2026 cybersecurity event"
            fill
            sizes="(min-width: 640px) 32vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(35,70,128,0.08)] sm:p-9"
        >
          <h2 className="font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold text-[#234680]">
            A Day to Learn, Connect and Explore
          </h2>
          <div className="mt-5 space-y-4 font-[family-name:var(--font-nunito-sans)] text-[15px] leading-7 text-slate-700 sm:text-base">
            <p>
              From real-world stories and expert insights to engaging
              discussions and unforgettable interactions, CYBOK 2026 was a day
              full of learning, connecting, questioning, and exploring the
              world of cybersecurity.
            </p>
            <p>
              A huge thank you to everyone who showed up and contributed to
              making the event truly memorable.
            </p>
            <p className="font-bold text-slate-900">
              Here&apos;s to more conversations, more learning, and a safer digital
              future!
            </p>
          </div>
        </motion.article>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-3xl bg-gradient-to-br from-[#234680] to-[#182f57] p-6 text-white shadow-[0_18px_48px_rgba(35,70,128,0.20)] sm:p-9"
        >
          <p className="font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.2em] text-[#f27da7]">
            Working Together
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold">
            Stronger Through Collaboration
          </h2>
          <p className="mt-5 font-[family-name:var(--font-nunito-sans)] text-[15px] leading-7 text-white/80">
            Rotaract Club of Butwal Synergy was proud to help CSIT Association
            of Nepal–Rupandehi organize CYBOK 2026, together with Rotaract Tinau
            City.
          </p>
          <div className="mt-7 h-1 w-16 rounded-full bg-[#D12161]" />
        </motion.aside>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#234680]/10 bg-[#234680]/5 px-3 py-1.5 font-[family-name:var(--font-nunito-sans)] text-[11px] font-bold text-[#234680]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
}
