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
          {/* AE dark workspace */}
          <div className="absolute inset-0 bg-[#1e1e1e]" />

          {/* Top toolbar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#2d2d2d] border-b border-[#1a1a1a] flex items-center px-3 gap-4">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-[9px] text-[#999] tracking-wide">Adobe After Effects - Yash_Jain_Portfolio.aep</span>
          </div>

          {/* Left panel - Project */}
          <div className="absolute top-8 left-0 w-[220px] bottom-[200px] bg-[#232323] border-r border-[#1a1a1a]">
            <div className="h-6 bg-[#2d2d2d] border-b border-[#1a1a1a] flex items-center px-2">
              <span className="font-mono text-[8px] text-[#888] tracking-wider uppercase">Project</span>
            </div>
            <div className="p-2 space-y-1">
              {["📁 Comps", "📁 Footage", "📁 Audio", "📁 Graphics", "📁 Exports"].map((item) => (
                <div key={item} className="font-mono text-[9px] text-[#777] py-0.5 px-1 rounded hover:bg-[#2a2a2a]">{item}</div>
              ))}
              <div className="mt-2 border-t border-[#2a2a2a] pt-2 space-y-0.5">
                {["▶ Main_Comp_v3", "▶ Intro_Animation", "▶ Lower_Third", "▶ Outro_Sequence", "▶ Transitions_Pack"].map((item) => (
                  <div key={item} className="font-mono text-[9px] text-[#9a8aff] py-0.5 px-1">{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Center - Composition viewer */}
          <div className="absolute top-8 left-[220px] right-[260px] bottom-[200px] bg-[#191919] border-r border-[#1a1a1a]">
            <div className="absolute top-0 left-0 right-0 h-6 bg-[#2d2d2d] border-b border-[#1a1a1a] flex items-center px-2 gap-3">
              <span className="font-mono text-[8px] text-[#ccc]">Main_Comp_v3</span>
              <span className="font-mono text-[8px] text-[#555]">1920×1080</span>
              <span className="font-mono text-[8px] text-[#555]">29.97fps</span>
            </div>
            <div className="absolute inset-6 opacity-[0.03] bg-[repeating-conic-gradient(#fff_0%_25%,transparent_0%_50%)] bg-[length:20px_20px]" />
          </div>

          {/* Right panel - Effect Controls */}
          <div className="absolute top-8 right-0 w-[260px] bottom-[200px] bg-[#232323] border-l border-[#1a1a1a]">
            <div className="h-6 bg-[#2d2d2d] border-b border-[#1a1a1a] flex items-center px-2">
              <span className="font-mono text-[8px] text-[#888] tracking-wider uppercase">Effect Controls</span>
            </div>
            <div className="p-2 space-y-2">
              {[
                { name: "Glow", props: ["Radius: 25", "Intensity: 180%", "Color: #FF5F1F"] },
                { name: "CC Particle World", props: ["Birth Rate: 4.0", "Longevity: 1.5", "Physics: Explosive"] },
                { name: "Turbulent Displace", props: ["Amount: 50", "Size: 12", "Complexity: 3"] },
              ].map((fx) => (
                <div key={fx.name}>
                  <div className="font-mono text-[9px] text-[#FF5F1F] mb-1 flex items-center gap-1">
                    <span className="text-[8px]">fx</span> {fx.name}
                  </div>
                  {fx.props.map((p) => (
                    <div key={p} className="font-mono text-[8px] text-[#666] pl-3 py-px">{p}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-[#232323] border-t border-[#1a1a1a]">
            <div className="h-5 bg-[#2d2d2d] border-b border-[#1a1a1a] flex items-center px-2 gap-4">
              <span className="font-mono text-[8px] text-[#888]">Timeline</span>
              <div className="flex gap-2">
                {["⏮", "◀", "▶", "⏭"].map((btn) => (
                  <span key={btn} className="text-[10px] text-[#777]">{btn}</span>
                ))}
              </div>
              <span className="font-mono text-[8px] text-primary ml-auto">00:00:12:15</span>
            </div>

            {/* Timeline ruler */}
            <div className="h-4 bg-[#1e1e1e] border-b border-[#2a2a2a] flex items-end px-[180px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col items-start">
                  <span className="font-mono text-[6px] text-[#555]">{i}s</span>
                  <div className="w-px h-1.5 bg-[#444]" />
                </div>
              ))}
            </div>

            {/* Layer tracks */}
            <div className="relative">
              {/* Playhead */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-primary z-10"
                style={{ boxShadow: "0 0 8px rgba(255,95,31,0.5)" }}
                animate={{ left: ["calc(180px + 15%)", "calc(180px + 75%)", "calc(180px + 15%)"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-primary" />
              </motion.div>

              {[
                { name: "🎬 Main_Edit", color: "#7b61ff", width: "70%" },
                { name: "🔤 Title_Text", color: "#FF5F1F", width: "30%" },
                { name: "🔊 Audio_Mix", color: "#28c840", width: "85%" },
                { name: "✨ Particles", color: "#febc2e", width: "45%" },
                { name: "📐 Shape_Layer", color: "#ff5f97", width: "55%" },
                { name: "🌈 Adjustment", color: "#5fcfff", width: "60%" },
              ].map((layer, i) => (
                <div key={layer.name} className="flex h-[24px] border-b border-[#1e1e1e]">
                  <div className="w-[180px] shrink-0 bg-[#282828] flex items-center px-2 gap-1.5 border-r border-[#1e1e1e]">
                    <div className="h-2 w-2 rounded-sm" style={{ background: layer.color }} />
                    <span className="font-mono text-[8px] text-[#aaa] truncate">{layer.name}</span>
                    <div className="ml-auto flex gap-1">
                      <div className="h-2 w-2 rounded-full border border-[#555]" />
                      <div className="h-2 w-2 rounded-full border border-[#555] bg-[#555]" />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#1e1e1e] relative px-1 flex items-center">
                    <motion.div
                      className="h-[16px] rounded-sm"
                      style={{
                        width: layer.width,
                        background: `linear-gradient(90deg, ${layer.color}44, ${layer.color}22)`,
                        border: `1px solid ${layer.color}55`,
                        marginLeft: `${i * 5 + 2}%`,
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.4)_50%,var(--background)_85%)]" />
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
