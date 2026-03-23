import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleJsonLd({ post }: { post: (typeof blogPosts)[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "PYON ai",
      url: "https://pyon.ai",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <ArticleJsonLd post={post} />

      <article className="pt-32 pb-24">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={14} aria-hidden="true" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-li:text-muted-foreground">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("### "))
                return <h3 key={i}>{trimmed.slice(4)}</h3>;
              if (trimmed.startsWith("## "))
                return <h2 key={i}>{trimmed.slice(3)}</h2>;
              if (trimmed === "---") return <hr key={i} />;
              return <p key={i}>{trimmed}</p>;
            })}
          </div>
        </Container>
      </article>
    </>
  );
}
