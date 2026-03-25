import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />

      <Container className="relative z-10 text-center">
        <p className="text-8xl font-mono font-bold text-foreground/10 select-none">404</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">Page not found</h1>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
