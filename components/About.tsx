"use client";

import { motion } from "framer-motion";
import { PERSONAL, getTopSkills } from "@/data";
import type { Skill } from "@/types";
import { SectionHeader } from "@/components/ui";

// =============================================================================
// Animation Variants
// =============================================================================

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

// =============================================================================
// Bio Content Card (Right Side)
// =============================================================================

function BioCard() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
      variants={slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
}

// =============================================================================
// Skill Bar Component
// =============================================================================

interface SkillBarProps {
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// =============================================================================
// Skills Card (Left Side)
// =============================================================================

function SkillsCard() {
  // Get top skills to display
  const topSkills = getTopSkills(8);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Technologies
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium text-sm">
        Here are a few technologies I&apos;ve been working with recently:
      </p>
      <div className="space-y-3">
        {topSkills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// =============================================================================
// About Component
// =============================================================================

export default function About() {
  return (
    <div className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="About Me" />
        
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Skills Card */}
          <SkillsCard />
          
          {/* Right: Bio Card */}
          <BioCard />
        </div>
      </div>
    </div>
  );
}
