import { Subject, CollegeYear, InstitutionId, GradeOrBranchId } from '../types';
import { BRANCH_SPECIFIC_SUBJECTS } from './branchEngineeringData';
import { EXTRA_BRANCH_SUBJECTS } from './branchEngineeringDataExtra';

// ==========================================
// COLLEGE MULTI-YEAR CURRICULUM DATABASE
// 1st Year, 2nd Year, 3rd Year, 4th Year
// For GVPCOE, GITAM, ANITS, Raghu, AUCOE
// ==========================================

export const BASE_COLLEGE_YEARS_SUBJECTS: Subject[] = [
  // ----------------------------------------------------
  // 1ST YEAR (Semesters 1 & 2)
  // ----------------------------------------------------
  {
    id: 'engg-math-1',
    code: '23BS1101',
    name: 'Engineering Mathematics - I (Calculus & Linear Algebra)',
    semesterOrGrade: 'Semester 1',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R23 / Autonomous',
    category: 'Basic Science Core',
    collegeYear: '1st-year',
    semester: 1,
    subjectCategory: 'maths',
    units: [
      {
        unitNumber: 1,
        title: 'Matrices, Rank & Systems of Linear Equations',
        keyTopics: [
          'Rank of a matrix using Echelon form and Normal (Canonical) form [PAQ form]',
          'Consistency and solution of non-homogeneous linear systems AX = B (Gauss Elimination & Gauss-Jordan)',
          'Eigenvalues and Eigenvectors: Properties, computation, and diagonalizability',
          'Cayley-Hamilton Theorem: Verification, inverse calculation, and positive higher powers A^n'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. R. Ramanjaneyulu (Prof. of Mathematics)',
        verifiedRole: 'AUCOE Mathematics Board of Studies',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.96,
        upvotes: 950,
        videoDuration: '5m 10s',
        summaryTelugu: 'మ్యాట్రిసెస్ మరియు ఐగెన్ వాల్యూస్: రాంక్ ఆఫ్ ఎ మ్యాట్రిక్స్, కాస్ ఎలిమినేషన్ మెథడ్, కేలీ-హామిల్టన్ సిద్ధాంతం మరియు ఇన్వర్స్ కనుగొనడం.',
        summaryEnglish: 'Step-by-step matrix row reductions, linear independence proofs, and Cayley-Hamilton inverse evaluation with typical 14-mark university exam questions.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Rank of a Matrix (Echelon & Normal Form)',
            quickTake: 'Rank is the number of non-zero rows in row-echelon form; invariant under elementary row operations.',
            keyPoints: [
              'Row Echelon Form: All zero rows are at the bottom; leading coefficient of non-zero row is strictly to the right of the row above.',
              'Normal / Canonical Form: Any matrix can be transformed into [Ir 0; 0 0] using both row and column transformations.',
              'Consistency test: System AX = B is consistent iff Rank(A) = Rank([A|B]). If Rank = n (unique), if Rank < n (infinite solutions).'
            ],
            formulaOrEquation: 'AX = B Consistent ⟺ ρ(A) = ρ([A|B]); Unique if ρ = n, Infinite if ρ < n'
          },
          {
            topic: 'Eigenvalues & Cayley-Hamilton Theorem',
            quickTake: 'Characteristic equation |A - λI| = 0 gives eigenvalues; every square matrix satisfies its own characteristic equation.',
            keyPoints: [
              'Sum of eigenvalues = Trace of matrix (sum of diagonal entries).',
              'Product of eigenvalues = Determinant |A| of matrix.',
              'Cayley-Hamilton: If characteristic eq is λ² - 5λ + 6 = 0, then A² - 5A + 6I = 0. Hence A⁻¹ = (5I - A)/6.'
            ],
            formulaOrEquation: '|A - λI| = 0 | Σ λi = Trace(A) | Π λi = det(A) | A⁻¹ via Cayley-Hamilton'
          }
        ],
        mindmap: {
          center: 'Matrices & Linear Algebra',
          branches: [
            {
              title: '1. Matrix Rank & Systems',
              subtopics: ['Row Echelon form', 'Normal PAQ form', 'Augmented matrix [A|B]', 'Rouché–Capelli theorem on consistency'],
              examTip: 'Always write elementary operations clearly: R2 -> R2 - 2R1.',
              color: 'blue'
            },
            {
              title: '2. Eigenvalues & Vectors',
              subtopics: ['Characteristic equation |A - λI| = 0', 'Homogeneous system (A - λI)X = 0', 'Linearly independent eigenvectors', 'Orthogonal vectors property for symmetric A'],
              examTip: 'For symmetric matrices, eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.',
              color: 'purple'
            },
            {
              title: '3. Cayley-Hamilton Theorem',
              subtopics: ['Statement and proof for 2x2 & 3x3', 'Finding matrix inverse A⁻¹', 'Evaluating high powers A⁸, A¹⁰', 'Diagonalization: D = P⁻¹AP'],
              examTip: 'To find A⁻¹, multiply the matrix equation by A⁻¹ and isolate I.',
              color: 'emerald'
            },
            {
              title: '4. Quadratic Forms',
              subtopics: ['Matrix of quadratic form XᵀAX', 'Canonical transformation using orthogonal P', 'Index and Signature', 'Definiteness: Positive, Negative, Indefinite'],
              examTip: 'If all eigenvalues are > 0, the quadratic form is Positive Definite.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Differential Calculus & Mean Value Theorems',
        keyTopics: [
          'Rolle\'s Theorem, Lagrange\'s Mean Value Theorem (LMVT), Cauchy\'s Mean Value Theorem',
          'Taylor\'s and Maclaurin\'s series expansion of single variable functions',
          'Partial differentiation, Euler\'s theorem for homogeneous functions',
          'Maxima and Minima of functions of two variables (Lagrange multipliers)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'S. Kameswara Rao',
        verifiedRole: 'GVPCOE Mathematics Department',
        pdfPages: 20,
        fileSize: '2.8 MB',
        rating: 4.94,
        upvotes: 810,
        videoDuration: '4m 50s',
        summaryTelugu: 'డిఫరెన్షియల్ కాలిక్యులస్: రోల్స్ సిద్ధాంతం, లెగ్రాంజ్ మీన్ వాల్యూ థియరం, టేలర్ సిరీస్ మరియు రెండు వేరియబుల్స్ మ్యాక్సిమా-మినిమా.',
        summaryEnglish: 'Geometrical interpretation of LMVT, Euler\'s theorem degree proofs, and Hessian matrix determinant (rt - s²) for bivariate extrema.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 12,
        topicAtAGlance: [
          {
            topic: 'Mean Value Theorems: Rolle\'s & Lagrange\'s',
            quickTake: 'LMVT guarantees at least one point c where instantaneous slope equals average slope over [a,b].',
            keyPoints: [
              'Rolle\'s Theorem: If f(x) is continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then exists c ∈ (a,b) such that f\'(c) = 0.',
              'Lagrange\'s MVT: f\'(c) = [f(b) - f(a)] / (b - a). Geometrically, tangent at c is parallel to chord joining endpoints.',
              'Cauchy\'s MVT: [f\'(c) / g\'(c)] = [f(b) - f(a)] / [g(b) - g(a)].'
            ],
            formulaOrEquation: 'f\'(c) = [f(b) - f(a)] / (b - a) for some c ∈ (a, b)'
          },
          {
            topic: 'Maxima and Minima for f(x,y)',
            quickTake: 'Evaluate stationary points where fx = 0, fy = 0 using second-order Hessian conditions.',
            keyPoints: [
              'Let r = fxx, s = fxy, t = fyy at stationary point (a,b).',
              'If rt - s² > 0 and r < 0: Local Maximum.',
              'If rt - s² > 0 and r > 0: Local Minimum.',
              'If rt - s² < 0: Saddle point (neither max nor min); If rt - s² = 0: Inconclusive test.'
            ],
            formulaOrEquation: 'Δ = rt - s²; Δ > 0, r < 0 -> Max; Δ > 0, r > 0 -> Min; Δ < 0 -> Saddle'
          }
        ],
        mindmap: {
          center: 'Differential Calculus',
          branches: [
            {
              title: '1. Mean Value Theorems',
              subtopics: ['Rolle\'s conditions & verification', 'Lagrange\'s MVT chord slope', 'Cauchy\'s generalization', 'Error bounds in expansions'],
              examTip: 'Check continuity and differentiability on intervals before applying theorem.',
              color: 'blue'
            },
            {
              title: '2. Series Expansions',
              subtopics: ['Maclaurin series about x = 0', 'Taylor series about x = a', 'Standard series: e^x, sin x, cos x, log(1+x)', 'Indeterminate forms via L\'Hopital'],
              examTip: 'Memorize Taylor formula: f(x) = f(a) + f\'(a)(x-a) + f\'\'(a)(x-a)²/2! + ...',
              color: 'purple'
            },
            {
              title: '3. Partial Derivatives',
              subtopics: ['Chain rule for several variables', 'Homogeneous functions of degree n', 'Euler\'s theorem: x(∂u/∂x) + y(∂u/∂y) = nu', 'Jacobians & coordinate transformation'],
              examTip: 'If u = f(x,y) is homogeneous of degree n, apply Euler\'s theorem directly without expanding.',
              color: 'emerald'
            },
            {
              title: '4. Bivariate Extrema',
              subtopics: ['Critical points: fx = 0, fy = 0', 'Second partials r, s, t computation', 'Hessian discriminant rt - s²', 'Lagrange multipliers method with constraints'],
              examTip: 'For constrained optimization F(x,y,z,λ) = f(x,y,z) + λg(x,y,z).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'python-problem-solving',
    code: '23ES1103',
    name: 'Python Programming & Problem Solving',
    semesterOrGrade: 'Semester 1',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R23 / Autonomous',
    category: 'Engineering Science Core',
    collegeYear: '1st-year',
    semester: 1,
    subjectCategory: 'core-cs',
    units: [
      {
        unitNumber: 1,
        title: 'Python Basics, Control Flow & Data Types',
        keyTopics: [
          'Python Features, Dynamic Typing, Memory Management, Identifiers and Keywords',
          'Operators (Arithmetic, Bitwise, Logical, Membership \'in\', Identity \'is\')',
          'Conditional Branching (if-elif-else) and Loops (for, while, nested loops)',
          'Strings: Indexing, Slicing [start:stop:step], Formatted string literals (f-strings), Built-in methods'
        ],
        readingTime: '22 mins',
        verifiedBy: 'M. Satyanarayana (Python Lead)',
        verifiedRole: 'ANITS CSE Faculty',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.97,
        upvotes: 890,
        videoDuration: '4m 30s',
        summaryTelugu: 'పైథాన్ బేసిక్స్ మరియు కంట్రోల్ ఫ్లో: డేటా టైప్స్, స్ట్రింగ్ స్లైసింగ్, లూప్స్ (for, while), మరియు బిట్‌వైస్ ఆపరేటర్స్.',
        summaryEnglish: 'Clean syntax cheat sheet, string manipulation algorithms, palindromes, prime generation, and pattern printing.',
        examWeightage: '14 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'String Slicing & Negative Indexing',
            quickTake: 'Slice syntax [start:stop:step] extracts substrings; step < 0 reverses strings.',
            keyPoints: [
              'Positive indexing starts at 0 (left-to-right); Negative indexing starts at -1 (right-to-left).',
              'Slicing s[::-1] generates a reversed string in O(n) time.',
              'Strings are immutable; any modification creates a new object in memory.'
            ],
            formulaOrEquation: 'Reversal: s[::-1] | Substring: s[start : stop : step]'
          },
          {
            topic: 'Identity (is) vs Equality (==) in Python',
            quickTake: '== compares values/contents; "is" compares memory addresses (object identity id(a) == id(b)).',
            keyPoints: [
              'a = [1, 2]; b = [1, 2] -> a == b is True, but a is b is False.',
              'Integer caching: Python pre-allocates small integers from -5 to 256 for performance.',
              'Always use "is None" instead of "== None" for singleton checks.'
            ],
            formulaOrEquation: 'a == b (Value equality) | a is b (id(a) == id(b) Memory identity)'
          }
        ],
        mindmap: {
          center: 'Python Fundamentals',
          branches: [
            {
              title: '1. Variables & Memory',
              subtopics: ['Dynamically typed nature', 'Reference counting garbage collection', 'Mutable vs Immutable objects', 'Type casting int(), float(), str()'],
              examTip: 'Integers, floats, tuples, strings are immutable; lists, dicts, sets are mutable.',
              color: 'blue'
            },
            {
              title: '2. Control Structures',
              subtopics: ['Indentation rules', 'if - elif - else chains', 'for loop with range()', 'break, continue, pass statements'],
              examTip: 'The "else" block in a for loop executes ONLY if the loop finishes without hitting a "break".',
              color: 'purple'
            },
            {
              title: '3. Strings & Slicing',
              subtopics: ['Negative indexing', 'Stride/Step syntax s[::2]', 'Methods: split(), join(), strip()', 'f-strings formatted printing'],
              examTip: 'Write palindrome check in one line: return s == s[::-1].',
              color: 'emerald'
            },
            {
              title: '4. Functions & Scope',
              subtopics: ['def syntax & return values', 'Positional vs Keyword arguments', '*args (tuple) and **kwargs (dict)', 'LEGB variable scope hierarchy'],
              examTip: 'LEGB rule: Local -> Enclosing -> Global -> Built-in scope resolution order.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Data Structures: Lists, Tuples, Dictionaries & Sets',
        keyTopics: [
          'Lists: Dynamic resizing, Comprehensions [x**2 for x in nums], Built-in functions',
          'Tuples: Immutability, Packing and Unpacking, Namedtuples',
          'Dictionaries: Hash table implementation, Key-Value pairs, Dictionary Comprehensions',
          'Sets: Mathematical set operations (Union |, Intersection &, Difference -, Symmetric Difference ^)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'V. Keerthi',
        verifiedRole: 'Raghu Engg College CSE Faculty',
        pdfPages: 20,
        fileSize: '2.6 MB',
        rating: 4.95,
        upvotes: 780,
        videoDuration: '4m 45s',
        summaryTelugu: 'పైథాన్ డేటా స్ట్రక్చర్స్: లిస్ట్ కాంప్రహెన్షన్స్, డిక్షనరీ హ్యాషింగ్, టుపుల్స్ మరియు సెట్ మ్యాథమెటికల్ ఆపరేషన్స్.',
        summaryEnglish: 'Comprehensive comparison of time complexity for list vs set lookups, dictionary key hashing, and file I/O operations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 6,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'List Comprehensions vs Generator Expressions',
            quickTake: 'Comprehensions construct list in memory immediately; generator expressions yield items lazily.',
            keyPoints: [
              'List comprehension: [x**2 for x in range(10) if x % 2 == 0].',
              'Dictionary comprehension: {k: v for k, v in zip(keys, values)}.',
              'Sets eliminate duplicates in O(1) average lookup time via hash table.'
            ],
            formulaOrEquation: '[expr for item in iterable if condition]'
          },
          {
            topic: 'Dictionary Hashing & Keys Rules',
            quickTake: 'Keys must be hashable and immutable (strings, numbers, tuples); lookup is O(1) on average.',
            keyPoints: [
              'Lists cannot be dictionary keys because lists are mutable (unhashable type: list).',
              'dict.get(key, default) safely avoids KeyError if key is missing.',
              'Collision resolution in Python dict uses open addressing with perturbation.'
            ],
            formulaOrEquation: 'Dict Lookup: O(1) Average | Keys must be Immutable/Hashable'
          }
        ],
        mindmap: {
          center: 'Python Collections',
          branches: [
            {
              title: '1. Lists & Operations',
              subtopics: ['append() vs extend()', 'List slicing & shallow copy', 'List comprehensions with filtering', 'Sorting: sort() in-place vs sorted()'],
              examTip: 'list.append([1,2]) adds single list element; list.extend([1,2]) adds each item.',
              color: 'blue'
            },
            {
              title: '2. Tuples & Unpacking',
              subtopics: ['Immutability advantages', 'Single element tuple comma syntax (1,)', 'Tuple unpacking: a, b = b, a', 'Tuples as dict keys'],
              examTip: 'Explain why tuples are faster and consume less memory than lists of same size.',
              color: 'purple'
            },
            {
              title: '3. Dictionaries & Hashes',
              subtopics: ['Key-Value pairs', 'Hashing mechanism', 'dict.items(), dict.keys(), dict.values()', 'Defaultdict and Counter collections'],
              examTip: 'Use collections.Counter for counting character frequencies in O(n).',
              color: 'emerald'
            },
            {
              title: '4. Sets & Math Operations',
              subtopics: ['Unique element enforcement', 'Union |, Intersection &, Difference -', 'Symmetric Difference ^', 'Frozenset immutable sets'],
              examTip: 'Set membership test "x in s" is O(1) on average, whereas in list it is O(n).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // 2ND YEAR (Semesters 3 & 4)
  // ----------------------------------------------------
  {
    id: 'dbms-core',
    code: '20CS1105',
    name: 'Database Management Systems (DBMS)',
    semesterOrGrade: 'Semester 4',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    semester: 4,
    subjectCategory: 'core-cs',
    units: [
      {
        unitNumber: 1,
        title: 'Relational Model, ER Diagrams & Advanced SQL',
        keyTopics: [
          'Database Architecture: 3-Schema Architecture, Data Independence (Physical & Logical)',
          'ER Modeling: Entities, Attributes (Composite, Multi-valued, Derived), Relationships, Cardinality',
          'Relational Algebra: Selection (σ), Projection (π), Cartesian Product (×), Joins (Natural, Theta, Outer)',
          'Advanced SQL: Subqueries, Correlated Subqueries, GROUP BY, HAVING, Aggregate functions, Triggers, Views'
        ],
        readingTime: '25 mins',
        verifiedBy: 'Dr. C. Leelavathi (HOD CSE)',
        verifiedRole: 'GVPCOE Database Research Group',
        pdfPages: 22,
        fileSize: '3.0 MB',
        rating: 4.98,
        upvotes: 940,
        videoDuration: '5m 05s',
        summaryTelugu: 'రిలేషనల్ మోడల్ & SQL: 3-స్కీమా ఆర్కిటెక్చర్, ER డయాగ్రమ్స్, రిలేషనల్ ఆల్జీబ్రా ఆపరేషన్స్ (సెలెక్షన్, ప్రొజెక్షన్, జాయిన్స్) మరియు గ్రూప్ బై క్లాజ్.',
        summaryEnglish: 'ER to relational schema reduction rules, formal relational algebra algebraic expressions, and complex SQL joins interview questions.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: '3-Schema Architecture & Data Independence',
            quickTake: 'Separates user view, logical table structure, and physical file storage.',
            keyPoints: [
              'Internal Level: Physical storage representation (B+ trees, records, indices).',
              'Conceptual / Logical Level: What data is stored and relationships (tables, schemas).',
              'External Level: User views customized for specific end-user roles.',
              'Logical Data Independence: Capacity to change conceptual schema without altering external views.'
            ],
            formulaOrEquation: 'Levels: External (Views) ⟷ Conceptual (Tables) ⟷ Internal (Storage)'
          },
          {
            topic: 'Relational Algebra Operators',
            quickTake: 'Formal procedural query language; fundamental underpinning of SQL execution engines.',
            keyPoints: [
              'Selection (σ): Horizontal filter returning rows satisfying condition C (e.g. σ salary > 50000 (Emp)).',
              'Projection (π): Vertical filter extracting specified columns and eliminating duplicates (π name, dept (Emp)).',
              'Natural Join (⋈): Combines tuples from two relations having common attribute equality.'
            ],
            formulaOrEquation: 'σ_condition(R) = Row filtering | π_attributes(R) = Column extraction'
          }
        ],
        mindmap: {
          center: 'Relational Database & SQL',
          branches: [
            {
              title: '1. Architecture & ER Model',
              subtopics: ['3-tier DBMS architecture', 'Physical & Logical data independence', 'Strong vs Weak entity sets', 'Generalization, Specialization, Aggregation'],
              examTip: 'Weak entities have no primary key; identified by identifying relationship and partial discriminator key.',
              color: 'blue'
            },
            {
              title: '2. Relational Algebra',
              subtopics: ['Selection σ & Projection π', 'Cartesian Product × & Rename ρ', 'Natural Join ⋈ & Theta Join', 'Division operator ÷ in "all" queries'],
              examTip: 'Relational division R ÷ S is used for queries containing the phrase "find students enrolled in ALL courses".',
              color: 'purple'
            },
            {
              title: '3. SQL Querying',
              subtopics: ['DDL (CREATE, ALTER) vs DML', 'Aggregate functions COUNT, SUM, AVG', 'WHERE vs HAVING filtering', 'Correlated subqueries with EXISTS'],
              examTip: 'WHERE filters rows BEFORE grouping; HAVING filters groups AFTER aggregate calculations.',
              color: 'emerald'
            },
            {
              title: '4. Integrity & Views',
              subtopics: ['Domain, Entity & Referential integrity', 'ON DELETE CASCADE actions', 'Updatable views vs Read-only views', 'Triggers: BEFORE/AFTER INSERT/UPDATE'],
              examTip: 'Referential integrity states foreign key must match valid primary key or be NULL.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Normalization & Transaction Processing (ACID)',
        keyTopics: [
          'Functional Dependencies (FD), Armstrong\'s Axioms, Attribute Closure (X+)',
          'Normal Forms: 1NF, 2NF, 3NF, Boyce-Codd Normal Form (BCNF), Decomposition properties (Lossless Join & Dependency Preservation)',
          'Transaction Concept: ACID Properties (Atomicity, Consistency, Isolation, Durability)',
          'Concurrency Control: Conflict Serializability, Precedence Graph, Two-Phase Locking (2PL), Deadlocks'
        ],
        readingTime: '26 mins',
        verifiedBy: 'K. Bharathi',
        verifiedRole: 'AUCOE Assistant Professor',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.97,
        upvotes: 910,
        videoDuration: '5m 15s',
        summaryTelugu: 'నార్మలైజేషన్ మరియు లావాదేవీలు (ACID): 1NF, 2NF, 3NF, BCNF నిబంధనలు, ఆట్రిబ్యూట్ క్లోజర్, షెడ్యూల్ సీరియలైజబిలిటీ మరియు 2PL లాకింగ్ ప్రోటోకాల్.',
        summaryEnglish: 'Step-by-step normal form testing flowchart, lossy vs lossless decomposition matrix, and conflict serializability cycle detection.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 6,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Normal Forms (3NF vs BCNF)',
            quickTake: 'BCNF is strictly stronger than 3NF; eliminates anomalies caused by functional dependencies.',
            keyPoints: [
              '1NF: Attributes must be atomic (no multi-valued or composite values).',
              '2NF: 1NF + No partial dependency (non-prime attributes fully dependent on candidate key).',
              '3NF: 2NF + No transitive dependency (for X -> A, either X is super key OR A is prime attribute).',
              'BCNF: For every functional dependency X -> A, X MUST be a Super Key.'
            ],
            formulaOrEquation: 'BCNF Condition: In X ➔ A, X is strictly a Super Key'
          },
          {
            topic: 'ACID Properties & Serializability',
            quickTake: 'ACID guarantees database reliability during crashes and simultaneous user access.',
            keyPoints: [
              'Atomicity: All operations in transaction complete, or none do (Recovery Manager / WAL log).',
              'Consistency: Database moves from one valid state to another satisfying all integrity constraints.',
              'Isolation: Concurrent transactions execute without interfering with one another (Two-Phase Locking).',
              'Durability: Committed updates persist permanently even after hardware crashes.'
            ],
            formulaOrEquation: 'ACID = Atomicity + Consistency + Isolation + Durability'
          }
        ],
        mindmap: {
          center: 'Normalization & ACID',
          branches: [
            {
              title: '1. Functional Dependencies',
              subtopics: ['Armstrong\'s axioms (Reflexivity, Augmentation, Transitivity)', 'Attribute closure X+ algorithm', 'Finding Candidate Keys of a relation', 'Minimal cover computation'],
              examTip: 'To find candidate keys, compute attribute closures of attribute subsets.',
              color: 'blue'
            },
            {
              title: '2. Normal Forms Hierarchy',
              subtopics: ['1NF (Atomic attributes)', '2NF (No partial dependency)', '3NF (No transitive dependency)', 'BCNF (Strict super key determinant)'],
              examTip: 'Every BCNF schema is in 3NF, but every 3NF is not necessarily in BCNF.',
              color: 'purple'
            },
            {
              title: '3. Transaction States',
              subtopics: ['Active, Partially Committed, Failed, Aborted, Committed', 'Write-Ahead Logging (WAL)', 'Redo and Undo operations', 'Checkpoints for recovery speed'],
              examTip: 'Draw transaction state transition diagram with 5 standard states.',
              color: 'emerald'
            },
            {
              title: '4. Concurrency Control',
              subtopics: ['Conflict serializability precedence graph', 'View serializability', 'Two-Phase Locking (Growing & Shrinking phases)', 'Deadlock detection & prevention (Wait-Die vs Wound-Wait)'],
              examTip: 'If precedence graph contains a cycle, the schedule is NOT conflict serializable.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'java-oops-core',
    code: '20CS1106',
    name: 'Object Oriented Programming through Java',
    semesterOrGrade: 'Semester 3',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    semester: 3,
    subjectCategory: 'core-cs',
    units: [
      {
        unitNumber: 1,
        title: 'Core Java & OOP Principles',
        keyTopics: [
          'JVM, JRE, JDK Architecture and Bytecode Execution model',
          'Encapsulation, Inheritance (single, multilevel, hierarchical; why no multiple inheritance for classes)',
          'Polymorphism: Method Overloading (Compile-time) vs Method Overriding (Runtime / Dynamic Method Dispatch)',
          'Abstract Classes vs Interfaces (default and static methods in Java 8+)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'T. Hema Latha',
        verifiedRole: 'GITAM University Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.96,
        upvotes: 860,
        videoDuration: '4m 30s',
        summaryTelugu: 'కోర్ జావా & ఆబ్జెక్ట్ ఓరియెంటెడ్ ప్రోగ్రామింగ్: జేవీఎం ఆర్కిటెక్చర్, ఇన్హెరిటెన్స్, రన్‌టైమ్ పాలిమార్ఫిజం (మెథడ్ ఓవర్‌రైడింగ్), అబ్‌స్ట్రాక్ట్ క్లాసెస్ vs ఇంటర్‌ఫేసెస్.',
        summaryEnglish: 'Diamond problem resolution via interfaces, dynamic method dispatch internals, and memory allocation in Java heap vs stack.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Dynamic Method Dispatch (Runtime Polymorphism)',
            quickTake: 'A call to an overridden method is resolved at runtime through parent class reference variable.',
            keyPoints: [
              'Parent obj = new Child(); obj.show(); executes Child\'s version of show().',
              'Java uses virtual method table (vtable) resolved during runtime.',
              'Private, static, and final methods cannot be overridden (static binding at compile time).'
            ],
            formulaOrEquation: 'SuperClass ref = new SubClass(); ref.overriddenMethod() resolves dynamically'
          },
          {
            topic: 'Abstract Class vs Interface in Java',
            quickTake: 'Interfaces achieve 100% abstraction and multiple inheritance; abstract classes allow state and partial implementation.',
            keyPoints: [
              'Abstract classes can have instance variables and constructors; interfaces cannot have constructors.',
              'Class can implement multiple interfaces but extend only one class.',
              'Interface variables are implicitly "public static final"; methods are implicitly "public abstract" (unless default/static).'
            ],
            formulaOrEquation: 'Interface: Multiple inheritance + Pure contract | Abstract Class: Code reuse + Base state'
          }
        ],
        mindmap: {
          center: 'Java OOP Architecture',
          branches: [
            {
              title: '1. Java Platform',
              subtopics: ['JDK vs JRE vs JVM', 'Write Once Run Anywhere (WORA)', 'Bytecode verification & JIT compiler', 'Garbage collection mark-and-sweep'],
              examTip: 'Bytecode (.class) is platform-independent; JVM is platform-dependent.',
              color: 'blue'
            },
            {
              title: '2. Inheritance & Polymorphism',
              subtopics: ['super keyword usage', 'Constructor chaining', 'Method Overloading vs Overriding', 'Dynamic method dispatch via vtable'],
              examTip: 'Method signature = Method name + Parameter list (return type is not part of signature).',
              color: 'purple'
            },
            {
              title: '3. Abstraction Mechanisms',
              subtopics: ['abstract keyword rules', 'Interfaces contract', 'Default methods in Java 8', 'Multiple interface inheritance'],
              examTip: 'An abstract class cannot be instantiated directly with "new".',
              color: 'emerald'
            },
            {
              title: '4. Encapsulation & Packages',
              subtopics: ['Access specifiers (private, default, protected, public)', 'Getter/Setter accessors', 'Creating and importing packages', 'Classpath environment variable'],
              examTip: 'Protected members are accessible within same package and subclasses in different packages.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Exception Handling, Multithreading & Collections',
        keyTopics: [
          'Exception Hierarchy: Throwable, Exception vs Error, Checked vs Unchecked Exceptions',
          'try, catch, finally, throw, throws; Custom Exception creation',
          'Thread Lifecycle: New, Runnable, Blocked, Waiting, Timed Waiting, Terminated',
          'Java Collections Framework: ArrayList, LinkedList, HashMap, HashSet, Iterators'
        ],
        readingTime: '24 mins',
        verifiedBy: 'N. V. Ramesh',
        verifiedRole: 'Raghu Engg College Topper Mentor',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.95,
        upvotes: 820,
        videoDuration: '4m 50s',
        summaryTelugu: 'ఎక్సెప్షన్ హ్యాండ్లింగ్ & మల్టీథ్రెడ్డింగ్: చెక్డ్ vs అన్‌చెక్డ్ ఎక్సెప్షన్స్, థ్రెడ్ లైఫ్‌సైకిల్, సింక్రనైజేషన్ మరియు జావా కలెక్షన్స్ ఫ్రేమ్‌వర్క్.',
        summaryEnglish: 'Clean thread state diagrams, inter-thread communication (wait, notify), producer-consumer synchronization, and HashMap collision chaining.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Checked vs Unchecked Exceptions',
            quickTake: 'Checked exceptions are verified at compile time; unchecked exceptions occur at runtime.',
            keyPoints: [
              'Checked: Inherit directly from Exception (IOException, SQLException, ClassNotFoundException). Must be caught or declared with throws.',
              'Unchecked: Inherit from RuntimeException (NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException).',
              'The "finally" block always executes regardless of whether an exception was thrown or caught (except during System.exit(0)).'
            ],
            formulaOrEquation: 'Throwable -> Exception (Checked) & RuntimeException (Unchecked) & Error'
          },
          {
            topic: 'Thread Synchronization & Mutual Exclusion',
            quickTake: 'The synchronized keyword prevents race conditions by locking object monitors.',
            keyPoints: [
              'Race condition occurs when multiple threads modify shared mutable state concurrently.',
              'Synchronized method locks "this" object monitor for the duration of execution.',
              'Inter-thread communication: wait() releases monitor lock; notify() wakes up one waiting thread.'
            ],
            formulaOrEquation: 'synchronized(lock) { /* Mutual Exclusion Critical Section */ }'
          }
        ],
        mindmap: {
          center: 'Exceptions & Threads',
          branches: [
            {
              title: '1. Exception Architecture',
              subtopics: ['Throwable root hierarchy', 'Checked vs Unchecked differences', 'try-with-resources auto-close', 'finally block guaranteed execution'],
              examTip: 'Unchecked exceptions inherit from java.lang.RuntimeException.',
              color: 'blue'
            },
            {
              title: '2. Multithreading Models',
              subtopics: ['Thread class vs Runnable interface', 'Thread state transition diagram', 'Thread priorities 1 to 10', 'Daemon threads background tasks'],
              examTip: 'Implementing Runnable is preferred over extending Thread to allow multiple inheritance.',
              color: 'purple'
            },
            {
              title: '3. Thread Synchronization',
              subtopics: ['Critical section problem', 'synchronized methods & blocks', 'Deadlocks prevention', 'wait(), notify(), notifyAll() in Object class'],
              examTip: 'wait() and notify() must be called inside a synchronized context only.',
              color: 'emerald'
            },
            {
              title: '4. Collections Framework',
              subtopics: ['List: ArrayList vs LinkedList', 'Set: HashSet vs TreeSet (sorted)', 'Map: HashMap bucket chaining', 'Comparable vs Comparator interfaces'],
              examTip: 'Comparable provides natural single sorting (compareTo); Comparator provides custom multiple sorting (compare).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // 3RD YEAR (Semesters 5 & 6)
  // ----------------------------------------------------
  {
    id: 'operating-systems-core',
    code: '20CS1107',
    name: 'Operating Systems',
    semesterOrGrade: 'Semester 5',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    semester: 5,
    subjectCategory: 'core-cs',
    units: [
      {
        unitNumber: 1,
        title: 'Process Management, Threads & CPU Scheduling',
        keyTopics: [
          'Process Concept, Process Control Block (PCB), Context Switching overhead',
          'Inter-Process Communication (IPC): Shared Memory vs Message Passing',
          'CPU Scheduling Algorithms: FCFS, SJF (Preemptive/SRTF & Non-preemptive), Priority Scheduling, Round Robin',
          'Process Synchronization: Critical Section, Peterson\'s Algorithm, Semaphores (Counting & Binary), Classical IPC (Producer-Consumer, Dining Philosophers)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Prof. Y. Radhika',
        verifiedRole: 'AUCOE Senior Professor',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 970,
        videoDuration: '5m 15s',
        summaryTelugu: 'ఆపరేటింగ్ సిస్టమ్స్: ప్రాసెస్ కంట్రోల్ బ్లాక్ (PCB), CPU షెడ్యూలింగ్ అల్గారిథమ్స్ (రౌండ్ రాబిన్, SJF), సెమాఫోర్స్ మరియు క్రిటికల్ సెక్షన్ సమస్య.',
        summaryEnglish: 'Comprehensive Gantt charts, Turnaround & Waiting time calculation formulas, and semaphore wait()/signal() synchronization.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'CPU Scheduling Metrics & Formulas',
            quickTake: 'Turnaround Time (TAT) and Waiting Time (WT) quantify scheduling algorithm performance.',
            keyPoints: [
              'Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT).',
              'Waiting Time (WT) = Turnaround Time (TAT) - Burst Time (BT).',
              'Shortest Job First (SJF) is provably optimal for minimizing average waiting time.',
              'Round Robin uses time quantum q; too large behaves like FCFS; too small causes excessive context switch overhead.'
            ],
            formulaOrEquation: 'TAT = CT - AT | WT = TAT - BT | Response Time = First Run - AT'
          },
          {
            topic: 'Critical Section & Semaphores',
            quickTake: 'Three requirements for mutual exclusion: Mutual Exclusion, Progress, Bounded Waiting.',
            keyPoints: [
              'Semaphore: Integer variable accessed only via atomic operations wait() / P() and signal() / V().',
              'Binary Semaphore (Mutex): Values 0 or 1. Used for mutual exclusion.',
              'Counting Semaphore: Value initialized to number of available resource instances.'
            ],
            formulaOrEquation: 'wait(S): while(S<=0); S--; | signal(S): S++;'
          }
        ],
        mindmap: {
          center: 'Process & CPU Scheduling',
          branches: [
            {
              title: '1. Process Concepts',
              subtopics: ['5-State Process model', 'PCB attributes (PID, Registers, State)', 'Context switch latency', 'User-level vs Kernel-level threads'],
              examTip: 'Context switching is pure overhead because the CPU does no useful application work during switching.',
              color: 'blue'
            },
            {
              title: '2. CPU Scheduling',
              subtopics: ['Preemptive vs Non-preemptive', 'SJF / SRTF optimality proof', 'Round Robin time quantum selection', 'Multi-level Feedback Queue (MLFQ)'],
              examTip: 'Always draw clear Gantt chart with time units 0, 1, 2... before calculating TAT and WT.',
              color: 'purple'
            },
            {
              title: '3. Critical Section Problem',
              subtopics: ['Mutual Exclusion requirement', 'Progress requirement', 'Bounded Waiting requirement', 'Peterson\'s 2-process software solution'],
              examTip: 'State the 3 necessary criteria to solve critical section problem in 5 marks.',
              color: 'emerald'
            },
            {
              title: '4. Synchronization Primitives',
              subtopics: ['Counting & Binary Semaphores', 'Deadlock & Starvation in semaphores', 'Producer-Consumer bounded buffer', 'Dining Philosophers solution'],
              examTip: 'Dining philosophers deadlock is broken by introducing asymmetric philosopher or limiting simultaneous eaters to 4.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Deadlocks, Memory Management & Virtual Memory',
        keyTopics: [
          'Deadlocks: 4 Necessary Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)',
          'Deadlock Handling: Prevention, Avoidance (Banker\'s Algorithm - Safety & Resource Request), Detection & Recovery',
          'Memory Management: Logical vs Physical address, Contiguous allocation (First-Fit, Best-Fit, Worst-Fit), Paging, TLB Translation',
          'Virtual Memory: Page Fault handling, Page Replacement Algorithms (FIFO, Belady\'s Anomaly, Optimal, LRU)'
        ],
        readingTime: '28 mins',
        verifiedBy: 'S. N. V. Prasad',
        verifiedRole: 'GVPCOE OS Module Lead',
        pdfPages: 26,
        fileSize: '3.5 MB',
        rating: 4.97,
        upvotes: 930,
        videoDuration: '5m 30s',
        summaryTelugu: 'డెడ్‌లాక్స్ & వర్చువల్ మెమరీ: డెడ్‌లాక్ 4 కండిషన్స్, బ్యాంకర్స్ అల్గారిథమ్ (సేఫ్టీ టెస్ట్), పేజింగ్ & TLB, పేజ్ రీప్లేస్‌మెంట్ (LRU, Optimal).',
        summaryEnglish: 'Banker\'s algorithm safety proof table, Belady\'s anomaly explanation on FIFO, and effective memory access time (EMAT) calculations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Banker\'s Algorithm for Deadlock Avoidance',
            quickTake: 'Ensures the system never enters an unsafe state where deadlock could occur.',
            keyPoints: [
              'Need Matrix = Max[i,j] - Allocation[i,j].',
              'Safety algorithm tests if Available >= Need[i]. If yes, process i finishes and releases allocated resources (Available += Allocation[i]).',
              'If a safe sequence <P1, P3, ...> exists for all processes, system is in safe state.'
            ],
            formulaOrEquation: 'Need[i][j] = Max[i][j] - Allocation[i][j] | Available += Allocation[i]'
          },
          {
            topic: 'Page Replacement & Belady\'s Anomaly',
            quickTake: 'Belady\'s anomaly: For FIFO replacement, increasing frame allocation can sometimes increase page faults!',
            keyPoints: [
              'LRU (Least Recently Used): Replaces page that hasn\'t been referenced for longest time; optimal among practical online algorithms.',
              'Optimal (OPT): Replaces page that will not be used for longest duration in future (benchmark, cannot be implemented in practice).',
              'FIFO suffers from Belady\'s anomaly; LRU and OPT are stack algorithms and never suffer from Belady\'s anomaly.'
            ],
            formulaOrEquation: 'EMAT = h * (t_tlb + t_mem) + (1 - h) * (t_tlb + 2 * t_mem)'
          }
        ],
        mindmap: {
          center: 'Deadlocks & Virtual Memory',
          branches: [
            {
              title: '1. Deadlock Conditions',
              subtopics: ['Mutual exclusion', 'Hold and wait', 'No preemption of allocated resources', 'Circular wait cycle in Resource Allocation Graph (RAG)'],
              examTip: 'All 4 conditions must hold simultaneously for a deadlock to arise.',
              color: 'blue'
            },
            {
              title: '2. Banker\'s Algorithm',
              subtopics: ['Data structures: Available, Max, Allocation, Need', 'Safety algorithm execution steps', 'Resource-Request algorithm check', 'Unsafe vs Deadlocked distinction'],
              examTip: 'An unsafe state is NOT necessarily a deadlock, but every deadlock is an unsafe state.',
              color: 'purple'
            },
            {
              title: '3. Paging & Translation',
              subtopics: ['Page number & Page offset', 'Frame allocation', 'Translation Lookaside Buffer (TLB) cache', 'Effective Memory Access Time (EMAT)'],
              examTip: 'Internal fragmentation occurs in paging (last page partially filled); External fragmentation is eliminated.',
              color: 'emerald'
            },
            {
              title: '4. Page Replacement',
              subtopics: ['Page fault interrupt service routine', 'FIFO & Belady\'s anomaly proof', 'LRU implementation (Stack vs Counter)', 'Thrashing & Working Set model'],
              examTip: 'Thrashing occurs when the system spends more time paging than executing processes.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'computer-networks-core',
    code: '20CS1108',
    name: 'Computer Networks',
    semesterOrGrade: 'Semester 6',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    semester: 6,
    subjectCategory: 'core-cs',
    units: [
      {
        unitNumber: 1,
        title: 'Network Models, Physical & Data Link Layer',
        keyTopics: [
          'OSI 7-Layer Reference Model vs TCP/IP 4-Layer Architecture (Responsibilities of each layer)',
          'Transmission Media: Guided (Twisted Pair, Coaxial, Optical Fiber) vs Unguided (Radio, Microwave, Satellite)',
          'Data Link Layer: Framing (Bit stuffing, Byte stuffing), Error Detection (Parity, Checksum, Cyclic Redundancy Check - CRC)',
          'Sliding Window Protocols: Stop-and-Wait ARQ, Go-Back-N ARQ, Selective Repeat ARQ (Efficiency formulas)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. G. V. Eswara Rao',
        verifiedRole: 'ANITS Networks Department',
        pdfPages: 22,
        fileSize: '3.0 MB',
        rating: 4.96,
        upvotes: 910,
        videoDuration: '5m 10s',
        summaryTelugu: 'కంప్యూటర్ నెట్‌వర్క్స్: OSI 7-లేయర్ మోడల్ vs TCP/IP, CRC ఎర్రర్ డిటెక్షన్ క్యాలిక్యులేషన్, స్లైడింగ్ విండో ప్రోటోకాల్స్ (గో-బ్యాక్-N vs సెలెక్టివ్ రిపీట్).',
        summaryEnglish: 'Step-by-step CRC polynomial division with generator, bit-stuffing rules, and sliding window maximum throughput derivations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Cyclic Redundancy Check (CRC)',
            quickTake: 'Error-detecting code using modulo-2 polynomial binary division.',
            keyPoints: [
              'Generator polynomial G(x) of degree r: Append r zeros to the message M.',
              'Perform modulo-2 binary division (XOR operation without carry/borrow).',
              'The remainder R is the CRC checksum appended to transmit M + R.',
              'Receiver divides received bit stream by G(x); non-zero remainder signals transmission error.'
            ],
            formulaOrEquation: 'Transmitted Frame = M * 2^r XOR Remainder( (M * 2^r) / G )'
          },
          {
            topic: 'Sliding Window Protocols: GBN vs Selective Repeat',
            quickTake: 'Selective Repeat retransmits only damaged frames; Go-Back-N retransmits all frames starting from the lost one.',
            keyPoints: [
              'Stop-and-Wait efficiency: η = 1 / (1 + 2a), where a = Propagation Time / Transmission Time (Tp / Tt).',
              'Go-Back-N: Sender window size Ws = 2^k - 1, Receiver window Wr = 1. Uses cumulative ACKs.',
              'Selective Repeat: Sender window Ws = 2^(k-1), Receiver window Wr = 2^(k-1). Uses independent ACKs.'
            ],
            formulaOrEquation: 'Efficiency: η = W / (1 + 2a) | GBN Ws = 2^k - 1 | SR Ws = Wr = 2^(k-1)'
          }
        ],
        mindmap: {
          center: 'Data Link & Physical Layer',
          branches: [
            {
              title: '1. Layered Architectures',
              subtopics: ['OSI 7 Layers mnemonics', 'TCP/IP 4 Layers mapping', 'Encapsulation & Decapsulation headers', 'SAP (Service Access Points)'],
              examTip: 'Remember layers from bottom up: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
              color: 'blue'
            },
            {
              title: '2. Framing & Bit Stuffing',
              subtopics: ['Flag byte 01111110', 'Bit stuffing: Insert 0 after five consecutive 1s', 'Byte stuffing: ESC escape characters', 'Physical layer coding violations'],
              examTip: 'Receiver unstuffs by removing the 0 that immediately follows five consecutive 1s.',
              color: 'purple'
            },
            {
              title: '3. Error Control Mechanisms',
              subtopics: ['Single-bit & 2D Parity', 'Internet Checksum 16-bit 1\'s complement', 'CRC polynomial division', 'Hamming code error correction (2^p >= m + p + 1)'],
              examTip: 'To correct d errors, minimum Hamming distance between code words must be 2d + 1.',
              color: 'emerald'
            },
            {
              title: '4. Flow Control Protocols',
              subtopics: ['Stop-and-Wait ARQ & piggybacking', 'Go-Back-N sliding window', 'Selective Repeat retransmission buffer', 'Bandwidth-Delay product'],
              examTip: 'In Go-Back-N, if frame 3 is damaged, frames 3, 4, 5... must all be retransmitted.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Network & Transport Protocols (IP, TCP, UDP)',
        keyTopics: [
          'Network Layer: IPv4 header format, Classful addressing, CIDR Subnetting & Supernetting, IPv6 features',
          'Routing Algorithms: Distance Vector Routing (Bellman-Ford & Count-to-Infinity problem), Link State Routing (Dijkstra\'s SPF)',
          'Transport Layer: Port numbers, TCP 3-Way Handshake connection establishment and teardown',
          'TCP Flow & Congestion Control: Sliding window, Slow Start, Congestion Avoidance, Fast Retransmit & Fast Recovery'
        ],
        readingTime: '28 mins',
        verifiedBy: 'K. S. Chandra Sekhar',
        verifiedRole: 'AUCOE Computer Networks Topper',
        pdfPages: 26,
        fileSize: '3.4 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 25s',
        summaryTelugu: 'నెట్‌వర్క్ & ట్రాన్స్‌పోర్ట్ ప్రోటోకాల్స్: IPv4 సబ్‌నెట్టింగ్ (CIDR), డిజిక్‌స్ట్రా రూటింగ్ అల్గారిథమ్, TCP 3-వే హ్యాండ్‌షేక్ మరియు కంజెషన్ కంట్రోల్.',
        summaryEnglish: 'Detailed IPv4 subnet mask calculations, Dijkstra shortest-path execution trace, and TCP Reno congestion window sawtooth graph.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'CIDR Subnetting & Masking',
            quickTake: 'Classless Inter-Domain Routing breaks addresses into network bits /n and host bits (32 - n).',
            keyPoints: [
              'Number of usable host IP addresses in subnet /n = 2^(32 - n) - 2 (subtract Network ID and Broadcast ID).',
              'Subnet mask for /26 is 255.255.255.192; block size is 256 - 192 = 64 addresses per subnet.',
              'Network address: Bitwise AND between IP address and Subnet Mask.'
            ],
            formulaOrEquation: 'Usable Hosts = 2^(32 - prefix_length) - 2 | Network ID = IP AND Mask'
          },
          {
            topic: 'TCP 3-Way Handshake & Congestion Control',
            quickTake: 'Establishes full-duplex reliable connection with synchronized sequence numbers (SYN, SYN-ACK, ACK).',
            keyPoints: [
              'Handshake: Client sends [SYN, seq=x]; Server replies [SYN-ACK, seq=y, ack=x+1]; Client sends [ACK, ack=y+1].',
              'Slow Start: Congestion window (cwnd) doubles every RTT (exponential growth) until reaching ssthresh.',
              'Congestion Avoidance: Increases cwnd by 1 MSS every RTT (additive increase, linear growth).',
              'On 3 duplicate ACKs (Fast Retransmit): ssthresh = cwnd / 2; cwnd = ssthresh (multiplicative decrease).'
            ],
            formulaOrEquation: 'AIMD: Additive Increase (Linear) + Multiplicative Decrease (Halving)'
          }
        ],
        mindmap: {
          center: 'Network & Transport Layers',
          branches: [
            {
              title: '1. IPv4 Addressing & CIDR',
              subtopics: ['20-byte base IPv4 header', 'Class A, B, C addresses', 'CIDR slash notation /24, /28', 'Subnetting & Broadcast addresses'],
              examTip: 'First address in block is Network ID; last address is Directed Broadcast address.',
              color: 'blue'
            },
            {
              title: '2. Routing Algorithms',
              subtopics: ['Distance Vector (Bellman-Ford)', 'Count-to-Infinity & Split Horizon', 'Link State (Dijkstra SPF)', 'BGP (Border Gateway Protocol)'],
              examTip: 'Distance vector shares complete routing table with immediate neighbors; Link State floods link state packets to entire network.',
              color: 'purple'
            },
            {
              title: '3. Transport Services',
              subtopics: ['Port addressing (Well-known 0-1023)', 'Connectionless UDP vs Connection-oriented TCP', 'TCP 3-Way Handshake', 'TCP 4-Way Connection termination'],
              examTip: 'UDP has 8-byte header; TCP has 20-byte minimum header.',
              color: 'emerald'
            },
            {
              title: '4. TCP Congestion Control',
              subtopics: ['Slow Start phase (exponential)', 'Congestion Avoidance (linear)', 'Fast Retransmit on 3 duplicate ACKs', 'Fast Recovery Reno vs Tahoe'],
              examTip: 'Draw the classic TCP Congestion Window sawtooth graph showing cwnd vs time in RTTs.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // 4TH YEAR (Semesters 7 & 8)
  // ----------------------------------------------------
  {
    id: 'ai-ml-core',
    code: '20CS1110',
    name: 'Machine Learning & Artificial Intelligence',
    semesterOrGrade: 'Semester 7',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    semester: 7,
    subjectCategory: 'ai',
    units: [
      {
        unitNumber: 1,
        title: 'Supervised Learning, Regression & Model Evaluation',
        keyTopics: [
          'Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning',
          'Linear Regression (Ordinary Least Squares, Cost function J(θ), Gradient Descent updates)',
          'Classification: Logistic Regression (Sigmoid activation, Binary cross-entropy loss), Decision Trees (Entropy, Information Gain, Gini Impurity)',
          'Model Evaluation: Confusion Matrix (TP, FP, TN, FN), Precision, Recall, F1-Score, ROC Curve & AUC'
        ],
        readingTime: '28 mins',
        verifiedBy: 'Dr. Ch. Sita Kameswari',
        verifiedRole: 'GVPCOE AI Research Center',
        pdfPages: 26,
        fileSize: '3.6 MB',
        rating: 4.98,
        upvotes: 980,
        videoDuration: '5m 40s',
        summaryTelugu: 'మెషిన్ లెర్నింగ్: లీనియర్ & లాజిస్టిక్ రిగ్రెషన్, డెసిషన్ ట్రీస్ (ఎంట్రోపీ & ఇన్ఫర్మేషన్ గెయిన్), కన్ఫ్యూజన్ మాట్రిక్స్, ప్రిసిషన్-రీకాల్ మరియు F1-స్కోర్.',
        summaryEnglish: 'Full mathematical derivation of Gradient Descent update rules, ID3 decision tree entropy calculations, and bias-variance tradeoff decomposition.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Gradient Descent & Cost Optimization',
            quickTake: 'Iterative optimization algorithm for finding the minimum of the cost function J(w,b).',
            keyPoints: [
              'Hypothesis: h_θ(x) = θ0 + θ1*x1 + ... + θn*xn.',
              'Mean Squared Error Cost: J(θ) = (1 / 2m) * Σ(h_θ(x^(i)) - y^(i))².',
              'Parameter update: θj := θj - α * (∂J / ∂θj), where α is the learning rate.',
              'If α is too small: slow convergence; If α is too large: overshoots and diverges.'
            ],
            formulaOrEquation: 'θj := θj - α * (1/m) * Σ(h_θ(x^(i)) - y^(i)) * xj^(i)'
          },
          {
            topic: 'Model Evaluation Metrics Matrix',
            quickTake: 'Accuracy can be misleading on imbalanced datasets; Precision and Recall provide genuine diagnostic insight.',
            keyPoints: [
              'Accuracy = (TP + TN) / (TP + TN + FP + FN).',
              'Precision = TP / (TP + FP) (Focus: When model predicts positive, how often is it right?).',
              'Recall / Sensitivity = TP / (TP + FN) (Focus: Out of all actual positives, how many did it catch?).',
              'F1-Score: Harmonic mean of Precision and Recall = 2 * (P * R) / (P + R).'
            ],
            formulaOrEquation: 'F1 = 2 * (Precision * Recall) / (Precision + Recall)'
          }
        ],
        mindmap: {
          center: 'Machine Learning Foundations',
          branches: [
            {
              title: '1. Learning Paradigms',
              subtopics: ['Supervised (Labeled data)', 'Unsupervised (Clustering K-Means)', 'Reinforcement (Agent, Policy, Reward)', 'Bias-Variance tradeoff curve'],
              examTip: 'High bias causes underfitting (too simple); High variance causes overfitting (fits noise).',
              color: 'blue'
            },
            {
              title: '2. Regression Techniques',
              subtopics: ['Simple & Multiple Linear Regression', 'Ordinary Least Squares (OLS)', 'Batch vs Stochastic Gradient Descent', 'Regularization: L1 Lasso vs L2 Ridge'],
              examTip: 'L1 Lasso performs feature selection by shrinking coefficients to zero; L2 Ridge shrinks weights without zeroing them.',
              color: 'purple'
            },
            {
              title: '3. Classification Trees',
              subtopics: ['Shannon Entropy H(S) = -Σ p_i log2(p_i)', 'Information Gain = H(S) - Σ (|Sv|/|S|) * H(Sv)', 'Gini Impurity = 1 - Σ p_i²', 'Pruning to avoid overfitting'],
              examTip: 'Highest Information Gain attribute is chosen as the split node in ID3 algorithm.',
              color: 'emerald'
            },
            {
              title: '4. Metrics & Validation',
              subtopics: ['Confusion Matrix 4 quadrants', 'Precision vs Recall tradeoff', 'ROC (True Positive Rate vs False Positive Rate)', 'K-Fold Cross Validation'],
              examTip: 'In cancer detection, high Recall is prioritized over Precision to eliminate False Negatives.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Neural Networks & Deep Learning Architectures',
        keyTopics: [
          'Biological Neuron vs Artificial Perceptron (McCulloch-Pitts model, Rosenblatt Perceptron)',
          'Activation Functions: Sigmoid, Hyperbolic Tangent (Tanh), Rectified Linear Unit (ReLU), Softmax',
          'Multi-Layer Perceptron (MLP) & Backpropagation: Forward pass, Chain rule error computation, Weight updates',
          'Deep Learning Architectures: Convolutional Neural Networks (CNN - Conv, Pooling, FC layers), Recurrent Neural Networks (RNN/LSTM), Introduction to Transformers & Attention Mechanism'
        ],
        readingTime: '30 mins',
        verifiedBy: 'V. Sandeep',
        verifiedRole: 'AUCOE Deep Learning Lab',
        pdfPages: 28,
        fileSize: '3.8 MB',
        rating: 4.99,
        upvotes: 995,
        videoDuration: '5m 50s',
        summaryTelugu: 'డీప్ లెర్నింగ్ & న్యూరల్ నెట్‌వర్క్స్: పర్సెప్ట్రాన్, యాక్టివేషన్ ఫంక్షన్స్ (ReLU, Softmax), బ్యాక్‌ప్రాపగేషన్ అల్గారిథమ్, CNN ఆర్కిటెక్చర్ (కన్వల్యూషన్, పూలింగ్) మరియు ట్రాన్స్‌ఫార్మర్స్.',
        summaryEnglish: 'Mathematical chain-rule backpropagation derivations, CNN feature map dimension calculations, and Self-Attention Query-Key-Value formulas.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 10,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Backpropagation Algorithm via Chain Rule',
            quickTake: 'Calculates gradients of the loss function with respect to every weight in reverse from output to input layer.',
            keyPoints: [
              'Forward pass: Computes activations z^[l] = W^[l] * a^[l-1] + b^[l] and a^[l] = g(z^[l]).',
              'Loss function: L(y_hat, y) measures difference between predicted output and ground truth label.',
              'Backward pass: Applies chain rule ∂L/∂W^[l] = (∂L/∂a^[l]) * (∂a^[l]/∂z^[l]) * (∂z^[l]/∂W^[l]).',
              'Weights updated using gradient descent: W^[l] := W^[l] - α * dW^[l].'
            ],
            formulaOrEquation: '∂L/∂w_ij = δ_j * a_i | Weight Update: w_ij := w_ij - α * (∂L/∂w_ij)'
          },
          {
            topic: 'Convolutional Neural Networks (CNN)',
            quickTake: 'Specialized deep neural network architecture designed for processing 2D grid/image data using spatial weight sharing.',
            keyPoints: [
              'Convolution layer: Applies learnable filter/kernel to detect edges, textures, and patterns.',
              'Output dimension formula: O = ((W - K + 2P) / S) + 1, where W = Input width, K = Kernel size, P = Padding, S = Stride.',
              'Pooling layer: Reduces spatial dimensions (Max Pooling, Average Pooling) providing translation invariance.',
              'Fully Connected (FC) layer: Flattens features for final classification using Softmax.'
            ],
            formulaOrEquation: 'Output Feature Map Size: O = ((W - K + 2P) / S) + 1'
          }
        ],
        mindmap: {
          center: 'Deep Learning & Neural Nets',
          branches: [
            {
              title: '1. Perceptron & Activations',
              subtopics: ['Linear separability & XOR limitation', 'Sigmoid vanishing gradient problem', 'ReLU f(x) = max(0, x)', 'Softmax multi-class probabilities'],
              examTip: 'A single perceptron cannot solve non-linearly separable problems like XOR.',
              color: 'blue'
            },
            {
              title: '2. Backpropagation Details',
              subtopics: ['Forward propagation activations', 'Error delta computation at output', 'Chain rule weight gradients', 'Learning rate decay and Momentum'],
              examTip: 'Vanishing gradient occurs in deep networks with Sigmoid as derivative approaches zero for large inputs.',
              color: 'purple'
            },
            {
              title: '3. CNN Components',
              subtopics: ['Kernel / Filter convolutions', 'Valid vs Same padding', 'Max Pooling downsampling', 'Feature map dimension calculations'],
              examTip: 'Calculate output size: ((W - K + 2P)/S) + 1. Always check if result is an integer.',
              color: 'emerald'
            },
            {
              title: '4. Sequence & Modern DL',
              subtopics: ['Vanishing gradient in basic RNN', 'LSTM input, forget, output gates', 'Transformer Self-Attention mechanism', 'Attention(Q,K,V) = softmax(QKᵀ / √dk) * V'],
              examTip: 'Attention mechanism solves long-range dependency problem by directly computing pairwise attention scores.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'cloud-computing-devops',
    code: '20CS1111',
    name: 'Cloud Computing & DevOps',
    semesterOrGrade: 'Semester 8',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 / Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    semester: 8,
    subjectCategory: 'it',
    units: [
      {
        unitNumber: 1,
        title: 'Cloud Architecture, Service Models & Virtualization',
        keyTopics: [
          'NIST Cloud Definition, Essential Characteristics: On-Demand Self-Service, Broad Network Access, Resource Pooling, Rapid Elasticity, Measured Service',
          'Service Models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)',
          'Deployment Models: Public, Private, Hybrid, Community Cloud',
          'Virtualization: Type-1 (Bare Metal) vs Type-2 (Hosted) Hypervisors, Containerization vs Hardware Virtualization (Docker advantages)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'M. V. Rao',
        verifiedRole: 'GITAM Cloud Architect Specialist',
        pdfPages: 22,
        fileSize: '3.0 MB',
        rating: 4.96,
        upvotes: 890,
        videoDuration: '4m 50s',
        summaryTelugu: 'క్లౌడ్ కంప్యూటింగ్: NIST 5 లక్షణాలు, సర్వీస్ మోడల్స్ (IaaS, PaaS, SaaS), హైపర్‌వైజర్స్ (Type-1 vs Type-2) మరియు డాకర్ కంటైనరైజేషన్.',
        summaryEnglish: 'Shared responsibility model across cloud tiers, hypervisor vs container architecture diagrams, and cost-benefit trade-offs of public vs hybrid cloud.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'NIST Cloud Characteristics & Service Models',
            quickTake: 'Defines modern utility computing model where computing resources are delivered as on-demand services.',
            keyPoints: [
              'IaaS (e.g. AWS EC2, GCP Compute Engine): Provides raw compute, storage, and networking; user manages OS and software.',
              'PaaS (e.g. AWS Elastic Beanstalk, Heroku): Provides runtime environment and database tools; user deploys application code only.',
              'SaaS (e.g. Google Workspace, Salesforce): Fully managed end-user application accessible via web browsers.',
              'Shared Responsibility: Cloud provider manages physical security and infrastructure; customer secures data, IAM, and configuration.'
            ],
            formulaOrEquation: 'IaaS (Manage OS/App) ⟷ PaaS (Manage App) ⟷ SaaS (Use Application)'
          },
          {
            topic: 'Virtual Machines vs Docker Containers',
            quickTake: 'Containers share host OS kernel; VMs run separate guest OS via hypervisor.',
            keyPoints: [
              'Virtual Machine: Includes full guest OS (heavyweight, gigabytes in size, boots in minutes).',
              'Docker Container: Runs isolated user spaces sharing host kernel (lightweight, megabytes in size, boots in milliseconds).',
              'Type-1 Hypervisor (ESXi, Xen): Runs directly on bare-metal hardware for enterprise performance.',
              'Type-2 Hypervisor (VirtualBox, VMware Workstation): Runs on top of host OS.'
            ],
            formulaOrEquation: 'VM = App + Libs + Full Guest OS | Container = App + Libs + Shared Host Kernel'
          }
        ],
        mindmap: {
          center: 'Cloud Architecture & Virtualization',
          branches: [
            {
              title: '1. NIST Cloud Standards',
              subtopics: ['5 Essential Characteristics', 'Rapid elasticity & auto-scaling', 'Resource pooling multi-tenancy', 'Pay-as-you-go measured service'],
              examTip: 'List all 5 essential characteristics of cloud computing according to NIST definition.',
              color: 'blue'
            },
            {
              title: '2. Cloud Service Models',
              subtopics: ['IaaS infrastructure control', 'PaaS developer convenience', 'SaaS end-user simplicity', 'Shared responsibility matrix'],
              examTip: 'Draw pyramid diagram comparing IaaS, PaaS, SaaS with user vs provider responsibilities.',
              color: 'purple'
            },
            {
              title: '3. Virtualization Tech',
              subtopics: ['Type-1 bare-metal hypervisors', 'Type-2 hosted hypervisors', 'Hardware-assisted virtualization (VT-x)', 'Live VM migration protocols'],
              examTip: 'Type-1 hypervisors have higher performance and security since there is no underlying host OS.',
              color: 'emerald'
            },
            {
              title: '4. Containerization',
              subtopics: ['Docker Engine & Dockerfile', 'Linux cgroups & namespaces isolation', 'Container images & registries', 'Containers vs VMs comparison'],
              examTip: 'Linux namespaces provide isolation (PID, net, mnt); cgroups enforce resource limits (CPU, RAM).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'DevOps Pipeline, CI/CD & Kubernetes Orchestration',
        keyTopics: [
          'DevOps Culture: Continuous Integration (CI), Continuous Delivery / Continuous Deployment (CD)',
          'Version Control & Git branching strategies (Gitflow, Trunk-based development)',
          'CI/CD Pipelines: Build, Automated Unit Testing, Artifact packaging, and Deployment stages (GitHub Actions, Jenkins)',
          'Kubernetes (K8s) Architecture: Control Plane (API Server, etcd, Scheduler, Controller Manager) and Worker Nodes (Kubelet, Kube-proxy, Pods)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'P. Tarun Kumar',
        verifiedRole: 'AUCOE DevOps Consultant',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.97,
        upvotes: 920,
        videoDuration: '5m 10s',
        summaryTelugu: 'డెవ్‌ఆప్స్ & కుబెర్‌నెటిస్: CI/CD పైప్‌లైన్ (ఆటోమేటెడ్ టెస్టింగ్, డిప్లాయ్‌మెంట్), గిట్ బ్రాంచింగ్, K8s కంట్రోల్ ప్లేన్ మరియు పాడ్ ఆర్కెస్ట్రేషన్.',
        summaryEnglish: 'Clean pipeline stage architecture diagrams, Kubernetes Pod lifecycle, and blue-green vs canary zero-downtime deployment strategies.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'CI/CD Pipeline Stages & Automation',
            quickTake: 'Automates software delivery from code commit to production release with quality gates.',
            keyPoints: [
              'Continuous Integration (CI): Developers merge code frequently into main branch; automated builds and unit tests verify changes.',
              'Continuous Delivery: Code passes automated integration tests and is automatically prepared for release to staging/production.',
              'Continuous Deployment: Every change that passes all stages of production pipeline is released directly to customers without manual approval.',
              'Deployment strategies: Blue-Green (instant traffic switchover), Canary (gradual traffic percentage rollout).'
            ],
            formulaOrEquation: 'CI/CD = Code -> Build -> Test -> Package -> Deploy -> Monitor'
          },
          {
            topic: 'Kubernetes (K8s) Architecture & Pods',
            quickTake: 'Open-source container orchestration platform automating deployment, scaling, and management.',
            keyPoints: [
              'Pod: Smallest deployable computing unit in Kubernetes containing one or more tightly coupled containers.',
              'Control Plane: kube-apiserver (REST gateway), etcd (consistent key-value store), kube-scheduler (assigns pods to nodes), kube-controller-manager.',
              'Worker Node: kubelet (ensures containers are running in Pod), kube-proxy (network rules and load balancing).',
              'Self-healing: K8s automatically restarts failed containers and reschedules pods when nodes die.'
            ],
            formulaOrEquation: 'Control Plane (API, etcd, Scheduler) ⟷ Worker Nodes (Kubelet, Kube-proxy, Pods)'
          }
        ],
        mindmap: {
          center: 'DevOps & Kubernetes',
          branches: [
            {
              title: '1. DevOps Principles',
              subtopics: ['Collaboration between Dev and Ops', 'Infrastructure as Code (IaC)', 'Microservices architecture', 'Feedback loops & monitoring'],
              examTip: 'DevOps aims to shorten systems development life cycle and provide continuous high software quality.',
              color: 'blue'
            },
            {
              title: '2. CI/CD Pipeline',
              subtopics: ['Automated test execution', 'Build artifacts packaging (JAR, Docker image)', 'Deployment environments (Dev, Staging, Prod)', 'Rollback strategies'],
              examTip: 'Continuous Delivery requires manual approval to deploy to prod; Continuous Deployment is fully automated.',
              color: 'purple'
            },
            {
              title: '3. Kubernetes Architecture',
              subtopics: ['Control plane components (API server, etcd)', 'Worker node kubelet & kube-proxy', 'Pod definition & YAML manifests', 'Services: ClusterIP, NodePort, LoadBalancer'],
              examTip: 'etcd is the single source of truth for Kubernetes cluster state.',
              color: 'emerald'
            },
            {
              title: '4. Deployment Strategies',
              subtopics: ['Rolling update (incremental replacement)', 'Blue-Green (instant zero downtime)', 'Canary release (percentage traffic split)', 'A/B testing user experience'],
              examTip: 'Blue-Green requires double the hardware resources during release switchover.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];

// Helper to generate college subjects for all institutions and branches
const COLLEGES_LIST: InstitutionId[] = ['gvp', 'gitam', 'anits', 'raghu', 'au'];

export const ALL_COLLEGE_YEARS_SUBJECTS: Subject[] = [];

// Populate cross-matrix for all colleges and branches with accurate team/branch mapping
COLLEGES_LIST.forEach((colId) => {
  let reg = 'R20';
  if (colId === 'gvp') reg = 'GVP Autonomous (R20/R23)';
  else if (colId === 'gitam') reg = 'GITAM Deemed Univ (R21/R24)';
  else if (colId === 'anits') reg = 'ANITS Autonomous (R20)';
  else if (colId === 'raghu') reg = 'Raghu Autonomous (R20)';
  else if (colId === 'au') reg = 'AUCOE Campus (R21)';

  // 1. Map Common 1st Year Subjects to ALL branches
  BASE_COLLEGE_YEARS_SUBJECTS.filter(s => s.collegeYear === '1st-year').forEach((sub) => {
    const allBranches: GradeOrBranchId[] = ['cse', 'csm', 'it', 'ece', 'eee', 'mech'];
    allBranches.forEach((branchId) => {
      ALL_COLLEGE_YEARS_SUBJECTS.push({
        ...sub,
        id: `${colId}-${branchId}-${sub.id}`,
        institutionId: colId,
        gradeOrBranch: branchId,
        regulationOrBoard: reg,
      });
    });
  });

  // 2. Map CSE Core Subjects (2nd, 3rd, 4th Year) strictly to CSE branch
  BASE_COLLEGE_YEARS_SUBJECTS.filter(s => s.collegeYear !== '1st-year').forEach((sub) => {
    ALL_COLLEGE_YEARS_SUBJECTS.push({
      ...sub,
      id: `${colId}-cse-${sub.id}`,
      institutionId: colId,
      gradeOrBranch: 'cse',
      regulationOrBoard: reg,
    });
  });

  // 3. Map Branch-Specific Core Subjects (ECE, EEE, MECH, CSM, IT) directly and exclusively to their designated branches
  const ALL_BRANCH_SUBJECTS = [...BRANCH_SPECIFIC_SUBJECTS, ...EXTRA_BRANCH_SUBJECTS];
  ALL_BRANCH_SUBJECTS.forEach((sub) => {
    ALL_COLLEGE_YEARS_SUBJECTS.push({
      ...sub,
      id: `${colId}-${sub.gradeOrBranch}-${sub.id}`,
      institutionId: colId,
      regulationOrBoard: reg,
    });
  });
});

