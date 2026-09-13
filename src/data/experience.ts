import { CareerMilestone } from '../types';

export const careerMilestones: CareerMilestone[] = [
  {
    id: 'oracle',
    era: 'CURRENT',
    company: 'Oracle',
    role: 'Senior Member of Technical Staff',
    period: 'Present',
    location: 'Enterprise Systems & Cloud Infrastructure',
    description:
      'Operating at senior engineering depth across enterprise software, distributed architectures, and large-scale technical systems. Focus areas include system resilience, backend performance optimization, high-availability service design, and cross-functional technical leadership.',
    verifiedDomains: [
      'Enterprise Software',
      'Distributed Systems',
      'System Architecture',
      'Backend Engineering',
      'Service Reliability',
      'Performance Optimization',
    ],
    keyScope:
      'Architecting resilient service layers, establishing robust engineering patterns, and ensuring mission-critical enterprise scale.',
    evidenceTier: 'User-confirmed professional experience',
    technologies: ['Java', 'Distributed Systems', 'Enterprise Architecture', 'Cloud Services', 'System Design'],
  },
  {
    id: 'jpmc',
    era: 'ENTERPRISE SCALE',
    company: 'JPMorgan Chase (JPMC)',
    role: 'Software Engineer',
    period: 'Prior to Oracle',
    location: 'Global Financial Infrastructure & Services',
    description:
      'Engineered enterprise-grade software within a world-class financial technology environment. Delivered high-throughput services, adhered to stringent security protocols, and built resilient software systems operating under strict regulatory and scale constraints.',
    verifiedDomains: [
      'Enterprise Backend',
      'Financial Systems',
      'Secure APIs & Microservices',
      'Data Integrity',
      'CI/CD & Automation',
    ],
    keyScope:
      'Building secure, dependable services and modernizing internal tooling for mission-critical operations.',
    evidenceTier: 'User-confirmed professional experience',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'SQL', 'CI/CD Pipelines'],
  },
  {
    id: 'iss',
    era: 'FIRST PROFESSIONAL EXPERIENCE',
    company: 'ISS',
    role: 'Software Engineer',
    period: 'Prior to JPMC',
    location: 'Corporate Software Systems',
    description:
      'Started full-time professional career building and scaling software solutions. Focused on end-to-end service implementation, database integration, developer automation, and collaborating across agile engineering squads to ship reliable production features.',
    verifiedDomains: [
      'Full-Stack Engineering',
      'Backend Services',
      'Database Integration',
      'API Design',
      'Agile Delivery',
    ],
    keyScope:
      'Translating business requirements into performant backend services and resilient full-stack workflows.',
    evidenceTier: 'User-confirmed professional experience',
    technologies: ['Full-Stack Development', 'RESTful Services', 'Database Design', 'Version Control (Git)'],
  },
  {
    id: 'foundation',
    era: 'FOUNDATION',
    company: 'K.J. Somaiya Institute of Engineering & Information Technology (KJSIEIT)',
    role: 'B.Tech in Information Technology',
    period: '2018 — 2022',
    location: 'Mumbai, India · CGPI: 8.87',
    description:
      'Built a rigorous computer science foundation spanning data structures, algorithms, object-oriented system design, and database management. During college, developed automated academic software and completed competitive internships.',
    verifiedDomains: [
      'Computer Science Fundamentals',
      'Data Structures & Algorithms',
      'Full-Stack Internships',
      'Academic Workflow Automation',
    ],
    keyScope:
      'Graduated with 8.87 CGPI. Built live institutional systems (Examiner Appointment Automation, IOT Hardware Inventory System) and completed software internships at Bitgenie Research and Speed Techserve.',
    evidenceTier: 'Repository / project-confirmed experience',
    technologies: ['C++', 'Python', 'Java', 'JavaScript', 'SQL', 'Data Structures & Algorithms'],
  },
];
