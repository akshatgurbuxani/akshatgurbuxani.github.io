"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

// =============================================================================
// Constants & Utilities
// =============================================================================

const formatProjectNumber = (index: number): string => {
  return String(index + 1).padStart(2, '0');
};

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// =============================================================================
// Icons
// =============================================================================

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

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
        Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
    </motion.div>
  );
}

// =============================================================================
// Project Card
// =============================================================================

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const projectNumber = formatProjectNumber(index);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
      variants={itemVariants}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Visual/Image Area */}
        <div className={`lg:w-2/5 h-64 lg:h-auto bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          <span className="text-8xl sm:text-9xl font-bold text-white/20 select-none group-hover:scale-110 transition-transform duration-500">
            {projectNumber}
          </span>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {project.date}
              </p>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all shadow-sm"
                  aria-label="Live demo"
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-bold tracking-wide uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Projects Component
// =============================================================================

export default function Projects() {
  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        
        <motion.div
          className="grid gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
