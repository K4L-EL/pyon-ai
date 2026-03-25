"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

const categories = ["All", "Web Apps", "Design", "Marketing", "AI/ML"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Apps",
    description: "A real-time analytics dashboard for a London-based fintech startup, handling 50k+ daily transactions.",
    accent: "from-violet-500/60 to-fuchsia-500/60",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Apps",
    description: "Full-stack marketplace with payment integration, inventory management, and automated fulfilment.",
    accent: "from-emerald-500/60 to-teal-500/60",
  },
  {
    title: "Healthcare Portal",
    category: "Design",
    description: "Patient-facing portal redesign that improved appointment bookings by 40% through intuitive UX.",
    accent: "from-sky-500/60 to-blue-500/60",
  },
  {
    title: "AI Analytics Tool",
    category: "AI/ML",
    description: "Predictive analytics platform that uses machine learning to forecast customer churn with 92% accuracy.",
    accent: "from-amber-500/60 to-orange-500/60",
  },
  {
    title: "Restaurant Brand Identity",
    category: "Design",
    description: "Complete brand overhaul including logo, menu design, website, and social media templates.",
    accent: "from-rose-500/60 to-pink-500/60",
  },
  {
    title: "SaaS Growth Campaign",
    category: "Marketing",
    description: "Content-led SEO and PPC strategy that tripled organic traffic and reduced CPA by 35% in 6 months.",
    accent: "from-cyan-500/60 to-teal-500/60",
  },
  {
    title: "Property Management App",
    category: "Web Apps",
    description: "Tenant and landlord portal with automated rent collection, maintenance requests, and reporting.",
    accent: "from-indigo-500/60 to-violet-500/60",
  },
  {
    title: "Market Intelligence Bot",
    category: "AI/ML",
    description: "Automated competitive analysis tool that monitors pricing, reviews, and social signals in real-time.",
    accent: "from-lime-500/60 to-emerald-500/60",
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:text-foreground hover:bg-white/4"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {filtered.map((project) => (
          <Card key={project.title} className="overflow-hidden group">
            <div className={`h-px w-12 bg-linear-to-r ${project.accent} mb-5`} />
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="mt-2 font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
