export const site = {
  name: "1Call Remodeling",
  legalName: "1CallRemodeling LLC",

  tagline: "One call. The whole house.",

  description:
    "1CallRemodeling LLC provides kitchen remodeling, bathroom renovations, home additions, whole-home renovations, interior remodeling, exterior improvements, decks, flooring, painting, windows, d[...]",

  phone: "(334) 867-9256",
  phoneHref: "tel:+13348679256",

  email: "1callremodelingllc@gmail.com",
  emailHref: "mailto:1callremodelingllc@gmail.com",

  address: {
    line1: "284 Simmons Creek Road",
    city: "Hartford",
    state: "AL",
    zip: "36344",
  },

  hours: "Monday-Friday, 8:00 a.m. - 5:00 p.m.",

  hoursNote:
    "Schedules may vary depending on project requirements, weather conditions, and homeowner availability.",

  facebook: "https://www.facebook.com/61590572342699/",

  serviceArea:
    "Hartford, Geneva, Samson, Slocomb, Dothan, Enterprise, Ozark, and the greater Wiregrass area.",

  owner: "Ian Stinson",
  office: "Megan Gleaton",
} as const;

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type ProjectCategory =
  | "Kitchen"
  | "Bath"
  | "Whole home"
  | "Outdoor"
  | "Addition"
  | "Millwork";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  cover: string;
  images: string[];
  summary: string;
  scope: string[];
  duration: string;
};

export const projects: Project[] = [
  {
    slug: "kitchen",
    title: "Kitchen Remodel",
    category: "Kitchen",
    cover: "/images/hero-kitchen.jpg",
    images: ["/images/hero-kitchen.jpg", "/images/kitchen-hawthorne.jpg"],
    summary:
      "Open the room, keep the house honest, and build a kitchen that can take a beating.",
    scope: [
      "Layout and island work",
      "Cabinets and millwork",
      "Counters and backsplash",
      "Plumbing and lighting",
      "Flooring and paint",
    ],
    duration: "6–12 weeks, typical",
  },
  {
    slug: "bungalow-kitchen",
    title: "Galley, Opened",
    category: "Kitchen",
    cover: "/images/kitchen-hawthorne.jpg",
    images: ["/images/kitchen-hawthorne.jpg", "/images/hero-kitchen.jpg"],
    summary:
      "A closed galley turned into a room you can comfortably live and cook in.",
    scope: [
      "Wall opening and structure",
      "Custom or semi-custom cabinets",
      "Stone counters",
      "Hardware and fixtures",
      "Daily cleanup in an occupied home",
    ],
    duration: "8–14 weeks, typical",
  },
  {
    slug: "primary-bath",
    title: "Primary Bath",
    category: "Bath",
    cover: "/images/bath-irvington.jpg",
    images: ["/images/bath-irvington.jpg"],
    summary:
      "A quiet and comfortable bath with quality fixtures and durable finishes.",
    scope: [
      "Full gut or targeted refresh",
      "Tile and waterproofing",
      "Vanity and storage",
      "Plumbing and ventilation",
      "Glass, paint, and trim",
    ],
    duration: "4–8 weeks, typical",
  },
  {
    slug: "whole-home",
    title: "Whole Home Renovation",
    category: "Whole home",
    cover: "/images/living-division.jpg",
    images: ["/images/living-division.jpg", "/images/hero-kitchen.jpg"],
    summary:
      "A complete renovation that brings the entire home together under one vision.",
    scope: [
      "Phased live-in renovations",
      "Kitchens and baths",
      "Floors, trim, and paint",
      "Doors, windows, and lighting",
      "One superintendent, one crew",
    ],
    duration: "3–8 months, typical",
  },
  {
    slug: "outdoor",
    title: "Outdoor Living",
    category: "Outdoor",
    cover: "/images/outdoor-fremont.jpg",
    images: ["/images/outdoor-fremont.jpg"],
    summary:
      "Covered kitchens, porches, and outdoor spaces built for Alabama weather.",
    scope: [
      "Covered porches and patios",
      "Outdoor kitchens",
      "Decking and masonry",
      "Lighting and fans",
      "Tie-in to the existing house",
    ],
    duration: "4–10 weeks, typical",
  },
  {
    slug: "addition",
    title: "Home Addition",
    category: "Addition",
    cover: "/images/addition-alberta.jpg",
    images: ["/images/addition-alberta.jpg", "/images/living-division.jpg"],
    summary:
      "Additional living space that blends naturally with your existing home.",
    scope: [
      "Design and permitting support",
      "Foundation and framing",
      "Roofing and exterior finish",
      "Interior finish to match",
      "Site protection and cleanup",
    ],
    duration: "4–9 months, typical",
  },
  {
    slug: "millwork",
    title: "Custom Millwork",
    category: "Millwork",
    cover: "/images/millwork.jpg",
    images: ["/images/millwork.jpg", "/images/studio.jpg"],
    summary:
      "Built-ins, libraries, vanities, and custom woodworking completed with care.",
    scope: [
      "Design and shop drawings",
      "Hardwood and painted work",
      "Hardware specification",
      "Install and scribe",
      "On-site protection",
    ],
    duration: "3–8 weeks, typical",
  },
];

