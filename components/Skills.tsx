"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data";
import type { SkillCategory } from "@/types";

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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// =============================================================================
// Skill Category Component
// =============================================================================

function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="py-10 border-t border-gray-100 dark:border-neutral-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="text-xl font-bold uppercase tracking-tight">
            {category.name}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-2">
            Expertise Area
          </p>
        </div>
        
        <div className="md:col-span-8">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {category.skills.map((skill) => (
              <div key={skill.name} className="group">
                <p className="text-2xl font-serif italic text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </p>
                <div className="w-0 h-px bg-black dark:bg-white transition-all duration-500 group-hover:w-full mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Skills Component
// =============================================================================

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-large font-bold tracking-tighter mb-4"
          >
            Toolkit
          </motion.h2>
          <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeInOut" }}
             className="w-full h-px bg-black dark:bg-white origin-left mb-20"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {SKILL_CATEGORIES.map((category) => (
            <SkillGroup key={category.id} category={category} />
          ))}
        </motion.div>
        
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-10 bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-black dark:hover:border-white transition-all duration-500">
            <p className="text-4xl font-bold mb-4 italic font-serif">87%</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">NFT Spam Detection Accuracy</p>
          </div>
          <div className="p-10 bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-black dark:hover:border-white transition-all duration-500">
            <p className="text-4xl font-bold mb-4 italic font-serif">70%</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Response Accuracy Improvement</p>
          </div>
          <div className="p-10 bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-black dark:hover:border-white transition-all duration-500">
            <p className="text-4xl font-bold mb-4 italic font-serif">85%</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Manual Effort Reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
