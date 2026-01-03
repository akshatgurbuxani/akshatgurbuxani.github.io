// =============================================================================
// Animation Utilities
// Reusable animation variants and helpers
// =============================================================================

import { Variants } from "framer-motion";
import { ANIMATION_DURATION, EASING, STAGGER } from "@/constants";

/**
 * Standard container variant for staggered animations
 */
export const createContainerVariants = (
  staggerDelay: number = STAGGER.children
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/**
 * Standard item variant for fade-in animations
 */
export const createItemVariants = (
  direction: "up" | "down" | "left" | "right" = "up",
  duration: number = ANIMATION_DURATION.normal
): Variants => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  };

  const offset = directions[direction];

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: EASING.default,
      },
    },
  };
};

/**
 * Slide variants for alternating left/right animations
 */
export const createAlternatingVariants = (
  index: number,
  duration: number = ANIMATION_DURATION.normal
): Variants => {
  const isEven = index % 2 === 0;
  return {
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: EASING.default,
      },
    },
  };
};

/**
 * Scale-in animation variant
 */
export const createScaleVariants = (
  duration: number = ANIMATION_DURATION.normal
): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: EASING.default,
    },
  },
});

/**
 * Fade-in animation variant
 */
export const createFadeVariants = (
  duration: number = ANIMATION_DURATION.fast
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: EASING.default,
    },
  },
});

