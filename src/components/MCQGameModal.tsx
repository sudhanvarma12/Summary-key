import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Gamepad2, Flame, Heart, Trophy, ArrowRight, RotateCcw, 
  CheckCircle2, XCircle, Sparkles, BookOpen, Volume2, Mic, Clock, Award 
} from 'lucide-react';
import { MCQQuestion, getMCQsForUnit } from '../data/mcqData';
import { Subject, Unit } from '../types';

interface MCQGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: Subject;
  unit?: Unit;
  onAskVoiceAI: (questionText: string) => void;
  language: 'en' | 'te';
}

export const MCQGameModal: React.FC<MCQGameModalProps> = ({
  isOpen,
  onClose,
  subject,
  unit,
  onAskVoiceAI,
  language
}) => {
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(25);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, { selected: string; correct: boolean }>>({});

  const timerRef = useRef<any>(null);

  // Initialize or reset game when unit changes or opens
  useEffect(() => {
    if (isOpen && subject && unit) {
      const qList = getMCQsForUnit(subject.id, unit.unitNumber);
      setQuestions(qList);
      resetGame(qList);
    }
  }, [isOpen, subject, unit]);

  const resetGame = (qList?: MCQQuestion[]) => {
    const activeQuestions = qList || questions;
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setLives(3);
    setTimeLeft(25);
    setIsGameOver(false);
    setUserAnswers({});
  };

  // Web Audio simple chime generator
  const playSound = (type: 'correct' | 'wrong' | 'win') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'wrong') {
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.exponentialRampToValueAtTime(164.81, ctx.currentTime + 0.25); // E3
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else {
        // Win Fanfare
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch (e) {
      // Audio autoplay restrictions or headless env
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!isOpen || isGameOver || isAnswerSubmitted) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isOpen, isGameOver, isAnswerSubmitted, currentIndex]);

  const handleTimeOut = () => {
    clearInterval(timerRef.current);
    playSound('wrong');
    setIsAnswerSubmitted(true);
    setStreak(0);
    setLives(prev => {
      const next = prev - 1;
      if (next <= 0) {
        setIsGameOver(true);
      }
      return next;
    });
  };

  const handleOptionSelect = (optionId: string) => {
    if (isAnswerSubmitted || isGameOver) return;
    clearInterval(timerRef.current);

    setSelectedOptionId(optionId);
    setIsAnswerSubmitted(true);

    const currentQ = questions[currentIndex];
    const chosen = currentQ.options.find(o => o.id === optionId);
    const isCorrect = chosen ? chosen.isCorrect : false;

    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: { selected: optionId, correct: isCorrect }
    }));

    if (isCorrect) {
      playSound('correct');
      const timeBonus = Math.floor(timeLeft * 4);
      const points = 100 + timeBonus;
      setScore(prev => prev + points);
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
    } else {
      playSound('wrong');
      setStreak(0);
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) {
          setIsGameOver(true);
        }
        return next;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setTimeLeft(25);
    } else {
      playSound('win');
      setIsGameOver(true);
    }
  };

  if (!isOpen || !subject || !unit) return null;

  const currentQ = questions[currentIndex];
  const progressPercent = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const correctCount = Object.values(userAnswers).filter(a => a.correct).length;
  const accuracyPercent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Game Header Bar */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white border border-white/20">
              <Gamepad2 className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg text-white">
                  Passkey Chapter Mastery Quest
                </span>
                <span className="bg-amber-400/20 text-amber-200 border border-amber-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  MCQ Game
                </span>
              </div>
              <p className="text-xs text-blue-100 font-normal">
                {subject.name} • Unit {unit.unitNumber}: {unit.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game HUD Bar: Hearts, Score, Streak, Timer */}
        {!isGameOver && (
          <div className="bg-slate-50 border-b border-slate-200 px-5 py-2.5 flex items-center justify-between text-xs font-semibold shrink-0">
            {/* Lives */}
            <div className="flex items-center gap-1">
              {[1, 2, 3].map(heartIndex => (
                <Heart
                  key={heartIndex}
                  className={`w-4 h-4 transition-all ${
                    heartIndex <= lives 
                      ? 'text-red-500 fill-red-500 scale-100' 
                      : 'text-slate-300 fill-slate-200 scale-90'
                  }`}
                />
              ))}
              <span className="ml-1 text-slate-600">{lives} Lives</span>
            </div>

            {/* Streak */}
            <div className="flex items-center gap-1.5 text-amber-600 font-bold bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>Streak x{streak}</span>
            </div>

            {/* XP Score */}
            <div className="flex items-center gap-1 text-blue-700 font-bold">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{score} XP</span>
            </div>

            {/* Timer Countdown */}
            <div className={`flex items-center gap-1 font-mono px-2 py-0.5 rounded ${
              timeLeft <= 5 ? 'bg-red-100 text-red-700 animate-pulse font-bold' : 'text-slate-600'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft}s</span>
            </div>
          </div>
        )}

        {/* Progress Line */}
        {!isGameOver && (
          <div className="w-full bg-slate-100 h-1.5">
            <div 
              className="bg-blue-600 h-1.5 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Game Body Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 bg-[#fafbfe]">
          
          {/* SCREEN: GAME OVER / VICTORY */}
          {isGameOver ? (
            <div className="max-w-md mx-auto text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-900 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Trophy className="w-10 h-10 fill-amber-700 text-amber-900" />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {lives <= 0 ? 'Good Effort!' : 'Quest Completed!'}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {lives <= 0 
                    ? 'Review the PDF note excerpts to strengthen your concepts and try again.' 
                    : `You mastered the key exam concepts in Unit ${unit.unitNumber}!`}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Total XP</span>
                  <span className="font-display font-extrabold text-2xl text-blue-700">{score}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Accuracy</span>
                  <span className="font-display font-extrabold text-2xl text-emerald-600">{accuracyPercent}%</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Best Streak</span>
                  <span className="font-display font-extrabold text-2xl text-amber-600">x{maxStreak}</span>
                </div>
              </div>

              {/* Earned Badge */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3.5 flex items-center justify-center gap-2.5">
                <Award className="w-5 h-5 text-blue-700" />
                <span className="font-bold text-xs sm:text-sm text-blue-900">
                  Badge: {subject.name.includes('Science') ? 'Kailasagiri Science Scholar 🏅' : 'Passkey Exam Champion 🏆'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => resetGame()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Play Again</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer"
                >
                  Back to Note PDF
                </button>
              </div>
            </div>
          ) : (
            /* SCREEN: ACTIVE QUESTION */
            currentQ && (
              <div className="max-w-2xl mx-auto space-y-6">
                
                {/* Question Info Bar */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-600">
                    {currentQ.topicTag}
                  </span>
                </div>

                {/* Question Text */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>

                {/* 4 Multiple Choice Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const showCorrect = isAnswerSubmitted && option.isCorrect;
                    const showWrong = isAnswerSubmitted && isSelected && !option.isCorrect;

                    let optionStyle = 'bg-white border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/30 text-slate-800';

                    if (showCorrect) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200 text-emerald-900 font-semibold';
                    } else if (showWrong) {
                      optionStyle = 'bg-red-50 border-red-500 ring-2 ring-red-200 text-red-900 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-blue-50 border-blue-600 ring-2 ring-blue-200 text-blue-900';
                    }

                    return (
                      <button
                        key={option.id}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleOptionSelect(option.id)}
                        className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                      >
                        <div className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 uppercase transition-colors ${
                          showCorrect
                            ? 'bg-emerald-600 text-white'
                            : showWrong
                            ? 'bg-red-600 text-white'
                            : isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {showCorrect ? '✓' : showWrong ? '✗' : option.id}
                        </div>

                        <div className="flex-1">
                          <p className="leading-snug">{option.text}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Excerpt Explanation & Next Button upon Answer Submission */}
                {isAnswerSubmitted && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-blue-800">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span>PDF Note Reference: {currentQ.pdfReference}</span>
                      </span>
                    </div>

                    {/* Explanation */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <strong>Rationale:</strong> {currentQ.options.find(o => o.isCorrect)?.explanation}
                    </p>

                    {/* Bottom action row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <button
                        onClick={() => {
                          onAskVoiceAI(
                            `Can you explain why the answer to "${currentQ.question}" is "${currentQ.options.find(o => o.isCorrect)?.text}"?`
                          );
                        }}
                        className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Mic className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Ask Gemini Voice Tutor about this question</span>
                      </button>

                      <button
                        onClick={handleNext}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
                      >
                        <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )
          )}

        </div>

        {/* Footer info */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-2.5 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>MCQs strictly mapped to verified note content</span>
          <span>Earn XP & Badges</span>
        </div>

      </div>
    </div>
  );
};
