import type { SkillCategory } from "@/types";

// =============================================================================
// Skills by Category
// =============================================================================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "skills",
    name: "Skills",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "C++", proficiency: 85 },
      { name: "Rust", proficiency: 70 },
      { name: "NumPy", proficiency: 90 },
      { name: "PyTorch", proficiency: 90 },
      { name: "CUDA", proficiency: 75 },
      { name: "Polars", proficiency: 85 },
    ],
  },
];

// =============================================================================
// Flat Skills List (for quick reference)
// =============================================================================

export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.name,
    categoryId: category.id,
  }))
);

// =============================================================================
// Helper Functions
// =============================================================================

export const getSkillsByCategory = (categoryId: string) => {
  const category = SKILL_CATEGORIES.find((c) => c.id === categoryId);
  return category?.skills ?? [];
};

export const getTopSkills = (limit: number = 8) => {
  return ALL_SKILLS.sort((a, b) => b.proficiency - a.proficiency).slice(0, limit);
};

export const getCategoryById = (id: string): SkillCategory | undefined => {
  return SKILL_CATEGORIES.find((c) => c.id === id);
};

