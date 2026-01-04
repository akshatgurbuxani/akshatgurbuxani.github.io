"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the current device is mobile/touch-based
 * Uses pointer media query and screen width to determine mobile status
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      // Check for touch device using pointer media query
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      // Check screen width (mobile breakpoint)
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}

