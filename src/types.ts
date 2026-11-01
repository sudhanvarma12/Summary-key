export type InstitutionCategory = 'school' | 'college';

export type InstitutionId = 
  // Colleges
  | 'gvp' 
  | 'gitam' 
  | 'anits' 
  | 'raghu' 
  | 'au'
  // Schools
  | 'vvs' // Visakha Valley School
  | 'timpany' // Timpany School
  | 'dps' // Delhi Public School Vizag
  | 'ncs' // Navy Children School Vizag
  | 'sssvv'; // Sri Sathya Sai Vidya Vihar

export interface Institution {
  id: InstitutionId;
  category: InstitutionCategory;
  name: string;
  fullName: string;
  location: string;
  type: string; // e.g. "CBSE Affiliated", "Autonomous • NBA Tier-1"
  boardOrRegulations: string[]; // e.g. ["CBSE 2024-25", "ICSE"] or ["R23", "R20"]
  bannerBadge: string;
  gradesOrBranches: string[]; // e.g. ["Class 10", "Class 12", "Class 9", "Class 11"] or ["CSE", "IT", "ECE"]
}

export type GradeOrBranchId = 
  | 'class10' 
  | 'class12-sci' 
  | 'class9' 
  | 'class8'
  | 'class11-sci'
  | 'cse' 
  | 'csm' 
  | 'it' 
  | 'ece' 
  | 'eee' 
  | 'mech';

export interface GradeOrBranch {
  id: GradeOrBranchId;
  name: string;
  code: string;
  category: InstitutionCategory;
}

export interface MindmapBranch {
  title: string;
  subtopics: string[];
  examTip?: string;
  color?: string;
}

export interface ChapterMindmap {
  center: string;
  branches: MindmapBranch[];
}

export interface TopicGlance {
  topic: string;
  quickTake: string;
  keyPoints: string[];
  formulaOrEquation?: string;
}

export interface Unit {
  unitNumber: number;
  title: string;
  keyTopics: string[];
  readingTime: string;
  verifiedBy: string;
  verifiedRole: string;
  pdfPages: number;
  fileSize: string;
  rating: number;
  upvotes: number;
  videoDuration: string;
  summaryTelugu: string;
  summaryEnglish: string;
  examWeightage: string;
  formulaeCount: number;
  solvedQuestionsCount: number;
  detailedNotes?: string;
  formulasList?: { name: string; formula: string; explanation: string }[];
  solvedQuestions?: { question: string; marks: string; answer: string; tip?: string }[];
  topicAtAGlance?: TopicGlance[];
  mindmap?: ChapterMindmap;
}

export type CollegeYear = '1st-year' | '2nd-year' | '3rd-year' | '4th-year';

export interface Subject {
  id: string;
  code: string;
  name: string;
  semesterOrGrade: string; // e.g. "Class 10" or "Semester 3"
  creditsOrMarks: string; // e.g. "80 Marks Board" or "3 Credits"
  gradeOrBranch: GradeOrBranchId;
  institutionId: InstitutionId;
  regulationOrBoard: string;
  category: string; // e.g. "CBSE Core Science", "Professional Core"
  collegeYear?: CollegeYear;
  semester?: number;
  subjectCategory?: 'science' | 'maths' | 'social' | 'english' | 'ai' | 'it' | 'core-cs' | 'engineering';
  units: Unit[];
}

export interface MessMenuDay {
  day: string;
  breakfast: string;
  lunch: string;
  snacks: string;
  dinner: string;
  special: string;
  rating: number;
}

export interface CollegeMessInfo {
  institutionId: InstitutionId;
  institutionName: string;
  hostelOrCanteenName: string;
  canteenSpecial: string;
  hygieneRating: string;
  todaySpecial: string;
  aiDietTip: string;
  menu: MessMenuDay[];
}

export interface CustomFeatureItem {
  id: string;
  title: string;
  category: 'study-goal' | 'custom-topic' | 'personal-tool';
  completed?: boolean;
  createdAt: string;
}

export interface UserFeatures {
  aiVoiceTutor: boolean;
  examWeightageBadge: boolean;
  formulaCheatSheet: boolean;
  mindmapVisualizer: boolean;
  teluguTranslations: boolean;
  dailyStudyReminder: boolean;
  spacedRepetitionFlashcards: boolean;
  offlineStudyPack: boolean;
  customItems: CustomFeatureItem[];
}

export interface UserAccount {
  email: string; // ONLY REQUIRED FIELD FOR REGISTRATION
  name?: string;
  role?: 'beginner' | 'school-student' | 'engineering-student';
  institutionName?: string;
  branchOrGrade?: string;
  targetExam?: string;
  registeredAt: string;
  features: UserFeatures;
}
