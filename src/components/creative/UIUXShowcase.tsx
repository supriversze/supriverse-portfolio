import React, { useState } from 'react';
import { UIUX_SHOWCASE } from '../../data/creativeData';
import type { UIUXShowcaseItem } from '../../types/portfolio';
import { UIUXModal } from './UIUXModal';
import { Layout, ArrowUpRight } from 'lucide-react';

export const UIUXShowcase: React.FC = () => {
  const [selectedUIProject, setSelectedUIProject] = useState<UIUXShowcaseItem | null>(null);

  return (
    <section id="uiux-showcase" className="mb-24">
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-400/40 text-yellow-300 font-mono text-xs self-start">
          <Layout className="w-3.5 h-3.5 text-yellow-400" />
          <span>INTERACTION_DESIGN // CASE_STUDIES</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          UI / UX Showcase
        </h3>
        <p className="text-sm text-slate-300 max-w-2xl">
          Comprehensive product design systems, user flows, and wireframe-to-production interfaces built with empathy and typographic precision.
        </p>
      </div>

      {/* Grid of UI/UX Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {UIUX_SHOWCASE.map((uiProject, index) => (
          <article
            key={uiProject.id}
            onClick={() => setSelectedUIProject(uiProject)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedUIProject(uiProject);
              }
            }}
            aria-label={`Open UI/UX case study for ${uiProject.title}`}
            data-reveal-delay={(index * 100).toString()}
            className="reveal-item group relative flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-yellow-400/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {/* Cover Image Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
              <img
                src={uiProject.coverImage}
                alt={`UI preview for ${uiProject.title}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quick Action */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 text-yellow-300 text-xs font-mono border border-yellow-400/50 shadow-md backdrop-blur-md">
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-yellow-400" />
                </span>
              </div>

              {/* Category Pill Tag */}
              <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-0.5 rounded-md bg-slate-950/85 text-[11px] font-mono text-yellow-200 border border-yellow-400/30 backdrop-blur-sm">
                  {uiProject.category}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-yellow-300 transition-colors mb-2">
                  {uiProject.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-5">
                  {uiProject.shortDescription}
                </p>
              </div>

              {/* Tools Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {uiProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-yellow-950/30 border border-yellow-500/25 text-yellow-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-yellow-400">Interactive Prototype</span>
                  <span className="flex items-center gap-1 text-slate-300 group-hover:text-yellow-300 transition-colors font-medium">
                    <span>Inspect UI</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      <UIUXModal
        project={selectedUIProject}
        onClose={() => setSelectedUIProject(null)}
      />
    </section>
  );
};
