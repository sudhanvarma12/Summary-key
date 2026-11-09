import { Subject } from '../types';

export const CBSE_9_AI: Subject = {
  id: 'cbse9-ai',
  code: 'CBSE-417-09',
  name: 'Class 9 Artificial Intelligence (CBSE Code 417)',
  semesterOrGrade: 'Class 9 CBSE',
  creditsOrMarks: '50 Marks Theory + 50 Practical',
  gradeOrBranch: 'class9',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Skill Subject',
  subjectCategory: 'ai',
  units: [
    {
      unitNumber: 1,
      title: 'Introduction to Artificial Intelligence',
      keyTopics: ['Human Intelligence vs Artificial Intelligence', 'Three domains: Data, Computer Vision, NLP', 'Smart devices vs AI devices', 'Applications of AI in daily life'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI Foundation Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 800,
      videoDuration: '3m 00s',
      summaryTelugu: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ పరిచయం: మానవ మేధస్సు vs కృత్రిమ మేధస్సు, స్మార్ట్ పరికరాలు vs AI పరికరాలు, మరియు 3 రంగాలు (Data, CV, NLP).',
      summaryEnglish: 'Foundational concepts of AI, difference between automatic devices (washing machines) and learning AI systems, and real-world examples in streaming and navigation.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. What makes a machine Artificially Intelligent?',
          quickTake: 'A machine is intelligent when it can perceive its environment, learn from historical data, make decisions, and adapt to changing conditions.',
          keyPoints: [
            'Smart vs AI: A smart washing machine follows preset timer rules; an AI washing machine senses laundry fabric and dirt level and decides wash cycles dynamically.',
            'Human Intelligence involves perception, reasoning, problem solving, emotional intuition, and linguistic communication.'
          ]
        },
        {
          topic: '2. Three Core Domains of AI',
          quickTake: 'Categorization of AI based on the nature of input data it consumes.',
          keyPoints: [
            'Data Science: Analyzing numerical and tabular data (e.g., weather forecasting, e-commerce product recommendations).',
            'Computer Vision: Processing visual pixels from cameras/scanners (e.g., face recognition, self-driving car obstacle detection).',
            'Natural Language Processing: Processing human spoken and written languages (e.g., speech-to-text assistants, spam email filters).'
          ]
        }
      ],
      mindmap: {
        center: 'Class 9 AI Intro',
        branches: [
          {
            title: '1. AI Concept',
            subtopics: ['Machine mimics human cognition', 'Smart (static rules) vs AI (learns)', 'Continuous learning cycle'],
            examTip: 'A device with pre-programmed if-else conditions without learning is not true AI.',
            color: 'blue'
          },
          {
            title: '2. 3 Domains',
            subtopics: ['Data (Numbers & tables)', 'Computer Vision (Pixels & video)', 'NLP (Words & speech)'],
            examTip: 'Google Maps traffic prediction combines Data and GPS sensor logs.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Is a smart microwave that beeps after 2 minutes considered an Artificial Intelligence system? Justify your answer.',
          marks: '2 Marks',
          answer: 'No, a smart microwave that beeps after a set timer is not considered an AI system. It simply follows a hardcoded timer programmed by developers. It does not sense, learn from data, make independent decisions, or adapt to new food types.',
          tip: 'State that following pre-programmed timer instructions is not machine learning or AI.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'AI Project Cycle: 5 Stages',
      keyTopics: ['Problem Scoping (4Ws canvas)', 'Data Acquisition (Primary & Secondary sources)', 'Data Exploration (Patterns & outliers)', 'Modelling (Rule-based vs Learning-based)', 'Evaluation'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI Curriculum Designer',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.97,
      upvotes: 840,
      videoDuration: '3m 15s',
      summaryTelugu: 'AI ప్రాజెక్ట్ సైకిల్: 5 దశలు, 4Ws కాన్వాస్ (Who, What, Where, Why), డేటా సేకరణ మరియు రూల్-బేస్డ్ vs లెర్నింగ్-బేస్డ్ మోడల్స్.',
      summaryEnglish: 'Comprehensive walkthrough of the 5 project stages, 4Ws scoping methodology, data acquisition integrity, and rule-based versus learning algorithms.',
      examWeightage: '10 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. 4Ws Problem Canvas in Problem Scoping',
          quickTake: 'The first stage that defines the problem clearly before writing any code.',
          keyPoints: [
            'Who: Identifies the stakeholders who face the problem.',
            'What: States what the exact problem is and what evidence proves it.',
            'Where: Identifies the context and location where the problem happens.',
            'Why: Details the value and benefits of solving the problem.'
          ]
        },
        {
          topic: '2. Data Acquisition & Data Features',
          quickTake: 'Collecting relevant, clean, and authentic training datasets.',
          keyPoints: [
            'Training Data: The dataset used to teach the AI model (typically 70-80% of data).',
            'Testing Data: Unseen dataset used to evaluate model accuracy (typically 20-30% of data).',
            'Features: Measurable properties or characteristics of data (e.g. for fruit: color, size, weight).'
          ]
        }
      ],
      mindmap: {
        center: 'AI Project Cycle',
        branches: [
          {
            title: '1. Scoping (4Ws)',
            subtopics: ['Who (Stakeholders)', 'What (Problem)', 'Where (Context)', 'Why (Benefit)'],
            examTip: 'Problem Scoping is the first and most critical stage of the AI cycle.',
            color: 'blue'
          },
          {
            title: '2. Data & Exploration',
            subtopics: ['Acquisition (Sensors, Surveys, Web)', 'Exploration (Plots, Outliers)', 'Training (80%) vs Testing (20%)'],
            examTip: 'Testing data must be kept completely separate from training data.',
            color: 'emerald'
          },
          {
            title: '3. Modelling & Eval',
            subtopics: ['Rule-based (Developer logic)', 'Learning-based (Pattern discovery)', 'Evaluation (Testing accuracy)'],
            examTip: 'Rule-based models fail when unfamiliar edge-case scenarios arise.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why is it important to separate training data and testing data in an AI project?',
          marks: '2 Marks',
          answer: 'Training data is used to teach the model patterns, while testing data tests how well the model performs on unseen, real-world data. If the model is tested on the same data it was trained on, it will show falsely high accuracy (overfitting) without truly generalizing.',
          tip: 'Mention preventing memorization/overfitting and verifying real-world generalization.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Neural Networks & Machine Learning',
      keyTopics: ['Biological Neuron vs Artificial Neuron', 'Layers: Input Layer, Hidden Layers, Output Layer', 'Weights and Biases concept', 'Applications of Deep Learning'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Secondary Tech Specialist',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 820,
      videoDuration: '3m 10s',
      summaryTelugu: 'న్యూరల్ నెట్‌వర్క్‌లు: మానవ మెదడు న్యూరాన్ vs కృత్రిమ న్యూరాన్ (Artificial Neuron), ఇన్‌పుట్, హిడెన్ మరియు అవుట్‌పుట్ లేయర్లు.',
      summaryEnglish: 'Analogy between dendrites/cell body/axon and input/weights/activation function/output in Artificial Neural Networks (ANNs).',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Biological vs Artificial Neuron Analogy',
          quickTake: 'Artificial Neural Networks are computational models loosely modeled after human brain synapses.',
          keyPoints: [
            'Dendrites (receive signals) -> Input Layer (takes raw feature values).',
            'Cell Body / Nucleus (processes impulses) -> Node / Perceptron with weights and activation function.',
            'Axon (transmits signal to next neuron) -> Output connection carrying weighted values.'
          ]
        },
        {
          topic: '2. The Three Layers of an ANN',
          quickTake: 'Neurons organized into interconnected vertical layers.',
          keyPoints: [
            'Input Layer: Receives data features from the environment without transformation.',
            'Hidden Layer(s): Intermediate layers where feature extraction, pattern recognition, and mathematical weight transformations occur.',
            'Output Layer: Delivers the final prediction or classification decision (e.g., "Cat" 92% confidence).'
          ]
        }
      ],
      mindmap: {
        center: 'Neural Networks',
        branches: [
          {
            title: '1. Biological Link',
            subtopics: ['Dendrite = Input', 'Cell body = Sum & Activation', 'Axon = Output link'],
            examTip: 'Human brain contains ~86 billion interconnected neurons.',
            color: 'purple'
          },
          {
            title: '2. Three Layers',
            subtopics: ['Input Layer (Raw data)', 'Hidden Layer(s) (Feature learning)', 'Output Layer (Final decision)'],
            examTip: 'A network with more than one hidden layer is called a Deep Neural Network.',
            color: 'blue'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is the role of the Hidden Layer in an Artificial Neural Network?',
          marks: '2 Marks',
          answer: 'The hidden layer sits between the input and output layers. It performs complex mathematical transformations and feature extractions by applying weights and biases to discover hidden patterns in the data that are not directly visible in the raw inputs.',
          tip: 'State that hidden layers extract abstract patterns using weights and biases.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Ethics, Bias, and Data Privacy in AI',
      keyTopics: ['AI Bias and algorithmic fairness', 'Data Privacy and digital footprint', 'AI Access divide', 'Sustainable Development Goals (SDGs) and AI'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Ethics & AI Policy Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.97,
      upvotes: 810,
      videoDuration: '3m 00s',
      summaryTelugu: 'AI నీతిశాస్త్రం, పక్షపాతం & డేటా గోప్యత: అల్గారిథమిక్ బయాస్ (Bias), డిజిటల్ ఫుట్‌ప్రింట్, సమాచార రక్షణ మరియు సుస్థిర అభివృద్ధి లక్ష్యాలు (SDGs).',
      summaryEnglish: 'How biased training datasets produce unfair algorithms, personal privacy rights, facial recognition misidentifications, and AI for environmental sustainability.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. AI Bias & Unfair Data',
          quickTake: 'An AI algorithm is only as fair as the data it was trained on.',
          keyPoints: [
            'AI Bias occurs when an AI system produces systematically prejudiced results due to biased human training data or skewed collection methods.',
            'Example: An automated recruitment AI trained on historical tech company data may discriminate against women applicants because previous hiring favoured men.'
          ]
        },
        {
          topic: '2. Data Privacy & Digital Footprint',
          quickTake: 'Protection of personal user information in the age of big data.',
          keyPoints: [
            'Digital Footprint: The trail of data you leave behind while browsing online (location history, search queries, purchase records).',
            'Data Consent: Users must have transparency and give explicit consent for how their data is collected, stored, and utilized.'
          ]
        }
      ],
      mindmap: {
        center: 'AI Ethics',
        branches: [
          {
            title: '1. Algorithmic Bias',
            subtopics: ['Biased training data -> Biased AI', 'Gender / racial disparities', 'Need for diverse datasets'],
            examTip: 'Remember: "Garbage In, Garbage Out" applies to AI data quality and fairness.',
            color: 'rose'
          },
          {
            title: '2. Privacy & Safety',
            subtopics: ['Digital footprint awareness', 'Informed consent', 'Cyber safety & deepfakes'],
            examTip: 'Data privacy protects individuals from unconsented surveillance and corporate profiling.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is AI Bias? How can developers prevent bias in AI systems?',
          marks: '2 Marks',
          answer: 'AI Bias is when an AI model makes unfair or discriminatory decisions due to flawed or unrepresentative training data. Developers can prevent bias by: 1) Collecting diverse, balanced, and representative datasets from multiple demographics, and 2) Regularly auditing and testing models for fairness across different user groups.',
          tip: 'Define bias as unfair outcomes from skewed training data and suggest diverse datasets.'
        }
      ]
    }
  ]
};
