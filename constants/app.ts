// =============================================================================
// Application Constants
// App-specific configuration values
// =============================================================================

/**
 * File Paths
 */
export const PATHS = {
  resume: "https://drive.google.com/file/d/18HhwANW5DYV4IxqQC0ADiypW49TRs6I6/view?usp=sharing",
} as const;

/**
 * Social Icon Configuration
 * UI configuration for social media icons in Contact component
 */
export const SOCIAL_ICON_CONFIG = {
  Email: {
    gradient: "from-red-500 via-pink-500 to-purple-500",
    hoverGradient: "from-red-400 via-pink-400 to-purple-400",
    label: "Email",
  },
  GitHub: {
    gradient: "from-gray-300 via-gray-200 to-white dark:from-gray-800 dark:via-gray-900 dark:to-black",
    hoverGradient: "from-gray-400 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900",
    label: "GitHub",
    iconColor: "text-black dark:text-white",
  },
  LinkedIn: {
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    hoverGradient: "from-blue-400 via-blue-500 to-indigo-500",
    label: "LinkedIn",
  },
} as const;

