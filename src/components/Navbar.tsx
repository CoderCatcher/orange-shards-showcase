import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          {/* Y + Play button geometric symbol */}
          <div className="relative flex h-9 w-9 items-center justify-center">
            <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
              {/* Outer glow */}
              <defs>
                <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Y shape merged with play arrow */}
              <path
                d="M10 6 L18 16 L26 6 L22 6 L18 12 L14 6 Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
                filter="url(#orangeGlow)"
              />
              <path
                d="M16 14 L16 28 L20 28 L20 14 Z"
                fill="white"
                filter="url(#orangeGlow)"
              />
              {/* Play triangle overlay */}
              <path
                d="M14 20 L14 30 L26 25 Z"
                fill="#FF5F1F"
                filter="url(#orangeGlow)"
                opacity="0.95"
              />
            </svg>
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-foreground leading-tight">
            YASH JAIN<br />
            <span className="text-[0.6rem] font-medium tracking-[0.15em] text-muted-foreground">PORTFOLIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:yashjain.vis@gmail.com"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-orange"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-all ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-all ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-full bg-background/95 backdrop-blur-xl border-b border-border p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-lg text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:yashjain.vis@gmail.com"
                className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
