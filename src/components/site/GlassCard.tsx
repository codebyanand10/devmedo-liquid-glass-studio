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

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setShine({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
          on: true,
        });
      }}
      onPointerLeave={() => setShine((s) => ({ ...s, on: false }))}
      whileHover={{ scale: 1.025, y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`glass glow-ring relative overflow-hidden rounded-3xl ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: shine.on ? 1 : 0,
          background: `radial-gradient(340px circle at ${shine.x}% ${shine.y}%, oklch(1 0 0 / 12%), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
