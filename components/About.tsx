"use client";

import { motion } from "framer-motion";
import { PERSONAL, getTotalYearsExperience } from "@/data";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// =============================================================================
// Section Header
// =============================================================================

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
    </motion.div>
  );
}

// =============================================================================
// Bio Card
// =============================================================================

function BioCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <div className="relative z-10 p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl shadow-xl">
        {PERSONAL.bio.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 dark:opacity-10 -z-10" />
    </motion.div>
  );
}

// =============================================================================
// Highlight Cards
// =============================================================================

interface HighlightCardProps {
  title: string;
  description: string;
  color: string;
  delay?: number;
}

function HighlightCard({ title, description, color, delay = 0 }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
    >
      <h3 className={`text-2xl font-bold ${color} mb-2`}>{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

function HighlightCards() {
  const highlights = [
    {
      title: `${getTotalYearsExperience()}+ Years Experience`,
      description: "Industry experience as an ML Engineer, working with LLMs, distributed systems, and production ML pipelines.",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Full-Stack ML",
      description: "End-to-end expertise from model training and fine-tuning to deployment at scale with Kubernetes and Docker.",
      color: "text-pink-600 dark:text-pink-400",
    },
    {
      title: "Research & Innovation",
      description: "Published researcher with work under review at ICLR 2025 on LLM optimization for mathematical reasoning.",
      color: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {highlights.map((highlight, index) => (
        <HighlightCard
          key={index}
          title={highlight.title}
          description={highlight.description}
          color={highlight.color}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
}

// =============================================================================
// About Component
// =============================================================================

export default function About() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <BioCard />
          <HighlightCards />
        </div>
      </div>
    </div>
  );
}
