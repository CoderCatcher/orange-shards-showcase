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
        {/* After Effects UI background */}
        <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
          {/* Light workspace background */}
          <div className="absolute inset-0 bg-secondary" />

          {/* Top toolbar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-background border-b border-border flex items-center px-3 gap-4">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="h-2.5 w-2.5 rounded-full bg-orange-glow" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-[9px] text-muted-foreground tracking-wide">Adobe After Effects - Yash_Jain_Portfolio.aep</span>
          </div>

          {/* Left panel - Project */}
          <div className="absolute top-8 left-0 w-[220px] bottom-[200px] bg-background border-r border-border">
            <div className="h-6 bg-secondary border-b border-border flex items-center px-2">
              <span className="font-mono text-[8px] text-muted-foreground tracking-wider uppercase">Project</span>
            </div>
            <div className="p-2 space-y-1">
              {["📁 Comps", "📁 Footage", "📁 Audio", "📁 Graphics", "📁 Exports"].map((item) => (
                <div key={item} className="font-mono text-[9px] text-muted-foreground/70 py-0.5 px-1 rounded hover:bg-secondary">{item}</div>
              ))}
              <div className="mt-2 border-t border-border pt-2 space-y-0.5">
                {["▶ Main_Comp_v3", "▶ Intro_Animation", "▶ Lower_Third", "▶ Outro_Sequence", "▶ Transitions_Pack"].map((item) => (
                  <div key={item} className="font-mono text-[9px] text-primary py-0.5 px-1">{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Composition viewer */}
          <div className="absolute top-8 left-[220px] right-[260px] bottom-[200px] bg-secondary/50 border-r border-border">
            <div className="absolute top-0 left-0 right-0 h-6 bg-background border-b border-border flex items-center px-2 gap-3">
              <span className="font-mono text-[8px] text-foreground">Main_Comp_v3</span>
              <span className="font-mono text-[8px] text-muted-foreground">1920×1080</span>
              <span className="font-mono text-[8px] text-muted-foreground">29.97fps</span>
            </div>
            <div className="absolute inset-6 opacity-[0.04] bg-[repeating-conic-gradient(var(--foreground)_0%_25%,transparent_0%_50%)] bg-[length:20px_20px]" />
          </div>

          {/* Right panel - Effect Controls */}
          <div className="absolute top-8 right-0 w-[260px] bottom-[200px] bg-background border-l border-border">
            <div className="h-6 bg-secondary border-b border-border flex items-center px-2">
              <span className="font-mono text-[8px] text-muted-foreground tracking-wider uppercase">Effect Controls</span>
            </div>
            <div className="p-2 space-y-2">
              {[
                { name: "Glow", props: ["Radius: 25", "Intensity: 180%", "Color: #FF5F1F"] },
                { name: "CC Particle World", props: ["Birth Rate: 4.0", "Longevity: 1.5", "Physics: Explosive"] },
                { name: "Turbulent Displace", props: ["Amount: 50", "Size: 12", "Complexity: 3"] },
              ].map((fx) => (
                <div key={fx.name}>
                  <div className="font-mono text-[9px] text-primary mb-1 flex items-center gap-1">
                    <span className="text-[8px]">fx</span> {fx.name}
                  </div>
                  {fx.props.map((p) => (
                    <div key={p} className="font-mono text-[8px] text-muted-foreground pl-3 py-px">{p}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-background border-t border-border">
            <div className="h-5 bg-secondary border-b border-border flex items-center px-2 gap-4">
              <span className="font-mono text-[8px] text-muted-foreground">Timeline</span>
              <div className="flex gap-2">
                {["⏮", "◀", "▶", "⏭"].map((btn) => (
                  <span key={btn} className="text-[10px] text-muted-foreground">{btn}</span>
                ))}
              </div>
              <span className="font-mono text-[8px] text-primary ml-auto">00:00:12:15</span>
            </div>

            {/* Timeline ruler */}
            <div className="h-4 bg-secondary/50 border-b border-border flex items-end px-[180px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col items-start">
                  <span className="font-mono text-[6px] text-muted-foreground/50">{i}s</span>
                  <div className="w-px h-1.5 bg-border" />
                </div>
              ))}
            </div>

            {/* Layer tracks */}
            <div className="relative">
              {/* Playhead */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-primary z-10"
                style={{ boxShadow: "0 0 8px oklch(0.65 0.22 38 / 50%)" }}
                animate={{ left: ["calc(180px + 15%)", "calc(180px + 75%)", "calc(180px + 15%)"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-primary" />
              </motion.div>

              {[
                { name: "🎬 Main_Edit_v3", color: "oklch(0.65 0.22 38)", width: "78%", ml: 2 },
                { name: "🔤 Title_Sequence", color: "oklch(0.75 0.2 45)", width: "35%", ml: 15 },
                { name: "🔊 Audio_Master", color: "oklch(0.65 0.18 150)", width: "90%", ml: 0 },
                { name: "✨ Particles_FX", color: "oklch(0.65 0.22 38)", width: "50%", ml: 20 },
                { name: "📐 Shape_Layers", color: "oklch(0.7 0.15 30)", width: "62%", ml: 8 },
                { name: "🎨 Color_Grade", color: "oklch(0.75 0.2 45)", width: "85%", ml: 3 },
                { name: "🔀 Transitions", color: "oklch(0.65 0.22 38)", width: "28%", ml: 35 },
                { name: "📷 B-Roll_Cuts", color: "oklch(0.7 0.18 60)", width: "55%", ml: 12 },
                { name: "💬 Subtitles", color: "oklch(0.65 0.15 180)", width: "72%", ml: 5 },
                { name: "🎵 SFX_Layer", color: "oklch(0.7 0.2 45)", width: "40%", ml: 25 },
              ].map((layer, i) => (
                <div key={layer.name} className="flex h-[24px] border-b border-border">
                  <div className="w-[180px] shrink-0 bg-secondary flex items-center px-2 gap-1.5 border-r border-border">
                    <div className="h-2 w-2 rounded-sm" style={{ background: layer.color }} />
                    <span className="font-mono text-[8px] text-muted-foreground truncate">{layer.name}</span>
                    <div className="ml-auto flex gap-1">
                      <div className="h-2 w-2 rounded-full border border-border" />
                      <div className="h-2 w-2 rounded-full border border-border bg-muted-foreground/20" />
                    </div>
                  </div>
                  <div className="flex-1 bg-secondary/30 relative px-1 flex items-center">
                    <motion.div
                      className="h-[16px] rounded-sm"
                      style={{
                        width: layer.width,
                        background: `linear-gradient(90deg, ${layer.color} / 20%, ${layer.color} / 8%)`,
                        border: `1px solid ${layer.color} / 25%`,
                        marginLeft: `${layer.ml}%`,
                      }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vignette overlay to blend into content */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,oklch(0.99_0.001_90_/_40%)_50%,var(--background)_85%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
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
