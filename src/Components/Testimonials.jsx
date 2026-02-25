import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../lib/animations";

const reviews = [
  {
    quote:
      "Outstanding work! The attention to detail in the logo design was impressive. They truly understood my brand vision and delivered beyond expectations.",
    name: "Mark Harrison",
    role: "CEO, TechVentures (USA)",
    initials: "MH",
  },
  {
    quote:
      "আমি উনার কাজে অনেক বেশি সন্তুষ্ট। লোগোটি খুবই প্রিমিয়াম হয়েছে এবং খুব অল্প সময়ের মধ্যে উনি ডিজাইনটি বুঝিয়ে দিয়েছেন। শুভকামনা রইল!",
    name: "Anika Tabassum",
    role: "E-commerce Owner (BD)",
    initials: "AT",
  },
  {
    quote:
      "My YouTube CTR skyrocketed after I started using these thumbnails! Professional, eye-catching, and high-quality work every single time.",
    name: "Sarah Jenkins",
    role: "Content Creator (UK)",
    initials: "SJ",
  },
  {
    quote:
      "অসাধারণ ডিজাইন সেন্স! সোশ্যাল মিডিয়া অ্যাডগুলোর জন্য যেমন ডিজাইন চেয়েছিলাম ঠিক তেমনই পেয়েছি। ভবিষ্যতে আবার কাজ করবো!",
    name: "Tanvir Rahman",
    role: "Marketing Manager, BD",
    initials: "TR",
  },
  {
    quote:
      "The social media strategy and graphics were a game-changer for my real estate business. Prompt communication and high-level creativity.",
    name: "Luca Moretti",
    role: "Real Estate Agent (Italy)",
    initials: "LM",
  },
  {
    quote:
      "উনার কালার চয়েস এবং ফন্ট সিলেকশন এক কথায় দারুণ। আমার ব্র্যান্ডের জন্য একটি পারফেক্ট আইডেন্টিটি তৈরি করে দিয়েছেন।",
    name: "Nusrat Jahan",
    role: "Founder, StyleCurve (BD)",
    initials: "NJ",
  },
  {
    quote:
      "Fast delivery and exceptional quality. The print materials looked amazing in person. Will definitely recommend to anyone needing professional design.",
    name: "David Wilson",
    role: "Event Coordinator (AUS)",
    initials: "DW",
  },
  {
    quote:
      "এত সুন্দর কাজের জন্য ধন্যবাদ। ডিজাইনগুলো একদম ইউনিক এবং আধুনিক। কাস্টমারদের কাছে আমাদের রিচ অনেক বেড়েছে!",
    name: "Arif Hasan",
    role: "Business Owner (BD)",
    initials: "AH",
  },
  {
    quote:
      "A pleasure to work with. Highly creative and followed all instructions perfectly. The final delivery was professional and polished.",
    name: "Elena Rodriguez",
    role: "Digital Consultant (CAN)",
    initials: "ER",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [visibleCards, setVisibleCards] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );
  const carouselItems = [...reviews, ...reviews.slice(0, visibleCards)];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncVisibleCards = () => {
      setVisibleCards(mediaQuery.matches ? 1 : 3);
    };

    syncVisibleCards();
    mediaQuery.addEventListener("change", syncVisibleCards);

    return () => {
      mediaQuery.removeEventListener("change", syncVisibleCards);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isAnimating) return;

    const restoreAnimation = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });

    return () => window.cancelAnimationFrame(restoreAnimation);
  }, [isAnimating]);

  const handleTrackTransitionEnd = () => {
    if (currentSlide !== reviews.length) return;
    setIsAnimating(false);
    setCurrentSlide(0);
  };

  const normalizedSlide = ((currentSlide % reviews.length) + reviews.length) % reviews.length;
  const focusedSlide = visibleCards === 1 ? normalizedSlide : (normalizedSlide + 1) % reviews.length;

  return (
    <motion.section
      id="reviews"
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-24 md:py-32 max-w-7xl mx-auto px-6"
    >
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          Trusted by creators
        </h2>
        <p className="text-base text-[#9CA3AF]">Don&apos;t just take my word for it.</p>
      </motion.div>

      <motion.div variants={fadeInUp} className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden md:block md:w-24 bg-linear-to-r from-[#05050A] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden md:block md:w-24 bg-linear-to-l from-[#05050A] to-transparent" />
        <motion.div
          onTransitionEnd={handleTrackTransitionEnd}
          className={`flex ${isAnimating ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }}
        >
          {carouselItems.map((review, idx) => {
            const logicalIndex = idx % reviews.length;
            const isFocused = logicalIndex === focusedSlide;

            return (
              <div key={`${review.name}-${idx}`} className="w-full md:w-1/3 shrink-0 px-3 md:py-3">
                <div
                  className={`glass-card rounded-[18px] p-8 flex flex-col justify-between min-h-65 h-full transition-all duration-500 ${
                    isFocused ? "opacity-100 md:scale-[1.03]" : "opacity-45 md:scale-[0.96]"
                  }`}
                >
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
                  &quot;{review.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-semibold text-white/80">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{review.name}</h4>
                    <p className="text-xs text-[#9CA3AF]">{review.role}</p>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex justify-center gap-2 mt-8">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() =>
              setCurrentSlide(
                visibleCards === 1 ? idx : (idx - 1 + reviews.length) % reviews.length
              )
            }
            aria-label={`Go to review slide ${idx + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              focusedSlide === idx
                ? "bg-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)]"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
