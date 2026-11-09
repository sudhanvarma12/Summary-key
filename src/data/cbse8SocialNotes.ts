import { Subject } from '../types';

export const CBSE_8_SOCIAL: Subject = {
  id: 'cbse8-social',
  code: 'CBSE-087-08',
  name: 'Class 8 Social Science (CBSE Revision Notes)',
  semesterOrGrade: 'Class 8 CBSE',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class8',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Middle School Social Science',
  subjectCategory: 'social',
  units: [
    {
      unitNumber: 1,
      title: 'From Trade to Territory: The Company Establishes Power (History)',
      keyTopics: ['East India Company arrives in the East (1600)', 'Battle of Plassey (1757) & Battle of Buxar (1764)', 'Subsidiary Alliance (Lord Wellesley)', 'Doctrine of Lapse (Lord Dalhousie)'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School History Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 790,
      videoDuration: '3m 05s',
      summaryTelugu: 'వ్యాపారం నుండి సామ్రాజ్యం వరకు: ఈస్ట్ ఇండియా కంపెనీ రాక, ప్లాసీ యుద్ధం (1757), సైన్య సహకార పద్ధతి (Subsidiary Alliance), మరియు రాజ్య సంక్రమణ సిద్ధాంతం (Doctrine of Lapse).',
      summaryEnglish: 'Robert Clive and Mir Jafar at Battle of Plassey, British acquisition of Diwani rights in Bengal (1765), Subsidiary Alliance terms, and Dalhousie\'s annexation of Jhansi and Satara.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Battle of Plassey (1757) & Diwani Rights',
          quickTake: 'The first major military victory for the English East India Company in India.',
          keyPoints: [
            'Siraj-ud-Daulah, Nawab of Bengal, marched to Calcutta and captured Fort William.',
            'Robert Clive led Company forces and bribed Mir Jafar (commander-in-chief) to betray the Nawab.',
            'After Battle of Buxar (1764), Mughal Emperor granted Diwani (right to collect revenue) of Bengal to the Company in 1765.'
          ]
        },
        {
          topic: '2. Expansion Policies: Subsidiary Alliance & Doctrine of Lapse',
          quickTake: 'Diplomatic annexation mechanisms used by British governors without direct military war.',
          keyPoints: [
            'Subsidiary Alliance (Lord Wellesley): Indian rulers were not allowed to have independent armed forces; had to maintain British subsidiary forces; if ruler failed to pay, part of territory was annexed (e.g., Awadh, Hyderabad).',
            'Doctrine of Lapse (Lord Dalhousie): If an Indian ruler died without a natural male heir, his kingdom "lapsed" and became British territory (e.g., Satara, Sambalpur, Udaipur, Nagpur, Jhansi).'
          ]
        }
      ],
      mindmap: {
        center: 'Trade to Territory',
        branches: [
          {
            title: '1. Battles in Bengal',
            subtopics: ['1757 Plassey (Clive vs Siraj-ud-Daulah)', '1764 Buxar', '1765 Diwani of Bengal'],
            examTip: 'Plassey was the turning point from trading company to territorial power.',
            color: 'blue'
          },
          {
            title: '2. Annexation Doctrines',
            subtopics: ['Subsidiary Alliance (Wellesley)', 'Doctrine of Lapse (Dalhousie)', 'Annexation of Jhansi & Awadh'],
            examTip: 'Rani Lakshmibai opposed the British because Dalhousie refused to recognize her adopted son.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What was the Doctrine of Lapse devised by Lord Dalhousie?',
          marks: '2 Marks',
          answer: 'The Doctrine of Lapse was an annexation policy formulated by Governor-General Lord Dalhousie. It stated that if an Indian ruler died without a natural biological male heir, his kingdom would not pass to an adopted son; instead, it would "lapse", meaning it automatically became part of British Company territory.',
          tip: 'State that adopted sons were denied succession rights and territory lapsed to Company.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'When People Rebel: 1857 and After (History)',
      keyTopics: ['Causes of the 1857 Revolt (Political, Economic, Military, Religious)', 'Greased cartridges & Mangal Pandey (Meerut)', 'Bahadur Shah Zafar as symbolic Emperor', 'Aftermath: Government of India Act 1858 (Crown rule)'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE History Specialist',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.97,
      upvotes: 830,
      videoDuration: '3m 15s',
      summaryTelugu: '1857 తిరుగుబాటు: సిపాయిల తిరుగుబాటు కారణాలు, మంగళ్ పాండే, బహదూర్ షా జాఫర్, మరియు 1858 భారత ప్రభుత్వ చట్టం (బ్రిటిష్ క్రౌన్ పాలన).',
      summaryEnglish: 'Enfield rifle cartridges greased with cow/pig fat, mutiny at Meerut on 10 May 1857, leadership of Nana Saheb, Tantia Tope, Rani Lakshmibai, and end of East India Company rule.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Immediate Trigger & Major Centers of Revolt',
          quickTake: 'The widespread popular rebellion against British rule across northern and central India.',
          keyPoints: [
            'Immediate Cause: New Enfield rifle cartridges rumoured to be greased with cow and pig fat, offending Hindu and Muslim sepoys.',
            'Mangal Pandey hanged in Barrackpore on 29 March 1857 for attacking officers.',
            'On 10 May 1857, sepoys in Meerut mutinied, marched to Delhi, and proclaimed 82-year-old Mughal Emperor Bahadur Shah Zafar as their leader.',
            'Key Leaders: Rani Lakshmibai (Jhansi), Nana Saheb (Kanpur), Begum Hazrat Mahal (Lucknow), Kunwar Singh (Bihar).'
          ]
        },
        {
          topic: '2. Changes Introduced by the British After 1857',
          quickTake: 'The British Crown took direct control of Indian administration in 1858.',
          keyPoints: [
            'Government of India Act 1858: Transferred all powers from the East India Company to the British Crown (Queen Victoria).',
            'Governor-General was given the title of Viceroy (personal representative of the Crown).',
            'Doctrine of Lapse was abandoned; Indian rulers were assured their territories would not be annexed.',
            'Ratio of European soldiers in the army was increased, and recruitment from Gurkhas, Sikhs, and Pathans was favoured.'
          ]
        }
      ],
      mindmap: {
        center: 'Revolt of 1857',
        branches: [
          {
            title: '1. Spark & Spread',
            subtopics: ['Enfield greased cartridges', 'Mangal Pandey Barrackpore', 'Meerut to Delhi (10 May)', 'Bahadur Shah Zafar leader'],
            examTip: 'The revolt started as a sepoy mutiny but quickly turned into a popular rebellion.',
            color: 'rose'
          },
          {
            title: '2. 1858 Changes',
            subtopics: ['Company rule ended', 'Crown took direct power (Queen Victoria)', 'Viceroy title created', 'Doctrine of Lapse withdrawn'],
            examTip: 'Governor-General became known as the Viceroy of India after 1858.',
            color: 'blue'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What were the major changes brought by the Government of India Act of 1858?',
          marks: '3 Marks',
          answer: '1) Powers of the East India Company were transferred directly to the British Crown. 2) A member of the British Cabinet was appointed as Secretary of State for India. 3) The Governor-General of India was given the new title of Viceroy. 4) All ruling chiefs were assured that their territory would never be annexed in future.',
          tip: 'Mention transfer to Crown, Secretary of State, and title of Viceroy.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Resources, Land, Soil, and Water (Geography)',
      keyTopics: ['Natural, Human-Made, and Human Resources', 'Renewable vs Non-renewable resources', 'Soil profile and Soil conservation methods (Contour ploughing, Terrace farming, Shelter belts)', 'Water scarcity & Rainwater harvesting'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Geography Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 810,
      videoDuration: '3m 10s',
      summaryTelugu: 'వనరులు, భూమి, నేల మరియు నీరు: పునరుత్పాదక vs పునరుత్పాదకం కాని వనరులు, నేల సంరక్షణ పద్ధతులు (టెర్రస్ ఫార్మింగ్, షెల్టర్ బెల్ట్స్) మరియు వర్షపు నీటి సంరక్షణ.',
      summaryEnglish: 'Classification of resources, sustainable development principles, soil erosion prevention techniques, and drip irrigation water management.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Resource Classification & Sustainable Development',
          quickTake: 'Anything that has utility and value to satisfy human needs is a resource.',
          keyPoints: [
            'Renewable Resources: Get replenished quickly (Solar, Wind, Hydro).',
            'Non-Renewable: Have limited stock; take thousands of years to renew (Coal, Petroleum, Natural Gas).',
            'Sustainable Development: Carefully utilizing resources so that meeting present needs does not compromise needs of future generations.'
          ]
        },
        {
          topic: '2. Methods of Soil Conservation',
          quickTake: 'Techniques used to prevent the removal of fertile topsoil by wind and running water.',
          keyPoints: [
            'Mulching: Bare ground between plants covered with layer of organic matter (straw) to retain soil moisture.',
            'Terrace Farming: Broad flat steps or terraces built on steep slopes so flat surfaces are available for crops; reduces surface runoff.',
            'Contour Ploughing: Ploughing parallel to contours of a hill slope to form natural barrier for water flowing down slope.',
            'Shelter Belts: Rows of trees planted in coastal and dry regions to check wind movement and protect soil cover.'
          ]
        }
      ],
      mindmap: {
        center: 'Resources & Soil',
        branches: [
          {
            title: '1. Resource Types',
            subtopics: ['Renewable (Sun, Wind)', 'Non-renewable (Coal, Oil)', 'Sustainable development rules'],
            examTip: 'Sustainable development balances resource use with future conservation.',
            color: 'emerald'
          },
          {
            title: '2. Soil Conservation',
            subtopics: ['Mulching (Moisture hold)', 'Terrace farming (Hills)', 'Contour ploughing', 'Shelter belts (Wind breaks)'],
            examTip: 'Shelter belts are specifically used in dry and coastal regions against wind erosion.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What are Shelter Belts? In which regions are they most effective?',
          marks: '2 Marks',
          answer: 'Shelter Belts are rows of trees planted closely together along farm boundaries to check the speed of wind and prevent soil erosion. They are most effective in coastal areas and dry arid regions where strong winds blow away dry topsoil.',
          tip: 'State rows of trees to check wind speed in coastal and arid regions.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'The Indian Constitution & Secularism (Civics)',
      keyTopics: ['Why does a country need a Constitution?', 'Key features of the Indian Constitution (Federalism, Separation of Powers, Fundamental Rights)', 'Fundamental Rights (Articles 14-32)', 'What is Secularism? (Indian model vs US model)'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Civics Specialist',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.97,
      upvotes: 840,
      videoDuration: '3m 15s',
      summaryTelugu: 'భారత రాజ్యాంగం & లౌకికవాదం: రాజ్యాంగ ప్రాముఖ్యత, సమాఖ్య వ్యవస్థ (Federalism), ప్రాథమిక హక్కులు (Fundamental Rights), మరియు లౌకిక భావన.',
      summaryEnglish: 'The 6 Fundamental Rights in Indian Constitution, separation of powers (Legislature, Executive, Judiciary), and principle of principled distance in Indian secularism.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Key Features of the Indian Constitution',
          quickTake: 'The foundational framework guaranteeing democratic governance and civil liberties.',
          keyPoints: [
            'Federalism: Existence of more than one level of government in the country (Central, State, and Panchayati Raj).',
            'Parliamentary Form of Government: Representatives are directly elected by the people through universal adult suffrage.',
            'Separation of Powers: Three organs of government—Legislature (makes laws), Executive (implements laws), Judiciary (interprets laws and settles disputes) prevent misuse of power.',
            'Fundamental Rights: "Conscience of the Indian Constitution", protecting citizens against arbitrary state power.'
          ]
        },
        {
          topic: '2. Six Fundamental Rights (Part III of Constitution)',
          quickTake: 'Inviolable basic rights guaranteed to all Indian citizens.',
          keyPoints: [
            '1. Right to Equality (Articles 14-18): Equality before law, abolition of untouchability.',
            '2. Right to Freedom (Articles 19-22): Freedom of speech, assembly, movement, occupation.',
            '3. Right against Exploitation (Articles 23-24): Prohibits human trafficking, forced labour, and child labour below 14 years.',
            '4. Right to Freedom of Religion (Articles 25-28): Freedom of conscience and to practice/propagate any religion.',
            '5. Cultural and Educational Rights (Articles 29-30): Protects minorities to preserve their culture and establish educational institutions.',
            '6. Right to Constitutional Remedies (Article 32): Citizens can approach High Courts or Supreme Court if any fundamental right is violated.'
          ]
        }
      ],
      mindmap: {
        center: 'Constitution & Rights',
        branches: [
          {
            title: '1. Key Pillars',
            subtopics: ['Federalism (Multi-level)', 'Parliamentary democracy', 'Separation of 3 Powers', 'Secularism'],
            examTip: 'Three organs: Legislature (makes), Executive (runs), Judiciary (judges).',
            color: 'blue'
          },
          {
            title: '2. 6 Fundamental Rights',
            subtopics: ['Equality (Art 14-18)', 'Freedom (Art 19-22)', 'Against Exploitation (Art 23-24)', 'Religion (Art 25-28)', 'Culture & Education', 'Constitutional Remedies (Art 32)'],
            examTip: 'Dr. Ambedkar called Article 32 (Constitutional Remedies) the heart and soul of the Constitution.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why did Dr. B.R. Ambedkar call the Right to Constitutional Remedies (Article 32) the "heart and soul" of the Indian Constitution?',
          marks: '2 Marks',
          answer: 'Dr. B.R. Ambedkar referred to Article 32 as the heart and soul of the Constitution because it empowers citizens to directly petition the Supreme Court or High Courts through writs (Habeas Corpus, Mandamus, etc.) whenever any of their fundamental rights are violated by the state or individuals.',
          tip: 'State that it makes all other fundamental rights enforceable in court.'
        }
      ]
    }
  ]
};
