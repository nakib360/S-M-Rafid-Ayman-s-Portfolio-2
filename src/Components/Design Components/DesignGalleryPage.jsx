import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  cardPop,
  containerStagger,
  fadeInUp,
  quickFadeUp,
} from "../../lib/animations";

const skeletonCards = Array.from({ length: 6 });

const DesignGalleryPage = ({ title, fallbackAlt }) => {
  const { designs } = useLoaderData();
  const navigate = useNavigate();

  return (
    <motion.section
      variants={containerStagger}
      initial="initial"
      animate="whileInView"
      className="min-h-screen px-3 pb-12 pt-28 md:px-8 md:pt-32"
    >
      <motion.button
        type="button"
        variants={quickFadeUp}
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
        onClick={() => navigate("/#services")}
        className="text-xs md:text-sm border border-gray-500 rounded-full p-1.5 px-2.5 cursor-pointer hover:bg-gray-500/30"
      >
        ← Back to previous
      </motion.button>

      <motion.div variants={fadeInUp} className="mt-10">
        <p className="font-extrabold text-3xl md:text-4xl text-center">{title}</p>
      </motion.div>

      <Suspense
        fallback={
          <div className="mx-auto my-10 w-full max-w-7xl">
            <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
              {skeletonCards.map((_, index) => (
                <div
                  key={`gallery-skeleton-${index}`}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-2xl backdrop-blur-xl"
                >
                  <div className="h-65 w-full animate-pulse rounded-xl bg-linear-to-br from-zinc-800/80 via-zinc-700/60 to-zinc-800/80" />
                </div>
              ))}
            </div>
          </div>
        }
      >
        <Await resolve={designs}>
          {(data) =>
            Array.isArray(data) && data.length > 0 ? (
              <motion.div
                variants={containerStagger}
                initial="initial"
                animate="whileInView"
                className="my-10 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3"
              >
                {data.map((design) => (
                  <motion.div
                    key={design._id}
                    variants={quickFadeUp}
                    whileHover={cardPop.whileHover}
                    whileTap={cardPop.whileTap}
                    transition={cardPop.transition}
                    className="mb-6 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white/3"
                  >
                    <img
                      src={design.imageUrl}
                      alt={design.title || fallbackAlt}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="whileInView"
                className="mx-auto my-10 w-full max-w-3xl px-1 md:px-0"
              >
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0e]/80 p-8 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
                  <p className="text-xl font-semibold text-zinc-100">No items yet</p>
                  <p className="mt-2 text-sm text-zinc-400">New designs will appear here soon.</p>
                </div>
              </motion.div>
            )
          }
        </Await>
      </Suspense>
    </motion.section>
  );
};

export default DesignGalleryPage;
