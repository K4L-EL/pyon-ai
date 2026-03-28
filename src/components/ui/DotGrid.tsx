"use client";

import { useEffect, useRef, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  brightness: number;
  targetBrightness: number;
  phase: number;
  speed: number;
}

const BASE_ALPHA = 0.07;
const LIT_ALPHA = 0.45;
const DOT_SPACING = 28;
const DOT_RADIUS = 1;
const GLOW_RADIUS = 18;
const LIT_FRACTION = 0.025;
const TRANSITION_SPEED_MIN = 0.003;
const TRANSITION_SPEED_MAX = 0.012;

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const buildGrid = useCallback(() => {
    const { w, h } = sizeRef.current;
    const cols = Math.ceil(w / DOT_SPACING) + 1;
    const rows = Math.ceil(h / DOT_SPACING) + 1;
    const dots: Dot[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          x: c * DOT_SPACING,
          y: r * DOT_SPACING,
          brightness: 0,
          targetBrightness: 0,
          phase: Math.random() * Math.PI * 2,
          speed:
            TRANSITION_SPEED_MIN +
            Math.random() * (TRANSITION_SPEED_MAX - TRANSITION_SPEED_MIN),
        });
      }
    }

    const litCount = Math.max(1, Math.floor(dots.length * LIT_FRACTION));
    for (let i = 0; i < litCount; i++) {
      const idx = Math.floor(Math.random() * dots.length);
      dots[idx].targetBrightness = 1;
    }

    dotsRef.current = dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGrid();
    };

    resize();
    window.addEventListener("resize", resize);

    let tick = 0;

    const draw = () => {
      const { w, h } = sizeRef.current;
      const dots = dotsRef.current;
      ctx.clearRect(0, 0, w, h);

      tick++;

      if (tick % 90 === 0) {
        const count = Math.max(1, Math.floor(dots.length * LIT_FRACTION));
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * dots.length);
          dots[idx].targetBrightness =
            dots[idx].targetBrightness > 0.5 ? 0 : 1;
        }
      }

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (dot.brightness < dot.targetBrightness) {
          dot.brightness = Math.min(
            dot.brightness + dot.speed,
            dot.targetBrightness
          );
        } else if (dot.brightness > dot.targetBrightness) {
          dot.brightness = Math.max(
            dot.brightness - dot.speed * 0.6,
            dot.targetBrightness
          );
        }

        const alpha =
          BASE_ALPHA + dot.brightness * (LIT_ALPHA - BASE_ALPHA);

        if (dot.brightness > 0.05) {
          const glowAlpha = dot.brightness * 0.12;
          const grad = ctx.createRadialGradient(
            dot.x,
            dot.y,
            0,
            dot.x,
            dot.y,
            GLOW_RADIUS
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${glowAlpha})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(
            dot.x - GLOW_RADIUS,
            dot.y - GLOW_RADIUS,
            GLOW_RADIUS * 2,
            GLOW_RADIUS * 2
          );
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [buildGrid]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
