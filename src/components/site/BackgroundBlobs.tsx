import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/hooks/use-motion-prefs";

const blobs = [
  {
    className: "left-[-15%] top-[-10%] h-[42rem] w-[42rem]",
    color: "oklch(0.62 0.2 265 / 55%)",
    speed: -160,
    delay: "0s",
    duration: "26s",
  },
  {
    className: "right-[-18%] top-[18%] h-[38rem] w-[38rem]",
    color: "oklch(0.66 0.19 305 / 48%)",
    speed: -320,
    delay: "-6s",
    duration: "32s",
  },
  {
    className: "left-[20%] top-[55%] h-[36rem] w-[36rem]",
    color: "oklch(0.72 0.15 195 / 42%)",
    speed: -520,
    delay: "-12s",
    duration: "38s",
  },
  {
    className: "right-[5%] top-[80%] h-[34rem] w-[34rem]",
    color: "oklch(0.6 0.19 285 / 45%)",
    speed: -700,
    delay: "-18s",
    duration: "30s",
  },
];

export function BackgroundBlobs() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      {blobs.map((blob, i) => (
        <Blob key={i} blob={blob} progress={scrollYProgress} reduced={reduced} />
      ))}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />
    </div>
  );
}

function Blob({
  blob,
  progress,
  reduced,
}: {
  blob: (typeof blobs)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const y = useTransform(progress, [0, 1], [0, reduced ? 0 : blob.speed]);
  return (
    <motion.div
      style={{
        y,
        background: `radial-gradient(circle at 30% 30%, ${blob.color}, transparent 68%)`,
        animationDelay: blob.delay,
        animationDuration: blob.duration,
        filter: "blur(60px)",
      }}
      className={`absolute rounded-full will-change-transform [animation-name:blob-drift] [animation-iteration-count:infinite] [animation-timing-function:ease-in-out] ${blob.className}`}
    />
  );
}
