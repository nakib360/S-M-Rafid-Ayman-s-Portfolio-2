import { LuUserRound } from "react-icons/lu";
import { motion } from "motion/react";
import { containerStagger, fadeInUp, viewportOnce } from "../lib/animations";

const skills = ["Photoshop", "Illustrator", "Branding", "UI Design", "Social Media"];

const About = () => {
  return (
    <motion.section
      variants={containerStagger}
      initial="initial"
      whileInView="whileInView"
      viewport={viewportOnce}
      className="py-24 max-w-5xl mx-auto px-6"
    >
      <motion.div variants={fadeInUp} className="glass-card rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <motion.div variants={fadeInUp} className="md:col-span-2 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-linear-to-b from-[#C026FF] to-[#05050A] glow-shadow">
              <div className="w-full h-full rounded-full bg-[#0B0F1A] flex items-center justify-center border-4 border-[#05050A] overflow-hidden">
                <LuUserRound className="text-white/20" size={80} strokeWidth={1} />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="md:col-span-3">
            <h2 className="text-3xl font-medium tracking-tight mb-4">S M Rafid Ayman</h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
              I am a senior graphic designer specializing in building digital trust
              through modern product design. Operating out of Bangladesh, I partner
              with international brands, SaaS companies, and creators to elevate
              their visual presence. My goal is simple: convert views into value
              through strategic aesthetics.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium border border-white/10 bg-white/5 rounded-full px-4 py-1.5 text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
