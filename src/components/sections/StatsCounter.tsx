"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

const stats = [
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "", label: "Countries Served" },
  { value: 6, suffix: "+", label: "Years Experience" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <MotionSection className="relative py-24 overflow-hidden dot-grid">
      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <MotionDiv
              key={stat.label}
              variants={fadeUp}
              className="relative text-center"
            >
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-border hidden md:block" />
              )}
              <div className="text-4xl font-mono font-bold text-foreground sm:text-5xl tracking-tight">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
