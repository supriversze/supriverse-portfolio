import React from 'react';
import type { ProjectItem } from '../types/portfolio';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Mini Project':
        return 'bg-blue-500/15 border-blue-400/40 text-blue-300';
      case 'Hackathon Project':
        return 'bg-amber-500/15 border-amber-400/40 text-amber-300';
      case 'Research Project':
        return 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300';
      case 'Internship Project':
        return 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300';
      case 'Personal Project':
      default:
        return 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300';
    }
  };

  return (
    <article
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View detailed case study for ${project.title}`}
      className="group relative flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.35)] cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Project Image Container with Zoom effect */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <img
          src={project.image}
          alt={`Preview illustration of ${project.title}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Floating Quick Action Overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/90 text-blue-300 text-xs font-mono border border-blue-500/40 shadow-md backdrop-blur-sm">
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors duration-200 mb-1.5">
          {project.title}
        </h3>

        {/* Project Type Badge (directly below title inside small rounded rectangle/pill) */}
        <div className="mb-3">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-medium border ${getBadgeStyle(
              project.typeBadge
            )}`}
          >
            [ {project.typeBadge} ]
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="mt-auto pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 text-xs font-medium text-slate-200 hover:text-white transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              title={`View ${project.title} on GitHub`}
            >
              <GitHubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>

            {/* Live Demo Button */}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600/30 border border-blue-500/40 hover:border-blue-400 text-xs font-medium text-blue-300 hover:text-blue-100 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                title={`Live demo for ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {/* Details CTA Link */}
          <button
            type="button"
            className="text-xs font-mono text-slate-400 group-hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Inspect</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
