import Link from "next/link";
import { clinic } from "@/data/clinic";

export function AppointmentCTA() {
  return (
    <section className="bg-(--forest) py-20 text-(--white)">
      <div className="mx-auto max-w-7xl px-5 md:px-8 xl:px-0">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
              Appointments
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none md:text-6xl">
              Your smile deserves thoughtful care.
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(255,255,255,0.8)]">
              Take the next step toward better dental care.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-lg bg-(--white) px-6 py-3 text-sm font-semibold text-(--forest)"
            >
              Book an Appointment
            </Link>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Call the Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
