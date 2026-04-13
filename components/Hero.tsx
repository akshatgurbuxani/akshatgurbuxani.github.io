"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";
import AtmosphericBackground from "./AtmosphericBackground";
import { GitHubIcon, LinkedInIcon, DownloadIcon, ChevronDownIcon } from "@/components/ui";
import { PATHS } from "@/constants";

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
// Social Link Buttons (Button Style)
// =============================================================================

function SocialButtons() {
  const buttonConfig = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon className="w-5 h-5" />,
      borderColor: "border-purple-600 dark:border-purple-400",
      href: SOCIAL_LINKS.find(l => l.name === "LinkedIn")?.url || "#",
    },
    {
      name: "Github",
      icon: <GitHubIcon className="w-5 h-5" />,
      borderColor: "border-gray-800 dark:border-gray-300",
      href: SOCIAL_LINKS.find(l => l.name === "GitHub")?.url || "#",
    },
    {
      name: "Download CV",
      icon: <DownloadIcon className="w-5 h-5" />,
      borderColor: "border-gray-800 dark:border-gray-300",
      href: PATHS.resume,
      isExternal: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {buttonConfig.map((button) => (
        <motion.a
          key={button.name}
          href={button.href}
download={button.isExternal ? PATHS.resume : undefined}
            target={button.isExternal ? "_blank" : undefined}
            rel={button.isExternal ? "noopener noreferrer" : undefined}
          className={`px-6 py-3 rounded-full border-2 ${button.borderColor} bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {button.icon}
          <span>{button.name}</span>
        </motion.a>
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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          {PERSONAL.name.split(" ").map((part, i) => (
            <span key={i} className={i === 1 ? "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent block sm:inline" : ""}>
              {part}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          {PERSONAL.title.split(" @ ").map((part, index) => {
            if (index === 0) {
              return <span key={index}>{part} @ </span>;
            }
            return (
              <a
                key={index}
                href="https://www.semiotic.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-300 dark:hover:to-pink-300 transition-all duration-300 underline decoration-2 underline-offset-4 decoration-purple-600/50 dark:decoration-purple-400/50 hover:decoration-purple-600 dark:hover:decoration-purple-400"
              >
                {part}
              </a>
            );
          })}
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <SocialButtons />
          
          <motion.div className="mt-16" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <a href="#about" className="text-gray-400 hover:text-purple-600 transition-colors" aria-label="Scroll to about section">
              <ChevronDownIcon className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
