import { Institution, GradeOrBranch, Subject, InstitutionId } from '../types';
import { CBSE_REVISION_SUBJECTS } from './cbseNotesIndex';
import { ALL_COLLEGE_YEARS_SUBJECTS } from './collegeYearsData';

export const INSTITUTIONS: Institution[] = [
  // --- PREMIER VIZAG SCHOOLS ---
  {
    id: 'vvs',
    category: 'school',
    name: 'Visakha Valley School',
    fullName: 'Visakha Valley School (CBSE Affiliated)',
    location: 'Kailasagiri Hill Road, Yendada, Visakhapatnam',
    type: 'CBSE Affiliated • Est. 1968',
    boardOrRegulations: ['CBSE 2024-25 (Rationalized)', 'CBSE Board'],
    bannerBadge: 'Premier CBSE Institution in Vizag',
    gradesOrBranches: ['Class 10 (Board)', 'Class 9 (CBSE)', 'Class 8 (CBSE)', 'Class 12 Science', 'Class 11']
  },
  {
    id: 'timpany',
    category: 'school',
    name: 'Timpany School',
    fullName: 'Timpany Senior Secondary School',
    location: 'CBM Compound, Asilmetta, Visakhapatnam',
    type: 'ICSE / ISC & CBSE • Est. 1931',
    boardOrRegulations: ['CBSE 2024-25', 'ICSE Board'],
    bannerBadge: 'Heritage Anglo-Indian Institution',
    gradesOrBranches: ['Class 10', 'Class 9', 'Class 8', 'Class 12']
  },
  {
    id: 'dps',
    category: 'school',
    name: 'DPS Visakhapatnam',
    fullName: 'Delhi Public School (DPS), Steel Plant Township',
    location: 'Sector 8, Ukkunagaram, Visakhapatnam',
    type: 'CBSE Affiliated • VSP Township',
    boardOrRegulations: ['CBSE 2024-25'],
    bannerBadge: 'Steel Plant Campus Excellence',
    gradesOrBranches: ['Class 10', 'Class 9', 'Class 8', 'Class 12 Science']
  },
  {
    id: 'ncs',
    category: 'school',
    name: 'Navy Children School',
    fullName: 'Navy Children School (NCS), Visakhapatnam',
    location: '104 Area & Nausena Baugh, Gandhigram, Vizag',
    type: 'CBSE Affiliated • Eastern Naval Command',
    boardOrRegulations: ['CBSE 2024-25'],
    bannerBadge: 'Eastern Naval Command Premier School',
    gradesOrBranches: ['Class 10', 'Class 9', 'Class 8', 'Class 12 Science']
  },
  {
    id: 'sssvv',
    category: 'school',
    name: 'Sri Sathya Sai Vidya Vihar',
    fullName: 'Sri Sathya Sai Vidya Vihar, MVP Colony',
    location: 'Sector 8, MVP Colony, Visakhapatnam',
    type: 'CBSE Affiliated • Est. 1985',
    boardOrRegulations: ['CBSE 2024-25'],
    bannerBadge: 'Value-Based CBSE Education',
    gradesOrBranches: ['Class 10', 'Class 9', 'Class 8']
  },

  // --- ENGINEERING & DEGREE COLLEGES ---
  {
    id: 'gvp',
    category: 'college',
    name: 'GVPCOE',
    fullName: 'Gayatri Vidya Parishad College of Engineering (Autonomous)',
    location: 'Madhurawada, Visakhapatnam',
    type: 'Autonomous • NBA Tier-1',
    boardOrRegulations: ['R23', 'R20', 'R19'],
    bannerBadge: 'Top Ranked Autonomous in Vizag',
    gradesOrBranches: ['CSE', 'CSM', 'IT', 'ECE', 'EEE', 'MECH']
  },
  {
    id: 'gitam',
    category: 'college',
    name: 'GITAM',
    fullName: 'GITAM Deemed to be University, Visakhapatnam Campus',
    location: 'Rushikonda Beach Road, Visakhapatnam',
    type: 'Deemed University • NAAC A++',
    boardOrRegulations: ['G23', 'G21'],
    bannerBadge: 'Deemed University',
    gradesOrBranches: ['CSE', 'CSM', 'IT', 'ECE']
  },
  {
    id: 'anits',
    category: 'college',
    name: 'ANITS',
    fullName: 'Anil Neerukonda Institute of Technology & Sciences',
    location: 'Sangivalasa, Bheemunipatnam, Visakhapatnam',
    type: 'Autonomous • Affiliated to AU',
    boardOrRegulations: ['R23', 'R20'],
    bannerBadge: 'AU Affiliated Autonomous',
    gradesOrBranches: ['CSE', 'IT', 'ECE', 'EEE']
  },
  {
    id: 'raghu',
    category: 'college',
    name: 'Raghu',
    fullName: 'Raghu Engineering College (Autonomous)',
    location: 'Dakamarri, Bheemili Mandal, Visakhapatnam',
    type: 'Autonomous • NBA Accredited',
    boardOrRegulations: ['R23', 'R20'],
    bannerBadge: 'Autonomous College',
    gradesOrBranches: ['CSE', 'CSM', 'ECE']
  },
  {
    id: 'au',
    category: 'college',
    name: 'AU Engineering',
    fullName: 'Andhra University College of Engineering (AUCOE)',
    location: 'Waltair Uplands, Visakhapatnam',
    type: 'State University Campus',
    boardOrRegulations: ['AU-R23', 'AU-R21'],
    bannerBadge: 'Historic Premier University',
    gradesOrBranches: ['CSE', 'ECE', 'EEE', 'MECH']
  }
];

