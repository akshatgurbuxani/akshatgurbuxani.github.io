"use client";

import { useEffect, useState } from "react";
import { getConfigWithOverrides } from "./configOverride";

/**
 * Hook to get config values with developer overrides applied
 * 
 * Automatically listens for localStorage changes so you can update
 * config values in the browser console and see changes immediately
 * (after a page refresh or storage event)
 */
export function useConfig<T extends Record<string, any>>(config: T): T {
  const [configWithOverrides, setConfigWithOverrides] = useState<T>(() =>
    getConfigWithOverrides(config)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Apply overrides on mount
    setConfigWithOverrides(getConfigWithOverrides(config));

    // Listen for storage changes (when developer updates overrides)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "config-override") {
        setConfigWithOverrides(getConfigWithOverrides(config));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [config]);

  return configWithOverrides;
}

