import React, { useState } from 'react';
import { 
  X, School, GraduationCap, BookOpen, Clock, CheckCircle2, Star, 
  FileText, Mic, Sparkles, Building2, Award 
} from 'lucide-react';
import { INSTITUTIONS, GRADES_AND_BRANCHES, SAMPLE_SUBJECTS } from '../data/colleges';
import { InstitutionId, GradeOrBranchId, Subject, Unit, InstitutionCategory, CollegeYear } from '../types';

interface CollegeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenNote: (subject: Subject, unit: Unit) => void;
  onOpenVoiceTutorForUnit: (institutionName: string, subjectName: string, unitNumber: number) => void;
  language: 'en' | 'te';
}

const COLLEGE_YEARS: { id: CollegeYear; name: string }[] = [
  { id: '1st-year', name: '1st Year' },
  { id: '2nd-year', name: '2nd Year' },
  { id: '3rd-year', name: '3rd Year' },
  { id: '4th-year', name: '4th Year' },
];

const getSubjectBadge = (sub: Subject) => {
  const name = sub.name.toLowerCase();
  const code = (sub.code || '').toLowerCase();
  
  // School Subjects
  if (name.includes('social') || code.includes('087')) return { label: 'Social Science', icon: '🌍' };
  if (name.includes('artificial intelligence') || (name.includes('ai') && !name.includes('data')) || code.includes('417')) return { label: 'AI (417)', icon: '🤖' };
  if (name.includes('information technology') || code.includes('402')) return { label: 'IT (402)', icon: '💻' };
  if (name.includes('english') || code.includes('184') || code.includes('301')) return { label: 'English', icon: '📖' };
  if (name.includes('chemistry') || code.includes('043')) return { label: 'Chemistry', icon: '🧪' };
  if (name.includes('physics') || code.includes('042') || code.includes('23bs1102')) return { label: 'Physics', icon: '⚛️' };
  if (name.includes('math') || code.includes('041') || code.includes('23bs1101')) return { label: 'Mathematics', icon: '📐' };
  if (name.includes('science') || code.includes('086')) return { label: 'Science', icon: '🔬' };
  
  // Common 1st Year Engineering
  if (name.includes('python') || code.includes('23es1103')) return { label: 'Python Programming', icon: '🐍' };
  
  // CSE Core
  if (name.includes('data structures') || code.includes('20cs1104')) return { label: 'Data Structures', icon: '⚡' };
  if (name.includes('database') || code.includes('20cs1105')) return { label: 'DBMS & SQL', icon: '🗄️' };
  if (name.includes('java') || code.includes('20cs1106')) return { label: 'Java OOP', icon: '☕' };
  if (name.includes('operating') || code.includes('20cs1107')) return { label: 'Operating Systems', icon: '🖥️' };
  if (name.includes('network') || code.includes('20cs1108')) return { label: 'Computer Networks', icon: '🌐' };
  if (name.includes('machine learning') && !name.includes('natural') && code.includes('20cs1110')) return { label: 'ML & AI', icon: '🧠' };
  if (name.includes('cloud') && name.includes('devops')) return { label: 'Cloud & DevOps', icon: '☁️' };

  // ECE Core
  if (name.includes('electronic devices') || name.includes('edc')) return { label: 'EDC (Electronics)', icon: '🔌' };
  if (name.includes('signals & systems')) return { label: 'Signals & Systems', icon: '📊' };
  if (name.includes('analog & digital') || name.includes('communication')) return { label: 'Analog & Digital Comms', icon: '📡' };
  if (name.includes('microprocessor') || name.includes('8086')) return { label: 'Microprocessors 8086', icon: '💾' };
  if (name.includes('vlsi')) return { label: 'VLSI Design', icon: '🔲' };
  if (name.includes('wireless') || name.includes('cellular') || name.includes('5g')) return { label: 'Cellular & 5G Comms', icon: '📶' };

  // EEE Core
  if (name.includes('circuit analysis') || name.includes('network theory')) return { label: 'Circuit Analysis', icon: '⚡' };
  if (name.includes('dc machines') || name.includes('transformer')) return { label: 'DC Machines & Transformers', icon: '⚙️' };
  if (name.includes('control systems')) return { label: 'Control Systems', icon: '🎛️' };
  if (name.includes('power electronics')) return { label: 'Power Electronics', icon: '⚡' };
  if (name.includes('power system') || name.includes('psoc')) return { label: 'Power Systems PSOC', icon: '🏭' };
  if (name.includes('electric vehicles') || name.includes('smart grid')) return { label: 'EVs & Smart Grid', icon: '🔋' };

  // MECH Core
  if (name.includes('strength of materials') || name.includes('solids')) return { label: 'Strength of Materials', icon: '🏗️' };
  if (name.includes('thermodynamics')) return { label: 'Thermodynamics', icon: '🔥' };
  if (name.includes('heat & mass')) return { label: 'Heat & Mass Transfer', icon: '🌡️' };
  if (name.includes('fluid mechanics') || name.includes('fmhm')) return { label: 'Fluid Mechanics FMHM', icon: '💧' };
  if (name.includes('cad/cam') || name.includes('robotics')) return { label: 'CAD/CAM Robotics', icon: '🤖' };
  if (name.includes('automobile')) return { label: 'Automobile Engineering', icon: '🚗' };

  // CSM Core (AI & Machine Learning)
  if (name.includes('data science') && name.includes('analytics')) return { label: 'Data Science & Python', icon: '🔬' };
  if (name.includes('mathematics & statistics for data')) return { label: 'Math for Data Science', icon: '📐' };
  if (name.includes('machine learning & deep neural')) return { label: 'Deep Neural Networks', icon: '🧠' };
  if (name.includes('natural language') || name.includes('nlp') || name.includes('models')) return { label: 'NLP & Large Models', icon: '🗣️' };
  if (name.includes('generative ai') || name.includes('mlops')) return { label: 'Generative AI & MLOps', icon: '✨' };

  // IT Core (Information Technology)
  if (name.includes('web application') || name.includes('modern javascript')) return { label: 'Web Dev & JS', icon: '🌐' };
  if (name.includes('full stack')) return { label: 'Full Stack Tech', icon: '💻' };
  if (name.includes('mobile application') || name.includes('flutter')) return { label: 'Mobile Apps (Flutter)', icon: '📱' };
  if (name.includes('information security') || name.includes('cyber forensics')) return { label: 'Cyber Forensics', icon: '🛡️' };
  if (name.includes('cloud') && name.includes('big data')) return { label: 'Big Data & Cloud', icon: '☁️' };

  return { label: sub.name, icon: '📖' };
};

