import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "About Us | Rotaract Club of Butwal Synergy",
  description:
    "Learn about the Rotaract Club of Butwal Synergy, our mission, vision, and commitment to service and leadership.",
};

const clubInformation = [
  ["Club Name", "Rotaract Club of Butwal Synergy"],
  ["Club ID", "215519"],
  ["Sponsoring Rotary Club", "Rotary Club of Butwal Downtown"],
  ["Zone", "Zone 19"],
  ["Rotary District", "RID 3292"],
  ["Region", "Nepal & Bhutan"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative isolate flex min-h-[23rem] items-center justify-center overflow-hidden sm:min-h-[28rem]">
        <Image
          src="/hero image.jpg"
          alt="Rotaract Club of Butwal Synergy members"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#101c33]/65" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#D12161]/25 to-white" />

        <div className="relative z-10 px-5 pb-12 text-center text-white">
          <p className="font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.26em] text-white/80">
            Who we are
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-josefin-sans)] text-5xl font-bold uppercase tracking-[0.12em] sm:text-7xl">
            About Us
          </h1>
          <p className="mt-3 font-[family-name:var(--font-nunito-sans)] text-sm text-white/85 sm:text-base">
            Home <span className="mx-2 text-[#f16a9a]">/</span> About Us
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#234680]/10 bg-slate-100 shadow-[0_20px_55px_rgba(35,70,128,0.10)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/hero image.jpg"
                alt="Members of Rotaract Club of Butwal Synergy"
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="font-[family-name:var(--font-nunito-sans)]">
            <h2 className="font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold leading-[1.05] text-[#234680] sm:text-4xl">
              Rotaract Club of Butwal Synergy
            </h2>
            <p className="mt-1.5 text-lg font-bold italic text-[#D12161]">
              Empowering Youth. Inspiring Leadership. Creating Impact.
            </p>

            <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700 sm:text-base">
              <p>
                Rotaract Club of Butwal Synergy is a youth-led service
                organization dedicated to developing young leaders, promoting
                fellowship, and creating meaningful change in society.
              </p>
              <p>
                Our club brings together passionate young individuals who share
                a common commitment to leadership, professional development,
                community service, and humanitarian activities. Through various
                initiatives and collaborative projects, we strive to empower
                youth, address community needs, and build a better future.
              </p>
              <p>
                We are proudly sponsored by <strong>Rotary Club of Butwal Downtown</strong>{" "}
                and are part of <strong>Zone 19, Rotary International District 3292,
                Nepal and Bhutan</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#234680]/[0.035] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.22em] text-[#D12161]">
              At a glance
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold text-[#234680] sm:text-4xl">
              Official Club Information
            </h2>
          </div>

          <dl className="mt-9 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(35,70,128,0.08)] sm:grid-cols-2 lg:grid-cols-3">
            {clubInformation.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-slate-100 p-6 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <dt className="font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.16em] text-[#D12161]">
                  {label}
                </dt>
                <dd className="mt-2 font-[family-name:var(--font-nunito-sans)] text-base font-bold text-slate-800">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#234680]/10 bg-[#234680] p-7 text-white shadow-[0_18px_45px_rgba(35,70,128,0.16)] sm:p-9">
            <span className="text-3xl font-bold text-[#f06a9a]">01</span>
            <h2 className="mt-5 font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold">
              Our Mission
            </h2>
            <p className="mt-4 font-[family-name:var(--font-nunito-sans)] leading-7 text-white/85">
              To provide opportunities for young people to enhance their
              leadership and professional skills, develop lasting friendships,
              and address the needs of their communities through meaningful
              service initiatives.
            </p>
          </article>

          <article className="rounded-3xl border border-[#D12161]/10 bg-[#D12161] p-7 text-white shadow-[0_18px_45px_rgba(209,33,97,0.16)] sm:p-9">
            <span className="text-3xl font-bold text-white/55">02</span>
            <h2 className="mt-5 font-[family-name:var(--font-josefin-sans)] text-3xl font-semibold">
              Our Vision
            </h2>
            <p className="mt-4 font-[family-name:var(--font-nunito-sans)] leading-7 text-white/90">
              To inspire a generation of responsible, compassionate, and
              empowered young leaders who strengthen communities, promote
              global understanding, and create sustainable positive change.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-[0_22px_60px_rgba(15,23,42,0.18)] sm:px-10 sm:py-16">
          <p className="font-[family-name:var(--font-nunito-sans)] text-xs font-bold uppercase tracking-[0.28em] text-[#f06a9a]">
            Our Motto
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-josefin-sans)] text-4xl font-semibold sm:text-5xl">
            Service Above Self
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-nunito-sans)] text-base leading-7 text-white/75 sm:text-lg">
            Together We Lead. Together We Serve. Together We Make a Difference.
          </p>
        </div>
      </section>
    </main>
  );
}
