import React, { useState, useEffect } from 'react';
import { 
  X, Info, Shield, Users, BookOpen, Award, CheckCircle, 
  ChevronLeft, ChevronRight, Sparkles, Code2, Mail, ExternalLink, 
  Layers, Gamepad2, Mic, GraduationCap, Star, School, Terminal, ArrowRight, Crown
} from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'te';
  initialSlide?: number;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  language,
  initialSlide = 0
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(initialSlide);
    }
  }, [isOpen, initialSlide]);

  // Keyboard navigation for slides
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide(prev => Math.min(prev + 1, 3));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const SLIDES = [
    {
      id: 0,
      tabTitle: language === 'te' ? 'లక్ష్యం & విజన్' : 'Vision & Mission',
      badge: 'SLIDE 1 OF 4 • PLATFORM OVERVIEW'
    },
    {
      id: 1,
      tabTitle: language === 'te' ? 'విద్యా సంస్థలు' : 'Institutions & Reach',
      badge: 'SLIDE 2 OF 4 • CURRICULUM ARCHITECTURE'
    },
    {
      id: 2,
      tabTitle: language === 'te' ? 'AI & గేమ్ టెక్నాలజీ' : 'Engines & Tech',
      badge: 'SLIDE 3 OF 4 • INTERACTIVE SUITE'
    },
    {
      id: 3,
      tabTitle: language === 'te' ? 'డెవలపర్ & క్రెడిట్స్ (లాస్ట్ స్లైడ్)' : 'Developer & Credits (Last Slide)',
      badge: '★ FINAL SLIDE • LEADERSHIP & CREDITS'
    }
  ];

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, 3));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
  const goToLastSlide = () => setCurrentSlide(3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[90vh] max-h-[780px] overflow-hidden">
        
        {/* Slide Deck Top Header */}
        <div className="bg-[#004ac6] text-white px-5 sm:px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                  SummaryKey Information Deck
                </h3>
                <span className="bg-white/20 text-blue-100 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Slide {currentSlide + 1} / 4
                </span>
              </div>
              <p className="text-xs text-blue-100/90 hidden sm:block">
                Official presentation & engineering documentation for Visakhapatnam students
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentSlide !== 3 && (
              <button
                onClick={goToLastSlide}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-sm cursor-pointer"
                title="Jump directly to Developer Credits Slide"
              >
                <span>Jump to Last Slide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              title="Close Presentation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Tabs Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-3 sm:px-6 py-2 flex items-center justify-between gap-1 overflow-x-auto shrink-0 scrollbar-none">
          <div className="flex items-center gap-1 sm:gap-2">
            {SLIDES.map((slide) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(slide.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentSlide === slide.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {slide.id === 3 && <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
                <span>Slide {slide.id + 1}: {slide.tabTitle}</span>
              </button>
            ))}
          </div>

          {/* Quick indicator */}
          <span className="text-[11px] font-medium text-slate-500 hidden md:block">
            Use ← → keys to navigate
          </span>
        </div>

        {/* Slide Canvas Content (Scrollable if necessary) */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto bg-slate-50/50">
          
          {/* SLIDE 1: PLATFORM OVERVIEW & VISION */}
          {currentSlide === 0 && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>The Coastal EdTech Vision</span>
              </div>

              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  SummaryKey: One-Tap Academic Truth for Visakhapatnam
                </h1>
                <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                  Every semester and board exam season, students in Visakhapatnam waste precious hours wading through disorganized WhatsApp group drives, malware-ridden link shorteners, and outdated Telegram channels.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>The SummaryKey Quality Invariant</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <span className="font-bold text-blue-900 block mb-1">⚡ 1.8-Second Retrieval</span>
                    <span>Instant access to exact syllabus units without endless scrolling.</span>
                  </div>
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <span className="font-bold text-emerald-900 block mb-1">🔒 100% Peer-Verified</span>
                    <span>Audited by 98%+ CBSE Board toppers and 9.0+ CGPA engineering rankers.</span>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                    <span className="font-bold text-amber-900 block mb-1">🚫 0% Spam or Paywalls</span>
                    <span>No clickbait, no popup ads, no corrupt zip archives. Pure clean notes.</span>
                  </div>
                  <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                    <span className="font-bold text-purple-900 block mb-1">🎙️ Gemini Voice AI</span>
                    <span>Conversational exam coaching in both English and Telugu.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold block">Coastal Scale</span>
                  <p className="font-bold text-base sm:text-lg">Over 43M+ Higher Ed & CBSE students relying on digital courseware.</p>
                </div>
                <button
                  onClick={nextSlide}
                  className="px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer"
                >
                  Next Slide →
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 2: INSTITUTIONS & CURRICULUM ARCHITECTURE */}
          {currentSlide === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <School className="w-3.5 h-3.5" />
                <span>Curriculum Directory & Syllabus Mapping</span>
              </div>

              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Premier Schools & Universities Mapped
                </h2>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  SummaryKey provides fine-grained, unit-by-unit syllabus mapping across both school board examinations and autonomous collegiate degree programs.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    VVS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Visakha Valley School (CBSE)</h4>
                      <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">Classes 9, 10, 11, 12</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      CBSE Board 2024-25 curricula, NCERT exemplar solutions, and solved 5-year board questions for Science, Mathematics, Physics, Chemistry, and Computer Science.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    SCH
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Timpany School & DPS Visakhapatnam</h4>
                      <span className="text-[10px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded">CBSE / ICSE</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Core ICSE/ISC and CBSE syllabi with verified chapter summaries, board marking scheme guides, and experiment notes.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    ENG
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Autonomous Engineering Colleges</h4>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">B.Tech R20 / R23</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Gayatri Vidya Parishad (GVPCOE), GITAM Deemed University, ANITS, Raghu Engineering College, and Andhra University College of Engineering (AUCOE).
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={prevSlide}
                  className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  ← Previous Slide
                </button>
                <button
                  onClick={nextSlide}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Next: AI & Game Engines →
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 3: INTERACTIVE ENGINES & TECH SUITE */}
          {currentSlide === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>High-Performance Interactive Engines</span>
              </div>

              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Engineered for Maximum Retention & Mastery
                </h2>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                  SummaryKey replaces passive reading with active recall, audio synthesis, and conversational intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                    <Gamepad2 className="w-4 h-4 text-purple-600" />
                    <span>Chapter MCQ Quest Game</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gamified assessment at the end of every PDF note with 3 lives, question timers, instant audio feedback via Web Audio API, and XP multipliers.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                    <Mic className="w-4 h-4 text-blue-600" />
                    <span>Gemini 3.8 Flash Voice AI</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Voice-to-voice conversational study partner powered by Google Gemini 3.8 Flash API. Supports real-time speech queries in Telugu and English.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Solved PYQ Vault</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Past 5-year board and university examination questions tagged by mark weightage, repetition frequency, and official scoring keys.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Campus Dining & Mess AI</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Daily menu intelligence and nutritional reviews for student hostels and campus canteens across Visakhapatnam.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={prevSlide}
                  className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  ← Previous Slide
                </button>
                <button
                  onClick={goToLastSlide}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <span>Go to Final Slide (Developer Credits)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 4: THE LAST SLIDE - DEVELOPER & GROUP CREDITS */}
          {currentSlide === 3 && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200 max-w-2xl mx-auto">
              
              {/* Badge for the last slide */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-400/40 text-amber-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>The Final Slide • Official Project Attribution</span>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
                  Slide 4 of 4
                </span>
              </div>

              {/* Main Presentation Hero Card */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Platform & Group Header */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
                      <span>Platform Name</span>
                      <span>•</span>
                      <span>Developers Group</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-baseline gap-3">
                      <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        SummaryKey
                      </h1>
                      <span className="text-slate-400 font-light text-xl">by</span>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-blue-300">
                        CodeForgers
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                      The Student-First Engineering Collective • Visakhapatnam, Andhra Pradesh
                    </p>
                  </div>

                  {/* DEVELOPED BY - Prominent Featured Profile Box */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-4">
                        {/* Profile Avatar / Badge */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-blue-600 p-0.5 shadow-lg shadow-orange-500/20 shrink-0">
                          <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-amber-400 font-extrabold text-xl tracking-wider font-display">
                            SV
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-black uppercase tracking-wider text-amber-950 bg-amber-400 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                              <Crown className="w-3 h-3 fill-slate-950" />
                              CEO OF SUMMARYKEY
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                              Studied in Visakha Valley School
                            </span>
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                          </div>
                          
                          {/* Developed by SUDHAN VARMA CH */}
                          <div className="text-xs text-slate-400 font-medium mt-1">Developed by</div>
                          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                            SUDHAN VARMA CH
                          </h2>
                        </div>
                      </div>

                      {/* Contact / Email Pill - CEO OF SUMMARYKEY near email */}
                      <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                        <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
                          <Crown className="w-3 h-3 fill-amber-300" />
                          CEO OF SUMMARYKEY
                        </span>
                        <a 
                          href="mailto:sudhanvarma12@gmail.com"
                          className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors border border-white/20 shrink-0"
                        >
                          <Mail className="w-4 h-4 text-amber-300" />
                          <span>sudhanvarma12@gmail.com</span>
                        </a>
                      </div>
                    </div>

                    {/* Developer Statement */}
                    <div className="border-t border-white/10 pt-4 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      "SummaryKey was architected by <strong>SUDHAN VARMA CH</strong> (<strong>CEO OF SUMMARYKEY</strong>, alumnus who <strong>studied in Visakha Valley School</strong>) to empower students across Visakhapatnam with authentic, verified syllabus notes, interactive exam question vaults, gamified chapter quizzes, and real-time voice AI assistance."
                    </div>

                    {/* Highlights & Accreditations */}
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2 text-[11px]">
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">Platform</span>
                        <span className="font-bold text-white text-xs">SummaryKey</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">Developers Group</span>
                        <span className="font-bold text-blue-300 text-xs">CodeForgers</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">Developer</span>
                        <span className="font-bold text-amber-300 text-xs">SUDHAN VARMA CH</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">Title</span>
                        <span className="font-bold text-amber-400 text-xs">CEO OF SUMMARYKEY</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">School</span>
                        <span className="font-bold text-blue-300 text-[11px]">Visakha Valley</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10">
                        <span className="text-slate-400 block font-normal">Date Developed</span>
                        <span className="font-bold text-emerald-300 font-mono text-xs">30-10-2026</span>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                        <span className="text-slate-400 block font-normal">AI Core</span>
                        <span className="font-bold text-indigo-300 text-xs">Gemini 3.8 Flash</span>
                      </div>
                    </div>

                  </div>

                  {/* Engineering Stack Credential Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
                    <span className="text-slate-400 text-[11px]">Stack Engineered by SUDHAN VARMA CH:</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">React 19</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">TypeScript</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">Tailwind CSS</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">Google Gemini 3.8 Flash API</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">Web Audio API</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[11px]">Express Node.js</span>
                  </div>

                </div>
              </div>

              {/* Navigation Back & Action */}
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={prevSlide}
                  className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  ← Slide 3: Engines & Tech
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Done • Back to Notes
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Slide Deck Bottom Control Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-5 sm:px-6 py-3 flex items-center justify-between text-xs text-slate-600 shrink-0">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1 font-medium transition-colors cursor-pointer ${
              currentSlide === 0 
                ? 'opacity-40 cursor-not-allowed text-slate-400' 
                : 'hover:bg-slate-200 text-slate-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Slide</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-7 h-2.5 bg-blue-600 rounded-full' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
                title={`Go to Slide ${idx + 1}${idx === 3 ? ' (Developer: SUDHAN VARMA CH)' : ''}`}
              />
            ))}
          </div>

          {/* Next Button / Finished */}
          {currentSlide < 3 ? (
            <button
              onClick={nextSlide}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <span>Finish Deck</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
