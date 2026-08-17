import React, { useRef } from 'react';
import { skillsData } from '../data/portfolioData';
import { useGsapContext } from '../hooks/useGsapContext';
import Tilt3D from './Tilt3D';
import { Cpu, Code, Layers, Wrench } from 'lucide-react';

const categoryIcons = {
  Programming: Code,
  'AI / ML & Data Science': Cpu,
  'Development & Frameworks': Layers,
  'Tools & Analytics': Wrench,
};

export default function Skills() {
  const scopeRef = useRef(null);
  const pillsRef = useRef([]);

  useGsapContext(({ gsap, prefersReducedMotion }) => {
    if (prefersReducedMotion) return;

    const validPills = pillsRef.current.filter(Boolean);

    // Staggered Entrance Animation
    gsap.fromTo(
      validPills,
      { scale: 0.5, opacity: 0, y: 20 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: scopeRef.current,
          start: 'top 75%',
        },
        onComplete: () => {
          // Subtle ambient floating loop
          validPills.forEach((pill, i) => {
            gsap.to(pill, {
              y: -3,
              duration: 2 + (i % 3) * 0.4,
              ease: 'sine.inOut',
              yoyo: true,
              repeat: -1,
              delay: (i % 5) * 0.1,
            });
          });
        },
      }
    );
  }, [], scopeRef);

  return (
    <section
      id="skills"
      ref={scopeRef}
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#E50914]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
              TECHNICAL COMPETENCIES
            </span>
            <span className="w-8 h-[2px] bg-[#E50914]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            CORE SKILLS & TECHNOLOGIES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technical tools, programming languages, and AI frameworks applied in my projects.
          </p>
        </div>

        {/* Skills Categories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat, catIdx) => {
            const IconComponent = categoryIcons[cat.category] || Code;

            return (
              <Tilt3D key={cat.category} maxTilt={8} scale={1.015}>
                <div className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 hover:border-[#E50914]/50 transition-colors duration-300 shadow-xl h-full">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6 border-b border-[#27272A] pb-4">
                    <div className="p-2.5 rounded-lg bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill, skillIdx) => {
                      const globalIdx = catIdx * 10 + skillIdx;
                      return (
                        <div
                          key={skill}
                          ref={(el) => (pillsRef.current[globalIdx] = el)}
                          className="group relative px-4 py-2 rounded-full bg-[#18181C] border border-[#27272A] text-xs font-semibold text-slate-200 hover:bg-[#E50914] hover:border-[#E50914] hover:text-white hover:scale-105 transition-all duration-200 cursor-default shadow-md hover:shadow-lg hover:shadow-[#E50914]/30"
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Tilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
