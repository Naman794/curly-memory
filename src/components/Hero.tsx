import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col gap-20 lg:gap-28">

          {/* ===== Identity Panel ===== */}
          <motion.div
            style={{ y, scale, opacity }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mx-auto relative group"
          >
            {/* Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700" />

            {/* Image Panel */}
            <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden bg-[#0d0d0d]">
              <img
                src="/p_pf.jpeg"
                alt="Paramveer Singh"
                className="w-full h-full object-contain object-center opacity-90 transition duration-700 group-hover:scale-[1.02]"
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
            </div>
          </motion.div>

          {/* ===== Text Content ===== */}
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05]"
            >
              Community <br />
              <span className="font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Growth Architect
              </span>{" "}
              <br />
              for Creator Economies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mt-10"
            >
              Scaling large creator ecosystems through monetization systems,
              retention intelligence and performance-driven campaign execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-14"
            >
              <button className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
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
