import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { aiPipelineStages, sampleSimulationQueries } from '../data/aiPipelineDemo';

export const AiPipelineSandbox: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [queryIndex, setQueryIndex] = useState<number>(0);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);

  const currentQuery = sampleSimulationQueries[queryIndex];
  const activeStage = aiPipelineStages[selectedStageIndex];

  // Automated simulation step runner
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSimulating) {
      if (selectedStageIndex < aiPipelineStages.length - 1) {
        timeout = setTimeout(() => {
          setSelectedStageIndex((prev) => prev + 1);
        }, 900);
      } else {
        setIsSimulating(false);
      }
    }
    return () => clearTimeout(timeout);
  }, [isSimulating, selectedStageIndex]);

  const startSimulation = () => {
    setSelectedStageIndex(0);
    setIsSimulating(true);
    setSimulationLogs([
      `[SIMULATION START] Input Query: "${currentQuery.query}"`,
      `[STEP 1] Validating token limits and query boundary...`,
      `[STEP 3] Semantic search retrieved matching context chunks.`,
      `[STEP 6] Executing deterministic tool protocol: ${currentQuery.toolMock}`,
      `[STEP 8] Output streamed: "${currentQuery.outputMock}"`,
    ]);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSelectedStageIndex(0);
  };

  return (
    <section id="ai-sandbox" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">SIGNATURE EXPERIENCE · CONCEPTUAL AI SANDBOX</div>
          <h2 className="section-title">Interactive AI Systems Sandbox</h2>
          <p className="section-description">
            Explore the architecture behind modern intelligent applications. Visualizes end-to-end prompt construction, retrieval-augmented generation (RAG), deterministic tool invocation, and streaming egress.
          </p>
        </div>

        {/* Simulation Notice Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-3)',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(129, 140, 248, 0.05)',
            border: '1px solid rgba(129, 140, 248, 0.18)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Activity size={14} color="var(--accent-indigo)" />
            <span className="mono" style={{ fontSize: '0.725rem', color: 'var(--accent-indigo)' }}>
              SIMULATED PIPELINE EXECUTION · CONCEPTUAL AI WORKFLOW ARCHITECTURE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className="btn btn-primary"
              style={{
                padding: '0.35rem 0.8rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <Play size={12} /> {isSimulating ? 'Simulating...' : 'Simulate Pipeline Run'}
            </button>
            <button
              onClick={resetSimulation}
              className="btn btn-outline"
              style={{
                padding: '0.35rem 0.65rem',
                fontSize: '0.75rem',
              }}
              title="Reset Simulation"
            >
              <RotateCcw size={12} />
            </button>
          </div>
        </div>

        {/* Active Query Selector */}
        <div
          style={{
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Sparkles size={16} color="var(--accent-indigo)" />
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Sample Input Query:
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              "{currentQuery.query}"
            </span>
          </div>

          <button
            onClick={() => {
              setQueryIndex((prev) => (prev + 1) % sampleSimulationQueries.length);
              resetSimulation();
            }}
            className="btn btn-ghost"
            style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}
          >
            Switch Sample Query →
          </button>
        </div>

        {/* Stepper Timeline & Stage Inspector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Vertical Pipeline Step List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}
          >
            {aiPipelineStages.map((stage, index) => {
              const isActive = index === selectedStageIndex;
              const isPast = index < selectedStageIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setIsSimulating(false);
                    setSelectedStageIndex(index);
                  }}
                  data-cursor-text="STAGE"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    background: isActive
                      ? 'rgba(129, 140, 248, 0.12)'
                      : isPast
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(255, 255, 255, 0.01)',
                    border: isActive
                      ? '1px solid var(--accent-indigo)'
                      : isPast
                      ? '1px solid rgba(16, 185, 129, 0.25)'
                      : '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isActive
                          ? 'var(--accent-indigo)'
                          : isPast
                          ? 'rgba(16, 185, 129, 0.2)'
                          : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: isActive ? '#ffffff' : isPast ? 'var(--accent-emerald)' : 'var(--text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {isPast ? <CheckCircle2 size={13} /> : stage.step}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}
                      >
                        {stage.name}
                      </div>
                      <div className="mono" style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                        {stage.category}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    size={14}
                    color={isActive ? 'var(--accent-indigo)' : 'var(--text-dim)'}
                    style={{
                      transform: isActive ? 'translateX(3px)' : 'none',
                      transition: 'transform var(--transition-fast)',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Deep Dive Panel */}
          <div
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(16, 20, 29, 0.8)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {/* Stage Counter */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-3)',
              }}
            >
              <span className="badge badge-indigo">
                STAGE 0{activeStage.step} OF 0{aiPipelineStages.length}
              </span>
              <span className="mono" style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                {activeStage.category}
              </span>
            </div>

            {/* Stage Title */}
            <h3
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {activeStage.name}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.925rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: 'var(--space-6)',
              }}
            >
              {activeStage.description}
            </p>

            {/* Conceptual Engineering Role */}
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
                  fontSize: '0.7rem',
                  color: 'var(--accent-indigo)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-1)',
                }}
              >
                Systems Role in Architecture
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {activeStage.technicalRole}
              </p>
            </div>

            {/* Conceptual Data Flow */}
            <div
              style={{
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.03)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--accent-cyan)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-1)',
                }}
              >
                Active Step Telemetry (Conceptual)
              </div>
              <p className="mono" style={{ fontSize: '0.825rem', color: 'var(--text-primary)', lineHeight: 1.55 }}>
                {activeStage.conceptualFlow}
              </p>
            </div>

            {/* Simulated Live Execution Log */}
            {simulationLogs.length > 0 && (
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Simulation Event Stream
                </div>
                <div
                  style={{
                    padding: 'var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    background: '#040507',
                    border: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.725rem',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    maxHeight: '140px',
                    overflowY: 'auto',
                  }}
                >
                  {simulationLogs.map((log, i) => (
                    <div key={i}>{log}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