export const services = [
  {
    slug: "kitchens",
    title: "Kitchens",
    image: "https://source.unsplash.com/800x600/?kitchen,remodel",
    lead: "The room you use every day, rebuilt so it works.",
    body: "From a targeted refresh to a complete gut remodel, we handle layout, cabinets, counters, plumbing, electrical, flooring, and finishes.",
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    image: "https://source.unsplash.com/800x600/?bathroom,remodel",
    lead: "Waterproofing first. Then the stone, the vanity, and the light.",
    body: "Primary baths, hall baths, and powder rooms completed with quality workmanship and durable materials.",
  },
  {
    slug: "additions",
    title: "Additions",
    image: "https://source.unsplash.com/800x600/?home,addition,construction",
    lead: "More room, joined cleanly to the house you already have.",
    body: "Bedrooms, kitchens, sunrooms, garages, and home expansions designed to fit seamlessly.",
  },
  {
    slug: "whole-home",
    title: "Whole Home Renovations",
    image: "https://source.unsplash.com/800x600/?home,renovation,interior",
    lead: "One crew. One plan. The whole house.",
    body: "Large-scale remodeling projects including kitchens, bathrooms, flooring, trim, paint, and structural improvements.",
  },
  {
    slug: "interior",
    title: "Interior Remodeling",
    image: "https://source.unsplash.com/800x600/?room,remodel,interior",
    lead: "The finishing details that make a room complete.",
    body: "Millwork, flooring, doors, trim, lighting, drywall, and complete interior upgrades.",
  },
  {
    slug: "exterior",
    title: "Exterior Improvements",
    image: "https://source.unsplash.com/800x600/?exterior,house,renovation",
    lead: "Built for Alabama weather.",
    body: "Porches, outdoor living spaces, siding repairs, and exterior remodeling projects.",
  },
  {
    slug: "decks",
    title: "Decks & Porches",
    image: "https://source.unsplash.com/800x600/?deck,porch,outdoor",
    lead: "Outdoor spaces built to last.",
    body: "Custom decks, covered porches, stairs, railings, repairs, and outdoor living areas.",
  },
  {
    slug: "flooring",
    title: "Flooring",
    image: "https://source.unsplash.com/800x600/?flooring,hardwood,tile",
    lead: "New floors that transform a room.",
    body: "LVP, hardwood, tile, laminate, flooring repairs, and complete replacement services.",
  },
  {
    slug: "painting",
    title: "Painting",
    image: "https://source.unsplash.com/800x600/?painting,house,interior",
    lead: "Interior and exterior painting.",
    body: "Professional painting services to refresh and protect your investment.",
  },
  {
    slug: "windows-doors",
    title: "Windows & Doors",
    image: "https://source.unsplash.com/800x600/?windows,doors,home",
    lead: "Appearance, efficiency, and security.",
    body: "Replacement windows, doors, trim work, and weatherproofing solutions.",
  },
] as const;

export const process = [
  {
    n: "01",
    title: "One Call",
    body: "Talk directly with Ian or Megan about your project, budget, and timeline.",
  },
  {
    n: "02",
    title: "Walk-Through",
    body: "We visit your home and evaluate the structure, layout, and project goals.",
  },
  {
    n: "03",
    title: "Scope & Estimate",
    body: "Receive a clear project scope, budget estimate, and timeline.",
  },
  {
    n: "04",
    title: "Build Clean",
    body: "We protect your home, communicate clearly, and maintain a clean job site.",
  },
] as const;

export const promises = [
  {
    title: "Your Home, Respected",
    body: "Floors, furniture, and belongings are protected. Sites are cleaned and secured daily.",
  },
  {
    title: "On Time, As Promised",
    body: "We communicate schedule changes and keep projects moving forward.",
  },
  {
    title: "Safety Without Shortcuts",
    body: "Safety procedures and proper PPE are part of every project.",
  },
  {
    title: "One Conversation",
    body: "Questions go directly to Ian Stinson or Megan Gleaton.",
  },
  {
    title: "Licensed & Insured",
    body: "We maintain proper licensing and insurance so homeowners can hire with confidence.",
  },
  {
    title: "Clear Communication",
    body: "Every project receives updates and a direct point of contact.",
  },
] as const;

export const projectTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Home Addition",
  "Deck / Porch",
  "Flooring",
  "Painting",
  "Windows & Doors",
  "Whole Home Renovation",
  "Interior Remodeling",
  "Exterior Remodeling",
  "Other",
] as const;

export const budgets = [
  "Under $15,000",
  "$15,000 - $40,000",
  "$40,000 - $80,000",
  "$80,000+",
  "Help Me Figure That Out",
] as const;

export const timelines = [
  "As Soon As Possible",
  "Within 1-3 Months",
  "Later This Year",
  "Just Exploring Options",
] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function formatAddress() {
  const { line1, city, state, zip } = site.address;
  return `${line1}, ${city}, ${state} ${zip}`;
}
