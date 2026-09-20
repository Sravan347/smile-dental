import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";

const treatments = [
  ["01", "Orthodontics", "Thoughtful alignment plans for growing and grown-up smiles."],
  ["02", "Restorative care", "Solutions that bring comfort, function and confidence together."],
  ["03", "Preventive care", "Small, consistent steps for a healthy smile over time."],
];

export function PlavilayilLanding() {
  return (
    <main className="overflow-hidden bg-[#f4f0e9] text-[#24342d]">
      <section className="relative min-h-[790px] overflow-hidden border-b border-[#24342d]/15 bg-[#d8e4d7]">
        <div className="absolute -right-40 -top-48 h-[42rem] w-[42rem] rounded-full border border-[#6d8c74]/25" />
        <div className="absolute -right-10 top-12 h-[34rem] w-[34rem] rounded-full border border-[#6d8c74]/25" />
        <div className="relative mx-auto grid max-w-[1440px] px-5 pb-12 pt-11 md:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(450px,.9fr)] lg:gap-12 lg:px-14 xl:px-20">
          <div className="flex flex-col justify-between pt-8 lg:min-h-[700px] lg:pt-16">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-[#496653]">
                <span className="h-px w-10 bg-current" /> Adoor · Kerala · Est. care
              </div>
              <h1 className="mt-10 max-w-[780px] font-serif text-[clamp(4.3rem,9vw,9.2rem)] leading-[.79] tracking-[-.065em] text-[#24342d]">
                A little more
                <br />
                <em className="font-normal text-[#6e876c]">to smile</em> about.
              </h1>
              <p className="mt-10 max-w-md text-base leading-8 text-[#52685b] md:text-lg">
                Modern dentistry, gently delivered. Discover a calm place for
                preventive care, restorative treatments and specialist
                orthodontic journeys.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/appointment" className="group inline-flex items-center gap-4 rounded-full bg-[#24342d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#48654f]">
                  Book a consultation <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <a href="#care" className="inline-flex items-center gap-3 px-3 py-3 text-sm font-bold text-[#24342d] underline decoration-[#77917a] underline-offset-8">
                  Explore our care <span>↓</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flex items-end gap-6 border-t border-[#24342d]/15 pt-6 text-[11px] uppercase tracking-[.16em] text-[#52685b] md:gap-10">
              <span className="max-w-[12rem] leading-5">A considered clinic experience in central Adoor.</span>
              <span className="hidden h-8 w-px bg-[#24342d]/15 sm:block" />
              <span className="leading-5">Dental care<br />Orthodontics</span>
            </div>
          </div>

          <div className="relative mt-14 lg:mt-0">
            <div className="relative mx-auto max-w-[510px] lg:ml-auto lg:mr-0">
              <div className="absolute -left-7 -top-7 z-10 flex h-24 w-24 rotate-[-12deg] items-center justify-center rounded-full bg-[#d5ad71] text-center text-[10px] font-bold uppercase leading-4 tracking-[.1em] text-[#24342d] shadow-lg">Your smile<br />has a home</div>
              <div className="overflow-hidden rounded-t-full border-[10px] border-[#f4f0e9] bg-[#bbcdc0] shadow-[18px_22px_0_rgba(36,52,45,.12)]">
                <Image priority src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90" alt="Friendly dental professional in a modern clinic" width={900} height={1160} className="h-[530px] w-full object-cover object-[58%_center] md:h-[650px]" />
              </div>
              <div className="absolute -bottom-6 -left-5 max-w-[238px] bg-[#f4f0e9] p-5 shadow-[0_12px_35px_rgba(36,52,45,.12)]">
                <p className="font-serif text-2xl leading-6">Care that begins with listening.</p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#6b826f]">Plavilayil Dental · Orthodontics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="care" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.23em] text-[#6b826f]">A gentler standard of care</p>
            <h2 className="mt-5 max-w-md font-serif text-5xl leading-[.88] tracking-[-.045em] md:text-7xl">Good care feels different.</h2>
          </div>
          <div className="divide-y divide-[#24342d]/15 border-t border-[#24342d]/15">
            {treatments.map(([number, title, copy]) => <Link key={number} href="/treatments" className="group grid grid-cols-[48px_1fr_auto] gap-4 py-7 transition hover:pl-3">
              <span className="pt-1 text-[10px] font-bold tracking-[.14em] text-[#6b826f]">{number}</span>
              <span><span className="block font-serif text-3xl tracking-[-.035em] md:text-4xl">{title}</span><span className="mt-2 block max-w-md text-sm leading-6 text-[#65756b]">{copy}</span></span>
              <span className="self-center text-2xl text-[#6b826f] transition-transform group-hover:translate-x-2">→</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#24342d] py-20 text-[#f4f0e9] md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1fr] lg:px-14 xl:px-20">
          <div className="overflow-hidden rounded-[8rem_8rem_0_0] border border-white/15">
            <Image src="https://images.unsplash.com/photo-1606265752439-1f18756aa2c9?auto=format&fit=crop&w=1200&q=90" alt="A bright, welcoming dental treatment room" width={900} height={680} className="h-[420px] w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[.23em] text-[#c6d7c8]">The visit, reimagined</p>
            <h2 className="mt-6 font-serif text-5xl leading-[.9] tracking-[-.05em] md:text-7xl">Clinical expertise.<br /><em className="text-[#c5d6bd]">Human comfort.</em></h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-[#d3dbd2]/75">Our approach makes room for questions, explains every next step and helps you feel at ease from the waiting room to the follow-up.</p>
            <Link href="/about" className="mt-9 inline-flex w-fit border-b border-[#d5ad71] pb-2 text-sm font-bold">Meet the clinic approach <span className="ml-3">→</span></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 lg:px-14 xl:px-20">
        <div className="grid gap-10 border-y border-[#24342d]/15 py-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[.23em] text-[#6b826f]">Come say hello</p><h2 className="mt-5 font-serif text-5xl leading-[.88] tracking-[-.05em] md:text-7xl">Right where<br />Adoor meets.</h2></div>
          <div><p className="max-w-xl text-lg leading-8 text-[#5b6e61]">{clinic.fullAddress}</p><div className="mt-8 flex flex-wrap gap-4"><a href={clinic.googleMaps} target="_blank" rel="noreferrer" className="rounded-full bg-[#d5ad71] px-6 py-3.5 text-sm font-bold text-[#24342d] transition hover:bg-[#c69957]">Get directions ↗</a><Link href="/contact" className="rounded-full border border-[#24342d]/30 px-6 py-3.5 text-sm font-bold">Contact the clinic</Link></div></div>
        </div>
      </section>
    </main>
  );
}
