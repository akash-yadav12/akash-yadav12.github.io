import React, { useState } from 'react';
import { Network, Server, ArrowRight, ShieldAlert, Cpu, Activity } from 'lucide-react';
import { systemDesignNodes } from '../data/systemDesignDemo';
import { ArchitectureNode } from '../types';

export const SystemDesignCanvas: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('services');
  const activeNode: ArchitectureNode =
    systemDesignNodes.find((n) => n.id === selectedNodeId) || systemDesignNodes[2];

  return (
    <section id="system-design" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">SIGNATURE EXPERIENCE · CONCEPTUAL ENGINEERING SANDBOX</div>
          <h2 className="section-title">Interactive System Design Sandbox</h2>
          <p className="section-description">
            Explore a canonical distributed system and experiment with architectural trade-offs. This sandbox demonstrates systems thinking, resilience mechanics, and data consistency patterns.
          </p>
        </div>

        {/* Simulation Notice Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-2)',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(56, 189, 248, 0.05)',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Activity size={14} color="var(--accent-cyan)" />
            <span className="mono" style={{ fontSize: '0.725rem', color: 'var(--accent-cyan)' }}>
              SIMULATION ENVIRONMENT · MOCK DATA TRAFFIC · CONCEPTUAL TOPOLOGY
            </span>
          </div>
          <span className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
            Click any node below to inspect trade-offs
          </span>
        </div>

        {/* Main Canvas & Inspector Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {/* Node Topology Selector Matrix */}
          <div
            style={{
              padding: 'clamp(1rem, 3vw, 2rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(10, 13, 19, 0.75)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: '0.725rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Network size={14} color="var(--accent-cyan)" /> Distributed Architecture Nodes
            </div>

            {systemDesignNodes.map((node) => {
              const isSelected = node.id === selectedNodeId;
              const isConnected = activeNode.connections.includes(node.id);

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  data-cursor-text="NODE"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'left',
                    background: isSelected
                      ? 'rgba(56, 189, 248, 0.12)'
                      : isConnected
                      ? 'rgba(129, 140, 248, 0.05)'
                      : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected
                      ? '1px solid var(--accent-cyan)'
                      : isConnected
                      ? '1px solid rgba(129, 140, 248, 0.3)'
                      : '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: 'var(--radius-md)',
                        background: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      }}
                    >
                      <Server size={16} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.925rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}
                      >
                        {node.name}
                      </div>
                      <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {node.protocol}
                      </div>
                    </div>
                  </div>

                  {isConnected && (
                    <span
                      className="mono"
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--accent-indigo)',
                        background: 'rgba(129, 140, 248, 0.1)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      Downstream Link
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Architecture Inspector Panel */}
          <div
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(16, 20, 29, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-4)' }}>
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-1)',
                }}
              >
                NODE INSPECTOR · {activeNode.tier}
              </div>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {activeNode.name}
              </h3>
              <div
                className="mono"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginTop: '0.2rem',
                }}
              >
                Protocol: {activeNode.protocol}
              </div>
            </div>

            {/* Description */}
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
                Architectural Function
              </div>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {activeNode.description}
              </p>
            </div>

            {/* Scaling & Resilience Considerations */}
            <div
              style={{
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--accent-emerald)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Cpu size={13} /> Resilience & Scaling Strategy
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {activeNode.considerations}
              </p>
            </div>

            {/* Architectural Trade-Offs */}
            <div
              style={{
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(251, 191, 36, 0.03)',
                border: '1px solid rgba(251, 191, 36, 0.15)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: '0.725rem',
                  color: 'var(--accent-amber)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <ShieldAlert size={13} /> Architectural Trade-Offs
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {activeNode.tradeOffs}
              </p>
            </div>

            {/* Downstream Connections */}
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
                Downstream Dependencies ({activeNode.connections.length})
              </div>
              {activeNode.connections.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {activeNode.connections.map((connId) => {
                    const target = systemDesignNodes.find((n) => n.id === connId);
                    return (
                      <button
                        key={connId}
                        onClick={() => setSelectedNodeId(connId)}
                        className="badge badge-indigo"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <span>{target?.name || connId}</span>
                        <ArrowRight size={11} />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <span className="mono" style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                  Terminal Storage / Ingestion Boundary
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
