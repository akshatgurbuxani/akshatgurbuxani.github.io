"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

// =============================================================================
// Constants & Utilities
// =============================================================================

/**
 * Format project number with leading zero (01, 02, etc.)
 */
const formatProjectNumber = (index: number): string => {
  return String(index + 1).padStart(2, '0');
};

/**
 * Get project anchor ID
 */
const getProjectId = (index: number): string => {
  return `project-${formatProjectNumber(index)}`;
};

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
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// =============================================================================
// Icons
// =============================================================================

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// =============================================================================
// Project Navigation Header (shows previous projects as clickable links)
// =============================================================================

interface ProjectNavProps {
  currentIndex: number;
  projects: Project[];
  currentProject: Project;
}

function ProjectNav({ currentIndex, projects, currentProject }: ProjectNavProps) {
  const previousProjects = projects.slice(0, currentIndex);

  const handleNavClick = (index: number) => {
    const element = document.getElementById(getProjectId(index));
    if (element) {
      // For sticky elements, scroll to the element's position in document flow
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      className="sticky top-0 z-30 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-6 py-4">
        <div className="space-y-0">
          {/* Previous projects - collapsed */}
          {previousProjects.map((project, index) => (
            <div key={project.id}>
              <button
                onClick={() => handleNavClick(index)}
                className="w-full flex items-center justify-between py-4 px-0 text-left hover:opacity-80 transition-opacity group"
              >
                <span className="text-gray-400 dark:text-gray-500 font-bold text-sm">
                  ({formatProjectNumber(index)})
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm flex-1 text-right">
                  {project.title}
                </span>
              </button>
              <div className="border-t border-gray-200 dark:border-gray-700" />
            </div>
          ))}
          
          {/* Current project - expanded */}
          <div className="py-4">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  {formatProjectNumber(currentIndex)}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {currentProject.date}
                  </p>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex gap-2">
                {currentProject.liveUrl && (
                  <motion.a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Live demo"
                  >
                    <ExternalLinkIcon />
                  </motion.a>
                )}
                {currentProject.githubUrl && (
                  <motion.a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Project Card Component (Full-screen card for the deck)
// =============================================================================

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = formatProjectNumber(index);

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Navigation showing previous projects and current project */}
      <ProjectNav currentIndex={index} projects={PROJECTS} currentProject={project} />

      {/* Project Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Gradient Visual */}
        <motion.div
          className={`lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
          variants={slideFromLeft}
        >
          <div className="absolute inset-0 bg-black/10" />
          <motion.span
            className="text-[12rem] sm:text-[16rem] font-bold text-white/20 select-none"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {projectNumber}
          </motion.span>
        </motion.div>

        {/* Content */}
        <motion.div
          className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white dark:bg-gray-900"
          variants={slideFromRight}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {project.description}
          </motion.p>

          {/* Highlights */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  className="text-gray-600 dark:text-gray-400 flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                >
                  <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.15 + idx * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Export Projects Data for Main Page
// =============================================================================

export { PROJECTS };

// =============================================================================
// Legacy Export (for backwards compatibility)
// =============================================================================

export default function Projects() {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </>
  );
}
