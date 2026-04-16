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

          {/* Top toolbar - pushed below navbar */}
          <div className="absolute top-16 left-0 right-0 h-8 bg-background border-b border-border flex items-center px-3 gap-4">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <div className="h-2.5 w-2.5 rounded-full bg-orange-glow" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-[9px] text-muted-foreground tracking-wide">Adobe After Effects - Yash_Jain_Portfolio.aep</span>
          </div>

          {/* Left panel - Project */}
          <div className="absolute top-[88px] left-0 w-[220px] bottom-[260px] bg-background border-r border-border">
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
          <div className="absolute top-[88px] left-[220px] right-[260px] bottom-[260px] bg-secondary/50 border-r border-border">
            <div className="absolute top-0 left-0 right-0 h-6 bg-background border-b border-border flex items-center px-2 gap-3">
              <span className="font-mono text-[8px] text-foreground">Main_Comp_v3</span>
              <span className="font-mono text-[8px] text-muted-foreground">1920×1080</span>
              <span className="font-mono text-[8px] text-muted-foreground">29.97fps</span>
            </div>
            <div className="absolute inset-6 opacity-[0.04] bg-[repeating-conic-gradient(var(--foreground)_0%_25%,transparent_0%_50%)] bg-[length:20px_20px]" />
          </div>

          {/* Right panel - Effect Controls */}
          <div className="absolute top-[88px] right-0 w-[260px] bottom-[260px] bg-background border-l border-border">
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
          <div className="absolute bottom-0 left-0 right-0 h-[260px] bg-background border-t border-border">
            <div className="h-5 bg-secondary border-b border-border flex items-center px-2 gap-4">
              <span className="font-mono text-[8px] text-muted-foreground">Timeline</span>
              <div className="flex gap-2">
                {["⏮", "◀", "▶", "⏭"].map((btn) => (
                  <span key={btn} className="text-[10px] text-muted-foreground">{btn}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <span className="font-mono text-[7px] text-muted-foreground/60">Snapping</span>
                <div className="h-2 w-2 rounded-sm bg-primary/60" />
              </div>
              <span className="font-mono text-[8px] text-primary ml-auto">00:00:12:15</span>
              <span className="font-mono text-[7px] text-muted-foreground ml-2">/ 00:02:34:00</span>
            </div>

            {/* Timeline ruler */}
            <div className="h-4 bg-secondary/50 border-b border-border flex items-end px-[160px]">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col items-start">
                  {i % 5 === 0 ? (
                    <>
                      <span className="font-mono text-[6px] text-muted-foreground/60">{Math.floor(i / 2)}:{(i % 2) * 30 === 0 ? "00" : "30"}</span>
                      <div className="w-px h-2.5 bg-muted-foreground/30" />
                    </>
                  ) : (
                    <div className="w-px h-1 bg-border" />
                  )}
                </div>
              ))}
            </div>

            {/* Layer tracks */}
            <div className="relative overflow-hidden" style={{ height: "calc(100% - 36px)" }}>
              {/* Playhead */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-primary z-10"
                style={{ boxShadow: "0 0 10px oklch(0.65 0.22 38 / 60%)" }}
                animate={{ left: ["calc(160px + 15%)", "calc(160px + 80%)", "calc(160px + 15%)"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-primary" />
              </motion.div>

              {[
                { name: "V1  🎬 Main_Edit_v3", color: "#FF5F1F", clips: [{ w: "30%", ml: "0%" }, { w: "25%", ml: "32%" }, { w: "18%", ml: "60%" }, { w: "15%", ml: "82%" }] },
                { name: "V2  🔤 Titles_Lower3rd", color: "#E8912D", clips: [{ w: "12%", ml: "5%" }, { w: "8%", ml: "22%" }, { w: "15%", ml: "45%" }, { w: "10%", ml: "75%" }] },
                { name: "V3  ✨ Effects_Comp", color: "#FF8C42", clips: [{ w: "20%", ml: "10%" }, { w: "35%", ml: "38%" }, { w: "12%", ml: "80%" }] },
                { name: "V4  📐 Shape_Layers", color: "#D4622B", clips: [{ w: "45%", ml: "2%" }, { w: "28%", ml: "55%" }] },
                { name: "V5  🎨 Adjustment", color: "#C75B24", clips: [{ w: "95%", ml: "1%" }] },
                { name: "V6  📷 B-Roll", color: "#FF6B35", clips: [{ w: "18%", ml: "0%" }, { w: "14%", ml: "20%" }, { w: "22%", ml: "36%" }, { w: "10%", ml: "62%" }, { w: "20%", ml: "76%" }] },
                { name: "V7  💬 Subtitles", color: "#E07830", clips: [{ w: "88%", ml: "5%" }] },
                { name: "V8  🔀 Transitions", color: "#CC6A2E", clips: [{ w: "4%", ml: "29%" }, { w: "4%", ml: "56%" }, { w: "4%", ml: "77%" }] },
                { name: "A1  🔊 Dialogue", color: "#4CAF50", clips: [{ w: "28%", ml: "1%" }, { w: "22%", ml: "32%" }, { w: "30%", ml: "58%" }] },
                { name: "A2  🎵 Music_Bed", color: "#2E7D32", clips: [{ w: "96%", ml: "0%" }] },
                { name: "A3  🔔 SFX", color: "#66BB6A", clips: [{ w: "3%", ml: "8%" }, { w: "2%", ml: "18%" }, { w: "5%", ml: "30%" }, { w: "3%", ml: "42%" }, { w: "4%", ml: "55%" }, { w: "2%", ml: "68%" }, { w: "3%", ml: "80%" }, { w: "2%", ml: "90%" }] },
                { name: "A4  🎤 Voiceover", color: "#388E3C", clips: [{ w: "40%", ml: "10%" }, { w: "30%", ml: "58%" }] },
              ].map((layer, i) => (
                <div key={layer.name} className="flex h-[18px] border-b border-border/50">
                  <div className="w-[160px] shrink-0 bg-secondary/80 flex items-center px-1.5 gap-1 border-r border-border">
                    <div className="h-1.5 w-1.5 rounded-[2px]" style={{ background: layer.color }} />
                    <span className="font-mono text-[7px] text-muted-foreground truncate">{layer.name}</span>
                    <div className="ml-auto flex gap-0.5">
                      <div className="h-1.5 w-1.5 rounded-full border border-border/60" />
                      <div className="h-[5px] w-[5px] rounded-[1px] border border-border/60 flex items-center justify-center">
                        <span className="text-[4px] text-muted-foreground/40">M</span>
                      </div>
                      <div className="h-[5px] w-[5px] rounded-[1px] border border-border/60 flex items-center justify-center">
                        <span className="text-[4px] text-muted-foreground/40">S</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-secondary/20 relative flex items-center">
                    {layer.clips.map((clip, ci) => (
                      <motion.div
                        key={ci}
                        className="absolute h-[14px] rounded-[2px]"
                        style={{
                          width: clip.w,
                          left: `calc(${clip.ml})`,
                          background: `linear-gradient(180deg, ${layer.color}55, ${layer.color}30)`,
                          borderTop: `1px solid ${layer.color}88`,
                          borderBottom: `1px solid ${layer.color}22`,
                          borderLeft: `1px solid ${layer.color}66`,
                          borderRight: `1px solid ${layer.color}66`,
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4, repeat: Infinity, delay: (i * 0.2 + ci * 0.5) % 3 }}
                      >
                        {/* Clip handle edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-[2px]" style={{ background: `${layer.color}aa` }} />
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] rounded-r-[2px]" style={{ background: `${layer.color}aa` }} />
                      </motion.div>
                    ))}
                    {/* Keyframe diamonds for some tracks */}
                    {i < 4 && Array.from({ length: [4, 3, 5, 2][i] }).map((_, ki) => (
                      <div
                        key={`kf-${ki}`}
                        className="absolute h-[5px] w-[5px] rotate-45"
                        style={{
                          left: `${10 + ki * 18 + (i * 7) % 12}%`,
                          top: "50%",
                          transform: "translateY(-50%) rotate(45deg)",
                          background: layer.color,
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vignette overlay - adapts to theme */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_/_40%_50%,var(--background)_85%)]" />
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
