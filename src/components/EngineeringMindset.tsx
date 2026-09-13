import React from 'react';
import { engineeringTenets } from '../data/mindset';

export const EngineeringMindset: React.FC = () => {
  return (
    <section id="mindset" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">ENGINEERING PHILOSOPHY · FIRST PRINCIPLES</div>
          <h2 className="section-title">How I Approach Software Systems</h2>
          <p className="section-description">
            Pragmatic tenets developed through production engineering, scaling constraints, and operating systems under real-world load.
          </p>
        </div>

        {/* Editorial Tenets Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)',
          }}
        >
          {engineeringTenets.map((tenet, index) => (
            <div
              key={tenet.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tenet.title}
                  </h3>
                </div>

                <div
                  className="mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {tenet.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {tenet.principle}
                </p>
              </div>

              <div
                style={{
                  padding: 'var(--space-3)',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.675rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  Application
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {tenet.context}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
