import { ProjectItem } from '../types';

export const projectItems: ProjectItem[] = [
  {
    id: 'jpmc-kafka-migration',
    title: 'Enterprise Kafka Migration & Resiliency Pipeline',
    tagline: 'Production Java 17+ microservice migrating 2M+ records from Oracle DB to AWS S3',
    category: 'Systems & Developer Tools',
    evolutionStage: 'Engineering Systems',
    summary:
      'Architected, deployed, and owned the end-to-end Kafka-based data migration pipeline at JPMorgan Chase. Migrated 2M+ records across three business domains into AWS S3 and JPMC’s internal Mercury S3 storage to advance the firm’s data product architecture.',
    problem:
      'High-volume database records needed to be continuously published to object storage without message loss or consumer lag during transient downstream outages.',
    solution:
      'Engineered a REST-integrated Java microservice with multiple Kafka consumers, Control-M automated batch scheduling, and custom retry/resiliency patterns to guarantee zero message loss and fault-tolerant data publication.',
    technologies: ['Java 17+', 'Spring Boot', 'Apache Kafka', 'AWS S3', 'Mercury S3', 'Control-M', 'Oracle DB'],
    keyDecisions: [
      'Implemented custom consumer retry/resiliency pattern to handle transient Kafka delivery failures automatically.',
      'Configured Control-M automated scheduling to balance batch execution throughout the day and eliminate storage write spikes.',
      'Delivered the entire pipeline from requirements through design to production within 6 months.',
    ],
    metrics: [
      { label: 'Records Migrated', value: '2M+' },
      { label: 'Delivery Timeline', value: '6 Months' },
      { label: 'Domains Supported', value: '3 Business Domains' },
    ],
    featured: true,
  },
  {
    id: 'jpmc-rag-copilot-agent',
    title: 'In-IDE RAG Agent & Copilot Skill Framework',
    tagline: 'Vector-augmented developer productivity tooling boosting engineering velocity by 30%',
    category: 'Systems & Developer Tools',
    evolutionStage: 'Engineering Systems',
    summary:
      'Designed and built an in-IDE RAG-based knowledge retrieval agent integrating an enterprise vector datastore into GitHub Copilot at JPMorgan Chase. Engineered reusable Copilot skill patterns for Confluence and internal documentation portals. Recognized with 4 Star Performer Awards.',
    problem:
      'Engineers were losing valuable coding hours searching through dispersed Confluence pages, internal wikis, and legacy contract documents to resolve technical blockers.',
    solution:
      'Leveraged agentic AI workflows and vector embeddings to surface real-time technical answers with cited documentation directly inside the IDE, cutting developer research time by 70%.',
    technologies: ['RAG Architecture', 'Vector Databases', 'GitHub Copilot Skills', 'AI Agents', 'Java', 'TypeScript'],
    keyDecisions: [
      'Engineered deterministic skill contracts allowing Copilot to query internal documentation securely.',
      'Architected the Gossip Agent — a Stack Overflow-style knowledge tool embedded within GitHub Copilot.',
      'Constructed an AI-driven document ingestion framework for the KYC platform across 10+ document types.',
    ],
    metrics: [
      { label: 'Productivity Boost', value: '+30%' },
      { label: 'Research Time Reduction', value: '70%' },
      { label: 'Star Performer Awards', value: '4 Times' },
    ],
    featured: true,
  },
  {
    id: 'iss-simfund-modernization',
    title: 'Simfund Platform Modernization & Java Library',
    tagline: 'Legacy C to API-first microservices migration & company-wide annotation library',
    category: 'Systems & Developer Tools',
    evolutionStage: 'Engineering Systems',
    summary:
      'Led the architectural migration of the Simfund analytics platform at ISS from a legacy C architecture to a scalable, API-first microservices ecosystem in Java/Spring Boot and React. Developed a custom annotation-based exception library that achieved an 18% code reduction company-wide.',
    problem:
      'Monolithic legacy C code hindered release velocity, increased boilerplate exception handling, and bottlenecked front-end modernizations.',
    solution:
      'Decoupled monolithic services into RESTful microservices, engineered an annotation-based exception handling library, containerized services with Docker (-60% deploy time), and parallelized CI build pipelines (+60% build efficiency).',
    technologies: ['Java', 'Spring Boot', 'Micronaut', 'React', 'Docker', 'GitLab CI', 'SQL Server'],
    keyDecisions: [
      'Created custom annotation-based exception handling library adopted across company-wide Java projects.',
      'Engineered high-throughput FTL-to-JSON report rendering service powering 50k+ weekly downloads.',
      'Facilitated Redux architecture workshop for 14+ engineers to align on state management standards.',
    ],
    metrics: [
      { label: 'User Engagement', value: '+20%' },
      { label: 'Codebase Reduction', value: '18%' },
      { label: 'Deployment Time', value: '-60%' },
      { label: 'Weekly Report Downloads', value: '50k+' },
    ],
    featured: true,
  },
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
    featured: false,
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
    featured: false,
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
