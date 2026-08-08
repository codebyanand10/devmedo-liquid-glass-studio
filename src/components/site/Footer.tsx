export function Footer() {
  return (
    <footer className="relative px-4 pb-10">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl px-7 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          <span className="font-display font-bold text-foreground">
            Dev<span className="text-gradient">MeDo</span>
          </span>{" "}
          — AI-native product studio
        </p>
        <p>© {new Date().getFullYear()} DevMeDo. All rights reserved.</p>
      </div>
    </footer>
  );
}
