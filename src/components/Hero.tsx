import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="flex flex-col items-center gap-16 lg:gap-24">
          
          {/* Identity Panel (Left) */}
          <motion.div 
            style={{ y, scale, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-[150%] max-w-[150%] -ml-[25%] -mr-[25%] relative group"
          >
            {/* Animated Gradient Edge Glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/30 to-blue-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            
            {/* Image Panel */}
            <div className="relative w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden bg-[#141414]">
              {/* Image placeholder - using a high quality unsplash image for the 'founder' vibe */}
              <img 
                src="/p_pf.jpeg" 
                alt="Paramveer Singh" 
                className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Authority Headline (Right) */}
          <div className="w-full flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8">
                Community <br />
                <span className="font-medium gradient-text">Growth Architect</span> <br />
                for Creator Economies
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
                Scaling large creator ecosystems through monetization systems, retention intelligence and performance-driven campaign execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="group flex items-center gap-4 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors">
                View Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
