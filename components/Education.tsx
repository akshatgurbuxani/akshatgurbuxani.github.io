"use client";

import { motion } from "framer-motion";
import { EDUCATION, PUBLICATIONS } from "@/data";
import type { Education as EducationType, Publication } from "@/types";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        Education
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
    </motion.div>
  );
}

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
      variants={itemVariants}
      whileHover={{ y: -5 }}
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

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 shadow-lg"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
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
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader />

        {/* Education Cards */}
        <motion.div
          className="grid gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EDUCATION.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </motion.div>

        {/* Publications */}
        {PUBLICATIONS.length > 0 && (
          <>
            <motion.h3
              className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Publications
            </motion.h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {PUBLICATIONS.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
