import React from 'react';
import { CREATIVE_INFO, CREATIVE_SOCIAL_LINKS } from '../../data/creativeData';
import { BehanceIcon, LinkedInIcon, MediumIcon } from '../Icons';
import {
  Palette,
  ArrowDown,
  Layers,
  Mail,
  Image,
  PenTool,
  Sparkles,
  FileText,
} from 'lucide-react';

export const CreativeHero: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Behance':
        return <BehanceIcon className="w-5 h-5 text-yellow-300" />;
      case 'LinkedIn':
        return <LinkedInIcon className="w-5 h-5 text-slate-300" />;
      case 'Email':
        return <Mail className="w-5 h-5 text-slate-300" />;
      case 'Medium':
        return <MediumIcon className="w-5 h-5 text-slate-300" />;
      default:
        return <Palette className="w-5 h-5 text-slate-300" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="creative-hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Visual Design Element Backdrop: Golden Solar Radial Glow & Ambient Particles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-yellow-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Creative Persona Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-yellow-400/40 text-xs font-mono text-yellow-300 backdrop-blur-md mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-semibold uppercase tracking-wider">CREATIVE DIRECTION &amp; VISUAL ARTS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
        </div>

        {/* Expressive Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-300">
            {CREATIVE_INFO.headline}
          </span>
        </h1>

        {/* Expressive Subheading */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-200 font-mono">
            {CREATIVE_INFO.subheading}
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 text-balance">
          {CREATIVE_INFO.supportingCopy}
        </p>

        {/* Expressive Preview Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-yellow-500/30 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-sm">
            <Image className="w-3.5 h-3.5 text-yellow-400" />
            <span>3:2 Poster Gallery</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-yellow-500/30 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-sm">
            <PenTool className="w-3.5 h-3.5 text-yellow-400" />
            <span>UI/UX Case Studies</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-yellow-500/30 text-xs font-medium text-slate-200 flex items-center gap-2 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-yellow-400" />
            <span>Brand Architecture &amp; Typography</span>
          </div>
        </div>

        {/* CTA Buttons: Strictly Creative */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* View Poster Gallery */}
          <button
            type="button"
            onClick={() => scrollToSection('creative-work')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-yellow-400 hover:bg-yellow-300 text-slate-950 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:scale-[1.02] cursor-pointer"
          >
            <Image className="w-4 h-4 text-slate-950" />
            <span>Explore Poster Gallery</span>
            <ArrowDown className="w-4 h-4 ml-0.5" />
          </button>

          {/* UI/UX Showcase */}
          <button
            type="button"
            onClick={() => scrollToSection('uiux-showcase')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-yellow-300 border border-yellow-400/40 hover:border-yellow-400 transition-all duration-300 cursor-pointer shadow-md"
          >
            <PenTool className="w-4 h-4 text-yellow-400" />
            <span>UI / UX Showcase</span>
          </button>

          {/* Creative Resume */}
          <button
            type="button"
            onClick={() => scrollToSection('creative-resume')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-yellow-400" />
            <span>Creative Resume</span>
          </button>
        </div>

        {/* Social Icons Row: Strictly Creative (Behance, LinkedIn, Email, Medium - NO GitHub) */}
        <div className="flex items-center gap-4">
          {CREATIVE_SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Supriya's ${link.platform}`}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-yellow-400/60 text-slate-400 hover:text-yellow-300 hover:bg-slate-850 hover:-translate-y-1 transition-all duration-200 shadow-sm"
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>

        {/* Ambient Creative Discipline Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-850/80 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-center">
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <Image className="w-4 h-4 text-yellow-400 inline" />
              <span>Posters</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">Editorial &amp; Event Typography</span>
          </div>
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <PenTool className="w-4 h-4 text-yellow-400 inline" />
              <span>UI / UX</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">Figma &amp; Design Systems</span>
          </div>
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <Palette className="w-4 h-4 text-yellow-400 inline" />
              <span>Leadership</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">Direction &amp; Brand Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