export const GRADES_AND_BRANCHES: GradeOrBranch[] = [
  // School Grades (CBSE Rationalized Syllabus)
  { id: 'class10', name: 'Class 10 (CBSE Board Exam)', code: 'Class 10', category: 'school' },
  { id: 'class9', name: 'Class 9 (CBSE Rationalized)', code: 'Class 9', category: 'school' },
  { id: 'class8', name: 'Class 8 (CBSE Rationalized)', code: 'Class 8', category: 'school' },

  // College Branches
  { id: 'cse', name: 'Computer Science & Engineering', code: 'CSE', category: 'college' },
  { id: 'csm', name: 'CSE (AI & Machine Learning)', code: 'CSM', category: 'college' },
  { id: 'it', name: 'Information Technology', code: 'IT', category: 'college' },
  { id: 'ece', name: 'Electronics & Communication', code: 'ECE', category: 'college' },
  { id: 'eee', name: 'Electrical & Electronics', code: 'EEE', category: 'college' },
  { id: 'mech', name: 'Mechanical Engineering', code: 'MECH', category: 'college' }
];

const COLLEGE_SUBJECTS: Subject[] = [
  // ==========================================
  // COLLEGE: GVPCOE - DATA STRUCTURES & ALGORITHMS (R20)
  // ==========================================
  {
    id: 'ds-gvp-r20',
    code: '20CS1104',
    name: 'Data Structures & Algorithms',
    semesterOrGrade: 'Semester 3',
    creditsOrMarks: '3 Credits',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R20',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    units: [
      {
        unitNumber: 1,
        title: 'Linear Data Structures: Arrays & Linked Lists',
        keyTopics: [
          'Abstract Data Types (ADT)',
          'Singly, Doubly, and Circular Linked Lists',
          'Polynomial representation and addition using Linked Lists',
          'Time & Space Complexity analysis (Big-O, Omega, Theta)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'K. Sravan (9.4 CGPA)',
        verifiedRole: 'GVPCOE CSE 2024 Batch Topper',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.9,
        upvotes: 342,
        videoDuration: '3m 45s',
        summaryTelugu: 'లీనియర్ డేటా స్ట్రక్చర్స్: సింగిల్, డబుల్ లింక్డ్ లిస్టుల పాయింటర్ అల్గారిథమ్స్ మరియు పాలీనామియల్ ఎడిషన్ కాన్సెప్టులు.',
        summaryEnglish: 'Complete breakdown of pointer manipulations for singly and doubly linked lists, with edge-case null handling.',
        examWeightage: '14 Marks (Mid-1 & Sem)',
        formulaeCount: 6,
        solvedQuestionsCount: 8,
        topicAtAGlance: [
          {
            topic: 'Pointers & Dynamic Memory in Linked Lists',
            definition: 'A linked list is a linear collection of data elements called nodes, where linear order is determined not by physical address in memory but by self-referential pointers stored inside each node dynamically allocated on the system heap.',
            detailedExplanation: 'Unlike contiguous static arrays, linked lists allow for instantaneous O(1) insertions and deletions at the head without memory shifting. Each node encapsulates a data payload and one or two reference pointers (next and prev in doubly linked lists). Dynamic memory allocation via malloc/calloc in C or the new operator in C++/Java manages node lifetimes. Traversal requires sequential pointer following from the head pointer, resulting in O(n) search time and lack of random access.',
            quickTake: 'Nodes allocated on heap with data and next pointer; eliminates static array size limitations.',
            keyPoints: [
              'Singly linked list: node contains data and *next pointer.',
              'Doubly linked list: node contains *prev, data, and *next for bi-directional traversal.',
              'Insertion at head: O(1); Traversal/Search: O(n).'
            ],
            formulaOrEquation: 'T(n) = O(1) prepend, O(n) search'
          },
          {
            topic: 'Asymptotic Analysis & Growth of Functions',
            definition: 'Asymptotic analysis is the mathematical evaluation of algorithm runtime and space consumption as input size n approaches infinity, establishing mathematical upper (O), lower (Ω), and tight bounds (Θ) independent of hardware or compiler variations.',
            detailedExplanation: 'Big-O notation establishes a formal worst-case ceiling: f(n) = O(g(n)) if there exist positive constants c and n0 such that 0 <= f(n) <= c*g(n) for all n >= n0. Big-Omega (Ω) guarantees the theoretical best-case floor, while Big-Theta (Θ) defines the exact asymptotic envelope where upper and lower growth rates coincide. This analysis allows software engineers to predict scalability, memory churn, and time limits prior to system deployment.',
            quickTake: 'Big-O describes upper bound, Omega describes lower bound, Theta describes tight bound.',
            keyPoints: [
              'Big-O (Worst-case): f(n) <= c * g(n) for all n >= n0.',
              'Omega (Best-case): f(n) >= c * g(n) for all n >= n0.',
              'Theta (Average/Tight): c1 * g(n) <= f(n) <= c2 * g(n).'
            ],
            formulaOrEquation: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)'
          },
          {
            topic: 'Polynomial Representation via Linked Lists',
            definition: 'Polynomial representation using linked lists is a dynamic data modeling technique where each non-zero polynomial term an*x^n is stored as an individual node consisting of a coefficient field, an exponent field, and a pointer to the subsequent decreasing term.',
            detailedExplanation: 'Sparse polynomials (e.g., 5x^1000 + 3) waste immense space if modeled using traditional index-based arrays. Linked list representation stores only non-zero terms in descending order of exponents. Polynomial addition is achieved in O(m + n) time by simultaneously traversing two list pointers, comparing exponents, summing coefficients if exponents match, or splicing the higher degree node first.',
            quickTake: 'Each term represented as a node with coefficient, exponent, and next link pointer.',
            keyPoints: [
              'Adding polynomials compares exponents: if equal, sum coefficients; otherwise insert larger exponent first.',
              'Saves substantial memory over sparse arrays of high degrees.'
            ],
            formulaOrEquation: 'Node = { float coeff; int expo; struct Node* next; }'
          }
        ],
        mindmap: {
          center: 'Linked Lists & Arrays',
          branches: [
            {
              title: '1. Arrays vs Lists',
              subtopics: ['Contiguous vs Non-contiguous memory', 'Cache locality advantages of arrays', 'Dynamic resizing and pointer overhead'],
              examTip: 'State 3 advantages and disadvantages in university mid-1.',
              color: 'blue'
            },
            {
              title: '2. Node Operations',
              subtopics: ['Insertion (Head, Tail, Middle)', 'Deletion corner cases (single node, empty list)', 'List reversal iterative & recursive'],
              examTip: 'Always check if head == NULL or target node is tail before dereferencing ->next.',
              color: 'purple'
            },
            {
              title: '3. Doubly & Circular Lists',
              subtopics: ['Two-way pointer navigation', 'Circular termination condition (temp->next != head)', 'Josephus problem application'],
              examTip: 'In circular linked list, the last node links back to first node (no NULL pointer).',
              color: 'emerald'
            },
            {
              title: '4. Complexity Bounds',
              subtopics: ['Big-O upper bound', 'Big-Omega lower bound', 'Theta tight bound', 'Space complexity heap vs stack'],
              examTip: 'Write mathematical definitions of Big-O and Omega with constants c and n0.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Stacks & Queues: Applications & Variations',
        keyTopics: [
          'Stack ADT and Array/Linked List implementations',
          'Infix to Postfix conversion and Evaluation',
          'Queue, Circular Queue, and Deque operations',
          'Priority Queues and applications in OS scheduling'
        ],
        readingTime: '19 mins',
        verifiedBy: 'M. Divya (9.6 CGPA)',
        verifiedRole: 'GVPCOE CSE Gold Medalist',
        pdfPages: 16,
        fileSize: '1.9 MB',
        rating: 4.95,
        upvotes: 418,
        videoDuration: '4m 10s',
        summaryTelugu: 'స్టాక్ మరియు క్యూస్: ఇన్ఫిక్స్ నుండి పోస్ట్ఫిక్స్ కన్వర్షన్ టేబుల్, సర్క్యులర్ క్యూ కండిషన్స్.',
        summaryEnglish: 'Clean operator precedence tables, stack frame trace diagrams, and circular queue boundary conditions.',
        examWeightage: '14 Marks (Mid-1)',
        formulaeCount: 4,
        solvedQuestionsCount: 10,
        topicAtAGlance: [
          {
            topic: 'Stack ADT (LIFO Principle)',
            quickTake: 'Last In, First Out data structure; elements inserted and deleted from the top only.',
            keyPoints: [
              'Push: Overflow when top == MAX - 1; Pop: Underflow when top == -1.',
              'Applications: Function call stack, recursion, backtracking, undo/redo buffers.',
              'Infix to Postfix: Stack holds operators based on precedence; operands sent directly to output.'
            ],
            formulaOrEquation: 'LIFO: Push() -> top++; Pop() -> top--; Both O(1) operations'
          },
          {
            topic: 'Queue & Circular Queue (FIFO Principle)',
            quickTake: 'First In, First Out; elements enqueued at rear and dequeued from front.',
            keyPoints: [
              'Linear Queue limitation: False overflow occurs when rear == MAX - 1 even if space is free at front.',
              'Circular Queue solution: Wrap around using modulo arithmetic.',
              'Circular Queue conditions: Full when (rear + 1) % MAX == front; Empty when front == -1.'
            ],
            formulaOrEquation: 'Circular Queue: rear = (rear + 1) % MAX; front = (front + 1) % MAX'
          },
          {
            topic: 'Double Ended Queue (Deque) & Priority Queues',
            quickTake: 'Deques permit insertion and deletion at both ends; Priority Queues dequeue based on key priority.',
            keyPoints: [
              'Input-restricted Deque: Insertion at one end, deletion at both ends.',
              'Output-restricted Deque: Insertion at both ends, deletion at one end.',
              'Priority Queue: Implemented efficiently using Binary Min/Max Heaps in O(log n).'
            ],
            formulaOrEquation: 'Priority Queue Heap: Insert O(log n), Extract-Min/Max O(log n)'
          }
        ],
        mindmap: {
          center: 'Stacks & Queues',
          branches: [
            {
              title: '1. Stack Core & ADT',
              subtopics: ['LIFO principle', 'Push / Pop / Peek operations', 'Array vs Linked List implementation', 'Overflow & Underflow checks'],
              examTip: 'Draw stack frames for recursive Fibonacci to illustrate call overhead.',
              color: 'blue'
            },
            {
              title: '2. Stack Applications',
              subtopics: ['Infix to Postfix conversion', 'Postfix evaluation using operand stack', 'Parenthesis balancing', 'Tower of Hanoi puzzle'],
              examTip: 'Tabulate columns: Symbol Scanned, Stack Contents, Postfix Expression.',
              color: 'purple'
            },
            {
              title: '3. Queue Variants',
              subtopics: ['Linear Queue false overflow', 'Circular Queue modulo arithmetic', 'Double Ended Queue (Deque)', 'Priority Queue'],
              examTip: 'Derive why Circular Queue requires (rear + 1) % size == front.',
              color: 'emerald'
            },
            {
              title: '4. System Implementations',
              subtopics: ['CPU process scheduling queues', 'Spooling in printers', 'Breadth-First Search (BFS) graph traversal', 'Memory buffer cache'],
              examTip: 'BFS uses Queue; DFS uses Stack/Recursion.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Non-Linear Structures: Trees & Binary Search Trees',
        keyTopics: [
          'Binary Tree properties and recursive traversals (In, Pre, Post)',
          'Binary Search Tree (BST) insertion, deletion, and search',
          'AVL Trees: Single and Double rotations (LL, RR, LR, RL)',
          'B-Trees and B+ Trees introduction for file systems'
        ],
        readingTime: '28 mins',
        verifiedBy: 'P. Sai Teja (9.2 CGPA)',
        verifiedRole: 'ANITS Autonomous Ranker',
        pdfPages: 24,
        fileSize: '3.1 MB',
        rating: 4.88,
        upvotes: 520,
        videoDuration: '5m 20s',
        summaryTelugu: 'ట్రీస్ మరియు బైనరీ సెర్చ్ ట్రీ: ఇన్-ఆర్డర్, ప్రీ-ఆర్డర్ ట్రావర్సల్స్, AVL రొటేషన్స్ (LL, RR, LR, RL) సాల్వ్ చేయబడ్డాయి.',
        summaryEnglish: 'High-frequency exam topic! Step-by-step visual tree balancing with AVL rotation cheatsheet and recursive deletion cases.',
        examWeightage: '16 Marks (Mid-2 & Sem)',
        formulaeCount: 8,
        solvedQuestionsCount: 12,
        topicAtAGlance: [
          {
            topic: 'Binary Tree Traversal Orders',
            quickTake: 'Hierarchical navigation visiting every node exactly once in Preorder, Inorder, or Postorder.',
            keyPoints: [
              'Preorder (Root, Left, Right): Prefix expressions, cloning trees.',
              'Inorder (Left, Root, Right): Produces sorted ascending output in a Binary Search Tree (BST).',
              'Postorder (Left, Right, Root): Postfix expressions, node deletion / freeing memory.'
            ],
            formulaOrEquation: 'Max nodes at level i = 2ⁱ; Max nodes in tree of height h = 2^(h+1) - 1'
          },
          {
            topic: 'Binary Search Tree (BST) Operations',
            quickTake: 'Node property: all keys in left subtree < root key < all keys in right subtree.',
            keyPoints: [
              'Search/Insert: Average O(log n); Worst-case O(n) in skewed trees.',
              'Deletion cases: 1) Leaf node (delete directly), 2) One child (link parent to child), 3) Two children (replace with Inorder Successor or Predecessor).'
            ],
            formulaOrEquation: 'Inorder Successor = Smallest key in right subtree'
          },
          {
            topic: 'AVL Trees & Self-Balancing Rotations',
            quickTake: 'Height-balanced BST where Balance Factor BF = height(Left) - height(Right) is in {-1, 0, +1}.',
            keyPoints: [
              'LL Rotation: Right rotate when insertion is in left child of left subtree (BF = +2).',
              'RR Rotation: Left rotate when insertion is in right child of right subtree (BF = -2).',
              'LR Rotation: Left-rotate on child, then Right-rotate on parent (Double rotation).',
              'RL Rotation: Right-rotate on child, then Left-rotate on parent (Double rotation).'
            ],
            formulaOrEquation: 'BF = h(Left) - h(Right) ∈ {-1, 0, 1} | Guarantees O(log n) height'
          }
        ],
        mindmap: {
          center: 'Binary Trees & AVL',
          branches: [
            {
              title: '1. Binary Tree Basics',
              subtopics: ['Degree, Depth, Height definitions', 'Full, Complete & Perfect Binary Trees', 'Array representation (2i+1, 2i+2)', 'Recursive traversals (In, Pre, Post)'],
              examTip: 'Remember Inorder traversal of BST always produces strictly ascending sorted order.',
              color: 'blue'
            },
            {
              title: '2. BST Operations',
              subtopics: ['Search logic key comparisons', 'Insertion algorithm', 'Deletion: 0 child, 1 child, 2 children', 'Inorder successor finding'],
              examTip: 'When node has 2 children, replace with min in right subtree or max in left subtree.',
              color: 'purple'
            },
            {
              title: '3. AVL Balancing',
              subtopics: ['Balance factor BF = h(L) - h(R)', 'Single rotations (LL, RR)', 'Double rotations (LR, RL)', 'Rebalancing after insert/delete'],
              examTip: 'Draw node before rotation, show unbalanced pivot, and clearly draw state after rotation.',
              color: 'emerald'
            },
            {
              title: '4. Multi-way Trees',
              subtopics: ['B-Tree order m definition', 'B+ Tree leaf-linked indices', 'Applications in RDBMS disk page indexing', 'Disk I/O minimization'],
              examTip: 'B+ trees store actual record pointers only in leaf nodes, linked sequentially.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // COLLEGE: GVPCOE - ENGINEERING PHYSICS (R23)
  // ==========================================
  {
    id: 'ep-gvp-r23',
    code: '23BS1102',
    name: 'Engineering Physics',
    semesterOrGrade: 'Semester 1',
    creditsOrMarks: '3 Credits',
    gradeOrBranch: 'cse',
    institutionId: 'gvp',
    regulationOrBoard: 'R23',
    category: 'Basic Science',
    collegeYear: '1st-year',
    units: [
      {
        unitNumber: 1,
        title: 'Wave Optics: Interference & Diffraction',
        keyTopics: [
          'Interference in thin films by reflection',
          'Newton\'s Rings experiment: Determination of wavelength & refractive index',
          'Fraunhofer diffraction at single slit and double slit',
          'Diffraction grating and resolving power'
        ],
        readingTime: '24 mins',
        verifiedBy: 'Dr. N. Ramana Murthy',
        verifiedRole: 'Senior Physics Academician, Vizag',
        pdfPages: 20,
        fileSize: '3.4 MB',
        rating: 4.9,
        upvotes: 610,
        videoDuration: '4m 30s',
        summaryTelugu: 'వేవ్ ఆప్టిక్స్: న్యూటన్స్ రింగ్స్ డెరివేషన్, థిన్ ఫిల్మ్ ఇంటర్‌ఫెరెన్స్ మరియు డైఫ్రాక్షన్ గ్రేటింగ్ ప్రాబ్లెమ్స్.',
        summaryEnglish: 'Derivation for diameter of dark rings in Newton\'s rings, optical path difference conditions, and numericals.',
        examWeightage: '14 Marks (Mid-1)',
        formulaeCount: 9,
        solvedQuestionsCount: 11,
        topicAtAGlance: [
          {
            topic: 'Interference in Thin Films (Reflection)',
            quickTake: 'Constructive or destructive superposition of light waves reflected from top and bottom boundaries of thin film.',
            keyPoints: [
              'Optical path difference Δ = 2μt cos(r) ± λ/2 (Stokes law: λ/2 phase shift upon denser medium reflection).',
              'Constructive (Bright fringe): 2μt cos(r) = (2n + 1)λ/2.',
              'Destructive (Dark fringe): 2μt cos(r) = nλ.'
            ],
            formulaOrEquation: 'Bright: 2μt cos(r) = (2n - 1)λ/2 | Dark: 2μt cos(r) = nλ'
          },
          {
            topic: 'Newton\'s Rings Experiment',
            quickTake: 'Circular fringes formed by wedge-shaped air film between planoconvex lens and optical glass plate.',
            keyPoints: [
              'Central spot is DARK in reflected light due to λ/2 phase change at air-glass interface.',
              'Diameter of nth dark ring: D_n² = 4n R λ.',
              'Wavelength determination: λ = (D_(n+p)² - D_n²) / (4 p R).'
            ],
            formulaOrEquation: 'λ = (D_(n+p)² - D_n²) / (4 p R) | Refractive Index μ = (D²_air) / (D²_liquid)'
          },
          {
            topic: 'Fraunhofer Diffraction & Grating',
            quickTake: 'Diffraction where incident and diffracted wavefronts are planar (source and screen at infinity using lenses).',
            keyPoints: [
              'Single Slit: Minima condition a sin(θ) = ±mλ; Central maximum width = 2λf / a.',
              'Diffraction Grating: (a + b) sin(θ) = nλ, where (a+b) is grating element and N = 1/(a+b) lines per inch/cm.',
              'Resolving Power of Grating = λ / dλ = n * N.'
            ],
            formulaOrEquation: '(a + b) sin(θ) = nλ | Resolving Power = n * N'
          }
        ],
        mindmap: {
          center: 'Wave Optics',
          branches: [
            {
              title: '1. Interference in Thin Films',
              subtopics: ['Division of amplitude', 'Path difference Δ = 2μt cos r ± λ/2', 'Stokes treatment phase change', 'Colors in thin soap bubbles'],
              examTip: 'Don\'t forget to add/subtract λ/2 for reflection from a denser surface.',
              color: 'blue'
            },
            {
              title: '2. Newton\'s Rings',
              subtopics: ['Experimental setup & microscope', 'Dark central spot proof', 'Diameter of bright & dark rings', 'Wavelength & refractive index determination'],
              examTip: 'Show graph of D_n² vs n is a straight line passing through origin.',
              color: 'purple'
            },
            {
              title: '3. Fraunhofer Single Slit',
              subtopics: ['Plane wavefront diffraction', 'Central maxima intensity', 'Secondary minima condition a sin θ = mλ', 'Double slit interference + diffraction'],
              examTip: 'Derive intensity formula I = I0 * (sin α / α)².',
              color: 'emerald'
            },
            {
              title: '4. Diffraction Grating',
              subtopics: ['Grating element (a + b)', 'Principal maxima conditions', 'Dispersive power dθ/dλ', 'Rayleigh criterion for resolution'],
              examTip: 'Resolving power R = λ/dλ = nN where n is order and N is total ruled lines.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Lasers & Fiber Optics',
        keyTopics: [
          'Characteristics of Lasers: Coherence, Directionality, Monochromaticity',
          'Einstein\'s coefficients and their physical significance',
          'Ruby Laser and He-Ne Laser constructions & energy level diagrams',
          'Optical Fiber: Acceptance angle, Numerical Aperture, and Attenuation'
        ],
        readingTime: '26 mins',
        verifiedBy: 'B. Karthik (9.7 CGPA)',
        verifiedRole: 'GVPCOE ECE Batch Topper',
        pdfPages: 22,
        fileSize: '3.8 MB',
        rating: 4.96,
        upvotes: 840,
        videoDuration: '5m 15s',
        summaryTelugu: 'లేజర్స్ & ఫైబర్ ఆప్టిక్స్: రూబీ లేజర్, హీలియం-నియాన్ లేజర్ వర్కింగ్ డయాగ్రమ్స్ మరియు న్యూమరికల్ అపెర్చర్ డెరివేషన్.',
        summaryEnglish: 'Most scored unit! Clean hand-drawn labeled diagrams for He-Ne laser transitions and fiber optic signal transmission.',
        examWeightage: '16 Marks (Mid-1 & Sem)',
        formulaeCount: 11,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Laser Fundamentals & Einstein Coefficients',
            quickTake: 'Light Amplification by Stimulated Emission of Radiation producing coherent, monochromatic, directional photons.',
            keyPoints: [
              'Stimulated Emission: Incident photon induces an excited atom to emit an identical photon of same energy, phase, and direction.',
              'Einstein relations: A21 / B21 = 8πhν³ / c³; B12 = B21.',
              'Population Inversion: Condition where number of atoms in excited state N2 > ground state N1 (achieved via optical/electrical pumping in metastable states).'
            ],
            formulaOrEquation: 'Rate of Stimulated Emission = B21 * N2 * ρ(ν) | A21 / B21 = 8πhν³ / c³'
          },
          {
            topic: 'Ruby Laser & He-Ne Laser Systems',
            quickTake: 'Ruby is a 3-level pulsed solid-state laser (694.3 nm); He-Ne is a 4-level continuous gas laser (632.8 nm).',
            keyPoints: [
              'Ruby Laser: Al2O3 doped with 0.05% Cr³⁺ ions; Xenon flash tube pumping; 3-level system requiring heavy pumping.',
              'He-Ne Laser: Mixture ratio 10:1 (He:Ne); Electric discharge pumping; Helium transfers energy by collision to Neon 2s and 3s levels -> 632.8 nm red output.'
            ],
            formulaOrEquation: 'Ruby: λ = 694.3 nm (Red pulsed) | He-Ne: λ = 632.8 nm (Red continuous)'
          },
          {
            topic: 'Optical Fibers & Numerical Aperture',
            quickTake: 'Light guided through core by Total Internal Reflection (TIR) because core refractive index n1 > cladding n2.',
            keyPoints: [
              'Critical Angle: θc = sin⁻¹(n2 / n1).',
              'Acceptance Angle: θ0 = sin⁻¹(√(n1² - n2²)). Maximum launch angle for light to be guided.',
              'Numerical Aperture (NA): NA = sin(θ0) = √(n1² - n2²) = n1 * √(2Δ), where Δ = (n1 - n2)/n1.'
            ],
            formulaOrEquation: 'NA = √(n1² - n2²) | Acceptance Angle θ0 = sin⁻¹(NA)'
          }
        ],
        mindmap: {
          center: 'Lasers & Fiber Optics',
          branches: [
            {
              title: '1. Laser Principles',
              subtopics: ['Spontaneous vs Stimulated emission', 'Einstein A & B coefficients derivation', 'Population inversion & Metastable states', 'Optical resonator cavities'],
              examTip: 'Show ratio A21/B21 is proportional to cube of frequency ν³.',
              color: 'blue'
            },
            {
              title: '2. Gas & Solid Lasers',
              subtopics: ['Ruby 3-level pulsed laser', 'He-Ne 4-level continuous gas laser', 'Resonant energy transfer in He-Ne', 'Semiconductor laser diodes'],
              examTip: 'Always draw clear 4-level energy diagram with Neon 3s -> 2p 632.8 nm transition.',
              color: 'purple'
            },
            {
              title: '3. Fiber Structure & TIR',
              subtopics: ['Core, Cladding & Buffer coating', 'Total internal reflection condition', 'Step-index vs Graded-index (GRIN) fiber', 'Single-mode vs Multi-mode fibers'],
              examTip: 'Derive Numerical Aperture NA = √(n1² - n2²) step-by-step using Snell\'s law.',
              color: 'emerald'
            },
            {
              title: '4. Fiber Signal Loss',
              subtopics: ['Attenuation coefficient α = (10/L) log(Pin/Pout)', 'Absorption (intrinsic & impurity)', 'Rayleigh scattering loss ~ 1/λ⁴', 'Intermodal & intramodal dispersion'],
              examTip: 'Graded-index fiber minimizes intermodal dispersion via parabolic refractive index profile.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];

// Base CBSE Curriculum for Schools (Simplified Revision Notes)
const BASE_SCHOOL_SUBJECTS: Subject[] = [
  ...CBSE_REVISION_SUBJECTS,
];

// All Vizag CBSE schools share the exact same CBSE Rationalized Syllabus
const SCHOOL_IDS: InstitutionId[] = ['vvs', 'timpany', 'dps', 'ncs', 'sssvv'];
export const ALL_INSTITUTION_SCHOOL_SUBJECTS: Subject[] = [];

SCHOOL_IDS.forEach((schoolId) => {
  BASE_SCHOOL_SUBJECTS.forEach((sub) => {
    ALL_INSTITUTION_SCHOOL_SUBJECTS.push({
      ...sub,
      id: `${schoolId}-${sub.id.replace(/^(vvs|timpany|dps|ncs|sssvv)-/, '')}`,
      institutionId: schoolId,
    });
  });
});

// Combine all School (Class 10, 9, 8) and College 4-Year Subjects
export const SAMPLE_SUBJECTS: Subject[] = [
  ...ALL_INSTITUTION_SCHOOL_SUBJECTS,
  ...COLLEGE_SUBJECTS,
  ...ALL_COLLEGE_YEARS_SUBJECTS
];

// Helper export to preserve backwards compatibility where needed
export const COLLEGES = INSTITUTIONS;
export const BRANCHES = GRADES_AND_BRANCHES;
