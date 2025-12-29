"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/data";

// =============================================================================
// Animation Variants
// =============================================================================

const revealVariants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// =============================================================================
// Hero Component
// =============================================================================

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-10 lg:px-20 py-20 bg-white dark:bg-black overflow-hidden select-none">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Name - Big Block Letters */}
        <div className="overflow-hidden mb-4">
          <motion.h1 
            variants={revealVariants}
            className="text-huge font-bold leading-none tracking-tighter"
          >
            {PERSONAL.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Info Grid - Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-10 md:mt-20 border-t border-black dark:border-white pt-6">
          <div className="md:col-span-4">
            <motion.p 
              variants={revealVariants}
              className="text-xl sm:text-2xl font-medium uppercase tracking-tight"
            >
              {PERSONAL.title}
            </motion.p>
          </div>
          
          <div className="md:col-span-5 md:col-start-8">
            <motion.p 
              variants={revealVariants}
              className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-serif italic leading-snug"
            >
              {PERSONAL.tagline}
            </motion.p>
            
            <motion.div 
              variants={revealVariants}
              className="mt-10"
            >
              <button 
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
              >
                <span>Discover Projects</span>
                <span className="block w-10 h-px bg-black dark:bg-white transition-all group-hover:w-20" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Background Decor - Minimal Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100px" }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-0 right-10 lg:right-20 w-px bg-black dark:bg-white opacity-20"
      />
    </section>
  );
}
