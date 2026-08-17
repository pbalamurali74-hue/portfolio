import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger real mailto fallback with prefilled values
    const mailtoUrl = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(
      formData.name
    )} (${encodeURIComponent(formData.email)})`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: CTA & Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-[#E50914]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
              LET'S BUILD SOMETHING USEFUL.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed">
              Whether you have an internship opportunity, an AI/ML role, a hackathon project, or just want to talk Python & Data Science—my inbox is always open.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-slate-300 hover:text-[#E50914] transition-colors group"
              >
                <div className="p-3 rounded-xl bg-[#121215] border border-[#27272A] group-hover:border-[#E50914] transition-colors">
                  <Mail className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase">Direct Email</div>
                  <div className="text-sm font-bold font-mono">{personalInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#121215] border border-[#27272A] text-xs font-semibold text-slate-300 hover:border-[#E50914] hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-[#E50914]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#121215] border border-[#27272A] text-xs font-semibold text-slate-300 hover:border-[#E50914] hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-500" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#121215] border border-[#27272A] text-xs font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Mailto Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold font-display text-white">Send Me a Message</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#E50914]/10 border border-[#E50914]/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#E50914] mx-auto" />
                  <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300">
                    Your message has been formatted into your default email application. Click send to finalize!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#18181C] border border-[#27272A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#18181C] border border-[#27272A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E50914] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let's discuss an AI/ML opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#18181C] border border-[#27272A] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#E50914] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#E50914] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-[#E50914]/25 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
