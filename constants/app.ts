// =============================================================================
// Application Constants
// App-specific configuration values
// =============================================================================

/**
 * File Paths
 */
export const PATHS = {
  resume: "/akshat_gurbuxani_resume.pdf",
  resumeDownloadName: "akshat_gurbuxani_resume.pdf",
} as const;

/**
 * Section IDs (for navigation)
 */
export const SECTIONS = {
  hero: "hero",
  about: "about",
  experience: "experience",
  projects: "projects",
  education: "education",
  skills: "skills",
  contact: "contact",
} as const;

/**
 * Navigation Links
 */
export const NAVIGATION_LINKS = [
  { name: "About", href: `#${SECTIONS.about}` },
  { name: "Experience", href: `#${SECTIONS.experience}` },
  { name: "Projects", href: `#${SECTIONS.projects}` },
  { name: "Education", href: `#${SECTIONS.education}` },
  { name: "Contact", href: `#${SECTIONS.contact}` },
] as const;

/**
 * Animation Configuration
 */
export const ANIMATION_CONFIG = {
  viewport: {
    once: true,
    margin: "-100px",
  },
  defaultTransition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
} as const;

/**
 * Component-Specific Constants
 */
export const COMPONENT_CONFIG = {
  hero: {
    scrollIndicator: {
      duration: 2,
      repeat: Infinity,
    },
  },
  projects: {
    techPreviewLimit: 3,
  },
  skills: {
    topSkillsLimit: 8,
    coreCompetenciesLimit: 12,
  },
  about: {
    topSkillsLimit: 8,
  },
} as const;

