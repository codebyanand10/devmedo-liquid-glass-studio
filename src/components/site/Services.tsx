import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code2, Smartphone, Cpu, Palette } from "lucide-react";

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  tags: string[];
  isFlipped?: boolean;
  visualType: "isometric" | "phone" | "automation" | "design";
  icon: typeof Code2;
}

const serviceItems: ServiceItem[] = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    subtitle: "High-speed marketing sites, full-stack web platforms, and tailored e-commerce systems engineered with zero bloat.",
    tags: ["BUSINESS WEBSITES", "E-COMMERCE", "CMS & LANDING PAGES", "PORTFOLIO SITES", "SEO & SPEED"],
    isFlipped: false,
    visualType: "isometric",
    icon: Code2,
  },
  {
    num: "02",
    title: "MOBILE & WEB APPS",
    subtitle: "Fluid native and cross-platform mobile apps for iOS and Android with 60fps animations and resilient cloud APIs.",
    tags: ["ANDROID & IOS", "WEB APPLICATIONS", "ADMIN DASHBOARDS", "CROSS-PLATFORM", "REST & GRAPHQL"],
    isFlipped: true,
    visualType: "phone",
    icon: Smartphone,
  },
  {
    num: "03",
    title: "BUSINESS AUTOMATION",
    subtitle: "Intelligent workflow bots, webhook pipelines, WhatsApp/email automation, and hands-free payment flows.",
    tags: ["WORKFLOW BOTS", "API INTEGRATIONS", "REPORTS & ALERTS", "WHATSAPP & EMAIL FLOWS", "INVOICE & BILLING"],
    isFlipped: false,
    visualType: "automation",
    icon: Cpu,
  },
  {
    num: "04",
    title: "UI/UX & PRODUCT DESIGN",
    subtitle: "Research-driven wireframes, design systems, and Figma prototypes ready for development with zero ambiguity.",
    tags: ["USER RESEARCH", "WIREFRAMES", "DESIGN SYSTEMS", "PROTOTYPING", "BRAND IDENTITY"],
    isFlipped: true,
    visualType: "design",
    icon: Palette,
  },
];

