import { buildMetadata } from "@/lib/metadata";
import { clinic } from "@/data/clinic";

export const metadata = buildMetadata({
  title: `Privacy Policy | ${clinic.name}`,
  description: `Read the privacy policy for ${clinic.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:px-8">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-(--forest)">
        Privacy policy
      </p>
      <h1 className="font-serif text-4xl text-foreground md:text-6xl">
        Privacy Policy
      </h1>
      <div className="mt-10 space-y-6 text-[15px] leading-8 text-(--muted)">
        <p>
          This page is a placeholder for the clinic’s formal privacy notice. The
          wording and policy details should be reviewed and updated by the
          clinic before public launch.
        </p>
        <p>
          The website may collect basic contact information submitted through
          the appointment request form. This information is used only to respond
          to enquiries and support patient communication.
        </p>
        <p>
          {clinic.name} may store form responses for administrative and
          scheduling purposes. Any personal information should be handled in
          line with applicable privacy requirements and local legal obligations.
        </p>
        <p>
          Website analytics and tracking tools should be configured only when
          approved and documented. No sensitive credentials or patient
          information should be exposed in public code or client-side sources.
        </p>
      </div>
    </main>
  );
}
