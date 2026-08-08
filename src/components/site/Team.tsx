interface Developer {
  name: string;
  role: string;
  badges: string[];
}

const developers: Developer[] = [
  {
    name: "Sooraj Bs.",
    role: "Full-Stack Developer & Software Developer",
    badges: ["React / Next.js", "Python & Node", "API Automation"],
  },
  {
    name: "Abhijith MS",
    role: "Mobile & App Developer",
    badges: ["Flutter / iOS", "AWS & Cloud", "DevOps"],
  },
  {
    name: "Aswin Syam",
    role: "UI/UX & Frontend Specialist",
    badges: ["UI/UX Design", "Design Systems", "Tailwind CSS"],
  },
];

export function Team() {
  return (
    <section id="team" className="relative bg-white text-black py-20 px-6 sm:px-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-black">
            Our Developers
          </h2>
        </div>

        {/* Developer Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, idx) => (
            <div
              key={dev.name}
              className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 text-center flex flex-col justify-between group"
            >
              <div>
                {/* Developer Workspace Visual Mock */}
                <div className="w-full h-64 sm:h-72 rounded-2xl bg-[#0f0a1a] overflow-hidden mb-6 relative flex items-center justify-center p-4 border border-purple-900/20 shadow-inner">
                  {/* Monochromatic code/terminal texture matching screenshot */}
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-[#140d24] to-[#08050e] p-4 font-mono text-[10px] text-zinc-400 text-left overflow-hidden flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-purple-900/40">
                        <div className="w-2 h-2 rounded-full bg-[#a855f7]" />
                        <span className="text-purple-300 font-bold uppercase">dev_{idx + 1}.tsx</span>
                      </div>
                      <p className="text-zinc-500">// Production Ready Architecture</p>
                      <p className="text-[#c084fc]">import &#123; createEngine &#125; from "@devmedo/core";</p>
                      <p className="text-purple-200">export async function handleLaunch() &#123;</p>
                      <p className="text-zinc-400 pl-2">const build = await createEngine(&#123;</p>
                      <p className="text-zinc-400 pl-4">speed: "instant",</p>
                      <p className="text-zinc-400 pl-4">quality: "flawless",</p>
                      <p className="text-zinc-400 pl-2">&#125;);</p>
                      <p className="text-purple-200">&#125;</p>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 pt-2 border-t border-purple-900/30">
                      <span>DEV_STATUS: 100% OK</span>
                      <span className="text-[#a855f7] font-bold">ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Developer Info */}
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-black group-hover:text-[#9333ea] transition-colors">
                  {dev.name}
                </h3>
                <p className="text-xs font-semibold text-[#9333ea] mt-1 mb-6">
                  {dev.role}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-zinc-100">
                {dev.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium text-purple-950 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
