// =============================================================================
// Tech Badge Component
// Reusable badge for displaying technologies/skills
// =============================================================================

"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  label: string;
  variant?: "default" | "count";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  delay?: number;
  className?: string;
}

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-4 py-2 text-sm",
};

export default function TechBadge({
  label,
  variant = "default",
  size = "md",
  animated = false,
  delay = 0,
  className = "",
}: TechBadgeProps) {
  const baseClasses = `${sizeClasses[size]} bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-medium`;

  if (animated) {
    return (
      <motion.span
        className={`${baseClasses} ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
      >
        {variant === "count" ? `+${label}` : label}
      </motion.span>
    );
  }

  return (
    <span className={`${baseClasses} ${className}`}>
      {variant === "count" ? `+${label}` : label}
    </span>
  );
}

