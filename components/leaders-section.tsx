"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { leaders } from "@/edit/site-content";

export default function LeadersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="leaders"
      aria-labelledby="leaders-title"
      className="bg-slate-50 px-4 pb-16 pt-4 sm:px-6 sm:pb-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="leaders-title"
          className="text-center font-[family-name:var(--font-josefin-sans)] text-4xl font-semibold text-[#234680] sm:text-5xl"
        >
          Our <span className="text-[#D12161]">Leaders</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-nunito-sans)] text-sm leading-6 text-slate-600 sm:text-base">
          Honoring the leaders whose vision and service have shaped our club&apos;s
          journey.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : (index % 4) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-slate-200/80 bg-white px-5 py-7 text-center shadow-[0_10px_30px_rgba(35,70,128,0.09)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(35,70,128,0.14)]"
            >
              <div className="relative mx-auto grid size-36 place-items-center overflow-hidden rounded-full border-[3px] border-[#D12161] bg-gradient-to-br from-slate-100 to-slate-200 text-[#234680] shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="size-20"
                    >
                      <circle cx="24" cy="17" r="9" fill="currentColor" opacity="0.82" />
                      <path
                        d="M8.5 42c1.1-9 7-14 15.5-14s14.4 5 15.5 14"
                        fill="currentColor"
                        opacity="0.82"
                      />
                    </svg>
                    <span className="sr-only">Leader portrait placeholder</span>
                  </>
                )}
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-josefin-sans)] text-xl font-semibold text-[#D12161]">
                {leader.name}
              </h3>
              <p className="mt-1.5 font-[family-name:var(--font-nunito-sans)] text-sm font-semibold text-slate-700">
                {leader.role}
              </p>
              <p className="mt-2 font-[family-name:var(--font-nunito-sans)] text-xs text-slate-400">
                {leader.year}
              </p>
              <p className="mt-2 font-[family-name:var(--font-nunito-sans)] text-xs text-slate-400">
                {leader.details}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
