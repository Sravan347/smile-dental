import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { TreatmentList } from "@/components/sections/TreatmentList";
import { FeaturedTreatment } from "@/components/sections/FeaturedTreatment";
import { WhySmile } from "@/components/sections/WhySmile";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { PatientStories } from "@/components/sections/PatientStories";
import { ReviewCTA } from "@/components/sections/ReviewCTA";
import { FAQ } from "@/components/sections/FAQ";
import { LocationSection } from "@/components/sections/LocationSection";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { buildMetadata } from "@/lib/metadata";
import { clinic } from "@/data/clinic";

export const metadata = buildMetadata({
  title: `${clinic.name} | Dental Clinic in Pathanamthitta, Kerala`,
  description:
    "Smile Dental Clinic provides comprehensive dental care in Pathanamthitta, Kerala. Explore treatments, meet the dental team and book an appointment.",
  path: "/",
  image:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <TrustStrip />
      <AboutSection />
      <StatementSection />
      <TreatmentList />
      <FeaturedTreatment />
      <WhySmile />
      <TeamSection />
      <ClinicGallery />
      <PatientStories />
      <ReviewCTA />
      <FAQ />
      <LocationSection />
      <AppointmentCTA />
    </main>
  );
}
