import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import {
  ShoppingBag,
  Globe,
  Sparkles,
  Smartphone,
  Briefcase,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import cardFrontImg from "@/assets/card.png";

interface ServiceCard {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string;
  icon: typeof Globe;
}

const services: ServiceCard[] = [
  {
    id: "ecommerce",
    num: "01",
    category: "STORE & COMMERCE",
    title: "E-commerce Platform",
    tagline: "High-Converting Custom Digital Storefronts",
    description:
      "Bespoke e-commerce architectures with lightning-fast checkout flows, real-time inventory management, payment gateways, and custom cart experiences engineered to maximize conversion rates.",
    features: [
      "Stripe, Razorpay & Multi-Currency Payments",
      "Real-Time Inventory & Order Sync",
      "Sub-Second Search & Instant Filter UX",
      "Custom Admin Dashboard & Sales Analytics",
    ],
    badge: "HIGH CONVERSION",
    icon: ShoppingBag,
  },
  {
    id: "websites",
    num: "02",
    category: "WEB CRAFT",
    title: "Basic & Premium Website",
    tagline: "From High-Impact Landing Pages to Enterprise Portals",
    description:
      "Engineered with clean, bespoke code and modern responsive design. Fast-loading, SEO-optimized business websites that establish instant credibility and captivate your audience.",
    features: [
      "Zero-Bloat Next.js & React Architecture",
      "100/100 Google Core Web Vitals & Speed",
      "Custom Micro-Interactions & Fluid Motion",
      "Full On-Page Technical SEO & Analytics",
    ],
    badge: "LIGHTNING SPEED",
    icon: Globe,
  },
  {
    id: "ai-website",
    num: "03",
    category: "INTELLIGENCE",
    title: "AI-Integrated Website",
    tagline: "Next-Gen Web Apps with Custom AI Workflows",
    description:
      "Transform your web presence with integrated LLM copilots, automated customer response bots, semantic RAG search over your company data, and intelligent self-optimizing pipelines.",
    features: [
      "Custom AI Chatbots & Contextual Copilots",
      "Vector Embeddings & Semantic Search",
      "Automated Lead Scoring & Inquiries Triage",
      "OpenAI, Claude & Gemini API Pipelines",
    ],
    badge: "INTELLIGENT AI",
    icon: Sparkles,
  },
  {
    id: "mobile-app",
    num: "04",
    category: "MOBILE ECOSYSTEM",
    title: "Android & iOS App",
    tagline: "Fluid 60FPS Native & Cross-Platform Apps",
    description:
      "Beautiful, high-performance mobile applications engineered with native capabilities, tactile gestures, offline caching, push notifications, and seamless App Store & Play Store deployment.",
    features: [
      "React Native & Flutter 60FPS Performance",
      "Biometric Login & Secure Token Storage",
      "Real-Time Push Notifications & Background Sync",
      "End-to-End App Store & Play Store Launch",
    ],
    badge: "FLUID 60FPS",
    icon: Smartphone,
  },
  {
    id: "portfolio",
    num: "05",
    category: "SHOWCASE & IDENTITY",
    title: "Portfolio Website",
    tagline: "Award-Worthy Showcases for Creators & Studios",
    description:
      "Distinctive, visually arresting portfolio experiences with liquid glass aesthetics, interactive case studies, custom typography, and dynamic animations that leave an unforgettable impression.",
    features: [
      "Award-Grade Visual Identity & Layouts",
      "Dynamic Case Study Filtering & Deep Dives",
      "Smooth 3D Perspective & Motion Physics",
      "Custom Dark/Light Modes & Audio Haptics",
    ],
    badge: "AWARD-WINNING",
    icon: Briefcase,
  },
  {
    id: "automation",
    num: "06",
    category: "WORKFLOW & SCALE",
    title: "Business Automation",
    tagline: "Zero Manual Overhead with Custom Pipelines",
    description:
      "Intelligent WhatsApp and email bots, webhook pipelines, automated billing, and CRM synchronization that run silently in the background and eliminate hundreds of manual hours every week.",
    features: [
      "WhatsApp & Telegram Workflow Bots",
      "Automated Invoicing, Receipts & PDF Reports",
      "Multi-System Webhook & Database Sync",
      "100+ Hours Saved Weekly Across Operations",
    ],
    badge: "ZERO OVERHEAD",
    icon: Cpu,
  },
];

// Single scrollable luxury card with crisp readable text & butter-smooth 3D flip & zoom
function LuxuryScrollCard({
  service,
  index,
  smoothProgress,
  stepX,
  onCardClick,
}: {
  service: ServiceCard;
  index: number;
  smoothProgress: MotionValue<number>;
  stepX: number;
  onCardClick: () => void;
}) {
  // Time windows for 6 cards over [0.03, 0.97]
  const cardCount = 6;
  const startOffset = 0.03;
  const endOffset = 0.97;
  const totalSpan = endOffset - startOffset;
  const spanPerCard = totalSpan / cardCount;

  const cardStart = startOffset + index * spanPerCard;
  // Slower, more leisurely flip in and longer reading window
  const p1 = cardStart + spanPerCard * 0.28; // Zoom in & flip completion
  const p2 = cardStart + spanPerCard * 0.72; // Generous reading window before starting flip back
  const cardEnd = cardStart + spanPerCard; // Back to base in row

  // Distance from row center: index 0 -> -2.5, 1 -> -1.5, 2 -> -0.5, 3 -> +0.5, 4 -> +1.5, 5 -> +2.5
  const centerMultiplier = index - (cardCount - 1) / 2;
  const targetTranslateX = -centerMultiplier * stepX;

  // 1. 3D Flip (rotateY: 0deg -> 180deg -> 0deg)
  const rotateY = useTransform(
    smoothProgress,
    [0, cardStart, p1, p2, cardEnd, 1],
    [0, 0, 180, 180, 0, 0]
  );

  // 2. Zoom Scale (1.0 -> 1.85 -> 1.0)
  const scale = useTransform(
    smoothProgress,
    [0, cardStart, p1, p2, cardEnd, 1],
    [1, 1, 1.85, 1.85, 1, 1]
  );

  // 3. Center X translation
  const x = useTransform(
    smoothProgress,
    [0, cardStart, p1, p2, cardEnd, 1],
    [0, 0, targetTranslateX, targetTranslateX, 0, 0]
  );

  // 4. Subtle Y lift when zoomed
  const y = useTransform(
    smoothProgress,
    [0, cardStart, p1, p2, cardEnd, 1],
    [0, 0, -10, -10, 0, 0]
  );

  // 5. Z-Index boost during zoom
  const zIndex = useTransform(
    smoothProgress,
    [0, cardStart - 0.003, cardStart, cardEnd, cardEnd + 0.003, 1],
    [10, 10, 50, 50, 10, 10]
  );

  // 6. Glow intensity
  const shadowGlow = useTransform(
    smoothProgress,
    [0, cardStart, p1, p2, cardEnd, 1],
    [
      "0 15px 35px -10px rgba(0,0,0,0.9)",
      "0 15px 35px -10px rgba(0,0,0,0.9)",
      "0 35px 90px -10px rgba(168,85,247,0.7)",
      "0 35px 90px -10px rgba(168,85,247,0.7)",
      "0 15px 35px -10px rgba(0,0,0,0.9)",
      "0 15px 35px -10px rgba(0,0,0,0.9)",
    ]
  );

  const Icon = service.icon;

  return (
    <motion.div
      style={{
        zIndex,
        perspective: 1600,
      }}
      className="relative flex-shrink-0 select-none"
    >
      <motion.div
        onClick={onCardClick}
        style={{
          x,
          y,
          scale,
          rotateY,
          boxShadow: shadowGlow,
          transformStyle: "preserve-3d",
        }}
        className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[195px] xl:w-[220px] 2xl:w-[245px] aspect-[1/1.52] rounded-[22px] sm:rounded-[26px] cursor-pointer will-change-transform"
      >
        {/* ================= CARD FRONT FACE ================= */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0c0915] border border-purple-500/40 shadow-xl"
        >
          {/* Authentic DevMeDo Playing Card Graphic */}
          <img
            src={cardFrontImg}
            alt={`DevMeDo Card - ${service.title}`}
            className="w-full h-full object-cover object-center pointer-events-none select-none"
            loading="eager"
          />

          {/* Liquid Shine Sweep */}
          <div className="liquid-shine-sweep opacity-35" />

          {/* Specular Ambient Edge Highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[22px] sm:rounded-[26px] border border-white/25 [mask-image:linear-gradient(to_bottom,white,transparent_60%)]" />

          {/* Minimalist Top Indicator */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none z-10">
            <span className="font-mono text-[8.5px] sm:text-[9.5px] font-bold text-purple-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-purple-500/30">
              {service.num}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
          </div>
        </div>

        {/* ================= CARD BACK FACE (CRISP TEXT & RICH DETAILS) ================= */}
        <div
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 w-full h-full rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-[#080512] border-2 border-purple-400/80 shadow-[inset_0_0_35px_rgba(168,85,247,0.35)] text-left"
        >
          {/* Inner Ornate Filigree Border & Glow */}
          <div className="absolute inset-1.5 rounded-[18px] sm:rounded-[22px] border border-purple-400/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.25)_0%,rgba(124,58,237,0.08)_55%,transparent_85%)] pointer-events-none" />

          {/* Corner Art Deco Accents */}
          <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

          {/* Top Section: Header & Title */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-900/80 border border-purple-400/50 flex items-center justify-center text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.45)]">
                <Icon className="w-4 h-4 text-purple-300" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-purple-200 bg-purple-950/90 px-2.5 py-0.5 rounded-full border border-purple-500/50">
                {service.num} // SPEC
              </span>
            </div>

            <div>
              <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#c084fc] font-bold block">
                {service.category}
              </span>
              <h4 className="text-sm sm:text-base font-black font-display uppercase tracking-tight text-white leading-tight mt-0.5">
                {service.title}
              </h4>
            </div>

            <p className="text-[9.5px] sm:text-[10.5px] text-zinc-300 leading-relaxed font-normal antialiased line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="relative z-10 space-y-1.5 my-auto py-1">
            {service.features.slice(0, 3).map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-1.5 text-[9px] sm:text-[10px] text-zinc-100 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug antialiased line-clamp-1">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer */}
          <div className="relative z-10 pt-2 border-t border-purple-500/30 flex items-center justify-between">
            <span className="text-[8px] sm:text-[9px] font-mono text-purple-300 uppercase tracking-wider font-bold">
              {service.badge}
            </span>
            <a
              href="#contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white text-black hover:bg-purple-300 hover:text-black px-2.5 py-1 rounded transition-colors shadow-sm"
            >
              Order <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WhatWeProvide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [stepX, setStepX] = useState(220);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Track scroll through the pinned container with generous height for slower scroll travel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky smooth, relaxed spring physics for a slow and controllable scroll pace
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 26,
    mass: 0.22,
    restDelta: 0.0001,
  });

  // Calculate dynamic card step distance on window resize
  useEffect(() => {
    const updateStep = () => {
      if (rowRef.current) {
        const cards = rowRef.current.children;
        if (cards.length >= 2) {
          const first = cards[0]?.getBoundingClientRect();
          const second = cards[1]?.getBoundingClientRect();
          if (first && second) {
            setStepX(Math.abs(second.left - first.left));
          }
        }
      }
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  // Track which card is currently active for bottom indicators
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const startOffset = 0.03;
      const endOffset = 0.97;
      const totalSpan = endOffset - startOffset;
      const spanPerCard = totalSpan / 6;

      if (v < startOffset) {
        setActiveCardIndex(0);
      } else if (v >= endOffset) {
        setActiveCardIndex(5);
      } else {
        const idx = Math.floor((v - startOffset) / spanPerCard);
        setActiveCardIndex(Math.min(5, Math.max(0, idx)));
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  // Scroll smoothly to a specific card's zoom window
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const startOffset = 0.03;
    const endOffset = 0.97;
    const totalSpan = endOffset - startOffset;
    const spanPerCard = totalSpan / 6;
    const targetProgress = startOffset + index * spanPerCard + spanPerCard * 0.5;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + containerHeight * targetProgress;

    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  // Header and prompt opacities
  const headerOpacity = useTransform(smoothProgress, [0, 0.03, 0.95, 1], [1, 0.85, 0.85, 1]);
  const promptOpacity = useTransform(smoothProgress, [0, 0.06], [1, 0]);

  return (
    <section
      id="provide"
      ref={containerRef}
      className="relative h-[1100vh] w-full bg-[#050408] text-white"
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center py-8 sm:py-10 px-4">
        {/* Background Dark Matte Luxury Leather Texture & Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,15,38,0.92)_0%,rgba(5,4,8,1)_80%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14)_0%,rgba(124,58,237,0.04)_50%,transparent_75%)] blur-3xl pointer-events-none" />

        {/* 1. Minimal Clean Section Header */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-20 text-center select-none"
        >
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#c084fc] block mb-1">
            WHAT WE PROVIDE
          </span>
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white">
            SIX CORE DISCIPLINES
          </h2>
        </motion.div>

        {/* 2. Central 6 Luxury Cards Lineup (Matching Uploaded Image) */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto flex items-center justify-center my-auto overflow-visible">
          <div
            ref={rowRef}
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 overflow-visible"
          >
            {services.map((service, index) => (
              <LuxuryScrollCard
                key={service.id}
                service={service}
                index={index}
                smoothProgress={smoothProgress}
                stepX={stepX}
                onCardClick={() => scrollToCard(index)}
              />
            ))}
          </div>
        </div>

        {/* 3. Bottom Minimalist Indicator & Navigation Dots */}
        <div className="relative z-20 flex flex-col items-center gap-3 select-none">
          {/* Scroll Down Prompt */}
          <motion.div
            style={{ opacity: promptOpacity }}
            className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px] tracking-widest uppercase pointer-events-none"
          >
            <span>Scroll to flip cards</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-purple-400" />
          </motion.div>

          {/* 6 Step Progress Dots */}
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-500/30">
            {services.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToCard(idx)}
                aria-label={`Jump to ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx
                    ? "w-7 bg-gradient-to-r from-[#c084fc] to-[#a855f7] shadow-[0_0_8px_#c084fc]"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
