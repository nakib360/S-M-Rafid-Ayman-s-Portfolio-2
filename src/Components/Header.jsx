import { LuMenu } from "react-icons/lu";
import { motion } from "motion/react";

const Header = () => {
  const navs = [
    { name: "Home", path: "#home" },
    { name: "Process", path: "#process" },
    { name: "Services", path: "#services" },
    { name: "Reviews", path: "#reviews" },
    { name: "Contact", path: "#contact" }
  ]
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 glass-card backdrop-blur-[20px] border-b-0 border-white/5 transition-all duration-300"
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
          {navs.map((nav, idx) => (
            <div key={idx}>
              <a href={nav.path} className="hover:text-white transition-colors">
                {nav.name}
              </a>
            </div>
          ))}
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
