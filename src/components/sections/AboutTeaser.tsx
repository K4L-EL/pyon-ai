"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

const highlights = [
  "Fast turnaround with agile methodology",
  "Transparent communication at every stage",
  "Scalable architecture built for growth",
  "Affordable without compromising quality",
];

export function AboutTeaser() {
  return (
    <MotionSection className="py-32 overflow-hidden border-t border-border">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <MotionDiv variants={slideInLeft}>
            <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
              02 — About
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your vision,<br /> our expertise
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              PYON ai is a digital solutions studio that amplifies your key
              messages, grows your customer base, and drives your business
              forward. We strategically maximise results while minimising costs
              — delivering with the speed and technical depth that sets us apart.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-px w-4 bg-muted-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button variant="outline" asChild>
                <Link href="/about">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={slideInRight}
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-xl border border-border bg-muted overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-white/6" />
                  <div className="h-3 w-3 rounded-full bg-white/6" />
                  <div className="h-3 w-3 rounded-full bg-white/6" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">pyon.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-loose space-y-1">
                <div>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-foreground">vision</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-emerald-400">&quot;your idea&quot;</span>
                  <span className="text-muted-foreground">;</span>
                </div>
                <div>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-foreground">result</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-amber-400">await</span>{" "}
                  <span className="text-foreground">pyon</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-blue-400">build</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-foreground">vision</span>
                  <span className="text-muted-foreground">);</span>
                </div>
                <div className="text-muted-foreground/40">
                  {"// scalable · performant · beautiful"}
                </div>
                <div className="pt-1">
                  <span className="text-violet-400">console</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-blue-400">log</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-foreground">result</span>
                  <span className="text-muted-foreground">);</span>
                  <span className="ml-1 inline-block w-2 h-4 bg-foreground/50 animate-pulse align-middle" />
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
