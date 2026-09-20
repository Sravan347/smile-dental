import Link from "next/link";
import { clinic, navItems } from "@/data/clinic";
import { treatments } from "@/data/treatments";

export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-foreground text-(--white)">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 xl:px-0">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold">
              P
            </span>
            <span className="font-serif text-2xl">{clinic.shortName}</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[rgba(255,255,255,0.7)]">
            A considered approach to everyday dental care and orthodontic
            journeys in the heart of Adoor.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.6)]">
            Navigation
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[rgba(255,255,255,0.8)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.6)]">
            Treatments
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[rgba(255,255,255,0.8)]">
            {treatments.slice(0, 4).map((treatment) => (
              <li key={treatment.slug}>
                <Link href={`/treatments/${treatment.slug}`}>
                  {treatment.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-[rgba(255,255,255,0.68)] md:flex-row md:items-center md:justify-between md:px-8 xl:px-0">
          <div className="flex flex-wrap gap-3">
            <span>{clinic.locationLabel}</span>
            <span>•</span>
            <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
            <span>•</span>
            <a href={clinic.googleMaps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <span>© 2026 {clinic.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
