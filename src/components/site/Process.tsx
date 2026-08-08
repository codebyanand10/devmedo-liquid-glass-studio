import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We map goals, users and constraints, then scope a build that hits the shortest path to value.",
  },
  {
    n: "02",
    title: "Design",
    body: "Design systems and prototypes first — so you see and feel the product before code hardens.",
  },
  {
    n: "03",
    title: "Development",
    body: "AI-assisted sprints with weekly demos, typed code, tests and continuous preview builds.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Store submissions, deployment pipelines, analytics and performance tuning for day one.",
  },
  {
    n: "05",
    title: "Support",
    body: "Ongoing iteration, monitoring and feature work with a retainer that scales with you.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Process
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            From first call to long-term partner
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
          <div className="absolute left-[13px] top-0 h-full w-px bg-white/10 sm:left-[27px]" />
          <motion.div
            style={{ height, background: "var(--gradient-brand)" }}
            className="absolute left-[13px] top-0 w-px sm:left-[27px]"
          />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="glass relative rounded-3xl p-6 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="absolute -left-10 top-7 grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[11px] font-bold text-background sm:-left-16">
                  {s.n}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
