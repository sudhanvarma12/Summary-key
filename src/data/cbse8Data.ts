import { Subject } from '../types';

export const CBSE_8_SUBJECTS: Subject[] = [
  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 8 CBSE SCIENCE (NEW SYLLABUS)
  // ==========================================
  {
    id: 'vvs-cbse8-science',
    code: 'CBSE-086-C8',
    name: 'Class 8 Science',
    semesterOrGrade: 'Class 8 CBSE',
    creditsOrMarks: '80 Marks Annual + 20 Internal',
    gradeOrBranch: 'class8',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE New Rationalized Syllabus',
    category: 'CBSE Middle School Science',
    units: [
      {
        unitNumber: 1,
        title: 'Crop Production and Management',
        keyTopics: [
          'Agricultural practices: Preparation of soil (ploughing, levelling) and sowing (seed drill)',
          'Adding manure and fertilizers (NPK comparison, green manure)',
          'Irrigation: Traditional vs Modern methods (Sprinkler and Drip irrigation systems)',
          'Protection from weeds (weedicides), harvesting (combine), and storage (silos & granaries)'
        ],
        readingTime: '18 mins',
        verifiedBy: 'VVS Middle School Science Faculty',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 15,
        fileSize: '1.9 MB',
        rating: 4.95,
        upvotes: 560,
        videoDuration: '3m 50s',
        summaryTelugu: 'పంట ఉత్పత్తి మరియు యాజమాన్యం: నేల తయారీ, విత్తనాలు చల్లడం, డ్రిప్-స్ప్రింక్లర్ సాగునీటి పద్ధతులు మరియు నిల్వ ఉంచడం.',
        summaryEnglish: 'Comprehensive breakdown of agricultural sequence, drip irrigation water conservation, and manures vs chemical fertilizers.',
        examWeightage: '8 Marks',
        formulaeCount: 1,
        solvedQuestionsCount: 12,
        topicAtAGlance: [
          {
            topic: 'Agricultural Practices Sequence',
            quickTake: 'Seven systematic steps from soil preparation to safe storage in granaries.',
            keyPoints: [
              '1. Soil preparation (ploughing loosens soil, bringing nutrient-rich soil to top).',
              '2. Sowing using seed drill at uniform distance and proper depth.',
              '3. Adding manure (organic) and fertilizers (chemical NPK).',
              '4. Irrigation (Drip irrigation is best for water-scarce regions).',
              '5. Weeding (removal of unwanted plants like Amaranthus).',
              '6. Harvesting & threshing; 7. Safe storage in silos protected from moisture and pests.'
            ],
            formulaOrEquation: 'Kharif (Monsoon: Paddy, Maize) vs Rabi (Winter: Wheat, Gram)'
          },
          {
            topic: 'Modern Irrigation: Drip vs Sprinkler',
            quickTake: 'Water-saving technologies that deliver water directly where needed.',
            keyPoints: [
              'Drip system: Water falls drop by drop directly near roots; zero wastage, ideal for fruit gardens.',
              'Sprinkler system: Perpendicular pipes with rotating nozzles spray water like rain; ideal for uneven sandy soil.'
            ],
            formulaOrEquation: 'Drip System = Drop-by-drop root delivery (Max water conservation)'
          }
        ],
        mindmap: {
          center: 'Crop Production',
          branches: [
            {
              title: '1. Crop Seasons',
              subtopics: ['Kharif (June - Sept, e.g. Paddy)', 'Rabi (Oct - March, e.g. Wheat)', 'Zaid (Summer crops)'],
              examTip: 'Paddy cannot be grown in winter because it requires huge amount of water.',
              color: 'blue'
            },
            {
              title: '2. Soil & Sowing',
              subtopics: ['Ploughing & Crumbs', 'Earthworms (Farmer\'s friends)', 'Healthy seed selection (Floating test)', 'Traditional tool vs Seed Drill'],
              examTip: 'Damaged hollow seeds float on water because they are lighter.',
              color: 'purple'
            },
            {
              title: '3. Nutrients & Irrigation',
              subtopics: ['Manures vs Fertilizers', 'Compost & Vermicompost', 'Drip & Sprinkler irrigation', 'Crop rotation (Rhizobium)'],
              examTip: 'Rhizobium bacteria in root nodules of leguminous plants fix atmospheric nitrogen.',
              color: 'emerald'
            },
            {
              title: '4. Harvesting & Storage',
              subtopics: ['Threshing & Winnowing', 'Combine machine', 'Drying seeds in sun', 'Silos & Granaries buffer stock'],
              examTip: 'Fresh grains must be dried before storage to prevent fungus and insect attacks.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Microorganisms: Friend and Foe',
        keyTopics: [
          'Four major groups: Bacteria, Fungi, Protozoa, Algae, and Viruses',
          'Friendly microorganisms: Curd making (Lactobacillus), bread baking (Yeast fermentation), antibiotics, and vaccines',
          'Nitrogen Cycle: Atmospheric nitrogen fixation, nitrification, and denitrification',
          'Harmful microorganisms: Human diseases (Tuberculosis, Malaria), plant diseases (Citrus canker), and food preservation'
        ],
        readingTime: '20 mins',
        verifiedBy: 'VVS Biology Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 16,
        fileSize: '2.0 MB',
        rating: 4.96,
        upvotes: 610,
        videoDuration: '4m 00s',
        summaryTelugu: 'సూక్ష్మజీవులు - మిత్రులు మరియు శత్రువులు: లాక్టోబాసిల్లస్, ఈస్ట్ ఫెర్మెంటేషన్, వ్యాక్సిన్లు, నైట్రోజన్ వలయం మరియు ఆహార నిల్వ పద్ధతులు.',
        summaryEnglish: 'Lactobacillus fermentation, Louis Pasteur pasteurization, Alexander Fleming penicillin, and the complete Nitrogen Cycle diagram.',
        examWeightage: '8 Marks',
        formulaeCount: 1,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Friendly Microorganisms in Industry & Medicine',
            quickTake: 'Microbes produce commercial antibiotics, vaccines, alcohol, and fermented dairy products.',
            keyPoints: [
              'Lactobacillus bacteria promote curd formation by multiplying in warm milk.',
              'Yeast reproduces rapidly and produces carbon dioxide during respiration, making bread soft and spongy (Fermentation discovered by Louis Pasteur 1857).',
              'Penicillin, first antibiotic, discovered by Alexander Fleming in 1929 from Penicillium notatum mold.'
            ],
            formulaOrEquation: 'Fermentation = Sugar --Yeast--> Alcohol + CO2'
          },
          {
            topic: 'Nitrogen Cycle',
            quickTake: 'Maintains constant 78% atmospheric nitrogen through biological and natural fixation.',
            keyPoints: [
              'Rhizobium bacteria fix nitrogen in root nodules of leguminous plants.',
              'Nitrifying bacteria convert ammonia to nitrites and nitrates; plants absorb nitrates.',
              'Denitrifying bacteria (Pseudomonas) convert soil nitrates back into nitrogen gas, keeping atmospheric level constant.'
            ],
            formulaOrEquation: 'Atmospheric N2 -> Fixation (Rhizobium/Lightning) -> Nitrates -> Plant Protein -> Denitrification'
          },
          {
            topic: 'Food Preservation Methods',
            quickTake: 'Techniques preventing microbial growth: chemical, salt, sugar, oil, heat/cold treatment.',
            keyPoints: [
              'Pasteurization: Heating milk to 70°C for 15-30 seconds, then suddenly chilling it.',
              'Sodium benzoate and sodium metabisulphite are common chemical preservatives used in jams and squashes.'
            ],
            formulaOrEquation: 'Pasteurization = 70°C for 15-30s + Sudden Chilling'
          }
        ],
        mindmap: {
          center: 'Microorganisms',
          branches: [
            {
              title: '1. Classification',
              subtopics: ['Bacteria (Lactobacillus, Salmonella)', 'Fungi (Yeast, Bread mold)', 'Protozoa (Amoeba, Paramecium)', 'Algae (Spirogyra)', 'Viruses (Host dependent)'],
              examTip: 'Viruses reproduce only inside the host organism\'s cells.',
              color: 'blue'
            },
            {
              title: '2. Beneficial Uses',
              subtopics: ['Curd & Bread fermentation', 'Antibiotics (Penicillin)', 'Vaccines & Antibodies (Edward Jenner)', 'Organic waste decomposition'],
              examTip: 'Antibiotics are effective against bacteria but not against viral infections.',
              color: 'purple'
            },
            {
              title: '3. Harmful Microbes & Pathogens',
              subtopics: ['Communicable diseases', 'Female Anopheles mosquito (Malaria parasite)', 'Female Aedes mosquito (Dengue virus)', 'Citrus canker (Bacteria) & Rust of wheat (Fungi)'],
              examTip: 'Mosquitoes act as carriers/vectors, transmitting pathogens from infected to healthy persons.',
              color: 'emerald'
            },
            {
              title: '4. Nitrogen Cycle & Preservation',
              subtopics: ['Nitrogen Fixation (Rhizobium, Lightning)', 'Denitrification back to N2', 'Salt & Sugar preservation', 'Pasteurization (Louis Pasteur)'],
              examTip: 'Draw the cyclic flowchart of the Nitrogen Cycle for a 5-mark question.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Force and Pressure',
        keyTopics: [
          'Push or pull on an object is force; forces are due to interaction between two objects',
          'Contact forces (Muscular force, Friction) vs Non-contact forces (Magnetic, Electrostatic, Gravitational)',
          'Pressure P = Force / Area; unit is Pascal (N/m²)',
          'Liquid pressure increases with depth; Atmospheric pressure and Magdeburg hemisphere demonstration'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Physics Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.2 MB',
        rating: 4.96,
        upvotes: 680,
        videoDuration: '4m 15s',
        summaryTelugu: 'బలం మరియు పీడనం: స్పర్శా బలాలు vs క్షేత్ర బలాలు (గురుత్వాకర్షణ, స్థిర విద్యుత్), పీడనం = బలం / వైశాల్యం మరియు వాతావరణ పీడనం.',
        summaryEnglish: 'Contact vs non-contact forces, pressure inverse area calculations, liquid depth pressure, and atmospheric suction cup physics.',
        examWeightage: '8 Marks',
        formulaeCount: 3,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Contact vs Non-Contact Forces',
            quickTake: 'Contact forces require physical touch; non-contact forces act across empty space (action at a distance).',
            keyPoints: [
              'Contact: Muscular force (lifting a bucket), Frictional force (opposes motion).',
              'Non-Contact: Magnetic force (magnets attract iron), Electrostatic force (charged comb attracts paper bits), Gravitational force (apple falls to earth).'
            ],
            formulaOrEquation: 'Force = Mass × Acceleration (Unit: Newton, N)'
          },
          {
            topic: 'Pressure & Area Relationship',
            quickTake: 'Pressure is force acting per unit area; smaller contact area produces immense pressure.',
            keyPoints: [
              'P = Force / Area; SI unit is Pascal (1 Pa = 1 N/m²).',
              'Why school bags have broad straps: Greater surface area reduces pressure on shoulders.',
              'Why porter puts a cloth round his head: Increases area of contact, reducing pressure of heavy load.'
            ],
            formulaOrEquation: 'P = F / A (If Area decreases -> Pressure increases)'
          },
          {
            topic: 'Fluid & Atmospheric Pressure',
            quickTake: 'Liquids exert equal pressure in all directions at same depth; atmospheric pressure is weight of air column.',
            keyPoints: [
              'Liquid pressure increases with depth: Dam walls are thicker at the bottom to withstand high hydrostatic pressure.',
              'Liquids exert pressure on the walls of containers.',
              'A rubber sucker sticks to flat surface because atmospheric pressure from outside is much greater than trapped air inside.'
            ],
            formulaOrEquation: 'Hydrostatic Pressure P = ρ · g · h'
          }
        ],
        mindmap: {
          center: 'Force and Pressure',
          branches: [
            {
              title: '1. Force Fundamentals',
              subtopics: ['Push or pull interaction', 'Magnitude & Direction of force', 'Forces in same direction add up', 'Opposite forces subtract'],
              examTip: 'Net force on object is zero if two equal forces act in opposite directions.',
              color: 'blue'
            },
            {
              title: '2. Types of Forces',
              subtopics: ['Muscular force', 'Friction force', 'Magnetic & Electrostatic force', 'Gravitational force'],
              examTip: 'Electrostatic force is exerted by a charged body on another charged or uncharged body.',
              color: 'purple'
            },
            {
              title: '3. Pressure Concept',
              subtopics: ['P = Force / Area', 'SI Unit Pascal (N/m²)', 'Sharp needles & broad tires', 'Camel walking easily on desert sand'],
              examTip: 'Camel has broad hooves -> larger area -> smaller pressure on soft sand.',
              color: 'emerald'
            },
            {
              title: '4. Fluid & Atmospheric Pressure',
              subtopics: ['Liquid pressure with depth', 'Pressure equal at same horizontal depth', 'Atmospheric pressure weight', 'Rubber suction cups'],
              examTip: 'Atmospheric pressure is maximum at sea level and decreases as altitude increases.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 4,
        title: 'Light (Laws of Reflection & Human Eye)',
        keyTopics: [
          'Laws of reflection: Angle of incidence = Angle of reflection; incident ray, reflected ray, normal lie in same plane',
          'Regular vs Diffused (Irregular) reflection',
          'Multiple images, Kaleidoscope, and dispersion of white light',
          'Structure and working of Human Eye (Cornea, Iris, Pupil, Lens, Retina, Optic nerve, Blind spot), Cataract and eye care'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Optics Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.97,
        upvotes: 720,
        videoDuration: '4m 20s',
        summaryTelugu: 'కాంతి: పరావర్తన నియమాలు, క్రమ మరియు క్రమరహిత పరావర్తనం, కెలిడోస్కోప్, మానవ కన్ను నిర్మాణం (రెటీనా, ఐరిస్) మరియు కంటి సంరక్షణ.',
        summaryEnglish: 'Ray diagrams for laws of reflection, kaleidoscope mirror angle calculations, and labeled human eye anatomy.',
        examWeightage: '8 Marks',
        formulaeCount: 3,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Laws of Reflection',
            quickTake: 'Two universal laws governing light bouncing off smooth and polished surfaces.',
            keyPoints: [
              'Law 1: Angle of incidence is always equal to angle of reflection (∠i = ∠r).',
              'Law 2: Incident ray, reflected ray, and normal to surface at point of incidence all lie in the same plane.',
              'Virtual image in plane mirror: Same size as object, erect, laterally inverted, and at equal distance behind mirror.'
            ],
            formulaOrEquation: '∠i = ∠r; Number of multiple images n = (360° / θ) - 1'
          },
          {
            topic: 'Regular vs Diffused Reflection',
            quickTake: 'Smooth surfaces yield parallel reflected rays; rough surfaces scatter light in all directions.',
            keyPoints: [
              'Regular reflection: Occurs from polished smooth surfaces like mirrors, forming clear images.',
              'Diffused reflection: Occurs from rough uneven surfaces (like paper, walls); laws of reflection still hold true at each microscopic point, but normals are in different directions.'
            ],
            formulaOrEquation: 'Diffused reflection does NOT violate laws of reflection!'
          },
          {
            topic: 'Human Eye Anatomy & Vision',
            quickTake: 'Cornea refracts light, iris controls pupil size, crystalline lens focuses image on retina, optic nerve sends signal to brain.',
            keyPoints: [
              'Iris gives eye its distinctive color (black, brown, green, blue) and controls amount of light entering pupil.',
              'Retina contains photoreceptors: Cones (sensitive to bright light and color) and Rods (sensitive to dim light).',
              'Blind spot: Junction of optic nerve and retina devoid of rods and cones; no vision is possible here.',
              'Persistence of vision: Image remains on retina for 1/16th of a second.'
            ],
            formulaOrEquation: 'Persistence of Vision = 1/16th second; Normal vision range = 25 cm to infinity'
          }
        ],
        mindmap: {
          center: 'Light & Human Eye',
          branches: [
            {
              title: '1. Reflection Principles',
              subtopics: ['Laws of reflection (∠i = ∠r)', 'Plane mirror image characteristics', 'Lateral inversion (Left appears right)', 'Regular vs Diffused reflection'],
              examTip: 'State why diffused reflection is not caused by failure of laws of reflection.',
              color: 'blue'
            },
            {
              title: '2. Multiple Reflection Devices',
              subtopics: ['Two parallel mirrors -> infinite images', 'Kaleidoscope (3 mirrors at 60°)', 'Periscope in submarines (Two mirrors at 45°)'],
              examTip: 'Periscope uses reflection from two mirrors inclined at 45° to observe objects over obstacles.',
              color: 'purple'
            },
            {
              title: '3. Human Eye Structure',
              subtopics: ['Cornea & Iris', 'Pupil size regulation', 'Retina (Rods & Cones)', 'Blind spot & Optic nerve'],
              examTip: 'Cones respond to color and bright light; rods respond to twilight and dim light.',
              color: 'emerald'
            },
            {
              title: '4. Vision Defects & Eye Care',
              subtopics: ['Least distance of distinct vision (25 cm)', 'Cataract (Opaque lens)', 'Vitamin A deficiency (Night blindness)', 'Braille system for visually impaired (Louis Braille)'],
              examTip: 'Braille system has 63 dot patterns or characters.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 8 CBSE MATHEMATICS
  // ==========================================
  {
    id: 'vvs-cbse8-maths',
    code: 'CBSE-041-C8',
    name: 'Class 8 Mathematics',
    semesterOrGrade: 'Class 8 CBSE',
    creditsOrMarks: '80 Marks Annual + 20 Internal',
    gradeOrBranch: 'class8',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE New Rationalized Syllabus',
    category: 'CBSE Middle School Mathematics',
    units: [
      {
        unitNumber: 1,
        title: 'Rational Numbers',
        keyTopics: [
          'Properties of rational numbers: Closure, Commutativity, Associativity under +, -, ×, ÷',
          'Role of zero (Additive identity) and one (Multiplicative identity)',
          'Additive inverse (-a/b) and Multiplicative inverse or reciprocal (b/a)',
          'Distributive property: a(b + c) = ab + ac and finding rational numbers between two rational numbers'
        ],
        readingTime: '20 mins',
        verifiedBy: 'VVS Maths Department',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 16,
        fileSize: '2.1 MB',
        rating: 4.96,
        upvotes: 690,
        videoDuration: '4m 00s',
        summaryTelugu: 'అకరణీయ సంఖ్యలు: సంవృత, స్థిత్యంతర, సహచర మరియు విభాగ న్యాయాలు, సంకలన-గుణకార విలోమాలు.',
        summaryEnglish: 'Comprehensive properties table, additive/multiplicative inverses, and finding arithmetic mean between fractions.',
        examWeightage: '8 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Properties of Rational Numbers',
            quickTake: 'Numbers of form p/q (q ≠ 0) follow strict algebraic closure and commutative laws.',
            keyPoints: [
              'Rational numbers are closed under addition, subtraction, and multiplication (NOT closed under division because division by zero is undefined).',
              'Addition and multiplication are commutative and associative; subtraction and division are NOT.',
              'Distributive property: a × (b + c) = (a × b) + (a × c).'
            ],
            formulaOrEquation: 'a(b + c) = ab + ac; a(b - c) = ab - ac'
          },
          {
            topic: 'Identities & Inverses',
            quickTake: '0 is additive identity; 1 is multiplicative identity.',
            keyPoints: [
              'Additive Inverse of a/b is -a/b (since a/b + (-a/b) = 0).',
              'Multiplicative Inverse (reciprocal) of a/b is b/a (since a/b × b/a = 1).',
              'Zero has no reciprocal!'
            ],
            formulaOrEquation: 'a/b + (-a/b) = 0; a/b · (b/a) = 1'
          }
        ],
        mindmap: {
          center: 'Rational Numbers',
          branches: [
            {
              title: '1. Number System Hierarchy',
              subtopics: ['Natural N ⊂ Whole W ⊂ Integers Z ⊂ Rationals Q', 'p/q form where p,q ∈ Z, q≠0', 'Representation on number line'],
              examTip: 'Every integer is a rational number because it can be written as n/1.',
              color: 'blue'
            },
            {
              title: '2. Algebraic Properties',
              subtopics: ['Closure under +, -, ×', 'Commutativity a + b = b + a', 'Associativity a + (b + c) = (a + b) + c', 'Division is neither commutative nor associative'],
              examTip: 'Remember that division by 0 is undefined in real and rational arithmetic.',
              color: 'purple'
            },
            {
              title: '3. Identities & Inverses',
              subtopics: ['Additive identity (0)', 'Multiplicative identity (1)', 'Additive inverse -x', 'Reciprocal 1/x (Zero has none)'],
              examTip: 'The numbers 1 and -1 are their own reciprocals.',
              color: 'emerald'
            },
            {
              title: '4. Distributivity & Betweenness',
              subtopics: ['a(b+c) = ab + ac', 'Factoring using distributivity', 'Finding n rational numbers between two fractions', 'Mean method (a + b)/2'],
              examTip: 'There are infinitely many rational numbers between any two given rational numbers.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Linear Equations in One Variable',
        keyTopics: [
          'Solving linear equations having linear expressions on one side and numbers on other',
          'Solving equations having variable on both sides (transposition method)',
          'Forming equations from age problems, perimeter problems, and digit-reversal word problems',
          'Reducing equations to simpler form: cross-multiplication method for (ax + b) / (cx + d) = m / n'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Senior Mathematics Faculty',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 18,
        fileSize: '2.3 MB',
        rating: 4.97,
        upvotes: 750,
        videoDuration: '4m 30s',
        summaryTelugu: 'ఏక చరరాశిలో రేఖీయ సమీకరణాలు: పక్షాంతరం (Transposition), వయస్సు మరియు పెరిమీటర్ పద సమస్యలు, అడ్డ గుణకారం (Cross-multiplication).',
        summaryEnglish: 'Speed-solving tricks for age ratios, currency note counting problems, and cross-multiplication fractions.',
        examWeightage: '10 Marks',
        formulaeCount: 4,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Transposition Method',
            quickTake: 'Shift terms from LHS to RHS or vice-versa while changing the algebraic sign.',
            keyPoints: [
              'Positive (+) term becomes negative (-) when transposed; negative becomes positive.',
              'Multiplying factor becomes dividing denominator; dividing denominator becomes multiplying factor.',
              'Always group all variable terms on LHS and constants on RHS.'
            ],
            formulaOrEquation: 'ax + b = cx + d -> (a - c)x = d - b -> x = (d - b) / (a - c)'
          },
          {
            topic: 'Cross-Multiplication of Fractional Equations',
            quickTake: 'Directly multiply numerator of LHS with denominator of RHS and vice-versa.',
            keyPoints: [
              'If (ax + b) / (cx + d) = m / n, then n · (ax + b) = m · (cx + d).',
              'Expand both brackets and transpose terms to solve for variable x.',
              'Always verify the solution by substituting back into original equation.'
            ],
            formulaOrEquation: '(ax + b)/(cx + d) = m/n -> n(ax + b) = m(cx + d)'
          }
        ],
        mindmap: {
          center: 'Linear Equations in 1 Var',
          branches: [
            {
              title: '1. Equation Basics',
              subtopics: ['Degree 1 condition', 'LHS = RHS balance scale', 'Root / Solution definition', 'Verification by substitution'],
              examTip: 'A linear equation in one variable always has a unique solution.',
              color: 'blue'
            },
            {
              title: '2. Solving Techniques',
              subtopics: ['Transposition (+ to -, × to ÷)', 'Variable on both sides', 'Equations with brackets', 'Cross-multiplication of rational expressions'],
              examTip: 'Multiply every term by the LCM of denominators to clear fractions immediately.',
              color: 'purple'
            },
            {
              title: '3. Age Word Problems',
              subtopics: ['Present age assumption x', 'Age after n years = x + n', 'Age n years ago = x - n', 'Father-son ratio relations'],
              examTip: 'Always assume current present age as variable x, never future age.',
              color: 'emerald'
            },
            {
              title: '4. Number & Geometry Problems',
              subtopics: ['Consecutive integers x, x+1, x+2', 'Perimeter of rectangle 2(l+b)', 'Currency notes of different denominations', 'Two-digit numbers (10x + y)'],
              examTip: 'Reversing digits of two-digit number (10x + y) gives (10y + x).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Squares, Square Roots, Cubes & Roots',
        keyTopics: [
          'Properties of square numbers (units digits, Pythagorean triplets 2m, m²-1, m²+1)',
          'Finding square root by prime factorisation and long division method (with decimals)',
          'Properties of cube numbers, units digit pattern, and Hardy-Ramanujan number 1729',
          'Finding cube roots by prime factorisation and estimation method'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Senior Mathematics Faculty',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.98,
        upvotes: 820,
        videoDuration: '4m 45s',
        summaryTelugu: 'వర్గాలు, వర్గమూలాలు, ఘనాలు, ఘనమూలాలు: పైథాగరియన్ త్రికాలు (2m, m²-1, m²+1), భాగాహార పద్ధతి మరియు హార్డీ-రామానుజన్ సంఖ్య 1729.',
        summaryEnglish: 'Long division method for decimal square roots and grouping triplets for cube roots.',
        examWeightage: '10 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Square Numbers & Pythagorean Triplets',
            quickTake: 'A natural number ending in 2, 3, 7, 8 or odd number of zeroes is never a perfect square.',
            keyPoints: [
              'Square numbers only end in 0, 1, 4, 5, 6, 9.',
              'Pythagorean Triplet formula: For any natural number m > 1, (2m)², (m² - 1)², and (m² + 1)² form a triplet.',
              'Number of non-perfect square numbers between n² and (n + 1)² is exactly 2n.'
            ],
            formulaOrEquation: '(2m)² + (m² - 1)² = (m² + 1)²; Non-squares between n² & (n+1)² = 2n'
          },
          {
            topic: 'Long Division for Square Roots',
            quickTake: 'Pair digits from right to left (from decimal point for decimals) and extract roots sequentially.',
            keyPoints: [
              'Pair digits: e.g. 5,29 -> pair 29 and single 5.',
              'Largest square ≤ 5 is 2² = 4. Remainder 1. Bring down 29 -> 129.',
              'Double divisor: 2 × 2 = 4. Test 43 × 3 = 129. So √529 = 23.'
            ],
            formulaOrEquation: '√529 = 23; √17.64 = 4.2'
          },
          {
            topic: 'Cubes & Hardy-Ramanujan Number',
            quickTake: 'Hardy-Ramanujan number 1729 is smallest number expressible as sum of two cubes in two different ways.',
            keyPoints: [
              '1729 = 1728 + 1 = 12³ + 1³.',
              '1729 = 1000 + 729 = 10³ + 9³.',
              'Cube root by prime factorisation: Group identical prime factors into groups of 3 (triplets).'
            ],
            formulaOrEquation: '1729 = 12³ + 1³ = 10³ + 9³; ³√(a · b) = ³√a · ³√b'
          }
        ],
        mindmap: {
          center: 'Squares & Cubes',
          branches: [
            {
              title: '1. Square Properties',
              subtopics: ['End digits rule (never 2,3,7,8)', 'Sum of first n odd numbers = n²', 'Pythagorean Triplets (2m, m²-1, m²+1)', 'Non-squares between n² and (n+1)² = 2n'],
              examTip: 'To find Pythagorean triplet whose smallest member is 6: Set 2m = 6 -> m = 3 -> Triplet is 6, 8, 10.',
              color: 'blue'
            },
            {
              title: '2. Square Root Methods',
              subtopics: ['Repeated subtraction of odds', 'Prime factorisation (pairs)', 'Long division method', 'Decimal square roots pairing'],
              examTip: 'In decimals, start pairing from the decimal point towards the left for integer and towards the right for decimals.',
              color: 'purple'
            },
            {
              title: '3. Cube Properties',
              subtopics: ['Cubes of even numbers are even', 'Cubes of odd numbers are odd', 'Hardy-Ramanujan number 1729', 'Cube ending digits pattern'],
              examTip: 'Unit digit of cube of a number ending in 8 is 2, and ending in 2 is 8.',
              color: 'emerald'
            },
            {
              title: '4. Cube Root Extraction',
              subtopics: ['Prime factorisation in triplets', 'Estimation method from units place', 'Negative cube roots ³√(-x) = -³√x'],
              examTip: 'Group digits in triplets from right to find cube root by estimation.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 4,
        title: 'Mensuration (Area & Volume of 2D & 3D Shapes)',
        keyTopics: [
          'Area of Trapezium: ½ × (sum of parallel sides) × height',
          'Area of general quadrilateral (½ d (h1 + h2)) and Rhombus (½ d1 d2)',
          'Surface area of Cuboid (2(lb + bh + hl)), Cube (6a²), and Cylinder (2πrh + 2πr²)',
          'Volume of Cuboid (l·b·h), Cube (a³), and Cylinder (πr²h) with unit conversions (1 L = 1000 cm³)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Mensuration Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.97,
        upvotes: 840,
        videoDuration: '4m 50s',
        summaryTelugu: 'క్షేత్రమితి: ట్రాపీజియం వైశాల్యం ½(a+b)h, రాంబస్ వైశాల్యం ½d1d2, మరియు దీర్ఘఘనం, ఘనం, స్థూపం (Cylinder) ఉపరితల వైశాల్యాలు-ఘనపరిమాణాలు.',
        summaryEnglish: 'Formula sheet for 2D quadrilaterals, cylinder surface area, and capacity in Litres conversions (1 m³ = 1000 Litres).',
        examWeightage: '10 Marks',
        formulaeCount: 8,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Area of Trapezium & Quadrilaterals',
            quickTake: 'Trapezium area is average of parallel sides multiplied by perpendicular distance.',
            keyPoints: [
              'Area of Trapezium = ½ · (a + b) · h.',
              'Area of Rhombus = ½ · d1 · d2 (diagonals bisect at right angles).',
              'Area of General Quadrilateral = ½ · d · (h1 + h2) where d is diagonal and h1, h2 are perpendicular offsets.'
            ],
            formulaOrEquation: 'Trapezium Area = ½(a + b)h; Rhombus Area = ½·d1·d2'
          },
          {
            topic: '3D Solid Surface Areas',
            quickTake: 'Total surface area is sum of areas of all boundary faces.',
            keyPoints: [
              'Cuboid TSA = 2(lb + bh + hl); Lateral Surface Area (4 walls) = 2(l + b)h.',
              'Cube TSA = 6a²; Lateral Surface Area = 4a².',
              'Cylinder Curved Surface Area (CSA) = 2 · π · r · h.',
              'Cylinder Total Surface Area (TSA) = 2 · π · r · (h + r).'
            ],
            formulaOrEquation: 'Cylinder CSA = 2πrh; Cylinder TSA = 2πr(r + h)'
          },
          {
            topic: 'Volumes & Capacity Conversions',
            quickTake: 'Volume is the measure of 3D space occupied by an object; capacity is the liquid it can hold.',
            keyPoints: [
              'Volume of Cuboid = l · b · h; Volume of Cube = a³.',
              'Volume of Cylinder = π · r² · h (Area of base × height).',
              'Capacity unit conversions: 1 cm³ = 1 mL; 1000 cm³ = 1 Litre; 1 m³ = 1000 Litres.'
            ],
            formulaOrEquation: '1 m³ = 1000 Litres; 1 Litre = 1000 cm³'
          }
        ],
        mindmap: {
          center: 'Mensuration',
          branches: [
            {
              title: '1. 2D Polygons',
              subtopics: ['Trapezium Area ½(a+b)h', 'Rhombus Area ½d1d2', 'General Quadrilateral ½d(h1+h2)', 'Irregular polygon decomposition'],
              examTip: 'Decompose irregular polygons into triangles and trapeziums.',
              color: 'blue'
            },
            {
              title: '2. Cuboid & Cube',
              subtopics: ['Cuboid TSA 2(lb+bh+hl)', 'LSA (Area of 4 walls) 2(l+b)h', 'Cube TSA 6a²', 'Cuboid & Cube Volumes (lbh, a³)'],
              examTip: 'For whitewashing 4 walls and ceiling, Area = 2(l+b)h + lb.',
              color: 'purple'
            },
            {
              title: '3. Right Circular Cylinder',
              subtopics: ['Base Area πr²', 'Curved Surface Area 2πrh', 'Total Surface Area 2πr(h+r)', 'Volume πr²h'],
              examTip: 'If a cylinder is open at top, Surface Area = 2πrh + πr².',
              color: 'emerald'
            },
            {
              title: '4. Capacity & Conversions',
              subtopics: ['1 m³ = 1000 L', '1 L = 1000 cm³', 'Rate of water pumping in reservoir', 'Wall brick count problems'],
              examTip: 'Number of bricks = (Volume of wall) / (Volume of 1 brick).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
