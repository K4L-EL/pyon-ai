"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassOrb } from "@/components/ui/GlassOrb";
import { fadeUp, fadeIn } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden mesh-gradient">
      {/* Decorative glass orbs */}
      <GlassOrb
        size={500}
        variant="medium"
        className="absolute -top-32 -right-40 opacity-60"
      />
      <GlassOrb
        size={320}
        variant="light"
        className="absolute bottom-10 -left-32 opacity-50"
      />
      <GlassOrb
        size={180}
        variant="dark"
        className="absolute top-1/3 right-1/4 opacity-30"
      />

      <Container className="relative z-10 py-32 lg:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full glass-subtle px-4 py-1.5 text-xs font-medium text-foreground/70">
              Transformative Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            We build software that moves your business forward
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            From elegant web applications and data-driven marketing to
            cutting-edge AI research — we craft digital solutions with
            simplicity, speed, and precision.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/services">
                Our Services <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
