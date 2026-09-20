export type Treatment = {
  slug: string;
  name: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  whatIsIt: string[];
  whenRecommended: string[];
  process: string[];
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    eyebrow: "Core oral care",
    intro:
      "Routine oral health care designed around comfort, prevention and consistent follow-up.",
    description:
      "General dentistry care focuses on early detection, preventive guidance and foundational treatment planning for long-term oral health.",
    image:
      "https://images.unsplash.com/photo-1588776814546-daed6b6d36c2?auto=format&fit=crop&w=1200&q=80",
    whatIsIt: [
      "General dentistry includes check-ups, preventive care and basic restorative treatment planning.",
      "The goal is to keep oral health stable, identify concerns early and support long-term care decisions.",
    ],
    whenRecommended: [
      "During routine dental check-ups",
      "When you are experiencing tooth discomfort or sensitivity",
      "For patients who need preventive guidance and treatment planning",
    ],
    process: [
      "Detailed assessment and oral health review",
      "Digital evaluation and discussion of care options",
      "Treatment plan tailored to your comfort and schedule",
    ],
    whatToExpect: [
      "A calm, professional consultation experience",
      "Clear explanation of your oral health needs",
      "Simple next steps and follow-up recommendations",
    ],
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer:
          "Routine preventive visits are usually based on individual needs and guidance from the treating clinician.",
      },
      {
        question: "Is general dentistry only for pain?",
        answer:
          "No. Preventive and routine care is a key part of maintaining long-term oral health and early detection.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    eyebrow: "Comfort-focused care",
    intro:
      "Root canal treatment is approached with precision and patient comfort in mind when the inner tooth structure is affected.",
    description:
      "This treatment is recommended when the pulpal tissue becomes inflamed or infected, with a focus on preserving the natural tooth wherever clinically appropriate.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    whatIsIt: [
      "The treatment focuses on cleaning and shaping the inner tooth structure before sealing it.",
      "A careful clinical approach supports pain relief and helps preserve the tooth where appropriate.",
    ],
    whenRecommended: [
      "If there is persistent tooth pain or sensitivity",
      "When swelling or infection is present in the tooth or surrounding tissue",
      "After a clinical evaluation confirms the need for root canal care",
    ],
    process: [
      "Clinical assessment and imaging review",
      "Careful cleaning and shaping of the canal space",
      "Restoration and follow-up planning",
    ],
    whatToExpect: [
      "A step-by-step treatment explanation",
      "Comfort-oriented care and clear guidance before and after treatment",
      "A restorative plan designed around function and long-term durability",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "The experience is planned to be as comfortable as possible, with modern clinical processes and patient communication.",
      },
      {
        question: "Can the tooth be saved?",
        answer:
          "In many cases, treatment aims to preserve the natural tooth after a clinician-led assessment.",
      },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    eyebrow: "Restorative solutions",
    intro:
      "Dental implant care is planned carefully to restore function, appearance and confidence where a tooth is missing.",
    description:
      "Implant treatment is used in selected cases to replace missing teeth, with a focus on individualized planning and stepwise care.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    whatIsIt: [
      "Dental implants are a restorative option for replacing one or more missing teeth.",
      "Careful planning supports stability, function and a natural appearance.",
    ],
    whenRecommended: [
      "After tooth loss due to extraction or absence",
      "When a patient is considering a long-term restorative option",
      "Following a detailed clinical and imaging review",
    ],
    process: [
      "Consultation and treatment discussion",
      "Clinical planning with relevant assessment and imaging",
      "Implant placement and restoration based on case requirements",
    ],
    whatToExpect: [
      "Clear explanations of treatment stages",
      "A realistic discussion of timelines and planning",
      "A focus on comfort, function and long-term oral health",
    ],
    faqs: [
      {
        question: "Are dental implants suitable for everyone?",
        answer:
          "Suitability depends on the individual case, clinical findings and planned restorative goals.",
      },
      {
        question: "How long does implant care take?",
        answer:
          "Timing varies by case and treatment pathway; the clinician can provide a personalized overview during consultation.",
      },
    ],
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    eyebrow: "Smile alignment",
    intro:
      "Orthodontic care is designed to support better bite function, alignment and overall confidence.",
    description:
      "Orthodontic treatment can help with alignment concerns, bite function and improving the comfort of everyday oral care.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    whatIsIt: [
      "Orthodontic care may improve alignment and balance within the smile and bite.",
      "It is planned based on personal goals, comfort and overall oral health needs.",
    ],
    whenRecommended: [
      "When spacing, crowding or bite concerns are present",
      "For cases where alignment may affect function or confidence",
      "As part of a broader smile care discussion",
    ],
    process: [
      "Evaluation and discussion of alignment goals",
      "Planning based on clinical findings and treatment needs",
      "Ongoing review and progress monitoring",
    ],
    whatToExpect: [
      "A clear treatment plan and realistic timeline",
      "Guidance on care, hygiene and follow-up appointments",
      "Support throughout the treatment process",
    ],
    faqs: [
      {
        question: "At what age can orthodontic treatment be considered?",
        answer:
          "Treatment is assessed based on the individual case and clinical findings rather than age alone.",
      },
      {
        question: "Does orthodontic treatment affect eating?",
        answer:
          "There may be a short adjustment period, and the clinician provides guidance to support comfort and oral hygiene.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    eyebrow: "Confident smiles",
    intro:
      "Cosmetic dental care helps patients refine the appearance of their smile in a balanced, natural-looking way.",
    description:
      "Cosmetic dentistry focuses on improving smile aesthetics where the patient wants to enhance appearance in a natural, personalized manner.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
    whatIsIt: [
      "Cosmetic care supports smile enhancement through a thoughtful, personalized plan.",
      "This may include aesthetic discussions and selected restorative or procedural options.",
    ],
    whenRecommended: [
      "When a patient wants a more confident smile appearance",
      "During a cosmetic consultation focused on natural-looking improvements",
      "When discussing treatment options for tooth shade or smile balance",
    ],
    process: [
      "Smile discussion and aesthetic assessment",
      "Review of treatment goals and applicable options",
      "A tailored treatment journey with clear review points",
    ],
    whatToExpect: [
      "Honest guidance around realistic and natural outcomes",
      "Attention to balance, proportion and comfort",
      "A presentation of options aligned with your goals",
    ],
    faqs: [
      {
        question: "Can cosmetic dentistry change the way my smile looks?",
        answer:
          "It may help refine appearance based on a personalized treatment plan and consultation.",
      },
      {
        question: "Does cosmetic care need to be extensive?",
        answer:
          "Not necessarily. The most appropriate plan depends on the individual oral goals and case requirements.",
      },
    ],
  },
  {
    slug: "preventive-dental-care",
    name: "Preventive Dental Care",
    eyebrow: "Long-term oral health",
    intro:
      "Prevention-first care helps patients protect their smile before small concerns become larger issues.",
    description:
      "Preventive dental care emphasizes guidance, regular review and proactive planning to support ongoing oral health.",
    image:
      "/clinic-interior.svg",
    whatIsIt: [
      "Preventive care is built around regular review, homecare guidance and early detection.",
      "It supports overall oral health and can reduce the need for more complex care later.",
    ],
    whenRecommended: [
      "For routine dental check-ups",
      "When patients want structured long-term oral care planning",
      "To help maintain healthy habits and identify risks early",
    ],
    process: [
      "Review of current oral health status",
      "Personalized advice and routine care planning",
      "Follow-up guidance aligned to the patient’s ongoing needs",
    ],
    whatToExpect: [
      "A clear understanding of your oral health goals",
      "Practical homecare guidance and prevention strategies",
      "A long-term partnership through consistent review",
    ],
    faqs: [
      {
        question: "Why is prevention important?",
        answer:
          "It helps patients maintain healthier teeth and gums and supports earlier detection of concerns.",
      },
      {
        question: "How often should preventive care be reviewed?",
        answer:
          "The recommended review interval may vary based on individual risk factors and oral health history.",
      },
    ],
  },
];

export const featuredTreatment = treatments[1];

export const treatmentRows = treatments.map((treatment, index) => ({
  ...treatment,
  number: `0${index + 1}`,
}));
