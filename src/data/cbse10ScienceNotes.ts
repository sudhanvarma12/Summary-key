import { Subject } from '../types';

export const CBSE_10_SCIENCE: Subject = {
  id: 'cbse10-science',
  code: 'CBSE-086',
  name: 'Class 10 Science (CBSE Revision Notes)',
  semesterOrGrade: 'Class 10 Board',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class10',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Core Science',
  subjectCategory: 'science',
  units: [
    {
      unitNumber: 1,
      title: 'Chemical Reactions and Equations',
      keyTopics: ['Balancing chemical equations', 'Types of chemical reactions', 'Oxidation & Reduction', 'Corrosion & Rancidity'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Board Specialist',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.96,
      upvotes: 840,
      videoDuration: '3m 15s',
      summaryTelugu: 'రసాయన చర్యలు: రకాలు (సంయోగ, వియోగ, స్థానభ్రంశ), సమీకరణాల బ్యాలెన్సింగ్ మరియు రెడాక్స్ చర్యలు.',
      summaryEnglish: 'Simple, concise revision notes on balancing equations, 4 reaction types, and oxidation-reduction concepts directly from CBSE board curriculum.',
      examWeightage: '6-8 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Chemical Equation & Balancing',
          quickTake: 'A chemical equation shows reactants turning into products with equal number of atoms on both sides.',
          keyPoints: [
            'Follows Law of Conservation of Mass: Mass is neither created nor destroyed.',
            'Never change subscripts of a formula (e.g. H2O stays H2O). Only change coefficients in front.',
            'Always write physical states: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.'
          ],
          formulaOrEquation: '2H2(g) + O2(g) -> 2H2O(l)'
        },
        {
          topic: '2. Four Main Types of Reactions',
          quickTake: 'Reactions are classified by how atoms combine, split, or swap partners.',
          keyPoints: [
            'Combination: Two or more reactants combine to form 1 single product. (CaO + H2O -> Ca(OH)2 + Heat).',
            'Decomposition: 1 compound breaks into 2 or more simpler substances using heat, light, or electricity.',
            'Displacement: More reactive element kicks out less reactive element. (Fe + CuSO4 -> FeSO4 + Cu).',
            'Double Displacement: Two compounds exchange ions, often forming a solid precipitate (BaSO4 white ppt).'
          ],
          formulaOrEquation: 'Displacement: Zn + CuSO4 -> ZnSO4 + Cu | Double Disp: Na2SO4 + BaCl2 -> BaSO4↓ + 2NaCl'
        },
        {
          topic: '3. Redox, Corrosion & Rancidity',
          quickTake: 'Oxidation is gain of oxygen or loss of electrons; reduction is loss of oxygen or gain of electrons.',
          keyPoints: [
            'Redox reaction: Both oxidation and reduction happen together.',
            'Corrosion: Metals eaten away by moist air (e.g. Iron rusting: Fe2O3·xH2O, Copper turns green).',
            'Rancidity: Fats and oils oxidize and give bad smell and taste. Prevented by flushing with Nitrogen gas.'
          ],
          formulaOrEquation: 'CuO + H2 --heat--> Cu + H2O (CuO reduced, H2 oxidized)'
        }
      ],
      mindmap: {
        center: 'Chemical Reactions',
        branches: [
          { title: '1. Basics', subtopics: ['Word equation', 'State symbols', 'Conservation of mass'], color: 'blue' },
          { title: '2. Types', subtopics: ['Combination', 'Decomposition', 'Displacement', 'Double Displacement'], color: 'purple' },
          { title: '3. Energy', subtopics: ['Exothermic (releases heat)', 'Endothermic (absorbs heat)'], color: 'emerald' },
          { title: '4. Everyday Redox', subtopics: ['Rusting of iron', 'Rancidity prevention with N2'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why should a magnesium ribbon be cleaned with sandpaper before burning in air?',
          marks: '2 Marks',
          answer: 'To remove the protective basic magnesium oxide layer formed on its surface, allowing it to burn smoothly with a dazzling white flame.',
          tip: 'Mention removal of basic magnesium oxide layer.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Acids, Bases and Salts',
      keyTopics: ['pH Scale & Indicators', 'Chemical properties of acids & bases', 'Important salts (Bleaching powder, Baking soda, Plaster of Paris)'],
      readingTime: '14 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Chemistry Mentor',
      pdfPages: 7,
      fileSize: '1.4 MB',
      rating: 4.95,
      upvotes: 790,
      videoDuration: '3m 30s',
      summaryTelugu: 'ఆమ్లాలు, క్షారాలు మరియు లవణాలు: pH స్కేలు, బేకింగ్ సోడా, బ్లీచింగ్ పౌడర్ మరియు ప్లాస్టర్ ఆఫ్ పారిస్ సూత్రాలు.',
      summaryEnglish: 'Quick overview of acid-base chemical reactions, universal indicators, pH scale in daily life, and high-yield salt formulas.',
      examWeightage: '6-8 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Acids and Bases',
          quickTake: 'Acids release H+(aq) ions and turn blue litmus red. Bases release OH-(aq) ions and turn red litmus blue.',
          keyPoints: [
            'Acid + Metal -> Salt + Hydrogen gas (test with popping sound candle).',
            'Acid + Base -> Salt + Water (Neutralization reaction).',
            'Acid + Metal Carbonate -> Salt + Water + Carbon dioxide gas (turns lime water milky).'
          ],
          formulaOrEquation: 'HCl + NaOH -> NaCl + H2O | Zn + 2HCl -> ZnCl2 + H2↑'
        },
        {
          topic: '2. pH Scale in Daily Life',
          quickTake: 'pH measures H+ concentration. pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.',
          keyPoints: [
            'Human body functions best between pH 7.0 and 7.8.',
            'Tooth decay starts when mouth pH falls below 5.5 (acid dissolves enamel).',
            'Antacids like Milk of Magnesia (Mg(OH)2) neutralize excess stomach acid.'
          ],
          formulaOrEquation: 'pH < 7 (Acidic) | pH = 7 (Neutral) | pH > 7 (Basic)'
        },
        {
          topic: '3. Important Salts & Their Uses',
          quickTake: 'Key commercial salts made from common salt (NaCl) with direct board exam formulas.',
          keyPoints: [
            'Bleaching Powder (CaOCl2): Used for disinfecting water and bleaching cotton.',
            'Baking Soda (NaHCO3): Used in baking and fire extinguishers (mild non-corrosive base).',
            'Washing Soda (Na2CO3·10H2O): Has 10 water of crystallisation molecules; removes permanent hardness.',
            'Plaster of Paris (CaSO4·1/2H2O): Made by heating gypsum at 373 K; sets hard when mixed with water.'
          ],
          formulaOrEquation: 'Plaster of Paris: CaSO4·1/2H2O + 1.5H2O -> CaSO4·2H2O (Gypsum)'
        }
      ],
      mindmap: {
        center: 'Acids, Bases & Salts',
        branches: [
          { title: '1. Indicators', subtopics: ['Litmus paper', 'Phenolphthalein', 'Methyl orange', 'Olfactory'], color: 'blue' },
          { title: '2. Reactions', subtopics: ['With metals -> H2 gas', 'With carbonates -> CO2', 'Neutralization'], color: 'purple' },
          { title: '3. pH Scale', subtopics: ['pH 0 to 14', 'Acid rain (pH < 5.6)', 'Stomach acidity'], color: 'emerald' },
          { title: '4. Essential Salts', subtopics: ['CaOCl2 (Bleaching)', 'NaHCO3 (Baking)', 'POP (Plaster of Paris)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is the chemical formula of Plaster of Paris and why should it be stored in moisture-proof containers?',
          marks: '2 Marks',
          answer: 'Formula is CaSO4·1/2H2O (Calcium sulphate hemihydrate). It absorbs moisture from air to convert into a hard solid mass called Gypsum (CaSO4·2H2O).',
          tip: 'State hemihydrate formula and conversion into Gypsum.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Metals and Non-metals',
      keyTopics: ['Physical & chemical properties', 'Reactivity Series', 'Ionic bond formation', 'Metallurgy & Corrosion'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Chemistry Mentor',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.94,
      upvotes: 750,
      videoDuration: '3m 20s',
      summaryTelugu: 'లోహాలు మరియు అలోహాలు: రియాక్టివిటీ సిరీస్, అయానిక్ బంధం మరియు తుప్పు నివారణ (గాల్వనైజేషన్).',
      summaryEnglish: 'Reactivity series mnemonic, ionic compound properties (high melting point, electrical conductivity), and extraction of metals.',
      examWeightage: '6-8 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Reactivity Series of Metals',
          quickTake: 'Metals arranged in decreasing order of reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.',
          keyPoints: [
            'Top metals (K, Na) react vigorously with cold water and catch fire. Kept immersed in kerosene.',
            'Middle metals (Zn, Fe) react with steam only.',
            'Bottom metals (Ag, Au) are least reactive and found in free state in nature.'
          ],
          formulaOrEquation: '2Na + 2H2O -> 2NaOH + H2 + Heat'
        },
        {
          topic: '2. Ionic Compounds & Properties',
          quickTake: 'Formed by transfer of electrons from metal to non-metal (e.g. NaCl, MgCl2).',
          keyPoints: [
            'Solid and hard due to strong electrostatic attraction between opposite ions.',
            'High melting and boiling points.',
            'Conduct electricity in molten state or aqueous solution, but not in solid state.'
          ],
          formulaOrEquation: 'Na (2,8,1) -> Na+ + e- | Cl (2,8,7) + e- -> Cl- | Na+ + Cl- -> NaCl'
        },
        {
          topic: '3. Metallurgy & Corrosion Prevention',
          quickTake: 'Extracting metals from ores using roasting (sulfide ores) and calcination (carbonate ores).',
          keyPoints: [
            'Roasting: Heating sulfide ore strongly in excess air.',
            'Calcination: Heating carbonate ore in limited air.',
            'Prevention of Rusting: Galvanisation (coating iron with thin layer of zinc).'
          ],
          formulaOrEquation: 'Roasting: 2ZnS + 3O2 --heat--> 2ZnO + 2SO2'
        }
      ],
      mindmap: {
        center: 'Metals & Non-metals',
        branches: [
          { title: '1. Properties', subtopics: ['Malleability & Ductility', 'Sonorous & Lustrous', 'Electrical conduction'], color: 'blue' },
          { title: '2. Reactivity', subtopics: ['K > Na > Ca > Mg...', 'Reaction with water & steam', 'Reaction with acids'], color: 'purple' },
          { title: '3. Ionic Bonds', subtopics: ['Electron transfer', 'High melting point', 'Molten conduction'], color: 'emerald' },
          { title: '4. Extraction & Care', subtopics: ['Roasting vs Calcination', 'Galvanisation with Zinc', 'Alloys (Brass, Bronze)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why do ionic compounds have high melting and boiling points?',
          marks: '2 Marks',
          answer: 'Because of the strong electrostatic force of attraction between oppositely charged positive and negative ions, requiring a large amount of heat energy to break.',
          tip: 'Mention strong electrostatic forces between ions.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Carbon and Its Compounds',
      keyTopics: ['Covalent bonding & Tetravalency', 'Homologous series & IUPAC naming', 'Chemical reactions (Combustion, Oxidation, Addition)', 'Soaps and Detergents'],
      readingTime: '15 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Chemistry Mentor',
      pdfPages: 8,
      fileSize: '1.6 MB',
      rating: 4.97,
      upvotes: 890,
      videoDuration: '3m 40s',
      summaryTelugu: 'కార్బన్ మరియు దాని సమ్మేళనాలు: కోవాలెంట్ బాండింగ్, హోమోలోగస్ సిరీస్, ఆల్కహాల్, ఎస్టరిఫికేషన్ మరియు సబ్బు మైసెల్ నిర్మాణం.',
      summaryEnglish: 'Covalent bonding, catenation, functional groups (alcohol, aldehyde, carboxylic acid), esterification, and micelle cleansing action of soap.',
      examWeightage: '8-10 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Versatile Nature of Carbon',
          quickTake: 'Carbon forms millions of compounds due to tetravalency (valency 4) and catenation (self-linking ability).',
          keyPoints: [
            'Forms covalent bonds by sharing electrons (cannot form C4+ or C4- due to energy constraints).',
            'Allotropes of carbon: Diamond (hardest, 3D network), Graphite (slippery sheets, conducts electricity), Fullerenes (C60 soccer ball).'
          ],
          formulaOrEquation: 'Covalent bond: Mutual sharing of electron pairs (e.g. CH4, CO2, H2O)'
        },
        {
          topic: '2. Homologous Series & Functional Groups',
          quickTake: 'A series of compounds with same functional group where successive members differ by -CH2- unit (14 u molecular mass).',
          keyPoints: [
            'Alkanes: CnH2n+2 (Single bond) | Alkenes: CnH2n (Double bond) | Alkynes: CnH2n-2 (Triple bond).',
            'Alcohol (-OH), Aldehyde (-CHO), Ketone (>C=O), Carboxylic Acid (-COOH).'
          ],
          formulaOrEquation: 'Ethanol: C2H5OH | Ethanoic Acid: CH3COOH'
        },
        {
          topic: '3. Important Reactions & Soaps',
          quickTake: 'Esterification produces sweet-smelling perfume esters; soaps clean via spherical micelles.',
          keyPoints: [
            'Esterification: Ethanoic acid + Ethanol --conc. H2SO4--> Sweet fruity Ester + Water.',
            'Soap molecule: Hydrophilic ionic head (water-loving) + Hydrophobic carbon tail (oil-loving).',
            'Forms micelles in water to trap dirt and grease.'
          ],
          formulaOrEquation: 'CH3COOH + C2H5OH --H2SO4--> CH3COOC2H5 (Ester) + H2O'
        }
      ],
      mindmap: {
        center: 'Carbon Compounds',
        branches: [
          { title: '1. Bonding', subtopics: ['Catenation', 'Tetravalency', 'Diamond vs Graphite'], color: 'blue' },
          { title: '2. Hydrocarbons', subtopics: ['Alkanes (CnH2n+2)', 'Alkenes (CnH2n)', 'Alkynes (CnH2n-2)'], color: 'purple' },
          { title: '3. Key Reactions', subtopics: ['Combustion', 'Addition (Hydrogenation)', 'Esterification'], color: 'emerald' },
          { title: '4. Cleansing', subtopics: ['Soap vs Detergent', 'Hydrophilic head', 'Micelle formation'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is esterification? Write the balanced chemical reaction for it.',
          marks: '3 Marks',
          answer: 'Reaction between an alcohol and a carboxylic acid in the presence of an acid catalyst to produce a sweet-smelling ester and water. Reaction: CH3COOH + C2H5OH --conc. H2SO4--> CH3COOC2H5 + H2O.',
          tip: 'Mention sweet smell and write the formula of ethyl ethanoate.'
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'Life Processes',
      keyTopics: ['Autotrophic & Heterotrophic Nutrition', 'Respiration (Aerobic vs Anaerobic)', 'Transportation in humans & plants', 'Excretion & Nephron structure'],
      readingTime: '16 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Mentor',
      pdfPages: 8,
      fileSize: '1.7 MB',
      rating: 4.98,
      upvotes: 920,
      videoDuration: '3m 50s',
      summaryTelugu: 'జీవ క్రియలు: కిరణజన్య సంయోగ క్రియ, శ్వాసక్రియ (ఏరోబిక్ & అనెరోబిక్), గుండె రక్త ప్రసరణ మరియు మూత్రపిండాల నెఫ్రాన్ నిర్మాణం.',
      summaryEnglish: 'Comprehensive high-yield notes on human digestive system, double circulation in heart, xylem/phloem transport, and nephron filtration in kidneys.',
      examWeightage: '8-10 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Nutrition & Photosynthesis',
          quickTake: 'Green plants make food using sunlight, chlorophyll, CO2, and water.',
          keyPoints: [
            'Photosynthesis steps: Absorption of light -> Conversion to chemical energy & splitting of water -> Reduction of CO2 to carbohydrates.',
            'Stomatal guard cells swell when water flows in, causing the pore to open.',
            'Human digestion: Salivary amylase breaks starch -> Pepsin in stomach breaks protein -> Bile emulsifies fat -> Lipase digests fats in small intestine.'
          ],
          formulaOrEquation: '6CO2 + 6H2O --sunlight/chlorophyll--> C6H12O6 + 6O2'
        },
        {
          topic: '2. Respiration & Energy Release',
          quickTake: 'Breakdown of glucose into pyruvate in cytoplasm, followed by ATP generation.',
          keyPoints: [
            'Aerobic (Mitochondria with O2): Gives 38 ATP + CO2 + H2O.',
            'Anaerobic (Yeast without O2): Gives Ethanol + CO2 + 2 ATP (Fermentation).',
            'In muscle cells (lack of O2): Gives Lactic acid + 2 ATP (causes muscle cramps).'
          ],
          formulaOrEquation: 'Glucose (6C) -> Pyruvate (3C) -> CO2 + H2O + 38 ATP (Aerobic)'
        },
        {
          topic: '3. Transportation & Excretion',
          quickTake: 'Heart pumps blood via double circulation; kidneys filter metabolic wastes using nephrons.',
          keyPoints: [
            'Double circulation: Blood passes twice through the heart in one complete cycle (pulmonary and systemic).',
            'Xylem carries water/minerals unidirectionally; Phloem carries food (sucrose) bidirectionally (translocation).',
            'Nephron: Glomerulus filters blood -> Bowman\'s capsule -> Selective reabsorption of glucose, amino acids, salts -> Urine collects in collecting duct.'
          ],
          formulaOrEquation: 'Double Circulation: Heart -> Lungs -> Heart -> Body -> Heart'
        }
      ],
      mindmap: {
        center: 'Life Processes',
        branches: [
          { title: '1. Nutrition', subtopics: ['Photosynthesis equation', 'Stomata regulation', 'Alimentary canal enzymes'], color: 'blue' },
          { title: '2. Respiration', subtopics: ['Aerobic (Mitochondria)', 'Anaerobic (Yeast)', 'Lactic acid cramp'], color: 'purple' },
          { title: '3. Transportation', subtopics: ['Human 4-chamber heart', 'Double circulation', 'Xylem & Phloem'], color: 'emerald' },
          { title: '4. Excretion', subtopics: ['Kidney filtration', 'Nephron structure', 'Dialysis (Artificial kidney)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is double circulation? Why is it necessary in mammals and birds?',
          marks: '3 Marks',
          answer: 'Blood passes through the heart twice during one complete cycle (pulmonary and systemic circulation). It is necessary to completely separate oxygenated and deoxygenated blood to maintain high energy levels and constant body temperature (warm-blooded animals).',
          tip: 'State two circuits and constant body temperature requirement.'
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'Control and Coordination',
      keyTopics: ['Neuron structure & Reflex arc', 'Human Brain divisions', 'Plant hormones (Auxin, Gibberellin, Cytokinin, Abscisic acid)', 'Endocrine system & hormones'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Mentor',
      pdfPages: 6,
      fileSize: '1.3 MB',
      rating: 4.95,
      upvotes: 760,
      videoDuration: '3m 15s',
      summaryTelugu: 'నియంత్రణ మరియు సమన్వయం: న్యూరాన్, రిఫ్లెక్స్ ఆర్క్, మానవ మెదడు భాగాలు, మొక్కల హార్మోన్లు మరియు ఎండోక్రైన్ గ్రంథులు.',
      summaryEnglish: 'Quick overview of reflex actions, synaptic transmission, forebrain/midbrain/hindbrain functions, phototropism, and insulin/adrenaline.',
      examWeightage: '5-6 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Nervous System & Reflex Arc',
          quickTake: 'Neurons transmit electrical impulses; reflex actions are involuntary emergency responses managed by the spinal cord.',
          keyPoints: [
            'Neuron parts: Dendrite (receives) -> Cell body -> Axon -> Nerve ending -> Synapse (chemical neurotransmitter gap).',
            'Reflex Arc Pathway: Receptor -> Sensory neuron -> Spinal cord (Relay neuron) -> Motor neuron -> Effector (Muscle).'
          ],
          formulaOrEquation: 'Reflex Arc: Receptor -> Sensory Neuron -> Spinal Cord -> Motor Neuron -> Muscle'
        },
        {
          topic: '2. Human Brain Functions',
          quickTake: 'Brain has three main parts: Forebrain, Midbrain, and Hindbrain.',
          keyPoints: [
            'Forebrain (Cerebrum): Seat of intelligence, memory, thinking, hearing, and voluntary actions.',
            'Hindbrain: Cerebellum controls posture and balance; Medulla controls involuntary actions like heartbeat, BP, and salivation; Pons assists in respiration.'
          ],
          formulaOrEquation: 'Cerebrum = Thinking | Cerebellum = Balance & Posture | Medulla = Involuntary actions'
        },
        {
          topic: '3. Plant Hormones & Endocrine Glands',
          quickTake: 'Plant movements and human growth are chemical coordinated by phytohormones and endocrine hormones.',
          keyPoints: [
            'Auxin: Promotes cell elongation (bends shoot towards light - phototropism).',
            'Gibberellins: Stem growth | Cytokinins: Cell division | Abscisic Acid (ABA): Inhibits growth, wilts leaves.',
            'Pancreas secretes Insulin (regulates blood sugar); Adrenal gland secretes Adrenaline (fight-or-flight response).'
          ],
          formulaOrEquation: 'Auxin = Shoot bending | ABA = Leaf fall | Insulin = Lowers blood glucose'
        }
      ],
      mindmap: {
        center: 'Control & Coordination',
        branches: [
          { title: '1. Nervous System', subtopics: ['Neuron & Synapse', 'Reflex Arc pathway', 'Central vs Peripheral'], color: 'blue' },
          { title: '2. Brain Parts', subtopics: ['Forebrain (Thinking)', 'Cerebellum (Balance)', 'Medulla (BP, heart)'], color: 'purple' },
          { title: '3. Plant Hormones', subtopics: ['Auxin (Bending)', 'Cytokinin (Cell division)', 'ABA (Stress/wilting)'], color: 'emerald' },
          { title: '4. Human Glands', subtopics: ['Thyroid (Thyroxin/Iodine)', 'Pancreas (Insulin)', 'Adrenal (Adrenaline)'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why is the use of iodised salt advisable?',
          marks: '2 Marks',
          answer: 'Iodine is required by the thyroid gland to synthesize thyroxin hormone. Deficiency of iodine leads to enlargement of the thyroid gland, causing the disease known as goitre.',
          tip: 'Mention thyroxin hormone synthesis and prevention of goitre.'
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'How do Organisms Reproduce?',
      keyTopics: ['Asexual reproduction modes', 'Sexual reproduction in flowering plants', 'Human male & female reproductive systems', 'Contraceptive methods & STDs'],
      readingTime: '15 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Mentor',
      pdfPages: 7,
      fileSize: '1.5 MB',
      rating: 4.96,
      upvotes: 810,
      videoDuration: '3m 35s',
      summaryTelugu: 'జీవులు ఎలా ప్రత్యుత్పత్తి జరుపుతాయి: అలైంగిక విధానాలు, పుష్పించే మొక్కలలో పరాగసంపర్కం, మానవ ప్రత్యుత్పత్తి మరియు గర్భనిరోధక పద్ధతులు.',
      summaryEnglish: 'Asexual vs sexual reproduction, pollination and double fertilization in plants, sperm and ovum pathways, and family planning methods.',
      examWeightage: '6-8 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Modes of Asexual Reproduction',
          quickTake: 'Produces genetically identical clones from a single parent without gamete fusion.',
          keyPoints: [
            'Fission: Binary (Amoeba splits in two), Multiple (Plasmodium in cyst).',
            'Budding: Hydra and Yeast grow an outgrowth that detaches.',
            'Spore Formation: Rhizopus bread mould produces hardy spores.',
            'Vegetative Propagation: Rose (stem cutting), Bryophyllum (leaf notches).'
          ],
          formulaOrEquation: 'Binary Fission: 1 Parent Cell -> 2 Identical Daughter Cells'
        },
        {
          topic: '2. Sexual Reproduction in Flowering Plants',
          quickTake: 'Flower is the reproductive unit; pollen grains from anther fertilize ovules in ovary.',
          keyPoints: [
            'Pollination: Transfer of pollen from anther to stigma (Self or Cross pollination).',
            'Pollen tube grows down style to ovary.',
            'Post-fertilization: Zygote -> Embryo; Ovule -> Seed; Ovary -> Fruit.'
          ],
          formulaOrEquation: 'Pollen + Egg -> Zygote -> Seed | Ovary -> Fruit'
        },
        {
          topic: '3. Human Reproduction & Contraception',
          quickTake: 'Fertilization occurs in fallopian tube; implantation occurs in the uterine lining.',
          keyPoints: [
            'Placenta: Disk-shaped tissue providing nutrients and oxygen from mother to fetus.',
            'Contraceptive Methods: Mechanical (condoms), Chemical (oral pills), Surgical (Vasectomy in males, Tubectomy in females).'
          ],
          formulaOrEquation: 'Fertilization site: Fallopian Tube (Oviduct)'
        }
      ],
      mindmap: {
        center: 'Reproduction',
        branches: [
          { title: '1. Asexual', subtopics: ['Fission (Amoeba)', 'Budding (Hydra)', 'Bryophyllum leaves'], color: 'blue' },
          { title: '2. Plant Flower', subtopics: ['Stamen (Male)', 'Carpel (Female)', 'Ovary becomes fruit'], color: 'purple' },
          { title: '3. Human Systems', subtopics: ['Testes (Testosterone)', 'Ovary (Estrogen)', 'Placenta nutrition'], color: 'emerald' },
          { title: '4. Health', subtopics: ['Contraception (Condoms, Pills)', 'Vasectomy & Tubectomy', 'STDs prevention'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What are the post-fertilization changes seen in a flower?',
          marks: '3 Marks',
          answer: '1. Zygote divides to form an embryo within the ovule. 2. The ovule develops a tough coat and turns into a seed. 3. The ovary grows rapidly and ripens into a fruit. 4. Petals, sepals, and stamens shrivel and fall off.',
          tip: 'List ovule -> seed, ovary -> fruit, and falling of petals.'
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'Heredity',
      keyTopics: ['Mendel\'s Monohybrid & Dihybrid crosses', 'Law of Segregation & Dominance', 'Sex determination in humans (XX vs XY)'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Mentor',
      pdfPages: 5,
      fileSize: '1.1 MB',
      rating: 4.93,
      upvotes: 720,
      videoDuration: '3m 05s',
      summaryTelugu: 'వంశపారంపర్యం: మెండల్ ఏక సంకర (3:1), ద్వి సంకర (9:3:3:1) ప్రయోగాలు మరియు మానవులలో లింగ నిర్ధారణ (XX మరియు XY క్రోమోజోములు).',
      summaryEnglish: 'Mendelian genetics, dominant vs recessive traits, Punnett squares, and genetic sex determination in humans by the father\'s sperm.',
      examWeightage: '4-5 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Mendel\'s Monohybrid Cross (Height)',
          quickTake: 'Crossing pure tall (TT) and pure dwarf (tt) pea plants yields all tall in F1, and 3:1 ratio in F2.',
          keyPoints: [
            'F1 generation: All plants are heterozygous Tall (Tt). Tall is the dominant trait.',
            'F2 generation Phenotypic ratio: 3 Tall : 1 Dwarf.',
            'F2 generation Genotypic ratio: 1 TT : 2 Tt : 1 tt (1:2:1).'
          ],
          formulaOrEquation: 'Monohybrid Cross F2 Ratio: Phenotypic 3:1 | Genotypic 1:2:1'
        },
        {
          topic: '2. Dihybrid Cross (Two Traits)',
          quickTake: 'Crossing Round-Yellow (RRYY) with Wrinkled-Green (rryy) seeds produces independent assortment.',
          keyPoints: [
            'F1 generation: All Round-Yellow (RrYy).',
            'F2 generation Phenotypic ratio: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1).'
          ],
          formulaOrEquation: 'Dihybrid Cross F2 Ratio = 9 : 3 : 3 : 1'
        },
        {
          topic: '3. Sex Determination in Humans',
          quickTake: 'Father determines the sex of the child because men produce two types of sperms (50% X and 50% Y).',
          keyPoints: [
            'Females have XX chromosomes (all ova carry an X chromosome).',
            'Males have XY chromosomes (sperms carry either X or Y).',
            'Ovum + X-sperm -> XX (Girl) | Ovum + Y-sperm -> XY (Boy). Exact 50:50 chance.'
          ],
          formulaOrEquation: 'Father XY + Mother XX -> 50% XX (Female) + 50% XY (Male)'
        }
      ],
      mindmap: {
        center: 'Heredity',
        branches: [
          { title: '1. Mendel Laws', subtopics: ['Law of Dominance', 'Law of Segregation', 'Independent assortment'], color: 'blue' },
          { title: '2. Monohybrid', subtopics: ['TT x tt cross', 'F1 all Tall (Tt)', 'F2 ratio 3:1'], color: 'purple' },
          { title: '3. Dihybrid', subtopics: ['Round/Yellow x Wrinkled/Green', 'F2 ratio 9:3:3:1', 'Gene inheritance'], color: 'emerald' },
          { title: '4. Sex Determination', subtopics: ['Father sperm (X or Y)', 'Mother ovum (always X)', '50% boy or girl'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'A man with blood group A marries a woman with blood group O and their daughter has blood group O. Is this information enough to tell you which of the traits is dominant?',
          marks: '3 Marks',
          answer: 'Yes, this shows that blood group A is dominant and O is recessive. The daughter receives an O allele from both parents (genotype ii). This means the father must be heterozygous IAi, expressing blood group A because A dominates over O.',
          tip: 'State that father is IAi and daughter is ii.'
        }
      ]
    },
    {
      unitNumber: 9,
      title: 'Light – Reflection and Refraction',
      keyTopics: ['Laws of reflection & Spherical mirrors', 'Mirror formula & magnification', 'Snell\'s law of refraction & Refractive index', 'Lens formula & Power of lens'],
      readingTime: '18 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Physics Mentor',
      pdfPages: 9,
      fileSize: '1.9 MB',
      rating: 4.99,
      upvotes: 990,
      videoDuration: '4m 10s',
      summaryTelugu: 'కాంతి – పరావర్తనం మరియు వక్రీభవనం: అద్దాల సూత్రం (1/f = 1/v + 1/u), స్నెల్ నియమం, లెన్స్ సూత్రం మరియు లెన్స్ సామర్థ్యం (P = 1/f).',
      summaryEnglish: 'Complete ray diagrams cheatsheet for concave/convex mirrors and lenses, sign convention rules, and numerical problem formulas.',
      examWeightage: '9-10 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 5,
      topicAtAGlance: [
        {
          topic: '1. Spherical Mirrors & Formula',
          quickTake: 'Concave mirrors converge light (used in headlights/dentists); convex mirrors diverge light (rearview vehicle mirrors).',
          keyPoints: [
            'New Cartesian Sign Convention: Object distance u is always negative.',
            'Focal length f: Concave mirror is negative (-), Convex mirror is positive (+).',
            'Magnification m = -v / u = h\' / h (Negative m means real & inverted; positive m means virtual & erect).'
          ],
          formulaOrEquation: 'Mirror Formula: 1/f = 1/v + 1/u | Magnification: m = -v / u'
        },
        {
          topic: '2. Refraction & Snell\'s Law',
          quickTake: 'Light bends when passing from one optical medium to another due to change in speed.',
          keyPoints: [
            'Snell\'s Law: sin(i) / sin(r) = constant (n21, refractive index).',
            'Rare to denser medium: Bends towards normal (speed decreases).',
            'Denser to rarer medium: Bends away from normal (speed increases).'
          ],
          formulaOrEquation: 'Snell\'s Law: n = sin(i) / sin(r) = c / v'
        },
        {
          topic: '3. Lens Formula & Power of Lens',
          quickTake: 'Convex lens is converging (positive f); concave lens is diverging (negative f).',
          keyPoints: [
            'Lens formula has minus sign: 1/f = 1/v - 1/u.',
            'Lens magnification: m = +v / u.',
            'Power of lens P = 1 / f (in metres). Measured in Dioptres (D). Convex lens has +P, Concave has -P.'
          ],
          formulaOrEquation: 'Lens Formula: 1/f = 1/v - 1/u | Power: P = 1 / f (in metres)'
        }
      ],
      mindmap: {
        center: 'Light & Optics',
        branches: [
          { title: '1. Mirrors', subtopics: ['Concave (Converging)', 'Convex (Rearview mirror)', 'Formula: 1/f = 1/v + 1/u'], color: 'blue' },
          { title: '2. Refraction', subtopics: ['Snell\'s law: sin(i)/sin(r)', 'Refractive index n = c/v', 'Glass slab lateral shift'], color: 'purple' },
          { title: '3. Lenses', subtopics: ['Convex (+f converging)', 'Concave (-f diverging)', 'Formula: 1/f = 1/v - 1/u'], color: 'emerald' },
          { title: '4. Lens Power', subtopics: ['P = 1/f (metres)', 'Unit: Dioptre (D)', 'Combination: P = P1 + P2'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'A convex lens of focal length 20 cm produces a real, inverted image at 40 cm. Find object distance and power of the lens.',
          marks: '3 Marks',
          answer: 'Given f = +20 cm, v = +40 cm. 1/f = 1/v - 1/u => 1/u = 1/40 - 1/20 = -1/40 => u = -40 cm. Power P = 1/f(m) = 1/0.2 = +5 Dioptres.',
          tip: 'State u = -40 cm and P = +5 D.'
        }
      ]
    },
    {
      unitNumber: 10,
      title: 'The Human Eye and the Colourful World',
      keyTopics: ['Human eye structure & Accommodation', 'Defects of vision (Myopia, Hypermetropia, Presbyopia)', 'Prism dispersion & Atmospheric refraction', 'Scattering of light (Tyndall effect, Blue sky)'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Physics Mentor',
      pdfPages: 6,
      fileSize: '1.4 MB',
      rating: 4.96,
      upvotes: 820,
      videoDuration: '3m 25s',
      summaryTelugu: 'మానవ కన్ను మరియు రంగుల ప్రపంచం: మయోపియా, హైపర్‌మెట్రోపియా లోపాలు, ప్రిజం కాంతి విక్షేపణం మరియు ఆకాశం నీలంగా ఎందుకు కనిపిస్తుంది.',
      summaryEnglish: 'Correction of vision defects using lenses, rainbow formation, atmospheric twinkling of stars, and Rayleigh scattering of blue light.',
      examWeightage: '4-5 Marks',
      formulaeCount: 2,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Vision Defects & Corrections',
          quickTake: 'Ciliary muscles adjust eye lens curvature; defects are corrected by spectacles.',
          keyPoints: [
            'Myopia (Near-sightedness): Can see near objects clearly, far objects blur. Image forms in front of retina. Corrected with Concave Lens.',
            'Hypermetropia (Far-sightedness): Can see distant clearly, near objects blur. Image forms behind retina. Corrected with Convex Lens.',
            'Presbyopia: Old-age loss of accommodation; corrected by bi-focal lenses.'
          ],
          formulaOrEquation: 'Myopia -> Concave Lens (-P) | Hypermetropia -> Convex Lens (+P)'
        },
        {
          topic: '2. Dispersion through Prism & Rainbow',
          quickTake: 'White light splits into 7 constituent colors (VIBGYOR) due to different speeds in glass.',
          keyPoints: [
            'Red light bends least (longest wavelength); Violet bends most (shortest wavelength).',
            'Rainbow formation: Raindrop causes refraction, dispersion, internal reflection, and final refraction.'
          ],
          formulaOrEquation: 'VIBGYOR (Violet bends most, Red bends least)'
        },
        {
          topic: '3. Atmospheric Refraction & Scattering',
          quickTake: 'Atmosphere with changing optical densities causes apparent position shifts and color scattering.',
          keyPoints: [
            'Twinkling of stars: Continuous refraction through turbulent atmospheric layers.',
            'Advanced sunrise & delayed sunset: Sun visible 2 minutes before actual rise due to bending of rays.',
            'Blue sky & Red sunset: Rayleigh scattering intensity proportional to 1/λ⁴. Short blue waves scatter most during daytime.'
          ],
          formulaOrEquation: 'Scattering Intensity ∝ 1 / λ⁴ (Rayleigh Law)'
        }
      ],
      mindmap: {
        center: 'Human Eye & Colour',
        branches: [
          { title: '1. Vision Defects', subtopics: ['Myopia (Concave lens)', 'Hypermetropia (Convex lens)', 'Presbyopia (Bifocal)'], color: 'blue' },
          { title: '2. Prism Dispersion', subtopics: ['White light -> VIBGYOR', 'Newton\'s double prism recombination', 'Rainbow formation'], color: 'purple' },
          { title: '3. Atmospheric Refraction', subtopics: ['Twinkling of stars', 'Planets do not twinkle', '2 min early sunrise'], color: 'emerald' },
          { title: '4. Light Scattering', subtopics: ['Tyndall effect in mist', 'Blue sky color', 'Red sun at sunrise/sunset'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why does the sky appear dark to an astronaut in space instead of blue?',
          marks: '2 Marks',
          answer: 'In space, there is no atmosphere with gas molecules to scatter sunlight. In the absence of Rayleigh scattering, no scattered light reaches the astronaut\'s eyes, making the sky appear dark.',
          tip: 'Mention absence of atmosphere and scattering.'
        }
      ]
    },
    {
      unitNumber: 11,
      title: 'Electricity',
      keyTopics: ['Electric Current & Ohm\'s Law', 'Resistance, Resistivity & Factors affecting R', 'Resistors in Series & Parallel', 'Joule\'s Heating Effect & Electric Power'],
      readingTime: '17 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Physics Mentor',
      pdfPages: 8,
      fileSize: '1.8 MB',
      rating: 4.98,
      upvotes: 950,
      videoDuration: '4m 00s',
      summaryTelugu: 'విద్యుత్తు: ఓం నియమం (V = IR), రెసిస్టివిటీ, శ్రేణి మరియు సమాంతర అనుసంధానాలు, జౌల్స్ ఉష్ణ నియమం (H = I²Rt).',
      summaryEnglish: 'Clear formulas for Ohm\'s law, equivalent resistance in series/parallel, electrical energy consumption in kWh, and heating appliances.',
      examWeightage: '8-9 Marks',
      formulaeCount: 7,
      solvedQuestionsCount: 5,
      topicAtAGlance: [
        {
          topic: '1. Ohm\'s Law & Resistance',
          quickTake: 'Current through a conductor is directly proportional to potential difference across its ends at constant temperature.',
          keyPoints: [
            'Ohm\'s Law formula: V = I × R (Slope of V-I graph gives resistance R).',
            'Resistance factors: R = ρ × (l / A). R is directly proportional to length l, and inversely proportional to cross-sectional area A.',
            'Resistivity (ρ): Material property measured in Ohm-metre (Ω·m). High for alloys like Nichrome (used in heaters).'
          ],
          formulaOrEquation: 'V = I × R | Resistance: R = ρ(l / A)'
        },
        {
          topic: '2. Series and Parallel Combinations',
          quickTake: 'Series has same current everywhere; parallel has same voltage across each branch.',
          keyPoints: [
            'Series combination: Rs = R1 + R2 + R3 (Total resistance is greater than largest individual).',
            'Parallel combination: 1/Rp = 1/R1 + 1/R2 + 1/R3 (Total resistance is smaller than smallest individual).',
            'Domestic circuits use parallel connection: If one appliance fails, others continue working.'
          ],
          formulaOrEquation: 'Series: Rs = R1 + R2 + R3 | Parallel: 1/Rp = 1/R1 + 1/R2 + 1/R3'
        },
        {
          topic: '3. Joule\'s Heating & Electric Power',
          quickTake: 'Heat produced when current flows through a resistance is H = I²Rt.',
          keyPoints: [
            'Electric Power: P = V × I = I²R = V² / R. Measured in Watts (W).',
            'Commercial unit of energy: 1 kilowatt-hour (1 kWh) = 1 Unit = 3.6 × 10^6 Joules.',
            'Electric fuse: Safety wire with low melting point; melts during overloading or short circuits.'
          ],
          formulaOrEquation: 'Heat: H = I²Rt | Power: P = VI = I²R = V²/R | 1 kWh = 3.6 × 10^6 J'
        }
      ],
      mindmap: {
        center: 'Electricity',
        branches: [
          { title: '1. Ohm\'s Law', subtopics: ['V = IR', 'V-I graph line', 'Factors: R = ρ·l/A'], color: 'blue' },
          { title: '2. Combinations', subtopics: ['Series: Rs = R1+R2', 'Parallel: 1/Rp = 1/R1+1/R2', 'Domestic parallel wiring'], color: 'purple' },
          { title: '3. Heating Effect', subtopics: ['H = I²Rt', 'Nichrome wire', 'Electric fuse safety'], color: 'emerald' },
          { title: '4. Power & Billing', subtopics: ['P = VI = V²/R', 'Watt & Kilowatt', '1 kWh = 3.6 × 10^6 J'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'An electric bulb is rated 220 V and 100 W. When operated on 110 V, what is the power consumed?',
          marks: '3 Marks',
          answer: 'Bulb resistance R = V² / P = (220)² / 100 = 484 Ω. When operated at V\' = 110 V, Power P\' = (V\')² / R = (110)² / 484 = 12100 / 484 = 25 Watts.',
          tip: 'First find resistance R = 484 Ω, then calculate power at 110 V.'
        }
      ]
    },
    {
      unitNumber: 12,
      title: 'Magnetic Effects of Electric Current',
      keyTopics: ['Magnetic field & field lines', 'Right-Hand Thumb Rule & Solenoid', 'Fleming\'s Left-Hand Rule & Force on conductor', 'Domestic electric circuits & Earth wire'],
      readingTime: '14 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Physics Mentor',
      pdfPages: 7,
      fileSize: '1.5 MB',
      rating: 4.96,
      upvotes: 830,
      videoDuration: '3m 30s',
      summaryTelugu: 'విద్యుత్ ప్రవాహం అయస్కాంత ఫలితాలు: అయస్కాంత బలరేఖలు, కుడిచేతి బొటనవేలు నియమం, సోలేనోయిడ్ మరియు గృహ విద్యుత్ సర్క్యూట్లు.',
      summaryEnglish: 'Magnetic field patterns around straight conductors and solenoids, Fleming\'s left-hand rule, and domestic circuit safety (fuse, earthing).',
      examWeightage: '6-7 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Magnetic Field Lines & Thumb Rule',
          quickTake: 'Magnetic field lines emerge from North pole and enter South pole; they never intersect.',
          keyPoints: [
            'Field lines are closed continuous loops. Crowded lines indicate a stronger magnetic field.',
            'Maxwell\'s Right-Hand Thumb Rule: Thumb points along current, fingers curl in direction of magnetic field lines.',
            'Solenoid: Long coil of insulated copper wire; inside solenoid, field lines are parallel straight lines (uniform field).'
          ],
          formulaOrEquation: 'Inside Solenoid: Uniform strong magnetic field (like a bar magnet)'
        },
        {
          topic: '2. Force on Conductor & Fleming\'s Rule',
          quickTake: 'A current-carrying wire placed in an external magnetic field experiences a mechanical force.',
          keyPoints: [
            'Force is maximum when conductor is perpendicular (90°) to magnetic field (F = B·I·l).',
            'Fleming\'s Left-Hand Rule: Thumb (Force/Motion), Forefinger (Magnetic Field), Centre finger (Current). [FBI mnemonic].'
          ],
          formulaOrEquation: 'Fleming\'s Left Hand: Thumb (Force) | Forefinger (Field) | Center (Current)'
        },
        {
          topic: '3. Domestic Circuits & Safety',
          quickTake: 'House supply is 220 V, 50 Hz AC. Appliances connected in parallel with three wires.',
          keyPoints: [
            'Live wire (Red/Brown, 220 V), Neutral wire (Black/Blue, 0 V), Earth wire (Green/Yellow).',
            'Earth wire: Connected to metal plate deep in ground; provides low-resistance path preventing severe electric shock.',
            'Short circuit: When live and neutral wires touch directly, causing massive current flow.'
          ],
          formulaOrEquation: 'Domestic AC Supply: 220 Volts, 50 Hz frequency'
        }
      ],
      mindmap: {
        center: 'Magnetic Effects',
        branches: [
          { title: '1. Field Lines', subtopics: ['North to South outside', 'Closed continuous loops', 'Never cross each other'], color: 'blue' },
          { title: '2. Rules & Coils', subtopics: ['Right-Hand Thumb rule', 'Circular loop field', 'Solenoid bar magnet behavior'], color: 'purple' },
          { title: '3. Fleming\'s Left Hand', subtopics: ['FBI mnemonic', 'Max force at 90°', 'Electric motor principle'], color: 'emerald' },
          { title: '4. Domestic Circuit', subtopics: ['Live, Neutral, Earth wires', 'Earthing safety', 'Fuse & Overloading'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is the function of an earth wire in domestic appliances? Why is earthing necessary for metallic appliances?',
          marks: '2 Marks',
          answer: 'The earth wire is connected to metallic casings of appliances (like iron, refrigerator). If current leaks to the casing, it immediately flows into the ground through the low-resistance earth wire, preventing fatal electric shocks.',
          tip: 'State safe conduction of leaking charge to the ground.'
        }
      ]
    },
    {
      unitNumber: 13,
      title: 'Our Environment',
      keyTopics: ['Ecosystem components (Biotic & Abiotic)', 'Food chains & 10 Percent Law', 'Biological Magnification', 'Ozone layer depletion & Waste management'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Mentor',
      pdfPages: 5,
      fileSize: '1.0 MB',
      rating: 4.95,
      upvotes: 710,
      videoDuration: '2m 50s',
      summaryTelugu: 'మన పర్యావరణం: ఎకోసిస్టమ్, ఆహారపు గొలుసులు, 10 శాతం శక్తి నియమం, బయోలాజికల్ మాగ్నిఫికేషన్ మరియు ఓజోన్ క్షీణత.',
      summaryEnglish: 'Quick revision of ecosystem energy flow, Lindeman\'s 10% law, pesticide biomagnification, and CFC destruction of the ozone layer.',
      examWeightage: '4-5 Marks',
      formulaeCount: 1,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Food Chains & 10% Energy Law',
          quickTake: 'Only 10% of energy is transferred from one trophic level to the next higher level.',
          keyPoints: [
            'Producers (Plants) capture ~1% of sunlight falling on leaves.',
            'Lindeman\'s 10% Law: 90% of energy is lost as heat/metabolism at each trophic step.',
            'Because energy diminishes rapidly, food chains rarely exceed 4-5 trophic levels.'
          ],
          formulaOrEquation: 'Lindeman\'s 10% Law: Energy at next level = 10% of previous trophic level'
        },
        {
          topic: '2. Biological Magnification',
          quickTake: 'Accumulation of progressive higher concentrations of non-biodegradable chemicals at successive trophic levels.',
          keyPoints: [
            'Non-biodegradable chemicals (like DDT) cannot be metabolized or excreted.',
            'Concentration is highest in top carnivores / humans at the end of the food chain.'
          ],
          formulaOrEquation: 'Biomagnification: Water -> Phytoplankton -> Small fish -> Big fish -> Human (Max DDT)'
        },
        {
          topic: '3. Ozone Layer Depletion & Waste Management',
          quickTake: 'Ozone (O3) in the stratosphere shields Earth from deadly solar UV radiation.',
          keyPoints: [
            'UV rays split O2 into free oxygen radicals; O + O2 -> O3 (Ozone).',
            'Chlorofluorocarbons (CFCs) from refrigerators break down ozone molecules.',
            'Waste management: Segregation into biodegradable (composting) and non-biodegradable (recycling).'
          ],
          formulaOrEquation: 'Ozone Formation: O2 --UV--> O + O | O + O2 -> O3'
        }
      ],
      mindmap: {
        center: 'Our Environment',
        branches: [
          { title: '1. Ecosystem', subtopics: ['Biotic & Abiotic components', 'Producers, Consumers, Decomposers'], color: 'blue' },
          { title: '2. Energy Flow', subtopics: ['Unidirectional sun energy', '10% Law', 'Trophic levels max 4'], color: 'purple' },
          { title: '3. Biomagnification', subtopics: ['Pesticides & DDT accumulation', 'Highest in humans'], color: 'emerald' },
          { title: '4. Ozone & Waste', subtopics: ['O3 shields UV radiation', 'CFC damage', 'Biodegradable vs Non-biodegradable'], color: 'amber' }
        ]
      },
      solvedQuestions: [
        {
          question: 'If 10,000 Joules of energy is available at the producer level, how much energy will be transferred to secondary consumers?',
          marks: '2 Marks',
          answer: 'Producer = 10,000 J. Primary Consumer (Herbivore) gets 10% = 1,000 J. Secondary Consumer (Carnivore) gets 10% of 1,000 J = 100 Joules.',
          tip: 'Apply 10% law twice: 10,000 J -> 1,000 J -> 100 J.'
        }
      ]
    }
  ]
};
