import Link from "next/link";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#software", label: "Software Development" },
    { href: "/services#design", label: "UI/UX Design" },
    { href: "/services#marketing", label: "Digital Marketing" },
    { href: "/services#ai", label: "AI & Research" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socials = [
  { href: "https://twitter.com/pyonai", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/company/pyon-ai", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/pyon-ai", icon: Github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#f8f8fa]" aria-label="Site footer">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
              PYON<span className="text-muted-foreground">.ai</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Transformative software &amp; digital solutions that amplify your key
              messages and drive your business forward.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} aria-hidden="true" />
              <a href="mailto:hello@pyon.ai" className="hover:text-foreground transition-colors">
                hello@pyon.ai
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} aria-hidden="true" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <nav key={title} aria-label={`${title} links`}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PYON ai. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/[0.04] hover:text-foreground"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
