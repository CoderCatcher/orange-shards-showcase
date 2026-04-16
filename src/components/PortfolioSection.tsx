import { motion } from "framer-motion";

interface PortfolioCategory {
  title: string;
  description: string;
  link: string;
  icon: string;
  clients?: string[];
}

const categories: PortfolioCategory[] = [
  {
    title: "YouTube Long-Form",
    description:
      "High-retention videos (10–30 min) with strong pacing, storytelling, and engagement. Finance, AI, explainers, and documentary-style content.",
    link: "https://drive.google.com/drive/folders/1KboHv7WZaYqivgHJzX9uMto2tRKFc6NX",
    icon: "🎬",
    clients: ["@imvincentgao", "@Bugzey", "@PeakImpactYT"],
  },
  {
    title: "Shorts & Reels",
    description:
      "Viral short-form editing for TikTok, Reels, and YouTube Shorts. Fast-paced, meme-timed, Gen-Z style cuts that stop the scroll.",
    link: "https://drive.google.com/drive/folders/1XidRH-uvH1fYPesuDc9XhdAwGjwzVjR9",
    icon: "⚡",
    clients: ["@PeakImpactYT", "@Gao.Operatives"],
  },
  {
    title: "Gaming & Roblox",
    description:
      "Gaming content editing for Roblox, Minecraft, and more. Meme-style cuts, engaging overlays, and community-focused storytelling.",
    link: "https://drive.google.com/drive/folders/1X_-5R9v6uYm7DUw_KTF5qPHxhuFx95ZX",
    icon: "🎮",
    clients: ["@Boofyblox"],
  },
  {
    title: "Animation & Motion",
    description:
      "After Effects motion graphics, visual storytelling, and animation-based content for explainers and creative projects.",
    link: "https://drive.google.com/drive/folders/1_NSXri_g_cS6JIvZ-cwOdatt6PzFZ6ix",
    icon: "✨",
  },
  {
    title: "Thumbnails",
    description:
      "Eye-catching thumbnail design and creative direction that maximizes CTR and complements the video content.",
    link: "https://drive.google.com/drive/folders/1mbYUYmTk80r4qIeLj6djUJGw8v0XR4b_",
    icon: "🖼️",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function PortfolioSection() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Portfolio</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            From viral shorts to cinematic long-form — every edit is crafted for maximum retention and impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.title}
              variants={cardVariants}
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border-glow bg-card p-8 hover-lift"
            >
              <div className="mb-6 text-4xl">{cat.icon}</div>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              {cat.clients && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.clients.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-surface-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View Work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/12avo1bor-zBVXnBTRJivvaKLX5f5WQzx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View Full Portfolio
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
