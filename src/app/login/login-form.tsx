"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface FormErrors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: FormErrors = {};

    const email = data.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";

    if (!data.get("password")) errs.password = "Password is required";

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      // Placeholder — auth backend not yet implemented
      alert("Login functionality will be connected to your authentication backend.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@company.com"
        error={errors.email}
        autoComplete="email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        error={errors.password}
        autoComplete="current-password"
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
          />
          Remember me
        </label>
        <Link
          href="/login"
          className="text-sm font-medium text-foreground hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Sign In <LogIn size={16} />
      </Button>
    </form>
  );
}
