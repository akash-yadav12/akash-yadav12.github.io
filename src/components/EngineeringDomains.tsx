import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { engineeringDomains } from '../data/domains';
import { EngineeringDomain } from '../types';

export const EngineeringDomains: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(engineeringDomains[0].id);
  const activeDomain: EngineeringDomain =
    engineeringDomains.find((d) => d.id === selectedDomainId) || engineeringDomains[0];

  return (
    <section id="domains" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">ENGINEERING BREADTH · LIFECYCLE COVERAGE</div>
          <h2 className="section-title">What I Build Across The Technology Stack</h2>
          <p className="section-description">
            Software engineering demands holistic thinking across the entire product lifecycle — from distributed backend reliability and architectural trade-offs to tactile frontend interfaces and deployment velocity.
          </p>
        </div>

        {/* Split Hub Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Domain Selector List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div
              className="mono"
              style={{
                fontSize: '0.725rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
              }}
            >
              Select Engineering Domain
            </div>

            {engineeringDomains.map((domain, index) => {
              const isSelected = domain.id === selectedDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomainId(domain.id)}
                  data-cursor-text="INSPECT"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    background: isSelected ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    border: isSelected ? '1px solid var(--border-medium)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.725rem',
                        color: isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)',
                        width: '20px',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontSize: '0.925rem',
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {domain.title}
                    </span>
                  </div>

                  {isSelected && <ArrowRight size={14} color="var(--accent-cyan)" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Domain Detail Inspector Card */}
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
            {/* Domain Accent Top Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${activeDomain.highlightColor}, transparent)`,
              }}
            />

            {/* Header */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div
                className="mono"
                style={{
                  fontSize: '0.75rem',
                  color: activeDomain.highlightColor,
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--space-1)',
                  textTransform: 'uppercase',
                }}
              >
                {activeDomain.subtitle}
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {activeDomain.title}
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)',
              }}
            >
              {activeDomain.description}
            </p>

            {/* Core Responsibilities */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Engineering Focus Areas
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {activeDomain.coreResponsibilities.map((resp, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        marginTop: '0.25rem',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={10} color="var(--accent-cyan)" />
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {resp}
                    </span>
                  </div>
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
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Associated Technologies & Patterns
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {activeDomain.associatedTech.map((tech) => (
                  <span key={tech} className="badge badge-cyan" style={{ fontSize: '0.75rem' }}>
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
