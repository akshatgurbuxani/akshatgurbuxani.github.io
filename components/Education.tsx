"use client";

import { motion } from "framer-motion";
import { EDUCATION, PUBLICATIONS } from "@/data";
import type { Education as EducationType, Publication } from "@/types";

// =============================================================================
// Education Item
// =============================================================================

function RecordEntry({ education, index }: { education: EducationType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="p-8 border border-terminal-primary/20 relative overflow-hidden group hover:border-terminal-primary transition-all"
    >
      {/* Background ID watermark */}
      <span className="absolute -right-4 -bottom-4 text-6xl font-bold opacity-5 pointer-events-none select-none">
        REC_{String(index + 1).padStart(3, "0")}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        {/* Record Meta */}
        <div className="md:col-span-4 space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase text-gray-500">Record_ID</p>
            <p className="text-white font-bold">{education.id.toUpperCase().replace("-", "_")}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase text-gray-500">Validation_Period</p>
            <p className="text-white">{education.startDate} - {education.endDate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase text-gray-500">Status</p>
            <p className="text-green-500 font-bold">[ VERIFIED ]</p>
          </div>
        </div>

        {/* Record Content */}
        <div className="md:col-span-8 border-l border-terminal-primary/10 pl-8">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">
            {education.institution}
          </h3>
          <p className="text-lg font-serif italic text-terminal-primary/80 mb-6">
            {education.degree} in {education.field}
          </p>

          {/* Details */}
          <div className="space-y-6">
            {education.activities && (
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-white opacity-40">Roles_and_Responsibilities</p>
                {education.activities.map((act, i) => (
                  <p key={i} className="text-sm text-gray-400">
                    <span className="text-terminal-primary mr-2">/</span> {act}
                  </p>
                ))}
              </div>
            )}
            {education.coursework && (
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-white opacity-40">Knowledge_Nodes_Acquired</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {education.coursework.map((course, i) => (
                    <span key={i} className="text-[10px] font-bold text-terminal-primary/60 italic">
                      #{course.replace(/\s+/g, "_")}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Publication Item
// =============================================================================

function PublicationEntry({ pub }: { pub: Publication }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 border-2 border-dashed border-terminal-primary/30 bg-terminal-primary/5 hover:border-terminal-primary transition-all"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="bg-terminal-primary text-black px-2 text-[10px] font-bold">PAPER_REF</span>
            <span className="text-[10px] font-bold opacity-50 tracking-widest">{pub.date}</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-widest">{pub.title}</h3>
          <p className="text-sm text-gray-400 font-serif italic">&quot;{pub.description}&quot;</p>
        </div>
        <div className="text-right space-y-2 min-w-[150px]">
          <p className="text-[10px] font-bold uppercase text-white opacity-40">Submission_Node</p>
          <p className="text-white font-bold">{pub.venue}</p>
          <p className="text-green-500 font-bold text-xs">[{pub.status.toUpperCase()}]</p>
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
    <section id="education" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$</span>
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] border-b-2 border-terminal-primary">
            query_database --type=education
          </h2>
        </div>

        {/* Education Records */}
        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <RecordEntry key={edu.id} education={edu} index={index} />
          ))}
        </div>

        {/* Publications */}
        {PUBLICATIONS.length > 0 && (
          <div className="mt-32 space-y-12">
            <div className="flex items-center gap-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.4em] whitespace-nowrap opacity-50">
                Peer_Reviewed_Nodes
              </h3>
              <div className="h-px bg-terminal-primary/10 flex-1" />
            </div>
            
            <div className="space-y-6">
              {PUBLICATIONS.map((pub) => (
                <PublicationEntry key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
