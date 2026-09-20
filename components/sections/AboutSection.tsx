import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white) p-3">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
            alt="Dental clinic consultation room"
            width={1200}
            height={1100}
            className="h-[540px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            About the clinic
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
            Care that goes beyond the chair.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-(--muted)">
            <p>
              Smile Dental Clinic is built around the idea that dental care
              should be calm, transparent and personal. The experience is shaped
              around clear guidance and thoughtful treatment planning.
            </p>
            <p>
              From preventive care to restorative treatments, each patient
              journey is designed with comfort, clarity and continuity in mind.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-(--border) bg-background p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
                Clinic story
              </p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                A local practice grounded in long-term patient relationships and
                thoughtful care.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-(--border) bg-background p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
                Modern environment
              </p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                A professional setting designed to feel warm, welcoming and
                reassuring.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-(--forest)"
          >
            Discover Our Story <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
