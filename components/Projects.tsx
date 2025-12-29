"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

// =============================================================================
// Project Card
// =============================================================================

function ProjectFolder({ project, index, isLast }: { project: Project; index: number; isLast: boolean }) {
  const lineChar = isLast ? "└──" : "├──";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-4"
    >
      {/* Folder Header */}
      <div className="flex items-start gap-4">
        <span className="text-gray-600 font-bold">{lineChar}</span>
        <div className="group flex-1">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-white text-xl font-bold bg-terminal-primary/10 px-2 py-1 border border-terminal-primary/30 group-hover:bg-terminal-primary group-hover:text-black transition-all">
              [ DIR ] {project.title.toUpperCase().replace(/\s+/g, "_")}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
              MODIFIED: {project.date.split(" – ")[0]}
            </span>
          </div>

          {/* Folder Content */}
          <div className="ml-4 mt-6 border-l-2 border-dashed border-terminal-primary/20 pl-8 pb-10 space-y-6">
            <p className="text-lg text-terminal-primary/80 italic font-serif leading-snug max-w-2xl">
              &gt; {project.description}
            </p>

            {/* File List Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-sm font-mono">
              <div className="space-y-2">
                <p className="text-white opacity-40 uppercase text-[10px] font-bold">Files_and_Assets</p>
                <div className="space-y-1">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-gray-600">├──</span>
                      <span className="text-gray-400">{tech.toLowerCase()}.config</span>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <span className="text-gray-600">└──</span>
                    <span className="text-gray-400">README.md</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-white opacity-40 uppercase text-[10px] font-bold">Execution_Summary</p>
                <div className="space-y-1">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex gap-2 text-gray-400">
                      <span className="text-terminal-primary opacity-50">#</span>
                      <p className="text-[12px]">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Link */}
            <div className="pt-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group/link border-b border-terminal-primary/30 pb-1 hover:border-terminal-primary transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest">execute source_code --remote</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-terminal-primary"
                >
                  &gt;
                </motion.span>
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
    <section id="projects" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$</span>
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] border-b-2 border-terminal-primary">
            tree ./projects
          </h2>
        </div>

        {/* Directory Structure */}
        <div className="space-y-0">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white text-xl font-bold">.</span>
          </div>
          {PROJECTS.map((project, index) => (
            <ProjectFolder 
              key={project.id} 
              project={project} 
              index={index} 
              isLast={index === PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
