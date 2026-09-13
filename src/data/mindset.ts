import { EngineeringTenet } from '../types';

export const engineeringTenets: EngineeringTenet[] = [
  {
    id: 'scale',
    title: 'Scale Follows Simplicity',
    subtitle: 'Complexity is the enemy of reliability',
    principle:
      'Design systems that remain understandable as complexity compounds. An architecture that a team cannot reason about during an incident is an architecture that will fail under stress.',
    context:
      'Prioritize modular boundaries, explicit data flows, and clear ownership over hyper-clever abstractions.',
  },
  {
    id: 'automation',
    title: 'Automate To Protect Focus',
    subtitle: 'Human time belongs on novel problems',
    principle:
      'Engineering capital should be spent solving unique architectural problems, not repeating manual toil. If a task must be done twice, script it; if it must be done thrice, automate it into the pipeline.',
    context:
      'Robust CI/CD validation, linting, and automated checks free engineers to build with confidence.',
  },
  {
    id: 'measure',
    title: 'Measure Before Optimizing',
    subtitle: 'Intuition is often wrong at scale',
    principle:
      'Premature optimization introduces incidental complexity. High-impact engineering measures performance bottlenecks with profiling, logs, and telemetry before touching a line of code.',
    context:
      'Evidence-driven engineering identifies the single 5% critical path that yields 95% of performance gains.',
  },
  {
    id: 'interfaces',
    title: 'Clean Interfaces Hide Depth',
    subtitle: 'Simplicity on the surface, power underneath',
    principle:
      'Great software engineering encapsulates intricate distributed mechanics behind intuitive, defensive APIs. The consumer should never need to know the internal turmoil required to serve a clean contract.',
    context:
      'Consistent API contracts, backwards compatibility, and clear error semantics make large codebases sustainable.',
  },
  {
    id: 'defense',
    title: 'Design For Inevitable Failure',
    subtitle: 'Resilience is not an afterthought',
    principle:
      'Networks partition, third-party APIs drop, disks fill, and memory leaks happen. Resilient architectures anticipate component failures with timeouts, circuit breakers, backpressure, and graceful fallbacks.',
    context:
      'A system that degrades gracefully is always superior to a system that collapses catastrophically.',
  },
  {
    id: 'evolution',
    title: 'Codebases Are Living Organisms',
    subtitle: 'Continuous incremental stewardship',
    principle:
      'Software is never "done"—it continuously evolves alongside business needs. Investing in thorough test coverage, decoupled layers, and clear documentation keeps systems adaptable over years of operational life.',
    context:
      'High velocity is sustained by leaving components cleaner than you found them.',
  },
];
