"use client";

import { useEffect, useRef } from "react";

interface LightPulse {
  /** Grid line index (row for horizontal, col for vertical) */
  line: number;
  /** Current position along the line in pixels */
  pos: number;
  /** Pixels per frame */
  speed: number;
  /** true = horizontal, false = vertical */
  horizontal: boolean;
  /** Trail length in pixels */
  trail: number;
  /** 0-1 lifecycle opacity multiplier */
  life: number;
  /** Max extent in pixels (width or height) */
  max: number;
}

const GRID_SPACING = 40;
const GRID_ALPHA = 0.04;
const NODE_ALPHA = 0.08;
const NODE_RADIUS = 1.2;
const MAX_PULSES = 14;
const SPAWN_INTERVAL = 45; // frames between spawns
const TRAIL_MIN = 80;
const TRAIL_MAX = 220;
const SPEED_MIN = 1.2;
const SPEED_MAX = 3.0;
const PULSE_COLOR = [200, 220, 255] as const; // slight blue-white tint

function spawnPulse(w: number, h: number, cols: number, rows: number): LightPulse {
  const horizontal = Math.random() > 0.5;
  const line = horizontal
    ? Math.floor(Math.random() * rows)
    : Math.floor(Math.random() * cols);
  const max = horizontal ? w : h;
  const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
  const trail = TRAIL_MIN + Math.random() * (TRAIL_MAX - TRAIL_MIN);

  return {
    line,
    pos: -trail,
    speed,
    horizontal,
    trail,
    life: 1,
    max,
  };
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pulses: LightPulse[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cols = Math.ceil(w / GRID_SPACING) + 1;
      rows = Math.ceil(h / GRID_SPACING) + 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      // --- static grid lines ---
      ctx.strokeStyle = `rgba(255, 255, 255, ${GRID_ALPHA})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SPACING;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let r = 0; r < rows; r++) {
        const y = r * GRID_SPACING;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // --- intersection nodes ---
      ctx.fillStyle = `rgba(255, 255, 255, ${NODE_ALPHA})`;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(c * GRID_SPACING, r * GRID_SPACING, NODE_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // --- spawn pulses ---
      if (tick % SPAWN_INTERVAL === 0 && pulses.length < MAX_PULSES) {
        pulses.push(spawnPulse(w, h, cols, rows));
      }

      // --- draw & advance pulses ---
      const [pr, pg, pb] = PULSE_COLOR;
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.pos += p.speed;

        const headPos = p.pos;
        const tailPos = p.pos - p.trail;

        // fade in at start, fade out at end
        if (headPos < 0) {
          p.life = Math.min(1, (headPos + p.trail) / p.trail);
        } else if (tailPos > p.max) {
          pulses.splice(i, 1);
          continue;
        } else if (headPos > p.max - p.trail * 0.3) {
          p.life = Math.max(0, (p.max - tailPos) / (p.trail * 1.3));
        } else {
          p.life = Math.min(p.life + 0.02, 1);
        }

        const coord = p.line * GRID_SPACING;

        // glow layer
        const drawStart = Math.max(0, tailPos);
        const drawEnd = Math.min(p.max, headPos);
        if (drawEnd > drawStart) {
          let grad: CanvasGradient;
          if (p.horizontal) {
            grad = ctx.createLinearGradient(drawStart, coord, drawEnd, coord);
          } else {
            grad = ctx.createLinearGradient(coord, drawStart, coord, drawEnd);
          }

          grad.addColorStop(0, `rgba(${pr}, ${pg}, ${pb}, 0)`);
          grad.addColorStop(0.7, `rgba(${pr}, ${pg}, ${pb}, ${0.15 * p.life})`);
          grad.addColorStop(1, `rgba(${pr}, ${pg}, ${pb}, ${0.35 * p.life})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          if (p.horizontal) {
            ctx.moveTo(drawStart, coord);
            ctx.lineTo(drawEnd, coord);
          } else {
            ctx.moveTo(coord, drawStart);
            ctx.lineTo(coord, drawEnd);
          }
          ctx.stroke();

          // soft bloom around the head
          const hx = p.horizontal ? Math.min(headPos, p.max) : coord;
          const hy = p.horizontal ? coord : Math.min(headPos, p.max);
          const bloomRadius = 12;
          const bloomGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, bloomRadius);
          bloomGrad.addColorStop(0, `rgba(${pr}, ${pg}, ${pb}, ${0.25 * p.life})`);
          bloomGrad.addColorStop(1, `rgba(${pr}, ${pg}, ${pb}, 0)`);
          ctx.fillStyle = bloomGrad;
          ctx.fillRect(hx - bloomRadius, hy - bloomRadius, bloomRadius * 2, bloomRadius * 2);

          // bright core line
          const coreGrad = p.horizontal
            ? ctx.createLinearGradient(drawStart, coord, drawEnd, coord)
            : ctx.createLinearGradient(coord, drawStart, coord, drawEnd);
          coreGrad.addColorStop(0, `rgba(255, 255, 255, 0)`);
          coreGrad.addColorStop(0.8, `rgba(255, 255, 255, ${0.06 * p.life})`);
          coreGrad.addColorStop(1, `rgba(255, 255, 255, ${0.2 * p.life})`);
          ctx.strokeStyle = coreGrad;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          if (p.horizontal) {
            ctx.moveTo(drawStart, coord);
            ctx.lineTo(drawEnd, coord);
          } else {
            ctx.moveTo(coord, drawStart);
            ctx.lineTo(coord, drawEnd);
          }
          ctx.stroke();
        }

        // brighten intersection nodes the pulse passes over
        const startIdx = Math.max(0, Math.floor(drawStart / GRID_SPACING));
        const endIdx = p.horizontal
          ? Math.min(cols - 1, Math.ceil(drawEnd / GRID_SPACING))
          : Math.min(rows - 1, Math.ceil(drawEnd / GRID_SPACING));

        for (let n = startIdx; n <= endIdx; n++) {
          const nPos = n * GRID_SPACING;
          const dist = Math.abs(headPos - nPos);
          if (dist < p.trail * 0.4) {
            const intensity = (1 - dist / (p.trail * 0.4)) * p.life;
            const nx = p.horizontal ? nPos : coord;
            const ny = p.horizontal ? coord : nPos;
            const nodeGlow = ctx.createRadialGradient(nx, ny, 0, nx, ny, 6);
            nodeGlow.addColorStop(0, `rgba(${pr}, ${pg}, ${pb}, ${0.4 * intensity})`);
            nodeGlow.addColorStop(1, `rgba(${pr}, ${pg}, ${pb}, 0)`);
            ctx.fillStyle = nodeGlow;
            ctx.fillRect(nx - 6, ny - 6, 12, 12);
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 0 }}
    />
  );
}
