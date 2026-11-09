import { Subject } from '../types';
import { CBSE_10_SCIENCE } from './cbse10ScienceNotes';
import { CBSE_10_MATHS } from './cbse10MathsNotes';
import { CBSE_10_SOCIAL, CBSE_10_ENGLISH } from './cbse10OthersNotes';
import { CBSE_10_AI } from './cbse10AINotes';
import { CBSE_9_SCIENCE } from './cbse9ScienceNotes';
import { CBSE_9_MATHS } from './cbse9MathsNotes';
import { CBSE_9_SOCIAL } from './cbse9SocialNotes';
import { CBSE_9_AI } from './cbse9AINotes';
import { CBSE_8_SCIENCE, CBSE_8_MATHS } from './cbseJuniorExtraNotes';
import { CBSE_8_SOCIAL } from './cbse8SocialNotes';
import { CBSE_8_AI } from './cbse8AINotes';

export const CBSE_REVISION_SUBJECTS: Subject[] = [
  // Class 10 Board Core & Skill Subjects
  CBSE_10_SCIENCE,
  CBSE_10_MATHS,
  CBSE_10_SOCIAL,
  CBSE_10_ENGLISH,
  CBSE_10_AI,

  // Class 9 Foundation Core & Skill Subjects
  CBSE_9_SCIENCE,
  CBSE_9_MATHS,
  CBSE_9_SOCIAL,
  CBSE_9_AI,

  // Class 8 Foundation Core & Skill Subjects
  CBSE_8_SCIENCE,
  CBSE_8_MATHS,
  CBSE_8_SOCIAL,
  CBSE_8_AI
];

export {
  CBSE_10_SCIENCE,
  CBSE_10_MATHS,
  CBSE_10_SOCIAL,
  CBSE_10_ENGLISH,
  CBSE_10_AI,
  CBSE_9_SCIENCE,
  CBSE_9_MATHS,
  CBSE_9_SOCIAL,
  CBSE_9_AI,
  CBSE_8_SCIENCE,
  CBSE_8_MATHS,
  CBSE_8_SOCIAL,
  CBSE_8_AI
};
