"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { events } from "@/edit/site-content";

export default function EventSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {events.map((event, index) => {
        const Heading = index === 0 ? "h1" : "h2";
        const titleId = `${event.id}-title`;

        return (
          <section
            key={event.id}
            id={index === 0 ? "events" : event.id}
            aria-labelledby={titleId}
            className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
          >
            <div className="absolute -left-40 top-16 -z-10 size-80 rounded-full bg-[#234680]/[0.07] blur-3xl" />
            <div className="absolute -right-36 bottom-10 -z-10 size-80 rounded-full bg-[#D12161]/[0.08] blur-3xl" />

            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-12 sm:pr-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_24px_65px_rgba(35,70,128,0.16)]">
                  {event.primaryImage.src ? (
                    <Image
                      src={event.primaryImage.src}
                      alt={event.primaryImage.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="grid size-full place-items-center text-sm font-semibold text-slate-400">
                      Event image coming soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/25 to-transparent" />
                </div>

                <div className="absolute bottom-0 right-0 w-[48%] overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-[0_18px_45px_rgba(35,70,128,0.22)] sm:w-[46%]">
                  <div className="relative aspect-[16/10]">
                    {event.secondaryImage.src ? (
                      <Image
                        src={event.secondaryImage.src}
                        alt={event.secondaryImage.alt}
                        fill
                        sizes="(min-width: 1024px) 24vw, 45vw"
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="grid size-full place-items-center px-3 text-center text-xs font-semibold text-slate-400">
                        Event image coming soon
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute -left-3 -top-3 -z-10 size-28 rounded-full bg-[#D12161]/20 blur-3xl" />
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl border border-slate-200 border-t-4 border-t-[#D12161] bg-white p-5 font-[family-name:var(--font-nunito-sans)] shadow-[0_18px_50px_rgba(35,70,128,0.10)] sm:p-6"
              >
                <Heading
                  id={titleId}
                  className="font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold leading-[1.05] text-[#234680] sm:text-4xl"
                >
                  {event.title}
                  <span className="block text-[#D12161]">{event.subtitle}</span>
                </Heading>

                <div className="mt-4 space-y-2.5 text-sm leading-6 text-slate-600 sm:text-[15px]">
                  {event.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="rounded-xl border-l-4 border-[#D12161] bg-[#234680]/[0.045] px-3.5 py-3 font-semibold text-slate-700">
                    {event.highlight}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
