import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../../lib/animations";

const steps = [
  {
    step: "Step 01",
    title: "Submit Request",
    text: "Add as many design requests to your board as you'd like. Briefing is simple and async.",
  },
  {
    step: "Step 02",
    title: "Design in Progress",
    text: "I'll get to work immediately. High-quality designs are crafted with pixel-perfect precision.",
  },
  {
    step: "Step 03",
    title: "Receive Updates",
    text: "Review designs and request unlimited revisions until you are 100% satisfied.",
  },
  {
    step: "Step 04",
    title: "Final Delivery",
    text: "Receive your source files, perfectly organized and ready for deployment.",
  },
];

const Process = () => {
  return (
    <motion.section
      id="process"
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-24 md:py-32 max-w-5xl mx-auto px-6"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          How it works
        </h2>
        <p className="text-base text-[#9CA3AF]">
          Seamless design delivery from request to final files.
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-0 md:pl-8">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute top-4 bottom-4 w-px bg-linear-to-b from-[#C026FF] via-[#6D28D9] to-transparent shadow-[0_0_15px_rgba(192,38,255,0.5)]"
        />

        <motion.div variants={containerStagger} className="space-y-8 relative">
          {steps.map((item) => (
            <motion.div variants={fadeInUp} key={item.step} className="relative pl-10 md:pl-12 group">
              <div className="absolute -left-1.25 top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
              <div className="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                <span className="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Process;
