import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#E50914]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
              PRACTICAL EXPERIENCE
            </span>
            <span className="w-8 h-[2px] bg-[#E50914]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            INTERNSHIPS & VIRTUAL PROGRAMS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified machine learning internship experience and software engineering virtual programs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-[#27272A] pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full ${
                  item.isPlaceholder
                    ? 'bg-[#18181C] border-2 border-dashed border-amber-500/60'
                    : 'bg-[#0A0A0B] border-2 border-[#E50914] group-hover:bg-[#E50914]'
                } transition-colors duration-300 flex items-center justify-center`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.isPlaceholder ? 'bg-amber-400' : 'bg-[#E50914] group-hover:bg-white'
                  }`}
                />
              </div>

              {/* Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-[#121215] border ${
                  item.isPlaceholder
                    ? 'border-[#27272A] border-dashed opacity-80'
                    : 'border-[#27272A] hover:border-[#E50914]/40'
                } transition-all duration-300 shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-[#E50914] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 flex items-center space-x-2 mt-1">
                      <Briefcase className="w-4 h-4 text-[#E50914]" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#18181C] border border-[#27272A] text-xs font-mono text-slate-400 shrink-0">
                    <Calendar className="w-3 h-3 text-[#E50914]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 pt-2">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
