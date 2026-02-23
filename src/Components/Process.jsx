const Process = () => {
  return (
    <section id="process" class="py-24 md:py-32 max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-medium tracking-tight mb-4">How it works</h2>
            <p class="text-base text-[#9CA3AF]">Seamless design delivery from request to final files.</p>
        </div>

        <div class="relative ml-4 md:ml-0 md:pl-8">
            <div class="absolute left-0 top-4 bottom-4 w-px bg-linear-to-b from-[#C026FF] via-[#6D28D9] to-transparent shadow-[0_0_15px_rgba(192,38,255,0.5)]"></div>

            <div class="space-y-8 relative">
                <div class="relative pl-10 md:pl-12 group">
                    <div class="absolute -left-1.25 top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
                    <div class="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                        <span class="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">Step 01</span>
                        <h3 class="text-xl font-medium mb-2 tracking-tight">Submit Request</h3>
                        <p class="text-sm text-[#9CA3AF] leading-relaxed">Add as many design requests to your board as you'd like. Briefing is simple and async.</p>
                    </div>
                </div>

                <div class="relative pl-10 md:pl-12 group">
                    <div class="absolute -left-1.25 top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
                    <div class="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                        <span class="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">Step 02</span>
                        <h3 class="text-xl font-medium mb-2 tracking-tight">Design in Progress</h3>
                        <p class="text-sm text-[#9CA3AF] leading-relaxed">I'll get to work immediately. High-quality designs are crafted with pixel-perfect precision.</p>
                    </div>
                </div>

                <div class="relative pl-10 md:pl-12 group">
                    <div class="absolute -left-1.25 top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
                    <div class="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                        <span class="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">Step 03</span>
                        <h3 class="text-xl font-medium mb-2 tracking-tight">Receive Updates</h3>
                        <p class="text-sm text-[#9CA3AF] leading-relaxed">Review designs and request unlimited revisions until you are 100% satisfied.</p>
                    </div>
                </div>

                <div class="relative pl-10 md:pl-12 group">
                    <div class="absolute -left-1.25 top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
                    <div class="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                        <span class="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">Step 04</span>
                        <h3 class="text-xl font-medium mb-2 tracking-tight">Final Delivery</h3>
                        <p class="text-sm text-[#9CA3AF] leading-relaxed">Receive your source files, perfectly organized and ready for deployment.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Process;