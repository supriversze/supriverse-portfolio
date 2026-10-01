import React from 'react';
import { useThemeMode } from '../context/ThemeModeContext';
import { Palette, Layers, Image, PenTool, ArrowRight } from 'lucide-react';

export const CreativeTeaser: React.FC = () => {
  const { setMode } = useThemeMode();

  const handleSwitchToCreative = () => {
    setMode('creative');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="creative-teaser" className="mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-yellow-950/30 via-slate-900/80 to-slate-950 border border-yellow-400/40 p-8 sm:p-12 backdrop-blur-xl shadow-xl shadow-yellow-500/5">
        {/* Glow */}
        <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 font-mono text-xs mb-4">
            <Palette className="w-3.5 h-3.5 text-yellow-400" />
            <span>DUAL_IDENTITY // THE CREATIVE SIDE</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Poster Design, Visual Systems &amp; Creative Leadership
          </h3>

          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Beyond engineering systems, I lead visual identity for collegiate symposiums, compose 3:2 exhibition posters, and architect comprehensive Figma UI/UX design systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-yellow-500/20">
              <Image className="w-4 h-4 text-yellow-400 mb-2" />
              <div className="text-sm font-bold text-white">3:2 Poster Gallery</div>
              <div className="text-xs text-slate-400">Canva, CorelDRAW &amp; Typography</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-yellow-500/20">
              <PenTool className="w-4 h-4 text-yellow-400 mb-2" />
              <div className="text-sm font-bold text-white">UI/UX Case Studies</div>
              <div className="text-xs text-slate-400">Figma Wireframes &amp; Design Systems</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-yellow-500/20">
              <Layers className="w-4 h-4 text-yellow-400 mb-2" />
              <div className="text-sm font-bold text-white">Creative Leadership</div>
              <div className="text-xs text-slate-400">Symposium Co-Lead &amp; Mentorship</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleSwitchToCreative}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-yellow-400/25 hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Creative Portfolio 🟡</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              Instant mode transition (200–400ms) with zero page reload
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
