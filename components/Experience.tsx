"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import type { Experience as ExperienceType } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const revealVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

// =============================================================================
// Experience Card
// =============================================================================

function ExperienceItem({ experience, index }: { experience: ExperienceType; index: number }) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-16 border-b border-gray-100 dark:border-neutral-900 last:border-0"
    >
      {/* Number/Date */}
      <div className="md:col-span-2">
        <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 mb-1">
          {String(index + 1).padStart(2, "0")} / 03
        </p>
        <p className="text-sm font-medium uppercase tracking-tight">
          {experience.startDate} — {experience.endDate}
        </p>
      </div>

      {/* Role & Company */}
      <div className="md:col-span-5">
        <h3 className="text-3xl font-bold uppercase mb-2 tracking-tighter leading-none group-hover:italic transition-all duration-500">
          {experience.role}
        </h3>
        <p className="text-lg font-serif italic text-gray-500 dark:text-gray-400">
          {experience.company}
        </p>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-4">
          {experience.location}
        </p>
      </div>

      {/* Description */}
      <div className="md:col-span-5 md:col-start-8">
        <ul className="space-y-4">
          {experience.description.map((bullet, i) => (
            <li key={i} className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              {bullet.text}
            </li>
          ))}
        </ul>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8">
          {experience.technologies?.map((tech, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold text-black dark:text-white">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Experience Component
// =============================================================================

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-large font-bold tracking-tighter"
          >
            History
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-xs uppercase tracking-[0.3em] text-gray-400 hidden sm:block"
          >
            Work Log 2021 — 2025
          </motion.p>
        </div>

        <div className="border-t border-black dark:border-white">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
