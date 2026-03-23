import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { GlassOrb } from "@/components/ui/GlassOrb";
import { LoginForm } from "./login-form";

export const metadata: Metadata = createMetadata({
  title: "Client Login",
  description: "Log in to your PYON ai client dashboard to track project progress, leave comments, and more.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden mesh-gradient">
      <GlassOrb size={400} variant="medium" className="absolute -top-40 -right-40 opacity-40" />
      <GlassOrb size={250} variant="light" className="absolute bottom-10 -left-20 opacity-30" />

      <Container className="relative z-10 flex justify-center py-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              PYON<span className="text-muted-foreground">.ai</span>
            </Link>
            <h1 className="mt-4 text-2xl font-bold text-foreground">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to access your client dashboard
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-8">
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
