"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

export function ContactCTA() {
  return (
    <MotionSection className="relative py-32 overflow-hidden border-t border-border">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(120,119,198,0.08),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <MotionDiv variants={fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to start
              <br />
              <span className="text-gradient">your project?</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Tell us about your idea and we&apos;ll craft a solution that puts
              your business at the forefront of innovation.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </MotionSection>
  );
}
