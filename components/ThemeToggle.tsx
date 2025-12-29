"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

// =============================================================================
// ThemeToggle Component
// =============================================================================

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={toggleTheme}
      className="fixed bottom-10 right-10 z-50 mix-blend-difference"
      aria-label="Switch Mode"
    >
      <div className="relative group overflow-hidden border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </motion.button>
  );
}
