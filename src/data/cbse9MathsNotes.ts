import { Subject } from '../types';

export const CBSE_9_MATHS: Subject = {
  id: 'cbse9-maths',
  code: 'CBSE-041-09',
  name: 'Class 9 Mathematics (CBSE Revision Notes)',
  semesterOrGrade: 'Class 9 CBSE',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class9',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Foundation Mathematics',
  subjectCategory: 'maths',
  units: [
    {
      unitNumber: 1,
      title: 'Number Systems',
      keyTopics: ['Rational and Irrational numbers', 'Real numbers and their decimal expansions', 'Operations on real numbers', 'Rationalising the denominator', 'Laws of exponents for real numbers'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Secondary Mathematics Faculty',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.97,
      upvotes: 890,
      videoDuration: '3m 15s',
      summaryTelugu: 'సంఖ్యా వ్యవస్థలు: కరణీయ సంఖ్యలు, దశాంశ విస్తరణలు, హారమును అకరణీయం చేయడం మరియు ఘాతాంక న్యాయాలు.',
      summaryEnglish: 'Comprehensive revision on classifying rational/irrational decimals, conjugate rationalisation 1/(√a ± √b), and fractional exponent power laws.',
      examWeightage: '8-10 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Decimal Expansions & Irrational Numbers',
          quickTake: 'A real number is rational if its decimal is terminating or non-terminating repeating; irrational if non-terminating non-repeating.',
          keyPoints: [
            '√2, √3, √5, π, 0.1010010001... are irrational numbers.',
            'Sum, difference, product, or quotient of a non-zero rational and irrational number is always irrational.',
            'Between any two real numbers, there exist infinitely many rational and irrational numbers.'
          ],
          formulaOrEquation: 'Rational = p/q (q ≠ 0) | Irrational ≠ p/q'
        },
        {
          topic: '2. Rationalising Denominators',
          quickTake: 'Multiply numerator and denominator by the conjugate radical to remove square roots from denominator.',
          keyPoints: [
            'Conjugate of (√a + √b) is (√a - √b).',
            'Identity used: (√a + √b)(√a - √b) = (√a)² - (√b)² = a - b.'
          ],
          formulaOrEquation: '1 / (√a + √b) = (√a - √b) / (a - b)'
        },
        {
          topic: '3. Laws of Exponents for Real Numbers',
          quickTake: 'Exponential rules apply to positive real bases with rational powers.',
          keyPoints: [
            'aᵖ · aʳ = aᵖ⁺ʳ',
            '(aᵖ)ʳ = aᵖʳ',
            'aᵖ / aʳ = aᵖ⁻ʳ',
            'aᵖ · bᵖ = (ab)ᵖ',
            'a⁰ = 1; a⁻ᵖ = 1 / aᵖ; a^(m/n) = ⁿ√(aᵐ)'
          ],
          formulaOrEquation: 'a^(p/q) = ᑫ√(aᵖ) = (ᑫ√a)ᵖ'
        }
      ],
      mindmap: {
        center: 'Number Systems',
        branches: [
          {
            title: '1. Classifications',
            subtopics: ['Natural ⊂ Whole ⊂ Integers ⊂ Rationals', 'Irrationals (non-terminating non-repeating)', 'Real line representation'],
            examTip: 'Remember π is irrational, while 22/7 is a rational approximation.',
            color: 'blue'
          },
          {
            title: '2. Denominator Rationalisation',
            subtopics: ['Multiply by conjugate', 'Difference of squares (a² - b²)', 'Simplifying nested radicals'],
            examTip: 'Multiply numerator and denominator simultaneously by (√a - √b).',
            color: 'purple'
          },
          {
            title: '3. Power Laws',
            subtopics: ['aᵐ · aⁿ = aᵐ⁺ⁿ', '(aᵐ)ⁿ = aᵐⁿ', 'Negative & fractional exponents'],
            examTip: 'Simplify inside roots before applying fractional exponents.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Rationalise the denominator of 1 / (7 + 3√2).',
          marks: '2 Marks',
          answer: 'Multiply numerator and denominator by (7 - 3√2): [1(7 - 3√2)] / [(7 + 3√2)(7 - 3√2)] = (7 - 3√2) / (7² - (3√2)²) = (7 - 3√2) / (49 - 18) = (7 - 3√2) / 31.',
          tip: '(3√2)² = 9 × 2 = 18. 49 - 18 = 31.'
        },
        {
          question: 'Find three rational numbers between 3/5 and 4/5.',
          marks: '2 Marks',
          answer: 'Multiply numerator and denominator of both by (3 + 1) = 4 (or 10): 3/5 = 30/50 and 4/5 = 40/50. Three rational numbers between them are 31/50, 32/50, and 33/50.',
          tip: 'Multiplying by 10 gives quick, error-free spacing.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Polynomials',
      keyTopics: ['Polynomials in one variable and degree', 'Zeroes of a polynomial', 'Remainder Theorem and Factor Theorem', 'Factorisation using splitting middle term', 'Algebraic identities'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Secondary Mathematics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.98,
      upvotes: 940,
      videoDuration: '3m 30s',
      summaryTelugu: 'బహుపదులు: శూన్య విలువలు (Zeroes), కారణాంక సిద్ధాంతం (Factor Theorem), మధ్య పదాన్ని విభజించడం మరియు బీజగణిత సర్వసమీకరణాలు.',
      summaryEnglish: 'Step-by-step polynomial division, Factor Theorem proof, quadratic trinomial factorisation, and 8 must-memorize algebraic identities including cubics.',
      examWeightage: '10-12 Marks',
      formulaeCount: 8,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Degree & Zeroes of Polynomials',
          quickTake: 'The highest exponent of variable is the degree; a zero is a value of x for which p(x) = 0.',
          keyPoints: [
            'Linear: Degree 1, at most 1 real zero.',
            'Quadratic: Degree 2, at most 2 real zeroes.',
            'Cubic: Degree 3, at most 3 real zeroes.',
            'Non-zero constant polynomial (e.g. 5) has degree 0. Zero polynomial (0) degree is not defined.'
          ],
          formulaOrEquation: 'p(k) = 0 => k is a zero of polynomial p(x)'
        },
        {
          topic: '2. Factor Theorem & Splitting the Middle Term',
          quickTake: 'If p(a) = 0, then (x - a) is a factor of p(x).',
          keyPoints: [
            'For ax² + bx + c: Find two numbers p and q such that p + q = b and pq = ac.',
            'For cubics: Guess first zero using factor of constant term via trial and error, then perform long division or synthetic division.'
          ],
          formulaOrEquation: 'p(x) = (x - a) · q(x) when p(a) = 0'
        },
        {
          topic: '3. High-Frequency Algebraic Identities',
          quickTake: 'Standard expansions essential for board and foundation exams.',
          keyPoints: [
            '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx',
            '(x + y)³ = x³ + y³ + 3xy(x + y)',
            '(x - y)³ = x³ - y³ - 3xy(x - y)',
            'x³ + y³ = (x + y)(x² - xy + y²)',
            'x³ - y³ = (x - y)(x² + xy + y²)',
            'x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)',
            'Conditional: If x + y + z = 0, then x³ + y³ + z³ = 3xyz.'
          ],
          formulaOrEquation: 'If x + y + z = 0 => x³ + y³ + z³ = 3xyz'
        }
      ],
      mindmap: {
        center: 'Class 9 Polynomials',
        branches: [
          {
            title: '1. Foundations',
            subtopics: ['Degree of polynomial', 'Linear, Quadratic, Cubic', 'Zeroes: p(k) = 0'],
            examTip: 'A polynomial has non-negative integer exponents only (no √x or 1/x).',
            color: 'blue'
          },
          {
            title: '2. Factor Theorem',
            subtopics: ['Remainder Theorem concept', 'Factor Theorem (p(a)=0)', 'Splitting middle term'],
            examTip: 'To factorise ax²+bx+c, find two integers summing to b whose product is ac.',
            color: 'purple'
          },
          {
            title: '3. Cubic Identities',
            subtopics: ['(x±y)³ expansions', 'x³±y³ sum/diff of cubes', 'If x+y+z=0 => x³+y³+z³=3xyz'],
            examTip: 'Look for x+y+z=0 condition to directly compute cube sums without actual multiplication.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Factorise 6x² + 17x + 5 by splitting the middle term.',
          marks: '3 Marks',
          answer: 'Here a = 6, b = 17, c = 5. ac = 6 × 5 = 30. We need two numbers with sum = 17 and product = 30. The numbers are 15 and 2 (15 + 2 = 17, 15 × 2 = 30). Rewrite: 6x² + 15x + 2x + 5 = 3x(2x + 5) + 1(2x + 5) = (2x + 5)(3x + 1).',
          tip: 'Always factor out the common binomial (2x + 5).'
        },
        {
          question: 'Without actually calculating the cubes, find the value of (28)³ + (-15)³ + (-13)³.',
          marks: '2 Marks',
          answer: 'Let x = 28, y = -15, z = -13. Then x + y + z = 28 - 15 - 13 = 0. Since x + y + z = 0, x³ + y³ + z³ = 3xyz = 3(28)(-15)(-13) = 84 × 195 = 16380.',
          tip: 'State the conditional identity: If x + y + z = 0, then x³ + y³ + z³ = 3xyz.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Coordinate Geometry',
      keyTopics: ['Cartesian plane and axes (x-axis, y-axis, origin)', 'Abscissa and Ordinate', 'Four Quadrants and signs', 'Plotting coordinates (x, y)'],
      readingTime: '9 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Geometry Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 810,
      videoDuration: '2m 45s',
      summaryTelugu: 'నిరూపక రేఖాగణితం: కార్టీసియన్ సమతలం, మూలబిందువు (0,0), భుజము (Abscissa), కోటి (Ordinate) మరియు నాలుగు పాదాలు (Quadrants).',
      summaryEnglish: 'Complete foundation on x and y axes, signs in 4 quadrants, points lying on axes, and plotting ordered pairs accurately.',
      examWeightage: '4-6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Cartesian Plane & Coordinate Notation',
          quickTake: 'Two perpendicular number lines intersecting at origin (0, 0) divide plane into four quadrants.',
          keyPoints: [
            'Horizontal line: x-axis; Vertical line: y-axis.',
            'Abscissa: x-coordinate (perpendicular distance from y-axis).',
            'Ordinate: y-coordinate (perpendicular distance from x-axis).',
            'Coordinates written as ordered pair: (x, y). Note: (x, y) ≠ (y, x) unless x = y.'
          ],
          formulaOrEquation: 'Origin = (0, 0) | Point = (Abscissa, Ordinate)'
        },
        {
          topic: '2. Four Quadrants & Axis Points',
          quickTake: 'Signs of coordinates determine quadrant location.',
          keyPoints: [
            'Quadrant I: (+, +)',
            'Quadrant II: (-, +)',
            'Quadrant III: (-, -)',
            'Quadrant IV: (+, -)',
            'Any point on x-axis has ordinate y = 0 -> (x, 0).',
            'Any point on y-axis has abscissa x = 0 -> (0, y).'
          ],
          formulaOrEquation: 'x-axis: (x, 0) | y-axis: (0, y)'
        }
      ],
      mindmap: {
        center: 'Coordinate Geometry',
        branches: [
          {
            title: '1. Axes & Origin',
            subtopics: ['Origin (0,0)', 'x-axis (y=0)', 'y-axis (x=0)'],
            examTip: 'Distance of point (x, y) from x-axis is |y|; distance from y-axis is |x|.',
            color: 'blue'
          },
          {
            title: '2. Quadrant Signs',
            subtopics: ['Q1 (+, +)', 'Q2 (-, +)', 'Q3 (-, -)', 'Q4 (+, -)'],
            examTip: 'Points lying directly on axes do not belong to any quadrant.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'In which quadrant or on which axis do each of the points lie: (-2, 4), (3, -1), (-1, 0), and (0, 5)?',
          marks: '2 Marks',
          answer: '(-2, 4) lies in Quadrant II. (3, -1) lies in Quadrant IV. (-1, 0) lies on negative x-axis (since y = 0). (0, 5) lies on positive y-axis (since x = 0).',
          tip: 'When coordinate is 0, specify the axis, not quadrant.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Linear Equations in Two Variables',
      keyTopics: ['Standard form ax + by + c = 0', 'Infinitely many solutions of linear equation', 'Finding solutions (ordered pairs)', 'Graph of linear equation and lines parallel to axes'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Algebra Faculty',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 820,
      videoDuration: '3m 00s',
      summaryTelugu: 'రెండు చరరాశులలో సరళ సమీకరణాలు: ax + by + c = 0 ప్రామాణిక రూపం, అనంతమైన సాధనలు మరియు రేఖాచిత్రం (సరళ రేఖ).',
      summaryEnglish: 'Expressing in standard form, finding solutions by substituting values, straight-line graphs, and special lines x = a and y = b.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Standard Form & Solutions',
          quickTake: 'An equation of form ax + by + c = 0 (where a, b ≠ 0) has infinitely many solutions.',
          keyPoints: [
            'Every solution (x, y) corresponds to a unique point on the straight line representing the equation.',
            'To find solutions: Substitute an arbitrary value for x and solve for corresponding y.'
          ],
          formulaOrEquation: 'Standard Form: ax + by + c = 0 (a² + b² ≠ 0)'
        },
        {
          topic: '2. Lines Parallel to Coordinate Axes',
          quickTake: 'Linear equations in one variable can be represented on Cartesian plane as straight lines parallel to axes.',
          keyPoints: [
            'Equation x = a represents a straight line parallel to the y-axis passing through (a, 0).',
            'Equation y = b represents a straight line parallel to the x-axis passing through (0, b).',
            'Equation y = mx represents a line passing through origin (0, 0).'
          ],
          formulaOrEquation: 'Line || y-axis: x = a | Line || x-axis: y = b | Passes origin: y = mx'
        }
      ],
      mindmap: {
        center: 'Linear Equations',
        branches: [
          {
            title: '1. Equation Form',
            subtopics: ['ax + by + c = 0', 'Infinitely many solutions', 'Finding table of solutions'],
            examTip: 'A linear equation in 2 variables always represents a straight line on graph.',
            color: 'blue'
          },
          {
            title: '2. Special Lines',
            subtopics: ['x = a (parallel to y-axis)', 'y = b (parallel to x-axis)', 'y = mx (through origin)'],
            examTip: 'Equation of x-axis is y = 0; equation of y-axis is x = 0.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the value of k if x = 2, y = 1 is a solution of the equation 2x + 3y = k.',
          marks: '2 Marks',
          answer: 'Substitute x = 2 and y = 1 in the equation: 2(2) + 3(1) = k => 4 + 3 = k => k = 7.',
          tip: 'Substitute coordinates directly into equation.'
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'Lines and Angles',
      keyTopics: ['Basic geometry definitions & axioms', 'Intersecting lines and Vertically Opposite Angles', 'Parallel lines and Transversal', 'Angle sum property of a triangle'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Geometry Specialist',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.97,
      upvotes: 870,
      videoDuration: '3m 15s',
      summaryTelugu: 'రేఖలు మరియు కోణాలు: శీర్షాభిముఖ కోణాలు సమానం, ఏకాంతర కోణాలు, అనురూప కోణాలు మరియు త్రిభుజంలోని కోణాల మొత్తం 180°.',
      summaryEnglish: 'Linear pair axiom, proof of vertically opposite angles equality, parallel lines cut by transversal theorem, and exterior angle theorem.',
      examWeightage: '6-8 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Linear Pair & Vertically Opposite Angles',
          quickTake: 'Angles on a straight line add to 180°; opposite intersecting angles are strictly equal.',
          keyPoints: [
            'Linear Pair Axiom: If a ray stands on a line, the sum of two adjacent angles is 180°.',
            'Theorem: If two lines intersect each other, vertically opposite angles are equal.'
          ],
          formulaOrEquation: 'Linear Pair: ∠1 + ∠2 = 180° | Vertically Opposite: ∠AOC = ∠BOD'
        },
        {
          topic: '2. Parallel Lines & Transversal',
          quickTake: 'A line intersecting two parallel lines creates equal corresponding, equal alternate interior, and supplementary co-interior angles.',
          keyPoints: [
            'Corresponding angles are equal (e.g. ∠1 = ∠5).',
            'Alternate interior angles are equal (e.g. ∠3 = ∠5).',
            'Consecutive interior (co-interior) angles are supplementary: ∠4 + ∠5 = 180°.'
          ],
          formulaOrEquation: 'Co-interior: ∠3 + ∠6 = 180° | Alternate Interior: ∠3 = ∠5'
        },
        {
          topic: '3. Triangle Angle Sum & Exterior Angle Property',
          quickTake: 'Sum of three angles of a triangle is 180°; exterior angle equals sum of two interior opposite angles.',
          keyPoints: [
            'In ΔABC: ∠A + ∠B + ∠C = 180°.',
            'Exterior Angle: If side BC is produced to D, ∠ACD = ∠A + ∠B.'
          ],
          formulaOrEquation: '∠A + ∠B + ∠C = 180° | Exterior ∠ = Sum of opposite interior ∠s'
        }
      ],
      mindmap: {
        center: 'Lines & Angles',
        branches: [
          {
            title: '1. Intersecting Lines',
            subtopics: ['Linear pair (sum 180°)', 'Vertically opposite angles equal', 'Angle bisectors'],
            examTip: 'Show linear pair steps when calculating missing angles on a line.',
            color: 'blue'
          },
          {
            title: '2. Parallel Transversals',
            subtopics: ['Corresponding angles', 'Alternate interior angles', 'Co-interior angles (sum 180°)'],
            examTip: 'Always state parallel lines condition before applying alternate interior angles.',
            color: 'purple'
          },
          {
            title: '3. Triangle Properties',
            subtopics: ['Angle sum property (180°)', 'Exterior angle theorem', 'Angle relations'],
            examTip: 'Draw auxiliary parallel line through vertex to prove angle sum property.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'In a triangle ABC, if ∠A = 50° and ∠B = 60°, find the exterior angle formed by producing side BC.',
          marks: '2 Marks',
          answer: 'By exterior angle theorem, an exterior angle of a triangle is equal to the sum of its two interior opposite angles. Exterior angle = ∠A + ∠B = 50° + 60° = 110°.',
          tip: 'Exterior angle = 50° + 60° = 110°.'
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'Triangles',
      keyTopics: ['Congruence of triangles', 'Criteria for congruence (SAS, ASA, AAS, SSS, RHS)', 'Properties of isosceles triangles', 'Inequalities in a triangle'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Secondary Mathematics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.98,
      upvotes: 930,
      videoDuration: '3m 30s',
      summaryTelugu: 'త్రిభుజాలు: సర్వసమానత్వ నియమాలు (SAS, ASA, AAS, SSS, RHS), సమద్విబాహు త్రిభుజ ధర్మాలు మరియు CPCTC అనువర్తనాలు.',
      summaryEnglish: 'Rigorous congruence proofs, Corresponding Parts of Congruent Triangles (CPCTC), isosceles triangle theorem, and altitude constructions.',
      examWeightage: '8-10 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Five Criteria for Triangle Congruence',
          quickTake: 'Two triangles are congruent if they coincide completely in shape and size.',
          keyPoints: [
            'SAS: Two sides and the included angle are equal.',
            'ASA: Two angles and the included side are equal.',
            'AAS: Two angles and any non-included side are equal.',
            'SSS: All three corresponding sides are equal.',
            'RHS: In right triangles, Hypotenuse and one side are equal.',
            'CPCTC: Corresponding Parts of Congruent Triangles are Congruent.'
          ],
          formulaOrEquation: 'ΔABC ≅ ΔPQR => All corresponding sides and angles equal'
        },
        {
          topic: '2. Isosceles Triangle Theorems',
          quickTake: 'Equal sides subtend equal opposite angles and vice versa.',
          keyPoints: [
            'Theorem 1: Angles opposite to equal sides of an isosceles triangle are equal.',
            'Theorem 2 (Converse): The sides opposite to equal angles of a triangle are equal.'
          ],
          formulaOrEquation: 'In ΔABC, AB = AC <=> ∠C = ∠B'
        }
      ],
      mindmap: {
        center: 'Triangles',
        branches: [
          {
            title: '1. Congruence Tests',
            subtopics: ['SAS & ASA', 'AAS & SSS', 'RHS (Right angle-Hypotenuse-Side)'],
            examTip: 'AAA is not a congruence criterion (only shows similarity).',
            color: 'blue'
          },
          {
            title: '2. CPCTC',
            subtopics: ['Corresponding parts equal', 'Proving side equality', 'Proving angle bisectors'],
            examTip: 'Write corresponding vertex order strictly (e.g. ΔABC ≅ ΔDEF).',
            color: 'purple'
          },
          {
            title: '3. Isosceles Properties',
            subtopics: ['Equal sides -> Equal angles', 'Converse theorem', 'Altitude bisects base in isosceles'],
            examTip: 'Draw median or altitude to split isosceles triangle into two congruent triangles.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'In an isosceles triangle ABC with AB = AC, D and E are points on BC such that BE = CD. Show that AD = AE.',
          marks: '3 Marks',
          answer: 'In ΔABC, AB = AC => ∠B = ∠C (angles opposite to equal sides are equal). Now in ΔABD and ΔACE: AB = AC (given), ∠B = ∠C (proved above), BD = BE - DE and CE = CD - DE. Since BE = CD, subtracting common DE gives BD = CE. By SAS congruence, ΔABD ≅ ΔACE. Therefore, AD = AE (by CPCTC).',
          tip: 'State BD = CE by subtracting common segment DE.'
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'Quadrilaterals',
      keyTopics: ['Angle sum property of quadrilateral (360°)', 'Types and properties of Parallelograms, Rhombus, Rectangle, Square', 'Conditions for a quadrilateral to be a parallelogram', 'The Mid-Point Theorem and its converse'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Secondary Mathematics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 910,
      videoDuration: '3m 25s',
      summaryTelugu: 'చతుర్భుజాలు: చతుర్భుజంలో కోణాల మొత్తం 360°, సమాంతర చతుర్భుజ ధర్మాలు, మరియు మధ్యబిందు సిద్ధాంతం (Mid-Point Theorem).',
      summaryEnglish: 'Comprehensive properties of quadrilaterals, diagonal bisector theorems, Mid-Point Theorem proof and its converse for triangles.',
      examWeightage: '8-10 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Properties of a Parallelogram',
          quickTake: 'A quadrilateral with both pairs of opposite sides parallel.',
          keyPoints: [
            'Opposite sides are equal.',
            'Opposite angles are equal.',
            'Consecutive angles are supplementary (sum = 180°).',
            'Diagonals bisect each other (not necessarily equal, not perpendicular unless rhombus/square).',
            'A diagonal divides parallelogram into two congruent triangles.'
          ],
          formulaOrEquation: 'In ||gm: AB = CD, AD = BC, and Diagonals bisect each other'
        },
        {
          topic: '2. Rectangle, Rhombus and Square',
          quickTake: 'Specialized parallelograms with specific angle and side constraints.',
          keyPoints: [
            'Rectangle: Parallelogram with one right angle (90°). Diagonals are equal and bisect each other.',
            'Rhombus: Parallelogram with all sides equal. Diagonals bisect each other at right angles (90°).',
            'Square: All sides equal, all angles 90°. Diagonals are equal and bisect at 90°.'
          ],
          formulaOrEquation: 'Rhombus: Diagonals ⊥ bisectors | Rectangle: Diagonals equal'
        },
        {
          topic: '3. The Mid-Point Theorem',
          quickTake: 'Line segment joining mid-points of two sides of a triangle is parallel to the third side and half of it.',
          keyPoints: [
            'Mid-Point Theorem: In ΔABC, if D is mid-point of AB and E is mid-point of AC, then DE || BC and DE = ½ BC.',
            'Converse: A line drawn through mid-point of one side of a triangle parallel to another side bisects the third side.'
          ],
          formulaOrEquation: 'DE || BC and DE = ½ BC'
        }
      ],
      mindmap: {
        center: 'Quadrilaterals',
        branches: [
          {
            title: '1. Parallelogram',
            subtopics: ['Opposite sides & angles equal', 'Diagonals bisect', 'Diagonal splits into 2 congruent triangles'],
            examTip: 'A quad is ||gm if one pair of opposite sides is both equal and parallel.',
            color: 'blue'
          },
          {
            title: '2. Special Types',
            subtopics: ['Rectangle (diagonals equal, 90°)', 'Rhombus (diagonals ⊥ bisect)', 'Square (both equal & ⊥ bisect)'],
            examTip: 'Diagonals of rhombus bisect each other at 90°: Area = ½ × d1 × d2.',
            color: 'purple'
          },
          {
            title: '3. Mid-Point Theorem',
            subtopics: ['DE || BC and DE = ½ BC', 'Converse theorem', 'Quadrilateral formed by joining midpoints is ||gm'],
            examTip: 'Joining midpoints of sides of ANY quadrilateral always forms a parallelogram.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Show that the line segment joining the mid-points of opposite sides of a quadrilateral bisect each other.',
          marks: '3 Marks',
          answer: 'Let ABCD be a quadrilateral. Join diagonals AC and BD. Let P, Q, R, S be mid-points of AB, BC, CD, DA respectively. In ΔABC, P and Q are midpoints => PQ || AC and PQ = ½ AC (by Mid-Point Theorem). In ΔADC, S and R are midpoints => SR || AC and SR = ½ AC. Thus, PQ || SR and PQ = SR. Hence PQRS is a parallelogram. Since diagonals of a parallelogram bisect each other, PR and QS bisect each other.',
          tip: 'Use Mid-Point Theorem on ΔABC and ΔADC to prove PQRS is a parallelogram.'
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'Circles',
      keyTopics: ['Chords and their properties', 'Perpendicular from center to chord', 'Equal chords and their distance from center', 'Angle subtended by an arc at center and on circumference', 'Cyclic Quadrilaterals'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Secondary Mathematics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.98,
      upvotes: 940,
      videoDuration: '3m 30s',
      summaryTelugu: 'వృత్తాలు: జ్యా (Chord) ధర్మాలు, కేంద్రం వద్ద కోణం పరిధి వద్ద కోణానికి రెట్టింపు, మరియు చక్రీయ చతుర్భుజంలో ఎదురెదురు కోణాల మొత్తం 180°.',
      summaryEnglish: 'Theorems on chords equidistant from center, angle at center is double the angle on circle, angles in same segment are equal, and cyclic quadrilateral opposite angles sum to 180°.',
      examWeightage: '8-10 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Chords and Distances from Center',
          quickTake: 'The perpendicular from the center of a circle to a chord bisects the chord.',
          keyPoints: [
            'Perpendicular OM from center O to chord AB bisects it: AM = MB.',
            'Equal chords of a circle are equidistant from the center (and vice versa).',
            'Only one unique circle passes through three non-collinear points.'
          ],
          formulaOrEquation: 'OM ⊥ AB => AM = MB | r² = OM² + AM²'
        },
        {
          topic: '2. Angle Subtended by Arcs & In Same Segment',
          quickTake: 'Angle at center is twice the angle subtended at any point on the remaining part of circle.',
          keyPoints: [
            'Theorem: Angle at center = 2 × Angle at circumference: ∠AOB = 2 ∠APB.',
            'Angles in the same segment of a circle are equal.',
            'Angle in a semicircle is a right angle (90°).'
          ],
          formulaOrEquation: '∠AOB = 2 ∠APB | Angle in semicircle = 90°'
        },
        {
          topic: '3. Cyclic Quadrilaterals',
          quickTake: 'A quadrilateral whose all four vertices lie on a circle; opposite angles are supplementary.',
          keyPoints: [
            'Theorem: The sum of either pair of opposite angles of a cyclic quadrilateral is 180°: ∠A + ∠C = 180° and ∠B + ∠D = 180°.',
            'Converse: If sum of opposite angles is 180°, the quadrilateral is cyclic.',
            'Exterior angle of a cyclic quadrilateral equals interior opposite angle.'
          ],
          formulaOrEquation: 'In cyclic quad: ∠A + ∠C = 180° and ∠B + ∠D = 180°'
        }
      ],
      mindmap: {
        center: 'Circles',
        branches: [
          {
            title: '1. Chords & Center',
            subtopics: ['Perpendicular bisects chord', 'Equal chords equidistant from center', 'Pythagoras: r² = d² + (chord/2)²'],
            examTip: 'Draw radius to chord endpoint to form right triangle with perpendicular distance.',
            color: 'blue'
          },
          {
            title: '2. Subtended Angles',
            subtopics: ['Angle at center = 2 × circumference', 'Angles in same segment equal', 'Angle in semicircle = 90°'],
            examTip: 'Always quote: "Angle subtended by an arc at the center is double the angle subtended by it at any point on remaining part".',
            color: 'purple'
          },
          {
            title: '3. Cyclic Quad',
            subtopics: ['Opposite angles add to 180°', 'Exterior angle = Interior opposite', 'Cyclic parallelogram is a rectangle'],
            examTip: 'A cyclic parallelogram is always a rectangle (since opposite angles equal and add to 180° -> 90°).',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'In a circle, an arc subtends an angle of 140° at the center. Find the angle subtended by it at a point on the remaining part of the circle.',
          marks: '2 Marks',
          answer: 'By circle theorem, the angle subtended by an arc at the center is double the angle subtended by it at any point on the remaining part of the circle. Angle on circumference = (1/2) × Angle at center = (1/2) × 140° = 70°.',
          tip: 'Angle on circumference = 140° / 2 = 70°.'
        }
      ]
    },
    {
      unitNumber: 9,
      title: 'Heron\'s Formula',
      keyTopics: ['Area of triangle using Heron\'s formula', 'Semi-perimeter s = (a+b+c)/2', 'Area of scalene and isosceles triangles', 'Applications in word problems'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Mensuration Faculty',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.97,
      upvotes: 860,
      videoDuration: '2m 50s',
      summaryTelugu: 'హెరాన్స్ సూత్రం: త్రిభుజ వైశాల్యం A = √[s(s-a)(s-b)(s-c)], అర్ధ చుట్టుకొలత s = (a+b+c)/2 మరియు అనువర్తనాలు.',
      summaryEnglish: 'Step-by-step application of Heron\'s formula when 3 sides or ratio of sides with perimeter are given, with prime factorisation square root shortcuts.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Heron\'s Formula & Semi-Perimeter',
          quickTake: 'Calculates exact area of any triangle when lengths of three sides a, b, c are known without altitude.',
          keyPoints: [
            'Semi-perimeter s = (a + b + c) / 2.',
            'Area = √[s(s - a)(s - b)(s - c)].',
            'Equilateral triangle with side a: Area = (√3 / 4) a².'
          ],
          formulaOrEquation: 'Area = √[s(s - a)(s - b)(s - c)] | s = (a + b + c) / 2'
        },
        {
          topic: '2. Calculation Technique for Square Roots',
          quickTake: 'Express s, (s-a), (s-b), (s-c) as prime factors rather than multiplying large numbers.',
          keyPoints: [
            'Pair identical prime factors under root to bring them outside without tedious large-number long division.',
            'Ensure units are consistent (convert all dimensions to cm or m before calculation).'
          ],
          formulaOrEquation: 'Equilateral Triangle: Area = (√3 / 4) a²'
        }
      ],
      mindmap: {
        center: 'Heron\'s Formula',
        branches: [
          {
            title: '1. Semi-Perimeter',
            subtopics: ['s = (a+b+c)/2', 'Check s > a, b, c', 'Perimeter = 2s'],
            examTip: 'Calculate s first and check that (s - a), (s - b), (s - c) are all strictly positive.',
            color: 'blue'
          },
          {
            title: '2. Radical Simplification',
            subtopics: ['Prime factorise under root', 'Pair factors out', 'Avoid multiplying big 4-digit numbers'],
            examTip: 'Break terms into prime factors inside the radical to extract roots cleanly.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the area of a triangle whose sides are 13 cm, 14 cm, and 15 cm.',
          marks: '3 Marks',
          answer: 'Sides are a = 13 cm, b = 14 cm, c = 15 cm. s = (13 + 14 + 15)/2 = 42/2 = 21 cm. (s - a) = 21 - 13 = 8 cm. (s - b) = 21 - 14 = 7 cm. (s - c) = 21 - 15 = 6 cm. Area = √[21 × 8 × 7 × 6] = √[(3 × 7) × (2³ ) × 7 × (2 × 3)] = √[3² × 7² × 2⁴] = 3 × 7 × 2² = 21 × 4 = 84 cm².',
          tip: 's = 21 cm, Area = 84 cm².'
        }
      ]
    },
    {
      unitNumber: 10,
      title: 'Surface Areas and Volumes',
      keyTopics: ['Surface area and Volume of Right Circular Cone', 'Surface area and Volume of Sphere', 'Surface area and Volume of Hemisphere', 'Word problems on combinations and costs'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Mensuration Specialist',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 930,
      videoDuration: '3m 30s',
      summaryTelugu: 'ఉపరితల వైశాల్యాలు & ఘనపరిమాణాలు: శంకువు (Cone), గోళం (Sphere), అర్ధగోళం (Hemisphere) వక్రతల, సంపూర్ణతల వైశాల్యాలు మరియు ఘనపరిమాణాలు.',
      summaryEnglish: 'Complete rationalized syllabus formula sheet for right circular cones, spheres, and hemispheres with slant height l = √(r² + h²) derivations.',
      examWeightage: '8-10 Marks',
      formulaeCount: 8,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Right Circular Cone',
          quickTake: 'A solid generated by revolving a right-angled triangle around one of its sides.',
          keyPoints: [
            'Slant height: l = √(r² + h²).',
            'Curved Surface Area (CSA): CSA = πrl.',
            'Total Surface Area (TSA): TSA = πrl + πr² = πr(l + r).',
            'Volume: V = (1/3) πr²h (One-third of cylinder of same base and height).'
          ],
          formulaOrEquation: 'Cone: l = √(r² + h²) | CSA = πrl | Vol = (1/3)πr²h'
        },
        {
          topic: '2. Sphere & Hemisphere',
          quickTake: 'Completely symmetrical 3D round bodies governed solely by radius r.',
          keyPoints: [
            'Sphere Surface Area: A = 4πr² (Curved and Total are identical).',
            'Sphere Volume: V = (4/3) πr³.',
            'Hemisphere CSA: CSA = 2πr².',
            'Hemisphere Total Surface Area (TSA): TSA = 2πr² + πr² (circular base) = 3πr².',
            'Hemisphere Volume: V = (2/3) πr³.'
          ],
          formulaOrEquation: 'Sphere: TSA = 4πr², V = (4/3)πr³ | Hemi: TSA = 3πr², V = (2/3)πr³'
        }
      ],
      mindmap: {
        center: 'Cone & Sphere',
        branches: [
          {
            title: '1. Cone Formulas',
            subtopics: ['Slant height l = √(r²+h²)', 'CSA = πrl', 'TSA = πr(l+r)', 'Vol = ⅓πr²h'],
            examTip: 'Check whether question gives height (h) or slant height (l).',
            color: 'blue'
          },
          {
            title: '2. Sphere & Hemi',
            subtopics: ['Sphere Area = 4πr²', 'Sphere Vol = 4/3 πr³', 'Hemi CSA = 2πr²', 'Hemi TSA = 3πr² (includes flat base)'],
            examTip: 'For solid hemisphere, TSA is 3πr² (curved 2πr² + flat base πr²).',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the curved surface area of a right circular cone whose slant height is 10 cm and base radius is 7 cm. (Take π = 22/7)',
          marks: '2 Marks',
          answer: 'Given radius r = 7 cm, slant height l = 10 cm. CSA of cone = πrl = (22/7) × 7 × 10 = 22 × 10 = 220 cm².',
          tip: 'CSA = πrl = 220 cm².'
        },
        {
          question: 'Find the total surface area of a hemisphere of radius 10 cm. (Use π = 3.14)',
          marks: '2 Marks',
          answer: 'TSA of hemisphere = 3πr² = 3 × 3.14 × (10)² = 3 × 3.14 × 100 = 942 cm².',
          tip: 'TSA of solid hemisphere = 3πr², not 2πr².'
        }
      ]
    },
    {
      unitNumber: 11,
      title: 'Statistics',
      keyTopics: ['Graphical representation of data', 'Bar graphs', 'Histograms (uniform and varying widths)', 'Frequency Polygons'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Statistics Faculty',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 840,
      videoDuration: '3m 05s',
      summaryTelugu: 'సాంఖ్యక శాస్త్రం: దత్తాంశ ప్రాతినిధ్యం, కమ్మీ చిత్రాలు (Bar graphs), హిస్టోగ్రామ్‌లు మరియు పౌనఃపున్య బహుభుజులు (Frequency Polygons).',
      summaryEnglish: 'Constructing continuous class intervals, histograms with uniform and varying class widths, adjusted frequencies, and frequency polygons using class marks.',
      examWeightage: '6-8 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Continuous Frequency Distribution & Histograms',
          quickTake: 'Two-dimensional graphical representation of continuous grouped data with rectangles adjacent to each other.',
          keyPoints: [
            'Class Mark: Class mark = (Upper class limit + Lower class limit) / 2.',
            'Continuous intervals: If intervals are 1-10, 11-20, subtract 0.5 from lower limit and add 0.5 to upper limit (0.5 - 10.5, 10.5 - 20.5).',
            'Rectangles have bases equal to class intervals and areas proportional to frequencies.'
          ],
          formulaOrEquation: 'Class Mark = (Upper Limit + Lower Limit) / 2'
        },
        {
          topic: '2. Histograms with Varying Widths',
          quickTake: 'When class widths vary, rectangle heights must be adjusted so area remains proportional to frequency.',
          keyPoints: [
            'Adjusted length of rectangle = (Minimum class size / Current class size) × Frequency.',
            'This maintains truthful graphical depiction without distorting density.'
          ],
          formulaOrEquation: 'Adjusted Height = (Min class size / Current class size) × Frequency'
        },
        {
          topic: '3. Frequency Polygon',
          quickTake: 'Line graph obtained by joining the mid-points (class marks) of tops of histogram rectangles.',
          keyPoints: [
            'Can be drawn with or without drawing histogram.',
            'Closed at both ends by connecting to class marks of preceding and succeeding imaginary class intervals with frequency 0.'
          ],
          formulaOrEquation: 'Plot points: (Class Mark, Frequency)'
        }
      ],
      mindmap: {
        center: 'Statistics',
        branches: [
          {
            title: '1. Data Formats',
            subtopics: ['Continuous intervals', 'Inclusive to exclusive conversion (±0.5)', 'Class mark formula'],
            examTip: 'Always convert non-continuous data to continuous form before drawing histogram.',
            color: 'blue'
          },
          {
            title: '2. Histograms',
            subtopics: ['Equal width (height = frequency)', 'Varying width (adjusted height)', 'Area represents frequency'],
            examTip: 'Adjusted height = (Minimum class size / Class size) × Frequency.',
            color: 'purple'
          },
          {
            title: '3. Frequency Polygon',
            subtopics: ['Join midpoints of bars', 'Can draw directly via class marks', 'Close at x-axis at both ends'],
            examTip: 'Remember to anchor both ends to the horizontal axis at frequency 0.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Find the class mark of the class interval 150 - 160.',
          marks: '1 Mark',
          answer: 'Class mark = (Lower limit + Upper limit) / 2 = (150 + 160) / 2 = 310 / 2 = 155.',
          tip: 'Class mark = 155.'
        }
      ]
    }
  ]
};
