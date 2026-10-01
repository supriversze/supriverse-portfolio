import React from 'react';
import { TECHNICAL_INFO } from '../data/technicalData';
import { Terminal, Cpu, Database, Binary, ShieldCheck } from 'lucide-react';

export const TechnicalSection: React.FC = () => {
  return (
    <div className="mb-14">
      {/* Top Terminal Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs mb-4">
        <Terminal className="w-3.5 h-3.5 text-blue-400" />
        <span>IDENTITY :: TECHNICAL_PORTFOLIO</span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      </div>

      {/* Main Technical Hero Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
        {TECHNICAL_INFO.headline}
      </h2>

      {/* Supporting Text */}
      <p className="max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
        {TECHNICAL_INFO.supportingText}
      </p>

      {/* Architecture Highlights Pill Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">CORE FOCUS</div>
            <div className="text-sm font-semibold text-white">AI & Machine Learning</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
            <Binary className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">ARCHITECTURE</div>
            <div className="text-sm font-semibold text-white">Agentic Systems</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">FULL-STACK</div>
            <div className="text-sm font-semibold text-white">MERN & Python APIs</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">DISCIPLINE</div>
            <div className="text-sm font-semibold text-white">Clean Engineering</div>
          </div>
        </div>
      </div>
    </div>
  );
};
