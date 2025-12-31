"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIAL_LINKS } from "@/data";
import type { SocialLink } from "@/types";

// =============================================================================
// Animation Variants
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// =============================================================================
// Icons
// =============================================================================

const Icons = {
  email: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  github: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  linkedin: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  location: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  phone: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  twitter: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const SOCIAL_ICON_CONFIG: Record<SocialLink["icon"], { icon: JSX.Element; gradient: string; label: string }> = {
  email: { icon: Icons.email, gradient: "from-red-400 to-pink-500", label: "Email" },
  github: { icon: Icons.github, gradient: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100", label: "GitHub" },
  linkedin: { icon: Icons.linkedin, gradient: "from-blue-500 to-blue-600", label: "LinkedIn" },
  twitter: { icon: Icons.twitter, gradient: "from-gray-800 to-black dark:from-gray-200 dark:to-white", label: "X / Twitter" },
  phone: { icon: Icons.phone, gradient: "from-green-400 to-emerald-500", label: "Phone" },
};

// =============================================================================
// Contact Component (Main Export)
// =============================================================================

export default function Contact() {
  const currentYear = new Date().getFullYear();

  // Build contact methods array for equal display
  const contactMethods = [
    {
      icon: Icons.email,
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Icons.phone,
      label: "Phone",
      value: PERSONAL.phone,
      href: `tel:${PERSONAL.phone.replace(/\D/g, "")}`,
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Icons.location,
      label: "Location",
      value: PERSONAL.location,
      href: null,
      gradient: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <div className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Open to new projects, ideas, and opportunities. Reach out through any channel!
          </p>
        </motion.div>

        {/* Contact Methods - Equal Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => {
            const content = (
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all group h-full flex flex-col items-center justify-center">
                <div className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <div className="w-6 h-6">{method.icon}</div>
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                  {method.label}
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                  {method.value}
                </p>
              </div>
            );

            return (
              <motion.div key={method.label} variants={itemVariants}>
                {method.href ? (
                  <a href={method.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wider mb-4">
            Also find me on
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const config = SOCIAL_ICON_CONFIG[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {config.icon}
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {config.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
          variants={itemVariants}
        >
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {currentYear} {PERSONAL.name}
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
