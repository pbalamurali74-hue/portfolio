import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Cpu, Code2, Database, Eye } from 'lucide-react';

export default function HeroVisual() {
  const containerRef = useRef(null);
  const web3DRef = useRef(null);
  const coreRef = useRef(null);
  const [activeTab, setActiveTab] = useState('AI / ML');
  const [ripples, setRipples] = useState([]);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const web = web3DRef.current;
    const core = coreRef.current;
    if (!container || !web) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Dynamic 3D Tilt & Magnetic Attraction
      const rotX = (-y / (rect.height / 2)) * 30; // 30 deg 3D tilt
      const rotY = (x / (rect.width / 2)) * 30;

      web.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(30px)`;
      if (core) {
        core.style.transform = `translateZ(70px) scale(1.1) rotateX(${(-rotX * 0.3).toFixed(2)}deg) rotateY(${(-rotY * 0.3).toFixed(2)}deg)`;
      }
    };

    const handleMouseLeave = () => {
      web.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      if (core) {
        core.style.transform = `translateZ(0px) scale(1) rotateX(0deg) rotateY(0deg)`;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle Interactive Click Energy Ripples
  const handleContainerClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };

    setRipples((prev) => [...prev.slice(-3), newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  const techNodes = [
    { id: 'ml', label: 'Deep Learning & ML', icon: Cpu, angle: 0, tag: 'PyTorch • XGBoost • Scikit' },
    { id: 'python', label: 'Backend Engine', icon: Code2, angle: 90, tag: 'FastAPI • Pydantic • REST' },
    { id: 'data', label: 'Data & Analytics', icon: Database, angle: 180, tag: 'Power BI • Pandas • Prophet' },
    { id: 'vision', label: 'Geospatial & Vision', icon: Eye, angle: 270, tag: 'Sentinel-1 SAR • YOLO' },
  ];

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full h-[460px] lg:h-[580px] flex items-center justify-center overflow-hidden pointer-events-auto cursor-pointer perspective-1000 select-none group"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/60 to-[#0A0A0B] pointer-events-none" />

      {/* Click Ripple Effect */}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ left: r.x, top: r.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-[#E50914] animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none z-30"
        />
      ))}

      {/* 3D Interactive HUD Network */}
      <div
        ref={web3DRef}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] transition-transform duration-200 ease-out flex items-center justify-center"
      >
        {/* Ring 1: Outer Spinning HUD Compass */}
        <div
          style={{ transform: 'translateZ(-50px)', transformStyle: 'preserve-3d' }}
          className="absolute inset-0 flex items-center justify-center opacity-30"
        >
          <div className="w-full h-full rounded-full border-2 border-dashed border-[#E50914] animate-[spin_50s_linear_infinite]" />
        </div>

        {/* Ring 2: Counter-Rotating Polygon HUD */}
        <div
          style={{ transform: 'translateZ(-20px)', transformStyle: 'preserve-3d' }}
          className="absolute inset-8 flex items-center justify-center opacity-40"
        >
          <div className="w-full h-full rounded-full border border-slate-700/60 animate-[spin_30s_linear_infinite_reverse]" />
        </div>

        {/* Ring 3: Main Concentric Crimson Radar Orbital Rings */}
        <div
          style={{ transform: 'translateZ(10px)' }}
          className="absolute inset-4 rounded-full border border-[#E50914]/40 flex items-center justify-center group-hover:border-[#E50914]/80 transition-colors duration-500"
        >
          <div className="w-[85%] h-[85%] rounded-full border border-slate-700/60 flex items-center justify-center">
            <div className="w-[70%] h-[70%] rounded-full border border-dashed border-[#E50914]/50 flex items-center justify-center">
              <div className="w-[50%] h-[50%] rounded-full border-2 border-[#E50914]/70 shadow-[0_0_20px_rgba(229,9,20,0.3)]" />
            </div>
          </div>
        </div>

        {/* Interactive Orbiting Nodes */}
        {techNodes.map((node) => {
          const IconComp = node.icon;
          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                transform: `rotate(${node.angle}deg) translate(180px) rotate(-${node.angle}deg) translateZ(40px)`,
              }}
              className="absolute z-20 transition-all duration-300"
            >
              <div
                className={`p-3 rounded-full bg-[#121215] border ${
                  isHovered ? 'border-[#E50914] bg-[#E50914] text-white scale-125 shadow-[0_0_25px_rgba(229,9,20,0.8)]' : 'border-[#27272A] text-slate-300 hover:border-[#E50914]'
                } transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer`}
              >
                <IconComp className="w-4 h-4" />
              </div>

              {/* Hover Tooltip Card */}
              {isHovered && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#18181C] border border-[#E50914] rounded-lg px-3 py-1.5 whitespace-nowrap z-40 shadow-2xl animate-fade-in">
                  <div className="text-[11px] font-bold font-display text-white">{node.label}</div>
                  <div className="text-[9px] font-mono text-[#E50914]">{node.tag}</div>
                </div>
              )}
            </div>
          );
        })}

        {/* Layer 3: Elevated 3D Center Face Orb with Interactive Glowing Ring */}
        <div
          ref={coreRef}
          style={{ transform: 'translateZ(60px)', transition: 'transform 0.2s ease-out' }}
          className="absolute flex items-center justify-center z-10"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-4 border-[#E50914] p-1 bg-[#121215] shadow-[0_0_60px_rgba(229,9,20,0.6)] group-hover:shadow-[0_0_90px_rgba(229,9,20,0.9)] transition-shadow duration-500">
            {/* Pulsing Radar Ring */}
            <div className="absolute -inset-3 rounded-full border border-[#E50914]/60 animate-ping pointer-events-none opacity-40" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-[#E50914]/30 pointer-events-none" />

            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0B] relative">
              <img
                src="/nav_face.jpg"
                alt="Purushotham Balamurali"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bottom Control Bar */}
      <div
        style={{ transform: 'translateZ(50px)' }}
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#121215]/95 backdrop-blur-xl border border-[#27272A] rounded-2xl px-4 py-2.5 flex items-center space-x-3 text-xs shadow-2xl z-30"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping" />
        <div className="flex items-center space-x-2">
          <span className="font-mono text-slate-200 font-bold">Purushotham Balamurali</span>
          <span className="text-[10px] font-mono text-slate-400 bg-[#18181C] px-2 py-0.5 rounded-md border border-[#27272A] hidden sm:inline">
            Interactive 3D HUD
          </span>
        </div>
      </div>
    </div>
  );
}
