import { patientStories } from "@/data/testimonials";

export function PatientStories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="mb-10 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          Patient stories
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
          Trusted by our patients.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {patientStories.map((story) => (
          <blockquote
            key={story.id}
            className="rounded-[2rem] border border-(--border) bg-(--white) p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
              {story.title}
            </p>
            <p className="mt-6 font-serif text-3xl leading-snug text-foreground">
              “{story.quote}”
            </p>
            <footer className="mt-6 text-sm leading-7 text-(--muted)">
              {story.context}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
