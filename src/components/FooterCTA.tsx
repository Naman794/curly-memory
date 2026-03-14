import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-12">
            Let's build scalable <br />
            <span className="font-medium gradient-text">creator ecosystems.</span>
          </h2>
          
          <button className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors text-lg">
            Start the Conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-white/30">
        © {new Date().getFullYear()} Paramveer Singh. All rights reserved.
      </div>
    </section>
  );
}
