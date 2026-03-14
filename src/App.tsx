import { Hero } from "./components/Hero";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { SystemsThinking } from "./components/SystemsThinking";
import { CaseStudies } from "./components/CaseStudies";
import { SkillArchitecture } from "./components/SkillArchitecture";
import { Philosophy } from "./components/Philosophy";
import { Experience } from "./components/Experience";
import { Tools } from "./components/Tools";
import { FooterCTA } from "./components/FooterCTA";

export default function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-purple-500/30 selection:text-white">
      <Hero />
      <ImpactMetrics />
      <SystemsThinking />
      <CaseStudies />
      <SkillArchitecture />
      <Philosophy />
      <Experience />
      <Tools />
      <FooterCTA />
    </main>
  );
}
