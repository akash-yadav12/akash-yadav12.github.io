import React, { useState } from 'react';
import { GraduationCap, Award, Activity, Brain } from 'lucide-react';
import { profileData } from '../data/profile';

export const AboutOrigins: React.FC = () => {
  const [isWinking, setIsWinking] = useState<boolean>(false);

  return (
    <section id="about" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">BACKGROUND · ORIGINS & TRAJECTORY</div>
          <h2 className="section-title">The Engineering Journey</h2>
          <p className="section-description">
            From algorithmic foundations and competitive programming in college to architecting enterprise systems at Oracle and JPMorgan Chase.
          </p>
        </div>

        {/* Narrative & Portrait Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Portrait Card with Authentic Photos & Easter Egg */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '280px',
                height: '320px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-medium)',
                boxShadow: 'var(--shadow-lg)',
                background: 'var(--bg-surface-elevated)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setIsWinking(true)}
              onMouseLeave={() => setIsWinking(false)}
              title="Hover to toggle"
            >
              <img
                src={isWinking ? './images/wink.jpeg' : './images/smile.jpeg'}
                alt="Akash Yadav"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(25%) contrast(105%)',
                  transition: 'transform var(--transition-normal)',
                }}
              />

              {/* Status Badge Over Portrait */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 7, 9, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)' }}>
                  ● Oracle · Senior MTS
                </span>
                <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                  {profileData.location}
                </span>
              </div>
            </div>
            <span
              className="mono"
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                marginTop: 'var(--space-2)',
              }}
            >
              Hover photo for original easter egg 😉
            </span>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.7, fontWeight: 400 }}>
              I am a software engineer with a deep fascination for the entire technology stack. My engineering practice centers around building resilient systems that solve tangible problems — prioritizing clarity, defensive architecture, and high execution velocity.
            </p>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              My technical journey began at <strong>K.J. Somaiya Institute of Engineering & Information Technology</strong>, where I immersed myself in data structures, systems programming in C++ and Java, and built administrative software that automated examination scheduling and hardware inventory for the college.
            </p>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Progressing through <strong>Institutional Shareholder Services (ISS)</strong> and <strong>JPMorgan Chase (JPMC)</strong>, I engineered high-throughput Java microservices, architected Kafka-based migration pipelines moving 2M+ records to AWS S3, and built in-IDE RAG Copilot agents. Beginning October 2026, I step into <strong>Oracle</strong> as a <strong>Senior Member of Technical Staff (SMTS)</strong> to build multi-tenant cloud services.
            </p>

            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Beyond software systems, I have an insatiable drive for physical and cognitive challenge. I am an avid sports enthusiast—actively playing basketball, volleyball, and cricket, and competing in distance running—which cultivates endurance, rapid decision-making, and teamwork under pressure. Simultaneously, I am fascinated by <strong>metacognition</strong>: analyzing my own cognitive processes, deconstructing problem-solving frameworks, and continually refining how I learn and reason through complex engineering architectures.
            </p>

            {/* Academic, Athletic & Cognitive Foundations */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-2)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <GraduationCap size={16} color="var(--accent-cyan)" />
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    B.Tech, Information Technology
                  </div>
                  <div className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                    KJ Somaiya Institute of Technology
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Award size={16} color="var(--accent-emerald)" />
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Academic Distinction
                  </div>
                  <div className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                    Graduated with 9.23 / 10 CGPA
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Activity size={16} color="var(--accent-amber)" />
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Multi-Sport Athletics
                  </div>
                  <div className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                    Basketball · Cricket · Distance Running
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Brain size={16} color="var(--accent-indigo)" />
                <div>
                  <div className="mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Problem Solving & Metacognition
                  </div>
                  <div className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                    Cognitive Models & Algorithmic Puzzles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
