"use client";

import { motion, useSpring, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingShapes from "./FloatingShapes";

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
// Floating Particles Component (Always Rendered)
// =============================================================================

interface FloatingParticlesProps {
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
  mounted: boolean;
}

function FloatingParticles({ 
  smoothMouseX, 
  smoothMouseY,
  mounted 
}: FloatingParticlesProps) {
  // Create transforms for all particles upfront (always the same number)
  const particleTransforms = Array.from({ length: 20 }).map(() => ({
    translateX: useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]),
    translateY: useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]),
  }));

  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-[2]">
      {particleTransforms.map((transform, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 dark:bg-purple-300/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={transform}
        />
      ))}
    </div>
  );
}

// =============================================================================
// Component
// =============================================================================

export default function AtmosphericBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[var(--background)]">
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 z-10 opacity-60">
        <FloatingShapes mousePosition={mousePosition} />
      </div>

      {/* Interactive Grid with Enhanced Parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] text-slate-600 dark:text-slate-400"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "48px 48px",
          translateX: useTransform(smoothMouseX, [-0.5, 0.5], [-25, 25]),
          translateY: useTransform(smoothMouseY, [-0.5, 0.5], [-25, 25]),
        }}
      />

      {/* Aurora Blobs with Enhanced Mouse Interaction */}
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
              translateX: useTransform(smoothMouseX, [-0.5, 0.5], [index * -40, index * 40]),
              translateY: useTransform(smoothMouseY, [-0.5, 0.5], [index * -40, index * 40]),
            }}
          />
        ))}
      </div>

      {/* Enhanced Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) =>
              `radial-gradient(800px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1), transparent 70%)`
          ),
        }}
      />

      {/* Floating Particles Effect */}
      <FloatingParticles 
        smoothMouseX={smoothMouseX}
        smoothMouseY={smoothMouseY}
        mounted={mounted}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50 dark:opacity-70 z-[3]" />
    </div>
  );
}
