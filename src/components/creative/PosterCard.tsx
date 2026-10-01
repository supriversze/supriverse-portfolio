import React from 'react';
import type { PosterItem } from '../../types/portfolio';
import { Eye, ArrowUpRight } from 'lucide-react';

interface PosterCardProps {
  poster: PosterItem;
  onSelect: (poster: PosterItem) => void;
}

export const PosterCard: React.FC<PosterCardProps> = ({ poster, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(poster)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(poster);
        }
      }}
      aria-label={`Open high-resolution lightbox case study for ${poster.title}`}
      className="group relative flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-yellow-400/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      {/* Poster Image Container with strict 3:2 Aspect Ratio */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <img
          src={poster.image}
          alt={`Artwork preview of ${poster.title}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Small "View Design" Indicator Pill on Hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 text-yellow-300 text-xs font-mono border border-yellow-400/50 shadow-md backdrop-blur-md">
            <Eye className="w-3.5 h-3.5 text-yellow-400" />
            <span>View Design</span>
          </span>
        </div>

        {/* Category Pill Tag on Image Bottom */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-950/85 text-[11px] font-mono text-yellow-200 border border-yellow-400/30 backdrop-blur-sm">
            {poster.category}
          </span>
        </div>
      </div>

      {/* Card Info Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-yellow-300 transition-colors mb-1">
            {poster.title}
          </h4>

          {/* Event / Campaign */}
          <p className="text-xs sm:text-sm text-slate-300 leading-snug line-clamp-1 mb-3">
            {poster.eventCampaign}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="text-yellow-400 font-semibold">{poster.year}</span>
          <span className="flex items-center gap-1 group-hover:text-yellow-300 transition-colors">
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
