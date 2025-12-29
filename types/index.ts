// =============================================================================
// Type Definitions for Portfolio Data
// =============================================================================

/**
 * Social media and contact links
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: "email" | "github" | "linkedin" | "twitter" | "phone";
}

/**
 * Personal information and bio
 */
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  bio: string[];
  socialLinks: SocialLink[];
}

/**
 * Individual bullet point for experience/education
 */
export interface BulletPoint {
  text: string;
  highlights?: string[]; // Key terms to emphasize
}

/**
 * Work experience entry
 */
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: BulletPoint[];
  technologies?: string[];
}

/**
 * Education entry
 */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights?: string[];
  coursework?: string[];
  activities?: string[];
}

/**
 * Individual skill item
 */
export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

/**
 * Skill category grouping
 */
export interface SkillCategory {
  id: string;
  name: string;
  icon?: string;
  skills: Skill[];
  gradient: string;
}

/**
 * Project entry
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  highlights: string[];
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured?: boolean;
}

/**
 * Publication entry
 */
export interface Publication {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  venue?: string;
  url?: string;
}

