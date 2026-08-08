import { ArrowUpRight } from "lucide-react";

export function WhyUs() {
  return (
    <section id="about" className="relative bg-white text-black rounded-t-[44px] md:rounded-t-[60px] pt-20 pb-20 px-6 sm:px-10 z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9333ea] block mb-3">
            WHO WE ARE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase max-w-4xl leading-[1.08]">
            A SOFTWARE STUDIO BUILT AROUND{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">DELIVERY.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Graphic Card */}
          <div className="bg-[#f8f6fc] rounded-3xl p-10 sm:p-14 flex flex-col items-center justify-center text-center min-h-[380px] border border-purple-100 shadow-sm group">
            <h3 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-black leading-tight">
              DESIGN.<br />
              DEVELOPMENT.<br />
              KNOWLEDGE.
            </h3>
            <a
              href="#works"
              className="mt-8 inline-flex items-center gap-2 bg-white text-black font-bold text-xs uppercase px-6 py-3 rounded-full border border-purple-200 hover:border-[#9333ea] hover:text-[#9333ea] transition-colors shadow-sm"
            >
              Case Studies <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Studio Descriptions */}
          <div className="space-y-6 text-zinc-700 text-sm sm:text-base leading-relaxed">
            <p>
              DevMeDo is a software studio building websites, mobile and web applications,
              and business automation. We pair clean, efficient code with practical design
              to ship products that are fast, reliable and easy to run.
            </p>
            <p>
              Automation is where we do our best work. Order flows, invoicing, reports,
              data entry, WhatsApp and email follow-ups, system-to-system integrations —
              if your team repeats it every day, we can hand it to a script or a workflow instead.
            </p>
            <p>
              From first call to launch and beyond, we work closely with you to understand the
              goals, the users and the constraints. You get a clear scope, honest timelines,
              and a team that stays available after go-live.
            </p>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-20 pt-12 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-display font-black text-4xl sm:text-6xl text-black">
              100<span className="text-[#9333ea]">%</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-600 mt-2">
              Client Satisfaction Rate
            </p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-6xl text-black">
              10<span className="text-[#9333ea]">+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-600 mt-2">
              Projects Delivered
            </p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-6xl text-black">
              10<span className="text-[#9333ea]">+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-600 mt-2">
              Clients Served and Growing
            </p>
          </div>

          <div>
            <div className="font-display font-black text-4xl sm:text-6xl text-black">
              100<span className="text-[#9333ea]">+</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-600 mt-2">
              Manual Hours Automated Away
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
