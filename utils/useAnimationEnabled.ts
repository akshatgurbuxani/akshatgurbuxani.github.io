"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "./useIsMobile";

/**
 * Hook to determine if animations should be enabled
 * Checks localStorage for developer override, otherwise uses mobile detection
 * 
 * Developer usage:
 * - localStorage.setItem("animations-enabled", "true") → force enable
 * - localStorage.setItem("animations-enabled", "false") → force disable
 * - localStorage.removeItem("animations-enabled") → use default (mobile=off, desktop=on)
 */
export function useAnimationEnabled() {
  const { isMobile, mounted } = useIsMobile();
  // Default to false to prevent hydration mismatch (mobile default is false)
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkEnabled = () => {
      // Check localStorage for developer override
      const stored = localStorage.getItem("animations-enabled");
      
      if (stored === "true") {
        setEnabled(true);
        return;
      }
      
      if (stored === "false") {
        setEnabled(false);
        return;
      }
      
      // Default behavior: disable on mobile, enable on desktop
      setEnabled(!isMobile);
    };

    // Only check after mobile detection is mounted to prevent hydration mismatch
    if (mounted) {
      checkEnabled();
    }

    // Listen for storage changes (in case developer changes it in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "animations-enabled") {
        checkEnabled();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isMobile, mounted]);

  return enabled;
}

