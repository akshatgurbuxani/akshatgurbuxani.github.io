// =============================================================================
// Section Header Component
// Reusable header with gradient text and underline
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { GRADIENTS } from "@/constants";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`text-center mb-8 sm:mb-12 md:mb-16 ${className}`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${GRADIENTS.primary.both} bg-clip-text text-transparent`}
      >
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gradient-to-r ${GRADIENTS.underline} mx-auto`} />
      {description && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-8 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

