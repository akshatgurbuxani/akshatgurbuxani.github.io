import type { Experience } from "@/types";

// =============================================================================
// Work Experience
// =============================================================================

export const EXPERIENCES: Experience[] = [
  {
    id: "semiotic-labs",
    company: "Semiotic Labs",
    role: "AI Engineer",
    location: "Los Altos, CA",
    startDate: "April 2025",
    endDate: "Present",
    description: [
      {
        text: "Trained SOTA multi-modal NFT spam detection system across 8 blockchain networks using fine-tuned LLM, GNN, XGBoost with Mixture-of-Experts ensemble, achieving 87% accuracy, correctly flagging 150,000+ malicious contracts",
        highlights: ["multi-modal", "LLM", "GNN", "XGBoost", "Mixture-of-Experts", "87% accuracy", "150,000+"],
      },
      {
        text: "Built trajectory-aware multi-agent pipeline with DSPy ReAct agents, integrating The Graph's Token API and Subgraphs with judge-agent for evaluation; improved response accuracy by 70%, reduced query latency by 60% in production",
        highlights: ["multi-agent", "DSPy", "ReAct", "The Graph", "70%", "60%"],
      },
    ],
    technologies: ["LLM", "GNN", "XGBoost", "DSPy", "Multi-Agent Systems", "Blockchain"],
    githubUrl: "https://github.com/semiotic-ai/graph-assistant",
    websiteUrl: "https://www.semiotic.ai/",
  },
  {
    id: "boston-public-school",
    company: "Boston Public School",
    role: "Data Science Intern",
    location: "Boston, MA",
    startDate: "Sep. 2024",
    endDate: "Dec. 2024",
    description: [
      {
        text: "Designed RAG-based chatbot with BPS policy repository, automating document checks and reducing manual effort by 85%",
        highlights: ["RAG", "chatbot", "85%"],
      },
      {
        text: "Aligned FAISS with vector and lexical search, metadata-driven clustering, and a multi-agent LLM pipeline, enhancing retrieval speed by 70% and document relevance by 90%",
        highlights: ["FAISS", "vector search", "multi-agent", "LLM", "70%", "90%"],
      },
    ],
    technologies: ["RAG", "FAISS", "LLM", "Vector Search", "Python"],
    githubUrl: "https://github.com/akshatgurbuxani/BPS-policybot",
    websiteUrl: "https://ragbps.streamlit.app/",
  },
  {
    id: "optum",
    company: "Optum Global Solutions Pvt Ltd",
    role: "Machine Learning Engineer",
    location: "Hyderabad, India",
    startDate: "July 2021",
    endDate: "Aug. 2023",
    description: [
      {
        text: "Productionized neural collaborative filtering model to personalize insurance policy recommendations, increasing retention by 70% and page traffic by 86%. Integrated Kafka and RESTful APIs for real-time content delivery",
        highlights: ["neural collaborative filtering", "70%", "86%", "Kafka", "RESTful APIs"],
      },
      {
        text: "Optimized ML pipelines using Apache Spark, reducing model training time by 75%, enabling faster model iterations and scalable deployments",
        highlights: ["Apache Spark", "75%"],
      },
      {
        text: "Developed LSTM-based time-series forecasting model for website traffic prediction, attaining 80% accuracy. Automated testing workflows with pytest, Docker, CI/CD, Jenkins, and Kubernetes reducing manual testing by 70%",
        highlights: ["LSTM", "time-series", "80%", "Docker", "CI/CD", "Kubernetes", "70%"],
      },
      {
        text: "Engineered distributed data pipeline using Apache Kafka and Apache Flink for real-time data processing, reducing data latency from 40 minutes to 5 minutes, and increasing data throughput by 80%",
        highlights: ["Apache Kafka", "Apache Flink", "40 minutes to 5 minutes", "80%"],
      },
      {
        text: "Structured multi-node model deployment architecture using Kubernetes and Docker, enabling parallel inference across multiple GPUs, reducing inference time by 70%, supporting high-throughput applications",
        highlights: ["Kubernetes", "Docker", "multi-GPU", "70%"],
      },
    ],
    technologies: ["Apache Spark", "Kafka", "Flink", "LSTM", "Docker", "Kubernetes", "Python", "TensorFlow"],
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

export const getExperienceById = (id: string): Experience | undefined => {
  return EXPERIENCES.find((exp) => exp.id === id);
};

export const getLatestExperience = (): Experience => {
  return EXPERIENCES[0];
};

export const getTotalYearsExperience = (): number => {
  return 2; // Update as needed
};

