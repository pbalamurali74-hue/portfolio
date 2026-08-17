import React, { useRef } from 'react';
import { useGsapContext } from '../hooks/useGsapContext';

export default function HangingProfile() {
  const scopeRef = useRef(null);
  const hangingContainerRef = useRef(null);

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (!hangingContainerRef.current) return;

    if (prefersReducedMotion) return;

    // 1. Entrance animation: Drop from above viewport with elastic easing
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: scopeRef.current,
        start: 'top 80%',
        once: true,
      },
    });

    entranceTl.fromTo(
      hangingContainerRef.current,
      { y: -250, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: 'elastic.out(1, 0.5)',
        onComplete: () => {
          // 2. Separate Ambient Animation: Continuous physical 2.5° pendulum swing
          gsap.to(hangingContainerRef.current, {
            rotation: 2.5,
            transformOrigin: 'top center',
            duration: 3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
  }, [], scopeRef);

  return (
    <div ref={scopeRef} className="relative flex flex-col items-center justify-start py-4">
      {/* Anchor Point at top */}
      <div className="w-4 h-4 rounded-full bg-[#E50914] border-2 border-white shadow-lg shadow-[#E50914]/50 z-20" />

      {/* Hanging Pendulum Assembly */}
      <div
        ref={hangingContainerRef}
        className="flex flex-col items-center transition-transform origin-top"
      >
        {/* Thin Hanging Thread */}
        <div className="w-[2px] h-16 sm:h-24 lg:h-32 web-line shadow-sm" />

        {/* Circular Suspended Frame */}
        <div className="group relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-[#E50914] p-1.5 bg-[#121215] shadow-2xl shadow-[#E50914]/20 hover:shadow-[#E50914]/40 transition-all duration-500">
          {/* Abstract Web Outer Accent Ring */}
          <div className="absolute -inset-3 rounded-full border border-slate-700/50 pointer-events-none group-hover:border-[#E50914]/50 transition-colors duration-500" />
          <div className="absolute -inset-6 rounded-full border border-dashed border-slate-800 pointer-events-none" />

          {/* Real User Photo Container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0B] relative">
            <img
              src="/profile_avatar.jpg"
              alt="Purushotham Balamurali"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
