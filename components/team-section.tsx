"use client";

import { motion, useReducedMotion } from "motion/react";

const roles = [
  "President",
  "Secretary",
  "Treasurer",
  "Immediate Past President",
  "Vice President I",
  "Vice President II",
  "Club Service Director",
  "Community Service Director",
  "International Service Director",
  "Professional Development Director",
  "Membership Chair",
  "Public Image Chair",
  "Sergeant-at-Arms",
];

export default function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-josefin-sans)] text-4xl font-semibold text-[#234680] sm:text-5xl">
            Our <span className="text-[#D12161]">Team</span>
          </h2>
          <p className="mt-3 font-[family-name:var(--font-nunito-sans)] text-sm leading-6 text-slate-600 sm:text-base">
            Meet the passionate leaders working together to serve, inspire, and
            create meaningful change.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {roles.map((role, index) => (
            <motion.article
              key={role}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : (index % 5) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(35,70,128,0.09)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,70,128,0.14)]"
            >
              <div className="h-28 bg-gradient-to-r from-[#234680] via-[#77306f] to-[#D12161]" />

              <div className="absolute left-1/2 top-14 grid size-28 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-slate-100 text-[#234680] shadow-lg transition-transform duration-300 group-hover:scale-105">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="size-14"
                >
                  <circle cx="24" cy="17" r="9" fill="currentColor" opacity="0.85" />
                  <path
                    d="M8.5 42c1.1-9 7-14 15.5-14s14.4 5 15.5 14"
                    fill="currentColor"
                    opacity="0.85"
                  />
                </svg>
                <span className="sr-only">Portrait placeholder</span>
              </div>

              <div className="px-5 pb-6 pt-16 text-center font-[family-name:var(--font-nunito-sans)]">
                <h3 className="text-lg font-bold text-slate-800">
                  Team Member {String(index + 1).padStart(2, "0")}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-[#D12161]">
                  {role}
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  Member details coming soon
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
