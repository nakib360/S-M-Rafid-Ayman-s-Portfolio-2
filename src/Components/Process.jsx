const steps = [
  {
    step: "Step 01",
    title: "Submit Request",
    text: "Add as many design requests to your board as you'd like. Briefing is simple and async.",
  },
  {
    step: "Step 02",
    title: "Design in Progress",
    text: "I'll get to work immediately. High-quality designs are crafted with pixel-perfect precision.",
  },
  {
    step: "Step 03",
    title: "Receive Updates",
    text: "Review designs and request unlimited revisions until you are 100% satisfied.",
  },
  {
    step: "Step 04",
    title: "Final Delivery",
    text: "Receive your source files, perfectly organized and ready for deployment.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          How it works
        </h2>
        <p className="text-base text-[#9CA3AF]">
          Seamless design delivery from request to final files.
        </p>
      </div>

      <div className="relative ml-4 md:ml-0 md:pl-8">
        <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-[#C026FF] via-[#6D28D9] to-transparent shadow-[0_0_15px_rgba(192,38,255,0.5)]"></div>

        <div className="space-y-8 relative">
          {steps.map((item) => (
            <div key={item.step} className="relative pl-10 md:pl-12 group">
              <div className="absolute left-[-5px] top-6 w-3 h-3 rounded-full bg-[#05050A] border-2 border-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)] transition-all group-hover:scale-125"></div>
              <div className="glass-card rounded-[18px] p-6 md:p-8 transition-transform group-hover:-translate-y-1">
                <span className="text-xs font-bold text-[#C026FF] mb-2 block tracking-widest uppercase">
                  {item.step}
                </span>
                <h3 className="text-xl font-medium mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
