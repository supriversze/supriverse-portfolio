import React from 'react';
import { CREATIVE_LEADERSHIP } from '../../data/creativeData';
import { Award, Calendar, CheckCircle2, Edit3, Compass } from 'lucide-react';

export const CreativeLeadership: React.FC = () => {
  return (
    <section id="creative-leadership" className="mb-20">
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-400/40 text-yellow-300 font-mono text-xs self-start">
          <Award className="w-3.5 h-3.5 text-yellow-400" />
          <span>RESPONSIBILITY // DIRECTION</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Creative Leadership
        </h3>
        <p className="text-sm text-slate-300 max-w-2xl">
          Directing visual campaigns, mentoring design teams, and curating cohesive brand identities for university symposiums and developer initiatives.
        </p>
      </div>

      {/* Connected Timeline with Thin Yellow Line */}
      <div className="relative border-l-2 border-yellow-400/40 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {CREATIVE_LEADERSHIP.map((item, index) => {
          const isPlaceholder = item.organization.includes('[') || item.impact.includes('[');

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Gold Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-yellow-400 flex items-center justify-center group-hover:scale-110 transition-all duration-200 shadow-[0_0_12px_rgba(250,204,21,0.5)]">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>

              {/* Card Container */}
              <div
                className={`reveal-item p-6 sm:p-7 rounded-2xl bg-slate-900/70 border backdrop-blur-sm transition-all duration-300 ${
                  isPlaceholder
                    ? 'border-dashed border-yellow-500/40 bg-yellow-950/10 hover:border-yellow-400/70 hover:shadow-lg hover:shadow-yellow-500/10'
                    : 'border-slate-800/90 hover:border-yellow-500/40 hover:bg-slate-900/90 hover:shadow-lg'
                }`}
                data-reveal-delay={(index * 80).toString()}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="p-1.5 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
                      <Compass className="w-4 h-4" />
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h4>

                    {isPlaceholder && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-yellow-500/15 border border-yellow-400/40 text-yellow-300">
                        <Edit3 className="w-3 h-3 text-yellow-400" />
                        Editable Template
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-yellow-300/90">
                    <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Organization */}
                <div className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  <span>{item.organization}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                    Entry 0{index + 1}
                  </span>
                </div>

                {/* Impact Statement */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.impact}
                </p>

                {/* Key Deliverables / Badges */}
                {item.deliverables && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                    {item.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-0.5 rounded-md bg-yellow-950/40 border border-yellow-500/30 text-yellow-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-yellow-400" />
                        <span>{deliv}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
