import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,154,98,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(23,58,45,0.08),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14 xl:px-0 xl:grid-cols-[1.1fr_0.9fr] xl:items-center xl:gap-14 xl:pb-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            ESTABLISHED DENTAL CARE · PATHANAMTHITTA
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.9] text-foreground md:text-7xl">
            A healthier smile, thoughtfully cared for.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-(--muted) md:text-lg">
            Comprehensive dental care delivered with experience, attention and a
            patient-first approach.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-7 py-3.5 text-sm font-medium text-white transition hover:bg-(--forest-deep)"
            >
              Book an Appointment
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-(--forest) hover:text-(--forest)"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full border border-[var(--gold)]/60 bg-(--gold)/10 md:block" />
          <div className="absolute -right-4 bottom-8 hidden h-20 w-20 rounded-full border border-(--forest)/30 bg-(--forest)/10 md:block" />
          <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white) p-3 shadow-[0_20px_60px_rgba(23,58,45,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Modern dental clinic consultation"
                width={900}
                height={1100}
                priority
                className="h-[520px] w-full object-cover md:h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
