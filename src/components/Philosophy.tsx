import { motion } from "motion/react";

const philosophies = [
  {
    title: "Scaling Creator Monetization Systems",
    content: "Monetization isn't just about payouts; it's about building sustainable economies. By designing tiered incentive structures and gamified donation mechanics, we transform passive viewers into active patrons, creating a predictable revenue engine for both the creator and the platform."
  },
  {
    title: "Live Content Retention Psychology",
    content: "Attention is the ultimate currency. Tripling retention requires understanding the psychological hooks of live content—pacing, interactive moments, and community recognition. It's about engineering the broadcast to make leaving feel like missing out."
  },
  {
    title: "Community-Led Platform Growth",
    content: "The most efficient acquisition channel is a highly engaged community. When creators are empowered with the right tools and incentives, their organic reach becomes the platform's growth engine, driving high-intent installs at scale."
  },
  {
    title: "AI's Role in Creator Performance",
    content: "AI is the ultimate leverage for content strategy. From predictive analytics on content trends to automated asset generation, integrating AI into the creator workflow allows for rapid iteration and performance optimization that was previously impossible."
  }
];

export function Philosophy() {
  return (
    <section className="py-32 relative bg-[#111]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white/80">
            Creator Economy <span className="text-white font-medium">Philosophy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {philosophies.map((phil, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-medium text-white">{phil.title}</h3>
              <p className="text-white/60 leading-relaxed">{phil.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
