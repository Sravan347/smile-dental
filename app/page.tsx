import { PlavilayilLanding } from "@/components/sections/PlavilayilLanding";
import { buildMetadata } from "@/lib/metadata";
import { clinic } from "@/data/clinic";

export const metadata = buildMetadata({
  title: `${clinic.name} | Dental & Orthodontic Care in Adoor`,
  description:
    "Plavilayil Dental Clinic & Orthodontic Speciality Centre brings calm, considered dental care to Adoor, Kerala.",
  path: "/",
  image:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
});

export default function HomePage() {
  return (
    <PlavilayilLanding />
  );
}
