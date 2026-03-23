import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          aria-describedby={errorId}
          aria-invalid={!!error}
          className={cn(
            "w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20",
            error ? "border-red-400" : "border-border",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
          {label}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          aria-describedby={errorId}
          aria-invalid={!!error}
          className={cn(
            "w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all resize-none",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20",
            error ? "border-red-400" : "border-border",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export { Textarea };
