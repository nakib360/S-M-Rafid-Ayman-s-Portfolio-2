import { LuArrowRight, LuImage } from "react-icons/lu";

const projects = [
  { title: "Nexus Rebrand", type: "Brand Identity" },
  { title: "Fintech Socials", type: "Social Media Design" },
  { title: "Creator Thumbnail Pack", type: "Thumbnail Design" },
  { title: "Cyberpunk Concept", type: "Manipulation Art" },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Selected Works
          </h2>
          <p className="text-base text-[#9CA3AF]">
            A glimpse into recent client success stories.
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-[#C026FF] flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          View all projects
          <LuArrowRight size={16} strokeWidth={1.5} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="group relative rounded-[18px] overflow-hidden bg-white/5 border border-white/10 aspect-4/3 cursor-pointer"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
              <LuImage className="text-white/20" size={48} strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0 bg-[#C026FF]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium border border-white/20">
                View Project
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent">
              <h3 className="text-lg font-medium tracking-tight mb-1">{proj.title}</h3>
              <p className="text-xs text-[#9CA3AF]">{proj.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
