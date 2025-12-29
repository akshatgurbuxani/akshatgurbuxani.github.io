"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

// =============================================================================
// ThemeToggle Component
// =============================================================================

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  const labels = {
    matrix: "COLOR_MODE: MATRIX_GREEN",
    amber: "COLOR_MODE: RETRO_AMBER",
    white: "COLOR_MODE: CLASSIC_WHITE",
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
      className="fixed bottom-10 right-10 z-50 bg-black border border-terminal-primary p-4 hover:bg-terminal-primary hover:text-black transition-all group shadow-[0_0_20px_rgba(0,255,65,0.2)]"
      aria-label="Switch Terminal Theme"
    >
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
          {labels[theme]}
        </span>
        <div className="w-2 h-2 rounded-full bg-terminal-primary animate-pulse" />
      </div>
    </motion.button>
  );
}
