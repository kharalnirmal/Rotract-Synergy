import Image from "next/image";

export default function PresidentialTheme() {
  return (
    <section
      aria-labelledby="presidential-theme-title"
      className="bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="presidential-theme-title"
          className="text-center font-[family-name:var(--font-josefin-sans)] text-4xl font-semibold text-[#234680] sm:text-5xl"
        >
          Presidential <span className="text-[#D12161]">Theme</span>
        </h2>

        <div className="relative mt-8 aspect-[2.45/1] overflow-hidden rounded-3xl border-y-[5px] border-t-[#D12161] border-b-[#234680] bg-white shadow-[0_18px_45px_rgba(35,70,128,0.14)] sm:mt-10">
          <Image
            src="/herologo.png"
            alt="Vision Into Action presidential theme"
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="scale-[0.82] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
