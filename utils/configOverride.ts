/**
 * Developer Config Override Utility
 * 
 * Allows developers to override configuration values during development using localStorage.
 * This is useful for testing different config values without modifying source files.
 * 
 * Usage in browser console:
 * 
 * // Override a specific config value
 * localStorage.setItem("config-override", JSON.stringify({
 *   "SOCIAL_ICON_CONFIG.Email.gradient": "from-blue-500 to-cyan-500"
 * }))
 * 
 * // Override multiple values
 * localStorage.setItem("config-override", JSON.stringify({
 *   "SOCIAL_ICON_CONFIG.Email.gradient": "from-blue-500 to-cyan-500",
 *   "SOCIAL_ICON_CONFIG.GitHub.label": "GitHub Profile"
 * }))
 * 
 * // Clear all overrides
 * localStorage.removeItem("config-override")
 * 
 * // View current overrides
 * JSON.parse(localStorage.getItem("config-override") || "{}")
 */

type ConfigOverride = Record<string, string | number | boolean>;

/**
 * Get config overrides from localStorage
 */
export function getConfigOverrides(): ConfigOverride {
  if (typeof window === "undefined") return {};
  
  try {
    const stored = localStorage.getItem("config-override");
    if (!stored) return {};
    return JSON.parse(stored);
  } catch {
    return {};
  }
}

/**
 * Apply overrides to a config object using dot notation paths
 * Example: "SOCIAL_ICON_CONFIG.Email.gradient" → config.Email.gradient
 */
export function applyConfigOverrides<T extends Record<string, any>>(
  config: T,
  overrides: ConfigOverride
): T {
  if (Object.keys(overrides).length === 0) return config;

  const result = JSON.parse(JSON.stringify(config)); // Deep clone

  for (const [path, value] of Object.entries(overrides)) {
    const keys = path.split(".");
    let current: any = result;

    // Navigate to the parent of the target property
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in current) || typeof current[key] !== "object") {
        // Path doesn't exist, skip this override
        break;
      }
      current = current[key];
    }

    // Set the final property
    const finalKey = keys[keys.length - 1];
    if (current && typeof current === "object") {
      current[finalKey] = value;
    }
  }

  return result;
}

/**
 * Get config with overrides applied
 */
export function getConfigWithOverrides<T extends Record<string, any>>(
  config: T
): T {
  const overrides = getConfigOverrides();
  return applyConfigOverrides(config, overrides);
}

/**
 * Set a config override
 */
export function setConfigOverride(path: string, value: string | number | boolean): void {
  if (typeof window === "undefined") return;
  
  const overrides = getConfigOverrides();
  overrides[path] = value;
  localStorage.setItem("config-override", JSON.stringify(overrides));
}

/**
 * Remove a config override
 */
export function removeConfigOverride(path: string): void {
  if (typeof window === "undefined") return;
  
  const overrides = getConfigOverrides();
  delete overrides[path];
  if (Object.keys(overrides).length === 0) {
    localStorage.removeItem("config-override");
  } else {
    localStorage.setItem("config-override", JSON.stringify(overrides));
  }
}

/**
 * Clear all config overrides
 */
export function clearConfigOverrides(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("config-override");
}

