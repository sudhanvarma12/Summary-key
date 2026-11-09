export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface MCQQuestion {
  id: string;
  unitNumber: number;
  subjectId: string;
  question: string;
  options: MCQOption[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topicTag: string;
  pdfReference: string; // Excerpt/page from the note
}

export const UNIT_MCQ_DATABASE: Record<string, MCQQuestion[]> = {
  // --- VISAKHA VALLEY SCHOOL: CLASS 10 SCIENCE ---
  // Unit 1: Chemical Reactions and Equations
  'vvs-cbse10-science-1': [
    {
      id: 'mcq-chem-1',
      unitNumber: 1,
      subjectId: 'vvs-cbse10-science',
      question: 'When lead nitrate powder is heated in a dry boiling tube, brown fumes are evolved. These brown fumes belong to which gas?',
      options: [
        { id: 'a', text: 'Nitrogen gas (N2)', isCorrect: false, explanation: 'Nitrogen gas is colorless and odorless.' },
        { id: 'b', text: 'Nitrogen dioxide (NO2)', isCorrect: true, explanation: 'Lead nitrate thermally decomposes into yellow PbO, brown pungent NO2 fumes, and oxygen gas.' },
        { id: 'c', text: 'Nitrous oxide (N2O)', isCorrect: false, explanation: 'N2O is laughing gas, not released here.' },
        { id: 'd', text: 'Lead peroxide (PbO2)', isCorrect: false, explanation: 'PbO2 is a solid, not a gaseous fume.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Thermal Decomposition',
      pdfReference: 'Page 3 • Section 1.2 "Decomposition Reactions"'
    },
    {
      id: 'mcq-chem-2',
      unitNumber: 1,
      subjectId: 'vvs-cbse10-science',
      question: 'Which of the following processes represents an exothermic reduction reaction in daily biological processes?',
      options: [
        { id: 'a', text: 'Respiration (breakdown of glucose)', isCorrect: true, explanation: 'Respiration releases 38 ATP of energy (exothermic) as oxygen oxidizes glucose.' },
        { id: 'b', text: 'Photosynthesis in green leaves', isCorrect: false, explanation: 'Photosynthesis is endothermic because it absorbs sunlight.' },
        { id: 'c', text: 'Decomposition of calcium carbonate', isCorrect: false, explanation: 'Thermal decomposition requires heating (endothermic).' },
        { id: 'd', text: 'Evaporation of water from skin', isCorrect: false, explanation: 'Evaporation absorbs latent heat (endothermic cooling).' }
      ],
      difficulty: 'Medium',
      topicTag: 'Energy Changes in Reactions',
      pdfReference: 'Page 5 • Section 1.3 "Exothermic vs Endothermic"'
    },
    {
      id: 'mcq-chem-3',
      unitNumber: 1,
      subjectId: 'vvs-cbse10-science',
      question: 'In the reaction: CuO + H2 --heat--> Cu + H2O, which substance acts as the oxidizing agent?',
      options: [
        { id: 'a', text: 'H2 (Hydrogen)', isCorrect: false, explanation: 'Hydrogen gains oxygen and is oxidized, so it is the reducing agent.' },
        { id: 'b', text: 'Cu (Copper metal)', isCorrect: false, explanation: 'Copper is the reduced product.' },
        { id: 'c', text: 'CuO (Copper Oxide)', isCorrect: true, explanation: 'CuO supplies oxygen to H2 and gets reduced to Cu; hence it is the oxidizing agent.' },
        { id: 'd', text: 'H2O (Water)', isCorrect: false, explanation: 'H2O is the oxidized product.' }
      ],
      difficulty: 'Hard',
      topicTag: 'Redox Reactions',
      pdfReference: 'Page 7 • Section 1.4 "Oxidizing and Reducing Agents"'
    },
    {
      id: 'mcq-chem-4',
      unitNumber: 1,
      subjectId: 'vvs-cbse10-science',
      question: 'Chips manufacturers flush bags of chips with which inert gas to prevent rancidity caused by oxidation?',
      options: [
        { id: 'a', text: 'Oxygen gas (O2)', isCorrect: false, explanation: 'Oxygen accelerates rancidity by oxidizing fats.' },
        { id: 'b', text: 'Nitrogen gas (N2)', isCorrect: true, explanation: 'Nitrogen is unreactive and prevents aerial oxidation of oils and fats.' },
        { id: 'c', text: 'Chlorine gas (Cl2)', isCorrect: false, explanation: 'Chlorine is a toxic bleaching gas.' },
        { id: 'd', text: 'Carbon monoxide (CO)', isCorrect: false, explanation: 'Carbon monoxide is poisonous and not food-safe.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Corrosion & Rancidity',
      pdfReference: 'Page 10 • Section 1.5 "Prevention of Rancidity"'
    },
    {
      id: 'mcq-chem-5',
      unitNumber: 1,
      subjectId: 'vvs-cbse10-science',
      question: 'What is observed when quicklime (CaO) is added vigorously to water in a beaker?',
      options: [
        { id: 'a', text: 'The beaker becomes boiling hot as slaked lime Ca(OH)2 is formed with hissing sound', isCorrect: true, explanation: 'CaO + H2O -> Ca(OH)2 + Heat. This is a highly exothermic combination reaction.' },
        { id: 'b', text: 'The beaker cools down to freezing temperatures', isCorrect: false, explanation: 'It is not endothermic.' },
        { id: 'c', text: 'A deep blue solution forms with no temperature change', isCorrect: false, explanation: 'Slaked lime solution is milky white/colorless, not blue.' },
        { id: 'd', text: 'No reaction takes place at room temperature', isCorrect: false, explanation: 'Quicklime vigorously reacts with water immediately.' }
      ],
      difficulty: 'Medium',
      topicTag: 'Combination Reactions',
      pdfReference: 'Page 2 • Section 1.1 "Reaction of Quicklime with Water"'
    }
  ],

  // Unit 2: Light - Reflection and Refraction
  'vvs-cbse10-science-2': [
    {
      id: 'mcq-light-1',
      unitNumber: 2,
      subjectId: 'vvs-cbse10-science',
      question: 'Where should an object be placed in front of a concave mirror so that the real, inverted image has the exact same size as the object?',
      options: [
        { id: 'a', text: 'At Principal Focus (F)', isCorrect: false, explanation: 'At F, the image forms at infinity and is infinitely magnified.' },
        { id: 'b', text: 'At Center of Curvature (C)', isCorrect: true, explanation: 'When object is at C (u = 2f), the image is also formed at C with magnification m = -1 (same size).' },
        { id: 'c', text: 'Between Focus and Pole (P)', isCorrect: false, explanation: 'Between F and P, the image is virtual, erect, and behind the mirror.' },
        { id: 'd', text: 'Beyond Center of Curvature', isCorrect: false, explanation: 'Beyond C, the image is diminished and lies between C and F.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Spherical Mirrors',
      pdfReference: 'Page 2 • Table 2.1 "Ray Diagrams for Concave Mirror"'
    },
    {
      id: 'mcq-light-2',
      unitNumber: 2,
      subjectId: 'vvs-cbse10-science',
      question: 'A convex lens has a focal length of +20 cm. What is its optical power in Dioptres (D)?',
      options: [
        { id: 'a', text: '-5.0 D', isCorrect: false, explanation: 'Convex lenses have positive focal lengths and positive power.' },
        { id: 'b', text: '+0.05 D', isCorrect: false, explanation: 'Must convert focal length to meters first: 20 cm = 0.20 m.' },
        { id: 'c', text: '+5.0 D', isCorrect: true, explanation: 'Power P = 1 / f(in meters) = 1 / 0.20 m = +5.0 Dioptres.' },
        { id: 'd', text: '+2.0 D', isCorrect: false, explanation: 'Incorrect division factor.' }
      ],
      difficulty: 'Medium',
      topicTag: 'Power of a Lens',
      pdfReference: 'Page 6 • Section 2.4 "Lens Power Formula"'
    },
    {
      id: 'mcq-light-3',
      unitNumber: 2,
      subjectId: 'vvs-cbse10-science',
      question: 'The refractive index of diamond with respect to air is 2.42. What does this physically mean?',
      options: [
        { id: 'a', text: 'Light travels 2.42 times faster in diamond than in vacuum', isCorrect: false, explanation: 'Light slows down in denser medium.' },
        { id: 'b', text: 'The speed of light in diamond is 1/2.42 times its speed in vacuum', isCorrect: true, explanation: 'Refractive index n = c / v => v = c / 2.42. Light travels at only ~1.24 × 10⁸ m/s in diamond.' },
        { id: 'c', text: 'Diamond reflects 242% of incident light', isCorrect: false, explanation: 'Refractive index relates to speed of wave transmission, not reflection.' },
        { id: 'd', text: 'Diamond is 2.42 times denser by mass than water', isCorrect: false, explanation: 'Optical density is distinct from mass density.' }
      ],
      difficulty: 'Medium',
      topicTag: 'Snell\'s Law & Refractive Index',
      pdfReference: 'Page 8 • Section 2.3 "Optical Density and Speed of Light"'
    },
    {
      id: 'mcq-light-4',
      unitNumber: 2,
      subjectId: 'vvs-cbse10-science',
      question: 'Which type of mirror is preferred as a rear-view (wing) mirror in automobiles, and why?',
      options: [
        { id: 'a', text: 'Concave mirror, because it magnifies approaching cars', isCorrect: false, explanation: 'Concave mirrors produce inverted images beyond focus.' },
        { id: 'b', text: 'Plane mirror, because it has zero distortion', isCorrect: false, explanation: 'Plane mirrors have a restricted field of view.' },
        { id: 'c', text: 'Convex mirror, because it always gives an erect, diminished image and a wider field of view', isCorrect: true, explanation: 'Convex mirrors curve outwards, offering a panoramic wide view to spot overtaking vehicles safely.' },
        { id: 'd', text: 'Parabolic cylindrical mirror', isCorrect: false, explanation: 'Not practical for consumer automobiles.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Mirror Applications',
      pdfReference: 'Page 4 • Section 2.2 "Automobile Rearview Mirrors"'
    }
  ],

  // --- GVPCOE: DATA STRUCTURES & ALGORITHMS (R20) ---
  // Unit 1: Linear Data Structures
  'ds-gvp-r20-1': [
    {
      id: 'mcq-ds-1',
      unitNumber: 1,
      subjectId: 'ds-gvp-r20',
      question: 'What is the time complexity to insert a new node at the beginning (head) of a Singly Linked List having n nodes?',
      options: [
        { id: 'a', text: 'O(1) constant time', isCorrect: true, explanation: 'Only requires creating new node, pointing newNode->next = head, and updating head pointer. No traversal needed.' },
        { id: 'b', text: 'O(n) linear time', isCorrect: false, explanation: 'O(n) is only required if inserting at the end without a tail pointer.' },
        { id: 'c', text: 'O(log n)', isCorrect: false, explanation: 'Linked lists do not support binary division.' },
        { id: 'd', text: 'O(n²)', isCorrect: false, explanation: 'Way too slow for insertion.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Linked Lists Complexity',
      pdfReference: 'Page 4 • Section 1.1 "Asymptotic Analysis"'
    },
    {
      id: 'mcq-ds-2',
      unitNumber: 1,
      subjectId: 'ds-gvp-r20',
      question: 'In a Doubly Linked List, what pointer operation correctly links a new node X between node A and node B?',
      options: [
        { id: 'a', text: 'X->next = B; X->prev = A; A->next = X; B->prev = X;', isCorrect: true, explanation: 'Four pointer rewires are strictly required to preserve bidirectional traversal invariants.' },
        { id: 'b', text: 'X->next = A; X->prev = B; A->prev = X;', isCorrect: false, explanation: 'Reversed pointers corrupt list.' },
        { id: 'c', text: 'A->next = X; B->prev = X; (without setting X pointers)', isCorrect: false, explanation: 'X pointers would remain dangling NULL or garbage.' },
        { id: 'd', text: 'free(A); free(B);', isCorrect: false, explanation: 'Deletes existing nodes.' }
      ],
      difficulty: 'Medium',
      topicTag: 'Doubly Linked List Invariants',
      pdfReference: 'Page 9 • Section 1.3 "Bidirectional Pointer Rewiring"'
    },
    {
      id: 'mcq-ds-3',
      unitNumber: 1,
      subjectId: 'ds-gvp-r20',
      question: 'Why is binary search NOT recommended directly on a singly linked list even if elements are strictly sorted?',
      options: [
        { id: 'a', text: 'Because linked list elements are stored in contiguous memory', isCorrect: false, explanation: 'Linked list nodes are non-contiguous in heap memory.' },
        { id: 'b', text: 'Because linked lists do not support O(1) random access to find middle elements', isCorrect: true, explanation: 'Finding the middle element requires O(n) sequential pointer traversal, defeating O(log n) binary search speed.' },
        { id: 'c', text: 'Because linked lists cannot hold integer values', isCorrect: false, explanation: 'Linked lists can store any data type.' },
        { id: 'd', text: 'Because pointers cannot be compared with relational operators', isCorrect: false, explanation: 'Pointer addresses can be checked for equality/NULL.' }
      ],
      difficulty: 'Hard',
      topicTag: 'Access Invariants',
      pdfReference: 'Page 12 • Section 1.5 "Sequential vs Random Access"'
    }
  ],

  // Unit 3: Trees & Binary Search Trees
  'ds-gvp-r20-3': [
    {
      id: 'mcq-tree-1',
      unitNumber: 3,
      subjectId: 'ds-gvp-r20',
      question: 'What is the allowable Balance Factor range for every node in a strictly valid AVL Tree?',
      options: [
        { id: 'a', text: '{-2, -1, 0, 1, 2}', isCorrect: false, explanation: 'BF of -2 or +2 triggers automatic rotations.' },
        { id: 'b', text: '{-1, 0, +1}', isCorrect: true, explanation: 'BF = height(Left) - height(Right) must strictly be in {-1, 0, +1}.' },
        { id: 'c', text: '{0} strictly (perfectly balanced)', isCorrect: false, explanation: 'Only a full perfect binary tree has BF=0 everywhere.' },
        { id: 'd', text: '{0, 1, 2}', isCorrect: false, explanation: 'Negative heights are possible when right is taller.' }
      ],
      difficulty: 'Easy',
      topicTag: 'AVL Trees',
      pdfReference: 'Page 7 • Section 3.3 "AVL Invariant Condition"'
    },
    {
      id: 'mcq-tree-2',
      unitNumber: 3,
      subjectId: 'ds-gvp-r20',
      question: 'Which tree traversal on a Binary Search Tree (BST) visits keys in strictly ascending sorted order?',
      options: [
        { id: 'a', text: 'Pre-order Traversal (Root, Left, Right)', isCorrect: false, explanation: 'Pre-order does not produce sorted keys.' },
        { id: 'b', text: 'Post-order Traversal (Left, Right, Root)', isCorrect: false, explanation: 'Post-order visits root last.' },
        { id: 'c', text: 'In-order Traversal (Left, Root, Right)', isCorrect: true, explanation: 'Since Left < Root < Right in BST, in-order traversal yields ascending sorted order in O(n) time.' },
        { id: 'd', text: 'Level-order Breadth-First Traversal', isCorrect: false, explanation: 'Level-order traverses tier by tier.' }
      ],
      difficulty: 'Easy',
      topicTag: 'BST Traversals',
      pdfReference: 'Page 4 • Section 3.2 "Recursive Tree Traversals"'
    }
  ],

  // --- VISAKHA VALLEY SCHOOL: CLASS 9 SCIENCE ---
  // Unit 1: Matter in Our Surroundings
  'vvs-cbse9-science-1': [
    {
      id: 'mcq-c9-mat-1',
      unitNumber: 1,
      subjectId: 'vvs-cbse9-science',
      question: 'During summer days, water kept in an earthen pot (matka) becomes cool because of which phenomenon?',
      options: [
        { id: 'a', text: 'Diffusion', isCorrect: false, explanation: 'Diffusion is mixing of particles, not cooling.' },
        { id: 'b', text: 'Transpiration', isCorrect: false, explanation: 'Transpiration occurs in plant leaves.' },
        { id: 'c', text: 'Osmosis', isCorrect: false, explanation: 'Osmosis is water movement across semi-permeable membrane.' },
        { id: 'd', text: 'Evaporation', isCorrect: true, explanation: 'Water seeps out through microscopic pores in the earthen pot and evaporates, absorbing latent heat of vaporization from the remaining water and cooling it.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Evaporation & Latent Heat',
      pdfReference: 'NCERT Chapter 1 • Page 9 "Evaporation and Cooling"'
    },
    {
      id: 'mcq-c9-mat-2',
      unitNumber: 1,
      subjectId: 'vvs-cbse9-science',
      question: 'What is the physical state of water at 250°C and 100°C respectively under standard atmospheric pressure?',
      options: [
        { id: 'a', text: 'Gas, and transition equilibrium between Liquid and Gas', isCorrect: true, explanation: 'At 100°C water boils and exists in both liquid and gaseous vapor states due to latent heat; above 100°C (at 250°C) it exists purely as gas/steam.' },
        { id: 'b', text: 'Liquid, and Gas', isCorrect: false, explanation: 'Water cannot be liquid at 250°C at 1 atm.' },
        { id: 'c', text: 'Solid, and Liquid', isCorrect: false, explanation: 'Solid ice exists at or below 0°C.' },
        { id: 'd', text: 'Plasma, and Liquid', isCorrect: false, explanation: 'Plasma requires thousands of degrees.' }
      ],
      difficulty: 'Medium',
      topicTag: 'States of Matter',
      pdfReference: 'NCERT Chapter 1 • Page 8 "Effect of Change of Temperature"'
    }
  ],

  // --- VISAKHA VALLEY SCHOOL: CLASS 9 SCIENCE ---
  // Unit 6: Motion
  'vvs-cbse9-science-6': [
    {
      id: 'mcq-c9-mot-1',
      unitNumber: 6,
      subjectId: 'vvs-cbse9-science',
      question: 'What physical quantity does the area under a Velocity-Time (v-t) graph represent?',
      options: [
        { id: 'a', text: 'Acceleration', isCorrect: false, explanation: 'Slope of v-t graph represents acceleration.' },
        { id: 'b', text: 'Displacement / Distance traveled', isCorrect: true, explanation: 'Area = Velocity × Time = (m/s) × s = meters (Displacement).' },
        { id: 'c', text: 'Force', isCorrect: false, explanation: 'Force requires mass times acceleration.' },
        { id: 'd', text: 'Speed of light', isCorrect: false, explanation: 'Irrelevant physical constant.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Graphical Representation of Motion',
      pdfReference: 'NCERT Chapter 7 • Page 104 "Velocity-Time Graphs"'
    }
  ],

  // --- VISAKHA VALLEY SCHOOL: CLASS 8 SCIENCE ---
  // Unit 1: Crop Production and Management
  'vvs-cbse8-science-1': [
    {
      id: 'mcq-c8-crop-1',
      unitNumber: 1,
      subjectId: 'vvs-cbse8-science',
      question: 'Which of the following crops is classified as a Kharif crop grown during the rainy season in Andhra Pradesh?',
      options: [
        { id: 'a', text: 'Wheat', isCorrect: false, explanation: 'Wheat is a Rabi winter crop.' },
        { id: 'b', text: 'Gram', isCorrect: false, explanation: 'Gram is a Rabi pulse crop.' },
        { id: 'c', text: 'Paddy (Rice)', isCorrect: true, explanation: 'Paddy requires heavy water and is sown during monsoon as a Kharif crop.' },
        { id: 'd', text: 'Mustard', isCorrect: false, explanation: 'Mustard is a Rabi winter oilseed.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Kharif vs Rabi Crops',
      pdfReference: 'NCERT Class 8 Chapter 1 • Page 2 "Crop Seasons"'
    }
  ],

  // --- VISAKHA VALLEY SCHOOL: CLASS 8 SCIENCE ---
  // Unit 2: Microorganisms: Friend and Foe
  'vvs-cbse8-science-2': [
    {
      id: 'mcq-c8-micro-1',
      unitNumber: 2,
      subjectId: 'vvs-cbse8-science',
      question: 'Which bacterium multiplies in warm milk and promotes the formation of curd?',
      options: [
        { id: 'a', text: 'Rhizobium', isCorrect: false, explanation: 'Rhizobium fixes nitrogen in root nodules.' },
        { id: 'b', text: 'Lactobacillus', isCorrect: true, explanation: 'Lactobacillus promotes coagulation of milk proteins into curd.' },
        { id: 'c', text: 'Penicillium', isCorrect: false, explanation: 'Penicillium is a mold (fungus) producing penicillin.' },
        { id: 'd', text: 'Salmonella', isCorrect: false, explanation: 'Salmonella is a food-poisoning pathogen.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Commercial Uses of Microorganisms',
      pdfReference: 'NCERT Class 8 Chapter 2 • Page 19 "Making Curd and Bread"'
    }
  ]
};

// Fallback generator ensuring exactly 5 MCQs for every game round
export const getMCQsForUnit = (subjectId: string, unitNumber: number): MCQQuestion[] => {
  const cleanId = subjectId.replace(/^(vvs|timpany|dps|ncs|sssvv)-/, '');
  const key1 = `${subjectId}-${unitNumber}`;
  const key2 = `${cleanId}-${unitNumber}`;
  const key3 = `vvs-${cleanId}-${unitNumber}`;
  const key4 = `vvs-cbse10-science-${unitNumber}`;

  const existing = UNIT_MCQ_DATABASE[key1] || UNIT_MCQ_DATABASE[key2] || UNIT_MCQ_DATABASE[key3] || (cleanId.includes('science') ? UNIT_MCQ_DATABASE[key4] : undefined) || [];

  const genericPool: MCQQuestion[] = [
    {
      id: `gen-mcq-${subjectId}-${unitNumber}-1`,
      unitNumber,
      subjectId,
      question: `What is the most crucial revision rule for scoring full marks in Unit ${unitNumber}?`,
      options: [
        { id: 'a', text: 'Write clear definitions, mention standard SI units, and box key formulas', isCorrect: true, explanation: 'Examiners award full step marks for highlighted units and clear formulas.' },
        { id: 'b', text: 'Skip units and write only final numerical values', isCorrect: false, explanation: 'Missing units lose 0.5 to 1 mark in board exams.' },
        { id: 'c', text: 'Write long paragraphs without headings or points', isCorrect: false, explanation: 'Bullet points are preferred by evaluators.' },
        { id: 'd', text: 'Avoid drawing diagrams when asked', isCorrect: false, explanation: 'Labeled diagrams are essential.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Exam Revision',
      pdfReference: `Page 1 • Unit ${unitNumber} Revision Notes`
    },
    {
      id: `gen-mcq-${subjectId}-${unitNumber}-2`,
      unitNumber,
      subjectId,
      question: `In CBSE board problem solving for this chapter, which step should always be written first?`,
      options: [
        { id: 'a', text: 'State the given values, known formula, and required unknown clearly', isCorrect: true, explanation: 'Stepwise marking awards marks for given data and the governing formula.' },
        { id: 'b', text: 'Directly guess the answer without showing any steps', isCorrect: false, explanation: 'Zero marks are awarded for unverified answers without steps.' },
        { id: 'c', text: 'Copy the question statement three times', isCorrect: false, explanation: 'Wastes valuable examination time.' },
        { id: 'd', text: 'Ignore standard unit conversions (e.g. cm to m)', isCorrect: false, explanation: 'Leads to incorrect numerical answers.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Stepwise Working',
      pdfReference: `Page 2 • Unit ${unitNumber} Problem Cheatsheet`
    },
    {
      id: `gen-mcq-${subjectId}-${unitNumber}-3`,
      unitNumber,
      subjectId,
      question: `What is the best way to revise formulas and mindmaps for Unit ${unitNumber}?`,
      options: [
        { id: 'a', text: 'Active recall and writing formulas from memory on a blank sheet', isCorrect: true, explanation: 'Active recall significantly strengthens neural pathways for long-term retention.' },
        { id: 'b', text: 'Passive reading once right before sleeping', isCorrect: false, explanation: 'Rapidly forgotten according to the forgetting curve.' },
        { id: 'c', text: 'Ignoring formula derivations entirely', isCorrect: false, explanation: 'Derivations often appear in 3-mark board questions.' },
        { id: 'd', text: 'Memorizing without understanding what variables represent', isCorrect: false, explanation: 'Causes confusion when questions vary variables.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Smart Study Technique',
      pdfReference: `Page 3 • Unit ${unitNumber} Mindmap & Formulas`
    },
    {
      id: `gen-mcq-${subjectId}-${unitNumber}-4`,
      unitNumber,
      subjectId,
      question: `When answering 3-mark questions from Unit ${unitNumber}, high-scoring students always:`,
      options: [
        { id: 'a', text: 'Provide 3 distinct bullet points with keywords highlighted', isCorrect: true, explanation: 'Board evaluators check key terms against the official marking scheme.' },
        { id: 'b', text: 'Write single word answers for descriptive questions', isCorrect: false, explanation: 'Lacks required depth for 3 marks.' },
        { id: 'c', text: 'Leave answers unnumbered and messy', isCorrect: false, explanation: 'Hampers clarity and evaluation.' },
        { id: 'd', text: 'Include unnecessary gossip', isCorrect: false, explanation: 'Violates examination standards.' }
      ],
      difficulty: 'Easy',
      topicTag: 'Board Answer Presentation',
      pdfReference: `Page 4 • Unit ${unitNumber} Model Answers`
    },
    {
      id: `gen-mcq-${subjectId}-${unitNumber}-5`,
      unitNumber,
      subjectId,
      question: `How many times should previous year board questions (PYQs) for this topic be practiced before finals?`,
      options: [
        { id: 'a', text: 'At least 2 to 3 times under timed conditions', isCorrect: true, explanation: 'Over 70% of board question patterns repeat across 5-year cycles.' },
        { id: 'b', text: 'Zero times, only textbook reading is needed', isCorrect: false, explanation: 'PYQ practice is essential for pattern familiarity.' },
        { id: 'c', text: 'Only looking at answers without solving by hand', isCorrect: false, explanation: 'Solving by hand builds speed and accuracy.' },
        { id: 'd', text: 'Skipping numerical questions completely', isCorrect: false, explanation: 'Numericals are high-scoring and objective.' }
      ],
      difficulty: 'Easy',
      topicTag: 'PYQ Mastery',
      pdfReference: `Page 5 • Unit ${unitNumber} PYQ Vault`
    }
  ];

  if (existing.length >= 5) {
    return existing.slice(0, 5);
  }

  const combined = [...existing];
  for (const genQ of genericPool) {
    if (combined.length >= 5) break;
    combined.push(genQ);
  }

  return combined.slice(0, 5);
};
