import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

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
          <div className="relative flex h-9 w-9 items-center justify-center">
            <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9" aria-hidden="true">
              <defs>
                <filter id="orangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M10 6 L18 16 L26 6 L22 6 L18 12 L14 6 Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                filter="url(#orangeGlow)"
              />
              <path
                d="M16 14 L16 28 L20 28 L20 14 Z"
                fill="currentColor"
                filter="url(#orangeGlow)"
              />
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

          {/* Dark/Light toggle */}
          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary hover:border-primary"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="mailto:yashjain.vis@gmail.com"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-orange"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
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
