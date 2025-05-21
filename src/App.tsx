import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { ProblemSection } from './components/Problem/ProblemSection';
import { AiAgentIntroSection } from './components/AiAgentIntro/AiAgentIntroSection';
import { CharactersSection } from './components/Characters/CharactersSection';
import { BenefitsSection } from './components/Benefits/BenefitsSection';
import { UseCasesSection } from './components/UseCases/UseCasesSection';
import { PricingSection } from './components/Pricing/PricingSection';
import { ProcessSection } from './components/Process/ProcessSection';
import { FAQSection } from './components/FAQ/FAQSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 z-[-1]"></div>
          <ProblemSection />
          <AiAgentIntroSection />
          <CharactersSection />
          <BenefitsSection />
          <UseCasesSection />
          <PricingSection />
          <ProcessSection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;