const TrustBar = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0B0F1A]/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest mb-8">
          Brands I've worked with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
          <span className="text-xl font-bold tracking-tighter">ACME</span>
          <span className="text-xl font-bold tracking-tighter">GLOBAL</span>
          <span className="text-xl font-bold tracking-tighter">NEXUS</span>
          <span className="text-xl font-bold tracking-tighter">ZENITH</span>
          <span className="text-xl font-bold tracking-tighter">PULSE</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
