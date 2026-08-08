import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import devmedoGif from "@/assets/devmedo.gif";

interface IntroScrollExperienceProps {
  onFinish?: (finished: boolean) => void;
}

export function IntroScrollExperience({ onFinish }: IntroScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gifCompleted, setGifCompleted] = useState(false);

  // Master scroll tracking across the DEVMEDO split & reveal sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Prompt "scroll up" fades out early
  const promptOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Overall DEVMEDO container opacity
  const devmedoContainerOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  // DEV moves UP & fades out
  const devY = useTransform(scrollYProgress, [0.1, 0.75], [0, -350]);
  const devOpacity = useTransform(scrollYProgress, [0.1, 0.7], [1, 0]);

  // DO moves DOWN & fades out
  const doY = useTransform(scrollYProgress, [0.1, 0.75], [0, 350]);
  const doOpacity = useTransform(scrollYProgress, [0.1, 0.7], [1, 0]);

  // ME zooms in (scale increases)
  const meScale = useTransform(scrollYProgress, [0.1, 0.8], [1, 4]);
  const meOpacity = useTransform(scrollYProgress, [0.35, 0.8], [1, 0]);

  // M splits to the LEFT
  const mX = useTransform(scrollYProgress, [0.1, 0.8], [0, -380]);

  // E splits to the RIGHT
  const eX = useTransform(scrollYProgress, [0.1, 0.8], [0, 380]);

  // Subtitle "Dream • Make • Deliver" fades out as scrolling begins
  const subtitleOpacity = useTransform(scrollYProgress, [0.05, 0.45], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.05, 0.45], [0, 35]);

  // Timer for initial devmedo.gif playback (approx 2.8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setGifCompleted(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll progression to unlock & fade in next page
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const isNextPageReady = latest >= 0.65;
      onFinish?.(isNextPageReady);
    });

    return () => unsubscribe();
  }, [scrollYProgress, onFinish]);

  return (
    <div className="relative w-full bg-[#07060a]">
      {/* 1. Full-screen GIF Intro */}
      <AnimatePresence>
        {!gifCompleted && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] w-screen h-screen bg-[#07060a] overflow-hidden"
          >
            <img
              src={devmedoGif}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Pinned Scroll Sequence: DEVMEDO (Dream • Make • Deliver) -> Split Explosion -> Next Page */}
      <div ref={containerRef} className="relative h-[260vh] w-full bg-[#07060a]">
        <div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#07060a] flex items-center justify-center">
          {/* Prompt: 'scroll up' */}
          <motion.div
            style={{ opacity: promptOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none"
          >
            <span className="text-xs font-mono tracking-[0.25em] text-white/75 uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              scroll up
            </span>
            <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
          </motion.div>

          {/* DEVMEDO Typography & Morph Explosion */}
          <motion.div
            style={{ opacity: devmedoContainerOpacity }}
            className="relative z-30 flex flex-col items-center justify-center text-center px-4 select-none pointer-events-none"
          >
            {/* Massive Split Syllable DEVMEDO */}
            <div className="font-display font-black text-6xl sm:text-8xl md:text-[13vw] tracking-tighter uppercase leading-none flex items-center justify-center">
              {/* DEV moves UP */}
              <motion.span
                style={{ y: devY, opacity: devOpacity }}
                className="inline-block text-white"
              >
                DEV
              </motion.span>

              {/* ME zooms in: M moves LEFT, E moves RIGHT */}
              <div className="inline-flex items-center">
                <motion.span
                  style={{
                    scale: meScale,
                    x: mX,
                    opacity: meOpacity,
                  }}
                  className="inline-block text-[#c084fc] drop-shadow-[0_0_40px_rgba(192,132,252,0.6)] origin-right"
                >
                  M
                </motion.span>
                <motion.span
                  style={{
                    scale: meScale,
                    x: eX,
                    opacity: meOpacity,
                  }}
                  className="inline-block text-[#a855f7] drop-shadow-[0_0_40px_rgba(168,85,247,0.6)] origin-left"
                >
                  E
                </motion.span>
              </div>

              {/* DO moves DOWN */}
              <motion.span
                style={{ y: doY, opacity: doOpacity }}
                className="inline-block text-white"
              >
                DO
              </motion.span>
            </div>

            {/* Subtitle: Dream • Make • Deliver */}
            <motion.p
              style={{ opacity: subtitleOpacity, y: subtitleY }}
              className="mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-mono font-semibold tracking-[0.3em] uppercase text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Dream • Make • Deliver
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
