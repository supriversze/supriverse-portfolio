import React from 'react';
import { TECHNICAL_EDUCATION } from '../data/technicalData';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const TechnicalEducation: React.FC = () => {
  return (
    <section id="education" className="mb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Education &amp; Technical Foundation
          </h3>
          <p className="text-sm text-slate-400">
            Rigorous core curriculum in Computer Science, systems engineering, and algorithmic principles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Degree & University Card */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-900/65 border border-slate-800/90 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 block font-semibold">UNDERGRADUATE DEGREE</span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {TECHNICAL_EDUCATION.degree}
              </h4>
            </div>
          </div>

          <div className="space-y-2 mb-6 text-sm text-slate-300">
            <p>
              Academic focus centered on distributed systems, AI algorithms, data pipelines, and full-stack software development.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              <span>Timeline: {TECHNICAL_EDUCATION.graduationYear}</span>
              <span>•</span>
              <span>Location: {TECHNICAL_EDUCATION.location}</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>Academic Recognitions</span>
            </div>
            {TECHNICAL_EDUCATION.academicAchievements.map((ach) => (
              <div key={ach} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Core Coursework Card */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-slate-900/65 border border-slate-800/90 backdrop-blur-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-lg bg-blue-600/15 text-blue-400 border border-blue-500/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 block font-semibold">ACADEMIC CURRICULUM</span>
              <h4 className="text-base font-bold text-white">Core Computer Science Coursework</h4>
            </div>
          </div>

          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Theoretical and practical coursework covered throughout the engineering curriculum:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {TECHNICAL_EDUCATION.coreCoursework.map((course) => (
              <div
                key={course}
                className="px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 font-mono flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="line-clamp-1">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
