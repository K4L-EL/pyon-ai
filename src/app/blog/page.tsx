import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
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
      <section className="pt-32 pb-16">
        <Container className="text-center">
          <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            Blog
          </span>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground tracking-wider mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="text-border">|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-base font-semibold text-foreground group-hover:text-foreground/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
