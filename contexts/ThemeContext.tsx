"use client";

import { createContext, useContext, useEffect, useState } from "react";

// =============================================================================
// Types
// =============================================================================

type TerminalTheme = "matrix" | "amber" | "white";

interface ThemeContextType {
  theme: TerminalTheme;
  toggleTheme: () => void;
  mounted: boolean;
}

// =============================================================================
// Context
// =============================================================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// =============================================================================
// Provider
// =============================================================================

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TerminalTheme>("matrix");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("terminal-theme") as TerminalTheme | null;
    const initialTheme = savedTheme || "matrix";
    setTheme(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  const applyThemeClass = (newTheme: TerminalTheme) => {
    document.documentElement.classList.remove("theme-matrix", "theme-amber", "theme-white");
    if (newTheme !== "matrix") {
      document.documentElement.classList.add(`theme-${newTheme}`);
    } else {
      document.documentElement.classList.add("theme-matrix");
    }
  };

  const toggleTheme = () => {
    const themes: TerminalTheme[] = ["matrix", "amber", "white"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setTheme(nextTheme);
    localStorage.setItem("terminal-theme", nextTheme);
    applyThemeClass(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

// =============================================================================
// Hook
// =============================================================================

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
