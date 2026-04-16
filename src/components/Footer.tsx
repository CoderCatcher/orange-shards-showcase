export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="flex items-center gap-2 font-display text-sm font-bold tracking-tight text-foreground">
          <svg viewBox="0 0 36 36" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="M10 6 L18 16 L26 6 L22 6 L18 12 L14 6 Z" fill="currentColor" />
            <path d="M16 14 L16 28 L20 28 L20 14 Z" fill="currentColor" />
            <path d="M14 20 L14 30 L26 25 Z" fill="#FF5F1F" opacity="0.95" />
          </svg>
          YASH JAIN
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Video Editor & Motion Designer
        </span>
      </div>
    </footer>
  );
}
