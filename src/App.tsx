import Particles from '@/components/ui/Particles'
import Navbar from '@/components/global/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import AnimatedCursor from 'react-animated-cursor'
import { useEffect, useRef, useState } from 'react';

const TOUCH_RIPPLE_COLOR = 'rgba(201, 107, 90, 0.25)';
const TOUCH_RIPPLE_BORDER = 'rgba(245, 240, 232, 0.35)';

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
        border: `1.5px solid ${TOUCH_RIPPLE_BORDER}`,
        backgroundColor: TOUCH_RIPPLE_COLOR,
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
          innerSize={7}
          outerSize={36}
          innerScale={1}
          outerScale={2.2}
          color='245, 240, 232'
          outerStyle={{
            border: '1.5px solid rgba(201, 107, 90, 0.6)',
            backgroundColor: 'transparent',
          }}
          innerStyle={{
            backgroundColor: 'rgba(245, 240, 232, 0.9)',
          }}
          outerAlpha={0}
        />
      )}

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}>
        <Particles
          particleColors={['#F5F0E8', '#C96B5A']}
          particleCount={400}
          particleSpread={14}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className='relative' style={{ zIndex: 1 }}>
        <Navbar />
        <div className='max-w-7xl mx-auto relative space-y-0 px-4 md:px-8 lg:px-12'>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  )
}