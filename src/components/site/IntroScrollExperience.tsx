import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import devmedoGif from "@/assets/devmedo.gif";

// Eagerly import all 48 frames sorted numerically
const frameImports = import.meta.glob<{ default: string }>(
  "@/assets/devmedo_scroll/ezgif-frame-*.jpg",
  { eager: true }
);

const frameUrls = Object.keys(frameImports)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => frameImports[path].default);

interface IntroScrollExperienceProps {
  onFinish?: (finished: boolean) => void;
}

export function IntroScrollExperience({ onFinish }: IntroScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gifCompleted, setGifCompleted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  // Master scroll tracking across the whole cinematic pinned journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Initial Prompt "scroll up" fades out early
  const promptOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // 2. 3D Canvas opacity (visible during frame scroll 0.0 -> 0.50, crossfades out at 0.58)
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.48, 0.56], [1, 1, 0]);

  // 3. DEVMEDO Text Phase (Appears from 0.52 -> 0.58, then splits apart from 0.62 -> 0.88)
  const devmedoContainerOpacity = useTransform(
    scrollYProgress,
    [0.50, 0.56, 0.86, 0.94],
    [0, 1, 1, 0]
  );

  // DEV moves UP & fades out
  const devY = useTransform(scrollYProgress, [0.62, 0.86], [0, -350]);
  const devOpacity = useTransform(scrollYProgress, [0.62, 0.84], [1, 0]);

  // DO moves DOWN & fades out
  const doY = useTransform(scrollYProgress, [0.62, 0.86], [0, 350]);
  const doOpacity = useTransform(scrollYProgress, [0.62, 0.84], [1, 0]);

  // ME zooms in (scale increases)
  const meScale = useTransform(scrollYProgress, [0.62, 0.88], [1, 3.8]);
  const meOpacity = useTransform(scrollYProgress, [0.72, 0.88], [1, 0]);

  // M splits to the LEFT
  const mX = useTransform(scrollYProgress, [0.62, 0.88], [0, -380]);

  // E splits to the RIGHT
  const eX = useTransform(scrollYProgress, [0.62, 0.88], [0, 380]);

  // Subtitle "Dream • Make • Deliver" fades out as split begins
  const subtitleOpacity = useTransform(scrollYProgress, [0.58, 0.72], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.58, 0.72], [0, 35]);

  // Preload all 48 frames into memory
  useEffect(() => {
    let loadedCount = 0;
    const total = frameUrls.length;
    const images: HTMLImageElement[] = [];

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === total) {
          loadedImagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images[i] = img;
    });
  }, []);

  // Timer for initial devmedo.gif playback (approx 2.8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setGifCompleted(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Frame rendering helper on full-screen canvas (COVER mode: fills 100% of the screen size)
  const renderFrameToCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const screenAspect = displayWidth / displayHeight;

    let renderWidth = displayWidth;
    let renderHeight = displayHeight;
    let offsetX = 0;
    let offsetY = 0;

    // OBJECT-COVER: Exact full-page coverage with zero letterboxing / zero borders
    if (screenAspect > imgAspect) {
      renderWidth = displayWidth;
      renderHeight = displayWidth / imgAspect;
      offsetX = 0;
      offsetY = (displayHeight - renderHeight) / 2;
    } else {
      renderHeight = displayHeight;
      renderWidth = displayHeight * imgAspect;
      offsetX = (displayWidth - renderWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  }, []);

  // Render active frame to canvas based on scroll position (mapped to first 50% of scroll track)
  useEffect(() => {
    if (!imagesLoaded) return;

    // Draw initial frame
    const firstImg = loadedImagesRef.current[0];
    if (firstImg) {
      renderFrameToCanvas(firstImg);
    }

    const handleResize = () => {
      const activeImg =
        loadedImagesRef.current[currentFrameRef.current] || loadedImagesRef.current[0];
      if (activeImg) renderFrameToCanvas(activeImg);
    };
    window.addEventListener("resize", handleResize);

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalFrames = frameUrls.length;

      // Map progress 0.0 -> 0.50 to the 48 animation frames
      const frameNormalized = Math.min(1, Math.max(0, latest / 0.50));
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(frameNormalized * totalFrames)
      );

      currentFrameRef.current = frameIndex;

      const targetImg = loadedImagesRef.current[frameIndex];
      if (targetImg && targetImg.complete) {
        renderFrameToCanvas(targetImg);
      }

      // When the split animation is concluding (progress >= 0.80), unlock & reveal next page
      const isNextPageReady = latest >= 0.78;
      onFinish?.(isNextPageReady);
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, scrollYProgress, renderFrameToCanvas, onFinish]);

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

      {/* 2. Pinned Scroll Journey: 3D Frames -> DEVMEDO Split Explosion -> Next Page */}
      <div ref={containerRef} className="relative h-[480vh] w-full bg-[#07060a]">
        <div className="sticky top-0 h-screen w-screen overflow-hidden bg-[#07060a] flex items-center justify-center">
          {/* Full Screen Edge-to-Edge 3D Canvas */}
          <motion.canvas
            ref={canvasRef}
            style={{ opacity: canvasOpacity }}
            className="absolute inset-0 w-full h-full block pointer-events-none"
          />

          {/* Initial Prompt: 'scroll up' (fades out as scrolling begins) */}
          <motion.div
            style={{ opacity: promptOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none select-none"
          >
            <span className="text-xs font-mono tracking-[0.25em] text-white/75 uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              scroll up
            </span>
            <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
          </motion.div>

          {/* DEVMEDO Morph & Explosion Stage */}
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
