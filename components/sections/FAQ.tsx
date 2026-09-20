import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          Frequently asked questions
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
          Questions patients ask before booking.
        </h2>
      </div>

      <div className="mt-10 divide-y divide-[var(--border)] rounded-[2rem] border border-(--border) bg-(--white)">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group px-6 py-5 md:px-8"
            open={item.question === faqItems[0].question}
          >
            <summary className="cursor-pointer list-none text-base font-medium text-foreground md:text-lg">
              {item.question}
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-(--muted) md:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
