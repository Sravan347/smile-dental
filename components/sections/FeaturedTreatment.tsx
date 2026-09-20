import Image from "next/image";
import Link from "next/link";
import { featuredTreatment } from "@/data/treatments";

export function FeaturedTreatment() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white) md:grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px]">
          <Image
            src={featuredTreatment.image}
            alt={featuredTreatment.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            Featured treatment
          </p>
          <h3 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-5xl">
            {featuredTreatment.name}
          </h3>
          <p className="mt-5 max-w-lg text-base leading-8 text-(--muted)">
            {featuredTreatment.description}
          </p>
          <div className="mt-7 space-y-3 text-sm leading-7 text-(--muted)">
            {featuredTreatment.whatToExpect.slice(0, 3).map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
          <Link
            href={`/treatments/${featuredTreatment.slug}`}
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-(--forest)"
          >
            Explore Treatment <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
