import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#E50914]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
              CONTINUOUS LEARNING & CREDENTIALS
            </span>
            <span className="w-8 h-[2px] bg-[#E50914]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            VERIFIED CERTIFICATIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications and virtual program credentials completed in AI, Data Analytics, and Software Engineering.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="group relative bg-[#121215] border border-[#27272A] rounded-2xl p-6 hover:border-[#E50914]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#18181C] border border-[#27272A] text-[10px] font-mono text-emerald-400">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#E50914] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Issuer: <span className="text-slate-200">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#27272A] mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Status: <span className="text-slate-300 font-semibold">Verified Completion</span>
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-[#E50914] hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 italic">
                    Credential Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
