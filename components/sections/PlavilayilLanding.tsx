import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";

const treatments = [
  ["01", "Orthodontics", "Personalised alignment plans for children, teens and adults."],
  ["02", "Restorative dentistry", "Comfort, function and confidence — considered together."],
  ["03", "Preventive care", "Small, consistent steps for a healthier smile over time."],
];

const credentials = ["Est. 2004", "Multi-specialty", "Pathanamthitta", "250+ patient reviews"];

export function PlavilayilLanding() {
  return (
    <main className="landing overflow-hidden bg-[#f7f5f0] text-[#172d2b]">
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#dce9e1]">
        <div className="landing-orbit landing-orbit-one" aria-hidden="true" />
        <div className="landing-orbit landing-orbit-two" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1500px] px-5 pb-10 pt-8 sm:px-8 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between border-b border-[#172d2b]/15 pb-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#42675e]">
            <span>Plavilayil Dental Clinic</span>
            <span className="hidden sm:block">Adoor, Kerala · India</span>
            <a className="underline decoration-[#c99a52] decoration-2 underline-offset-4" href={`tel:${clinic.phone}`}>Speak with us ↗</a>
          </div>

          <div className="grid gap-12 pb-5 pt-12 lg:grid-cols-[1.06fr_.94fr] lg:items-end lg:gap-8 lg:pt-[clamp(4.5rem,8vw,8.5rem)]">
            <div className="relative z-10">
              <p className="landing-enter text-[10px] font-bold uppercase tracking-[.27em] text-[#4d7367]">Dental care, made personal</p>
              <h1 className="landing-enter landing-enter-delay-1 mt-6 max-w-[780px] font-serif text-[clamp(4.7rem,10vw,10.8rem)] leading-[.74] tracking-[-.075em] text-[#172d2b]">
                Made for your<br />
                <em className="font-normal text-[#63836e]">best</em> smile.
              </h1>
              <div className="landing-enter landing-enter-delay-2 mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-sm text-base leading-7 text-[#46645b] md:text-lg">Thoughtful, modern dentistry for every generation — from first check-ups to confident new smiles.</p>
                <Link href="/appointment" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#172d2b] px-6 py-4 text-sm font-bold text-white shadow-[0_12px_24px_rgba(23,45,43,.15)] transition hover:-translate-y-1 hover:bg-[#31554b]">
                  Begin your visit <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <div className="landing-enter landing-enter-delay-2 relative mx-auto w-full max-w-[530px] lg:mr-0">
              <div className="absolute -right-5 top-12 z-10 rounded-full border border-[#f7f5f0]/80 bg-[#c99a52] px-5 py-4 text-center text-[10px] font-bold uppercase leading-4 tracking-[.14em] text-[#172d2b] shadow-lg sm:-right-11">Care starts<br />with listening</div>
              <div className="relative overflow-hidden rounded-[10rem_10rem_1.5rem_1.5rem] border-[9px] border-[#f7f5f0] bg-[#b9cec0] shadow-[22px_25px_0_rgba(23,45,43,.12)]">
                <Image priority src="/clinic-portrait.svg" alt="Abstract illustration of a warm, reassuring smile" width={900} height={1120} sizes="(max-width: 1024px) 100vw, 40vw" className="h-[460px] w-full object-cover md:h-[570px]" />
              </div>
              <p className="absolute -bottom-2 -left-2 max-w-[220px] bg-[#f7f5f0] px-5 py-4 font-serif text-2xl leading-6 shadow-[0_12px_35px_rgba(36,52,45,.11)]">A gentle reason to smile.</p>
            </div>
          </div>

          <div className="landing-enter landing-enter-delay-3 mt-8 grid grid-cols-2 border-t border-[#172d2b]/15 sm:grid-cols-4">
            {credentials.map((credential) => <p className="border-b border-[#172d2b]/15 py-4 text-[10px] font-bold uppercase tracking-[.15em] text-[#42675e] sm:border-b-0 sm:pr-4" key={credential}>{credential}</p>)}
          </div>
        </div>
      </section>

      <section id="care" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#63836e]">A calmer kind of care</p>
            <h2 className="mt-5 max-w-md font-serif text-5xl leading-[.85] tracking-[-.055em] md:text-7xl">Good care feels <em className="text-[#63836e]">different.</em></h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[#60766e]">We make room for questions, explain what happens next and never rush the person in the chair.</p>
          </div>
          <div className="border-t border-[#172d2b]/15">
            {treatments.map(([number, title, copy]) => <Link key={number} href="/treatments" className="group grid grid-cols-[40px_1fr_auto] gap-3 border-b border-[#172d2b]/15 py-8 transition hover:px-3 md:grid-cols-[60px_1fr_auto] md:py-10">
              <span className="pt-2 text-[10px] font-bold tracking-[.15em] text-[#63836e]">{number}</span>
              <span><span className="block font-serif text-3xl tracking-[-.04em] md:text-5xl">{title}</span><span className="mt-3 block max-w-md text-sm leading-6 text-[#60766e]">{copy}</span></span>
              <span className="self-center text-2xl text-[#63836e] transition-transform group-hover:translate-x-2">↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#172d2b] px-5 py-20 text-[#f7f5f0] sm:px-8 lg:px-12 lg:py-28 xl:px-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[7rem_7rem_0_0] bg-[#7d9c89]">
            <Image src="/clinic-interior.svg" alt="Abstract illustration of a calm treatment space" width={900} height={680} sizes="(max-width: 1024px) 100vw, 50vw" className="h-[390px] w-full object-cover md:h-[500px]" />
            <span className="absolute bottom-5 left-5 border border-white/25 bg-[#172d2b]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em]">Your comfort, centred</span>
          </div>
          <div className="lg:pl-12">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#b9d0bd]">The visit, reimagined</p>
            <h2 className="mt-6 font-serif text-5xl leading-[.86] tracking-[-.055em] md:text-7xl">Clinical expertise.<br /><em className="text-[#b9d0bd]">Human comfort.</em></h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-[#d5e0d7]/75">We pair skilled treatment with a considered experience, so you can feel informed and at ease at every step.</p>
            <Link href="/about" className="group mt-9 inline-flex items-center gap-4 border-b border-[#c99a52] pb-2 text-sm font-bold">Discover our approach <span className="transition-transform group-hover:translate-x-1">→</span></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid gap-9 border-y border-[#172d2b]/15 py-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#63836e]">Come say hello</p><h2 className="mt-5 font-serif text-5xl leading-[.85] tracking-[-.055em] md:text-7xl">Right where<br />Adoor meets.</h2></div>
          <div><p className="max-w-xl text-lg leading-8 text-[#60766e]">{clinic.fullAddress}</p><div className="mt-8 flex flex-wrap gap-4"><a href={clinic.googleMaps} target="_blank" rel="noreferrer" className="rounded-full bg-[#c99a52] px-6 py-3.5 text-sm font-bold text-[#172d2b] transition hover:-translate-y-1 hover:bg-[#b98942]">Get directions ↗</a><Link href="/contact" className="rounded-full border border-[#172d2b]/30 px-6 py-3.5 text-sm font-bold transition hover:bg-[#172d2b] hover:text-white">Contact the clinic</Link></div></div>
        </div>
      </section>
    </main>
  );
}
