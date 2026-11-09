import React from 'react';
import developerPhoto from '../assets/sudhan_varma.jpg';
import { 
  Home, Info, Code2, Calendar, Users, Globe, User, 
  Mail, Sparkles, CheckCircle2, Award, Terminal, Shield, 
  Cpu, Rocket, ExternalLink, School, Crown, GraduationCap
} from 'lucide-react';

interface DeveloperSlideViewProps {
  onGoHome: () => void;
  onGoInfo: () => void;
  language: 'en' | 'te';
}

export const DeveloperSlideView: React.FC<DeveloperSlideViewProps> = ({
  onGoHome,
  onGoInfo,
  language
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Header Banner for Slide 3 (Developer Side) */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-900/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                Slide 3 • Developer & Engineering Side
              </span>
              <span className="text-xs text-indigo-300 font-medium">
                Official Attribution & System Dossier
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'te' ? 'డెవలపర్ & ఇంజనీరింగ్ వివరాలు' : 'Developer & Engineering Attribution'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
              {language === 'te'
                ? 'సమ్మరీకీ వెబ్ ప్లాట్‌ఫారమ్ రూపకర్త, డెవలపర్స్ గ్రూప్, మరియు అధికారిక అభివృద్ధి తేదీ వివరాలు.'
                : 'Core architecture, developer profile, engineering group, and system release information for SummaryKey.'}
            </p>
          </div>

          {/* Quick Jump Buttons in Header */}
          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            <button
              onClick={onGoHome}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all border border-white/15 cursor-pointer active:scale-95"
              title="Return to Slide 1 (Home)"
            >
              <Home className="w-4 h-4 text-blue-300" />
              <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Slide 1 (Home)'}</span>
            </button>

            <button
              onClick={onGoInfo}
              className="px-4 py-2.5 rounded-xl bg-blue-600/60 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all border border-blue-400/30 cursor-pointer active:scale-95"
              title="Go to Slide 2 (Info & Benchmarks)"
            >
              <Info className="w-4 h-4 text-blue-200" />
              <span>{language === 'te' ? 'ఇన్ఫో (స్లైడ్ 2)' : 'Slide 2 (Info)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY SPECIFICATION CARDS: Web Name, Developer, Developed Group, Date of Developed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Web Name */}
        <div className="bg-white rounded-2xl p-5 border-2 border-blue-100 hover:border-blue-300 shadow-sm transition-all hover:shadow-md space-y-3 group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Attribute #1
            </span>
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Web Name
            </div>
            <div className="font-display text-2xl font-black text-slate-900 tracking-tight mt-1">
              SummaryKey
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Next-generation syllabus discovery and academic mastery engine for Visakhapatnam.
            </p>
          </div>
        </div>

        {/* Card 2: Developer */}
        <div className="bg-white rounded-2xl p-5 border-2 border-amber-200 hover:border-amber-400 shadow-sm transition-all hover:shadow-md space-y-3 group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md flex items-center gap-1">
              <Crown className="w-3 h-3 fill-amber-700 text-amber-700" />
              CEO OF SUMMARYKEY
            </span>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <User className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Developer & Founder
            </div>
            <div className="font-display text-2xl font-black text-slate-900 tracking-tight mt-1 text-blue-900">
              SUDHAN VARMA CH
            </div>
            <div className="text-xs font-bold text-blue-700 mt-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Studied in Visakha Valley School</span>
            </div>
            <p className="text-xs text-slate-600 mt-1.5">
              Lead Architect, Full-Stack Engineer & Academic Intelligence Designer.
            </p>
          </div>
        </div>

        {/* Card 3: Developed Group */}
        <div className="bg-white rounded-2xl p-5 border-2 border-purple-100 hover:border-purple-300 shadow-sm transition-all hover:shadow-md space-y-3 group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
              Attribute #3
            </span>
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Developed Group
            </div>
            <div className="font-display text-2xl font-black text-slate-900 tracking-tight mt-1 text-purple-900">
              CodeForgers
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Premier student developer collective building high-speed open tools for coastal Andhra.
            </p>
          </div>
        </div>

        {/* Card 4: Date of Developed */}
        <div className="bg-white rounded-2xl p-5 border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all hover:shadow-md space-y-3 group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              Attribute #4
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Date of Developed
            </div>
            <div className="font-display text-2xl font-black text-slate-900 tracking-tight mt-1 text-emerald-700 font-mono">
              30-10-2026
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Official launch and deployment baseline registered across Visakhapatnam nodes.
            </p>
          </div>
        </div>

      </div>

      {/* 3. IN-DEPTH DEVELOPER PROFILE HERO CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-md space-y-7">
        
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-5">
            {/* Developer Photo Portrait Container */}
            <div className="relative w-28 h-36 sm:w-32 sm:h-44 rounded-2xl bg-gradient-to-tr from-amber-400 via-blue-600 to-indigo-700 p-1 shadow-xl shrink-0 group">
              <div className="w-full h-full bg-slate-950 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center border border-white/20">
                <img
                  src={developerPhoto}
                  alt="SUDHAN VARMA CH - CEO & Architect of SummaryKey"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './sudhan_varma.jpg';
                  }}
                />
                {/* Fallback & Monogram Badge overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-1.5 pointer-events-none">
                  <span className="font-display font-black text-xs text-amber-400 tracking-wider text-center drop-shadow-md">
                    SV
                  </span>
                  <span className="text-[8px] font-black text-white uppercase tracking-widest text-center -mt-0.5 drop-shadow-md">
                    CEO • ARCHITECT
                  </span>
                </div>
              </div>
              
              {/* Gold Crown Pin */}
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center shadow-md border-2 border-white ring-1 ring-amber-500/30">
                <Crown className="w-3.5 h-3.5 fill-slate-950" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <Crown className="w-3.5 h-3.5 fill-slate-950" />
                  CEO OF SUMMARYKEY
                </span>
                <span className="bg-blue-100 text-blue-900 border border-blue-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                  Studied in Visakha Valley School
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-purple-600" />
                  CodeForgers Founder
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Lead Software Architect
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1.5">
                SUDHAN VARMA CH
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                CEO OF SUMMARYKEY • Principal Engineer • CodeForgers Engineering Group
              </p>
            </div>
          </div>

          {/* Contact and Direct Channel - CEO OF SUMMARYKEY Near Email */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto items-start lg:items-end">
            <div className="flex items-center gap-2 flex-wrap justify-start lg:justify-end">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Crown className="w-3 h-3 fill-slate-950" />
                CEO OF SUMMARYKEY
              </span>
              <span className="bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <School className="w-3 h-3 text-blue-600" />
                Studied in Visakha Valley School
              </span>
            </div>

            <div className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto border border-slate-800">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Lead Architect & Founder</span>
              <span className="text-[10px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded uppercase">
                CEO
              </span>
            </div>
            
            <div className="text-[11px] text-slate-500 text-center lg:text-right font-medium">
              Registered Launch: <strong className="text-slate-800 font-mono">30-10-2026</strong>
            </div>
          </div>
        </div>

        {/* Developer Mission Statement with Visakha Valley School Attribution */}
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Developer Rationale & Engineering Blueprint</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
            "SummaryKey was designed and built by <strong>SUDHAN VARMA CH</strong> (<strong>CEO OF SUMMARYKEY</strong>, who <strong>studied in Visakha Valley School</strong>) under CodeForgers on <strong>30-10-2026</strong> to solve the fragmented study material problem in Visakhapatnam. Instead of students spending 14+ minutes hunting through spam-ridden Telegram and WhatsApp groups, SummaryKey delivers peer-audited unit notes, solved PYQ question vaults, interactive chapter MCQ quests, and real-time Gemini Voice AI clarification in under 2 seconds."
          </p>
        </div>

        {/* Technical Architecture & Stack Built by SUDHAN VARMA CH */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-600" />
            <span>Technical Infrastructure Built for SummaryKey</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Voice AI & Intelligence</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated Google Gemini 3.8 Flash model supporting streaming audio playback, Telugu and English bilingual explanation, and instant unit context grounding.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Rocket className="w-4 h-4 text-purple-600" />
                <span>Gamified MCQ Quest</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Interactive chapter-end assessment module featuring Web Audio synthesized soundscapes, 3-heart survival mode, real-time timer countdowns, and XP streaks.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Syllabus Curation Engine</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indexing Visakha Valley School (CBSE 10/12), Timpany, GVPCOE, GITAM, ANITS, Raghu, and AU with verified exam papers and answer keys.
              </p>
            </div>

          </div>
        </div>

        {/* Verified Specifications Summary Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden">
          <div className="bg-slate-100/80 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              Official System Dossier & Registration Table
            </span>
            <span className="text-[11px] font-mono text-slate-500 font-bold">
              ID: SUMMARYKEY-VZ-20261030
            </span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
              <span className="font-semibold text-slate-500">Web Name</span>
              <span className="sm:col-span-2 font-bold text-slate-900 text-sm">SummaryKey</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50/50">
              <span className="font-semibold text-slate-500">Developer & Title</span>
              <div className="sm:col-span-2 flex items-center gap-2 flex-wrap">
                <span className="font-bold text-blue-900 text-sm">SUDHAN VARMA CH</span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  CEO OF SUMMARYKEY
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
              <span className="font-semibold text-slate-500">Schooling & Alma Mater</span>
              <div className="sm:col-span-2 font-bold text-blue-800 text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Studied in Visakha Valley School</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50/50">
              <span className="font-semibold text-slate-500">Developers Group</span>
              <span className="sm:col-span-2 font-bold text-purple-900 text-sm">CodeForgers</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
              <span className="font-semibold text-slate-500">Date of Developed</span>
              <span className="sm:col-span-2 font-bold text-emerald-800 font-mono text-sm">30-10-2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-slate-50/50">
              <span className="font-semibold text-slate-500">Official Role</span>
              <div className="sm:col-span-2 flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-slate-900">Lead Architect & Systems Engineer</span>
                <span className="bg-amber-400/30 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded border border-amber-400/50 uppercase">
                  CEO OF SUMMARYKEY
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
              <span className="font-semibold text-slate-500">Primary Coverage</span>
              <span className="sm:col-span-2 text-slate-800">
                Visakha Valley School (CBSE 10/12), Timpany, DPS Vizag, GVPCOE, GITAM, ANITS, Raghu, AU
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. BOTTOM THREE BUTTONS: Home (Slide 1), Info (Slide 2), Developer (Slide 3 - Current) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-600 text-center sm:text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
          <span>
            {language === 'te'
              ? 'మీరు స్లైడ్ 3 (డెవలపర్) చూస్తున్నారు. హోమ్ లేదా సమాచార పేజీ కోసం క్రింది బటన్లను నొక్కండి.'
              : 'Viewing Slide 3 (Developer). Use the navigation buttons below to toggle between slides.'}
          </span>
        </div>

        {/* 3 Nav Buttons */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
          
          {/* Button 1: Home */}
          <button
            onClick={onGoHome}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
            title="Go to Slide 1 (Home - Big Blue Box)"
          >
            <Home className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Home (Slide 1)'}</span>
          </button>

          {/* Button 2: Info */}
          <button
            onClick={onGoInfo}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
            title="Go to Slide 2 (Info & Benchmarks)"
          >
            <Info className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'ఇన్ఫో (స్లైడ్ 2)' : 'Info (Slide 2)'}</span>
          </button>

          {/* Button 3: Developer (Active) */}
          <button
            onClick={() => {}}
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md ring-4 ring-blue-500/20 cursor-default"
            title="Currently viewing Slide 3 (Developer)"
          >
            <Code2 className="w-4 h-4 text-amber-300" />
            <span>{language === 'te' ? 'డెవలపర్ (స్లైడ్ 3 - ప్రస్తుత)' : 'Developer (Slide 3)'}</span>
          </button>

        </div>
      </div>

    </div>
  );
};
