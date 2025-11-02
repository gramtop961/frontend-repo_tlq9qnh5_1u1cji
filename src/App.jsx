import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ExperienceProjects from './components/ExperienceProjects';
import ContactFooter from './components/ContactFooter';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />

        <Skills />
        <ExperienceProjects />
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;
