export function Marquee() {
  const items = [
    "DENTAL CARE",
    "PATIENT FIRST",
    "EXPERIENCED CARE",
    "PATHANAMTHITTA",
    "YOUR SMILE MATTERS",
  ];

  return (
    <div className="overflow-hidden border-y border-white/15 bg-(--forest) text-(--ivory)">
      <div className="marquee-track flex min-w-max items-center gap-10 py-4 text-sm font-semibold uppercase tracking-[0.26em] md:text-base">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
