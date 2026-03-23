# Q314 Landing Site — Architecture & Liquid Glass Effects

## Liquid Glass Effect — How It Works

The landing site uses a **glassmorphism** (sometimes called "liquid glass") visual style throughout. This is achieved purely with CSS — no special libraries or shaders — using a combination of four layered techniques:

### The Recipe

```
backdrop-filter: blur(Xpx) saturate(180%)
background: rgba(255, 255, 255, 0.05)          /* near-transparent fill */
border: 1px solid rgba(255, 255, 255, 0.15)    /* subtle white edge */
box-shadow: inset Xpx Xpx Xpx rgba(255,255,255,0.1), 0 0 Xpx rgba(color, 0.3)
```

| Layer | What it does |
|-------|-------------|
| `backdrop-filter: blur() saturate()` | Blurs and color-boosts everything *behind* the element, creating the frosted glass look |
| `background: rgba(...)` | A near-transparent white or colored fill — just enough to give the glass "tint" |
| `border: rgba(255,255,255,...)` | A faint white border that simulates light catching the edge of glass |
| `box-shadow: inset ...` | Inner glow simulates light refraction; outer glow adds depth and ambient color bleed |

The `saturate(180%)` is key — it makes the blurred content behind the glass appear more vivid, mimicking how real glass refracts and concentrates light.

### Where It's Used

#### 1. Navbar (scrolled state)

When the user scrolls down, the header transitions from transparent to frosted glass:

```css
/* Transparent (top of page) */
background: transparent;
backdrop-filter: blur(4px);     /* backdrop-blur-sm */

/* Scrolled (glass activated) */
background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%);
backdrop-filter: blur(20px) saturate(180%);
box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.15),   /* violet ambient glow */
            inset 0 1px 0 0 rgba(255,255,255,0.1);     /* top-edge highlight */
```

File: `src/components/layout/Navbar.tsx` (lines 131–146)

#### 2. Active Nav Pill

The sliding pill behind the active nav link is a glass element:

```css
background: rgba(255, 255, 255, 0.1);    /* bg-white/10 */
backdrop-filter: blur(12px);              /* backdrop-blur-lg */
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: inset 2px 2px 8px rgba(255,255,255,0.2),
            0 0 20px rgba(255,255,255,0.1);
```

File: `src/components/layout/Navbar.tsx` (line 179)

#### 3. Inquiry Modal

The fullscreen inquiry form is the most dramatic glass element — a `blur(60px)` panel floating over a dimmed backdrop:

```css
/* Backdrop overlay */
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(4px);

/* Modal panel */
backdrop-filter: blur(60px) saturate(180%);
background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
border: 1px solid rgba(255, 255, 255, 0.15);
box-shadow: inset 4px 4px 32px 3px rgba(255,255,255,0.12),
            inset 0 1px 0 0 rgba(255,255,255,0.15),
            0 0 60px rgba(139,92,246,0.12),
            0 8px 40px rgba(0,0,0,0.5);
```

The form inputs also use the glass effect:

```css
backdrop-filter: blur(20px) saturate(180%);
background: rgba(255, 255, 255, 0.05);
box-shadow: inset 2px 2px 12px 1px rgba(255,255,255,0.08),
            inset 0 1px 0 0 rgba(255,255,255,0.1);
border: 1px solid rgba(224, 231, 255, 0.15);
```

File: `src/components/sections/InquiryForm.tsx` (lines 7–12, 148, 160–166)

#### 4. Floating Planets (Glass Orbs)

Decorative floating spheres use glass styling with colored radial gradients to simulate translucent planets:

**Violet planet** (TheShift section):
```css
background: radial-gradient(circle at 35% 30%, rgba(196,181,253,0.25) 0%, transparent 45%),
            linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.1));
backdrop-filter: blur(50px) saturate(180%);
border: 1px solid rgba(167, 139, 250, 0.2);
box-shadow: inset 15px 15px 50px rgba(255,255,255,0.1),
            0 0 60px rgba(139,92,246,0.3);
```

**Lime planet** (ContactFooter):
```css
background: radial-gradient(circle at 36% 28%, rgba(190,242,100,0.32) 0%, transparent 38%),
            linear-gradient(150deg, rgba(163,230,53,0.2), rgba(132,204,22,0.14));
backdrop-filter: blur(48px) saturate(180%);
border: 2px solid rgba(163, 230, 53, 0.38);
box-shadow: inset 12px 12px 35px rgba(255,255,255,0.18),
            inset -12px -12px 35px rgba(101,163,13,0.3),
            0 0 60px rgba(163,230,53,0.4),
            0 14px 28px rgba(0,0,0,0.4);
```

