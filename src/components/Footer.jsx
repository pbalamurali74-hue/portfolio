import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070708] border-t border-[#27272A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold font-display text-white">
              {personalInfo.name}
            </div>
            <div className="text-xs font-mono text-[#E50914]">
              {personalInfo.role}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center space-x-6 text-xs uppercase font-mono tracking-wider text-slate-400">
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E50914] transition-colors">
              GitHub
            </a>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E50914] transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#E50914] transition-colors">
              Email
            </a>
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
            <span>© {currentYear} {personalInfo.name}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#121215] border border-[#27272A] text-slate-300 hover:text-white hover:border-[#E50914] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#E50914]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
