import { Subject } from '../types';

export const CBSE_9_SCIENCE: Subject = {
  id: 'cbse9-science',
  code: 'CBSE-09-SCI',
  name: 'Class 9 Science (CBSE Revision Notes)',
  semesterOrGrade: 'Class 9 CBSE',
  creditsOrMarks: '80 Marks Theory + 20 Internal',
  gradeOrBranch: 'class9',
  institutionId: 'vvs',
  regulationOrBoard: 'CBSE Rationalized 2024-25',
  category: 'CBSE Foundation Science',
  subjectCategory: 'science',
  units: [
    {
      unitNumber: 1,
      title: 'Matter in Our Surroundings',
      keyTopics: ['Physical nature of matter', 'States of matter (Solid, Liquid, Gas)', 'Change of state: Latent heat', 'Evaporation and factors affecting it'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'Senior Secondary Science Faculty',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.96,
      upvotes: 780,
      videoDuration: '3m 10s',
      summaryTelugu: 'మన పరిసరాలలోని పదార్థం: ఘన, ద్రవ, వాయు లక్షణాలు, గుప్త ఉష్ణం (Latent Heat) మరియు భాష్పీభవనం చల్లదనం కలిగించే విధానం.',
      summaryEnglish: 'Concise revision notes on particulate nature of matter, interconversion of states, melting/boiling points, latent heat, and evaporation cooling.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Characteristics of Particles of Matter',
          quickTake: 'Matter is made of tiny particles that have spaces between them, are constantly moving, and attract each other.',
          keyPoints: [
            'Particles have kinetic energy which increases directly with rise in temperature.',
            'Diffusion: Spontaneous intermixing of particles of two different substances. Rate of diffusion increases with heat.',
            'Solids have fixed volume and rigid shape; liquids have definite volume but take container shape; gases compress easily.'
          ],
          formulaOrEquation: 'Temperature Conversion: K = °C + 273.15'
        },
        {
          topic: '2. Change of State & Latent Heat',
          quickTake: 'Phase change occurs at constant temperature because absorbed energy breaks intermolecular bonds.',
          keyPoints: [
            'Melting Point: Solid to liquid (Ice melts at 0°C / 273.15 K).',
            'Latent Heat of Fusion: Heat required to change 1 kg of solid into liquid at atmospheric pressure at its melting point.',
            'Latent Heat of Vaporisation: Heat needed to convert 1 kg of liquid into gas at its boiling point (Steam has more energy than water at 100°C due to latent heat).',
            'Sublimation: Solid turns directly into vapour on heating without passing through liquid (Camphor, Ammonium Chloride).'
          ],
          formulaOrEquation: 'Q = m · L (where L is latent heat)'
        },
        {
          topic: '3. Evaporation & Cooling Effect',
          quickTake: 'Surface phenomenon where liquid turns to vapour at any temperature below its boiling point.',
          keyPoints: [
            'Factors increasing evaporation: Increased surface area, higher temperature, lower humidity, higher wind speed.',
            'Cooling mechanism: High kinetic energy particles escape, taking latent heat from surroundings, lowering temperature.',
            'Daily applications: Water in earthen pot (matka) stays cool; cotton clothes keep us cool in summer by absorbing sweat.'
          ],
          formulaOrEquation: 'Rate of Evaporation ∝ (Surface Area × Temp × Wind Speed) / Humidity'
        }
      ],
      mindmap: {
        center: 'Matter in Surroundings',
        branches: [
          {
            title: '1. Three States',
            subtopics: ['Solid (Rigid, fixed shape)', 'Liquid (Fluid, fixed volume)', 'Gas (Compressible, fills space)'],
            examTip: 'Remember LPG and compressed oxygen cylinders utilize high compressibility of gases.',
            color: 'blue'
          },
          {
            title: '2. Phase Changes',
            subtopics: ['Melting & Boiling', 'Latent heat (constant temp)', 'Sublimation & Deposition'],
            examTip: 'Steam at 100°C causes more severe burns than boiling water at 100°C due to latent heat of vaporisation.',
            color: 'purple'
          },
          {
            title: '3. Evaporation',
            subtopics: ['Surface vs bulk phenomenon', '4 key factors', 'Cooling principle'],
            examTip: 'Evaporation is surface phenomenon; boiling is bulk phenomenon.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why does a desert cooler cool better on a hot dry day?',
          marks: '2 Marks',
          answer: 'On a hot dry day, temperature is high and humidity is very low. This increases the rate of evaporation of water from the pads of the cooler. Since evaporation causes cooling, air passing through cools down significantly.',
          tip: 'State two conditions: high temperature and low humidity promote rapid evaporation.'
        },
        {
          question: 'Convert 300 K to Celsius scale and 25°C to Kelvin scale.',
          marks: '2 Marks',
          answer: '1) 300 K = 300 - 273 = 27°C. 2) 25°C = 25 + 273 = 298 K.',
          tip: 'K = °C + 273; °C = K - 273.'
        }
      ]
    },
    {
      unitNumber: 2,
      title: 'Is Matter Around Us Pure?',
      keyTopics: ['Elements, Compounds, and Mixtures', 'Solutions, Suspensions, and Colloids', 'Tyndall Effect & Brownian Motion', 'Separation techniques'],
      readingTime: '11 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Chemistry Specialist',
      pdfPages: 6,
      fileSize: '1.1 MB',
      rating: 4.95,
      upvotes: 760,
      videoDuration: '3m 05s',
      summaryTelugu: 'మన చుట్టూ ఉన్న పదార్థం స్వచ్ఛమైనదా?: ద్రావణాలు, అవలంబనాలు (Suspensions), కొల్లాయిడ్లు మరియు టిండాల్ ప్రభావం.',
      summaryEnglish: 'Homogeneous vs heterogeneous mixtures, solute/solvent concentration formulas, Tyndall scattering, and chromatography concepts.',
      examWeightage: '6 Marks',
      formulaeCount: 3,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Types of Mixtures & Tyndall Effect',
          quickTake: 'Solutions are homogeneous; suspensions and colloids are heterogeneous with scattering properties.',
          keyPoints: [
            'True Solution: Particle size < 1 nm; does not scatter light (no Tyndall effect); clear and transparent.',
            'Colloid: Particle size 1 to 1000 nm; shows Tyndall effect (scattering of light beam); stable (Milk, Fog, Ink).',
            'Suspension: Particle size > 1000 nm; particles settle down upon standing; unstable (Chalk powder in water).'
          ],
          formulaOrEquation: 'Tyndall Effect = Scattering of visible light by colloidal particles'
        },
        {
          topic: '2. Concentration of Solutions',
          quickTake: 'Amount of solute present in a given amount of solution.',
          keyPoints: [
            'Saturated solution: No more solute can dissolve at that specific temperature.',
            'Mass by mass percentage = (Mass of solute / Mass of solution) × 100.',
            'Mass by volume percentage = (Mass of solute / Volume of solution) × 100.'
          ],
          formulaOrEquation: 'Mass % = [Mass of solute / (Mass of solute + Mass of solvent)] × 100'
        },
        {
          topic: '3. Physical vs Chemical Change',
          quickTake: 'Physical changes alter state or appearance without new substance; chemical changes create new chemical identities.',
          keyPoints: [
            'Physical: Melting of ice, dissolving salt in water, tearing paper (reversible, no new bond formed).',
            'Chemical: Burning of wood, rusting of iron, cooking food (irreversible, new chemical bonds formed).'
          ],
          formulaOrEquation: 'Mass of solution = Mass of solute + Mass of solvent'
        }
      ],
      mindmap: {
        center: 'Pure Substances & Mixtures',
        branches: [
          {
            title: '1. Pure Substances',
            subtopics: ['Elements (Metals, Non-metals, Metalloids)', 'Compounds (Fixed proportion by mass)'],
            examTip: 'Compounds have completely different properties from constituent elements.',
            color: 'blue'
          },
          {
            title: '2. Solutions & Colloids',
            subtopics: ['True solution (< 1 nm)', 'Colloid (1-1000 nm, Tyndall effect)', 'Suspension (> 1000 nm)'],
            examTip: 'Milk is a colloid showing Tyndall effect; salt water is a true solution that does not.',
            color: 'purple'
          },
          {
            title: '3. Concentration',
            subtopics: ['Saturated vs Unsaturated', 'Mass by mass %', 'Mass by volume %'],
            examTip: 'Always remember solution mass = solute mass + solvent mass in denominator.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'A solution contains 40 g of common salt in 320 g of water. Calculate the concentration in terms of mass-by-mass percentage.',
          marks: '2 Marks',
          answer: 'Mass of solute = 40 g. Mass of solvent = 320 g. Mass of solution = 40 + 320 = 360 g. Concentration = (40 / 360) × 100 = 11.11%.',
          tip: 'Do not forget to add solute mass to solvent mass for denominator.'
        }
      ]
    },
    {
      unitNumber: 3,
      title: 'Atoms and Molecules',
      keyTopics: ['Law of Conservation of Mass & Definite Proportions', 'Dalton\'s atomic theory', 'Atomic mass & Valency', 'Writing chemical formulae', 'Molecular mass'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'Senior Secondary Chemistry Faculty',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.97,
      upvotes: 820,
      videoDuration: '3m 15s',
      summaryTelugu: 'పరమాణువులు మరియు అణువులు: ద్రవ్యనిత్యత్వ నియమం, స్థిరానుపాత నియమం, డాల్టన్ సిద్ధాంతం మరియు రసాయన ఫార్ములాల రాయడం.',
      summaryEnglish: 'Lavoisier and Proust laws of chemical combination, atomic symbols, polyatomic ions, and criss-cross formula writing method.',
      examWeightage: '8 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Laws of Chemical Combination',
          quickTake: 'Mass remains conserved, and elements always combine in fixed numerical ratios by mass.',
          keyPoints: [
            'Law of Conservation of Mass (Lavoisier): Total mass of reactants = Total mass of products.',
            'Law of Definite Proportions (Proust): In a chemical substance, elements are always present in definite proportions by mass (e.g. Water H:O is always 1:8 by mass).'
          ],
          formulaOrEquation: 'Water H2O: 2 × 1 : 16 = 1 : 8 by mass'
        },
        {
          topic: '2. Valency & Writing Chemical Formulae',
          quickTake: 'Valency is the combining capacity of an atom; formulas are written by cross-multiplying valencies.',
          keyPoints: [
            'Write symbols side-by-side with valencies underneath, then criss-cross.',
            'Examples: Aluminium Oxide: Al³⁺ and O²⁻ -> Al2O3; Calcium Carbonate: Ca²⁺ and CO3²⁻ -> CaCO3.',
            'Polyatomic ion groups must be enclosed in brackets when multiplying with index > 1 (e.g. Mg(OH)2).'
          ],
          formulaOrEquation: 'Criss-cross: Aˣ + Bʸ -> AyBx'
        },
        {
          topic: '3. Molecular Mass & Formula Unit Mass',
          quickTake: 'Sum of atomic masses of all atoms present in a molecule or ionic unit.',
          keyPoints: [
            'Atomic mass unit: 1 u = 1/12th the mass of one Carbon-12 atom.',
            'Water H2O: (2 × 1) + 16 = 18 u.',
            'Carbon Dioxide CO2: 12 + (2 × 16) = 44 u.'
          ],
          formulaOrEquation: 'Molecular Mass = Σ (Atoms of element × Atomic mass)'
        }
      ],
      mindmap: {
        center: 'Atoms & Molecules',
        branches: [
          {
            title: '1. Core Laws',
            subtopics: ['Conservation of mass', 'Definite proportions (1:8 for H2O)', 'Dalton postulates'],
            examTip: 'Dalton explained law of conservation of mass via indivisible atoms.',
            color: 'blue'
          },
          {
            title: '2. Chemical Formulae',
            subtopics: ['Symbols & Valency', 'Criss-cross rule', 'Polyatomic ions (SO4²⁻, NO3⁻, OH⁻)'],
            examTip: 'Never simplify subscripts inside radical brackets, e.g. (NH4)2SO4.',
            color: 'purple'
          },
          {
            title: '3. Mass Computations',
            subtopics: ['Atomic mass unit (1 u = 1/12 C-12)', 'Molecular mass calculation', 'Formula unit mass of ionic salts'],
            examTip: 'Remember atomic masses: H=1, C=12, N=14, O=16, Na=23, Cl=35.5, Ca=40.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Write the chemical formulae of: 1) Sodium Oxide, 2) Aluminium Chloride, 3) Magnesium Hydroxide.',
          marks: '3 Marks',
          answer: '1) Na⁺ and O²⁻ criss-cross -> Na2O. 2) Al³⁺ and Cl⁻ criss-cross -> AlCl3. 3) Mg²⁺ and OH⁻ criss-cross -> Mg(OH)2.',
          tip: 'Remember to enclose OH in brackets: Mg(OH)2, not MgOH2.'
        }
      ]
    },
    {
      unitNumber: 4,
      title: 'Structure of the Atom',
      keyTopics: ['Subatomic particles (Electron, Proton, Neutron)', 'Thomson, Rutherford, Bohr models', 'Valence electrons & Valency', 'Atomic Number, Mass Number, Isotopes & Isobars'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Atomic Physics & Chemistry Mentor',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.96,
      upvotes: 790,
      videoDuration: '3m 10s',
      summaryTelugu: 'పరమాణు నిర్మాణం: రూథర్‌ఫోర్డ్ ఆల్ఫా రేణువుల ప్రయోగం, బోర్ పరమాణు నమూనా, ఎలక్ట్రాన్ విన్యాసం, ఐసోటోపులు మరియు ఐసోబార్లు.',
      summaryEnglish: 'Subatomic particle discoveries, Rutherford alpha-scattering gold foil experiment, Bohr orbits 2n² rule, and applications of isotopes.',
      examWeightage: '8 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Discovery Models & Rutherford Gold Foil',
          quickTake: 'Rutherford discovered the atomic nucleus by firing alpha particles at thin gold foil.',
          keyPoints: [
            'Observations: Most alpha particles passed undeflected (most space is empty); some deflected by small angles; 1 in 12,000 rebounded at 180°.',
            'Conclusion: Entire positive charge and nearly all atomic mass is concentrated in a tiny dense nucleus at center.',
            'Limitation: Accelerated electrons would lose energy and spiral into nucleus, making atoms unstable.'
          ],
          formulaOrEquation: 'Bohr Max Electrons in Shell = 2n² (K=2, L=8, M=18, N=32)'
        },
        {
          topic: '2. Bohr\'s Model & Electronic Configuration',
          quickTake: 'Electrons revolve in discrete non-radiating orbits; outermost shell can hold at most 8 electrons (Octet rule).',
          keyPoints: [
            'Shells labelled K, L, M, N... or n = 1, 2, 3, 4...',
            'Valency: Number of electrons gained, lost, or shared to complete octet. (If valence e⁻ ≤ 4, Valency = e⁻; if > 4, Valency = 8 - e⁻).'
          ],
          formulaOrEquation: 'Valency = Valence electrons OR (8 - Valence electrons)'
        },
        {
          topic: '3. Isotopes and Isobars',
          quickTake: 'Isotopes have same atomic number but different mass numbers; isobars have same mass number but different atomic numbers.',
          keyPoints: [
            'Isotopes: Same Z, different A (e.g. Carbon-12 and Carbon-14; Chlorine-35 and Chlorine-37). Same chemical properties.',
            'Isobars: Same A, different Z (e.g. ⁴⁰Ar and ⁴⁰Ca). Different chemical properties.',
            'Isotope applications: Uranium-235 for nuclear fuel; Cobalt-60 for cancer therapy; Iodine-131 for goitre treatment.'
          ],
          formulaOrEquation: 'Mass Number (A) = Protons (Z) + Neutrons (n)'
        }
      ],
      mindmap: {
        center: 'Atomic Structure',
        branches: [
          {
            title: '1. Historical Models',
            subtopics: ['Thomson plum pudding', 'Rutherford gold foil & nucleus', 'Bohr stationary orbits'],
            examTip: 'Rutherford proved nucleus is tiny, dense, and positively charged.',
            color: 'blue'
          },
          {
            title: '2. Electronic Structure',
            subtopics: ['Bohr-Bury 2n² rule', 'Octet rule (max 8 in outer)', 'Valence electrons and valency'],
            examTip: 'Oxygen (2,6) has 6 valence electrons but valency 8 - 6 = 2.',
            color: 'purple'
          },
          {
            title: '3. Isotopes vs Isobars',
            subtopics: ['Same Z = Isotopes (C-12, C-14)', 'Same A = Isobars (Ar-40, Ca-40)', 'Medical & industrial uses'],
            examTip: 'Mention isotope applications: Cobalt-60 for cancer, Iodine-131 for goitre.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What are the conclusions drawn from Rutherford\'s alpha-particle scattering experiment?',
          marks: '3 Marks',
          answer: '1) Most alpha particles pass straight without deflection, showing most of the space inside an atom is empty. 2) Few particles deflected by large angles, showing positive charge occupies very little space. 3) 1 in 12000 rebound 180°, proving all positive charge and nearly total mass are concentrated in a tiny central nucleus.',
          tip: 'State all three conclusions clearly with corresponding observations.'
        }
      ]
    },
    {
      unitNumber: 5,
      title: 'The Fundamental Unit of Life: Cell',
      keyTopics: ['Cell theory (Schleiden, Schwann, Virchow)', 'Prokaryotic vs Eukaryotic cells', 'Cell organelles: Nucleus, Mitochondria, Plastids, ER, Golgi, Lysosomes', 'Osmosis & Diffusion'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Biology Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.98,
      upvotes: 850,
      videoDuration: '3m 25s',
      summaryTelugu: 'జీవ ప్రాథమిక ప్రమాణం: కణం: ప్లాస్మా త్వచం, ద్రవాభిసరణం (Osmosis), మైటోకాండ్రియా (శక్తి కేంద్రాలు), క్లోరోప్లాస్టులు మరియు కణ విభజన.',
      summaryEnglish: 'Comprehensive high-yield notes on plant vs animal cells, osmosis in hypotonic/hypertonic solutions, powerhouse mitochondria, and suicide bags lysosomes.',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Plasma Membrane & Osmosis',
          quickTake: 'Selectively permeable membrane controlling inward and outward transport via diffusion and osmosis.',
          keyPoints: [
            'Hypotonic solution (Dilute outside): Water enters cell -> Cell swells (Endosmosis).',
            'Hypertonic solution (Concentrated outside): Water leaves cell -> Cell shrinks/plasmolyses (Exosmosis).',
            'Isotonic solution: Equal concentration -> No net movement; cell size remains unchanged.',
            'Plant cells resist bursting in hypotonic medium due to rigid outer Cellulose Cell Wall.'
          ]
        },
        {
          topic: '2. Major Cell Organelles & Specialized Roles',
          quickTake: 'Distinct membrane-bound structures performing vital metabolic functions in cytoplasm.',
          keyPoints: [
            'Nucleus: Control center containing chromosomes (DNA + Proteins).',
            'Mitochondria: Powerhouse of the cell; produces ATP (energy currency) via cellular respiration; has its own DNA and ribosomes.',
            'Plastids: Present only in plants. Chloroplasts (contain chlorophyll for photosynthesis); Chromoplasts (coloured); Leucoplasts (store starch/oils); have own DNA and ribosomes.',
            'Lysosomes: "Suicide bags" of the cell; contain powerful digestive enzymes made by RER to digest worn-out organelles.',
            'Endoplasmic Reticulum: RER (has ribosomes, manufactures proteins); SER (synthesizes lipids and detoxifies poisons in liver cells).'
          ]
        }
      ],
      mindmap: {
        center: 'The Cell',
        branches: [
          {
            title: '1. Cell Boundaries',
            subtopics: ['Plasma membrane (Lipids + Proteins)', 'Cell wall (Cellulose in plants)', 'Osmosis: Hypo, Iso, Hypertonic'],
            examTip: 'Endosmosis causes cell swelling; Exosmosis causes plasmolysis in plant cells.',
            color: 'blue'
          },
          {
            title: '2. Power & Synthesis',
            subtopics: ['Mitochondria (ATP, own DNA)', 'Chloroplasts (Photosynthesis, own DNA)', 'Endoplasmic Reticulum (RER & SER)'],
            examTip: 'Both mitochondria and plastids have their own circular DNA and 70S ribosomes.',
            color: 'emerald'
          },
          {
            title: '3. Processing & Defense',
            subtopics: ['Golgi apparatus (Packaging & secretion)', 'Lysosomes (Suicide bags with hydrolytic enzymes)', 'Vacuoles (Large central in plants)'],
            examTip: 'Lysosomes are called suicide bags because they rupture and digest their own cell when damaged.',
            color: 'rose'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Why are lysosomes known as suicide bags of the cell?',
          marks: '2 Marks',
          answer: 'When a cell gets damaged or undergoes metabolic disturbance, lysosomes may burst and their powerful digestive (hydrolytic) enzymes digest their own cell components. Hence they are called suicide bags.',
          tip: 'State bursting of lysosomes and self-digestion by hydrolytic enzymes.'
        },
        {
          question: 'Why is mitochondria called the powerhouse of the cell?',
          marks: '2 Marks',
          answer: 'Mitochondria generate energy required for various chemical activities of the cell in the form of ATP (Adenosine Triphosphate) molecules through cellular respiration. Hence they are called the powerhouses of the cell.',
          tip: 'Mention ATP generation via cellular respiration.'
        }
      ]
    },
    {
      unitNumber: 6,
      title: 'Tissues: Plant and Animal',
      keyTopics: ['Meristematic vs Permanent plant tissues', 'Simple (Parenchyma, Collenchyma, Sclerenchyma)', 'Complex (Xylem and Phloem)', 'Animal tissues: Epithelial, Connective, Muscular, Nervous'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Plant & Animal Anatomy Mentor',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.96,
      upvotes: 810,
      videoDuration: '3m 20s',
      summaryTelugu: 'కణజాలాలు: విభాజ్య కణజాలం, సరళ శాశ్వత కణజాలాలు, దారువు (Xylem), పోషక కణజాలం (Phloem) మరియు జంతు కణజాలాలు (నాడీ, కండర).',
      summaryEnglish: 'Classification tables for plant tissues (lignified sclerenchyma, unidirectional xylem) and animal tissues (blood, bone, cartilage, neurons).',
      examWeightage: '8 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Plant Tissues (Meristematic & Permanent)',
          quickTake: 'Dividing meristematic tissues give rise to differentiated permanent tissues.',
          keyPoints: [
            'Meristematic: Apical (tips of root/stem -> growth in length); Lateral/Cambium (girth/thickness); Intercalary (internodes).',
            'Parenchyma: Living, thin-walled, unspecialized, stores food. Chlorenchyma contains chlorophyll; Aerenchyma provides buoyancy in aquatic plants.',
            'Collenchyma: Living, thickened at corners with pectin, provides mechanical flexibility without breaking.',
            'Sclerenchyma: Dead cells with heavily thickened lignin walls, gives hardness (Husk of coconut, walnut shells).',
            'Xylem: Transports water & minerals unidirectionally upwards (Tracheids, Vessels, Xylem parenchyma, Xylem fibres).',
            'Phloem: Transports food bidirectionally (Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres).'
          ]
        },
        {
          topic: '2. Animal Tissues',
          quickTake: 'Four fundamental categories: Epithelial (protective), Connective (supporting), Muscular (contractile), Nervous (stimulus response).',
          keyPoints: [
            'Epithelial: Squamous (lining of mouth/oesophagus); Cuboidal (kidney tubules); Columnar (intestine with villi); Ciliated (respiratory tract).',
            'Connective: Blood (RBC, WBC, platelets in liquid plasma); Bone (hard calcium-phosphorus matrix); Cartilage (smooths joint surfaces: nose, ear); Tendons (connects muscle to bone); Ligaments (connects bone to bone).',
            'Muscular: Striated (voluntary, multinucleate, skeletal); Smooth/Unstriated (involuntary, spindle-shaped: iris, blood vessels); Cardiac (involuntary, branched, uninucleate, rhythmic).',
            'Nervous: Neuron consists of cyton (cell body), dendrites (receive impulses), and axon (transmits electrical signal to synapse).'
          ]
        }
      ],
      mindmap: {
        center: 'Tissues',
        branches: [
          {
            title: '1. Plant Meristems',
            subtopics: ['Apical (length)', 'Lateral/Cambium (girth)', 'Intercalary (nodes)'],
            examTip: 'Apical increases height; lateral increases diameter of trunk.',
            color: 'emerald'
          },
          {
            title: '2. Vascular Bundles',
            subtopics: ['Xylem: Water & Minerals (Tracheids, Vessels, only parenchyma living)', 'Phloem: Food Translocation (Sieve tubes, Companion cells)'],
            examTip: 'Xylem conduction is unidirectional; Phloem translocation is bidirectional.',
            color: 'blue'
          },
          {
            title: '3. Animal Tissues',
            subtopics: ['Tendon (Muscle to bone)', 'Ligament (Bone to bone)', 'Neuron (Dendrite -> Cyton -> Axon)'],
            examTip: 'Ligament connects bone to bone; Tendon connects muscle to bone.',
            color: 'purple'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'Differentiate between Bone and Cartilage with two points.',
          marks: '2 Marks',
          answer: '1) Bone has a hard, rigid, non-flexible matrix composed of calcium and phosphorus compounds; Cartilage has a flexible matrix composed of proteins and sugars. 2) Bone cells (osteocytes) are embedded in concentric rings; Cartilage cells (chondrocytes) have widely spaced matrix and smoothens bone surfaces at joints.',
          tip: 'Highlight rigid calcium matrix vs flexible protein-sugar matrix.'
        }
      ]
    },
    {
      unitNumber: 7,
      title: 'Motion',
      keyTopics: ['Distance vs Displacement', 'Speed, Velocity, and Acceleration', 'Distance-time and Velocity-time graphs', 'Three Equations of Motion', 'Uniform Circular Motion'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'Senior Secondary Physics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 890,
      videoDuration: '3m 30s',
      summaryTelugu: 'చలనం: దూరం vs స్థానభ్రంశం, వేగం, త్వరణం (Acceleration), చలన సమీకరణాలు మరియు ఏకరీతి వృత్తాకార చలనం.',
      summaryEnglish: 'Derivation of 3 equations of motion using v-t graph, slope of graph interpretations, area under v-t graph, and centripetal acceleration in circular motion.',
      examWeightage: '8-10 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Distance',
          inBrief: 'Distance is the actual length of the total path covered by a body during its motion from its initial position to its final position.',
          definition: 'Distance is formally defined as the scalar quantity representing the total continuous path length traversed by an object during its motion, regardless of direction.',
          detailedExplanation: 'Distance measures the complete journey taken by a moving body. Since it possesses only magnitude and no spatial direction, it is a scalar quantity. Its SI unit is the metre (m). For any moving object, distance can never be negative and can never decrease over time; it is always greater than or equal to the magnitude of displacement (Distance ≥ |Displacement|).',
          quickTake: 'Total path length traversed by a moving object; scalar quantity, always positive, SI unit is metre (m).',
          keyPoints: [
            'Scalar quantity: Has magnitude only, no specified direction.',
            'SI Unit: metre (m); CGS Unit: centimetre (cm).',
            'Always positive (≥ 0) for a moving body; can never be zero or negative once motion occurs.',
            'Odometer in automobiles measures the distance travelled by the vehicle in kilometres.'
          ],
          formulaOrEquation: 'Distance = Speed × Time | SI Unit: m (metre)'
        },
        {
          topic: '2. Displacement',
          inBrief: 'Displacement is the shortest straight-line distance measured from the initial position to the final position of a moving body along with its direction.',
          definition: 'Displacement is formally defined as the vector quantity representing the minimum spatial straight-line vector directed from an object\'s initial reference point to its terminal position.',
          detailedExplanation: 'Unlike distance which traces the actual path, displacement is concerned strictly with where an object started and where it ended. Because it incorporates direction, displacement is a vector quantity. It can be positive, negative, or zero. For instance, if an athlete runs around a circular track of radius r and returns to the exact starting line, the total distance covered is 2πr, but the net displacement is exactly 0 metres.',
          quickTake: 'Shortest straight-line distance from initial to final position; vector quantity, can be positive, negative, or zero.',
          keyPoints: [
            'Vector quantity: Has both numerical magnitude and specific directional sense.',
            'SI Unit: metre (m); identical unit to distance.',
            'Can be zero even if distance is non-zero (e.g. moving in a closed loop or round trip).',
            'Magnitude of displacement is always less than or equal to distance: |Displacement| ≤ Distance.'
          ],
          formulaOrEquation: 'Δx = x_final - x_initial | SI Unit: m (with direction)'
        },
        {
          topic: '3. Speed & Average Speed',
          inBrief: 'Speed is the distance covered or travelled by an object per unit of time.',
          definition: 'Speed is formally defined as the rate of change of distance with respect to time, indicating how fast an object covers ground without regard to direction.',
          detailedExplanation: 'Speed is a scalar quantity since distance is a scalar. In real-world motion, speed is rarely constant. Hence, we calculate Average Speed as the ratio of the total distance travelled by the object to the total time taken. The speedometer of an automobile measures the instantaneous speed of the vehicle in km/h.',
          quickTake: 'Rate of covering distance; scalar quantity, SI unit is metre per second (m/s). Average Speed = Total Distance / Total Time.',
          keyPoints: [
            'Scalar quantity with SI unit of m/s (or km/h in vehicles).',
            'Speed is always positive or zero; it cannot be negative.',
            'Conversion factor: To convert km/h to m/s, multiply by 5/18 (e.g. 36 km/h = 36 × 5/18 = 10 m/s).',
            'Average Speed = (Total Distance Covered) / (Total Time Elapsed).'
          ],
          formulaOrEquation: 'Speed v = s / t | Average Speed = s_total / t_total | SI Unit: m/s'
        },
        {
          topic: '4. Velocity & Average Velocity',
          inBrief: 'Velocity is the displacement of an object per unit time, or the speed of an object moving in a specified direction.',
          definition: 'Velocity is formally defined as the vector rate of change of an object\'s position with time, encapsulating both speed and spatial direction of motion.',
          detailedExplanation: 'Velocity can change if the object\'s speed changes, its direction of motion changes, or both change simultaneously. If a car drives at a constant 60 km/h around a roundabout, its speed is constant, but its velocity is constantly changing because its direction changes continuously. When an object moves along a straight line at a uniformly changing rate, Average Velocity is given by the arithmetic mean of initial velocity (u) and final velocity (v): v_avg = (u + v) / 2.',
          quickTake: 'Speed in a specified direction; vector quantity, can be zero, positive, or negative. SI unit is m/s.',
          keyPoints: [
            'Vector quantity: Changes if magnitude (speed) changes OR if direction changes.',
            'SI Unit: metre per second (m/s).',
            'Average Velocity = Total Displacement / Total Time.',
            'For uniformly changing velocity: Average Velocity = (u + v) / 2.'
          ],
          formulaOrEquation: 'v = Displacement / Time | v_avg = (u + v) / 2 | SI Unit: m/s'
        },
        {
          topic: '5. Acceleration & Retardation',
          inBrief: 'Acceleration is the rate of change of velocity of an object with respect to time.',
          definition: 'Acceleration is formally defined as the measure of change in velocity per unit time of a body undergoing non-uniform motion.',
          detailedExplanation: 'If an object\'s velocity changes from an initial value u to a final value v in time interval t, the acceleration a is given by a = (v - u) / t. When velocity increases in the direction of motion, acceleration is positive. When velocity decreases over time (such as when brakes are applied), acceleration is negative, which is termed Retardation or Deceleration. In uniform motion (constant velocity), acceleration is zero.',
          quickTake: 'Rate of change of velocity; vector quantity, SI unit is m/s². Positive when speeding up, negative (retardation) when slowing down.',
          keyPoints: [
            'Vector quantity with SI unit: m/s² (metre per second squared).',
            'Formula: a = (v - u) / t where u = initial velocity, v = final velocity, t = time.',
            'Uniform acceleration: Velocity changes by equal amounts in equal intervals of time (e.g. freely falling body under gravity g ≈ 9.8 m/s²).',
            'Retardation (deceleration) is negative acceleration (-a).'
          ],
          formulaOrEquation: 'a = (v - u) / t | SI Unit: m/s² (metre/second²)'
        },
        {
          topic: '6. Graphical Representation of Motion (s-t & v-t Graphs)',
          inBrief: 'Graphical representation uses distance-time and velocity-time graphs to visually calculate an object\'s speed, acceleration, and distance covered.',
          definition: 'Kinematic graphical analysis is the geometric mapping of position, displacement, and velocity as functions of time on Cartesian coordinate axes.',
          detailedExplanation: 'In a Distance-Time (s-t) graph: The slope of the line equals the speed of the body (Slope = Δs / Δt = Speed). A straight inclined line indicates uniform speed; a curved line indicates non-uniform speed. In a Velocity-Time (v-t) graph: The slope represents acceleration (Slope = Δv / Δt = a). The area enclosed under the v-t curve and the time axis equals the magnitude of the distance/displacement covered by the object (Area = Distance s).',
          quickTake: 's-t graph slope = speed; v-t graph slope = acceleration; area under v-t graph = distance travelled.',
          keyPoints: [
            'Slope of Distance-Time (s-t) graph = Speed of the object.',
            'Slope of Velocity-Time (v-t) graph = Acceleration of the object.',
            'Area under Velocity-Time (v-t) graph and time axis = Distance travelled (s).',
            'Horizontal line on v-t graph = Constant velocity (zero acceleration).'
          ],
          formulaOrEquation: 'Slope(s-t) = v | Slope(v-t) = a | Area under v-t curve = Distance (s)'
        },
        {
          topic: '7. The Three Kinematic Equations of Motion',
          inBrief: 'These are the three mathematical equations connecting initial velocity (u), final velocity (v), uniform acceleration (a), time (t), and distance travelled (s).',
          definition: 'The equations of motion are mathematical relations derived geometrically and algebraically that describe the behavior of a physical system undergoing uniformly accelerated rectilinear motion.',
          detailedExplanation: 'These equations are valid only when acceleration a is constant and motion is in a straight line: 1) First Equation: v = u + at relates velocity and time. 2) Second Equation: s = ut + ½at² relates position and time (obtained by calculating the area under the v-t graph as rectangle + triangle). 3) Third Equation: v² - u² = 2as relates velocity and displacement (eliminating time t).',
          quickTake: 'v = u + at | s = ut + ½at² | v² - u² = 2as (Derived using velocity-time graph for constant acceleration).',
          keyPoints: [
            'First Equation: v = u + at (Velocity-Time Relation).',
            'Second Equation: s = ut + ½at² (Position-Time Relation).',
            'Third Equation: v² - u² = 2as (Position-Velocity Relation).',
            'Important condition: Equations apply ONLY for uniform (constant) acceleration.'
          ],
          formulaOrEquation: '1) v = u + at | 2) s = ut + ½at² | 3) v² - u² = 2as'
        },
        {
          topic: '8. Uniform Circular Motion',
          inBrief: 'When an object moves along a circular path with constant speed, its direction changes continuously at every point, making it an accelerated motion.',
          definition: 'Uniform circular motion is the two-dimensional motion of an object traversing a circular trajectory at a constant linear speed while experiencing continuous centripetal acceleration perpendicular to velocity.',
          detailedExplanation: 'Even though the scalar speed remains constant, the direction of velocity changes tangentially at every single instant. Since velocity is changing, circular motion is always an accelerated motion. For a circular path of radius r, the distance covered in one revolution is circumference 2πr. If time taken for one full revolution is t, linear speed is v = 2πr / t. Examples include the movement of the moon around the Earth, a satellite in circular orbit, and the tip of a second hand of a watch.',
          quickTake: 'Constant speed around a circle is accelerated motion because direction of velocity changes continuously.',
          keyPoints: [
            'Accelerated motion: Direction of velocity is always tangential and continuously changing.',
            'Formula for speed in one circular loop: v = (2πr) / t.',
            'Acceleration is directed towards the center of the circular track (centripetal acceleration).',
            'Real-life examples: Motion of Earth around Sun, athletes running on circular tracks, artificial satellites in orbit.'
          ],
          formulaOrEquation: 'v = (2πr) / t | Direction: Tangential to circle'
        }
      ],
      mindmap: {
        center: 'Motion',
        branches: [
          {
            title: '1. Core Scalars & Vectors',
            subtopics: ['Distance (scalar) vs Displacement (vector)', 'Speed (m/s) vs Velocity (m/s)', 'Acceleration a = (v-u)/t (m/s²)'],
            examTip: 'Displacement can be zero when returning to starting point; distance cannot.',
            color: 'blue'
          },
          {
            title: '2. Graphical Tools',
            subtopics: ['s-t graph slope = Speed', 'v-t graph slope = Acceleration', 'Area under v-t curve = Distance (s)'],
            examTip: 'Derive s = ut + ½at² by splitting area under v-t graph into rectangle + triangle.',
            color: 'purple'
          },
          {
            title: '3. Circular Motion',
            subtopics: ['Constant speed, changing direction', 'Continuous acceleration', 'Formula v = 2πr / t'],
            examTip: 'Remember uniform circular motion is an accelerated motion.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'A train starting from rest attains a velocity of 72 km/h in 5 minutes. Assuming uniform acceleration, find: 1) acceleration, 2) distance travelled.',
          marks: '3 Marks',
          answer: 'Initial velocity u = 0. Final velocity v = 72 km/h = 72 × (5/18) = 20 m/s. Time t = 5 min = 300 s. 1) a = (v - u) / t = (20 - 0) / 300 = 1/15 m/s² (0.067 m/s²). 2) s = ut + ½at² = 0 + ½(1/15)(300)² = ½ × (1/15) × 90000 = 3000 m = 3 km.',
          tip: 'Always convert km/h to m/s by multiplying with 5/18 first.'
        }
      ],
      keywordsGlossary: [
        {
          keyword: 'Distance',
          definition: 'The actual length of the total path traversed by a moving body irrespective of the direction in which it travels.',
          sentenceExplanation: 'Distance is the total ground covered by an object during its entire motion, which is measured in metres and can never be negative.',
          examContext: 'Tested as a scalar quantity with SI unit metre (m); always greater than or equal to magnitude of displacement.'
        },
        {
          keyword: 'Displacement',
          definition: 'The shortest straight-line distance measured from the initial position to the final position of a moving body along with its direction.',
          sentenceExplanation: 'Displacement tells us not just how far an object ended up from where it began, but in exactly which straight-line direction.',
          examContext: 'Tested as a vector quantity; can be zero even if distance is non-zero (e.g. moving in a circle and returning to start).'
        },
        {
          keyword: 'Scalar Quantity',
          definition: 'A physical quantity that is completely described by its numerical magnitude alone and has no direction.',
          sentenceExplanation: 'A scalar quantity only has a size or amount, like a speed of 40 km/h or a distance of 50 metres, without caring about north, south, east, or west.',
          examContext: 'Common examples to memorize for 1-mark questions: Distance, Speed, Mass, Time, Work, Energy.'
        },
        {
          keyword: 'Vector Quantity',
          definition: 'A physical quantity that requires both numerical magnitude and a specific spatial direction for its complete specification.',
          sentenceExplanation: 'A vector quantity requires both how much and which way, such as an airplane flying at 500 km/h towards Northeast.',
          examContext: 'Common examples for exams: Displacement, Velocity, Acceleration, Force, Momentum, Weight.'
        },
        {
          keyword: 'Speed',
          definition: 'The rate of distance covered by an object with respect to time.',
          sentenceExplanation: 'Speed measures how fast an object is moving along a path, obtained by dividing distance by time.',
          examContext: 'Formula: Speed = Distance / Time; SI Unit: m/s; measured instantaneously in vehicles by speedometer.'
        },
        {
          keyword: 'Velocity',
          definition: 'The rate of change of displacement of an object with time, or the speed of an object moving in a specified direction.',
          sentenceExplanation: 'Velocity is speed with a direction, meaning it changes if the object turns even if its speedometer stays constant.',
          examContext: 'Vector quantity with SI unit m/s; average velocity is (u + v) / 2 for uniformly accelerated motion.'
        },
        {
          keyword: 'Acceleration',
          definition: 'The rate of change of velocity of an object with respect to time.',
          sentenceExplanation: 'Acceleration tells us how quickly an object is speeding up, slowing down, or turning every single second.',
          examContext: 'Formula: a = (v - u) / t; SI Unit: m/s²; zero in uniform motion; positive when speeding up.'
        },
        {
          keyword: 'Retardation (Deceleration)',
          definition: 'Negative acceleration experienced when the velocity of a moving object decreases over time in the direction of motion.',
          sentenceExplanation: 'Retardation happens whenever brakes are applied to slow a vehicle down, representing a negative acceleration value.',
          examContext: 'Always write either -a or state retardation = a with positive magnitude; do not use double negatives.'
        },
        {
          keyword: 'Uniform Motion',
          definition: 'Motion in which an object covers equal distances in equal intervals of time along a straight line, however small these intervals may be.',
          sentenceExplanation: 'In uniform motion, an object travels at a perfectly constant speed in a straight line with zero acceleration.',
          examContext: 'Graph is a straight line through origin on distance-time axes; acceleration is strictly 0.'
        },
        {
          keyword: 'Non-Uniform Motion',
          definition: 'Motion in which an object covers unequal distances in equal intervals of time, or when its direction of motion continuously changes.',
          sentenceExplanation: 'Non-uniform motion describes everyday travel where an object speeds up, slows down, or swerves in traffic.',
          examContext: 'Distance-time graph is curved; acceleration is non-zero.'
        },
        {
          keyword: 'Average Speed',
          definition: 'The ratio of the total distance travelled by an object to the total time taken to cover that distance.',
          sentenceExplanation: 'Average speed gives the overall rate of travel for an entire journey even if speed fluctuated along the way.',
          examContext: 'Formula: Total Distance / Total Time; never simply average the two speeds unless time intervals are identical.'
        },
        {
          keyword: 'Uniform Circular Motion',
          definition: 'The motion of an object travelling along a circular trajectory at a constant linear speed.',
          sentenceExplanation: 'Even though an object moves around a circle at a steady speed, its velocity changes continuously because its direction turns at every point.',
          examContext: 'Classic exam question: Why is uniform circular motion accelerated? Answer: Direction of velocity changes continuously.'
        },
        {
          keyword: 'Centripetal Acceleration',
          definition: 'The inward radial acceleration directed towards the center of curvature that keeps an object moving along a circular path.',
          sentenceExplanation: 'Centripetal acceleration is the continuous inward pull that prevents a spinning object from flying off in a straight line.',
          examContext: 'Directed perpendicular to tangential velocity; responsible for turning direction without changing scalar speed.'
        }
      ]
    },
    {
      unitNumber: 8,
      title: 'Force and Laws of Motion',
      keyTopics: ['Balanced and Unbalanced forces', 'Newton\'s First Law: Inertia & Mass', 'Newton\'s Second Law: F = ma', 'Newton\'s Third Law: Action-Reaction', 'Conservation of Momentum'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Mechanics Specialist',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 910,
      videoDuration: '3m 30s',
      summaryTelugu: 'బలం మరియు చలన నియమాలు: న్యూటన్ మూడు చలన నియమాలు, జడత్వం (Inertia), F = ma సమీకరణం మరియు ద్రవ్యవేగ పరిరక్షణ నియమం.',
      summaryEnglish: 'Newton\'s 3 fundamental laws, mathematical derivation of F = ma from rate of change of momentum, recoil of gun, and seatbelt physics.',
      examWeightage: '8-10 Marks',
      formulaeCount: 5,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. First Law & Inertia',
          quickTake: 'An object remains in state of rest or uniform motion unless acted upon by an external unbalanced force.',
          keyPoints: [
            'Inertia: Inherent tendency of an object to resist changes in its state of motion.',
            'Mass is a direct measure of inertia (Heavier objects have more inertia).',
            'Examples: Passengers jerk backwards when bus starts suddenly (inertia of rest); dust falls when carpet is beaten.'
          ],
          formulaOrEquation: 'Inertia ∝ Mass'
        },
        {
          topic: '2. Second Law: F = ma',
          quickTake: 'The rate of change of momentum of an object is proportional to the applied unbalanced force in the direction of force.',
          keyPoints: [
            'Linear Momentum p = m · v. SI unit: kg·m/s.',
            'Force F = Δp / Δt = m(v - u) / t = ma. SI unit: Newton (1 N = 1 kg·m/s²).',
            'Application: A fielder pulls hands backward while catching a fast cricket ball to increase time (t), reducing force on hands.'
          ],
          formulaOrEquation: 'F = (m(v - u)) / t = ma'
        },
        {
          topic: '3. Third Law & Conservation of Momentum',
          quickTake: 'To every action, there is always an equal and opposite reaction acting on two different bodies.',
          keyPoints: [
            'Action and reaction act simultaneously on different bodies, so they never cancel each other.',
            'Recoil of gun: Forward momentum of bullet equals backward recoil momentum of gun: M_gun · v_recoil = - m_bullet · v_bullet.',
            'Total momentum before collision = Total momentum after collision: m1 u1 + m2 u2 = m1 v1 + m2 v2.'
          ],
          formulaOrEquation: 'm1 u1 + m2 u2 = m1 v1 + m2 v2 | v_recoil = - (m_b · v_b) / M_gun'
        }
      ],
      mindmap: {
        center: 'Laws of Motion',
        branches: [
          {
            title: '1. Newton\'s 1st Law',
            subtopics: ['Inertia of rest, motion & direction', 'Mass = Measure of inertia', 'Galileo incline planes'],
            examTip: 'Seatbelts prevent forward injury by opposing inertia of motion during sudden braking.',
            color: 'blue'
          },
          {
            title: '2. Newton\'s 2nd Law',
            subtopics: ['Momentum p = mv', 'F = dp/dt = ma', 'Fielder catching cricket ball (increasing Δt)'],
            examTip: 'Always show derivation: F ∝ (mv - mu)/t => F = k·m(v-u)/t => F = ma.',
            color: 'purple'
          },
          {
            title: '3. Newton\'s 3rd Law',
            subtopics: ['Equal & opposite forces on different bodies', 'Rocket propulsion', 'Recoil of gun (m1u1+m2u2 = m1v1+m2v2)'],
            examTip: 'Recoil velocity is negative indicating opposite direction to bullet.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'A bullet of mass 20 g is horizontally fired with a velocity 150 m/s from a pistol of mass 2 kg. What is the recoil velocity of the pistol?',
          marks: '3 Marks',
          answer: 'Mass of bullet m1 = 20 g = 0.02 kg; velocity v1 = 150 m/s. Mass of pistol m2 = 2 kg; recoil velocity = v2. By conservation of momentum: m1 v1 + m2 v2 = 0 => (0.02 × 150) + 2(v2) = 0 => 3 + 2 v2 = 0 => v2 = -1.5 m/s. Recoil velocity of pistol is 1.5 m/s in backward direction.',
          tip: 'State negative sign indicates backward recoil.'
        }
      ]
    },
    {
      unitNumber: 9,
      title: 'Gravitation & Flotation',
      keyTopics: ['Universal Law of Gravitation', 'Acceleration due to gravity (g)', 'Mass vs Weight', 'Free fall and equations of motion under gravity', 'Thrust, Pressure, and Archimedes\' Principle'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Gravitation & Fluids Specialist',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 880,
      videoDuration: '3m 25s',
      summaryTelugu: 'గురుత్వాకర్షణ & ప్లవన సూత్రాలు: న్యూటన్ గురుత్వాకర్షణ సార్వత్రిక నియమం, g విలువ (9.8 m/s²), ద్రవ్యరాశి vs భారం, మరియు ఆర్కిమెడిస్ సూత్రం.',
      summaryEnglish: 'Inverse square law, calculation of g = GM/R², variation of g at poles vs equator, weightlessness, buoyant force, and ship floating principles.',
      examWeightage: '8-10 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Universal Law of Gravitation & Value of g',
          quickTake: 'Every mass attracts every other mass with force proportional to product of masses and inversely proportional to square of distance.',
          keyPoints: [
            'Formula: F = G · (m1 · m2) / d², where G = 6.67 × 10⁻¹¹ N·m²/kg².',
            'Acceleration due to gravity g = G·M / R². On Earth\'s surface, g ≈ 9.8 m/s².',
            'Variation: Earth is flattened at poles; radius R_equator > R_pole, so g_pole > g_equator. g at center of Earth = 0.'
          ],
          formulaOrEquation: 'F = G · (M · m) / R² | g = G·M / R² = 9.8 m/s²'
        },
        {
          topic: '2. Mass vs Weight & Gravity on Moon',
          quickTake: 'Mass is quantity of matter (constant everywhere); weight is gravitational pull W = mg (varies by location).',
          keyPoints: [
            'Mass: Scalar, measured in kg, measured by pan beam balance, never zero.',
            'Weight: Vector, measured in Newtons (N), measured by spring balance, zero in free space.',
            'Weight on Moon: W_moon = (1/6) · W_earth because Moon has 1/100 mass and 1/4 radius of Earth.'
          ],
          formulaOrEquation: 'W = m · g | W_moon = (1/6) · W_earth'
        },
        {
          topic: '3. Thrust, Pressure & Archimedes\' Principle',
          quickTake: 'Buoyant force equals weight of fluid displaced by submerged object.',
          keyPoints: [
            'Thrust: Net force acting perpendicular to a surface. Pressure = Thrust / Area.',
            'Archimedes\' Principle: When a body is immersed fully or partially in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced.',
            'Floatation condition: Density of object < Density of fluid -> Object floats; Density > fluid -> Object sinks.'
          ],
          formulaOrEquation: 'Buoyant Force F_b = V_displaced · ρ_fluid · g'
        }
      ],
      mindmap: {
        center: 'Gravitation & Flotation',
        branches: [
          {
            title: '1. Universal Law',
            subtopics: ['F = G(m1·m2)/r²', 'Constant G = 6.67×10⁻¹¹ N·m²/kg²', 'Tides, planetary orbits'],
            examTip: 'Doubling distance between masses reduces gravitational force to one-fourth (1/4).',
            color: 'blue'
          },
          {
            title: '2. g vs G & Free Fall',
            subtopics: ['g = 9.8 m/s² (vector)', 'v = u + gt', 'h = ut + ½gt²', 'v² - u² = 2gh'],
            examTip: 'Take g = -9.8 m/s² when object is thrown vertically upwards.',
            color: 'purple'
          },
          {
            title: '3. Archimedes & Buoyancy',
            subtopics: ['Buoyant force = Weight of displaced fluid', 'Hydrometer & Lactometer', 'Why steel ship floats while iron nail sinks'],
            examTip: 'A ship floats because its hollow shape displaces a volume of water whose weight is greater than ship weight.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'An object weighs 10 N when measured on the surface of the earth. What would be its weight when measured on the surface of the moon?',
          marks: '2 Marks',
          answer: 'Weight on moon = (1/6) × Weight on earth = (1/6) × 10 N = 1.67 N.',
          tip: 'W_moon = (1/6) W_earth.'
        }
      ]
    },
    {
      unitNumber: 10,
      title: 'Work and Energy',
      keyTopics: ['Work done: W = F · s · cos θ', 'Kinetic energy derivation: KE = ½ mv²', 'Potential energy: PE = mgh', 'Law of Conservation of Energy', 'Power (Watt) and Commercial unit (kWh)'],
      readingTime: '13 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Physics Faculty',
      pdfPages: 7,
      fileSize: '1.3 MB',
      rating: 4.97,
      upvotes: 920,
      videoDuration: '3m 30s',
      summaryTelugu: 'పని మరియు శక్తి: చేసిన పని W = F · s, గతిశక్తి (KE = ½ mv²), స్థితిశక్తి (PE = mgh), శక్తి నిత్యత్వ నియమం మరియు సామర్థ్యం (Power).',
      summaryEnglish: 'Positive, negative, and zero work conditions, step-by-step derivation of ½ mv², proof of conservation of energy for a freely falling body, and commercial kWh unit.',
      examWeightage: '8-10 Marks',
      formulaeCount: 6,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Scientific Concept of Work Done',
          quickTake: 'Work is done only when a force produces displacement in the object.',
          keyPoints: [
            'Formula: W = F · s. SI unit: Joule (1 J = 1 N · 1 m).',
            'Positive Work: Force and displacement in same direction (θ = 0°).',
            'Negative Work: Force opposes displacement (θ = 180°, e.g. Friction).',
            'Zero Work: Force perpendicular to displacement (θ = 90°, e.g. Porter carrying luggage on head walking horizontally; satellite orbiting Earth).'
          ],
          formulaOrEquation: 'W = F · s · cos(θ) | 1 Joule = 1 N · 1 m'
        },
        {
          topic: '2. Kinetic & Potential Energy',
          quickTake: 'Kinetic energy is energy of motion (½ mv²); Potential energy is stored energy of configuration or height (mgh).',
          keyPoints: [
            'Derivation of KE: From v² - u² = 2as, s = (v² - u²)/2a. W = F · s = (ma) · [(v² - u²)/2a] = ½ m v² - ½ m u². If u = 0, KE = ½ mv².',
            'Gravitational PE = m · g · h.',
            'Law of Conservation of Energy: Total mechanical energy (KE + PE) remains constant for an isolated system. In free fall: KE + PE = constant.'
          ],
          formulaOrEquation: 'KE = ½ m v² | PE = m · g · h | E_total = KE + PE = Constant'
        },
        {
          topic: '3. Power & Commercial Unit of Electrical Energy',
          quickTake: 'Power is rate of doing work P = W / t. SI unit: Watt (1 W = 1 J/s).',
          keyPoints: [
            '1 Horsepower (1 hp) = 746 Watts.',
            'Commercial unit: 1 kilowatt-hour (1 kWh) = 1 Unit of electricity.',
            'Conversion: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules.'
          ],
          formulaOrEquation: 'P = W / t | 1 kWh = 3.6 × 10⁶ J'
        }
      ],
      mindmap: {
        center: 'Work & Energy',
        branches: [
          {
            title: '1. Work Concept',
            subtopics: ['W = F · s (Joules)', 'Positive work (same direction)', 'Negative work (friction)', 'Zero work (θ = 90° porter)'],
            examTip: 'A coolie carrying load on head walking horizontally does zero work against gravity because θ = 90°.',
            color: 'blue'
          },
          {
            title: '2. Energy Forms',
            subtopics: ['KE = ½mv²', 'PE = mgh', 'Proof of KE + PE = constant during free fall'],
            examTip: 'At highest point KE=0, PE=max; just before hitting ground PE=0, KE=max.',
            color: 'purple'
          },
          {
            title: '3. Power & Units',
            subtopics: ['Power P = W/t (Watts)', '1 hp = 746 W', '1 kWh = 3.6 × 10⁶ Joules (1 Board unit)'],
            examTip: 'Remember to multiply kWh by number of days when calculating electricity bills.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'An electric bulb of 60 W is used for 6 hours per day. Calculate the "units" of energy consumed in one day by the bulb.',
          marks: '2 Marks',
          answer: 'Power P = 60 W = 60/1000 kW = 0.06 kW. Time t = 6 h. Energy consumed = P × t = 0.06 kW × 6 h = 0.36 kWh = 0.36 Units.',
          tip: 'Convert Watts to kW first: 60/1000 = 0.06 kW.'
        }
      ]
    },
    {
      unitNumber: 11,
      title: 'Sound',
      keyTopics: ['Production and propagation of sound', 'Longitudinal waves: Compressions and Rarefactions', 'Characteristics: Frequency, Amplitude, Speed, Wavelength', 'Echo and Reverberation', 'Ultrasound and SONAR'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Acoustics Specialist',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.96,
      upvotes: 830,
      videoDuration: '3m 15s',
      summaryTelugu: 'ధ్వని: ధ్వని తరంగాలు (సంపీడనాలు, విరళీకరణాలు), పౌనఃపున్యం (Frequency), తరంగదైర్ఘ్యం, ప్రతిధ్వని (Echo), మరియు సోనార్ (SONAR) సాంకేతికత.',
      summaryEnglish: 'Mechanical wave propagation, wave formula v = λ · ν, minimum 17.2 m distance for hearing echo, ultrasound scanning, and SONAR depth calculation.',
      examWeightage: '6-8 Marks',
      formulaeCount: 4,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Propagation of Sound & Wave Characteristics',
          quickTake: 'Sound is a mechanical wave that needs a material medium (solid > liquid > gas; cannot travel in vacuum).',
          keyPoints: [
            'Longitudinal wave: Particles vibrate parallel to direction of wave propagation creating Compressions (C, high pressure) and Rarefactions (R, low pressure).',
            'Frequency (ν): Number of oscillations per second (Hertz, Hz). Determines Pitch.',
            'Amplitude (A): Maximum displacement from mean position. Determines Loudness (Loudness ∝ Amplitude²).',
            'Wave Speed: v = Wavelength (λ) × Frequency (ν).'
          ],
          formulaOrEquation: 'Speed of wave: v = λ · ν | T = 1 / ν'
        },
        {
          topic: '2. Echo & Reverberation',
          quickTake: 'Echo is repetition of sound caused by reflection from a distant obstacle.',
          keyPoints: [
            'Persistence of hearing in human ear is 0.1 second (1/10 s).',
            'Minimum distance for hearing distinct echo: Total distance = 2d = v × t => 2d = 344 m/s × 0.1 s = 34.4 m => d = 17.2 metres (at 22°C in air).',
            'Reverberation: Persistence of sound due to repeated reflections in an enclosed hall. Reduced by sound-absorbing acoustic ceiling tiles, curtains, and carpets.'
          ],
          formulaOrEquation: 'Echo Distance: 2d = v · t => d = (v · t) / 2'
        },
        {
          topic: '3. Ultrasound Applications & SONAR',
          quickTake: 'Ultrasound has frequency > 20,000 Hz; human hearing range is 20 Hz to 20,000 Hz.',
          keyPoints: [
            'Industrial & Medical: Cleaning spiral tubes; detecting invisible cracks in metal blocks; Echocardiography (ECG); Ultrasonography for fetus examination.',
            'SONAR (Sound Navigation And Ranging): Transmits ultrasonic pulses underwater and receives reflected echo to measure ocean depth or locate submarines.'
          ],
          formulaOrEquation: 'SONAR Ocean Depth: 2d = v · t => d = (v · t) / 2'
        }
      ],
      mindmap: {
        center: 'Sound Waves',
        branches: [
          {
            title: '1. Wave Nature',
            subtopics: ['Mechanical (requires medium, vacuum impossible)', 'Longitudinal (Compressions & Rarefactions)', 'Speed: Solid > Liquid > Gas'],
            examTip: 'Bell jar experiment proves sound cannot travel in vacuum.',
            color: 'blue'
          },
          {
            title: '2. Characteristics',
            subtopics: ['Wavelength (λ)', 'Frequency ν (Hz) -> Pitch', 'Amplitude A -> Loudness (∝ A²)', 'v = λ · ν'],
            examTip: 'Loudness depends on amplitude; pitch depends on frequency.',
            color: 'purple'
          },
          {
            title: '3. Echo & SONAR',
            subtopics: ['Min distance 17.2 m (t = 0.1 s)', 'Reverberation reduction', 'Ultrasound (> 20 kHz)', 'SONAR: 2d = v·t'],
            examTip: 'Remember to divide by 2 when finding depth using echo or SONAR.',
            color: 'emerald'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'A submarine emits a sonar pulse, which returns from an underwater cliff in 1.02 s. If the speed of sound in salt water is 1531 m/s, how far away is the cliff?',
          marks: '2 Marks',
          answer: 'Speed of sound v = 1531 m/s. Time t = 1.02 s. Total distance covered by pulse = 2d = v × t. Distance d = (v × t) / 2 = (1531 × 1.02) / 2 = 1561.62 / 2 = 780.81 m.',
          tip: 'Always divide total round-trip distance by 2 for one-way depth/distance.'
        }
      ]
    },
    {
      unitNumber: 12,
      title: 'Improvement in Food Resources',
      keyTopics: ['Crop variety improvement (Hybridisation, GMOs)', 'Crop production management: Nutrients, Manure vs Fertilizers, Irrigation, Cropping patterns', 'Crop protection: Weeds, Pests, Storage', 'Animal Husbandry: Cattle, Poultry, Fish farming, Bee-keeping'],
      readingTime: '12 mins',
      verifiedBy: 'CBSE Academic Panel',
      verifiedRole: 'CBSE Agricultural Science Specialist',
      pdfPages: 6,
      fileSize: '1.2 MB',
      rating: 4.95,
      upvotes: 750,
      videoDuration: '3m 10s',
      summaryTelugu: 'ఆహార వనరులలో అభివృద్ధి: పంట రకాల మెరుగుదల, ఎరువులు vs రసాయన ఎరువులు, పంట మార్పిడి (Crop Rotation), పాడి పరిశ్రమ మరియు మత్స్య సేద్యం.',
      summaryEnglish: 'High-yield notes on organic manures, macro vs micronutrients, mixed vs intercropping, marine and inland composite fish culture, and apiculture.',
      examWeightage: '6 Marks',
      formulaeCount: 0,
      solvedQuestionsCount: 4,
      topicAtAGlance: [
        {
          topic: '1. Plant Nutrients, Manures & Fertilizers',
          quickTake: 'Plants need 16 essential nutrients: Air (C, O), Water (H), Soil (6 Macronutrients: N, P, K, Ca, Mg, S and 7 Micronutrients: Fe, Mn, B, Zn, Cu, Mo, Cl).',
          keyPoints: [
            'Manure: Organic, prepared by decomposing plant/animal wastes; enriches soil with humus and improves water-holding capacity; bulky and slow.',
            'Fertilizers: Commercial inorganic chemicals; rich in specific nutrients (NPK); easy to transport; excessive use harms soil fertility and pollutes water.'
          ]
        },
        {
          topic: '2. Cropping Patterns',
          quickTake: 'Methods to maximize yield and prevent soil nutrient depletion.',
          keyPoints: [
            'Mixed Cropping: Growing two or more crops simultaneously on the same field without set pattern (e.g. Wheat + Gram). Reduces risk of total failure.',
            'Intercropping: Growing two or more crops simultaneously in definite row ratio (e.g. Soyabean + Maize in 1:2 rows). Prevents pest spread.',
            'Crop Rotation: Growing different crops sequentially on same land (e.g. Cereal followed by Leguminous crop to replenish nitrogen naturally).'
          ]
        },
        {
          topic: '3. Animal Husbandry & Composite Fish Culture',
          quickTake: 'Scientific management of domestic livestock.',
          keyPoints: [
            'Cattle farming: Draught breeds (labour) and Dairy breeds (milk production). Lactation period increased by cross-breeding exotic (Jersey) with local (Red Sindhi).',
            'Composite Fish Culture: Combination of 5-6 fish species in single pond utilizing different feeding niches: Surface feeders (Catla), Column feeders (Rohu), Bottom feeders (Mrigal, Common Carp). No food competition.'
          ]
        }
      ],
      mindmap: {
        center: 'Food Resources',
        branches: [
          {
            title: '1. Crop Nutrition',
            subtopics: ['16 essential nutrients', 'Macronutrients (NPK, Ca, Mg, S)', 'Manure (humus) vs Fertilizer (chemical)'],
            examTip: 'Macronutrients required in large quantities: Nitrogen, Phosphorus, Potassium.',
            color: 'emerald'
          },
          {
            title: '2. Cropping Patterns',
            subtopics: ['Mixed cropping (risk reduction)', 'Intercropping (row patterns)', 'Crop rotation (legumes replenish N)'],
            examTip: 'Intercropping uses alternating rows; mixed cropping mixes seeds together.',
            color: 'blue'
          },
          {
            title: '3. Animal Husbandry',
            subtopics: ['Dairy (Jersey × Sindhi)', 'Poultry (Broilers vs Layers)', 'Composite fish culture (Surface Catla, Column Rohu, Bottom Mrigal)', 'Apiculture (Italian bee Apis mellifera)'],
            examTip: 'Composite fish culture avoids food competition by occupying surface, middle, and bottom niches.',
            color: 'amber'
          }
        ]
      },
      solvedQuestions: [
        {
          question: 'What is composite fish culture? State one major advantage.',
          marks: '2 Marks',
          answer: 'Composite fish culture is a farming system where a combination of 5 or 6 selected fish species with different feeding habits are cultured together in a single pond. Advantage: Because each species feeds in a different zone (surface, middle column, or bottom), there is no competition for food, maximizing fish yield.',
          tip: 'Mention species combination and non-competing feeding zones.'
        }
      ]
    }
  ]
};
