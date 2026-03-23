import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "PYON ai privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: 1 January 2025
        </p>

        <div className="prose prose-gray max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent">
          <h2>1. Introduction</h2>
          <p>
            PYON ai (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This
            policy explains how we collect, use, and safeguard your personal
            information when you visit our website at pyon.ai or engage our
            services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information</strong> — name, email address, phone
              number, and company name when you fill in a contact form or
              request a quote.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, time spent on site,
              referral source, and device information collected through cookies
              and analytics tools.
            </li>
            <li>
              <strong>Communications</strong> — the content of messages you send
              us via email or contact forms.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your enquiries and provide requested services</li>
            <li>Improve our website and services</li>
            <li>Send occasional updates about our services (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with
            trusted third-party service providers (e.g. hosting, analytics) who
            assist in operating our website, subject to strict confidentiality
            agreements.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our site uses cookies to improve your browsing experience and
            analyse site traffic. You can control cookie preferences through
            your browser settings or our cookie consent banner.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Under applicable data protection laws, you have the right to access,
            correct, delete, or restrict processing of your personal data. To
            exercise these rights, contact us at{" "}
            <a href="mailto:privacy@pyon.ai">privacy@pyon.ai</a>.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your data against unauthorised access, alteration, or
            destruction.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at <a href="mailto:privacy@pyon.ai">privacy@pyon.ai</a>.
          </p>
        </div>
      </Container>
    </article>
  );
}
