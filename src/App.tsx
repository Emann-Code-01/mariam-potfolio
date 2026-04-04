import Particles from '@/components/ui/Particles'
import Navbar from '@/components/global/Navbar';
import HeroSection from '@/components/sections/HeroSection';


import AnimatedCursor from 'react-animated-cursor'

import { useEffect, useRef, useState } from 'react';

function TouchRipple() {
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      const ripple = rippleRef.current;
      if (!ripple) return;
      ripple.style.left = `${touch.clientX}px`;
      ripple.style.top = `${touch.clientY}px`;
      ripple.style.opacity = '1';
    };

    const handleTouchEnd = () => {
      if (rippleRef.current) rippleRef.current.style.opacity = '0';
    };

    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={rippleRef}
      style={{
        position: 'fixed',
        width: 38,
        height: 38,
        borderRadius: '50%',
        border: '1.5px solid rgba(250,250,250,0.5)',
        backgroundColor: 'rgba(250,250,250,0.15)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        opacity: 0,
        zIndex: 9999,
      }}
    />
  );
}

export default function App() {
  const [inputType, setInputType] = useState<'mouse' | 'touch'>(() =>
    typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
      ? 'touch'
      : 'mouse'
  );

  useEffect(() => {
    const handleMouseMove = () => setInputType('mouse');
    const handleTouchStart = () => setInputType('touch');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      {inputType === 'touch' ? (
        <TouchRipple />
      ) : (
        <AnimatedCursor
          innerSize={8}
          outerSize={38}
          innerScale={1}
          outerScale={2}
          color='250, 250, 250'
          outerAlpha={0.3}
        />
      )}
      {/* Background - sits behind everything */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={600}
          particleSpread={13}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* All your page sections go here */}
      <div className=' z-1000 max-w-440 mx-auto relative' style={{ zIndex: 1 }}>
        <Navbar />
        <div>
          <HeroSection />
        </div>
      </div>
    </>
  )
}