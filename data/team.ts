export type Doctor = {
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  shortBio: string;
  bio: string;
  areasOfCare: string[];
  image: string;
};

export const team: Doctor[] = [
  {
    slug: "lead-dentist-verify",
    name: "Lead Dentist [VERIFY]",
    qualification: "BDS / MDS [VERIFY]",
    specialization: "General Dentistry & Restorative Care",
    shortBio:
      "A clinician-led approach focused on clear communication, comfort and patient-first care.",
    bio: "This profile is a placeholder until the clinic confirms the exact clinician information for publication. The appointment team can update the details once verified.",
    areasOfCare: [
      "General dental care",
      "Restorative treatment planning",
      "Preventive guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "family-dentist-verify",
    name: "Family Dentist [VERIFY]",
    qualification: "BDS [VERIFY]",
    specialization: "Preventive & Family Care",
    shortBio:
      "Focused on patient comfort, long-term oral wellness and thoughtful family care planning.",
    bio: "This clinician profile is intentionally marked for verification to avoid publishing any unconfirmed qualifications or professional details.",
    areasOfCare: [
      "Family dental care",
      "Preventive consultations",
      "Routine care planning",
    ],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "restorative-specialist-verify",
    name: "Restorative Specialist [VERIFY]",
    qualification: "MDS [VERIFY]",
    specialization: "Cosmetic & Restorative Care",
    shortBio:
      "A careful restorative approach that balances function, aesthetics and patient confidence.",
    bio: "This team profile is ready for clinic review and can be replaced with confirmed professional details once approved for launch.",
    areasOfCare: [
      "Smile enhancement",
      "Restorative planning",
      "Patient education",
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
];
