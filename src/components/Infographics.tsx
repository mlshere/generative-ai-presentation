import React from 'react';
import { 
  Database, 
  Search, 
  Cpu, 
  Layers, 
  Workflow, 
  RefreshCw, 
  GitBranch, 
  ShieldCheck, 
  Users, 
  BrainCircuit, 
  Wrench, 
  Network, 
  FileJson, 
  BarChart3, 
  Milestone,
  ArrowRight,
  ArrowDown,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Activity,
  Server,
  Globe,
  Code2,
  Eye,
  History,
  CircleDot,
  Brain,
  DatabaseZap,
  ArrowRightCircle,
  Dna,
  Binary,
  Bot,
  MessageCircle,
  MessageSquare,
  Shield,
  Lightbulb,
  Target,
  Trophy,
  MousePointer2,
  Split,
  Filter,
  Scissors,
  BookOpen,
  FileText,
  Gauge,
  Table,
  Layout,
  Code,
  Box,
  Share2,
  FileCode
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Helper Components ---
const Glow = ({ color = "blue" }: { color?: string }) => (
  <div className={`absolute inset-0 bg-${color}-500/20 blur-[100px] rounded-full`} />
);

// --- 1. Network Graph (Slide 1: Intro) ---
export const NetworkGraph = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-neutral-950 overflow-hidden">
    <Glow />
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    
    <div className="relative z-10 flex flex-col items-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Network size={160} className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex gap-3"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-1 w-12 rounded-full bg-blue-500/30 overflow-hidden">
            <motion.div 
              className="h-full bg-blue-400"
              animate={{ x: [-48, 48] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

// --- 2. Roadmap (Slide 2: Evolution) ---
export const RoadmapInfographic = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-white">
    <div className="relative w-full max-w-2xl">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-100 -translate-y-1/2" />
      <div className="flex justify-between relative z-10">
        {[
          { label: "Python", icon: Terminal, desc: "Foundation" },
          { label: "LLM APIs", icon: Zap, desc: "Implementation" },
          { label: "RAG", icon: Database, desc: "Context" },
          { label: "Agents", icon: BrainCircuit, desc: "Agency" }
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4 ${i === 3 ? 'bg-blue-600 text-white' : 'bg-white border border-neutral-200 text-neutral-600'}`}>
              <step.icon size={28} />
            </div>
            <span className="text-sm font-bold text-neutral-900">{step.label}</span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">{step.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// --- 3. Transformer (Slide 3: Architecture) ---
export const TransformerDiagram = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-8">
    <div className="relative flex gap-8 items-center">
      <div className="flex flex-col gap-2">
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            className="w-12 h-4 bg-blue-900/50 rounded border border-blue-500/30" 
          />
        ))}
      </div>
      <ArrowRight className="text-blue-500/50" />
      <div className="relative p-6 bg-blue-600 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.3)]">
        <Layers size={64} className="text-white" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
          <Zap size={12} className="text-yellow-900" />
        </div>
      </div>
      <ArrowRight className="text-blue-500/50" />
      <div className="flex flex-col gap-2">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-24 h-12 bg-green-600/20 border border-green-500/50 rounded flex items-center justify-center text-[10px] font-mono text-green-400"
        >
          NEXT_TOKEN
        </motion.div>
      </div>
    </div>
  </div>
);

// --- 4. Hallucination (Slide 4: Risks) ---
export const HallucinationChart = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-4">
    <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-red-100 flex flex-col items-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle size={40} className="text-red-500" />
        </div>
        <h4 className="text-red-600 font-bold mb-2">Hallucination</h4>
        <p className="text-[10px] text-neutral-400 text-center uppercase tracking-widest">Confidence in errors</p>
        <div className="mt-6 w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: ["0%", "90%", "85%"] }}
            className="h-full bg-red-400" 
          />
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 flex flex-col items-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        <h4 className="text-green-600 font-bold mb-2">Grounded Truth</h4>
        <p className="text-[10px] text-neutral-400 text-center uppercase tracking-widest">Verified by DB</p>
        <div className="mt-6 w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: ["0%", "100%"] }}
            className="h-full bg-green-500" 
          />
        </div>
      </div>
    </div>
  </div>
);

// --- 5. Tiers (Slide 5: Implementation) ---
export const TiersComparison = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-8">
    <div className="flex flex-col gap-4 w-full max-w-md">
      {[
        { title: "LLM (Static)", color: "bg-neutral-100", text: "text-neutral-500", icon: Cpu },
        { title: "RAG (Knowledge)", color: "bg-blue-100", text: "text-blue-600", icon: Database },
        { title: "Agent (Autonomous)", color: "bg-blue-600", text: "text-white", icon: BrainCircuit, active: true }
      ].map((tier, i) => (
        <motion.div 
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className={`p-6 rounded-2xl flex items-center justify-between shadow-sm border border-neutral-100 ${tier.color} ${tier.text}`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.active ? 'bg-blue-500' : 'bg-white'}`}>
              <tier.icon size={20} />
            </div>
            <span className="font-bold">{tier.title}</span>
          </div>
          {tier.active && <Zap size={20} className="text-yellow-400 animate-pulse" />}
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 6. RAG Flow (Slide 6: RAG) ---
export const RAGFlow = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-1">
    <div className="relative w-full max-w-2xl bg-neutral-50 rounded-2xl border border-neutral-100 p-2 sm:p-4 overflow-hidden shadow-sm flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      
      <div className="relative z-10 flex items-center justify-between w-full gap-0.5 sm:gap-2">
        {/* Step 1: User Prompt */}
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-col items-center gap-1 w-[22%]"
        >
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 relative">
            <MessageSquare className="text-white w-5 h-5 sm:w-7 sm:h-7" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100">
              <span className="text-blue-600 font-black text-[7px] sm:text-[9px]">1</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-black text-[6px] sm:text-[8px] uppercase tracking-wider text-blue-600">Prompt</div>
          </div>
        </motion.div>

        <div className="flex-shrink flex items-center justify-center">
          <ArrowRight className="text-neutral-200 w-2 h-2 sm:w-3 sm:h-3" />
        </div>

        {/* Step 2: Retrieval (RAG) */}
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-1 w-[22%]"
        >
          <div className="relative group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 relative z-10">
              <div className="relative">
                <Database className="text-white/40 absolute -top-1.5 -left-1.5 w-3 h-3 sm:w-4 sm:h-4" />
                <Search className="text-white relative z-10 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100">
                <span className="text-amber-600 font-black text-[7px] sm:text-[9px]">2</span>
              </div>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-1 border border-amber-200 rounded-lg sm:rounded-xl"
            />
          </div>
          <div className="text-center">
            <div className="font-black text-[6px] sm:text-[8px] uppercase tracking-wider text-amber-600">Retrieval</div>
          </div>
        </motion.div>

        <div className="flex-shrink flex items-center justify-center">
          <ArrowRight className="text-neutral-200 w-2 h-2 sm:w-3 sm:h-3" />
        </div>

        {/* Step 3: LLM + Augmented Context */}
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-1 w-[22%]"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-900 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl relative">
            <div className="relative">
              <Cpu className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [-3, 0, 3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3"
              >
                <FileText className="text-emerald-400 w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </motion.div>
            </div>
            <div className="absolute -top-1.5 -right-1.5 px-1 py-0.5 bg-emerald-500 text-white text-[5px] sm:text-[7px] font-black rounded shadow-lg border border-white whitespace-nowrap">
              AUGMENTED
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100">
              <span className="text-neutral-900 font-black text-[7px] sm:text-[9px]">3</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-black text-[6px] sm:text-[8px] uppercase tracking-wider text-neutral-900 leading-tight">Augment</div>
          </div>
        </motion.div>

        <div className="flex-shrink flex items-center justify-center">
          <ArrowRight className="text-neutral-200 w-2 h-2 sm:w-3 sm:h-3" />
        </div>

        {/* Step 4: Final Answer */}
        <motion.div 
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-1 w-[22%]"
        >
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 relative">
            <CheckCircle2 className="text-white w-5 h-5 sm:w-7 sm:h-7" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100">
              <span className="text-emerald-600 font-black text-[7px] sm:text-[9px]">4</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-black text-[6px] sm:text-[8px] uppercase tracking-wider text-emerald-600">Answer</div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// --- 8. Vector Search (Slide 8: Vector DB) ---
export const VectorCloud = () => (
  <div className="w-full h-full bg-neutral-950 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      {[...Array(100)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-48 h-48 border-2 border-dashed border-blue-500/20 rounded-full flex items-center justify-center"
      >
        <div className="w-32 h-32 border-2 border-dashed border-blue-500/50 rounded-full flex items-center justify-center">
          <Database size={48} className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </div>
      </motion.div>
      <div className="mt-8 px-4 py-2 bg-blue-900/50 border border-blue-500/30 rounded-full text-[10px] font-mono text-blue-300 uppercase tracking-widest">
        Semantic Similarity Search
      </div>
    </div>
  </div>
);

// --- 11. LangGraph (Slide 11: LangGraph) ---
export const LangGraphDiagram = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-4">
    <div className="relative w-full max-w-md aspect-video">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
          </marker>
        </defs>
        <path d="M 40 50 Q 100 10 160 50" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
        <path d="M 160 50 Q 100 90 40 50" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      </svg>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 bg-white border-2 border-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-lg">
        <Cpu size={24} className="text-blue-600 mb-1" />
        <span className="text-[8px] font-bold uppercase">Model</span>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
        <Wrench size={24} className="mb-1" />
        <span className="text-[8px] font-bold uppercase">Tool</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm text-[10px] font-mono">
        State: {"{...}"}
      </div>
    </div>
  </div>
);

// --- 14. Multi-Agent (Slide 14: Multi-Agent) ---
export const MultiAgentHub = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-4">
    <div className="relative">
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.5)] relative z-20"
      >
        <Users size={40} />
        <span className="text-[8px] font-black uppercase mt-1">Supervisor</span>
      </motion.div>
      
      {[0, 90, 180, 270].map((angle, i) => (
        <div 
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
          style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.3 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ transform: `rotate(-${angle}deg)` }}
          >
            <div className="w-16 h-16 bg-neutral-900 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-lg">
              <BrainCircuit size={24} />
            </div>
            <div className="mt-2 w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

// --- 15. ReAct (Slide 15: ReAct) ---
export const ReActCycle = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-4">
    <div className="relative w-64 h-64">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
        <motion.circle 
          cx="50" cy="50" r="40" 
          fill="none" stroke="#2563eb" strokeWidth="8"
          strokeDasharray="251.2"
          animate={{ strokeDashoffset: [251.2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <BrainCircuit size={48} className="text-blue-600" />
          <span className="text-xs font-black text-blue-900 uppercase mt-2">ReAct Loop</span>
        </div>
        <div className="flex gap-2">
          {["Thought", "Action", "Obs"].map((t, i) => (
            <span key={i} className="text-[8px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100 uppercase">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 17. MCP (Slide 17: MCP) ---
export const MCPDiagram = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-4">
    <div className="grid grid-cols-3 gap-8 items-center">
      <div className="flex flex-col gap-4">
        {[
          { name: "Shopify", icon: Globe },
          { name: "Slack", icon: Activity },
          { name: "SQL DB", icon: Database }
        ].map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 10 }}
            className="p-4 bg-blue-900/20 border border-blue-500/20 rounded-xl flex items-center gap-3 text-blue-300"
          >
            <s.icon size={16} />
            <span className="text-xs font-bold">{s.name}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="flex flex-col items-center">
        <div className="w-24 h-48 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-[0_0_40px_rgba(37,99,235,0.5)] rotate-45">
          <div className="-rotate-45">
            <Server size={40} />
          </div>
        </div>
        <span className="mt-8 text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">MCP Protocol</span>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { name: "Claude", icon: Cpu },
          { name: "GPT-4", icon: Cpu },
          { name: "Llama 3", icon: Cpu }
        ].map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: -10 }}
            className="p-4 bg-green-900/20 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-300"
          >
            <m.icon size={16} />
            <span className="text-xs font-bold">{m.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// --- 19. Observability (Slide 19: Observability) ---
export const ObservabilityDashboard = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-8">
    <div className="w-full max-w-2xl grid grid-cols-3 gap-4">
      <div className="col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Agent Traces (LangSmith)</h5>
          <Activity size={16} className="text-green-500" />
        </div>
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 60 + 40}%` }}
                  className="h-full bg-blue-600" 
                />
              </div>
              <span className="text-[10px] font-mono text-neutral-500">240ms</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <BarChart3 size={24} className="mb-2" />
          <div className="text-2xl font-black">98.2%</div>
          <div className="text-[8px] font-bold uppercase opacity-70">Success Rate</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
          <div className="text-xl font-black text-white">$0.12</div>
          <div className="text-[8px] font-bold uppercase text-neutral-500">Avg Cost / Run</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 9. LangChain (Slide 9: LangChain) ---
export const LangChainInfographic = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-3 overflow-hidden">
    <div className="w-full flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Workflow size={18} className="text-white" />
        </div>
        <span className="text-sm font-black text-white uppercase tracking-wider">LangChain</span>
      </div>

      {/* Core Pipeline: Prompt → LLM → Parser */}
      <div className="flex items-center justify-center gap-1.5">
        {[
          { label: "Prompt", icon: MessageSquare, color: "bg-blue-600" },
          { label: "Model", icon: Cpu, color: "bg-purple-600" },
          { label: "Parser", icon: FileJson, color: "bg-emerald-600" },
        ].map((step, i, arr) => (
          <React.Fragment key={i}>
            <div className={`flex flex-col items-center gap-1 px-2 py-1.5 ${step.color} rounded-lg`}>
              <step.icon size={14} className="text-white" />
              <span className="text-[7px] font-bold text-white uppercase">{step.label}</span>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight className="text-neutral-600 w-3 h-3 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Composable Layers */}
      <div className="space-y-1.5">
        {[
          { label: "Models", items: ["OpenAI", "Anthropic", "Google", "Local"], color: "border-blue-500/30", badge: "text-blue-400" },
          { label: "Retrievers", items: ["Vector DB", "BM25", "Hybrid", "Multi-Query"], color: "border-emerald-500/30", badge: "text-emerald-400" },
          { label: "Tools", items: ["Search", "SQL", "APIs", "Code"], color: "border-amber-500/30", badge: "text-amber-400" },
        ].map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-1.5 bg-white/5 rounded-lg border ${layer.color} flex items-center gap-2`}
          >
            <span className={`text-[8px] font-black uppercase tracking-wider ${layer.badge} w-14 flex-shrink-0`}>{layer.label}</span>
            <div className="flex flex-wrap gap-1">
              {layer.items.map((item, j) => (
                <span key={j} className="px-1.5 py-0.5 bg-white/5 rounded text-[7px] text-white/70 border border-white/5">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer: Ecosystem */}
      <div className="flex items-center justify-center gap-3 mt-1">
        {[
          { label: "LangServe", color: "text-blue-400" },
          { label: "LangSmith", color: "text-emerald-400" },
          { label: "700+ Integrations", color: "text-amber-400" },
        ].map((eco, i) => (
          <span key={i} className={`text-[7px] font-bold uppercase tracking-wider ${eco.color}`}>{eco.label}</span>
        ))}
      </div>
    </div>
  </div>
);

// --- 10. Chains vs Loops (Slide 10: Chains) ---
export const ChainsVsLoops = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-4">
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-400">
                <Milestone size={16} />
              </div>
              {i < 2 && <ArrowRight size={12} className="text-neutral-300" />}
            </React.Fragment>
          ))}
        </div>
        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Linear Chain (DAG)</span>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <RefreshCw size={32} className="text-blue-600" />
          </div>
        </div>
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Stateful Loop</span>
      </div>
    </div>
  </div>
);

// --- 12. Anatomy (Slide 12: Anatomy) ---
export const AnatomyDiagram = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-4">
    <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
          <Cpu size={24} />
        </div>
        <h5 className="text-white font-bold text-sm">Nodes</h5>
        <p className="text-[8px] text-neutral-500 uppercase mt-2">Functions / Logic</p>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
          <GitBranch size={24} />
        </div>
        <h5 className="text-white font-bold text-sm">Edges</h5>
        <p className="text-[8px] text-neutral-500 uppercase mt-2">Control Flow</p>
      </div>
      <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
          <History size={24} />
        </div>
        <h5 className="text-white font-bold text-sm">State</h5>
        <p className="text-[8px] text-neutral-500 uppercase mt-2">Shared Context</p>
      </div>
    </div>
  </div>
);

