"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        aria-label="Main navigation"
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl rounded-2xl border border-slate-200/80 bg-white/90 px-4 shadow-[0_12px_40px_rgba(35,70,128,0.10)] backdrop-blur-xl sm:px-6"
      >
        <div className="flex h-[72px] items-center justify-between">
          <Link
            href="#home"
            aria-label="Vision Into Action home"
            className="relative h-14 w-44 shrink-0 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D12161]"
          >
            <Image
              src="/nav logo.png"
              alt="Vision Into Action"
              width={1080}
              height={1080}
              priority
              className="absolute left-0 top-1/2 h-44 w-44 -translate-y-1/2 object-contain"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D12161] ${
                  index === 0
                    ? "text-[#234680]"
                    : "text-slate-600 hover:text-[#234680]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#D12161] transition-transform duration-300 ${
                    index === 0
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative grid size-11 place-items-center rounded-full border border-slate-200 text-[#234680] transition-colors hover:border-[#D12161]/40 hover:bg-[#D12161]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D12161] md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="grid gap-1 border-t border-slate-100 py-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.035 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        index === 0
                          ? "bg-[#234680]/5 text-[#234680]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#234680]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
