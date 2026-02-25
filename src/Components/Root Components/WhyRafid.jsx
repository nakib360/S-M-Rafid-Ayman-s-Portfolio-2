import { LuBadgeCheck } from "react-icons/lu";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../../lib/animations";

const points = [
  "Strategy first approach",
  "Clean modern visuals",
  "Fast, reliable delivery",
  "Brand focused consistency",
  "Affordable, scalable pricing",
];

const WhyRafid = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-24 border-y border-white/5 bg-[#0B0F1A]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              Design, without <br /> <span className="text-[#9CA3AF]">the hassle.</span>
            </h2>
            <p className="text-base text-[#9CA3AF] leading-relaxed mb-8">
              Replace unreliable freelancers and expensive agencies with a single
              point of contact. Predictable outcomes, stunning visuals, zero
              headaches.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-8 rounded-[18px]">
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium">
                  <LuBadgeCheck className="text-[#C026FF]" size={20} strokeWidth={1.5} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyRafid;
