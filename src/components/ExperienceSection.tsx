import { motion } from "framer-motion";

const clients = [
  { name: "Vincent Gao", url: "https://www.youtube.com/@imvincentgao", niche: "Finance / AI" },
  { name: "Bugzey", url: "https://www.youtube.com/@Bugzey", niche: "Content" },
  { name: "Boofyblox", url: "https://www.youtube.com/@Boofyblox", niche: "Roblox / Gaming" },
  { name: "Peak Impact", url: "https://www.youtube.com/@PeakImpactYT/shorts", niche: "Shorts" },
  { name: "Gao Operatives", url: "https://www.youtube.com/@Gao.Operatives", niche: "Operations" },
];

const stats = [
  { value: "5+", label: "Years Editing" },
  { value: "50+", label: "Creators Served" },
  { value: "500+", label: "Videos Delivered" },
  { value: "24h", label: "Fastest Turnaround" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Experience</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by Creators
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Freelance Video Editor since 2020, delivering high-retention content across gaming, finance, documentaries, AI, and social media.
          </p>
        </motion.div>

        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border-glow bg-card p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-gradient-orange md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <h3 className="mb-8 font-display text-xl font-bold text-foreground">Clients</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-xl border-glow bg-card p-5 hover-lift"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-bold">
                {client.name[0]}
              </div>
              <div>
                <div className="font-display text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </div>
                <div className="font-mono text-xs text-muted-foreground">{client.niche}</div>
              </div>
              <svg
                className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
