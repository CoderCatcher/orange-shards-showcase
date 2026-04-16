import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

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
        {/* Premiere Pro inspired background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark timeline grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,95,31,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,95,31,0.03)_1px,transparent_1px)] bg-[size:60px_20px]" />
          
          {/* Animated timeline tracks */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute h-[3px] rounded-full"
              style={{
                top: `${18 + i * 12}%`,
                background: i % 2 === 0
                  ? "linear-gradient(90deg, transparent, rgba(255,95,31,0.4), rgba(255,95,31,0.1), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(255,255,255,0.03), transparent)",
                width: `${35 + Math.random() * 40}%`,
              }}
              initial={{ x: "-100%" }}
              animate={{ x: ["120%", "-100%"] }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Floating clip blocks */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <motion.div
              key={`block-${i}`}
              className="absolute rounded-sm"
              style={{
                width: `${60 + Math.random() * 120}px`,
                height: "12px",
                top: `${10 + i * 11}%`,
                left: `${5 + i * 11}%`,
                background: i % 3 === 0
                  ? "rgba(255,95,31,0.15)"
                  : i % 3 === 1
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(255,95,31,0.08)",
                borderLeft: i % 2 === 0 ? "2px solid rgba(255,95,31,0.4)" : "none",
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}

          {/* Playhead */}
          <motion.div
            className="absolute top-[15%] bottom-[15%] w-[2px] bg-primary"
            style={{ boxShadow: "0 0 12px rgba(255,95,31,0.6), 0 0 30px rgba(255,95,31,0.2)" }}
            animate={{ left: ["20%", "80%", "20%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-primary" />
          </motion.div>

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">Available for Work</span>
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Yash Jain
            </h1>
            <p className="mx-auto mt-4 max-w-md font-mono text-sm tracking-wide text-muted-foreground md:text-base">
              Video Editor · Motion Designer · Content Strategist
            </p>
            <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground/80 leading-relaxed">
              5+ years crafting high-retention edits for 200+ creators across YouTube, Shorts, Gaming & Motion Design.
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
