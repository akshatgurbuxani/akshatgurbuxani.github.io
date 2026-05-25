// =============================================================================
// Section Header Component
// Reusable header with gradient text and underline
// =============================================================================

"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`text-center mb-8 sm:mb-12 md:mb-16 ${className}`}
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
      >
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
      {description && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-8 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

