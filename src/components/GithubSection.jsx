import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';

export default function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const repoDescriptions = {
    'geoshield-flood-intelligence': 'GEOSHIELD: Flood Exposure & Emergency Decision Intelligence — Real-world SAR Change Detection & Explainable Exposure Analytics (GEOIMPathon 1.0)',
    'geoimpathon-multi-hazard-dss': 'GEOIMPATHON 1.0 (Problem Statement 1.1) - Multi-Hazard Decision Support System & Least-Risk Emergency Routing (Cyclone Michaung Flood Validation)',
    'Turbofan-Engine-RUL-Prediction': 'NASA C-MAPSS Remaining Useful Life Prediction using Linear Regression, Random Forest, XGBoost, and PyTorch LSTM (14.72 RMSE) with Streamlit console.',
    'ToDo-LIST-API': 'Secure FastAPI REST service featuring dual JWT token sessions (15-min access / 7-day refresh), Pydantic validation, and slowapi rate limiting.',
    'customer-churn-prediction': 'Customer Churn Prediction system featuring XGBoost, Random Forest, interactive Streamlit What-If simulator, and Power BI dashboard.',
    'CivicAI': 'Smart India Hackathon 2026 (PS 26124) — AI-powered urban road distress and hazard detection using transit camera fleets at 45 FPS.',
    'sales-forecasting-powerbi': 'Superstore Sales Forecasting with 12-month Prophet confidence intervals and Power BI executive retail intelligence dashboard.',
    'customer-support-ai-chatbot': 'Intent-Based NLP Conversational Bot with structured taxonomy, TF-IDF vectorization, confidence threshold guardrails, and Flask UI.',
    'Python-Leetcode-Submissions': 'Curated repository of optimized Python solutions for LeetCode and Data Structures & Algorithms interview preparation.',
    'forage-midas': 'JPMorgan Chase & Co. Advanced Software Engineering Forage program — Apache Kafka transaction consumer and Spring Data JPA persistence.',
    'MatrixOperations': 'Modular Python & NumPy matrix calculation tool with Tkinter GUI, CLI engine, and 17/17 Pytest automated test coverage.',
    'portfolio': 'Purushotham Balamurali — Premium AI/ML Developer & Data Science Interactive 3D Portfolio built with React, GSAP, and Tailwind.'
  };

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubHandle}/repos?sort=updated&per_page=30`
        );
        if (!response.ok) throw new Error('GitHub API fetch failed');
        const data = await response.json();
        const ignored = new Set(['keepalive', 'app.py', 'pbalamurali74-hue']);
        const enriched = data
          .filter((r) => !ignored.has(r.name))
          .map((r) => ({
            ...r,
            description: r.description || repoDescriptions[r.name] || 'Verified Python & AI repository by Purushotham Balamurali.',
          }));
        setRepos(enriched);
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
      name: 'geoshield-flood-intelligence',
      description: 'GEOSHIELD: Flood Exposure & Emergency Decision Intelligence — Real-world SAR Change Detection & Explainable Exposure Analytics (GEOIMPathon 1.0)',
      language: 'TypeScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/geoshield-flood-intelligence',
    },
    {
      name: 'geoimpathon-multi-hazard-dss',
      description: 'GEOIMPATHON 1.0 (Problem Statement 1.1) - Multi-Hazard Decision Support System & Least-Risk Emergency Routing (Cyclone Michaung Flood Validation)',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/geoimpathon-multi-hazard-dss',
    },
    {
      name: 'Turbofan-Engine-RUL-Prediction',
      description: 'NASA C-MAPSS Remaining Useful Life Prediction using Linear Regression, Random Forest, XGBoost, and PyTorch LSTM (14.72 RMSE) with Streamlit console.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/Turbofan-Engine-RUL-Prediction',
    },
    {
      name: 'ToDo-LIST-API',
      description: 'Secure FastAPI REST service featuring dual JWT token sessions (15-min access / 7-day refresh), Pydantic validation, and slowapi rate limiting.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/ToDo-LIST-API',
    },
    {
      name: 'customer-churn-prediction',
      description: 'Customer Churn Prediction system featuring XGBoost, Random Forest, interactive Streamlit What-If simulator, and Power BI dashboard.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/customer-churn-prediction',
    },
    {
      name: 'CivicAI',
      description: 'Smart India Hackathon 2026 (PS 26124) — AI-powered urban road distress and hazard detection using transit camera fleets at 45 FPS.',
      language: 'TypeScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/CivicAI',
    },
    {
      name: 'sales-forecasting-powerbi',
      description: 'Superstore Sales Forecasting with 12-month Prophet confidence intervals and Power BI executive retail intelligence dashboard.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/sales-forecasting-powerbi',
    },
    {
      name: 'customer-support-ai-chatbot',
      description: 'Intent-Based NLP Conversational Bot with structured taxonomy, TF-IDF vectorization, confidence threshold guardrails, and Flask UI.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/customer-support-ai-chatbot',
    },
    {
      name: 'Python-Leetcode-Submissions',
      description: 'Curated repository of optimized Python solutions for LeetCode and Data Structures & Algorithms interview preparation.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/Python-Leetcode-Submissions',
    },
    {
      name: 'forage-midas',
      description: 'JPMorgan Chase & Co. Advanced Software Engineering Forage program — Apache Kafka transaction consumer and Spring Data JPA persistence.',
      language: 'Java',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/forage-midas',
    },
    {
      name: 'MatrixOperations',
      description: 'Modular Python & NumPy matrix calculation tool with Tkinter GUI, CLI engine, and 17/17 Pytest automated test coverage.',
      language: 'Python',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/pbalamurali74-hue/MatrixOperations',
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
