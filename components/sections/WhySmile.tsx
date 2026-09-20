export function WhySmile() {
  const items = [
    {
      number: "01",
      title: "Personal Attention",
      text: "Every consultation is shaped around your concerns, comfort and objectives.",
    },
    {
      number: "02",
      title: "Clear Communication",
      text: "Treatment details are explained in an easy, reassuring and transparent way.",
    },
    {
      number: "03",
      title: "Comfort-Focused Care",
      text: "A calm experience, thoughtful pacing and gentle clinical guidance help patients feel at ease.",
    },
    {
      number: "04",
      title: "Comprehensive Treatment",
      text: "Preventive, restorative and cosmetic care can be coordinated under one roof.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          Why choose Smile
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
          A patient experience built around you.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.number}
            className="rounded-[1.5rem] border border-(--border) bg-background p-6"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
              {item.number}
            </p>
            <h3 className="mt-5 font-serif text-3xl text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-(--muted)">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
