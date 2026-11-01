import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MidtermCTABannerProps {
  onOpenSelector: () => void;
  language: 'en' | 'te';
}

export const MidtermCTABanner: React.FC<MidtermCTABannerProps> = ({
  onOpenSelector,
  language
}) => {
  return (
    <div className="bg-[#eff5ff] border border-blue-200/70 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
      <div className="space-y-1">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {language === 'te' 
            ? 'బోర్డ్ పరీక్షలు లేదా మిడ్-టర్మ్స్ కోసం సిద్ధంగా ఉన్నారా?' 
            : 'Ready to study for your upcoming board exams & mid-terms?'}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 font-normal">
          {language === 'te'
            ? 'విశాఖ వ్యాలీ స్కూల్ (CBSE), టింపనీ, లేదా GVP, GITAM, ANITS, AU లను ఎంచుకుని వెంటనే క్యూరేటెడ్ యూనిట్లను చూడండి.'
            : 'Select Visakha Valley School, Timpany, GVP, GITAM, ANITS, Raghu, or AU to immediately preview curated units.'}
        </p>
      </div>

      <button
        onClick={onOpenSelector}
        className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
      >
        <span>
          {language === 'te' 
            ? 'స్కూల్ & కాలేజ్ సెలెక్టర్ తెరవండి' 
            : 'Open School & College Selector'}
        </span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
