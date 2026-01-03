"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import type { Experience as ExperienceType, BulletPoint } from "@/types";
import { GitHubIcon, ExternalLinkIcon, SectionHeader } from "@/components/ui";

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

// Create directional variants based on index
const getItemVariants = (index: number) => {
  const isEven = index % 2 === 0;
  return {
    hidden: { 
      opacity: 0, 
      x: isEven ? -50 : 50,
      y: 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };
};

// =============================================================================
// Bullet Point with Highlights
// =============================================================================

function BulletPointText({ bullet }: { bullet: BulletPoint }) {
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
  const isLeft = isEven;

  return (
    <motion.div
      className={`relative flex items-start mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      variants={getItemVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Content card */}
      <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all w-full md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
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
                  <GitHubIcon className="w-5 h-5" />
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
                  <ExternalLinkIcon className="w-5 h-5" />
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

      {/* Timeline dot - centered on desktop, left on mobile */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 z-10">
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-white dark:border-gray-800 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        />
      </div>

      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-0 top-6 transform -translate-x-1/2 z-10">
        <motion.div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-white dark:border-gray-800 shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        />
      </div>
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
        <SectionHeader title="Experience" />
        {/* Timeline container with centered vertical line */}
        <div className="relative pb-16">
          {/* Vertical timeline line - desktop centered, mobile on left */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

          <div className="relative">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
