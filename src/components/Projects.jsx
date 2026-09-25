import React, { useState, useRef } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { useGsapContext } from '../hooks/useGsapContext';
import Tilt3D from './Tilt3D';
import { Github, ExternalLink, Cpu, Info, CheckCircle2, X, Sparkles, Lightbulb, Target } from 'lucide-react';

export default function Projects() {
  const scopeRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeModalProject, setActiveModalProject] = useState(null);

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });
  }, [], scopeRef);

  return (
    <section
      id="projects"
      ref={scopeRef}
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#E50914]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
              FEATURED ENGINEERING & ML WORK
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              PRACTICAL PROJECTS SHOWCASE
            </h2>
            <p className="text-slate-400 text-sm max-w-md">
              Real-world machine learning systems, secure APIs, and analytics dashboards built with Python and modern 3D interactive architecture.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid with 3D Tilt */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const isTopThree = idx < 3;

            return (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[idx] = el)}
              >
                <Tilt3D maxTilt={6} scale={1.01}>
                  <div
                    className={`group relative rounded-3xl bg-[#121215] border ${
                      project.isPlaceholder
                        ? 'border-[#27272A]/70 border-dashed'
                        : 'border-[#27272A] hover:border-[#E50914]/60'
                    } p-6 sm:p-10 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(229,9,20,0.18)]`}
                  >
                    {/* Background Accent Mesh Glow for Top 3 */}
                    {isTopThree && (
                      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#E50914]/15 transition-all duration-500" />
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Left Column: Editorial Information */}
                      <div className="lg:col-span-7 space-y-6">
                        {/* Badge & Type */}
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-[11px] font-mono font-bold uppercase tracking-wider">
                            {project.badge}
                          </span>
                          {project.isPlaceholder && (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono">
                              Placeholder / In Development
                            </span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white group-hover:text-[#E50914] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-slate-300 text-sm sm:text-base font-medium mt-1">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Quantified Metrics Strip */}
                        {project.metrics && project.metrics.length > 0 && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                className="bg-[#18181C]/90 border border-[#27272A] rounded-xl px-3 py-2 flex flex-col justify-center group-hover:border-[#E50914]/40 transition-colors"
                              >
                                <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400">
                                  {metric.label}
                                </span>
                                <span className="text-xs sm:text-sm font-bold text-[#E50914] font-mono mt-0.5 truncate">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Core Concept / Main Idea */}
                        {project.mainIdea && (
                          <div className="p-3.5 rounded-xl bg-[#18181C]/70 border border-[#27272A] space-y-1">
                            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-300">
                              <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>Core Concept:</span>
                            </div>
                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-5">
                              {project.mainIdea}
                            </p>
                          </div>
                        )}

                        {/* Standout Innovation / Unique Feature */}
                        {project.uniqueFeature && (
                          <div className="bg-gradient-to-r from-[#E50914]/15 via-[#18181C] to-[#18181C] p-3.5 rounded-xl border border-[#E50914]/40 shadow-sm space-y-1">
                            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#E50914]">
                              <Sparkles className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                              <span>Standout Innovation:</span>
                            </div>
                            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed pl-5 font-medium">
                              {project.uniqueFeature}
                            </p>
                          </div>
                        )}

                        {/* Problem & Built Statement */}
                        <div className="space-y-3">
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                            <span className="text-slate-300 font-semibold">Problem: </span>
                            {project.problem}
                          </p>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-[#18181C] p-3.5 rounded-xl border border-[#27272A]">
                            <span className="text-[#E50914] font-semibold">Implementation: </span>
                            {project.built}
                          </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-md bg-[#18181C] border border-[#27272A] text-xs font-mono text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#18181C] border border-[#27272A] text-white text-xs uppercase font-bold tracking-wider hover:border-[#E50914] hover:text-[#E50914] transition-all duration-200"
                            >
                              <Github className="w-4 h-4 text-[#E50914]" />
                              <span>View Code</span>
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#E50914] text-white text-xs uppercase font-bold tracking-wider hover:bg-[#B91C1C] transition-all duration-200 shadow-md shadow-[#E50914]/25"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          )}

                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                          >
                            <Info className="w-3.5 h-3.5" />
                            <span>Architecture & Details</span>
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Visual Architecture Preview */}
                      <div className="lg:col-span-5">
                        <div className="bg-[#18181C] border border-[#27272A] rounded-2xl p-6 relative overflow-hidden group-hover:border-[#E50914]/40 transition-colors">
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 border-b border-[#27272A] pb-3">
                            <span className="flex items-center space-x-2">
                              <Cpu className="w-3.5 h-3.5 text-[#E50914]" />
                              <span>System Architecture</span>
                            </span>
                            <span className="text-[10px] text-slate-500">ID: {project.id}</span>
                          </div>

                          {/* Step-by-step Pipeline Flow Visual */}
                          <div className="space-y-2.5">
                            {project.architecture?.map((step, stepIdx) => (
                              <div
                                key={stepIdx}
                                className="flex items-start space-x-2.5 text-xs text-slate-300 bg-[#121215] p-2.5 rounded-lg border border-[#27272A]/80"
                              >
                                <span className="w-5 h-5 rounded-full bg-[#E50914]/10 text-[#E50914] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {stepIdx + 1}
                                </span>
                                <span className="leading-tight">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Drawer for Project Architecture Details */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#121215] border border-[#27272A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#18181C] text-slate-400 hover:text-white hover:bg-[#27272A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-10">
              <span className="px-3 py-1 rounded-full bg-[#E50914]/10 text-[#E50914] text-xs font-mono font-bold uppercase tracking-wider">
                {activeModalProject.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-slate-300 text-sm">{activeModalProject.tagline}</p>
            </div>

            {/* Metrics Chips in Modal */}
            {activeModalProject.metrics && activeModalProject.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeModalProject.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-[#18181C] border border-[#27272A] rounded-xl px-3 py-2.5 flex flex-col justify-center"
                  >
                    <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400">
                      {metric.label}
                    </span>
                    <span className="text-sm font-bold text-[#E50914] font-mono mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Main Idea in Modal */}
            {activeModalProject.mainIdea && (
              <div className="p-4 rounded-xl bg-[#18181C]/70 border border-[#27272A] space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-300">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Main Idea & Problem Thesis:</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pl-6">
                  {activeModalProject.mainIdea}
                </p>
              </div>
            )}

            {/* Unique Feature in Modal */}
            {activeModalProject.uniqueFeature && (
              <div className="bg-gradient-to-r from-[#E50914]/15 via-[#18181C] to-[#18181C] p-4 rounded-xl border border-[#E50914]/40 space-y-1.5">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#E50914]">
                  <Sparkles className="w-4 h-4 text-[#E50914] shrink-0" />
                  <span>Standout Unique Feature:</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed pl-6 font-medium">
                  {activeModalProject.uniqueFeature}
                </p>
              </div>
            )}

            {/* Implementation Summary */}
            <div className="space-y-2 border-t border-[#27272A] pt-4">
              <h4 className="text-xs font-mono uppercase text-[#E50914] font-bold">
                Implementation Details:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#18181C] p-3.5 rounded-xl border border-[#27272A]">
                {activeModalProject.built}
              </p>
            </div>

            {/* Pipeline Execution Steps */}
            <div className="space-y-3 border-t border-[#27272A] pt-4">
              <h4 className="text-xs font-mono uppercase text-[#E50914] font-bold">
                System Architecture Pipeline:
              </h4>
              <ul className="space-y-2">
                {activeModalProject.architecture?.map((step, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end space-x-4 pt-4 border-t border-[#27272A]">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#18181C] text-xs font-bold text-white hover:bg-[#27272A] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#E50914]" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#E50914] text-xs font-bold text-white hover:bg-[#B91C1C] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live App</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
