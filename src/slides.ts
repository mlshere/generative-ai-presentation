export interface SlideData {
  id: number;
  title?: string;
  subtitle?: string;
  header?: string;
  presenter?: string;
  content?: string[];
  visualType?: 'network' | 'roadmap' | 'transformer' | 'hallucination' | 'tiers' | 'rag' | 'pipeline' | 'vector' | 'langchain' | 'chains' | 'langgraph' | 'anatomy' | 'persistence' | 'multiagent' | 'react' | 'tools' | 'mcp' | 'usecase' | 'observability' | 'future' | 'AI structure' | 'ai-concepts' | 'ml-types' | 'ml-building' | 'ml-vs-dl' | 'python-tokenization' | 'python-embeddings' | 'python-training' | 'ollama' | 'llm-process' | 'prompt-anatomy' | 'llm-works-detailed' | 'rag-architecture' | 'rag-indexing-1' | 'rag-indexing-2' | 'vector-db-compare' | 'advanced-rag' | 'bridge' | 'agent-evolution' | 'agent-anatomy-pdf' | 'agent-thinking-process' | 'agentic-rag-flow' | 'agent-terms' | 'reasoning-patterns-1' | 'reasoning-patterns-2' | 'agent-tech-stack' | 'langchain-lcel' | 'langchain-components' | 'langchain-memory' | 'langchain-prompt' | 'langchain-output' | 'mcp-works';
  notes?: string;
  keyConcept?: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Generative AI",
    subtitle: "Understanding Agents with LangChain, LangGraph, and MCP",
    presenter: "Sherezade Maqueda",
    visualType: 'network',
    notes: "Welcome everyone. Today we're shifting our perspective from simple AI chat to engineering robust, autonomous systems for our ecommerce operations."
  },
  {
    id: 2,
    header: "What is Generative AI",
    content: [
      "Generative AI (Gen AI) is a class of artificial intelligence models that can create novel content — text, images, code, audio, or video — based on learned patterns from training data.",
      "It is built upon:",
      "- Machine Learning (statistical pattern recognition)",
      "- Deep Learning (neural network architectures, especially Transformers)"
    ],
    visualType: 'AI structure',
    notes: "Gen AI doesn't just classify or predict — it generates. The key distinction is that these models learn the underlying data distribution and can sample from it to produce new outputs."
  },
  {
    id: 3,
    header: "Core AI Concepts Explained",
    content: [
      "Artificial Intelligence: Builds systems that exhibit intelligent behavior — reasoning, learning, and decision-making.",
      "Machine Learning: AI where models learn statistical patterns from data rather than following hardcoded rules.",
      "Deep Learning: ML using multi-layered neural networks (deep architectures) that learn hierarchical feature representations.",
      "Natural Language Processing: Enables machines to understand, interpret, and generate human language."
    ],
    visualType: 'ai-concepts',
    notes: "These are nested concepts: DL ⊂ ML ⊂ AI. NLP is an application domain that heavily leverages all three. Modern Gen AI sits at the intersection of DL and NLP."
  },
  {
    id: 4,
    header: "Gen AI Technical Path",
    content: [
      "Foundation: Python, linear algebra, probability & ML fundamentals.",
      "Representation: Tokenization, embeddings & vector spaces.",
      "Grounding: RAG architectures, chunking strategies & vector databases.",
      "Interaction: LLM APIs, prompt engineering & output parsing.",
      "Autonomy: Agents, tool use, multi-agent orchestration & state management."
    ],
    visualType: 'roadmap',
    notes: "This is a bottom-up learning path. Each layer builds on the previous one — you can't build reliable agents without understanding how grounding (RAG) and representations (embeddings) work."
  },
  {
    id: 5,
    header: "How an LLM Works: The Foundation",
    content: [
      "Tokenization: Splitting raw text into sub-word units (tokens).",
      "Embeddings: Mapping tokens to dense numerical vectors in a high-dimensional semantic space.",
      "Transformer Architecture: The core engine using self-attention to capture long-range dependencies and contextual relationships.",
      "Pre-training: Unsupervised learning of language patterns from massive corpora (next-token prediction).",
      "Fine-tuning: Supervised adaptation to specific tasks or domains using labeled data (e.g., instruction tuning)."
    ],
    visualType: 'llm-process',
    notes: "The Transformer architecture (Vaswani et al., 2017) is the backbone of all modern LLMs. Self-attention allows the model to weigh the relevance of every token relative to every other token in the sequence."
  },
  {
    id: 6,
    header: "What is Machine Learning?",
    content: [
      "A paradigm where algorithms learn patterns from data to make predictions or decisions, without being explicitly programmed for each case.",
      "Types of Learning:",
      "- Supervised Learning: Learns a mapping from inputs to outputs using labeled examples (classification, regression).",
      "- Unsupervised Learning: Discovers hidden structure in unlabeled data (clustering, dimensionality reduction).",
      "- Reinforcement Learning: An agent learns a policy by interacting with an environment and maximizing cumulative reward."
    ],
    visualType: 'ml-types',
    notes: "Most LLM pre-training is self-supervised (a form of unsupervised learning). RLHF (Reinforcement Learning from Human Feedback) is how models like GPT-4 and Claude are aligned to follow instructions."
  },
  {
    id: 7,
    header: "Building a Machine Learning Model",
    content: [
      "1. Data Preparation: Cleaning, normalization, handling missing values, and feature engineering.",
      "2. Data Splitting: Typically 70-80% training / 10-15% validation / 10-15% test (never leak test data into training).",
      "3. Model Training: Fitting the model to training data using algorithms (e.g., gradient descent, decision trees, SVMs).",
      "4. Evaluation: Measuring performance with appropriate metrics (accuracy, precision, recall, F1, AUC-ROC for classification; MSE, MAE, R² for regression)."
    ],
    visualType: 'ml-building',
    notes: "A common mistake is skipping the validation set. Without it, you can't tune hyperparameters without contaminating your test evaluation. Always use a three-way split or cross-validation."
  },
  {
    id: 8,
    header: "Machine Learning vs. Deep Learning",
    content: [
      "Machine Learning: Relies on manual feature engineering — domain experts must design and select relevant input features before the model can learn.",
      "Deep Learning: Performs automatic feature extraction — raw data (pixels, text, audio) is fed directly into deep neural networks that learn their own representations.",
      "Trade-off: DL requires significantly more data and compute, but eliminates the bottleneck of manual feature design and excels at unstructured data."
    ],
    visualType: 'ml-vs-dl',
    notes: "Traditional ML still outperforms DL on small, structured datasets (tabular data). DL shines when you have large volumes of unstructured data and the compute budget to train on it."
  },
  {
    id: 9,
    header: "Tokenization & Transformers",
    content: [
      "Tokenization: Breaking text into sub-word units using BPE, WordPiece, or SentencePiece (e.g., 'unhappiness' → ['un', 'happi', 'ness']).",
      "Parameters: The learned weights and biases that encode the model's knowledge (e.g., GPT-4 estimated at ~1.8T parameters).",
      "Transformers: Architecture using multi-head self-attention for parallel sequence processing — no recurrence needed.",
      "In Practice: Hugging Face `transformers` library provides tokenizers and pre-trained models out of the box."
    ],
    visualType: 'python-tokenization',
    notes: "Sub-word tokenization solves the out-of-vocabulary problem. The vocabulary size is a key hyperparameter — too small and sequences get long, too large and the embedding table grows."
  },
  {
    id: 10,
    header: "Embeddings: Mathematical Meaning",
    content: [
      "Process: Mapping discrete tokens to continuous, dense vectors in a high-dimensional space.",
      "Semantic Similarity: Words with similar meanings have vectors that are close together (measured by cosine similarity).",
      "Contextual Embeddings: Modern models (BERT, GPT) produce different vectors for the same word depending on context ('bank' in finance vs. river).",
      "In Practice: `sentence-transformers` library for generating sentence-level embeddings optimized for similarity search."
    ],
    visualType: 'python-embeddings',
    notes: "Static embeddings (Word2Vec, GloVe) give one vector per word. Contextual embeddings from Transformers are far more powerful because the same token gets different representations based on surrounding context."
  },
  {
    id: 11,
    header: "Training & Transfer Learning",
    content: [
      "Pre-training: Self-supervised learning on massive corpora to learn general language understanding (e.g., next-token prediction).",
      "Transfer Learning: Leveraging a pre-trained model's knowledge as a starting point for a new task — drastically reduces data and compute requirements.",
      "Fine-tuning: Further training on a smaller, domain-specific dataset (e.g., ecommerce product descriptions, customer support transcripts).",
      "In Practice: Hugging Face `Trainer` API, LoRA/QLoRA for parameter-efficient fine-tuning."
    ],
    visualType: 'python-training',
    notes: "Full fine-tuning updates all parameters and is expensive. LoRA (Low-Rank Adaptation) freezes the base model and trains small adapter layers — making fine-tuning accessible even on consumer GPUs."
  },
  {
    id: 12,
    header: "Ollama: Local LLM Hosting",
    content: [
      "Run open-weight models (Llama 3, Mistral, Phi-3, Gemma) locally on your machine.",
      "Simple CLI: `ollama run llama3` to pull and interact with a model.",
      "OpenAI-compatible REST API: Drop-in replacement for cloud LLMs, integrates directly with LangChain.",
      "Benefits: Data stays on-premises, zero per-token costs, full control over model versions and quantization."
    ],
    visualType: 'ollama',
    notes: "Ollama uses quantized models (GGUF format via llama.cpp) to run large models on consumer hardware. For production, consider vLLM or TGI for higher throughput."
  },
  {
    id: 13,
    header: "Prompt Engineering: The Art of Instruction",
    content: [
      "Role/System Prompt: Define the persona and behavioral constraints (e.g., 'You are a product catalog specialist').",
      "Task: A clear, unambiguous description of what the model should accomplish.",
      "Instructions: Step-by-step constraints, reasoning guidelines, and edge case handling.",
      "Context: Background data, domain knowledge, or few-shot examples to guide the output.",
      "Output Format: Explicit specification of the desired structure (JSON schema, Markdown, CSV, etc.)."
    ],
    visualType: 'prompt-anatomy',
    notes: "Prompt engineering is not just 'asking nicely.' It's about reducing the model's output space to increase the probability of getting the exact response format and quality you need."
  },
  {
    id: 14,
    header: "LLM Lifecycle: The Complete Pipeline",
    content: [
      "Data Collection & Curation: Gathering, deduplicating, and filtering high-quality text corpora.",
      "Tokenization & Embedding: Building the vocabulary and learning initial vector representations.",
      "Pre-training: Self-supervised training (next-token prediction) on massive compute clusters.",
      "Alignment: Instruction tuning (SFT), reward modeling, and RLHF/DPO to align with human preferences.",
      "Deployment & Monitoring: Serving via APIs, monitoring latency, token usage, hallucination rates, and drift."
    ],
    visualType: 'llm-works-detailed',
    notes: "The alignment phase is what separates a raw language model from a useful assistant. Without RLHF or DPO, the model will generate plausible text but won't reliably follow instructions."
  },
  {
    id: 15,
    header: "Three Tiers of LLM Applications",
    content: [
      "1. LLM (Prompt-only): Stateless, no external data — limited to the model's training knowledge (knowledge cutoff applies).",
      "2. RAG (Retrieval-Augmented): Injects real-time, domain-specific context from external sources (documents, databases, APIs).",
      "3. Agents (Reason + Act): Autonomous systems that use tools, maintain state, and execute multi-step workflows."
    ],
    visualType: 'tiers',
    notes: "Each tier adds capability but also complexity. Most production applications need at least RAG to overcome the knowledge cutoff limitation."
  },
  {
    id: 16,
    header: "Retrieval-Augmented Generation (RAG)",
    content: [
      "1. User Query: The user submits a question or request.",
      "2. Retrieval: The query is embedded and used to search a vector store for semantically similar documents.",
      "3. Context Assembly: Retrieved chunks are combined with the original query into an augmented prompt.",
      "4. LLM Generation: The model generates a response grounded in the retrieved context.",
      "5. Output: A factually grounded answer with reduced hallucination risk."
    ],
    visualType: 'rag',
    notes: "RAG solves two fundamental LLM limitations: knowledge cutoff (the model doesn't know about recent events) and hallucination (the model can confidently state incorrect facts). By injecting retrieved evidence, we ground the generation in real data."
  },
  {
    id: 17,
    header: "Detailed RAG Architecture",
    content: [
      "1. Query Processing: Parse, expand, or rewrite the user query for better retrieval.",
      "2. Retriever: Performs similarity search (dense, sparse, or hybrid) against the vector store.",
      "3. Reranker (optional): A cross-encoder model re-scores retrieved documents for relevance.",
      "4. Context Assembly: Merges the top-K documents with the query into a structured prompt.",
      "5. Generation: The LLM produces a response conditioned on the augmented context."
    ],
    visualType: 'rag-architecture',
    notes: "Adding a reranker between retrieval and generation significantly improves answer quality. Dense retrieval (embeddings) catches semantic similarity, while sparse retrieval (BM25) catches exact keyword matches — hybrid combines both."
  },
  {
    id: 18,
    header: "Indexing Pipeline: Load & Split",
    content: [
      "Loading: Extracting text from PDFs, web pages, databases, or APIs using document loaders.",
      "Splitting: Breaking documents into semantically meaningful chunks with controlled overlap.",
      "Strategies: RecursiveCharacterTextSplitter (default), token-based, semantic splitting, or markdown-aware splitting.",
      "Chunk Size: Typically 500–1500 tokens — too small loses context, too large dilutes relevance."
    ],
    visualType: 'rag-indexing-1',
    notes: "Chunking strategy is one of the most impactful decisions in a RAG pipeline. Overlap (e.g., 200 tokens) ensures that concepts split across chunk boundaries are still retrievable."
  },
  {
    id: 19,
    header: "Indexing Pipeline: Embed & Store",
    content: [
      "Embedding Models: OpenAI (text-embedding-3-small/large), Cohere embed-v3, or open-source (BGE, E5, GTE).",
      "Dimensionality: Vectors typically range from 384 to 3072 dimensions depending on the model.",
      "Vector Store: Purpose-built databases optimized for approximate nearest neighbor (ANN) search.",
      "Indexing Algorithms: HNSW (graph-based), IVF (inverted file), PQ (product quantization) for fast retrieval at scale."
    ],
    visualType: 'rag-indexing-2',
    notes: "The choice of embedding model matters more than the choice of vector database. Always evaluate embedding quality on your specific domain data before committing."
  },
  {
    id: 20,
    header: "Vector Database Landscape",
    content: [
      "Purpose-built Vector DBs: Pinecone (managed), Weaviate (hybrid search), Milvus (scalable), Chroma (lightweight), Qdrant (Rust-based).",
      "Databases with Vector Extensions: PostgreSQL (pgvector), MongoDB Atlas Vector Search, Redis Vector Similarity.",
      "In-memory Libraries: FAISS (Meta), Annoy (Spotify), Hnswlib — fast but no persistence out of the box.",
      "Selection Criteria: Scale, latency, filtering capabilities, managed vs. self-hosted, and existing infrastructure."
    ],
    visualType: 'vector-db-compare',
    notes: "If you already run PostgreSQL, pgvector is a pragmatic starting point. For large-scale production with billions of vectors, purpose-built solutions like Pinecone or Milvus are more appropriate."
  },
  {
    id: 21,
    header: "Advanced RAG Patterns",
    content: [
      "Naive RAG: Simple retrieve-and-generate — fast but limited by single-pass retrieval quality.",
      "RAG with Reranking: A cross-encoder model re-scores retrieved chunks to improve precision.",
      "GraphRAG: Combines knowledge graphs with vector retrieval to capture entity relationships and multi-hop reasoning.",
      "Agentic RAG: An agent dynamically decides which retrieval strategy, index, or tool to use based on the query."
    ],
    visualType: 'advanced-rag',
    notes: "As query complexity increases, simple vector similarity search becomes insufficient. GraphRAG excels at questions that require connecting multiple pieces of information across documents."
  },
  {
    id: 22,
    header: "Evolution of AI Applications",
    content: [
      "Text Processing: Simple LLM calls — Text In → Text Out.",
      "Document Intelligence: Summarization, extraction, and classification.",
      "RAG Systems: Grounding responses with external knowledge retrieval.",
      "Multi-Modal: Processing and generating across text, images, audio, and video.",
      "Agentic Systems: Autonomous reasoning, tool use, memory, and multi-step planning."
    ],
    visualType: 'agent-evolution',
    notes: "We're at an inflection point where AI applications are moving from passive (answering questions) to active (taking actions). Each step adds capabilities but also failure modes that need to be managed."
  },
  {
    id: 23,
    header: "The Anatomy of an AI Agent",
    content: [
      "Task / User Request: The input that triggers the agent's execution loop.",
      "LLM (Brain): The reasoning engine that interprets the task and decides what to do next.",
      "Tools: External capabilities the agent can invoke (APIs, databases, code execution, web search).",
      "Memory: Short-term (conversation context) and long-term (persisted knowledge in vector stores).",
      "Planning: The ability to decompose complex goals into ordered sub-tasks and adjust the plan based on intermediate results."
    ],
    visualType: 'agent-anatomy-pdf',
    notes: "An agent is fundamentally a loop: Observe → Think → Act → Observe. The LLM provides the 'Think' step, tools provide the 'Act' step, and memory provides continuity across iterations."
  },
  {
    id: 24,
    header: "How Agents Think, Remember, and Act",
    content: [
      "Perception: Processing multi-modal inputs — text, structured data, images, or audio.",
      "Memory: Working memory (current context window) and persistent memory (vector stores, databases for long-term recall).",
      "Planning: Task decomposition, self-reflection, chain-of-thought reasoning, and plan revision.",
      "Action Execution: Invoking tools — API calls, database queries, web searches, code execution, or file operations."
    ],
    visualType: 'agent-thinking-process',
    notes: "The agent loop (perceive → reason → act → observe) is inspired by cognitive architectures. The key challenge is grounding — ensuring the agent's actions are based on real data, not hallucinated reasoning."
  },
  {
    id: 25,
    header: "Agentic RAG Workflow",
    content: [
      "Dynamic Retrieval: The agent decides when, what, and how to query — not every request needs retrieval.",
      "Multi-source Knowledge: Routing queries to the appropriate store — vector DB, knowledge graph, SQL database, or live API.",
      "Tool Calling: The LLM generates structured tool-call requests that are executed by the runtime.",
      "Iterative Refinement: The agent can evaluate retrieved results and re-query if the initial retrieval is insufficient."
    ],
    visualType: 'agentic-rag-flow',
    notes: "Agentic RAG is a significant step beyond naive RAG. The agent can reason about whether it has enough information, query multiple sources, and synthesize across them — mimicking how a human researcher works."
  },
  {
    id: 26,
    header: "Key Concepts in Agentic Systems",
    content: [
      "Statefulness: Maintaining context across multiple interactions and tool calls within a session.",
      "Self-Reflection: The agent evaluates its own outputs and can detect and correct errors before responding.",
      "Autonomy: Operating with minimal human intervention while respecting defined guardrails.",
      "Task Decomposition: Breaking complex goals into a sequence of achievable sub-tasks.",
      "Agent Loop: Observe → Reason → Act → Evaluate → Repeat until the goal is achieved or a stop condition is met."
    ],
    visualType: 'agent-terms',
    notes: "The degree of autonomy is a design decision. In production, you almost always want guardrails — budget limits, tool allowlists, human-in-the-loop checkpoints for high-stakes actions."
  },
  {
    id: 27,
    header: "Reasoning Patterns: ReAct & Plan-and-Execute",
    content: [
      "ReAct (Reason + Act): Interleaves reasoning traces with tool actions — Think → Act → Observe → Repeat.",
      "Plan-and-Execute: Generates a full plan upfront, then executes each step sequentially with optional re-planning.",
      "Trade-off: ReAct is adaptive and handles dynamic tasks; Plan-and-Execute is more structured and token-efficient for well-defined workflows.",
      "Use Cases: ReAct for interactive search and Q&A; Plan-and-Execute for multi-step research or report generation."
    ],
    visualType: 'reasoning-patterns-1',
    notes: "ReAct (Yao et al., 2022) is the most widely adopted pattern. Plan-and-Execute works better when the task has clear sub-steps and you want to minimize redundant LLM calls."
  },
  {
    id: 28,
    header: "Reasoning Patterns: Zero-shot & Self-Ask",
    content: [
      "Zero-shot Tool Use: The LLM directly selects and invokes a tool in a single step — no iterative reasoning needed.",
      "Self-Ask: The LLM recursively generates and answers sub-questions to build up to the final answer.",
      "Compositional Reasoning: Self-Ask excels at multi-hop questions that require chaining facts from different sources.",
      "When to Use: Zero-shot for simple, direct tasks; Self-Ask for complex queries requiring multi-step evidence gathering."
    ],
    visualType: 'reasoning-patterns-2',
    notes: "Not every query needs a full ReAct loop. Zero-shot tool use has the lowest latency. Self-Ask is particularly powerful when combined with a search tool for fact-checking chains."
  },
  {
    id: 29,
    header: "The 2025 Agent Tech Stack",
    content: [
      "Orchestration: LangGraph (stateful graphs), CrewAI (role-based agents), AutoGen (multi-agent conversations).",
      "Memory: Zep (long-term memory), Mem0, Redis (fast session state).",
      "Tools & Connectivity: MCP (Model Context Protocol), Tavily (AI search), browser automation.",
      "Observability: LangSmith, Langfuse (open-source), Helicone, Arize Phoenix.",
      "Infrastructure: Docker, Kubernetes, serverless functions, cloud LLM APIs (OpenAI, Anthropic, Google)."
    ],
    visualType: 'agent-tech-stack',
    notes: "The ecosystem is evolving rapidly. LangGraph has become the de facto standard for stateful agent orchestration. MCP is emerging as the universal protocol for tool connectivity."
  },
  {
    id: 30,
    header: "What is LangChain?",
    content: [
      "Open-source framework for building LLM apps with composable, swappable components.",
      "Unified interface across OpenAI, Anthropic, Google, and local models.",
      "Chain prompts, retrievers, parsers, and tools into pipelines via LCEL.",
      "700+ integrations — vector stores, data loaders, APIs, and tools.",
      "LangServe (deployment) + LangSmith (observability) for production."
    ],
    visualType: 'langchain',
    notes: "LangChain's main value is abstraction and composability. It lets you swap components (e.g., switch from OpenAI to Anthropic) without rewriting your application logic."
  },
  {
    id: 31,
    header: "Prompt Templates",
    content: [
      "Parameterized prompts that separate structure from data — enabling reuse and consistency.",
      "Type Safety: Input variables are validated at construction time.",
      "Example (TypeScript):",
      "const template = 'Analyze this product: Name: {name}, Category: {category}, Description: {description}';",
      "const prompt = new PromptTemplate({ template, inputVariables: ['name', 'category', 'description'] });",
      "const formatted = await prompt.format({ name: 'Widget', category: 'Electronics', description: '...' });"
    ],
    visualType: 'langchain-prompt',
    notes: "Always use prompt templates instead of string concatenation. They provide validation, versioning, and make it easy to test different prompt strategies."
  },
  {
    id: 32,
    header: "LangChain Expression Language (LCEL)",
    content: [
      "Declarative composition of chains using the pipe operator: `prompt | model | parser`.",
      "Built-in: Streaming, async/batch execution, retries, and fallbacks — production-ready by default.",
      "Example:",
      "const chain = prompt.pipe(model).pipe(new StructuredOutputParser(schema));",
      "const result = await chain.invoke({ input: 'Summarize this product review' });"
    ],
    visualType: 'langchain-lcel',
    notes: "LCEL replaced the legacy Chain classes. Every LCEL chain automatically supports streaming, batching, and async — you get production features for free."
  },
  {
    id: 33,
    header: "Output Parsers: Structured Data",
    content: [
      "Converting unstructured LLM text output into typed, validated data structures.",
      "Schema-driven: Define the expected shape using Zod (TypeScript) or Pydantic (Python)."
    ],
    visualType: 'langchain-output',
    notes: "Output parsers inject formatting instructions into the prompt and validate the response. If parsing fails, you can use OutputFixingParser to automatically retry with the error context."
  },
  {
    id: 34,
    header: "Document Loaders: Ingesting Data",
    content: [
      "File-Based: PDF (PyPDFLoader), DOCX, CSV, JSON, HTML, Markdown.",
      "Web Loaders: Crawl and extract content from URLs (Cheerio, Playwright, Puppeteer).",
      "Cloud & SaaS: S3, Google Drive, Notion, Confluence, Slack, GitHub.",
      "Databases: SQL (via queries), MongoDB, Elasticsearch.",
      "Custom Loaders: Extend the base class for proprietary data sources or internal APIs."
    ],
    visualType: 'langchain-components',
    notes: "The quality of your RAG system is directly proportional to the quality of your data ingestion. Garbage in, garbage out — invest time in proper loading, cleaning, and metadata extraction."
  },
  {
    id: 35,
    header: "Memory: Maintaining Conversational State",
    content: [
      "BufferMemory: Stores the full conversation history — simple but grows unbounded.",
      "WindowMemory: Keeps only the last K turns — bounded but loses early context.",
      "TokenBufferMemory: Keeps as many messages as fit within a token budget.",
      "SummaryMemory: Periodically summarizes older messages — balances context retention with cost.",
      "Best Practice: Combine short-term buffer memory with long-term vector store retrieval for production chatbots."
    ],
    visualType: 'langchain-memory',
    notes: "Memory strategy directly impacts both cost and quality. For most production applications, a hybrid approach works best: keep recent messages in a buffer, and store/retrieve older context from a vector store."
  },
  {
    id: 36,
    header: "The Limitation of Linear Chains",
    content: [
      "DAGs (Directed Acyclic Graphs): LCEL chains are fundamentally acyclic — data flows in one direction.",
      "The Problem: Linear chains cannot loop back to retry, self-correct, or conditionally branch based on intermediate results.",
      "The Need: Real-world agent workflows require cycles, conditional routing, and persistent state across iterations."
    ],
    visualType: 'chains',
    notes: "This is the key motivation for LangGraph. When your workflow needs to say 'if the output is invalid, go back and try again,' you've outgrown linear chains."
  },
  {
    id: 37,
    header: "LangGraph: Stateful Agent Orchestration",
    content: [
      "LangGraph extends LangChain with cyclic graphs, persistent state, and fine-grained control flow.",
      "LangChain provides the components (LLMs, tools, prompts); LangGraph orchestrates them into workflows.",
      "Key Capabilities: Conditional edges, loops, parallel branches, human-in-the-loop, and state checkpointing.",
      "Core Abstraction: Nodes (functions) + Edges (routing logic) + State (shared, typed context)."
    ],
    visualType: 'langgraph',
    notes: "LangGraph is now the recommended way to build agents in the LangChain ecosystem. It gives you the control of a state machine with the power of LLM-driven decision making."
  },
  {
    id: 38,
    header: "LangGraph Architecture: Multi-Agent",
    content: [
      "Router / Intent Classifier: Determines the user's intent and selects the appropriate workflow.",
      "Supervisor Node: Orchestrates task delegation across specialized agents.",
      "Specialized Agents: Purpose-built nodes — code generation, data analysis, content writing, search.",
      "Evaluator Node: Validates outputs against quality criteria before returning to the user.",
      "State Management: Typed state schema with automatic checkpointing (SQLite, PostgreSQL)."
    ],
    visualType: 'anatomy',
    notes: "The supervisor pattern in LangGraph lets you build systems where a central agent delegates to specialists. Each specialist has its own tools and prompt, keeping concerns separated and prompts focused."
  },
  {
    id: 39,
    header: "Persistence & State Checkpointing",
    content: [
      "Checkpointers: Automatically serialize and persist graph state after every node execution (SqliteSaver, PostgresSaver).",
      "Fault Tolerance: If a node fails, resume execution from the last successful checkpoint — no need to restart.",
      "Time Travel: Inspect any historical state, replay from a previous checkpoint, or fork execution for A/B testing.",
      "Human-in-the-Loop: Use `interrupt_before` or `interrupt_after` to pause execution and wait for human approval."
    ],
    visualType: 'persistence',
    notes: "Checkpointing is what makes LangGraph production-ready. Without it, a failure in step 8 of a 10-step workflow means starting over. With it, you resume from step 7."
  },
  {
    id: 40,
    header: "Multi-Agent Design Patterns",
    content: [
      "Supervisor Pattern: A central agent delegates tasks to specialized sub-agents and aggregates results.",
      "Hierarchical Teams: Supervisors managing supervisors — for complex, multi-domain workflows.",
      "Peer-to-Peer: Agents communicate directly without a central coordinator (e.g., debate or consensus).",
      "Advantages: Focused prompts per agent, independent tool sets, easier testing, and potential for parallel execution."
    ],
    visualType: 'multiagent',
    notes: "Multi-agent systems trade simplicity for capability. Start with a single agent, and only split into multiple agents when you hit prompt complexity limits or need true specialization."
  },
  {
    id: 41,
    header: "What is MCP?",
    content: [
      "MCP (Model Context Protocol) is a universal standard that connects AI models to tools and data sources.",
      "Think of it like USB for AI — one standard plug instead of a custom cable for every device.",
      "Without MCP: 3 models × 3 tools = 9 custom integrations.",
      "With MCP: 3 models + 3 tools = 6 integrations through one shared protocol."
    ],
    visualType: 'mcp',
    notes: "MCP simplifies integrations, making it easier to connect AI models with tools and data sources."
  },
  {
    id: 42,
    header: "How MCP Works",
    content: [
      "MCP Host: The application environment — Claude Desktop, VS Code, custom apps, or IDE extensions.",
      "MCP Client: A protocol client within the host that manages connections to one or more servers.",
      "MCP Server: A lightweight process that exposes specific capabilities (tools, resources) from a data source.",
      "Transport: Communication via stdio (local) or HTTP with Server-Sent Events (remote).",
      "Discovery: Clients can list available tools and their schemas at runtime — enabling dynamic tool selection."
    ],
    visualType: 'mcp-works',
    notes: "The architecture is intentionally simple: each MCP server is a small, focused process. You can compose multiple servers to give an agent access to Shopify, Google Drive, and a SQL database simultaneously."
  },
  {
    id: 43,
    header: "Case Study: Ecommerce Catalog Automation",
    content: [
      "Input: Raw supplier CSV with unstructured product data.",
      "Agent 1 (Writer): Extracts specifications, generates SEO-optimized descriptions in brand voice.",
      "Agent 2 (Critic): Validates against brand guidelines, checks for prohibited claims, and verifies SEO compliance.",
      "Feedback Loop: If validation fails, the Writer agent regenerates with specific correction instructions.",
      "Output: Production-ready Shopify product JSON with validated titles, descriptions, tags, and metadata."
    ],
    visualType: 'usecase',
    notes: "This multi-agent loop pattern eliminates manual catalog enrichment. The Writer-Critic loop typically converges in 1-3 iterations, producing consistently higher quality than single-pass generation."
  },
  {
    id: 44,
    header: "Productionizing Agents: Observability",
    content: [
      "Key Metrics: End-to-end latency, token consumption, cost per request, task success rate, and tool call failure rate.",
      "Tracing: LangSmith / Langfuse provide full execution traces — every LLM call, tool invocation, and state transition.",
      "Evaluation: Automated eval pipelines using golden datasets, LLM-as-judge, and human review.",
      "Guardrails: Input/output validation, content filtering, budget limits, and rate limiting."
    ],
    visualType: 'observability',
    notes: "You cannot improve what you cannot measure. Every production agent needs tracing from day one. LangSmith and Langfuse let you replay failed runs, compare prompt versions, and track regression."
  },
  {
    id: 45,
    header: "The Road Ahead",
    content: [
      "Immediate: Pilot a RAG system grounded on internal documentation and product data.",
      "Short-term: Build a LangGraph agent for automated catalog enrichment and customer query routing.",
      "Mid-term: Deploy multi-agent workflows for end-to-end order management and supplier integration.",
      "Vision: AI agents as composable, observable, and reliable infrastructure — not just prototypes."
    ],
    visualType: 'future',
    notes: "Start small, measure everything, and iterate. The technology is mature enough for production — the key is building trust through observability and gradual scope expansion."
  }
];
