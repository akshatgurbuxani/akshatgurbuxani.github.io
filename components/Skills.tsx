"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES, getTopSkills } from "@/data";
import type { SkillCategory, Skill } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
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
        Skills & Technologies
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
    </motion.div>
  );
}

// =============================================================================
// Skill Bar
// =============================================================================

interface SkillBarProps {
  skill: Skill;
  gradient: string;
  index: number;
}

function SkillBar({ skill, gradient, index }: SkillBarProps) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.02 }}
        />
      </div>
    </div>
  );
}

// =============================================================================
// Skill Category Card
// =============================================================================

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      variants={itemVariants}
    >
      {/* Category header with gradient accent */}
      <div className="flex items-center mb-6">
        <div className={`w-1 h-8 bg-gradient-to-b ${category.gradient} rounded-full mr-3`} />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      {/* Skills */}
      <div>
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            gradient={category.gradient}
            index={index * 10 + skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

// =============================================================================
// Top Skills Badges
// =============================================================================

function TopSkillsBadges() {
  const topSkills = getTopSkills(12);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Core Competencies
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {topSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, y: -5 }}
            className="px-4 py-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl font-semibold text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-shadow cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// =============================================================================
// Skills Component
// =============================================================================

export default function Skills() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        {/* Skill Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>

        {/* Top Skills Badges */}
        <TopSkillsBadges />
      </div>
    </div>
  );
}
