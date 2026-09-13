import { AiPipelineStage } from '../types';

export const aiPipelineStages: AiPipelineStage[] = [
  {
    id: 'query',
    step: 1,
    name: 'User Input & Sanitization',
    category: 'Ingress & Validation',
    description:
      'Receives natural language query, validates schema, strips dangerous payloads, and checks token limits.',
    technicalRole:
      'Input validation & token bounding before expensive downstream processing.',
    conceptualFlow: 'Raw user request enters system; perimeter checks performed.',
  },
  {
    id: 'guardrails',
    step: 2,
    name: 'Safety & Prompt Guardrails',
    category: 'Security & Context',
    description:
      'Applies classification rules to detect prompt injections, jailbreaks, and sensitive data leakage (PII mask).',
    technicalRole:
      'Defensive perimeter shielding the core model from adversarial prompts.',
    conceptualFlow: 'Sanitized prompt mapped to safety policy criteria.',
  },
  {
    id: 'retrieval',
    step: 3,
    name: 'Vector Embeddings & Semantic Retrieval',
    category: 'RAG Knowledge Tier',
    description:
      'Computes query vector embedding via embedding model and performs approximate nearest neighbor (ANN) cosine search across vector index.',
    technicalRole:
      'Surfacing relevant knowledge chunks to eliminate hallucinations.',
    conceptualFlow: 'Query embedded into high-dimensional vector; top-k semantic chunks retrieved.',
  },
  {
    id: 'context',
    step: 4,
    name: 'Context Assembly & Budgeting',
    category: 'Prompt Engineering',
    description:
      'Synthesizes system prompt, few-shot exemplars, conversation history, and retrieved knowledge into token budget.',
    technicalRole:
      'Structuring coherent context window payload without exceeding model limits.',
    conceptualFlow: 'Dynamically generated prompt assembled with cited context references.',
  },
  {
    id: 'inference',
    step: 5,
    name: 'LLM Reasoning & Generation',
    category: 'Core Model Inference',
    description:
      'Transfers assembled context to foundation model for autoregressive token generation and intent classification.',
    technicalRole:
      'Reasoning over augmented context and deciding next programmatic steps.',
    conceptualFlow: 'Model evaluates context; determines if external tools are required.',
  },
  {
    id: 'tools',
    step: 6,
    name: 'Function / Tool Protocol Calling',
    category: 'Tool Execution',
    description:
      'Executes deterministic tools (database queries, external APIs, code execution sandbox) requested via structured JSON schema.',
    technicalRole:
      'Grounding model actions into real-world data sources and deterministic logic.',
    conceptualFlow: 'Model invokes registered tool contract; receives validated output payload.',
  },
  {
    id: 'agent',
    step: 7,
    name: 'Multi-Step Agentic Feedback Loop',
    category: 'Autonomous Orchestration',
    description:
      'Evaluates tool execution output against original query goals; iterates if intermediate reasoning was incomplete.',
    technicalRole:
      'Autonomous step-by-step reflection and self-correction loop.',
    conceptualFlow: 'Agent checks result validity; synthesizes final response.',
  },
  {
    id: 'streaming',
    step: 8,
    name: 'Response Evaluation & Streamed Output',
    category: 'Output Egress',
    description:
      'Applies output guardrails, verifies citation attribution, and streams Server-Sent Events (SSE) tokens to client.',
    technicalRole:
      'Zero-latency perceptual delivery with verified safety compliance.',
    conceptualFlow: 'Validated answer streamed token-by-token directly to client interface.',
  },
];

export const sampleSimulationQueries = [
  {
    query: 'Synthesize optimal distributed cache invalidation policy for write-heavy services',
    retrievalMock: 'Found 4 design references on write-through vs cache-aside under replication lag',
    toolMock: 'Calculated memory profile: LRU eviction with 120s TTL jitter recommended',
    outputMock: 'Recommended Pattern: Write-through cache with lease tokens and exponential jitter to prevent thundering herd under write-heavy loads.',
  },
  {
    query: 'Analyze trade-offs between gRPC and REST for inter-service communication',
    retrievalMock: 'Retrieved 3 architecture patterns on serialization benchmarks and HTTP/2 multiplexing',
    toolMock: 'Benchmark profile: 7x faster serialization with Protobuf; streaming support verified',
    outputMock: 'Verdict: gRPC with mTLS for internal low-latency microservices; OpenAPI REST for external client ingress.',
  },
];
