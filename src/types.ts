export interface ProfileData {
  name: string;
  role: string;
  company: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    stackoverflow: string;
    codepen: string;
    email: string;
  };
}

export interface CareerMilestone {
  id: string;
  era: 'CURRENT' | 'ENTERPRISE SCALE' | 'FIRST PROFESSIONAL EXPERIENCE' | 'FOUNDATION';
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  verifiedDomains: string[];
  keyScope: string;
  evidenceTier: 'User-confirmed professional experience' | 'Repository / project-confirmed experience';
  deliverables?: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Systems & Developer Tools' | 'Full-Stack Applications' | 'Interactive Audio/Visual' | 'Origins & Early Exploration';
  evolutionStage: 'Engineering Systems' | 'Full-Stack Architecture' | 'Early Experimentation';
  summary: string;
  problem?: string;
  solution?: string;
  architectureNotes?: string;
  technologies: string[];
  keyDecisions?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface TechItem {
  name: string;
  category: 'Languages' | 'Backend & Systems' | 'Cloud & DevOps' | 'Frontend' | 'Data & Persistence' | 'AI & Tooling';
  context: string;
  appliedIn: string[];
  evidenceTier: 'User-confirmed professional' | 'Project / source code confirmed' | 'Conceptual / sandbox';
}

export interface EngineeringDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coreResponsibilities: string[];
  associatedTech: string[];
  highlightColor: string;
}

export interface EngineeringTenet {
  id: string;
  title: string;
  subtitle: string;
  principle: string;
  context: string;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  tier: string;
  protocol: string;
  description: string;
  considerations: string;
  tradeOffs: string;
  xPercent: number;
  yPercent: number;
  connections: string[];
}

export interface AiPipelineStage {
  id: string;
  step: number;
  name: string;
  category: string;
  description: string;
  technicalRole: string;
  conceptualFlow: string;
}
