const Testimonials = () => {
  const reviews = [
    {
      text: "Rafid completely transformed our social presence. The CTR on our posts doubled within the first month. Highly recommend his unlimited service.",
      name: "Alex Chen",
      country: "USA",
    },
    {
      text: "Finding a good designer is hard. Finding one who understands strategy and delivers fast is rare. Rafid is that rare find. Our go-to guy for all visuals.",
      name: "Sarah Jenkins",
      country: "UK",
    },
    {
      text: "The brand identity he crafted for our SaaS startup instantly elevated our perceived value. He perfectly nailed the modern, dark aesthetic we wanted.",
      name: "Liam Dubois",
      country: "Canada",
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Trusted by creators</h2>
        <p className="text-base text-[#9CA3AF]">Don't just take my word for it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card rounded-[18px] p-8 flex flex-col justify-between">
            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">👤</div>
              <div>
                <h4 className="text-sm font-medium">{r.name}</h4>
                <p className="text-xs text-[#9CA3AF]">{r.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;