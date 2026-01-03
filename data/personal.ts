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
    "I work on turning research ideas into working AI systems. Over the last two years, that's meant training large language models, wiring them into distributed systems, and making sure they hold up in production.",
    "Most of my work lives end-to-end: taking an idea from research or theory, turning it into a model, and deploying it at scale. Along the way, I've worked on multimodal learning, multi-agent systems, and real-time data pipelines.",
    "I care about the gap between what papers promise and what systems actually do, and I spend most of my time trying to close it.",
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

