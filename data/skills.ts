import type { SkillCategory } from "@/types";

// =============================================================================
// Skills by Category
// =============================================================================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming & Data Science",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "NumPy", proficiency: 90 },
      { name: "Pandas", proficiency: 90 },
      { name: "SQL", proficiency: 85 },
      { name: "C++", proficiency: 75 },
      { name: "C#", proficiency: 70 },
      { name: "MongoDB", proficiency: 80 },
      { name: "FAISS", proficiency: 85 },
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning & AI",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "LLM", proficiency: 92 },
      { name: "PyTorch", proficiency: 90 },
      { name: "TensorFlow", proficiency: 88 },
      { name: "Transformers", proficiency: 90 },
      { name: "LangChain", proficiency: 88 },
      { name: "spaCy", proficiency: 85 },
      { name: "MLFlow", proficiency: 82 },
      { name: "CUDA", proficiency: 75 },
      { name: "RLHF", proficiency: 80 },
    ],
  },
  {
    id: "big-data",
    name: "Big Data & MLOps",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Apache Spark", proficiency: 88 },
      { name: "Apache Kafka", proficiency: 85 },
      { name: "Apache Flink", proficiency: 82 },
      { name: "Hadoop", proficiency: 78 },
      { name: "AWS SageMaker", proficiency: 85 },
      { name: "AWS EC2", proficiency: 82 },
      { name: "MLOps", proficiency: 85 },
    ],
  },
  {
    id: "engineering",
    name: "Software Engineering",
    gradient: "from-green-500 to-teal-500",
    skills: [
      { name: "Docker", proficiency: 90 },
      { name: "Kubernetes", proficiency: 85 },
      { name: "CI/CD", proficiency: 85 },
      { name: "Jenkins", proficiency: 80 },
      { name: "FastAPI", proficiency: 88 },
      { name: "Streamlit", proficiency: 85 },
      { name: "Git", proficiency: 92 },
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

