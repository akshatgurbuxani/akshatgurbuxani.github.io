"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PERSONAL } from "@/data";
import AtmosphericBackground from "./AtmosphericBackground";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 12,
    filter: "blur(8px)",
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1]
    } 
  },
};


// =============================================================================
// Scroll Indicator
// =============================================================================

function ScrollIndicator() {
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center"
      >
        <svg
          className="w-8 h-8 text-gray-600 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// =============================================================================
// CTA Buttons
// =============================================================================

function CTAButtons() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      variants={itemVariants}
    >
      <motion.button
        onClick={scrollToProjects}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.button>
      <motion.button
        onClick={scrollToContact}
        className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.button>
    </motion.div>
  );
}

// =============================================================================
// Hero Component
// =============================================================================

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--background)] transition-colors duration-700">
      <AtmosphericBackground />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {PERSONAL.name}
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          {PERSONAL.title}
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          {PERSONAL.tagline}
        </motion.p>

        <CTAButtons />
        <ScrollIndicator />
      </motion.div>
    </div>
  );
}
