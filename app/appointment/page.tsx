import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Book an Appointment",
  description:
    "Request an appointment with Smile Dental Clinic in Pathanamthitta, Kerala.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            Appointments
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
            Book your consultation.
          </h1>
          <p className="mt-6 text-base leading-8 text-(--muted)">
            Tell us about your preferred visit, the treatment or concern you’d
            like to discuss and the clinic will confirm next steps.
          </p>
        </div>
        <AppointmentForm />
      </div>
    </main>
  );
}
