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
    <MotionSection className="relative py-20 mesh-gradient-cool overflow-hidden">
      <Container className="relative z-10">
        <div className="glass rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <MotionDiv
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl font-bold text-foreground sm:text-5xl">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
