"use client";

import Link from "next/link";
import {
  Code2,
  Palette,
  Megaphone,
  BrainCircuit,
  Blocks,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom web and mobile applications built with modern frameworks for performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, research-driven interfaces that delight users and strengthen your brand identity.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaigns across search, social, and content that drive measurable growth.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Research",
    description:
      "Leveraging artificial intelligence and competitive analysis to uncover opportunities others miss.",
  },
  {
    icon: Blocks,
    title: "Blockchain",
    description:
      "Decentralised solutions and smart contract development for the next generation of digital trust.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "High-performance web platforms with seamless user experiences across every device.",
  },
];

export function ServicesPreview() {
  return (
    <MotionSection className="relative py-32">
      <Container>
        <MotionDiv variants={fadeUp} className="mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            01 — Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Solutions tailored<br className="hidden sm:block" /> to your goals
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We combine technical excellence with creative strategy to deliver
            digital products that make a real impact.
          </p>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MotionDiv key={service.title} variants={fadeUp}>
              <Card className="h-full group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border mb-5 transition-colors group-hover:border-white/12">
                  <service.icon
                    size={20}
                    className="text-muted-foreground"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-14">
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services <ArrowRight size={16} />
            </Link>
          </Button>
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}
