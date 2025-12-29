"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const projectReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

// =============================================================================
// Project Card
// =============================================================================

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={projectReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`relative group mb-32 md:mb-64 last:mb-0 ${
        index % 2 === 0 ? "md:pr-20" : "md:pl-20 md:text-right"
      }`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}>
        {/* Image/Visual Placeholder */}
        <div className={`md:col-span-8 ${index % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-5"}`}>
          <div className="aspect-[16/9] bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`} />
              <p className="absolute text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
                Visual Concept {index + 1}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`md:col-span-4 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
           <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                {project.title}
              </h3>
              <p className="text-lg font-serif italic text-gray-500 dark:text-gray-400 leading-snug">
                {project.description}
              </p>
              <div className={`flex flex-wrap gap-x-4 gap-y-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-[0.2em] font-bold">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-6">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                >
                  <span>Case Study</span>
                  <span className="block w-6 h-px bg-black dark:bg-white transition-all group-hover:w-12" />
                </a>
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
    <section id="projects" className="py-32 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24 md:mb-40">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4"
          >
            Selected Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-huge font-bold tracking-tighter"
          >
            Gallery
          </motion.h2>
        </div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
