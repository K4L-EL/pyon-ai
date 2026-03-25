"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5 text-xs font-mono tracking-wide text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Transformative Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            We build software
            <br />
            <span className="text-gradient">that moves forward</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            From elegant web applications and data-driven marketing to
            cutting-edge AI research — we craft digital solutions with
            simplicity, speed, and precision.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Our Services <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
