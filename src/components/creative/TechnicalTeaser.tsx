import React from 'react';
import { useThemeMode } from '../../context/ThemeModeContext';
import { Code2, Cpu, Database, Binary, ArrowRight } from 'lucide-react';

export const TechnicalTeaser: React.FC = () => {
  const { setMode } = useThemeMode();

  const handleSwitchToTechnical = () => {
    setMode('technical');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="technical-teaser" className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-950/30 via-slate-900/80 to-slate-950 border border-blue-500/40 p-8 sm:p-12 backdrop-blur-xl shadow-xl shadow-blue-500/5">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 font-mono text-xs mb-4">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>DUAL_IDENTITY // THE TECHNICAL SIDE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Building Systems, Products &amp; Intelligent Solutions
          </h3>

          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Explore my engineering dimension: Agentic AI workflows, machine learning models, full-stack MERN platforms, and real-time distributed telemetry systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-blue-500/20">
              <Cpu className="w-4 h-4 text-blue-400 mb-2" />
              <div className="text-sm font-bold text-white">Agentic AI &amp; ML</div>
              <div className="text-xs text-slate-400">Energy Optimization &amp; CV</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-blue-500/20">
              <Database className="w-4 h-4 text-blue-400 mb-2" />
              <div className="text-sm font-bold text-white">Full-Stack MERN</div>
              <div className="text-xs text-slate-400">MongoDB, Express &amp; React</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-blue-500/20">
              <Binary className="w-4 h-4 text-blue-400 mb-2" />
              <div className="text-sm font-bold text-white">Engineering Timeline</div>
              <div className="text-xs text-slate-400">Internship &amp; Hackathon Awards</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleSwitchToTechnical}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Technical Systems 🔵</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              Switch back to the precision blue engineering view anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
