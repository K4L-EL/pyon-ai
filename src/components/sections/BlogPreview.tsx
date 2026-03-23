"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
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
    <MotionSection className="py-24 mesh-gradient-warm">
      <Container>
        <MotionDiv variants={fadeUp} className="text-center mb-14">
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
            From the Blog
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest insights
          </h2>
        </MotionDiv>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <MotionDiv key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/70 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Read more <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv variants={fadeUp} className="mt-12 text-center">
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
