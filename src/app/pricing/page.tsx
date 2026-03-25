import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent, flexible pricing for every stage of growth. Choose the plan that fits your needs or get a custom quote.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Starter",
    price: "1,500",
    period: "per project",
    description: "Perfect for small businesses and MVPs that need a polished digital presence fast.",
    features: [
      "Single-page or landing site",
      "Responsive design",
      "Basic SEO setup",
      "2 rounds of revisions",
      "1 month of support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "5,000",
    period: "per project",
    description: "For businesses ready to scale with a full-featured web application and marketing strategy.",
    features: [
      "Multi-page web application",
      "Custom UI/UX design",
      "SEO & content strategy",
      "API integrations",
      "3 months of support",
      "Analytics dashboard",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to you",
    description: "End-to-end digital transformation for established businesses with complex requirements.",
    features: [
      "Full-stack development",
      "AI/ML integration",
      "Dedicated project manager",
      "Priority support",
      "SLA guarantees",
      "Ongoing retainer options",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container className="text-center">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            Pricing
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            No hidden fees. No surprises. Choose a plan or reach out for a
            custom quote tailored to your exact needs.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={
                  tier.featured
                    ? "relative border-white/12 ring-1 ring-white/6"
                    : ""
                }
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-0.5 text-xs font-medium text-background">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    {tier.name}
                  </h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    {tier.price === "Custom" ? (
                      <span className="text-4xl font-bold text-foreground">Custom</span>
                    ) : (
                      <>
                        <span className="text-sm text-muted-foreground">£</span>
                        <span className="text-4xl font-bold text-foreground">
                          {tier.price}
                        </span>
                      </>
                    )}
                    <span className="text-sm text-muted-foreground ml-1">
                      {tier.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-foreground/50"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.featured ? "primary" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">
                    {tier.cta} <ArrowRight size={16} />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Need something different?{" "}
              <Link
                href="/contact"
                className="font-medium text-foreground hover:underline"
              >
                Let&apos;s discuss a custom solution
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
