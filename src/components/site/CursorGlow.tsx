import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import { useIsDesktop, useReducedMotion } from "@/hooks/use-motion-prefs";

export function CursorGlow() {
  const desktop = useIsDesktop();
  const reduced = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (!desktop || reduced) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - 220);
      y.set(e.clientY - 220);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [desktop, reduced, x, y]);

  if (!desktop || reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, oklch(0.78 0.16 220 / 22%), transparent 65%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-30 h-[440px] w-[440px] rounded-full blur-2xl"
    />
  );
}
