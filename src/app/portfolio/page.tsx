import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PortfolioGrid } from "./portfolio-grid";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "Browse our portfolio of web applications, mobile apps, marketing campaigns, and design projects for clients worldwide.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-white">
        <Container className="text-center">
          <Badge>Portfolio</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Work that speaks for itself
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            A curated selection of projects where we&apos;ve helped businesses
            achieve measurable results through design, development, and strategy.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
