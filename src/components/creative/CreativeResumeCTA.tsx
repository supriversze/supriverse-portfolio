import React from 'react';
import { CREATIVE_INFO } from '../../data/creativeData';
import { FileDown, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const CreativeResumeCTA: React.FC = () => {
  return (
    <section id="creative-resume" className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-yellow-950/40 via-slate-900/80 to-slate-900/90 border border-yellow-400/40 p-8 sm:p-10 backdrop-blur-xl shadow-xl shadow-yellow-500/5">
        {/* Yellow ambient glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-yellow-400/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/70 border border-yellow-400/40 text-yellow-300 font-mono text-xs mb-3">
              <FileText className="w-3.5 h-3.5 text-yellow-400" />
              <span>DESIGN_PORTFOLIO // CREATIVE CURRICULUM</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Creative Direction &amp; Visual Design Resume
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Comprehensive design portfolio dossier detailing poster campaigns, collegiate symposium branding, Figma UI/UX case studies, typography systems, and creative leadership roles.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-yellow-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Format: PDF Document
              </span>
              <span className="flex items-center gap-1.5 text-yellow-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Focus: Posters • Branding • UI/UX
              </span>
              <span className="flex items-center gap-1.5 text-yellow-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                Updated: 2026 Creative Edition
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {/* Primary Download Button in Yellow/Gold */}
            <a
              href={CREATIVE_INFO.resumePath}
              download={CREATIVE_INFO.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            >
              <FileDown className="w-5 h-5 text-slate-950" />
              <span>Download Creative Resume</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <div className="text-center text-[11px] font-mono text-slate-400">
              Direct path:{' '}
              <code className="text-yellow-400 font-semibold">
                {CREATIVE_INFO.resumePath}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
