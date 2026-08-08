import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const projectTypes = [
  "Website",
  "Web App",
  "Android App",
  "iOS App",
  "AI Integration",
  "Something else",
];

const inputClass =
  "w-full rounded-2xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-foreground outline-hidden transition-all duration-300 placeholder:text-muted-foreground focus:border-transparent focus:bg-white/10 focus:ring-2 focus:ring-ring";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks! We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Let's build your next product
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us what you have in mind. We reply within one business day with a plan,
            a timeline and a straight answer on cost.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <Mail className="h-4 w-4 text-cyan" />
              hello@devmedo.com
            </li>
            <li className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <Phone className="h-4 w-4 text-cyan" />
              +1 (415) 555-0134
            </li>
            <li className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <MapPin className="h-4 w-4 text-cyan" />
              Remote-first · Working worldwide
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Ada Lovelace" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="type" className="mb-2 block text-xs text-muted-foreground">
                Project type
              </label>
              <select id="type" name="type" defaultValue="Website" className={inputClass}>
                {projectTypes.map((t) => (
                  <option key={t} value={t} className="bg-card">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="A little about your product, timeline and budget…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="glow-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
