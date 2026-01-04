"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";
import type { SocialLink } from "@/types";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

// =============================================================================
// Social Icon Configuration
// =============================================================================

const SOCIAL_ICON_CONFIG: Record<string, { icon: JSX.Element; gradient: string; label: string; hoverGradient: string; iconColor?: string }> = {
  Email: { 
    icon: <EmailIcon className="w-12 h-12" />, 
    gradient: "from-red-500 via-pink-500 to-purple-500", 
    hoverGradient: "from-red-400 via-pink-400 to-purple-400",
    label: "Email" 
  },
  GitHub: { 
    icon: <GitHubIcon className="w-12 h-12" />, 
    gradient: "from-gray-300 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black", 
    hoverGradient: "from-gray-400 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900",
    label: "GitHub",
    iconColor: "text-black dark:text-white"
  },
  LinkedIn: { 
    icon: <LinkedInIcon className="w-12 h-12" />, 
    gradient: "from-blue-500 via-blue-600 to-indigo-600", 
    hoverGradient: "from-blue-400 via-blue-500 to-indigo-500",
    label: "LinkedIn" 
  },
};

// =============================================================================
// Contact Component
// =============================================================================

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Reach Out
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Always open to discussing AI/ML engineering challenges, innovative projects, or potential collaborations. Feel free to reach out if you&apos;d like to connect!
          </p>
        </motion.div>

        {/* Contact Grid with Glassmorphism */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20" variants={containerVariants}>
          {SOCIAL_LINKS.map((social, index) => {
            const config = SOCIAL_ICON_CONFIG[social.name];
            if (!config) return null;

            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-3xl overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl shadow-2xl group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-400/20 transition-all duration-300" />
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon Container with Enhanced Gradient */}
                  <motion.div 
                    className={`w-16 h-16 sm:w-20 sm:h-24 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center ${config.iconColor || "text-white"} shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, -5, 0],
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                    }}
                  >
                    {config.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {config.label}
                  </h3>
                  
                  {/* Animated Underline */}
                  <motion.div 
                    className="mt-3 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.footer className="pt-12 border-t border-gray-200 dark:border-gray-700" variants={itemVariants}>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              © {currentYear} {PERSONAL.name}
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
