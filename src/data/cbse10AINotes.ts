import { Subject } from '../types';

export const CBSE_10_AI: Subject = {
  id: 'cbse10-ai',
  code: 'CBSE-417-10',
  name: 'Class 10 Artificial Intelligence (CBSE Code 417)',
  semesterOrGrade: 'Class 10 Board',
  creditsOrMarks: '50 Marks Theory + 50 Practical',
  gradeOrBranch: 'class10',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Skill Subject',
  subjectCategory: 'ai',
  units: [
    {
      unitNumber: 1,
      title: 'Introduction to Artificial Intelligence',
      keyTopics: ['AI, ML, and DL hierarchy', 'Three domains: Data, Computer Vision, NLP', 'Applications of AI in smart cities & healthcare', 'AI readiness & smart living'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI & Emerging Tech Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 820,
      videoDuration: '3m 00s',
      summaryTelugu: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ పరిచయం: AI, మెషిన్ లెర్నింగ్ మరియు డీప్ లెర్నింగ్ సంబంధం, మూడు రంగాలు (Data, CV, NLP) మరియు స్మార్ట్ సిటీస్ అనువర్తనాలు.',
      summaryEnglish: 'Concentric circles of AI, ML, and Deep Learning, three primary domains of AI, and difference between rule-based automation and true machine learning.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. The AI-ML-DL Hierarchy',
          quickTake: 'Artificial Intelligence is the broad umbrella; Machine Learning is a subset; Deep Learning is a specialized subfield of ML.',
          keyPoints: [
            'AI: Any technique that enables computers to mimic human intelligence (decision-making, vision, reasoning).',
            'ML (Machine Learning): Systems that learn patterns from training data automatically without explicit programming.',
            'DL (Deep Learning): Multi-layered Artificial Neural Networks inspired by biological brain neurons (processes images, speech, big data).'
          ]
        },
        {
          topic: '2. The Three Primary Domains of AI',
          quickTake: 'All AI applications operate in one or more of three domains: Data, Computer Vision, and NLP.',
          keyPoints: [
            'Data Sciences: Numeric and statistical data patterns (Price prediction, stock analysis, recommendation engines).',
            'Computer Vision (CV): Enables machines to interpret and extract information from visual inputs (Self-driving cars, face unlock, biometric scanning).',
            'Natural Language Processing (NLP): Enables machines to understand human spoken and written languages (Chatbots, Siri/Alexa, language translators).'
          ]
        }
      ],
      mindmap: {
        center: 'AI Foundations',
        branches: [
          {
            title: '1. Concentric Circles',
            subtopics: ['AI (Broad umbrella)', 'ML (Data-driven learning)', 'DL (Multi-layer neural nets)'],
            examTip: 'Draw three concentric circles: AI outermost, ML middle, DL innermost.',
            color: 'blue'
          },
          {
            title: '2. Three Domains',
            subtopics: ['Data Sciences (Numbers, charts)', 'Computer Vision (Pixels, images)', 'NLP (Text, speech, grammar)'],
            examTip: 'Biometric face unlock uses CV; text prediction uses NLP.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Differentiate between Rule-Based approach and Learning-Based approach in AI.',
          marks: '2 Marks',
          answer: '1) Rule-Based: Developer writes all rules and instructions explicitly; machine follows static logic (if-then conditions) and cannot learn on its own. 2) Learning-Based: Machine is fed training data and designs its own internal algorithmic rules by discovering patterns; its accuracy improves with more data.',
          tip: 'State developer writes rules vs machine discovers rules from data.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'AI Project Cycle',
      keyTopics: ['5 Stages: Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation', '4Ws Problem Canvas (Who, What, Where, Why)', 'Data features & cleaning', 'Supervised vs Unsupervised vs Reinforcement Learning'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI Curriculum Designer',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.98,
      upvotes: 890,
      videoDuration: '3m 20s',
      summaryTelugu: 'AI ప్రాజెక్ట్ సైకిల్: 5 దశలు (ప్రాబ్లమ్ స్కోపింగ్, డేటా సేకరణ, డేటా అన్వేషణ, మోడలింగ్, మూల్యాంకనం) మరియు 4Ws కాన్వాస్.',
      summaryEnglish: 'Comprehensive walkthrough of 4Ws Problem Scoping canvas, structured vs unstructured data acquisition, supervised classification/regression, and clustering.',
      examWeightage: '10 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. 4Ws Problem Canvas in Problem Scoping',
          quickTake: 'The 4Ws canvas provides structured clarity before developing any AI solution.',
          keyPoints: [
            'Who? Identifies the stakeholders who face the problem and who will benefit from the solution.',
            'What? Determines the nature of the problem, evidence of its existence, and severity.',
            'Where? Analyzes the context, situation, and location where the stakeholders experience the problem.',
            'Why? Establishes the tangible benefits and value proposition that solving the problem delivers.'
          ]
        },
        {
          topic: '2. Machine Learning Approaches in Modelling',
          quickTake: 'Models are classified into Supervised, Unsupervised, and Reinforcement Learning based on training data and feedback.',
          keyPoints: [
            'Supervised Learning: Trained on labelled dataset (input-output pairs). Types: Classification (discrete classes: Spam/Not Spam) and Regression (continuous values: Price, Temperature).',
            'Unsupervised Learning: Trained on unlabelled data to discover hidden patterns. Types: Clustering (grouping customers by buying behaviour) and Dimensionality Reduction.',
            'Reinforcement Learning: Agent learns by trial and error through reward and penalty feedback in an environment.'
          ]
        }
      ],
      mindmap: {
        center: 'AI Project Cycle',
        branches: [
          {
            title: '1. 5 Project Stages',
            subtopics: ['1. Problem Scoping (4Ws)', '2. Data Acquisition (Reliable sources)', '3. Data Exploration (Visualisation)', '4. Modelling (ML algorithms)', '5. Evaluation (Metrics)'],
            examTip: 'Remember the sequence: Scoping -> Acquisition -> Exploration -> Modelling -> Evaluation.',
            color: 'blue'
          },
          {
            title: '2. 4Ws Canvas',
            subtopics: ['Who (Stakeholders)', 'What (Nature & proof)', 'Where (Context & location)', 'Why (Benefit & value)'],
            examTip: 'Each W must be answered clearly in the project problem statement template.',
            color: 'emerald'
          },
          {
            title: '3. ML Types',
            subtopics: ['Supervised: Classification & Regression (Labelled)', 'Unsupervised: Clustering (Unlabelled)', 'Reinforcement: Rewards & Penalties'],
            examTip: 'Predicting house price is Regression; identifying cat or dog is Classification.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Explain the 4Ws problem canvas with respect to an AI traffic management system.',
          marks: '3 Marks',
          answer: '1) Who: Daily commuters, traffic police, emergency ambulances. 2) What: Severe traffic congestion causing delays and higher carbon emissions. 3) Where: Busy road intersections in metropolitan Vizag during peak office hours. 4) Why: AI dynamic signal timing saves travel time, reduces fuel waste, and gives green corridors to emergency vehicles.',
          tip: 'Frame answers clearly under Who, What, Where, and Why headings.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Computer Vision (CV)',
      keyTopics: ['Concept of pixels and image resolution', 'RGB color model and grayscale images', 'Convolutional Neural Networks (CNN)', 'Image Classification, Object Detection, and Segmentation'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Secondary Tech Specialist',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 840,
      videoDuration: '3m 10s',
      summaryTelugu: 'కంప్యూటర్ విజన్ (CV): పిక్సెల్స్, RGB మరియు గ్రేస్కేల్ ఇమేజ్ మోడల్స్, CNN భావన మరియు ఆబ్జెక్ట్ డిటెక్షన్.',
      summaryEnglish: 'How computers see images as matrices of numbers (0-255), image classification vs object detection, and convolution feature mapping.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. How Computers Interpret Images',
          quickTake: 'An image is a 2D matrix of tiny squares called pixels with numerical intensity values from 0 to 255.',
          keyPoints: [
            'Pixel: Short for Picture Element; the smallest addressable unit of a digital image.',
            'Grayscale: Single channel where 0 represents pure black and 255 represents pure white.',
            'RGB Model: Three channels (Red, Green, Blue) combined to create millions of colors. Image dimension: Height × Width × 3.'
          ]
        },
        {
          topic: '2. Tasks in Computer Vision',
          quickTake: 'CV tasks advance from simply naming an object to pinpointing its exact boundary.',
          keyPoints: [
            'Image Classification: Assigns a label to entire image (e.g. "Cat").',
            'Object Detection: Classifies and locates objects with bounding boxes (e.g. "Cat at [x,y,w,h]").',
            'Image Segmentation: Labels each individual pixel belonging to the object boundary (used in medical CT/MRI scans and autonomous vehicle road lane detection).'
          ]
        }
      ],
      mindmap: {
        center: 'Computer Vision',
        branches: [
          {
            title: '1. Image Data',
            subtopics: ['Pixel (0-255 values)', 'Grayscale (1 channel)', 'RGB Color (3 channels: R,G,B)'],
            examTip: '0 = completely black; 255 = completely white.',
            color: 'blue'
          },
          {
            title: '2. CV Tasks',
            subtopics: ['Classification (What is it?)', 'Object Detection (Where is it with bounding box?)', 'Segmentation (Pixel-level outline)'],
            examTip: 'Bounding boxes are characteristic of Object Detection.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is the difference between Image Classification and Object Detection?',
          marks: '2 Marks',
          answer: 'Image Classification assigns a single category label to the entire image indicating what object is present (e.g. "Dog"). Object Detection not only identifies multiple objects in an image but also locates their exact positions by drawing bounding boxes around them.',
          tip: 'Emphasize classification gives a label; object detection gives label + bounding box coordinates.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Natural Language Processing (NLP)',
      keyTopics: ['Natural Language Understanding (NLU) vs Natural Language Generation (NLG)', 'Text Normalisation pipeline (Tokenisation, Stop words, Stemming, Lemmatisation)', 'Bag of Words (BoW) model', 'TF-IDF (Term Frequency - Inverse Document Frequency)'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI Faculty',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.97,
      upvotes: 860,
      videoDuration: '3m 15s',
      summaryTelugu: 'నేచురల్ లాంగ్వేజ్ ప్రాసెసింగ్ (NLP): టెక్స్ట్ నార్మలైజేషన్ (టోకనైజేషన్, స్టెమ్మింగ్, లెమటైజేషన్), బ్యాగ్ ఆఫ్ వర్డ్స్ (BoW) మరియు TF-IDF.',
      summaryEnglish: 'Processing human language: lower casing, token splitting, removing stopwords, root word extraction (stemming vs lemmatisation), and numerical vector encoding.',
      examWeightage: '8 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Text Normalisation Steps',
          quickTake: 'Preparing raw unstructured text into clean linguistic tokens for computational modeling.',
          keyPoints: [
            'Sentence Segmentation: Splitting whole text into discrete sentences.',
            'Tokenisation: Breaking sentences into individual words/tokens.',
            'Removing Stop Words: Eliminating frequent words with little semantic meaning (is, the, at, on, a).',
            'Stemming: Heuristic stripping of word suffixes/prefixes to root form (e.g. "studying", "studies" -> "studi", may not be dictionary word).',
            'Lemmatisation: Reduces words to true grammatical dictionary root word (lemma) using vocabulary and morphological analysis (e.g. "better" -> "good", "caring" -> "care").'
          ]
        },
        {
          topic: '2. Bag of Words (BoW) & TF-IDF',
          quickTake: 'Mathematical vector representations of text frequency across documents.',
          keyPoints: [
            'Bag of Words (BoW): Creates a vocabulary of unique words and counts occurrences in each document. Ignores grammatical order and syntax.',
            'Term Frequency (TF): Number of times a word appears in a document divided by total words in that document.',
            'Inverse Document Frequency (IDF): Logarithm of total documents divided by number of documents containing the word. Punishes common words and elevates rare, informative keywords.'
          ],
          formulaOrEquation: 'TF-IDF = TF(word) × log(Total Documents / Docs containing word)'
        }
      ],
      mindmap: {
        center: 'NLP Pipeline',
        branches: [
          {
            title: '1. Text Cleaning',
            subtopics: ['Tokenisation (Word splits)', 'Stop word removal', 'Stemming (Affix chop)', 'Lemmatisation (Dictionary base)'],
            examTip: 'Lemmatisation guarantees a valid dictionary root word; stemming may not.',
            color: 'blue'
          },
          {
            title: '2. Vectorisation',
            subtopics: ['Bag of Words (Count vectors)', 'Document Term Matrix (DTM)', 'TF-IDF weighting'],
            examTip: 'TF-IDF assigns higher value to words that are frequent in a document but rare across entire corpus.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Differentiate between Stemming and Lemmatisation with an example.',
          marks: '2 Marks',
          answer: 'Stemming uses crude rule-based chopping of prefixes and suffixes, which often produces non-meaningful root words (e.g., "troubled" -> "troubl"). Lemmatisation uses a comprehensive dictionary and morphological context to reduce the word to its valid base lemma (e.g., "troubled" -> "trouble", "was" -> "be").',
          tip: 'State that lemmatisation guarantees a valid dictionary word while stemming does not.'
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'Model Evaluation',
      keyTopics: ['Need for evaluation in AI', 'Confusion Matrix (TP, TN, FP, FN)', 'Accuracy, Precision, Recall, and F1-Score', 'Trade-off between Precision and Recall'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Secondary Evaluation Specialist',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.98,
      upvotes: 910,
      videoDuration: '3m 25s',
      summaryTelugu: 'మోడల్ మూల్యాంకనం: కన్‌ఫ్యూజన్ మ్యాట్రిక్స్ (TP, TN, FP, FN), ఖచ్చితత్వం (Accuracy), ప్రెసిషన్, రీకాల్ మరియు F1-స్కోర్ ఫార్ములాలు.',
      summaryEnglish: 'Step-by-step calculations for Confusion Matrix, False Positive (Type I) vs False Negative (Type II) errors, and when to prioritize Precision vs Recall.',
      examWeightage: '8-10 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. The 4 Quadrants of the Confusion Matrix',
          quickTake: 'A 2x2 performance table comparing actual ground truth against model prediction.',
          keyPoints: [
            'True Positive (TP): Model predicted Positive and actual reality is Positive.',
            'True Negative (TN): Model predicted Negative and actual reality is Negative.',
            'False Positive (FP - Type I error): Model predicted Positive, but reality is Negative (False Alarm: spam filter flags good email).',
            'False Negative (FN - Type II error): Model predicted Negative, but reality is Positive (Dangerous miss: medical test misses a cancer patient).'
          ]
        },
        {
          topic: '2. Four Key Evaluation Metrics',
          quickTake: 'Metrics used to assess classification performance beyond simple overall accuracy.',
          keyPoints: [
            'Accuracy: Fraction of total correct predictions = (TP + TN) / (TP + TN + FP + FN). Misleading in imbalanced datasets.',
            'Precision: Fraction of positive predictions that were truly correct = TP / (TP + FP). Critical when False Positives are costly (e.g. spam detection).',
            'Recall (Sensitivity): Fraction of actual positives correctly identified = TP / (TP + FN). Critical when False Negatives are dangerous (e.g. disease screening).',
            'F1-Score: Harmonic mean of Precision and Recall = 2 × (Precision × Recall) / (Precision + Recall).'
          ],
          formulaOrEquation: 'Precision = TP/(TP+FP) | Recall = TP/(TP+FN) | F1 = 2PR/(P+R)'
        }
      ],
      mindmap: {
        center: 'Model Evaluation',
        branches: [
          {
            title: '1. Confusion Matrix',
            subtopics: ['TP (True Positive)', 'TN (True Negative)', 'FP (Type I error)', 'FN (Type II error)'],
            examTip: 'Type I error is FP (false alarm); Type II error is FN (missed case).',
            color: 'blue'
          },
          {
            title: '2. Metric Formulas',
            subtopics: ['Accuracy = (TP+TN)/Total', 'Precision = TP/(TP+FP)', 'Recall = TP/(TP+FN)', 'F1-Score = 2PR/(P+R)'],
            examTip: 'In medical diagnosis, False Negatives are costlier, so we prioritize high Recall.',
            color: 'rose'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'A cancer detection model makes 100 predictions: TP = 40, TN = 45, FP = 5, FN = 10. Calculate: 1) Precision, 2) Recall.',
          marks: '3 Marks',
          answer: '1) Precision = TP / (TP + FP) = 40 / (40 + 5) = 40 / 45 = 8/9 ≈ 0.888 (88.89%). 2) Recall = TP / (TP + FN) = 40 / (40 + 10) = 40 / 50 = 0.80 (80%).',
          tip: 'State formulas clearly: Precision = TP/(TP+FP); Recall = TP/(TP+FN).'
        }
      ]
    }
  ]
};
