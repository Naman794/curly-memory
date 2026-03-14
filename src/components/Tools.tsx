import { motion } from "motion/react";

const tools = [
  "Power BI", "Amazon QuickSight", "Looker Studio", 
  "Trackier", "Singular", "ChatGPT", "Veo3", "Gemini", 
  "Odoo", "Notion", "Jira", "Premiere Pro", 
  "DaVinci Resolve", "Excel", "Google Sheets"
];

export function Tools() {
  return (
    <section className="py-32 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-widest text-white/40">Operational Stack</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="text-white/50 hover:text-white transition-colors duration-300 text-lg font-light cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
