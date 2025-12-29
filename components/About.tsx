"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/data";

// =============================================================================
// Animation Variants
// =============================================================================

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// =============================================================================
// About Component
// =============================================================================

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Side - Vertical Title */}
        <div className="lg:col-span-1 flex lg:flex-col justify-between items-start">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] lg:[writing-mode:vertical-lr] lg:rotate-180"
          >
            Abt. Akshat
          </motion.h2>
          <div className="hidden lg:block w-px h-20 bg-black dark:bg-white" />
        </div>

        {/* Middle Side - Main Content */}
        <div className="lg:col-span-7">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight tracking-tight">
              {PERSONAL.bio[0]}
            </p>
            
            <div className="w-12 h-px bg-black dark:bg-white my-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                {PERSONAL.bio[1]}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                {PERSONAL.bio[2]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Decorative Border/Info */}
        <div className="lg:col-span-4 lg:border-l border-gray-100 dark:border-neutral-900 lg:pl-12 pt-10 lg:pt-0">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Location</p>
              <p className="text-lg font-bold uppercase">{PERSONAL.location}</p>
            </div>
            
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Focus</p>
              <p className="text-lg font-bold uppercase">LLMs / Distributed Systems / MLOps</p>
            </div>

            <div className="pt-10">
               <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">Studio Portrait Placeholder</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