// --- 13. Persistence (Slide 13: Persistence) ---
export const PersistenceDiagram = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-4">
    <div className="relative w-full max-w-md">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -translate-y-1/2" />
      <div className="flex justify-between relative z-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.3 }}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${i === 2 ? 'bg-red-500 text-white' : 'bg-white border-2 border-blue-600 text-blue-600'}`}
            >
              {i === 2 ? <AlertTriangle size={20} /> : <ShieldCheck size={20} />}
            </motion.div>
            <span className="text-[8px] font-bold text-neutral-400 uppercase mt-2">Checkpoint {i+1}</span>
          </div>
        ))}
      </div>
      <motion.div 
        animate={{ x: [0, 200, 150] }}
        className="absolute top-1/2 left-0 w-4 h-4 bg-blue-600 rounded-full -translate-y-1/2 shadow-lg"
      />
    </div>
  </div>
);

// --- 16. Tools (Slide 16: Tools) ---
export const ToolExecution = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-4">
    <div className="flex flex-col items-center gap-8">
      <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl w-full max-w-xs">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono text-xs text-blue-400">
          <span className="text-neutral-500">// Model Output</span><br />
          {`{`}<br />
          &nbsp;&nbsp;"tool": "refund_api",<br />
          &nbsp;&nbsp;"args": {`{ "order_id": "EX-99" }`}<br />
          {`}`}
        </div>
      </div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight className="text-blue-500 rotate-90" size={32} />
      </motion.div>
      <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
        <Wrench size={40} />
      </div>
    </div>
  </div>
);

// --- 18. Use Case (Slide 18: Use Case) ---
export const UseCaseFlow = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-4">
    <div className="flex gap-4 items-center">
      <div className="p-4 bg-neutral-50 border border-neutral-100 rounded-xl flex flex-col items-center gap-2">
        <FileJson size={24} className="text-neutral-400" />
        <span className="text-[8px] font-bold uppercase">Raw Data</span>
      </div>
      <ArrowRight className="text-neutral-300" />
      <div className="p-6 bg-blue-600 rounded-2xl flex flex-col items-center gap-2 text-white shadow-lg">
        <BrainCircuit size={32} />
        <span className="text-[8px] font-bold uppercase">Agent 1</span>
      </div>
      <RefreshCw className="text-blue-200 animate-spin" />
      <div className="p-6 bg-neutral-900 rounded-2xl flex flex-col items-center gap-2 text-white shadow-lg">
        <Eye size={32} />
        <span className="text-[8px] font-bold uppercase">Agent 2</span>
      </div>
      <ArrowRight className="text-neutral-300" />
      <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex flex-col items-center gap-2">
        <CheckCircle2 size={24} className="text-green-500" />
        <span className="text-[8px] font-bold uppercase">Shopify</span>
      </div>
    </div>
  </div>
);

