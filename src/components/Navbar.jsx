import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md py-3 border-b border-[#27272A]/80 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-white font-display text-lg tracking-wider font-bold"
        >
          <span className="w-8 h-8 rounded-full border border-[#E50914] bg-[#0A0A0B] flex items-center justify-center text-xs font-mono font-bold text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors duration-300">
            PB
          </span>
          <span className="group-hover:text-[#E50914] transition-colors duration-300">
            Purushotham <span className="text-slate-400 font-light hidden sm:inline">Balamurali</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-slate-300 hover:text-[#E50914] transition-colors duration-200 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Resume & GitHub */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#121215] text-xs font-medium text-slate-300 hover:border-[#E50914] hover:text-white transition-all duration-200"
          >
            <Github className="w-3.5 h-3.5 text-[#E50914]" />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#E50914] text-xs font-semibold text-white hover:bg-[#B91C1C] transition-all duration-200 shadow-md shadow-[#E50914]/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#18181C] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E50914]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B]/95 backdrop-blur-xl border-b border-[#27272A] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-medium text-slate-200 hover:text-[#E50914] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#27272A] flex flex-col space-y-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-[#27272A] bg-[#121215] text-xs font-semibold text-slate-200"
            >
              <Github className="w-4 h-4 text-[#E50914]" />
              <span>GitHub Profile</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#E50914] text-xs font-semibold text-white"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
