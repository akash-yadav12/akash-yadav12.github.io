import { TechItem } from '../types';

export const techItems: TechItem[] = [
  // --- Languages ---
  {
    name: 'Java 17+',
    category: 'Languages',
    context: 'Enterprise Microservices, Rules Engines & Multi-Tenant Cloud Services',
    appliedIn: ['Oracle', 'JPMorgan Chase (JPMC)', 'ISS'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    context: 'Type-Safe Full-Stack Systems, Copilot Skills & UI Architecture',
    appliedIn: ['JPMorgan Chase', 'ISS', 'Portfolio'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    context: 'Runtime Mechanics, Asynchronous Event Loops & Front-End Systems',
    appliedIn: ['ISS', 'JPMC', 'Bitgenie Research', 'Web Applications'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Python',
    category: 'Languages',
    context: 'Automation, AI Scripting & Algorithmic Problem Solving',
    appliedIn: ['Data Structures & Algorithms', 'Tooling', 'Academic Systems'],
    evidenceTier: 'Project / source code confirmed',
  },
  {
    name: 'C++',
    category: 'Languages',
    context: 'Systems Foundations, Memory Mechanics & Core Algorithms',
    appliedIn: ['Competitive Programming', 'Core CS Fundamentals'],
    evidenceTier: 'Project / source code confirmed',
  },
  {
    name: 'SQL',
    category: 'Languages',
    context: 'Relational Schemas, Transactions, Complex Queries & Partitioning',
    appliedIn: ['JPMorgan Chase', 'ISS', 'Oracle'],
    evidenceTier: 'User-confirmed professional',
  },

  // --- Backend & Distributed Systems ---
  {
    name: 'Spring Boot & Spring Cloud',
    category: 'Backend & Systems',
    context: 'Production Microservices, DMN Rules Engines & Service Decomposition',
    appliedIn: ['JPMorgan Chase', 'ISS', 'Oracle'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Apache Kafka',
    category: 'Backend & Systems',
    context: 'High-Throughput Event Streaming, Multi-Consumer Services & Resiliency/Retry Patterns',
    appliedIn: ['JPMorgan Chase (2M+ records migrated)'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Micronaut',
    category: 'Backend & Systems',
    context: 'Low-Footprint Microservices & High-Performance Java Services',
    appliedIn: ['ISS', 'Oracle Stack'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'RESTful API Architecture',
    category: 'Backend & Systems',
    context: 'API-First Contract Design, Backward Compatibility & DMN Integrations',
    appliedIn: ['Oracle', 'JPMorgan Chase', 'ISS'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Control-M Batch Scheduling',
    category: 'Backend & Systems',
    context: 'Enterprise Batch Automation & Distributed Workload Balancing',
    appliedIn: ['JPMorgan Chase'],
    evidenceTier: 'User-confirmed professional',
  },

  // --- Artificial Intelligence & Tooling ---
  {
    name: 'RAG Architectures & Vector Stores',
    category: 'AI & Tooling',
    context: 'In-IDE Knowledge Retrieval & Semantic Search via GitHub Copilot (+30% Productivity)',
    appliedIn: ['JPMorgan Chase (4x Star Performer)'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'GitHub Copilot Custom Skills',
    category: 'AI & Tooling',
    context: 'Enterprise Documentation Ingestion (Confluence, Internal Portals, Gossip Agent)',
    appliedIn: ['JPMorgan Chase (-70% Research Time)'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'AI Document Ingestion (KYC)',
    category: 'AI & Tooling',
    context: 'Automated Document Extraction & Digitization across 10+ Entity Types',
    appliedIn: ['JPMorgan Chase KYC Platform'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Developer Tooling & Custom Libraries',
    category: 'AI & Tooling',
    context: 'Annotation-Based Java Exception Handling Library (18% Code Reduction)',
    appliedIn: ['ISS (Company-wide adoption)'],
    evidenceTier: 'User-confirmed professional',
  },

  // --- Cloud, Infrastructure & DevOps ---
  {
    name: 'AWS (S3 & Cloud Infrastructure)',
    category: 'Cloud & DevOps',
    context: 'Data Product Storage, Object Archival & High-Volume JSON Streaming',
    appliedIn: ['JPMorgan Chase (2M+ Records to S3)', 'Oracle Stack'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Docker Containerization',
    category: 'Cloud & DevOps',
    context: 'Microservices Containerization (-60% Deployment Time)',
    appliedIn: ['ISS', 'Oracle Stack'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Kubernetes (OKE / EKS)',
    category: 'Cloud & DevOps',
    context: 'Container Orchestration, Multi-Tenant Pod Lifecycle & Scaling',
    appliedIn: ['Oracle', 'Cloud Environments'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'CI/CD Pipelines (GitLab CI / TeamCity / Octopus)',
    category: 'Cloud & DevOps',
    context: 'Split and Parallelized Build Jobs (+60% Build Efficiency gain)',
    appliedIn: ['ISS', 'JPMorgan Chase'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Git, GitLab & GitHub',
    category: 'Cloud & DevOps',
    context: 'Trunk-Based Development, Release Branching & Automation',
    appliedIn: ['Oracle', 'JPMorgan Chase', 'ISS'],
    evidenceTier: 'User-confirmed professional',
  },

  // --- Data & Persistence ---
  {
    name: 'Oracle DB',
    category: 'Data & Persistence',
    context: 'High-Volume Enterprise Transactional Databases & Data Migration',
    appliedIn: ['JPMorgan Chase', 'Oracle'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'SQL Server',
    category: 'Data & Persistence',
    context: 'Enterprise Relational Modeling, Indexing & Financial Data Schemas',
    appliedIn: ['ISS'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'MySQL & MongoDB',
    category: 'Data & Persistence',
    context: 'Relational ACID Constraints & Document-Oriented Stores',
    appliedIn: ['Oracle Stack', 'Bitgenie Research', 'Academic Systems'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Redis (Caching Topologies)',
    category: 'Data & Persistence',
    context: 'In-Memory Key-Value Caching & Sub-Millisecond Reads',
    appliedIn: ['System Design Concepts', 'Enterprise Caching Patterns'],
    evidenceTier: 'Conceptual / sandbox',
  },

  // --- Frontend Engineering ---
  {
    name: 'React & Redux',
    category: 'Frontend',
    context: 'Simfund Platform UI Revamp (+20% User Engagement) & Architecture Workshops',
    appliedIn: ['ISS', 'JPMC', 'Web Applications'],
    evidenceTier: 'User-confirmed professional',
  },
  {
    name: 'Next.js & Modern CSS',
    category: 'Frontend',
    context: 'SSR/SSG Architecture, CSS Custom Properties & High-Performance UI',
    appliedIn: ['Portfolio', 'Developer Tools'],
    evidenceTier: 'Project / source code confirmed',
  },
  {
    name: 'Testing (JUnit, Mockito, Jest, Cypress)',
    category: 'Frontend',
    context: 'Comprehensive Unit, Integration, Mocking & E2E Test Suites',
    appliedIn: ['ISS', 'JPMorgan Chase'],
    evidenceTier: 'User-confirmed professional',
  },
];
