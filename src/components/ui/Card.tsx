import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export function Card({ className, glass = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass
          ? "glass hover:shadow-lg hover:-translate-y-1"
          : "bg-white border border-border shadow-sm hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
