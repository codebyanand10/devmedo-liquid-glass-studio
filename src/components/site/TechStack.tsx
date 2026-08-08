import { Reveal } from "./Reveal";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Flutter",
  "Kotlin",
  "Swift",
  "SwiftUI",
  "React Native",
  "PostgreSQL",
  "Supabase",
  "OpenAI",
  "LangChain",
  "Vercel",
  "AWS",
];

export function TechStack() {
  return (
    <section id="stack" className="relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Tech stack
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Tools we know inside out
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="glass relative overflow-hidden rounded-3xl py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
            <div className="marquee-track flex w-max gap-4">
              {[...tech, ...tech].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="whitespace-nowrap rounded-2xl border border-glass-border bg-white/5 px-5 py-3 text-sm font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
