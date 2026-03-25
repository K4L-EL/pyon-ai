import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { LoginForm } from "./login-form";

export const metadata: Metadata = createMetadata({
  title: "Client Login",
  description: "Log in to your PYON ai client dashboard to track project progress, leave comments, and more.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(120,119,198,0.1),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex justify-center py-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              PYON<span className="text-muted-foreground font-normal">.ai</span>
            </Link>
            <h1 className="mt-4 text-2xl font-bold text-foreground">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to access your client dashboard
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/50 p-8">
            <LoginForm />
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Not a client yet?{" "}
            <Link href="/contact" className="font-medium text-foreground hover:underline">
              Get in touch
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
