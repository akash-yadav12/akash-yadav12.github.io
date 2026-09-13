import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#040507',
        padding: 'var(--space-8) 0 var(--space-12) 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-4)',
        }}
      >
        <div>
          <div style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {profileData.name}
          </div>
          <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {profileData.role} · {profileData.company}
          </div>
        </div>

        <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          © {currentYear} {profileData.name}. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="btn btn-outline"
          style={{
            fontSize: '0.75rem',
            padding: '0.4rem 0.8rem',
            fontFamily: 'var(--font-mono)',
          }}
          aria-label="Back to top"
        >
          Back to Top <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};
