import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "PYON ai terms of service — the terms and conditions governing the use of our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
          Terms of Service
        </h1>
        <p className="text-sm font-mono text-muted-foreground mb-10">
          Last updated: 1 January 2025
        </p>

        <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-foreground prose-a:underline prose-strong:text-foreground prose-hr:border-border">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the PYON ai website (pyon.ai) and services,
            you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            PYON ai provides software development, UI/UX design, digital
            marketing, AI research, and related digital services. Specific terms
            for individual projects are outlined in separate service agreements.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and
            code — is the property of PYON ai or its licensors and is protected
            by intellectual property laws. You may not reproduce, distribute, or
            create derivative works without our written permission.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>When engaging our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete project requirements</li>
            <li>Supply necessary content and materials in a timely manner</li>
            <li>Respond to communications within reasonable timeframes</li>
            <li>Make payments according to agreed-upon schedules</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>
            Project fees are outlined in individual proposals or service
            agreements. Unless otherwise specified, a 50% deposit is required
            before work begins, with the balance due upon project completion.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            PYON ai shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            services. Our total liability shall not exceed the amount paid by
            you for the specific service giving rise to the claim.
          </p>

          <h2>7. Termination</h2>
          <p>
            Either party may terminate a service agreement with 30 days&apos;
            written notice. Upon termination, you are responsible for payment
            of all work completed up to the termination date.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any
            disputes shall be subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes take
            effect immediately upon posting to this page.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:legal@pyon.ai">legal@pyon.ai</a>.
          </p>
        </div>
      </Container>
    </article>
  );
}
