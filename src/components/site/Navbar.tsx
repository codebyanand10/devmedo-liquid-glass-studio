import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  visible?: boolean;
}

export function Navbar({ visible = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-300"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 ${
          scrolled ? "bg-[#07060a]/90 backdrop-blur-md border border-purple-500/20 shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-xl tracking-tight text-white">
              DevMed<span className="text-[#a855f7]">O</span>
            </span>
          </div>
        </a>

        {/* Center Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-zinc-300 hover:text-purple-300 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Start a Project Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-white text-black hover:bg-gradient-to-r hover:from-[#7c3aed] hover:to-[#a855f7] hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-purple-500/30"
          >
            Start a Project
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white hover:text-[#a855f7]"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#121018] border border-purple-500/20 rounded-2xl p-5 mt-2 shadow-2xl"
        >
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-zinc-300 hover:text-purple-300 py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-bold text-xs uppercase py-3 rounded-md shadow-lg shadow-purple-500/25"
          >
            Start a Project
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
