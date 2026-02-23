const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 text-center bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xl font-bold tracking-tighter text-white">SMRA</span>
        <div className="flex items-center gap-6 text-sm font-medium text-[#9CA3AF]">
          <a href="#" className="hover:text-white flex items-center gap-1">✉️ Email</a>
          <a href="#" className="hover:text-white flex items-center gap-1">📞 WhatsApp</a>
          <a href="#" className="hover:text-white flex items-center gap-1">🔗 Behance</a>
        </div>
        <p className="text-xs text-[#9CA3AF]">© 2024 S M Rafid Ayman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;