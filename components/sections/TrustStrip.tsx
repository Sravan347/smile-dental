import { trustHighlights } from "@/data/clinic";

export function TrustStrip() {
  return (
    <section className="border-t border-(--border) bg-(--white)">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-2 md:px-8 lg:grid-cols-4 xl:px-0">
        {trustHighlights.map((item) => (
          <div
            key={item.label}
            className="border-l border-(--border) first:border-l-0 px-0 md:pl-6 lg:pl-0"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-(--muted)">
              {item.label}
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
