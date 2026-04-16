export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-display text-sm font-bold tracking-tight text-foreground">
          YASH<span className="text-gradient-orange">JAIN</span>
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Video Editor & Motion Designer
        </span>
      </div>
    </footer>
  );
}
