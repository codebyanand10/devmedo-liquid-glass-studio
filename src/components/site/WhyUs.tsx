import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Bot, Gauge, ShieldCheck, Users } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { GlassCard } from "./GlassCard";

const stats = [
  { value: 140, suffix: "+", label: "Projects delivered" },
  { value: 45, suffix: "+", label: "Technologies used" },
  { value: 4, suffix: "x", label: "Faster time to launch" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const pillars = [
  {
    icon: Bot,
    title: "AI-assisted engineering",
    body: "Copilots handle scaffolding, tests and refactors while our engineers own architecture and judgement.",
  },
  {
    icon: Gauge,
    title: "Weeks, not quarters",
    body: "Working software in your hands from week one, iterated in tight feedback loops.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade quality",
    body: "Typed codebases, automated testing, accessibility and performance budgets by default.",
  },
  {
    icon: Users,
    title: "Senior-only team",
    body: "You work directly with the people writing the code — no handoffs, no account layers.",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section id="why" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
              Why DevMeDo
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              An AI-native way of building software
            </h2>
            <p className="mt-4 text-muted-foreground">
              We pair experienced product engineers with AI tooling across the whole
              lifecycle — research, design systems, code, QA and release. The result is
              less busywork, more craft, and products that reach real users far sooner.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem key={p.title}>
                <GlassCard className="h-full p-6">
                  <p.icon className="h-6 w-6 text-cyan" />
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
