"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#081b31]/80 data-[state=closed]:animate-[fadeOut_160ms_ease] data-[state=open]:animate-[fadeIn_160ms_ease]" />
        {project && (
          <Dialog.Content className="modal-scrollbar fixed left-1/2 top-1/2 z-50 max-h-[min(88vh,780px)] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-[var(--line-strong)] bg-[var(--paper-deep)] p-6 shadow-2xl focus:outline-none sm:p-10">
            <div className="mb-8 flex items-start justify-between gap-6 border-b border-[var(--line)] pb-7">
              <div>
                <p className="mono mb-3 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--signal)]">Project record · {project.date}</p>
                <Dialog.Title className="display-type text-4xl leading-none text-[var(--chalk)] sm:text-6xl">{project.title}</Dialog.Title>
              </div>
              <Dialog.Close className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--line)] bg-transparent text-xl text-[var(--ink-soft)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]" aria-label="Close project details">×</Dialog.Close>
            </div>

            <Dialog.Description className="max-w-2xl text-base leading-8 text-[var(--ink-soft)]">
              {project.longDescription || project.description}
            </Dialog.Description>

            <div className="mt-9 grid gap-9 sm:grid-cols-2">
              <div>
                <h3 className="mono text-[0.66rem] uppercase tracking-[0.15em] text-[var(--ink-faint)]">Key outcomes</h3>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => <li key={highlight} className="border-l border-[var(--line-strong)] pl-4 text-sm leading-6 text-[var(--chalk)]">{highlight}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mono text-[0.66rem] uppercase tracking-[0.15em] text-[var(--ink-faint)]">Tools & methods</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--ink-soft)]">{technology}</span>)}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 border-t border-[var(--line)] pt-6">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-link">View code ↗</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">Open live project ↗</a>}
              {project.certificateUrl && <a href={project.certificateUrl} target="_blank" rel="noreferrer" className="text-link">View certificate ↗</a>}
            </div>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
