import { LuMenu } from "react-icons/lu";
import { motion } from "motion/react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 top-20 bg-[#05050A]/35 z-40"
        />
      )}

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-xl font-bold tracking-tighter text-white">
            S M  RAFID  AYMAN
          </a>
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
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <LuMenu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute bg-[#05050A] border border-[#C026FF] rounded-2xl p-3 w-2/3 right-3 top-24 space-y-5">
          <div className="flex flex-col gap-5 items-stretch p-2 w-full">
            {navs.map((nav, idx) => (
              <div key={idx} className="w-full">
                <a href={nav.path} onClick={() => setIsMenuOpen(false)} className="text-end hover:text-white transition-colors bg-white/10 p-1 rounded-sm block w-full">
                  {nav.name}
                </a>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden flex items-center justify-center h-10 px-6 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Start Project
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Header;
