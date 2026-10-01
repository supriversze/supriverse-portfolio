import React, { useState } from 'react';
import { TECHNICAL_PROJECTS } from '../data/technicalData';
import type { ProjectItem, ProjectTypeBadge } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectTypeBadge | 'AI & ML'>('All');

  const filterOptions = [
    { label: 'All Projects', value: 'All' },
    { label: 'AI & Agentic Systems', value: 'AI & ML' },
    { label: 'Mini Projects', value: 'Mini Project' },
    { label: 'Hackathons', value: 'Hackathon Project' },
    { label: 'Research', value: 'Research Project' },
    { label: 'Internships', value: 'Internship Project' },
  ];

  const filteredProjects = TECHNICAL_PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & ML') {
      return (
        project.technologies.includes('Agentic AI') ||
        project.technologies.includes('Machine Learning') ||
        project.technologies.includes('AI')
      );
    }
    return project.typeBadge === activeFilter;
  });

  return (
    <section id="projects" className="mb-20">
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 font-mono text-xs mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            <span>PORTFOLIO_ARTIFACTS // SYSTEMS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Engineering Projects
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Practical products across Agentic AI, machine learning architectures, full-stack MERN, and telemetry pipelines
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setActiveFilter(opt.value as any)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === opt.value
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="reveal-item"
            data-reveal-delay={(index * 90).toString()}
          >
            <ProjectCard
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
