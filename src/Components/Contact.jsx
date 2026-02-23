import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../lib/animations";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-32 px-6"
    >
      <motion.div variants={fadeInUp} className="max-w-4xl mx-auto glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#C026FF]/10 to-transparent pointer-events-none"></div>

        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6 relative z-10">
          Let&apos;s build something <span className="text-gradient">powerful.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-base text-[#9CA3AF] mb-10 max-w-lg mx-auto relative z-10">
          Stop losing clients to bad design. Upgrade your visual identity today.
        </motion.p>

        <motion.a
          variants={fadeInUp}
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black text-base font-bold transition-all hover:scale-[1.02] active:scale-95 glow-shadow relative z-10"
        >
          Start Your Project
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
