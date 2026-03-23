import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-32">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-48 rounded-lg bg-muted" />
        <div className="h-12 w-3/4 rounded-lg bg-muted" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-4/6 rounded bg-muted" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 rounded-2xl bg-muted" />
          ))}
        </div>
      </div>
    </Container>
  );
}
