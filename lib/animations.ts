const ease = [0.25, 0.1, 0.25, 1] as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease } },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export const fadeUpBig = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease } },
};

export function staggerContainer(delay = 0.15) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };
}

export function staggerItem(dir: "x" | "y" = "x", offset = -15) {
  return {
    hidden: { opacity: 0, [dir]: offset },
    visible: { opacity: 1, [dir]: 0, transition: { duration: 0.4, ease } },
  };
}

export const viewportOnce = { once: true } as const;

export { ease as defaultEase };
