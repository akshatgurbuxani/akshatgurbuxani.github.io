"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/data";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const blobVariants = {
  animate: (custom: { scale: number[]; x: number[]; y: number[]; duration: number }) => ({
    scale: custom.scale,
    x: custom.x,
    y: custom.y,
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// =============================================================================
// Animated Background Blobs
// =============================================================================

function AnimatedBlobs() {
  const blobs = [
    { color: "bg-purple-300 dark:bg-purple-800", position: "top-20 left-10", custom: { scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0], duration: 8 } },
    { color: "bg-pink-300 dark:bg-pink-800", position: "top-40 right-10", custom: { scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0], duration: 10 } },
    { color: "bg-blue-300 dark:bg-blue-800", position: "bottom-20 left-1/2", custom: { scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -40, 0], duration: 12 } },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.position} w-72 h-72 ${blob.color} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70`}
          variants={blobVariants}
          animate="animate"
          custom={blob.custom}
        />
      ))}
    </div>
  );
}

// =============================================================================
// Scroll Indicator
// =============================================================================

function ScrollIndicator() {
  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
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
      <motion.a
        href="#contact"
        className="px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.a>
    </motion.div>
  );
}

// =============================================================================
// Hero Component
// =============================================================================

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <AnimatedBlobs />

      <motion.div
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
    </section>
  );
}
