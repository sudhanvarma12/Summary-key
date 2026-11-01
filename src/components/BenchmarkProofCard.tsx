import React from 'react';
import { Zap, AlertTriangle, Play } from 'lucide-react';

interface BenchmarkProofCardProps {
  onRunTest: () => void;
  language: 'en' | 'te';
}

export const BenchmarkProofCard: React.FC<BenchmarkProofCardProps> = ({
  onRunTest,
  language
}) => {
  return (
    <div 
      onClick={onRunTest}
      className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-bold text-[11px] px-2.5 py-0.5 rounded-md tracking-wider uppercase inline-block">
              DEMO PROOF
            </span>
            <span className="text-xs text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
              <Play className="w-3 h-3 fill-current" />
              {language === 'te' ? 'డెమో రన్ చేయండి' : 'Click to run interactive test'}
            </span>
          </div>

          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {language === 'te'
              ? 'రిట్రీవల్ బెంచ్‌మార్క్: పాస్కీ వర్సెస్ టెలిగ్రామ్'
              : 'Retrieval Benchmark: Passkey vs Telegram'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {language === 'te'
              ? 'విశాఖ వ్యాలీ స్కూల్ (CBSE బోర్డ్) మరియు B.Tech CSE సబ్జెక్టులలో పరీక్షించబడింది.'
              : 'Tested across Visakha Valley School (CBSE Board) & 1st/2nd Year B.Tech CSE in Visakhapatnam.'}
          </p>
        </div>

        {/* Right Side: Benchmark Comparison Boxes */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Passkey 1-Tap */}
          <div className="bg-[#eff5ff] border border-blue-200/80 rounded-xl p-3.5 sm:p-4 text-center min-w-[140px] shadow-sm">
            <span className="text-xs font-semibold text-blue-700 block">
              Passkey 1-Tap
            </span>
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-blue-700 tracking-tight block my-1">
              1.8s
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
              94% faster
            </span>
          </div>

          {/* Telegram Channels */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 text-center min-w-[140px] shadow-sm">
            <span className="text-xs font-semibold text-slate-500 block">
              Telegram Channels
            </span>
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-700 tracking-tight block my-1">
              14m 20s
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/70 px-2 py-0.5 rounded-full">
              <AlertTriangle className="w-3 h-3 text-amber-600" />
              12+ spam links
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
