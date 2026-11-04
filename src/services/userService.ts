import { UserAccount, UserFeatures, CustomFeatureItem } from '../types';

const STORAGE_KEY = 'summarykey_user_account_v1';
const LEGACY_STORAGE_KEY = 'passkey_user_account_v1';

export const DEFAULT_USER_FEATURES: UserFeatures = {
  aiVoiceTutor: true,
  examWeightageBadge: true,
  formulaCheatSheet: true,
  mindmapVisualizer: true,
  teluguTranslations: true,
  dailyStudyReminder: false,
  spacedRepetitionFlashcards: true,
  offlineStudyPack: false,
  customItems: [
    {
      id: 'custom-default-1',
      title: 'Master Unit 1 Core Derivations for Mid-term Exam',
      category: 'study-goal',
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 'custom-default-2',
      title: 'Practice 16-Mark BoS Verified Questions',
      category: 'study-goal',
      completed: false,
      createdAt: new Date().toISOString()
    }
  ]
};

// Event emitter helper for cross-component reactive updates
const listeners = new Set<(user: UserAccount | null) => void>();

export const subscribeUserChanges = (listener: (user: UserAccount | null) => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyListeners = (user: UserAccount | null) => {
  listeners.forEach((listener) => {
    try {
      listener(user);
    } catch (e) {
      console.error('Error notifying user listener', e);
    }
  });
};

export const getStoredUser = (): UserAccount | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse user from localStorage', e);
    return null;
  }
};

export const registerUser = (
  email: string,
  extra?: {
    name?: string;
    institutionName?: string;
    branchOrGrade?: string;
    targetExam?: string;
    role?: 'beginner' | 'school-student' | 'engineering-student';
  }
): UserAccount => {
  const trimmedEmail = email.trim().toLowerCase();
  const existing = getStoredUser();

  const user: UserAccount = {
    email: trimmedEmail,
    name: extra?.name?.trim() || existing?.name || trimmedEmail.split('@')[0],
    role: extra?.role || existing?.role || 'beginner',
    institutionName: extra?.institutionName || existing?.institutionName || 'Self Learner / Vizag Student',
    branchOrGrade: extra?.branchOrGrade || existing?.branchOrGrade || 'All Subjects Access',
    targetExam: extra?.targetExam || existing?.targetExam || 'Academics & Semester Exams',
    registeredAt: existing?.registeredAt || new Date().toISOString(),
    features: existing?.features ? { ...DEFAULT_USER_FEATURES, ...existing.features } : DEFAULT_USER_FEATURES
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  notifyListeners(user);
  return user;
};

export const updateUserProfile = (updates: Partial<Omit<UserAccount, 'features' | 'email'>>): UserAccount | null => {
  const current = getStoredUser();
  if (!current) return null;

  const updated: UserAccount = {
    ...current,
    ...updates,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners(updated);
  return updated;
};

export const toggleUserFeature = (featureKey: keyof Omit<UserFeatures, 'customItems'>): UserAccount | null => {
  const current = getStoredUser();
  if (!current) return null;

  const updated: UserAccount = {
    ...current,
    features: {
      ...current.features,
      [featureKey]: !current.features[featureKey]
    }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners(updated);
  return updated;
};

export const addCustomFeatureItem = (title: string, category: 'study-goal' | 'custom-topic' | 'personal-tool' = 'study-goal'): UserAccount | null => {
  const current = getStoredUser();
  if (!current) return null;

  const newItem: CustomFeatureItem = {
    id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    title: title.trim(),
    category,
    completed: false,
    createdAt: new Date().toISOString()
  };

  const updated: UserAccount = {
    ...current,
    features: {
      ...current.features,
      customItems: [newItem, ...(current.features.customItems || [])]
    }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners(updated);
  return updated;
};

export const toggleCustomFeatureItem = (itemId: string): UserAccount | null => {
  const current = getStoredUser();
  if (!current) return null;

  const updatedItems = (current.features.customItems || []).map(item => 
    item.id === itemId ? { ...item, completed: !item.completed } : item
  );

  const updated: UserAccount = {
    ...current,
    features: {
      ...current.features,
      customItems: updatedItems
    }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners(updated);
  return updated;
};

export const deleteCustomFeatureItem = (itemId: string): UserAccount | null => {
  const current = getStoredUser();
  if (!current) return null;

  const updatedItems = (current.features.customItems || []).filter(item => item.id !== itemId);

  const updated: UserAccount = {
    ...current,
    features: {
      ...current.features,
      customItems: updatedItems
    }
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  notifyListeners(updated);
  return updated;
};

export const logoutUser = () => {
  localStorage.removeItem(STORAGE_KEY);
  notifyListeners(null);
};
