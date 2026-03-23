import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pyon.ai"),
  title: {
    default: "PYON ai — Transformative Software & Digital Solutions",
    template: "%s | PYON ai",
  },
  description:
    "PYON ai delivers modern software development, UI/UX design, digital marketing, and AI-driven research. We turn your ideas into winning digital solutions.",
  keywords: [
    "software development",
    "web development",
    "digital marketing",
    "UI UX design",
    "AI research",
    "PYON ai",
  ],
  authors: [{ name: "PYON ai" }],
  creator: "PYON ai",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://pyon.ai",
    siteName: "PYON ai",
    title: "PYON ai — Transformative Software & Digital Solutions",
    description:
      "Modern software development, design, and digital marketing that puts your business at the forefront of innovation.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PYON ai — Transformative Software & Digital Solutions",
    description:
      "Modern software development, design, and digital marketing that puts your business at the forefront of innovation.",
  },
  robots: { index: true, follow: true },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PYON ai",
    url: "https://pyon.ai",
    logo: "https://pyon.ai/logo.svg",
    description:
      "Transformative software development, design, and digital marketing solutions.",
    sameAs: [
      "https://twitter.com/pyonai",
      "https://www.linkedin.com/company/pyon-ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@pyon.ai",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
