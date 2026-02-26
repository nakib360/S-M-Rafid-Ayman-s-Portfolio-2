import { LuBriefcase, LuCog, LuHouse, LuMail, LuMenu, LuStar, LuX } from "react-icons/lu";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/S M Rafid Ayman Logo.svg";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("#home");
  const navs = useMemo(
    () => [
      { name: "Home", path: "#home", icon: LuHouse },
      { name: "Process", path: "#process", icon: LuCog },
      { name: "Services", path: "#services", icon: LuBriefcase },
      { name: "Reviews", path: "#reviews", icon: LuStar },
      { name: "Contact", path: "#contact", icon: LuMail },
    ],
    []
  );

  useEffect(() => {
    if (pathname !== "/") return;

    const syncFromHash = () => {
      if (!window.location.hash) return;
      setActivePath(window.location.hash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const updateActiveByScroll = () => {
      const sections = navs
        .map((nav) => document.querySelector(nav.path))
        .filter(Boolean);

      if (!sections.length) return;

      const headerOffset = 140;
      const currentY = window.scrollY + headerOffset;
      let matchedId = sections[0].id;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= currentY) {
          matchedId = section.id;
        }
      });

      setActivePath(`#${matchedId}`);
    };

    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll, { passive: true });
    window.addEventListener("resize", updateActiveByScroll);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("scroll", updateActiveByScroll);
      window.removeEventListener("resize", updateActiveByScroll);
    };
  }, [pathname, navs]);

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
        <div className="flex items-center gap-2">
          <div>
            <img className="h-4.5 w-4.5" src={logo} alt="Rafid's logo" />
          </div>
          <p className="text-xl font-bold tracking-tighter text-white">
            S M  RAFID  AYMAN
          </p>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
          {navs.map((nav, idx) => (
            <div key={idx}>
              <a
                href={nav.path}
                onClick={() => setActivePath(nav.path)}
                className={`group relative inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${
                  activePath === nav.path ? "text-white" : "text-[#9CA3AF]"
                }`}
              >
                <nav.icon
                  size={15}
                  strokeWidth={1.8}
                  className={`transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c084fc] ${
                    activePath === nav.path ? "text-[#c084fc]" : ""
                  }`}
                />
                {nav.name}
                <span
                  className={`pointer-events-none absolute -bottom-1 left-0 h-[1.5px] bg-linear-to-r from-[#c084fc] to-[#60a5fa] transition-all duration-300 group-hover:w-full ${
                    activePath === nav.path ? "w-full" : "w-0"
                  }`}
                />
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
            className="md:hidden relative h-6 w-6 text-[#9CA3AF] hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <motion.span
              initial={false}
              animate={{ opacity: isMenuOpen ? 0 : 1, rotate: isMenuOpen ? -90 : 0, scale: isMenuOpen ? 0.7 : 1 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <LuMenu size={24} strokeWidth={1.5} />
            </motion.span>
            <motion.span
              initial={false}
              animate={{ opacity: isMenuOpen ? 1 : 0, rotate: isMenuOpen ? 0 : 90, scale: isMenuOpen ? 1 : 0.7 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <LuX size={24} strokeWidth={1.7} />
            </motion.span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute bg-[#05050A] border border-[#C026FF] rounded-2xl p-3 w-2/3 right-3 top-24 space-y-5">
          <div className="flex flex-col gap-5 items-stretch p-2 w-full">
            {navs.map((nav, idx) => (
              <div key={idx} className="w-full">
                <a
                  href={nav.path}
                  onClick={() => {
                    setActivePath(nav.path);
                    setIsMenuOpen(false);
                  }}
                  className={`group inline-flex w-full items-center justify-start gap-2 rounded-lg px-2 py-1 transition-all duration-300 hover:bg-white/5 hover:text-white ${
                    activePath === nav.path ? "bg-white/8 text-white" : "text-[#9CA3AF]"
                  }`}
                >
                  <nav.icon
                    size={16}
                    strokeWidth={1.8}
                    className={`transition-transform duration-300 group-hover:scale-110 group-hover:text-[#c084fc] ${
                      activePath === nav.path ? "text-[#c084fc]" : ""
                    }`}
                  />
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
