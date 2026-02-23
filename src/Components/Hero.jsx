import { LuArrowRight, LuCircleCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(192,38,255,0.4) 0%, rgba(109,40,217,0.2) 30%, transparent 65%)",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <span className="text-xs font-medium text-[#9CA3AF]">
            Graphic Designer from Bangladesh
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-gradient">Unlimited</span>
          <br />
          Digital Design
        </h1>

        <p className="text-lg text-[#9CA3AF] max-w-2xl mb-10 leading-relaxed">
          Design expertise you need to scale your brand. High-converting social
          media, memorable logos, thumbnails &amp; striking brand visuals.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 text-sm text-[#9CA3AF] font-medium">
          <div className="flex items-center gap-2">
            <LuCircleCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
            Flat pricing
          </div>
          <div className="flex items-center gap-2">
            <LuCircleCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
            Unlimited revisions
          </div>
          <div className="flex items-center gap-2">
            <LuCircleCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
            Cancel anytime
          </div>
        </div>

        <a
          href="#contact"
          className="group relative flex items-center justify-center h-14 px-8 rounded-full bg-white text-black text-base font-bold transition-all hover:scale-[1.02] active:scale-95 glow-shadow"
        >
          Make your ideas happen
          <LuArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
