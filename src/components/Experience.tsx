import { motion } from "motion/react";

const experiences = [
  {
    role: "Community Manager",
    company: "Rooter Sports Technologies",
    period: "Nov 2024 – Present",
  },
  {
    role: "Community Executive II",
    company: "Rooter Sports Technologies",
    period: "May 2023 – Nov 2024",
  },
  {
    role: "Community Executive",
    company: "Rooter Sports Technologies",
    period: "May 2022 – May 2023",
  },
];

export function Experience() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80 mb-6">
                Experience <span className="text-white font-medium">Timeline</span>
              </h2>
              <div className="mt-12">
                <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4">Education</h3>
                <p className="text-lg text-white/80">B.Sc Computer Science</p>
                <p className="text-white/50">Delhi University</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative border-l border-white/10 pl-8 md:pl-12 py-4">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="mb-16 last:mb-0 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 rounded-full bg-white/20 border border-white/50" />
                  
                  <div className="text-sm text-purple-400 mb-2 font-mono">{exp.period}</div>
                  <h3 className="text-2xl font-medium text-white mb-1">{exp.role}</h3>
                  <div className="text-lg text-white/50">{exp.company}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
