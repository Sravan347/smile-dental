import { patientStories } from "@/data/testimonials";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Patient Stories",
  description:
    "Read verified patient experiences and stories for Smile Dental Clinic in Pathanamthitta.",
  path: "/patient-stories",
});

export default function PatientStoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
        Patient stories
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
        Trusted by our patients.
      </h1>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
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
    </main>
  );
}
