import { clinic } from "@/data/clinic";

export function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            Location
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-foreground md:text-6xl">
            Smile Dental Clinic
          </h2>
          <div className="mt-8 space-y-4 text-base leading-8 text-(--muted)">
            <p>{clinic.locationLabel}</p>
            <p>
              Phone:{" "}
              <a
                href={`tel:${clinic.phone}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {clinic.phoneDisplay}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {clinic.whatsappDisplay}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${clinic.email}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {clinic.email}
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3 text-sm font-medium text-white"
            >
              Get Directions
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white px-6 py-3 text-sm font-medium text-foreground"
            >
              Call Clinic
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white) p-3">
          <iframe
            title="Smile Dental Clinic map"
            src="https://www.google.com/maps?q=Pathanamthitta%20Kerala&output=embed"
            className="h-[420px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
