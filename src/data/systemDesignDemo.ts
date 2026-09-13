import { ArchitectureNode } from '../types';

export const systemDesignNodes: ArchitectureNode[] = [
  {
    id: 'edge',
    name: 'Edge & Ingress Layer',
    tier: 'Traffic Ingestion & TLS Termination',
    protocol: 'HTTPS / HTTP/3 · Anycast DNS',
    description:
      'Terminates TLS connections geographically close to clients, mitigates volumetric DDoS attacks, applies edge rate limits, and routes traffic into the core infrastructure.',
    considerations:
      'Balancing SSL handshakes at the edge against internal network transit latency; caching static assets at CDN nodes.',
    tradeOffs:
      'Edge computation reduces origin load, but adds cache invalidation complexity across globally distributed edge nodes.',
    xPercent: 12,
    yPercent: 30,
    connections: ['gateway'],
  },
  {
    id: 'gateway',
    name: 'API Gateway & Auth',
    tier: 'Routing, Token Validation & Rate Limiting',
    protocol: 'Token Introspection · Reverse Proxy',
    description:
      'Acts as the single entry point for client requests. Enforces cryptographic JWT verification, implements token-bucket rate limiting, and routes requests to downstream microservices.',
    considerations:
      'Preventing the gateway from becoming a single point of failure (SPOF) via horizontal auto-scaling and stateless token validation.',
    tradeOffs:
      'Centralized auth reduces service duplication, but increases hop latency by 2–5ms per request.',
    xPercent: 32,
    yPercent: 30,
    connections: ['services', 'telemetry'],
  },
  {
    id: 'services',
    name: 'Service Mesh & Core Microservices',
    tier: 'Business Logic & RPC Execution',
    protocol: 'gRPC / Protocol Buffers · mTLS',
    description:
      'Domain-decoupled service layer executing core workflows. Employs circuit-breaker patterns (resilience4j) to prevent cascading failures when downstream dependencies degrade.',
    considerations:
      'Setting aggressive timeouts, exponential backoff with jitter, and bulkhead isolation between distinct business domains.',
    tradeOffs:
      'Decoupled deployment velocity vs. the complexity of distributed transaction management (Saga patterns).',
    xPercent: 54,
    yPercent: 30,
    connections: ['cache', 'storage', 'events', 'telemetry'],
  },
  {
    id: 'cache',
    name: 'Distributed Cache Tier',
    tier: 'In-Memory Acceleration (Redis)',
    protocol: 'TCP / RESP · Sub-millisecond',
    description:
      'In-memory key-value cluster caching high-read entities, user session states, and pre-computed aggregations to shield persistent databases from read spikes.',
    considerations:
      'Employing cache-aside with TTL jitter to prevent cache stampedes; defining eviction policies (allkeys-lru).',
    tradeOffs:
      'Dramatic latency drop (<1ms), but introduces potential read-after-write eventual consistency windows.',
    xPercent: 78,
    yPercent: 15,
    connections: ['storage'],
  },
  {
    id: 'storage',
    name: 'Transactional Store & Read Replicas',
    tier: 'Persistent Relational Storage (PostgreSQL)',
    protocol: 'ACID Transactions · WAL Streaming',
    description:
      'Primary write node handling transactional guarantees with asynchronous streaming replication to read replicas for heavy analytical and lookup traffic.',
    considerations:
      'Connection pooling (e.g. PgBouncer) to prevent connection exhaustion; indexing strategies based on query access patterns.',
    tradeOffs:
      'Strict consistency on primary writes vs. asynchronous replication lag on read replica lookups.',
    xPercent: 78,
    yPercent: 50,
    connections: [],
  },
  {
    id: 'events',
    name: 'Asynchronous Event Broker',
    tier: 'Decoupled Event Streaming (Kafka / Queue)',
    protocol: 'Binary TCP · Partitioned Log',
    description:
      'High-throughput message log buffering non-blocking domain events (notifications, audit logging, analytics, async data sync) with consumer group offset tracking.',
    considerations:
      'Partition key distribution to avoid hot partitions; idempotency handling to guarantee at-least-once message delivery without duplication.',
    tradeOffs:
      'Decouples producer throughput from consumer processing speed, but requires dead-letter queue (DLQ) tooling for poison pill messages.',
    xPercent: 54,
    yPercent: 75,
    connections: ['telemetry'],
  },
  {
    id: 'telemetry',
    name: 'Distributed Tracing & APM',
    tier: 'Observability & Health Telemetry',
    protocol: 'OpenTelemetry · Prometheus / Grafana',
    description:
      'Ingests distributed trace context (W3C TraceContext) across service boundaries to correlate log traces, capture p95/p99 latencies, and trigger automated alerts.',
    considerations:
      'Sampling trace rates during peak load to reduce storage overhead while preserving statistically significant anomalies.',
    tradeOffs:
      'Deep diagnostic visibility across complex call trees vs. CPU and network overhead of continuous telemetry ingestion.',
    xPercent: 24,
    yPercent: 75,
    connections: [],
  },
];
