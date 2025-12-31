"use client";

import { motion } from "framer-motion";
import { PERSONAL, getTopSkills } from "@/data";

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
// Bio Content
// =============================================================================

function BioContent() {
  return (
    <div className="space-y-4">
      {PERSONAL.bio.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

// =============================================================================
// Skills Grid (Rafi Patel Style)
// =============================================================================

function SkillsGrid() {
  // Extract top skills to display in the About section
  const skills = getTopSkills(12).map(s => s.name);

  return (
    <div className="mt-8">
      <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-md">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span className="text-purple-600 dark:text-purple-400 mr-2 text-xs">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

// =============================================================================
// About Component
// =============================================================================

export default function About() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <SectionHeader />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Bio and Skills on the left */}
          <motion.div variants={itemVariants} className="flex-1">
            <BioContent />
            <SkillsGrid />
          </motion.div>

          {/* Optional: Add a profile image placeholder or decoration if desired */}
          {/* 
          <motion.div variants={itemVariants} className="relative group hidden md:block">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            <div className="absolute inset-0 w-64 h-64 rounded-2xl border-2 border-purple-600/30 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
          </motion.div>
          */}
        </motion.div>
      </div>
    </div>
  );
}
