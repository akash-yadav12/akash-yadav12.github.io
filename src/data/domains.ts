import { EngineeringDomain } from '../types';

export const engineeringDomains: EngineeringDomain[] = [
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    subtitle: 'High-throughput services & resilient system layers',
    description:
      'Designing decoupled services, robust API contracts, asynchronous event processing, and fault-tolerant service communication for mission-critical enterprise environments.',
    coreResponsibilities: [
      'Microservice decomposition and boundary definition',
      'REST & RPC contract specification and backwards compatibility',
      'Asynchronous task scheduling and event-driven patterns',
      'Fault tolerance: circuit breaking, timeouts, and graceful degradation',
    ],
    associatedTech: ['Java', 'Spring Boot', 'Node.js', 'Distributed Systems', 'RESTful APIs'],
    highlightColor: '#38bdf8',
  },
  {
    id: 'architecture',
    title: 'System Design & Scalability',
    subtitle: 'Resilient topologies built to withstand complexity',
    description:
      'Architecting systems with clear separation of concerns, defensive failure handling, horizontal scalability, and adherence to established distributed systems principles.',
    coreResponsibilities: [
      'High-availability topology and multi-region strategies',
      'Data partitioning, sharding, and replication planning',
      'Bottleneck identification and performance profiling',
      'Balancing consistency, availability, and partition tolerance (CAP)',
    ],
    associatedTech: ['Distributed Architecture', 'Caching Topologies', 'Load Balancing', 'Data Replication'],
    highlightColor: '#818cf8',
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering & UI Systems',
    subtitle: 'High-performance, accessible, and tactile interfaces',
    description:
      'Building responsive, accessible web interfaces that deliver fluid interactions and instant feedback without sacrificing performance or semantic correctness.',
    coreResponsibilities: [
      'State orchestration and decoupled component architectures',
      'GPU-accelerated animations, Canvas rendering, and 60 FPS transitions',
      'Strict accessibility (a11y) standards, keyboard flows, and ARIA patterns',
      'Design systems: fluid typography, layout primitives, and design tokens',
    ],
    associatedTech: ['React', 'TypeScript', 'Modern CSS', 'HTML5 Canvas', 'Web APIs'],
    highlightColor: '#34d399',
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    subtitle: 'Containerized workloads and environment automation',
    description:
      'Structuring containerized environments, cloud-native deployments, and infrastructure reproducibility across diverse deployment targets.',
    coreResponsibilities: [
      'Containerization and multi-stage image minimization',
      'Environment parity between local development and production',
      'Resource limit tuning and workload isolation',
      'Infrastructure automation and reproducible configuration',
    ],
    associatedTech: ['Docker', 'Containers', 'Linux Systems', 'Cloud Services'],
    highlightColor: '#f472b6',
  },
  {
    id: 'devops',
    title: 'DevOps & Continuous Delivery',
    subtitle: 'Automated pipelines driving engineering velocity',
    description:
      'Engineering reliable CI/CD pipelines that automate static analysis, test execution, artifact builds, and deployment verification to maintain high release confidence.',
    coreResponsibilities: [
      'Automated testing workflows and lint enforcement',
      'Zero-downtime release pipelines and artifact publishing',
      'Branching policies, merge safety, and trunk-based hygiene',
      'Pipeline telemetry and build acceleration',
    ],
    associatedTech: ['CI/CD Pipelines', 'GitHub Actions', 'Git', 'Automated Verification'],
    highlightColor: '#fbbf24',
  },
  {
    id: 'data',
    title: 'Databases & Persistence',
    subtitle: 'Data integrity, schema modeling & caching strategies',
    description:
      'Designing relational and document schemas, evaluating normalization trade-offs, structuring indexes, and implementing multi-tiered caching strategies.',
    coreResponsibilities: [
      'Relational modeling, foreign key constraints, and transactional ACID guarantees',
      'Document schema design and aggregation pipelines',
      'Cache invalidation topologies and read-through caching',
      'Query execution plan analysis and index optimization',
    ],
    associatedTech: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL'],
    highlightColor: '#a78bfa',
  },
  {
    id: 'ai-workflows',
    title: 'AI Systems & Modern Workflows',
    subtitle: 'Intelligent automation & conceptual pipeline architecture',
    description:
      'Exploring modern AI systems engineering: prompt structuring, retrieval-augmented generation (RAG), tool execution protocols, and agentic workflows that enhance engineering productivity.',
    coreResponsibilities: [
      'Context window budgeting and semantic vector retrieval concepts',
      'Deterministic tool invocation and structured schema outputs',
      'Guardrails, safety filtering, and evaluation loops',
      'Developer workflow acceleration via intelligent tooling',
    ],
    associatedTech: ['RAG Concepts', 'Vector Retrieval', 'Tool Protocols', 'Pipeline Sandboxes'],
    highlightColor: '#60a5fa',
  },
  {
    id: 'devex',
    title: 'Developer Experience & Observability',
    subtitle: 'Instrumentation, diagnostics & developer tooling',
    description:
      'Investing in developer tooling, profiling diagnostics, and structured logging to reduce debugging toil and empower engineering teams to move with speed and safety.',
    coreResponsibilities: [
      'Standardized logging formats, correlation IDs, and tracing',
      'Local development harness and test fixture generation',
      'Error categorization, alerting thresholds, and runbooks',
      'Automating manual workflows to reclaim high-value engineering focus',
    ],
    associatedTech: ['Developer Tooling', 'Structured Logging', 'Profiling', 'API Testing'],
    highlightColor: '#2dd4bf',
  },
];
