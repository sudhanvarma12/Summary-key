import { Subject } from '../types';

export const CBSE_SCHOOL_EXTRA_SUBJECTS: Subject[] = [
  // ==========================================
  // 1. VISAKHA VALLEY SCHOOL - SOCIAL SCIENCE (CBSE-087)
  // ==========================================
  {
    id: 'vvs-cbse-social',
    code: 'CBSE-087',
    name: 'Social Science (History, Geography, Civics & Economics)',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Core Humanities',
    units: [
      {
        unitNumber: 1,
        title: 'Nationalism in Europe & India',
        keyTopics: [
          'The French Revolution and the Idea of the Nation (Civil Code 1804 / Napoleonic Code)',
          'Unification of Germany (Otto von Bismarck) and Italy (Cavour, Mazzini, Garibaldi)',
          'First World War, Khilafat, and the Non-Cooperation Movement in India',
          'The Salt March, Civil Disobedience Movement, and the Sense of Collective Belonging'
        ],
        readingTime: '24 mins',
        verifiedBy: 'P. Rajeshwari (CBSE Social Faculty)',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.97,
        upvotes: 890,
        videoDuration: '4m 45s',
        summaryTelugu: 'ఐరోపా & భారతదేశంలో జాతీయవాదం: ఫ్రెంచ్ విప్లవం, బిస్మార్క్ నేతృత్వంలో జర్మనీ ఏకీకరణ, గాంధీజీ ఉప్పు సత్యాగ్రహం (దండి మార్చ్) మరియు శాసనోల్లంఘన ఉద్యమం.',
        summaryEnglish: 'Complete timeline of Civil Code 1804, Italian unification triad, Gandhi\'s 11 demands, and 5-mark map pointing locations.',
        examWeightage: '10 Marks in CBSE Board',
        formulaeCount: 4,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Napoleonic Code (Civil Code of 1804)',
            quickTake: 'Did away with all privileges based on birth, established equality before law, and secured right to property.',
            keyPoints: [
              'Simplified administrative divisions, abolished feudal system, and freed peasants from serfdom.',
              'Guild restrictions were removed in towns; uniform weights, measures, and national currency introduced.',
              'Drawback: Did not grant political freedom; increased taxation, censorship, and forced conscription into French armies.'
            ],
            formulaOrEquation: 'Civil Code 1804 = Equality Before Law + Right to Property - Birth Privileges'
          },
          {
            topic: 'Unification of Italy & Germany',
            quickTake: 'Germany unified under Prussian leadership (Bismarck); Italy unified through diplomatic alliance and popular uprisings.',
            keyPoints: [
              'Germany: Otto von Bismarck led through "Blood and Iron"; 3 wars over 7 years with Austria, Denmark, France -> Kaiser William I proclaimed Emperor at Versailles (1871).',
              'Italy: Divided into 7 states (only Sardinia-Piedmont ruled by Italian princely house).',
              'Italian Triad: Mazzini (Ideology/Young Italy), Cavour (Diplomatic alliance with France), Garibaldi (Red Shirts army).'
            ],
            formulaOrEquation: 'Italian Unification = Mazzini (Heart) + Cavour (Brain) + Garibaldi (Sword)'
          },
          {
            topic: 'The Salt March & Civil Disobedience Movement',
            quickTake: 'Salt was chosen as symbol because it was consumed by rich and poor alike; British salt tax was most oppressive.',
            keyPoints: [
              'Gandhi\'s march: 240 miles from Sabarmati Ashram to coastal town of Dandi with 78 trusted volunteers (March 12 - April 6, 1930).',
              'Marked transition from Non-Cooperation (refusing cooperation) to Civil Disobedience (actively breaking colonial laws).',
              'People manufactured salt, boycotted foreign cloth, picketed liquor shops, and refused to pay chaukidari taxes.'
            ],
            formulaOrEquation: 'Dandi March: 240 Miles • 24 Days • 78 Volunteers -> Broke Salt Law'
          }
        ],
        mindmap: {
          center: 'Nationalism in Europe & India',
          branches: [
            {
              title: '1. French Revolution & Ideas',
              subtopics: ['La Patrie & Le Citoyen', 'Tricolour Flag', 'Civil Code 1804 (Napoleonic Code)', 'Zollverein customs union 1834'],
              examTip: 'Zollverein abolished tariff barriers and reduced currencies from 30 to 2.',
              color: 'blue'
            },
            {
              title: '2. European Unifications',
              subtopics: ['German Unification (Bismarck)', 'Italian Unification (Cavour & Garibaldi)', 'Britain: Gradual parliamentary process', 'Balkan ethnic conflicts (WW1 trigger)'],
              examTip: 'Kaiser William I was proclaimed German Emperor in the Hall of Mirrors at Versailles.',
              color: 'purple'
            },
            {
              title: '3. Indian Non-Cooperation',
              subtopics: ['Rowlatt Act 1919 & Jallianwala Bagh', 'Khilafat alliance', 'Boycott of foreign goods', 'Chauri Chaura withdrawal (1922)'],
              examTip: 'Mahatma Gandhi withdrew Non-Cooperation movement after violent Chauri Chaura incident.',
              color: 'emerald'
            },
            {
              title: '4. Civil Disobedience & Symbols',
              subtopics: ['11 Demands to Viceroy Irwin', 'Dandi Salt March 1930', 'Gandhi-Irwin Pact 1931', 'Bharat Mata painting (Abanindranath Tagore)'],
              examTip: 'Map skill: Locate Dandi (Gujarat), Champaran (Bihar), and Amritsar (Punjab).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Resources, Agriculture & Manufacturing',
        keyTopics: [
          'Classification of resources: Biotic/Abiotic, Renewable/Non-renewable, Individual/Community/National/International',
          'Soil types in India: Alluvial, Black (Regur), Red & Yellow, Laterite, Arid (distribution & suitability)',
          'Types of farming: Primitive subsistence, Intensive subsistence, and Commercial (Plantation)',
          'Cropping seasons (Rabi, Kharif, Zaid) and major food/cash crops (Rice, Wheat, Cotton, Jute)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'M. Sridhar (VVS Geography Faculty)',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.96,
        upvotes: 790,
        videoDuration: '4m 30s',
        summaryTelugu: 'వనరులు మరియు వ్యవసాయం: నల్లరేగడి మరియు ఒండ్రు నేలల లక్షణాలు, ఖరీఫ్-రబీ పంటల కాలాలు, ఆహార పంటలు (వరి, గోధుమ) మరియు పత్తి సాగు.',
        summaryEnglish: 'Soil classification matrix, rainfall and temperature conditions for Rice & Wheat, and mineral belts of India.',
        examWeightage: '10 Marks in CBSE Board',
        formulaeCount: 3,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Major Soil Types of India',
            quickTake: 'Alluvial soil covers northern plains; Black soil is ideal for cotton in Deccan plateau.',
            keyPoints: [
              'Alluvial Soil: Deposited by Indus, Ganga, Brahmaputra; rich in potash and lime; subdivided into Khadar (new, fertile) and Bangar (old, kankar nodules).',
              'Black Soil (Regur): Formed from volcanic lava rocks; clayey, holds moisture; rich in calcium carbonate and magnesium; ideal for cotton.',
              'Laterite Soil: Result of intense leaching in heavy rainfall regions (Western Ghats); acidic, poor in humus, suitable for tea/coffee/cashew with manure.'
            ],
            formulaOrEquation: 'Khadar (New alluvial, fine) vs Bangar (Old alluvial, coarse kankar)'
          },
          {
            topic: 'Cropping Seasons & Major Crops',
            quickTake: 'Three distinct cropping seasons determine agricultural rhythm in India.',
            keyPoints: [
              'Kharif: Sown with onset of monsoon (June-July), harvested in Sept-Oct. Crops: Paddy, Maize, Jowar, Bajra, Cotton, Jute.',
              'Rabi: Sown in winter (Oct-Dec), harvested in summer (April-June). Crops: Wheat, Barley, Peas, Gram, Mustard.',
              'Zaid: Short summer season between Rabi and Kharif. Crops: Watermelon, Cucumber, Vegetables, Fodder.'
            ],
            formulaOrEquation: 'Kharif (Monsoon: Paddy) | Rabi (Winter: Wheat) | Zaid (Summer: Watermelon)'
          }
        ],
        mindmap: {
          center: 'Resources & Agriculture',
          branches: [
            {
              title: '1. Resource Planning',
              subtopics: ['Rio Earth Summit 1992', 'Agenda 21 sustainable growth', 'Land degradation causes', 'Shelter belts & contour ploughing'],
              examTip: 'Over-irrigation in Punjab/Haryana causes land degradation due to waterlogging and salinity.',
              color: 'blue'
            },
            {
              title: '2. Soil Classification',
              subtopics: ['Alluvial (Bangar vs Khadar)', 'Black soil (Cotton / Deccan trap)', 'Red & Yellow (Iron diffusion)', 'Laterite (Leaching)'],
              examTip: 'Black soil is self-ploughing because it develops deep cracks during hot weather.',
              color: 'purple'
            },
            {
              title: '3. Farming Types',
              subtopics: ['Primitive subsistence (Slash & Burn/Jhumming)', 'Intensive subsistence (High population pressure)', 'Commercial (Single crop plantations)'],
              examTip: 'Tea in Assam and Coffee in Karnataka are examples of plantation commercial farming.',
              color: 'emerald'
            },
            {
              title: '4. Major Crops Criteria',
              subtopics: ['Rice (>100cm rain, >25°C)', 'Wheat (50-75cm rain, cool climate)', 'Millets (Jowar, Bajra, Ragi coarse grains)', 'Fibre crops (Cotton, Jute/Golden Fibre)'],
              examTip: 'Jute is called the Golden Fibre, grown extensively in West Bengal delta.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Power Sharing, Federalism & Democratic Politics',
        keyTopics: [
          'Power Sharing: Belgium\'s constitutional accommodation vs Sri Lanka\'s majoritarianism crisis',
          'Forms of power sharing: Horizontal (Organs), Vertical (Levels), Social groups, Political parties',
          'Federalism: Features, "Coming together" vs "Holding together" federations',
          'Decentralisation in India: 73rd and 74th Constitutional Amendments (Panchayati Raj & Municipalities)'
        ],
        readingTime: '20 mins',
        verifiedBy: 'K. Sunita (VVS Civics Faculty)',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 18,
        fileSize: '2.2 MB',
        rating: 4.98,
        upvotes: 840,
        videoDuration: '4m 15s',
        summaryTelugu: 'అధికార విభజన మరియు సమాఖ్య వ్యవస్థ (ఫెడరలిజం): బెల్జియం vs శ్రీలంక నమూనాలు, అధికారాల విభజన జాబితాలు (యూనియన్, స్టేట్, కాన్‌కరెంట్) మరియు స్థానిక స్వపరిపాలన (పంచాయతీ రాజ్).',
        summaryEnglish: 'Comparison of Belgium vs Sri Lanka, Union vs State vs Concurrent legislative lists, and 1992 decentralization reforms.',
        examWeightage: '10 Marks in CBSE Board',
        formulaeCount: 3,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Belgium vs Sri Lanka: Power Sharing Models',
            quickTake: 'Accommodation preserved unity in Belgium; majoritarianism sparked civil war in Sri Lanka.',
            keyPoints: [
              'Sri Lanka: 1956 Act recognized Sinhala as sole official language, favored Sinhala applicants for universities and jobs, disenfranchised Tamils -> Resulted in brutal 25-year Civil War.',
              'Belgium Model: Equal Dutch and French speaking ministers in central government; community government for cultural affairs -> Peace and Brussels selected as EU headquarters.'
            ],
            formulaOrEquation: 'Prudential reasons (reduces conflict) + Moral reasons (spirit of democracy)'
          },
          {
            topic: 'Three Legislative Lists in Indian Federalism',
            quickTake: 'Constitution divides legislative powers between Union and State governments.',
            keyPoints: [
              'Union List (97 subjects of national importance): Defence, Foreign Affairs, Banking, Communications, Currency. Only Central Govt legislates.',
              'State List (66 subjects of local importance): Police, Trade, Commerce, Agriculture, Irrigation. Only State Govt legislates.',
              'Concurrent List (47 subjects of common interest): Education, Forests, Trade Unions, Marriage. Both can legislate; in conflict, Union law prevails.',
              'Residuary Subjects: Matters not in any list (e.g. Cyber law, IT) go exclusively to Union.'
            ],
            formulaOrEquation: 'Union List (National) + State List (Local) + Concurrent List (Shared)'
          }
        ],
        mindmap: {
          center: 'Power Sharing & Federalism',
          branches: [
            {
              title: '1. Power Sharing Forms',
              subtopics: ['Horizontal (Legislature, Executive, Judiciary)', 'Vertical (Center, State, Local)', 'Community Government (Belgium)', 'Coalition Governments'],
              examTip: 'Horizontal power sharing is also known as a system of checks and balances.',
              color: 'blue'
            },
            {
              title: '2. Case Studies',
              subtopics: ['Belgium Accommodation (4 amendments)', 'Brussels EU headquarters', 'Sri Lanka 1956 Act & Civil War', 'Moral vs Prudential justification'],
              examTip: 'Prudential reasons emphasize that power sharing will bring out better outcomes by reducing civil strife.',
              color: 'purple'
            },
            {
              title: '3. Features of Federalism',
              subtopics: ['Two or more tiers of govt', 'Constitutional jurisdiction', 'Independent judiciary umpire', 'Coming together (USA) vs Holding together (India)'],
              examTip: 'In holding together federations like India, the central government tends to be more powerful vis-a-vis the states.',
              color: 'emerald'
            },
            {
              title: '4. Decentralisation 1992',
              subtopics: ['Mandatory regular elections', '1/3rd seats reserved for women', 'State Election Commission created', 'Gram Panchayat, Panchayat Samiti, Zilla Parishad'],
              examTip: 'State the 4 major steps taken in the 1992 constitutional amendment for decentralisation.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // 2. VISAKHA VALLEY SCHOOL - ENGLISH LANGUAGE & LITERATURE (CBSE-184)
  // ==========================================
  {
    id: 'vvs-cbse-english',
    code: 'CBSE-184',
    name: 'English Language & Literature',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Core Language',
    units: [
      {
        unitNumber: 1,
        title: 'First Flight: Prose & Poetry Masterpieces',
        keyTopics: [
          'A Letter to God (Lencho\'s unshakeable faith, postmaster\'s generosity, irony of bunch of crooks)',
          'Nelson Mandela: Long Walk to Freedom (Apartheid, courage as triumph over fear, twin obligations)',
          'Dust of Snow & Fire and Ice (Robert Frost - symbolic transformation & desire vs hatred)',
          'A Tiger in the Zoo (Leslie Norris - concrete cell imprisonment vs natural jungle freedom)'
        ],
        readingTime: '20 mins',
        verifiedBy: 'D. Mary Margaret (VVS English HOD)',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.1 MB',
        rating: 4.98,
        upvotes: 920,
        videoDuration: '4m 00s',
        summaryTelugu: 'ఫస్ట్ ఫ్లైట్: లెంచో నమ్మకం (ఎ లెటర్ టు గాడ్), నెల్సన్ మండేలా ఆత్మకథ సారాంశం, మరియు రాబర్ట్ ఫ్రాస్ట్ కవితల విశ్లేషణ.',
        summaryEnglish: 'Character sketches, poetic devices (metaphor, alliteration, enjambment), and thematic value-based 6-mark answers.',
        examWeightage: '16 Marks in CBSE Board',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'A Letter to God (Irony Analysis)',
            quickTake: 'Lencho writes to God asking for 100 pesos after hailstorm destroys his cornfield; calls the helpful postmen crooks.',
            keyPoints: [
              'Irony of the situation: Postmaster and postal staff collected 70 pesos out of charity to keep Lencho\'s faith alive.',
              'Lencho suspects the post office employees stole the missing 30 pesos, calling them a "bunch of crooks".',
              'Theme: Blind, extreme faith without gratitude or logical reason.'
            ],
            formulaOrEquation: 'Irony: Helpers labeled as Thieves by the Receiver'
          },
          {
            topic: 'Nelson Mandela: Courage & Twin Obligations',
            quickTake: 'True courage is not the absence of fear, but the triumph over it.',
            keyPoints: [
              'Twin obligations: First obligation to family, parents, wife, and children; Second obligation to community, people, and country.',
              'Freedom is indivisible; chains on anyone of his people were chains on all of them.',
              'The oppressor is just as enslaved as the oppressed: both are robbed of their humanity.'
            ],
            formulaOrEquation: 'Courage = Triumph over Fear; Oppressor & Oppressed both lack true freedom'
          },
          {
            topic: 'Poetic Devices in Robert Frost & Leslie Norris',
            quickTake: 'High-frequency literary devices examined in CBSE stanza extracts.',
            keyPoints: [
              'Dust of Snow: Hemlock tree (poisonous plant) and crow (inauspicious bird) bring positive change of mood -> nature transcends omens.',
              'Fire and Ice: Fire symbolizes uncontrolled passion/greed/lust; Ice symbolizes cold hatred, rigidity, and intolerance.',
              'A Tiger in the Zoo: Contrast between tiger in cage ("pads of velvet quiet", "quiet rage") and wild jungle ("snarling around houses").'
            ],
            formulaOrEquation: 'Fire = Desire / Greed; Ice = Cold Hatred / Indifference'
          }
        ],
        mindmap: {
          center: 'First Flight Masterworks',
          branches: [
            {
              title: '1. A Letter to God',
              subtopics: ['Hailstorm destruction', 'Lencho\'s letter for 100 pesos', 'Postmaster\'s act of charity (70 pesos)', 'Irony: "Bunch of crooks"'],
              examTip: 'Explain the situational irony where the benefactors are accused of theft.',
              color: 'blue'
            },
            {
              title: '2. Nelson Mandela',
              subtopics: ['Inauguration at Union Buildings amphitheatre', 'Courage definition (triumph over fear)', 'Twin obligations of every human', 'The oppressor must be liberated too'],
              examTip: 'Quote: "Courage is not the absence of fear, but the triumph over it."',
              color: 'purple'
            },
            {
              title: '3. Robert Frost Poems',
              subtopics: ['Dust of Snow (Hemlock tree & Crow)', 'Enjambment throughout 8 lines', 'Fire and Ice (Desire vs Hatred)', 'Rhyme scheme abaabcbcb'],
              examTip: 'Enjambment is when a sentence continues to the next line without any punctuation mark.',
              color: 'emerald'
            },
            {
              title: '4. A Tiger in the Zoo',
              subtopics: ['Concrete cell vs Natural habitat', 'Oxymoron: "Quiet rage"', 'Lurking in shadow near water hole', 'Staring at brilliant stars'],
              examTip: 'The poem conveys the cruelty of caging majestic wild animals for human entertainment.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Analytical Writing & Applied Grammar',
        keyTopics: [
          'Formal Letter Writing: Letter to Editor on civic/environmental issues in Visakhapatnam',
          'Analytical Paragraph: Interpreting bar charts, line graphs, survey data with comparative vocabulary',
          'Tenses, Subject-Verb Agreement / Concord, Modals (may, might, should, must, ought to)',
          'Reported Speech: Changing Direct to Indirect speech (Statements, Commands, Interrogatives)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS English Academic Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.0 MB',
        rating: 4.96,
        upvotes: 870,
        videoDuration: '4m 10s',
        summaryTelugu: 'రైటింగ్ స్కిల్స్ & ఇంగ్లీష్ గ్రామర్: ఎడిటర్‌కు లేఖలు, గ్రాఫ్‌ల విశ్లేషణ పారాగ్రాఫ్, రిపోర్టెడ్ స్పీచ్ నియమాలు మరియు సబ్జెక్ట్-వెర్బ్ అగ్రిమెంట్.',
        summaryEnglish: 'Exact CBSE marking format for Letter to Editor, connectors for analytical paragraphs, and error correction cheatsheet.',
        examWeightage: '20 Marks in CBSE Board',
        formulaeCount: 6,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Letter to the Editor Format',
            quickTake: 'Standard 5-mark format: Sender address, Date, Receiver address, Subject, Salutation, Body (3 paras), Complimentary close.',
            keyPoints: [
              'Opening sentence: "Through the esteemed columns of your widely circulated daily, I wish to draw the attention of the authorities concerned towards..."',
              'Never ask the Editor to solve the problem; ask the Editor to highlight the issue to authorities.',
              'Three paragraphs: Para 1 (Introduce issue), Para 2 (Details/impact), Para 3 (Proposed remedies/appeal).'
            ],
            formulaOrEquation: 'Format: Sender Addr -> Date -> Receiver Addr -> Subject -> Sir -> 3 Paras -> Yours sincerely'
          },
          {
            topic: 'Reported Speech Conversion Rules',
            quickTake: 'Reporting verb in past tense changes tense of direct speech into corresponding past.',
            keyPoints: [
              'Simple Present -> Simple Past; Present Continuous -> Past Continuous; Present Perfect -> Past Perfect.',
              'Simple Past -> Past Perfect (e.g. "I saw him" -> he had seen him).',
              'Universal truths / scientific laws do NOT change tense (e.g. "Water boils at 100°C").',
              'Pronoun shifts: I -> he/she; we -> they; here -> there; now -> then; today -> that day; yesterday -> previous day.'
            ],
            formulaOrEquation: 'Said to -> Told; Said to (Question) -> Asked / Inquired whether/if'
          }
        ],
        mindmap: {
          center: 'Writing & Grammar',
          branches: [
            {
              title: '1. Letter to Editor',
              subtopics: ['Sender address & Date format', 'Subject (Underline, < 8 words)', '3 Paragraph structure', 'Sign-off: Yours sincerely / faithfully'],
              examTip: 'Date format: 31st October 2026 (never 31/10/26 in formal letters).',
              color: 'blue'
            },
            {
              title: '2. Analytical Paragraph',
              subtopics: ['Introductory paraphrase', 'Highs and lows data comparison', 'Trend verbs (surged, plummeted, plateaued)', 'Concluding inference'],
              examTip: 'Do not give personal opinions in analytical paragraph; stick purely to the given graph data.',
              color: 'purple'
            },
            {
              title: '3. Reported Speech',
              subtopics: ['Tense back-shifting rules', 'Interrogative sentences (if/whether vs wh-words)', 'Imperatives (ordered/requested to + V1)', 'No change for universal facts'],
              examTip: 'In wh-questions, word order becomes assertive: "Where do you live?" -> He asked where I lived.',
              color: 'emerald'
            },
            {
              title: '4. Subject-Verb Concord',
              subtopics: ['Either...or / Neither...nor (verb agrees with nearer subject)', 'Each, Every, Either, Neither take singular verb', 'A number of (plural) vs The number of (singular)'],
              examTip: '"The number of students IS increasing", but "A number of students ARE absent".',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // 3. VISAKHA VALLEY SCHOOL - ARTIFICIAL INTELLIGENCE (CBSE-417)
  // ==========================================
  {
    id: 'vvs-cbse-ai',
    code: 'CBSE-417',
    name: 'Artificial Intelligence (Skill Subject)',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '50 Marks Theory + 50 Practical',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Skill Curriculum',
    units: [
      {
        unitNumber: 1,
        title: 'AI Project Cycle & Problem Scoping',
        keyTopics: [
          'What is AI: Intelligence vs Artificial Intelligence; AI, Machine Learning (ML) & Deep Learning (DL) Venn diagram',
          'The 5 Stages of AI Project Cycle: Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation',
          'Problem Scoping using 4Ws Canvas (Who, What, Where, Why)',
          'AI Ethics: Data privacy, AI Bias (algorithmic bias), and Inclusivity'
        ],
        readingTime: '22 mins',
        verifiedBy: 'S. Sudhan Varma (Passkey AI Lead)',
        verifiedRole: 'Visakha Valley Alumnus & Passkey Architect',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.99,
        upvotes: 1120,
        videoDuration: '4m 30s',
        summaryTelugu: 'ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ ప్రాజెక్ట్ సైకిల్: 4Ws కాన్వాస్, డేటా అక్విజిషన్, మెషిన్ లెర్నింగ్ మోడల్స్ మరియు AI నైతికత (డేటా ప్రైవసీ, అల్గారిథమిక్ బయాస్).',
        summaryEnglish: 'Step-by-step breakdown of the 5 AI Project Cycle phases, 4Ws Problem Scoping framework, and Confusion Matrix calculation.',
        examWeightage: '15 Marks in CBSE Board',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'AI vs ML vs Deep Learning',
            quickTake: 'AI is the broad umbrella; Machine Learning is a subset learning from data; Deep Learning uses deep neural networks.',
            keyPoints: [
              'Artificial Intelligence: Machines simulating human intelligence (reasoning, learning, problem solving).',
              'Machine Learning: Subset of AI where computers learn from historical data without being explicitly programmed.',
              'Deep Learning: Subset of ML inspired by biological human brain neural networks with multiple hidden layers.'
            ],
            formulaOrEquation: 'DL ⊂ ML ⊂ AI (Nested concentric circles)'
          },
          {
            topic: 'The 5 Stages of AI Project Cycle',
            quickTake: 'Standard roadmap followed by AI engineers to build practical AI solutions.',
            keyPoints: [
              '1. Problem Scoping: Identify problem using 4Ws Canvas (Who is affected, What is nature of problem, Where does it arise, Why solve it).',
              '2. Data Acquisition: Collecting reliable data from sensors, web scraping, surveys; split into Training Data (70-80%) and Testing Data (20-30%).',
              '3. Data Exploration: Visualizing data trends, outliers, and patterns using histograms, box plots.',
              '4. Modelling: Training algorithm using Rule-Based vs Learning-Based (Supervised, Unsupervised, Reinforcement Learning).',
              '5. Evaluation: Measuring model accuracy, precision, recall, and F1 score on unseen testing data.'
            ],
            formulaOrEquation: 'Project Cycle = Scoping -> Acquisition -> Exploration -> Modelling -> Evaluation'
          },
          {
            topic: 'Confusion Matrix & Model Evaluation',
            quickTake: 'Evaluation metric table comparing actual values against model predicted values.',
            keyPoints: [
              'True Positive (TP): Model predicted Yes, actual was Yes.',
              'True Negative (TN): Model predicted No, actual was No.',
              'False Positive (FP - Type I Error): Model predicted Yes, actual was No (e.g. spam filter marks real mail as spam).',
              'False Negative (FN - Type II Error): Model predicted No, actual was Yes (e.g. medical test misses actual disease - dangerous!).',
              'Precision = TP / (TP + FP); Recall = TP / (TP + FN); F1 Score = 2 × (Precision × Recall) / (Precision + Recall).'
            ],
            formulaOrEquation: 'Accuracy = (TP + TN) / (TP + TN + FP + FN); F1 = 2·(P·R)/(P + R)'
          }
        ],
        mindmap: {
          center: 'AI Project Cycle',
          branches: [
            {
              title: '1. AI Fundamentals',
              subtopics: ['AI, ML, DL relationship', 'Narrow AI vs General AI', 'Rule-based vs Learning-based', 'Everyday examples (Siri, Alexa, OTT recommendations)'],
              examTip: 'Rule-based approaches cannot adapt to scenarios not coded by the developer.',
              color: 'blue'
            },
            {
              title: '2. 4Ws Problem Scoping',
              subtopics: ['Who Canvas (Stakeholders)', 'What Canvas (Nature of issue)', 'Where Canvas (Context & Location)', 'Why Canvas (Value proposition)'],
              examTip: 'State the Problem Statement Template: "[Stakeholders] have a problem that [issue] when [context]. An ideal solution would [benefit]."',
              color: 'purple'
            },
            {
              title: '3. Data & Modelling',
              subtopics: ['Training vs Testing split (80/20)', 'Supervised (Classification/Regression)', 'Unsupervised (Clustering)', 'Reinforcement (Reward/Penalty)'],
              examTip: 'Classification predicts discrete classes (Yes/No, Dog/Cat); Regression predicts continuous numbers (House prices).',
              color: 'emerald'
            },
            {
              title: '4. Evaluation Metrics',
              subtopics: ['Confusion Matrix (TP, TN, FP, FN)', 'Accuracy formula', 'Precision vs Recall trade-off', 'F1 Score harmonic mean'],
              examTip: 'In fire alarms and medical diagnosis, False Negatives (FN) are far more critical than False Positives.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Computer Vision (CV) & Natural Language Processing (NLP)',
        keyTopics: [
          'Computer Vision: Pixels, Resolution, RGB color model, Grayscale conversion',
          'CV Tasks: Image Classification, Object Detection, Object Segmentation',
          'Natural Language Processing (NLP): Chatbots, Sentiment Analysis, Text summarization',
          'Text Processing Pipeline: Sentence Segmentation, Tokenization, Stopwords Removal, Stemming vs Lemmatization, Bag of Words (BoW)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Computer Science Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.97,
        upvotes: 980,
        videoDuration: '4m 45s',
        summaryTelugu: 'కంప్యూటర్ విజన్ & నేచురల్ లాంగ్వేజ్ ప్రాసెసింగ్ (NLP): పిక్సెల్స్, RGB ఛానల్స్, టోకనైజేషన్, స్టెమ్మింగ్ vs లెమటైజేషన్, మరియు బ్యాగ్ ఆఫ్ వర్డ్స్ (BoW) మోడల్.',
        summaryEnglish: 'Step-by-step text normalization pipeline, Stemming vs Lemmatization table, and Bag of Words numerical calculations.',
        examWeightage: '15 Marks in CBSE Board',
        formulaeCount: 4,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Computer Vision & Pixel Math',
            quickTake: 'Computers perceive images as 2D/3D matrices of numbers representing light intensity.',
            keyPoints: [
              'Pixel: Smallest addressable unit of a digital image. Value ranges from 0 (Black) to 255 (White) in 8-bit grayscale.',
              'Color Images: Stored as 3 stacked matrices (Red, Green, Blue channels - RGB).',
              'Object Detection detects "What is where" by drawing bounding boxes around identified objects.'
            ],
            formulaOrEquation: 'Grayscale: 0 (Pure Black) to 255 (Pure White)'
          },
          {
            topic: 'Text Normalization Pipeline in NLP',
            quickTake: 'Converts raw human text into clean, structured numerical tokens suitable for algorithms.',
            keyPoints: [
              '1. Sentence Segmentation: Breaking long paragraph into individual sentences.',
              '2. Tokenization: Splitting sentences into individual words or punctuation tokens.',
              '3. Removing Stopwords: Eliminating non-informative words like "is", "the", "and", "in".',
              '4. Stemming vs Lemmatization: Stemming strips prefixes/suffixes using heuristics (often creates non-dictionary words like "caring" -> "car"); Lemmatization uses vocabulary to reduce to root dictionary word ("caring" -> "care").',
              '5. Bag of Words (BoW): Creating document vectors based on frequency of unique dictionary words.'
            ],
            formulaOrEquation: 'Pipeline = Segmentation -> Tokenization -> Stopwords -> Lemmatization -> BoW'
          }
        ],
        mindmap: {
          center: 'CV & NLP Domains',
          branches: [
            {
              title: '1. Computer Vision Basics',
              subtopics: ['Pixel definition & Grayscale (0-255)', 'RGB 3-channel color matrix', 'Resolution & Aspect ratio', 'Facial recognition in smartphones'],
              examTip: 'An image of 100x100 resolution in RGB contains 100 × 100 × 3 = 30,000 numerical values.',
              color: 'blue'
            },
            {
              title: '2. CV Tasks Hierarchy',
              subtopics: ['Image classification (Single label)', 'Object detection (Bounding box)', 'Semantic segmentation (Pixel-level mask)', 'Self-driving car vision systems'],
              examTip: 'Object detection identifies both object category and its spatial location in the frame.',
              color: 'purple'
            },
            {
              title: '3. NLP Normalization',
              subtopics: ['Sentence segmentation', 'Tokenization', 'Stopwords removal', 'Stemming vs Lemmatization comparison'],
              examTip: 'Lemmatization produces valid meaningful dictionary words, while stemming may produce non-words.',
              color: 'emerald'
            },
            {
              title: '4. Bag of Words (BoW)',
              subtopics: ['Corpus & Vocabulary creation', 'Document vectorization', 'Term frequency calculation', 'Limitations: Ignores grammar & word order'],
              examTip: 'BoW is called a "bag" because it disregards grammar and word order, keeping only count.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // 4. VISAKHA VALLEY SCHOOL - INFORMATION TECHNOLOGY (CBSE-402)
  // ==========================================
  {
    id: 'vvs-cbse-it',
    code: 'CBSE-402',
    name: 'Information Technology (Skill Subject)',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '50 Marks Theory + 50 Practical',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Skill Curriculum',
    units: [
      {
        unitNumber: 1,
        title: 'Digital Documentation (Advanced) & Spreadsheets',
        keyTopics: [
          'Styles in Word Processor: Page, Paragraph, Character, Frame, and List styles',
          'Inserting & formatting images: Alignment, Text Wrapping, Anchoring, and Grouping',
          'Table of Contents (TOC) creation, customization, and Mail Merge (Main document, Data source)',
          'Advanced Spreadsheets: Consolidating data, Scenarios, Goal Seek, Solver, and Subtotals'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Computer Faculty Panel',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.3 MB',
        rating: 4.97,
        upvotes: 890,
        videoDuration: '4m 15s',
        summaryTelugu: 'డిజిటల్ డాక్యుమెంటేషన్ & స్ప్రెడ్‌షీట్స్: వర్డ్ ప్రాసెసర్‌లో స్టైల్స్, మెయిల్ మెర్జ్ (Mail Merge), గోల్ సీక్ (Goal Seek), సాల్వర్ మరియు సినారియోలు.',
        summaryEnglish: 'Mail Merge step-by-step workflow, What-If Analysis tools (Goal Seek vs Solver), and Table of Contents hierarchy.',
        examWeightage: '15 Marks in CBSE Board',
        formulaeCount: 4,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Styles & Formatting in Word Processor',
            quickTake: 'A style is a set of formats that you can apply to selected pages, text, frames to quickly change appearance.',
            keyPoints: [
              'Paragraph Style: Controls text alignment, tab stops, line spacing, borders.',
              'Character Style: Affects selected text inside a paragraph (font name, size, bold, color).',
              'Page Style: Controls margins, headers, footers, borders, page background.',
              'Fill Format Mode: Allows applying a style quickly to multiple different areas without opening dialogs.'
            ],
            formulaOrEquation: 'Style = Predefined set of formatting attributes ensuring document consistency'
          },
          {
            topic: 'Mail Merge Workflow',
            quickTake: 'Creates personalized letters/envelopes by merging a main template with a structured recipient data source.',
            keyPoints: [
              'Main Document: The document containing constant text and merge field placeholders.',
              'Data Source: Spreadsheet or database containing variable recipient details (Name, Address, Phone).',
              'Merged Document: Final output containing personalized documents for every entry in data source.'
            ],
            formulaOrEquation: 'Mail Merge = Main Document (Static) + Data Source (Dynamic Records)'
          },
          {
            topic: 'What-If Analysis: Goal Seek vs Solver',
            quickTake: 'Calculates input values needed to achieve a desired target output.',
            keyPoints: [
              'Goal Seek: Solves for ONE unknown input variable to reach a specific target value (e.g. what mark needed in Exam 3 to average 85%).',
              'Solver: Advanced tool that handles MULTIPLE variables with constraints (e.g. maximize profit while keeping costs under 10,000).'
            ],
            formulaOrEquation: 'Goal Seek (1 Variable) vs Solver (Multi-variable with constraints)'
          }
        ],
        mindmap: {
          center: 'Digital Docs & Spreadsheets',
          branches: [
            {
              title: '1. Word Processor Styles',
              subtopics: ['Paragraph, Character, Page styles', 'Fill Format Mode', 'Customizing templates', 'Automatic Table of Contents (TOC)'],
              examTip: 'To create a Table of Contents, headings must use Heading 1, Heading 2 styles.',
              color: 'blue'
            },
            {
              title: '2. Images & Graphics',
              subtopics: ['Inserting images', 'Text wrapping (Wrap Off, Page Wrap, Optimal)', 'Anchoring (To Page, To Paragraph, To Character)', 'Grouping objects'],
              examTip: 'Anchoring determines the reference point for the image inside the document flow.',
              color: 'purple'
            },
            {
              title: '3. Mail Merge Steps',
              subtopics: ['Main document creation', 'Data source connection', 'Inserting merge fields', 'Print / Email output generation'],
              examTip: 'Mail Merge saves huge time when sending identical letters to hundreds of recipients.',
              color: 'emerald'
            },
            {
              title: '4. Advanced Spreadsheets',
              subtopics: ['Consolidating data across sheets', 'Subtotals automatic calculation', 'Goal Seek (single variable)', 'Solver (linear constraints)'],
              examTip: 'State the difference between Goal Seek and Solver in 3 marks.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Relational Database (RDBMS) & Cyber Security',
        keyTopics: [
          'RDBMS Concepts: Tables, Fields/Attributes, Tuples/Records, Primary Key, Composite Key, Foreign Key',
          'SQL Commands: DDL (CREATE, ALTER, DROP) vs DML (SELECT, INSERT, UPDATE, DELETE)',
          'Network Topologies & Types: LAN, MAN, WAN, Client-Server vs P2P, Wi-Fi, ISP, IP address, MAC address',
          'Cyber Security: Strong passwords, Phishing, Spyware, Firewalls, and ergonomics (carpal tunnel prevention)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS IT Department',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.98,
        upvotes: 940,
        videoDuration: '4m 30s',
        summaryTelugu: 'రిలేషనల్ డేటాబేస్ (RDBMS) & సైబర్ సెక్యూరిటీ: ప్రైమరీ కీ vs ఫారిన్ కీ, SQL సెలెక్ట్ కమాండ్స్, నెట్‌వర్క్ టోపాలజీలు మరియు సైబర్ భద్రత.',
        summaryEnglish: 'Primary Key rules, SQL DDL vs DML commands table, network topologies, and workplace safety & cyber ergonomics.',
        examWeightage: '15 Marks in CBSE Board',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Primary Key vs Foreign Key',
            quickTake: 'Primary key uniquely identifies a record; foreign key links two tables together.',
            keyPoints: [
              'Primary Key: Must contain UNIQUE values and CANNOT contain NULL values (e.g. Student_ID, Admission_No).',
              'Composite Primary Key: Primary key composed of two or more columns combined together.',
              'Foreign Key: A field in one table that refers to the Primary Key in another table, establishing a relationship.'
            ],
            formulaOrEquation: 'Primary Key = Unique + NOT NULL; Foreign Key = Referential Integrity'
          },
          {
            topic: 'SQL: DDL vs DML Commands',
            quickTake: 'DDL modifies database schema structure; DML operates on the actual data records inside tables.',
            keyPoints: [
              'Data Definition Language (DDL): CREATE TABLE, ALTER TABLE, DROP TABLE.',
              'Data Manipulation Language (DML): SELECT (retrieve), INSERT INTO (add), UPDATE (modify), DELETE (remove).',
              'Sample query: SELECT Name, Marks FROM Students WHERE Marks >= 90 ORDER BY Marks DESC;'
            ],
            formulaOrEquation: 'DDL = Structure (CREATE, ALTER) | DML = Data (SELECT, INSERT, UPDATE)'
          },
          {
            topic: 'Network Fundamentals & Cyber Safety',
            quickTake: 'Safe networking requires strong authentication, encryption, and awareness against phishing.',
            keyPoints: [
              'LAN (Local Area Network - single building/school), WAN (Wide Area Network - Internet spanning globe).',
              'Phishing: Fraudulent attempt to steal sensitive passwords/credit cards by masquerading as trustworthy entity in fake emails.',
              'Firewall: Network security device monitoring incoming and outgoing network traffic based on predefined security rules.'
            ],
            formulaOrEquation: 'Firewall = Barrier between trusted internal network and untrusted public internet'
          }
        ],
        mindmap: {
          center: 'RDBMS & Cyber Security',
          branches: [
            {
              title: '1. Database Concepts',
              subtopics: ['Tables, Rows/Tuples, Columns/Attributes', 'Primary Key (Unique & NOT NULL)', 'Foreign Key & Referential Integrity', 'Database Forms & Reports'],
              examTip: 'A table can have only ONE primary key, but multiple candidate keys.',
              color: 'blue'
            },
            {
              title: '2. SQL Commands',
              subtopics: ['DDL (CREATE, ALTER, DROP)', 'DML (SELECT, INSERT, UPDATE, DELETE)', 'WHERE clause conditions', 'ORDER BY ascending/descending'],
              examTip: 'Remember syntax: UPDATE table_name SET column1 = value1 WHERE condition;',
              color: 'purple'
            },
            {
              title: '3. Networking Basics',
              subtopics: ['LAN, MAN, WAN categories', 'Client-Server vs Peer-to-Peer (P2P)', 'Modem, Router, Switch', 'IP Address vs MAC Address'],
              examTip: 'MAC address is permanent physical hardware address; IP address is logical network address.',
              color: 'emerald'
            },
            {
              title: '4. Cyber Safety & Ergonomics',
              subtopics: ['Strong password rules (8+ chars, alphanumeric, symbols)', 'Phishing & Trojan horses', 'Firewall defense', 'Workplace ergonomics (Posture, Screen glare)'],
              examTip: 'Never click on unsolicited links asking for password updates or bank verification.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];

// Helper to instantiate subjects for Class 9 and Class 8
const createGradeVariant = (subjects: Subject[], grade: 'class9' | 'class8', gradeLabel: string): Subject[] => {
  return subjects.map(s => ({
    ...s,
    id: `${s.id}-${grade}`,
    semesterOrGrade: `${gradeLabel} (CBSE)`,
    gradeOrBranch: grade,
  }));
};

export const ALL_SCHOOL_EXTRA_SUBJECTS: Subject[] = [
  ...CBSE_SCHOOL_EXTRA_SUBJECTS,
  ...createGradeVariant(CBSE_SCHOOL_EXTRA_SUBJECTS, 'class9', 'Class 9'),
  ...createGradeVariant(CBSE_SCHOOL_EXTRA_SUBJECTS, 'class8', 'Class 8')
];