Each planet also has an inner "specular highlight" — a blurred white radial gradient that pulses:
```css
background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 62%);
filter: blur(18px);
animation: pulse 3.4s infinite;
```

Files: `src/components/sections/TheShift.tsx`, `src/components/sections/ContactFooter.tsx`, `src/app/blog/blog-shell.tsx`

#### 5. SEO Page CTA Block

```css
border: 1px solid rgba(255, 255, 255, 0.08);   /* border-white/8 */
background: rgba(255, 255, 255, 0.02);          /* bg-white/2 */
backdrop-filter: blur(4px);                      /* backdrop-blur-sm */
```

File: `src/components/seo/SeoPageLayout.tsx` (line 252)

---

## Architecture Diagram

```
quant42-ui/
│
├── Framework ─────────── Next.js 15 (App Router) + React 19
├── Language ──────────── TypeScript 5.9
├── Styling ───────────── Tailwind CSS 4 + tailwindcss-animate
├── Animation ─────────── Framer Motion 12 (motion)
├── Hosting ───────────── Vercel
│
├── src/
│   │
│   ├── app/                          ← Next.js App Router (pages & layouts)
│   │   ├── layout.tsx                ← Root layout: fonts, metadata, CookieConsent
│   │   ├── page.tsx                  ← Homepage → renders App.tsx
│   │   ├── globals.css               ← Global styles, keyframes, Tailwind base
│   │   ├── robots.ts                 ← SEO: robots.txt generation
│   │   ├── sitemap.ts                ← SEO: sitemap.xml generation
│   │   │
│   │   ├── platform/                 ← /platform page
│   │   ├── pricing/                  ← /pricing page
│   │   ├── about/                    ← /about page
│   │   ├── ml-lab/                   ← /ml-lab page
│   │   ├── signup/                   ← /signup page
│   │   ├── privacy/                  ← /privacy page
│   │   ├── terms/                    ← /terms page
│   │   │
│   │   ├── blog/                     ← Blog system
│   │   │   ├── page.tsx              ← Blog listing
│   │   │   ├── [slug]/page.tsx       ← Individual article (dynamic)
│   │   │   ├── blog-shell.tsx        ← Blog layout wrapper (glass planets)
│   │   │   └── blog-slider.tsx       ← Blog post carousel
│   │   │
│   │   ├── compare/                  ← Competitor comparison pages
│   │   │   ├── metatrader-alternative/
│   │   │   ├── quantconnect-alternative/
│   │   │   └── tradingview-alternative/
│   │   │
│   │   ├── use-cases/                ← Use case landing pages (SEO)
│   │   │   ├── algorithmic-trading/
│   │   │   ├── backtesting/
│   │   │   ├── no-code-trading-bot/
│   │   │   ├── portfolio-optimization/
│   │   │   └── quantitative-research/
│   │   │
│   │   └── api/upload/route.ts       ← Image upload API route
│   │
│   ├── App.tsx                       ← Homepage composition (section ordering)
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            ← Fixed header (glass on scroll, sliding pill)
│   │   │   └── Container.tsx         ← Max-width centering wrapper
│   │   │
│   │   ├── sections/                 ← Landing page sections (top → bottom)
│   │   │   ├── Hero.tsx              ← Hero: planets, stars, headline, CTAs
│   │   │   ├── TheShift.tsx          ← "Manual trading is over" manifesto
│   │   │   ├── WhatIsQuant42.tsx     ← Platform intro + capability cards
│   │   │   ├── StrategyArchitecture.tsx ← Strategy architecture diagram
│   │   │   ├── AIResearchPartner.tsx ← AI co-pilot section
│   │   │   ├── Performance.tsx       ← Performance metrics
│   │   │   ├── ProductShowcase.tsx   ← Platform screenshots
│   │   │   ├── InstitutionalTesting.tsx ← Institutional pitch
│   │   │   ├── BetaTraction.tsx      ← Beta traction + CTA
│   │   │   ├── PricingTeaser.tsx     ← Pricing overview
│   │   │   ├── AboutTeaser.tsx       ← About teaser
│   │   │   ├── LatestBlog.tsx        ← Recent blog posts
│   │   │   ├── ContactFooter.tsx     ← Footer with glass planets
│   │   │   ├── InquiryForm.tsx       ← Inquiry modal (glass panel + inputs)
│   │   │   ├── Features.tsx          ← Feature cards (standalone page)
│   │   │   ├── FeaturesV2.tsx        ← Feature cards v2
│   │   │   ├── BuilderShowcase.tsx   ← Builder demo section
│   │   │   ├── BuiltForProfessionals.tsx ← Professional pitch
│   │   │   ├── LongTermVision.tsx    ← Vision section
│   │   │   ├── NewsletterSignup.tsx  ← Newsletter form
│   │   │   ├── Pricing.tsx           ← Full pricing page
│   │   │   ├── PlatformTeaser.tsx    ← Platform icon cards
│   │   │   ├── Team.tsx              ← Team section
│   │   │   ├── TickerTape.tsx        ← Scrolling ticker tape
│   │   │   ├── UseCases.tsx          ← Use cases overview
│   │   │   └── testimonials.tsx      ← Testimonials
│   │   │
│   │   ├── ui/                       ← Reusable UI primitives
│   │   │   ├── Badge.tsx             ← Label/badge component
│   │   │   ├── Button.tsx            ← Button (CVA variants)
│   │   │   ├── Card.tsx              ← Card container
│   │   │   ├── Motion.tsx            ← Framer Motion section/div wrappers
│   │   │   ├── StarsBackground.tsx   ← Animated star field (canvas or divs)
│   │   │   ├── animated-group.tsx    ← Staggered animation group
│   │   │   └── text-effect.tsx       ← Text reveal animation
│   │   │
│   │   ├── seo/
│   │   │   └── SeoPageLayout.tsx     ← Reusable SEO page template
│   │   │
│   │   └── CookieConsent.tsx         ← GDPR cookie consent banner
│   │
│   ├── data/
│   │   ├── features.ts              ← Feature list data
│   │   └── tickers.ts               ← Ticker symbol data
│   │
│   ├── lib/
│   │   ├── cn.ts                    ← clsx + tailwind-merge utility
│   │   ├── motion.ts               ← Framer Motion variant presets (fadeUp, etc.)
│   │   ├── stars.ts                 ← Star generation logic
│   │   └── utils.ts                 ← General helpers
│   │
│   ├── assets/                      ← Static images, fonts (Poppins), SVGs
│   ├── index.css                    ← Base CSS (imported by App)
│   └── App.css                      ← App-level styles
│
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.app.json
├── tsconfig.node.json
└── vercel.json                      ← Vercel deployment config
```

