import React, { useEffect, useRef } from 'react';
import type { PosterItem } from '../../types/portfolio';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Wrench,
  User,
  Compass,
  FileText,
} from 'lucide-react';

interface PosterLightboxProps {
  posters: PosterItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const PosterLightbox: React.FC<PosterLightboxProps> = ({
  posters,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const activePoster = currentIndex !== null ? posters[currentIndex] : null;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + posters.length) % posters.length;
    onSelectIndex(prevIndex);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % posters.length;
    onSelectIndex(nextIndex);
  };

  useEffect(() => {
    if (currentIndex === null) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, posters.length, onClose]);

  if (!activePoster || currentIndex === null) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-poster-title"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Centered Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[94vh] rounded-3xl bg-slate-900/95 border border-yellow-400/40 shadow-2xl shadow-yellow-500/15 overflow-hidden flex flex-col text-slate-100 backdrop-blur-2xl focus:outline-none"
      >
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800/90 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
              {activePoster.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Poster {currentIndex + 1} of {posters.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next Controls in Header */}
            <div className="flex items-center gap-1 mr-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Poster Artwork (Left Arrow)"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-yellow-300 border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Poster Artwork (Right Arrow)"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-yellow-300 border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two-Part Layout on Desktop (LEFT: Large Preview, RIGHT: Design Details) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* LEFT: Large Poster Preview at High Resolution */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800 relative group">
            <div className="relative w-full aspect-[3/2] max-h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/20 bg-slate-900">
              <img
                src={activePoster.image}
                alt={`Large readable display of ${activePoster.title}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Quick floating arrows on image hover */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Poster"
              className="absolute left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-yellow-400 hover:text-black text-white border border-slate-700 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg hidden sm:block"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Poster"
              className="absolute right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 hover:bg-yellow-400 hover:text-black text-white border border-slate-700 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-lg hidden sm:block"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* RIGHT: Design Details Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Title & Campaign */}
              <div>
                <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider block mb-1">
                  CASE STUDY // {activePoster.category}
                </span>
                <h3
                  id="lightbox-poster-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2"
                >
                  {activePoster.title}
                </h3>
                <p className="text-base text-yellow-200/90 font-medium">
                  {activePoster.eventCampaign}
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    YEAR
                  </span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                    {activePoster.year}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    ROLE
                  </span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-yellow-400" />
                    {activePoster.role}
                  </span>
                </div>
              </div>

              {/* Design Brief */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Design Brief</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePoster.brief}
                </p>
              </div>

              {/* Design Concept & Execution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Visual Concept &amp; Strategy</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePoster.concept}
                </p>
              </div>

              {/* Tools Used */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase">
                  <Wrench className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Tools &amp; Software Used</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePoster.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-lg bg-yellow-950/40 border border-yellow-500/30 text-xs font-mono text-yellow-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation Hint */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Use ← → Arrow keys to navigate</span>
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
