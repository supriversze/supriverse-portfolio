import React from 'react';
import { TECHNICAL_INFO, TECHNICAL_SOCIAL_LINKS } from '../data/technicalData';
import { GitHubIcon, LinkedInIcon, MediumIcon } from './Icons';
import {
  Mail,
  ArrowRight,
  Code2,
  Terminal,
  MapPin,
  Cpu,
  FileText,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon className="w-5 h-5 text-slate-300" />;
      case 'LinkedIn':
        return <LinkedInIcon className="w-5 h-5 text-slate-300" />;
      case 'Email':
        return <Mail className="w-5 h-5 text-slate-300" />;
      case 'Medium':
        return <MediumIcon className="w-5 h-5 text-slate-300" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-300" />;
    }
  };

  const handleExploreProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projEl = document.getElementById('projects') || document.getElementById('technical');
    projEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const resumeEl = document.getElementById('resume');
    resumeEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Status & Degree Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-medium text-slate-300 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-blue-400" />
            {TECHNICAL_INFO.location}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-blue-300 font-mono font-medium">{TECHNICAL_INFO.degree}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-300">
            {TECHNICAL_INFO.name}
          </span>
        </h1>

        {/* Subheading: Strictly Technical */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 font-mono">
            {TECHNICAL_INFO.role}
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 text-balance">
          {TECHNICAL_INFO.headline}{' '}
          <span className="text-slate-400">{TECHNICAL_INFO.supportingText}</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* Explore Projects Button */}
          <a
            href="#projects"
            onClick={handleExploreProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Code2 className="w-4 h-4" />
            <span>Explore Engineering Projects</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>

          {/* Technical Resume Button */}
          <a
            href="#resume"
            onClick={handleExploreResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Technical Resume</span>
          </a>
        </div>

        {/* Verified Technical Social Links: GitHub, LinkedIn, Email, Medium (NO Behance) */}
        <div className="flex items-center gap-4">
          {TECHNICAL_SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Supriya's ${link.platform}`}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 text-slate-400 hover:text-white hover:bg-slate-850 hover:-translate-y-1 transition-all duration-200 shadow-sm"
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>

        {/* Ambient Tech Spec Highlights */}
        <div className="mt-12 pt-8 border-t border-slate-850/80 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 text-center">
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <Cpu className="w-4 h-4 text-blue-400 inline" />
              <span>AI / ML</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">Agentic &amp; Neural Logic</span>
          </div>
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <Code2 className="w-4 h-4 text-blue-400 inline" />
              <span>Full-Stack</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">React &amp; MERN Systems</span>
          </div>
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
              <Terminal className="w-4 h-4 text-blue-400 inline" />
              <span>Python &amp; C++</span>
            </span>
            <span className="text-xs font-mono text-slate-400 block">Algorithms &amp; Pipelines</span>
          </div>
        </div>
      </div>
    </section>
  );
};
