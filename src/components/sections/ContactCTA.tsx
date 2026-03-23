"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassOrb } from "@/components/ui/GlassOrb";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

export function ContactCTA() {
  return (
    <MotionSection className="relative py-28 overflow-hidden mesh-gradient-cool">
      <GlassOrb
        size={400}
        variant="medium"
        className="absolute -bottom-32 -right-32 opacity-40"
      />
      <GlassOrb
        size={220}
        variant="light"
        className="absolute top-10 -left-20 opacity-30"
      />

      <Container className="relative z-10">
        <div className="glass-strong rounded-3xl px-8 py-16 sm:px-16 text-center">
          <MotionDiv variants={fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-4 mx-auto max-w-lg text-muted-foreground">
              Tell us about your idea and we&apos;ll craft a solution that puts
              your business at the forefront of innovation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
