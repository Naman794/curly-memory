import { motion } from "motion/react";

const cases = [
  {
    title: "Donation Growth Transformation",
    metric: "₹80K → ₹2L+",
    context: "Rooter Sports Technologies",
    description: "Restructured the creator monetization funnel and incentivization mechanics, resulting in a 150% increase in monthly streamer donations.",
  },
  {
    title: "Instagram Growth Scaling",
    metric: "0 → 250K+",
    context: "Rooter Sports Technologies",
    description: "Developed a viral content strategy and community engagement loop to build a massive organic audience from scratch.",
  },
  {
    title: "App Install Campaign Execution",
    metric: "80K–100K/mo",
    context: "Rooter Sports Technologies",
    description: "Orchestrated performance-driven creator campaigns to drive consistent, high-volume user acquisition.",
  },
  {
    title: "Retention Improvement Strategy",
    metric: "4m → 12m",
    context: "Rooter Sports Technologies",
    description: "Implemented live content optimization and viewer engagement tactics to triple average watch time across the platform.",
  },
];

export function CaseStudies() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80">
            Strategic <span className="text-white font-medium">Case Studies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-panel p-10 rounded-2xl group hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-sm text-purple-400 mb-4 tracking-wider uppercase">{c.context}</div>
              <h3 className="text-2xl font-medium text-white mb-6">{c.title}</h3>
              <div className="text-4xl font-light text-white mb-6 group-hover:gradient-text transition-all duration-300 inline-block">{c.metric}</div>
              <p className="text-white/60 leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
