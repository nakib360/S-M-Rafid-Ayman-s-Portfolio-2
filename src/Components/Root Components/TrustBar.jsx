import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../../lib/animations";

const TrustBar = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-12 border-y border-white/5 bg-[#0B0F1A]/50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p variants={fadeInUp} className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest mb-8">
          Brands I've worked with
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          {["ACME", "GLOBAL", "NEXUS", "ZENITH", "PULSE"].map((brand) => (
            <span key={brand} className="text-xl font-bold tracking-tighter">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
