import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices without touch preference
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over element with cursor text or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        const interactive = target.closest('a, button, [role="button"], input, .interactive-card');
        
        if (customText) {
          setCursorText(customText);
          setIsHovered(true);
        } else if (interactive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          marginLeft: '-3px',
          marginTop: '-3px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-cyan)',
          boxShadow: '0 0 10px var(--accent-cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Trailing Ring / Expandable Badge */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: cursorText ? 'auto' : isHovered ? '42px' : '26px',
          height: cursorText ? '26px' : isHovered ? '42px' : '26px',
          marginLeft: cursorText ? '-36px' : isHovered ? '-21px' : '-13px',
          marginTop: cursorText ? '-13px' : isHovered ? '-21px' : '-13px',
          padding: cursorText ? '0 10px' : 0,
          borderRadius: 'var(--radius-full)',
          border: cursorText ? '1px solid var(--accent-cyan)' : '1px solid rgba(56, 189, 248, 0.4)',
          backgroundColor: cursorText ? 'rgba(6, 7, 9, 0.88)' : isHovered ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          fontWeight: 600,
          color: 'var(--accent-cyan)',
          letterSpacing: '0.08em',
          transition: 'width 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.2s ease, background-color 0.2s ease',
          backdropFilter: cursorText ? 'blur(8px)' : 'none',
        }}
      >
        {cursorText}
      </div>
    </>
  );
};
