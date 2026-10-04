"use client";

import { useState } from "react";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectModal from "./ProjectModal";

function ProjectMark({ index }: { index: number }) {
  return (
    <div className="relative h-32 overflow-hidden border-b border-[var(--line)]" aria-hidden="true">
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(243,239,223,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,223,.12)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className={`absolute h-24 w-24 border border-[var(--line-strong)] ${index % 2 ? "-bottom-7 right-10 rotate-12" : "-right-3 top-5 -rotate-6"}`} />
      <div className={`absolute grid grid-cols-5 gap-1 ${index % 2 ? "left-8 top-9" : "bottom-6 left-8"}`}>
        {Array.from({ length: 25 }, (_, pixel) => (
          <i key={pixel} className={`h-1.5 w-1.5 ${((pixel * 7 + index * 3) % 5) < 3 ? "bg-[var(--ink-soft)]" : "bg-transparent"}`} />
        ))}
      </div>
      <span className="mono absolute right-5 top-4 text-[0.62rem] tracking-[0.12em] text-[var(--ink-faint)]">PLATE / {String(index + 1).padStart(2, "0")}</span>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <SectionHeader
          index="03 / Selected work"
          title="Systems, not demos."
          description="Experiments and production-minded builds across language models, mathematical reasoning, vision, and real-time decision systems."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {PROJECTS.map((project, index) => {
            const span = index === 0 || index === 5 ? "lg:col-span-7" : index === 1 || index === 4 ? "lg:col-span-5" : "lg:col-span-6";
            return (
              <article key={project.id} className={`paper-panel group flex min-h-[360px] flex-col overflow-hidden ${span} ${index % 3 === 1 ? "lg:translate-y-7" : ""}`}>
                <ProjectMark index={index} />
                <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
                  <p className="mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--signal)]">{project.date}</p>
                  <h3 className="display-type mt-3 text-3xl leading-tight text-[var(--chalk)] sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--ink-soft)]">{project.description}</p>
                  <div className="mt-auto flex items-end justify-between gap-5 pt-7">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.technologies.slice(0, 3).map((technology) => <span key={technology} className="mono text-[0.6rem] uppercase tracking-[0.08em] text-[var(--ink-faint)]">{technology}</span>)}
                    </div>
                    <button type="button" onClick={() => setSelectedProject(project)} className="shrink-0 border-b border-[var(--line-strong)] bg-transparent pb-1 text-xs font-semibold text-[var(--chalk)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]">
                      Read record →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} open={Boolean(selectedProject)} onOpenChange={(open) => { if (!open) setSelectedProject(null); }} />
    </section>
  );
}
