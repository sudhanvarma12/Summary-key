import { InstitutionId } from '../types';

export interface PYQuestion {
  id: string;
  institutionId: InstitutionId;
  subjectCode: string;
  subjectName: string;
  chapterOrUnit: string;
  year: number;
  examType: string; // e.g. "CBSE Board Exam", "GVP Mid-1", "AU Semester End"
  marks: number;
  question: string;
  diagramAvailable?: boolean;
  repeatFrequency: string; // e.g. "Asked 4 times (2020, 2022, 2023, 2024)"
  importanceLevel: 'Very High' | 'High' | 'Medium';
  markingScheme: {
    step: string;
    marks: number;
  }[];
  modelAnswer: string;
  teluguTip?: string;
}

export const PYQ_DATABASE: PYQuestion[] = [
  // --- VISAKHA VALLEY SCHOOL (CBSE CLASS 10 SCIENCE) ---
  {
    id: 'pyq-vvs-sci-01',
    institutionId: 'vvs',
    subjectCode: 'CBSE-086',
    subjectName: 'Class 10 Science',
    chapterOrUnit: 'Chapter 2: Light - Reflection and Refraction',
    year: 2024,
    examType: 'CBSE Board Main Exam',
    marks: 5,
    question: '(a) Draw a neat ray diagram showing the formation of an image by a concave mirror when an object is placed between Center of Curvature (C) and Principal Focus (F).\n(b) State the position, nature, and relative size of the image formed.\n(c) An object 4 cm in size is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image? Find the height of the image.',
    diagramAvailable: true,
    repeatFrequency: 'Repeated 5x (CBSE 2019, 2021, 2022, 2023, 2024)',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Correct ray diagram with arrowheads showing rays passing through F and parallel to axis', marks: 2 },
      { step: 'Stating image attributes (Beyond C, Real & Inverted, Magnified/Enlarged)', marks: 1 },
      { step: 'Applying mirror formula: 1/v + 1/u = 1/f -> 1/v - 1/25 = -1/15 -> v = -37.5 cm', marks: 1 },
      { step: 'Magnification formula: m = -v/u = h\'/h -> h\' = -6 cm (Screen distance = 37.5 cm in front)', marks: 1 }
    ],
    modelAnswer: `Model Solution (CBSE Marking Standard):
(a) Ray 1: From the top of object parallel to principal axis passes through Principal Focus (F) after reflection.
    Ray 2: Passing through F reflects parallel to principal axis. Both meet at a point beyond C.
(b) Image Properties:
    - Position: Beyond C
    - Nature: Real and Inverted
    - Size: Magnified (larger than object)
(c) Given:
    Object distance, u = -25 cm
    Focal length, f = -15 cm
    Object height, h = 4 cm
    Using mirror formula:
    1/v + 1/u = 1/f  =>  1/v = 1/f - 1/u = -1/15 - (-1/25) = -1/15 + 1/25 = (-5 + 3)/75 = -2/75
    v = -75/2 = -37.5 cm
    Therefore, the screen must be placed 37.5 cm in front of the concave mirror.
    Image height:
    m = h'/h = -v/u  =>  h'/4 = -(-37.5)/(-25) = -1.5  =>  h' = -6 cm.
    The image is 6 cm tall and inverted.`,
    teluguTip: 'కిరణ చిత్రంలో బాణం గుర్తులు (arrowheads) తప్పనిసరిగా వేయాలి; సైన్ కన్వెన్షన్ (u=-25, f=-15) లో మైనస్ గుర్తులు రాయడం మర్చిపోకండి.'
  },
  {
    id: 'pyq-vvs-sci-02',
    institutionId: 'vvs',
    subjectCode: 'CBSE-086',
    subjectName: 'Class 10 Science',
    chapterOrUnit: 'Chapter 1: Chemical Reactions and Equations',
    year: 2023,
    examType: 'CBSE Board Main Exam',
    marks: 3,
    question: '2 g of Lead Nitrate powder is taken in a boiling tube and heated over a flame.\n(a) What are the two distinct observations made during this reaction?\n(b) Write the balanced chemical equation with state symbols.\n(c) Name the type of chemical reaction.',
    diagramAvailable: false,
    repeatFrequency: 'Repeated 4x (CBSE 2018, 2020, 2022, 2023)',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Observations: Emission of brown fumes of nitrogen dioxide (NO2) gas and yellow residue of lead oxide (PbO)', marks: 1 },
      { step: 'Balanced equation: 2Pb(NO3)2(s) --[heat]--> 2PbO(s) + 4NO2(g) + O2(g)', marks: 1.5 },
      { step: 'Type of reaction: Thermal decomposition reaction', marks: 0.5 }
    ],
    modelAnswer: `Model Solution:
(a) Observations:
    1. Brown pungent fumes of Nitrogen Dioxide (NO2) are evolved.
    2. A yellow solid residue of Lead(II) Oxide (PbO) is left in the boiling tube.
(b) Balanced Chemical Equation:
    2Pb(NO3)2 (s) --Δ--> 2PbO (s) + 4NO2 (g) + O2 (g)
(c) Type of Reaction:
    Thermal Decomposition reaction (breakdown of a single reactant into multiple products upon absorption of heat).`,
    teluguTip: 'బ్రౌన్ ఫ్యూమ్స్ (NO2) మరియు ఎల్లో రెసిడ్యూ (PbO) పేర్లు రాస్తే ఖచ్చితంగా పూర్తి మార్కులు వస్తాయి.'
  },
  {
    id: 'pyq-vvs-sci-03',
    institutionId: 'vvs',
    subjectCode: 'CBSE-086',
    subjectName: 'Class 10 Science',
    chapterOrUnit: 'Chapter 3: Life Processes',
    year: 2024,
    examType: 'CBSE Board Main Exam',
    marks: 5,
    question: '(a) Why is double circulation of blood necessary in human beings?\n(b) Draw a schematic flowchart/diagram showing double circulation of blood.\n(c) What is the function of valves in the heart during ventricular contraction?',
    diagramAvailable: true,
    repeatFrequency: 'Repeated 6x (CBSE 2017, 2019, 2020, 2022, 2023, 2024)',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Explaining separation of oxygenated and deoxygenated blood for high energy requirement of homeotherms', marks: 1.5 },
      { step: 'Schematic flow diagram: Pulmonary circulation + Systemic circulation with heart chambers labeled', marks: 2.5 },
      { step: 'Role of atrioventricular valves: Prevents backflow of blood into atria when ventricles pump', marks: 1 }
    ],
    modelAnswer: `Model Solution:
(a) Necessity of Double Circulation:
    Humans are warm-blooded organisms (homeothermic) with constant body temperature. They require a large and continuous supply of oxygen for cellular respiration to produce high ATP energy. Complete physical separation of oxygenated and deoxygenated blood ensures oxygen-rich blood reaches all tissues without dilution.
(b) Two Loops:
    1. Pulmonary Circulation: Right Ventricle -> Pulmonary Artery -> Lungs (Oxygenation) -> Pulmonary Vein -> Left Atrium.
    2. Systemic Circulation: Left Ventricle -> Aorta -> Body Tissues -> Vena Cava -> Right Atrium.
(c) Function of Valves:
    Tricuspid and Bicuspid (Mitral) valves close during ventricular contraction (systole), completely preventing the backflow of blood from the ventricles back into the auricles.`,
    teluguTip: 'గుండె డయాగ్రమ్‌లో వాల్వ్స్ మరియు పల్మనరీ ఆర్టరీ (డీ-ఆక్సిజనేటెడ్ రక్తం తీసుకెళ్లే ఏకైక ఆర్టరీ) వివరాలు రాయడం చాలా ముఖ్యం.'
  },

  // --- VISAKHA VALLEY SCHOOL (CBSE CLASS 10 MATHEMATICS) ---
  {
    id: 'pyq-vvs-math-01',
    institutionId: 'vvs',
    subjectCode: 'CBSE-041',
    subjectName: 'Class 10 Mathematics',
    chapterOrUnit: 'Chapter 1: Real Numbers',
    year: 2024,
    examType: 'CBSE Board Standard Exam',
    marks: 3,
    question: 'Prove that √5 is an irrational number.',
    diagramAvailable: false,
    repeatFrequency: 'Repeated 8x (CBSE 2016 to 2024 every year in various sets)',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Assume contradiction: √5 = a/b where a, b are coprime integers (b ≠ 0)', marks: 0.5 },
      { step: 'Squaring both sides: 5 = a²/b² => 5b² = a², proving 5 divides a²', marks: 1 },
      { step: 'By theorem, 5 divides a. Let a = 5c. Substituting: 5b² = 25c² => b² = 5c², proving 5 divides b', marks: 1 },
      { step: 'Conclusion: 5 is a common factor of a and b, contradicting that a and b are coprime. Hence √5 is irrational', marks: 0.5 }
    ],
    modelAnswer: `Standard CBSE Proof by Contradiction:
1. Let us assume to the contrary that √5 is rational.
2. Therefore, we can find coprime integers a and b (where b ≠ 0) such that:
   √5 = a / b
3. Multiplying both sides by b and squaring:
   b√5 = a  =>  5b² = a²  --- (Equation 1)
   Since 5 divides 5b², 5 divides a².
   By fundamental theorem of arithmetic, if a prime p divides a², then p divides a.
   Therefore, 5 divides a.
4. Hence, we can write a = 5c for some integer c.
   Substituting a = 5c into (Equation 1):
   5b² = (5c)² = 25c²
   b² = 5c²  --- (Equation 2)
   This means that 5 divides b², so 5 divides b.
5. From steps 3 and 4, 5 is a common factor of both a and b.
   However, this contradicts our initial assumption that a and b are coprime (having no common factor other than 1).
6. This contradiction arises because of our incorrect assumption that √5 is rational.
   Hence, √5 is proven to be an irrational number. Q.E.D.`,
    teluguTip: 'కోప్రైమ్ (coprime) పదం మరియు b² = 5c² ఈక్వేషన్ స్టెప్స్ క్రమంగా రాస్తే పూర్తి 3 మార్కులు లభిస్తాయి.'
  },
  {
    id: 'pyq-vvs-math-02',
    institutionId: 'vvs',
    subjectCode: 'CBSE-041',
    subjectName: 'Class 10 Mathematics',
    chapterOrUnit: 'Chapter 3: Introduction to Trigonometry',
    year: 2023,
    examType: 'CBSE Board Standard Exam',
    marks: 5,
    question: 'From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower. (Use √3 = 1.732)',
    diagramAvailable: true,
    repeatFrequency: 'Repeated 5x (CBSE 2018, 2020, 2022, 2023)',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Correct geometric diagram with building AB=7m, tower CD, angles 60° and 45°', marks: 1.5 },
      { step: 'In right triangle applying tan 45° = 7 / x  =>  x = 7 m (distance between building and tower)', marks: 1.5 },
      { step: 'In upper right triangle applying tan 60° = h / x  =>  h = 7√3 m', marks: 1 },
      { step: 'Total height of tower H = h + 7 = 7(√3 + 1) = 7(2.732) = 19.124 m', marks: 1 }
    ],
    modelAnswer: `Model Solution:
1. Let AB be the building of height 7 m.
   Let CD be the cable tower of height H.
   Let distance between building and tower be BD = x.
   Draw horizontal line AE perpendicular to CD.
   Then AE = BD = x, and ED = AB = 7 m.
   Let CE = h. Total height of tower CD = h + 7.
2. In right triangle ABD:
   tan 45° = AB / BD
   1 = 7 / x  =>  x = 7 m.
   Hence AE = 7 m.
3. In right triangle AEC:
   tan 60° = CE / AE
   √3 = h / 7  =>  h = 7√3 m.
4. Total Height of Cable Tower:
   CD = CE + ED = 7√3 + 7 = 7(√3 + 1)
   Substituting √3 = 1.732:
   CD = 7 × (1.732 + 1) = 7 × 2.732 = 19.124 meters.
   Answer: The height of the cable tower is 19.12 meters.`,
    teluguTip: 'డయాగ్రమ్‌లో 45° యాంగిల్ ఆఫ్ డిప్రెషన్ ని ఆల్టర్నేట్ ఇంటీరియర్ యాంగిల్ గా కిందకి చూపించడం మర్చిపోవద్దు.'
  },

  // --- GVPCOE (DATA STRUCTURES & ALGORITHMS - R20) ---
  {
    id: 'pyq-gvp-ds-01',
    institutionId: 'gvp',
    subjectCode: '20CS1104',
    subjectName: 'Data Structures & Algorithms',
    chapterOrUnit: 'Unit 3: Trees & Binary Search Trees',
    year: 2023,
    examType: 'GVPCOE Autonomous Semester End Exam',
    marks: 14,
    question: '(a) What is an AVL Tree? Explain why the height of an AVL tree with n nodes is O(log n).\n(b) Construct an AVL tree by inserting the following sequence of elements one by one:\n    21, 26, 30, 9, 4, 14, 28, 18, 15\nShow balance factors after every insertion and specify the rotations (LL, RR, LR, RL) performed.',
    diagramAvailable: true,
    repeatFrequency: 'Repeated every single year in GVPCOE & ANITS Mid-2/Semester Exams',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Definition of AVL tree with balance factor condition: BF = h(L) - h(R) ∈ {-1, 0, 1} and log n height proof', marks: 4 },
      { step: 'Step-by-step tree drawings for insertions 21, 26, 30 with RR rotation at 21', marks: 3 },
      { step: 'Insertions 9, 4 with LL rotation at 9; insertion 14 with LR rotation', marks: 4 },
      { step: 'Final balanced AVL tree with all nodes having balance factor between -1 and +1', marks: 3 }
    ],
    modelAnswer: `Model Solution:
(a) AVL Tree Definition:
An AVL (Adelson-Velsky and Landis) tree is a self-balancing Binary Search Tree where the height difference between the left and right subtrees (Balance Factor) of every node is at most 1:
Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree) ∈ {-1, 0, +1}
Because height h satisfies h ≤ 1.44 log₂(n + 2), search, insert, and delete operations strictly guarantee O(log n) worst-case time complexity.

(b) Step-by-Step Construction:
1. Insert 21: [21] (BF=0)
2. Insert 26: 21->R:26 (BF(21)=-1)
3. Insert 30: 21->R:26->R:30.
   Imbalance at 21 (BF = -2, Right-Right case).
   Action: RR Rotation (Left Rotate at 21).
   Result: [26] with Left: 21, Right: 30.
4. Insert 9: 21->L:9.
5. Insert 4: 9->L:4.
   Imbalance at 21 (BF = +2, Left-Left case at 9).
   Action: LL Rotation (Right Rotate at 21).
   ...
Final Tree Root: 21, Left child: 9 (with children 4, 14), Right child: 26 (with children 18, 30).
All leaf balance factors are 0; root balance factor is 0.`,
    teluguTip: 'రొటేషన్ చేసేటప్పుడు కొత్త రూట్ నోడ్ ఏది అవుతుందో స్పష్టంగా లేబుల్ చేసి రొటేషన్ పేరు (LL, RR) బాక్స్ లో రాయండి.'
  },
  {
    id: 'pyq-gvp-ds-02',
    institutionId: 'gvp',
    subjectCode: '20CS1104',
    subjectName: 'Data Structures & Algorithms',
    chapterOrUnit: 'Unit 1: Linear Structures - Linked Lists',
    year: 2023,
    examType: 'GVPCOE Autonomous Mid-1 Exam',
    marks: 7,
    question: 'Write a C algorithm to delete a node containing a given key from a Doubly Linked List. Carefully address all edge cases: deleting the head node, deleting the tail node, and key not present.',
    diagramAvailable: false,
    repeatFrequency: 'Repeated 3x in GVP Autonomous Mid-1',
    importanceLevel: 'High',
    markingScheme: [
      { step: 'Handling empty list and traversal to locate target node: O(n) search', marks: 2 },
      { step: 'Corner case: Deleting Head node (updating head pointer and new head->prev = NULL)', marks: 2 },
      { step: 'Corner case: Deleting Tail node (updating previous node->next = NULL)', marks: 1.5 },
      { step: 'General case: Middle node deletion with both next and prev pointer rewiring and free()', marks: 1.5 }
    ],
    modelAnswer: `C Function Implementation:
void deleteNode(struct Node** head_ref, int key) {
    if (*head_ref == NULL) return; // List is empty

    struct Node* curr = *head_ref;
    while (curr != NULL && curr->data != key) {
        curr = curr->next;
    }

    if (curr == NULL) {
        printf("Key %d not found in the Doubly Linked List.\\n", key);
        return;
    }

    // Case 1: If node to be deleted is the Head node
    if (*head_ref == curr) {
        *head_ref = curr->next;
    }

    // Case 2: Change next only if node to be deleted is NOT the last node
    if (curr->next != NULL) {
        curr->next->prev = curr->prev;
    }

    // Case 3: Change prev only if node to be deleted is NOT the first node
    if (curr->prev != NULL) {
        curr->prev->next = curr->next;
    }

    free(curr); // Free allocated heap memory
}`,
    teluguTip: 'ఫ్రీ (free(curr)) చేయడం తప్పనిసరి; మెమరీ లీక్ నివారణ పాయింట్ కి 1 మార్కు కేటాయించబడుతుంది.'
  },

  // --- ANDHRA UNIVERSITY (ENGINEERING PHYSICS - AU-R23) ---
  {
    id: 'pyq-au-phy-01',
    institutionId: 'au',
    subjectCode: '23BS1102',
    subjectName: 'Engineering Physics',
    chapterOrUnit: 'Unit 1: Wave Optics',
    year: 2024,
    examType: 'AUCOE Semester End University Exam',
    marks: 10,
    question: 'Explain the formation of Newton\'s Rings in reflected light. Derive expressions for the diameters of dark and bright rings. How can this experiment be used to determine the wavelength of sodium light and the refractive index of a liquid?',
    diagramAvailable: true,
    repeatFrequency: 'Asked in almost 90% of AU Physics exam papers',
    importanceLevel: 'Very High',
    markingScheme: [
      { step: 'Experimental arrangement description with plano-convex lens and glass plate', marks: 2 },
      { step: 'Condition for path difference in reflected light: Δ = 2μt cos(r) + λ/2', marks: 2 },
      { step: 'Derivation for dark ring diameter: Dn² = 4nλR => Dn ∝ √n', marks: 3 },
      { step: 'Determination of wavelength λ = (Dn+p² - Dn²) / (4pR) and liquid refractive index μ', marks: 3 }
    ],
    modelAnswer: `Model University Answer:
1. Principle:
   An air film of gradually increasing thickness is formed between the curved surface of a plano-convex lens of large radius of curvature R and an optically flat glass plate. Interference takes place between rays reflected from upper and lower surfaces of the air film.

2. Optical Path Difference:
   For reflected light at near-normal incidence (r ≈ 0, cos r ≈ 1, μ=1 for air film):
   Δ = 2t + λ/2 (due to Stokes phase change of π upon reflection from denser glass plate).

3. Condition for Dark Rings (Destructive Interference):
   2t + λ/2 = (2n + 1) λ/2  =>  2t = nλ  (n = 0, 1, 2, ...)

4. Radius and Diameter Derivation:
   From geometry of the lens: r² = 2Rt  =>  2t = r²/R
   Equating: r²/R = nλ  =>  r² = nλR
   Since diameter D = 2r, D² = 4r² = 4nλR
   Hence diameter of nth dark ring:
   Dn = 2√(nλR)  =>  Dn ∝ √n (Diameters of dark rings are proportional to square root of natural numbers).

5. Determination of Wavelength (λ):
   Measure diameters of (n+p)th and nth dark rings:
   D²_(n+p) - D²_n = 4(n + p)λR - 4nλR = 4pλR
   λ = [ D²_(n+p) - D²_n ] / [ 4·p·R ]

6. Refractive Index of Liquid (μ):
   When a liquid of refractive index μ is placed in the film:
   μ = [ D²_(n+p) - D²_n ]_air / [ D²_(n+p) - D²_n ]_liquid`,
    teluguTip: 'స్టోక్స్ ఫేజ్ ఛేంజ్ (λ/2) ఎందుకు కలుపుతున్నారో రాయకపోతే 2 మార్కులు కట్ అవుతాయి.'
  }
];
