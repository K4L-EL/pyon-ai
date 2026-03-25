"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const COOKIE_KEY = "pyon-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function dismiss() {
    localStorage.setItem(COOKIE_KEY, "dismissed");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg rounded-xl border border-border bg-muted/95 backdrop-blur-xl p-5 sm:left-auto sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                We use cookies
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                This site uses cookies to improve your browsing experience and
                analyse site traffic. See our{" "}
                <Link
                  href="/privacy"
                  className="text-foreground underline hover:no-underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" onClick={accept}>
                  Accept
                </Button>
                <Button size="sm" variant="ghost" onClick={dismiss}>
                  Decline
                </Button>
              </div>
            </div>
            <button
              onClick={dismiss}
              aria-label="Dismiss cookie banner"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
