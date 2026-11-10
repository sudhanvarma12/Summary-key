import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const COLLEGE_AND_AI_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. DATA STRUCTURES: STACKS AND QUEUES
  // ==========================================
  {
    titleMatcher: 'stacks and queues',
    topics: [
      {
        topic: '1. Stack Abstract Data Type (LIFO)',
        inBrief: 'A Stack is a linear data structure following the Last-In, First-Out (LIFO) principle, where insertions and deletions happen exclusively at the top.',
        definition: 'A Stack is a linear abstract data type (ADT) characterized by restricted access governed strictly by the Last-In, First-Out (LIFO) protocol, permitting push, pop, and peek operations exclusively at the top index.',
        detailedExplanation: 'A stack mirrors a stack of cafeteria dinner plates: the plate placed on top last is the first plate picked up. Primary operations: 1) push(x): Inserts element x at top (checks for Stack Overflow if array-based). 2) pop(): Removes and returns top element (checks for Stack Underflow if top == -1). 3) peek() / top(): Inspects top element without removal. 4) isEmpty(): Evaluates boolean stack emptiness. All primary stack operations execute in strictly O(1) constant time.',
        quickTake: 'LIFO structure; push and pop operate at the top in O(1) time; overflow when full, underflow when empty.',
        keyPoints: [
          'Time Complexity: push, pop, peek all operate in O(1) constant time.',
          'Array implementation: Stack overflow occurs when top == MAX - 1.',
          'Linked implementation: Stack is unbounded; underflow occurs when top == NULL.'
        ],
        formulaOrEquation: 'Top Index Update: push ⟹ top = top + 1 | pop ⟹ top = top - 1'
      },
      {
        topic: '2. Stack Applications: Infix to Postfix & Expression Evaluation',
        inBrief: 'Stacks convert human-readable infix arithmetic expressions (A+B) into parenthesis-free postfix expressions (AB+) for compiler evaluation.',
        definition: 'Infix to postfix conversion is a compiler parsing algorithm that utilizes an operator stack to convert infix syntax into Reverse Polish Notation (RPN) according to operator precedence and associativity.',
        detailedExplanation: 'Shunting-Yard Algorithm: Operands (operands, numbers) are output immediately. Operators are pushed onto the stack. If incoming operator has lower or equal precedence than stack top, stack operators are popped to output until a lower precedence operator or \'(\' is encountered, then incoming operator is pushed. Left parenthesis \'(\' is pushed unconditionally; right parenthesis \')\' pops all operators until \'(\' is discarded. Postfix evaluation algorithm: Scan left to right; push operands onto stack; upon operator, pop top two operands (op2, then op1), evaluate (op1 operator op2), and push result back. Final stack top holds numerical value.',
        quickTake: 'Compilers use stacks to evaluate expressions and convert infix (A+B*C) to postfix (ABC*+) without parentheses.',
        keyPoints: [
          'Precedence hierarchy: ^ (exponential, right-to-left) > *, / > +, - (left-to-right).',
          'Delimiter Matching: Validating balanced parentheses () [] {} in IDE code parsers.',
          'Call Stack: Operating systems use stack frames to manage recursive function calls.'
        ],
        formulaOrEquation: 'Infix: (A + B) * C ⟹ Postfix: A B + C * | Stack Op: pop op2, pop op1 ⟹ op1 ⊙ op2'
      },
      {
        topic: '3. Queue Abstract Data Type (FIFO)',
        inBrief: 'A Queue is a linear data structure following the First-In, First-Out (FIFO) principle, where insertions occur at the rear and deletions at the front.',
        definition: 'A Queue is an ADT characterized by the First-In, First-Out (FIFO) discipline, maintaining two distinct pointer indices: front for element removal (dequeue) and rear for element insertion (enqueue).',
        detailedExplanation: 'A queue models a line of people buying movie tickets: the first person to join the queue is the first to be served. Operations: 1) enqueue(x): Appends element x at rear index. 2) dequeue(): Extracts element from front index. 3) front() / peek(): Inspects front element without removal. In a simple linear array implementation, repeated enqueue and dequeue operations cause the rear pointer to reach MAX-1 even when free spaces exist at front—a severe flaw called false overflow.',
        quickTake: 'FIFO structure; enqueue at rear, dequeue at front in O(1) time; models print spoolers and message queues.',
        keyPoints: [
          'Enqueue at rear: rear = rear + 1; queue[rear] = data.',
          'Dequeue at front: data = queue[front]; front = front + 1.',
          'False overflow limitation: Overcome by Circular Queue array implementation.'
        ],
        formulaOrEquation: 'FIFO Principle: First Inserted Element at Front is First Dequeued'
      },
      {
        topic: '4. Circular Queue & Double-Ended Queue (Deque)',
        inBrief: 'A circular queue connects the last position back to the first to recycle freed memory; a deque permits insertions and deletions at both ends.',
        definition: 'A Circular Queue is an array-based FIFO structure where index progression wraps around modulo capacity: (rear + 1) % MAX, preventing memory fragmentation; a Deque is a generalized double-ended queue.',
        detailedExplanation: 'In a circular queue, when rear reaches MAX - 1, the next enqueue wraps around to index 0 if space has been cleared by earlier dequeues. Full condition: (rear + 1) % MAX == front. Empty condition: front == -1. Deque (Double-ended Queue) supports four operations: insertFront, deleteFront, insertRear, deleteRear in O(1) time. Deques are foundational in implementing sliding window algorithms and work-stealing job schedulers in multi-core operating systems.',
        quickTake: 'Circular queue recycles array space using modulo arithmetic: (rear + 1) % MAX; Deque allows insertion/deletion at both ends.',
        keyPoints: [
          'Circular enqueue: rear = (rear + 1) % MAX; queue[rear] = data.',
          'Circular full check: (rear + 1) % MAX == front.',
          'Priority Queue: Elements possess priority values; highest priority dequeues first regardless of arrival time.'
        ],
        formulaOrEquation: 'Index Wrap-around: next_index = (current_index + 1) % Capacity'
      }
    ],
    keywords: [
      {
        keyword: 'LIFO (Last-In, First-Out)',
        definition: 'A data storage discipline where the most recently inserted element is the first element accessed and removed.',
        sentenceExplanation: 'LIFO is like a stack of hot dosas on a buffet plate where the freshest one placed on top is the first one eaten.',
        examContext: 'Governing protocol of Stacks; used in recursion, undo/redo, and browser history.'
      },
      {
        keyword: 'FIFO (First-In, First-Out)',
        definition: 'A data organization discipline where elements are served strictly in chronological order of their arrival.',
        sentenceExplanation: 'FIFO is like waiting in an orderly bus queue at Visakhapatnam RTC complex where whoever arrived first boards first.',
        examContext: 'Governing protocol of Queues; used in CPU scheduling, IO buffers, and printer spoolers.'
      },
      {
        keyword: 'Reverse Polish Notation (RPN)',
        definition: 'A postfix mathematical notation in which operator symbols follow their respective operands, eliminating the need for parentheses.',
        sentenceExplanation: 'Reverse Polish Notation writes "A B +" instead of "A + B" so computer processors can evaluate calculations without confusing brackets.',
        examContext: 'Evaluated in single pass using a stack in O(n) time.'
      },
      {
        keyword: 'Circular Queue',
        definition: 'A FIFO queue implemented over a fixed-size ring buffer array where the last slot connects cyclically to the first slot via modulo arithmetic.',
        sentenceExplanation: 'A circular queue is like a revolving sushi belt that loops back to the start so empty spots can immediately hold new dishes.',
        examContext: 'Full condition: (rear + 1) % MAX == front; solves false overflow of linear queues.'
      }
    ]
  },

  // ==========================================
  // 2. DATA STRUCTURES: TREES AND BST
  // ==========================================
  {
    titleMatcher: 'trees and binary search',
    topics: [
      {
        topic: '1. Tree Terminology & Binary Trees',
        inBrief: 'A tree is a non-linear hierarchical data structure; a binary tree is a tree where each node has at most two children (left and right).',
        definition: 'A Tree is a non-linear hierarchical graph containing no cycles, consisting of a set of vertices (nodes) connected by directed edges, rooted at a single top node; a Binary Tree restricts node degree to at most 2.',
        detailedExplanation: 'Key terms: 1) Root: The unique top-level node with no parent. 2) Leaf (External Node): A node with zero children. 3) Depth: Number of edges from root to the node. 4) Height: Number of edges on the longest path from node to a leaf. In a Binary Tree, every node has at most two subtrees designated as Left Child and Right Child. Binary Tree properties: 1) Maximum nodes at level i is 2ⁱ. 2) Maximum nodes in binary tree of height h is 2^(h+1) - 1. 3) For non-empty binary tree with n nodes and e edges: e = n - 1.',
        quickTake: 'Hierarchical structure; each node has ≤ 2 children; maximum nodes at level i is 2ⁱ; total nodes = 2^(h+1) - 1.',
        keyPoints: [
          'Full Binary Tree: Every node has either 0 or 2 children.',
          'Complete Binary Tree: All levels are completely filled except possibly the last, which is filled from left to right.',
          'Perfect Binary Tree: All internal nodes have two children and all leaves are at the exact same depth.'
        ],
        formulaOrEquation: 'Max Nodes at Level i = 2ⁱ | Max Nodes at Height h = 2^(h+1) - 1'
      },
      {
        topic: '2. Binary Tree Traversals (Inorder, Preorder, Postorder)',
        inBrief: 'Systematic algorithms for visiting every node in a tree: Preorder (DLR), Inorder (LDR), and Postorder (LRD).',
        definition: 'Tree traversal is the process of visiting each node in a binary tree exactly once, systematically categorized by when the root/data (D) is visited relative to left (L) and right (R) subtrees.',
        detailedExplanation: '1) Preorder (D-L-R): Visit root, traverse left subtree, traverse right subtree (used to create copies of trees or prefix expressions). 2) Inorder (L-D-R): Traverse left subtree, visit root, traverse right subtree (crucially, Inorder traversal of a Binary Search Tree ALWAYS produces elements in sorted ascending order!). 3) Postorder (L-R-D): Traverse left subtree, traverse right subtree, visit root (used for deleting a tree from leaf up, and computing directory disk usage). 4) Level-Order Traversal: Breadth-first traversal visiting level by level using a FIFO Queue.',
        quickTake: 'Inorder (L-D-R) yields sorted order in BST; Preorder (D-L-R); Postorder (L-R-D) deletes tree safely; Level-order uses queue.',
        keyPoints: [
          'Time Complexity: All traversals take O(n) linear time since every node is visited once.',
          'Space Complexity: O(h) call stack memory, where h is tree height (O(log n) balanced, O(n) skewed).',
          'Reconstruction Rule: A unique binary tree can be reconstructed given Inorder AND either Preorder or Postorder.'
        ],
        formulaOrEquation: 'Inorder = Left ⟹ Root ⟹ Right | BST Inorder = Strictly Ascending Sorted Sequence'
      },
      {
        topic: '3. Binary Search Tree (BST) & Search/Insert/Delete',
        inBrief: 'A BST enforces left < root < right for all nodes, enabling O(log n) average time search, insertion, and deletion.',
        definition: 'A Binary Search Tree is a binary tree invariant wherein for every node X, all values in X\'s left subtree are strictly less than X\'s value, and all values in X\'s right subtree are strictly greater.',
        detailedExplanation: '1) Search(key): Compare key with root; if key < root, recurse left; if key > root, recurse right; else found. Average time O(log n). 2) Insert(key): Traverse BST using search logic until a NULL leaf position is reached; attach new node. 3) Deletion has 3 cases: Case A: Node is a Leaf (0 children) → simply delete and set parent pointer to NULL. Case B: Node has 1 child → bypass node and connect parent directly to child. Case C: Node has 2 children → replace node\'s value with its Inorder Successor (smallest node in right subtree) or Inorder Predecessor, then recursively delete the successor.',
        quickTake: 'Left < Root < Right; Search/Insert average O(log n); Delete with 2 children replaces with Inorder Successor.',
        keyPoints: [
          'Inorder Successor: The node with the minimum key in the right subtree: successor = findMin(node->right).',
          'Worst Case Degeneracy: If keys are inserted in sorted order (1, 2, 3, 4, 5), BST degrades into a skewed linked list with O(n) search time.',
          'Balance necessity: AVL trees and Red-Black trees prevent worst-case O(n) degradation by auto-balancing.'
        ],
        formulaOrEquation: 'BST Invariant: ∀ x ∈ Left(N), x < N.val < ∀ y ∈ Right(N), y.val'
      },
      {
        topic: '4. AVL Trees & Self-Balancing Rotations',
        inBrief: 'An AVL tree is a self-balancing BST where the height difference (balance factor) between left and right subtrees is at most ±1.',
        definition: 'An AVL tree is a height-balanced binary search tree that maintains a Balance Factor BF(node) = Height(Left) - Height(Right) ∈ {-1, 0, +1} for every node via single and double rotations.',
        detailedExplanation: 'When an insertion causes |BF| > 1, the subtree is rebalanced using one of four rotation cases: 1) LL (Left-Left) Imbalance: Single Right Rotation. 2) RR (Right-Right) Imbalance: Single Left Rotation. 3) LR (Left-Right) Imbalance: Double rotation: Left rotation on left child, then Right rotation on root. 4) RL (Right-Left) Imbalance: Double rotation: Right rotation on right child, then Left rotation on root. AVL trees guarantee strict O(log n) worst-case time complexity for search, insert, and delete operations.',
        quickTake: 'Balance factor BF = height(left) - height(right) ∈ {-1, 0, 1}; fixes imbalances via LL, RR, LR, RL rotations.',
        keyPoints: [
          'Balance Factor formula: BF = Height(Left Subtree) - Height(Right Subtree).',
          'Rotations: Local O(1) pointer updates that restore balance while preserving BST inorder invariant.',
          'Guaranteed Time: Height is strictly bounded to h < 1.44 log₂(n), ensuring worst-case O(log n) operations.'
        ],
        formulaOrEquation: 'BF(v) = Height(v.left) - Height(v.right) ∈ {-1, 0, +1} | Search/Insert/Delete: O(log n)'
      }
    ],
    keywords: [
      {
        keyword: 'Binary Search Tree (BST)',
        definition: 'A binary tree data structure where each node stores a key greater than all keys in its left subtree and smaller than all in its right subtree.',
        sentenceExplanation: 'A BST is like an organized dictionary where flipping open a middle page lets you throw away half the book immediately to find a word.',
        examContext: 'Must state BST property; Inorder traversal yields sorted order; average search O(log n).'
      },
      {
        keyword: 'Inorder Successor',
        definition: 'The node that immediately follows a given node in the inorder traversal sequence of a BST, found as the minimum value in the right subtree.',
        sentenceExplanation: 'The inorder successor is the next numerical number in line waiting right after the current node in an ordered list.',
        examContext: 'Used in Case 3 of BST deletion (when node has two children).'
      },
      {
        keyword: 'AVL Tree',
        definition: 'A self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.',
        sentenceExplanation: 'An AVL tree is like a gymnastic acrobat that constantly shifts its weight after every move so it never topples over into a lopsided stick.',
        examContext: 'State BF formula: BF = H_left - H_right; list LL, RR, LR, RL rotation cases.'
      }
    ]
  },

  // ==========================================
  // 3. ARTIFICIAL INTELLIGENCE & PROJECT CYCLE
  // ==========================================
  {
    titleMatcher: 'ai project cycle',
    topics: [
      {
        topic: '1. What is Artificial Intelligence?',
        inBrief: 'AI is the branch of computer science creating systems capable of performing tasks that typically require human intelligence.',
        definition: 'Artificial Intelligence (AI) is a computational discipline focused on engineering intelligent agents that perceive environmental states, synthesize data, and execute autonomous rational decisions maximizing goal success.',
        detailedExplanation: 'AI encompasses Machine Learning (ML, where systems learn patterns from data without explicit hardcoded rules) and Deep Learning (DL, multi-layered neural networks inspired by human neocortex biology). Three AI domains: 1) Data (tabular analytics, forecasting, recommendation engines). 2) Computer Vision (CV, image classification, facial recognition, object detection). 3) Natural Language Processing (NLP, chatbots, sentiment analysis, speech transcription). Classifications: Narrow/Weak AI (specialized in one task, e.g., Siri, AlphaGo, Gemini), General AI (AGI, hypothetical human-level versatility), and Super AI (hypothetical intelligence surpassing all human cognitive abilities).',
        quickTake: 'AI mimics human intelligence; subsets: Machine Learning (data patterns) and Deep Learning (neural networks); domains: Data, CV, NLP.',
        keyPoints: [
          'Rule-based vs AI: Rule-based requires developer to code all if-else rules; AI learns patterns autonomously from historical data.',
          'Three Domains: Data Science (numerical datasets), Computer Vision (pixels/images), NLP (text/speech).',
          'Modern LLMs: Large Language Models like Google Gemini powered by transformer neural architectures.'
        ],
        formulaOrEquation: 'AI ⊃ Machine Learning (ML) ⊃ Deep Learning (DL)'
      },
      {
        topic: '2. The 5 Stages of the AI Project Cycle',
        inBrief: 'The structured workflow for developing an AI solution: Problem Scoping, Data Acquisition, Data Exploration, Modelling, and Evaluation.',
        definition: 'The AI Project Cycle is a standardized sequential software engineering methodology comprising Problem Scoping, Data Acquisition, Data Exploration, Modelling, and Evaluation to build robust, ethical AI systems.',
        detailedExplanation: 'Stage 1: Problem Scoping: Identify goal using 4Ws Canvas (Who are the stakeholders? What is the core problem? Where does it occur? Why will AI solve it?). Stage 2: Data Acquisition: Gathering reliable datasets from sensors, APIs, web scraping, or public repositories; splitting into Training Data (70-80%) and Testing Data (20-30%). Stage 3: Data Exploration: Visualizing data distributions via histograms, scatter plots, and cleaning missing values or outliers. Stage 4: Modelling: Selecting and training algorithmic models (Rule-based or Learning-based: Supervised, Unsupervised, Reinforcement Learning). Stage 5: Evaluation: Testing model performance on unseen data using rigorous quantitative metrics.',
        quickTake: '5 Stages: Problem Scoping (4Ws canvas) ⟹ Data Acquisition ⟹ Data Exploration ⟹ Modelling ⟹ Evaluation.',
        keyPoints: [
          '4Ws Problem Canvas: Who (stakeholders), What (issue), Where (context), Why (benefits).',
          'Data Split: Training data (teaches model patterns), Testing data (evaluates accuracy on unseen inputs).',
          'Data Cleaning: Crucial step removing noise, duplicates, and handling null values before training.'
        ],
        formulaOrEquation: 'Workflow: Scoping ⟹ Acquisition ⟹ Exploration ⟹ Modelling ⟹ Evaluation'
      },
      {
        topic: '3. Supervised, Unsupervised & Reinforcement Learning',
        inBrief: 'Supervised uses labeled data; Unsupervised discovers hidden patterns in unlabeled data; Reinforcement learns via rewards and penalties.',
        definition: 'Machine learning paradigms are categorized by learning feedback: Supervised (learning mapping from labeled pairs), Unsupervised (uncovering latent structure in unlabeled data), and Reinforcement (agent learning optimal policy via environmental reward signals).',
        detailedExplanation: '1) Supervised Learning: Model trains on labeled dataset (features X with ground-truth targets Y). Subdivided into: Classification (discrete categorical outputs, e.g., spam vs non-spam, tumor benign vs malignant) and Regression (continuous numerical outputs, e.g., predicting house prices, temperature forecasting). Algorithms: Decision Trees, Linear Regression, SVM. 2) Unsupervised Learning: Model trains on unlabeled data without explicit answers. Discovers natural groupings via Clustering (e.g., K-Means customer segmentation) or Association Rules (market basket analysis: "customers buying bread also buy butter"). 3) Reinforcement Learning: An autonomous agent explores an environment, taking actions to maximize cumulative rewards (e.g., chess AI, autonomous driving).',
        quickTake: 'Supervised (labeled data: classification & regression); Unsupervised (unlabeled data: clustering); Reinforcement (rewards & penalties).',
        keyPoints: [
          'Classification: Categorical output (Yes/No, Cat/Dog); Regression: Continuous numerical output (stock price, rainfall).',
          'Clustering: Unsupervised grouping of similar data points (e.g. K-Means algorithm).',
          'Overfitting: When model memorizes training data noise but fails on new unseen test data.'
        ],
        formulaOrEquation: 'Supervised: y = f(x) | Loss Function: MSE = (1/n) Σ (y_i - ŷ_i)²'
      },
      {
        topic: '4. Evaluation Metrics: Confusion Matrix, Precision, Recall, F1',
        inBrief: 'A confusion matrix cross-tabulates True/False Positives and Negatives to calculate Accuracy, Precision, Recall, and F1 Score.',
        definition: 'Model evaluation is the quantitative assessment of predictive performance using statistical metrics derived from a 2×2 Confusion Matrix of TP, FP, TN, and FN outcomes.',
        detailedExplanation: 'Confusion Matrix terms: True Positive (TP, model predicted Yes and was right), True Negative (TN, model predicted No and was right), False Positive (FP / Type I error, model predicted Yes but was wrong), False Negative (FN / Type II error, model predicted No but was wrong). Metrics: 1) Accuracy: Total correct predictions over all cases: (TP + TN) / (TP + TN + FP + FN). In imbalanced data, accuracy is misleading! 2) Precision: Of all predicted positives, how many are actually positive? Precision = TP / (TP + FP) (crucial in spam filters where FP marking vital email as spam is costly). 3) Recall: Of all actual positives, how many did the model catch? Recall = TP / (TP + FN) (crucial in cancer screening where FN missing a tumor is deadly). 4) F1 Score: Harmonic mean balancing Precision and Recall: F1 = 2 × (Precision × Recall) / (Precision + Recall).',
        quickTake: 'Accuracy = (TP+TN)/Total; Precision = TP/(TP+FP); Recall = TP/(TP+FN); F1 is harmonic mean balancing both.',
        keyPoints: [
          'High Precision Needed: When False Positive cost is very high (e.g., spam filter classifying important business email as spam).',
          'High Recall Needed: When False Negative cost is catastrophic (e.g., medical diagnosis missing a malignant cancer patient).',
          'F1 Score: Harmonic mean utilized when seeking optimal balance between Precision and Recall.'
        ],
        formulaOrEquation: 'Precision = TP / (TP + FP) | Recall = TP / (TP + FN) | F1 = 2·(P·R)/(P+R)'
      }
    ],
    keywords: [
      {
        keyword: 'Supervised Learning',
        definition: 'A machine learning approach where an algorithm is trained using explicitly labeled input-output pairs to learn a mapping function.',
        sentenceExplanation: 'Supervised learning is like studying for an exam with textbook practice questions where every question already has the correct answer key printed on the back.',
        examContext: 'Divided into Classification (discrete classes) and Regression (continuous values).'
      },
      {
        keyword: 'Confusion Matrix',
        definition: 'A tabular layout that visualizes the performance of a classification algorithm by comparing predicted target labels against actual ground truth.',
        sentenceExplanation: 'A confusion matrix is the scorecard that shows how many times your AI guessed correctly, and specifically what mistakes it made.',
        examContext: 'Must draw 2x2 grid containing TP, FP, FN, TN.'
      },
      {
        keyword: 'Precision vs Recall',
        definition: 'Precision measures prediction reliability [TP/(TP+FP)], while Recall measures sensitivity in finding all positive instances [TP/(TP+FN)].',
        sentenceExplanation: 'Precision asks "Are the fire alarms that rang real fires?", while Recall asks "Did the alarm catch every single fire that started?".',
        examContext: 'Give example where Precision matters (spam) vs Recall matters (disease diagnosis).'
      },
      {
        keyword: 'F1 Score',
        definition: 'The harmonic mean of Precision and Recall, providing a single consolidated metric for models evaluated on imbalanced datasets.',
        sentenceExplanation: 'The F1 score is a balanced grade between accuracy and caution that stops a lazy model from cheating on test scores.',
        examContext: 'F1 = 2 × (Precision × Recall) / (Precision + Recall).'
      }
    ]
  }
];
