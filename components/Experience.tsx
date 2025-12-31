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
            <div className="flex items-center gap-3 mt-1">
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                {experience.company}
              </p>
              {experience.githubUrl && (
                <a
                  href={experience.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
              {experience.websiteUrl && (
                <a
                  href={experience.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label="Website"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
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

