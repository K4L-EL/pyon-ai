import type { Metadata } from "next";
import {
  Code2,
  Palette,
  Megaphone,
  BrainCircuit,
  Blocks,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore PYON ai's full range of digital services — from software development and UI/UX design to digital marketing, AI research, and blockchain solutions.",
  path: "/services",
});

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    description:
      "We architect and build high-performance web and mobile applications using modern frameworks like React, Next.js, and Node.js. Every line of code is written with scalability, maintainability, and your business goals in mind.",
    deliverables: [
      "Custom web applications",
      "API design & integration",
      "Cloud-native architecture",
      "Performance optimisation",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Great design is invisible — it simply works. We create intuitive, research-driven interfaces that strengthen your brand and convert visitors into loyal customers through delightful user experiences.",
    deliverables: [
      "User research & personas",
      "Wireframes & prototyping",
      "Design systems",
      "Responsive visual design",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "We develop data-driven marketing strategies that reach the right audience at the right time. From SEO and content marketing to paid campaigns, we maximise your ROI with transparent, measurable results.",
    deliverables: [
      "SEO & content strategy",
      "Social media management",
      "Paid advertising (PPC)",
      "Analytics & reporting",
    ],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI & Research",
    description:
      "We utilise artificial intelligence alongside advanced analytics to compose competitive analyses, predict market trends, and automate workflows — giving your business an edge the competition can't match.",
    deliverables: [
      "Competitive analysis",
      "Machine learning models",
      "Data pipeline engineering",
      "Predictive analytics",
    ],
  },
  {
    id: "blockchain",
    icon: Blocks,
    title: "Blockchain Solutions",
    description:
      "From smart contract development to tokenisation strategies, we build decentralised solutions that bring transparency, security, and trust to your digital operations.",
    deliverables: [
      "Smart contract development",
      "DApp architecture",
      "Token design & launch",
      "Security audits",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Applications",
    description:
      "We transform your ideas into interactive, high-performance web platforms with exceptional user experiences across every device and screen size.",
    deliverables: [
      "Progressive Web Apps",
      "E-commerce platforms",
      "SaaS applications",
      "CMS & dashboards",
    ],
  },
];

function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@type": "Organization", name: "PYON ai" },
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-white">
        <Container className="text-center">
          <Badge>Our Services</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to grow digitally
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide end-to-end digital solutions — from strategy and design
            to development and marketing — all under one roof.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="space-y-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="grid gap-6 md:grid-cols-3 md:gap-10 scroll-mt-24"
              >
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon size={24} className="text-accent" aria-hidden="true" />
                    <h2 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Have a project in mind? Let&apos;s talk about how we can help.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
