import {
  LuGalleryHorizontal,
  LuCirclePlay,
  LuSquare,
  LuLayers,
  LuWandSparkles,
  LuPrinter,
} from "react-icons/lu";

const serviceCards = [
  {
    icon: LuGalleryHorizontal,
    title: "Social Media Design",
    text: "Thumb-stopping content optimized for every platform.",
    color: "text-[#C026FF]",
  },
  {
    icon: LuCirclePlay,
    title: "Thumbnail Design",
    text: "High-CTR YouTube thumbnails that drive views instantly.",
    color: "text-[#EC4899]",
  },
  {
    icon: LuSquare,
    title: "Logo Design",
    text: "Minimal, memorable, and timeless marks for your brand.",
    color: "text-[#C026FF]",
  },
  {
    icon: LuLayers,
    title: "Brand Identity",
    text: "Comprehensive visual systems to unify your business.",
    color: "text-[#EC4899]",
  },
  {
    icon: LuWandSparkles,
    title: "Manipulation Design",
    text: "Complex photo composites and surreal visual art.",
    color: "text-[#C026FF]",
  },
  {
    icon: LuPrinter,
    title: "Print Design",
    text: "Business cards, flyers, and merchandise that stand out.",
    color: "text-[#EC4899]",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Design Arsenal
          </h2>
          <p className="text-base text-[#9CA3AF]">
            Everything you need to visually dominate your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                  <Icon className={card.color} size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{card.title}</h3>
                <p className="text-sm text-[#9CA3AF]">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
