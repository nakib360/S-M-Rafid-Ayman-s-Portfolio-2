import { LuUserRound } from "react-icons/lu";

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

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
          Trusted by creators
        </h2>
        <p className="text-base text-[#9CA3AF]">Don&apos;t just take my word for it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="glass-card rounded-[18px] p-8 flex flex-col justify-between"
          >
            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">&quot;{review.text}&quot;</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <LuUserRound className="text-white/50" size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-sm font-medium">{review.name}</h4>
                <p className="text-xs text-[#9CA3AF]">{review.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-[#C026FF] shadow-[0_0_10px_rgba(192,38,255,0.8)]"></div>
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
        <div className="w-2 h-2 rounded-full bg-white/20"></div>
      </div>
    </section>
  );
};

export default Testimonials;
