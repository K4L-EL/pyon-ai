"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassOrb } from "@/components/ui/GlassOrb";
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
    <MotionSection className="py-24 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <MotionDiv variants={slideInLeft}>
            <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
              About Us
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your vision, our expertise
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              PYON ai is a digital solutions studio that amplifies your key
              messages, grows your customer base, and drives your business
              forward. We strategically maximise results while minimising costs
              — delivering with the speed and technical depth that sets us apart.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-foreground/50"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
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
            <div className="relative h-80 w-80 mesh-gradient-cool rounded-3xl">
              <GlassOrb size={260} variant="medium" className="absolute top-2 left-2" />
              <GlassOrb size={140} variant="light" className="absolute bottom-4 right-4" />
              <div className="glass absolute inset-12 flex items-center justify-center rounded-2xl">
                <span className="text-5xl font-bold text-foreground/20">P.</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
