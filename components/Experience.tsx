"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import type { Experience as ExperienceType } from "@/types";

// =============================================================================
// Experience Item
// =============================================================================

function LogEntry({ experience, index }: { experience: ExperienceType; index: number }) {
  const timestamp = `202${5 - index}.04.12_08:30:4${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative border-l-2 border-terminal-primary/20 pl-8 pb-16 last:pb-0"
    >
      {/* Node Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-terminal-primary rounded-full group-hover:bg-terminal-primary transition-colors" />

      <div className="space-y-4">
        {/* Log Header */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-gray-500 text-[10px] font-bold">[{timestamp}]</span>
          <span className="text-terminal-primary font-bold uppercase tracking-widest text-lg">
            {experience.role}
          </span>
          <span className="text-white opacity-50 font-serif italic">@ {experience.company}</span>
        </div>

        {/* Date/Loc */}
        <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest opacity-60">
          <span>PERIOD: {experience.startDate} — {experience.endDate}</span>
          <span>LOC: {experience.location.toUpperCase()}</span>
        </div>

        {/* Description List */}
        <div className="space-y-2 max-w-3xl">
          {experience.description.map((bullet, i) => (
            <div key={i} className="flex gap-3 text-gray-400 leading-relaxed text-sm">
              <span className="text-terminal-primary opacity-50 mt-1">&gt;&gt;</span>
              <p>{bullet.text}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 pt-4">
          {experience.technologies?.map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-bold border border-terminal-primary/30 px-2 py-1 text-terminal-primary hover:bg-terminal-primary hover:text-black transition-all"
            >
              #{tech.replace(/\s+/g, "_").toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// =============================================================================
// Experience Component
// =============================================================================

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$</span>
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] border-b-2 border-terminal-primary">
            tail -f work_history.log
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="pl-4">
          {EXPERIENCES.map((exp, index) => (
            <LogEntry key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        {/* System Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-4 border border-dashed border-terminal-primary/20 text-center text-[10px] uppercase tracking-[0.5em] opacity-40"
        >
          *** END OF SYSTEM LOG ***
        </motion.div>
      </div>
    </section>
  );
}
