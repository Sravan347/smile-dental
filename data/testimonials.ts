export type PatientStory = {
  id: string;
  title: string;
  quote: string;
  context: string;
};

export const patientStories: PatientStory[] = [
  {
    id: "story-1",
    title: "Review pending verification",
    quote:
      "Patient testimonials will be published here once the clinic verifies and approves them for public display.",
    context:
      "Google reviews and clinic-approved patient stories can be added here after review.",
  },
  {
    id: "story-2",
    title: "Google review collection",
    quote:
      "This section is intentionally structured to support verified review content without inventing patient details or treatment outcomes.",
    context:
      "Use this placeholder area while the clinic collects and confirms public patient feedback.",
  },
];
