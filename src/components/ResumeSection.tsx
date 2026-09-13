import React from 'react';
import { Mail, ShieldCheck, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export const ResumeSection: React.FC = () => {
  const resumeSubject = encodeURIComponent('Request for Akash Yadav Updated Résumé');
  const resumeBody = encodeURIComponent(
    'Hi Akash,\n\nI came across your engineering portfolio and would like to request a copy of your updated Senior Member of Technical Staff résumé.\n\nBest regards,'
  );
  const requestMailto = `mailto:${profileData.email}?subject=${resumeSubject}&body=${resumeBody}`;

  return (
    <section id="resume" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            padding: 'clamp(1.5rem, 5vw, 3rem)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(16, 20, 29, 0.9), rgba(10, 13, 19, 0.8))',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-6)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="badge badge-emerald" style={{ marginBottom: 'var(--space-3)' }}>
              <ShieldCheck size={13} /> PROFESSIONAL CREDENTIALS
            </div>
            <h2
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-2)',
              }}
            >
              Curriculum Vitae & Technical Dossier
            </h2>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Comprehensive documentation of professional milestones across <strong>Oracle</strong>, <strong>JPMorgan Chase</strong>, and <strong>ISS</strong>. Updated comprehensive résumé reflecting senior engineering deliverables is available directly on request.
            </p>

            <div
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                marginTop: 'var(--space-3)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald)',
                  display: 'inline-block',
                }}
              />
              Updated Senior MTS Résumé available via verified request
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <a
              href={requestMailto}
              className="btn btn-primary"
              data-cursor-text="REQUEST"
              style={{ padding: '0.8rem 1.4rem' }}
            >
              <Mail size={16} /> Request Updated Résumé
            </a>
            <a
              href="#career"
              className="btn btn-outline"
              style={{ padding: '0.8rem 1.2rem' }}
            >
              <FileText size={16} /> View Trajectory Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
