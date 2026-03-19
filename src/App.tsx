import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, MessageSquare, Layout, BarChart2, Search, Database, Workflow, RefreshCw, GitBranch, Users, BrainCircuit, Wrench, Network, FileJson, Milestone, Zap, Layers, Cpu } from 'lucide-react';
import { slides, SlideData } from './slides';
import { jsPDF } from 'jspdf';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Infographics from './components/Infographics';
import { toPng } from 'html-to-image';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'n') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const exportToPDF = async () => {
    // 16:9 aspect ratio in landscape: 254mm x 142.9mm
    const pdfWidth = 254;
    const pdfHeight = 142.9;
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [pdfWidth, pdfHeight] });

    const originalSlide = currentSlide;

    for (let i = 0; i < slides.length; i++) {
      setCurrentSlide(i);
      // Wait for render
      await new Promise(r => setTimeout(r, 600));

      const slideEl = document.querySelector(`#slide-${slides[i].id}`);
      if (slideEl) {
        try {
          const dataUrl = await toPng(slideEl as HTMLElement, {
            backgroundColor: '#ffffff',
            pixelRatio: 2,
          });

          if (i > 0) {
            pdf.addPage([pdfWidth, pdfHeight], 'landscape');
          }

          pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        } catch (err) {
          console.warn(`Could not capture slide ${slides[i].id}:`, err);
        }
      }
    }

    // Reset to original slide after export
    setCurrentSlide(originalSlide);
    pdf.save('Generative_AI_Workshop.pdf');
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col font-sans text-neutral-900 overflow-hidden">
      {/* Header / Controls */}
      <header className="h-14 bg-white border-b border-neutral-200 flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            A
          </div>
          <h1 className="font-semibold text-sm tracking-tight text-neutral-600 truncate max-w-[200px] sm:max-w-md">
            Generative AI workshop
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportToPDF}
            className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors flex items-center gap-2 text-sm font-medium"
            title="Export to PDF"
          >
            <Layout size={18} />
            <span className="hidden sm:inline">Export</span>
          </button>
          <div className="h-6 w-px bg-neutral-200 mx-1" />
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={cn(
              "p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium",
              showNotes ? "bg-blue-50 text-blue-600" : "hover:bg-neutral-100 text-neutral-600"
            )}
            title="Toggle Notes (N)"
          >
            <MessageSquare size={18} />
            <span className="hidden sm:inline">Notes</span>
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
          <div className="h-6 w-px bg-neutral-200 mx-1" />
          <div className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1">
            <button
              onClick={prevSlide}
              className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all text-neutral-600"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono font-medium px-2 min-w-[60px] text-center">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded hover:bg-white hover:shadow-sm transition-all text-neutral-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Slide Viewer */}
        <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-5xl aspect-video bg-white shadow-2xl rounded-xl border border-neutral-200 overflow-hidden flex flex-col relative"
              id={`slide-${currentSlide + 1}`}
            >
              {/* Slide Content */}
              <SlideContent slide={slide} />

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
            </motion.div>
          </AnimatePresence>

          {/* Floating Navigation (Desktop) */}
          <div className="absolute inset-y-0 left-0 w-24 hidden lg:flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white/80 backdrop-blur shadow-lg text-neutral-600 hover:text-blue-600 transition-all">
              <ChevronLeft size={32} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 w-24 hidden lg:flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button onClick={nextSlide} className="p-4 rounded-full bg-white/80 backdrop-blur shadow-lg text-neutral-600 hover:text-blue-600 transition-all">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Sidebar Notes */}
        <AnimatePresence>
          {showNotes && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-white border-l border-neutral-200 flex flex-col h-full overflow-hidden shadow-xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <MessageSquare size={20} />
                  <h2 className="font-bold text-lg">Speaker Notes</h2>
                </div>
                <div className="flex-1 overflow-y-auto text-neutral-700 leading-relaxed space-y-4">
                  <p className="text-sm italic text-neutral-500 border-l-2 border-neutral-200 pl-4 py-1">
                    Slide {currentSlide + 1} of {slides.length}
                  </p>
                  <p className="text-base">
                    {slide.notes || "No notes available for this slide."}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono uppercase tracking-widest">
                    <Layout size={14} />
                    <span>Presentation Mode</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Navigation */}
      <footer className="lg:hidden h-16 bg-white border-t border-neutral-200 flex items-center justify-around px-4">
        <button onClick={prevSlide} className="flex flex-col items-center gap-1 text-neutral-500 hover:text-blue-600 transition-colors">
          <ChevronLeft size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Prev</span>
        </button>
        <div className="text-sm font-mono font-bold text-neutral-400">
          {currentSlide + 1} / {slides.length}
        </div>
        <button onClick={nextSlide} className="flex flex-col items-center gap-1 text-neutral-500 hover:text-blue-600 transition-colors">
          <ChevronRight size={24} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Next</span>
        </button>
      </footer>
    </div>
  );
}

