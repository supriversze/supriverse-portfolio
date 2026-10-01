import React, { useState } from 'react';
import { TECHNICAL_EXPERIENCES } from '../data/technicalData';
import type { ExperienceCategory } from '../types/portfolio';
import {
  Briefcase,
  Trophy,
  BookOpen,
  Users,
  Terminal,
  Calendar,
  MapPin,
  Edit3,
  CheckCircle2,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | ExperienceCategory>('All');

  const categories: { label: string; value: 'All' | ExperienceCategory }[] = [
    { label: 'All Activities', value: 'All' },
    { label: 'Internships', value: 'Internship' },
    { label: 'Hackathons', value: 'Hackathons' },
    { label: 'Research', value: 'Research' },
    { label: 'Leadership', value: 'Leadership' },
    { label: 'Technical Activities', value: 'Technical activities' },
  ];

  const getCategoryIcon = (category: ExperienceCategory) => {
    switch (category) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'Hackathons':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Research':
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-indigo-400" />;
      case 'Technical activities':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  const filteredExperiences =
    selectedFilter === 'All'
      ? TECHNICAL_EXPERIENCES
      : TECHNICAL_EXPERIENCES.filter((exp) => exp.category === selectedFilter);

  return (
    <section id="experience" className="mb-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>TRAJECTORY // EXPERIENCE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience & Academic Leadership
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Structured timeline covering internships, competitive hackathons, research & technical roles
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedFilter === cat.value
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {filteredExperiences.map((exp, index) => {
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-110 transition-all duration-200 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
              </div>

              {/* Experience Card */}
              <div
                className={`reveal-item p-6 rounded-2xl bg-slate-900/65 border transition-all duration-300 backdrop-blur-sm ${
                  exp.isEditablePlaceholder
                    ? 'border-dashed border-blue-500/40 bg-blue-950/15 hover:border-blue-400/70 hover:shadow-lg hover:shadow-blue-500/10'
                    : 'border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-lg'
                }`}
                data-reveal-delay={(index * 80).toString()}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                      {getCategoryIcon(exp.category)}
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {exp.title}
                    </h4>
                    {exp.isEditablePlaceholder && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-500/15 border border-blue-400/40 text-blue-300">
                        <Edit3 className="w-3 h-3 text-blue-400" />
                        Editable Template
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.duration}
                    </span>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 hidden sm:inline-flex">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Organization / Company Subtitle */}
                <div className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <span>{exp.organization}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                    {exp.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills Chips */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300"
                      >
                        {skill}
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