## Homepage Section Flow

```
┌─────────────────────────────────────────────┐
│              Navbar (fixed, glass on scroll) │
├─────────────────────────────────────────────┤
│  1. Hero           ← planets, stars, CTA    │
│  2. TheShift       ← glass violet planet    │
│  3. WhatIsQuant42  ← capability cards       │
│  4. StrategyArchitecture                     │
│  5. AIResearchPartner                        │
│  6. Performance                              │
│  7. ProductShowcase ← platform screenshots   │
│  8. InstitutionalTesting                     │
│  9. BetaTraction                             │
│ 10. PricingTeaser                            │
│ 11. AboutTeaser                              │
│ 12. LatestBlog                               │
│ 13. ContactFooter   ← glass lime planet     │
├─────────────────────────────────────────────┤
│  InquiryForm (modal overlay, glass panel)   │
└─────────────────────────────────────────────┘
```

## Dependencies

### Runtime

| Package | Purpose |
|---------|---------|
| `next` 15 | Framework — SSR, routing, API routes |
| `react` / `react-dom` 19 | UI rendering |
| `framer-motion` / `motion` 12 | Scroll-triggered animations, transitions |
| `tailwindcss` 4 | Utility-first CSS |
| `tailwindcss-animate` | Animation utility classes |
| `@tailwindcss/typography` | Prose styling for blog articles |
| `lucide-react` | Icon library |
| `class-variance-authority` | Component variant management (Button, Badge) |
| `clsx` + `tailwind-merge` | Conditional class merging |
| `@radix-ui/react-avatar` | Avatar primitive |
| `@radix-ui/react-slot` | Polymorphic component slots |
| `@vercel/blob` | Image upload storage |

### Dev

| Package | Purpose |
|---------|---------|
| `typescript` 5.9 | Type safety |
| `eslint` + `eslint-config-next` | Linting |
| `eslint-plugin-jsx-a11y` | Accessibility linting |
| `@tailwindcss/postcss` | PostCSS integration |

## Glass Effect Summary

| Element | Blur | Saturate | Where |
|---------|------|----------|-------|
| Navbar (scrolled) | 20px | 180% | `Navbar.tsx` |
| Nav active pill | 12px (lg) | — | `Navbar.tsx` |
| Inquiry modal | 60px | 180% | `InquiryForm.tsx` |
| Inquiry inputs | 20px | 180% | `InquiryForm.tsx` |
| Inquiry backdrop | 4px (sm) | — | `InquiryForm.tsx` |
| Violet planet | 50px | 180% | `TheShift.tsx` |
| Lime planet | 48px | 180% | `ContactFooter.tsx` |
| Blog planets | 55px | 180% | `blog-shell.tsx` |
| SEO CTA block | 4px (sm) | — | `SeoPageLayout.tsx` |
