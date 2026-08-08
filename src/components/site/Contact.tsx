import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! Your message has been received. We will get back to you within 24 hours.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 600);
  };

  const handleWhatsAppDirect = (number: string) => {
    const text = encodeURIComponent(`Hi DevMeDo! I would like to inquire about building a project.`);
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#07060a] via-[#0d0a17] to-[#07060a] text-white pt-24 pb-20 px-6 sm:px-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-start">
          {/* Left Column: Contact Details & Info Cards */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <span className="inline-block bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/30">
              AVAILABLE FOR NEW PROJECTS
            </span>

            {/* Heading */}
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[1.05]">
              LET'S BUILD <br />
              SOMETHING <br />
              <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">EXTRAORDINARY.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Have an idea for a web application, mobile app, or custom automation?
              Drop us a line and let's bring it to life with speed and precision.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href="mailto:devmedo26@gmail.com"
                className="flex items-center gap-4 bg-[#110e19] border border-purple-500/20 rounded-2xl p-4 sm:p-5 hover:border-purple-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 block">
                    EMAIL US
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#c084fc] transition-colors">
                    devmedo26@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone / WhatsApp Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#110e19] border border-purple-500/20 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 block">
                      CALL / WHATSAPP
                    </span>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => handleWhatsAppDirect("918848109106")}
                        className="text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-purple-400 hover:text-purple-300 transition-colors"
                      >
                        +91 8848109106
                      </button>
                      <button
                        type="button"
                        onClick={() => handleWhatsAppDirect("918594060340")}
                        className="text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-purple-400 hover:text-purple-300 transition-colors"
                      >
                        +91 85940 60340
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Footprint & Socials */}
              <div className="flex items-center justify-between bg-[#110e19] border border-purple-500/20 rounded-2xl p-4 sm:p-5">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-display">
                    DEVMEDO STUDIO
                  </h4>
                  <p className="text-xs text-zinc-500">Websites, Apps & Automation</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#c084fc] hover:border-purple-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#c084fc] hover:border-purple-400 transition-colors"
                    aria-label="X / Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#c084fc] hover:border-purple-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form Card */}
          <div className="bg-[#110e19] border border-purple-500/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              SEND A MESSAGE
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-8">
              Fill out the details below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#08060d] border border-purple-500/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-[#08060d] border border-purple-500/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone / WhatsApp"
                  className="w-full bg-[#08060d] border border-purple-500/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you want to build — website, app or automation"
                  className="w-full bg-[#08060d] border border-purple-500/20 rounded-xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#a855f7] hover:from-[#6d28d9] hover:to-[#9333ea] text-white font-display font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                {sending ? "SENDING..." : "SEND MESSAGE >"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
