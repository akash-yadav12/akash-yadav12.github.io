import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);

    // Subtle celebration confetti
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#38bdf8', '#818cf8', '#10b981'],
        disableForReducedMotion: true,
      });
    } catch {
      // Graceful fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, var(--bg-canvas) 0%, #030406 100%)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Label */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <span className="section-label">GET IN TOUCH · INITIATE CONVERSATION</span>
        </div>

        {/* Monumental Headline */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            Let's Build <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #38bdf8 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Something Great.
            </span>
          </h2>
        </div>

        {/* Supporting Text */}
        <p
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            margin: '0 auto var(--space-8) auto',
            lineHeight: 1.65,
          }}
        >
          Always interested in discussing high-scale architectures, systems engineering challenges, distributed services, and high-impact engineering opportunities.
        </p>

        {/* Email Copy Card */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            padding: 'var(--space-2) var(--space-4)',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-medium)',
            marginBottom: 'var(--space-8)',
          }}
        >
          <Mail size={16} color="var(--accent-cyan)" />
          <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
            {profileData.email}
          </span>
          <button
            onClick={handleCopyEmail}
            className="btn btn-outline"
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              gap: '0.35rem',
            }}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check size={12} color="var(--accent-emerald)" /> Copied!
              </>
            ) : (
              <>
                <Copy size={12} /> Copy
              </>
            )}
          </button>
        </div>

        {/* Verified Social Channels */}
        <div>
          <div
            className="mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-4)',
            }}
          >
            Verified Digital Profiles
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'var(--space-3)',
            }}
          >
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
              style={{ fontSize: '0.825rem' }}
            >
              <LinkedinIcon size={15} color="#0077b5" /> LinkedIn <ExternalLink size={12} />
            </a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
              style={{ fontSize: '0.825rem' }}
            >
              <GithubIcon size={15} /> GitHub <ExternalLink size={12} />
            </a>

            <a
              href={profileData.socials.stackoverflow}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
              style={{ fontSize: '0.825rem' }}
            >
              <span className="mono" style={{ color: '#f48024', fontWeight: 'bold' }}>
                SO
              </span>{' '}
              StackOverflow <ExternalLink size={12} />
            </a>

            <a
              href={profileData.socials.codepen}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline"
              style={{ fontSize: '0.825rem' }}
            >
              <span className="mono" style={{ fontWeight: 'bold' }}>
                CP
              </span>{' '}
              CodePen <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
