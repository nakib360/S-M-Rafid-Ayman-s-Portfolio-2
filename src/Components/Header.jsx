import { LuMenu } from "react-icons/lu";
import { motion } from "motion/react";
import { easing } from "../lib/animations";

const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easing }}
      className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            SMRA
          </a>
          <div className="hidden md:block h-4 w-px bg-white/10"></div>
          <span className="hidden md:block text-xs font-medium text-[#9CA3AF] tracking-wide uppercase">
            Visual Conversion Strategist
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
          <a href="#process" className="hover:text-white transition-colors">
            Process
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#reviews" className="hover:text-white transition-colors">
            Reviews
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Start Project
          </a>
          <button
            className="md:hidden text-[#9CA3AF] hover:text-white"
            aria-label="Open menu"
            type="button"
          >
            <LuMenu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
