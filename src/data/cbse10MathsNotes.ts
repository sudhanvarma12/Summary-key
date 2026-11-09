import { Subject } from '../types';

export const CBSE_10_MATHS: Subject = {
  id: 'cbse10-maths',
  code: 'CBSE-041',
  name: 'Class 10 Mathematics (CBSE Revision Notes)',
  semesterOrGrade: 'Class 10 Board',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class10',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Core Mathematics',
  subjectCategory: 'maths',
  units: [
    {
      unitNumber: 1,
      title: 'Real Numbers',
      keyTopics: ['Fundamental Theorem of Arithmetic', 'HCF and LCM relation', 'Proving irrationality (√2, √3, √5)'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 810,
      videoDuration: '3m 00s',
      summaryTelugu: 'వాస్తవ సంఖ్యలు: ప్రాథమిక అంకగణిత సిద్ధాంతం, HCF × LCM = a × b సూత్రం మరియు అకరణీయ సంఖ్యల నిరూపణలు.',
      summaryEnglish: 'Quick revision of prime factorisation, product of two numbers formula, and proving numbers like √3 are irrational.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Fundamental Theorem of Arithmetic',
          quickTake: 'Every composite number can be uniquely expressed as a product of prime numbers.',
          keyPoints: [
            'HCF: Product of smallest powers of each common prime factor.',
            'LCM: Product of greatest powers of all prime factors involved.',
            'Product Rule for two positive integers: HCF(a, b) × LCM(a, b) = a × b.'
          ],
          formulaOrEquation: 'HCF(a, b) × LCM(a, b) = a × b'
        },
        {
          topic: '2. Proving Irrationality',
          quickTake: 'Proof by contradiction: Assume number is rational a/b in co-prime form, then deduce contradiction.',
          keyPoints: [
            'If prime p divides a², then p also divides a.',
            'Numbers like √2, √3, √5, 3 + 2√5 are proven irrational using this method.'
          ],
          formulaOrEquation: 'Assume √5 = a/b (co-prime) -> 5b² = a² -> 5 divides a'
        }
      ],
      mindmap: {
        center: 'Real Numbers',
        branches: [
          { title: '1. Primes & Composites', subtopics: ['Prime factor trees', 'Unique factorization'], color: 'blue' },
          { title: '2. HCF & LCM', subtopics: ['Lowest powers for HCF', 'Highest powers for LCM', 'HCF x LCM = a x b'], color: 'purple' },
          { title: '3. Irrationals', subtopics: ['Proof by contradiction', '√2, √3, √5 proofs'], color: 'emerald' },
          { title: '4. Exam Tricks', subtopics: ['Check if 6^n can end with 0 (No, needs 2 and 5 factors)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Given that HCF (306, 657) = 9, find LCM (306, 657).',
          marks: '2 Marks',
          answer: 'LCM(a, b) = (a × b) / HCF(a, b) = (306 × 657) / 9 = 34 × 657 = 22,338.',
          tip: 'Use LCM = (a × b) / HCF directly.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Polynomials',
      keyTopics: ['Geometrical meaning of zeroes', 'Relationship between zeroes & coefficients of quadratic polynomial', 'Forming quadratic polynomials'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.94,
      upvotes: 750,
      videoDuration: '2m 55s',
      summaryTelugu: 'బహుపదులు: శూన్యాల సంబంధం, α + β = -b/a, αβ = c/a మరియు వర్గ బహుపది రూపం.',
      summaryEnglish: 'Simple formulas for sum and product of zeroes, graph intercepts on x-axis, and forming quadratic polynomials k[x² - (Sum)x + Product].',
      examWeightage: '4 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Zeroes & Graphs of Polynomials',
          quickTake: 'The number of zeroes is equal to the number of points where the graph intersects the x-axis.',
          keyPoints: [
            'Linear polynomial ax + b has at most 1 zero (-b/a).',
            'Quadratic polynomial ax² + bx + c has at most 2 zeroes (parabola opening upwards if a > 0, downwards if a < 0).'
          ],
          formulaOrEquation: 'Zeroes = X-intercepts of graph y = p(x)'
        },
        {
          topic: '2. Zeroes and Coefficients Relations',
          quickTake: 'For quadratic polynomial ax² + bx + c with zeroes α and β:',
          keyPoints: [
            'Sum of zeroes: α + β = -b / a = -(Coefficient of x) / (Coefficient of x²).',
            'Product of zeroes: α · β = c / a = (Constant term) / (Coefficient of x²).',
            'Polynomial formula: p(x) = k [x² - (α + β)x + αβ].'
          ],
          formulaOrEquation: 'α + β = -b/a | αβ = c/a | p(x) = x² - (Sum)x + (Product)'
        }
      ],
      mindmap: {
        center: 'Polynomials',
        branches: [
          { title: '1. Degrees', subtopics: ['Linear (deg 1)', 'Quadratic (deg 2)', 'Cubic (deg 3)'], color: 'blue' },
          { title: '2. Graphs', subtopics: ['Parabola curve', 'Number of zeroes = x-cuts'], color: 'purple' },
          { title: '3. Zeroes Formulas', subtopics: ['Sum = -b/a', 'Product = c/a'], color: 'emerald' },
          { title: '4. Making Polynomials', subtopics: ['k[x² - Sx + P]', 'Splitting middle term'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find a quadratic polynomial whose sum and product of zeroes are -3 and 2 respectively.',
          marks: '2 Marks',
          answer: 'General form: p(x) = x² - (Sum)x + Product = x² - (-3)x + 2 = x² + 3x + 2.',
          tip: 'Direct substitution into x² - Sx + P.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Pair of Linear Equations in Two Variables',
      keyTopics: ['Graphical method & Consistency conditions', 'Substitution method', 'Elimination method', 'Word problems (Speed, Age, Fractions)'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.3 MB',
      rating: 4.95,
      upvotes: 820,
      videoDuration: '3m 20s',
      summaryTelugu: 'రెండు చరరాశులలో సరళ సమీకరణాలు: గ్రాఫికల్ పద్ధతి, a1/a2 పరిస్థితులు, ప్రత్యామ్నాయ మరియు తొలగింపు పద్ధతులు.',
      summaryEnglish: 'Table of consistency (intersecting lines, parallel lines, coincident lines) and algebraic solving techniques.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Consistency Table (Comparing Ratios)',
          quickTake: 'Compare a1/a2, b1/b2, and c1/c2 to determine number of solutions without graphing.',
          keyPoints: [
            'Intersecting Lines: a1/a2 ≠ b1/b2 -> Exactly 1 unique solution (Consistent).',
            'Coincident Lines: a1/a2 = b1/b2 = c1/c2 -> Infinitely many solutions (Consistent & Dependent).',
            'Parallel Lines: a1/a2 = b1/b2 ≠ c1/c2 -> No solution (Inconsistent).'
          ],
          formulaOrEquation: 'Unique: a1/a2 ≠ b1/b2 | Many: a1/a2 = b1/b2 = c1/c2 | None: a1/a2 = b1/b2 ≠ c1/c2'
        },
        {
          topic: '2. Solving Methods',
          quickTake: 'Elimination method is fastest: multiply equations to make coefficients of one variable equal, then add or subtract.',
          keyPoints: [
            'Substitution: Express one variable in terms of the other and substitute.',
            'Elimination: Equate coefficients and eliminate x or y.'
          ],
          formulaOrEquation: 'Elimination: Multiply to match coefficients, then subtract'
        }
      ],
      mindmap: {
        center: 'Linear Equations',
        branches: [
          { title: '1. Graph Types', subtopics: ['Intersecting (1 sol)', 'Coincident (Infinite)', 'Parallel (No sol)'], color: 'blue' },
          { title: '2. Ratio Tests', subtopics: ['a1/a2 ≠ b1/b2', 'a1/a2 = b1/b2 = c1/c2', 'a1/a2 = b1/b2 ≠ c1/c2'], color: 'purple' },
          { title: '3. Algebraic Tools', subtopics: ['Substitution', 'Elimination'], color: 'emerald' },
          { title: '4. Word Problems', subtopics: ['Upstream/Downstream speed', 'Fraction numerator/denom', 'Age problems'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Solve for x and y: x + y = 14 and x - y = 4.',
          marks: '2 Marks',
          answer: 'Adding both equations: 2x = 18 => x = 9. Substituting in first equation: 9 + y = 14 => y = 5. Solution is (9, 5).',
          tip: 'Add equations to eliminate y instantly.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Quadratic Equations',
      keyTopics: ['Standard form ax² + bx + c = 0', 'Factorisation (Splitting middle term)', 'Quadratic Formula (Sridharacharya)', 'Nature of roots using Discriminant D'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.97,
      upvotes: 880,
      videoDuration: '3m 15s',
      summaryTelugu: 'వర్గ సమీకరణాలు: డిస్క్రిమినెంట్ D = b² - 4ac, మూలాల స్వభావం మరియు వర్గ సూత్రం x = (-b ± √D) / 2a.',
      summaryEnglish: 'Finding roots using Sridharacharya quadratic formula, discriminant nature of roots conditions, and geometry word problems.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Quadratic Formula',
          quickTake: 'For ax² + bx + c = 0 (where a ≠ 0), roots are given by x = [-b ± √(b² - 4ac)] / 2a.',
          keyPoints: [
            'Discriminant D = b² - 4ac determines root nature.',
            'Directly gives roots without having to guess middle-term factors.'
          ],
          formulaOrEquation: 'x = (-b ± √D) / (2a) where D = b² - 4ac'
        },
        {
          topic: '2. Nature of Roots',
          quickTake: 'Check value of D = b² - 4ac:',
          keyPoints: [
            'If D > 0: Two distinct real roots.',
            'If D = 0: Two equal real roots (-b/2a, -b/2a).',
            'If D < 0: No real roots.'
          ],
          formulaOrEquation: 'D > 0: Real & Distinct | D = 0: Real & Equal | D < 0: No Real Roots'
        }
      ],
      mindmap: {
        center: 'Quadratic Equations',
        branches: [
          { title: '1. Standard Form', subtopics: ['ax² + bx + c = 0', 'a ≠ 0 constraint'], color: 'blue' },
          { title: '2. Factoring', subtopics: ['Splitting middle term', 'Zero product rule'], color: 'purple' },
          { title: '3. Quadratic Formula', subtopics: ['x = (-b ± √D)/2a', 'Discriminant D = b² - 4ac'], color: 'emerald' },
          { title: '4. Root Nature', subtopics: ['D > 0 (Distinct)', 'D = 0 (Equal)', 'D < 0 (None)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the discriminant of 2x² - 4x + 3 = 0 and state the nature of its roots.',
          marks: '2 Marks',
          answer: 'Here a = 2, b = -4, c = 3. D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, the equation has no real roots.',
          tip: 'State D = -8 and conclude no real roots.'
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'Arithmetic Progressions',
      keyTopics: ['nth term of an AP: an = a + (n-1)d', 'Sum of first n terms: Sn = n/2 [2a + (n-1)d]', 'Common difference d', 'Practical application word problems'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 840,
      videoDuration: '3m 10s',
      summaryTelugu: 'అంక శ్రేణులు: nవ పదం an = a + (n-1)d మరియు మొదటి n పదాల మొత్తం Sn = n/2 [2a + (n-1)d] సూత్రాలు.',
      summaryEnglish: 'Concise formulas for finding general term an, sum of first n terms Sn, and nth term from Sn using an = Sn - Sn-1.',
      examWeightage: '6 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. nth Term of an AP',
          quickTake: 'An AP has constant common difference d between consecutive terms: d = an - an-1.',
          keyPoints: [
            'General formula: an = a + (n - 1)d, where a is first term and n is number of terms.',
            'nth term from the end = l - (n - 1)d, where l is the last term.'
          ],
          formulaOrEquation: 'an = a + (n - 1)d | From end: l - (n - 1)d'
        },
        {
          topic: '2. Sum of First n Terms (Sn)',
          quickTake: 'Total sum of first n terms formula derived by Gauss.',
          keyPoints: [
            'Formula 1: Sn = n/2 [2a + (n - 1)d].',
            'Formula 2 (when first and last term are known): Sn = n/2 [a + l].',
            'Important relation: an = Sn - Sn-1.'
          ],
          formulaOrEquation: 'Sn = (n/2)[2a + (n-1)d] = (n/2)[a + l] | an = Sn - Sn-1'
        }
      ],
      mindmap: {
        center: 'Arithmetic Progressions',
        branches: [
          { title: '1. Basics', subtopics: ['First term a', 'Common difference d = a2 - a1', 'Finite vs Infinite AP'], color: 'blue' },
          { title: '2. nth Term', subtopics: ['an = a + (n-1)d', 'Term from the end = l - (n-1)d'], color: 'purple' },
          { title: '3. Sum Sn', subtopics: ['Sn = n/2[2a + (n-1)d]', 'Sn = n/2[a + l]', 'Sum of first n natural = n(n+1)/2'], color: 'emerald' },
          { title: '4. Exam Tricks', subtopics: ['an = Sn - Sn-1', 'Three terms in AP: (a-d, a, a+d)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the 10th term of the AP: 2, 7, 12, ...',
          marks: '2 Marks',
          answer: 'Here a = 2, d = 7 - 2 = 5, n = 10. an = a + (n - 1)d => a10 = 2 + (10 - 1)(5) = 2 + 45 = 47.',
          tip: 'Direct substitution into an formula.'
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'Triangles',
      keyTopics: ['Basic Proportionality Theorem (Thales Theorem)', 'Converse of BPT', 'Criteria for similarity of triangles (AAA, SSS, SAS)'],
      readingTime: '14 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.95,
      upvotes: 790,
      videoDuration: '3m 30s',
      summaryTelugu: 'త్రిభుజాలు: ప్రాథమిక అనుపాత సిద్ధాంతం (థేల్స్ సిద్ధాంతం), త్రిభుజాల సరూపత నియమాలు (AAA, SSS, SAS).',
      summaryEnglish: 'Step-by-step proof of Basic Proportionality Theorem (BPT) and similarity rules with model geometry proofs.',
      examWeightage: '8-10 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Basic Proportionality Theorem (BPT / Thales Theorem)',
          quickTake: 'If a line is drawn parallel to one side of a triangle intersecting other two sides, it divides them in the same ratio.',
          keyPoints: [
            'In ΔABC, if DE || BC, then AD / DB = AE / EC.',
            'Converse of BPT: If a line divides any two sides of a triangle in the same ratio, the line is parallel to the third side.'
          ],
          formulaOrEquation: 'DE || BC <=> AD / DB = AE / EC'
        },
        {
          topic: '2. Similarity Criteria of Triangles',
          quickTake: 'Two triangles are similar if corresponding angles are equal and corresponding sides are in the same ratio.',
          keyPoints: [
            'AAA (or AA) criterion: If two angles of one triangle are equal to two angles of another, triangles are similar.',
            'SSS criterion: Ratio of corresponding sides is equal.',
            'SAS criterion: One angle equal and sides including these angles are proportional.'
          ],
          formulaOrEquation: 'ΔABC ~ ΔDEF => ∠A=∠D, ∠B=∠E, ∠C=∠F and AB/DE = BC/EF = AC/DF'
        }
      ],
      mindmap: {
        center: 'Triangles',
        branches: [
          { title: '1. Similarity Concept', subtopics: ['Same shape, different size', 'Proportional sides', 'Equal angles'], color: 'blue' },
          { title: '2. BPT Theorem', subtopics: ['DE || BC => AD/DB = AE/EC', 'Area method proof'], color: 'purple' },
          { title: '3. Criteria', subtopics: ['AA / AAA', 'SSS', 'SAS'], color: 'emerald' },
          { title: '4. Applications', subtopics: ['Shadow length heights', 'Ladder problems'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'In ΔABC, DE || BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.',
          marks: '2 Marks',
          answer: 'By BPT: AD / DB = AE / EC => 1.5 / 3 = 1 / EC => 1/2 = 1 / EC => EC = 2 cm.',
          tip: 'Apply AD/DB = AE/EC.'
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'Coordinate Geometry',
      keyTopics: ['Distance Formula', 'Section Formula (Internal division)', 'Midpoint formula'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 830,
      videoDuration: '3m 05s',
      summaryTelugu: 'నిరూపక రేఖాగణితం: దూర సూత్రం d = √[(x2 - x1)² + (y2 - y1)²], విభజన సూత్రం మరియు మధ్యబిందు సూత్రం.',
      summaryEnglish: 'Clear formulas for distance between points, internal section division (m1x2 + m2x1)/(m1 + m2), and collinearity checks.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Distance Formula',
          quickTake: 'Distance d between two points P(x1, y1) and Q(x2, y2) in a plane.',
          keyPoints: [
            'Formula: d = √[(x2 - x1)² + (y2 - y1)²].',
            'Distance of point P(x, y) from origin (0, 0) = √(x² + y²).'
          ],
          formulaOrEquation: 'PQ = √[(x2 - x1)² + (y2 - y1)²] | From Origin: OP = √(x² + y²)'
        },
        {
          topic: '2. Section Formula & Midpoint',
          quickTake: 'Coordinates of point P dividing line segment AB internally in ratio m1 : m2.',
          keyPoints: [
            'Section formula: P(x, y) = [ (m1·x2 + m2·x1)/(m1 + m2), (m1·y2 + m2·y1)/(m1 + m2) ].',
            'Midpoint formula (when ratio is 1 : 1): M = [ (x1 + x2)/2, (y1 + y2)/2 ].'
          ],
          formulaOrEquation: 'Section: [(m1x2 + m2x1)/(m1+m2), (m1y2 + m2y1)/(m1+m2)] | Midpoint: [(x1+x2)/2, (y1+y2)/2]'
        }
      ],
      mindmap: {
        center: 'Coordinate Geometry',
        branches: [
          { title: '1. Coordinate Plane', subtopics: ['Axes X and Y', 'Origin (0,0)', 'Quadrants'], color: 'blue' },
          { title: '2. Distance Formula', subtopics: ['d = √[(Δx)² + (Δy)²]', 'Equidistant points'], color: 'purple' },
          { title: '3. Section Formula', subtopics: ['Ratio m1:m2', 'Ratio k:1 trick for finding ratio'], color: 'emerald' },
          { title: '4. Midpoint & Shapes', subtopics: ['Midpoint = (x1+x2)/2, (y1+y2)/2', 'Parallelogram diagonals bisect'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the distance between the points (2, 3) and (4, 1).',
          marks: '2 Marks',
          answer: 'd = √[(4 - 2)² + (1 - 3)²] = √[2² + (-2)²] = √[4 + 4] = √8 = 2√2 units.',
          tip: 'd = 2√2 units.'
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'Introduction to Trigonometry',
      keyTopics: ['Trigonometric Ratios (sin, cos, tan, cosec, sec, cot)', 'Values at specific angles (0°, 30°, 45°, 60°, 90°)', 'Trigonometric Identities (sin²θ + cos²θ = 1)'],
      readingTime: '15 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 7,
      fileSize: '1.4 MB',
      rating: 4.98,
      upvotes: 950,
      videoDuration: '3m 45s',
      summaryTelugu: 'త్రికోణమితి పరిచయం: sin, cos, tan నిష్పత్తులు, ప్రత్యేక కోణాల పట్టిక మరియు సర్వసమీకరణాలు (sin²θ + cos²θ = 1).',
      summaryEnglish: 'Table of specific values (sin 30° = 1/2, tan 45° = 1), reciprocal relations, and core trigonometric identity proofs.',
      examWeightage: '8 Marks',
      formulaeCount: 7,
      solvedQuestionsCount: 5,
      topicAtAGlance: [
        {
          topic: '1. Trigonometric Ratios (Right Triangle)',
          quickTake: 'Ratios of sides with respect to acute angle θ.',
          keyPoints: [
            'sin θ = Opposite / Hypotenuse | cos θ = Adjacent / Hypotenuse | tan θ = Opposite / Adjacent.',
            'Reciprocals: cosec θ = 1/sin θ | sec θ = 1/cos θ | cot θ = 1/tan θ = cos θ / sin θ.'
          ],
          formulaOrEquation: 'sin θ = P/H | cos θ = B/H | tan θ = P/B (PBP/HHB trick)'
        },
        {
          topic: '2. Values at Specific Angles',
          quickTake: 'High-frequency exam values:',
          keyPoints: [
            'sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1.',
            'cos values are reverse of sin (cos 0° = 1, cos 60° = 1/2).',
            'tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, tan 90° = Undefined.'
          ],
          formulaOrEquation: 'tan 45° = 1 | sin 30° = cos 60° = 1/2 | sin 45° = cos 45° = 1/√2'
        },
        {
          topic: '3. Core Trigonometric Identities',
          quickTake: 'The three fundamental identities derived from Pythagoras theorem:',
          keyPoints: [
            '1. sin² θ + cos² θ = 1',
            '2. 1 + tan² θ = sec² θ (or sec² θ - tan² θ = 1)',
            '3. 1 + cot² θ = cosec² θ (or cosec² θ - cot² θ = 1)'
          ],
          formulaOrEquation: 'sin²θ + cos²θ = 1 | sec²θ - tan²θ = 1 | cosec²θ - cot²θ = 1'
        }
      ],
      mindmap: {
        center: 'Trigonometry',
        branches: [
          { title: '1. Ratios', subtopics: ['sin = P/H', 'cos = B/H', 'tan = P/B', 'Reciprocals'], color: 'blue' },
          { title: '2. Table Values', subtopics: ['0°, 30°, 45°, 60°, 90°', 'Memorization finger trick'], color: 'purple' },
          { title: '3. 3 Identities', subtopics: ['sin² + cos² = 1', '1 + tan² = sec²', '1 + cot² = cosec²'], color: 'emerald' },
          { title: '4. Proving Tips', subtopics: ['Convert everything to sin and cos', 'Use algebraic formulas (a² - b²)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Evaluate: 2 tan² 45° + cos² 30° - sin² 60°.',
          marks: '2 Marks',
          answer: '= 2(1)² + (√3/2)² - (√3/2)² = 2(1) + 3/4 - 3/4 = 2.',
          tip: 'Substitute tan 45° = 1, cos 30° = √3/2, sin 60° = √3/2.'
        }
      ]
    },
    {
      unitNumber: 9,
      title: 'Some Applications of Trigonometry',
      keyTopics: ['Angle of Elevation', 'Angle of Depression', 'Heights and Distances word problems (Single & Double triangle)'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.96,
      upvotes: 860,
      videoDuration: '3m 15s',
      summaryTelugu: 'త్రికోణమితి అనువర్తనాలు: ఊర్ధ్వ కోణం (Elevation), నిమ్న కోణం (Depression), మరియు టవర్/భవనాల ఎత్తుల సమస్యలు.',
      summaryEnglish: 'Line of sight, angles of elevation and depression, and using tan θ = height / base in board word problems.',
      examWeightage: '4-5 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Elevation & Depression Angles',
          quickTake: 'Angle of elevation is measured looking up from horizontal; angle of depression is looking down.',
          keyPoints: [
            'Line of sight is the line drawn from the observer\'s eye to the object viewed.',
            'Angle of depression from top of building to ground = Angle of elevation from ground to top (Alternate interior angles).'
          ],
          formulaOrEquation: 'Angle of Elevation = Angle of Depression (Alternate Angles)'
        },
        {
          topic: '2. Solving Heights & Distances',
          quickTake: 'Identify right triangle and set up tan θ = Opposite / Adjacent.',
          keyPoints: [
            'For 45° angle: Opposite = Adjacent (Height = Base distance).',
            'For 30° angle: Height = Base / √3.',
            'For 60° angle: Height = Base × √3.'
          ],
          formulaOrEquation: 'tan θ = Height (Opposite) / Distance (Adjacent)'
        }
      ],
      mindmap: {
        center: 'Heights & Distances',
        branches: [
          { title: '1. Key Terms', subtopics: ['Line of sight', 'Horizontal baseline', 'Angle of elevation'], color: 'blue' },
          { title: '2. Depression', subtopics: ['Looking downwards', 'Alternate interior angle rule'], color: 'purple' },
          { title: '3. tan Ratios', subtopics: ['tan 30° = 1/√3', 'tan 45° = 1', 'tan 60° = √3'], color: 'emerald' },
          { title: '4. Two Triangles', subtopics: ['Two poles', 'Ship moving towards lighthouse'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'A tower stands vertically on ground. From a point 15 m away from the foot, the angle of elevation of the top is 60°. Find the height of the tower.',
          marks: '2 Marks',
          answer: 'Let height be h. In right triangle: tan 60° = h / 15 => √3 = h / 15 => h = 15√3 metres (~25.98 m).',
          tip: 'Use tan 60° = h / 15.'
        }
      ]
    },
    {
      unitNumber: 10,
      title: 'Circles',
      keyTopics: ['Tangent to a circle & Point of contact', 'Theorem 10.1 (Radius is perpendicular to tangent)', 'Theorem 10.2 (Lengths of tangents from external point are equal)'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.1 MB',
      rating: 4.97,
      upvotes: 890,
      videoDuration: '3m 05s',
      summaryTelugu: 'వృత్తాలు: స్పర్శరేఖ (టాన్జెంట్), OP ⊥ XY సిద్ధాంతం మరియు బాహ్య బిందువు నుండి స్పర్శరేఖల పొడవులు సమానం (PA = PB).',
      summaryEnglish: 'Core circle theorems: radius is perpendicular to tangent at point of contact, and tangents drawn from an external point are equal in length.',
      examWeightage: '6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Theorem 10.1 (Radius ⊥ Tangent)',
          quickTake: 'The tangent at any point of a circle is perpendicular to the radius through the point of contact.',
          keyPoints: [
            'If XY is tangent at point P and O is center, then OP ⊥ XY (∠OPX = 90°).',
            'Enables application of Pythagoras theorem in right triangle OPT.'
          ],
          formulaOrEquation: 'Radius OP ⊥ Tangent XY at Point of Contact'
        },
        {
          topic: '2. Theorem 10.2 (Tangents from External Point)',
          quickTake: 'The lengths of two tangents drawn from an external point to a circle are equal.',
          keyPoints: [
            'If PA and PB are tangents from external point P to circle with center O, then PA = PB.',
            'Also, ∠OPA = ∠OPB (OP bisects angle between tangents).'
          ],
          formulaOrEquation: 'PA = PB (Tangents from external point P are equal)'
        }
      ],
      mindmap: {
        center: 'Circles',
        branches: [
          { title: '1. Definitions', subtopics: ['Secant (cuts 2 points)', 'Tangent (touches 1 point)', 'Point of contact'], color: 'blue' },
          { title: '2. Theorem 1', subtopics: ['Radius ⊥ Tangent', '∠OPT = 90°', 'Pythagoras rule'], color: 'purple' },
          { title: '3. Theorem 2', subtopics: ['Tangents PA = PB', 'External point symmetry', 'RHS congruency proof'], color: 'emerald' },
          { title: '4. Board Proofs', subtopics: ['Circumscribing quadrilateral (AB + CD = AD + BC)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'If tangents PA and PB from a point P to a circle with centre O are inclined to each other at angle of 80°, find ∠POA.',
          marks: '2 Marks',
          answer: 'In quadrilateral OAPB: ∠OAP = 90°, ∠OBP = 90°, ∠APB = 80°. So ∠AOB = 360° - (90° + 90° + 80°) = 100°. Line OP bisects ∠AOB, so ∠POA = 100° / 2 = 50°.',
          tip: 'Use supplementary property: ∠AOB + ∠APB = 180°.'
        }
      ]
    },
    {
      unitNumber: 11,
      title: 'Areas Related to Circles',
      keyTopics: ['Area of sector of a circle (θ/360 × πr²)', 'Length of an arc of a sector (θ/360 × 2πr)', 'Area of segment of a circle'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 760,
      videoDuration: '2m 50s',
      summaryTelugu: 'వృత్తాలకు సంబంధించిన వైశాల్యాలు: సెక్టార్ వైశాల్యం (θ/360 × πr²), చాపం పొడవు మరియు సెగ్మెంట్ వైశాల్యం సూత్రాలు.',
      summaryEnglish: 'Quick formulas for area of minor/major sector, length of arc, and area of minor segment = Area of sector - Area of corresponding triangle.',
      examWeightage: '4 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Sector of a Circle',
          quickTake: 'A sector is the region enclosed by two radii and the arc between them.',
          keyPoints: [
            'Area of Sector = (θ / 360°) × πr².',
            'Length of Arc = (θ / 360°) × 2πr.'
          ],
          formulaOrEquation: 'Area of Sector = (θ / 360°) × πr² | Arc Length = (θ / 360°) × 2πr'
        },
        {
          topic: '2. Segment of a Circle',
          quickTake: 'A segment is the region enclosed by a chord and corresponding arc.',
          keyPoints: [
            'Area of Minor Segment = Area of Minor Sector - Area of ΔOAB.',
            'Area of Major Segment = Total Circle Area - Area of Minor Segment.'
          ],
          formulaOrEquation: 'Minor Segment Area = [(θ/360) × πr²] - Area(ΔOAB)'
        }
      ],
      mindmap: {
        center: 'Areas of Circles',
        branches: [
          { title: '1. Perimeter & Area', subtopics: ['Circumference = 2πr', 'Circle Area = πr²'], color: 'blue' },
          { title: '2. Sector Formulas', subtopics: ['Area = (θ/360)πr²', 'Arc length = (θ/360)2πr'], color: 'purple' },
          { title: '3. Segment Area', subtopics: ['Sector Area - Triangle Area', 'Triangle with 60°, 90°, 120°'], color: 'emerald' },
          { title: '4. Clock Hands', subtopics: ['Minute hand rotates 6° per minute (360°/60)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60° (Use π = 22/7).',
          marks: '2 Marks',
          answer: 'Area = (θ / 360) × πr² = (60 / 360) × (22/7) × 6 × 6 = (1/6) × (22/7) × 36 = 6 × 22/7 = 132 / 7 = 18.86 cm².',
          tip: 'Apply (θ/360) × πr².'
        }
      ]
    },
    {
      unitNumber: 12,
      title: 'Surface Areas and Volumes',
      keyTopics: ['Combination of solids (Cylinder, Cone, Hemisphere, Sphere)', 'Surface area of combined solid', 'Volume of combined solid'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 890,
      videoDuration: '3m 25s',
      summaryTelugu: 'ఉపరితల వైశాల్యాలు మరియు ఘనపరిమాణాలు: సిలిండర్, కోన్ మరియు హెమిస్పియర్ కలయికల సంపూర్ణ వైశాల్యం మరియు ఘనపరిమాణం.',
      summaryEnglish: 'Ready formulas for combined solids (toy shaped like cone on hemisphere, gulab jamun cylinder with hemispherical ends) and volume invariance.',
      examWeightage: '6 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Core Solid Formulas Cheatsheet',
          quickTake: 'Direct reference formulas for cylinder, cone, and sphere:',
          keyPoints: [
            'Cylinder: CSA = 2πrh | TSA = 2πr(r + h) | Volume = πr²h.',
            'Cone: Slant height l = √(r² + h²) | CSA = πrl | TSA = πr(l + r) | Volume = 1/3 πr²h.',
            'Sphere: Surface Area = 4πr² | Volume = 4/3 πr³.',
            'Hemisphere: CSA = 2πr² | TSA = 3πr² | Volume = 2/3 πr³.'
          ],
          formulaOrEquation: 'Cylinder V = πr²h | Cone V = 1/3 πr²h | Sphere V = 4/3 πr³'
        },
        {
          topic: '2. Combined Solids Strategy',
          quickTake: 'Surface areas add visible exposed surfaces only; volumes always add directly.',
          keyPoints: [
            'When joining cone on hemisphere: Total Surface Area = CSA of cone + CSA of hemisphere (joint base is hidden).',
            'Total Volume = Volume of cone + Volume of hemisphere.'
          ],
          formulaOrEquation: 'TSA of Toy = CSA(Cone) + CSA(Hemisphere) = πrl + 2πr²'
        }
      ],
      mindmap: {
        center: 'Surface Areas & Volumes',
        branches: [
          { title: '1. Cylinder', subtopics: ['CSA = 2πrh', 'TSA = 2πr(r+h)', 'V = πr²h'], color: 'blue' },
          { title: '2. Cone', subtopics: ['Slant l = √(r²+h²)', 'CSA = πrl', 'V = 1/3 πr²h'], color: 'purple' },
          { title: '3. Spheres', subtopics: ['Sphere V = 4/3 πr³', 'Hemisphere CSA = 2πr²', 'Hemisphere TSA = 3πr²'], color: 'emerald' },
          { title: '4. Combinations', subtopics: ['Only exposed faces in TSA', 'Volumes always sum directly'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'A solid is in the shape of a cone standing on a hemisphere with both their radii being 1 cm and height of cone equal to its radius. Find volume in terms of π.',
          marks: '2 Marks',
          answer: 'r = 1 cm, h = 1 cm. Total Volume = Vol(Cone) + Vol(Hemisphere) = 1/3 π r² h + 2/3 π r³ = 1/3 π (1)² (1) + 2/3 π (1)³ = 1/3 π + 2/3 π = π cm³.',
          tip: 'Total volume is exactly π cm³.'
        }
      ]
    },
    {
      unitNumber: 13,
      title: 'Statistics',
      keyTopics: ['Mean of grouped data (Direct, Assumed Mean methods)', 'Mode of grouped data formula', 'Median of grouped data formula', 'Empirical relation: 3 Median = Mode + 2 Mean'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 6,
      fileSize: '1.3 MB',
      rating: 4.96,
      upvotes: 850,
      videoDuration: '3m 20s',
      summaryTelugu: 'గణాంకాలు: గ్రూప్డ్ డేటా సగటు (Mean), బాహుళకం (Mode) మరియు మధ్యగతం (Median) సూత్రాలు, 3 Median = Mode + 2 Mean.',
      summaryEnglish: 'Clean formulas for mean, modal class identification, cumulative frequency median class, and the empirical relation between central tendencies.',
      examWeightage: '7 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Mean of Grouped Data',
          quickTake: 'Direct method: x̄ = Σ(fi·xi) / Σfi.',
          keyPoints: [
            'Class mark xi = (Upper limit + Lower limit) / 2.',
            'Assumed Mean Method: x̄ = a + [Σ(fi·di) / Σfi], where di = xi - a.'
          ],
          formulaOrEquation: 'Direct Mean: x̄ = Σ(fi·xi) / Σfi | Assumed Mean: a + Σ(fi·di)/Σfi'
        },
        {
          topic: '2. Mode of Grouped Data',
          quickTake: 'Modal class is the class interval with the highest frequency f1.',
          keyPoints: [
            'Formula: Mode = l + [ (f1 - f0) / (2f1 - f0 - f2) ] × h.',
            'l = lower limit of modal class, f1 = frequency of modal class, f0 = preceding frequency, f2 = succeeding frequency, h = class size.'
          ],
          formulaOrEquation: 'Mode = l + [ (f1 - f0) / (2f1 - f0 - f2) ] × h'
        },
        {
          topic: '3. Median & Empirical Relationship',
          quickTake: 'Median class is the class interval whose cumulative frequency cf is just greater than n/2.',
          keyPoints: [
            'Median = l + [ (n/2 - cf) / f ] × h.',
            'Empirical formula connecting all three: 3 Median = Mode + 2 Mean.'
          ],
          formulaOrEquation: 'Median = l + [(n/2 - cf)/f] × h | 3 Median = Mode + 2 Mean'
        }
      ],
      mindmap: {
        center: 'Statistics',
        branches: [
          { title: '1. Mean', subtopics: ['Direct method Σfxi/Σf', 'Assumed mean a + Σfdi/Σf'], color: 'blue' },
          { title: '2. Mode', subtopics: ['Highest frequency f1', 'Mode = l + [(f1-f0)/(2f1-f0-f2)]h'], color: 'purple' },
          { title: '3. Median', subtopics: ['Cumulative frequency cf', 'Median = l + [(n/2-cf)/f]h'], color: 'emerald' },
          { title: '4. Empirical Rule', subtopics: ['3 Median = Mode + 2 Mean'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'If the mean of a data is 24 and mode is 12, find its median using empirical relation.',
          marks: '2 Marks',
          answer: '3 Median = Mode + 2 Mean => 3 Median = 12 + 2(24) = 12 + 48 = 60 => Median = 60 / 3 = 20.',
          tip: 'Use 3 Median = Mode + 2 Mean.'
        }
      ]
    },
    {
      unitNumber: 14,
      title: 'Probability',
      keyTopics: ['Theoretical probability P(E) = n(E) / n(S)', 'Elementary events & Sum of probabilities = 1', 'Complementary event P(not E) = 1 - P(E)', 'Coins, Dice, Playing Cards'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Maths Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 780,
      videoDuration: '2m 45s',
      summaryTelugu: 'సంభావ్యత: P(E) = అనుకూల ఫలితాల సంఖ్య / మొత్తం ఫలితాలు, P(E) + P(not E) = 1, నాణేలు, పాచికలు మరియు పేక ముక్కలు.',
      summaryEnglish: 'Simple rules: probability is always between 0 and 1, sample spaces for 2 coins (4 outcomes), a die (6 outcomes), and 52 playing cards (26 red, 26 black, 12 face cards).',
      examWeightage: '4 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Basic Probability Definition & Range',
          quickTake: 'P(E) = (Number of outcomes favourable to E) / (Total number of possible outcomes).',
          keyPoints: [
            '0 <= P(E) <= 1. Probability of impossible event is 0; sure event is 1.',
            'Complementary Events: P(E) + P(not E) = 1 => P(not E) = 1 - P(E).'
          ],
          formulaOrEquation: 'P(E) = n(E) / n(S) | 0 <= P(E) <= 1 | P(E) + P(E\') = 1'
        },
        {
          topic: '2. Cards & Dice Sample Spaces',
          quickTake: '52 cards total: 4 suits of 13 cards each (Spades ♠, Clubs ♣, Hearts ♥, Diamonds ♦).',
          keyPoints: [
            '26 Red cards (Hearts, Diamonds) and 26 Black cards (Spades, Clubs).',
            '12 Face cards total: 4 Kings, 4 Queens, 4 Jacks.',
            'Single die has 6 outcomes {1,2,3,4,5,6}; Pair of dice has 36 outcomes.'
          ],
          formulaOrEquation: '52 Cards: 26 Red + 26 Black | 12 Face Cards (4 Kings, 4 Queens, 4 Jacks)'
        }
      ],
      mindmap: {
        center: 'Probability',
        branches: [
          { title: '1. Definition', subtopics: ['Favourable / Total', '0 <= P(E) <= 1', 'Impossible = 0, Sure = 1'], color: 'blue' },
          { title: '2. Cards', subtopics: ['52 cards total', '4 Suits of 13', '12 Face cards (K, Q, J)'], color: 'purple' },
          { title: '3. Dice & Coins', subtopics: ['1 die = 6 outcomes', '2 coins = 4 {HH, HT, TH, TT}'], color: 'emerald' },
          { title: '4. Complement', subtopics: ['P(not E) = 1 - P(E)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'A card is drawn from a well-shuffled pack of 52 cards. Find the probability of getting a king of red colour.',
          marks: '2 Marks',
          answer: 'Total cards n(S) = 52. Red kings are King of Hearts and King of Diamonds, so n(E) = 2. P(Red King) = 2 / 52 = 1 / 26.',
          tip: 'There are exactly 2 red kings in a pack of 52.'
        }
      ]
    }
  ]
};
