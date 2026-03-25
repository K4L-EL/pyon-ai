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
    accent: "from-violet-500/60 to-fuchsia-500/60",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    accent: "from-emerald-500/60 to-teal-500/60",
  },
  {
    title: "Healthcare Portal",
    category: "UI/UX Design",
    accent: "from-sky-500/60 to-blue-500/60",
  },
  {
    title: "AI Analytics Tool",
    category: "Machine Learning",
    accent: "from-amber-500/60 to-orange-500/60",
  },
];

export function PortfolioPreview() {
  return (
    <MotionSection className="py-32 border-t border-border">
      <Container>
        <MotionDiv variants={fadeUp} className="mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            03 — Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Recent projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A selection of projects where we&apos;ve helped businesses transform
            their digital presence.
          </p>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <MotionDiv key={project.title} variants={fadeUp}>
              <Link href="/portfolio" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-border bg-muted/50 p-8 transition-all duration-300 hover:bg-muted hover:border-white/12">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <div className={`h-px w-12 bg-linear-to-r ${project.accent} mb-8`} />

                  <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    View Project <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-14">
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
