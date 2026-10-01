import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../types/portfolio';
import {
  X,
  ExternalLink,
  AlertCircle,
  Cpu,
  Layers,
  Award,
  BookOpen,
  CheckCircle,
} from 'lucide-react';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // ESC key handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Mini Project':
        return 'bg-blue-500/20 border-blue-400/50 text-blue-300';
      case 'Hackathon Project':
        return 'bg-amber-500/20 border-amber-400/50 text-amber-300';
      case 'Research Project':
        return 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300';
      case 'Internship Project':
        return 'bg-indigo-500/20 border-indigo-400/50 text-indigo-300';
      case 'Personal Project':
      default:
        return 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300';
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900/95 border border-blue-500/40 shadow-2xl shadow-blue-500/20 flex flex-col text-slate-100 backdrop-blur-2xl focus:outline-none"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getBadgeStyle(
                project.typeBadge
              )}`}
            >
              [ {project.typeBadge} ]
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              // ARCHITECTURAL_CASE_STUDY
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close Project Details Modal"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2"
            >
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-blue-300 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Large Project Image Visual */}
          <div className="relative w-full aspect-[16/9] max-h-[380px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
            <img
              src={project.image}
              alt={`Architecture and telemetry diagram for ${project.title}`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Links Quick Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 text-sm font-semibold text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Problem Card */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90 flex flex-col">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-mono font-bold uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.modalDetails.problem}
              </p>
            </div>

            {/* Approach Card */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90 flex flex-col">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-mono font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-4 h-4" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.modalDetails.approach}
              </p>
            </div>
          </div>

          {/* Technology Stack Detailed */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90">
            <div className="flex items-center gap-2 text-sky-400 text-sm font-mono font-bold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4" />
              <span>Technology Stack & Modules</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.modalDetails.technologiesDetailed.map((techItem, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-750 text-xs sm:text-sm font-mono text-slate-200"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome & Impact */}
          <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-bold uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" />
              <span>Outcome & Verification</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
              {project.modalDetails.outcome}
            </p>
          </div>

          {/* Key Learnings */}
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Key Learnings & Takeaways</span>
            </div>
            <ul className="space-y-2.5">
              {project.modalDetails.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-white">ESC</kbd> or click outside to dismiss
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
