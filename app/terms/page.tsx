import { buildMetadata } from "@/lib/metadata";
import { clinic } from "@/data/clinic";

export const metadata = buildMetadata({
  title: `Terms & Conditions | ${clinic.name}`,
  description: `Read the terms and conditions for ${clinic.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:px-8">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-(--forest)">
        Terms & conditions
      </p>
      <h1 className="font-serif text-4xl text-foreground md:text-6xl">
        Terms &amp; Conditions
      </h1>
      <div className="mt-10 space-y-6 text-[15px] leading-8 text-(--muted)">
        <p>
          This page is intended to hold the clinic’s published terms and
          conditions. The final legal language should be reviewed and approved
          before launch.
        </p>
        <p>
          Information shared on this site is provided for general informational
          purposes only and should not be treated as medical advice or a
          substitute for a professional consultation.
        </p>
        <p>
          Appointment requests submitted through the website are not guaranteed
          bookings until the clinic confirms availability. {clinic.name}{" "}
          reserves the right to confirm or decline appointments based on
          suitability, schedule and treatment needs.
        </p>
        <p>
          Any external links or third-party services should be reviewed
          regularly to maintain compliance and accuracy.
        </p>
      </div>
    </main>
  );
}
