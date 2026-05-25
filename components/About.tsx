"use client";

import { motion } from "framer-motion";
import { PERSONAL, getTopSkills } from "@/data";
import { SectionHeader, SkillBar } from "@/components/ui";
import { slideLeft, slideRight, viewportOnce } from "@/lib/animations";

// =============================================================================
// Bio Content Card (Right Side)
// =============================================================================

function BioCard() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
      variants={slideRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
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
// Skills Card (Left Side)
// =============================================================================

function SkillsCard() {
  // Get top skills to display
  const topSkills = getTopSkills(8);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Technologies
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium text-sm">
        Here are a few technologies I&apos;ve been working with recently:
      </p>
      <div className="space-y-3">
          {topSkills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} gradient="from-purple-500 to-pink-500" />
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
