import React from 'react';
import { BookOpen, Compass, Layers, Sparkles, Info, Languages, FileText, Mic, Home, Code2, User, Moon, Sun } from 'lucide-react';
import { UserAccount } from '../types';

interface HeaderProps {
  onGoHome?: () => void;
  onGoDeveloper?: () => void;
  onOpenSelector: () => void;
  onOpenVoiceAI: () => void;
  onOpenPYQ: () => void;
  onOpenMess: () => void;
  onOpenFeed: () => void;
  onOpenAbout: () => void;
  language: 'en' | 'te';
  onToggleLanguage: () => void;
  onOpenNotePDF: () => void;
  activeTab?: string;
  user?: UserAccount | null;
  onOpenRegistration?: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onGoDeveloper,
  onOpenSelector,
  onOpenVoiceAI,
  onOpenPYQ,
  onOpenMess,
  onOpenFeed,
  onOpenAbout,
  language,
  onToggleLanguage,
  onOpenNotePDF,
  activeTab,
  user,
  onOpenRegistration,
  isDarkMode,
  onToggleDarkMode
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onGoHome || onOpenSelector}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1 cursor-pointer"
            title="Go to Slide 1 (Home)"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 group-hover:bg-blue-700 transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  SummaryKey
                </span>
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                  VIZAG BETA
                </span>
              </div>
              <p className="text-xs text-slate-500 -mt-0.5 font-normal">
                by CodeForgers • SUDHAN VARMA CH (CEO)
              </p>
            </div>
          </button>
        </div>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
          {onGoHome && (
            <button
              onClick={onGoHome}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'home'
                  ? 'text-blue-700 bg-blue-50 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
              title="Slide 1: Home (Big Blue Box)"
            >
              <Home className="w-4 h-4 text-blue-600" />
              <span>{language === 'te' ? 'హోమ్ (స్లైడ్ 1)' : 'Home'}</span>
            </button>
          )}

          <button
            onClick={onOpenSelector}
            className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'selector'
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'సిలబస్ ఎంపిక' : 'Selector'}</span>
          </button>

          <button
            onClick={onOpenFeed}
            className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'feed'
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'యూనిట్ ఫీడ్' : 'Unit Feed'}</span>
          </button>

          {/* PYQ Vault Button */}
          <button
            onClick={onOpenPYQ}
            className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'pyq'
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <span className="font-bold text-xs bg-amber-100 text-amber-800 px-1 rounded">PYQ</span>
            <span>{language === 'te' ? 'గత పరీక్షల ప్రశ్నలు' : 'PYQ Vault'}</span>
          </button>

          <button
            onClick={onOpenMess}
            className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'mess'
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{language === 'te' ? 'మెస్ AI సారాంశం' : 'Mess AI Summary'}</span>
          </button>

          <button
            onClick={onOpenVoiceAI}
            className="px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors text-blue-600 hover:bg-blue-50/80 group"
            title="Talk to Gemini Voice AI Study Tutor"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <Mic className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">{language === 'te' ? 'జెమిని వాయిస్ AI' : 'Gemini Voice AI'}</span>
          </button>

          <button
            onClick={onOpenAbout}
            className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'about'
                ? 'text-blue-700 bg-blue-50 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-50'
            }`}
            title="Open SummaryKey Info (Slide 2)"
          >
            <Info className="w-4 h-4 text-blue-600" />
            <span>{language === 'te' ? 'సమాచారం (స్లైడ్ 2)' : 'Info'}</span>
          </button>

          {onGoDeveloper && (
            <button
              onClick={onGoDeveloper}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'developer'
                  ? 'text-amber-800 bg-amber-50 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-50'
              }`}
              title="Slide 3: Developer (SummaryKey, SUDHAN VARMA CH, CodeForgers, 30-10-2026)"
            >
              <Code2 className="w-4 h-4 text-amber-600" />
              <span>{language === 'te' ? 'డెవలపర్' : 'Developer'}</span>
            </button>
          )}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Beginner Registration / Account & Features Hub */}
          {onOpenRegistration && (
            user ? (
              <button
                onClick={onOpenRegistration}
                className="px-3 py-2 bg-blue-50 hover:bg-blue-100/90 border border-blue-200 rounded-lg text-xs font-bold text-blue-900 flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                title="Manage Your Features & Profile"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <User className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span className="max-w-[90px] sm:max-w-[120px] truncate">{user.name || user.email.split('@')[0]}</span>
                <span className="hidden sm:inline text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-semibold">Features</span>
              </button>
            ) : (
              <button
                onClick={onOpenRegistration}
                className="px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                title="Beginner Registration: Just email required to unlock features!"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{language === 'te' ? 'రిజిస్టర్' : 'Register (Email Only)'}</span>
              </button>
            )
          )}

          {/* Dark Mode Toggle at top of slide */}
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              className="p-2 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shadow-sm cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode (Night Study)'}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>
          )}

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="px-3 py-2 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
            title="Toggle English / Telugu"
          >
            <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'te' ? 'English' : 'తెలుగు'}</span>
          </button>

          {/* Primary Action Button matching design screenshot */}
          <button
            onClick={onOpenNotePDF}
            className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm shadow-blue-500/25 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">
              {language === 'te' 
                ? 'యూనిట్ నోట్ PDF తెరవండి' 
                : 'Select subject unit and open verified note PDF'}
            </span>
            <span className="sm:hidden">
              {language === 'te' ? 'నోట్ PDF' : 'Open Note PDF'}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
