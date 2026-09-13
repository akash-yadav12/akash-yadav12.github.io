import { ProjectItem } from '../types';

export const projectItems: ProjectItem[] = [
  {
    id: 'box-shadow-editor',
    title: 'Visual Box-Shadow Editor',
    tagline: 'Interactive DOM layout utility for real-time CSS elevation modeling',
    category: 'Systems & Developer Tools',
    evolutionStage: 'Engineering Systems',
    summary:
      'A specialized developer tool that visualizes multi-axis CSS box-shadow properties. It translates interactive slider coordinates (offsets, blur, spread, alpha channels) into optimized CSS output with immediate DOM feedback.',
    problem:
      'Fine-tuning layered box-shadow values by hand is unintuitive and requires constant context-switching between code editors and browser inspectors.',
    solution:
      'Engineered an interactive canvas with immediate reactive DOM styling, giving developers a direct tactile understanding of lighting, depth, and spread calculations.',
    technologies: ['JavaScript', 'CSS3', 'DOM API', 'Web APIs'],
    keyDecisions: [
      'Used direct DOM style updates without heavy frameworks to maintain 60 FPS slider responsiveness.',
      'Implemented real-time CSS string serialization for one-click copy.',
    ],
    githubUrl: 'https://github.com/akash-yadav12/box-shadow-Visual-editor',
    liveDemoUrl: 'https://visual-editor-box-shadow.netlify.app/',
    featured: true,
  },
  {
    id: 'academic-workflow',
    title: 'Examiner Appointment & Academic Workflow System',
    tagline: 'Administrative workflow automation platform for institutional operations',
    category: 'Systems & Developer Tools',
    evolutionStage: 'Engineering Systems',
    summary:
      'Custom institutional automation platform developed for KJSIEIT to eliminate manual paperwork in appointing academic examiners, tracking subjects, coordinating departments, and maintaining historical records.',
    problem:
      'Examiner scheduling across diverse engineering departments was manual, error-prone, and reliant on paper registers.',
    solution:
      'Designed a centralized workflow system with role-based coordination across departments, subjects, and external examiner registries.',
    technologies: ['Full-Stack Development', 'Database Modeling', 'Workflow Automation', 'Access Control'],
    keyDecisions: [
      'Normalized relational schemas to handle multi-department faculty assignments.',
      'Constructed modular administrative portals tailored to non-technical institutional users.',
    ],
    featured: true,
  },
  {
    id: 'burger-builder',
    title: 'Burger Builder Application',
    tagline: 'State-orchestrated dynamic UI customizer with cloud synchronization',
    category: 'Full-Stack Applications',
    evolutionStage: 'Full-Stack Architecture',
    summary:
      'A component-based single-page application demonstrating client-side state orchestration. Features dynamic visual ingredient layering, price computation, authentication flows, and backend order persistence.',
    problem:
      'Managing interdependent ingredient pricing, UI validation, and modal checkout flows without cascading state bugs.',
    solution:
      'Utilized centralized Redux state trees and action creators to decouple UI components from state mutations and remote Firebase APIs.',
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase', 'CSS Modules'],
    keyDecisions: [
      'Implemented strict action-reducer contracts for predictable state transitions.',
      'Integrated Firebase REST endpoints for authentication tokens and transactional order logging.',
    ],
    githubUrl: 'https://github.com/akash-yadav12/Burger-Builder',
    featured: true,
  },
  {
    id: 'web-of-news',
    title: 'Web of News Platform',
    tagline: 'Multi-stream aggregation dashboard uniting real-time headlines & weather APIs',
    category: 'Full-Stack Applications',
    evolutionStage: 'Full-Stack Architecture',
    summary:
      'Real-time information aggregator connecting multiple external REST APIs into a unified dashboard, delivering category-filtered news streams, weather updates, and public telemetry.',
    problem:
      'Aggregating divergent third-party APIs with distinct schemas and rate limits into a coherent single interface.',
    solution:
      'Built a Node.js/Express backend proxying outbound API requests, normalizing payloads, and caching responses to optimize client-side load times.',
    technologies: ['Node.js', 'Express', 'REST APIs', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/akash-yadav12/Web-of-News',
    featured: false,
  },
  {
    id: 'mybrary',
    title: 'Mybrary Repository',
    tagline: 'Document cataloging and relational book repository engine',
    category: 'Full-Stack Applications',
    evolutionStage: 'Full-Stack Architecture',
    summary:
      'A full-stack cataloging application designed for indexing literary metadata, book cover assets, author relationships, and categorical filters.',
    problem:
      'Handling binary file uploads, thumbnail transformations, and author entity relations cleanly in a NoSQL database.',
    solution:
      'Implemented MongoDB schema modeling with Mongoose, file streaming pipelines, and server-rendered dynamic views.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'EJS'],
    githubUrl: 'https://github.com/akash-yadav12/Web-of-News',
    featured: false,
  },
  {
    id: 'speed-typing',
    title: 'Speed-Typing Measurement Engine',
    tagline: 'Real-time keystroke analyzer and typing velocity evaluator',
    category: 'Origins & Early Exploration',
    evolutionStage: 'Early Experimentation',
    summary:
      'An interactive typing velocity evaluator that tracks keystroke precision, dynamic string comparison, and input latency in real time.',
    problem:
      'Comparing user input against reference text streams with accurate millisecond timing and character-by-character validation.',
    solution:
      'Utilized high-resolution timing events and DOM text node splitting to calculate accurate words-per-minute (WPM) and accuracy metrics.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Events'],
    githubUrl: 'https://github.com/akash-yadav12/Speed-typing',
    liveDemoUrl: 'https://improvetypingspeed.netlify.app/',
    featured: false,
  },
  {
    id: 'patatap-clone',
    title: 'Patatap Audio-Visual Synthesizer',
    tagline: 'Keyboard-driven visual kinematics & multi-sound synthesizer',
    category: 'Interactive Audio/Visual',
    evolutionStage: 'Early Experimentation',
    summary:
      'An interactive audio-visual canvas mapping keyboard triggers to procedural geometric animations and low-latency audio samples.',
    problem:
      'Synchronizing 60 FPS vector canvas animations with instantaneous multi-voice audio playback without frame drops.',
    solution:
      'Combined Paper.js for GPU-accelerated canvas vector rendering with Howler.js for Web Audio API sound buffer management.',
    technologies: ['JavaScript', 'Paper.js', 'Howler.js', 'Web Audio API', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/akash-yadav12/Patatap-Clone',
    featured: false,
  },
];
