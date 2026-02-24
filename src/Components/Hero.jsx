import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../lib/animations";
import smPhoto from "../assets/rafid-ayman.png"

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 md:pt-44 lg:pt-52">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(192,38,255,0.4) 0%, rgba(109,40,217,0.2) 30%, transparent 65%)",
        }}
      ></div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:flex-row lg:items-center lg:gap-14">
        <motion.div
          variants={containerStagger}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportOnce}
          className="w-full max-w-3xl text-left sm:text-center lg:text-left"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mb-8"
          >
            <div className="status-pulse-dot"></div>
            <span className="text-[11px] font-medium text-[#9CA3AF] sm:text-xs">
              <span className="font-extrabold">S M Rafid Ayman</span> a graphic Designer from Bangladesh
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-[1.1] tracking-tight sm:mb-6 sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">Unlimited</span>
            <br />
            Digital Design
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] sm:mx-auto sm:mb-10 sm:text-lg lg:mx-0"
          >
            Design expertise you need to scale your brand. High-converting social
            media, memorable logos, thumbnails &amp; striking brand visuals.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mb-10 flex flex-col items-start gap-3 text-sm font-medium text-[#9CA3AF] sm:mb-12 sm:items-center sm:gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-6 lg:justify-start"
          >
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
            className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-black transition-all hover:scale-[1.02] active:scale-95 sm:mx-auto sm:h-14 sm:w-auto sm:px-8 sm:text-base lg:mx-0 glow-shadow"
          >
            Make your ideas happen
            <LuArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={20}
              strokeWidth={1.5}
            />
          </motion.a>
        </motion.div>

        <div className="w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-xl">
          <img
            className="h-auto w-full object-contain"
            src={smPhoto}
            alt="SM Rafid Ayman"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
