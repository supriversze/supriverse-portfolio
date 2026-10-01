import React from 'react';
import { TECHNICAL_INFO } from '../data/technicalData';
import { FileDown, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  return (
    <section id="resume" className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-950/40 via-slate-900/80 to-slate-900/90 border border-blue-500/35 p-8 sm:p-10 backdrop-blur-xl shadow-xl shadow-blue-500/5">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 font-mono text-xs mb-3">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>CAREER_RECORD // CURRICULUM VITAE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Verified Technical Background &amp; Experience
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Comprehensive dossier detailing my B.Tech coursework, Agentic AI research, full-stack software development projects, hackathon distinctions, and technical competencies.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Format: PDF Document
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Specialization: Computer Science &amp; AI
              </span>
              <span className="flex items-center gap-1.5 text-blue-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Updated: 2026 Edition
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {/* Primary Download Button */}
            <a
              href={TECHNICAL_INFO.resumePath}
              download={TECHNICAL_INFO.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              <FileDown className="w-5 h-5 text-white" />
              <span>Download Technical Resume</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <div className="text-center text-[11px] font-mono text-slate-400">
              Direct path: <code className="text-blue-400">{TECHNICAL_INFO.resumePath}</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
