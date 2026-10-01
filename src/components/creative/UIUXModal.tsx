import React, { useEffect, useRef, useState } from 'react';
import type { UIUXShowcaseItem } from '../../types/portfolio';
import {
  X,
  Users,
  Compass,
  Layout,
  CheckCircle,
  Wrench,
  Smartphone,
} from 'lucide-react';

interface UIUXModalProps {
  project: UIUXShowcaseItem | null;
  onClose: () => void;
}

export const UIUXModal: React.FC<UIUXModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [activeImageTab, setActiveImageTab] = useState(0);

  useEffect(() => {
    if (!project) return;

    setActiveImageTab(0);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="uiux-modal-title"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900/95 border border-yellow-400/40 shadow-2xl shadow-yellow-500/20 flex flex-col text-slate-100 backdrop-blur-2xl focus:outline-none"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // UI_UX_MINI_CASE_STUDY
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3
              id="uiux-modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2"
            >
              {project.title}
            </h3>
            <p className="text-base text-yellow-200/90 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Multiple Screenshots / Visual Showcase Tabs */}
          <div className="space-y-3">
            <div className="relative w-full aspect-[16/10] max-h-[460px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
              <img
                src={project.screenshots[activeImageTab] || project.coverImage}
                alt={`${project.title} UI preview screen`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail selector if multiple screenshots */}
            {project.screenshots.length > 1 && (
              <div className="flex gap-2 justify-center pt-2">
                {project.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageTab(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      activeImageTab === idx
                        ? 'bg-yellow-400 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    View {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Problem & Target Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <span>The Problem</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.modalDetails.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" />
                <span>Target Users</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.modalDetails.targetUsers}
              </p>
            </div>
          </div>

          {/* Design Direction & Wireframes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Design Direction</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.modalDetails.designDirection}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Layout className="w-4 h-4" />
                <span>Wireframing &amp; Architecture</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.modalDetails.wireframes}
              </p>
            </div>
          </div>

          {/* Final UI & Interaction Notes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-yellow-950/20 border border-yellow-500/30">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4 text-yellow-400" />
                <span>Final UI Execution</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {project.modalDetails.finalUI}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Smartphone className="w-4 h-4" />
                <span>Interaction Notes &amp; Motion</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.modalDetails.interactionNotes}
              </p>
            </div>
          </div>

          {/* Tools Used */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
              <Wrench className="w-4 h-4 text-yellow-400" />
              <span>Design Tools &amp; Prototyping</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.modalDetails.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-yellow-950/40 border border-yellow-500/30 text-xs font-mono text-yellow-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-white">ESC</kbd> or click outside to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
