import React, { useRef, useState } from 'react';

/**
 * Reusable 3D Tilt Wrapper Component
 * Gives any card or element realistic 3D perspective rotation on hover based on cursor position.
 */
export default function Tilt3D({ children, className = '', maxTilt = 12, scale = 1.02 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    // 3D Glare Light Reflection Effect
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      opacity: 0.15,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
    setGlareStyle({ opacity: 0, transition: 'opacity 0.5s ease-out' });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', ...style }}
      className={`relative transition-all duration-200 ${className}`}
    >
      {/* 3D Reflection Glare Overlay */}
      <div
        className="absolute inset-0 rounded-inherit pointer-events-none z-30 transition-opacity duration-300"
        style={glareStyle}
      />
      <div style={{ transformStyle: 'preserve-3d' }}>{children}</div>
    </div>
  );
}
