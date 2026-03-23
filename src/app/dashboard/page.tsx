import type { Metadata } from "next";
import { Clock, CheckCircle2, AlertCircle, BarChart3 } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = createMetadata({
  title: "Dashboard",
  description: "Your PYON ai client dashboard — track project progress, view updates, and communicate with your team.",
  path: "/dashboard",
});

const summaryCards = [
  { label: "Active Projects", value: "3", icon: BarChart3, accent: "text-accent" },
  { label: "Pending Tasks", value: "12", icon: Clock, accent: "text-amber-500" },
  { label: "Completed", value: "28", icon: CheckCircle2, accent: "text-emerald-500" },
  { label: "Needs Attention", value: "1", icon: AlertCircle, accent: "text-red-500" },
];

const projects = [
  {
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    updated: "2 hours ago",
  },
  {
    name: "SEO Campaign",
    status: "In Progress",
    progress: 40,
    updated: "1 day ago",
  },
  {
    name: "Mobile App MVP",
    status: "Planning",
    progress: 15,
    updated: "3 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back, Client
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of your active projects and tasks.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.label}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {card.value}
                </p>
              </div>
              <card.icon size={24} className={card.accent} aria-hidden="true" />
            </div>
          </Card>
        ))}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Your Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.name}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <Badge
                      variant={
                        project.status === "In Progress" ? "default" : "muted"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Updated {project.updated}
                  </p>
                </div>

                <div className="w-full sm:w-48">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div
                    className="h-2 rounded-full bg-muted overflow-hidden"
                    role="progressbar"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${project.name} progress`}
                  >
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
