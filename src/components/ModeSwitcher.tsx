import React from 'react';
import { useThemeMode } from '../context/ThemeModeContext';
import { Code2, Palette } from 'lucide-react';

interface ModeSwitcherProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ className = '', size = 'md' }) => {
  const { setMode, isTechnical, isCreative } = useThemeMode();

  return (
    <div
      role="group"
      aria-label="Portfolio Persona Mode Switcher"
      className={`relative inline-flex items-center p-1 rounded-full bg-slate-900/90 border border-slate-750 backdrop-blur-md transition-all duration-300 shadow-inner ${className}`}
    >
      {/* Sliding Active Pill Background */}
      <div
        className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out pointer-events-none ${
          isTechnical
            ? 'left-1 w-[calc(50%-4px)] bg-blue-600/25 border border-blue-500/60 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
            : 'left-[calc(50%+2px)] w-[calc(50%-4px)] bg-yellow-400/25 border border-yellow-400/60 shadow-[0_0_15px_rgba(250,204,21,0.4)]'
        }`}
      />

      {/* TECHNICAL BUTTON */}
      <button
        type="button"
        onClick={() => setMode('technical')}
        aria-pressed={isTechnical}
        aria-label="Switch to Technical mode: Systems, AI and Engineering"
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
          size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-xs'
        } ${
          isTechnical
            ? 'text-blue-200 font-bold'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isTechnical
              ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6] scale-110'
              : 'bg-blue-500/40'
          }`}
        />
        <Code2 className="w-3.5 h-3.5 text-blue-400" />
        <span>TECHNICAL</span>
      </button>

      {/* CREATIVE BUTTON */}
      <button
        type="button"
        onClick={() => setMode('creative')}
        aria-pressed={isCreative}
        aria-label="Switch to Creative mode: Posters, UI/UX and Branding"
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
          size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-xs'
        } ${
          isCreative
            ? 'text-yellow-200 font-bold'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            isCreative
              ? 'bg-yellow-400 shadow-[0_0_8px_#facc15] scale-110'
              : 'bg-yellow-400/40'
          }`}
        />
        <Palette className="w-3.5 h-3.5 text-yellow-400" />
        <span>CREATIVE</span>
      </button>
    </div>
  );
};
