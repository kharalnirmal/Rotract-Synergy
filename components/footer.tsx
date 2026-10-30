import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/#team" },
  { label: "Events", href: "/events" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-[#234680] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-24 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0 62C190 15 355 20 540 60c205 45 370 42 552 5 139-28 241-30 348-8v63H0Z"
            fill="#D12161"
            opacity="0.28"
          />
          <path
            d="M0 82c194-39 348-34 527 2 208 42 381 26 555-9 142-29 247-27 358-3v48H0Z"
            fill="#234680"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-10 sm:px-6 md:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8">
        <div>
          <Link
            href="/"
            aria-label="Rotaract Club of Butwal Synergy home"
            className="inline-flex rounded-xl bg-white p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image
              src="/logofor nav.png"
              alt="Rotaract Club of Butwal Synergy"
              width={535}
              height={219}
              className="h-auto w-56"
            />
          </Link>
          <p className="mt-5 max-w-sm font-[family-name:var(--font-nunito-sans)] text-sm leading-6 text-white/70">
            Empowering youth, inspiring leadership, and creating meaningful
            change through fellowship and service.
          </p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-josefin-sans)] text-lg font-semibold">
            Quick Links
          </h2>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="space-y-2.5 font-[family-name:var(--font-nunito-sans)] text-sm text-white/70">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#f47ba7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-josefin-sans)] text-lg font-semibold">
            Get in Touch
          </h2>
          <p className="mt-4 font-[family-name:var(--font-nunito-sans)] text-sm leading-6 text-white/70">
            Have a question or want to connect with our club? Send us an email.
          </p>
          <a
            href="mailto:kalpitnepal66@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D12161] px-5 py-3 font-[family-name:var(--font-nunito-sans)] text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#234680] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact Us
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 font-[family-name:var(--font-nunito-sans)] text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Rotaract Club of Butwal Synergy.</p>
          <p>Service Above Self</p>
        </div>
      </div>
    </footer>
  );
}
