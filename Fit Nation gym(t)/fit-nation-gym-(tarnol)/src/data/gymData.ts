export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  badge?: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  billingCycle: string;
  priceLabel: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const GYM_INFO = {
  name: "Fit Nation Gym",
  fullName: "Fit Nation Gym (Tarnol) – Ladies & Gents",
  category: "Gym and fitness center",
  tagline: "BUILD A STRONGER YOU.",
  heroSubtext:
    "Your fitness journey starts here. Train with purpose, build consistency, and work toward your goals at Fit Nation Gym in Tarnol, Islamabad.",
  phone: "+92 315 3588144",
  phoneRaw: "+923153588144",
  whatsappNumber: "923153588144",
  whatsappLink: "https://wa.me/923153588144",
  address: "MW25+J4R, Tarnol, Islamabad, 44000, Pakistan",
  openingTime: "6:30 AM",
  closingTime: "12:00 AM (midnight)",
  scheduleNote: "Daily schedule subject to owner verification. Contact front desk for specific ladies' slots or holiday hours.",
  audience: "Ladies & Gents",
  googleRating: 4.6,
  googleReviewCount: 11,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fit+Nation+Gym+Tarnol+Islamabad",
  mapEmbedQuery: "Fit Nation Gym Tarnol Islamabad",
};

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Syed Ameer Hussain Kazmi",
    rating: 5,
    text: "Blown away by how great this gym is! The equipment is top notch, the variety and number of machines is absolutely amazing! It rivals the elite gyms of the twin city like 8fitness and gritfit.",
    source: "Google Maps Review",
  },
  {
    id: "review-2",
    author: "Fit Nation Gym",
    rating: 5,
    text: "Fit Nation Gym is an outstanding place to work out; clean, well-equipped, and welcoming to all fitness levels. The staff and trainers are knowledgeable, supportive, and always ready to help you reach your goals. Highly recommend for anyone serious about staying fit and motivated.",
    source: "Google Maps Review",
  },
  {
    id: "review-3",
    author: "Abdul Sami",
    rating: 5,
    text: "Fit Nation Gym is really good — it has excellent equipment and a great environment.",
    source: "Google Maps Review",
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "facility-strength",
    title: "Strength Training",
    subtitle: "Heavy compound stations & power cages",
    description: "Equipped with power cages, Olympic bars, and ergonomic benches for foundational progressive strength training.",
    image: "/images/facility_strength_weights_1792003058787.jpg",
    category: "Strength",
    isPlaceholder: true,
  },
  {
    id: "facility-cardio",
    title: "Cardio Zone",
    subtitle: "Endurance & stamina conditioning",
    description: "Modern treadmills, cross-trainers, and exercise cycles positioned in a high-focus space for optimal conditioning.",
    image: "/images/facility_cardio_zone_1792003060503.jpg",
    category: "Cardio",
    isPlaceholder: true,
  },
  {
    id: "facility-resistance",
    title: "Resistance Machines",
    subtitle: "Targeted muscle isolation systems",
    description: "Cable towers, pulldowns, leg presses, and selectorized units delivering controlled muscle stimulus across all experience levels.",
    image: "/images/facility_cable_machines_1792003059349.jpg",
    category: "Machines",
    isPlaceholder: true,
  },
  {
    id: "facility-free-weights",
    title: "Free Weights & Dumbbells",
    subtitle: "Comprehensive range of iron & urethane weights",
    description: "Diverse dumbbell pairs and precision barbell plates allowing incremental progression for every lifter.",
    image: "/images/facility_strength_weights_1792003058787.jpg",
    category: "Free Weights",
    isPlaceholder: true,
  },
  {
    id: "facility-training-space",
    title: "Functional & Stretching Area",
    subtitle: "Dedicated floor space for mobility and core",
    description: "Spacious training turf for calisthenics, core exercises, warmup routines, and post-workout recovery stretching.",
    image: "/images/hero_gym_dark_1792003058054.jpg",
    category: "Functional",
    isPlaceholder: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Training Floor",
    category: "Training Floor",
    image: "/images/hero_gym_dark_1792003058054.jpg",
    caption: "Spacious workout floor with high ceilings, wide lifting bays, and high-impact athletic ambiance.",
  },
  {
    id: "gal-2",
    title: "Free Weight Progression",
    category: "Strength",
    image: "/images/facility_strength_weights_1792003058787.jpg",
    caption: "Neatly organized dumbbell racks, Olympic bars, and squat stations for serious resistance training.",
  },
  {
    id: "gal-3",
    title: "Cardio Conditioning Strip",
    category: "Cardio",
    image: "/images/facility_cardio_zone_1792003060503.jpg",
    caption: "Treadmills and cardio endurance machines equipped for high-intensity intervals and steady-state work.",
  },
  {
    id: "gal-4",
    title: "Cable & Resistance Hub",
    category: "Machines",
    image: "/images/facility_cable_machines_1792003059349.jpg",
    caption: "Multi-station selectorized cable units delivering smooth resistance across all angles.",
  },
  {
    id: "gal-5",
    title: "Open Daylit Studio View",
    category: "Training Floor",
    image: "/images/hero_gym_bright_1792004645900.jpg",
    caption: "Panoramic workout floor with floor-to-ceiling daylight illumination.",
  },
  {
    id: "gal-6",
    title: "Functional Movement Turf",
    category: "Functional",
    image: "/images/gym_turf_bright_1792004646036.jpg",
    caption: "Dedicated high-density turf for agility, core conditioning, and mobility warmup.",
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Membership",
    billingCycle: "Per Month",
    priceLabel: "Contact for Price",
    description: "Great for individuals seeking flexibility and short-term fitness consistency without long commitments.",
    features: [
      "Access for Ladies & Gents (designated slots)",
      "Full gym floor & equipment access",
      "Flexible monthly renewal",
      "Direct front desk trainer support",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly Membership",
    billingCycle: "3 Months Plan",
    priceLabel: "Contact for Price",
    description: "A popular choice for establishing consistent workout habits and locking in routine fitness discipline.",
    features: [
      "Access for Ladies & Gents (designated slots)",
      "Full gym floor & equipment access",
      "Quarterly commitment rate",
      "Direct front desk trainer support",
    ],
    recommended: true,
  },
  {
    id: "annual",
    name: "Annual Membership",
    billingCycle: "12 Months Plan",
    priceLabel: "Contact for Price",
    description: "Designed for serious fitness enthusiasts dedicated to a full year of structured training.",
    features: [
      "Access for Ladies & Gents (designated slots)",
      "Full gym floor & equipment access",
      "Best long-term commitment value",
      "Direct front desk trainer support",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Fit Nation Gym located?",
    answer:
      "Fit Nation Gym is conveniently located at MW25+J4R, Tarnol, Islamabad, 44000, Pakistan, easily accessible for residents of Tarnol and surrounding Islamabad sectors.",
  },
  {
    id: "faq-2",
    question: "How can I contact the gym?",
    answer:
      "You can call us directly at +92 315 3588144, send a WhatsApp message to +92 315 3588144, or visit our gym in Tarnol during operational hours.",
  },
  {
    id: "faq-3",
    question: "Does the gym serve both ladies and gentlemen?",
    answer:
      "Yes. Fit Nation Gym is a dedicated fitness facility serving both ladies and gentlemen. Please contact our reception desk directly for specific women's and men's schedule timings.",
  },
  {
    id: "faq-4",
    question: "What are the membership prices?",
    answer:
      "Membership plans are available in monthly, quarterly, and annual options. Please contact our team directly at +92 315 3588144 or via WhatsApp to receive the current fee structure and package details.",
  },
  {
    id: "faq-5",
    question: "What are the opening hours?",
    answer:
      "Fit Nation Gym is open daily from 6:30 AM to 12:00 AM (midnight). Schedule is subject to confirmation; please reach out to front desk staff for specific holiday or session timings.",
  },
  {
    id: "faq-6",
    question: "What equipment and facilities are available?",
    answer:
      "Fit Nation Gym features top-notch equipment including strength training power cages, free weights, resistance machines, and cardio equipment. As noted by Google reviewers, the variety and quality of machines rivals top twin city gyms.",
  },
];
