import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HeroScene = lazy(() => import("../components/HeroScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash Jain — Video Editor & Motion Designer" },
      { name: "description", content: "High-retention video editor specializing in YouTube long-form, shorts, gaming, and motion design. Let's create content that keeps viewers watching." },
      { property: "og:title", content: "Yash Jain — Video Editor & Motion Designer" },
      { property: "og:description", content: "High-retention video editor specializing in YouTube long-form, shorts, gaming, and motion design." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <Suspense fallback={<div className="absolute inset-0" />}>
          <HeroScene />
        </Suspense>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="mb-4 font-mono text-sm tracking-[0.3em] text-primary uppercase">
              Video Editor · Motion Designer
            </p>
            <h1 className="font-display text-6xl font-bold tracking-tight text-foreground md:text-8xl lg:text-9xl">
              YASH
              <br />
              <span className="text-gradient-orange">JAIN</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
              Crafting high-retention content that keeps viewers watching.
              YouTube · Shorts · Gaming · Motion Design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-orange"
            >
              View My Work
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="mailto:yashjain.vis@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/30 p-1.5"
          >
            <div className="h-1.5 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      <PortfolioSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
