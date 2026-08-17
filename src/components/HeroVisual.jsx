import React, { useEffect, useRef } from 'react';

export default function HeroVisual() {
  const containerRef = useRef(null);
  const web3DRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const web = web3DRef.current;
    const core = coreRef.current;
    if (!container || !web) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // 3D Rotation Calculation
      const rotX = (-y / (rect.height / 2)) * 25; // max 25 deg tilt
      const rotY = (x / (rect.width / 2)) * 25;

      web.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(20px)`;
      if (core) {
        core.style.transform = `translateZ(60px) scale(1.1)`;
      }
    };

    const handleMouseLeave = () => {
      web.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      if (core) {
        core.style.transform = `translateZ(0px) scale(1)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[440px] lg:h-[560px] flex items-center justify-center overflow-hidden pointer-events-auto perspective-1000"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/60 to-[#0A0A0B] pointer-events-none" />

      {/* 3D Web Network Container */}
      <div
        ref={web3DRef}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] transition-transform duration-200 ease-out flex items-center justify-center"
      >
        {/* Layer 1: Backing 3D Ring Grid (Deep Z-offset) */}
        <div
          style={{ transform: 'translateZ(-40px)', transformStyle: 'preserve-3d' }}
          className="absolute inset-0 flex items-center justify-center opacity-40"
        >
          <div className="w-full h-full rounded-full border border-dashed border-[#E50914]/30 animate-[spin_60s_linear_infinite]" />
        </div>

        {/* Layer 2: Main Concentric Web SVG (Mid Z-offset) */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-slate-700/50 drop-shadow-[0_10px_30px_rgba(229,9,20,0.15)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          style={{ transform: 'translateZ(10px)' }}
        >
          {/* Outer Web Octagon */}
          <polygon
            points="250,30 405,95 470,250 405,405 250,470 95,405 30,250 95,95"
            className="stroke-slate-600/40"
            strokeDasharray="6 6"
          />

          {/* Inner 3D Concentric Polygon Layers */}
          <polygon
            points="250,70 377,123 430,250 377,377 250,430 123,377 70,250 123,123"
            className="stroke-slate-600/60"
          />
          <polygon
            points="250,110 348,151 390,250 348,348 250,390 151,348 110,250 151,151"
            className="stroke-[#E50914]/40"
          />
          <polygon
            points="250,150 320,180 350,250 320,320 250,350 180,320 150,250 180,180"
            className="stroke-slate-500/70"
          />
          <polygon
            points="250,190 291,209 310,250 291,291 250,310 209,291 190,250 209,209"
            className="stroke-[#E50914]/80"
            strokeWidth="1.8"
          />

          {/* Spider Web Radial Beams */}
          <line x1="250" y1="250" x2="250" y2="30" className="stroke-slate-500/60" />
          <line x1="250" y1="250" x2="405" y2="95" className="stroke-slate-500/60" />
          <line x1="250" y1="250" x2="470" y2="250" className="stroke-[#E50914]/60" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="405" y2="405" className="stroke-slate-500/60" />
          <line x1="250" y1="250" x2="250" y2="470" className="stroke-slate-500/60" />
          <line x1="250" y1="250" x2="95" y2="405" className="stroke-slate-500/60" />
          <line x1="250" y1="250" x2="30" y2="250" className="stroke-[#E50914]/60" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="95" y2="95" className="stroke-slate-500/60" />

          {/* Glowing Red Nodes */}
          <circle cx="250" cy="30" r="3.5" className="fill-slate-300" />
          <circle cx="405" cy="95" r="4" className="fill-[#E50914]" />
          <circle cx="470" cy="250" r="3.5" className="fill-slate-300" />
          <circle cx="405" cy="405" r="4" className="fill-[#E50914]" />
          <circle cx="250" cy="470" r="3.5" className="fill-slate-300" />
          <circle cx="95" cy="405" r="4" className="fill-[#E50914]" />
          <circle cx="30" cy="250" r="3.5" className="fill-slate-300" />
          <circle cx="95" cy="95" r="4" className="fill-[#E50914]" />
        </svg>

        {/* Layer 3: Elevated 3D Core AI Node (High Z-offset) */}
        <div
          ref={coreRef}
          style={{ transform: 'translateZ(50px)', transition: 'transform 0.2s ease-out' }}
          className="absolute flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#E50914]/20 border border-[#E50914] flex items-center justify-center backdrop-blur-md shadow-[0_0_35px_rgba(229,9,20,0.6)]">
            <div className="w-6 h-6 rounded-full bg-[#E50914] animate-ping opacity-75" />
            <div className="w-4 h-4 rounded-full bg-white absolute" />
          </div>
        </div>
      </div>

      {/* Floating 3D Badge Overlay */}
      <div
        style={{ transform: 'translateZ(40px)' }}
        className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 bg-[#121215]/90 backdrop-blur-xl border border-[#27272A] rounded-xl px-4 py-2.5 flex items-center space-x-3 text-xs shadow-2xl"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
        <span className="font-mono text-slate-200">Interactive 3D Engine</span>
      </div>
    </div>
  );
}
