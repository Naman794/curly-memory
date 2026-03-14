import { motion } from "motion/react";

const metrics = [
  { value: "5,000+", label: "Creators Managed" },
  { value: "₹2L+", label: "Monthly Donation Growth", sub: "Up from ₹80K/month" },
  { value: "250K+", label: "Instagram Growth Scaled", sub: "From 0 followers" },
  { value: "80-100K", label: "Monthly App Installs Driven" },
  { value: "300%", label: "Retention Improvement", sub: "4 to 12 minutes avg. watch time" },
  { value: "Tier 1", label: "Campaign Execution", sub: "Amazon, Flipkart, Intel" },
];

export function ImpactMetrics() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80">
            Measurable <span className="text-white font-medium">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-12 group hover:bg-[#0f0f0f] transition-colors"
            >
              <div className="text-5xl md:text-6xl font-light tracking-tighter mb-4 text-white group-hover:gradient-text transition-all duration-500 inline-block">
                {metric.value}
              </div>
              <div className="text-lg font-medium text-white/80 mb-2">{metric.label}</div>
              {metric.sub && <div className="text-sm text-white/40">{metric.sub}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
