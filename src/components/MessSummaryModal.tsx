import React, { useState } from 'react';
import { X, Sparkles, Utensils, Star, ShieldCheck, Heart, Coffee, Sun, Moon } from 'lucide-react';
import { MESS_DATA } from '../data/messData';
import { INSTITUTIONS } from '../data/colleges';
import { InstitutionId } from '../types';

interface MessSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'te';
}

export const MessSummaryModal: React.FC<MessSummaryModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<InstitutionId>('vvs');
  const [selectedDay, setSelectedDay] = useState<string>('Wednesday');

  if (!isOpen) return null;

  const currentInstitution = INSTITUTIONS.find(c => c.id === selectedInstitutionId) || INSTITUTIONS[0];
  const messInfo = MESS_DATA.find(m => m.institutionId === selectedInstitutionId) || MESS_DATA[0];
  const dayMenu = messInfo.menu.find(m => m.day === selectedDay) || messInfo.menu[2];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[90vh] max-h-[780px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  {language === 'te' ? 'మెస్ & క్యాంటీన్ AI సారాంశం' : 'Hostel Mess & Canteen AI Summary'}
                </h3>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Vizag Campuses
                </span>
              </div>
              <p className="text-xs text-orange-100 font-normal">
                {language === 'te' 
                  ? 'హాస్టల్ డైలీ మెనూ, పరిశుభ్రత రేటింగ్‌లు మరియు స్టడీ ఎనర్జీ టిప్స్'
                  : 'Daily mess menu, student ratings, and Gemini nutrition tips during exam sprints'}
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

        {/* College Selector Strip */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 space-y-3 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Institution:</span>
            {INSTITUTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedInstitutionId(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedInstitutionId === c.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Day of Week Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">Day:</span>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedDay === day
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50/50">
          
          {/* Hostel / Canteen Summary Banner */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div>
              <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">
                {currentInstitution.fullName}
              </span>
              <h4 className="font-display font-bold text-base text-slate-900">
                {messInfo.hostelOrCanteenName}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Popular Canteen Pick: <strong className="text-slate-700">{messInfo.canteenSpecial}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {messInfo.hygieneRating}
              </span>
            </div>
          </div>

          {/* Gemini AI Nutrition & Study Energy Tip */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <span>Gemini Exam Energy Diet Tip for {currentInstitution.name}:</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                {messInfo.aiDietTip}
              </p>
            </div>
          </div>

          {/* Meals Breakdown for Selected Day */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Breakfast */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <Sun className="w-4 h-4" />
                  Breakfast (7:30 AM - 9:00 AM)
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {dayMenu.breakfast}
              </p>
            </div>

            {/* Lunch */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-orange-700">
                  <Utensils className="w-4 h-4" />
                  Lunch (12:30 PM - 2:00 PM)
                </span>
                <span className="text-[11px] bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded">
                  ★ {dayMenu.rating}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {dayMenu.lunch}
              </p>
            </div>

            {/* Snacks */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <Coffee className="w-4 h-4" />
                  Evening Snacks (4:30 PM - 5:30 PM)
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {dayMenu.snacks}
              </p>
            </div>

            {/* Dinner */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-indigo-700">
                  <Moon className="w-4 h-4" />
                  Dinner (7:30 PM - 9:15 PM)
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {dayMenu.dinner}
              </p>
              <div className="pt-1 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <span>Special item:</span>
                <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {dayMenu.special}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>Student Mess Committee Peer Audited • Updated Weekly</span>
          <button
            onClick={onClose}
            className="text-amber-700 font-semibold hover:underline"
          >
            Close Summary
          </button>
        </div>

      </div>
    </div>
  );
};
