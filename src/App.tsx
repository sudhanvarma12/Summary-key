/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenchmarkProofCard } from './components/BenchmarkProofCard';
import { WhyItMattersSection } from './components/WhyItMattersSection';
import { MidtermCTABanner } from './components/MidtermCTABanner';
import { Footer } from './components/Footer';
import { VoiceConversationModal } from './components/VoiceConversationModal';
import { CollegeSelectorModal } from './components/CollegeSelectorModal';
import { NoteReaderModal } from './components/NoteReaderModal';
import { BenchmarkModal } from './components/BenchmarkModal';
import { MessSummaryModal } from './components/MessSummaryModal';
import { UnitFeedModal } from './components/UnitFeedModal';
import { AboutModal } from './components/AboutModal';
import { PYQVaultModal } from './components/PYQVaultModal';
import { MCQGameModal } from './components/MCQGameModal';
import { RegistrationModal } from './components/RegistrationModal';
import { SAMPLE_SUBJECTS, INSTITUTIONS } from './data/colleges';
import { Subject, Unit, InstitutionId, UserAccount } from './types';
import { Mic, FileCheck, Gamepad2, Home, Info, Code2, Sparkles, Mail, Settings, Sun, Moon } from 'lucide-react';
import { InfoSlideView } from './components/InfoSlideView';
import { DeveloperSlideView } from './components/DeveloperSlideView';
import { getStoredUser, subscribeUserChanges } from './services/userService';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'te'>('en');
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(getStoredUser());
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('passkey_dark_mode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('passkey_dark_mode', String(next));
      return next;
    });
  };

  useEffect(() => {
    setCurrentUser(getStoredUser());
    const unsub = subscribeUserChanges((user) => setCurrentUser(user));
    return unsub;
  }, []);
  
  // Slide view states (Slide 1 = Big Blue Box Hero, Slide 2 = Info & Benchmarks, Slide 3 = Developer)
  const [activeSlide, setActiveSlide] = useState<1 | 2 | 3>(1);
  const [infoSubSlide, setInfoSubSlide] = useState<number>(0);

  // Modal states
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [isVoiceAIOpen, setIsVoiceAIOpen] = useState(false);
  const [isBenchmarkOpen, setIsBenchmarkOpen] = useState(false);
  const [isMessOpen, setIsMessOpen] = useState(false);
  const [isFeedOpen, setIsFeedOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [aboutSlide, setAboutSlide] = useState<number>(0);
  const [isNoteReaderOpen, setIsNoteReaderOpen] = useState(false);
  const [isPYQOpen, setIsPYQOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const handleOpenAbout = (slideIndex?: number) => {
    setActiveSlide(2);
    setInfoSubSlide(typeof slideIndex === 'number' ? slideIndex : 0);
  };

  // Selected note state (Defaults to Visakha Valley School CBSE Class 10 Science!)
  const [currentSubject, setCurrentSubject] = useState<Subject>(SAMPLE_SUBJECTS[0]);
  const [currentUnit, setCurrentUnit] = useState<Unit>(SAMPLE_SUBJECTS[0].units[0]);

  // Voice AI Context state
  const [voiceContext, setVoiceContext] = useState<{
    college?: string;
    subject?: string;
    unit?: number;
    initialPrompt?: string;
  }>({
    college: 'vvs',
    subject: SAMPLE_SUBJECTS[0].id,
    unit: 1
  });

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'te' : 'en'));
  };

  const handleOpenNote = (subject: Subject, unit: Unit) => {
    setCurrentSubject(subject);
    setCurrentUnit(unit);
    setIsNoteReaderOpen(true);
  };

  const handleOpenDefaultNote = () => {
    setCurrentSubject(SAMPLE_SUBJECTS[0]);
    setCurrentUnit(SAMPLE_SUBJECTS[0].units[0]);
    setIsNoteReaderOpen(true);
  };

  const handleOpenVoiceTutor = (institutionName?: string, subjectName?: string, unitNumber?: number, prompt?: string) => {
    if (institutionName || subjectName || unitNumber || prompt) {
      const matchInst = INSTITUTIONS.find(c => c.name.toLowerCase() === institutionName?.toLowerCase());
      setVoiceContext({
        college: matchInst ? matchInst.id : 'vvs',
        subject: currentSubject.id,
        unit: unitNumber || 1,
        initialPrompt: prompt
      });
    }
    setIsVoiceAIOpen(true);
  };

  const handleSelectInstitutionFromFooter = (instId: InstitutionId) => {
    const matchSubject = SAMPLE_SUBJECTS.find(s => s.institutionId === instId) || SAMPLE_SUBJECTS[0];
    setCurrentSubject(matchSubject);
    setCurrentUnit(matchSubject.units[0]);
    setIsSelectorOpen(true);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#f8f9ff] text-[#0d1c2e]'} flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-200`}>
      
      {/* 1. Header with Passkey branding, PYQ Vault, Dark Mode and Developer link */}
      <Header
        onGoHome={() => setActiveSlide(1)}
        onGoDeveloper={() => setActiveSlide(3)}
        onOpenSelector={() => {
          setActiveSlide(1);
          setIsSelectorOpen(true);
        }}
        onOpenVoiceAI={() => setIsVoiceAIOpen(true)}
        onOpenPYQ={() => setIsPYQOpen(true)}
        onOpenMess={() => setIsMessOpen(true)}
        onOpenFeed={() => setIsFeedOpen(true)}
        onOpenAbout={() => handleOpenAbout(0)}
        language={language}
        onToggleLanguage={toggleLanguage}
        onOpenNotePDF={handleOpenDefaultNote}
        activeTab={activeSlide === 1 ? 'home' : activeSlide === 2 ? 'about' : 'developer'}
        user={currentUser}
        onOpenRegistration={() => setIsRegistrationOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* 2. Main Page Layout - Slide 1 (Big Blue Box), Slide 2 (Info & Benchmarks), or Slide 3 (Developer) */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Top of Slide Control Bar: Slide Indicator & Dedicated Dark Mode Toggle */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3 px-4 sm:px-5 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[11px] font-black uppercase tracking-wider bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 px-2.5 py-1 rounded-md">
              Slide {activeSlide} of 3
            </span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 hidden sm:inline">
              {activeSlide === 1 && 'Home & Real-Time Syllabus Discovery'}
              {activeSlide === 2 && 'Information, Curriculum Scale & Benchmarks'}
              {activeSlide === 3 && 'Developer & Engineering Attribution'}
            </span>
          </div>

          {/* Top of Slide Action Controls (Dark Mode Switch) */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={toggleDarkMode}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95 ${
                isDarkMode 
                  ? 'bg-slate-800 border-amber-400/40 text-amber-300 hover:bg-slate-700' 
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
              }`}
              title="Toggle Dark Mode at the top of the slide"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Light Mode ☀️</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span>Dark Mode 🌙</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* SLIDE 1: Hero Section (Big Blue Box) + Bottom Buttons (Home, Info, Developer) */}
        {activeSlide === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Beginner Quick Registration & Feature Customizer Banner */}
            <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-600/40">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      {currentUser 
                        ? `Welcome, ${currentUser.name || currentUser.email.split('@')[0]}!` 
                        : 'Beginner Quick Registration (Only Email Required)'}
                    </h4>
                    <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {currentUser ? `${currentUser.role}` : 'Beginner Friendly'}
                    </span>
                  </div>
                  <p className="text-xs text-blue-200 mt-0.5 leading-relaxed">
                    {currentUser 
                      ? `You have ${Object.values(currentUser.features).filter(v => v === true).length} study features & ${(currentUser.features.customItems || []).length} custom goals active. You can toggle or add new features anytime.` 
                      : 'Zero passwords, zero hassle: Register with just your email address in 5 seconds to unlock verified notes, visual mindmaps, formula sheets & personalize features.'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                {currentUser ? (
                  <>
                    <Settings className="w-4 h-4 text-white" />
                    <span>Manage Features & Profile</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-white" />
                    <span>Quick Register (Email Only) →</span>
                  </>
                )}
              </button>
            </div>

            {/* The Big Blue Box */}
            <Hero
              onFindSyllabus={() => setIsSelectorOpen(true)}
              onLiveSpeedDemo={() => setIsBenchmarkOpen(true)}
              onVoiceConversation={() => setIsVoiceAIOpen(true)}
              language={language}
            />

            {/* Bottom Navigation Buttons on Slide 1: Home, Info, and Developer */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 text-center sm:text-left">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span>
                  {language === 'te' 
                    ? 'ప్రస్తుతం స్లైడ్ 1 లో ఉన్నారు. బెంచ్‌మార్క్‌లు, సిలబస్ స్కేల్ కోసం ఇన్ఫో లేదా డెవలపర్ వివరాల కోసం డెవలపర్ బటన్ నొక్కండి.' 
                    : 'Currently on Slide 1. Press Info for benchmarks & scale, or Developer for Passkey author & group credits.'}
                </span>
              </div>

              {/* The Three Bottom Buttons */}
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
                <button
                  onClick={() => setActiveSlide(1)}
                  className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md ring-4 ring-blue-500/20 transition-all cursor-default"
                  title="Currently on Slide 1 (Home)"
                >
                  <Home className="w-4 h-4 text-white" />
                  <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Home (Slide 1)'}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSlide(2);
                    setInfoSubSlide(0);
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95 group"
                  title="Open Slide 2 for benchmarks, AISHE scale, and curriculum"
                >
                  <Info className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>{language === 'te' ? 'ఇన్ఫో (స్లైడ్ 2) →' : 'Info (Slide 2) →'}</span>
                </button>

                <button
                  onClick={() => setActiveSlide(3)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-amber-900 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95 group"
                  title="Open Slide 3 for Developer (SUDHAN VARMA CH, CodeForgers, 30-10-2026)"
                >
                  <Code2 className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                  <span>{language === 'te' ? 'డెవలపర్ (స్లైడ్ 3) →' : 'Developer (Slide 3) →'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: Information Page & Remaining Parts */}
        {activeSlide === 2 && (
          <InfoSlideView
            onGoHome={() => setActiveSlide(1)}
            onGoDeveloper={() => setActiveSlide(3)}
            onOpenSelector={() => setIsSelectorOpen(true)}
            onOpenVoiceAI={() => setIsVoiceAIOpen(true)}
            onOpenBenchmark={() => setIsBenchmarkOpen(true)}
            language={language}
            initialSubSlide={infoSubSlide}
          />
        )}

        {/* SLIDE 3: Developer Side (Web Name, Developer, Developed Group, Date of Developed) */}
        {activeSlide === 3 && (
          <DeveloperSlideView
            onGoHome={() => setActiveSlide(1)}
            onGoInfo={() => setActiveSlide(2)}
            language={language}
          />
        )}

      </main>

      {/* 3. Footer */}
      <Footer
        onSelectInstitution={handleSelectInstitutionFromFooter}
        onOpenMess={() => setIsMessOpen(true)}
        onOpenAbout={(slideIdx) => handleOpenAbout(slideIdx)}
        onGoDeveloper={() => setActiveSlide(3)}
        language={language}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Chapter MCQ Game Quick Floating Pill */}
        <button
          onClick={() => setIsGameOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer text-xs active:scale-95 border border-white/20"
          title="Play MCQ Game on this Chapter"
        >
          <Gamepad2 className="w-4 h-4 text-amber-300" />
          <span>{language === 'te' ? 'MCQ గేమ్‌ను ఆడండి 🎮' : 'Play MCQ Game 🎮'}</span>
        </button>

        {/* PYQ Quick Floating Pill */}
        <button
          onClick={() => setIsPYQOpen(true)}
          className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer text-xs"
          title="Browse Previous Year Questions"
        >
          <FileCheck className="w-4 h-4 text-emerald-600" />
          <span>{language === 'te' ? 'PYQ ఖజానా' : 'Solved PYQs Vault'}</span>
        </button>

        {/* Gemini Voice AI Button */}
        <button
          onClick={() => setIsVoiceAIOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all flex items-center gap-2.5 group cursor-pointer active:scale-95 border border-white/20"
          title="Start Voice Conversation with Gemini"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
          <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline font-semibold text-sm">
            {language === 'te' ? 'జెమిని వాయిస్ AI తో మాట్లాడండి' : 'Talk with Gemini Voice AI'}
          </span>
        </button>
      </div>

      {/* Modals */}
      
      {/* 1. PYQ Vault Modal */}
      <PYQVaultModal
        isOpen={isPYQOpen}
        onClose={() => setIsPYQOpen(false)}
        onAskVoiceAI={(questionText, instName) => {
          handleOpenVoiceTutor(instName, undefined, undefined, `Explain how to solve this exam question step by step with full marks:\n${questionText}`);
        }}
        language={language}
      />

      {/* 2. Gemini Voice Conversation Modal */}
      <VoiceConversationModal
        isOpen={isVoiceAIOpen}
        onClose={() => setIsVoiceAIOpen(false)}
        initialCollege={voiceContext.college}
        initialSubject={voiceContext.subject}
        initialUnit={voiceContext.unit}
        onOpenNoteForUnit={(subjectId, unitNumber) => {
          const s = SAMPLE_SUBJECTS.find(sub => sub.id === subjectId) || SAMPLE_SUBJECTS[0];
          const u = s.units.find(un => un.unitNumber === unitNumber) || s.units[0];
          handleOpenNote(s, u);
        }}
      />

      {/* 3. School & College Syllabus Selector Modal */}
      <CollegeSelectorModal
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        onOpenNote={(subject, unit) => {
          setIsSelectorOpen(false);
          handleOpenNote(subject, unit);
        }}
        onOpenVoiceTutorForUnit={(instName, subName, unitNum) => {
          setIsSelectorOpen(false);
          handleOpenVoiceTutor(instName, subName, unitNum);
        }}
        language={language}
      />

      {/* 4. Verified Note Document Reader Modal */}
      <NoteReaderModal
        isOpen={isNoteReaderOpen}
        onClose={() => setIsNoteReaderOpen(false)}
        subject={currentSubject}
        unit={currentUnit}
        onOpenVoiceAI={() => {
          setIsNoteReaderOpen(false);
          handleOpenVoiceTutor(currentSubject.institutionId, currentSubject.name, currentUnit.unitNumber);
        }}
        onPlayMCQGame={() => {
          setIsGameOpen(true);
        }}
        onOpenAbout={(slideIdx) => handleOpenAbout(slideIdx)}
        language={language}
      />

      {/* 5. Chapter MCQ Quest Game Modal */}
      <MCQGameModal
        isOpen={isGameOpen}
        onClose={() => setIsGameOpen(false)}
        subject={currentSubject}
        unit={currentUnit}
        onAskVoiceAI={(qText) => {
          setIsGameOpen(false);
          handleOpenVoiceTutor(
            currentSubject.institutionId, 
            currentSubject.name, 
            currentUnit.unitNumber, 
            `Please explain why this answer is correct for the question:\n${qText}`
          );
        }}
        language={language}
      />

      {/* 6. Live Speed Demo vs Telegram Modal */}
      <BenchmarkModal
        isOpen={isBenchmarkOpen}
        onClose={() => setIsBenchmarkOpen(false)}
        language={language}
      />

      {/* 6. Mess & Canteen AI Summary Modal */}
      <MessSummaryModal
        isOpen={isMessOpen}
        onClose={() => setIsMessOpen(false)}
        language={language}
      />

      {/* 7. Unit Feed Modal */}
      <UnitFeedModal
        isOpen={isFeedOpen}
        onClose={() => setIsFeedOpen(false)}
        onOpenNote={(subject, unit) => {
          setIsFeedOpen(false);
          handleOpenNote(subject, unit);
        }}
        onOpenVoiceAI={() => {
          setIsFeedOpen(false);
          setIsVoiceAIOpen(true);
        }}
        language={language}
      />

      {/* 8. Info & Presentation Slide Deck Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        language={language}
        initialSlide={aboutSlide}
      />

      {/* 9. Beginner Registration & Feature Customizer Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        language={language}
      />

    </div>
  );
}
