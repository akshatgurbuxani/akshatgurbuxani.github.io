"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import type { Experience as ExperienceType, BulletPoint } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// =============================================================================
// Section Header
// =============================================================================

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
    </motion.div>
  );
}

// =============================================================================
// Bullet Point with Highlights
// =============================================================================

function BulletPointText({ bullet }: { bullet: BulletPoint }) {
  // Simple version - just render the text with a bullet point
  return (
    <li className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {bullet.text}
    </li>
  );
}

// =============================================================================
// Technology Tags
// =============================================================================

function TechnologyTags({ technologies }: { technologies?: string[] }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

// =============================================================================
// Experience Card
// =============================================================================

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
  isLast: boolean;
}

function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  return (
    <motion.div
      className="relative pl-8 md:pl-12"
      variants={itemVariants}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-0 md:left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
      )}

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 md:left-4 top-2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      />

      {/* Content card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ml-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
              {experience.company}
            </p>
          </div>
          <div className="text-right mt-2 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {experience.startDate} – {experience.endDate}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {experience.location}
            </p>
          </div>
        </div>

        {/* Description bullets */}
        <ul className="space-y-3 list-disc list-outside ml-5">
          {experience.description.map((bullet, bulletIndex) => (
            <BulletPointText key={bulletIndex} bullet={bullet} />
          ))}
        </ul>

        {/* Technologies */}
        <TechnologyTags technologies={experience.technologies} />
      </div>
    </motion.div>
  );
}

// =============================================================================
// Experience Component
// =============================================================================

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader />

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === EXPERIENCES.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

