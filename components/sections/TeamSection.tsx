import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="mb-10 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          Our team
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
          Meet the people behind your care.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <article
            key={member.slug}
            className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white)"
          >
            <div className="relative h-[420px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-3xl text-foreground">
                {member.name}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-(--forest)">
                {member.qualification}
              </p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                {member.specialization}
              </p>
              <p className="mt-4 text-sm leading-7 text-(--muted)">
                {member.shortBio}
              </p>
              <Link
                href={`/team/${member.slug}`}
                className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-(--forest)"
              >
                View Profile <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
