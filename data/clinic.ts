export type ContactField = {
  label: string;
  value: string;
  href?: string;
};

export const clinic = {
  name: "Smile Dental Clinic",
  tagline: "Comprehensive dental care in Pathanamthitta, Kerala",
  locationLabel: "Aban Junction / Aban Arcade, Pathanamthitta, Kerala",
  fullAddress: "Aban Junction / Aban Arcade, Pathanamthitta, Kerala, India",
  phone: "+91 00000 00000",
  phoneDisplay: "+91 00000 00000",
  whatsapp: "+91 00000 00000",
  whatsappDisplay: "+91 00000 00000",
  email: "hello@smiledentalclinic.in",
  website: "https://smiledentalclinic.in",
  googleMaps:
    "https://maps.google.com/?q=Smile+Dental+Clinic+Pathanamthitta+Kerala",
  latitude: 9.264,
  longitude: 76.781,
  openingHours: [
    { day: "Monday - Saturday", hours: "9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM" },
    { day: "Sunday", hours: "[VERIFY]" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleReviews:
      "https://maps.google.com/?q=Smile+Dental+Clinic+Pathanamthitta+Kerala",
  },
  reviewPrompt: "Reviews will be published once verified by the clinic.",
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Team", href: "/team" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustHighlights = [
  { label: "EST. 2004", value: "[VERIFY]" },
  { label: "MULTI-SPECIALTY", value: "[VERIFY]" },
  { label: "PATHANAMTHITTA", value: "[VERIFY]" },
  { label: "250+ PATIENT REVIEWS", value: "[VERIFY]" },
] as const;

export const contactDetails: ContactField[] = [
  { label: "Phone", value: clinic.phoneDisplay, href: `tel:${clinic.phone}` },
  {
    label: "WhatsApp",
    value: clinic.whatsappDisplay,
    href: `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}`,
  },
  { label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
  { label: "Location", value: clinic.locationLabel },
];

export const clinicImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80";
