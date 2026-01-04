"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import FloatingShapes from "./FloatingShapes";
import { useTheme } from "@/contexts/ThemeContext";

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
// Helpers
// =============================================================================

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(Boolean(media.matches));
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

type Point = { x: number; y: number };

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  seed: number;
};

type Pulse = { x: number; y: number; r: number; alpha: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// =============================================================================
// Interactive Constellation Canvas (more visible + interactive)
// =============================================================================

function ConstellationCanvas({
  theme,
  pointerRef,
  reducedMotion,
}: {
  theme: "light" | "dark";
  pointerRef: React.MutableRefObject<Point>;
  reducedMotion: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  const palette = useMemo(() => {
    if (theme === "dark") {
      return {
        particle: "rgba(216, 180, 254, 0.85)", // purple-200-ish
        line: "rgba(167, 139, 250, ", // purple-400 with alpha
        accent: "rgba(236, 72, 153, ", // pink-500 with alpha
      };
    }
    return {
      particle: "rgba(88, 28, 135, 0.75)", // purple-900-ish
      line: "rgba(99, 102, 241, ", // indigo-500 with alpha
      accent: "rgba(236, 72, 153, ", // pink-500 with alpha
    };
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale particle count with screen size; keep it reasonable on mobile.
      const base = w < 640 ? 70 : 120;
      const count = Math.round(base + (w * h) / 120000);
      const finalCount = clamp(count, 60, 170);

      const existing = particlesRef.current;
      if (existing.length === 0) {
        particlesRef.current = Array.from({ length: finalCount }).map(() => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: 1 + Math.random() * 1.4,
          seed: Math.random() * 1000,
        }));
      } else if (existing.length !== finalCount) {
        particlesRef.current = Array.from({ length: finalCount }).map((_, i) => {
          const p = existing[i];
          return (
            p ?? {
              x: Math.random() * w,
              y: Math.random() * h,
              vx: (Math.random() - 0.5) * 0.6,
              vy: (Math.random() - 0.5) * 0.6,
              r: 1 + Math.random() * 1.4,
              seed: Math.random() * 1000,
            }
          );
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = (t: number) => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      // Keep the blend a little punchier in dark mode.
      ctx.globalCompositeOperation = theme === "dark" ? "lighter" : "source-over";

      if (!reducedMotion) {
        const ps = particlesRef.current;
        const influenceRadius = Math.min(260, Math.max(180, w * 0.18));
        const linkRadius = Math.min(170, Math.max(120, w * 0.12));
        const pointer = pointerRef.current;

        // Update pulses (click/tap ripples)
        const pulses = pulsesRef.current;
        for (let i = pulses.length - 1; i >= 0; i--) {
          const p = pulses[i];
          p.r += 6;
          p.alpha *= 0.94;
          if (p.alpha < 0.02) pulses.splice(i, 1);
        }

        // Move particles + apply pointer influence
        for (const p of ps) {
          // Tiny wobble for organic motion
          const wobble = 0.15;
          p.vx += Math.sin(t * 0.001 + p.seed) * wobble * 0.01;
          p.vy += Math.cos(t * 0.001 + p.seed) * wobble * 0.01;

          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0.001 && dist < influenceRadius) {
            // Attraction that becomes stronger near the cursor, plus a tangential component for swirl.
            const pull = (1 - dist / influenceRadius) * 0.18;
            const nx = dx / dist;
            const ny = dy / dist;
            p.vx += nx * pull;
            p.vy += ny * pull;
            p.vx += -ny * pull * 0.55;
            p.vy += nx * pull * 0.55;
          }

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.985;
          p.vy *= 0.985;

          // Wrap around edges for continuity
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }

        // Draw links
        for (let i = 0; i < ps.length; i++) {
          const a = ps[i];
          for (let j = i + 1; j < ps.length; j++) {
            const b = ps[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            const max2 = linkRadius * linkRadius;
            if (d2 > max2) continue;
            const d = Math.sqrt(d2);
            const alpha = (1 - d / linkRadius) * (theme === "dark" ? 0.22 : 0.16);

            // Subtle accent shift based on distance (adds “alive” feel)
            const mix = (Math.sin((a.seed + b.seed + t * 0.0008) * 2) + 1) / 2;
            const colorPrefix = mix > 0.65 ? palette.accent : palette.line;

            ctx.strokeStyle = `${colorPrefix}${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Draw particles
        ctx.fillStyle = palette.particle;
        for (const p of ps) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw pulses last so they sit on top
        for (const pulse of pulses) {
          const a = pulse.alpha * (theme === "dark" ? 0.55 : 0.35);
          ctx.strokeStyle = `${palette.accent}${a})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.r, 0, Math.PI * 2);
          ctx.stroke();
        }
      } else {
        // Reduced motion: draw a static, subtle constellation snapshot.
        const { w: ww, h: hh } = sizeRef.current;
        const ps = particlesRef.current;
        if (ps.length === 0) {
          particlesRef.current = Array.from({ length: 80 }).map(() => ({
            x: Math.random() * ww,
            y: Math.random() * hh,
            vx: 0,
            vy: 0,
            r: 1 + Math.random() * 1.2,
            seed: Math.random() * 1000,
          }));
        }
        ctx.fillStyle = palette.particle;
        for (const p of ps) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [palette, pointerRef, reducedMotion, theme]);

  // Expose an imperative pulse API via a data attribute + event listener.
  useEffect(() => {
    if (reducedMotion) return;
    const onPulse = (e: Event) => {
      const custom = e as CustomEvent<Point>;
      const { x, y } = custom.detail;
      pulsesRef.current.push({ x, y, r: 18, alpha: 1 });
      if (pulsesRef.current.length > 6) pulsesRef.current.shift();
    };
    window.addEventListener("constellation:pulse", onPulse as EventListener);
    return () => window.removeEventListener("constellation:pulse", onPulse as EventListener);
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2] opacity-80 dark:opacity-90"
      aria-hidden="true"
    />
  );
}

// =============================================================================
// Component
// =============================================================================

export default function AtmosphericBackground() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pointerRef = useRef<Point>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
    const handlePointerMove = (clientX: number, clientY: number) => {
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: clientX, y: clientY });
      pointerRef.current = { x: clientX, y: clientY };
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      handlePointerMove(t.clientX, t.clientY);
    };
    const onPointerDown = (e: PointerEvent) => {
      const detail = { x: e.clientX, y: e.clientY };
      window.dispatchEvent(new CustomEvent("constellation:pulse", { detail }));
    };

    // Initialize pointer at center-ish (so it doesn't “snap” on first move).
    handlePointerMove(window.innerWidth * 0.55, window.innerHeight * 0.45);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[var(--background)]">
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 z-10 opacity-60">
        <FloatingShapes mousePosition={mousePosition} />
      </div>

      {/* Interactive Constellation (primary visible interaction layer) */}
      {mounted && (
        <ConstellationCanvas
          theme={theme}
          pointerRef={pointerRef}
          reducedMotion={reducedMotion}
        />
      )}

      {/* Interactive Grid with Enhanced Parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.10] dark:opacity-[0.14] text-slate-600 dark:text-slate-400"
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
              `radial-gradient(900px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(139, 92, 246, 0.20), rgba(236, 72, 153, 0.14), transparent 70%)`
          ),
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50 dark:opacity-70 z-[3]" />
    </div>
  );
}
