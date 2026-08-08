import { ArrowUpRight } from "lucide-react";

interface ProjectCard {
  id: string;
  title: string;
  tags: string[];
  imageType: "phone" | "tablet" | "laptop";
  hasFloatingBadge?: boolean;
}

const projects: ProjectCard[] = [
  {
    id: "nexa",
    title: "NEXA RETAIL STOREFRONT",
    tags: ["E-COMMERCE", "WEB DEVELOPMENT"],
    imageType: "phone",
  },
  {
    id: "fieldops",
    title: "FIELDOPS MOBILE APP",
    tags: ["MOBILE APP", "UI/UX"],
    imageType: "tablet",
  },
  {
    id: "invoiceflow",
    title: "INVOICEFLOW AUTOMATION",
    tags: ["AUTOMATION", "INTEGRATION"],
    imageType: "laptop",
    hasFloatingBadge: true,
  },
];

export function Portfolio() {
  return (
    <section id="works" className="relative bg-white text-black py-24 px-6 sm:px-10 overflow-hidden">
      {/* Massive Background Watermark */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-5 font-display font-black text-8xl sm:text-[14vw] leading-none text-purple-950">
        WORK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9333ea] block mb-2">
            PORTFOLIO
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
            SELECTED <span className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">WORKS.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-black group-hover:text-[#9333ea] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                        >
                          • {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-full bg-zinc-100 group-hover:bg-gradient-to-r group-hover:from-[#7c3aed] group-hover:to-[#a855f7] group-hover:text-white flex items-center justify-center text-zinc-700 transition-all shrink-0 shadow-sm"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Card Visual Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#23103e] via-[#160929] to-[#0c0517] p-6 flex items-center justify-center border border-purple-900/20 shadow-inner mt-4">
                  {project.imageType === "phone" && (
                    <div className="w-36 h-56 rounded-3xl bg-black p-2 border border-purple-900/40 shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
                      <div className="rounded-2xl bg-[#f8f6fc] p-3 text-black h-full flex flex-col justify-between">
                        <span className="text-[7px] font-mono uppercase text-purple-700 font-bold">STOREFRONT</span>
                        <div className="text-[10px] font-display font-black uppercase leading-tight">
                          ANOTHER SET OF STUNNING MOCKUPS.
                        </div>
                        <div className="h-1 w-6 bg-[#9333ea] rounded-full" />
                      </div>
                    </div>
                  )}

                  {project.imageType === "tablet" && (
                    <div className="w-48 h-36 rounded-2xl bg-black p-2 border border-purple-900/40 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
                      <div className="rounded-xl bg-[#ede9fe] p-3 text-black h-full flex flex-col justify-between">
                        <span className="text-[8px] font-mono uppercase text-purple-800 font-bold">MOBILE APP</span>
                        <div className="text-[11px] font-display font-black uppercase text-black">
                          DESIGN PROJECTS
                        </div>
                        <div className="h-1 bg-purple-400 rounded-full w-12" />
                      </div>
                    </div>
                  )}

                  {project.imageType === "laptop" && (
                    <div className="w-52 h-36 rounded-xl bg-[#110a1f] p-3 border border-purple-500/30 shadow-2xl flex flex-col justify-between">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      </div>
                      <div className="text-left font-mono text-[9px] text-zinc-300 space-y-1 my-2">
                        <p className="text-white font-bold">AUTOMATED INVOICE ENGINE</p>
                        <p className="text-[#c084fc]">STATUS: ACTIVE_PAYMENT</p>
                      </div>
                      <div className="h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] rounded-full w-full" />
                    </div>
                  )}

                  {/* Floating Magnet Badge Button for 3rd card */}
                  {project.hasFloatingBadge && (
                    <a
                      href="#contact"
                      className="absolute bottom-3 left-3 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-display font-black text-[11px] uppercase px-4 py-3 rounded-full shadow-xl hover:from-[#6d28d9] hover:to-[#9333ea] transition-all flex items-center gap-1.5 shadow-purple-500/30"
                    >
                      Start <br />Your Project ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
