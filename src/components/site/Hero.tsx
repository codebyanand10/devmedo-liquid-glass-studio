import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDevices from "@/assets/hero-devices.png";
import { useReducedMotion } from "@/hooks/use-motion-prefs";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center px-4 pb-20 pt-36"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            AI-native product studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            We Build Digital Products,{" "}
            <span className="text-gradient">Powered by AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            DevMeDo designs and ships websites, web apps, Android and iOS apps with
            AI-assisted development — the craft of a boutique studio at the speed of a
            machine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="glow-ring group inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="glass glow-ring inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore services
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["Web", "Web Apps", "Android", "iOS"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[image:var(--gradient-brand)]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div
            animate={reduced ? { y: 0 } : { y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass rounded-3xl p-4 sm:p-6"
          >
            <img
              src={heroDevices}
              alt="DevMeDo product interfaces on a laptop and smartphone"
              width={1200}
              height={912}
              className="w-full rounded-2xl"
            />
          </motion.div>
          <div className="glass absolute -bottom-6 left-4 rounded-2xl px-4 py-3 text-xs sm:left-8">
            <p className="font-display text-lg font-bold text-gradient">4x</p>
            <p className="text-muted-foreground">faster delivery</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
