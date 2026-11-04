import React, { useState } from 'react';
import { 
  X, HelpCircle, FileCheck, Award, Eye, EyeOff, Sparkles, 
  Mic, Download, CheckCircle, Search, Filter, BookOpen, Flame 
} from 'lucide-react';
import { PYQ_DATABASE, PYQuestion } from '../data/pyqData';
import { INSTITUTIONS } from '../data/colleges';
import { InstitutionId } from '../types';

interface PYQVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAskVoiceAI: (questionText: string, institutionName: string) => void;
  language: 'en' | 'te';
}

export const PYQVaultModal: React.FC<PYQVaultModalProps> = ({
  isOpen,
  onClose,
  onAskVoiceAI,
  language
}) => {
  const [selectedInstId, setSelectedInstId] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track which question answers are expanded
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({
    'pyq-vvs-sci-01': true // default open first one
  });

  if (!isOpen) return null;

  const toggleReveal = (id: string) => {
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPYQs = PYQ_DATABASE.filter(q => {
    if (selectedInstId !== 'all' && q.institutionId !== selectedInstId) return false;
    if (selectedYear !== 'all' && q.year.toString() !== selectedYear) return false;
    if (selectedSubject !== 'all' && !q.subjectName.toLowerCase().includes(selectedSubject.toLowerCase())) return false;
    if (searchQuery.trim()) {
      const qText = (q.question + ' ' + q.chapterOrUnit + ' ' + q.subjectName).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const getInstitutionName = (id: InstitutionId) => {
    const found = INSTITUTIONS.find(i => i.id === id);
    return found ? found.name : id;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[92vh] max-h-[840px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white border border-white/20">
              <FileCheck className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  {language === 'te' ? 'సమ్మరీకీ PYQ ఖజానా (గత పరీక్షల ప్రశ్నలు)' : 'SummaryKey PYQ Vault (Previous Year Questions)'}
                </h3>
                <span className="bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Solved with Marking Schemes
                </span>
              </div>
              <p className="text-xs text-blue-100/90 font-normal">
                Visakha Valley School CBSE 10/12 Board Papers & GVP/AU University End Exams
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Strip */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 space-y-3 shrink-0 text-xs">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PYQs by keyword (e.g. Concave mirror, Newton's rings, AVL Tree, √5 irrational)..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Institution Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-600">Institution:</span>
              <select
                value={selectedInstId}
                onChange={(e) => setSelectedInstId(e.target.value)}
                className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All (Schools & Colleges)</option>
                <option value="vvs">Visakha Valley School (CBSE Board)</option>
                <option value="gvp">GVPCOE Autonomous</option>
                <option value="au">AUCOE University</option>
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-600">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All Years (2020-2024)</option>
                <option value="2024">2024 Latest</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

            {/* Subject Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-600">Subject:</span>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="bg-white border border-slate-300 rounded-md px-2 py-1 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All Subjects</option>
                <option value="Science">Class 10 Science</option>
                <option value="Math">Class 10 Mathematics</option>
                <option value="Data Structures">Data Structures & Algo</option>
                <option value="Physics">Engineering Physics</option>
              </select>
            </div>

            <div className="ml-auto text-slate-500 font-medium">
              Showing <strong>{filteredPYQs.length}</strong> Solved Questions
            </div>
          </div>

        </div>

        {/* Questions Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50">
          {filteredPYQs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <p className="font-semibold">No PYQs matching your search filter.</p>
              <button
                onClick={() => {
                  setSelectedInstId('all');
                  setSelectedYear('all');
                  setSelectedSubject('all');
                  setSearchQuery('');
                }}
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredPYQs.map((pyq) => {
              const isRevealed = revealedAnswers[pyq.id];

              return (
                <div
                  key={pyq.id}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  {/* Question Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded">
                        {getInstitutionName(pyq.institutionId)}
                      </span>
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">
                        {pyq.examType} ({pyq.year})
                      </span>
                      <span className="text-slate-500 font-medium">
                        {pyq.subjectName} • {pyq.chapterOrUnit}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="bg-amber-50 text-amber-800 border border-amber-200 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-600 fill-amber-500" />
                        {pyq.repeatFrequency}
                      </span>
                      <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-0.5 rounded">
                        {pyq.marks} Marks
                      </span>
                    </div>
                  </div>

                  {/* Question Statement */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {pyq.question}
                    </h4>
                  </div>

                  {/* Answer & Marking Scheme Toggle */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => toggleReveal(pyq.id)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                          isRevealed 
                            ? 'bg-slate-200 text-slate-800' 
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{isRevealed ? 'Hide Model Answer' : 'Reveal Model Answer & Marking Scheme'}</span>
                      </button>

                      <button
                        onClick={() => {
                          onClose();
                          onAskVoiceAI(pyq.question, getInstitutionName(pyq.institutionId));
                        }}
                        className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Mic className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Ask Gemini Voice Tutor to Solve Step-by-Step</span>
                      </button>
                    </div>

                    {/* Revealed Model Solution Area */}
                    {isRevealed && (
                      <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4 animate-in fade-in duration-150">
                        
                        {/* Step-by-step marking breakdown */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                            Official Marking Scheme Breakdown ({pyq.marks} Marks Total):
                          </span>
                          <div className="space-y-1 text-xs">
                            {pyq.markingScheme.map((item, idx) => (
                              <div key={idx} className="flex items-start justify-between bg-white p-2 rounded border border-slate-200">
                                <span className="text-slate-700 flex items-start gap-1.5">
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item.step}</span>
                                </span>
                                <span className="font-bold text-blue-700 shrink-0 ml-3">
                                  [{item.marks} M]
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Full model solution text */}
                        <div className="bg-white border border-slate-200 rounded-lg p-4 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed overflow-x-auto">
                          {pyq.modelAnswer}
                        </div>

                        {/* Telugu student exam tip */}
                        {pyq.teluguTip && (
                          <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                            <span className="font-bold shrink-0">💡 పరీక్ష చిట్కా (Vizag Topper Tip):</span>
                            <span>{pyq.teluguTip}</span>
                          </div>
                        )}

                      </div>
                    )}

                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Continuous aggregation from Visakha Valley School & Autonomous End Sem Papers</span>
          <button
            onClick={onClose}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Close PYQ Vault
          </button>
        </div>

      </div>
    </div>
  );
};
