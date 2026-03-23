import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Insights on software development, design, digital marketing, and technology from the PYON ai team.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-white">
        <Container className="text-center">
          <Badge>Blog</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Insights &amp; ideas
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Thoughts on design, development, marketing, and building better
            digital products.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} aria-hidden="true" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read article <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
