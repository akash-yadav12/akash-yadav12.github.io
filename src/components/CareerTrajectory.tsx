import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { careerMilestones } from '../data/experience';
import { CareerMilestone } from '../types';

export const CareerTrajectory: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('oracle');
  const activeMilestone: CareerMilestone =
    careerMilestones.find((m) => m.id === activeId) || careerMilestones[0];

  return (
    <section id="career" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">SIGNATURE EXPERIENCE · CAREER TRAJECTORY</div>
          <h2 className="section-title">Professional Progression & Engineering Scale</h2>
          <p className="section-description">
            A documented career journey from foundational computer science to high-throughput financial systems and senior enterprise engineering.
          </p>
        </div>

        {/* Career Timeline Layout (Split Navigation & Spotlight) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Interactive Milestone Navigation Track */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              position: 'relative',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-2)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Career Chapters
            </div>

            {careerMilestones.map((milestone) => {
              const isSelected = milestone.id === activeId;
              return (
                <button
                  key={milestone.id}
                  onClick={() => setActiveId(milestone.id)}
                  data-cursor-text="VIEW"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-4) var(--space-5)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'left',
                    background: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        marginTop: '0.2rem',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: isSelected
                          ? milestone.id === 'oracle'
                            ? 'var(--accent-emerald)'
                            : 'var(--accent-cyan)'
                          : 'var(--text-dim)',
                        boxShadow: isSelected ? '0 0 10px currentColor' : 'none',
                      }}
                    />
                    <div>
                      <div
                        className="mono"
                        style={{
                          fontSize: '0.675rem',
                          color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)',
                          letterSpacing: '0.05em',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {milestone.era}
                      </div>
                      <div
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}
                      >
                        {milestone.company}
                      </div>
                      <div
                        style={{
                          fontSize: '0.825rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.15rem',
                        }}
                      >
                        {milestone.role}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    color={isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)'}
                    style={{
                      transform: isSelected ? 'translateX(4px)' : 'none',
                      transition: 'transform var(--transition-fast)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Editorial Spotlight Panel */}
          <div
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(16, 20, 29, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Background Radial Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-30%',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background:
                  activeMilestone.id === 'oracle'
                    ? 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Header Metadata */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: 'var(--space-4)',
              }}
            >
              <div
                className={`badge ${
                  activeMilestone.id === 'oracle'
                    ? 'badge-emerald'
                    : activeMilestone.id === 'jpmc'
                    ? 'badge-cyan'
                    : 'badge-indigo'
                }`}
              >
                {activeMilestone.era}
              </div>

              <div
                className="mono"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Calendar size={14} />
                <span>{activeMilestone.period}</span>
              </div>
            </div>

            {/* Role & Company Header */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.25rem',
                }}
              >
                {activeMilestone.role}
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  fontSize: '1.05rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 500,
                }}
              >
                <Building2 size={16} />
                <span>{activeMilestone.company}</span>
              </div>
              {activeMilestone.location && (
                <div
                  className="mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.775rem',
                    color: 'var(--text-muted)',
                    marginTop: 'var(--space-1)',
                  }}
                >
                  <MapPin size={13} />
                  <span>{activeMilestone.location}</span>
                </div>
              )}
            </div>

            {/* Narrative Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)',
              }}
            >
              {activeMilestone.description}
            </p>

            {/* Architectural & Engineering Scope */}
            <div
              style={{
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-2)',
                  textTransform: 'uppercase',
                }}
              >
                Scope & Focus Area
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {activeMilestone.keyScope}
              </div>
            </div>

            {/* Verified Engineering Domains */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                  textTransform: 'uppercase',
                }}
              >
                Verified Engineering Domains
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {activeMilestone.verifiedDomains.map((domain) => (
                  <span
                    key={domain}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.775rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={12} color="var(--accent-emerald)" />
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Associated Technologies */}
            <div>
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: 'var(--space-3)',
                  textTransform: 'uppercase',
                }}
              >
                Key Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {activeMilestone.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-cyan"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
