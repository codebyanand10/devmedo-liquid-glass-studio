import { ArrowRight } from "lucide-react";

interface ServiceItem {
  num: string;
  title: string;
  tags: string[];
  isFlipped?: boolean;
  visualType: "isometric" | "phone" | "automation" | "design";
}

const serviceItems: ServiceItem[] = [
  {
    num: "01",
    title: "WEB DEVELOPMENT",
    tags: ["BUSINESS WEBSITES", "E-COMMERCE", "CMS & LANDING PAGES", "PORTFOLIO SITES", "SEO & SPEED"],
    isFlipped: false,
    visualType: "isometric",
  },
  {
    num: "02",
    title: "MOBILE & WEB APPS",
    tags: ["ANDROID & IOS", "WEB APPLICATIONS", "ADMIN DASHBOARDS", "CROSS-PLATFORM", "REST & GRAPHQL"],
    isFlipped: true,
    visualType: "phone",
  },
  {
    num: "03",
    title: "BUSINESS AUTOMATION",
    tags: ["WORKFLOW BOTS", "API INTEGRATIONS", "REPORTS & ALERTS", "WHATSAPP & EMAIL FLOWS", "INVOICE & BILLING"],
    isFlipped: false,
    visualType: "automation",
  },
  {
    num: "04",
    title: "UI/UX & PRODUCT DESIGN",
    tags: ["USER RESEARCH", "WIREFRAMES", "DESIGN SYSTEMS", "PROTOTYPING", "BRAND IDENTITY"],
    isFlipped: true,
    visualType: "design",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#07060a] text-white pt-24 pb-28 overflow-hidden">
      {/* Marquee Header */}
      <div className="w-full overflow-hidden border-y border-purple-500/20 py-6 mb-20 bg-black/60">
        <div className="marquee-track flex whitespace-nowrap gap-12 font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter select-none">
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
          <span className="text-white">OUR SERVICES —</span>
          <span className="text-stroke-purple">SERVICES —</span>
        </div>
      </div>

      {/* Stadium Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {serviceItems.map((service) => (
          <div
            key={service.num}
            className="stadium-card group p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#110e19] border border-purple-500/15 hover:border-purple-500/40 transition-all duration-300"
          >
            {/* If not flipped, content on left */}
            {!service.isFlipped ? (
              <>
                {/* Text Content */}
                <div className="flex-1 space-y-6 lg:pl-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-purple-400 text-sm">{service.num}</span>
                    <ArrowRight className="w-4 h-4 text-[#a855f7] group-hover:translate-x-1 transition-transform" />
                    <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white group-hover:text-[#c084fc] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider bg-purple-950/30 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-purple-200 group-hover:border-purple-400/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Visual Pill */}
                <div className="w-full lg:w-[420px] h-[220px] rounded-[32px] md:rounded-full bg-gradient-to-br from-[#291345] via-[#1a0c2e] to-[#0c0617] border border-purple-500/20 flex items-center justify-center overflow-hidden p-6 relative shadow-inner">
                  {service.visualType === "isometric" && (
                    <div className="relative flex gap-3 transform -rotate-6 scale-90">
                      <div className="w-24 h-36 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-3 shadow-lg flex flex-col justify-between text-white">
                        <span className="text-[10px] font-bold">UX</span>
                        <div className="w-6 h-6 rounded-full bg-white/30" />
                      </div>
                      <div className="w-28 h-40 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 p-3 shadow-2xl flex flex-col justify-between text-white -mt-4">
                        <span className="text-[10px] font-bold">LIVE STORE</span>
                        <div className="h-1.5 w-12 bg-white/40 rounded-full" />
                      </div>
                    </div>
                  )}

                  {service.visualType === "automation" && (
                    <div className="w-full h-full rounded-2xl bg-gradient-to-r from-purple-900/60 to-indigo-950/80 p-4 flex flex-col justify-center gap-3">
                      <div className="flex items-center justify-between text-xs font-mono text-purple-200">
                        <span>BOT_ENGINE</span>
                        <span className="text-[#c084fc] font-bold">RUNNING</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc] w-3/4 rounded-full" />
                      </div>
                      <span className="text-[10px] text-purple-300 font-mono">1,400 webhook triggers / sec</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Left Visual Pill */}
                <div className="w-full lg:w-[420px] h-[220px] rounded-[32px] md:rounded-full bg-gradient-to-br from-[#291345] via-[#1a0c2e] to-[#0c0617] border border-purple-500/20 flex items-center justify-center overflow-hidden p-6 relative shadow-inner order-2 lg:order-1">
                  {service.visualType === "phone" && (
                    <div className="w-28 h-44 rounded-3xl bg-black border-2 border-purple-800/60 p-2 shadow-2xl flex flex-col justify-between transform rotate-6">
                      <div className="w-6 h-1 bg-purple-900 rounded-full mx-auto" />
                      <div className="p-1 text-center">
                        <span className="text-[8px] font-mono text-[#c084fc] uppercase block">
                          iOS & Android
                        </span>
                        <span className="text-[9px] font-bold text-white uppercase block mt-1">
                          Native 60fps
                        </span>
                      </div>
                      <div className="h-1 bg-white/20 rounded-full w-8 mx-auto" />
                    </div>
                  )}

                  {service.visualType === "design" && (
                    <div className="w-64 h-32 rounded-2xl bg-[#140e22] border border-purple-500/20 p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-purple-300">DESIGN SYSTEM</span>
                        <span className="text-[#c084fc]">TOKENS</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#9333ea]" />
                        <div className="w-6 h-6 rounded-full bg-[#c084fc]" />
                        <div className="w-6 h-6 rounded-full bg-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Text Content */}
                <div className="flex-1 space-y-6 lg:pr-6 text-left lg:text-right order-1 lg:order-2">
                  <div className="flex items-center lg:justify-end gap-3">
                    <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white group-hover:text-[#c084fc] transition-colors">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-[#a855f7] group-hover:translate-x-1 transition-transform" />
                    <span className="font-mono text-purple-400 text-sm">{service.num}</span>
                  </div>

                  <div className="flex flex-wrap lg:justify-end gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold uppercase tracking-wider bg-purple-950/30 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-purple-200 group-hover:border-purple-400/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
