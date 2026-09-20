import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(230,244,242,0.8),transparent_48%),linear-gradient(315deg,rgba(201,169,110,0.08),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 xl:grid-cols-[1.02fr_0.98fr] xl:items-center xl:gap-16 xl:px-0 xl:pb-28">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-(--forest)">
            PATIENT-FIRST DENTAL CARE · PATHANAMTHITTA
          </p>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[0.96] text-foreground md:text-7xl">
            A healthier smile, thoughtfully cared for.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-(--muted) md:text-lg">
            Calm, clear and comprehensive dental care for individuals and
            families, from routine check-ups to restorative treatment planning.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-lg bg-(--forest) px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-(--forest-deep)"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-(--border) bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-(--forest) hover:text-(--forest)"
            >
              Call the clinic
            </a>
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-(--border) pt-6">
            <div>
              <p className="text-lg font-semibold text-foreground">Clear</p>
              <p className="mt-1 text-xs leading-5 text-(--muted)">
                Treatment plans explained simply
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Calm</p>
              <p className="mt-1 text-xs leading-5 text-(--muted)">
                Comfort considered at every step
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Local</p>
              <p className="mt-1 text-xs leading-5 text-(--muted)">
                Conveniently based in Pathanamthitta
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--white) p-2 shadow-[0_24px_70px_rgba(16,42,46,0.12)]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Modern dental clinic consultation"
                width={900}
                height={1100}
                priority
                className="h-[460px] w-full object-cover md:h-[620px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
