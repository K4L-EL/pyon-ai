"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: FormData): FormErrors {
    const e: FormErrors = {};
    if (!data.get("name")) e.name = "Name is required";
    const email = data.get("email") as string;
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email";
    if (!data.get("subject")) e.subject = "Subject is required";
    if (!data.get("message")) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center" role="status">
        <CheckCircle2 size={48} className="text-accent mb-4" />
        <h3 className="text-xl font-semibold text-foreground">
          Message sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          placeholder="Your full name"
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <Input
        label="Subject"
        name="subject"
        placeholder="What's this about?"
        error={errors.subject}
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project…"
        rows={6}
        error={errors.message}
      />
      <Button type="submit" size="lg">
        Send Message <Send size={16} />
      </Button>
    </form>
  );
}
