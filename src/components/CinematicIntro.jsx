import React, { useRef } from 'react';
import { useGsapContext } from '../hooks/useGsapContext';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function CinematicIntro() {
  const scopeRef = useRef(null);
  const firstNameLettersRef = useRef([]);
  const lastNameLettersRef = useRef([]);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const scrollCueRef = useRef(null);

  const firstNameArray = ["P", "U", "R", "U", "S", "H", "O", "T", "H", "A", "M"];
  const lastNameArray = ["B", "A", "L", "A", "M", "U", "R", "A", "L", "I"];

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    const firstLetters = firstNameLettersRef.current.filter(Boolean);
    const lastLetters = lastNameLettersRef.current.filter(Boolean);
    const allLetters = [...firstLetters, ...lastLetters];

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Tagline Reveal
    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
    );

    // 2. High-Visibility 3D Letter Reveal (from opacity: 0 to opacity: 1)
    tl.fromTo(
      allLetters,
      {
        opacity: 0,
        y: 40,
        rotationX: -60,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.5)',
      },
      '-=0.4'
    );

    // 3. Subtitle Role Pills Reveal
    tl.fromTo(
      titleRef.current?.children ? Array.from(titleRef.current.children) : [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 },
      '-=0.4'
    );

    // 4. Scroll Cue Fade-In
    tl.fromTo(
      scrollCueRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.4'
    );

    // ScrollTrigger: Smooth Exit on Scroll
    gsap.to(scopeRef.current, {
      opacity: 0,
      y: -120,
      scale: 0.94,
      scrollTrigger: {
        trigger: scopeRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  }, [], scopeRef);

  return (
    <div
      ref={scopeRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 py-8 bg-[#0A0A0B] bg-web-grid perspective-1000"
    >
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#E50914]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Tagline */}
      <div ref={tagRef} className="pt-6 flex items-center space-x-3 z-10">
        <span className="w-8 sm:w-12 h-[2px] bg-[#E50914]" />
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#E50914] font-mono">
          AI / ML DEVELOPER PORTFOLIO
        </span>
        <span className="w-8 sm:w-12 h-[2px] bg-[#E50914]" />
      </div>

      {/* Center 2-Line Fully Visible Display Name */}
      <div className="text-center w-full max-w-6xl mx-auto my-auto z-10 px-2">
        <h1 className="font-black font-display tracking-tight uppercase leading-tight select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
          {/* LINE 1: PURUSHOTHAM (11 Letters - Fluid Sized, Never Clipped) */}
          <div className="text-[clamp(1.75rem,5.2vw,4.75rem)] text-white font-black tracking-normal flex justify-center items-center flex-wrap gap-x-[0.02em]">
            {firstNameArray.map((char, index) => (
              <span
                key={`first-${index}`}
                ref={(el) => (firstNameLettersRef.current[index] = el)}
                className="inline-block transform-gpu hover:text-[#E50914] hover:scale-110 transition-all duration-200"
              >
                {char}
              </span>
            ))}
          </div>

          {/* LINE 2: BALAMURALI (10 Letters - Fluid Sized, Never Clipped) */}
          <div className="text-[clamp(1.75rem,5.2vw,4.75rem)] text-[#E50914] italic font-black tracking-normal flex justify-center items-center flex-wrap gap-x-[0.02em] mt-1 sm:mt-3">
            {lastNameArray.map((char, index) => (
              <span
                key={`last-${index}`}
                ref={(el) => (lastNameLettersRef.current[index] = el)}
                className="inline-block transform-gpu hover:text-white hover:scale-110 transition-all duration-200"
              >
                {char}
              </span>
            ))}
          </div>
        </h1>

        {/* Roles Subtitle Badges */}
        <div
          ref={titleRef}
          className="pt-6 sm:pt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-200"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#18181C] border border-[#27272A] text-[#E50914] font-bold">
            AI / ML Developer
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#27272A] text-slate-200 font-semibold">
            Data Science
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#27272A] text-slate-200 font-semibold">
            Python Developer
          </span>
        </div>
      </div>

      {/* Bottom Animated Scroll Cue */}
      <div ref={scrollCueRef} className="pb-6 flex flex-col items-center z-10">
        <a
          href="#main-hero"
          className="flex flex-col items-center group text-slate-300 hover:text-white transition-colors"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#E50914] font-bold mb-2 flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-[#E50914]" />
            <span>SCROLL DOWN TO EXPLORE</span>
          </span>
          <div className="w-10 h-10 rounded-full border border-[#27272A] bg-[#121215] flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914] transition-all duration-300 shadow-xl">
            <ArrowDown className="w-4 h-4 text-white animate-bounce" />
          </div>
        </a>
      </div>
    </div>
  );
}
