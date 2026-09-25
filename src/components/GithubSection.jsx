import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubHandle}/repos?sort=updated&per_page=9`
        );
        if (!response.ok) throw new Error('GitHub API fetch failed');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.warn('GitHub API fallback activated:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubRepos();
  }, []);

  // Fallback repo data if API rate limit or offline
  const fallbackRepos = [
    {
      name: 'CivicAI',
      description: 'AI-Powered Mobile Urban Intelligence Platform using transit fleet cameras with Bayesian consensus.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/CivicAI',
    },
    {
      name: 'TurboFan-Degradation-ML-Project',
      description: 'Predictive maintenance modeling using NASA C-MAPSS time-series dataset.',
      language: 'Jupyter Notebook',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/TurboFan-Degradation-ML-Project',
    },
    {
      name: 'ToDo-LIST-API',
      description: 'Secure FastAPI REST service with dual JWT authentication and rate limiting.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/ToDo-LIST-API',
    },
    {
      name: 'FUTURE_ML_02',
      description: 'Customer Churn Prediction system with Streamlit GUI & Power BI Dashboard.',
      language: 'Jupyter Notebook',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/FUTURE_ML_02',
    },
    {
      name: 'MatrixOperations',
      description: 'Modular Python & NumPy matrix calculation tool with Tkinter GUI & CLI mode.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/MatrixOperations',
    },
    {
      name: 'FUTURE_ML_03',
      description: 'Intent-Based NLP Conversational Bot with TF-IDF, sentiment analysis and Flask web UI.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/FUTURE_ML_03',
    },
    {
      name: 'forage-midas',
      description: 'JPMorgan Chase & Co. Advanced Software Engineering Forage program repository.',
      language: 'Java',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/forage-midas',
    },
    {
      name: 'FUTURE_ML_01',
      description: 'Superstore Sales Forecasting & Power BI Retail Analytics Dashboard.',
      language: 'Jupyter Notebook',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/FUTURE_ML_01',
    },
  ];

  const displayRepos = error || repos.length === 0 ? fallbackRepos : repos;

  return (
    <section
      id="github"
      className="relative py-24 lg:py-32 bg-[#0A0A0B] border-t border-[#27272A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-[#E50914]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#E50914] font-mono">
                GITHUB INTEGRATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              OPEN SOURCE REPOSITORIES
            </h2>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E50914] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-[#E50914]/25 shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>@{personalInfo.githubHandle} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Cards Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-16 text-slate-400 font-mono text-sm space-x-3">
            <RefreshCw className="w-5 h-5 animate-spin text-[#E50914]" />
            <span>Fetching live GitHub data...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRepos.map((repo, idx) => (
              <div
                key={idx}
                className="group bg-[#121215] border border-[#27272A] rounded-2xl p-6 hover:border-[#E50914]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#E50914]">
                      <Code2 className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">
                        Public Repo
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#18181C] text-slate-400 hover:text-white hover:bg-[#27272A] transition-colors"
                      aria-label="Open Repository"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#E50914] transition-colors">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {repo.description || 'Verified Python & AI repository by Purushotham Balamurali.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272A] mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                    <span>{repo.language || 'Python'}</span>
                  </span>

                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1 hover:text-white">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count ?? 0}</span>
                    </span>
                    <span className="flex items-center space-x-1 hover:text-white">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks_count ?? 0}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
