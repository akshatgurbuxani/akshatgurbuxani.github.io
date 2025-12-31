"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";
import AtmosphericBackground from "./AtmosphericBackground";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

// =============================================================================
// Social Icons Component
// =============================================================================

function SocialIcons() {
  const Icons: Record<string, JSX.Element> = {
    Email: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    GitHub: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    LinkedIn: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return (
    <div className="flex space-x-6 mt-8">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
          aria-label={link.name}
        >
          {Icons[link.name]}
        </a>
      ))}
    </div>
  );
}

// =============================================================================
// Hero Component
// =============================================================================

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <AtmosphericBackground />

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-sm sm:text-base mb-4"
          variants={itemVariants}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {PERSONAL.name.split(" ").map((part, i) => (
            <span key={i} className={i === 1 ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline" : ""}>
              {part}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          {PERSONAL.title}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <SocialIcons />
          
          <motion.div className="mt-16" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <a href="#about" className="text-gray-400 hover:text-purple-600 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
