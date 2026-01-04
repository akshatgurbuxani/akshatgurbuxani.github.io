"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { GitHubIcon, ExternalLinkIcon, SectionHeader, TechBadge } from "@/components/ui";

// =============================================================================
// Project Card Component
// =============================================================================

function ProjectCard({ 
  project, 
  index, 
  onOpenModal 
}: { 
  project: Project; 
  index: number;
  onOpenModal: (project: Project) => void;
}) {
  // Get animation direction based on index
  const directions = [
    { x: -50, y: 0 }, // left
    { x: 50, y: 0 },  // right
    { x: 0, y: -50 }, // up
    { x: 0, y: 50 },  // down
  ];
  const direction = directions[index % 4];

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col cursor-pointer"
      initial={{ opacity: 0, x: direction.x, y: direction.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, rotate: 1 }}
      onClick={() => onOpenModal(project)}
    >
      {/* Card Header with Gradient */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-4 left-4">
          <span className="text-5xl font-bold text-white/20">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
          )}
          {project.certificateUrl && (
            <a 
              href={project.certificateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
              aria-label="View certificate"
            >
              <span className="relative w-5 h-5">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" style={{ maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath stroke=\'black\' stroke-width=\'2\' fill=\'none\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\'/%3E%3C/svg%3E")', WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath stroke=\'black\' stroke-width=\'2\' fill=\'none\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\'/%3E%3C/svg%3E")', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
              </span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live demo"
            >
              <span className="relative w-5 h-5">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" style={{ maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath stroke=\'black\' stroke-width=\'2\' fill=\'none\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\'/%3E%3C/svg%3E")', WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath stroke=\'black\' stroke-width=\'2\' fill=\'none\' d=\'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14\'/%3E%3C/svg%3E")', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }} />
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
            {project.date}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-4 flex-grow">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <TechBadge 
              key={tech} 
              label={tech}
              animated
              delay={techIndex * 0.05}
            />
          ))}
          {project.technologies.length > 3 && (
            <TechBadge 
              label={String(project.technologies.length - 3)}
              variant="count"
              animated
              delay={0.15}
            />
          )}
        </div>

        {/* Show More - Animated on Hover */}
        <motion.div 
          className="flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-medium mt-auto pt-4 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2"
          >
            Show more details
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Projects Component
// =============================================================================

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="w-full bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Projects" 
            description="A collection of my work showcasing various technologies and problem-solving approaches"
          />

          {/* Projects Grid - Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}
