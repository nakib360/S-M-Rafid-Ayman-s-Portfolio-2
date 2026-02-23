const Services = () => {

  return (
    <section id="services" className="py-24 bg-[#0B0F1A]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Design Arsenal</h2>
                <p className="text-base text-[#9CA3AF]">Everything you need to visually dominate your market.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:gallery-wide-linear" className="text-[#C026FF]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Social Media Design</h3>
                    <p className="text-sm text-[#9CA3AF]">Thumb-stopping content optimized for every platform.</p>
                </div>
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:play-circle-linear" className="text-[#EC4899]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Thumbnail Design</h3>
                    <p className="text-sm text-[#9CA3AF]">High-CTR YouTube thumbnails that drive views instantly.</p>
                </div>
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:vector-square-linear" className="text-[#C026FF]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Logo Design</h3>
                    <p className="text-sm text-[#9CA3AF]">Minimal, memorable, and timeless marks for your brand.</p>
                </div>
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:layers-linear" className="text-[#EC4899]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Brand Identity</h3>
                    <p className="text-sm text-[#9CA3AF]">Comprehensive visual systems to unify your business.</p>
                </div>
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="text-[#C026FF]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Manipulation Design</h3>
                    <p className="text-sm text-[#9CA3AF]">Complex photo composites and surreal visual art.</p>
                </div>
                <div className="glass-card rounded-[18px] p-8 group hover:-translate-y-1 hover:border-[#C026FF]/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(192,38,255,0.2)] transition-shadow">
                        <iconify-icon icon="solar:printer-linear" className="text-[#EC4899]" width="24" height="24" style={{strokeWidth: 1.5}}></iconify-icon>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">Print Design</h3>
                    <p className="text-sm text-[#9CA3AF]">Business cards, flyers, and merchandise that stand out.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;