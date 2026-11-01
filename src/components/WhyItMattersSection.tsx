import React from 'react';
import { BarChart3, Users, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

interface WhyItMattersSectionProps {
  language: 'en' | 'te';
}

export const WhyItMattersSection: React.FC<WhyItMattersSectionProps> = ({ language }) => {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {language === 'te' ? 'ఎందుకు ఇది ముఖ్యం & ప్రభావం' : 'Why It Matters & Scale'}
          </h2>
        </div>

        <a 
          href="https://www.education.gov.in" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium"
        >
          <span>Ministry of Education AISHE Source</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
            <Users className="w-5 h-5" />
          </div>

          <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            43M+
          </div>

          <h3 className="font-semibold text-sm sm:text-base text-slate-800 mt-1">
            {language === 'te' ? 'ఉన్నత విద్యలో విద్యార్థులు' : 'Students in Higher Ed'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            {language === 'te' 
              ? 'భారతదేశంలో 43 మిలియన్లకు పైగా ఉన్నత విద్యా విద్యార్థులు డిజిటల్ వనరులపై ఆధారపడుతున్నారు.' 
              : 'India has over 43 million higher education students relying on digital resources.'}{' '}
            <a 
              href="https://aishe.gov.in" 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
            >
              AISHE Report <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            98.4%
          </div>

          <h3 className="font-semibold text-sm sm:text-base text-slate-800 mt-1">
            {language === 'te' ? 'నోట్స్ అందుబాటు రేటు' : 'High Note Availability'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            {language === 'te'
              ? 'టాప్ 3 విశాఖపట్నం సబ్జెక్టుల కవరేజ్: ఇంజనీరింగ్ ఫిజిక్స్, డేటా స్ట్రక్చర్స్, & పైథాన్.'
              : 'Coverage for Top 3 Visakhapatnam subjects: Engineering Physics, Data Structures, & Python.'}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            0% Spam / Malware
          </div>

          <h3 className="font-semibold text-sm sm:text-base text-slate-800 mt-1">
            {language === 'te' ? 'క్లీన్ & పీర్-వెరిఫైడ్' : 'Clean & Peer-Verified'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            {language === 'te'
              ? 'వాట్సాప్ లేదా టెలిగ్రామ్ ఛానెల్స్ ఏవీ స్థానిక కాలేజీ-నిర్దిష్ట సిలబస్ అమరికను ధృవీకరించిన నోట్లతో కలపవు.'
              : 'None of WhatsApp or Telegram channels combine local college-specific syllabus alignment with verified notes.'}
          </p>
        </div>

      </div>
    </section>
  );
};
