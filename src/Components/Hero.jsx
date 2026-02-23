import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../lib/animations";

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(192,38,255,0.4) 0%, rgba(109,40,217,0.2) 30%, transparent 65%)",
        }}
      ></div>

      <motion.div
        variants={containerStagger}
        initial="initial"
        whileInView="whileInView"
        viewport={viewportOnce}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <span className="text-xs font-medium text-[#9CA3AF]">
            Graphic Designer from Bangladesh
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          <span className="text-gradient">Unlimited</span>
          <br />
          Digital Design
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg text-[#9CA3AF] max-w-2xl mb-10 leading-relaxed">
          Design expertise you need to scale your brand. High-converting social
          media, memorable logos, thumbnails &amp; striking brand visuals.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 mb-12 text-sm text-[#9CA3AF] font-medium">
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
        </motion.div>

        <motion.a
          variants={fadeInUp}
          href="#contact"
          className="group relative flex items-center justify-center h-14 px-8 rounded-full bg-white text-black text-base font-bold transition-all hover:scale-[1.02] active:scale-95 glow-shadow"
        >
          Make your ideas happen
          <LuArrowRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
            strokeWidth={1.5}
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
