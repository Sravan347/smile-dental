import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${clinic.name} in Adoor, Kerala for appointments, treatment enquiries and clinic information.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
        Contact
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
        We’re here to help.
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-[2rem] border border-(--border) bg-(--white) p-8 text-base leading-8 text-(--muted)">
          <p>
            <strong className="text-foreground">{clinic.name}</strong>
          </p>
          <p>{clinic.locationLabel}</p>
          <p>
            <a
              href={`tel:${clinic.phone}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {clinic.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              href={`https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {clinic.whatsappDisplay}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${clinic.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {clinic.email}
            </a>
          </p>
          <div className="pt-4">
            <a
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3 text-sm font-medium text-white"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-(--white) p-3">
          <iframe
            title="Plavilayil Dental Clinic map"
            src="https://www.google.com/maps?q=Opp.%20Nayanam%20Theatre,%20Central%20Junction,%20SH%201,%20Adoor,%20Pathanamthitta%20691523&output=embed"
            className="h-[460px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
