import { motion } from "framer-motion";

const skills = [
  { name: "Premiere Pro", level: 95 },
  { name: "After Effects", level: 90 },
  { name: "Motion Graphics", level: 85 },
  { name: "Short-form Editing", level: 95 },
  { name: "Long-form YouTube", level: 90 },
  { name: "Sound Design", level: 80 },
  { name: "Thumbnail Design", level: 85 },
  { name: "B-roll & Visual Matching", level: 88 },
];

const specializations = [
  "High-retention YouTube editing",
  "Documentary & storytelling edits",
  "Gaming & meme-style content",
  "TikTok/Shorts viral editing",
  "Explainer & AI content",
  "Roblox / Minecraft niche",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-32 bg-surface">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Expertise</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="mb-8 font-display text-xl font-bold text-foreground">
              Specializations
            </h3>
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec, i) => (
                <motion.span
                  key={spec}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-full border-glow bg-card px-5 py-2.5 font-body text-sm text-card-foreground"
                >
                  {spec}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 rounded-2xl border-glow bg-card p-8"
            >
              <h3 className="mb-4 font-display text-lg font-bold text-card-foreground">
                Work Style
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary">▸</span>
                  Fast turnaround (24–72 hours)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary">▸</span>
                  Strong communication & feedback handling
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary">▸</span>
                  Focus on retention, pacing & audience psychology
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary">▸</span>
                  Adapts to any creator style
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
