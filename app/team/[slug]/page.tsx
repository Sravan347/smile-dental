import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { team } from "@/data/team";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const member = team.find((item) => item.slug === slug);
    if (!member)
      return buildMetadata({
        title: "Team member not found",
        description: "Team member not found.",
      });

    return buildMetadata({
      title: member.name,
      description: `${member.name} - ${member.specialization}`,
      path: `/team/${member.slug}`,
      image: member.image,
    });
  });
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8 xl:px-0">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/team" },
          { label: member.name },
        ]}
      />
      <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-(--border) bg-white p-3">
          <Image
            src={member.image}
            alt={member.name}
            width={900}
            height={1100}
            className="h-[520px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-(--forest)">
            {member.qualification}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-foreground md:text-7xl">
            {member.name}
          </h1>
          <p className="mt-5 text-base font-medium uppercase tracking-[0.2em] text-(--forest)">
            {member.specialization}
          </p>
          <p className="mt-6 text-base leading-8 text-(--muted)">
            {member.bio}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-full bg-(--forest) px-6 py-3 text-sm font-medium text-white"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center justify-center rounded-full border border-(--border) bg-white px-6 py-3 text-sm font-medium text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-3xl text-foreground">
          Areas of care
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {member.areasOfCare.map((area) => (
            <li
              key={area}
              className="rounded-[1.5rem] border border-(--border) bg-(--white) p-5 text-sm leading-7 text-(--muted)"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
