import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  price: string;
  imageType: "phone" | "tablet" | "laptop" | "dashboard";
}

const items: ShowcaseItem[] = [
  {
    id: "static",
    category: "WHAT WE BUILD",
    title: "STATIC WEBSITES",
    subtitle: "Hand-built marketing sites. No page builder, no bloat — just fast pages that rank.",
    price: "FROM ₹25,000 · 2–3 WEEKS",
    imageType: "phone",
  },
  {
    id: "ecommerce",
    category: "WHAT WE BUILD",
    title: "E-COMMERCE",
    subtitle: "Storefronts wired to your stock, payments and invoicing so orders land in the system on their own.",
    price: "FROM ₹75,000 · 4–6 WEEKS",
    imageType: "dashboard",
  },
  {
    id: "webapps",
    category: "WHAT WE BUILD",
    title: "WEB APPLICATIONS",
    subtitle: "Dashboards, portals and internal tools your team actually wants to open.",
    price: "FROM ₹1,20,000 · 6–10 WEEKS",
    imageType: "laptop",
  },
  {
    id: "automation",
    category: "WHAT WE BUILD",
    title: "BUSINESS AUTOMATION",
    subtitle: "Order flows, invoicing, reports, WhatsApp follow-ups — handed to a script instead of a person.",
    price: "FROM ₹40,000 · 2–4 WEEKS",
    imageType: "phone",
  },
  {
    id: "uiux",
    category: "WHAT WE BUILD",
    title: "UI/UX DESIGN",
    subtitle: "Research, wireframes and a design system your developers can build from without guessing.",
    price: "FROM ₹60,000 · 3–5 WEEKS",
    imageType: "tablet",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-b from-[#07060a] via-[#0d0a17] to-[#07060a] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18)_0%,rgba(124,58,237,0.08)_50%,transparent_75%)] blur-3xl" />

      {/* Massive Brand Name Hero */}
      <div className="max-w-7xl mx-auto px-4 text-center select-none pt-10 pb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-8xl md:text-[13vw] tracking-tighter leading-none text-white uppercase"
        >
          DEVMED<span className="text-[#a855f7] drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">O</span>
        </motion.h1>
      </div>

      {/* Showcase Deck Section ("What We Build") */}
      <div className="max-w-5xl mx-auto px-4 mt-6 relative z-10">
        {/* Navigation Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-xs uppercase font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-white/5 text-zinc-400 hover:text-purple-200 hover:bg-white/10"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Dynamic Card Area */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c084fc] block mb-3">
            {current.category}
          </span>

          <AnimatePresence mode="wait">
            <motion.h2
              key={current.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase mb-8"
            >
              {current.title}
            </motion.h2>
          </AnimatePresence>

          {/* Visual Mockup Container */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 aspect-[16/10] bg-gradient-to-br from-[#160d2b] via-[#0f091f] to-[#07060a] flex items-center justify-center p-8 group"
              >
                {/* Background purple lighting glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22)_0%,transparent_70%)] pointer-events-none" />

                {/* Mockup Graphics */}
                {current.imageType === "phone" && (
                  <div className="relative w-72 sm:w-80 rounded-[40px] bg-black p-3.5 border-4 border-purple-900/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="rounded-[32px] bg-[#f5f5f7] text-black p-6 aspect-[9/17] flex flex-col justify-between overflow-hidden shadow-inner">
                      <div className="space-y-2">
                        <div className="w-10 h-1 bg-black/30 rounded-full mx-auto mb-4" />
                        <span className="text-[10px] font-mono tracking-widest text-purple-700 font-bold uppercase block">
                          DEVMEDO STUDIO
                        </span>
                        <h4 className="font-display font-black text-2xl tracking-tighter leading-tight uppercase text-black">
                          ANOTHER SET OF STUNNING MOCKUPS. METICULOUS ATTENTION TO DETAIL.
                        </h4>
                      </div>
                      <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                        <span>EST. 2026</span>
                        <span className="font-bold text-[#9333ea]">VERIFIED</span>
                      </div>
                    </div>
                  </div>
                )}

                {current.imageType === "tablet" && (
                  <div className="relative w-[340px] sm:w-[480px] rounded-[32px] bg-black p-4 border-4 border-purple-900/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="rounded-[24px] bg-[#ede9fe] text-black p-8 aspect-[4/3] flex flex-col justify-between shadow-inner">
                      <div>
                        <span className="text-xs font-mono uppercase text-purple-700 font-bold">
                          UI/UX DESIGN SYSTEM
                        </span>
                        <h4 className="font-display font-black text-3xl tracking-tight uppercase text-black mt-2">
                          DESIGN PROJECTS
                        </h4>
                        <div className="mt-4 space-y-2">
                          <div className="h-2 bg-purple-900/30 rounded-full w-3/4" />
                          <div className="h-2 bg-purple-900/20 rounded-full w-1/2" />
                          <div className="h-2 bg-purple-900/10 rounded-full w-2/3" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs font-mono text-zinc-700 border-t border-purple-900/10 pt-4">
                        <span>RESEARCH & WIREFRAMING</span>
                        <span className="font-bold text-[#7c3aed]">FIGMA READY</span>
                      </div>
                    </div>
                  </div>
                )}

                {(current.imageType === "laptop" || current.imageType === "dashboard") && (
                  <div className="relative w-[380px] sm:w-[560px] rounded-2xl bg-[#0f0a1c] p-5 border border-purple-500/30 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-900/40">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-purple-500/80" />
                      </div>
                      <span className="text-[11px] font-mono text-purple-300">
                        app.devmedo.com/dashboard
                      </span>
                    </div>
                    <div className="bg-[#17102a] rounded-xl p-5 border border-purple-500/20 text-left">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-white text-sm uppercase font-display">
                          {current.title}
                        </h5>
                        <span className="text-xs bg-purple-500/20 text-[#c084fc] border border-purple-500/30 px-2.5 py-1 rounded-full font-bold">
                          LIVE ENGINE
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 my-4">
                        <div className="bg-black/50 p-3 rounded-lg border border-purple-500/15">
                          <span className="text-[10px] text-zinc-400 block">Performance</span>
                          <span className="text-sm font-bold text-white">99.8%</span>
                        </div>
                        <div className="bg-black/50 p-3 rounded-lg border border-purple-500/15">
                          <span className="text-[10px] text-zinc-400 block">Response</span>
                          <span className="text-sm font-bold text-purple-300">0.24s</span>
                        </div>
                        <div className="bg-black/50 p-3 rounded-lg border border-purple-500/15">
                          <span className="text-[10px] text-zinc-400 block">Scale</span>
                          <span className="text-sm font-bold text-[#c084fc]">4x Fast</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Left and right chevron navigators */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-purple-500/30 hover:border-[#a855f7] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-purple-500/30 hover:border-[#a855f7] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Subtitle and Price Tag */}
            <div className="mt-8 space-y-2">
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {current.subtitle}
              </p>
              <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#c084fc] uppercase">
                {current.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
