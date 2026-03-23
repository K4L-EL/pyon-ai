export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-ux-principles-great-website",
    title: "5 UX Principles for Creating a Great Website",
    excerpt:
      "Discover the essential principles that separate ordinary websites from extraordinary digital experiences.",
    date: "2025-11-15",
    author: "Khalil Mohamed",
    readTime: "5 min read",
    content: `
Great user experience isn't about flashy animations or the latest design trends — it's about making things work intuitively for the people who use them. Here are five principles we apply to every project at PYON ai.

## 1. Clarity Over Cleverness

Every element on your page should serve a purpose. If a user has to think about how to navigate your site, you've already lost them. Use clear labels, logical layouts, and straightforward language.

## 2. Consistency Builds Trust

Consistent design patterns — from button styles to colour usage — create a sense of reliability. When users know what to expect, they feel confident exploring your site further.

## 3. Speed Is a Feature

Performance isn't just a technical metric; it's a user experience metric. A one-second delay in page load can reduce conversions by 7%. Optimise images, minimise JavaScript, and leverage caching.

## 4. Accessibility Is Non-Negotiable

Designing for accessibility means designing for everyone. Proper contrast ratios, keyboard navigation, semantic HTML, and screen reader support aren't extras — they're fundamentals.

## 5. Test With Real Users

Assumptions are the enemy of good UX. Conduct user testing early and often. Watch how people actually interact with your product, and let their behaviour guide your design decisions.

---

These principles form the foundation of every project we deliver. Whether you're building a landing page or a complex web application, getting the basics right makes all the difference.
    `,
  },
  {
    slug: "web-design-trends-2025",
    title: "Web Design Trends to Watch in 2025",
    excerpt:
      "From glassmorphism to AI-driven personalisation, explore the trends shaping the future of web design.",
    date: "2025-10-22",
    author: "Sarah Chen",
    readTime: "6 min read",
    content: `
The web design landscape continues to evolve at pace. Here are the trends we're most excited about heading into 2025.

## Glassmorphism and Liquid Glass

Frosted glass effects have matured from a novelty into a refined design language. Apple's adoption of "liquid glass" in their latest OS has accelerated this trend, and we're seeing more brands embrace translucent panels, subtle blurs, and layered depth.

## AI-Driven Personalisation

Websites are becoming smarter about adapting to individual users. From dynamic content blocks to personalised navigation paths, AI is enabling experiences that feel tailor-made without being intrusive.

## Minimalism With Warmth

The cold, sterile minimalism of the 2010s is giving way to warmer palettes, organic shapes, and generous white space. The goal is simplicity that feels inviting rather than austere.

## Motion With Purpose

Scroll-triggered animations and micro-interactions continue to grow, but the emphasis has shifted from "look what we can do" to "does this help the user understand?" Purposeful motion guides attention and creates a sense of progression.

## Variable Fonts and Typographic Expression

With broad browser support for variable fonts, designers have unprecedented control over typography. Expect to see more expressive type treatments that adapt to screen size and context.

---

At PYON ai, we incorporate these trends thoughtfully — never for their own sake, but always in service of a better user experience.
    `,
  },
  {
    slug: "simple-guide-design-thinking",
    title: "A Simple Guide to Design Thinking",
    excerpt:
      "Learn how design thinking methodology can transform your approach to problem-solving and innovation.",
    date: "2025-09-10",
    author: "David Park",
    readTime: "4 min read",
    content: `
Design thinking isn't just for designers. It's a structured approach to creative problem-solving that any team can use to build better products and services.

## What Is Design Thinking?

At its core, design thinking is a human-centred approach to innovation. It starts with understanding the people you're designing for and ends with solutions that address their real needs — not just their assumed ones.

## The Five Stages

### 1. Empathise
Spend time with your users. Observe their behaviour, listen to their frustrations, and understand their context. The insights you gather here will inform everything that follows.

### 2. Define
Synthesise your research into a clear problem statement. A well-defined problem is half-solved. Focus on the user's need, not your preferred solution.

### 3. Ideate
Generate as many solutions as possible without judgement. Quantity leads to quality at this stage. Encourage wild ideas — they often spark practical innovations.

### 4. Prototype
Build quick, low-fidelity representations of your best ideas. The goal isn't perfection; it's learning. A paper sketch or clickable wireframe is enough to test assumptions.

### 5. Test
Put your prototypes in front of real users and observe. What works? What confuses them? Use this feedback to refine your solution and iterate.

---

Design thinking isn't a linear process — you'll often loop back to earlier stages as you learn more. That's the point. It's about staying curious, staying humble, and letting user needs drive your decisions.
    `,
  },
];
