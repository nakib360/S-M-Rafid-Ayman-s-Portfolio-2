const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xl font-bold tracking-tighter text-white"
            >
              SMRA
            </a>
            <div className="hidden md:block h-4 w-px bg-white/10"></div>
            <span className="hidden md:block text-xs font-medium text-[#9CA3AF] uppercase">
              Visual Conversion Strategist
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#reviews" className="hover:text-white">
              Reviews
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200"
          >
            Start Project
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
