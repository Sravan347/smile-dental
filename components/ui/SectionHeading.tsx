type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-foreground md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
