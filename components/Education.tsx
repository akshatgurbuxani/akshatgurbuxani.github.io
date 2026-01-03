"use client";

import { motion } from "framer-motion";
import { EDUCATION, PUBLICATIONS } from "@/data";
import type { Education as EducationType, Publication } from "@/types";
import { SectionHeader, ExternalLinkIcon, BookIcon } from "@/components/ui";

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
  const directions = [
    { x: -50, y: 0 }, // left
    { x: 50, y: 0 },  // right
    { x: 0, y: -30 }, // up
    { x: 0, y: 30 },  // down
  ];
  const direction = directions[index % 4];
  
  return {
    hidden: { 
      opacity: 0, 
      x: direction.x,
      y: direction.y,
      rotate: index % 2 === 0 ? -2 : 2
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };
};

// =============================================================================
// Education Card
// =============================================================================

interface EducationCardProps {
  education: EducationType;
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
  ];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      variants={getItemVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, rotate: 1 }}
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${gradients[index % gradients.length]}`} />

      <div className="p-6">
        {/* Institution and dates */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {education.institution}
            </h3>
            <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
              {education.degree} in {education.field}
            </p>
          </div>
          <div className="text-left md:text-right mt-2 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {education.startDate} – {education.endDate}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {education.location}
            </p>
          </div>
        </div>

        {/* Activities */}
        {education.activities && education.activities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
              Activities
            </h4>
            <ul className="space-y-1">
              {education.activities.map((activity, actIndex) => (
                <li
                  key={actIndex}
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                  • {activity}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Coursework */}
        {education.coursework && education.coursework.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
              Related Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, courseIndex) => (
                <span
                  key={courseIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// =============================================================================
// Publication Card
// =============================================================================

function PublicationCard({ publication, index }: { publication: Publication; index: number }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 shadow-lg"
      variants={getItemVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotate: 1 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <BookIcon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-2 mb-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {publication.title}
            </h3>
            {publication.url && (
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex-shrink-0 mt-1"
                aria-label="View publication"
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {publication.description}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
              {publication.status}
            </span>
            <span className="text-gray-500 dark:text-gray-500 text-sm">
              {publication.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Education Component
// =============================================================================

export default function Education() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Education" />
        {/* Education Cards */}
        <div className="grid gap-8 mb-12">
          {EDUCATION.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </div>

        {/* Publications */}
        {PUBLICATIONS.length > 0 && (
          <>
            <motion.h3
              className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Publications
            </motion.h3>
            <div className="space-y-6">
              {PUBLICATIONS.map((publication, pubIndex) => (
                <PublicationCard key={publication.id} publication={publication} index={pubIndex} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
