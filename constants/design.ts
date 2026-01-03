// =============================================================================
// Design System Constants
// Single source of truth for all design tokens
// =============================================================================

/**
 * Color Palette
 */
export const COLORS = {
  primary: {
    purple: {
      400: "purple-400",
      500: "purple-500",
      600: "purple-600",
    },
    pink: {
      400: "pink-400",
      500: "pink-500",
      600: "pink-600",
    },
  },
  gray: {
    50: "gray-50",
    100: "gray-100",
    200: "gray-200",
    300: "gray-300",
    400: "gray-400",
    500: "gray-500",
    600: "gray-600",
    700: "gray-700",
    800: "gray-800",
    900: "gray-900",
  },
} as const;

/**
 * Gradient Definitions
 */
export const GRADIENTS = {
  primary: {
    light: "from-purple-600 to-pink-600",
    dark: "from-purple-400 to-pink-400",
    both: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  },
  underline: "from-purple-600 to-pink-600",
  button: {
    primary: "from-purple-600 to-pink-600",
    hover: "from-purple-500 to-pink-500",
  },
} as const;

/**
 * Spacing Scale (Tailwind classes)
 */
export const SPACING = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "6rem",
} as const;

/**
 * Animation Durations (in seconds)
 */
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

/**
 * Animation Easing Functions
 */
export const EASING = {
  default: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  easeOut: "easeOut",
  easeInOut: "easeInOut",
  spring: { type: "spring" as const, stiffness: 400, damping: 10 },
} as const;

/**
 * Animation Stagger Delays
 */
export const STAGGER = {
  children: 0.1,
  items: 0.15,
  slow: 0.2,
} as const;

/**
 * Border Radius
 */
export const RADIUS = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  full: "rounded-full",
} as const;

/**
 * Shadow Definitions
 */
export const SHADOWS = {
  sm: "shadow-sm",
  md: "shadow-lg",
  lg: "shadow-xl",
  xl: "shadow-2xl",
  purple: "shadow-purple-500/50",
} as const;

/**
 * Typography Scale
 */
export const TYPOGRAPHY = {
  heading: {
    "6xl": "text-6xl",
    "5xl": "text-5xl",
    "4xl": "text-4xl",
    "3xl": "text-3xl",
    "2xl": "text-2xl",
    xl: "text-xl",
  },
  body: {
    lg: "text-lg",
    base: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  },
} as const;

