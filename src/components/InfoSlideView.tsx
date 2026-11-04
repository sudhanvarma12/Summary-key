import React, { useState } from 'react';
import { 
  Home, Info, ArrowLeft, ArrowRight, Shield, Award, 
  CheckCircle, Star, School, Terminal, Gamepad2, Mic, 
  Mail, BookOpen, ChevronRight, Layers, Users, Code2, Calendar, Crown, GraduationCap
} from 'lucide-react';
import { BenchmarkProofCard } from './BenchmarkProofCard';
import { WhyItMattersSection } from './WhyItMattersSection';
import { MidtermCTABanner } from './MidtermCTABanner';

interface InfoSlideViewProps {
  onGoHome: () => void;
  onGoDeveloper?: () => void;
  onOpenSelector: () => void;
  onOpenVoiceAI: () => void;
  onOpenBenchmark: () => void;
  language: 'en' | 'te';
  initialSubSlide?: number;
}

export const InfoSlideView: React.FC<InfoSlideViewProps> = ({
  onGoHome,
  onGoDeveloper,
  onOpenSelector,
  onOpenVoiceAI,
  onOpenBenchmark,
  language,
  initialSubSlide = 0
}) => {
  const [subSlide, setSubSlide] = useState(initialSubSlide);

  const SUB_SLIDES = [
    {
      id: 0,
      title: language === 'te' ? 'బెంచ్‌మార్క్ & ప్రభావం' : 'Benchmarks & Scale',
      badge: 'PART 1 • DEMO PROOF & SCALE'
    },
    {
      id: 1,
      title: language === 'te' ? 'విశాఖ విద్యా సంస్థలు' : 'Institutions Covered',
      badge: 'PART 2 • CURRICULUM DIRECTORY'
    },
    {
      id: 2,
      title: language === 'te' ? 'AI & గేమ్ సిస్టమ్స్' : 'Engines & Tech Suite',
      badge: 'PART 3 • INTERACTIVE SUITE'
    },
    {
      id: 3,
      title: language === 'te' ? 'డెవలపర్ & క్రెడిట్స్ (లాస్ట్ స్లైడ్)' : 'Developer & Credits (Last Slide)',
      badge: '★ FINAL SLIDE • OFFICIAL ATTRIBUTION'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Banner for Slide 2 */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-blue-800/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Slide 2 • Information & Documentation
            </span>
            <span className="text-xs text-blue-200">
              SummaryKey Coastal EdTech
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {language === 'te' ? 'సమాచార పేజీ & సాంకేతిక వివరాలు' : 'Platform Information & Verification'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            {language === 'te'
              ? 'సిలబస్ శోధన వేగం, AISHE గణాంకాలు, విశాఖ వ్యాలీ స్కూల్ మ్యాపింగ్ మరియు డెవలపర్ వివరాలు.'
              : 'Retrieval benchmarks, AISHE higher-ed scale, Visakha Valley School syllabus mapping, and developer leadership.'}
          </p>
        </div>

        {/* Slide navigation in Slide 2 Header */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
          <button
            onClick={onGoHome}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer border border-white/15 active:scale-95"
            title="Return to Slide 1 (Home)"
          >
            <Home className="w-4 h-4 text-blue-300" />
            <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Slide 1 (Home)'}</span>
          </button>

          {onGoDeveloper && (
            <button
              onClick={onGoDeveloper}
              className="px-3.5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-95"
              title="Open Developer (Slide 3)"
            >
              <Code2 className="w-4 h-4 text-slate-950" />
              <span>{language === 'te' ? 'డెవలపర్ (స్లైడ్ 3)' : 'Slide 3 (Developer) →'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Sub-Slide Selector Tabs */}
      <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {SUB_SLIDES.map((s) => (
          <button
            key={s.id}
            onClick={() => setSubSlide(s.id)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              subSlide === s.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {s.id === 3 && <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />}
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      {/* SUB-SLIDE 0: BENCHMARKS & SCALE (The original remaining parts from the home page) */}
      {subSlide === 0 && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          <div className="bg-blue-50/50 border border-blue-200/60 rounded-xl p-4 flex items-center justify-between text-xs text-blue-900">
            <span className="font-semibold">
              📊 Live Retrieval Performance & Ministry of Education AISHE Benchmarks
            </span>
            <button
              onClick={() => setSubSlide(1)}
              className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Next: Institutions Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 1. Demo Proof Retrieval Benchmark Card */}
          <BenchmarkProofCard
            onRunTest={onOpenBenchmark}
            language={language}
          />

          {/* 2. Why It Matters & Scale Section */}
          <WhyItMattersSection language={language} />

          {/* 3. Ready to study Exam / Mid-term CTA Banner */}
          <MidtermCTABanner
            onOpenSelector={onOpenSelector}
            language={language}
          />

        </div>
      )}

      {/* SUB-SLIDE 1: INSTITUTIONS & SYLLABUS DIRECTORY */}
      {subSlide === 1 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Visakhapatnam Curriculum Directory</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Verified Schools & Engineering Universities
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              SummaryKey indexes curriculum documents strictly mapped to each syllabus code, board regulation, and exam schedule in Visakhapatnam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Visakha Valley School</h4>
                  <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">CBSE 10 & 12</span>
                </div>
                <p className="text-xs text-slate-600">
                  Full CBSE 2024-25 board exam blueprints, NCERT exemplar problems, and 5-year repeated board questions.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-purple-100 bg-purple-50/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Timpany School & DPS Vizag</h4>
                  <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">ICSE / CBSE</span>
                </div>
                <p className="text-xs text-slate-600">
                  Senior secondary syllabus guides, marking scheme rubrics, and high-yield formula cheatsheets.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">GVPCOE (Gayatri Vidya Parishad)</h4>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Autonomous R20 / R23</span>
                </div>
                <p className="text-xs text-slate-600">
                  B.Tech CSE, IT, ECE, EEE mid-term units, peer notes audited by 9.0+ CGPA students, and lab records.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-amber-100 bg-amber-50/40 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">GITAM, ANITS, Raghu & AUCOE</h4>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Autonomous & NAAC A+</span>
                </div>
                <p className="text-xs text-slate-600">
                  Verified university notes, end-semester solved question banks, and canteen/mess schedules.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSubSlide(2)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next: AI & Game Engines →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-SLIDE 2: ENGINES & TECH SUITE */}
      {subSlide === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive System Suite</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Built-In AI, Audio & Gamified Exam Tools
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-purple-50/60 border border-purple-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-purple-900 text-sm">
                  <Gamepad2 className="w-4 h-4 text-purple-600" />
                  <span>Chapter MCQ Quest Game</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Placed at the end of every verified PDF note. Features 3 lives, timers, XP rewards, and Web Audio sound effects.
                </p>
              </div>

              <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                  <Mic className="w-4 h-4 text-blue-600" />
                  <span>Gemini 3.8 Flash Voice AI</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time conversational voice tutor capable of answering syllabus doubts in Telugu and English.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Solved PYQ Vault</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Past exam questions categorized by repetition frequency, marks weightage, and official step marks.
                </p>
              </div>

              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>100% Peer Verification</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict academic invariants ensuring 0% spam, no broken links, and high-resolution PDF downloads.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSubSlide(3)}
                className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Go to Final Slide (Developer Credits) →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-SLIDE 3: ★ THE LAST SLIDE - DEVELOPER & GROUP CREDITS */}
      {subSlide === 3 && (
        <div className="space-y-6 animate-in zoom-in-95 duration-200">
          
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 border border-amber-400/40 text-amber-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>★ Official Final Slide • Developer & Group Credits</span>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
              Slide 4 of 4 (Last Slide)
            </span>
          </div>

          {/* Main Hero Card for Developer */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-blue-800/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              
              {/* App Name & Developers Group */}
              <div className="border-b border-white/10 pb-5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
                  <span>Name</span>
                  <span>•</span>
                  <span>Developers Group</span>
                </div>
                <div className="mt-2 flex flex-wrap items-baseline gap-3">
                  <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    SummaryKey
                  </h1>
                  <span className="text-slate-400 font-light text-2xl">by</span>
                  <span className="font-display text-3xl sm:text-4xl font-bold text-blue-300">
                    CodeForgers
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  The Student-First Engineering Collective • Visakhapatnam, Andhra Pradesh
                </p>
              </div>

              {/* DEVELOPED BY - Featured Profile */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  <div className="flex items-center gap-4">
                    {/* Badge / Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-blue-600 p-0.5 shadow-lg shadow-orange-500/20 shrink-0">
                      <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-amber-400 font-extrabold text-2xl tracking-wider font-display">
                        SV
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-black uppercase tracking-wider text-amber-950 bg-amber-400 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                          <Crown className="w-3 h-3 fill-slate-950" />
                          CEO OF SUMMARYKEY
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                          Studied in Visakha Valley School
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                      
                      <div className="text-xs text-slate-400 font-medium mt-1.5">Developed by</div>
                      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        SUDHAN VARMA CH
                      </h2>
                    </div>
                  </div>

                  {/* Contact Email Button with CEO OF SUMMARYKEY badge */}
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider flex items-center gap-1">
                      <Crown className="w-3 h-3 fill-amber-300" />
                      CEO OF SUMMARYKEY
                    </span>
                    <a 
                      href="mailto:sudhanvarma12@gmail.com"
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/20"
                    >
                      <Mail className="w-4 h-4 text-amber-300" />
                      <span>sudhanvarma12@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Developer Statement */}
                <div className="border-t border-white/10 pt-4 text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "SummaryKey was architected and built by <strong>SUDHAN VARMA CH</strong> (<strong>CEO OF SUMMARYKEY</strong>, who <strong>studied in Visakha Valley School</strong>) to eliminate academic chaos in Visakhapatnam. By bringing authentic, peer-verified syllabi, solved question vaults, chapter MCQ quests, and Gemini Voice AI into one seamless interface, every student can achieve exam clarity in under 2 seconds."
                </div>

                {/* Attribution Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 pt-2 text-[11px]">
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">Platform Name</span>
                    <span className="font-bold text-white text-sm">SummaryKey</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">Developers Group</span>
                    <span className="font-bold text-blue-300 text-sm">CodeForgers</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">Developer</span>
                    <span className="font-bold text-amber-300 text-sm">SUDHAN VARMA CH</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">Title</span>
                    <span className="font-bold text-amber-400 text-xs">CEO OF SUMMARYKEY</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">School</span>
                    <span className="font-bold text-blue-300 text-[11px]">Visakha Valley</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                    <span className="text-slate-400 block font-normal">Date Developed</span>
                    <span className="font-bold text-emerald-300 font-mono text-sm">30-10-2026</span>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block font-normal">AI Core</span>
                    <span className="font-bold text-indigo-300 text-sm">Gemini 3.8 Flash</span>
                  </div>
                </div>

              </div>

              {/* Technologies Engineered */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
                <span className="text-slate-400 text-xs">Architected & Engineered with:</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">React 19</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">Tailwind CSS</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">Google Gemini 3.8 Flash API</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">Web Audio API</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs">Express Node.js</span>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* Persistent Three Buttons at the Bottom of Slide 2: HOME, INFO, and DEVELOPER */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-600 text-center sm:text-left">
          <span>You are viewing <strong>Slide 2 (Info)</strong>. Press <strong>Home</strong> for Slide 1 or <strong>Developer</strong> for Slide 3.</span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
          <button
            onClick={onGoHome}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
            title="Go to Slide 1 (Home)"
          >
            <Home className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Home (Slide 1)'}</span>
          </button>

          <button
            onClick={() => {}}
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md ring-4 ring-blue-500/20 cursor-default"
            title="Currently viewing Slide 2 (Info)"
          >
            <Info className="w-4 h-4 text-white" />
            <span>{language === 'te' ? 'ఇన్ఫో (స్లైడ్ 2 - ప్రస్తుత)' : 'Info (Slide 2)'}</span>
          </button>

          {onGoDeveloper && (
            <button
              onClick={onGoDeveloper}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-900 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95 group"
              title="Open Developer (Slide 3)"
            >
              <Code2 className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
              <span>{language === 'te' ? 'డెవలపర్ (స్లైడ్ 3) →' : 'Developer (Slide 3) →'}</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
