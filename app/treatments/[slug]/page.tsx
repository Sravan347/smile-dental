import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { treatments } from "@/data/treatments";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const treatment = treatments.find((item) => item.slug === slug);
    if (!treatment)
      return buildMetadata({
        title: "Treatment not found",
        description: "Treatment not found.",
      });

    return buildMetadata({
      title: treatment.name,
      description: treatment.intro,
      path: `/treatments/${treatment.slug}`,
      image: treatment.image,
    });
  });
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8 xl:px-0">
      <div className="pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Treatments", href: "/treatments" },
            { label: treatment.name },
          ]}
        />
      </div>

      <section className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            {treatment.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
            {treatment.name}
          </h1>
          <p className="mt-6 text-base leading-8 text-(--muted)">
            {treatment.intro}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3 text-sm font-medium text-white"
            >
              Book an Appointment
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white px-6 py-3 text-sm font-medium text-foreground"
            >
              View All Treatments
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-white p-3">
          <Image
            src={treatment.image}
            alt={treatment.name}
            width={1200}
            height={900}
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-foreground">
            What is this treatment?
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            {treatment.whatIsIt.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-foreground">
            When it may be recommended
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            {treatment.whenRecommended.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-foreground">
            Treatment process
          </h2>
          <ol className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            {treatment.process.map((item, index) => (
              <li key={item}>
                <span className="font-semibold text-foreground">
                  0{index + 1}.
                </span>{" "}
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-foreground">
            What patients can expect
          </h2>
          <ul className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
            {treatment.whatToExpect.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground">FAQs</h2>
        <div className="mt-8 space-y-4">
          {treatment.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-(--border) bg-(--white) p-6"
            >
              <p className="font-medium text-foreground">
                {faq.question}
              </p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground">
          Related treatments
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {treatments
            .filter((item) => item.slug !== treatment.slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/treatments/${item.slug}`}
                className="rounded-[1.5rem] border border-(--border) bg-(--white) p-5 hover:bg-background"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--forest)">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-foreground">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">
                  {item.intro}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
