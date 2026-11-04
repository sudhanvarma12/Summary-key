import React, { useState, useEffect } from 'react';
import { 
  X, Mail, CheckCircle2, Sparkles, User, Settings, Plus, Trash2, 
  BookOpen, Mic, Brain, Shield, Bell, Download, Award, ArrowRight,
  GraduationCap, School, Check, LogOut
} from 'lucide-react';
import { UserAccount, UserFeatures } from '../types';
import { 
  getStoredUser, registerUser, updateUserProfile, 
  toggleUserFeature, addCustomFeatureItem, toggleCustomFeatureItem, 
  deleteCustomFeatureItem, logoutUser 
} from '../services/userService';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'en' | 'te';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  language = 'en'
}) => {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [activeTab, setActiveTab] = useState<'register' | 'features'>('register');
  
  // Registration Form State (ONLY email is required)
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [selectedRole, setSelectedRole] = useState<'beginner' | 'school-student' | 'engineering-student'>('beginner');
  const [institutionName, setInstitutionName] = useState('');
  const [targetExam, setTargetExam] = useState('');
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successToast, setSuccessToast] = useState('');

  // Custom Feature Adding State
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureCategory, setNewFeatureCategory] = useState<'study-goal' | 'custom-topic' | 'personal-tool'>('study-goal');

  // Load user on open
  useEffect(() => {
    if (isOpen) {
      const user = getStoredUser();
      setCurrentUser(user);
      if (user) {
        setActiveTab('features');
        setDisplayName(user.name || '');
        setInstitutionName(user.institutionName || '');
        setTargetExam(user.targetExam || '');
      } else {
        setActiveTab('register');
        setEmail('');
        setErrorMsg('');
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address (e.g. student@gmail.com)');
      return;
    }

    const newUser = registerUser(email, {
      name: displayName || undefined,
      role: selectedRole,
      institutionName: institutionName || undefined,
      targetExam: targetExam || undefined,
    });

    setCurrentUser(newUser);
    setActiveTab('features');
    setSuccessToast('Registration successful! Welcome to SummaryKey.');
    setTimeout(() => setSuccessToast(''), 3500);
  };

  const handleToggleFeature = (key: keyof Omit<UserFeatures, 'customItems'>) => {
    const updated = toggleUserFeature(key);
    if (updated) {
      setCurrentUser({ ...updated });
      setSuccessToast(`Feature updated!`);
      setTimeout(() => setSuccessToast(''), 2000);
    }
  };

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeatureTitle.trim()) return;

    const updated = addCustomFeatureItem(newFeatureTitle, newFeatureCategory);
    if (updated) {
      setCurrentUser({ ...updated });
      setNewFeatureTitle('');
      setSuccessToast('Custom feature added!');
      setTimeout(() => setSuccessToast(''), 2000);
    }
  };

  const handleToggleCustom = (id: string) => {
    const updated = toggleCustomFeatureItem(id);
    if (updated) setCurrentUser({ ...updated });
  };

  const handleDeleteCustom = (id: string) => {
    const updated = deleteCustomFeatureItem(id);
    if (updated) setCurrentUser({ ...updated });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateUserProfile({
      name: displayName,
      institutionName,
      targetExam
    });
    if (updated) {
      setCurrentUser({ ...updated });
      setSuccessToast('Profile details saved!');
      setTimeout(() => setSuccessToast(''), 2500);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setActiveTab('register');
    setEmail('');
    setDisplayName('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-snug">
                {currentUser 
                  ? 'Student Account & Feature Hub' 
                  : 'Beginner Registration (Email Only Required)'}
              </h3>
              <p className="text-xs text-blue-100 font-normal">
                {currentUser 
                  ? `Logged in as ${currentUser.email}`
                  : 'Get started in 5 seconds. Customize and add features as you learn.'}
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

        {/* Tab Strip */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {!currentUser && (
              <button
                onClick={() => setActiveTab('register')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'register'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>1. Quick Register</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('features')}
              disabled={!currentUser}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'features'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : currentUser
                    ? 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{currentUser ? 'My Features & Customizer' : '2. Features (Register First)'}</span>
            </button>
          </div>

          {currentUser && (
            <button
              onClick={handleLogout}
              className="text-xs text-slate-500 hover:text-red-600 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              title="Sign out of this browser"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          )}
        </div>

        {/* Toast Notification */}
        {successToast && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2 flex items-center gap-2 text-xs font-semibold text-emerald-800 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* TAB 1: QUICK REGISTER (EMAIL ONLY) */}
          {activeTab === 'register' && !currentUser && (
            <div className="space-y-6">
              <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-blue-900">
                    Zero Hassle Registration for Beginners
                  </h4>
                  <p className="text-xs text-blue-700 mt-0.5 leading-relaxed">
                    No passwords, credit cards, or phone numbers needed. Just enter your email to get instant access to syllabus notes, mindmaps, and your personal feature customizer.
                  </p>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">* (Only Required Field)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sravan.vizag@gmail.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      autoFocus
                    />
                  </div>
                  {errorMsg && (
                    <p className="text-xs text-red-600 mt-1 font-semibold">{errorMsg}</p>
                  )}
                </div>

                {/* Beginner Role Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    I am a:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'beginner', label: 'Beginner', desc: 'Starting out' },
                      { id: 'school-student', label: 'School (CBSE)', desc: 'Class 8-12' },
                      { id: 'engineering-student', label: 'B.Tech College', desc: '1st-4th Year' },
                    ].map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id as any)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          selectedRole === role.id
                            ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-200'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-900">{role.label}</div>
                        <div className="text-[10px] text-slate-500">{role.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Expandable Details */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowOptionalFields(!showOptionalFields)}
                    className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>{showOptionalFields ? 'Hide optional details' : '+ Add optional profile details (Name, College/School)'}</span>
                  </button>

                  {showOptionalFields && (
                    <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 animate-in fade-in">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Full Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          placeholder="e.g. K. Sravan"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Institution / School (Optional)
                          </label>
                          <input
                            type="text"
                            value={institutionName}
                            onChange={(e) => setInstitutionName(e.target.value)}
                            placeholder="e.g. Visakha Valley / GVPCOE"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1">
                            Target Exam / Goal (Optional)
                          </label>
                          <input
                            type="text"
                            value={targetExam}
                            onChange={(e) => setTargetExam(e.target.value)}
                            placeholder="e.g. CBSE Boards / R20 Mid-1"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>✨ Complete Registration & Customize Features</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: FEATURES & CUSTOMIZATION */}
          {activeTab === 'features' && currentUser && (
            <div className="space-y-6">
              
              {/* Profile Card */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 border border-blue-400/40 flex items-center justify-center text-lg font-bold text-blue-200">
                      {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : currentUser.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base text-white">{currentUser.name || 'Student Learner'}</h4>
                        <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {currentUser.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3 text-slate-400" />
                        <span>{currentUser.email}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right text-xs text-slate-300">
                    <div className="text-slate-400 text-[10px]">Institution:</div>
                    <div className="font-semibold text-white">{currentUser.institutionName || 'All Vizag Institutions'}</div>
                  </div>
                </div>

                {/* Editable Profile form drawer */}
                <form onSubmit={handleSaveProfile} className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Update Name"
                    className="px-2.5 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    placeholder="Update College/School"
                    className="px-2.5 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      placeholder="Target Exam Goal"
                      className="w-full px-2.5 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              {/* SECTION: BUILT-IN FEATURES TOGGLES */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      Customize Your Active Features
                    </h4>
                    <p className="text-xs text-slate-500">
                      Turn on or off study tools based on what you need for your exams.
                    </p>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2.5 py-1 rounded-full">
                    {Object.values(currentUser.features).filter(v => v === true).length} Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      key: 'aiVoiceTutor',
                      title: 'AI Voice Tutor (Telugu & English)',
                      desc: 'Listen to spoken explanations of any chapter unit',
                      icon: <Mic className="w-4 h-4 text-blue-600" />
                    },
                    {
                      key: 'mindmapVisualizer',
                      title: 'Interactive Mindmaps',
                      desc: 'Visual hierarchical tree of every topic for quick recall',
                      icon: <Brain className="w-4 h-4 text-purple-600" />
                    },
                    {
                      key: 'formulaCheatSheet',
                      title: 'Formula Cheat Sheet Popovers',
                      desc: 'Equations & key formulas highlighted in each chapter',
                      icon: <Award className="w-4 h-4 text-amber-600" />
                    },
                    {
                      key: 'examWeightageBadge',
                      title: '16-Mark BoS Exam Weightage',
                      desc: 'Displays university exam marks & professor verification',
                      icon: <Shield className="w-4 h-4 text-emerald-600" />
                    },
                    {
                      key: 'teluguTranslations',
                      title: 'Bilingual Telugu Summaries',
                      desc: 'Instant conceptual breakdown in Telugu for all units',
                      icon: <BookOpen className="w-4 h-4 text-indigo-600" />
                    },
                    {
                      key: 'dailyStudyReminder',
                      title: 'Evening Study Reminder (7 PM)',
                      desc: 'Gentle notification prompt to review 1 chapter daily',
                      icon: <Bell className="w-4 h-4 text-rose-600" />
                    },
                    {
                      key: 'spacedRepetitionFlashcards',
                      title: 'Spaced Repetition Flashcards',
                      desc: 'Active recall questions for maximum retention',
                      icon: <Sparkles className="w-4 h-4 text-cyan-600" />
                    },
                    {
                      key: 'offlineStudyPack',
                      title: 'Offline Study Pack Access',
                      desc: 'Optimized cached notes for low-connectivity zones',
                      icon: <Download className="w-4 h-4 text-teal-600" />
                    },
                  ].map((feat) => {
                    const isEnabled = !!currentUser.features[feat.key as keyof UserFeatures];
                    return (
                      <div
                        key={feat.key}
                        onClick={() => handleToggleFeature(feat.key as any)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                          isEnabled
                            ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300/60'
                            : 'bg-white border-slate-200 hover:bg-slate-50 opacity-80'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className={`p-2 rounded-lg ${isEnabled ? 'bg-white shadow-xs' : 'bg-slate-100'}`}>
                            {feat.icon}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 leading-snug">
                              {feat.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                              {feat.desc}
                            </div>
                          </div>
                        </div>

                        {/* Switch Pill */}
                        <div className={`w-9 h-5 rounded-full p-0.5 transition-colors shrink-0 ${
                          isEnabled ? 'bg-blue-600' : 'bg-slate-300'
                        }`}>
                          <div className={`w-4 h-4 rounded-full bg-white shadow-xs transition-transform ${
                            isEnabled ? 'translate-x-4' : 'translate-x-0'
                          }`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: ADD PERSONAL CUSTOM FEATURES OR GOALS */}
              <div className="border-t border-slate-200 pt-5 space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    Add Your Custom Features & Study Goals
                  </h4>
                  <p className="text-xs text-slate-500">
                    Need a custom study focus, reminder, or priority chapter? Add it directly to your dashboard.
                  </p>
                </div>

                <form onSubmit={handleAddCustomItem} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={newFeatureTitle}
                    onChange={(e) => setNewFeatureTitle(e.target.value)}
                    placeholder="e.g. Master EDC Unit 1 Derivations by Friday"
                    className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none"
                  />
                  <select
                    value={newFeatureCategory}
                    onChange={(e) => setNewFeatureCategory(e.target.value as any)}
                    className="px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none"
                  >
                    <option value="study-goal">🎯 Goal</option>
                    <option value="custom-topic">📖 Topic</option>
                    <option value="personal-tool">⚡ Tool</option>
                  </select>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </form>

                {/* List of custom items */}
                <div className="space-y-2">
                  {(currentUser.features.customItems || []).length === 0 ? (
                    <div className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center text-xs text-slate-500">
                      No custom features added yet. Add one above to personalize your study plan!
                    </div>
                  ) : (
                    currentUser.features.customItems.map((item) => (
                      <div
                        key={item.id}
                        className={`px-3.5 py-2.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                          item.completed 
                            ? 'bg-slate-50 border-slate-200 opacity-60 line-through' 
                            : 'bg-white border-slate-200 shadow-xs'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <button
                            type="button"
                            onClick={() => handleToggleCustom(item.id)}
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                              item.completed 
                                ? 'bg-emerald-600 border-emerald-600 text-white' 
                                : 'border-slate-300 hover:border-blue-500 bg-white'
                            }`}
                          >
                            {item.completed && <Check className="w-3.5 h-3.5" />}
                          </button>
                          
                          <span className="text-xs font-semibold text-slate-800 truncate">
                            {item.title}
                          </span>

                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium shrink-0">
                            {item.category === 'study-goal' ? '🎯 Goal' : item.category === 'custom-topic' ? '📖 Topic' : '⚡ Tool'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteCustom(item.id)}
                          className="p-1 text-slate-400 hover:text-red-500 rounded transition-colors cursor-pointer shrink-0"
                          title="Delete item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500">
            {currentUser ? (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Account active on this device</span>
              </span>
            ) : (
              <span>Only email is required for registration</span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
