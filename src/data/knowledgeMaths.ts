import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const MATHS_SYLLABUS_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. CLASS 10 MATHS: REAL NUMBERS
  // ==========================================
  {
    titleMatcher: 'real numbers',
    topics: [
      {
        topic: '1. Fundamental Theorem of Arithmetic',
        inBrief: 'Every composite number can be uniquely expressed as a product of prime powers, irrespective of order.',
        definition: 'The Fundamental Theorem of Arithmetic (Unique Factorization Theorem) states that every integer greater than 1 either is a prime itself or can be represented uniquely as the product of prime numbers, up to the order of factors: n = p₁^(a₁) · p₂^(a₂) ... p_k^(a_k).',
        detailedExplanation: 'This theorem is the foundational bedrock of number theory. It guarantees that prime factorizations are unique. Applications include finding the Highest Common Factor (HCF) by taking the product of the smallest powers of each common prime factor, and the Lowest Common Multiple (LCM) by taking the product of the greatest powers of each prime factor. A crucial invariant for any two positive integers a and b: HCF(a, b) × LCM(a, b) = a × b. This relation does not hold for three or more numbers.',
        quickTake: 'Unique prime factorization; HCF(a, b) × LCM(a, b) = a × b.',
        keyPoints: [
          'HCF: Product of the smallest power of each common prime factor involved.',
          'LCM: Product of the greatest power of each prime factor involved in the numbers.',
          'Two-number product identity: HCF(a, b) × LCM(a, b) = a × b.'
        ],
        formulaOrEquation: 'HCF(a, b) × LCM(a, b) = a × b | n = p₁^(a₁) · p₂^(a₂)...p_k^(a_k)'
      },
      {
        topic: '2. Proof of Irrationality of √2, √3, √5',
        inBrief: 'A rigorous mathematical proof by contradiction demonstrating that roots of non-square prime numbers cannot be written as fractions.',
        definition: 'An irrational number is a real number that cannot be expressed as a ratio p/q of two integers where q ≠ 0, possessing an infinite non-terminating and non-recurring decimal expansion.',
        detailedExplanation: 'Theorem: If p is a prime and p divides a², then p divides a (where a is a positive integer). Proof by Contradiction for √2: Assume √2 is rational, meaning √2 = a/b where a and b are coprime integers (HCF = 1) and b ≠ 0. Squaring both sides: 2 = a²/b² ⟹ 2b² = a². Therefore, 2 divides a², which implies 2 divides a. Let a = 2c for some integer c. Substituting: 2b² = (2c)² = 4c² ⟹ b² = 2c². This implies 2 divides b² and hence 2 divides b. Thus, 2 is a common factor of both a and b, directly contradicting our premise that a and b are coprime. Hence, √2 is strictly irrational.',
        quickTake: 'Proved by contradiction; assumes rational a/b with HCF=1; deduces prime p divides both a and b, contradicting coprimality.',
        keyPoints: [
          'Core Lemma: If prime p divides a², then p divides a.',
          'Contradiction mechanism: Proves numerator and denominator share a common factor > 1.',
          'Decimal form: Irrational numbers exhibit non-terminating, non-repeating decimal expansions.'
        ],
        formulaOrEquation: '√p = a / b (where HCF(a,b)=1) ⟹ Contradiction: p | a and p | b'
      }
    ],
    keywords: [
      {
        keyword: 'Fundamental Theorem of Arithmetic',
        definition: 'A mathematical theorem asserting that every composite integer greater than 1 has a unique prime factorization up to factor order.',
        sentenceExplanation: 'This theorem guarantees that every composite number has a unique prime DNA barcode that cannot be matched by any other number.',
        examContext: 'State complete theorem; use to calculate HCF and LCM via prime power exponents.'
      },
      {
        keyword: 'Coprime Integers',
        definition: 'A pair of integers having no common positive divisor other than 1, having an HCF of exactly 1.',
        sentenceExplanation: 'Two numbers are coprime when they share zero common factors except for the number one, like 8 and 15.',
        examContext: 'Fundamental premise in all irrationality proofs (HCF(a, b) = 1).'
      }
    ]
  },

  // ==========================================
  // 2. CLASS 10 MATHS: QUADRATIC EQUATIONS
  // ==========================================
  {
    titleMatcher: 'quadratic equations',
    topics: [
      {
        topic: '1. Standard Form & Factorization Method',
        inBrief: 'A quadratic equation is a second-degree polynomial equation ax² + bx + c = 0 solved by splitting the middle term.',
        definition: 'A quadratic equation in variable x is a second-order polynomial equation of the standard form ax² + bx + c = 0, where a, b, c are real numbers and the leading coefficient a ≠ 0.',
        detailedExplanation: 'Solving by splitting the middle term: We find two numbers p and q such that their sum p + q = b and their product p · q = a · c. The expression ax² + px + qx + c is then grouped and factorized into two linear factors (x - α)(x - β) = 0. According to the Zero Product Property, if the product of two real terms is zero, at least one of the factors must equal zero, yielding the roots x = α or x = β. A quadratic equation always has at most two real roots.',
        quickTake: 'Standard form: ax² + bx + c = 0 (a ≠ 0); split middle term such that p+q = b and p·q = ac.',
        keyPoints: [
          'Leading coefficient invariant: a must NEVER be equal to 0.',
          'Roots / Zeroes: The numerical values of x that satisfy ax² + bx + c = 0.',
          'Geometric meaning: The roots are the x-coordinates where the parabola y = ax² + bx + c intersects the x-axis.'
        ],
        formulaOrEquation: 'ax² + bx + c = 0 (a ≠ 0) | Factorization: (x - α)(x - β) = 0'
      },
      {
        topic: '2. Quadratic Formula & Nature of Roots (Discriminant)',
        inBrief: 'The quadratic formula x = (-b ± √D)/(2a) solves any quadratic equation; the discriminant D = b² - 4ac determines root nature.',
        definition: 'The Quadratic Formula (Sridharacharya\'s Rule) gives the roots of ax² + bx + c = 0 as x = (-b ± √D) / (2a), where the discriminant D = b² - 4ac characterizes the existence and multiplicity of real solutions.',
        detailedExplanation: 'The Discriminant D = b² - 4ac evaluates the radical term in the quadratic formula: 1) Case 1: D > 0 (Positive discriminant) ⟹ Two distinct, unequal real roots: x = (-b + √D)/(2a) and x = (-b - √D)/(2a). 2) Case 2: D = 0 (Zero discriminant) ⟹ Two equal real roots (coincident roots): x = -b / (2a). The parabola touches the x-axis at exactly one point. 3) Case 3: D < 0 (Negative discriminant) ⟹ No real roots (roots are complex conjugate numbers). The parabola never touches or crosses the x-axis.',
        quickTake: 'D = b² - 4ac; D > 0: two distinct real roots; D = 0: two equal real roots; D < 0: no real roots.',
        keyPoints: [
          'Discriminant formula: D = b² - 4ac.',
          'Equal roots condition: D = 0 is high-frequency in board exams to solve for unknown parameter k.',
          'Sum of roots α + β = -b/a; Product of roots α · β = c/a.'
        ],
        formulaOrEquation: 'x = (-b ± √(b² - 4ac)) / (2a) | D = b² - 4ac | α + β = -b/a, α·β = c/a'
      }
    ],
    keywords: [
      {
        keyword: 'Discriminant (D)',
        definition: 'The algebraic quantity D = b² - 4ac in a quadratic equation that determines whether the roots are real, distinct, equal, or imaginary.',
        sentenceExplanation: 'The discriminant acts like an algebraic diagnostic test that reveals the nature of an equation\'s roots without needing to solve it.',
        examContext: 'Calculate D = b² - 4ac; state root conditions (D > 0, D = 0, D < 0).'
      },
      {
        keyword: 'Quadratic Formula',
        definition: 'The closed-form algebraic solution formula x = (-b ± √(b² - 4ac)) / (2a) providing the exact roots of any quadratic equation.',
        sentenceExplanation: 'The quadratic formula is the universal mathematical master key that unlocks the solution to any second-degree curve equation.',
        examContext: 'Must state formula before substitution and evaluate discriminant under square root.'
      }
    ]
  },

  // ==========================================
  // 3. CLASS 10 MATHS: ARITHMETIC PROGRESSIONS
  // ==========================================
  {
    titleMatcher: 'arithmetic progression',
    topics: [
      {
        topic: '1. nth Term of an AP',
        inBrief: 'An Arithmetic Progression is a sequence where each term differs from the preceding one by a constant common difference d; a_n = a + (n-1)d.',
        definition: 'An Arithmetic Progression (AP) is a numerical sequence of numbers in which the difference between any two consecutive terms remains constant: a_(k+1) - a_k = d for all positive integers k.',
        detailedExplanation: 'General form of an AP: a, a + d, a + 2d, a + 3d, ... where \'a\' is the first term and \'d\' is the common difference (d can be positive, negative, or zero). The nth term (general term) a_n is given by: a_n = a + (n - 1)·d. If an AP has m terms, the last term l = a_m = a + (m - 1)·d. The nth term from the end of an AP is given by: a_n(end) = l - (n - 1)·d.',
        quickTake: 'a_n = a + (n-1)d; common difference d = a_(k+1) - a_k; nth term from end = l - (n-1)d.',
        keyPoints: [
          'Common difference d: Can be positive (increasing AP), negative (decreasing AP), or zero (constant sequence).',
          'nth term from beginning: a_n = a + (n - 1)d.',
          'nth term from end: a_n(end) = l - (n - 1)d where l is last term.'
        ],
        formulaOrEquation: 'a_n = a + (n - 1) · d | d = a_(n) - a_(n-1)'
      },
      {
        topic: '2. Sum of First n Terms of an AP',
        inBrief: 'The sum S_n of the first n terms of an AP is given by S_n = n/2 · [2a + (n-1)d] or S_n = n/2 · (a + l).',
        definition: 'The sum of an Arithmetic Progression is the total accumulated sum of its first n terms, derived by pairing terms equidistant from beginning and end: S_n = (n/2) · [2a + (n - 1)d].',
        detailedExplanation: 'Gauss\'s pairing derivation: Write S_n = a + (a+d) + ... + [a+(n-1)d]. Reverse the series: S_n = [a+(n-1)d] + [a+(n-2)d] + ... + a. Adding the two equations: 2·S_n = n · [2a + (n-1)d] ⟹ S_n = (n/2) · [2a + (n-1)d]. Alternatively, using first term a and last term l: S_n = (n/2) · (a + l). Crucial relationship between sum and nth term: a_n = S_n - S_(n-1).',
        quickTake: 'S_n = (n/2)[2a + (n-1)d] = (n/2)(a + l); nth term relationship: a_n = S_n - S_(n-1).',
        keyPoints: [
          'Sum of first n natural numbers: S_n = n(n + 1) / 2.',
          'Finding nth term from sum: a_n = S_n - S_(n-1) (high-frequency 3-mark board question).',
          'Choice of terms for symmetry: 3 terms: (a-d), a, (a+d); 4 terms: (a-3d), (a-d), (a+d), (a+3d).'
        ],
        formulaOrEquation: 'S_n = (n / 2) · [2a + (n - 1)d] = (n / 2) · (a + l) | a_n = S_n - S_(n-1)'
      }
    ],
    keywords: [
      {
        keyword: 'Common Difference (d)',
        definition: 'The constant numerical increment or decrement between any consecutive term and its predecessor in an arithmetic progression: d = a_(n) - a_(n-1).',
        sentenceExplanation: 'The common difference is the exact step height between each stair rung as you climb up an arithmetic progression ladder.',
        examContext: 'Must show d is identical across all consecutive terms to verify a sequence is an AP.'
      },
      {
        keyword: 'Arithmetic Mean (AM)',
        definition: 'The middle term b between two numbers a and c such that a, b, c form an AP: b = (a + c) / 2.',
        sentenceExplanation: 'The arithmetic mean is the balanced average halfway point between two numbers on a number line.',
        examContext: 'For 3 consecutive terms in AP: 2b = a + c.'
      }
    ]
  },

  // ==========================================
  // 4. CLASS 10 MATHS: INTRODUCTION TO TRIGONOMETRY
  // ==========================================
  {
    titleMatcher: 'trigonometry',
    topics: [
      {
        topic: '1. Trigonometric Ratios of an Acute Angle',
        inBrief: 'Trigonometric ratios relate the angles of a right-angled triangle to the ratios of its side lengths: sin, cos, tan, cosec, sec, cot.',
        definition: 'Trigonometric ratios are dimensionless geometric ratios between the lengths of two sides of a right-angled triangle relative to a specified acute reference angle θ.',
        detailedExplanation: 'In a right triangle with acute reference angle θ: Opposite side = Perpendicular (P), Adjacent side = Base (B), and Longest side opposite 90° = Hypotenuse (H). Ratios: 1) sin θ = P / H (Sine). 2) cos θ = B / H (Cosine). 3) tan θ = P / B = sin θ / cos θ (Tangent). Reciprocal Ratios: 4) cosec θ = H / P = 1 / sin θ. 5) sec θ = H / B = 1 / cos θ. 6) cot θ = B / P = 1 / tan θ. Mnemonic: Some People Have, Curly Brown Hair, Turned Permanent Black (sin=P/H, cos=B/H, tan=P/B). Values of sin θ and cos θ never exceed 1 because the hypotenuse is always the longest side in a right triangle.',
        quickTake: 'sin = P/H, cos = B/H, tan = P/B; cosec = 1/sin, sec = 1/cos, cot = 1/tan; sin and cos never exceed 1.',
        keyPoints: [
          'Hypotenuse is always opposite 90° and is the longest side.',
          'Reference angle determines sides: The side directly opposite angle θ is Perpendicular; adjacent leg is Base.',
          'Quotient Relations: tan θ = sin θ / cos θ and cot θ = cos θ / sin θ.'
        ],
        formulaOrEquation: 'sin θ = P/H | cos θ = B/H | tan θ = P/B | cosec θ = 1/sin θ | sec θ = 1/cos θ'
      },
      {
        topic: '2. Trigonometric Table (0°, 30°, 45°, 60°, 90°)',
        inBrief: 'Standard exact numerical values for trigonometric ratios evaluated at specific benchmark geometric angles.',
        definition: 'Standard trigonometric values are exact algebraic radical expressions computed geometrically from equilateral and isosceles right triangles for angles 0°, 30°, 45°, 60°, and 90°.',
        detailedExplanation: 'Values: 1) sin: sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1. 2) cos: cos 0° = 1, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, cos 90° = 0 (reversed sequence of sin). 3) tan: tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, tan 90° = Not Defined (undefined / ∞). As angle θ increases from 0° to 90°, sin θ increases monotonically from 0 to 1, while cos θ decreases monotonically from 1 to 0.',
        quickTake: 'Memorize sin values (0, 1/2, 1/√2, √3/2, 1); cos is sin reversed; tan 45° = 1, tan 30° = 1/√3, tan 60° = √3.',
        keyPoints: [
          'Trick to remember sin: √0/4, √1/4, √2/4, √3/4, √4/4 ⟹ 0, 1/2, 1/√2, √3/2, 1.',
          'Equal angles: At θ = 45°, sin 45° = cos 45° = 1/√2.',
          'Undefined values: tan 90° and sec 90° are undefined because cos 90° = 0 (division by zero).'
        ],
        formulaOrEquation: 'sin 45° = cos 45° = 1/√2 | tan 45° = 1 | tan 30° = 1/√3, tan 60° = √3'
      },
      {
        topic: '3. Fundamental Trigonometric Identities',
        inBrief: 'Algebraic equations involving trigonometric ratios that hold true for all valid angle values: sin²θ + cos²θ = 1.',
        definition: 'Trigonometric identities are geometric polynomial equalities derived from the Pythagorean theorem (P² + B² = H²) that remain identically satisfied for all acute angles θ.',
        detailedExplanation: 'Derivations from Pythagoras theorem P² + B² = H²: 1) Divide by H²: (P/H)² + (B/H)² = (H/H)² ⟹ sin²θ + cos²θ = 1. Sub-forms: sin²θ = 1 - cos²θ and cos²θ = 1 - sin²θ. 2) Divide by B²: (P/B)² + 1 = (H/B)² ⟹ 1 + tan²θ = sec²θ. Sub-form: sec²θ - tan²θ = 1 ⟹ (sec θ - tan θ)(sec θ + tan θ) = 1 (sec θ - tan θ and sec θ + tan θ are reciprocals!). 3) Divide by P²: 1 + (B/P)² = (H/P)² ⟹ 1 + cot²θ = cosec²θ. Sub-form: cosec²θ - cot²θ = 1.',
        quickTake: 'sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ; (sec θ - tan θ) = 1 / (sec θ + tan θ).',
        keyPoints: [
          'Identity 1: sin²θ + cos²θ = 1 (valid for 0° ≤ θ ≤ 90°).',
          'Identity 2: sec²θ - tan²θ = 1 (valid for 0° ≤ θ < 90°).',
          'Identity 3: cosec²θ - cot²θ = 1 (valid for 0° < θ ≤ 90°).'
        ],
        formulaOrEquation: 'sin²θ + cos²θ = 1 | sec²θ - tan²θ = 1 | cosec²θ - cot²θ = 1'
      }
    ],
    keywords: [
      {
        keyword: 'Trigonometric Identity',
        definition: 'An equation involving trigonometric ratios of an angle that is true for all values of the angles involved.',
        sentenceExplanation: 'A trigonometric identity is like an unbreakable geometric law that guarantees the sum of sine squared and cosine squared always equals exactly one.',
        examContext: 'State identity before applying in proofs; show algebraic steps converting to sin and cos.'
      },
      {
        keyword: 'Angle of Elevation vs Depression',
        definition: 'The angle formed by the line of sight with the horizontal when viewing an elevated object (elevation) or a lower object (depression).',
        sentenceExplanation: 'The angle of elevation is tilting your chin up to gaze at a lighthouse top, while the angle of depression is looking down at a boat on the sea.',
        examContext: 'Angle of depression of object from observer equals angle of elevation of observer from object (alternate interior angles).'
      }
    ]
  },

  // ==========================================
  // 5. CLASS 10 MATHS: POLYNOMIALS
  // ==========================================
  {
    titleMatcher: 'polynomials',
    topics: [
      {
        topic: '1. Zeroes of a Polynomial & Geometrical Meaning',
        inBrief: 'The zeroes of a polynomial p(x) are the precise x-coordinates where its graph intersects the horizontal X-axis.',
        definition: 'A real number k is defined as a zero of a polynomial p(x) if p(k) = 0, corresponding geometrically to the x-intercept points (k, 0) of the curve y = p(x).',
        detailedExplanation: 'A linear polynomial ax + b (a ≠ 0) has exactly one zero: x = -b/a, representing a straight line intersecting the X-axis once. A quadratic polynomial ax² + bx + c (a ≠ 0) forms a parabola (opening upwards if a > 0, downwards if a < 0). It has at most 2 zeroes: intersecting X-axis at two distinct points, touching at one point (coincident zeroes), or not intersecting at all (no real zeroes). A cubic polynomial has at most 3 real zeroes.',
        quickTake: 'Zeroes are x-intercepts of y = p(x); quadratic polynomial has at most 2 zeroes; cubic has at most 3 zeroes.',
        keyPoints: [
          'Linear zero: x = -b/a.',
          'Parabola orientation: a > 0 opens upward ∪; a < 0 opens downward ∩.',
          'Number of zeroes equals the number of times graph intersects or touches the X-axis.'
        ],
        formulaOrEquation: 'p(k) = 0 ⟹ k is a Zero | Graph intersects X-axis at (k, 0)'
      },
      {
        topic: '2. Relationship Between Zeroes and Coefficients',
        inBrief: 'For quadratic polynomial ax² + bx + c with zeroes α and β: Sum α + β = -b/a, and Product α·β = c/a.',
        definition: 'The algebraic relation stating that the symmetric sum and product of the roots of a polynomial equation can be determined directly from its leading and trailing coefficients without solving the equation.',
        detailedExplanation: 'For quadratic polynomial p(x) = ax² + bx + c (a ≠ 0) with roots α and β: Factor theorem gives p(x) = k(x - α)(x - β) = k[x² - (α + β)x + αβ]. Comparing coefficients with ax² + bx + c: Sum of zeroes = α + β = -(coefficient of x) / (coefficient of x²) = -b/a. Product of zeroes = α·β = (constant term) / (coefficient of x²) = c/a.\nTo form a quadratic polynomial when zeroes α and β are given: p(x) = k[x² - (Sum)x + Product] = k[x² - (α + β)x + αβ].',
        quickTake: 'α + β = -b/a; α·β = c/a; Quadratic polynomial formula = k[x² - (α+β)x + αβ].',
        keyPoints: [
          'Sum of zeroes: α + β = -b / a.',
          'Product of zeroes: α·β = c / a.',
          'Cubic Relations: α + β + γ = -b/a; αβ + βγ + γα = c/a; αβγ = -d/a.'
        ],
        formulaOrEquation: 'α + β = -b/a | α·β = c/a | Poly = k[x² - (α + β)x + αβ]'
      }
    ],
    keywords: [
      {
        keyword: 'Zero of a Polynomial',
        definition: 'The numerical value of the variable x that makes the polynomial expression evaluate to zero: p(x) = 0.',
        sentenceExplanation: 'A zero is like the balance point where an algebraic scale reaches perfect equilibrium at exactly zero.',
        examContext: 'Find from graph by counting intersection points on X-axis only.'
      },
      {
        keyword: 'Symmetric Functions of Roots',
        definition: 'Algebraic combinations of polynomial roots whose values remain unchanged when the roots are permuted, such as α² + β² = (α+β)² - 2αβ.',
        sentenceExplanation: 'Symmetric expressions let you calculate root relationships using only the sum and product without finding the roots themselves.',
        examContext: 'Identity: α² + β² = (α + β)² - 2αβ = (-b/a)² - 2(c/a).'
      }
    ]
  },

  // ==========================================
  // 6. CLASS 10 MATHS: TRIANGLES (SIMILARITY & BPT)
  // ==========================================
  {
    titleMatcher: 'triangles',
    topics: [
      {
        topic: '1. Basic Proportionality Theorem (Thales Theorem)',
        inBrief: 'If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides the two sides in the exact same ratio.',
        definition: 'Thales\'s Theorem (BPT) states that if a straight line is drawn parallel to any side of a triangle intersecting the remaining two sides in distinct points, then it divides those two sides in the identical proportionality ratio: AD / DB = AE / EC.',
        detailedExplanation: 'Given: Triangle ABC where line DE is parallel to side BC (DE || BC), intersecting AB at D and AC at E.\nTo Prove: AD / DB = AE / EC.\nConstruction: Join BE and CD. Draw perpendiculars EN ⊥ AB and DM ⊥ AC.\nProof: Area(ΔADE) = ½ · AD · EN. Area(ΔBDE) = ½ · DB · EN. Dividing: Area(ΔADE) / Area(ΔBDE) = (½ · AD · EN) / (½ · DB · EN) = AD / DB (Equation 1).\nSimilarly, Area(ΔADE) / Area(ΔCDE) = (½ · AE · DM) / (½ · EC · DM) = AE / EC (Equation 2).\nNote that ΔBDE and ΔCDE share the same base DE and lie between the same parallel lines DE and BC. Therefore: Area(ΔBDE) = Area(ΔCDE). Hence, LHS of Equations 1 and 2 are equal ⟹ AD / DB = AE / EC. Hence Proved.',
        quickTake: 'In ΔABC with DE || BC: AD / DB = AE / EC; corollary: AB / AD = AC / AE.',
        keyPoints: [
          'Core Condition: DE must be strictly parallel to BC.',
          'Shared base theorem: Triangles on the same base and between same parallel lines have equal areas.',
          'Converse of BPT: If a line divides two sides in the same ratio, it must be parallel to the third side.'
        ],
        formulaOrEquation: 'DE || BC ⟹ AD / DB = AE / EC | Corollary: AD / AB = AE / AC'
      },
      {
        topic: '2. Criteria for Similarity of Triangles (AAA, SSS, SAS)',
        inBrief: 'Two triangles are similar (ΔABC ~ ΔDEF) if their corresponding angles are equal and corresponding sides are proportional.',
        definition: 'Geometric similarity is an equivalence relation between two triangles possessing identical corresponding interior angles and mutually proportional corresponding side lengths.',
        detailedExplanation: 'Three fundamental criteria for similarity:\n1. AAA (Angle-Angle-Angle) / AA Similarity: If two angles of one triangle are respectively equal to two angles of another triangle, the third angle is automatically equal (angle sum property), and the triangles are similar.\n2. SSS (Side-Side-Side) Similarity: If corresponding sides of two triangles are proportional (AB/DE = BC/EF = AC/DF), their corresponding angles are equal, and the triangles are similar.\n3. SAS (Side-Angle-Side) Similarity: If one angle of a triangle equals one angle of another triangle and the sides including these angles are proportional (AB/DE = AC/DF and ∠A = ∠D), then the triangles are similar.',
        quickTake: 'AA is sufficient for similarity; similar triangles have equal angles and proportional sides.',
        keyPoints: [
          'Order of vertices: Naming must strictly follow matching vertices: ΔABC ~ ΔDEF implies ∠A=∠D, ∠B=∠E, ∠C=∠F.',
          'Scale factor k = AB/DE = BC/EF = AC/DF.',
          'Perimeters ratio: Perimeter(ΔABC) / Perimeter(ΔDEF) = Ratio of corresponding sides.'
        ],
        formulaOrEquation: 'ΔABC ~ ΔDEF ⟹ ∠A=∠D, ∠B=∠E, ∠C=∠F and AB/DE = BC/EF = AC/DF'
      }
    ],
    keywords: [
      {
        keyword: 'Basic Proportionality Theorem (BPT)',
        definition: 'A fundamental geometric theorem stating that a line drawn parallel to one side of a triangle divides the other two sides proportionally.',
        sentenceExplanation: 'BPT ensures that slicing across a triangle parallel to its base cuts both sloped sides into matching proportional ratios.',
        examContext: 'High-yield 5-mark board question: must write Given, To Prove, Construction, and complete Proof steps.'
      },
      {
        keyword: 'Similar Triangles (~)',
        definition: 'Triangles that have the exact same geometric shape but not necessarily the same size, with identical corresponding angles and proportional sides.',
        sentenceExplanation: 'Similar triangles are like a photo and its enlarged printed poster: all angles and proportions match perfectly even though size differs.',
        examContext: 'Must check SAS includes the included angle between the two proportional sides.'
      }
    ]
  }
];

