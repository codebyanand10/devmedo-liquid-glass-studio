import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  ShoppingBag,
  Globe,
  Sparkles,
  Smartphone,
  Briefcase,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  RotateCw,
  X,
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
    tagline: "High-Converting Custom Storefronts",
    description:
      "Bespoke e-commerce architectures with lightning-fast checkout flows, real-time inventory management, payment gateways, and custom cart experiences engineered to maximize conversion rates.",
    features: [
      "Stripe, Razorpay & Multi-Currency",
      "Real-Time Inventory & Order Sync",
      "Sub-Second Search & Instant Filter UX",
      "Custom Dashboard & Sales Analytics",
    ],
    badge: "HIGH CONVERSION",
    icon: ShoppingBag,
  },
  {
    id: "websites",
    num: "02",
    category: "WEB CRAFT",
    title: "Basic & Premium Website",
    tagline: "High-Impact Sites & Enterprise Portals",
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
    tagline: "Next-Gen Web Apps with Custom AI",
    description:
      "Transform your web presence with integrated LLM copilots, automated customer response bots, semantic RAG search over your company data, and intelligent self-optimizing pipelines.",
    features: [
      "Custom AI Chatbots & Copilots",
      "Vector Embeddings & Semantic Search",
      "Automated Inquiries Triage",
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
    tagline: "Fluid 60FPS Native & Cross-Platform",
    description:
      "Beautiful, high-performance mobile applications engineered with native capabilities, tactile gestures, offline caching, push notifications, and seamless App Store & Play Store deployment.",
    features: [
      "React Native & Flutter 60FPS Speed",
      "Biometric Login & Secure Storage",
      "Real-Time Push Notifications & Sync",
      "App Store & Play Store Launch",
    ],
    badge: "FLUID 60FPS",
    icon: Smartphone,
  },
  {
    id: "portfolio",
    num: "05",
    category: "SHOWCASE & IDENTITY",
    title: "Portfolio Website",
    tagline: "Award-Worthy Showcases for Creators",
    description:
      "Distinctive, visually arresting portfolio experiences with liquid glass aesthetics, interactive case studies, custom typography, and dynamic animations that leave an unforgettable impression.",
    features: [
      "Award-Grade Visual Identity & Layouts",
      "Dynamic Case Study Filtering",
      "Smooth 3D Perspective & Motion",
      "Custom Dark/Light Modes & Aesthetics",
    ],
    badge: "AWARD-WINNING",
    icon: Briefcase,
  },
  {
    id: "automation",
    num: "06",
    category: "WORKFLOW & SCALE",
    title: "Business Automation",
    tagline: "Zero Manual Overhead with Pipelines",
    description:
      "Intelligent WhatsApp and email bots, webhook pipelines, automated billing, and CRM synchronization that run silently in the background and eliminate hundreds of manual hours every week.",
    features: [
      "WhatsApp & Telegram Workflow Bots",
      "Automated Invoicing & PDF Reports",
      "Multi-System Webhook & DB Sync",
      "100+ Hours Saved Weekly Across Ops",
    ],
    badge: "ZERO OVERHEAD",
    icon: Cpu,
  },
];