function LiquidGlassCard({ service }: { service: ServiceItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="apple-liquid-glass relative rounded-[36px] p-6 sm:p-10 lg:p-12 overflow-hidden group"
    >
      {/* 1. Dynamic Liquid Cursor Spotlight Refraction */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
        style={{
          opacity: mousePos.active ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}% ${mousePos.y}%, rgba(192, 132, 252, 0.18), rgba(168, 85, 247, 0.08) 40%, transparent 70%)`,
        }}
      />

      {/* 2. Iridescent Liquid Ambient Backdrop */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,rgba(124,58,237,0.06)_50%,transparent_75%)] blur-3xl group-hover:scale-125 transition-transform duration-700" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle,rgba(124,58,237,0.15)_0%,rgba(168,85,247,0.04)_50%,transparent_75%)] blur-3xl group-hover:scale-125 transition-transform duration-700" />

      {/* 3. Card Content Grid */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* If not flipped: text on left, visual on right */}
        {!service.isFlipped ? (
          <>
            {/* Left Column: Text & Features */}
            <div className="flex-1 space-y-6 text-left">
              <div className="flex items-center gap-3.5">
                <div className="apple-liquid-glass-pill w-10 h-10 rounded-2xl flex items-center justify-center text-[#c084fc] shadow-md group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono font-bold text-xs tracking-widest text-purple-300">
                  {service.num} // STUDIO
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:text-purple-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
                  {service.subtitle}
                </p>
              </div>

              {/* Liquid Glass Pill Tags */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="apple-liquid-glass-pill text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full text-purple-100/90 group-hover:border-purple-400/40 group-hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Liquid Glass Interactive Visual Mockup */}
            <div className="w-full lg:w-[420px] h-[240px] rounded-[28px] apple-liquid-glass-pill p-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-500">
              {/* Internal Refraction Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-black/40 pointer-events-none" />

              {service.visualType === "isometric" && (
                <div className="relative flex gap-4 transform -rotate-3 scale-95 group-hover:scale-100 transition-transform duration-500">
                  <div className="w-28 h-40 rounded-2xl apple-liquid-glass-pill p-4 shadow-2xl flex flex-col justify-between text-white border-white/30 backdrop-blur-3xl">
                    <span className="text-[11px] font-bold font-mono tracking-wider text-purple-300">FAST UX</span>
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7c3aed] to-[#c084fc] shadow-lg shadow-purple-500/40 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-32 h-44 rounded-2xl bg-gradient-to-br from-[#7c3aed]/40 to-[#c084fc]/20 border border-white/30 backdrop-blur-3xl p-4 shadow-2xl flex flex-col justify-between text-white -mt-4">
                    <span className="text-[11px] font-bold font-mono text-purple-200">99+ SPEED</span>
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full bg-white/40 rounded-full" />
                      <div className="h-1.5 w-3/4 bg-white/30 rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {service.visualType === "automation" && (
                <div className="w-full h-full rounded-2xl apple-liquid-glass-pill p-5 flex flex-col justify-between border-white/20">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-200">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping" />
                      AUTO_PIPELINE
                    </span>
                    <span className="text-[#c084fc] font-bold">ACTIVE 24/7</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                      <span>Database & WhatsApp Sync</span>
                      <span className="text-white font-bold">100%</span>
                    </div>
                    <div className="h-2.5 bg-black/50 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc] w-full rounded-full shadow-[0_0_10px_#a855f7]" />
                    </div>
                  </div>
                  <span className="text-[10px] text-purple-300 font-mono">Zero Manual Overhead</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Left Column: Liquid Glass Visual (when flipped) */}
            <div className="w-full lg:w-[420px] h-[240px] rounded-[28px] apple-liquid-glass-pill p-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] transition-all duration-500 order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-black/40 pointer-events-none" />

              {service.visualType === "phone" && (
                <div className="w-32 h-44 rounded-3xl apple-liquid-glass-pill border-2 border-purple-500/40 p-2.5 shadow-2xl flex flex-col justify-between transform rotate-3 group-hover:rotate-0 transition-transform duration-500 backdrop-blur-3xl">
                  <div className="w-8 h-1 bg-white/40 rounded-full mx-auto" />
                  <div className="p-1 text-center space-y-1">
                    <span className="text-[9px] font-mono text-[#c084fc] uppercase font-bold block">
                      iOS & Android
                    </span>
                    <span className="text-[10px] font-black font-display text-white uppercase block leading-tight">
                      Fluid 60FPS
                    </span>
                  </div>
                  <div className="h-1 bg-white/25 rounded-full w-10 mx-auto" />
                </div>
              )}

              {service.visualType === "design" && (
                <div className="w-72 h-36 rounded-2xl apple-liquid-glass-pill border border-white/25 p-4 flex flex-col justify-between backdrop-blur-3xl">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-purple-300 font-bold">FIGMA DESIGN SYSTEM</span>
                    <span className="text-[#c084fc] font-bold">READY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7c3aed] shadow-lg flex items-center justify-center text-white text-[10px] font-bold">Aa</div>
                    <div className="w-8 h-8 rounded-full bg-[#a855f7] shadow-lg" />
                    <div className="w-8 h-8 rounded-full bg-[#c084fc] shadow-lg" />
                    <div className="w-8 h-8 rounded-full bg-white shadow-lg" />
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full" />
                </div>
              )}
            </div>

            {/* Right Column: Text & Features (when flipped) */}
            <div className="flex-1 space-y-6 text-left lg:text-right order-1 lg:order-2">
              <div className="flex items-center lg:justify-end gap-3.5">
                <span className="font-mono font-bold text-xs tracking-widest text-purple-300">
                  {service.num} // STUDIO
                </span>
                <div className="apple-liquid-glass-pill w-10 h-10 rounded-2xl flex items-center justify-center text-[#c084fc] shadow-md group-hover:scale-110 group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:text-purple-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-3 max-w-xl lg:ml-auto">
                  {service.subtitle}
                </p>
              </div>

              {/* Liquid Glass Pill Tags */}
              <div className="flex flex-wrap lg:justify-end gap-2.5 pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="apple-liquid-glass-pill text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full text-purple-100/90 group-hover:border-purple-400/40 group-hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative bg-[#07060a] text-white pt-24 pb-28 overflow-hidden">
      {/* Ambient Liquid Backlight Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14)_0%,rgba(124,58,237,0.05)_50%,transparent_75%)] blur-3xl" />

      {/* Marquee Header */}
      <div className="w-full overflow-hidden border-y border-purple-500/20 py-6 mb-20 bg-black/40 backdrop-blur-md">
        <div className="marquee-track flex whitespace-nowrap gap-12 font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter select-none">
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
        </div>
      </div>

      {/* Apple Liquid Glass Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {serviceItems.map((service) => (
          <LiquidGlassCard key={service.num} service={service} />
        ))}
      </div>
    </section>
  );
}
