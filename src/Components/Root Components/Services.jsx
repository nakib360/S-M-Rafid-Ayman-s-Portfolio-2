import { useEffect } from "react";
import { LuImagePlay, LuLayoutTemplate, LuPenTool } from "react-icons/lu";
import { motion } from "motion/react";
import { NavLink } from "react-router";
import { cardPop, containerStagger, fadeInUp, quickFadeUp } from "../../lib/animations";

const serviceCards = [
  {
    icon: "solar:smartphone-update-linear",
    title: "Social Media Design",
    text: "Scroll-stopping visuals built to grow brands",
    path: "social-media-designs",
    points: ["Engagement optimized", "Platform ready", "Conversion focused"],
  },
  {
    reactIcon: LuImagePlay,
    title: "Thumbnail Design",
    text: "High CTR thumbnails that pull clicks",
    path: "thumbnail-designs",
    points: ["Eye catching layouts", "Emotion driven", "Algorithm friendly"],
  },
  {
    reactIcon: LuPenTool,
    title: "Logo Design",
    text: "Minimal and memorable brand marks",
    path: "logo-designs",
    points: ["Timeless identity", "Clean geometry", "Brand ready"],
  },
  {
    reactIcon: LuLayoutTemplate,
    title: "Cover Design",
    text: "Platform-ready Facebook and YouTube cover banners",
    path: "cover-designs",
    points: ["Facebook page covers", "YouTube channel art", "Desktop + mobile safe zones"],
  },
  {
    icon: "solar:magic-stick-3-linear",
    title: "Manipulation Design",
    text: "High-end photo composites and surreal visuals",
    path: "manipulation-designs",
    points: ["Realistic blending", "Depth lighting", "Creative storytelling"],
  },
  {
    icon: "solar:printer-minimalistic-linear",
    title: "Print Design",
    text: "Business cards, flyers and packaging visuals",
    path: "print-designs",
    points: ["Print ready files", "CMYK optimized", "Premium layouts"],
  },
];

const Services = () => {
  useEffect(() => {
    if (document.querySelector("script[data-iconify-script='true']")) return;
    const script = document.createElement("script");
    script.src = "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js";
    script.async = true;
    script.setAttribute("data-iconify-script", "true");
    document.head.appendChild(script);
  }, []);

  return (
    <motion.section
      id="services"
      variants={containerStagger}
      initial="initial"
      animate="whileInView"
      className="relative overflow-x-hidden bg-[#050505] text-zinc-300 antialiased selection:bg-[#a855f7]/30 selection:text-white"
    >
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[20%] top-[20%] z-0 h-100 w-100 rounded-full bg-[#3b82f6]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-300 px-6 py-24 lg:px-8 lg:py-32">
        <motion.div variants={fadeInUp} className="mb-16 mx-auto flex max-w-2xl flex-col items-center text-center lg:mb-24">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            View My Portfolio
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-400 md:text-lg">
            High-converting visuals built for modern brands
          </p>
        </motion.div>

        <motion.div
          variants={containerStagger}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {serviceCards.map((card) => (
            <motion.div
              key={card.title}
              variants={quickFadeUp}
              whileHover={cardPop.whileHover}
              whileTap={cardPop.whileTap}
              transition={cardPop.transition}
              className="group relative rounded-[22px] bg-white/3 p-px shadow-lg shadow-black/50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-20 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(168,85,247,0.15)]"
            >
              <div className="absolute inset-0 rounded-[22px] bg-linear-to-br from-[#a855f7]/40 via-transparent to-[#3b82f6]/10 opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

              <div className="relative flex h-full flex-col rounded-[21px] bg-[#0c0c0e]/90 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#0e0e11]/90">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#a855f7]/20 group-hover:bg-[#a855f7]/10">
                  {card.reactIcon ? (
                    <card.reactIcon className="text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12 group-hover:text-[#c084fc]" size={24} />
                  ) : (
                    <iconify-icon
                      icon={card.icon}
                      width="24"
                      height="24"
                      className="text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12 group-hover:text-[#c084fc]"
                    />
                  )}
                </div>

                <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mb-8 grow text-sm font-light leading-relaxed text-zinc-400">{card.text}</p>

                <ul className="mb-8 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center text-xs font-normal text-zinc-300">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        width="16"
                        height="16"
                        className="mr-3 text-[#a855f7] opacity-80"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <NavLink
                  to={card.path}
                  className="mt-auto block w-full rounded-full bg-linear-to-r from-[#C026FF] to-[#350c7d] px-4 py-2.5 text-center text-xs font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_-5px_rgba(192,38,255,0.6)]  active:scale-95"
                >
                  View Designs →
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
