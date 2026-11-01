import { Subject } from '../types';

export const CBSE_10_SUBJECTS: Subject[] = [
  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 10 CBSE SCIENCE
  // ==========================================
  {
    id: 'vvs-cbse10-science',
    code: 'CBSE-086',
    name: 'Class 10 Science (Physics, Chemistry & Biology)',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Board Core',
    units: [
      {
        unitNumber: 1,
        title: 'Chemical Reactions and Equations',
        keyTopics: [
          'Balancing chemical equations (Hit-and-trial & algebraic methods)',
          'Types of reactions: Combination, Decomposition, Displacement, Double Displacement',
          'Oxidation, Reduction, Redox reactions & oxidizing agents',
          'Corrosion and Rancidity with daily life prevention examples'
        ],
        readingTime: '18 mins',
        verifiedBy: 'R. Ananya (98.2% CBSE)',
        verifiedRole: 'Visakha Valley School Class 10 Topper 2024',
        pdfPages: 14,
        fileSize: '1.8 MB',
        rating: 4.98,
        upvotes: 624,
        videoDuration: '3m 30s',
        summaryTelugu: 'రసాయన చర్యలు మరియు సమీకరణాలు: బ్యాలెన్సింగ్ ఈక్వేషన్స్, రెడాక్స్ చర్యలు మరియు తుప్పు పట్టడం (కొర్రోషన్) నివారణ పద్ధతులు.',
        summaryEnglish: 'Clean color changes cheatsheet (lead nitrate decomposition, copper sulfate displacement) and step-by-step balancing tricks for CBSE Board.',
        examWeightage: '6-8 Marks in CBSE Board',
        formulaeCount: 12,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Balancing Chemical Equations',
            quickTake: 'Mass conservation dictates equal atoms on both reactant and product sides.',
            keyPoints: [
              'Law of Conservation of Mass: Matter cannot be created or destroyed in a reaction.',
              'Never change chemical subscripts (e.g. H2O cannot become H2O2); only modify coefficients.',
              'State symbols are mandatory for full marks: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.'
            ],
            formulaOrEquation: '2Pb(NO3)2(s) --Δ--> 2PbO(s) + 4NO2(g) + O2(g)'
          },
          {
            topic: 'Types of Chemical Reactions',
            quickTake: 'Four fundamental categories based on atomic rearrangement and bond changes.',
            keyPoints: [
              'Combination: Two or more reactants combine to form a single product (CaO + H2O -> Ca(OH)2 + Heat).',
              'Decomposition: Single reactant breaks down using thermal, electrolytic, or photolytic energy.',
              'Displacement: More reactive metal displaces less reactive metal (Fe + CuSO4 -> FeSO4 + Cu).',
              'Double Displacement: Exchange of ions between reactants, frequently forming an insoluble precipitate.'
            ],
            formulaOrEquation: 'Na2SO4(aq) + BaCl2(aq) -> BaSO4(s)↓ + 2NaCl(aq)'
          },
          {
            topic: 'Oxidation, Reduction & Rancidity',
            quickTake: 'Redox reactions involve simultaneous loss and gain of oxygen or electrons.',
            keyPoints: [
              'Oxidation = Gain of oxygen or loss of hydrogen/electrons.',
              'Reduction = Loss of oxygen or gain of hydrogen/electrons.',
              'Corrosion: Slow eating away of metals by atmospheric gases (Rust: Fe2O3·xH2O).',
              'Rancidity: Aerial oxidation of oils and fats leading to foul smell and taste; prevented by Nitrogen flushing.'
            ],
            formulaOrEquation: 'CuO + H2 --heat--> Cu + H2O (CuO reduced, H2 oxidized)'
          }
        ],
        mindmap: {
          center: 'Chemical Reactions & Equations',
          branches: [
            {
              title: '1. Fundamentals',
              subtopics: ['Chemical vs Physical Change', 'Word Equations', 'Law of Conservation of Mass', 'State Symbols'],
              examTip: 'Always balance atoms of polyatomic ions together to save time.',
              color: 'blue'
            },
            {
              title: '2. Reaction Types',
              subtopics: ['Combination (Exothermic)', 'Decomposition (Heat, Light, Electricity)', 'Displacement (Reactivity series)', 'Double Displacement (Precipitation)'],
              examTip: 'Memorize color of precipitates: BaSO4 (White), PbI2 (Yellow).',
              color: 'purple'
            },
            {
              title: '3. Energy Changes',
              subtopics: ['Exothermic (Respiration, Slaking of lime)', 'Endothermic (Photosynthesis, Electrolysis of water)'],
              examTip: 'CBSE frequently asks why respiration is considered exothermic.',
              color: 'emerald'
            },
            {
              title: '4. Everyday Redox',
              subtopics: ['Corrosion of Iron, Copper & Silver', 'Rancidity & Antioxidants', 'Nitrogen packaging'],
              examTip: 'Silver turns black due to Ag2S, Copper turns green due to basic copper carbonate.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Light: Reflection and Refraction',
        keyTopics: [
          'Reflection by spherical mirrors (Concave & Convex ray diagrams)',
          'Mirror formula, Magnification, and Cartesian sign convention',
          'Refraction through glass slab & Snell\'s Law (Refractive index)',
          'Lens formula, Lens magnification, and Power of a lens (Dioptre)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'S. Kautilya (97.8% CBSE)',
        verifiedRole: 'Visakha Valley School Science Lead',
        pdfPages: 19,
        fileSize: '2.5 MB',
        rating: 4.96,
        upvotes: 780,
        videoDuration: '4m 15s',
        summaryTelugu: 'కాంతి: పుటాకార మరియు కుంభాకార అద్దాల కిరణ చిత్రాలు, లెన్స్ సూత్రం, మరియు ఫోకల్ లెంగ్త్ న్యూమరికల్స్.',
        summaryEnglish: 'All 6 concave mirror ray diagrams, Snell\'s law, and Cartesian sign convention table for zero-mistake numericals.',
        examWeightage: '8-10 Marks in CBSE Board',
        formulaeCount: 7,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Spherical Mirrors & Ray Diagrams',
            quickTake: 'Concave mirrors converge light (used in headlights, shaving); convex mirrors diverge (rearview mirrors).',
            keyPoints: [
              'Concave mirror: Object at C gives real, inverted image at C of same size.',
              'Concave mirror: Object between F and P gives virtual, erect, and magnified image behind the mirror.',
              'Convex mirror always forms virtual, erect, and diminished images regardless of object distance.'
            ],
            formulaOrEquation: '1/v + 1/u = 1/f; m = -v/u = h\'/h'
          },
          {
            topic: 'Refraction & Snell\'s Law',
            quickTake: 'Light bends due to change of speed when entering optically denser or rarer media.',
            keyPoints: [
              'Snell\'s Law: ratio of sin(i) to sin(r) is constant for a given pair of media.',
              'Refractive index n = c / v (speed of light in vacuum / speed in medium).',
              'Lateral displacement occurs when light passes through a rectangular glass slab with parallel faces.'
            ],
            formulaOrEquation: 'n21 = sin(i) / sin(r) = v1 / v2'
          },
          {
            topic: 'Lenses & Optical Power',
            quickTake: 'Convex lenses converge light (f > 0); concave lenses diverge (f < 0). Power measured in Dioptres.',
            keyPoints: [
              'Lens Formula: 1/v - 1/u = 1/f (Notice the minus sign compared to mirror formula!).',
              'Magnification for lenses: m = +v/u = h\'/h.',
              'Power P = 1 / f(in meters). Unit is Dioptre (D). Converging lens has +P; diverging lens has -P.'
            ],
            formulaOrEquation: 'P = 1 / f(m); P_total = P1 + P2 + P3'
          }
        ],
        mindmap: {
          center: 'Light: Reflection & Refraction',
          branches: [
            {
              title: '1. Spherical Mirrors',
              subtopics: ['Concave (6 Cases)', 'Convex (Always virtual/diminished)', 'Mirror Formula', 'Magnification m = -v/u'],
              examTip: 'Object distance u is ALWAYS negative in Cartesian convention.',
              color: 'blue'
            },
            {
              title: '2. Refraction at Planes',
              subtopics: ['Bending towards/away from normal', 'Snell\'s Law', 'Refractive Index', 'Lateral Displacement'],
              examTip: 'Higher refractive index = optically denser medium = slower speed of light.',
              color: 'purple'
            },
            {
              title: '3. Spherical Lenses',
              subtopics: ['Convex Lens (Real/Virtual)', 'Concave Lens (Virtual)', 'Lens Formula 1/v - 1/u = 1/f', 'Magnification m = v/u'],
              examTip: 'Do not confuse mirror formula (+) with lens formula (-).',
              color: 'emerald'
            },
            {
              title: '4. Power of Lens',
              subtopics: ['Dioptre definition', 'Sign (+ for convex, - for concave)', 'Combination of thin lenses in contact'],
              examTip: 'Ensure focal length is converted to meters before calculating P = 1/f.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Life Processes (Nutrition, Respiration, Transport & Excretion)',
        keyTopics: [
          'Autotrophic vs Heterotrophic nutrition; stomatal mechanism',
          'Aerobic vs Anaerobic respiration pathways in yeast, muscle, and mitochondria',
          'Double circulation of blood in human heart with labeled diagram',
          'Structure and functioning of Nephron in human kidney'
        ],
        readingTime: '25 mins',
        verifiedBy: 'M. Tanvi (Visakha Valley School 99 in Science)',
        verifiedRole: 'State Science Olympiad Rank 1',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.95,
        upvotes: 890,
        videoDuration: '4m 50s',
        summaryTelugu: 'జీవ క్రియలు: మానవ గుండె రక్త ప్రసరణ మరియు మూత్రపిండాల నెఫ్రాన్ డయాగ్రమ్స్.',
        summaryEnglish: 'Must-draw diagrams for CBSE: Human Heart double circulation, Nephron filtering unit, and breakdown of glucose flow chart.',
        examWeightage: '9-11 Marks in CBSE Board',
        formulaeCount: 3,
        solvedQuestionsCount: 20,
        topicAtAGlance: [
          {
            topic: 'Nutrition (Autotrophic & Heterotrophic)',
            quickTake: 'Green plants synthesize food via photosynthesis; animals ingest complex nutrients broken down by enzymes.',
            keyPoints: [
              'Photosynthesis: 6CO2 + 12H2O --light/chlorophyll--> C6H12O6 + 6O2 + 6H2O.',
              'Stomatal pore opening and closing is regulated by turgidity of guard cells.',
              'Human digestive system: Salivary amylase (mouth), Pepsin & HCl (stomach), Trypsin & Lipase (small intestine).'
            ],
            formulaOrEquation: 'C6H12O6 + 6O2 -> 6CO2 + 6H2O + 38 ATP'
          },
          {
            topic: 'Respiration Pathways',
            quickTake: 'Glucose (6-carbon) converts to Pyruvate (3-carbon) in cytoplasm, then follows 3 distinct metabolic paths.',
            keyPoints: [
              'Aerobic (Mitochondria with O2): Yields CO2 + H2O + High Energy (38 ATP).',
              'Anaerobic in Yeast (Absence of O2): Fermentation yields Ethanol + CO2 + 2 ATP.',
              'Anaerobic in Muscle cells (Lack of O2 during intense sprinting): Lactic acid + 2 ATP (causes muscle cramps).'
            ],
            formulaOrEquation: 'Glucose (6C) -> Pyruvate (3C) -> Lactic Acid / Ethanol / CO2+H2O'
          },
          {
            topic: 'Transportation & Excretion',
            quickTake: 'Double circulation separates oxygenated and deoxygenated blood; nephrons filter metabolic waste.',
            keyPoints: [
              'Human Heart: 4 chambers prevent mixing of oxygenated and deoxygenated blood.',
              'Double circulation comprises Pulmonary (Heart-Lungs) and Systemic (Heart-Body) circuits.',
              'Nephron filtration: Glomerulus filters nitrogenous waste -> Tubular reabsorption of glucose, amino acids, water -> Urine in collecting duct.'
            ],
            formulaOrEquation: 'Filtration in Bowman\'s Capsule -> Tubular Reabsorption -> Excretion'
          }
        ],
        mindmap: {
          center: 'Life Processes',
          branches: [
            {
              title: '1. Nutrition',
              subtopics: ['Autotrophic (Photosynthesis equation)', 'Stomatal mechanism', 'Heterotrophic (Amoeba)', 'Human Alimentary Canal'],
              examTip: 'Remember: Small intestine has villi for maximum surface area absorption.',
              color: 'blue'
            },
            {
              title: '2. Respiration',
              subtopics: ['Cytoplasmic glycolysis (Pyruvate)', 'Aerobic (Mitochondria)', 'Anaerobic (Yeast fermentation)', 'Muscle lactic acid cramp'],
              examTip: 'The 3-pathway flowchart of glucose breakdown is asked every year in CBSE.',
              color: 'purple'
            },
            {
              title: '3. Transportation',
              subtopics: ['Human Heart 4 chambers', 'Pulmonary & Systemic circuits', 'Arteries vs Veins vs Capillaries', 'Xylem (Water) & Phloem (Translocation)'],
              examTip: 'Arteries have thick elastic walls; veins have valves to prevent backflow.',
              color: 'emerald'
            },
            {
              title: '4. Excretion',
              subtopics: ['Kidney anatomy', 'Nephron structure (Bowman\'s capsule & glomerulus)', 'Selective reabsorption', 'Dialysis (Artificial kidney)'],
              examTip: 'Nephron diagram must clearly show afferent and efferent arterioles.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 4,
        title: 'Electricity & Electric Currents',
        keyTopics: [
          'Ohm\'s Law, V-I graph, and verification circuit diagram',
          'Factors affecting resistance: Resistivity (ρ = R·A/L)',
          'Resistors in Series (Rs = R1+R2) and Parallel (1/Rp = 1/R1+1/R2)',
          'Joule\'s Law of Heating and commercial unit of electrical energy (kWh)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'P. Rohit Sharma (VVS Science Lead)',
        verifiedRole: 'Visakha Valley School CBSE 98.4%',
        pdfPages: 18,
        fileSize: '2.2 MB',
        rating: 4.94,
        upvotes: 710,
        videoDuration: '4m 00s',
        summaryTelugu: 'విద్యుత్: ఓమ్ నియమం, సమాంతర మరియు శ్రేణి నిరోధకాల లెక్కలు, విద్యుత్ బిల్లు (kWh) కనుగొనే న్యూమరికల్స్.',
        summaryEnglish: 'Circuit reduction techniques for ladder resistors and household power consumption cost calculations.',
        examWeightage: '8-9 Marks in CBSE Board',
        formulaeCount: 8,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Ohm\'s Law & Resistance Factors',
            quickTake: 'Potential difference across a conductor is proportional to current, provided temperature remains constant.',
            keyPoints: [
              'V = I · R; Slope of V-I graph gives Resistance R.',
              'Resistance depends on: Length (R ∝ L), Area of cross-section (R ∝ 1/A), and material nature.',
              'Resistivity ρ = R · A / L; unit is Ohm-meter (Ω·m). Resistivity depends only on material and temperature.'
            ],
            formulaOrEquation: 'V = I · R; R = ρ · (L / A)'
          },
          {
            topic: 'Series vs Parallel Resistor Circuits',
            quickTake: 'Series circuits share current; parallel circuits share voltage.',
            keyPoints: [
              'Series: Rs = R1 + R2 + R3; Current remains same through all components, potential divides.',
              'Parallel: 1/Rp = 1/R1 + 1/R2 + 1/R3; Voltage remains same across all branches, current divides.',
              'Domestic circuits are always connected in parallel so devices operate independently without voltage drop.'
            ],
            formulaOrEquation: 'Rs = Σ Ri; 1/Rp = Σ (1/Ri)'
          },
          {
            topic: 'Heating Effect & Commercial Energy',
            quickTake: 'Electric energy dissipated as heat when current flows through high-resistance conductor.',
            keyPoints: [
              'Joule\'s Heating Law: H = I² · R · t.',
              'Power P = V · I = I² · R = V² / R. Unit is Watt (W).',
              'Commercial unit of energy: 1 Kilowatt-hour (1 kWh) = 3.6 × 10^6 Joules = 1 Board of Trade Unit.'
            ],
            formulaOrEquation: 'H = I² · R · t; 1 kWh = 3.6 × 10^6 J'
          }
        ],
        mindmap: {
          center: 'Electricity',
          branches: [
            {
              title: '1. Potential & Current',
              subtopics: ['Current I = Q/t (Ampere)', 'Potential V = W/Q (Volt)', 'Ammeter in series', 'Voltmeter in parallel'],
              examTip: 'Ammeter has low resistance; voltmeter has very high resistance.',
              color: 'blue'
            },
            {
              title: '2. Ohm\'s Law & Resistivity',
              subtopics: ['V = I·R', 'R = ρ·L/A', 'Resistivity of alloys vs metals', 'Nichrome wire in heating elements'],
              examTip: 'Alloys have higher resistivity and do not oxidize easily at high temperatures.',
              color: 'purple'
            },
            {
              title: '3. Resistor Combinations',
              subtopics: ['Series combination (Rs > Rmax)', 'Parallel combination (Rp < Rmin)', 'Advantages of parallel domestic circuits'],
              examTip: 'When wire is stretched to double length, resistance increases by 4x because area halves.',
              color: 'emerald'
            },
            {
              title: '4. Heating & Power',
              subtopics: ['Joule\'s Law H = I²Rt', 'Electric Power P = VI = I²R = V²/R', 'Fuse rating', '1 kWh = 3.6 × 10^6 J calculations'],
              examTip: 'Always calculate energy in kWh when computing electricity bill costs.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 5,
        title: 'Magnetic Effects of Electric Current',
        keyTopics: [
          'Magnetic field lines and their properties around straight conductor and circular loop',
          'Right-Hand Thumb Rule and Maxwell\'s Corkscrew rule',
          'Force on a current-carrying conductor in a magnetic field (Fleming\'s Left-Hand Rule)',
          'Domestic electric circuits: Earth wire, fuse, short circuit, and overloading'
        ],
        readingTime: '17 mins',
        verifiedBy: 'K. Sneha (VVS Head Girl 2024)',
        verifiedRole: 'CBSE Visakhapatnam District Topper',
        pdfPages: 15,
        fileSize: '1.9 MB',
        rating: 4.91,
        upvotes: 540,
        videoDuration: '3m 20s',
        summaryTelugu: 'విద్యుత్ ప్రవాహం అయస్కాంత ప్రభావాలు: ఫ్లెమింగ్ ఎడమచేతి నియమం, సోలేనోయిడ్ మరియు డొమెస్టిక్ సర్క్యూట్లలో ఎర్తింగ్ ప్రాముఖ్యత.',
        summaryEnglish: 'Quick revision points: Why magnetic field lines never intersect, Solenoid field pattern, and fuse wire safety rationale.',
        examWeightage: '6 Marks in CBSE Board',
        formulaeCount: 4,
        solvedQuestionsCount: 12,
        topicAtAGlance: [
          {
            topic: 'Magnetic Field Lines',
            quickTake: 'Continuous closed loops showing direction of magnetic force; crowded where field is strongest.',
            keyPoints: [
              'Emerge from North pole and enter South pole outside magnet; run South to North inside.',
              'No two magnetic field lines ever intersect because compass needle cannot point in two directions at once.',
              'Solenoid: Long cylindrical coil of insulated copper wire; field inside is uniform and resembles bar magnet.'
            ],
            formulaOrEquation: 'B ∝ I / r (Straight wire); B ∝ n · I (Solenoid)'
          },
          {
            topic: 'Fleming\'s Left-Hand Rule & Force',
            quickTake: 'Determines direction of mechanical force on current-carrying conductor in magnetic field.',
            keyPoints: [
              'Thumb = Direction of Force/Motion.',
              'Forefinger = Direction of Magnetic Field (North to South).',
              'Middle finger = Direction of Electric Current (+ to -).',
              'Force is maximum when conductor is perpendicular to magnetic field (θ = 90°).'
            ],
            formulaOrEquation: 'F = B · I · L · sin(θ)'
          },
          {
            topic: 'Domestic Electric Circuits & Safety',
            quickTake: 'Household electricity supplied at 220V, 50 Hz AC with Live, Neutral, and Earth wires.',
            keyPoints: [
              'Live wire (Red/Brown) at 220V, Neutral wire (Black/Blue) at 0V.',
              'Earth wire (Green/Yellow) provides low-resistance path to ground, protecting users from electric shocks from metallic appliances.',
              'Short circuit occurs when live wire directly contacts neutral wire; fuse wire melts to break circuit.'
            ],
            formulaOrEquation: 'P = V · I -> Fuse rating chosen just above operating current'
          }
        ],
        mindmap: {
          center: 'Magnetic Effects of Current',
          branches: [
            {
              title: '1. Field Patterns',
              subtopics: ['Bar Magnet lines', 'Right-Hand Thumb Rule', 'Circular Loop', 'Solenoid & Electromagnet'],
              examTip: 'Field inside a solenoid is uniform and represented by parallel straight lines.',
              color: 'blue'
            },
            {
              title: '2. Force & Rules',
              subtopics: ['Ampere\'s hypothesis', 'Fleming\'s Left-Hand Rule', 'Electric Motor principle', 'Maximum force at 90°'],
              examTip: 'Thumb = Force, Forefinger = Field, Center finger = Current (mnemonic: Father, Mother, Child).',
              color: 'purple'
            },
            {
              title: '3. Electromagnetic Induction',
              subtopics: ['Faraday\'s experiment', 'Induced current', 'Fleming\'s Right-Hand Rule', 'AC vs DC current'],
              examTip: 'In India, AC frequency is 50 Hz, changing direction every 1/100 second.',
              color: 'emerald'
            },
            {
              title: '4. Domestic Safety',
              subtopics: ['Live, Neutral, Earth wires', 'Function of Earth wire', 'Overloading causes', 'Electric fuse safety'],
              examTip: 'Earth wire ensures metallic body of appliance remains at zero ground potential.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 10 CBSE MATHEMATICS
  // ==========================================
  {
    id: 'vvs-cbse10-maths',
    code: 'CBSE-041',
    name: 'Class 10 Mathematics (Standard & Basic)',
    semesterOrGrade: 'Class 10 Board',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class10',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Mathematics',
    units: [
      {
        unitNumber: 1,
        title: 'Real Numbers & Polynomials',
        keyTopics: [
          'Fundamental Theorem of Arithmetic (Prime factorization & LCM/HCF relations)',
          'Proof of irrationality for √2, √3, √5, and (3 + 2√5)',
          'Geometrical meaning of zeroes of a polynomial',
          'Relationship between zeroes and coefficients of quadratic polynomials'
        ],
        readingTime: '18 mins',
        verifiedBy: 'V. Aditya (100/100 CBSE Maths)',
        verifiedRole: 'Visakha Valley School Maths Lead',
        pdfPages: 16,
        fileSize: '2.0 MB',
        rating: 4.99,
        upvotes: 940,
        videoDuration: '3m 40s',
        summaryTelugu: 'వాస్తవ సంఖ్యలు మరియు బహుపదులు: √5 కరణీయ సంఖ్య అని నిరూపించడం, శూన్యాల సంబంధాలు మరియు HCF × LCM = a × b లెక్కలు.',
        summaryEnglish: 'Standard 3-mark proof of irrationality written in the exact step-by-step format required by CBSE Board evaluators.',
        examWeightage: '6-8 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Fundamental Theorem of Arithmetic',
            quickTake: 'Every composite number can be uniquely expressed as a product of prime powers.',
            keyPoints: [
              'HCF(a, b) × LCM(a, b) = a × b (Only valid for two numbers, not for three!).',
              'To find HCF: Product of smallest power of each common prime factor.',
              'To find LCM: Product of greatest power of each prime factor involved.'
            ],
            formulaOrEquation: 'HCF(a, b) · LCM(a, b) = a · b'
          },
          {
            topic: 'Irrationality Proofs',
            quickTake: 'Proof by contradiction: assume rational p/q where p and q are co-prime.',
            keyPoints: [
              'Show that p² is divisible by prime 5, so p is divisible by 5 (p = 5k).',
              'Substitute to show q² is also divisible by 5, contradicting that p and q are co-prime.',
              'Conclude √5 is irrational.'
            ],
            formulaOrEquation: '√p is irrational for any prime p'
          },
          {
            topic: 'Zeroes and Coefficients of Quadratic Polynomial',
            quickTake: 'For ax² + bx + c, sum of roots is -b/a and product of roots is c/a.',
            keyPoints: [
              'Sum of zeroes: α + β = -b / a = -(Coefficient of x) / (Coefficient of x²).',
              'Product of zeroes: α · β = c / a = (Constant term) / (Coefficient of x²).',
              'Forming polynomial: k [x² - (α + β)x + αβ].'
            ],
            formulaOrEquation: 'α + β = -b/a; α·β = c/a'
          }
        ],
        mindmap: {
          center: 'Real Numbers & Polynomials',
          branches: [
            {
              title: '1. Real Numbers',
              subtopics: ['Fundamental Theorem of Arithmetic', 'Prime Factorisation', 'HCF & LCM formula', 'Application to word problems'],
              examTip: 'HCF is used for maximum capacity/lengths; LCM for simultaneous bell ringing.',
              color: 'blue'
            },
            {
              title: '2. Irrationality Proofs',
              subtopics: ['Theorem: p|a² implies p|a', 'Proof of √2, √3, √5', 'Proof of (a ± b√p)'],
              examTip: 'Always mention that p and q are integers with q ≠ 0 and co-prime.',
              color: 'purple'
            },
            {
              title: '3. Polynomial Graphs',
              subtopics: ['Linear graph (1 zero)', 'Parabola open upwards/downwards', 'Number of zeroes = x-axis intersections'],
              examTip: 'A quadratic polynomial can have at most 2 real zeroes.',
              color: 'emerald'
            },
            {
              title: '4. Root Relationships',
              subtopics: ['α + β = -b/a', 'αβ = c/a', 'Finding α² + β² = (α+β)² - 2αβ', 'Quadratic polynomial reconstruction'],
              examTip: 'Always write the non-zero constant k when writing the required polynomial.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Quadratic Equations & Arithmetic Progressions',
        keyTopics: [
          'Standard form ax² + bx + c = 0; Solution by factorisation and Quadratic Formula',
          'Nature of roots: Discriminant D = b² - 4ac (Real, distinct, equal, or imaginary)',
          'nth term of an AP: an = a + (n - 1)d',
          'Sum of first n terms of an AP: Sn = n/2 [2a + (n - 1)d]'
        ],
        readingTime: '22 mins',
        verifiedBy: 'T. Harini (99/100 Maths)',
        verifiedRole: 'Visakha Valley School Academic Excellence Award',
        pdfPages: 20,
        fileSize: '2.4 MB',
        rating: 4.97,
        upvotes: 820,
        videoDuration: '4m 30s',
        summaryTelugu: 'వర్గ సమీకరణాలు & అంకశ్రేఢులు: డిస్క్రిమినెంట్ D = b² - 4ac కండిషన్లు, AP మొత్తం ఫార్ములాలు.',
        summaryEnglish: 'Speed-solving tricks for speed/distance train word problems and water tap filling quadratic equations.',
        examWeightage: '10 Marks',
        formulaeCount: 6,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Quadratic Formula & Nature of Roots',
            quickTake: 'Discriminant D = b² - 4ac dictates whether roots are real, distinct, equal, or complex.',
            keyPoints: [
              'D > 0: Two distinct real roots.',
              'D = 0: Two equal real roots (-b/2a, -b/2a).',
              'D < 0: No real roots (roots are imaginary).'
            ],
            formulaOrEquation: 'x = (-b ± √(b² - 4ac)) / (2a)'
          },
          {
            topic: 'Arithmetic Progression (AP) Formulas',
            quickTake: 'A sequence where difference between consecutive terms remains constant (common difference d).',
            keyPoints: [
              'nth term: an = a + (n - 1)d.',
              'Sum of n terms: Sn = n/2 [2a + (n - 1)d] = n/2 [first term + last term].',
              'Common difference d can be positive, negative, or zero.'
            ],
            formulaOrEquation: 'an = a + (n-1)d; Sn = n/2 (a + l)'
          }
        ],
        mindmap: {
          center: 'Quadratic & AP',
          branches: [
            {
              title: '1. Quadratic Solutions',
              subtopics: ['Splitting middle term', 'Quadratic formula (Shreedharacharya)', 'Speed/Time word problems', 'Upstream/Downstream boat problems'],
              examTip: 'In upstream: speed = (x - y) km/h; In downstream: speed = (x + y) km/h.',
              color: 'blue'
            },
            {
              title: '2. Nature of Roots',
              subtopics: ['Discriminant D = b² - 4ac', 'Equal roots condition (D = 0)', 'Finding unknown k for equal roots'],
              examTip: 'Equal roots question with unknown k is a guaranteed 2 or 3 mark CBSE board question.',
              color: 'purple'
            },
            {
              title: '3. AP General Term',
              subtopics: ['Definition & common difference d', 'nth term formula', 'Finding term from the end an = l - (n-1)d'],
              examTip: 'To find nth term from end: reverse the AP or use an = l - (n-1)d.',
              color: 'emerald'
            },
            {
              title: '4. Sum of AP Terms',
              subtopics: ['Sn formula', 'Relation an = Sn - Sn-1', 'Daily life savings/ladder word problems'],
              examTip: 'Remember an = Sn - S_{n-1} is crucial to find the nth term when Sn is given.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Introduction to Trigonometry & Applications',
        keyTopics: [
          'Trigonometric ratios of acute angles (sin, cos, tan, cosec, sec, cot)',
          'Trigonometric ratios of specific angles: 0°, 30°, 45°, 60°, 90°',
          'Fundamental trigonometric identity: sin²θ + cos²θ = 1 and derivations',
          'Angles of elevation and depression with two-observation tower/ship word problems'
        ],
        readingTime: '26 mins',
        verifiedBy: 'B. Sumanth (VVS 98.6% CBSE)',
        verifiedRole: 'Regional Mathematical Olympiad Qualifier',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.98,
        upvotes: 1040,
        videoDuration: '5m 10s',
        summaryTelugu: 'త్రికోణమితి: సైన్, కాస్, టాన్ విలువల టేబుల్ సులభమైన ట్రిక్స్, ఐడెంటిటీ ప్రూఫ్‌లు మరియు ఎత్తులు-దూరాల 5-మార్కుల లెక్కలు.',
        summaryEnglish: 'Table mnemonic cheat code for 0°-90° values and step-by-step 5-mark heights and distances proof diagrams.',
        examWeightage: '12 Marks in CBSE Board',
        formulaeCount: 10,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Trigonometric Ratios & Table',
            quickTake: 'Ratios of sides in a right-angled triangle relative to acute reference angle θ.',
            keyPoints: [
              'sin θ = Opp/Hyp, cos θ = Adj/Hyp, tan θ = Opp/Adj.',
              'tan 30° = 1/√3, tan 45° = 1, tan 60° = √3.',
              'sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2.'
            ],
            formulaOrEquation: 'tan θ = sin θ / cos θ; cot θ = 1 / tan θ'
          },
          {
            topic: 'Fundamental Identities',
            quickTake: 'Three Pythagorean identities valid for all acute angles.',
            keyPoints: [
              'sin²θ + cos²θ = 1.',
              '1 + tan²θ = sec²θ (or sec²θ - tan²θ = 1).',
              '1 + cot²θ = cosec²θ (or cosec²θ - cot²θ = 1).'
            ],
            formulaOrEquation: 'sin²θ + cos²θ = 1; sec²θ - tan²θ = 1'
          },
          {
            topic: 'Heights & Distances (Applications)',
            quickTake: 'Solve real-world heights using right triangles, angle of elevation, and angle of depression.',
            keyPoints: [
              'Angle of elevation = angle formed above horizontal line of sight.',
              'Angle of depression = angle formed below horizontal line of sight.',
              'Always set up two right triangles sharing a common perpendicular or base variable.'
            ],
            formulaOrEquation: 'tan(θ) = Height / Distance'
          }
        ],
        mindmap: {
          center: 'Trigonometry & Heights',
          branches: [
            {
              title: '1. Ratios (T-Ratios)',
              subtopics: ['sin, cos, tan definitions', 'Reciprocals (cosec, sec, cot)', 'Pythagoras theorem side calculations'],
              examTip: 'Opposite and Adjacent sides change depending on whether angle is at A or C.',
              color: 'blue'
            },
            {
              title: '2. Standard Angle Values',
              subtopics: ['0°, 30°, 45°, 60°, 90° table', 'Trick: √0/4, √1/4, √2/4, √3/4, √4/4', 'Exact values evaluation'],
              examTip: 'Do not substitute decimal approximations; leave answers with surds (e.g. 1/√3).',
              color: 'purple'
            },
            {
              title: '3. Identity Proofs',
              subtopics: ['sin²θ + cos²θ = 1', 'sec²θ - tan²θ = 1', 'cosec²θ - cot²θ = 1', 'LHS to RHS algebraic proofs'],
              examTip: 'Convert complicated expressions to sin and cos when stuck on an identity proof.',
              color: 'emerald'
            },
            {
              title: '4. Heights & Distances',
              subtopics: ['Angle of Elevation', 'Angle of Depression', 'Two-triangle problems', 'Lighthouse & cloud reflection'],
              examTip: 'A neat labeled diagram with horizontal line of sight earns 1 mark automatically.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
