import React from 'react';
import { Search, Zap, Mic } from 'lucide-react';

interface HeroProps {
  onFindSyllabus: () => void;
  onLiveSpeedDemo: () => void;
  onVoiceConversation: () => void;
  language: 'en' | 'te';
}

export const Hero: React.FC<HeroProps> = ({
  onFindSyllabus,
  onLiveSpeedDemo,
  onVoiceConversation,
  language
}) => {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#004ac6] via-[#003da8] to-[#01256d] text-white p-7 sm:p-10 md:p-14 shadow-xl border border-blue-400/20">
      {/* Subtle Dot Grid Pattern */}
      <div 
        className="absolute inset-0 hero-dot-pattern opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Decorative subtle ambient coastal glow */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl">
        
        {/* Coastal Schools & Colleges Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>
            {language === 'te' 
              ? 'విశాఖ వ్యాలీ స్కూల్, ఇంజనీరింగ్ & డిగ్రీ కాలేజీలు' 
              : 'Visakha Valley School, Engineering & Degree Colleges'}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.18] text-balance">
          {language === 'te' ? (
            <>
              మీ స్కూల్ & కాలేజ్ సిలబస్‌కు ఒక్క ట్యాప్: పీర్-వెరిఫైడ్ నోట్స్ మరియు శీఘ్ర వీడియో సారాంశాలు.
            </>
          ) : (
            <>
              One tap to your exact school & college syllabus: peer-verified notes and quick video summaries.
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-blue-100/90 text-base sm:text-lg max-w-2xl font-normal leading-relaxed text-balance">
          {language === 'te' ? (
            'కోడ్‌ఫోర్జర్స్ విశాఖ వ్యాలీ స్కూల్ (CBSE), ఇంజనీరింగ్ కాలేజీల సిలబస్‌కు ఖచ్చితంగా మ్యాప్ చేయబడిన పీర్-ధృవీకరించబడిన నోట్స్ మరియు వీడియో సారాంశాలను ఒక్క ట్యాప్‌లో అందిస్తుంది.'
          ) : (
            'CodeForgers organizes peer-verified notes and video summaries strictly mapped to a student\'s exact school (Visakha Valley, Timpany, DPS) or college syllabus in one tap.'
          )}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          {/* Primary CTA */}
          <button
            onClick={onFindSyllabus}
            className="px-6 py-3.5 rounded-xl bg-white text-blue-800 hover:bg-blue-50 active:scale-[0.98] font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Search className="w-4 h-4 text-blue-700" />
            <span>
              {language === 'te' ? 'సిలబస్ వెతకండి (స్కూల్ / కాలేజ్)' : 'Find My School / College Syllabus'}
            </span>
          </button>

          {/* Dedicated Doubt Solving (Gemini AI) Button in the Blue Box */}
          <button
            onClick={onVoiceConversation}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 hover:brightness-105 active:scale-[0.98] font-bold text-sm sm:text-base shadow-lg shadow-amber-400/25 transition-all flex items-center gap-2.5 cursor-pointer border border-amber-300 group"
            title="Instant Doubt Solving with Gemini AI"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span className="text-slate-950">
              {language === 'te' ? 'సందేహ నివృత్తి (జెమిని AI) 🤖' : 'Doubt Solving (Gemini AI) 🤖'}
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onLiveSpeedDemo}
            className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white border border-white/25 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>
              {language === 'te' ? 'టెలిగ్రామ్ తో ప్రత్యక్ష వేగ డెమో' : 'Live Speed Demo vs Telegram'}
            </span>
          </button>

          {/* Voice AI Tutor */}
          <button
            onClick={onVoiceConversation}
            className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-500/40 to-indigo-500/40 hover:from-blue-500/60 hover:to-indigo-500/60 text-white border border-white/30 font-semibold text-sm sm:text-base backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer shadow-sm group"
          >
            <Mic className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform" />
            <span>
              {language === 'te' ? 'జెమిని వాయిస్ చాట్ 🎙️' : 'Gemini Voice Tutor 🎙️'}
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
