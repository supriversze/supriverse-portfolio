import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useThemeMode } from '../context/ThemeModeContext';
import { ArrowUp, FileText, ExternalLink, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, BehanceIcon, MediumIcon } from './Icons';

export const Footer: React.FC = () => {
  const { isTechnical, setMode } = useThemeMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-850 bg-slate-950/90 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.brandName}
              </span>
              <span
                className={`inline-block w-2 h-2 rounded-full transition-colors duration-300 ${
                  isTechnical
                    ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]'
                    : 'bg-yellow-400 shadow-[0_0_8px_#facc15]'
                }`}
              />
            </div>
            <p className="text-sm text-slate-300 font-medium">
              {PERSONAL_INFO.name} — {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engineering intelligent digital systems while exploring the intersection of algorithms, software development, and expressive visual design.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Heart className="w-3 h-3 text-red-400" />
                <span>Built with curiosity, code &amp; creativity.</span>
              </span>
            </div>
          </div>

          {/* Dual Resume Download Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Curriculum Vitae
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/resume-technical.pdf"
                  download="Supriya_Suresh_Technical_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <FileText className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Technical Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume-creative.pdf"
                  download="Supriya_Suresh_Creative_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-yellow-400 transition-colors group"
                >
                  <FileText className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span>Creative Resume</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-2">
                Quick Navigation
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setMode('technical');
                    document.getElementById('technical')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-850 text-blue-300 border border-blue-800/40 hover:border-blue-500/60 transition-colors cursor-pointer"
                >
                  Technical Mode
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('creative');
                    document.getElementById('creative-work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-850 text-yellow-300 border border-yellow-800/40 hover:border-yellow-500/60 transition-colors cursor-pointer"
                >
                  Creative Mode
                </button>
              </div>
            </div>
          </div>

          {/* Social Links: GitHub, LinkedIn, Behance, Medium */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-3">
              Connect Across Networks
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/supriyasuresh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GitHubIcon className="w-4 h-4 text-slate-400" />
                    <span>GitHub</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/supriyasuresh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedInIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/supriya_suresh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <BehanceIcon className="w-4 h-4 text-yellow-400" />
                    <span>Behance</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@supriyasuresh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-850 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MediumIcon className="w-4 h-4 text-yellow-400" />
                    <span>Medium</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright 2026 Supriya Suresh, Small Note, and Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Supriya Suresh. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-slate-500">
              Dual Persona System: <span className="text-blue-400">#2563EB</span> × <span className="text-yellow-400">#FACC15</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
