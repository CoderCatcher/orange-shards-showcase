import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "Vincent Gao", url: "https://www.youtube.com/@imvincentgao", niche: "Finance / AI", initial: "VG" },
  { name: "Bugzey", url: "https://www.youtube.com/@Bugzey", niche: "Content", initial: "BZ" },
  { name: "Boofyblox", url: "https://www.youtube.com/@Boofyblox", niche: "Roblox / Gaming", initial: "BB" },
  { name: "Peak Impact", url: "https://www.youtube.com/@PeakImpactYT/shorts", niche: "Shorts", initial: "PI" },
  { name: "Gao Operatives", url: "https://www.youtube.com/@Gao.Operatives", niche: "Operations", initial: "GO" },
];

const stats = [
  { value: "5+", label: "Years Editing" },
  { value: "200+", label: "Creators Served" },
  { value: "1500+", label: "Videos Delivered" },
  { value: "12h", label: "Fastest Turnaround" },
];

// Duplicate for seamless loop
const duplicatedClients = [...clients, ...clients];

function CreatorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!scrollRef.current) return;
    xRef.current -= delta * 0.04; // speed
    const singleWidth = scrollRef.current.scrollWidth / 2;
    if (Math.abs(xRef.current) >= singleWidth) {
      xRef.current = 0;
    }
    scrollRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex gap-6 will-change-transform" style={{ width: "max-content" }}>
        {duplicatedClients.map((client, i) => (
          <a
            key={`${client.name}-${i}`}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-4 rounded-2xl border-glow bg-card px-6 py-5 hover-lift min-w-[260px]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-sm font-bold">
              {client.initial}
            </div>
            <div>
              <div className="font-display text-sm font-bold text-card-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {client.name}
              </div>
              <div className="font-mono text-xs text-muted-foreground">{client.niche}</div>
            </div>
            <svg
              className="ml-3 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 font-display text-xl font-bold text-foreground">Creators I've Worked With</h3>
          <CreatorCarousel />
        </motion.div>
      </div>
    </section>
  );
}
