import { clinic } from "@/data/clinic";

export function ReviewCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="rounded-[2rem] border border-(--border) bg-background px-6 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
              Patient feedback
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-5xl">
              Have you visited {clinic.name}?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-(--muted)">
              Your experience can help someone choose their next step in dental
              care.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={clinic.social.googleReviews}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3 text-sm font-medium text-white"
            >
              View Google Reviews
            </a>
            <a
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white px-6 py-3 text-sm font-medium text-foreground"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