function HoverFlipCard({
  service,
  index,
}: {
  service: ServiceCard;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setMouseTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setIsFlipped(false);
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  const toggleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const Icon = service.icon;

  return (
    <div
      style={{ perspective: "1400px" }}
      className={`w-full flex items-center justify-center select-none transition-all duration-300 ${
        isFlipped ? "z-40 relative" : "z-10 relative"
      }`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleClick}
        animate={{
          rotateY: isFlipped ? 180 : mouseTilt.y,
          rotateX: isFlipped ? 0 : mouseTilt.x,
          scale: isFlipped ? 1.38 : 1,
          y: isFlipped ? -12 : 0,
        }}
        transition={{
          rotateY: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
          scale: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
          y: { duration: 0.35, ease: "easeOut" },
          rotateX: { duration: 0.15, ease: "easeOut" },
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full max-w-[245px] aspect-[1/1.52] rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] cursor-pointer will-change-transform ${
          isFlipped
            ? "shadow-[0_30px_90px_-10px_rgba(168,85,247,0.75),0_0_40px_rgba(168,85,247,0.45)]"
            : "shadow-[0_15px_35px_-10px_rgba(0,0,0,0.9)]"
        }`}
      >
        {/* ================= CARD FRONT FACE ================= */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 w-full h-full rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] overflow-hidden bg-[#0c0915] border border-purple-500/40 shadow-xl"
        >
          {/* Authentic DevMeDo Playing Card Graphic */}
          <img
            src={cardFrontImg}
            alt={`DevMeDo Card - ${service.title}`}
            className="w-full h-full object-cover object-center pointer-events-none select-none block"
            loading="eager"
          />

          {/* Dynamic Liquid Shine Sweep */}
          <div className="liquid-shine-sweep opacity-35 group-hover:opacity-75 transition-opacity" />

          {/* Specular Ambient Edge Highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] border border-white/25 [mask-image:linear-gradient(to_bottom,white,transparent_60%)]" />

          {/* Top Indicator */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none z-10">
            <span className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-purple-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-purple-500/30">
              {service.num}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
          </div>

          {/* Bottom Hover Hint */}
          <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-center pointer-events-none z-10">
            <span className="font-mono text-[8px] sm:text-[9px] font-semibold text-purple-200/90 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/30 flex items-center gap-1">
              <RotateCw className="w-2.5 h-2.5 text-purple-400" />
              Hover to Flip
            </span>
          </div>
        </div>

        {/* ================= CARD BACK FACE (ZOOMED WITH CLOSE BUTTON) ================= */}
        <div
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 w-full h-full rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] p-3.5 sm:p-4.5 lg:p-5 flex flex-col justify-between overflow-hidden bg-[#080512] border-2 border-purple-400/90 shadow-[inset_0_0_35px_rgba(168,85,247,0.4)] text-left"
        >
          {/* Inner Ornate Filigree Border & Glow */}
          <div className="absolute inset-1.5 rounded-[14px] sm:rounded-[18px] lg:rounded-[22px] border border-purple-400/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.3)_0%,rgba(124,58,237,0.1)_55%,transparent_85%)] pointer-events-none" />

          {/* Corner Art Deco Accents */}
          <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400 pointer-events-none" />

          {/* Top Section: Icon, Badge & Close Button */}
          <div className="relative z-20 space-y-1 sm:space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-900/80 border border-purple-400/50 flex items-center justify-center text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.45)]">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
                </div>
                <span className="font-mono text-[7.5px] sm:text-[8.5px] font-bold tracking-widest text-purple-200 bg-purple-950/90 px-2 py-0.5 rounded-full border border-purple-500/50">
                  {service.num}
                </span>
              </div>

              {/* Close Button on Top-Right */}
              <button
                onClick={handleClose}
                aria-label="Close card"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 hover:bg-purple-950 border border-purple-400/60 hover:border-purple-300 text-purple-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md hover:scale-110 cursor-pointer pointer-events-auto"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <span className="text-[7px] sm:text-[7.5px] lg:text-[8px] font-mono uppercase tracking-widest text-[#c084fc] font-bold block">
                {service.category}
              </span>
              <h4 className="text-[11px] sm:text-xs lg:text-sm font-black font-display uppercase tracking-tight text-white leading-tight mt-0.5">
                {service.title}
              </h4>
            </div>

            <p className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] text-zinc-200 leading-relaxed font-normal antialiased line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="relative z-10 space-y-1 my-auto py-0.5">
            {service.features.slice(0, 3).map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-1 text-[7.5px] sm:text-[8px] lg:text-[8.5px] text-zinc-100 font-medium"
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug antialiased line-clamp-1">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer */}
          <div className="relative z-10 pt-1.5 border-t border-purple-500/30 flex items-center justify-between">
            <span className="text-[7px] sm:text-[7.5px] font-mono text-purple-300 uppercase tracking-wider font-bold">
              {service.badge}
            </span>
            <a
              href="#contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-0.5 text-[7.5px] sm:text-[8px] font-bold uppercase tracking-wider bg-white text-black hover:bg-purple-300 hover:text-black px-2 py-0.5 rounded transition-colors shadow-sm"
            >
              Order <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function WhatWeProvide() {
  return (
    <section
      id="provide"
      className="relative bg-[#050408] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 overflow-hidden select-none"
    >
      {/* Dark Luxury Texture & Specular Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,15,38,0.9)_0%,rgba(5,4,8,1)_85%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,rgba(124,58,237,0.04)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        {/* Minimal Clean Header */}
        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#c084fc] block mb-2">
          WHAT WE PROVIDE
        </span>
        <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white max-w-3xl mx-auto leading-tight">
          SIX CORE DISCIPLINES
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
          Hover over any card to zoom in, flip, and inspect details. Use the top-right close button to reset.
        </p>
      </div>

      {/* Central Cards Layout: 2-in-a-row on Mobile, 6-in-a-row on Desktop */}
      <div className="relative z-10 max-w-[1650px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6 justify-items-center items-center">
          {services.map((service, index) => (
            <HoverFlipCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
