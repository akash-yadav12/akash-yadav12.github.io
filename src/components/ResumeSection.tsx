import React from 'react';
import { Download, ExternalLink, ShieldCheck, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export const ResumeSection: React.FC = () => {
  const resumePdfPath = './resume/Akash_Yadav_Resume.pdf';
  const requestMailto = `mailto:${profileData.email}?subject=Request%20for%20Akash%20Yadav%20R%C3%A9sum%C3%A9`;

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
              <ShieldCheck size={13} /> VERIFIED DOSSIER
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
              Curriculum Vitae & Technical Credentials
            </h2>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Comprehensive documentation of professional milestones across <strong>Oracle</strong> (Senior MTS), <strong>JPMorgan Chase</strong> (Kafka migration, DMN rules engines, RAG agents, 4x Star Performer), and <strong>ISS</strong> (Simfund microservices migration, custom Java libraries).
            </p>

            <div
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--accent-emerald)',
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
              Official Résumé (PDF) updated & available for download
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <a
              href={resumePdfPath}
              download="Akash_Yadav_Resume.pdf"
              className="btn btn-primary"
              data-cursor-text="DOWNLOAD"
              style={{ padding: '0.8rem 1.4rem' }}
            >
              <Download size={16} /> Download Résumé (PDF)
            </a>
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
              data-cursor-text="VIEW"
              style={{ padding: '0.8rem 1.2rem' }}
            >
              <ExternalLink size={16} /> Open PDF Viewer
            </a>
            <a
              href={requestMailto}
              className="btn btn-ghost"
              style={{ padding: '0.8rem 1rem', fontSize: '0.825rem' }}
            >
              <Mail size={15} /> Direct Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
