import React, { useState } from 'react';
import { POSTERS_DATA } from '../../data/creativeData';
import type { CreativeCategory, PosterItem } from '../../types/portfolio';
import { PosterCard } from './PosterCard';
import { PosterLightbox } from './PosterLightbox';
import { Image } from 'lucide-react';

export const CreativeWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CreativeCategory>('All');
  const [activePosterIndex, setActivePosterIndex] = useState<number | null>(null);

  const filterTabs: CreativeCategory[] = [
    'All',
    'Posters',
    'Branding',
    'Event Creatives',
    'Social Media Design',
  ];

  const filteredPosters = POSTERS_DATA.filter((poster) => {
    if (selectedCategory === 'All') return true;
    return poster.category === selectedCategory;
  });

  const handleOpenPoster = (poster: PosterItem) => {
    const idx = POSTERS_DATA.findIndex((p) => p.id === poster.id);
    if (idx !== -1) {
      setActivePosterIndex(idx);
    }
  };

  return (
    <section id="creative-work" className="mb-24">
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-400/40 text-yellow-300 font-mono text-xs mb-3">
            <Image className="w-3.5 h-3.5 text-yellow-400" />
            <span>PORTFOLIO_ARTIFACTS // POSTER_GALLERY</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Creative Work
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            A curated gallery of posters, symposium branding, event collateral, and typography explorations designed with a standard 3:2 aspect ratio.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedCategory(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === tab
                  ? 'bg-yellow-400 text-slate-950 font-bold shadow-md shadow-yellow-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Poster Grid: 3 cols Desktop, 2 cols Tablet, 1 col Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosters.map((poster, index) => (
          <div
            key={poster.id}
            className="reveal-item"
            data-reveal-delay={(index * 90).toString()}
          >
            <PosterCard
              poster={poster}
              onSelect={handleOpenPoster}
            />
          </div>
        ))}
      </div>

      {/* Poster Lightbox Case Study View */}
      <PosterLightbox
        posters={POSTERS_DATA}
        currentIndex={activePosterIndex}
        onClose={() => setActivePosterIndex(null)}
        onSelectIndex={(index) => setActivePosterIndex(index)}
      />
    </section>
  );
};