// --- 20. Future (Slide 20: Future) ---
export const RoadmapTimeline = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-950 p-4">
    <div className="relative w-full max-w-2xl">
      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-neutral-900 -translate-x-1/2" />
      {[
        { time: "Q1 2025", task: "RAG Pilot", side: "left" },
        { time: "Q2 2025", task: "LangGraph Integration", side: "right" },
        { time: "Q4 2025", task: "Autonomous Ops", side: "left" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className={`relative flex items-center mb-12 last:mb-0 ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          <div className={`w-1/2 ${item.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
            <div className="text-xs font-black text-blue-500 mb-1">{item.time}</div>
            <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl text-white font-bold shadow-xl">
              {item.task}
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-neutral-950 z-10" />
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 21. AI Structure (Slide 2: Gen AI) ---
export const AIStructure = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-8">
    <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
      {/* Outer Circle: AI */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute w-full h-full rounded-full border-2 border-blue-100 bg-blue-50/30 flex items-start justify-center pt-8"
      >
        <span className="text-[10px] font-black text-blue-300 uppercase tracking-widest text-center px-4">Artificial Intelligence</span>
      </motion.div>
      
      {/* Middle Circle: ML */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute w-[70%] h-[70%] rounded-full border-2 border-blue-200 bg-blue-100/40 flex items-start justify-center pt-8"
      >
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center px-4">Machine Learning</span>
      </motion.div>
      
      {/* Inner Circle: DL */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute w-[40%] h-[40%] rounded-full border-2 border-blue-300 bg-blue-200/50 flex items-center justify-center shadow-inner"
      >
        <div className="flex flex-col items-center">
          <BrainCircuit size={32} className="text-blue-600 mb-1" />
          <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest text-center px-2">Deep Learning</span>
        </div>
      </motion.div>
      
      {/* Gen AI Highlight */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-4 top-1/2 -translate-y-1/2 p-4 bg-blue-600 rounded-2xl text-white shadow-2xl z-10"
      >
        <div className="flex items-center gap-2 mb-1">
          <Zap size={16} className="text-yellow-400" />
          <span className="font-black text-sm uppercase italic">Gen AI</span>
        </div>
        <p className="text-[8px] font-medium opacity-80 leading-tight">Generates original content<br/>from learned patterns</p>
      </motion.div>
    </div>
  </div>
);

// --- 22. Basic AI Concepts (Slide 3: AI Concepts) ---
export const AIConceptsCircular = () => {
  const concepts = [
    { name: "Chatbots", icon: MessageCircle, color: "#60a5fa" },
    { name: "NLP", icon: MessageSquare, color: "#818cf8" },
    { name: "Computer Vision", icon: Eye, color: "#c084fc" },
    { name: "Supervised", icon: Target, color: "#34d399" },
    { name: "Unsupervised", icon: Network, color: "#2dd4bf" },
    { name: "Reinforcement", icon: Trophy, color: "#fbbf24" },
    { name: "Anomaly Detection", icon: AlertTriangle, color: "#fb7185" },
    { name: "Speech Recognition", icon: Activity, color: "#22d3ee" },
    { name: "Neural Networks", icon: BrainCircuit, color: "#93c5fd" },
    { name: "Machine Learning", icon: Cpu, color: "#3b82f6" },
    { name: "Deep Learning", icon: Layers, color: "#6366f1" },
    { name: "Artificial\nIntelligence", icon: Brain, color: "#60a5fa" },
  ];

  const cx = 250;
  const cy = 250;
  const radius = 170;

  return (
    <div className="w-full h-full flex items-center justify-center bg-neutral-950 overflow-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full max-h-full max-w-full">
        {/* Connecting lines */}
        {concepts.map((_, i) => {
          const angle = (i / concepts.length) * 2 * Math.PI - Math.PI / 2;
          const x2 = cx + Math.cos(angle) * radius;
          const y2 = cy + Math.sin(angle) * radius;
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={x2} y2={y2}
              stroke="white"
              strokeWidth="0.5"
              opacity="0.15"
            />
          );
        })}

        {/* Central Hub */}
        <circle cx={cx} cy={cy} r={52} fill="#2563eb" opacity="0.15" />
        <circle cx={cx} cy={cy} r={44} fill="#2563eb" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">BASIC AI</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">CONCEPTS</text>

        {/* Orbiting nodes */}
        {concepts.map((concept, i) => {
          const angle = (i / concepts.length) * 2 * Math.PI - Math.PI / 2;
          const nx = cx + Math.cos(angle) * radius;
          const ny = cy + Math.sin(angle) * radius;
          const Icon = concept.icon;
          const lines = concept.name.split("\n");

          return (
            <g key={i}>
              {/* Node background */}
              <rect
                x={nx - 20} y={ny - 20}
                width={40} height={40}
                rx={8}
                fill="#171717"
                stroke="#262626"
                strokeWidth="1"
              />
              {/* Icon rendered as foreignObject */}
              <foreignObject x={nx - 12} y={ny - 12} width={24} height={24}>
                <div
                  // @ts-ignore
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}
                >
                  <Icon size={16} color={concept.color} />
                </div>
              </foreignObject>
              {/* Label */}
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={nx}
                  y={ny + 28 + li * 10}
                  textAnchor="middle"
                  fill="#9ca3af"
                  fontSize="7"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  letterSpacing="0.3"
                >
                  {line.toUpperCase()}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// --- 23. ML Types (Slide 4: ML Types) ---
export const MLTypes = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-6">
    <div className="flex gap-4 w-full max-w-md justify-center items-stretch">
      {[
        { 
          title: "Supervised", 
          icon: Target, 
          bgColor: "bg-emerald-50",
          titleColor: "text-emerald-600",
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-600",
          steps: ["Labeled Data", "Model Training", "Prediction"],
          desc: "Learning with a teacher"
        },
        { 
          title: "Unsupervised", 
          icon: Network, 
          bgColor: "bg-blue-50",
          titleColor: "text-blue-600",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          steps: ["Raw Data", "Pattern Discovery", "Clustering"],
          desc: "Finding hidden structures"
        },
        { 
          title: "Reinforcement", 
          icon: Trophy, 
          bgColor: "bg-amber-50",
          titleColor: "text-amber-600",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-600",
          steps: ["Environment", "Action/Reward", "Agent Learning"],
          desc: "Learning by trial and error"
        }
      ].map((type, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`flex-1 min-w-0 ${type.bgColor} rounded-[2rem] flex flex-col items-center text-center px-3 py-6`}
        >
          {/* Title */}
          <h4 className={`font-black uppercase tracking-widest text-[10px] ${type.titleColor} mb-2`}>{type.title}</h4>

          {/* Description */}
          <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider leading-snug mb-4">{type.desc}</p>

          {/* Icon */}
          <div className={`w-12 h-12 ${type.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
            <type.icon size={24} className={type.iconColor} />
          </div>

          {/* Steps */}
          <div className="space-y-4 mt-auto">
            {type.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <span className="text-[10px] font-bold text-neutral-700 uppercase tracking-wide">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 24. ML Building Model (Slide 5: ML Building) ---
export const MLBuildingModel = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-8">
    <div className="w-full max-w-full flex flex-col gap-8">
      {/* Top Row: Data Prep */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <Database size={24} className="text-blue-500 mb-2" />
          <span className="text-[10px] font-black uppercase">Initial Dataset</span>
        </div>
        <ArrowRight className="text-neutral-300" />
        <div className="flex-[2] p-4 bg-blue-600 rounded-2xl text-white shadow-lg flex flex-col items-center">
          <Wrench size={24} className="mb-2" />
          <span className="text-[10px] font-black uppercase">Data Cleaning & Curation</span>
          <p className="text-[8px] opacity-70 mt-1">Removing redundant features</p>
        </div>
        <ArrowRight className="text-neutral-300" />
        <div className="flex-1 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <FileJson size={24} className="text-green-500 mb-2" />
          <span className="text-[10px] font-black uppercase">Processed Data</span>
        </div>
      </div>

      {/* Middle Row: Splitting */}
      <div className="flex items-center justify-center gap-3">
        <div className="relative p-6 bg-white rounded-3xl border-2 border-dashed border-blue-200 flex flex-col items-center">
          <Split size={32} className="text-blue-600 mb-2" />
          <span className="text-[10px] font-black uppercase">Data Splitting</span>
          <div className="flex gap-4 mt-4">
            <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] font-bold">80% Training</div>
            <div className="px-3 py-1 bg-neutral-50 text-neutral-500 rounded-full text-[8px] font-bold">20% Test</div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Training & Eval */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 p-4 bg-indigo-600 rounded-2xl text-white shadow-lg flex flex-col items-center">
          <Cpu size={24} className="mb-2" />
          <span className="text-[10px] font-black uppercase text-center">Training (KNN, LR)</span>
        </div>
        <ArrowRight className="text-neutral-300" />
        <div className="flex-1 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col items-center">
          <Shield size={24} className="text-indigo-500 mb-2" />
          <span className="text-[10px] font-black uppercase">Trained Model</span>
        </div>
        <ArrowRight className="text-neutral-300" />
        <div className="flex-1 p-4 bg-emerald-600 rounded-2xl text-white shadow-lg flex flex-col items-center">
          <BarChart3 size={24} className="mb-2" />
          <span className="text-[10px] font-black uppercase text-center">Evaluation</span>
          <p className="text-[8px] opacity-70 mt-1">Classification / Regression</p>
        </div>
      </div>
    </div>
  </div>
);

// --- 25. ML vs DL (Slide 6: ML vs DL) ---
export const MLvsDL = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8">
    <div className="w-full max-w-2xl space-y-12">
      {/* Machine Learning Row */}
      <div className="relative">
        <div className="absolute -top-6 left-0 text-[10px] font-black text-neutral-400 uppercase tracking-widest">Machine Learning</div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400">
            <Zap size={24} />
          </div>
          <ArrowRight className="text-neutral-200" />
          <div className="flex-1 p-4 bg-white border-2 border-blue-100 rounded-2xl flex flex-col items-center shadow-sm">
            <Users size={20} className="text-blue-500 mb-2" />
            <span className="text-[10px] font-bold uppercase text-blue-600">Feature Extraction</span>
            <span className="text-[8px] text-neutral-400 uppercase tracking-tighter">(Manual by Human)</span>
          </div>
          <ArrowRight className="text-neutral-200" />
          <div className="flex-1 p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl flex flex-col items-center">
            <Target size={20} className="text-blue-600 mb-2" />
            <span className="text-[10px] font-bold uppercase text-blue-700">Classification</span>
          </div>
          <ArrowRight className="text-neutral-200" />
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 size={24} />
          </div>
        </div>
      </div>

      {/* Deep Learning Row */}
      <div className="relative">
        <div className="absolute -top-6 left-0 text-[10px] font-black text-blue-600 uppercase tracking-widest">Deep Learning</div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-400">
            <Zap size={24} />
          </div>
          <ArrowRight className="text-neutral-200" />
          <div className="flex-[2] p-6 bg-blue-600 rounded-3xl flex flex-col items-center justify-center text-white shadow-xl relative overflow-hidden">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
            />
            <Layers size={32} className="mb-2" />
            <span className="text-[10px] font-black uppercase">Feature Extraction + Classification</span>
            <span className="text-[8px] opacity-70 uppercase tracking-tighter mt-1">(Automated Neural Network)</span>
          </div>
          <ArrowRight className="text-neutral-200" />
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 size={24} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 26. Python Tokenization (Slide 8: Tokenization) ---
export const PythonTokenization = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-4 overflow-hidden">
    <div className="w-full space-y-3">
      {/* Visual Process */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 p-2 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col items-center">
          <MessageSquare size={16} className="text-blue-400 mb-1" />
          <span className="text-[8px] font-bold text-white uppercase tracking-tighter">"Hello World"</span>
        </div>
        <ArrowRight className="text-neutral-700 w-3 h-3 flex-shrink-0" />
        <div className="flex-[2] p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl flex flex-wrap gap-1 justify-center">
          {["Hel", "lo", "Wor", "ld"].map((t, i) => (
            <span key={i} className="px-1.5 py-0.5 bg-blue-600 text-white text-[8px] font-mono rounded">{t}</span>
          ))}
        </div>
        <ArrowRight className="text-neutral-700 w-3 h-3 flex-shrink-0" />
        <div className="flex-1 p-2 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col items-center">
          <Binary size={16} className="text-green-400 mb-1" />
          <span className="text-[8px] font-mono text-green-400 tracking-tighter">[15496, 995]</span>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="bg-neutral-800 px-3 py-1.5 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[9px] font-mono text-neutral-500">tokenization.py</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed">
          <div className="text-purple-400">from <span className="text-white">transformers</span> import <span className="text-white">AutoTokenizer</span></div>
          <div className="text-neutral-500 mt-1"># Load pre-trained tokenizer</div>
          <div className="text-white">tokenizer = AutoTokenizer.from_pretrained(<span className="text-emerald-400">"gpt2"</span>)</div>
          <div className="text-white mt-1">tokens = tokenizer.tokenize(<span className="text-emerald-400">"Hello world!"</span>)</div>
          <div className="text-white">ids = tokenizer.convert_tokens_to_ids(tokens)</div>
          <div className="text-blue-400 mt-1">print<span className="text-white">(ids)</span></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 27. Python Embeddings (Slide 9: Embeddings) ---
export const PythonEmbeddings = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-4 overflow-hidden">
    <div className="w-full space-y-3">
      {/* Visual Process */}
      <div className="relative h-20 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-bold rounded-full mb-1">"King"</div>
            <ArrowRightCircle size={14} className="text-blue-500" />
          </div>
          <div className="w-24 h-12 bg-blue-600/10 border border-blue-500/30 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-4 gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-3 h-0.5 bg-blue-500/50 rounded-full" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded-full mb-1">"Queen"</div>
            <ArrowRightCircle size={14} className="text-emerald-500 rotate-180" />
          </div>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="bg-neutral-800 px-3 py-1.5 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[9px] font-mono text-neutral-500">embeddings.py</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed">
          <div className="text-purple-400">from <span className="text-white">sentence_transformers</span> import <span className="text-white">SentenceTransformer</span></div>
          <div className="text-white mt-1">model = SentenceTransformer(<span className="text-emerald-400">'all-MiniLM-L6-v2'</span>)</div>
          <div className="text-white mt-1">sentences = [<span className="text-emerald-400">"This is an example sentence"</span>]</div>
          <div className="text-white">embeddings = model.encode(sentences)</div>
          <div className="text-blue-400 mt-1">print<span className="text-white">(embeddings.shape)</span></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 28. Python Training (Slide 10: Training) ---
export const PythonTraining = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-4 overflow-hidden">
    <div className="w-full space-y-3">
      {/* Visual Process */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center text-neutral-400">
            <Database size={18} />
          </div>
          <span className="text-[7px] font-bold text-neutral-500 uppercase">Dataset</span>
        </div>
        <div className="text-neutral-700 text-sm">+</div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
            <Brain size={18} />
          </div>
          <span className="text-[7px] font-bold text-blue-500 uppercase">Pre-trained</span>
        </div>
        <ArrowRight className="text-neutral-700 w-3 h-3" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          <Zap size={24} />
        </motion.div>
        <ArrowRight className="text-neutral-700 w-3 h-3" />
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-emerald-600/20 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400">
            <Trophy size={18} />
          </div>
          <span className="text-[7px] font-bold text-emerald-500 uppercase">Fine-tuned</span>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="bg-neutral-800 px-3 py-1.5 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[9px] font-mono text-neutral-500">fine_tune.py</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed">
          <div className="text-purple-400">from <span className="text-white">transformers</span> import <span className="text-white">Trainer, TrainingArguments</span></div>
          <div className="text-white mt-1">training_args = TrainingArguments(</div>
          <div className="text-white">&nbsp;&nbsp;output_dir=<span className="text-emerald-400">"./results"</span>,</div>
          <div className="text-white">&nbsp;&nbsp;num_train_epochs=<span className="text-white">3</span></div>
          <div className="text-white">)</div>
          <div className="text-white mt-1">trainer = Trainer(</div>
          <div className="text-white">&nbsp;&nbsp;model=model, args=training_args,</div>
          <div className="text-white">&nbsp;&nbsp;train_dataset=dataset</div>
          <div className="text-white">)</div>
          <div className="text-white mt-1">trainer.train()</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 29. Ollama Server (Slide 12: Ollama) ---
export const OllamaServer = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-4 overflow-hidden">
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center">
          <Database size={20} className="text-blue-400 mb-2" />
          <span className="text-[9px] font-black text-white uppercase tracking-widest">Local Models</span>
          <div className="flex gap-1.5 mt-2">
            <span className="px-1.5 py-0.5 bg-blue-600/20 text-blue-400 text-[8px] font-bold rounded border border-blue-500/30">Llama 3</span>
            <span className="px-1.5 py-0.5 bg-blue-600/20 text-blue-400 text-[8px] font-bold rounded border border-blue-500/30">Mistral</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-3 bg-blue-600 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            <Server size={24} className="text-white" />
          </div>
        </div>
        <div className="flex-1 p-3 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center">
          <Globe size={20} className="text-emerald-400 mb-2" />
          <span className="text-[9px] font-black text-white uppercase tracking-widest">REST API</span>
          <p className="text-[8px] text-neutral-500 uppercase mt-1">localhost:11434</p>
        </div>
      </div>
      
      <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
        <div className="bg-neutral-800 px-3 py-1.5 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[9px] font-mono text-neutral-500">ollama.sh</span>
        </div>
        <div className="p-3 font-mono text-[10px] leading-relaxed">
          <div className="text-emerald-400">$ <span className="text-white">ollama run llama3</span></div>
          <div className="text-neutral-500 mt-1">pulling manifest... verifying sha256...</div>
          <div className="text-blue-400 mt-1">success</div>
          <div className="text-white mt-1">{">>>"} <span className="text-neutral-400">Hello! How can I help?</span></div>
        </div>
      </div>
    </div>
  </div>
);

// --- 30. LLM Process (Slide 5: LLM Process) ---
export const LLMProcess = () => (
  <div className="w-full h-full flex items-center justify-center bg-white overflow-hidden">
    <svg viewBox="0 0 200 420" className="w-full h-full max-w-full max-h-full">
      <defs>
        <pattern id="llm-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#000" opacity="0.03" />
        </pattern>
        <marker id="arr-v" viewBox="0 0 8 8" refX="4" refY="1" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L4 8 L8 0z" fill="#d1d5db" />
        </marker>
      </defs>
      <rect width="200" height="420" fill="url(#llm-dots)" />

      {/* ── Step 1: Raw Text ── */}
      <rect x="60" y="8" width="80" height="64" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="70" y={18 + i * 9} width={i % 2 === 0 ? 60 : 42} height="3" rx="1.5" fill="#e5e7eb" />
      ))}
      <text x="100" y="84" textAnchor="middle" fill="#9ca3af" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">RAW TEXT</text>

      {/* Arrow 1 */}
      <line x1="100" y1="92" x2="100" y2="108" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#arr-v)" />

      {/* ── Step 2: Tokens ── */}
      <rect x="50" y="112" width="100" height="52" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      {[["Hel","#2563eb"],["lo","#2563eb"],["Wor","#2563eb"],["ld","#2563eb"]].map(([t, c], i) => (
        <g key={i}>
          <rect x={57 + (i % 2) * 44} y={120 + Math.floor(i / 2) * 18} width={36} height={13} rx="4" fill={c as string} />
          <text x={75 + (i % 2) * 44} y={130 + Math.floor(i / 2) * 18} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="monospace">{t}</text>
        </g>
      ))}
      <text x="100" y="176" textAnchor="middle" fill="#2563eb" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">TOKENS</text>

      {/* Arrow 2 */}
      <line x1="100" y1="182" x2="100" y2="198" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#arr-v)" />

      {/* ── Step 3: Transformer ── */}
      <rect x="40" y="202" width="120" height="80" rx="20" fill="#171717" />
      <circle cx="100" cy="252" r="36" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />
      <circle cx="100" cy="252" r="22" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />
      <foreignObject x="84" y="236" width="32" height="32">
        <div
          // @ts-ignore
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%" }}
        >
          <Cpu size={28} color="#60a5fa" />
        </div>
      </foreignObject>
      <text x="100" y="276" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">TRANSFORMER</text>
      <circle cx="90" cy="288" r="2.5" fill="#60a5fa" opacity="0.8" />
      <circle cx="100" cy="288" r="2.5" fill="#60a5fa" opacity="0.55" />
      <circle cx="110" cy="288" r="2.5" fill="#60a5fa" opacity="0.3" />

      {/* Arrow 3 */}
      <line x1="100" y1="306" x2="100" y2="322" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#arr-v)" />

      {/* ── Step 4: Fine-tuned output ── */}
      <rect x="60" y="326" width="80" height="68" rx="10" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1.5" />
      <foreignObject x="84" y="334" width="32" height="28">
        <div
          // @ts-ignore
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:"100%" }}
        >
          <Trophy size={22} color="#16a34a" />
        </div>
      </foreignObject>
      <rect x="68" y="366" width="64" height="3" rx="1.5" fill="#bbf7d0" />
      <rect x="74" y="374" width="52" height="3" rx="1.5" fill="#bbf7d0" />
      <text x="100" y="406" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">FINE-TUNED</text>
    </svg>
  </div>
);

// --- 31. Prompt Anatomy (Slide 13: Prompt) ---
export const PromptAnatomy = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-4 overflow-hidden">
    <div className="w-full grid h-ful items-center">
           <div className="bg-neutral-950 rounded-2xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden h-40">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
        <MessageSquare size={40} className="text-blue-500 mb-3" />
        <h4 className="text-white font-black uppercase tracking-tighter text-lg mb-2">The Perfect Prompt</h4>
        <p className="text-neutral-400 text-[10px] leading-relaxed">
          Combining these elements creates a high-fidelity instruction set that minimizes hallucinations.
        </p>
        <div className="mt-4 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {[
          { label: "Role", color: "bg-blue-600", text: "You are a Senior Data Scientist..." },
          { label: "Task", color: "bg-emerald-600", text: "Analyze the following sales data..." },
          { label: "Instructions", color: "bg-indigo-600", text: "1. Identify trends, 2. Flag outliers..." },
          { label: "Context", color: "bg-amber-600", text: "The data is from Q4 2024..." },
          { label: "Format", color: "bg-rose-600", text: "Output as a JSON object." }
        ].map((part, i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`w-20 px-2 py-1 ${part.color} text-white text-[8px] font-black uppercase tracking-wider rounded-lg text-center flex-shrink-0`}>
              {part.label}
            </div>
            <div className="flex-1 p-2 bg-neutral-50 border border-neutral-100 rounded-lg text-[9px] text-neutral-600 italic truncate">
              {part.text}
            </div>
          </motion.div>
        ))}
      </div>
      

    </div>
  </div>
);

// --- 32. LLM Works Detailed (Slide 14: How LLM Works) ---
export const LLMWorksDetailed = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-3 overflow-hidden">
    <div className="w-full space-y-2">
      <h3 className="text-center font-black text-base text-red-700 uppercase tracking-tighter">How LLM Works</h3>
      
      <div className="grid grid-cols-5 gap-1.5 relative">
        {/* Row 1: Red Path */}
        {[
          { title: "Data Collection", desc: "Gather vast text data.", icon: Database, color: "bg-red-700" },
          { title: "Data Cleaning", desc: "Remove personal info.", icon: Wrench, color: "bg-red-700" },
          { title: "Categorization", desc: "Classify text.", icon: Filter, color: "bg-red-700" },
          { title: "Tokenization", desc: "Break into tokens.", icon: Scissors, color: "bg-red-700" },
          { title: "Vocabulary", desc: "Create word list.", icon: BookOpen, color: "bg-red-700" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-full p-1.5 ${item.color} text-white rounded-t-lg flex flex-col items-center gap-0.5`}>
              <item.icon size={12} />
              <span className="text-[7px] font-black uppercase text-center leading-tight">{item.title}</span>
            </div>
            <div className="w-full p-1 bg-white border-x border-b border-neutral-100 rounded-b-lg flex items-center justify-center text-center h-8">
              <p className="text-[7px] font-bold text-neutral-600 leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* Row 2: Teal Path */}
        {[
          { title: "Embedding", desc: "Create vectors", icon: Layers, color: "bg-cyan-700" },
          { title: "Model Build", desc: "Neural network.", icon: Cpu, color: "bg-cyan-700" },
          { title: "Init Training", desc: "Predict next word.", icon: Brain, color: "bg-cyan-700" },
          { title: "Supervised", desc: "Train with labels.", icon: Users, color: "bg-cyan-700" },
          { title: "Demo Data", desc: "Desired examples.", icon: FileText, color: "bg-cyan-700" }
        ].reverse().map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-full p-1.5 ${item.color} text-white rounded-t-lg flex flex-col items-center gap-0.5`}>
              <item.icon size={12} />
              <span className="text-[7px] font-black uppercase text-center leading-tight">{item.title}</span>
            </div>
            <div className="w-full p-1 bg-white border-x border-b border-neutral-100 rounded-b-lg flex items-center justify-center text-center h-8">
              <p className="text-[7px] font-bold text-neutral-600 leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* Row 3: Purple Path */}
        {[
          { title: "Reward Model", desc: "Rank outputs.", icon: Trophy, color: "bg-cyan-900" },
          { title: "Fine-Tuning", desc: "Specific datasets.", icon: Zap, color: "bg-purple-700" },
          { title: "Testing", desc: "Ensure accuracy.", icon: ShieldCheck, color: "bg-purple-700" },
          { title: "Deployment", desc: "Deploy on servers.", icon: Server, color: "bg-purple-700" },
          { title: "User Interact", desc: "Process inputs.", icon: MessageSquare, color: "bg-purple-700" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-full p-1.5 ${item.color} text-white rounded-t-lg flex flex-col items-center gap-0.5`}>
              <item.icon size={12} />
              <span className="text-[7px] font-black uppercase text-center leading-tight">{item.title}</span>
            </div>
            <div className="w-full p-1 bg-white border-x border-b border-neutral-100 rounded-b-lg flex items-center justify-center text-center h-8">
              <p className="text-[7px] font-bold text-neutral-600 leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}

        {/* Final: Green Path */}
        <div className="col-start-5 flex flex-col items-center">
          <div className="w-full p-1.5 bg-emerald-900 text-white rounded-t-lg flex flex-col items-center gap-0.5">
            <Gauge size={12} />
            <span className="text-[7px] font-black uppercase text-center leading-tight">Performance</span>
          </div>
          <div className="w-full p-1 bg-white border-x border-b border-neutral-100 rounded-b-lg flex items-center justify-center text-center h-8">
            <p className="text-[7px] font-bold text-neutral-600 leading-tight">Track performance.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 33. Detailed RAG Architecture ---
export const DetailedRAGArchitecture = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50 p-8 overflow-hidden">
    <div className="relative w-full max-w-full h-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-5 gap-4 w-full h-full">
        {/* User & Orchestrator */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="p-6 bg-white rounded-3xl border-2 border-neutral-200 shadow-sm flex flex-col items-center gap-2"
          >
            <Users size={32} className="text-neutral-700" />
            <span className="text-[10px] font-black uppercase">User</span>
          </motion.div>
          <ArrowRight className="text-neutral-300" />
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-blue-600 rounded-3xl shadow-lg flex flex-col items-center gap-2 text-white"
          >
            <Workflow size={32} />
            <span className="text-[10px] font-black uppercase">Orchestrator</span>
          </motion.div>
        </div>

        {/* Retriever & Knowledge */}
        <div className="col-span-3 flex flex-col items-center justify-center gap-8 border-x-2 border-dashed border-neutral-200 px-8">
          <div className="flex items-center gap-8 w-full justify-center">
             <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-emerald-600 rounded-3xl shadow-lg flex flex-col items-center gap-2 text-white"
            >
              <Search size={32} />
              <span className="text-[10px] font-black uppercase">Retriever</span>
            </motion.div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="text-neutral-300" />
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center gap-2">
                  <Globe size={16} className="text-blue-500" />
                  <span className="text-[8px] font-bold uppercase">Web Search</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="text-neutral-300" />
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center gap-2">
                  <Database size={16} className="text-emerald-500" />
                  <span className="text-[8px] font-bold uppercase">Vector DB</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="text-neutral-300" />
                <div className="p-3 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center gap-2">
                  <FileText size={16} className="text-amber-500" />
                  <span className="text-[8px] font-bold uppercase">Documents</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-neutral-200 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-neutral-50 text-[8px] font-black uppercase text-neutral-400">Context Augmentation</div>
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4 bg-neutral-900 rounded-2xl border border-neutral-800 w-full max-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-[8px] font-mono text-neutral-400 leading-tight">
              <span className="text-emerald-400">Prompt:</span> "What are the sales for Q4?"<br/>
              <span className="text-blue-400">Context:</span> "Q4 sales were $1.2M, up 15%..."<br/>
              <span className="text-purple-400">Augmented:</span> "Use the context below to answer: Q4 sales were $1.2M..."
            </p>
          </motion.div>
        </div>

        {/* LLM & Response */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-8">
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="p-6 bg-purple-600 rounded-3xl shadow-lg flex flex-col items-center gap-2 text-white"
          >
            <Brain size={32} />
            <span className="text-[10px] font-black uppercase">LLM</span>
          </motion.div>
          <ArrowRight className="text-neutral-300" />
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="p-6 bg-white rounded-3xl border-2 border-neutral-200 shadow-sm flex flex-col items-center gap-2"
          >
            <MessageSquare size={32} className="text-neutral-700" />
            <span className="text-[10px] font-black uppercase">Response</span>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

// --- 34. RAG Indexing Code 1 ---
export const RAGIndexingCode1 = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-8">
    <div className="w-full max-w-full grid grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl text-white">
            <FileCode size={24} />
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-tighter text-xl">Loading & Splitting</h4>
            <p className="text-neutral-400 text-xs">Preparing data for the vector space.</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { title: "TextLoader", desc: "Extracts raw text from files.", icon: FileText },
            { title: "RecursiveCharacterTextSplitter", desc: "Intelligent chunking with overlap.", icon: Scissors },
            { title: "Context Window", desc: "Ensures chunks fit LLM limits.", icon: Layout }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center gap-4">
              <item.icon size={20} className="text-blue-400" />
              <div>
                <span className="text-[10px] font-black text-white uppercase">{item.title}</span>
                <p className="text-[8px] text-neutral-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl flex flex-col">
        <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500">indexing_pipeline.py</span>
        </div>
        <div className="p-6 font-mono text-[10px] leading-relaxed overflow-auto">
          <div className="text-neutral-500"># 1. Load the document</div>
          <div className="text-blue-400">from <span className="text-white">langchain.document_loaders</span> import <span className="text-white">TextLoader</span></div>
          <div className="text-white mt-1">loader = TextLoader(<span className="text-emerald-400">'data.txt'</span>)</div>
          <div className="text-white">docs = loader.load()</div>
          
          <div className="text-neutral-500 mt-4"># 2. Split into chunks</div>
          <div className="text-blue-400">from <span className="text-white">langchain.text_splitter</span> import <span className="text-white">RecursiveCharacterTextSplitter</span></div>
          <div className="text-white mt-1">text_splitter = RecursiveCharacterTextSplitter(</div>
          <div className="text-white ml-4">chunk_size = <span className="text-amber-400">1000</span>,</div>
          <div className="text-white ml-4">chunk_overlap = <span className="text-amber-400">200</span></div>
          <div className="text-white">)</div>
          <div className="text-white mt-1">chunks = text_splitter.split_documents(docs)</div>
          
          <div className="text-emerald-400 mt-4">print(<span className="text-white">f"Created {"{len(chunks)}"} chunks"</span>)</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 35. RAG Indexing Code 2 ---
export const RAGIndexingCode2 = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 p-8">
    <div className="w-full max-w-full grid grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-600 rounded-2xl text-white">
            <DatabaseZap size={24} />
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-tighter text-xl">Embed & Store</h4>
            <p className="text-neutral-400 text-xs">Turning text into searchable vectors.</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { title: "OpenAIEmbeddings", desc: "High-quality semantic vectors.", icon: Brain },
            { title: "FAISS", desc: "Efficient local vector storage.", icon: Box },
            { title: "Similarity Search", desc: "Finding context via math.", icon: Search }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center gap-4">
              <item.icon size={20} className="text-emerald-400" />
              <div>
                <span className="text-[10px] font-black text-white uppercase">{item.title}</span>
                <p className="text-[8px] text-neutral-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl flex flex-col">
        <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500">vector_store.py</span>
        </div>
        <div className="p-6 font-mono text-[10px] leading-relaxed overflow-auto">
          <div className="text-neutral-500"># 3. Create Embeddings</div>
          <div className="text-blue-400">from <span className="text-white">langchain.embeddings</span> import <span className="text-white">OpenAIEmbeddings</span></div>
          <div className="text-white mt-1">embeddings = OpenAIEmbeddings()</div>
          
          <div className="text-neutral-500 mt-4"># 4. Store in FAISS</div>
          <div className="text-blue-400">from <span className="text-white">langchain.vectorstores</span> import <span className="text-white">FAISS</span></div>
          <div className="text-white mt-1">vector_store = FAISS.from_documents(</div>
          <div className="text-white ml-4">chunks,</div>
          <div className="text-white ml-4">embeddings</div>
          <div className="text-white">)</div>
          
          <div className="text-neutral-500 mt-4"># 5. Query the store</div>
          <div className="text-white">query = <span className="text-emerald-400">"What are the Q4 results?"</span></div>
          <div className="text-white">results = vector_store.similarity_search(query)</div>
          
          <div className="text-emerald-400 mt-4">print(<span className="text-white">results[0].page_content</span>)</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 36. Vector DB Comparison ---
export const VectorDBComparison = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white p-8">
    <div className="w-full max-w-full">
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { name: "Pure Vector DB", icon: DatabaseZap, color: "text-blue-600", items: ["Pinecone", "Milvus", "Weaviate", "Chroma"] },
          { name: "NoSQL + Vector", icon: Database, color: "text-emerald-600", items: ["MongoDB", "Redis", "Cassandra", "Elasticsearch"] },
          { name: "SQL + Vector", icon: Table, color: "text-amber-600", items: ["PostgreSQL", "SingleStore", "ClickHouse", "Kinetica"] },
          { name: "Vector Libraries", icon: Box, color: "text-purple-600", items: ["FAISS", "Annoy", "Hnswlib", "Scann"] }
        ].map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col items-center text-center"
          >
            <cat.icon size={32} className={`${cat.color} mb-4`} />
            <span className="text-[10px] font-black uppercase mb-4">{cat.name}</span>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.items.map((item, j) => (
                <span key={j} className="px-2 py-1 bg-white border border-neutral-200 rounded-lg text-[8px] font-bold text-neutral-600">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-neutral-900 rounded-3xl p-4 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BarChart3 size={120} />
        </div>
        <h4 className="font-black uppercase tracking-tighter text-2xl mb-6">Traditional vs Vector</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">Traditional DB</span>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-red-500" />
                <span className="text-xs">Exact keyword matching</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-red-500" />
                <span className="text-xs">Structured tabular data</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-red-500" />
                <span className="text-xs">ACID compliance focused</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Vector DB</span>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span className="text-xs">Semantic similarity matching</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span className="text-xs">Unstructured data (Text, Image)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span className="text-xs">High-dimensional search</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- 37. Advanced RAG Types ---
export const AdvancedRAGTypes = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50 p-8">
    <div className="w-full max-w-full">
      <div className="grid grid-cols-3 gap-6">
        {[
          { title: "Self-RAG", desc: "Self-reflection and grading of retrieved documents.", icon: RefreshCw, color: "bg-blue-500" },
          { title: "Corrective RAG", desc: "Using web search as fallback for low-quality retrieval.", icon: ShieldCheck, color: "bg-emerald-500" },
          { title: "Adaptive RAG", desc: "Routing queries to different strategies based on complexity.", icon: GitBranch, color: "bg-purple-500" },
          { title: "Multi-Query", desc: "Generating multiple queries to improve recall.", icon: Share2, color: "bg-amber-500" },
          { title: "Re-Ranking", desc: "Using a cross-encoder to refine top results.", icon: Milestone, color: "bg-red-500" },
          { title: "Graph RAG", desc: "Leveraging knowledge graphs for complex relationships.", icon: Network, color: "bg-indigo-500" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
              <item.icon size={24} />
            </div>
            <h4 className="text-sm font-black uppercase mb-2">{item.title}</h4>
            <p className="text-[10px] text-neutral-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// --- 39. Agent Evolution ---
export const AgentEvolution = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50 p-8">
    <div className="w-full max-w-full space-y-4">
      {[
        { step: "1", title: "LLM Processing Flow", desc: "Text Input → LLM → Text Output (No Memory)", color: "bg-amber-500" },
        { step: "2", title: "LLM with Document Processing", desc: "Summarization & Extraction from Files", color: "bg-orange-500" },
        { step: "3", title: "LLM with RAG & Tools", desc: "External Knowledge + API Integration", color: "bg-blue-500" },
        { step: "4", title: "Multi-Modal Workflow", desc: "Text, Images, Audio, Video Processing", color: "bg-indigo-500" },
        { step: "5", title: "Agentic Architecture", desc: "Decision Making + Short/Long Term Memory", color: "bg-emerald-500" },
        { step: "6", title: "Multi-Agent Systems", desc: "Collaborative Specialized Agents", color: "bg-purple-600" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm"
        >
          <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white font-black`}>
            {item.step}
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
            <p className="text-xs text-neutral-500">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 40. Agent Anatomy (PDF) --- / User Request
export const AgentAnatomyPDF = () => (
  <div className="w-full h-full flex items-center justify-center bg-amber-50 p-4">
    <div className="relative w-full max-w-2xl aspect-video bg-white/50 backdrop-blur rounded-[40px] border-4 border-amber-200 flex flex-col items-center justify-center gap-3 p-8">
      <div className="px-8 py-4 bg-white rounded-2xl border-2 border-amber-400 shadow-lg text-amber-900 font-black uppercase tracking-widest">
        Task / User Request
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-orange-100 rounded-3xl border-4 border-orange-400 flex items-center justify-center text-orange-600 shadow-xl">
            <Wrench size={48} />
          </div>
          <span className="text-xs font-black uppercase text-orange-900">Tools</span>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-40 h-40 bg-white rounded-[40px] border-8 border-amber-500 flex flex-col items-center justify-center text-amber-600 shadow-2xl relative z-10"
        >
          <BrainCircuit size={64} />
          <span className="text-sm font-black uppercase mt-2">Agent</span>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-blue-100 rounded-3xl border-4 border-blue-400 flex items-center justify-center text-blue-600 shadow-xl">
            <Database size={48} />
          </div>
          <span className="text-xs font-black uppercase text-blue-900">Memory</span>
        </div>
      </div>

      <div className="px-8 py-4 bg-emerald-100 rounded-2xl border-2 border-emerald-400 shadow-lg text-emerald-900 font-black uppercase tracking-widest">
        Planning
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 800 450">
        <path d="M400 100 V350 M250 225 H550" stroke="currentColor" strokeWidth="4" fill="none" className="text-amber-900" />
      </svg>
    </div>
  </div>
);

// --- 41. Agent Thinking Process ---
export const AgentThinkingProcess = () => (
  <div className="w-full h-full bg-neutral-900 p-8 flex flex-col items-center justify-center">
    <div className="grid grid-cols-3 gap-8 w-full max-w-full">
      {/* Perception */}
      <div className="space-y-4">
        <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest text-center">Perception</h4>
        <div className="bg-neutral-800 p-4 rounded-3xl border border-blue-500/30 space-y-2">
          {["Text", "Audio", "Images", "Environment"].map((item, i) => (
            <div key={i} className="p-2 bg-neutral-900 rounded-xl text-[10px] text-blue-300 font-bold border border-blue-500/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Core Agent */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="w-32 h-32 bg-blue-600 rounded-[40px] flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.3)] border-4 border-blue-400">
          <BrainCircuit size={64} />
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-neutral-800 rounded-full text-[8px] font-bold text-neutral-400 uppercase">Reasoning</div>
          <div className="px-3 py-1 bg-neutral-800 rounded-full text-[8px] font-bold text-neutral-400 uppercase">Learning</div>
        </div>
      </div>

      {/* Tools/Actions */}
      <div className="space-y-4">
        <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest text-center">Actions</h4>
        <div className="bg-neutral-800 p-4 rounded-3xl border border-emerald-500/30 space-y-2">
          {["Web Search", "API Calls", "Knowledge Retrieval", "System Commands"].map((item, i) => (
            <div key={i} className="p-2 bg-neutral-900 rounded-xl text-[10px] text-emerald-300 font-bold border border-emerald-500/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Memory Section */}
    <div className="mt-12 w-full max-w-2xl grid grid-cols-2 gap-4">
      <div className="p-4 bg-neutral-800 rounded-3xl border border-purple-500/30">
        <h5 className="text-[10px] font-black text-purple-400 uppercase mb-2">Short Term</h5>
        <p className="text-[9px] text-neutral-400">Context window, working memory, recent interactions.</p>
      </div>
      <div className="p-4 bg-neutral-800 rounded-3xl border border-amber-500/30">
        <h5 className="text-[10px] font-black text-amber-400 uppercase mb-2">Long Term</h5>
        <p className="text-[9px] text-neutral-400">Vector stores, episodic memory, persistent knowledge base.</p>
      </div>
    </div>
  </div>
);

// --- 42. Agentic RAG Flow ---
export const AgenticRAGFlow = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-8">
    <div className="relative w-full max-w-full grid grid-cols-3 gap-3">
      {/* Functions */}
      <div className="space-y-4">
        <h4 className="text-xs font-black text-neutral-400 uppercase tracking-widest">Available Functions</h4>
        <div className="space-y-2">
          {["Tool Functions", "Action Functions", "LLM Functions", "Retrieval Functions"].map((item, i) => (
            <div key={i} className="p-4 bg-purple-50 rounded-2xl border-2 border-purple-100 text-purple-700 font-bold text-xs">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Agent Application */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
          <Cpu size={48} />
        </div>
        <div className="text-center">
          <p className="text-sm font-black text-neutral-900 uppercase">AI Agent Application</p>
          <p className="text-[10px] text-neutral-500">Orchestrating JSON/REST APIs</p>
        </div>
        <div className="w-full h-px bg-neutral-100 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white text-[8px] font-bold text-neutral-400 uppercase">Standard RAG Retrieval</div>
        </div>
      </div>

      {/* Knowledge Base */}
      <div className="space-y-4">
        <h4 className="text-xs font-black text-neutral-400 uppercase tracking-widest">Persistent Knowledge</h4>
        <div className="grid grid-cols-2 gap-2">
          {["Graph DB", "Vector DB", "Relational DB", "File Store"].map((item, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex flex-col items-center gap-2">
              <Database size={20} className="text-blue-600" />
              <span className="text-[8px] font-bold text-blue-800 uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 43. Agent Terms ---
export const AgentTerms = () => (
  <div className="w-full h-full bg-neutral-50 p-8 flex items-center justify-center">
    <div className="grid grid-cols-3 gap-4 w-full max-w-full">
      {[
        { title: "Statefulness", desc: "Ability to recall the past and maintain context." },
        { title: "Reflection", desc: "Agent reviews its own performance and corrects errors." },
        { title: "Autonomy", desc: "Works without being told exactly what to do." },
        { title: "Task Decomposition", desc: "Breaks a big task into smaller, manageable ones." },
        { title: "Planning", desc: "Maps out steps to reach a specific goal." },
        { title: "Agent Loop", desc: "Think → Act → Learn → Repeat cycle." },
        { title: "Context Window", desc: "The agent's working memory in a session." },
        { title: "Observability", desc: "Tracking every move and decision the agent makes." },
        { title: "Memory Retrieval", desc: "Bringing back useful info on demand." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-6 bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all group"
        >
          <h4 className="text-xs font-black uppercase text-blue-600 mb-2 group-hover:text-blue-700">{item.title}</h4>
          <p className="text-[10px] text-neutral-500 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 44. Reasoning Patterns 1 ---
export const ReasoningPatterns1 = () => (
  <div className="w-full h-full flex items-center justify-center bg-white p-8">
    <div className="grid grid-cols-2 gap-3 w-full max-w-full">
      {/* ReAct */}
      <div className="p-8 bg-neutral-900 rounded-[40px] text-white space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
            <BrainCircuit size={24} />
          </div>
          <h4 className="text-xl font-black uppercase tracking-tighter">ReAct</h4>
        </div>
        <div className="space-y-4 font-mono text-[10px]">
          <div className="text-blue-400">Thought: <span className="text-white">I need to check the weather.</span></div>
          <div className="text-emerald-400">Action: <span className="text-white">WeatherAPI("Delhi")</span></div>
          <div className="text-amber-400">Observation: <span className="text-white">28°C, Sunny</span></div>
          <div className="text-blue-400">Thought: <span className="text-white">It's sunny in Delhi.</span></div>
          <div className="text-white border-t border-white/20 pt-2">Final Answer: It's 28°C and sunny in Delhi.</div>
        </div>
      </div>

      {/* Plan-and-Execute */}
      <div className="p-8 bg-blue-600 rounded-[40px] text-white space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600">
            <Milestone size={24} />
          </div>
          <h4 className="text-xl font-black uppercase tracking-tighter">Plan-and-Execute</h4>
        </div>
        <div className="space-y-2 text-[10px] font-bold">
          <div className="flex gap-3">
            <span className="opacity-50">1.</span>
            <span>Search latest research papers on AI.</span>
          </div>
          <div className="flex gap-3">
            <span className="opacity-50">2.</span>
            <span>Read summaries of top 3 papers.</span>
          </div>
          <div className="flex gap-3">
            <span className="opacity-50">3.</span>
            <span>Extract key trends and benchmarks.</span>
          </div>
          <div className="flex gap-3">
            <span className="opacity-50">4.</span>
            <span>Generate a final summary.</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/10 rounded-2xl text-[9px] italic">
          Executes each step sequentially using tools.
        </div>
      </div>
    </div>
  </div>
);

// --- 45. Reasoning Patterns 2 ---
export const ReasoningPatterns2 = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-3 overflow-hidden">
    <div className="grid grid-cols-1 gap-3 w-full">
      {/* Zero-shot */}
      <div className="p-4 bg-white rounded-2xl border-2 border-neutral-200 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white">
            <Zap size={16} />
          </div>
          <h4 className="text-sm font-black uppercase tracking-tighter">Zero-shot</h4>
        </div>
        <p className="text-[9px] text-neutral-500">Direct response or single tool call without intermediate steps.</p>
        <div className="p-2.5 bg-neutral-50 rounded-xl font-mono text-[9px] space-y-1">
          <div className="text-neutral-400">Prompt: "Summarize this URL"</div>
          <div className="text-blue-600">LLM: Thinks → Acts (Web Reader) → Final Answer</div>
        </div>
      </div>

      {/* Self-Ask */}
      <div className="p-4 bg-white rounded-2xl border-2 border-blue-200 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <MessageSquare size={16} />
          </div>
          <h4 className="text-sm font-black uppercase tracking-tighter">Self-Ask</h4>
        </div>
        <p className="text-[9px] text-neutral-500">LLM asks itself sub-questions to solve complex queries.</p>
        <div className="p-2.5 bg-blue-50 rounded-xl font-mono text-[9px] space-y-1">
          <div className="text-blue-800">Q: Who is the CEO of the company that owns ChatGPT?</div>
          <div className="text-blue-600">Sub-Q 1: Who owns ChatGPT? → OpenAI</div>
          <div className="text-blue-600">Sub-Q 2: Who is the CEO? → Sam Altman</div>
          <div className="text-neutral-900 font-bold">A: Sam Altman</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 46. Agent Tech Stack ---
export const AgentTechStack = () => (
  <div className="w-full h-full bg-neutral-950 p-8 overflow-hidden relative">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
    </div>
    
    <div className="relative z-10 grid grid-cols-4 gap-4 h-full">
      {[
        { title: "Frontend", items: ["Streamlit", "Gradio", "Next.js", "React"], color: "text-blue-400" },
        { title: "Memory", items: ["Memo", "Letta", "Zep", "Redis"], color: "text-purple-400" },
        { title: "Tools", items: ["Serper", "Tavily", "Google Search", "SQL"], color: "text-emerald-400" },
        { title: "Observability", items: ["Langfuse", "Helicone", "Arize", "LangSmith"], color: "text-amber-400" },
        { title: "Orchestration", items: ["LangChain", "LangGraph", "CrewAI", "LlamaIndex"], color: "text-blue-500" },
        { title: "Models", items: ["GPT-4", "Claude 3.5", "Gemini 1.5", "Llama 3"], color: "text-indigo-400" },
        { title: "Database", items: ["Chroma", "Qdrant", "Pinecone", "Milvus"], color: "text-blue-300" },
        { title: "Infra", items: ["Docker", "Kubernetes", "AWS", "Azure"], color: "text-neutral-400" }
      ].map((stack, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-4 bg-white/5 backdrop-blur border border-white/10 rounded-2xl flex flex-col gap-3"
        >
          <h4 className={`text-[10px] font-black uppercase tracking-widest ${stack.color}`}>{stack.title}</h4>
          <div className="flex flex-wrap gap-1.5">
            {stack.items.map((item, j) => (
              <span key={j} className="px-2 py-0.5 bg-white/5 rounded-md text-[8px] text-white/70 border border-white/5">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- 22. Knowledge vs Action (Bridge) ---
export const KnowledgeVsAction = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-900 p-4">
    <div className="relative w-full max-w-full aspect-video bg-white/5 backdrop-blur rounded-[40px] border border-white/10 flex items-center justify-between p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10" />
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          <Database size={48} />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-black text-white uppercase tracking-tighter">Knowledge</h4>
          <p className="text-xs text-neutral-400">RAG & Context</p>
        </div>
      </div>

      <motion.div 
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10 flex items-center gap-4"
      >
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
        <ArrowRight className="text-emerald-500" size={32} />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)]">
          <Zap size={48} />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-black text-white uppercase tracking-tighter">Action</h4>
          <p className="text-xs text-neutral-400">Agents & Tools</p>
        </div>
      </div>
    </div>
  </div>
);

// --- LangChain Flow (LCEL) ---
export const LangChainFlow = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-50 p-8">
    <div className="w-full max-w-full flex items-center gap-4">
      {[
        { title: "Prompt", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-50" },
        { title: "LLM", icon: Cpu, color: "text-purple-500", bg: "bg-purple-50" },
        { title: "Output Parser", icon: FileJson, color: "text-emerald-500", bg: "bg-emerald-50" },
        { title: "Tool Call", icon: Wrench, color: "text-amber-500", bg: "bg-amber-50" }
      ].map((step, i, arr) => (
        <React.Fragment key={i}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex-1 p-6 ${step.bg} rounded-3xl border-2 border-white shadow-sm flex flex-col items-center gap-4`}
          >
            <div className={`w-12 h-12 ${step.color} flex items-center justify-center`}>
              <step.icon size={32} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900">{step.title}</span>
          </motion.div>
          {i < arr.length - 1 && (
            <div className="text-neutral-300 font-black text-2xl">|</div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// --- Persistence Storage (LangChain Memory) ---
export const PersistenceStorage = () => (
  <div className="w-full h-full flex items-center justify-center bg-neutral-900 p-3 overflow-hidden">
    <div className="w-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <History size={16} />
          </div>
          <h4 className="text-sm font-black text-white uppercase tracking-tighter">Memory & Persistence</h4>
        </div>
        <div className="px-2 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30 text-emerald-400 text-[8px] font-black uppercase tracking-wider flex-shrink-0">
          Stateful
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          <span className="text-[9px] font-black text-blue-400 uppercase tracking-wider">Short-Term</span>
          <p className="text-[9px] text-neutral-400 leading-snug mt-1">ConversationBufferMemory: Stores raw messages in current session.</p>
        </div>
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          <span className="text-[9px] font-black text-emerald-400 uppercase tracking-wider">Long-Term</span>
          <p className="text-[9px] text-neutral-400 leading-snug mt-1">VectorStoreRetrieverMemory: Retrieves past interactions via embeddings.</p>
        </div>
      </div>

      <div className="p-3 bg-blue-600/10 rounded-xl border border-blue-500/30 flex items-center gap-3">
        <Database size={20} className="text-blue-500 flex-shrink-0" />
        <div>
          <h5 className="text-[10px] font-bold text-white">External Persistence</h5>
          <p className="text-[9px] text-neutral-400">Redis, MongoDB, or Postgres for cross-session memory.</p>
        </div>
      </div>
    </div>
  </div>
);

// --- LangChain Prompt Templates ---
export const LangChainPrompt = () => (
  <div className="w-full h-full bg-slate-900 p-8 flex flex-col items-center justify-center text-white font-mono">
    <div className="max-w-2xl w-full space-y-4">
      <div className="flex items-center gap-2 text-blue-400 mb-4">
        <Terminal size={24} />
        <span className="text-xl font-bold">Prompt Templates</span>
      </div>
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl">
        <pre className="text-sm overflow-x-auto">
          <code className="text-emerald-400">
{`// 1. Define the template
const template = "You are a {role}. Explain {topic} to a {audience}.";

// 2. Create the PromptTemplate
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["role", "topic", "audience"]
});

// 3. Format with real data
const formatted = await prompt.format({
  role: "Junior Ecommerce Manager",
  topic: "AI Agents",
  audience: "Executive Team"
});`}
          </code>
        </pre>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-slate-800/50 p-3 rounded border border-slate-700 text-center">
          <div className="text-xs text-slate-400 mb-1">Standardization</div>
          <div className="text-blue-400">✓</div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded border border-slate-700 text-center">
          <div className="text-xs text-slate-400 mb-1">Reusability</div>
          <div className="text-blue-400">✓</div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded border border-slate-700 text-center">
          <div className="text-xs text-slate-400 mb-1">Dynamic</div>
          <div className="text-blue-400">✓</div>
        </div>
      </div>
    </div>
  </div>
);

// --- LangChain Output Parsers ---
export const LangChainOutput = () => (
  <div className="w-full h-full bg-slate-900 p-3 flex flex-col items-center justify-center text-white font-mono overflow-hidden">
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2 text-purple-400 mb-2">
        <Database size={18} />
        <span className="text-base font-bold">Output Parsers</span>
      </div>
      <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-xl">
        <pre className="text-[9px] leading-relaxed overflow-hidden">
          <code className="text-purple-300">
{`// Define the schema using Zod
const schema = z.object({
  product_name: z.string(),
  price: z.number(),
  is_in_stock: z.boolean(),
  tags: z.array(z.string())
});

// Create the parser
const parser = StructuredOutputParser
  .fromZodSchema(schema);

// Get format instructions for the LLM
const instructions = parser
  .getFormatInstructions();`}
          </code>
        </pre>
      </div>
      <div className="flex justify-center py-1">
        <ArrowDown className="text-slate-500 w-4 h-4" />
      </div>
      <div className="bg-emerald-900/20 p-3 rounded border border-emerald-500/30">
        <div className="text-[9px] text-emerald-400 mb-1 font-bold uppercase tracking-wider">Resulting JSON</div>
        <pre className="text-[9px] text-emerald-300 leading-relaxed">
{`{
  "product_name": "AI-Powered Coffee Mug",
  "price": 29.99,
  "is_in_stock": true,
  "tags": ["tech", "smart-home"]
}`}
        </pre>
      </div>
    </div>
  </div>
);

// --- LangGraph Architecture ---
export const LangGraphArchitecture = () => (
  <div className="w-full h-full bg-slate-950 p-3 flex flex-col items-center justify-center text-white overflow-hidden">
    <div className="relative w-full h-full bg-slate-900/50 rounded-2xl border border-white/10 p-3 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      
      {/* Engine */}
      <div className="relative z-10 flex flex-col items-center mb-2">
        <div className="px-4 py-2 bg-blue-600 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Cpu size={16} />
          LangGraph Engine
        </div>
        <div className="h-4 w-px bg-blue-500/50" />
      </div>

      {/* Intent Classifier */}
      <div className="relative z-10 flex flex-col items-center mb-2">
        <div className="px-4 py-2 bg-purple-600 rounded-lg font-bold text-sm shadow-lg shadow-purple-500/20 flex items-center gap-2">
          <Search size={16} />
          Intent Classifier
        </div>
        <div className="h-4 w-px bg-purple-500/50" />
      </div>

      {/* Orchestrator */}
      <div className="relative z-10 flex flex-col items-center mb-4">
        <div className="px-4 py-2 bg-indigo-600 rounded-lg font-bold text-sm shadow-lg shadow-indigo-500/20 flex items-center gap-2">
          <Workflow size={16} />
          Task Orchestrator
        </div>
      </div>

      {/* Agents Grid */}
      <div className="relative z-10 w-full grid grid-cols-5 gap-2">
        {[
          { name: 'Code', icon: Code2, color: 'bg-emerald-500' },
          { name: 'DB', icon: Database, color: 'bg-cyan-500' },
          { name: 'Text', icon: FileText, color: 'bg-orange-500' },
          { name: 'Search', icon: Globe, color: 'bg-blue-500' },
          { name: 'Utility', icon: Wrench, color: 'bg-slate-500' }
        ].map((agent, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-full h-px bg-indigo-500/30" />
            <div className={`w-9 h-9 ${agent.color} rounded-lg flex items-center justify-center shadow-lg`}>
              <agent.icon size={18} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider opacity-70">{agent.name}</span>
          </div>
        ))}
      </div>

      {/* Checkpointing */}
      <div className="relative z-10 mt-2 flex justify-end">
        <div className="flex items-center gap-1 px-2 py-1 bg-slate-800 rounded-full border border-white/10 text-[8px] font-mono text-blue-400">
          <DatabaseZap size={10} />
          SqliteSaver Checkpointing
        </div>
      </div>
    </div>
  </div>
);

// --- MCP Comparison ---
export const MCPComparison = () => (
  <div className="w-full h-full bg-orange-50 p-12 flex items-center justify-center font-sans">
    <div className="grid grid-cols-2 gap-16 w-full max-w-4xl">
      {/* Without MCP */}
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold text-neutral-800 mb-8">Without MCP</h4>
        <div className="relative w-full aspect-square bg-white rounded-3xl shadow-xl p-8 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-full h-px bg-neutral-900" style={{ top: `${i * 10}%`, transform: `rotate(${i * 30}deg)` }} />
            ))}
          </div>
          <div className="relative z-10 text-center">
            <div className="text-5xl font-black text-neutral-900 mb-2">M × N</div>
            <div className="text-sm text-neutral-500 uppercase tracking-widest">Custom Connectors</div>
          </div>
        </div>
        <p className="mt-6 text-sm text-neutral-600 text-center">Every model needs a unique integration for every tool.</p>
      </div>

      {/* With MCP */}
      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold text-neutral-800 mb-8">With MCP</h4>
        <div className="relative w-full aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center border-4 border-blue-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow" />
          </div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
              <Share2 size={40} />
            </div>
            <div className="text-5xl font-black text-blue-600 mb-2">M + N</div>
            <div className="text-sm text-blue-500 uppercase tracking-widest font-bold">Universal Protocol</div>
          </div>
        </div>
        <p className="mt-6 text-sm text-blue-700 font-bold text-center">One standard interface for all models and all tools.</p>
      </div>
    </div>
  </div>
);

// --- MCP Works ---
export const MCPWorks = () => (
  <div className="w-full h-full bg-slate-950 p-4 flex flex-col items-center justify-center text-white font-sans">
    <div className="relative w-full max-w-full aspect-video bg-slate-900/50 rounded-3xl border border-white/10 p-4 overflow-hidden flex items-center justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
      
      {/* Host */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-1/4">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Cpu size={40} />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">MCP Host</div>
          <div className="text-[10px] text-blue-400 font-mono uppercase tracking-widest">Claude, IDE, AI Tools</div>
        </div>
      </div>

      {/* Client-Server Connection */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-full h-px bg-gradient-to-r from-blue-500 via-white to-cyan-500 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-slate-800 rounded-full border border-white/20 text-[10px] font-mono whitespace-nowrap">
            JSON-RPC 2.0 (Transport Layer)
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 bg-blue-500/20 rounded border border-blue-500/30 text-[10px] font-bold text-blue-400">CLIENT</div>
            <p className="text-[10px] text-slate-400 text-center">Initiates connections, manages lifecycle</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 bg-cyan-500/20 rounded border border-cyan-500/30 text-[10px] font-bold text-cyan-400">SERVER</div>
            <p className="text-[10px] text-slate-400 text-center">Exposes prompts, tools, resources</p>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-1/4">
        <div className="w-20 h-20 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Database size={40} />
        </div>
        <div className="text-center">
          <div className="font-bold text-lg">Data Sources</div>
          <div className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest">CRM, S3, SQL, Local Files</div>
        </div>
      </div>
    </div>
  </div>
);
