import { motion } from "motion/react";

const frameworks = [
  {
    title: "Creator Monetization Strategy",
    description: "Designing scalable revenue pathways that align platform incentives with creator growth, turning casual streamers into sustainable businesses.",
  },
  {
    title: "Retention Optimization Loops",
    description: "Analyzing viewer behavior to engineer content formats and engagement mechanics that triple average watch times.",
  },
  {
    title: "Campaign KPI Alignment",
    description: "Translating brand objectives into creator-native executions that drive measurable performance marketing results.",
  },
  {
    title: "Data-Driven Content Optimization",
    description: "Leveraging analytics to refine content strategy, ensuring maximum reach and engagement across the ecosystem.",
  },
  {
    title: "Creator-Led Growth Funnels",
    description: "Building acquisition engines where creators act as the primary growth lever for platform adoption and user acquisition.",
  },
];

export function SystemsThinking() {
  return (
    <section className="py-32 relative bg-[#111]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80 mb-6">
                Systems <span className="text-white font-medium">Thinking</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                Operational frameworks designed to scale ecosystems predictably, moving beyond intuition to data-backed growth architectures.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-12">
            {frameworks.map((fw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border-l border-white/10 pl-8 relative before:absolute before:left-0 before:top-0 before:w-px before:h-0 before:bg-gradient-to-b before:from-purple-500 before:to-blue-500 hover:before:h-full before:transition-all before:duration-700"
              >
                <h3 className="text-2xl font-medium text-white mb-4">{fw.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">{fw.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
