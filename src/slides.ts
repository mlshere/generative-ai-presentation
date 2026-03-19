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
    presenter: "Sherezade Maqueda, Junior Ecommerce Manager",
    visualType: 'network',
    notes: "Welcome everyone. Today we're shifting our perspective from simple AI chat to engineering robust, autonomous systems for our ecommerce operations."
  },
  {
    id: 2,
    header: "What is Generative AI",
    content: [
      "Generative AI or Gen AI is artificial intelligence that can generate original content such as text, image, code or video based on a user prompt",
      "It relies on:",
      "- Machine learning",
      "- Deep learning"
    ],
    visualType: 'AI structure',
    notes: ""
  },
  {
    id: 3,
    header: "Basic AI Concepts Explained",
    content: [
      "Artificial Intelligence: Machines designed to imitate human cognitive functions like learning and decision-making.",
      "Machine Learning: A subset of AI where algorithms improve through exposure to data and experience.",
      "Deep Learning: Advanced ML involving multi-layered neural networks, excelling in pattern recognition.",
      "NLP: Technology enabling machines to understand and process human languages."
    ],
    visualType: 'ai-concepts',
    notes: "AI is the broad field, ML is the method of learning from data, and DL is the specialized architecture using neural networks."
  },
    {
    id: 4,
    header: "Gen AI Technical Path",
    content: [
      "Foundation: Python & Machine Learning basics.",
      "Preparation: Model Embedding & Tokenization.",
      "Context: Advanced RAG Architecture & Vector DBs.",
      "Implementation: LLM APIs & Prompt Engineering.",
      "Agency: Multi-Agent Systems & Orchestration."
    ],
    visualType: 'roadmap',
    notes: "We aren't just jumping into Agents. We are building a stack that starts with Python and ends with complex Multi-Agent Systems, with a heavy emphasis on RAG for grounding."
  },
  {
    id: 5,
    header: "How an LLM Works: The Foundation",
    content: [
      "Tokenization: Breaking raw text into manageable chunks (tokens).",
      "Embeddings: Converting tokens into numerical vectors for the model.",
      "Transformer: The core engine using 'Attention' to understand context and relationships.",
      "Pre-training: Learning general language patterns from massive datasets.",
      "Fine-tuning: Adapting the model for specific tasks or domains (e.g., Ecommerce)."
    ],
    visualType: 'llm-process',
    notes: "This diagram shows the complete lifecycle: from raw text tokenization to the Transformer's attention mechanism, and finally transfer learning for specific tasks."
  },
  {
    id: 6,
    header: "What is Machine Learning?",
    content: [
      "A way for computers to learn from data instead of being told exactly what to do.",
      "Types of Learning:",
      "- Supervised Learning: Trains models to predict based on labeled training data.",
      "- Unsupervised Learning: Algorithm learns from unlabeled data without predefined outputs.",
      "- Reinforcement Learning: Algorithm learns through trial and error with rewards."
    ],
    visualType: 'ml-types',
    notes: "Supervised learning is like a student with a teacher, Unsupervised is like finding patterns in a crowd, and Reinforcement is like training a dog with treats."
  },
  {
    id: 7,
    header: "Building the Machine Learning Model",
    content: [
      "1. Data Preparation: Cleaning, curation, and removing redundant features.",
      "2. Data Splitting: 80% Training set / 20% Test set.",
      "3. Training: Applying learning algorithms (KNN, LR, etc.) to the training set.",
      "4. Evaluation: Predicting Y values and evaluating model performance (Classification/Regression)."
    ],
    visualType: 'ml-building',
    notes: "The lifecycle of a model starts with data and ends with performance evaluation."
  },
  {
    id: 8,
    header: "Machine Learning vs. Deep Learning",
    content: [
      "Machine Learning: Requires manual feature extraction by humans before classification.",
      "Deep Learning: Automates feature extraction and classification within the neural network layers.",
      "DL excels with huge amounts of data where manual feature engineering becomes impossible."
    ],
    visualType: 'ml-vs-dl',
    notes: "The key difference is how features are handled: manually in traditional ML, or automatically in DL."
  },
  {
    id: 9,
    header: "Tokenization & Transformers",
    content: [
      "Tokenization: Breaking text into sub-word units (tokens).",
      "Parameters: The weights that define the model's knowledge (e.g. 175B).",
      "Transformers: Parallel processing via Self-Attention mechanisms.",
      "Python: Using Hugging Face 'transformers' library."
    ],
    visualType: 'python-tokenization',
    notes: "Tokenization is the first step, followed by processing through the Transformer's attention layers."
  },
  {
    id: 10,
    header: "Embeddings: Mathematical Meaning",
    content: [
      "Process: Mapping tokens to high-dimensional numerical vectors.",
      "Semantic Space: Similar words are placed closer together mathematically.",
      "Context: Embeddings capture the nuance of how words are used.",
      "Python: 'sentence-transformers' for efficient vector generation."
    ],
    visualType: 'python-embeddings',
    notes: "Embeddings turn language into math that computers can calculate similarity on."
  },
  {
    id: 11,
    header: "Training & Transfer Learning",
    content: [
      "Pre-training: Learning general language patterns from massive datasets.",
      "Transfer Learning: Adapting a pre-trained model to a specific domain.",
      "Fine-tuning: Training on specialized data (e.g. ecommerce support).",
      "Python: 'transformers' Trainer API for streamlined model training."
    ],
    visualType: 'python-training',
    notes: "We don't train from scratch; we stand on the shoulders of giants using Transfer Learning."
  },
  {
    id: 12,
    header: "Ollama: Local LLM Hosting",
    content: [
      "Host open-source models (Llama 3, Mistral, Phi-3) locally.",
      "Simple CLI: `ollama run llama3` to download and chat.",
      "REST API: Seamless integration with LangChain and LangGraph.",
      "Privacy & Cost: No data leaves your infrastructure, zero per-token fees."
    ],
    visualType: 'ollama',
    notes: "Ollama democratizes LLM access by allowing us to run powerful models on our own hardware."
  },
  {
    id: 13,
    header: "Prompt Engineering: The Art of Instruction",
    content: [
      "Role: Define the persona (e.g. 'Senior Software Architect').",
      "Task: Clear, actionable description of the goal.",
      "Instructions: Step-by-step constraints and logic.",
      "Context: Background data, examples, or few-shot learning.",
      "Output Format: Desired structure (JSON, Markdown, CSV)."
    ],
    visualType: 'prompt-anatomy',
    notes: "A well-structured prompt is the difference between a generic answer and a production-ready output."
  },
  {
    id: 14,
    header: "How LLM Works: The Complete Pipeline",
    content: [
      "Data Collection & Cleaning: Gathering and organizing vast text data.",
      "Tokenization & Embedding: Breaking text into tokens and creating mathematical vectors.",
      "Training: Initial training, supervised learning, and reward models.",
      "Refinement: Fine-tuning, testing, and validation.",
      "Deployment: Serving the model and monitoring performance."
    ],
    visualType: 'llm-works-detailed',
    notes: "This overview shows the entire journey from raw data to a production-ready model with user interaction and monitoring."
  },
  {
    id: 15,
    header: "Three Tiers of Implementation",
    content: [
      "1. LLM (Prompt Only): Static. No external data.",
      "2. RAG (Knowledge): Injects specific context (PDFs, Wikis).",
      "3. Agent (Reason + Act): Uses tools to interact with our backend."
    ],
    visualType: 'tiers',
    notes: "We move from simple prompts to RAG, and finally to full agency where the AI can act."
  },
  {
    id: 16,
    header: "Retrieval-Augmented Generation (RAG)",
    content: [
      "1. User Prompt: The user initiates the request.",
      "2. Retrieval: Searching the Vector Database for relevant context.",
      "3. Augmented Context: Merging the prompt with retrieved data.",
      "4. LLM Generation: Processing the informed prompt for accuracy.",
      "5. Final Answer: Delivering a grounded, factual response."
    ],
    visualType: 'rag',
    notes: "RAG is the bridge between static models and our dynamic product data."
  },
  {
    id: 17,
    header: "Detailed RAG Architecture",
    content: [
      "1. User Query: The entry point for the request.",
      "2. Orchestrator: Manages the flow between retriever and LLM.",
      "3. Retriever: Fetches relevant context from knowledge sources.",
      "4. Augmentation: Combines query with retrieved context.",
      "5. Generation: LLM produces response based on augmented prompt."
    ],
    visualType: 'rag-architecture',
    notes: "This end-to-end flow ensures the LLM has access to the most relevant and up-to-date information."
  },
  {
    id: 18,
    header: "Indexing Pipeline: Load & Split",
    content: [
      "Loading: Extracting text from PDFs, Wikis, or Databases.",
      "Splitting: Breaking documents into manageable chunks.",
      "Strategy: Recursive character splitting or token-based splitting.",
      "Example: Using LangChain's RecursiveCharacterTextSplitter."
    ],
    visualType: 'rag-indexing-1',
    notes: "Proper chunking is critical for ensuring the retriever finds the most relevant snippets."
  },
  {
    id: 19,
    header: "Indexing Pipeline: Embed & Store",
    content: [
      "Embedding: Converting text chunks into numerical vectors.",
      "Models: OpenAI (text-embedding-3), HuggingFace, or Cohere.",
      "Storing: Saving vectors into a specialized Vector Database.",
      "FAISS: A popular library for efficient similarity search."
    ],
    visualType: 'rag-indexing-2',
    notes: "Embeddings capture the semantic meaning, allowing for similarity-based retrieval."
  },
  {
    id: 20,
    header: "Vector Database Landscape",
    content: [
      "Pure Vector DBs: Pinecone, Milvus, Weaviate, Chroma.",
      "NoSQL with Vectors: MongoDB, Redis, Cassandra.",
      "SQL with Vectors: PostgreSQL (pgvector), SingleStore.",
      "Libraries: FAISS, Annoy, Hnswlib."
    ],
    visualType: 'vector-db-compare',
    notes: "Choosing the right database depends on scale, latency requirements, and existing infrastructure."
  },
  {
    id: 21,
    header: "Advanced RAG Patterns",
    content: [
      "Naive RAG: Simple retrieve and generate.",
      "Retrieve-and-Rerank: Uses a cross-encoder to refine results.",
      "GraphRAG: Leverages knowledge graphs for complex relationships.",
      "Agentic RAG: Uses agents to decide which tools or indices to query."
    ],
    visualType: 'advanced-rag',
    notes: "As tasks get more complex, we move beyond simple retrieval to more sophisticated orchestration patterns, leading us to full agency."
  },
  {
    id: 22,
    header: "Evolution of AI Agents",
    content: [
      "LLM Processing Flow: Text In → Text Out.",
      "Document Processing: Summarization & Extraction.",
      "RAG & Tools: External Knowledge + APIs.",
      "Multi-Modal: Text, Images, Audio, Video.",
      "Agentic Architecture: Memory + Decision Making."
    ],
    visualType: 'agent-evolution',
    notes: "The journey from simple chat to autonomous agents involves adding memory, tools, and multi-modal capabilities."
  },
  {
    id: 23,
    header: "The Anatomy of an AI Agent",
    content: [
      "Task / User Request: The trigger.",
      "Agent: The brain (LLM) that reasons.",
      "Tools: The hands that perform actions.",
      "Memory: The storage for context and history.",
      "Planning: The strategy to solve complex tasks."
    ],
    visualType: 'agent-anatomy-pdf',
    notes: "An agent is more than just an LLM; it's a system that combines reasoning with tools and memory."
  },
  {
    id: 24,
    header: "How Agents Think, Remember, and Act",
    content: [
      "Perception: Processing text, audio, and images.",
      "Memory: Short-term (context) and Long-term (vector stores).",
      "Planning: Reflection, reasoning, and decomposition.",
      "Actions: Web search, API calls, and system commands."
    ],
    visualType: 'agent-thinking-process',
    notes: "This loop of perception, memory, planning, and action is what makes an agent 'intelligent'."
  },
  {
    id: 25,
    header: "Agentic RAG Workflow",
    content: [
      "Beyond Retrieval: Agents decide when and how to query.",
      "Persistent Knowledge: Graph, Vector, and Relational DBs.",
      "Tool Calling: Mapping prompts to specific functions.",
      "Orchestration: Managing the flow between LLM and data."
    ],
    visualType: 'agentic-rag-flow',
    notes: "Agentic RAG moves from simple retrieval to a more dynamic, tool-based interaction with knowledge."
  },
  {
    id: 26,
    header: "Key Terms in AI Agents",
    content: [
      "Statefulness: Recalling past interactions.",
      "Reflection: Reviewing and correcting own performance.",
      "Autonomy: Working without explicit instructions.",
      "Task Decomposition: Breaking down complex goals.",
      "Agent Loop: Think → Act → Learn → Repeat."
    ],
    visualType: 'agent-terms',
    notes: "Understanding these terms is crucial for building and debugging agentic systems."
  },
  {
    id: 27,
    header: "Reasoning Patterns: ReAct & Plan-and-Execute",
    content: [
      "ReAct: Think → Act → Observe → Repeat loop.",
      "Plan-and-Execute: Create a multi-step plan first.",
      "Efficiency: ReAct is dynamic; Planning is structured.",
      "Use Case: ReAct for search; Planning for research."
    ],
    visualType: 'reasoning-patterns-1',
    notes: "ReAct is the most popular pattern for real-time tool use, while Plan-and-Execute is better for long-running tasks."
  },
  {
    id: 28,
    header: "Reasoning Patterns: Zero-shot & Self-Ask",
    content: [
      "Zero-shot: Direct tool call for simple tasks.",
      "Self-Ask: LLM asks itself sub-questions to solve queries.",
      "Search Integration: Self-Ask is perfect for deep research.",
      "Simplicity: Zero-shot minimizes latency for easy tasks."
    ],
    visualType: 'reasoning-patterns-2',
    notes: "Not every task needs a complex loop; sometimes a single shot or a sub-question is enough."
  },
  {
    id: 29,
    header: "The 2025 Agent Tech Stack",
    content: [
      "Orchestration: LangChain, LangGraph, CrewAI.",
      "Memory: Zep, Letta, Redis.",
      "Tools: Serper, Tavily, MCP.",
      "Observability: Langfuse, Helicone, LangSmith.",
      "Infra: Docker, Kubernetes, AWS/Azure."
    ],
    visualType: 'agent-tech-stack',
    notes: "The ecosystem is maturing rapidly, with specialized tools for every part of the agent lifecycle."
  },
  {
    id: 30,
    header: "What is LangChain?",
    content: [
      "A framework for building applications using LLMs (GPT, Gemini, Llama).",
      "Simplifies development by chaining prompts, memory, and retrieval.",
      "Why we need it:",
      "- Memory: To remember past conversations.",
      "- Chaining: To combine multiple LLM calls.",
      "- Retrieval: To fetch data from docs/web.",
      "- Agents: To let AI decide tools at runtime."
    ],
    visualType: 'langchain',
    notes: "Think of it as Lego blocks for AI—pre-built modules for chatbots, automation, and knowledge retrieval."
  },
  {
    id: 31,
    header: "Prompt Templates",
    content: [
      "Standardizing prompts for structured inputs.",
      "Reusability: Avoiding hardcoded prompts.",
      "Example (TS):",
      "const template = 'Analyze this resume: Name: {name}, Skills: {skills}.';",
      "const prompt = new PromptTemplate({ template, inputVariables: ['name', 'skills'] });",
      "const formatted = await prompt.format({ name: 'John', skills: 'AI' });"
    ],
    visualType: 'langchain-prompt',
    notes: "Instead of writing static prompts every time, templates allow us to define a structure and fill values dynamically."
  },
  {
    id: 32,
    header: "LangChain Expression Language (LCEL)",
    content: [
      "Declarative way to compose chains: `prompt | model | parser`.",
      "Streaming & Async: Native support for production.",
      "Example:",
      "const chain = prompt.pipe(model).pipe(new StringOutputParser());",
      "const result = await chain.invoke({ input: 'Hello' });"
    ],
    visualType: 'langchain-lcel',
    notes: "LCEL is the modern way to build LangChain applications, offering consistency and power."
  },
  {
    id: 33,
    header: "Output Parsers: Structured Data",
    content: [
      "Transforming LLM text output into structured objects (JSON).",
      "Schema-based: Define the shape of the data you expect.",
      "Example:",
      "const parser = StructuredOutputParser.fromZodSchema(z.object({",
      "  answer: z.string().describe('The answer to the question'),",
      "  sources: z.array(z.string()).describe('Sources used')",
      "}));"
    ],
    visualType: 'langchain-output',
    notes: "Output parsers bridge the gap between unstructured text and programmatic data structures."
  },
  {
    id: 34,
    header: "Document Loaders: Ingesting Data",
    content: [
      "File-Based: PDF, DOCX, CSV, TXT.",
      "Web Loaders: Fetch content directly from URLs.",
      "Cloud Storage: S3, Google Drive, Dropbox.",
      "Third-Party: Notion, Slack, GitHub.",
      "Custom: Build your own for niche data sources."
    ],
    visualType: 'langchain-components',
    notes: "LangChain provides a unified interface to load data from almost anywhere."
  },
  {
    id: 35,
    header: "Memory: Maintaining Context",
    content: [
      "ConversationBuffer: Remembers everything.",
      "ConversationWindow: Remembers last K turns.",
      "ConversationToken: Remembers last N tokens.",
      "ConversationSummary: Summarizes the past.",
      "Example:",
      "const memory = new BufferMemory({ returnMessages: true });"
    ],
    visualType: 'langchain-memory',
    notes: "Managing state is crucial for conversational interfaces. LangChain offers multiple strategies to balance context and cost."
  },
  {
    id: 36,
    header: "The Constraint of Standard Chains",
    content: [
      "DAGs (Directed Acyclic Graphs): Standard LangChain is linear.",
      "The Problem: It cannot \"retry\" or \"loop\" if an output is malformed.",
      "The Need: We need a way to maintain State over cycles."
    ],
    visualType: 'chains',
    notes: "Linear chains are limited. Real-world tasks often require loops and retries, especially when interacting with our ecommerce backend."
  },
  {
    id: 37,
    header: "LangGraph: The Orchestration Brain",
    content: [
      "\"LangGraph is the brain behind multi-step, memory-aware AI workflows.\"",
      "LangChain calls LLMs; LangGraph orchestrates them.",
      "Key features: Logic, memory, and fine-grained control.",
      "Best for: Revisions, retries, and conditional decisions.",
      "Example: Planner → Writer → Critic → Repeat till perfect."
    ],
    visualType: 'langgraph',
    notes: "LangGraph allows us to build complex state machines where LLMs are just nodes in a larger logic flow."
  },
  {
    id: 38,
    header: "LangGraph Architecture",
    content: [
      "Intent Classifier: Understands user intent from the start.",
      "Task Orchestrator: Routes tasks to the correct specialized agent.",
      "Specialized Agents: Code, Database, Text, Search, Utility.",
      "Feedback Agent: Formats and highlights the final results.",
      "State Storage: In-memory SQLite for graph state."
    ],
    visualType: 'anatomy',
    notes: "A multi-agent system in LangGraph uses a central orchestrator to manage specialized workers."
  },
  {
    id: 39,
    header: "Persistence & State Checkpointing",
    content: [
      "SqliteSaver: Automatically saves state after every node execution.",
      "Fault Tolerance: Resume from the last successful step if a crash occurs.",
      "Time Travel: Inspect and jump back to any previous state in the history.",
      "Human-in-the-loop: Pause the graph to wait for human approval or input."
    ],
    visualType: 'persistence',
    notes: "Checkpointing is what makes LangGraph agents reliable enough for production business processes."
  },
  {
    id: 40,
    header: "Specialization: Multi-Agent Systems",
    content: [
      "Supervisor Pattern: A central node delegates to sub-agents.",
      "Self-Correcting Tutor: Teach → Quiz → Analyze mistake → Re-teach.",
      "Code Generation: Write code → Lint + Analyze → Fix → Test.",
      "Advantages: Smaller prompts, easier debugging, parallel processing."
    ],
    visualType: 'multiagent',
    notes: "Breaking a complex task into specialized agents significantly improves accuracy and reliability."
  },
  {
    id: 41,
    header: "MCP: Reducing Integration Complexity",
    content: [
      "Without MCP: $M \\times N$ complexity (every model needs a custom connector).",
      "With MCP: $M + N$ complexity (universal protocol for all models).",
      "Seamless integration: Claude, Gemini, Mistral $\\leftrightarrow$ CRM, S3, SQL.",
      "Key Components: Secure File Access, Sampling, Prompts, Resources, Tools."
    ],
    visualType: 'mcp',
    notes: "MCP standardizes how LLMs interact with data, moving from custom spaghetti code to a clean, universal protocol."
  },
  {
    id: 42,
    header: "How MCP Works",
    content: [
      "MCP Host: The environment (Claude Desktop, IDE, AI Tools).",
      "MCP Client: The component within the host that initiates connections.",
      "MCP Server: The intermediary that connects to specific data sources.",
      "Transport Layer: The secure communication channel between client and server.",
      "Standardized Protocol: Ensures all hosts can talk to all servers."
    ],
    visualType: 'mcp-works',
    notes: "The client-server architecture of MCP allows for a modular and secure way to extend LLM capabilities."
  },
  {
    id: 43,
    header: "Case Study: Ecommerce Automation",
    content: [
      "Input: Supplier CSV.",
      "Agent 1: Extracts specs and translates them to brand tone.",
      "Agent 2 (Critic): Checks for prohibited keywords or SEO violations.",
      "Loop: If Agent 2 finds an error, Agent 1 regenerates.",
      "Output: Validated Shopify Product JSON."
    ],
    visualType: 'usecase',
    notes: "This is a real-world use case for autonomous catalog enrichment using multi-agent loops."
  },
  {
    id: 44,
    header: "Productionizing the Agent Stack",
    content: [
      "Metrics: Latency, Token Cost, Success Rate.",
      "LangSmith: Debugging traces for every agent turn.",
      "Logging: Maintaining an audit trail of agent decisions.",
      "Testing: Evaluating agent performance on golden datasets."
    ],
    visualType: 'observability',
    notes: "Observability is key to moving from prototype to production."
  },
  {
    id: 45,
    header: "The Road Ahead (2025+)",
    content: [
      "Immediate: Pilot a RAG system for internal FAQ.",
      "Mid-term: Integrate LangGraph for complex order-routing.",
      "Long-term: Full-scale Multi-Agent orchestration.",
      "Vision: AI Agents as the primary interface for business logic."
    ],
    visualType: 'future',
    notes: "The tools are ready now. Let's build a prototype in our next sprint."
  }
];
