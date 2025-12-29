import type { Project } from "@/types";

// =============================================================================
// Projects
// =============================================================================

export const PROJECTS: Project[] = [
  {
    id: "aimo",
    title: "AI Mathematical Olympiad",
    description: "Secured silver medal in Kaggle's AIMO competition by applying advanced LLM techniques to solve olympiad-level math problems.",
    longDescription: "Applied Chain-of-Thought reasoning with self-consistency, fine-tuning, and optimizing DeepSeekMath LLM to solve olympiad-level math problems. Competed against top teams globally and achieved silver medal standing.",
    technologies: ["Python", "LLM", "Prompt Engineering", "DeepSeekMath", "Chain-of-Thought"],
    highlights: [
      "Silver medal in Kaggle competition",
      "Chain-of-Thought reasoning with self-consistency",
      "Fine-tuned DeepSeekMath LLM",
      "Olympiad-level mathematical reasoning",
    ],
    gradient: "from-yellow-500 to-orange-500",
    date: "April 2024 – June 2024",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani",
  },
  {
    id: "ai-stock-trader",
    title: "AI Stock Trader",
    description: "LLM-based trading pipeline leveraging real-time news and historical data to automate E-mini S&P 500 futures trades.",
    longDescription: "Engineered an end-to-end trading system that combines transformer-based language models with predictive modeling to analyze market sentiment from news and make automated trading decisions on E-mini S&P 500 futures.",
    technologies: ["Python", "Transformer", "LLM", "Predictive Modeling", "Real-time Data"],
    highlights: [
      "$1M+ in simulated revenue",
      "Real-time news analysis",
      "Automated trading decisions",
      "E-mini S&P 500 futures",
    ],
    gradient: "from-green-500 to-emerald-500",
    date: "Jan. 2024 – May 2024",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani",
  },
  {
    id: "itinerary-planner",
    title: "Itinerary Planner",
    description: "AI-powered trip planner generating personalized itineraries based on dates, budget, and preferences.",
    longDescription: "Built a comprehensive trip planning application powered by Gemini LLM and real-time data pipelines. The system generates personalized travel itineraries by considering user preferences, budget constraints, and travel dates.",
    technologies: ["Python", "Gemini", "LLM", "Recommender Systems", "Real-time Pipelines"],
    highlights: [
      "Gemini LLM integration",
      "Real-time data pipelines",
      "Personalized recommendations",
      "Budget-aware planning",
    ],
    gradient: "from-blue-500 to-purple-500",
    date: "Sep. 2024 – Nov. 2024",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani",
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.featured);
};

export const getProjectsByTechnology = (tech: string): Project[] => {
  return PROJECTS.filter((project) =>
    project.technologies.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

