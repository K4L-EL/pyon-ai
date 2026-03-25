import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Zap, Shield, Heart } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about PYON ai — our mission, values, and the team behind transformative digital solutions for businesses worldwide.",
  path: "/about",
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the cutting edge of technology, ensuring every solution leverages the latest and most effective tools available.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We deliver fast without cutting corners — agile processes and clear communication keep every project on track and on budget.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We build solutions that last. Scalable architecture, clean code, and thorough testing are non-negotiable in everything we deliver.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "Your success is our success. We work as an extension of your team, invested in your vision from day one through launch and beyond.",
  },
];

const team = [
  {
    name: "Khalil Mohamed",
    role: "Founder & Lead Developer",
    initials: "KM",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Design Lead",
    initials: "SC",
  },
  {
    name: "David Park",
    role: "Marketing Strategist",
    initials: "DP",
  },
  {
    name: "Amira Hassan",
    role: "AI & Data Engineer",
    initials: "AH",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container className="text-center">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            About Us
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The people behind the pixels
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            PYON ai is a digital solutions studio founded on a simple belief:
            technology should work for you, not the other way around.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <p>
              PYON ai was born from a desire to bridge the gap between ambitious
              businesses and the technology they need to thrive. Too often,
              companies are forced to choose between quality and affordability,
              speed and reliability. We reject that trade-off.
            </p>
            <p>
              Based in London, we work with clients across 12 countries — from
              early-stage startups to established enterprises — providing
              software development, design, digital marketing, and AI-powered
              research. Our formula is simple: you bring the vision, we build
              the solution.
            </p>
            <p>
              Every project begins with listening. We take the time to
              understand your goals, your audience, and your competitive
              landscape before writing a single line of code. This approach lets
              us deliver solutions that are not just technically excellent, but
              strategically aligned with your business objectives.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-border">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Values
            </h2>
            <p className="mt-3 text-muted-foreground">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border mb-4">
                  <value.icon size={20} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Meet the Team
            </h2>
            <p className="mt-3 text-muted-foreground">
              A small, talented team that punches well above its weight.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <Avatar
                  alt={member.name}
                  fallback={member.initials}
                  className="mx-auto h-20 w-20 text-lg"
                />
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-border">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Why choose PYON?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted-foreground">
            We combine deep technical expertise with a genuine commitment to
            your success. Fast turnaround, transparent pricing, and solutions
            built to scale.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Work With Us <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
