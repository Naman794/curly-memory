import { motion } from "motion/react";

const skills = [
  "Growth & Monetization",
  "Performance Marketing",
  "Creator Ecosystem Management",
  "AI Content Strategy",
  "Campaign Execution",
  "Data Analytics"
];

export function SkillArchitecture() {
  return (
    <section className="py-32 relative bg-[#0a0a0a] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80">
            Skill <span className="text-white font-medium">Architecture</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-lg text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
