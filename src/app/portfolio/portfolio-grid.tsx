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
    gradient: "from-gray-100 via-stone-50 to-gray-50",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Apps",
    description: "Full-stack marketplace with payment integration, inventory management, and automated fulfilment.",
    gradient: "from-stone-100 via-gray-50 to-zinc-50",
  },
  {
    title: "Healthcare Portal",
    category: "Design",
    description: "Patient-facing portal redesign that improved appointment bookings by 40% through intuitive UX.",
    gradient: "from-zinc-100 via-neutral-50 to-gray-50",
  },
  {
    title: "AI Analytics Tool",
    category: "AI/ML",
    description: "Predictive analytics platform that uses machine learning to forecast customer churn with 92% accuracy.",
    gradient: "from-neutral-100 via-stone-50 to-gray-50",
  },
  {
    title: "Restaurant Brand Identity",
    category: "Design",
    description: "Complete brand overhaul including logo, menu design, website, and social media templates.",
    gradient: "from-gray-100 via-zinc-50 to-stone-50",
  },
  {
    title: "SaaS Growth Campaign",
    category: "Marketing",
    description: "Content-led SEO and PPC strategy that tripled organic traffic and reduced CPA by 35% in 6 months.",
    gradient: "from-stone-100 via-neutral-50 to-gray-50",
  },
  {
    title: "Property Management App",
    category: "Web Apps",
    description: "Tenant and landlord portal with automated rent collection, maintenance requests, and reporting.",
    gradient: "from-zinc-100 via-gray-50 to-stone-50",
  },
  {
    title: "Market Intelligence Bot",
    category: "AI/ML",
    description: "Automated competitive analysis tool that monitors pricing, reviews, and social signals in real-time.",
    gradient: "from-neutral-100 via-gray-50 to-zinc-50",
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
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-foreground text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {filtered.map((project) => (
          <Card key={project.title} className="overflow-hidden p-0">
            <div
              className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <span className="glass rounded-xl px-6 py-4 text-sm font-semibold text-foreground">
                {project.title}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs text-muted-foreground rounded-full bg-muted px-2.5 py-0.5">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
