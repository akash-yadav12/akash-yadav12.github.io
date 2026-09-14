import React, { useEffect, useRef } from 'react';
import { ArrowDown, Terminal, Layers, Cpu, Brain } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId: number;
    let isVisible = true;

    // Resize handler with devicePixelRatio clamping
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth * dpr : window.innerWidth * dpr;
      canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight * dpr : window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes for topology
    const width = () => (canvas.parentElement?.clientWidth || window.innerWidth);
    const height = () => (canvas.parentElement?.clientHeight || window.innerHeight);

    const nodeCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 24000), 50);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width(),
      y: Math.random() * height(),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 1,
      alpha: Math.random() * 0.4 + 0.2,
    }));

    let mouseX = -9999;
    let mouseY = -9999;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Pause canvas when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const w = width();
      const h = height();
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Gentle mouse interaction
        const mdx = node.x - mouseX;
        const mdy = node.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 140) {
          const force = (1 - mDist / 140) * 0.8;
          node.x += (mdx / mDist) * force;
          node.y += (mdy / mDist) * force;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = w;
        if (node.x > w) node.x = 0;
        if (node.y < 0) node.y = h;
        if (node.y > h) node.y = 0;

        ctx.fillStyle = `rgba(129, 140, 248, ${node.alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Background Interactive Topology Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.65,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Verification Status Pill */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <div
            className="badge badge-emerald"
            style={{
              padding: '0.4rem 0.85rem',
              fontSize: '0.75rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                boxShadow: '0 0 10px var(--accent-emerald)',
              }}
            />
            <span>CURRENT ROLE · SENIOR MEMBER OF TECHNICAL STAFF @ ORACLE</span>
          </div>
        </div>

        {/* Hero Display Typography */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <h1
            style={{
              fontSize: 'var(--text-hero)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            Akash Yadav
          </h1>
        </div>

        {/* Role & Positioning Subhead */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <p
            className="mono"
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--accent-cyan)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            Senior Member of Technical Staff · Oracle
          </p>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              marginTop: 'var(--space-3)',
              lineHeight: 1.6,
            }}
          >
            {profileData.tagline}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
          }}
        >
          <a href="#career" className="btn btn-primary" data-cursor-text="CAREER">
            View Career Progression <ArrowDown size={14} />
          </a>
          <a href="#projects" className="btn btn-outline" data-cursor-text="PROJECTS">
            Explore Work Showcase
          </a>
          <a href="#system-design" className="btn btn-outline" data-cursor-text="SANDBOX">
            System Design Sandbox
          </a>
        </div>

        {/* Engineering Breadth Telemetry Strip (Genuine, strictly verified scope) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-4)',
            padding: 'var(--space-4) var(--space-6)',
            background: 'rgba(10, 13, 19, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Cpu size={20} color="var(--accent-cyan)" />
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                SYSTEM DOMAIN
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Distributed Systems & Scale
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Layers size={20} color="var(--accent-emerald)" />
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                EXPERIENCE TRAJECTORY
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Oracle · JPMC · ISS
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Terminal size={20} color="var(--accent-indigo)" />
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                ENGINEERING BREADTH
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Full-Stack & Backend Services
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <Brain size={20} color="var(--accent-amber)" />
            <div>
              <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                BEYOND CODE
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Sports, Problem Solving & Metacognition
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
