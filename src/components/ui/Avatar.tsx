"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/cn";

interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full",
        className
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="aspect-square h-full w-full object-cover"
      />
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground"
        delayMs={600}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
