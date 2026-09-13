import React from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { CareerTrajectory } from './components/CareerTrajectory';
import { ProjectShowcase } from './components/ProjectShowcase';
import { EngineeringDomains } from './components/EngineeringDomains';
import { TechConstellation } from './components/TechConstellation';
import { SystemDesignCanvas } from './components/SystemDesignCanvas';
import { AiPipelineSandbox } from './components/AiPipelineSandbox';
import { EngineeringMindset } from './components/EngineeringMindset';
import { AboutOrigins } from './components/AboutOrigins';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent Frosted Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <CareerTrajectory />
        <ProjectShowcase />
        <EngineeringDomains />
        <TechConstellation />
        <SystemDesignCanvas />
        <AiPipelineSandbox />
        <EngineeringMindset />
        <AboutOrigins />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;
