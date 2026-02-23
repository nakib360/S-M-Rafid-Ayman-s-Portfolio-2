const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass-card rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Let’s build something <span className="bg-gradient-to-r from-[#C026FF] to-[#EC4899] bg-clip-text text-transparent">powerful.</span>
        </h2>
        <p className="text-base text-[#9CA3AF] mb-10 max-w-lg mx-auto">
          Stop losing clients to bad design. Upgrade your visual identity today.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-bold"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Contact;