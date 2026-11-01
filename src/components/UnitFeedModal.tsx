import React from 'react';
import { X, Layers, Star, Clock, CheckCircle2, FileText, Mic, Sparkles } from 'lucide-react';
import { SAMPLE_SUBJECTS, INSTITUTIONS } from '../data/colleges';
import { Subject, Unit } from '../types';

interface UnitFeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenNote: (subject: Subject, unit: Unit) => void;
  onOpenVoiceAI: () => void;
  language: 'en' | 'te';
}

export const UnitFeedModal: React.FC<UnitFeedModalProps> = ({
  isOpen,
  onClose,
  onOpenNote,
  onOpenVoiceAI,
  language
}) => {
  if (!isOpen) return null;

  // Flatten all units with subject & institution metadata
  const feedItems = SAMPLE_SUBJECTS.flatMap((subject) => {
    const institution = INSTITUTIONS.find(c => c.id === subject.institutionId);
    return subject.units.map(unit => ({
      subject,
      unit,
      institution
    }));
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[90vh] max-h-[780px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#004ac6] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  {language === 'te' ? 'పీర్-వెరిఫైడ్ యూనిట్ ఫీడ్' : 'Peer-Verified Unit Feed'}
                </h3>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Trending Notes
                </span>
              </div>
              <p className="text-xs text-blue-100 font-normal">
                {language === 'te'
                  ? 'విశాఖ వ్యాలీ స్కూల్ (CBSE) మరియు కాలేజీలలో అత్యధికంగా చదివిన నోట్స్'
                  : 'Most upvoted notes across Visakha Valley School, GVP, GITAM, ANITS, and AU'}
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

        {/* Feed List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {feedItems.map(({ subject, unit, institution }, idx) => (
            <div
              key={`${subject.id}-${unit.unitNumber}`}
              className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded">
                    {institution?.name} • {subject.regulationOrBoard}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {subject.code} - {subject.name}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-amber-600 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {unit.rating}
                  </span>
                  <span>({unit.upvotes} upvotes)</span>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-slate-900">
                  Unit {unit.unitNumber}: {unit.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {language === 'te' ? unit.summaryTelugu : unit.summaryEnglish}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified by {unit.verifiedBy}</span>
                  <span className="text-slate-400 font-normal">({unit.verifiedRole})</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenVoiceAI}
                    className="text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Mic className="w-3 h-3 text-indigo-600" />
                    <span>Gemini Voice</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenNote(subject, unit);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open Verified Note PDF</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Continuous peer-review by semester toppers</span>
          <button
            onClick={onClose}
            className="text-blue-600 font-semibold hover:underline"
          >
            Close Feed
          </button>
        </div>

      </div>
    </div>
  );
};
