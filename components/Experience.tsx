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
  const isEven = index % 2 === 0;
  const isLeft = isEven; // Even indices on left, odd on right

  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row md:flex-row-reverse'} mb-8 md:mb-12`}
      variants={itemVariants}
    >
      {/* Content card */}
      <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full md:w-[45%] ml-8 md:ml-0 ${isLeft ? 'md:mr-auto md:mr-8' : 'md:ml-auto md:ml-8'}`}>
        {/* Header */}
        <div className="flex flex-col mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
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
          <div className={`mt-2 ${isLeft ? 'text-left' : 'text-right'}`}>
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

      {/* Timeline connector line (horizontal) - desktop only */}
      <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-purple-500 to-transparent' : 'from-transparent to-purple-500'}`} />

      {/* Timeline dot - mobile on left, desktop centered */}
      <motion.div
        className={`absolute ${isLeft ? 'left-0 md:left-1/2' : 'left-0 md:left-1/2'} transform ${isLeft ? '-translate-x-2 md:-translate-x-1/2' : '-translate-x-2 md:-translate-x-1/2'} w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      />
    </motion.div>
  );
}

// =============================================================================
// Experience Component
// =============================================================================

export default function Experience() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader />

        {/* Timeline container with centered vertical line */}
        <div className="relative pb-16">
          {/* Vertical timeline line - desktop centered, mobile on left */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

          <motion.div
            className="relative"
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
      </div>
    </div>
  );
}
