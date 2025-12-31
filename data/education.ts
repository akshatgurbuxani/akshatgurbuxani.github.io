import type { Education, Publication } from "@/types";

// =============================================================================
// Education
// =============================================================================

export const EDUCATION: Education[] = [
  {
    id: "boston-university",
    institution: "Boston University",
    degree: "Master of Science",
    field: "Artificial Intelligence",
    location: "Boston, MA",
    startDate: "Sep. 2023",
    endDate: "Dec. 2024",
    coursework: [
      "Computer Vision",
      "Deep Learning",
      "Reinforcement Learning",
      "Machine Learning",
      "Medical Imaging with DL",
    ],
    activities: [
      "Graduate Teaching Assistant: Grad Intro to Natural Language Processing (NLP)",
      "Graduate Teaching Assistant: Data Science Tools and Applications",
    ],
  },
  {
    id: "srm-university",
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Chennai, India",
    startDate: "Aug. 2017",
    endDate: "May 2021",
  },
];

// =============================================================================
// Publications
// =============================================================================

export const PUBLICATIONS: Publication[] = [
  {
    id: "imo-paper",
    title: "Solving International Mathematical Olympiad at Human Level",
    description: "Co-authored paper on optimizing Large Language Models for olympiad- and PhD-level math reasoning",
    date: "June 2024 – Aug. 2024",
    status: "Under review at ICLR 2025",
    venue: "ICLR 2025",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DDIjoEUAAAAJ&sortby=pubdate&citation_for_view=DDIjoEUAAAAJ:dshw04ExmUIC",
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

export const getEducationById = (id: string): Education | undefined => {
  return EDUCATION.find((edu) => edu.id === id);
};

export const getLatestEducation = (): Education => {
  return EDUCATION[0];
};

