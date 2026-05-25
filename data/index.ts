// =============================================================================
// Data Exports
// Central export point for all portfolio data
// =============================================================================

// Personal Information
export { PERSONAL, SOCIAL_LINKS, NAV_LINKS } from "./personal";

// Experience
export {
  EXPERIENCES,
  getExperienceById,
  getLatestExperience,
  getTotalYearsExperience,
} from "./experience";

// Education
export {
  EDUCATION,
  PUBLICATIONS,
  getEducationById,
  getLatestEducation,
} from "./education";

// Skills
export {
  SKILL_CATEGORIES,
  ALL_SKILLS,
  getSkillsByCategory,
  getTopSkills,
  getCategoryById,
} from "./skills";

// Projects
export {
  PROJECTS,
  getProjectById,
  getFeaturedProjects,
  getProjectsByTechnology,
} from "./projects";


