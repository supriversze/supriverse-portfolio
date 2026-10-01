import React from 'react';
import { TECHNICAL_SKILLS } from '../data/technicalData';
import type { SkillCategory } from '../types/portfolio';
import { Code, Brain, Globe, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories: { key: SkillCategory; title: string; icon: React.ReactNode; desc: string }[] = [
    {
      key: 'Languages',
      title: 'Programming Languages',
      icon: <Code className="w-4 h-4 text-blue-400" />,
      desc: 'Core syntax, algorithms, and computational logic',
    },
    {
      key: 'AI / ML',
      title: 'AI & Machine Learning',
      icon: <Brain className="w-4 h-4 text-cyan-400" />,
      desc: 'Neural logic, computer vision, and agentic workflows',
    },
    {
      key: 'Web',
      title: 'Web Engineering & Databases',
      icon: <Globe className="w-4 h-4 text-sky-400" />,
      desc: 'Full-stack reactive web applications & modern MERN stack',
    },
    {
      key: 'Tools',
      title: 'Systems & Developer Tools',
      icon: <Wrench className="w-4 h-4 text-indigo-400" />,
      desc: 'Version control, terminal environments, and API tooling',
    },
  ];

  return (
    <section id="skills" className="mb-20 scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Code className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Technical Stack &amp; Skills</h3>
          <p className="text-sm text-slate-400">Pure engineering proficiencies structured without artificial metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, index) => {
          const catSkills = TECHNICAL_SKILLS.filter((s) => s.category === cat.key);

          return (
            <div
              key={cat.key}
              className="reveal-item p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group"
              data-reveal-delay={(index * 100).toString()}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/40 transition-colors">
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white tracking-tight">
                      {cat.title}
                    </h4>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {catSkills.length} proficiencies
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-4 pl-0.5">
                {cat.desc}
              </p>

              {/* Grouped Chips */}
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                      skill.highlight
                        ? 'bg-blue-950/80 text-blue-200 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-900/50 font-medium'
                        : 'bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:border-slate-600 hover:text-white'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
