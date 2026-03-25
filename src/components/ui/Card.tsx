import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        glass
          ? "glass hover:shadow-lg hover:-translate-y-0.5"
          : "border border-border bg-muted/50 hover:bg-muted hover:border-white/12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
