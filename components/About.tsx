"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/data";

// =============================================================================
// About Component
// =============================================================================

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-10 lg:px-20 bg-black text-terminal-primary">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-4">
          <span className="text-terminal-primary opacity-70">admin@akshat.dev:~$</span>
          <h2 className="text-xl font-bold border-b border-terminal-primary pb-1">
            cat bio.md
          </h2>
        </div>

        {/* Content Box */}
        <div className="border border-terminal-primary/30 p-6 md:p-10 relative">
          {/* Box corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-terminal-primary" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-terminal-primary" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-terminal-primary" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-terminal-primary" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 font-mono"
          >
            {/* Primary Bio */}
            <p className="text-xl md:text-2xl leading-relaxed text-terminal-primary">
              <span className="text-white"># </span> {PERSONAL.bio[0]}
            </p>
            
            {/* Horizontal Line */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-px bg-terminal-primary/30 flex-1" />
              <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Data Summary</span>
              <div className="h-px bg-terminal-primary/30 flex-1" />
            </div>
            
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
              <div className="space-y-4">
                <p>
                  <span className="text-terminal-primary">[ INFO ]</span> {PERSONAL.bio[1]}
                </p>
                <p>
                  <span className="text-terminal-primary">[ INFO ]</span> {PERSONAL.bio[2]}
                </p>
              </div>
              
              <div className="border-l border-terminal-primary/20 pl-8 space-y-6 text-sm">
                <div>
                  <p className="text-terminal-primary uppercase text-[10px] font-bold mb-1">Current_Location</p>
                  <p className="text-white">{PERSONAL.location}</p>
                </div>
                <div>
                  <p className="text-terminal-primary uppercase text-[10px] font-bold mb-1">Email_Address</p>
                  <p className="text-white underline decoration-terminal-primary/30 hover:decoration-terminal-primary transition-all">
                    {PERSONAL.email}
                  </p>
                </div>
                <div>
                  <p className="text-terminal-primary uppercase text-[10px] font-bold mb-1">Technical_Specialization</p>
                  <p className="text-white">LLMs / Distributed Systems / AI Pipelines</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Prompt */}
        <div className="flex items-center gap-2 text-terminal-primary opacity-70">
          <span>admin@akshat.dev:~$</span>
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "stepEnd" }}
            className="w-2 h-4 bg-terminal-primary"
          />
        </div>
      </div>
    </section>
  );
}
