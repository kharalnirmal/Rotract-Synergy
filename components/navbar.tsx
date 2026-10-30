"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/#team" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "mailto:kalpitnepal66@gmail.com" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  return (
    <header className="sticky top-0 z-50">
      <motion.nav
        aria-label="Main navigation"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: -18, width: "100%", maxWidth: "100%" }
        }
        animate={{
          opacity: 1,
          y: isScrolled ? 16 : 0,
          width: isScrolled ? "calc(100% - 2rem)" : "100%",
          maxWidth: isScrolled ? "72rem" : "100%",
          borderRadius: isScrolled ? 16 : 0,
          borderColor: isScrolled
            ? "rgba(226, 232, 240, 0.8)"
            : "rgba(226, 232, 240, 0.65)",
          boxShadow: isScrolled
            ? "0 12px 40px rgba(35,70,128,0.10)"
            : "0 4px 18px rgba(35,70,128,0.07)",
        }}
        transition={{
          opacity: { duration: 0.45 },
          y: {
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          width: {
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          maxWidth: {
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
          borderRadius: {
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
          borderColor: { duration: reduceMotion ? 0 : 0.4 },
          boxShadow: { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" },
        }}
        className="relative mx-auto border bg-white/90 px-4 backdrop-blur-xl sm:px-6"
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
          <Link
            href="/"
            aria-label="Vision Into Action home"
            className="flex h-14 w-44 shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D12161]"
          >
            <Image
              src="/logofor nav.png"
              alt="Rotaract Club of Butwal Synergy"
              width={535}
              height={219}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D12161] ${
                  isActive
                    ? "text-[#234680]"
                    : "text-slate-600 hover:text-[#234680]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-[#D12161] transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
              );
            })}
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
              <div className="mx-auto grid max-w-6xl gap-1 border-t border-slate-100 py-3">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
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
                        isActive
                          ? "bg-[#234680]/5 text-[#234680]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#234680]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
