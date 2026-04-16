import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32 bg-surface">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">Let's Work</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to elevate<br />
            <span className="text-gradient-orange">your content?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Open for long-term and short-term projects. Flexible with different niches and workflows. Let's create something that keeps viewers watching.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="mailto:yashjain.vis@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-orange"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            yashjain.vis@gmail.com
          </a>
          <a
            href="tel:+918274025192"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 827 402 5192
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://ytjobs.co/talent/profile/483793?r=806&t=np&utm_campaign=share-new-profile&utm_ref="
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View YTJobs Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
