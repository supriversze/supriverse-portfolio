import React, { useState, useEffect } from 'react';
import { ThemeModeProvider, useThemeMode } from './context/ThemeModeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalSection } from './components/TechnicalSection';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ResumeCTA } from './components/ResumeCTA';
import { CreativeTeaser } from './components/CreativeTeaser';
import { CreativeSection } from './components/creative/CreativeSection';
import { TechnicalTeaser } from './components/creative/TechnicalTeaser';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const PortfolioContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { isTechnical, isCreative } = useThemeMode();

  // Initialize IntersectionObserver scroll reveals for elements across the app
  useScrollReveal([isTechnical, isCreative]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = isTechnical
        ? ['home', 'technical', 'skills', 'experience', 'projects', 'resume', 'about', 'contact']
        : ['creative-hero', 'creative-leadership', 'creative-work', 'uiux-showcase', 'creative-resume', 'about', 'contact'];

      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTechnical]);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-yellow-400 selection:text-slate-950 flex flex-col font-sans transition-colors duration-300">
      {/* Dynamic Background Particles & Grid */}
      <BackgroundCanvas />

      {/* Fixed Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10 flex-1">
        {/* ========================================================= */}
        {/* TECHNICAL MODE VIEW                                      */}
        {/* ========================================================= */}
        {isTechnical && (
          <div className="animate-in fade-in duration-300">
            {/* Technical Hero Section */}
            <Hero />

            {/* Technical Content Container */}
            <div id="technical" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
              {/* Technical Section Heading & Pillars */}
              <TechnicalSection />

              {/* Grouped Technical Skills (Chips, No fake bars) */}
              <Skills />

              {/* Experience Timeline (Editable Internship + Hackathons, Research, Leadership, Activities) */}
              <Experience />

              {/* Projects Grid with Project Type Pills & Details Modal */}
              <Projects />

              {/* Technical Resume Download CTA */}
              <ResumeCTA />

              {/* Creative Side Invitation Teaser */}
              <CreativeTeaser />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CREATIVE MODE VIEW                                       */}
        {/* ========================================================= */}
        {isCreative && (
          <div className="animate-in fade-in duration-300">
            {/* Complete Creative Mode Suite */}
            <CreativeSection />

            {/* Technical Side Invitation Teaser */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <TechnicalTeaser />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SHARED SECTIONS (Dual-Identity Story & Contact)           */}
        {/* ========================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Supriya Suresh (CS Engineering Student × Creative Lead) */}
          <AboutSection />

          {/* Contact Section & Communication Channels */}
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ThemeModeProvider>
      <PortfolioContent />
    </ThemeModeProvider>
  );
}

export default App;
