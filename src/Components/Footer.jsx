import { LuLink, LuMail, LuPhone } from "react-icons/lu";
import { motion } from "motion/react";
import { fadeInUp, viewportOnce } from "../lib/animations";

const Footer = () => {
  return (
    <motion.footer
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      variants={{
        initial: {},
        whileInView: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="border-t border-white/5 py-12 text-center bg-[#0B0F1A]"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.span variants={fadeInUp} className="text-xl font-bold tracking-tighter text-white">
          SMRA
        </motion.span>

        <motion.div variants={fadeInUp} className="flex items-center gap-6 text-sm font-medium text-[#9CA3AF]">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <LuMail size={18} strokeWidth={1.5} /> Email
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <LuPhone size={18} strokeWidth={1.5} /> WhatsApp
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
            <LuLink size={18} strokeWidth={1.5} /> Behance
          </a>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-xs text-[#9CA3AF]">
          © 2024 S M Rafid Ayman. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
