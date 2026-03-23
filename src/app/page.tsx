import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutTeaser />
      <StatsCounter />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
