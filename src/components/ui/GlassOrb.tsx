"use client";

import { cn } from "@/lib/cn";

interface GlassOrbProps {
  size?: number;
  className?: string;
  variant?: "light" | "medium" | "dark";
}

export function GlassOrb({ size = 300, className, variant = "light" }: GlassOrbProps) {
  const variantStyles = {
    light:
      "bg-gradient-to-br from-gray-100/60 via-gray-50/40 to-white/30",
    medium:
      "bg-gradient-to-br from-gray-200/50 via-gray-100/40 to-gray-50/20",
    dark:
      "bg-gradient-to-br from-gray-300/40 via-gray-200/30 to-gray-100/20",
  };

  return (
    <div
      className={cn(
        "rounded-full",
        "backdrop-blur-2xl",
        "border border-white/50",
        "shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)]",
        "animate-[float_8s_ease-in-out_infinite]",
        variantStyles[variant],
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Specular highlight */}
      <div
        className="absolute top-[12%] left-[18%] w-[40%] h-[35%] rounded-full bg-white/40 blur-xl animate-[pulse-soft_4s_ease-in-out_infinite]"
        aria-hidden="true"
      />
    </div>
  );
}
