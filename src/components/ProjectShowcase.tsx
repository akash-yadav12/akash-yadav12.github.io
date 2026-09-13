import React, { useState } from 'react';
import { ExternalLink, ArrowRight, X, Wrench, CheckCircle, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectItems } from '../data/projects';
import { ProjectItem } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedStage === 'all'
      ? projectItems
      : projectItems.filter((p) => p.evolutionStage === selectedStage);

  return (
    <section id="projects" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">WORK SHOWCASE · A JOURNEY OF GROWTH</div>
          <h2 className="section-title">Selected Systems & Applications</h2>
          <p className="section-description">
            A chronological progression demonstrating technical evolution — from early client-side DOM mechanics and audio synthesis to full-stack architectures and specialized developer tools.
          </p>
        </div>

        {/* Growth Stage Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-8)',
          }}
        >
          {[
            { id: 'all', label: 'All Work' },
            { id: 'Engineering Systems', label: 'Systems & Developer Tools' },
            { id: 'Full-Stack Architecture', label: 'Full-Stack Applications' },
            { id: 'Early Experimentation', label: 'Early Experimentation & Audio/Visual' },
          ].map((tab) => {
            const isActive = selectedStage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedStage(tab.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  background: isActive ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? 'var(--bg-canvas)' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-subtle)',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all var(--transition-fast)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="interactive-card"
              style={{
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(16, 20, 29, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Evolution Stage & Category Badge */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      fontSize: '0.675rem',
                      background:
                        project.evolutionStage === 'Engineering Systems'
                          ? 'rgba(56, 189, 248, 0.1)'
                          : project.evolutionStage === 'Full-Stack Architecture'
                          ? 'rgba(129, 140, 248, 0.1)'
                          : 'rgba(255, 255, 255, 0.05)',
                      color:
                        project.evolutionStage === 'Engineering Systems'
                          ? 'var(--accent-cyan)'
                          : project.evolutionStage === 'Full-Stack Architecture'
                          ? 'var(--accent-indigo)'
                          : 'var(--text-secondary)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    {project.evolutionStage}
                  </span>

                  {project.featured && (
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--accent-emerald)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      KEY PROJECT
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: 1.4,
                  }}
                >
                  {project.tagline}
                </p>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-5)',
                    paddingTop: 'var(--space-3)',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="mono"
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions & Links (Gracefully rendered only if present) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-outline"
                    data-cursor-text="EXPAND"
                    style={{
                      fontSize: '0.775rem',
                      padding: '0.4rem 0.8rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Technical Breakdown <ArrowRight size={13} />
                  </button>

                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-ghost"
                        style={{ padding: '0.35rem' }}
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-ghost"
                        style={{ padding: '0.35rem', color: 'var(--accent-cyan)' }}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal (Graceful Field Omission) */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-4)',
            backgroundColor: 'rgba(5, 6, 8, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProject(null);
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '85vh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-lg)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              position: 'relative',
            }}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              aria-label="Close case study details"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: 'var(--space-4)', paddingRight: '2rem' }}>
              <div className="badge badge-cyan" style={{ marginBottom: 'var(--space-2)' }}>
                {activeModalProject.evolutionStage}
              </div>
              <h3
                id="case-study-title"
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {activeModalProject.title}
              </h3>
              <p
                className="mono"
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--accent-cyan)',
                  marginTop: '0.2rem',
                }}
              >
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {activeModalProject.summary}
              </p>
            </div>

            {/* Problem & Solution (Only rendered if present) */}
            {(activeModalProject.problem || activeModalProject.solution) && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                {activeModalProject.problem && (
                  <div
                    style={{
                      padding: 'var(--space-4)',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      className="mono"
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent-amber)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Wrench size={12} /> The Challenge
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {activeModalProject.problem}
                    </p>
                  </div>
                )}

                {activeModalProject.solution && (
                  <div
                    style={{
                      padding: 'var(--space-4)',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div
                      className="mono"
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent-emerald)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 'var(--space-2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <CheckCircle size={12} /> Technical Solution
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {activeModalProject.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Engineering Decisions (Only rendered if present) */}
            {activeModalProject.keyDecisions && activeModalProject.keyDecisions.length > 0 && (
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.725rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Code2 size={13} /> Key Technical Decisions
                </div>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {activeModalProject.keyDecisions.map((decision, i) => (
                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {decision}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Applied */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
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
                Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {activeModalProject.technologies.map((t) => (
                  <span key={t} className="badge badge-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem' }}
                >
                  <GithubIcon size={14} /> View Repository
                </a>
              )}
              {activeModalProject.liveDemoUrl && (
                <a
                  href={activeModalProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-primary"
                  style={{ fontSize: '0.8rem' }}
                >
                  <ExternalLink size={14} /> Open Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
