import React from 'react';
import { useThemeMode } from '../context/ThemeModeContext';
import { SHARED_INFO } from '../data/sharedData';
import { TECHNICAL_INFO } from '../data/technicalData';
import { CREATIVE_INFO } from '../data/creativeData';
import {
  Code2,
  Palette,
  Terminal,
  Brain,
  Layers,
  Cpu,
  Compass,
  Brush,
  Layout,
  Sparkles,
  Megaphone,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { isTechnical } = useThemeMode();

  return (
    <section id="about" className="mb-24 scroll-mt-24">
      {/* ========================================================= */}
      {/* TECHNICAL MODE ABOUT: STRICTLY TECHNICAL                  */}
      {/* ========================================================= */}
      {isTechnical ? (
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-xs font-mono self-start text-blue-300">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>TECHNICAL IDENTITY // ENGINEERING PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Me: Systems, Code &amp; Intelligence
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Operating at the intersection of rigorous computer science foundations, artificial intelligence research, and full-stack software development.
            </p>
          </div>

          {/* 2-Column Technical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 5 Core Technical Pillars */}
            <div className="lg:col-span-7 reveal-item p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-blue-500/30 shadow-[0_0_35px_-12px_rgba(37,99,235,0.25)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Core Engineering Competencies
              </h3>
              <p className="text-xs font-mono text-blue-300 mb-6">
                DISCIPLINE • ALGORITHMS • SYSTEM ARCHITECTURE
              </p>

              <ul className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5 shrink-0 border border-blue-500/20">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">B.Tech Computer Science student</strong>
                    <span>
                      Pursuing B.Tech in CSE with a comprehensive academic foundation in data structures, algorithms, operating systems, and database management.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5 shrink-0 border border-blue-500/20">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">AI / ML interest</strong>
                    <span>
                      Actively building with machine learning models, convolutional neural networks for computer vision, and autonomous agentic workflows.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5 shrink-0 border border-blue-500/20">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Web development</strong>
                    <span>
                      Crafting fast, accessible, and reactive web applications using React, TypeScript, Node.js, Express, and Tailwind CSS.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5 shrink-0 border border-blue-500/20">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Software/product building</strong>
                    <span>
                      Translating complex computational problems into production-tested architectures with clean RESTful APIs and normalized schemas.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5 shrink-0 border border-blue-500/20">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Internship &amp; project experience</strong>
                    <span>
                      Hands-on practical development across real-world systems, ML pipelines, and production codebases with verifiable metrics.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap gap-2">
                {['B.Tech CSE', 'AI & Machine Learning', 'React & TypeScript', 'Node.js / Express', 'Python Systems', 'Agentic AI'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-blue-950/60 text-blue-200 border border-blue-800/50 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Engineering Philosophy & Technical Story */}
            <div className="lg:col-span-5 reveal-item space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-mono text-blue-300 uppercase tracking-widest font-semibold">
                    ENGINEERING PHILOSOPHY
                  </span>
                </div>

                <blockquote className="text-lg font-semibold text-white tracking-tight leading-snug mb-3">
                  &ldquo;I enjoy building software that works intelligently, scales cleanly, and executes with algorithmic precision.&rdquo;
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  My technical background helps me understand complex digital systems at an architectural level. Whether structuring normalized database collections or orchestrating multi-agent pipelines, I prioritize reliability, speed, and maintainability.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Degree: {TECHNICAL_INFO.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Focus: AI Systems &amp; Web Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Brand: {SHARED_INFO.brandName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* CREATIVE MODE ABOUT: STRICTLY CREATIVE                    */
        /* ========================================================= */
        <div className="space-y-10 animate-in fade-in duration-300">
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-950/80 border border-yellow-400/40 text-xs font-mono self-start text-yellow-300">
              <Palette className="w-3.5 h-3.5 text-yellow-400" />
              <span>CREATIVE IDENTITY // DESIGN &amp; LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Creative Me: Art Direction &amp; Visual Storytelling
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Curating brand languages, designing high-impact editorial posters, and leading collaborative creative teams for major collegiate events.
            </p>
          </div>

          {/* 2-Column Creative Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 5 Core Creative Pillars */}
            <div className="lg:col-span-7 reveal-item p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-yellow-500/30 shadow-[0_0_35px_-12px_rgba(250,204,21,0.25)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-300" />

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Core Creative Disciplines
              </h3>
              <p className="text-xs font-mono text-yellow-300 mb-6">
                DIRECTION • POSTER ARTISTRY • UI/UX STORYTELLING
              </p>

              <ul className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 mt-0.5 shrink-0 border border-yellow-500/20">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Creative leadership</strong>
                    <span>
                      Directing visual campaigns, mentoring design teams, and curating unified aesthetic guidelines for institutional events.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 mt-0.5 shrink-0 border border-yellow-500/20">
                    <Brush className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Poster design</strong>
                    <span>
                      Designing editorial posters with bold typography, expressive color palettes, and structured visual hierarchies.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 mt-0.5 shrink-0 border border-yellow-500/20">
                    <Layout className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">UI / UX design</strong>
                    <span>
                      Crafting user interfaces and design systems that prioritize intuitive navigation, ergonomic touchpoints, and accessible contrast.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 mt-0.5 shrink-0 border border-yellow-500/20">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Branding</strong>
                    <span>
                      Establishing memorable brand identities, consistent graphic language, and aesthetic clarity across digital and print touchpoints.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 mt-0.5 shrink-0 border border-yellow-500/20">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Event &amp; social media creatives</strong>
                    <span>
                      Producing high-engagement publicity assets, digital campaign collateral, and banners for major hackathons and tech symposiums.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-wrap gap-2">
                {['Creative Lead', 'Poster Artistry', 'UI/UX Design', 'Branding Systems', 'Figma', 'Visual Identity'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-yellow-950/50 text-yellow-200 border border-yellow-800/50 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Creative Philosophy & Design Story */}
            <div className="lg:col-span-5 reveal-item space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-xs font-mono text-yellow-300 uppercase tracking-widest font-semibold">
                    CREATIVE PHILOSOPHY
                  </span>
                </div>

                <blockquote className="text-lg font-semibold text-white tracking-tight leading-snug mb-3">
                  &ldquo;I enjoy creating visual designs that communicate ideas thoughtfully and leave an indelible impression.&rdquo;
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Design is not decoration—it is visual communication. Through deliberate typography, spatial hierarchy, and expressive palettes, I bridge the gap between complex ideas and human engagement.
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Role: {CREATIVE_INFO.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Specialization: Posters • Branding • UI/UX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Brand: {SHARED_INFO.brandName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
