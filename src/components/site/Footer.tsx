import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-12 pb-8 px-6 overflow-hidden border-t border-purple-500/15 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Quick Links & Back to Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-bold tracking-wider text-zinc-400">
            <span className="text-white">QUICK LINKS:</span>
            <a href="#home" className="hover:text-[#c084fc] transition-colors">Home</a>
            <span>·</span>
            <a href="#about" className="hover:text-[#c084fc] transition-colors">About Us</a>
            <span>·</span>
            <a href="#works" className="hover:text-[#c084fc] transition-colors">Work</a>
            <span>·</span>
            <a href="#services" className="hover:text-[#c084fc] transition-colors">Services</a>
            <span>·</span>
            <a href="#contact" className="hover:text-[#c084fc] transition-colors">Contact</a>
          </div>

          {/* Purple Circular Back To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white hover:from-[#6d28d9] hover:to-[#9333ea] flex items-center justify-center transition-all shadow-lg shadow-purple-500/40 hover:scale-105 shrink-0"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Copyright */}
          <div className="text-right text-xs font-mono text-zinc-500">
            <span className="font-bold text-white block uppercase font-display">DEVMEDO</span>
            © {new Date().getFullYear()} DevMeDo. All rights reserved.
          </div>
        </div>

        {/* Massive Bottom Typography Watermark */}
        <div className="text-center pt-8 border-t border-purple-950/40">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-[14vw] leading-none tracking-tighter text-purple-950/25 uppercase hover:text-purple-900/35 transition-colors">
            DEVMEDO
          </h2>
        </div>
      </div>
    </footer>
  );
}