export const CollegeSelectorModal: React.FC<CollegeSelectorModalProps> = ({
  isOpen,
  onClose,
  onOpenNote,
  onOpenVoiceTutorForUnit,
  language
}) => {
  // Category switch: Schools (e.g. Visakha Valley) vs Colleges (e.g. GVP, AU)
  const [activeCategory, setActiveCategory] = useState<InstitutionCategory>('school');
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<InstitutionId>('vvs');
  const [selectedGradeOrBranchId, setSelectedGradeOrBranchId] = useState<GradeOrBranchId>('class10');
  const [selectedCollegeYear, setSelectedCollegeYear] = useState<CollegeYear>('1st-year');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [expandedUnitNumber, setExpandedUnitNumber] = useState<number>(1);

  if (!isOpen) return null;

  // Filter institutions by active category (School vs College)
  const categoryInstitutions = INSTITUTIONS.filter(i => i.category === activeCategory);
  const currentInstitution = INSTITUTIONS.find(i => i.id === selectedInstitutionId) || categoryInstitutions[0];

  // Filter available grades or branches for current category
  const categoryGradesOrBranches = GRADES_AND_BRANCHES.filter(g => g.category === activeCategory);

  // Find matching subjects strictly for this grade/branch, institution & year
  const rawMatchingSubjects = SAMPLE_SUBJECTS.filter(s => {
    if (activeCategory === 'school') {
      return (
        s.gradeOrBranch === selectedGradeOrBranchId &&
        (s.institutionId === selectedInstitutionId || s.institutionId === 'vvs')
      );
    }
    // For colleges: strictly match selected college, branch/team, and college academic year
    const matchesInst = s.institutionId === selectedInstitutionId;
    const matchesBranch = s.gradeOrBranch === selectedGradeOrBranchId;
    const matchesYear = s.collegeYear === selectedCollegeYear;
    return matchesInst && matchesBranch && matchesYear;
  });

  // Deduplicate by code or name
  const matchingSubjects = Array.from(new Map(rawMatchingSubjects.map(s => [s.code || s.name, s])).values());

  // Strictly constrain fallback to matching branch and year only
  const availableSubjects = matchingSubjects.length > 0 
    ? matchingSubjects 
    : (activeCategory === 'college' 
        ? Array.from(new Map(SAMPLE_SUBJECTS.filter(s => s.collegeYear === selectedCollegeYear && s.gradeOrBranch === selectedGradeOrBranchId).map(s => [s.code || s.name, s])).values())
        : [SAMPLE_SUBJECTS[0]]);

  const matchingSubject = availableSubjects.find(s => s.id === selectedSubjectId) || availableSubjects[0] || SAMPLE_SUBJECTS[0];

  const handleCategoryChange = (category: InstitutionCategory) => {
    setActiveCategory(category);
    if (category === 'school') {
      setSelectedInstitutionId('vvs'); // Visakha Valley School as premier default!
      setSelectedGradeOrBranchId('class10');
      setSelectedSubjectId('');
    } else {
      setSelectedInstitutionId('gvp');
      setSelectedGradeOrBranchId('cse');
      setSelectedCollegeYear('1st-year');
      setSelectedSubjectId('');
    }
  };

  const handleGradeChange = (gradeId: GradeOrBranchId) => {
    setSelectedGradeOrBranchId(gradeId);
    setSelectedSubjectId('');
    setExpandedUnitNumber(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[90vh] max-h-[820px] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#004ac6] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {language === 'te' 
                  ? 'పాస్కీ సిలబస్ సెలెక్టర్: స్కూల్స్ & కాలేజీలు' 
                  : 'Passkey Syllabus Selector: Schools & Colleges'}
              </h3>
              <p className="text-xs text-blue-100 font-normal">
                {language === 'te' 
                  ? 'విశాఖ వ్యాలీ స్కూల్ (CBSE 8, 9, 10 కొత్త సిలబస్) మరియు ఇంజనీరింగ్ 1st, 2nd, 3rd, 4th Year సిలబస్ & మైండ్‌మ్యాప్‌లు' 
                  : 'CBSE New Syllabus (Class 8, 9, 10) & Engineering 1st to 4th Year Curriculum with Topics at a Glance & Mindmaps'}
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

        {/* Level Switcher (Schools vs Colleges) */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center gap-3 shrink-0">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Category:</span>
          
          <button
            onClick={() => handleCategoryChange('school')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === 'school'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>🏫 Schools (CBSE Class 8, 9, 10 - All Schools)</span>
          </button>

          <button
            onClick={() => handleCategoryChange('college')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeCategory === 'college'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>🎓 Colleges (1st, 2nd, 3rd, 4th Year - GVP, GITAM, AU)</span>
          </button>
        </div>

        {/* Selection Strip: Institution, Year / Grade & Subjects */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 space-y-3 shrink-0">
          
          {/* Institution Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              {activeCategory === 'school' ? 'School:' : 'College:'}
            </span>
            {categoryInstitutions.map((inst) => (
              <button
                key={inst.id}
                onClick={() => {
                  setSelectedInstitutionId(inst.id);
                  setSelectedSubjectId('');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedInstitutionId === inst.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {inst.name}
              </button>
            ))}
          </div>

          {/* Academic Year Selector for Colleges OR CBSE Badge for Schools */}
          {activeCategory === 'college' ? (
            <div className="flex items-center gap-2 overflow-x-auto pt-0.5">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Year:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto">
                {COLLEGE_YEARS.map((yr) => (
                  <button
                    key={yr.id}
                    onClick={() => {
                      setSelectedCollegeYear(yr.id);
                      setSelectedSubjectId('');
                      setExpandedUnitNumber(1);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedCollegeYear === yr.id
                        ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>🎓 {yr.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 pt-0.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Curriculum:
              </span>
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-2">
                <span>📘 CBSE New Syllabus (2024-25 Rationalized)</span>
                <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-1.5 py-0.5 rounded font-bold">
                  Same for all CBSE Schools
                </span>
              </div>
            </div>
          )}

          {/* Grade (School) or Branch (College) Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pt-0.5">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              {activeCategory === 'school' ? 'Class / Grade:' : 'Branch:'}
            </span>
            {categoryGradesOrBranches.map((item) => (
              <button
                key={item.id}
                onClick={() => handleGradeChange(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedGradeOrBranchId === item.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {item.code}
              </button>
            ))}
          </div>

          {/* Subject picker tabs */}
          {availableSubjects.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-0.5">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
                Subjects:
              </span>
              <div className="flex items-center gap-1.5 bg-blue-50/90 p-1 rounded-xl border border-blue-200/80 overflow-x-auto">
                {availableSubjects.map((sub) => {
                  const badge = getSubjectBadge(sub);
                  const isSelected = matchingSubject.id === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubjectId(sub.id);
                        setExpandedUnitNumber(1);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/40'
                          : 'bg-white/90 text-blue-950 hover:bg-white hover:text-blue-600'
                      }`}
                    >
                      <span>{badge.icon}</span>
                      <span>{badge.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>


        {/* Selected Institution Banner Ribbon */}
        <div className="bg-blue-50/80 border-b border-blue-100 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-blue-900 shrink-0 gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-bold">{currentInstitution.fullName}</span>
            <span>•</span>
            <span className="text-blue-700 font-medium">{currentInstitution.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
              ⚡ Topic in a Glance & Mindmaps
            </span>
            <span className="bg-blue-200/60 text-blue-800 text-[11px] font-semibold px-2 py-0.5 rounded">
              {matchingSubject.collegeYear ? `${matchingSubject.collegeYear.replace('-', ' ').toUpperCase()} • ` : ''}{matchingSubject.regulationOrBoard} • {matchingSubject.creditsOrMarks}
            </span>
          </div>
        </div>

        {/* Units / Chapters List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {matchingSubject.code} • {matchingSubject.category}
              </span>
              <h4 className="font-display text-xl font-bold text-slate-900">
                {matchingSubject.name}
              </h4>
            </div>

            <button
              onClick={() => onOpenVoiceTutorForUnit(currentInstitution.name, matchingSubject.name, 1)}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Mic className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ask Passkey Voice AI</span>
            </button>
          </div>

          {/* Chapters / Units Roadmap */}
          <div className="space-y-3">
            {matchingSubject.units.map((unit) => {
              const isExpanded = expandedUnitNumber === unit.unitNumber;

              return (
                <div
                  key={unit.unitNumber}
                  className={`bg-white rounded-xl border transition-all ${
                    isExpanded 
                      ? 'border-blue-400 shadow-md ring-1 ring-blue-100' 
                      : 'border-slate-200/90 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Unit Card Header */}
                  <div
                    onClick={() => setExpandedUnitNumber(isExpanded ? 0 : unit.unitNumber)}
                    className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center shrink-0 border border-blue-100">
                        {activeCategory === 'school' ? `Ch${unit.unitNumber}` : `U${unit.unitNumber}`}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="font-display font-bold text-base text-slate-900">
                            {activeCategory === 'school' ? `Chapter ${unit.unitNumber}` : `Unit ${unit.unitNumber}`}: {unit.title}
                          </h5>
                          <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
                            ⚡ Topic Glance
                          </span>
                          <span className="text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-full">
                            🗺️ Mindmap
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 flex-wrap">
                          <span className="flex items-center gap-1 text-emerald-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {unit.verifiedBy} ({unit.verifiedRole})
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {unit.readingTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-amber-600 font-medium">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            {unit.rating} ({unit.upvotes} student endorsements)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenNote(matchingSubject, unit);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Open Notes & Mindmap</span>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Syllabus Breakdown */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 bg-slate-50/40 rounded-b-xl">
                      
                      {/* Key Topics Checklist */}
                      <div>
                        <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide block mb-2">
                          {activeCategory === 'school' ? 'Exact CBSE / Board Syllabus Topics:' : 'Exact University Syllabus Topics:'}
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {unit.keyTopics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-md border border-slate-200">
                              <span className="text-blue-500 font-bold shrink-0">✓</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bilingual Quick Summary */}
                      <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800">Exam Strategy & High-Yield Summary:</span>
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-semibold">
                            Weightage: {unit.examWeightage}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {language === 'te' ? unit.summaryTelugu : unit.summaryEnglish}
                        </p>
                      </div>

                      {/* Unit Actions Bottom Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{unit.pdfPages} Pages Verified PDF</span>
                          <span>•</span>
                          <span>{unit.formulaeCount} Key Formulas / Derivations</span>
                          <span>•</span>
                          <span>{unit.solvedQuestionsCount} Previous Solved Board/Uni Qs</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onOpenVoiceTutorForUnit(currentInstitution.name, matchingSubject.name, unit.unitNumber)}
                            className="text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-md font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>Voice Tutor for Chapter {unit.unitNumber}</span>
                          </button>

                          <button
                            onClick={() => onOpenNote(matchingSubject, unit)}
                            className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-1.5 rounded-md font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>Read Full Note →</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>{currentInstitution.bannerBadge}</span>
          <span>Passkey Verified Content Engine • Visakhapatnam</span>
        </div>

      </div>
    </div>
  );
};
