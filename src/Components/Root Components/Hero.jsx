import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, quickFadeUp, viewportOnce } from "../../lib/animations";
import smPhoto from "../../assets/rafid-ayman.png"

const Hero = () => {
  return (
    <section id="home" className="pb-10 lg:pb-0  relative overflow-hidden pt-24 sm:pt-28 md:pt-44 lg:pt-52">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top center, rgba(192,38,255,0.4) 0%, rgba(109,40,217,0.2) 30%, transparent 65%)",
        }}
      ></div>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:flex-row sm:items-center sm:gap-14 sm:px-6">
        <motion.div
          variants={containerStagger}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportOnce}
          className="w-full max-w-3xl text-left"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mb-8"
          >
            <div className="status-pulse-dot"></div>
            <span className="text-[11px] font-medium text-[#9CA3AF] sm:text-xs">
              Available for new project
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-2 text-3xl text-nowrap font-bold leading-[1.1] tracking-tight sm:mb-3 sm:text-4xl md:text-5xl xl:text-6xl"
          >
            <span className="text-gradient text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Assalamu Alaikum</span>
            <br />
            I am S M Rafid Ayman
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] sm:mb-10 sm:text-lg"
          >
            From <span className="font-extrabold">Chittagong, Bangladesh</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mb-10 flex flex-col items-start gap-3 text-sm font-medium text-[#9CA3AF] sm:mb-12 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-6"
          >
            <div className="flex items-center gap-2">
              <LuCircleCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
              Flat pricing
            </div>
            <div className="flex items-center gap-2">
              <LuCircleCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
              Unlimited revisions
            </div>
          </motion.div>

          <div className="hidden sm:flex items-center gap-3 sm:gap-5 text-xs text-nowrap">
            <motion.a
              variants={fadeInUp}
              href="#about"
              className="group inline-flex h-10 w-full items-center justify-center rounded-full bg-white px-3 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 sm:h-12 sm:w-auto sm:px-6 sm:text-sm glow-shadow"
            >
              View Portfolio
              <LuArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
                strokeWidth={1.5}
              />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="#contact"
              className="group inline-flex h-10 w-full items-center justify-center rounded-full bg-white px-3 font-bold text-black transition-all hover:scale-[1.02] active:scale-95 sm:h-12 sm:w-auto sm:px-6 sm:text-sm glow-shadow"
            >
              Let&apos;s talk
              <LuArrowRight
                className="ml-2 transition-transform group-hover:translate-x-1"
                size={20}
                strokeWidth={1.5}
              />
            </motion.a>
          </div>

        </motion.div>

        <motion.div
          variants={quickFadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={viewportOnce}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-[18rem] sm:max-w-sm md:max-w-xl"
        >
          <motion.img
            className="h-auto w-full object-contain -mt-15 sm:mt-0"
            src={smPhoto}
            alt="SM Rafid Ayman"
            style={{
              maskImage: "linear-gradient(to bottom, black 68%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 68%, transparent 100%)",
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45 }}
          className="flex w-full max-w-3xl items-center gap-3 text-xs sm:hidden"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex h-10 w-1/2 items-center justify-center rounded-full bg-white px-3 font-bold text-black transition-all sm:h-14 sm:px-8 sm:text-base glow-shadow"
          >
            View Portfolio
            <LuArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={20}
              strokeWidth={1.5}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex h-10 w-1/2 items-center justify-center rounded-full bg-white px-3 font-bold text-black transition-all sm:h-14 sm:px-8 sm:text-base glow-shadow"
          >
            Let&apos;s talk
            <LuArrowRight
              className="ml-2 transition-transform group-hover:translate-x-1"
              size={20}
              strokeWidth={1.5}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
