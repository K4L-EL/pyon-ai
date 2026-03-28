"use client";

import { useEffect, useRef } from "react";

type Dir = [number, number];

const DIRS: Dir[] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

interface Tracer {
  col: number;
  row: number;
  dir: Dir;
  progress: number;
  speed: number;
  /** Visited grid positions (newest last) */
  path: [number, number][];
  maxTrail: number;
  age: number;
  maxAge: number;
  exiting: boolean;
  fleeCooldown: number;
}

const GRID = 40;
const GRID_ALPHA = 0.035;
const NODE_ALPHA = 0.06;
const NODE_R = 1;
const MAX_TRACERS = 5;
const SPAWN_EVERY = 180;
const SPEED_MIN = 0.012;
const SPEED_MAX = 0.022;
const TRAIL_MIN = 14;
const TRAIL_MAX = 24;
const AGE_MIN = 600;
const AGE_MAX = 1400;
const TURN_CHANCE = 0.4;

const NEON: [number, number, number] = [0, 190, 255];
const MOUSE_REPEL_RADIUS = 5; // grid cells

function pickDir(
  cur: Dir,
  cols: number,
  rows: number,
  col: number,
  row: number,
  mouseCol: number,
  mouseRow: number,
): Dir {
  const inBounds = DIRS.filter((d) => {
    const nc = col + d[0];
    const nr = row + d[1];
    return nc >= 0 && nc < cols && nr >= 0 && nr < rows;
  });
  if (inBounds.length === 0) return cur;

  // if mouse is nearby, allow ANY direction (including backwards) to escape
  const distToMouse = Math.hypot(col - mouseCol, row - mouseRow);
  if (distToMouse < MOUSE_REPEL_RADIUS && mouseCol >= 0) {
    let best: Dir = inBounds[0];
    let bestDist = -Infinity;
    for (const d of inBounds) {
      const nd = Math.hypot(col + d[0] - mouseCol, row + d[1] - mouseRow);
      if (nd > bestDist) {
        bestDist = nd;
        best = d;
      }
    }
    return best;
  }

  const opposite: Dir = [-cur[0] as number, -cur[1] as number] as Dir;
  const noReverse = inBounds.filter(
    (d) => !(d[0] === opposite[0] && d[1] === opposite[1]),
  );
  const choices = noReverse.length > 0 ? noReverse : inBounds;

  if (Math.random() < TURN_CHANCE) {
    const turns = choices.filter((d) => d[0] !== cur[0] || d[1] !== cur[1]);
    if (turns.length > 0) return turns[Math.floor(Math.random() * turns.length)];
  }

  const forward = choices.find((d) => d[0] === cur[0] && d[1] === cur[1]);
  return forward ?? choices[Math.floor(Math.random() * choices.length)];
}

function exitDir(col: number, row: number, cols: number, rows: number): Dir {
  const distLeft = col;
  const distRight = cols - 1 - col;
  const distTop = row;
  const distBottom = rows - 1 - row;
  const min = Math.min(distLeft, distRight, distTop, distBottom);
  if (min === distLeft) return [-1, 0];
  if (min === distRight) return [1, 0];
  if (min === distTop) return [0, -1];
  return [0, 1];
}

