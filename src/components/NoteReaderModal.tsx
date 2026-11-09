import React, { useState } from 'react';
import { 
  X, Download, Printer, Volume2, CheckCircle2, Bookmark, 
  Share2, ArrowLeft, Star, ThumbsUp, Mic, FileText, Gamepad2, 
  Trophy, Sparkles, Brain, Network, Zap, BookOpen, Clock, AlertCircle, Copy, Check,
  KeyRound, Search
} from 'lucide-react';
import { Subject, Unit, TopicGlance, ChapterMindmap, KeywordDefinition } from '../types';

interface NoteReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: Subject;
  unit?: Unit;
  onOpenVoiceAI: () => void;
  onPlayMCQGame: () => void;
  onOpenAbout?: (slideIndex?: number) => void;
  language: 'en' | 'te';
}

export const NoteReaderModal: React.FC<NoteReaderModalProps> = ({
  isOpen,
  onClose,
  subject,
  unit,
  onOpenVoiceAI,
  onPlayMCQGame,
  onOpenAbout,
  language
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'glance' | 'mindmap' | 'content' | 'keywords' | 'formulas' | 'questions'>('glance');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [keywordSearch, setKeywordSearch] = useState('');

  // Gemini AI Chapter Completion State
  const [isGeneratingWithAI, setIsGeneratingWithAI] = useState(false);
  const [aiData, setAiData] = useState<{
    topicAtAGlance?: TopicGlance[];
    mindmap?: ChapterMindmap;
    comprehensiveOverview?: string;
    coreTopics?: { topicTitle: string; detailedExplanation: string; examWatchout: string }[];
    formulasAndLaws?: { name: string; expression: string; variables: string; examApplication: string }[];
    solvedCBSEQuestions?: { question: string; marks: string; stepByStepSolution: string; examinerTip: string }[];
    keywordsGlossary?: KeywordDefinition[];
    teluguSummary?: string;
    isAIGenerated?: boolean;
  } | null>(null);

  if (!isOpen || !subject || !unit) return null;

  // Use either live AI generated data or the unit's built-in rich data
  const currentGlance: TopicGlance[] = aiData?.topicAtAGlance || unit.topicAtAGlance || unit.keyTopics.map((topic, i) => ({
    topic,
    inBrief: `It is the core concept of ${topic.replace(/^\d+\.\s*/, '')} in ${unit.title}, defining its direct physical, mathematical, or real-world meaning.`,
    definition: `${topic} is formally defined as the fundamental governing principle in ${unit.title} that specifies the relationship between state variables, inputs, and observed physical, chemical, or algorithmic outcomes.`,
    quickTake: `Core ${subject.semesterOrGrade} concept frequently examined in university and school assessments.`,
    detailedExplanation: `In-depth analysis of ${topic}: In this curriculum section, students examine the underlying theoretical axioms, laboratory observations, and mathematical relations of ${topic}. It establishes how energy, matter, or algorithmic models interact and formulates the exact conditions required for solving both conceptual questions and multi-step derivations in semester and board examinations.`,
    keyPoints: [
      `Master the formal standard definition, governing axiom, and state symbols for ${topic}.`,
      `Key experimental observation, diagram arrowheads, and mathematical boundary conditions.`,
      `Avoid common student traps: always write proper SI units (MKS) and intermediate algebraic steps.`,
      `Examiner scoring requirement: underline key scientific or engineering terms for full method marks.`
    ],
    formulaOrEquation: i === 0 ? 'Standard Governing Invariant / Equation' : undefined
  }));

  const currentMindmap: ChapterMindmap = aiData?.mindmap || unit.mindmap || {
    center: unit.title,
    branches: [
      {
        title: '1. Theoretical Axioms',
        subtopics: unit.keyTopics.slice(0, 2),
        examTip: 'Strictly follow NCERT rationalized terminology for full marks.',
        color: 'blue'
      },
      {
        title: '2. Mechanisms & Processes',
        subtopics: unit.keyTopics.slice(2, 4).length > 0 ? unit.keyTopics.slice(2, 4) : ['Key experiments', 'Laboratory setups'],
        examTip: 'Always include labeled diagrams with arrowheads.',
        color: 'purple'
      },
      {
        title: '3. Equations & Derivations',
        subtopics: ['SI Units (MKS)', 'Dimensional consistency', 'Boundary condition analysis'],
        examTip: 'State formula before substituting numbers.',
        color: 'emerald'
      },
      {
        title: '4. High-Yield Board PYQs',
        subtopics: ['5-Mark Long Answers', 'Reasoning & Assertion', 'Real-world Vizag case studies'],
        examTip: 'Underline final calculated values with units.',
        color: 'amber'
      }
    ]
  };

  const currentKeywords: KeywordDefinition[] = aiData?.keywordsGlossary || unit.keywordsGlossary || currentGlance.map(item => ({
    keyword: item.topic.replace(/^\d+\.\s*/, ''),
    definition: item.definition || `${item.topic} is formally defined as the fundamental governing property in ${unit.title} determining state behavior.`,
    sentenceExplanation: item.inBrief || `This keyword represents the core operational concept of ${item.topic} covered in ${unit.title}.`,
    examContext: item.quickTake || 'Must be stated with appropriate SI units, standard scientific terminology, and clear diagrams.'
  }));

  const filteredKeywords = currentKeywords.filter(k => 
    k.keyword.toLowerCase().includes(keywordSearch.toLowerCase()) ||
    k.sentenceExplanation.toLowerCase().includes(keywordSearch.toLowerCase()) ||
    k.definition.toLowerCase().includes(keywordSearch.toLowerCase())
  );

  const playAudioSummary = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const textToSpeak = language === 'te' 
          ? (aiData?.teluguSummary || unit.summaryTelugu) 
          : (aiData?.comprehensiveOverview || unit.summaryEnglish);
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = language === 'te' ? 'te-IN' : 'en-IN';
        utterance.rate = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Trigger Gemini AI generation for completing every topic in a glance & mindmap
  const handleCompleteWithAI = async () => {
    setIsGeneratingWithAI(true);
    try {
      const response = await fetch('/api/gemini/complete-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectName: subject.name,
          chapterTitle: unit.title,
          unitNumber: unit.unitNumber,
          institutionName: subject.institutionId,
          grade: subject.semesterOrGrade,
          keyTopics: unit.keyTopics,
          language
        })
      });

      if (response.ok) {
        const data = await response.json();
        setAiData(data);
        setActiveTab('glance');
      } else {
        console.error('Gemini complete chapter error:', await response.text());
      }
    } catch (err) {
      console.error('Failed to call Gemini AI:', err);
    } finally {
      setIsGeneratingWithAI(false);
    }
  };

  const handleCopySummary = () => {
    const text = `SummaryKey CBSE Study Guide\nChapter: Unit ${unit.unitNumber} - ${unit.title}\nSubject: ${subject.name} (${subject.semesterOrGrade})\n\nTopics At A Glance:\n${currentGlance.map(g => `• ${g.topic}: ${g.quickTake}\n  - ${g.keyPoints.join('\n  - ')}`).join('\n\n')}\n\nMindmap Branches:\n${currentMindmap.branches.map(b => `${b.title}:\n  ${b.subtopics.join(', ')}\n  Pro-Tip: ${b.examTip}`).join('\n\n')}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[94vh] max-h-[860px] overflow-hidden">
        
        {/* Document Viewer Top Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {subject.code}: Unit {unit.unitNumber} - {unit.title}
                </span>
                <span className="bg-blue-600/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                  {subject.semesterOrGrade}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-normal">
                {subject.name} • {unit.verifiedBy} ({unit.verifiedRole})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live Gemini AI Button */}
            <button
              onClick={handleCompleteWithAI}
              disabled={isGeneratingWithAI}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95 ${
                isGeneratingWithAI 
                  ? 'bg-cyan-700 text-white animate-pulse'
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
              }`}
              title="Use Gemini AI to complete all topics at a glance and generate mindmap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span className="hidden sm:inline">
                {isGeneratingWithAI ? 'Gemini AI Synthesizing...' : 'AI Complete & Mindmap'}
              </span>
              <span className="sm:hidden">AI Complete</span>
            </button>

            {/* Direct Game Button in Top Bar */}
            <button
              onClick={onPlayMCQGame}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer active:scale-95"
              title="Play Chapter MCQ Game"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Play MCQ Game</span>
              <span className="sm:hidden">Game</span>
            </button>

            <button
              onClick={playAudioSummary}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isPlayingAudio 
                  ? 'bg-emerald-600 text-white animate-pulse' 
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
              title="Listen to Spoken Summary"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{isPlayingAudio ? 'Playing...' : 'Audio'}</span>
            </button>

            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isBookmarked ? 'bg-amber-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
              title="Bookmark Note"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Tabs Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center justify-between text-xs font-semibold shrink-0 overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* TAB: TOPIC AT A GLANCE (NEW!) */}
            <button
              onClick={() => setActiveTab('glance')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'glance'
                  ? 'bg-white text-blue-700 shadow-sm ring-1 ring-blue-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>⚡ Topic in a Glance</span>
            </button>

            {/* TAB: VISUAL MINDMAP (NEW!) */}
            <button
              onClick={() => setActiveTab('mindmap')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'mindmap'
                  ? 'bg-white text-purple-700 shadow-sm ring-1 ring-purple-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-purple-600" />
              <span>🗺️ Chapter Mindmap</span>
            </button>

            {/* TAB: DETAILED NOTES */}
            <button
              onClick={() => setActiveTab('content')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'content'
                  ? 'bg-white text-blue-700 shadow-sm ring-1 ring-blue-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>📖 Full Notes</span>
            </button>

            {/* TAB: KEYWORDS & DEFINITIONS */}
            <button
              onClick={() => setActiveTab('keywords')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'keywords'
                  ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-600" />
              <span>🔑 Keywords & Definitions ({currentKeywords.length})</span>
            </button>

            {/* TAB: FORMULAS */}
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'formulas'
                  ? 'bg-white text-blue-700 shadow-sm ring-1 ring-blue-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>📐 Formulas ({unit.formulaeCount})</span>
            </button>

            {/* TAB: PYQs */}
            <button
              onClick={() => setActiveTab('questions')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'questions'
                  ? 'bg-white text-blue-700 shadow-sm ring-1 ring-blue-500/20 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>📝 Solved PYQs</span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopySummary}
              className="text-xs bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md font-medium flex items-center gap-1 cursor-pointer transition-colors"
              title="Copy Chapter Summary"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onOpenVoiceAI}
              className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1 rounded-md font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Mic className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ask Voice AI</span>
            </button>
          </div>
        </div>

        {/* Note Document Reader Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 bg-[#fafbfe]">
          <div className="max-w-3xl mx-auto bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm space-y-8">
            
            {/* Academic Sheet Header */}
            <div className="border-b border-slate-200 pb-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  SUMMARYKEY VERIFIED COURSEWARE • {subject.regulationOrBoard}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {unit.fileSize} • {unit.pdfPages} Pages
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Unit {unit.unitNumber}: {unit.title}
              </h1>

              {/* Peer Verification Badge Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified by {unit.verifiedBy}</span>
                </div>
                <span className="text-xs text-slate-500">
                  {unit.verifiedRole}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {unit.rating} / 5.0 ({unit.upvotes} student endorsements)
                </span>
                {aiData?.isAIGenerated && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 px-2.5 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-cyan-600" />
                    AI Completed with Gemini 3.8 Flash
                  </span>
                )}
              </div>
            </div>

            {/* AI Callout Banner if not yet completed with AI */}
            {!aiData ? (
              <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Mighty Gemini 3.8 Flash AI • Deep Definition & Detailed Notes</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Generate comprehensive academic definitions, exhaustive multi-paragraph explanations, real-world Visakhapatnam applications, and scoring watchouts for every single topic in {unit.title}.
                  </p>
                </div>
                <button
                  onClick={handleCompleteWithAI}
                  disabled={isGeneratingWithAI}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all shrink-0 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{isGeneratingWithAI ? 'Mighty Gemini AI Expanding...' : 'Expand All Concepts with Gemini AI ✨'}</span>
                </button>
              </div>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between gap-2 text-xs text-emerald-900 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Deep definitions, detailed notes, and comprehensive explanations expanded with Gemini AI!</span>
                </div>
                <button
                  onClick={handleCompleteWithAI}
                  disabled={isGeneratingWithAI}
                  className="underline text-emerald-800 font-bold hover:text-emerald-950 cursor-pointer text-xs"
                >
                  Regenerate with Gemini AI
                </button>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 1: TOPIC IN A GLANCE (USER REQUEST!) */}
            {/* ========================================================= */}
            {activeTab === 'glance' && (
              <div className="space-y-6 text-slate-800 leading-relaxed">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <span>Every Topic in a Glance (High-Yield CBSE Revision)</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Rapid mastery of every key topic, fundamental equations, and high-probability board traps.
                    </p>
                  </div>
                  <span className="text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full">
                    {currentGlance.length} Topics
                  </span>
                </div>

                {/* Topic at a Glance Cards */}
                <div className="space-y-4">
                  {currentGlance.map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50/80 hover:bg-blue-50/30 border border-slate-200 rounded-2xl p-5 space-y-3 transition-colors shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <h3 className="font-display font-bold text-base text-slate-900">
                            {item.topic}
                          </h3>
                        </div>
                        <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
                          Topic {idx + 1}
                        </span>
                      </div>

                      {/* In Brief (What is it?) - Separately explains the concept in brief */}
                      <div className="bg-amber-50/90 border border-amber-300/80 p-3.5 rounded-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-black text-amber-950 uppercase tracking-wide">
                          <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black flex items-center justify-center shrink-0">💡</span>
                          <span>In Brief (What is it?):</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold">
                          {item.inBrief || item.quickTake || `It is the fundamental concept in ${unit.title} representing the core behavior and properties of ${item.topic}.`}
                        </p>
                      </div>

                      {/* Formal Definition */}
                      <div className="bg-blue-50/70 border border-blue-200/80 p-3.5 rounded-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wide">
                          <Bookmark className="w-3.5 h-3.5 text-blue-700" />
                          <span>Formal Academic Definition:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
                          {item.definition || `${item.topic} is formally defined as the fundamental governing principle in ${unit.title} specifying how state variables, inputs, and observed outcomes relate.`}
                        </p>
                      </div>

                      {/* In-depth Detailed Explanation */}
                      <div className="bg-white border border-slate-200 p-3.5 rounded-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Detailed Concept & Explanation:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {item.detailedExplanation || `Comprehensive breakdown of ${item.topic}: Students examine the governing axioms, experimental setups, and mathematical relations of ${item.topic}. It explains how energy, state variables, or algorithmic models interact and formulates the exact conditions required for solving both conceptual questions and multi-step derivations in examinations.`}
                        </p>
                      </div>

                      {/* Quick Take */}
                      <p className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200/80 p-3 rounded-xl">
                        💡 <span className="font-bold text-slate-900">Quick Take:</span> {item.quickTake}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-1.5 pl-1">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Key Exam Points & Boundary Conditions:
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {item.keyPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Formula or Equation if exists */}
                      {item.formulaOrEquation && (
                        <div className="bg-slate-900 text-cyan-300 font-mono text-xs p-3 rounded-xl flex items-center justify-between gap-3 overflow-x-auto">
                          <span className="text-slate-400 font-sans text-[11px]">Core Equation:</span>
                          <span className="font-bold">{item.formulaOrEquation}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Transition Prompt to Mindmap */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-purple-900">Want to see how these topics connect visually?</span>
                    <p className="text-xs text-purple-700">Explore the hierarchical Chapter Mindmap with color-coded branches and exam tips.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('mindmap')}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all shrink-0 cursor-pointer"
                  >
                    View Mindmap 🗺️
                  </button>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 2: CHAPTER MINDMAP (USER REQUEST!) */}
            {/* ========================================================= */}
            {activeTab === 'mindmap' && (
              <div className="space-y-6 text-slate-800">
                
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h2 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <span>Chapter Visual Mindmap</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Visual hierarchical concept tree linking core principles, mechanisms, formulas, and board hotspots.
                    </p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="text-xs font-semibold bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Mindmap</span>
                  </button>
                </div>

                {/* Interactive Visual Mindmap Flow Diagram */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-500/20 space-y-8">
                  
                  {/* Central Node */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-200">
                      <Network className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{subject.semesterOrGrade} • CBSE Core Mindmap</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl shadow-lg border border-white/20 max-w-lg w-full">
                      <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider block">
                        CENTRAL CHAPTER THEME
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                        {currentMindmap.center}
                      </h3>
                      <p className="text-xs text-blue-100/90 mt-1">
                        {subject.name} • Visakha Valley School Syllabus
                      </p>
                    </div>
                    {/* Visual connecting line downward */}
                    <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-300"></div>
                  </div>

                  {/* Mindmap Branch Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentMindmap.branches.map((branch, bIdx) => {
                      const colorStyles = {
                        blue: 'border-blue-500/40 bg-blue-950/40 text-blue-300',
                        purple: 'border-purple-500/40 bg-purple-950/40 text-purple-300',
                        emerald: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-300',
                        amber: 'border-amber-500/40 bg-amber-950/40 text-amber-300'
                      }[branch.color || (bIdx % 2 === 0 ? 'blue' : 'purple')] || 'border-blue-500/40 bg-blue-950/40 text-blue-300';

                      return (
                        <div 
                          key={bIdx}
                          className={`rounded-xl border p-4 space-y-3 shadow-md backdrop-blur-sm ${colorStyles}`}
                        >
                          <div className="flex items-center justify-between border-b border-white/10 pb-2">
                            <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                              <span>{branch.title}</span>
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-slate-400 bg-white/10 px-2 py-0.5 rounded">
                              Branch {bIdx + 1}
                            </span>
                          </div>

                          {/* Subtopics Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {branch.subtopics.map((sub, sIdx) => (
                              <span 
                                key={sIdx}
                                className="bg-white/10 hover:bg-white/20 text-white text-xs px-2.5 py-1 rounded-md transition-colors"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>

                          {/* Examiner Tip */}
                          {branch.examTip && (
                            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-[11px] text-slate-300 flex items-start gap-1.5">
                              <span className="text-amber-400 font-bold shrink-0">🎯 Exam Tip:</span>
                              <span>{branch.examTip}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Mindmap Footer Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs text-slate-400">
                    <span>Mnemonic: Connect Theory → Diagram → Formula → Board Scoring Key</span>
                    <button
                      onClick={handleCompleteWithAI}
                      disabled={isGeneratingWithAI}
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Regenerate with Gemini 3.8 Flash</span>
                    </button>
                  </div>

                </div>

                {/* GAME OPTION: AT THE END OF EVERY NOTE/MINDMAP */}
                <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-indigo-400/30 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-amber-500/20">
                        <Gamepad2 className="w-6 h-6 fill-slate-950" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-lg text-white">
                            Mastered the Mindmap? Play Chapter MCQ Game!
                          </h3>
                          <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                            Quiz Game
                          </span>
                        </div>
                        <p className="text-xs text-blue-200/90 mt-1 max-w-xl font-normal">
                          Test your recall on {unit.title} with 15-second timed MCQs, streak multipliers, and instant answer explanations.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={onPlayMCQGame}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-slate-950" />
                      <span>Start Chapter MCQ Game 🎮</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 3: DETAILED NOTES */}
            {/* ========================================================= */}
            {activeTab === 'content' && (
              <div className="space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base">
                
                {/* Exam Alert Card */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                    <span>⚡ EXAM REVISION PRIORITY: HIGH</span>
                    <span>Weightage: {unit.examWeightage}</span>
                  </div>
                  <p className="text-xs text-amber-900/80">
                    In CBSE examinations and Visakha Valley School term exams, this chapter accounts for core essay questions and multiple reasoning marks.
                  </p>
                </div>

                {/* Section 1: Overview */}
                <div className="space-y-3">
                  <h2 className="font-display text-lg font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                    01. Chapter Overview & Foundations
                  </h2>
                  <p>
                    {aiData?.comprehensiveOverview || (language === 'te' ? unit.summaryTelugu : unit.summaryEnglish)}
                  </p>
                </div>

                {/* Section 2: Core Topic Breakdown */}
                <div className="space-y-4">
                  <h2 className="font-display text-lg font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
                    02. Syllabus Key Topics & Mechanisms
                  </h2>
                  
                  {aiData?.coreTopics ? (
                    <div className="space-y-4">
                      {aiData.coreTopics.map((ct, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            <span>{ct.topicTitle}</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7">
                            {ct.detailedExplanation}
                          </p>
                          {ct.examWatchout && (
                            <div className="ml-7 bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-xs text-amber-800">
                              ⚠️ <span className="font-bold">Exam Watchout:</span> {ct.examWatchout}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {currentGlance.map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
                          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                            <div className="flex items-center gap-2 font-bold text-base text-slate-900">
                              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                                {i + 1}
                              </span>
                              <span>{item.topic}</span>
                            </div>
                            <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-md">
                              Concept {i + 1}
                            </span>
                          </div>

                          {/* In Brief (What is it?) */}
                          <div className="bg-amber-50/90 border border-amber-300/80 p-3.5 rounded-xl space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-black text-amber-950 uppercase tracking-wide">
                              <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black flex items-center justify-center shrink-0">💡</span>
                              <span>In Brief (What is it?):</span>
                            </div>
                            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold">
                              {item.inBrief || item.quickTake || `It is the fundamental concept in ${unit.title} representing the core behavior and properties of ${item.topic}.`}
                            </p>
                          </div>

                          {/* Formal Definition */}
                          <div className="bg-blue-50/70 border border-blue-200/80 p-3 rounded-xl space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wide">
                              <Bookmark className="w-3.5 h-3.5 text-blue-700" />
                              <span>Formal Academic Definition:</span>
                            </div>
                            <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                              {item.definition || `${item.topic} is formally defined as the fundamental governing principle in ${unit.title} that specifies the relationship between state variables, inputs, and observed physical, chemical, or computational behavior.`}
                            </p>
                          </div>

                          {/* In-depth Detailed Explanation */}
                          <div className="bg-white border border-slate-200 p-3.5 rounded-xl space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wide">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                              <span>Detailed Concept & Step-by-Step Explanation:</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {item.detailedExplanation || `Thorough conceptual analysis of ${item.topic}: The curriculum highlights foundational axioms, experimental observations, and mathematical relations. In this section, students examine how energy, state variables, or algorithmic models interact and establish the foundational conditions for answering both short conceptual questions and multi-step derivations in semester and board examinations.`}
                            </p>
                            {item.formulaOrEquation && (
                              <div className="mt-2 bg-slate-900 text-cyan-300 font-mono text-xs p-2.5 rounded-lg flex items-center justify-between">
                                <span className="text-slate-400 font-sans text-[11px]">Governing Equation:</span>
                                <span className="font-bold">{item.formulaOrEquation}</span>
                              </div>
                            )}
                          </div>

                          {/* Key Examination Points */}
                          {item.keyPoints && item.keyPoints.length > 0 && (
                            <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 space-y-1">
                              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Key Points to Remember for Exams:
                              </span>
                              <ul className="space-y-1 text-xs text-slate-700">
                                {item.keyPoints.map((pt, ptIdx) => (
                                  <li key={ptIdx} className="flex items-start gap-1.5">
                                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 space-y-0.5">
                            <span className="font-bold flex items-center gap-1">
                              ⚠️ Examiner Watchout & Scoring Key:
                            </span>
                            <p className="text-amber-800">
                              Evaluators specifically award marks for proper standard definitions, clear arrowed diagrams, and rigorous SI unit tracking. Never omit intermediate derivation steps or state assumptions.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 3: Exhaustive Keywords & Terminology Explained in Sentences */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-lg font-bold text-slate-900 border-l-4 border-emerald-600 pl-3 flex items-center gap-2">
                      <KeyRound className="w-5 h-5 text-emerald-600" />
                      <span>03. Chapter Keywords Glossary (Explained in Sentences & Formal Definitions)</span>
                    </h2>
                    <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {currentKeywords.length} Keywords
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Not a single keyword missed: Every key scientific and academic term is defined and explained in a clear, full descriptive sentence.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {currentKeywords.map((kw, kwIdx) => (
                      <div 
                        key={kwIdx}
                        className="bg-emerald-50/40 hover:bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-4 space-y-2.5 transition-colors shadow-2xs"
                      >
                        <div className="flex items-center justify-between border-b border-emerald-200/60 pb-1.5">
                          <span className="font-display font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                              {kwIdx + 1}
                            </span>
                            <span>{kw.keyword}</span>
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                            Term {kwIdx + 1}
                          </span>
                        </div>

                        {/* Explained in a full sentence */}
                        <div className="bg-white border border-emerald-200/90 rounded-lg p-2.5 space-y-0.5">
                          <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                            <span>💡 Explained in a Sentence:</span>
                          </div>
                          <p className="text-xs text-slate-800 font-medium leading-relaxed">
                            {kw.sentenceExplanation}
                          </p>
                        </div>

                        {/* Formal textbook definition */}
                        <div className="bg-emerald-100/40 border border-emerald-200/70 rounded-lg p-2.5 space-y-0.5">
                          <div className="text-[11px] font-bold text-emerald-950 flex items-center gap-1">
                            <span>📖 Formal Textbook Definition:</span>
                          </div>
                          <p className="text-xs text-emerald-950 leading-relaxed font-semibold">
                            {kw.definition}
                          </p>
                        </div>

                        {kw.examContext && (
                          <div className="text-[11px] text-emerald-900/90 flex items-start gap-1">
                            <span className="font-bold text-amber-600 shrink-0">🎯 Exam Context:</span>
                            <span>{kw.examContext}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telugu Takeaways */}
                {(aiData?.teluguSummary || unit.summaryTelugu) && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-900 uppercase">
                      తెలుగు సారాంశం (Telugu Key Takeaway for Vizag Students):
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                      {aiData?.teluguSummary || unit.summaryTelugu}
                    </p>
                  </div>
                )}

                {/* GAME OPTION: AT THE END OF NOTE */}
                <div className="bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-indigo-400/30 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-amber-500/20">
                        <Gamepad2 className="w-6 h-6 fill-slate-950" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-lg text-white">
                            Finished Reading? Test with Chapter MCQ Game!
                          </h3>
                        </div>
                        <p className="text-xs text-blue-200/90 mt-1 max-w-xl font-normal">
                          Interactive quiz game based on the exact notes you just studied. Earn high scores and master every concept!
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={onPlayMCQGame}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Trophy className="w-4 h-4 text-slate-950" />
                      <span>Start MCQ Quiz Game 🎮</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB: KEYWORDS GLOSSARY (DEDICATED FULL TAB) */}
            {/* ========================================================= */}
            {activeTab === 'keywords' && (
              <div className="space-y-6">
                
                {/* Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <KeyRound className="w-5 h-5 text-emerald-600" />
                      <span>Chapter Keywords & Complete Vocabulary Glossary</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Every critical keyword in {unit.title} explained in full descriptive sentences with formal academic definitions.
                    </p>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={keywordSearch}
                      onChange={(e) => setKeywordSearch(e.target.value)}
                      placeholder="Search any keyword..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Keywords Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredKeywords.map((kw, idx) => (
                    <div 
                      key={idx}
                      className="bg-white hover:bg-emerald-50/20 border border-slate-200 hover:border-emerald-300 rounded-2xl p-5 space-y-3.5 shadow-xs hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-xs">
                            {idx + 1}
                          </span>
                          <h3 className="font-display font-bold text-base text-slate-900">
                            {kw.keyword}
                          </h3>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-md">
                          Vocabulary #{idx + 1}
                        </span>
                      </div>

                      {/* 1. Explained in Sentence */}
                      <div className="bg-amber-50/90 border border-amber-300/80 p-3.5 rounded-xl space-y-1 shadow-2xs">
                        <div className="flex items-center gap-1.5 text-xs font-black text-amber-950 uppercase tracking-wide">
                          <span className="text-amber-600 font-bold text-sm">💡</span>
                          <span>Explained in a Sentence (Plain English):</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 font-semibold leading-relaxed">
                          {kw.sentenceExplanation}
                        </p>
                      </div>

                      {/* 2. Formal Academic Definition */}
                      <div className="bg-emerald-50/70 border border-emerald-200/80 p-3.5 rounded-xl space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wide">
                          <Bookmark className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Formal Academic Definition:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                          {kw.definition}
                        </p>
                      </div>

                      {/* 3. Exam Context */}
                      {kw.examContext && (
                        <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-xs text-slate-700 space-y-0.5">
                          <span className="font-bold text-slate-900 flex items-center gap-1">
                            🎯 Examiner Scoring Context:
                          </span>
                          <p className="text-slate-600">
                            {kw.examContext}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredKeywords.length === 0 && (
                  <div className="text-center py-12 text-slate-500 text-xs">
                    No keywords found matching "{keywordSearch}". Try searching another term!
                  </div>
                )}

              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 4: FORMULAS */}
            {/* ========================================================= */}
            {activeTab === 'formulas' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    Formulas, Laws & Equations Cheatsheet
                  </h2>
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                    SI Units Included
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aiData?.formulasAndLaws ? (
                    aiData.formulasAndLaws.map((f, i) => (
                      <div key={i} className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase">
                          {f.name}
                        </span>
                        <div className="font-mono text-base font-bold text-slate-900 bg-white p-2 rounded-lg border border-blue-200">
                          {f.expression}
                        </div>
                        <p className="text-xs text-slate-600">
                          {f.variables}
                        </p>
                        <p className="text-xs text-emerald-700 font-medium">
                          🎯 {f.examApplication}
                        </p>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase">
                          Newton\'s Gravitational Law
                        </span>
                        <div className="font-mono text-base font-bold text-slate-900 bg-white p-2 rounded-lg border border-blue-200">
                          F = G · (m1 · m2) / r²
                        </div>
                        <p className="text-xs text-slate-600">
                          G = 6.67 × 10^-11 N·m²/kg²; m in kg, r in meters.
                        </p>
                      </div>

                      <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase">
                          Lens / Mirror Formula
                        </span>
                        <div className="font-mono text-base font-bold text-slate-900 bg-white p-2 rounded-lg border border-blue-200">
                          1/v - 1/u = 1/f (Lens); 1/v + 1/u = 1/f (Mirror)
                        </div>
                        <p className="text-xs text-slate-600">
                          Cartesian sign convention strictly mandatory: u is always negative.
                        </p>
                      </div>

                      <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase">
                          Ohm\'s Law & Heating
                        </span>
                        <div className="font-mono text-base font-bold text-slate-900 bg-white p-2 rounded-lg border border-blue-200">
                          V = I · R; H = I² · R · t
                        </div>
                        <p className="text-xs text-slate-600">
                          1 kWh = 3.6 × 10^6 J; Power P = V · I = I²R = V²/R.
                        </p>
                      </div>

                      <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                        <span className="text-xs font-semibold text-blue-800 uppercase">
                          Heron\'s Area of Triangle
                        </span>
                        <div className="font-mono text-base font-bold text-slate-900 bg-white p-2 rounded-lg border border-blue-200">
                          Area = √[s(s - a)(s - b)(s - c)]
                        </div>
                        <p className="text-xs text-slate-600">
                          s = (a + b + c) / 2 (Semi-perimeter of triangle).
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* TAB 5: SOLVED PYQs */}
            {/* ========================================================= */}
            {activeTab === 'questions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    Solved CBSE Board & School Exam Questions
                  </h2>
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    Stepwise Marking Keys Included
                  </span>
                </div>

                <div className="space-y-4">
                  {aiData?.solvedCBSEQuestions ? (
                    aiData.solvedCBSEQuestions.map((q, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-xs">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-blue-700">Q{i + 1}. ({q.marks})</span>
                          <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">High Probability</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          {q.question}
                        </p>
                        <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg space-y-1 font-mono">
                          <span className="font-bold text-slate-900 block font-sans">Model Marking Solution:</span>
                          <p className="whitespace-pre-line">{q.stepByStepSolution}</p>
                        </div>
                        {q.examinerTip && (
                          <p className="text-xs text-indigo-700 font-medium">
                            💡 <span className="font-bold">Examiner Tip:</span> {q.examinerTip}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-blue-700">Q1. (CBSE Board 2024 - 5 Marks)</span>
                          <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">Repeated 5x</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          Draw a neat ray diagram showing image formation by a concave mirror for an object between F and C. State nature, position, and calculate screen distance for f=15cm, u=-25cm.
                        </p>
                        <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded font-mono">
                          Answer: v = -37.5 cm (screen placed 37.5 cm in front of mirror). Height h\' = -6 cm (inverted and enlarged). Ray diagram requires arrows pointing towards and away from mirror.
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-blue-700">Q2. (CBSE Board 2023 - 3 Marks)</span>
                          <span className="bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">Repeated 4x</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900">
                          State two observations when 2g of lead nitrate powder is heated in a boiling tube. Write the balanced chemical equation.
                        </p>
                        <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded font-mono">
                          Answer: Brown fumes of NO2 gas evolved, yellow solid residue of PbO remains. Balanced eq: 2Pb(NO3)2(s) --Δ&rarr; 2PbO(s) + 4NO2(g) + O2(g).
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="bg-white border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print Verified PDF</span>
            </button>
            <span className="text-xs text-slate-400 hidden sm:inline">Offline ready • High resolution</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onPlayMCQGame}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span>Play Chapter MCQ Game 🎮</span>
            </button>

            <button
              onClick={onOpenVoiceAI}
              className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Mic className="w-4 h-4 text-indigo-600" />
              <span>Ask Voice AI</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
