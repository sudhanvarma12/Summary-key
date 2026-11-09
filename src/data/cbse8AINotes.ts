import { Subject } from '../types';

export const CBSE_8_AI: Subject = {
  id: 'cbse8-ai',
  code: 'CBSE-AI-08',
  name: 'Class 8 Artificial Intelligence (CBSE Foundation)',
  semesterOrGrade: 'Class 8 CBSE',
  creditsOrMarks: '50 Marks Theory + 50 Practical',
  gradeOrBranch: 'class8',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Middle School AI',
  subjectCategory: 'ai',
  units: [
    {
      unitNumber: 1,
      title: 'Introduction to AI & Smart Living',
      keyTopics: ['What is Intelligence? (Human vs Artificial)', 'Automation vs AI', 'Smart Home & Internet of Things (IoT)', 'Examples of AI in everyday life (OTT recommendations, Voice assistants)'],
      readingTime: '9 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Middle School Tech Mentor',
      pdfPages: 4,
      fileSize: '0.9 MB',
      rating: 4.95,
      upvotes: 770,
      videoDuration: '2m 45s',
      summaryTelugu: 'కృత్రిమ మేధస్సు పరిచయం: మానవ vs కృత్రిమ మేధస్సు, ఆటోమేషన్ vs AI, స్మార్ట్ హోమ్ పరికరాలు మరియు వాయిస్ అసిస్టెంట్లు.',
      summaryEnglish: 'Differences between simple automation (fans/air conditioners with timers) and true AI systems that perceive and learn from data.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. What is Artificial Intelligence?',
          quickTake: 'The capability of a machine to imitate intelligent human behaviour like learning, reasoning, and self-correction.',
          keyPoints: [
            'John McCarthy is regarded as the Father of Artificial Intelligence (coined the term in 1956).',
            'Automation: Follows a fixed set of pre-programmed steps without any thinking or adaptation (e.g. traffic timer lights).',
            'AI: Observes patterns, analyzes past behavior, makes predictions, and adapts to new situations (e.g. YouTube video recommendations).'
          ]
        },
        {
          topic: '2. Smart Homes & IoT',
          quickTake: 'Smart devices connected to the internet sharing sensor data to automate living tasks.',
          keyPoints: [
            'IoT (Internet of Things): Network of physical devices embedded with sensors, software, and connectivity to exchange data.',
            'Smart assistants like Google Assistant, Alexa, and Siri process voice input and communicate with smart lights, thermostats, and speakers.'
          ]
        }
      ],
      mindmap: {
        center: 'Class 8 AI Basics',
        branches: [
          {
            title: '1. AI Definition',
            subtopics: ['Machine mimics human cognition', 'John McCarthy (1956)', 'Learn, Reason, Adapt'],
            examTip: 'Remember John McCarthy is known as the Father of AI.',
            color: 'blue'
          },
          {
            title: '2. Automation vs AI',
            subtopics: ['Automation (Static rules)', 'AI (Dynamic learning)', 'IoT sensors & Smart homes'],
            examTip: 'A washing machine timer is automation; Spotify song recommender is AI.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'How is an AI-powered system different from a simple automated machine?',
          marks: '2 Marks',
          answer: 'An automated machine follows fixed, repetitive instructions written by programmers and cannot change its behavior (e.g., an automatic alarm clock). An AI system collects data from its environment, learns from past experience, and adapts its decisions to new and changing circumstances (e.g., an autonomous self-driving car).',
          tip: 'State static pre-programmed instructions vs dynamic learning from data.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'The Three Domains of AI',
      keyTopics: ['Data Sciences (Numbers, statistics, spreadsheets)', 'Computer Vision (CV: Pixels, filters, image detection)', 'Natural Language Processing (NLP: Voice, speech, text processing)'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Secondary Tech Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 790,
      videoDuration: '2m 55s',
      summaryTelugu: 'AI లో మూడు ప్రధాన రంగాలు: డేటా సైన్సెస్ (గణాంకాలు), కంప్యూటర్ విజన్ (ఇమేజ్ ప్రాసెసింగ్), మరియు నేచురల్ లాంగ్వేజ్ ప్రాసెసింగ్ (టెక్స్ట్ & స్పీచ్).',
      summaryEnglish: 'Clear classification of AI tasks into Data, Vision, and Language domains with relatable school-life examples.',
      examWeightage: '10 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Data Sciences Domain',
          quickTake: 'AI models that find patterns and make predictions from structured numbers, tables, and charts.',
          keyPoints: [
            'Input: Numbers, dates, scores, stock values, temperatures.',
            'Applications: Weather forecasting, student attendance analytics, credit card fraud detection.'
          ]
        },
        {
          topic: '2. Computer Vision (CV) Domain',
          quickTake: 'AI models that understand, analyze, and process digital photos and live video feeds.',
          keyPoints: [
            'Input: Pixels, images, video frames.',
            'Applications: Phone face unlock, QR code scanning, self-driving cars recognizing traffic lights.'
          ]
        },
        {
          topic: '3. Natural Language Processing (NLP) Domain',
          quickTake: 'AI models that understand, interpret, and generate human written and spoken words.',
          keyPoints: [
            'Input: Text sentences, speech audio, voice commands.',
            'Applications: Email spam filtering, language translation (Google Translate), conversational chatbots.'
          ]
        }
      ],
      mindmap: {
        center: '3 AI Domains',
        branches: [
          {
            title: '1. Data Sciences',
            subtopics: ['Numeric data & tables', 'Weather prediction', 'Price comparison engines'],
            examTip: 'Deals primarily with numbers and tabular data.',
            color: 'blue'
          },
          {
            title: '2. Computer Vision',
            subtopics: ['Images & video feeds', 'Face unlock biometric', 'Self-driving camera sensors'],
            examTip: 'Deals with visual pixels from cameras.',
            color: 'purple'
          },
          {
            title: '3. NLP',
            subtopics: ['Spoken & written language', 'Virtual voice assistants', 'Chatbots & translation'],
            examTip: 'Deals with human language semantics and grammar.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Classify the following into the appropriate AI domain: 1) Face Unlock on a smartphone, 2) Predictive text typing on a keyboard, 3) Predicting next month\'s rainfall.',
          marks: '3 Marks',
          answer: '1) Face Unlock -> Computer Vision (CV). 2) Predictive text typing -> Natural Language Processing (NLP). 3) Predicting rainfall -> Data Sciences.',
          tip: 'Match face unlock to CV, predictive text to NLP, and rainfall prediction to Data Sciences.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'AI and Sustainable Development Goals (SDGs)',
      keyTopics: ['The 17 United Nations SDGs', 'AI for Zero Hunger & Good Health (SDGs 2 & 3)', 'AI for Quality Education & Clean Energy (SDGs 4 & 7)', 'AI for Climate Action (SDG 13)'],
      readingTime: '9 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE AI Curriculum Designer',
      pdfPages: 4,
      fileSize: '0.9 MB',
      rating: 4.95,
      upvotes: 750,
      videoDuration: '2m 45s',
      summaryTelugu: 'AI మరియు సుస్థిర అభివృద్ధి లక్ష్యాలు (SDGs): 17 UN లక్ష్యాలు, ఆరోగ్య రక్షణలో AI, విద్యా రంగం మరియు వాతావరణ మార్పుల పరిష్కారాలు.',
      summaryEnglish: 'How machine learning algorithms assist farmers with drone soil mapping, early disease detection, and optimizing solar/wind energy generation.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. What are the Sustainable Development Goals (SDGs)?',
          quickTake: 'A universal call to action adopted by all 193 United Nations member states in 2015 to end poverty and protect the planet by 2030.',
          keyPoints: [
            'There are 17 SDGs covering social, economic, and environmental challenges.',
            'Examples: SDG 1 (No Poverty), SDG 2 (Zero Hunger), SDG 3 (Good Health and Well-being), SDG 4 (Quality Education), SDG 13 (Climate Action).'
          ]
        },
        {
          topic: '2. How AI accelerates achievement of SDGs',
          quickTake: 'Leveraging automated sensing and prediction to solve global resource challenges.',
          keyPoints: [
            'Zero Hunger (SDG 2): AI crop drones detect pest infections early and optimize irrigation to conserve groundwater.',
            'Good Health (SDG 3): AI scans detect tuberculosis and retinopathy years earlier than manual checkups.',
            'Climate Action (SDG 13): AI models forecast cyclone paths and track deforestation in real time using satellite imagery.'
          ]
        }
      ],
      mindmap: {
        center: 'AI for SDGs',
        branches: [
          {
            title: '1. 17 UN Goals',
            subtopics: ['Target year 2030', '193 countries agreement', 'Poverty, Planet & Peace'],
            examTip: 'Remember the target year for achieving SDGs is 2030.',
            color: 'blue'
          },
          {
            title: '2. Real-World AI Impact',
            subtopics: ['SDG 2 (Smart agriculture)', 'SDG 3 (Early disease diagnosis)', 'SDG 13 (Satellite climate tracking)'],
            examTip: 'Cite AI in agriculture (soil drone sensing) as a key example.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'How can Artificial Intelligence help farmers achieve SDG 2 (Zero Hunger)?',
          marks: '2 Marks',
          answer: 'AI helps farmers achieve Zero Hunger by: 1) Analyzing soil moisture and satellite weather data to optimize irrigation, saving water, and 2) Using drone camera images and computer vision to identify plant pests and diseases early, preventing widespread crop loss.',
          tip: 'State precision irrigation and early crop disease detection via drones.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'How Machines Learn & AI Ethics',
      keyTopics: ['Machine Learning concept: Data + Rules vs Data + Answers', 'Google Teachable Machine (Image, Sound, Pose models)', 'AI Ethics: Fairness, Data Privacy, and Digital Well-being'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Skill Education Board',
      verifiedRole: 'CBSE Ethics Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 780,
      videoDuration: '2m 50s',
      summaryTelugu: 'మెషిన్లు ఎలా నేర్చుకుంటాయి & AI నీతిశాస్త్రం: సాంప్రదాయ ప్రోగ్రామింగ్ vs మెషిన్ లెర్నింగ్, టీచబుల్ మెషిన్ (Teachable Machine), మరియు ఆన్‌లైన్ డేటా రక్షణ.',
      summaryEnglish: 'Traditional programming (Input + Rules = Output) vs Machine Learning (Input + Output = Rules), interactive model training, and privacy.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Traditional Programming vs Machine Learning',
          quickTake: 'In traditional programming, humans write all rules; in machine learning, the machine learns the rules from examples.',
          keyPoints: [
            'Traditional: Data + Rules -> Output (Computer executes predefined logic).',
            'Machine Learning: Data + Output -> Rules (Computer figures out the relationship between inputs and outputs).'
          ]
        },
        {
          topic: '2. Ethics, Privacy & Digital Footprint',
          quickTake: 'Using AI responsibly without compromising human dignity, fairness, or privacy.',
          keyPoints: [
            'Data Privacy: Guarding personal information from unauthorized access and commercial misuse.',
            'AI Bias: When algorithms favor or disfavor certain groups due to unbalanced training examples.',
            'Deepfakes & Misinformation: Ethical caution when AI generates realistic but fake videos or audio.'
          ]
        }
      ],
      mindmap: {
        center: 'Learning & Ethics',
        branches: [
          {
            title: '1. How Machines Learn',
            subtopics: ['Data + Output = Rules', 'Training with examples', 'Teachable Machine interactive demo'],
            examTip: 'Traditional programming produces output; Machine learning produces the rules.',
            color: 'purple'
          },
          {
            title: '2. Ethical Rules',
            subtopics: ['Data privacy & consent', 'Algorithmic bias awareness', 'Digital footprint safety'],
            examTip: 'Always be mindful of what data you upload online to train models.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Contrast Traditional Programming with Machine Learning.',
          marks: '2 Marks',
          answer: 'In Traditional Programming, a human developer feeds both the Data and the explicit Rules into the computer to produce an Output. In Machine Learning, the computer is fed both the Data and the desired Output examples, and the machine automatically discovers and formulates the underlying Rules.',
          tip: 'State: Traditional (Data + Rules -> Output) vs ML (Data + Output -> Rules).'
        }
      ]
    }
  ]
};
