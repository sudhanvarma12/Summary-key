import React from 'react';
import { Heart } from 'lucide-react';
import { InstitutionId } from '../types';

interface FooterProps {
  onSelectInstitution: (institutionId: InstitutionId) => void;
  onOpenMess: () => void;
  onOpenAbout?: (slideIndex?: number) => void;
  onGoDeveloper?: () => void;
  language: 'en' | 'te';
}

export const Footer: React.FC<FooterProps> = ({
  onSelectInstitution,
  onOpenMess,
  onOpenAbout,
  onGoDeveloper,
  language
}) => {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 text-xs sm:text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Brand and Developer Attribution */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <span className="font-bold text-slate-900 dark:text-white">SummaryKey</span>
          <span>•</span>
          <span>
            Developed by <strong className="font-bold text-blue-800 dark:text-blue-400">SUDHAN VARMA CH</strong>
          </span>
          <span className="bg-amber-100 text-amber-900 text-[10px] font-black px-1.5 py-0.5 rounded border border-amber-300 uppercase">
            CEO OF SUMMARYKEY
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-blue-700 dark:text-blue-400 text-xs font-medium">Studied in Visakha Valley School</span>
          <span>•</span>
          <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded font-medium">CodeForgers</span>
          <span>•</span>
          <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200/60">30-10-2026</span>
          {onGoDeveloper ? (
            <button
              onClick={onGoDeveloper}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 ml-1 cursor-pointer"
              title="Open Slide 3: Developer Profile"
            >
              Developer (Slide 3) →
            </button>
          ) : onOpenAbout && (
            <button
              onClick={() => onOpenAbout(3)}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 ml-1 cursor-pointer"
              title="View Final Slide with Developer & Group Credits"
            >
              Info Slides (Credits) →
            </button>
          )}
        </div>

        {/* Right: Schools & Colleges links */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center">
          <button 
            onClick={() => onSelectInstitution('vvs')} 
            className="text-blue-700 font-semibold hover:underline transition-colors cursor-pointer"
          >
            Visakha Valley
          </button>
          <span>•</span>
          <button 
            onClick={() => onSelectInstitution('timpany')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            Timpany
          </button>
          <span>•</span>
          <button 
            onClick={() => onSelectInstitution('gvp')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            GVP
          </button>
          <span>•</span>
          <button 
            onClick={() => onSelectInstitution('gitam')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            GITAM
          </button>
          <span>•</span>
          <button 
            onClick={() => onSelectInstitution('anits')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            ANITS
          </button>
          <span>•</span>
          <button 
            onClick={() => onSelectInstitution('au')} 
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            AU
          </button>

          <span className="mx-1 text-slate-300">|</span>

          <button 
            onClick={onOpenMess} 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
          >
            {language === 'te' ? 'మెస్ & క్యాంటీన్ AI' : 'Mess & Canteen AI'}
          </button>

          <span className="mx-1 text-slate-300">|</span>

          {/* Social Community & Share links */}
          <div className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-2.5 py-1 rounded-full text-xs text-blue-800 dark:text-blue-300">
            <span className="font-bold">Social:</span>
            <a 
              href="https://api.whatsapp.com/send?text=Check%20out%20SummaryKey%20by%20CodeForgers%20for%20Visakha%20Valley%20and%20College%20Syllabus%20and%20Notes!" 
              target="_blank" 
              rel="noreferrer"
              className="hover:underline text-emerald-700 dark:text-emerald-400 font-semibold"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a 
              href="mailto:sudhanvarma12@gmail.com?subject=SummaryKey%20Social%20Community" 
              className="hover:underline font-semibold"
            >
              Community
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
