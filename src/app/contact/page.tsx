import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with PYON ai. Tell us about your project and we'll get back to you within 24 hours.",
  path: "/contact",
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@pyon.ai", href: "mailto:hello@pyon.ai" },
  { icon: Phone, label: "Phone", value: "+44 20 1234 5678", href: "tel:+442012345678" },
  { icon: MapPin, label: "Location", value: "London, United Kingdom", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/40 to-white">
        <Container className="text-center">
          <Badge>Contact</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something great
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a tailored proposal.
          </p>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card>
                <ContactForm />
              </Card>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon size={18} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <Card className="mt-8">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Office Hours
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monday – Friday: 9:00 AM – 6:00 PM (GMT)
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Weekends: By appointment
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
