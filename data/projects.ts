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
    certificateUrl: "https://www.kaggle.com/certification/competitions/akshatgurbuxani/ai-mathematical-olympiad-prize",
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
    githubUrl: "https://github.com/akshatgurbuxani/IB-TWS-Simulated-Stocks-Trading",
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
    githubUrl: "https://github.com/akshatgurbuxani/itinerary-planner",
    liveUrl: "https://weekendplanner.streamlit.app/",
  },
  {
    id: "3d-pose-estimation",
    title: "3D Human Pose Estimation",
    description: "Spatiotemporal Transformer and LSTM models to transform 2D to 3D poses using monocular RGB videos.",
    longDescription: "Developed a deep learning system that employs Spatiotemporal Transformer and LSTM architectures to accurately estimate 3D human poses from monocular RGB video sequences. The model achieves state-of-the-art performance on the Human3.6M benchmark.",
    technologies: ["Python", "Transformer", "Computer Vision", "LSTM", "Deep Learning"],
    highlights: [
      "Spatiotemporal Transformer architecture",
      "LSTM-based temporal modeling",
      "55mm MPJPE on Human3.6M benchmark",
      "Monocular RGB video processing",
    ],
    gradient: "from-purple-500 to-pink-500",
    date: "April 2024 – May 2024",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani/3D-Human-Pose-Estimation",
  },
  {
    id: "universeg-lite",
    title: "Simple UniverSeg",
    description: "U-net with CrossBlock and few-shot learning for medical image segmentation without re-training.",
    longDescription: "Implemented a U-net architecture enhanced with CrossBlock mechanisms and few-shot learning capabilities for medical image segmentation. The system eliminates the need for re-training on new datasets while achieving high diagnostic accuracy on brain MRI scans.",
    technologies: ["Python", "MONAI", "U-Net", "Medical Imaging", "Few-shot Learning"],
    highlights: [
      "U-net with CrossBlock architecture",
      "Few-shot learning implementation",
      "0.76 Dice score on 2D brain MRI scans",
      "40% diagnostic accuracy",
      "Fused Hinge, Focal, and HD loss functions",
    ],
    gradient: "from-teal-500 to-cyan-500",
    date: "Feb. 2024 – April 2024",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani/UniverSeg-Lite",
  },
  {
    id: "weather-trading",
    title: "Automated Weather Forecast and Trading",
    description: "High-precision ML regressor for weather forecasting and automated trading on Kalshi platform.",
    longDescription: "Engineered a machine learning system that combines advanced weather forecasting with automated trading strategies. The system uses web scraping to gather comprehensive weather data and applies ML regression models to predict daily temperatures, enabling profitable trading decisions on the Kalshi platform.",
    technologies: ["Python", "Machine Learning", "Web Scraping", "Kalshi", "Regression"],
    highlights: [
      "0.87 precision in weather prediction",
      "Simulated earnings exceeding $50,000",
      "Advanced web scraping techniques",
      "Automated trading system",
      "NY temperature forecasting",
    ],
    gradient: "from-orange-500 to-red-500",
    date: "Nov. 2023 – Dec. 2023",
    featured: true,
    githubUrl: "https://github.com/akshatgurbuxani/Kalshi-Weather-Forecasting-Financial-Trading",
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

