import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "About",
  description: `Learn more about ${clinic.name}, a patient-first dental clinic in Adoor, Kerala.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-8 xl:px-0">
      <div className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
          About
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
          Care that goes beyond the chair.
        </h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-white p-3">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
            alt="Dental clinic team consultation"
            width={1200}
            height={900}
            className="h-[560px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="space-y-6 text-base leading-8 text-(--muted)">
          <p>
            {clinic.name} is built around a clear philosophy: patients deserve
            calm, respectful and well-informed care at every stage of their
            dental journey.
          </p>
          <p>
            From preventive check-ups to restorative procedures, every
            interaction is shaped around experience, attention and a clear
            understanding of patient goals.
          </p>
          <p>
            The clinic environment is designed to feel professional and
            reassuring — a place where patients can ask questions, understand
            their options and feel confident in their care plan.
          </p>
        </div>
      </div>
    </main>
  );
}
