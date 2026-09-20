import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    alt: "Dental consultation area",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    alt: "Modern dental clinic interior",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    alt: "Dental equipment and tools",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    alt: "Dentist and patient consultation",
    className: "md:col-span-2",
  },
];

export function ClinicGallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="mb-10 max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          Clinic experience
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
          Thoughtful care. Modern surroundings.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-3">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`${image.className} group relative overflow-hidden rounded-[1.8rem] border border-(--border) bg-background`}
          >
            <div className="relative h-[260px] md:h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
