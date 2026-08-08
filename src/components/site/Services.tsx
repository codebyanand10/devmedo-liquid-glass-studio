import { Globe, Smartphone, Apple, LayoutDashboard } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { GlassCard } from "./GlassCard";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    body: "Marketing sites and storefronts built for speed, SEO and conversion — pixel-tight and effortlessly responsive.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    body: "Native Kotlin and Flutter apps with fluid motion, offline-first data and Play Store-ready polish.",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    body: "Swift and SwiftUI apps that feel at home on Apple hardware, from onboarding to App Store review.",
  },
  {
    icon: LayoutDashboard,
    title: "Web App Development",
    body: "Dashboards, SaaS platforms and internal tools with real-time data, auth and scalable architecture.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Everything you need to ship a product
          </h2>
          <p className="mt-4 text-muted-foreground">
            One team across every surface your customers touch — planned, built and
            maintained end to end.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <GlassCard className="h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-background">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
