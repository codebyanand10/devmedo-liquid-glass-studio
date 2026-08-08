import { motion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shine, setShine] = useState({ x: 50, y: 50, on: false });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setShine({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    });
  };

  const handlePointerLeave = () => {
    setShine((s) => ({ ...s, on: false }));
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`apple-liquid-glass relative overflow-hidden rounded-[32px] p-6 sm:p-8 ${className}`}
    >
      {/* 1. Ambient Liquid Sheen Wave */}
      <div className="liquid-shine-sweep" />

      {/* 2. Interactive Liquid Spotlight Lens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
        style={{
          opacity: shine.on ? 1 : 0,
          background: `radial-gradient(400px circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.22), rgba(192, 132, 252, 0.12) 35%, transparent 65%)`,
        }}
      />

      {/* 3. Liquid Bevel Highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/30 [mask-image:linear-gradient(to_bottom,white,transparent_70%)]"
      />

      {/* 4. Pod Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
