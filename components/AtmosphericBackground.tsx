"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

// =============================================================================
// Configuration
// =============================================================================

const BLOBS = [
  { color: "bg-purple-600/40", size: "w-[600px] h-[600px]", initialX: "-10%", initialY: "10%", duration: 25 },
  { color: "bg-blue-600/40", size: "w-[700px] h-[700px]", initialX: "50%", initialY: "-15%", duration: 30 },
  { color: "bg-pink-600/30", size: "w-[500px] h-[500px]", initialX: "10%", initialY: "60%", duration: 22 },
  { color: "bg-cyan-600/30", size: "w-[650px] h-[650px]", initialX: "70%", initialY: "30%", duration: 28 },
];

// =============================================================================
// Component
// =============================================================================

export default function AtmosphericBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[var(--background)]">
      {/* Interactive Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] text-slate-600 dark:text-slate-400"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          translateX: useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]),
          translateY: useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]),
        }}
      />

      {/* Aurora Blobs */}
      <div className="relative w-full h-full">
        {BLOBS.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen opacity-70 dark:opacity-50 ${blob.color} ${blob.size}`}
            animate={{
              x: [blob.initialX, `${parseInt(blob.initialX) + 15}%`, blob.initialX],
              y: [blob.initialY, `${parseInt(blob.initialY) + 10}%`, blob.initialY],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
            style={{
              translateX: useTransform(smoothMouseX, [-0.5, 0.5], [index * -25, index * 25]),
              translateY: useTransform(smoothMouseY, [-0.5, 0.5], [index * -25, index * 25]),
            }}
          />
        ))}
      </div>

      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) =>
              `radial-gradient(650px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(var(--spotlight-color), 0.12), transparent 70%)`
          ),
        }}
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay z-[2]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50 dark:opacity-70 z-[3]" />
    </div>
  );
}
