import type { PersonalInfo, SocialLink } from "@/types";

// =============================================================================
// Social Links
// =============================================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:imaksht@gmail.com",
    icon: "email",
  },
  {
    name: "GitHub",
    url: "https://github.com/akshatgurbuxani",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/akshatgurbuxani",
    icon: "linkedin",
  },
];

// =============================================================================
// Personal Information
// =============================================================================

export const PERSONAL: PersonalInfo = {
  name: "Akshat Gurbuxani",
  title: "AI Researcher @ Semiotic Labs",
  tagline: "Building intelligent systems that transform complex challenges into scalable AI solutions",
  location: "San Francisco, CA",
  email: "imaksht@gmail.com",
  phone: "+1 (857) 919-6015",
  bio: [
    "Two years of industry experience as an ML Engineer with deep expertise in Large Language Models, distributed systems, and production-grade machine learning pipelines.",
    "I specialize in building end-to-end AI systems—from training SOTA models to deploying them at scale. My work spans multi-modal learning, multi-agent systems, and real-time data processing.",
    "Currently seeking Data Science and ML Engineer roles where I can leverage my experience to build impactful AI products.",
  ],
  socialLinks: SOCIAL_LINKS,
};

// =============================================================================
// Navigation Links
// =============================================================================

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;

