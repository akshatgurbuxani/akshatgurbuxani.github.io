"use client";

import React, { useEffect, useRef, useMemo } from "react";

// =============================================================================
// Constants
// =============================================================================

const PARTICLE_COUNT = 100;
const MIN_SIZE = 2;
const MAX_SIZE = 6;
const DRIFT_SPEED = 0.5;
const REPULSION_RADIUS = 150;
const REPULSION_STRENGTH = 0.05;
const RETURN_SPEED = 0.02;
const SCROLL_FACTOR = 0.1;

// =============================================================================
// Particle Class
// =============================================================================

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  targetOpacity: number;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number, color: string) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.originX = this.x;
    this.originY = this.y;
    this.size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;
    this.vx = (Math.random() - 0.5) * DRIFT_SPEED;
    this.vy = (Math.random() - 0.5) * DRIFT_SPEED;
    this.color = color;
    this.targetOpacity = Math.random() * 0.5 + 0.2;
    this.opacity = 0; // Start invisible for "natural" entry
  }

  update(
    canvasWidth: number,
    canvasHeight: number,
    mouse: { x: number; y: number },
    scrollDelta: number
  ) {
    // Fade in
    if (this.opacity < this.targetOpacity) {
      this.opacity += 0.01;
    }

    // Basic drift
    this.x += this.vx;
    this.y += this.vy + scrollDelta * SCROLL_FACTOR;

    // Wrap around boundaries with reset for natural entry
    if (this.x < -MAX_SIZE) {
      this.x = canvasWidth + MAX_SIZE;
      this.opacity = 0;
    }
    if (this.x > canvasWidth + MAX_SIZE) {
      this.x = -MAX_SIZE;
      this.opacity = 0;
    }
    if (this.y < -MAX_SIZE) {
      this.y = canvasHeight + MAX_SIZE;
      this.opacity = 0;
    }
    if (this.y > canvasHeight + MAX_SIZE) {
      this.y = -MAX_SIZE;
      this.opacity = 0;
    }

    // Mouse repulsion
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < REPULSION_RADIUS) {
      const force = (REPULSION_RADIUS - distance) / REPULSION_RADIUS;
      this.vx += (dx / distance) * force * REPULSION_STRENGTH;
      this.vy += (dy / distance) * force * REPULSION_STRENGTH;
    } else {
      // Return to natural drift speed
      this.vx *= (1 - RETURN_SPEED);
      this.vy *= (1 - RETURN_SPEED);
      
      // Keep minimum drift
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed < DRIFT_SPEED * 0.5) {
        this.vx += (Math.random() - 0.5) * 0.01;
        this.vy += (Math.random() - 0.5) * 0.01;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    
    // Add a soft glow
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.globalAlpha = this.opacity * 0.5;
    ctx.fill();
  }
}

// =============================================================================
// Interactive Background Component
// =============================================================================

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const scrollPos = useRef(0);
  const lastScrollPos = useRef(0);

  // Theme colors
  const colors = ["#9333EA", "#EC4899", "#3B82F6"]; // Purple, Pink, Blue

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize particles on resize
      particles.current = Array.from({ length: PARTICLE_COUNT }).map(
        () => new Particle(canvas.width, canvas.height, colors[Math.floor(Math.random() * colors.length)])
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollPos.current = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    handleResize();

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollDelta = scrollPos.current - lastScrollPos.current;
      lastScrollPos.current = scrollPos.current;

      particles.current.forEach((particle) => {
        particle.update(canvas.width, canvas.height, mouse.current, scrollDelta);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

