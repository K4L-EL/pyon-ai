import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://pyon.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/about",
    "/pricing",
    "/portfolio",
    "/blog",
    "/contact",
    "/login",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/services" ? 0.9 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
