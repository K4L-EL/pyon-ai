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
    <MotionSection className="relative py-24 mesh-gradient-warm">
      <Container>
        <MotionDiv variants={fadeUp} className="text-center mb-14">
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
            What We Do
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solutions tailored to your goals
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            We combine technical excellence with creative strategy to deliver
            digital products that make a real impact.
          </p>
        </MotionDiv>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MotionDiv key={service.title} variants={fadeUp}>
              <Card className="h-full">
                <service.icon
                  size={28}
                  className="text-foreground/70 mb-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-12 text-center">
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
