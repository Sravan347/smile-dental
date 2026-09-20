import Link from "next/link";
import { treatments } from "@/data/treatments";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Treatments",
  description:
    "Explore the dental treatments available at Plavilayil Dental Clinic in Adoor.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
        Treatments
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
        Comprehensive dental care, under one roof.
      </h1>
      <div className="mt-12 space-y-5">
        {treatments.map((treatment, index) => (
          <Link
            key={treatment.slug}
            href={`/treatments/${treatment.slug}`}
            className="group flex flex-col gap-5 rounded-[2rem] border border-(--border) bg-(--white) p-6 transition hover:bg-background md:flex-row md:items-center md:justify-between md:p-8"
          >
            <div className="flex items-center gap-5">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-(--muted)">{`0${index + 1}`}</span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
                  {treatment.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                  {treatment.name}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="max-w-md text-sm leading-7 text-(--muted)">
                {treatment.intro}
              </p>
              <span
                className="text-2xl text-foreground transition group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
