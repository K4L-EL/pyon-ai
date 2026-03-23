"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    gradient: "from-gray-100 via-gray-50 to-stone-100",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    gradient: "from-stone-100 via-gray-50 to-zinc-100",
  },
  {
    title: "Healthcare Portal",
    category: "UI/UX Design",
    gradient: "from-zinc-100 via-gray-50 to-neutral-100",
  },
  {
    title: "AI Analytics Tool",
    category: "Machine Learning",
    gradient: "from-neutral-100 via-stone-50 to-gray-100",
  },
];

export function PortfolioPreview() {
  return (
    <MotionSection className="py-24">
      <Container>
        <MotionDiv variants={fadeUp} className="text-center mb-14">
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent projects
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            A selection of projects where we&apos;ve helped businesses transform
            their digital presence.
          </p>
        </MotionDiv>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <MotionDiv key={project.title} variants={fadeUp}>
              <Link href="/portfolio" className="group block">
                <div
                  className={`relative aspect-[16/10] rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden border border-border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass rounded-xl px-8 py-6 text-center transition-all duration-300 group-hover:scale-105">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/portfolio">
              View All Work <ArrowRight size={16} />
            </Link>
          </Button>
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}
