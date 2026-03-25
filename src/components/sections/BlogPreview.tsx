"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MotionSection, MotionDiv } from "@/components/ui/Motion";
import { fadeUp } from "@/lib/motion";

const posts = [
  {
    slug: "5-ux-principles-great-website",
    title: "5 UX Principles for Creating a Great Website",
    excerpt:
      "Discover the essential principles that separate ordinary websites from extraordinary digital experiences.",
    date: "2025-11-15",
  },
  {
    slug: "web-design-trends-2025",
    title: "Web Design Trends to Watch in 2025",
    excerpt:
      "From glassmorphism to AI-driven personalisation, explore the trends shaping the future of web design.",
    date: "2025-10-22",
  },
  {
    slug: "simple-guide-design-thinking",
    title: "A Simple Guide to Design Thinking",
    excerpt:
      "Learn how design thinking methodology can transform your approach to problem-solving and innovation.",
    date: "2025-09-10",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogPreview() {
  return (
    <MotionSection className="py-32 dot-grid">
      <Container>
        <MotionDiv variants={fadeUp} className="mb-16">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            04 — Blog
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Latest insights
          </h2>
        </MotionDiv>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <MotionDiv key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="h-full flex flex-col">
                  <time
                    dateTime={post.date}
                    className="text-xs font-mono text-muted-foreground tracking-wider"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-foreground/70 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Read more <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-14">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Read All Articles <ArrowRight size={16} />
            </Link>
          </Button>
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}
