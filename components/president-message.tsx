import Image from "next/image";

export default function PresidentMessage() {
  return (
    <section
      id="president-message"
      aria-labelledby="president-message-title"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(35,70,128,0.09)] lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative min-h-[20rem] overflow-hidden bg-slate-100 sm:min-h-[24rem] lg:min-h-full">
          <Image
            src="/presidebnt-message.jpg"
            alt="Kalpit Nepal, President of Rotaract Club of Butwal Synergy"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#172033]/45 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white lg:hidden">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              Rotary Year 2026–27
            </p>
            <p className="mt-1 text-xl font-semibold">Kalpit Nepal</p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-7 font-[family-name:var(--font-nunito-sans)] text-black sm:px-8 lg:px-9 lg:py-8">
          <h2
            id="president-message-title"
            className="font-[family-name:var(--font-josefin-sans)] text-[1.7rem] font-semibold leading-tight tracking-tight text-[#234680] sm:text-3xl"
          >
            Message From <span className="text-[#D12161]">President</span>
          </h2>

          <div className="mt-3 space-y-2 text-sm leading-[1.45] text-black/80">
            <p>
              Dear Fellow Rotaractors,
              <br />
              Blissful Rotaract Greetings!
            </p>

            <p>
              It is with great honor and gratitude that I accept the opportunity
              to serve as the President of Rotaract Club of Butwal Synergy for
              Rotary Year 2026–27.
            </p>

            <p>
              I sincerely thank all the members for their trust and support.
              Together, we will continue to strengthen fellowship, promote
              leadership, and serve our community with dedication and passion.
            </p>

            <p>
              This year, guided by the District Theme “Integrity, Vision,
              Leadership” and Rotary International Theme “Create Lasting
              Impact,” we aim to inspire positive change through meaningful
              service and unity.
            </p>

            <p>
              I would also like to express my heartfelt appreciation to IPP Rtr.
              Deepak Neupane and his team for their remarkable tenure and
              valuable contributions to the club&apos;s growth and success. I look
              forward to working together for a memorable and impactful Rotary
              year.
            </p>
          </div>

          <div className="mt-4 border-l-2 border-black pl-4">
            <p className="text-xs font-semibold italic text-black/70">
              Yours in Rotaract,
            </p>
            <p className="mt-0.5 text-base font-semibold text-black">
              Rtr. Kalpit Nepal
            </p>
            <p className="mt-0.5 text-xs font-medium leading-[1.4] text-black/75">
              President, RY 2026–27
              <br />
              Rotaract Club of Butwal Synergy
              <br />
              Rotaract District 3292 Nepal–Bhutan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
