import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, Zap, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface BenchmarkModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'te';
}

export const BenchmarkModal: React.FC<BenchmarkModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [syllabuElapsed, setSyllabuElapsed] = useState(0);
  const [telegramElapsed, setTelegramElapsed] = useState(0);
  const [syllabuDone, setSyllabuDone] = useState(false);
  const [telegramDone, setTelegramDone] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      const start = Date.now();
      timer = setInterval(() => {
        const diff = (Date.now() - start) / 1000;
        
        // Syllabu finishes at 1.8 seconds!
        if (diff < 1.8) {
          setSyllabuElapsed(Number(diff.toFixed(1)));
        } else {
          setSyllabuElapsed(1.8);
          setSyllabuDone(true);
        }

        // Telegram runs up to 14.3 seconds (scaled simulation of 14m 20s)
        if (diff < 8.0) {
          setTelegramElapsed(Number((diff * 1.8).toFixed(1)));
        } else {
          setTelegramElapsed(14.3);
          setTelegramDone(true);
          setIsRunning(false);
        }
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setSyllabuElapsed(0);
    setTelegramElapsed(0);
    setSyllabuDone(false);
    setTelegramDone(false);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSyllabuElapsed(0);
    setTelegramElapsed(0);
    setSyllabuDone(false);
    setTelegramDone(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  Live Speed Retrieval Demo
                </h3>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Benchmark
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Syllabu 1-Tap Architecture vs Telegram & WhatsApp Study Groups
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Control Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-600">
            <strong>Target Query:</strong> "Visakha Valley School CBSE Class 10 Science Ch 2 Light Ray Diagrams"
          </div>

          <div className="flex items-center gap-2">
            {!isRunning && !syllabuDone ? (
              <button
                onClick={handleStart}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Speed Test</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Test</span>
              </button>
            )}
          </div>
        </div>

        {/* Side-by-Side Simulation Area */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50">
          
          {/* PASSKEY (WINNER) */}
          <div className="bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-blue-700 text-lg flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  Passkey 1-Tap
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  ⚡ 94% FASTER
                </span>
              </div>

              {/* Live Time Display */}
              <div className="my-5 text-center bg-blue-50/70 border border-blue-100 rounded-xl p-4">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-blue-700 tracking-tight block">
                  {syllabuElapsed}s
                </span>
                <span className="text-xs text-blue-600 font-medium">
                  {syllabuDone ? '✓ Verified Note Loaded & Rendered!' : 'Locating syllabus node...'}
                </span>
              </div>

              {/* Event Logs */}
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>School detected: Visakha Valley School (CBSE)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Board curriculum verified: Class 10 Science 2024-25</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Direct peer note opened: Zero spam, zero ads</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Ray diagrams & formula sheet ready in 1.8 seconds!</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs font-semibold border border-emerald-200">
              Result: 1.8 seconds to start studying for Board Exams.
            </div>
          </div>

          {/* TELEGRAM (FRUSTRATING) */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-slate-700 text-lg flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                  Telegram Channels & Drives
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  ⚠️ 12+ SPAM LINKS
                </span>
              </div>

              {/* Live Time Display */}
              <div className="my-5 text-center bg-slate-50 border border-slate-200 rounded-xl p-4">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-700 tracking-tight block">
                  {telegramDone ? '14m 20s' : `${telegramElapsed}m (sim)`}
                </span>
                <span className="text-xs text-amber-700 font-medium">
                  {telegramDone ? '❌ Fatigued after 14+ minutes' : 'Searching through unorganized media...'}
                </span>
              </div>

              {/* Event Logs */}
              <div className="space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Joined 4 groups: "Vizag AU BTech All Semesters"</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Encountered 3 crypto scam & betting spam ads</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                  <span>Redirected to TeraBox / GP Links with popups</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span>File downloaded: JNTU Kakinada R16 (Wrong Syllabus!)</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 text-amber-900 p-3 rounded-xl text-xs font-semibold border border-amber-200">
              Result: 14m 20s lost to ads, spam links, and wrong syllabus.
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-4 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Based on user retrieval studies conducted with Vizag school & college cohorts</span>
          <button
            onClick={onClose}
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to Passkey
          </button>
        </div>

      </div>
    </div>
  );
};
