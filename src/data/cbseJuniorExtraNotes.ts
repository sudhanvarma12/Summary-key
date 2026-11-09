import { Subject } from '../types';

export const CBSE_8_SCIENCE: Subject = {
  id: 'cbse8-science',
  code: 'CBSE-08-SCI',
  name: 'Class 8 Science (CBSE Revision Notes)',
  semesterOrGrade: 'Class 8 CBSE',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class8',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Middle School Science',
  subjectCategory: 'science',
  units: [
    {
      unitNumber: 1,
      title: 'Crop Production and Management',
      keyTopics: ['Kharif vs Rabi crops', 'Seven agricultural practices', 'Drip & Sprinkler irrigation', 'Storage & buffer stocks'],
      readingTime: '9 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Specialist',
      pdfPages: 4,
      fileSize: '0.9 MB',
      rating: 4.95,
      upvotes: 620,
      videoDuration: '2m 40s',
      summaryTelugu: 'పంట ఉత్పత్తి మరియు నిర్వహణ: ఖరీఫ్ vs రబీ పంటలు, బిందు మరియు తుంపర సేద్యం, మరియు ఆహార నిల్వ.',
      summaryEnglish: 'Step-by-step agricultural process: soil preparation, sowing, manure/fertilizers, irrigation, weeding, harvesting, and granary storage.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Agricultural Steps & Modern Irrigation',
          quickTake: 'Modern irrigation methods save water in drought areas.',
          keyPoints: [
            'Sprinkler system: Perpendicular pipes with rotating nozzles; best for uneven sandy terrain.',
            'Drip system: Water falls drop by drop directly at roots; zero water wastage; best for fruit orchards.',
            'Kharif (Monsoon: Paddy, Maize) vs Rabi (Winter: Wheat, Mustard).'
          ]
        }
      ],
      mindmap: {
        center: 'Crop Production',
        branches: [
          { title: '1. Crop Seasons', subtopics: ['Kharif (June-Oct)', 'Rabi (Oct-March)'], color: 'blue' },
          { title: '2. Preparation', subtopics: ['Ploughing / Tilling', 'Levelling', 'Quality seed selection'], color: 'purple' },
          { title: '3. Modern Irrigation', subtopics: ['Drip system (Drop by drop at roots)', 'Sprinkler system'], color: 'emerald' },
          { title: '4. Protection & Store', subtopics: ['Weeding', 'Threshing & Combine', 'Silos & Granaries'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why is the drip irrigation system considered the best technique for watering fruit plants and trees?',
          marks: '2 Marks',
          answer: 'In drip irrigation, water is delivered drop by drop directly near the plant roots. It minimizes evaporation and runoff losses, resulting in zero water wastage in water-scarce regions.',
          tip: 'State drop by drop delivery at roots with zero water wastage.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Microorganisms: Friend and Foe',
      keyTopics: ['Four major groups (Bacteria, Fungi, Protozoa, Algae)', 'Viruses & Vaccines (Edward Jenner)', 'Commercial & medicinal uses (Penicillin, Yeast)', 'Food preservation techniques'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 660,
      videoDuration: '2m 50s',
      summaryTelugu: 'సూక్ష్మజీవులు: మిత్రులు మరియు శత్రువులు: బాక్టీరియా, ఈస్ట్ (కిణ్వ ప్రక్రియ), పెన్సిలిన్ యాంటీబయోటిక్ మరియు పాశ్చరైజేషన్.',
      summaryEnglish: 'Alexander Fleming\'s penicillin discovery, yeast fermentation producing alcohol and carbon dioxide in bread, and Louis Pasteur\'s pasteurization.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Microbes in Food & Medicine',
          quickTake: 'Microorganisms perform vital roles in food manufacturing and life-saving medicines.',
          keyPoints: [
            'Lactobacillus bacteria promotes curd formation from milk.',
            'Yeast reproduces rapidly producing CO2 gas, making bread dough soft and spongy (Fermentation).',
            'Antibiotics: Chemical substances produced by microbes that kill disease-causing bacteria (e.g. Penicillin from Penicillium notatum).'
          ]
        }
      ],
      mindmap: {
        center: 'Microorganisms',
        branches: [
          { title: '1. 4 Groups', subtopics: ['Bacteria', 'Fungi', 'Protozoa', 'Algae', 'Viruses (Host only)'], color: 'blue' },
          { title: '2. Friends', subtopics: ['Lactobacillus curd', 'Yeast baking & alcohol', 'Rhizobium nitrogen fixation'], color: 'purple' },
          { title: '3. Foes & Disease', subtopics: ['Malaria (Female Anopheles)', 'Dengue (Aedes mosquito)', 'Cholera & Typhoid'], color: 'emerald' },
          { title: '4. Preservation', subtopics: ['Pasteurization (70°C for 15-30s)', 'Salting, sugar, oil, vinegar'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is pasteurization? How is milk pasteurized?',
          marks: '2 Marks',
          answer: 'Pasteurization is a process discovered by Louis Pasteur. Milk is heated to about 70°C for 15 to 30 seconds and then suddenly chilled and stored. This prevents the growth of harmful microbes.',
          tip: 'State heating to 70°C for 15-30s followed by sudden chilling.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Force and Pressure',
      keyTopics: ['Contact vs Non-contact forces', 'Pressure formula: P = Force / Area', 'Atmospheric pressure & Liquid pressure'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 680,
      videoDuration: '2m 50s',
      summaryTelugu: 'బలం మరియు పీడనం: స్పర్శ మరియు క్షేత్ర బలాలు, పీడనం P = బలం / వైశాల్యం (పాస్కల్), మరియు వాతావరణ పీడనం.',
      summaryEnglish: 'Contact forces (muscular, friction) vs non-contact (magnetic, electrostatic, gravity), and why sharp knives cut better than blunt ones.',
      examWeightage: '6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Pressure and Area Relationship',
          quickTake: 'Pressure is force acting per unit surface area: P = Force / Area. SI unit: Pascal (Pa = N/m²).',
          keyPoints: [
            'For a given force, smaller area exerts greater pressure.',
            'Examples: A sharp pin penetrates easily because its sharp tip has tiny surface area; heavy trucks have wide dual tires to reduce ground pressure.'
          ],
          formulaOrEquation: 'Pressure: P = Force / Area (N/m² or Pascal)'
        }
      ],
      mindmap: {
        center: 'Force & Pressure',
        branches: [
          { title: '1. Contact Forces', subtopics: ['Muscular force', 'Friction force (Opposes motion)'], color: 'blue' },
          { title: '2. Non-Contact Forces', subtopics: ['Magnetic', 'Electrostatic (Charged comb)', 'Gravitational pull'], color: 'purple' },
          { title: '3. Pressure Concept', subtopics: ['P = Force / Area', 'Unit: Pascal (Pa)', 'Sharp knife vs blunt knife'], color: 'emerald' },
          { title: '4. Fluids & Atmosphere', subtopics: ['Pressure increases with depth', 'Barometer & rubber sucker'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why are school bag shoulder straps made wide rather than thin strings?',
          marks: '2 Marks',
          answer: 'By increasing the surface area of the shoulder straps, the downward pressure exerted by the heavy weight of the bag on the student\'s shoulders is reduced (since Pressure = Force / Area), making it comfortable to carry.',
          tip: 'Explain large area reduces pressure on shoulders.'
        }
      ]
    }
  ]
};

export const CBSE_8_MATHS: Subject = {
  id: 'cbse8-maths',
  code: 'CBSE-08-MATH',
  name: 'Class 8 Mathematics (CBSE Revision Notes)',
  semesterOrGrade: 'Class 8 CBSE',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class8',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Middle School Mathematics',
  subjectCategory: 'maths',
  units: [
    {
      unitNumber: 1,
      title: 'Rational Numbers',
      keyTopics: ['Properties: Closure, Commutative, Associative, Distributive', 'Additive inverse (-a) & Multiplicative inverse (1/a)', 'Rational numbers between two rationals'],
      readingTime: '9 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Maths Specialist',
      pdfPages: 4,
      fileSize: '0.9 MB',
      rating: 4.95,
      upvotes: 640,
      videoDuration: '2m 45s',
      summaryTelugu: 'అకరణీయ సంఖ్యలు: సంకలన విలోమం, గుణకార విలోమం, మరియు సంఖ్యా రేఖపై అకరణీయ సంఖ్యలు.',
      summaryEnglish: 'Commutative, associative, and distributive properties a(b + c) = ab + ac, and reciprocal multiplicative inverse.',
      examWeightage: '6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Inverses & Distributive Law',
          quickTake: 'Additive identity is 0; multiplicative identity is 1.',
          keyPoints: [
            'Additive Inverse of a/b is -a/b (Sum is 0).',
            'Multiplicative Inverse (Reciprocal) of a/b is b/a (Product is 1).',
            'Distributive Property: a × (b + c) = (a × b) + (a × c).'
          ],
          formulaOrEquation: 'Additive Inverse: a + (-a) = 0 | Multiplicative: a × (1/a) = 1'
        }
      ],
      mindmap: {
        center: 'Class 8 Rationals',
        branches: [
          { title: '1. Properties', subtopics: ['Closure', 'Commutative', 'Associative'], color: 'blue' },
          { title: '2. Identities', subtopics: ['Additive identity 0', 'Multiplicative identity 1'], color: 'purple' },
          { title: '3. Inverses', subtopics: ['Additive inverse (-a)', 'Reciprocal (1/a)'], color: 'emerald' },
          { title: '4. Operations', subtopics: ['Distributive a(b+c)=ab+ac', 'Mean method between two numbers'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Write the additive inverse and multiplicative inverse of -13/19.',
          marks: '2 Marks',
          answer: 'Additive inverse = +13/19. Multiplicative inverse (reciprocal) = -19/13.',
          tip: 'Additive is +13/19, multiplicative is -19/13.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Linear Equations in One Variable',
      keyTopics: ['Solving linear equations with variables on one and both sides', 'Transposition method', 'Word problems on numbers, ages, and perimeters'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Maths Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.96,
      upvotes: 680,
      videoDuration: '2m 50s',
      summaryTelugu: 'ఒకే చరరాశిలో సరళ సమీకరణాలు: పక్షాంతరం పద్ధతి (Transposition) మరియు వయస్సులు, సంఖ్యల సమస్యలు.',
      summaryEnglish: 'Solving linear equations ax + b = cx + d by grouping like terms and cross multiplication.',
      examWeightage: '6 Marks',
      formulaeCount: 1,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Solving by Transposition',
          quickTake: 'Move variable terms to LHS and constant numbers to RHS, inverting mathematical signs (+ becomes -, × becomes ÷).',
          keyPoints: [
            'Example: 5x + 9 = 5 + 3x => 5x - 3x = 5 - 9 => 2x = -4 => x = -2.',
            'Cross-multiplication rule: If (ax + b)/(cx + d) = m/n, then n(ax + b) = m(cx + d).'
          ],
          formulaOrEquation: '(ax + b) / (cx + d) = m / n => n(ax + b) = m(cx + d)'
        }
      ],
      mindmap: {
        center: 'Linear Equations',
        branches: [
          { title: '1. Variable Balance', subtopics: ['Variables on LHS', 'Constants on RHS'], color: 'blue' },
          { title: '2. Transposition', subtopics: ['Plus becomes minus', 'Multiply becomes divide'], color: 'purple' },
          { title: '3. Cross Multiplication', subtopics: ['Fractions on both sides', 'Bracket expansions'], color: 'emerald' },
          { title: '4. Word Problems', subtopics: ['Present age x', 'Consecutive integers (x, x+1, x+2)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Solve: 8x + 4 = 3(x - 1) + 7.',
          marks: '2 Marks',
          answer: '8x + 4 = 3x - 3 + 7 => 8x + 4 = 3x + 4 => 8x - 3x = 4 - 4 => 5x = 0 => x = 0.',
          tip: 'Expand 3(x - 1) first.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Squares and Square Roots',
      keyTopics: ['Properties of square numbers', 'Pythagorean triplets (2m, m²-1, m²+1)', 'Division method for finding square roots'],
      readingTime: '10 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Middle School Maths Specialist',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.97,
      upvotes: 710,
      videoDuration: '2m 55s',
      summaryTelugu: 'వర్గాలు మరియు వర్గమూలాలు: పైథాగోరియన్ త్రికాలు (2m, m²-1, m²+1) మరియు భాగహార పద్ధతిలో వర్గమూలం కనుగొనడం.',
      summaryEnglish: 'Prime factorisation and long division square root algorithms, unit digit patterns, and finding smallest number to multiply/divide to make a perfect square.',
      examWeightage: '6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 3,
      topicAtAGlance: [
        {
          topic: '1. Pythagorean Triplets',
          quickTake: 'For any natural number m > 1, the three numbers (2m, m² - 1, m² + 1) form a Pythagorean triplet.',
          keyPoints: [
            '(2m)² + (m² - 1)² = (m² + 1)²',
            'Example: If smallest member 2m = 6 => m = 3. Members are 2m = 6, m² - 1 = 8, m² + 1 = 10. Triplet is (6, 8, 10).'
          ],
          formulaOrEquation: 'Pythagorean Triplet: (2m, m² - 1, m² + 1)'
        }
      ],
      mindmap: {
        center: 'Squares & Roots',
        branches: [
          { title: '1. Unit Digits', subtopics: ['Cannot end in 2, 3, 7, 8', 'Even zeroes at end'], color: 'blue' },
          { title: '2. Pythagorean Triplets', subtopics: ['(2m, m²-1, m²+1)', 'Example (6, 8, 10)'], color: 'purple' },
          { title: '3. Finding Roots', subtopics: ['Repeated subtraction of odds', 'Prime factorisation pairs'], color: 'emerald' },
          { title: '4. Long Division', subtopics: ['Pairing from right', 'Decimal square roots'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Write a Pythagorean triplet whose smallest member is 8.',
          marks: '2 Marks',
          answer: 'Let 2m = 8 => m = 4. Then m² - 1 = 4² - 1 = 16 - 1 = 15. And m² + 1 = 4² + 1 = 16 + 1 = 17. The Pythagorean triplet is (8, 15, 17).',
          tip: 'Triplet is (8, 15, 17).'
        }
      ]
    }
  ]
};
