import React, { useRef } from 'react';
import { ArrowDown, Github, FileText, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';
import CinematicIntro from './CinematicIntro';
import { useGsapContext } from '../hooks/useGsapContext';

export default function Hero() {
  const scopeRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#main-hero',
        start: 'top 75%',
      },
    });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 35, rotationX: -15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1 },
        '-=0.5'
      );
  }, [], scopeRef);

  return (
    <>
      {/* 1. Fullscreen First-Look Name Intro Display */}
      <CinematicIntro />

      {/* 2. Main Hero Section Revealed Upon Scroll */}
      <section
        id="main-hero"
        ref={scopeRef}
        className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center bg-web-grid overflow-hidden border-t border-[#27272A]/40"
      >
        {/* Abstract Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Typography & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Eyebrow */}
              <div ref={eyebrowRef} className="flex items-center space-x-3">
                <span className="w-8 h-[2px] bg-[#E50914]" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
                  {personalInfo.eyebrow}
                </span>
              </div>

              {/* Main Title & Subtitle */}
              <div className="space-y-2 perspective-1000">
                <h1
                  ref={headingRef}
                  className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.05]"
                >
                  {personalInfo.heroHeading}
                </h1>
                <h2
                  ref={subHeadingRef}
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-[#E50914] italic leading-tight"
                >
                  {personalInfo.heroSubheading}
                </h2>
              </div>

              {/* Concise Description */}
              <p
                ref={descRef}
                className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed"
              >
                {personalInfo.heroDescription}
              </p>

              {/* Action Buttons */}
              <div ref={ctaRef} className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-full bg-[#E50914] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#B91C1C] transition-all duration-300 shadow-lg shadow-[#E50914]/25 hover:shadow-[#E50914]/40 hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#18181C] border border-[#27272A] text-white text-xs uppercase tracking-widest font-bold hover:border-[#E50914] hover:text-[#E50914] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-[#E50914]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#121215] border border-[#27272A] text-slate-300 text-xs uppercase tracking-widest font-bold hover:border-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Resume</span>
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-[#18181C] border border-[#27272A] text-slate-300 hover:text-[#E50914] hover:border-[#E50914] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <HeroVisual />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 flex justify-center">
            <a
              href="#about"
              className="flex flex-col items-center text-slate-500 hover:text-[#E50914] transition-colors group"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase mb-2">About Section</span>
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#E50914]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
