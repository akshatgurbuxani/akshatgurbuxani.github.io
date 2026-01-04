"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAnimationEnabled } from "@/utils/useAnimationEnabled";

type Point = { x: number; y: number };
type TrailPoint = { x: number; y: number; r: number; alpha: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

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

export default function GlobalPointerTrail() {
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const animationEnabled = useAnimationEnabled();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const trailRef = useRef<TrailPoint[]>([]);
  const lastAddRef = useRef<number>(0);
  const lastPosRef = useRef<Point>({ x: 0, y: 0 });
  const pointerRef = useRef<Point>({ x: 0, y: 0 });

  const palette = useMemo(() => {
    if (theme === "dark") {
      return {
        line: "rgba(167, 139, 250, ", // purple-400
        accent: "rgba(236, 72, 153, ", // pink-500
      };
    }
    return {
      line: "rgba(99, 102, 241, ", // indigo-500
      accent: "rgba(236, 72, 153, ", // pink-500
    };
  }, [theme]);

  useEffect(() => {
    if (reducedMotion || !animationEnabled) return;
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
    };

      const addPoint = (t: number) => {
      const { w } = sizeRef.current;
      const pointer = pointerRef.current;
      const lastT = lastAddRef.current;
      const dt = t - lastT;
      const lastPos = lastPosRef.current;
      const dx = pointer.x - lastPos.x;
      const dy = pointer.y - lastPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Subtle, continuous trail
      const minDist = w < 640 ? 8 : 12;
      const minDt = 16;

      if (dt >= minDt && dist >= minDist) {
        const baseR = w < 640 ? 20 : 28;
        trailRef.current.push({ x: pointer.x, y: pointer.y, r: baseR, alpha: 1 });
        lastAddRef.current = t;
        lastPosRef.current = { x: pointer.x, y: pointer.y };
        if (trailRef.current.length > 25) trailRef.current.shift();
      }
    };

    const tick = (t: number) => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      addPoint(t);

      // Decay
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const tp = trailRef.current[i];
        tp.r *= 1.015;
        tp.alpha *= 0.88;
        if (tp.alpha < 0.02) trailRef.current.splice(i, 1);
      }

      // Draw subtle trail
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const blur = sizeRef.current.w < 640 ? 8 : 12;
      for (const tp of trailRef.current) {
        const a = tp.alpha * (theme === "dark" ? 0.35 : 0.25);
        const grad = ctx.createRadialGradient(tp.x, tp.y, 0, tp.x, tp.y, tp.r);
        grad.addColorStop(0, `${palette.accent}${a})`);
        grad.addColorStop(0.5, `${palette.line}${a * 0.5})`);
        grad.addColorStop(1, `${palette.line}0)`);
        ctx.fillStyle = grad;
        ctx.shadowColor = `${palette.accent}${a * 0.5})`;
        ctx.shadowBlur = blur;
        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [palette, reducedMotion, theme, animationEnabled]);

  useEffect(() => {
    if (reducedMotion || !animationEnabled) return;
    const handlePointerMove = (clientX: number, clientY: number) => {
      pointerRef.current = { x: clientX, y: clientY };
    };
    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onPointerMove = (e: PointerEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      handlePointerMove(t.clientX, t.clientY);
    };

    // Start near center to avoid first-frame "jump"
    if (typeof window !== "undefined") {
      handlePointerMove(window.innerWidth * 0.55, window.innerHeight * 0.45);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [reducedMotion, animationEnabled]);

  if (reducedMotion || !animationEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}