function spawnTracer(cols: number, rows: number): Tracer {
  const col = Math.floor(Math.random() * cols);
  const row = Math.floor(Math.random() * rows);
  const dir = DIRS[Math.floor(Math.random() * DIRS.length)];
  return {
    col,
    row,
    dir,
    progress: 0,
    speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
    path: [[col, row]],
    maxTrail: TRAIL_MIN + Math.floor(Math.random() * (TRAIL_MAX - TRAIL_MIN)),
    age: 0,
    maxAge: AGE_MIN + Math.floor(Math.random() * (AGE_MAX - AGE_MIN)),
    exiting: false,
    fleeCooldown: 0,
  };
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ col: -999, row: -999 });

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
    const tracers: Tracer[] = [];

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.col = e.clientX / GRID;
      mouseRef.current.row = e.clientY / GRID;
    };

    const onMouseLeave = () => {
      mouseRef.current.col = -999;
      mouseRef.current.row = -999;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cols = Math.ceil(w / GRID) + 1;
      rows = Math.ceil(h / GRID) + 1;
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

      // static grid
      ctx.strokeStyle = `rgba(255,255,255,${GRID_ALPHA})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let c = 0; c < cols; c++) {
        const x = c * GRID;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let r = 0; r < rows; r++) {
        const y = r * GRID;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // intersection nodes
      ctx.fillStyle = `rgba(255,255,255,${NODE_ALPHA})`;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(c * GRID, r * GRID, NODE_R, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // spawn
      if (tick % SPAWN_EVERY === 0 && tracers.length < MAX_TRACERS) {
        tracers.push(spawnTracer(cols, rows));
      }

      const [cr, cg, cb] = NEON;

      // update & draw tracers
      for (let i = tracers.length - 1; i >= 0; i--) {
        const t = tracers[i];
        t.age++;

        // trigger exit: lock direction toward nearest edge and accelerate
        if (!t.exiting && t.age > t.maxAge) {
          t.exiting = true;
          t.dir = exitDir(t.col, t.row, cols, rows);
          t.path.push([t.col, t.row]);
          if (t.path.length > t.maxTrail) t.path.shift();
          t.progress = 0;
        }

        if (t.exiting) {
          t.speed = Math.min(t.speed + 0.004, 0.18);
        }

        t.progress += t.speed;

        // arrived at next node
        if (t.progress >= 1) {
          t.progress -= 1;
          t.col += t.dir[0];
          t.row += t.dir[1];

          if (t.exiting) {
            t.path.push([t.col, t.row]);
            if (t.path.length > t.maxTrail) t.path.shift();
            // remove once fully off-screen
            const hx = t.col * GRID;
            const hy = t.row * GRID;
            if (hx < -GRID * 2 || hx > w + GRID * 2 || hy < -GRID * 2 || hy > h + GRID * 2) {
              tracers.splice(i, 1);
              continue;
            }
          } else {
            t.col = Math.max(0, Math.min(cols - 1, t.col));
            t.row = Math.max(0, Math.min(rows - 1, t.row));

            t.path.push([t.col, t.row]);
            if (t.path.length > t.maxTrail) t.path.shift();

            t.dir = pickDir(t.dir, cols, rows, t.col, t.row, mouseRef.current.col, mouseRef.current.row);
          }
        }

        // mid-segment flee (only when not exiting, with cooldown)
        if (t.fleeCooldown > 0) t.fleeCooldown--;
        if (!t.exiting && t.fleeCooldown === 0) {
          const headPx = t.col * GRID + t.dir[0] * t.progress * GRID;
          const headPy = t.row * GRID + t.dir[1] * t.progress * GRID;
          const mDist = Math.hypot(headPx - mouseRef.current.col * GRID, headPy - mouseRef.current.row * GRID);
          if (mDist < GRID * 3 && t.progress > 0.15) {
            t.path.push([t.col, t.row]);
            if (t.path.length > t.maxTrail) t.path.shift();
            t.progress = 0;
            t.dir = pickDir(t.dir, cols, rows, t.col, t.row, mouseRef.current.col, mouseRef.current.row);
            t.speed = Math.min(t.speed * 1.8, 0.06);
            t.fleeCooldown = 30;
          }
        }

        // fade in only (no fade out — they speed off instead)
        let life = 1;
        if (t.age < 60) life = t.age / 60;

        // build pixel path: all past nodes + interpolated head
        const pts: [number, number][] = t.path.map(([pc, pr]) => [pc * GRID, pr * GRID]);
        const headX = t.col * GRID + t.dir[0] * t.progress * GRID;
        const headY = t.row * GRID + t.dir[1] * t.progress * GRID;
        pts.push([headX, headY]);

        if (pts.length < 2) continue;

        // draw trail segments, fading from tail to head
        for (let s = 0; s < pts.length - 1; s++) {
          const frac = s / (pts.length - 1);
          const nextFrac = (s + 1) / (pts.length - 1);

          const alpha1 = frac * 0.35 * life;
          const alpha2 = nextFrac * 0.35 * life;

          const [x1, y1] = pts[s];
          const [x2, y2] = pts[s + 1];

          // glow layer
          const grad = ctx.createLinearGradient(x1, y1, x2, y2);
          grad.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha1})`);
          grad.addColorStop(1, `rgba(${cr},${cg},${cb},${alpha2})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          // bright core
          const coreA1 = frac * 0.15 * life;
          const coreA2 = nextFrac * 0.15 * life;
          const coreGrad = ctx.createLinearGradient(x1, y1, x2, y2);
          coreGrad.addColorStop(0, `rgba(255,255,255,${coreA1})`);
          coreGrad.addColorStop(1, `rgba(255,255,255,${coreA2})`);
          ctx.strokeStyle = coreGrad;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // head bloom
        const bloom = 14;
        const bloomGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, bloom);
        bloomGrad.addColorStop(0, `rgba(${cr},${cg},${cb},${0.4 * life})`);
        bloomGrad.addColorStop(0.4, `rgba(${cr},${cg},${cb},${0.12 * life})`);
        bloomGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.fillStyle = bloomGrad;
        ctx.fillRect(headX - bloom, headY - bloom, bloom * 2, bloom * 2);

        // light up nodes near the head
        for (let s = Math.max(0, pts.length - 4); s < pts.length; s++) {
          const [nx, ny] = pts[s];
          const dist = Math.hypot(headX - nx, headY - ny);
          if (dist < GRID * 2.5) {
            const intensity = (1 - dist / (GRID * 2.5)) * life;
            const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, 5);
            ng.addColorStop(0, `rgba(${cr},${cg},${cb},${0.5 * intensity})`);
            ng.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
            ctx.fillStyle = ng;
            ctx.fillRect(nx - 5, ny - 5, 10, 10);
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
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
