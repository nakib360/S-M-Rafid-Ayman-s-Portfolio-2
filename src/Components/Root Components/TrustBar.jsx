import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { containerStagger, fadeInUp, viewportOnce } from "../../lib/animations";

const TrustBar = () => {
  const brands = ["ACME", "GLOBAL", "NEXUS", "ZENITH", "PULSE"];

  return (
    <motion.section
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-12 border-y border-white/5 bg-[#0B0F1A]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p variants={fadeInUp} className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest mb-8">
          Brands I've worked with
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <Marquee autoFill speed={34} gradient={false}>
            <div className="flex items-center gap-12 pr-12 md:gap-24 md:pr-24 opacity-50 grayscale">
              {brands.map((brand) => (
                <span key={brand} className="text-xl font-bold tracking-tighter whitespace-nowrap">
                  {brand}
                </span>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
