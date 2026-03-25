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
            "w-full rounded-lg border bg-muted px-4 py-3 text-sm text-foreground transition-all",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-white/12",
            error ? "border-red-500" : "border-border",
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
            "w-full rounded-lg border bg-muted px-4 py-3 text-sm text-foreground transition-all resize-none",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-white/12",
            error ? "border-red-500" : "border-border",
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
