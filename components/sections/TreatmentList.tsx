import Link from "next/link";
import { treatments } from "@/data/treatments";

export function TreatmentList() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            Treatments
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
            Comprehensive dental care, under one roof.
          </h2>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        {treatments.map((treatment, index) => (
          <Link
            key={treatment.slug}
            href={`/treatments/${treatment.slug}`}
            className="group grid gap-6 rounded-[2rem] border border-(--border) bg-(--white) p-5 transition hover:bg-background md:grid-cols-[88px_1.2fr_0.9fr_44px] md:items-center md:p-6"
          >
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-(--muted)">{`0${index + 1}`}</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-(--forest)">
                {treatment.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground md:text-4xl">
                {treatment.name}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-(--muted)">
              {treatment.intro}
            </p>
            <div className="flex items-center justify-end text-foreground transition group-hover:translate-x-1">
              <span aria-hidden className="text-2xl">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
