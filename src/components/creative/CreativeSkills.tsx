import React from 'react';
import { CREATIVE_SKILLS } from '../../data/creativeData';
import { Palette, Compass, PenTool, Layout, Sparkles, Wrench } from 'lucide-react';

export const CreativeSkills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design Direction':
        return <Compass className="w-4 h-4 text-yellow-400" />;
      case 'Poster & Editorial Design':
        return <PenTool className="w-4 h-4 text-amber-400" />;
      case 'UI / UX Design':
        return <Layout className="w-4 h-4 text-yellow-300" />;
      case 'Branding & Social Media':
        return <Sparkles className="w-4 h-4 text-yellow-400" />;
      default:
        return <Wrench className="w-4 h-4 text-amber-300" />;
    }
  };

  return (
    <section id="creative-skills" className="mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-yellow-950/80 border border-yellow-400/40 flex items-center justify-center text-yellow-400">
          <Palette className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Creative Toolkit &amp; Disciplines</h3>
          <p className="text-sm text-slate-300">Visual design proficiencies, editorial typography, and creative leadership disciplines</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CREATIVE_SKILLS.map((item, index) => (
          <div
            key={item.category}
            className="reveal-item p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-yellow-400/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5 group"
            data-reveal-delay={(index * 90).toString()}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:border-yellow-400/40 transition-colors">
                  {getCategoryIcon(item.category)}
                </div>
                <h4 className="text-base font-semibold text-white tracking-tight">
                  {item.category}
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-4 pl-0.5">
              {item.description}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono bg-yellow-950/40 text-yellow-200 border border-yellow-800/50 hover:border-yellow-400/60 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