function SlideContent({ slide }: { slide: SlideData }) {
  const renderVisual = () => {
    switch (slide.visualType) {
      case 'network': return <Infographics.NetworkGraph />;
      case 'roadmap': return <Infographics.RoadmapInfographic />;
      case 'transformer': return <Infographics.TransformerDiagram />;
      case 'hallucination': return <Infographics.HallucinationChart />;
      case 'tiers': return <Infographics.TiersComparison />;
      case 'rag': return <Infographics.RAGFlow />;
      case 'pipeline': return <Infographics.RAGFlow />;
      case 'vector': return <Infographics.VectorCloud />;
      case 'langchain': return <Infographics.LangChainInfographic />;
      case 'chains': return <Infographics.ChainsVsLoops />;
      case 'langgraph': return <Infographics.LangGraphArchitecture />;
      case 'anatomy': return <Infographics.AgentAnatomyPDF />;
      case 'persistence': return <Infographics.PersistenceStorage />;
      case 'multiagent': return <Infographics.AgentThinkingProcess />;
      case 'react': return <Infographics.ReActCycle />;
      case 'tools': return <Infographics.ToolExecution />;
      case 'mcp': return <Infographics.MCPComparison />;
      case 'usecase': return <Infographics.UseCaseFlow />;
      case 'observability': return <Infographics.AgentTerms />;
      case 'future': return <Infographics.AgentEvolution />;
      case 'AI structure': return <Infographics.AIStructure />;
      case 'ai-concepts': return <Infographics.AIConceptsCircular />;
      case 'ml-types': return <Infographics.MLTypes />;
      case 'ml-building': return <Infographics.MLBuildingModel />;
      case 'ml-vs-dl': return <Infographics.MLvsDL />;
      case 'python-tokenization': return <Infographics.PythonTokenization />;
      case 'python-embeddings': return <Infographics.PythonEmbeddings />;
      case 'python-training': return <Infographics.PythonTraining />;
      case 'ollama': return <Infographics.OllamaServer />;
      case 'llm-process': return <Infographics.LLMProcess />;
      case 'prompt-anatomy': return <Infographics.PromptAnatomy />;
      case 'llm-works-detailed': return <Infographics.LLMWorksDetailed />;
      case 'rag-architecture': return <Infographics.DetailedRAGArchitecture />;
      case 'rag-indexing-1': return <Infographics.RAGIndexingCode1 />;
      case 'rag-indexing-2': return <Infographics.RAGIndexingCode2 />;
      case 'vector-db-compare': return <Infographics.VectorDBComparison />;
      case 'advanced-rag': return <Infographics.AdvancedRAGTypes />;
      case 'bridge': return <Infographics.KnowledgeVsAction />;
      case 'agent-evolution': return <Infographics.AgentEvolution />;
      case 'agent-anatomy-pdf': return <Infographics.AgentAnatomyPDF />;
      case 'agent-thinking-process': return <Infographics.AgentThinkingProcess />;
      case 'agentic-rag-flow': return <Infographics.AgenticRAGFlow />;
      case 'agent-terms': return <Infographics.AgentTerms />;
      case 'reasoning-patterns-1': return <Infographics.ReasoningPatterns1 />;
      case 'reasoning-patterns-2': return <Infographics.ReasoningPatterns2 />;
      case 'agent-tech-stack': return <Infographics.AgentTechStack />;
      case 'langchain-lcel': return <Infographics.LangChainFlow />;
      case 'langchain-components': return <Infographics.TiersComparison />;
      case 'langchain-memory': return <Infographics.PersistenceStorage />;
      case 'langchain-prompt': return <Infographics.LangChainPrompt />;
      case 'langchain-output': return <Infographics.LangChainOutput />;
      case 'mcp-works': return <Infographics.MCPWorks />;
      default:
        return null;
    }
  };

  // Slide 1 is a special title slide
  if (slide.id === 1) {
    return (
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-12 max-w-xl">
              {slide.subtitle}
            </p>
            <div className="space-y-1">
              <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Presenter</p>
              <p className="text-lg font-semibold text-neutral-700">{slide.presenter}</p>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 bg-neutral-50 relative overflow-hidden hidden md:block visual-panel">
          {renderVisual()}
        </div>
      </div>
    );
  }

  // Standard slide layout
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <div className="flex-1 p-8 md:p-12 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            {slide.header}
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full" />
        </motion.div>

        <div className="flex-1">
          <ul className="space-y-4">
            {slide.content?.map((item, idx) => {
              const isNested = item.trim().startsWith('-');
              const cleanItem = isNested ? item.trim().substring(1).trim() : item;
              
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={cn(
                    "flex items-start gap-4",
                    isNested ? "ml-8 mt-2" : "mt-4"
                  )}
                >
                  <div className={cn(
                    "rounded-full flex-shrink-0",
                    isNested 
                      ? "w-1.5 h-1.5 bg-blue-400 mt-2" 
                      : "w-2 h-2 bg-blue-600 mt-2.5"
                  )} />
                  <span className={cn(
                    "text-neutral-700 leading-relaxed font-medium",
                    isNested ? "text-base md:text-lg" : "text-lg md:text-xl"
                  )}>
                    {cleanItem}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between border-t border-neutral-100">
          <span className="text-xs font-bold text-neutral-300 uppercase tracking-widest">
            Generative AI workshop
          </span>
          <span className="text-xs font-mono text-neutral-300">
            Slide {slide.id}
          </span>
        </div>
      </div>

      <div className="w-full md:w-[40%] bg-neutral-50 relative overflow-hidden border-l border-neutral-100 visual-panel">
        {renderVisual()}
      </div>
    </div>
  );
}
