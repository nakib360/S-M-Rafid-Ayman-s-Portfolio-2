import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { containerStagger, fadeInUp, viewportOnce } from "../../lib/animations";
import { useEffect, useState } from "react";

const TrustBar = () => {
  // const brands = ["ACME", "GLOBAL", "NEXUS", "ZENITH", "PULSE"];
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const skeletonBrands = Array.from({ length: 5 });

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API}/uploads?category=brands`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setBrands(data))
      .catch(() => [])
      .finally(() => setLoading(false));
  }, []);

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
          <div className="flex items-center gap-12 pr-12 md:gap-24 md:pr-24 opacity-50">
            {loading
              ? skeletonBrands.map((_, index) => (
                  <div
                    key={`brand-skeleton-${index}`}
                    className="h-10 w-30 animate-pulse rounded-lg bg-linear-to-br from-zinc-800/80 via-zinc-700/60 to-zinc-800/80"
                  />
                ))
              : brands.map((brand) => (
                  <img
                    key={brand._id || brand.imageUrl}
                    src={brand.imageUrl}
                    alt={brand.title || "Brand logo"}
                    className="w-30"
                    loading="lazy"
                  />
                ))}
          </div>
        </Marquee>
      </motion.div>
    </div>
  </motion.section>
);
};

export default TrustBar;
