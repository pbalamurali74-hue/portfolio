import React, { useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import HangingProfile from './HangingProfile';
import { useGsapContext } from '../hooks/useGsapContext';

export default function About() {
  const scopeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphsRef = useRef(null);

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    // Heading Slide & Reveal Timeline
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );

    // Paragraph 3D Perspective Reveal
    if (paragraphsRef.current?.children) {
      gsap.fromTo(
        Array.from(paragraphsRef.current.children),
        { y: 40, opacity: 0, rotationX: -45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraphsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, [], scopeRef);

  return (
    <section
      id="about"
      ref={scopeRef}
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60 overflow-hidden"
    >
      {/* Background Web Line Decoration */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-[#E50914]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Suspended Hanging Profile Headshot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <HangingProfile />
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-[#E50914]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
                ABOUT ME
              </span>
            </div>

            {/* Large Italic Editorial Heading */}
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight italic"
            >
              {personalInfo.aboutHeading}
            </h2>

            {/* 3D Perspective Paragraph Container */}
            <div ref={paragraphsRef} className="space-y-4 perspective-1000">
              {personalInfo.aboutParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#27272A]">
              <div className="bg-[#121215] border border-[#27272A] rounded-xl p-4">
                <div className="text-xs text-slate-400 font-mono uppercase mb-1">Focus</div>
                <div className="text-sm font-bold text-white">AI / ML & Data Science</div>
              </div>
              <div className="bg-[#121215] border border-[#27272A] rounded-xl p-4">
                <div className="text-xs text-slate-400 font-mono uppercase mb-1">Primary Stack</div>
                <div className="text-sm font-bold text-[#E50914]">Python • Scikit • XGBoost</div>
              </div>
              <div className="bg-[#121215] border border-[#27272A] rounded-xl p-4 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400 font-mono uppercase mb-1">Approach</div>
                <div className="text-sm font-bold text-white">Practical Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
