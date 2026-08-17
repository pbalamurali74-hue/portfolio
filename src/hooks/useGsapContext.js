import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom React hook for GSAP animation context setup & automatic revert cleanup.
 * @param {Function} animationCallback - Callback function receiving (ctx, gsap, ScrollTrigger)
 * @param {Array} dependencies - React dependency array
 * @param {Object} scopeRef - Optional React ref for scoping target elements
 */
export function useGsapContext(animationCallback, dependencies = [], scopeRef = null) {
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Create GSAP context for proper cleanup in React StrictMode
    const ctx = gsap.context(() => {
      animationCallback({
        gsap,
        ScrollTrigger,
        prefersReducedMotion
      });
    }, scopeRef ? scopeRef.current : null);

    return () => {
      ctx.revert(); // Reverts all animations created inside this context
    };
  }, dependencies);
}
