import { Subject } from '../types';

export const CBSE_9_SUBJECTS: Subject[] = [
  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 9 CBSE SCIENCE (NEW SYLLABUS)
  // ==========================================
  {
    id: 'vvs-cbse9-science',
    code: 'CBSE-086-C9',
    name: 'Class 9 Science (Physics, Chemistry & Biology)',
    semesterOrGrade: 'Class 9 CBSE',
    creditsOrMarks: '80 Marks Annual + 20 Internal',
    gradeOrBranch: 'class9',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE New Rationalized Syllabus',
    category: 'CBSE Science Core',
    units: [
      {
        unitNumber: 1,
        title: 'Matter in Our Surroundings',
        keyTopics: [
          'Particulate nature of matter and characteristics of particles',
          'States of matter: Solid, Liquid, Gas (diffusion & compressibility)',
          'Change of state: Melting, Boiling, Latent Heat of Fusion & Vaporization',
          'Evaporation: Factors affecting evaporation and cooling effect in daily life'
        ],
        readingTime: '20 mins',
        verifiedBy: 'VVS Science Academic Council',
        verifiedRole: 'CBSE Master Faculty',
        pdfPages: 16,
        fileSize: '2.1 MB',
        rating: 4.96,
        upvotes: 680,
        videoDuration: '4m 10s',
        summaryTelugu: 'మన చుట్టూ ఉన్న పదార్థం: ఘన, ద్రవ, వాయు స్థితులు, గుప్త ఉష్ణం (Latent Heat) మరియు బాష్పీభవనం ద్వారా చల్లబడే సూత్రాలు.',
        summaryEnglish: 'Comprehensive NCERT rationalized notes: States of matter comparison, Latent Heat definitions, and why cotton clothes or earthen pots cool.',
        examWeightage: '6 Marks',
        formulaeCount: 4,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Particulate Nature of Matter',
            quickTake: 'Matter is made of tiny particles possessing kinetic energy with spaces and attraction between them.',
            keyPoints: [
              'Particles of matter have spaces between them (demonstrated by dissolving salt/sugar in water).',
              'Particles are continuously moving; kinetic energy increases with temperature.',
              'Diffusion is the spontaneous intermixing of particles of two different types on their own.'
            ],
            formulaOrEquation: 'Kinetic Energy ∝ Temperature (Kelvin)'
          },
          {
            topic: 'States of Matter & Phase Changes',
            quickTake: 'Solids have fixed volume and shape; liquids have fixed volume but not shape; gases have neither.',
            keyPoints: [
              'Compressibility: Gases > Liquids > Solids (LPG and CNG are stored under high pressure).',
              'Latent Heat of Fusion: Heat required to change 1 kg of solid into liquid at atmospheric pressure at melting point (3.34 × 10^5 J/kg for ice).',
              'Sublimation: Direct transition from solid to gas without entering liquid state (Camphor, Ammonium Chloride).'
            ],
            formulaOrEquation: 'T(K) = T(°C) + 273.15'
          },
          {
            topic: 'Evaporation & Daily Life Cooling',
            quickTake: 'Surface phenomenon where liquid turns into vapor at any temperature below its boiling point.',
            keyPoints: [
              'Rate of evaporation increases with: surface area, temperature, and wind speed; decreases with humidity.',
              'Cooling effect: Particles absorb latent heat of vaporization from surroundings, leaving the surface cold.',
              'Why we wear cotton clothes in summer: Cotton is good absorber of sweat, exposing it to air for fast evaporation.'
            ],
            formulaOrEquation: 'Rate of Evaporation ∝ (Surface Area × Temp × Wind) / Humidity'
          }
        ],
        mindmap: {
          center: 'Matter in Our Surroundings',
          branches: [
            {
              title: '1. Particle Properties',
              subtopics: ['Spaces between particles', 'Continuous motion & diffusion', 'Forces of attraction'],
              examTip: 'Define diffusion and state how temperature affects rate of diffusion.',
              color: 'blue'
            },
            {
              title: '2. States & Comparison',
              subtopics: ['Solids (Definite shape & volume)', 'Liquids (Fluidity)', 'Gases (High compressibility)'],
              examTip: 'Draw particle arrangement comparison diagram for full marks.',
              color: 'purple'
            },
            {
              title: '3. Latent Heat & Phase Transitions',
              subtopics: ['Melting point & Latent Heat of Fusion', 'Boiling point & Latent Heat of Vaporization', 'Sublimation & Deposition'],
              examTip: 'Temperature remains constant during phase change due to latent heat breaking intermolecular bonds.',
              color: 'emerald'
            },
            {
              title: '4. Evaporation & Cooling',
              subtopics: ['Surface vs Bulk phenomenon', '4 Factors affecting rate', 'Earthen pot cooling', 'Acetone on palm effect'],
              examTip: 'Boiling is a bulk phenomenon; evaporation is a surface phenomenon.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Is Matter Around Us Pure?',
        keyTopics: [
          'Mixtures: Homogeneous vs Heterogeneous (Solutions, Suspensions, Colloids)',
          'Concentration of solutions: Mass by mass percentage & mass by volume percentage',
          'Physical vs Chemical changes with laboratory tests',
          'Pure substances: Elements (Metals, Non-metals, Metalloids) and Compounds'
        ],
        readingTime: '22 mins',
        verifiedBy: 'S. Ramanujam (VVS Chemistry HOD)',
        verifiedRole: 'Senior Science Educator',
        pdfPages: 18,
        fileSize: '2.3 MB',
        rating: 4.95,
        upvotes: 590,
        videoDuration: '4m 30s',
        summaryTelugu: 'మన చుట్టూ ఉన్న పదార్థం స్వచ్ఛమైనదేనా?: ద్రావణాలు, కొల్లాయిడ్లు, టిండాల్ ప్రభావం మరియు మూలకాలు-సమ్మేళనాల మధ్య తేడాలు.',
        summaryEnglish: 'Clear tabular comparison of Solutions vs Colloids vs Suspensions, Tyndall Effect diagrams, and concentration numericals.',
        examWeightage: '6 Marks',
        formulaeCount: 3,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Solutions, Colloids & Suspensions',
            quickTake: 'Particle size governs stability, filterability, and light scattering (Tyndall effect).',
            keyPoints: [
              'True Solution: Particle size < 1 nm; homogeneous, stable, passes through filter paper, no Tyndall effect.',
              'Colloid: Particle size 1 nm - 1000 nm; heterogeneous, stable, shows Tyndall effect (Milk, fog, ink).',
              'Suspension: Particle size > 1000 nm; heterogeneous, unstable, settles on standing (Chalk water).'
            ],
            formulaOrEquation: 'Tyndall Effect = Scattering of visible light beam by colloidal particles'
          },
          {
            topic: 'Concentration of Solutions',
            quickTake: 'Quantitative measure of amount of solute dissolved in a given amount of solution.',
            keyPoints: [
              'Mass % = (Mass of Solute / Mass of Solution) × 100.',
              'Remember: Mass of Solution = Mass of Solute + Mass of Solvent!',
              'Mass by volume % = (Mass of Solute / Volume of Solution) × 100.'
            ],
            formulaOrEquation: 'Mass % = [Mass of solute / (Mass of solute + Mass of solvent)] × 100'
          },
          {
            topic: 'Elements vs Compounds',
            quickTake: 'Elements consist of only one type of atom; compounds consist of fixed ratio of different atoms bonded chemically.',
            keyPoints: [
              'Elements cannot be broken down by chemical reactions (e.g. Iron, Copper, Oxygen).',
              'Compounds have totally different properties from constituent elements (e.g. Water H2O extinguishes fire, while H2 is combustible and O2 supports combustion).'
            ],
            formulaOrEquation: 'Mixture (Variable ratio) vs Compound (Fixed chemical ratio by mass)'
          }
        ],
        mindmap: {
          center: 'Is Matter Pure?',
          branches: [
            {
              title: '1. Classification of Matter',
              subtopics: ['Pure substances (Elements & Compounds)', 'Impure substances (Mixtures)', 'Homogeneous vs Heterogeneous'],
              examTip: 'Alloys are homogeneous mixtures because components show their individual properties.',
              color: 'blue'
            },
            {
              title: '2. Types of Mixtures',
              subtopics: ['True Solution (Solute + Solvent)', 'Colloids (Dispersed phase + Dispersion medium)', 'Suspensions (Sedimentation)'],
              examTip: 'Tabular difference between Solution, Colloid, and Suspension is a frequent 3-mark question.',
              color: 'purple'
            },
            {
              title: '3. Tyndall Effect',
              subtopics: ['Light scattering mechanism', 'Sunlight through canopy of forest', 'Headlights in dense fog'],
              examTip: 'True solutions do not show Tyndall effect because particles are too tiny.',
              color: 'emerald'
            },
            {
              title: '4. Physical vs Chemical Change',
              subtopics: ['Reversible vs Irreversible', 'Formation of new substance', 'Rusting vs Melting of wax'],
              examTip: 'Burning of candle involves both physical (melting of wax) and chemical (combustion) changes.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Atoms and Molecules',
        keyTopics: [
          'Laws of Chemical Combination: Law of Conservation of Mass & Law of Definite Proportions',
          'Dalton\'s Atomic Theory postulates and limitations',
          'Atomic mass unit (amu or unified mass u) and writing chemical formulae using valency',
          'Molecular mass, formula unit mass, and polyatomic ions'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Olympiad Committee',
        verifiedRole: 'National Chemistry Mentor',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.98,
        upvotes: 750,
        videoDuration: '5m 00s',
        summaryTelugu: 'పరమాణువులు మరియు అణువులు: రసాయన సంయోగ నియమాలు, డాల్టన్ పరమాణు సిద్ధాంతం, రసాయన ఫార్ములాల రచన మరియు మోల్ కాన్సెప్ట్.',
        summaryEnglish: 'Criss-cross valency method for writing flawless chemical formulas and computing molecular weights.',
        examWeightage: '7 Marks',
        formulaeCount: 6,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Laws of Chemical Combination',
            quickTake: 'Lavoisier formulated mass conservation; Proust formulated definite constant proportions by mass.',
            keyPoints: [
              'Law of Definite Proportions: In a chemical substance, elements are always present in definite proportions by mass (In water, H:O is always 1:8 by mass).',
              'Dalton postulated atoms are indivisible particles that can neither be created nor destroyed.'
            ],
            formulaOrEquation: 'H2O: Mass ratio = 2(1) : 16 = 1 : 8'
          },
          {
            topic: 'Valency & Criss-Cross Method',
            quickTake: 'Combining capacity of an element determines how it forms molecules with other elements.',
            keyPoints: [
              'Write symbols with valencies underneath; cross the valencies to obtain subscripts.',
              'Aluminium Oxide: Al (Valency 3), O (Valency 2) -> Cross gives Al2O3.',
              'Calcium Hydroxide: Ca (Valency 2), OH (Valency 1) -> Ca(OH)2 (brackets mandatory for polyatomic ions).'
            ],
            formulaOrEquation: 'Al³⁺ + O²⁻ -> Al2O3; Ca²⁺ + OH⁻ -> Ca(OH)2'
          },
          {
            topic: 'Molecular Mass & Formula Unit Mass',
            quickTake: 'Sum of atomic masses of all atoms present in a molecule or ionic formula unit.',
            keyPoints: [
              'Molecular mass of H2SO4 = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 u.',
              'Formula unit mass is used for ionic compounds like NaCl = 23 + 35.5 = 58.5 u.'
            ],
            formulaOrEquation: 'Molecular Mass = Σ (Atomic Mass × Number of Atoms)'
          }
        ],
        mindmap: {
          center: 'Atoms & Molecules',
          branches: [
            {
              title: '1. Chemical Laws',
              subtopics: ['Conservation of Mass (Lavoisier)', 'Definite Proportions (Proust)', 'Dalton\'s atomic postulates'],
              examTip: 'State which postulate of Dalton explains the Law of Definite Proportions.',
              color: 'blue'
            },
            {
              title: '2. Atomic Mass',
              subtopics: ['Definition of 1 atomic mass unit (1/12th mass of C-12)', 'Unified mass symbol u', 'Gram atomic mass'],
              examTip: 'Carbon-12 isotope is the standard international reference.',
              color: 'purple'
            },
            {
              title: '3. Chemical Formulas',
              subtopics: ['Valency & Oxidation state', 'Monatomic vs Polyatomic ions (SO4²⁻, NO3⁻, NH4⁺)', 'Criss-cross method'],
              examTip: 'Always use parentheses for polyatomic ions when subscript is greater than 1: Ca(OH)2.',
              color: 'emerald'
            },
            {
              title: '4. Formula Mass Calculations',
              subtopics: ['Molecular mass (Covalent)', 'Formula unit mass (Ionic NaCl, CaCl2)', 'Numerical calculations'],
              examTip: 'State units clearly as \'u\' (unified mass).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 4,
        title: 'Structure of the Atom',
        keyTopics: [
          'Subatomic particles: Electron (J.J. Thomson), Proton (Goldstein), Neutron (Chadwick)',
          'Thomson\'s Plum Pudding and Rutherford\'s Alpha Particle Scattering Experiment',
          'Bohr\'s Model of the Atom (discrete energy levels & electronic configuration 2n²)',
          'Valency, Atomic number (Z), Mass number (A), Isotopes & Isobars'
        ],
        readingTime: '22 mins',
        verifiedBy: 'Dr. K. Srinivas (Senior Physicist)',
        verifiedRole: 'Visakha Valley Advisory Member',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.97,
        upvotes: 630,
        videoDuration: '4m 20s',
        summaryTelugu: 'పరమాణు నిర్మాణం: రూథర్‌ఫోర్డ్ ప్రయోగం, బోర్ పరమాణు నమూనా, ఎలక్ట్రాన్ విన్యాసం, ఐసోటోపులు మరియు ఐసోబార్లు.',
        summaryEnglish: 'Rutherford gold foil experiment observations, Bohr-Bury rule for electron distribution, and isotope applications.',
        examWeightage: '7 Marks',
        formulaeCount: 4,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Rutherford\'s Alpha Scattering Experiment',
            quickTake: 'Fast α-particles directed at thin gold foil revealed the compact positive nucleus and empty atomic space.',
            keyPoints: [
              'Observation: Most α-particles passed straight -> Most space inside atom is empty.',
              'Small deflection in some particles -> Positive charge is concentrated in a tiny central volume (nucleus).',
              '1 in 12,000 rebounded by 180° -> Entire mass and positive charge is concentrated in the dense nucleus.'
            ],
            formulaOrEquation: 'Radius of nucleus ~ 10^-15 m vs Radius of atom ~ 10^-10 m (10^5 times larger)'
          },
          {
            topic: 'Bohr\'s Model & Electron Distribution',
            quickTake: 'Electrons revolve in discrete orbits without radiating energy; max capacity given by 2n².',
            keyPoints: [
              'K shell (n=1): 2 electrons; L shell (n=2): 8; M shell (n=3): 18; N shell (n=4): 32.',
              'Octet rule: Maximum 8 electrons in outermost valence shell.',
              'Valency is number of electrons gained, lost, or shared to achieve stable octet.'
            ],
            formulaOrEquation: 'Max electrons in shell n = 2n²'
          },
          {
            topic: 'Isotopes vs Isobars',
            quickTake: 'Isotopes have same atomic number but different mass numbers; isobars have same mass number but different atomic numbers.',
            keyPoints: [
              'Isotopes of Hydrogen: Protium (¹H), Deuterium (²H), Tritium (³H).',
              'Applications: U-235 for nuclear fuel, Co-60 for cancer treatment, I-131 for goitre treatment.',
              'Isobars: Calcium (Z=20, A=40) and Argon (Z=18, A=40).'
            ],
            formulaOrEquation: 'Mass Number A = Protons (Z) + Neutrons (n)'
          }
        ],
        mindmap: {
          center: 'Structure of Atom',
          branches: [
            {
              title: '1. Discovery of Subatomic Particles',
              subtopics: ['Cathode rays (Electrons)', 'Canal rays (Protons)', 'Chadwick (Neutrons)', 'Charges & masses comparison'],
              examTip: 'Neutrons have no charge and mass approximately equal to proton.',
              color: 'blue'
            },
            {
              title: '2. Atomic Models',
              subtopics: ['Thomson (Watermelon model)', 'Rutherford (Gold foil scattering)', 'Rutherford model drawbacks', 'Bohr\'s discrete orbits'],
              examTip: 'Rutherford could not explain why accelerating electrons do not collapse into nucleus.',
              color: 'purple'
            },
            {
              title: '3. Electronic Configuration',
              subtopics: ['Bohr-Bury rules (2n²)', 'K, L, M, N shells', 'Valence electrons', 'Valency determination'],
              examTip: 'If valence electrons > 4, Valency = 8 - (valence electrons).',
              color: 'emerald'
            },
            {
              title: '4. Nuclei, Isotopes & Isobars',
              subtopics: ['Atomic number Z', 'Mass number A', 'Isotopes (Chemical similarity)', 'Medical & industrial applications'],
              examTip: 'Isotopes have identical chemical properties because they have the same number of valence electrons.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 5,
        title: 'The Fundamental Unit of Life (Cell)',
        keyTopics: [
          'Cell discovery (Robert Hooke, Leeuwenhoek) and Cell Theory (Schleiden, Schwann, Virchow)',
          'Prokaryotic vs Eukaryotic cells structure and comparative analysis',
          'Plasma membrane, Osmosis (Hypertonic, Hypotonic, Isotonic solutions), and Cell Wall',
          'Organelles: ER, Golgi Apparatus, Lysosomes, Mitochondria, Plastids, Vacuoles'
        ],
        readingTime: '25 mins',
        verifiedBy: 'VVS Biology Faculty',
        verifiedRole: 'CBSE State Evaluator',
        pdfPages: 22,
        fileSize: '3.0 MB',
        rating: 4.96,
        upvotes: 820,
        videoDuration: '4m 45s',
        summaryTelugu: 'జీవ ప్రాథమిక ప్రమాణం (కణం): ప్లాస్మా పొర, ఆస్మాసిస్, మైటోకాండ్రియా (శక్తి కేంద్రాలు) మరియు లైసోజోములు.',
        summaryEnglish: 'Endomembrane system, ATP synthesis in mitochondria, suicide bags (lysosomes), and osmosis in plant/animal cells.',
        examWeightage: '8 Marks',
        formulaeCount: 2,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Plasma Membrane & Osmosis',
            quickTake: 'Selectively permeable phospholipid bilayer regulating substance movement via diffusion and osmosis.',
            keyPoints: [
              'Hypotonic solution: Water enters cell -> Cell swells and may burst (animal cell) or become turgid (plant cell with cell wall).',
              'Hypertonic solution: Water leaves cell -> Cell shrinks (Plasmolysis in plant cells).',
              'Isotonic solution: No net movement; cell remains same size.'
            ],
            formulaOrEquation: 'Osmosis = Net diffusion of water across selectively permeable membrane from high to low water potential'
          },
          {
            topic: 'Powerhouses & Suicide Bags of Cell',
            quickTake: 'Mitochondria generate cellular energy currency (ATP); lysosomes digest cellular debris.',
            keyPoints: [
              'Mitochondria have double membranes; deeply folded inner membrane increases surface area for ATP production.',
              'Mitochondria and Plastids are semi-autonomous: they have their own DNA and 70S ribosomes.',
              'Lysosomes contain powerful digestive hydrolytic enzymes; burst during cellular breakdown ("suicide bags").'
            ],
            formulaOrEquation: 'ATP = Adenosine Triphosphate (Energy currency of the cell)'
          },
          {
            topic: 'Plant Cells vs Animal Cells',
            quickTake: 'Plant cells possess rigid cellulose cell walls, large central vacuoles, and chloroplasts.',
            keyPoints: [
              'Cell wall prevents plant cells from bursting in dilute hypotonic external media.',
              'Centrioles are present only in animal cells for cell division.',
              'Plastids: Chloroplasts (Photosynthesis), Chromoplasts (Colors in flowers/fruits), Leucoplasts (Storage of starch/oils).'
            ],
            formulaOrEquation: 'Plant Cell: Cell Wall + Plastids + Large Vacuole (vs Animal Cell)'
          }
        ],
        mindmap: {
          center: 'Cell: Fundamental Unit',
          branches: [
            {
              title: '1. Cell Discovery & Theory',
              subtopics: ['Robert Hooke (Cork cells 1665)', 'Leeuwenhoek (Free living cells)', 'Schleiden & Schwann', 'Virchow (Omnis cellula-e-cellula)'],
              examTip: 'Omnis cellula-e-cellula means all cells arise from pre-existing cells.',
              color: 'blue'
            },
            {
              title: '2. Membrane Transport',
              subtopics: ['Diffusion vs Osmosis', 'Hypotonic (Endosmosis)', 'Hypertonic (Exosmosis/Plasmolysis)', 'Endocytosis in Amoeba'],
              examTip: 'Raisins swell in water (hypotonic) and shrink in concentrated salt solution (hypertonic).',
              color: 'purple'
            },
            {
              title: '3. Cell Organelles',
              subtopics: ['Nucleus (Chromatin & Genes)', 'Endoplasmic Reticulum (RER & SER)', 'Golgi apparatus (Packaging)', 'Lysosomes (Suicide bags)'],
              examTip: 'SER manufactures lipids/fats and detoxifies poisons and drugs in liver cells.',
              color: 'emerald'
            },
            {
              title: '4. Energy & Autonomy',
              subtopics: ['Mitochondria (Double membrane, ATP)', 'Plastids (Chloroplast, Chromoplast, Leucoplast)', 'Vacuoles & Turgidity'],
              examTip: 'Mitochondria and Plastids possess their own DNA and ribosomes.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 6,
        title: 'Motion',
        keyTopics: [
          'Distance vs Displacement, Speed, Velocity, and Uniform vs Non-Uniform Motion',
          'Acceleration (a = (v - u) / t) and Distance-Time & Velocity-Time Graphs',
          'Derivation of Equations of Motion: v = u + at, s = ut + ½at², v² - u² = 2as',
          'Uniform Circular Motion (v = 2πr / t) and centripetal acceleration'
        ],
        readingTime: '26 mins',
        verifiedBy: 'M. Krishna Murthy (VVS Physics Faculty)',
        verifiedRole: 'Regional Science Olympiad Lead',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 890,
        videoDuration: '5m 15s',
        summaryTelugu: 'చలనం: దూరం, స్థానభ్రంశం, వేగం, త్వరణం, చలన సమీకరణాల డెరివేషన్లు మరియు వృత్తాకార చలనం.',
        summaryEnglish: 'Graphical derivations of the 3 equations of motion and velocity-time graph area calculations.',
        examWeightage: '8 Marks in CBSE Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Distance vs Displacement & Velocity',
            quickTake: 'Distance is total scalar path; displacement is the shortest vector distance between initial and final points.',
            keyPoints: [
              'Displacement can be zero (e.g. Completing a full circular track), but distance is never zero for moving body.',
              'Speed = Distance / Time (Scalar); Velocity = Displacement / Time (Vector).',
              'Average speed = Total distance / Total time; Average velocity = (u + v) / 2 for uniform acceleration.'
            ],
            formulaOrEquation: 'v_avg = Total Distance / Total Time; a = (v - u) / t'
          },
          {
            topic: 'Velocity-Time Graphs & Motion Equations',
            quickTake: 'Slope of v-t graph gives acceleration; area under v-t graph gives displacement.',
            keyPoints: [
              'Equation 1: v = u + at (Velocity-time relation).',
              'Equation 2: s = ut + ½at² (Position-time relation).',
              'Equation 3: v² - u² = 2as (Position-velocity relation).'
            ],
            formulaOrEquation: 'v = u + at; s = ut + ½at²; v² = u² + 2as'
          },
          {
            topic: 'Uniform Circular Motion',
            quickTake: 'Motion along circular path at constant speed; velocity constantly changes due to changing direction (accelerated motion).',
            keyPoints: [
              'Speed v = 2πr / t.',
              'Even though speed is constant, acceleration is non-zero because direction of motion changes continuously.',
              'Direction of velocity at any point is along the tangent to the circle.'
            ],
            formulaOrEquation: 'v = (2 · π · r) / t'
          }
        ],
        mindmap: {
          center: 'Motion',
          branches: [
            {
              title: '1. Fundamentals',
              subtopics: ['Scalar vs Vector', 'Distance vs Displacement', 'Speed vs Velocity', 'Uniform vs Non-uniform'],
              examTip: 'Displacement can be zero, positive, or negative; distance is always positive.',
              color: 'blue'
            },
            {
              title: '2. Acceleration & Graphs',
              subtopics: ['Acceleration a = (v-u)/t', 's-t graph (Slope = Speed)', 'v-t graph (Slope = Acceleration)', 'Area under v-t graph = Distance'],
              examTip: 'The area under the velocity-time graph represents displacement.',
              color: 'purple'
            },
            {
              title: '3. Equations of Motion',
              subtopics: ['v = u + at', 's = ut + ½at²', 'v² - u² = 2as', 'Graphical derivation of all three'],
              examTip: 'CBSE regularly asks for 5-mark graphical derivation of s = ut + ½at².',
              color: 'emerald'
            },
            {
              title: '4. Circular Motion',
              subtopics: ['Constant speed with changing direction', 'Formula v = 2πr/t', 'Accelerated circular motion examples'],
              examTip: 'State why uniform circular motion is called accelerated motion.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 7,
        title: 'Force and Laws of Motion',
        keyTopics: [
          'Balanced and Unbalanced Forces and Galileo\'s Inclined Plane Experiment',
          'Newton\'s First Law of Motion: Inertia and Mass (Inertia of rest, motion, and direction)',
          'Newton\'s Second Law: Momentum (p = mv) and F = ma derivation',
          'Newton\'s Third Law: Action-Reaction pairs and Conservation of Momentum'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Physics Department',
        verifiedRole: 'Visakha Valley CBSE Senior Faculty',
        pdfPages: 20,
        fileSize: '2.8 MB',
        rating: 4.98,
        upvotes: 910,
        videoDuration: '4m 50s',
        summaryTelugu: 'బలం మరియు చలన నియమాలు: జడత్వం, న్యూటన్ మూడు నియమాలు, F = ma డెరివేషన్ మరియు ద్రవ్యవేగ పరిరక్షణ సూత్రం.',
        summaryEnglish: 'Derivation of F = ma from rate of change of momentum, recoil of gun numericals, and daily life inertia examples.',
        examWeightage: '8 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Inertia & Newton\'s First Law',
            quickTake: 'An object remains in state of rest or uniform motion unless acted upon by unbalanced external force.',
            keyPoints: [
              'Inertia of Rest: Passengers fall backwards when bus starts suddenly.',
              'Inertia of Motion: Passengers jerk forward when brakes are applied suddenly.',
              'Mass is the quantitative measure of inertia (heavier object has greater inertia).'
            ],
            formulaOrEquation: 'Inertia ∝ Mass (kg)'
          },
          {
            topic: 'Momentum & Newton\'s Second Law',
            quickTake: 'Rate of change of momentum is proportional to applied force and takes place in direction of force.',
            keyPoints: [
              'Momentum p = m · v; SI unit is kg·m/s.',
              'F = dp/dt = m(v - u)/t = m · a.',
              'Why a cricket fielder pulls his hands backward: Increases time t, decreasing impact force F.'
            ],
            formulaOrEquation: 'p = m · v; F = m · a'
          },
          {
            topic: 'Newton\'s Third Law & Recoil',
            quickTake: 'To every action there is always an equal and opposite reaction acting on two different bodies.',
            keyPoints: [
              'Action and reaction act on DIFFERENT bodies simultaneously, hence they never cancel each other out.',
              'Recoil of gun: V_gun = -(m_bullet × v_bullet) / M_gun.',
              'Conservation of linear momentum: Total momentum before collision = Total momentum after collision.'
            ],
            formulaOrEquation: 'm1·u1 + m2·u2 = m1·v1 + m2·v2'
          }
        ],
        mindmap: {
          center: 'Force & Laws of Motion',
          branches: [
            {
              title: '1. Balanced Forces & Inertia',
              subtopics: ['Balanced (Net F = 0)', 'Unbalanced (Produces acceleration)', 'Galileo\'s experiment', '3 Types of Inertia'],
              examTip: 'Balanced forces change shape/size but cannot change state of motion.',
              color: 'blue'
            },
            {
              title: '2. Newton\'s 2nd Law (F = ma)',
              subtopics: ['Linear Momentum p = mv', 'F ∝ (p2 - p1)/t', 'Derivation of F = ma', 'SI Unit Newton (1 N = 1 kg·m/s²)'],
              examTip: 'Show step-by-step derivation: F ∝ m(v-u)/t => F = k·ma (k=1).',
              color: 'purple'
            },
            {
              title: '3. Applications of 2nd Law',
              subtopics: ['Cricket fielder catching ball', 'Seatbelts in cars', 'High jump cushions / sand beds'],
              examTip: 'Explain using impulse: Increasing impact time reduces force.',
              color: 'emerald'
            },
            {
              title: '4. Action-Reaction & Momentum',
              subtopics: ['Newton\'s 3rd Law', 'Walking, swimming, rocket propulsion', 'Recoil of gun formula', 'Conservation of Momentum'],
              examTip: 'Action and reaction forces act on different bodies simultaneously.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 8,
        title: 'Gravitation',
        keyTopics: [
          'Universal Law of Gravitation (F = G m1 m2 / d²) and its importance',
          'Free fall, acceleration due to gravity (g = GM / R²), and variation of g with altitude/depth',
          'Mass vs Weight (Weight on Moon = 1/6th of Weight on Earth)',
          'Thrust, Pressure (P = F / A), Archimedes\' Principle, and Relative Density'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Physics Team',
        verifiedRole: 'Visakha Valley CBSE Faculty',
        pdfPages: 20,
        fileSize: '2.6 MB',
        rating: 4.96,
        upvotes: 790,
        videoDuration: '4m 40s',
        summaryTelugu: 'గురుత్వాకర్షణ: విశ్వ గురుత్వాకర్షణ నియమం, గురుత్వ త్వరణం (g = 9.8 m/s²), ద్రవ్యరాశి vs బరువు మరియు ఆర్కిమెడిస్ సూత్రం.',
        summaryEnglish: 'Universal law derivation, numericals on free fall, and Archimedes\' principle floatation rules.',
        examWeightage: '8 Marks',
        formulaeCount: 6,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Universal Law of Gravitation',
            quickTake: 'Every particle in universe attracts every other particle with force proportional to product of masses and inversely proportional to square of distance.',
            keyPoints: [
              'F = G · (m1 · m2) / d².',
              'G is Universal Gravitational Constant: G = 6.67 × 10^-11 N·m²/kg² (discovered by Henry Cavendish).',
              'Inverse square law: If distance between two bodies is doubled, gravitational force becomes 1/4th.'
            ],
            formulaOrEquation: 'F = G · (m1 · m2) / d²; G = 6.673 × 10^-11 N·m²/kg²'
          },
          {
            topic: 'Acceleration due to Gravity (g) vs Mass & Weight',
            quickTake: 'g on Earth surface is 9.8 m/s²; mass is constant quantity of matter while weight is gravitational force.',
            keyPoints: [
              'g = G · M / R² (Independent of mass of falling body!).',
              'Mass (kg) is scalar and constant everywhere in the universe.',
              'Weight W = m · g (Newton); Weight on Moon = 1/6 × Weight on Earth (because g_moon = 1/6 g_earth).'
            ],
            formulaOrEquation: 'g = G·M / R² = 9.8 m/s²; W_moon = 1/6 · W_earth'
          },
          {
            topic: 'Thrust, Pressure & Archimedes\' Principle',
            quickTake: 'Pressure is force per unit area; buoyant force equals weight of displaced fluid.',
            keyPoints: [
              'Pressure P = Thrust / Area; Unit is Pascal (1 Pa = 1 N/m²). Sharp knife cuts better because small area creates huge pressure.',
              'Archimedes\' Principle: Upward buoyant force = Weight of fluid displaced by submerged body.',
              'An object floats if density of object < density of fluid; sinks if density of object > density of fluid.'
            ],
            formulaOrEquation: 'P = F / A; Buoyant Force F_b = V_displaced · ρ_fluid · g'
          }
        ],
        mindmap: {
          center: 'Gravitation',
          branches: [
            {
              title: '1. Universal Gravitation',
              subtopics: ['Newton\'s Law formula', 'Gravitational Constant G value & units', 'Inverse square law', 'Tides and planetary orbits'],
              examTip: 'Distinguish between G (Universal constant) and g (acceleration due to gravity).',
              color: 'blue'
            },
            {
              title: '2. Free Fall & Equations',
              subtopics: ['Free fall definition', 'Value of g = 9.8 m/s²', 'Equations under gravity (v = u + gt, h = ut + ½gt²)', 'Free fall independent of mass'],
              examTip: 'When throwing body vertically upward, set v = 0 at peak height and use g = -9.8 m/s².',
              color: 'purple'
            },
            {
              title: '3. Mass vs Weight',
              subtopics: ['Mass (Constant scalar)', 'Weight W = mg (Variable vector)', 'Spring balance vs Beam balance', 'Weight on Moon (1/6th)'],
              examTip: 'A body of mass 60 kg on Earth still has mass 60 kg on Moon, but its weight is 100 N.',
              color: 'emerald'
            },
            {
              title: '4. Buoyancy & Density',
              subtopics: ['Thrust & Pressure (Pascal)', 'Buoyant force / Upthrust', 'Archimedes\' Principle applications', 'Lactometer & Hydrometer'],
              examTip: 'An iron nail sinks because its density is greater than water, while an iron ship floats due to hollow shape displacing water equal to its weight.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 9,
        title: 'Work and Energy',
        keyTopics: [
          'Scientific concept of Work (W = F · s · cos θ) and positive, negative, zero work',
          'Kinetic Energy (Ek = ½ m v²) derivation and Potential Energy (Ep = m g h)',
          'Law of Conservation of Energy and free fall transformation',
          'Rate of doing work - Power (P = W / t) and Commercial unit (1 kWh = 3.6 × 10^6 J)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Physics HOD',
        verifiedRole: 'Visakha Valley Science Faculty',
        pdfPages: 18,
        fileSize: '2.5 MB',
        rating: 4.97,
        upvotes: 840,
        videoDuration: '4m 30s',
        summaryTelugu: 'పని మరియు శక్తి: పని సూత్రం (W = F · s), గతిశక్తి (½mv²), స్థితిశక్తి (mgh), శక్తి నిత్యత్వ నియమం మరియు విద్యుత్ శక్తి యూనిట్లు.',
        summaryEnglish: 'Derivation of kinetic energy, zero work scenarios (porter carrying luggage), and power calculations in Watts.',
        examWeightage: '8 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Scientific Concept of Work',
            quickTake: 'Work is done when force produces displacement in the direction of force.',
            keyPoints: [
              'W = F · s; SI unit is Joule (1 J = 1 N × 1 m).',
              'Positive work: Force and displacement in same direction (θ = 0°).',
              'Negative work: Force opposes displacement, e.g. Friction (θ = 180°).',
              'Zero work: Displacement is zero, or force is perpendicular to displacement (θ = 90°, e.g. Porter carrying load horizontally on head).'
            ],
            formulaOrEquation: 'W = F · s · cos(θ)'
          },
          {
            topic: 'Kinetic Energy & Potential Energy',
            quickTake: 'Kinetic energy is energy of motion; gravitational potential energy is energy stored due to height.',
            keyPoints: [
              'Kinetic Energy: Ek = ½ m v² (Derivation using v² - u² = 2as and W = F·s).',
              'Potential Energy: Ep = m · g · h (Work done against gravity to raise mass m to height h).',
              'Work-Energy Theorem: Net work done on a body equals change in its kinetic energy.'
            ],
            formulaOrEquation: 'Ek = ½ · m · v²; Ep = m · g · h'
          },
          {
            topic: 'Conservation of Energy & Power',
            quickTake: 'Energy cannot be created or destroyed; Power is the rate of doing work or consuming energy.',
            keyPoints: [
              'Law of Conservation of Energy: Ek + Ep = Constant during free fall.',
              'Power P = Work / Time = Energy / Time; SI unit is Watt (1 W = 1 J/s).',
              'Commercial unit of energy: 1 kWh = 1000 W × 3600 s = 3.6 × 10^6 Joules.'
            ],
            formulaOrEquation: 'P = W / t = E / t; 1 kWh = 3.6 × 10^6 J'
          }
        ],
        mindmap: {
          center: 'Work & Energy',
          branches: [
            {
              title: '1. Work Definition & Signs',
              subtopics: ['Condition for work (Force & Displacement)', 'SI Unit Joule', 'Positive, Negative & Zero work cases'],
              examTip: 'Work done by gravitational force on satellite in circular orbit is zero because force is perpendicular to motion.',
              color: 'blue'
            },
            {
              title: '2. Kinetic Energy',
              subtopics: ['Energy of motion definition', 'Derivation Ek = ½mv²', 'Work-Energy Theorem', 'Velocity doubled -> Ek quadruples'],
              examTip: 'Remember: Ek depends on square of speed; doubling speed increases Ek by 4 times.',
              color: 'purple'
            },
            {
              title: '3. Potential Energy & Conservation',
              subtopics: ['Gravitational PE (Ep = mgh)', 'Elastic PE in stretched bow', 'Mechanical energy conservation (Ek + Ep = const)', 'Pendulum oscillation'],
              examTip: 'Prove that total mechanical energy remains constant at top, middle, and bottom of free fall.',
              color: 'emerald'
            },
            {
              title: '4. Power & Commercial Energy',
              subtopics: ['Power P = W/t (Watt)', 'Horsepower (1 HP = 746 W)', 'Commercial unit kWh', 'Electricity bill calculation'],
              examTip: 'Always convert Power to kW and time to hours when calculating electrical units consumed.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 10,
        title: 'Sound',
        keyTopics: [
          'Production and propagation of sound through material medium as longitudinal mechanical wave',
          'Characteristics of sound wave: Wavelength (λ), Frequency (ν), Amplitude, Time Period (T), and Speed (v = ν · λ)',
          'Speed of sound in different media (Solids > Liquids > Gases)',
          'Reflection of sound: Laws of reflection, Echo calculation (minimum distance 17.2 m), Reverberation, Ultrasound & SONAR'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Physics Department',
        verifiedRole: 'Visakha Valley CBSE Senior Faculty',
        pdfPages: 20,
        fileSize: '2.7 MB',
        rating: 4.96,
        upvotes: 810,
        videoDuration: '4m 45s',
        summaryTelugu: 'ధ్వని: ధ్వని ఉత్పత్తి, అనుదైర్ఘ్య తరంగాలు, ప్రతిధ్వని (Echo - కనీస దూరం 17.2 మీటర్లు), అల్ట్రాసౌండ్ మరియు సోనార్ (SONAR) అనువర్తనాలు.',
        summaryEnglish: 'Comprehensive guide to sound wave characteristics, echo distance derivation, and ultrasound in medicine and industry.',
        examWeightage: '7 Marks',
        formulaeCount: 5,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Sound Wave Characteristics',
            quickTake: 'Sound is a mechanical longitudinal wave composed of compressions and rarefactions.',
            keyPoints: [
              'Frequency (ν): Number of oscillations per second (Hertz, Hz). Determines Pitch.',
              'Amplitude: Magnitude of maximum displacement from mean position. Determines Loudness (∝ Amplitude²).',
              'Speed of sound: v = Frequency (ν) × Wavelength (λ). Sound requires material medium; cannot travel in vacuum.'
            ],
            formulaOrEquation: 'v = ν · λ; T = 1 / ν'
          },
          {
            topic: 'Reflection of Sound & Echo',
            quickTake: 'Echo is repetition of sound caused by reflection from a distant obstacle.',
            keyPoints: [
              'Persistence of hearing in human ear is 0.1 second (1/10 s).',
              'Minimum distance to hear distinct echo in air at 22°C: d = (v × t) / 2 = (344 × 0.1) / 2 = 17.2 meters.',
              'Reverberation: Persistence of sound due to repeated reflections; reduced using sound-absorbing materials (acoustic curtains, compressed fiberboard).'
            ],
            formulaOrEquation: '2d = v · t -> d_min = (v × 0.1) / 2 = 17.2 m'
          },
          {
            topic: 'Ultrasound & SONAR',
            quickTake: 'High frequency sounds (> 20,000 Hz) used for medical imaging, crack detection, and depth sounding.',
            keyPoints: [
              'Audible range of human hearing: 20 Hz to 20,000 Hz.',
              'Infrasonic: < 20 Hz (Whales, elephants, earthquakes); Ultrasonic: > 20 kHz (Bats, dolphins, ultrasound scanning).',
              'SONAR (Sound Navigation and Ranging): 2d = v × t (Measures ocean depth and detects underwater submarines/icebergs).'
            ],
            formulaOrEquation: 'SONAR depth d = (v · t) / 2'
          }
        ],
        mindmap: {
          center: 'Sound',
          branches: [
            {
              title: '1. Wave Nature & Propagation',
              subtopics: ['Vibrating objects produce sound', 'Longitudinal wave (Compressions & Rarefactions)', 'Medium requirement (Bell jar experiment)', 'Speed: Solids > Liquids > Gases'],
              examTip: 'Bell jar experiment proves sound cannot travel through vacuum.',
              color: 'blue'
            },
            {
              title: '2. Characteristics',
              subtopics: ['Wavelength λ', 'Frequency ν (Pitch)', 'Amplitude (Loudness ∝ A²)', 'Wave equation v = νλ'],
              examTip: 'Loudness depends on amplitude; pitch depends on frequency.',
              color: 'purple'
            },
            {
              title: '3. Reflection & Echo',
              subtopics: ['Laws of reflection of sound', 'Echo calculation (17.2m)', 'Reverberation in concert halls', 'Megaphone & Stethoscope design'],
              examTip: 'Remember to multiply distance by 2 (2d = vt) in echo numericals because sound travels to barrier and back.',
              color: 'emerald'
            },
            {
              title: '4. Ultrasound & Applications',
              subtopics: ['Audible range (20 Hz - 20 kHz)', 'Echocardiography & Ultrasonography', 'Flaw detection in metal blocks', 'SONAR depth sounding'],
              examTip: 'State 3 applications of ultrasound in medicine and industry.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 11,
        title: 'Improvement in Food Resources',
        keyTopics: [
          'Crop variety improvement: Hybridization, GM crops, high yield and disease resistance',
          'Crop production management: Nutrient management (Macro vs Micro nutrients, Manures vs Fertilizers)',
          'Irrigation systems, Cropping patterns (Mixed, Inter-cropping, Crop rotation)',
          'Crop protection management and Animal Husbandry (Cattle, Poultry, Fish farming, Apiculture)'
        ],
        readingTime: '20 mins',
        verifiedBy: 'VVS Biology Faculty',
        verifiedRole: 'Visakha Valley CBSE Senior Faculty',
        pdfPages: 16,
        fileSize: '2.2 MB',
        rating: 4.93,
        upvotes: 620,
        videoDuration: '4m 00s',
        summaryTelugu: 'ఆహార వనరులలో మెరుగుదల: పంట రకాల అభివృద్ధి, ఎరువులు మరియు సేంద్రియ ఎరువులు, పంట మార్పిడి, మరియు పశుపోషణ, తేనెటీగల పెంపకం.',
        summaryEnglish: 'Complete agronomy guide: Manures vs Chemical fertilizers table, mixed vs intercropping differences, and animal husbandry practices.',
        examWeightage: '6 Marks',
        formulaeCount: 1,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Nutrient Management & Fertilizers',
            quickTake: 'Plants require 16 essential nutrients; 13 obtained from soil (6 macronutrients + 7 micronutrients).',
            keyPoints: [
              'Macronutrients (large amounts): Nitrogen (N), Phosphorus (P), Potassium (K), Calcium, Magnesium, Sulphur.',
              'Manures: Organic, enrich soil with humus, improve water-holding capacity, eco-friendly.',
              'Fertilizers: Inorganic salts, high NPK concentration, fast action, but excessive use leads to soil acidity/salinity and water pollution (eutrophication).'
            ],
            formulaOrEquation: '16 Essential Nutrients: Air (C, O) + Water (H) + Soil (6 Macro + 7 Micro)'
          },
          {
            topic: 'Cropping Patterns',
            quickTake: 'Optimizes soil nutrient utilization and minimizes pest risks.',
            keyPoints: [
              'Mixed Cropping: Growing two or more crops simultaneously on same field (e.g. Wheat + Gram) without fixed row pattern.',
              'Inter-cropping: Growing two or more crops simultaneously in definite alternate row pattern (e.g. Soyabean + Maize).',
              'Crop Rotation: Growing different crops sequentially on pre-planned basis (Legumes replenish soil nitrogen).'
            ],
            formulaOrEquation: 'Leguminous crop rotation -> Natural Nitrogen Fixation'
          },
          {
            topic: 'Animal Husbandry & Apiculture',
            quickTake: 'Scientific management of animal livestock: cattle farming, poultry, fisheries, and beekeeping.',
            keyPoints: [
              'Cattle breeds: Bos indicus (Cow), Bos bubalis (Buffalo). Dairy cattle need roughage and concentrates.',
              'Composite Fish Culture: Combination of 5-6 fish species in single pond utilizing different ecological zones (Catla = surface, Rohu = middle, Mrigal & Common Carp = bottom).',
              'Apiculture: Apis cerana indica (Indian bee), Apis mellifera (Italian bee with high honey collection capacity).'
            ],
            formulaOrEquation: 'Composite Fish Culture = Surface (Catla) + Middle (Rohu) + Bottom (Mrigal)'
          }
        ],
        mindmap: {
          center: 'Food Resources',
          branches: [
            {
              title: '1. Crop Variety Improvement',
              subtopics: ['Hybridization (Inter-varietal, Inter-specific)', 'Genetically modified crops', 'Biotic & Abiotic resistance', 'Agronomic traits (Dwarfness)'],
              examTip: 'Dwarfness is desirable in cereals so fewer nutrients are consumed in vegetative growth.',
              color: 'blue'
            },
            {
              title: '2. Nutrient & Water Management',
              subtopics: ['16 Essential plant nutrients', 'Manure types (Compost, Vermicompost, Green manure)', 'Fertilizers vs Manures comparison', 'Modern irrigation (Drip, Sprinkler)'],
              examTip: 'Tabular difference between fertilizers and manures is an exam staple.',
              color: 'purple'
            },
            {
              title: '3. Cropping Patterns',
              subtopics: ['Mixed cropping (Insurance against failure)', 'Intercropping (Row pattern)', 'Crop rotation with legumes'],
              examTip: 'Intercropping prevents pests from spreading to all plants of one crop.',
              color: 'emerald'
            },
            {
              title: '4. Animal Husbandry',
              subtopics: ['Cattle farming (Roughage & Concentrate)', 'Poultry (Broilers vs Layers)', 'Composite fish culture (Feed zones)', 'Apiculture (Italian bee Apis mellifera)'],
              examTip: 'Explain how composite fish culture avoids competition for food between different species.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // VISAKHA VALLEY SCHOOL - CLASS 9 CBSE MATHEMATICS
  // ==========================================
  {
    id: 'vvs-cbse9-maths',
    code: 'CBSE-041-C9',
    name: 'Class 9 Mathematics',
    semesterOrGrade: 'Class 9 CBSE',
    creditsOrMarks: '80 Marks Annual + 20 Internal',
    gradeOrBranch: 'class9',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE New Rationalized Syllabus',
    category: 'CBSE Mathematics Core',
    units: [
      {
        unitNumber: 1,
        title: 'Number Systems',
        keyTopics: [
          'Irrational numbers representation on number line (√2, √3, √5 spiral)',
          'Real numbers and their decimal expansions (Terminating, Non-terminating repeating)',
          'Representing p/q form for repeating decimals (0.6̄, 0.23̄5)',
          'Operations on real numbers, rationalizing the denominator, and laws of exponents'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Mathematics Department',
        verifiedRole: 'Visakha Valley Senior Maths Lead',
        pdfPages: 18,
        fileSize: '2.3 MB',
        rating: 4.98,
        upvotes: 920,
        videoDuration: '4m 30s',
        summaryTelugu: 'సంఖ్యా వ్యవస్థలు: కరణీయ సంఖ్యలు, దశాంశ విస్తరణలు (p/q రూపం), హారం అకరణీయం చేయడం మరియు ఘాతాంక నియమాలు.',
        summaryEnglish: 'Step-by-step conversion of recurring decimals to p/q form and denominator rationalization techniques.',
        examWeightage: '8 Marks',
        formulaeCount: 6,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Decimal Expansions of Real Numbers',
            quickTake: 'Rational numbers are terminating or non-terminating recurring; irrational numbers are non-terminating non-recurring.',
            keyPoints: [
              'Terminating: Denominator has prime factorization of form 2^m · 5^n.',
              'Non-terminating recurring: e.g. 0.333... = 1/3, 0.4777... = 43/90.',
              'Irrational numbers: Non-terminating and non-repeating (e.g. π = 3.14159..., √2 = 1.4142...).'
            ],
            formulaOrEquation: 'x = 0.p̄ -> 10x - x = 9x = p -> x = p/9'
          },
          {
            topic: 'Rationalizing the Denominator',
            quickTake: 'Multiply numerator and denominator by conjugate surd to eliminate irrationality from denominator.',
            keyPoints: [
              'Conjugate of (a + √b) is (a - √b).',
              'Conjugate of (√a + √b) is (√a - √b).',
              'Denominator simplifies via identity (x + y)(x - y) = x² - y².'
            ],
            formulaOrEquation: '1 / (√a + √b) = (√a - √b) / (a - b)'
          },
          {
            topic: 'Laws of Exponents for Real Numbers',
            quickTake: 'Standard power rules apply to real base and rational exponents.',
            keyPoints: [
              'a^p · a^q = a^(p + q).',
              '(a^p)^q = a^(p · q).',
              'a^p / a^q = a^(p - q); (ab)^p = a^p · b^p; a^(-p) = 1 / a^p; a^0 = 1.'
            ],
            formulaOrEquation: 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ'
          }
        ],
        mindmap: {
          center: 'Number Systems',
          branches: [
            {
              title: '1. Real Number Tree',
              subtopics: ['Natural N, Whole W, Integers Z', 'Rational Q (p/q, q≠0)', 'Irrational (Non-terminating non-repeating)', 'Real numbers R = Q ∪ Irrationals'],
              examTip: 'Every real number is represented by a unique point on the number line.',
              color: 'blue'
            },
            {
              title: '2. Decimal Conversions',
              subtopics: ['Terminating decimals', 'Non-terminating recurring to p/q', 'Shortcuts for 0.ā and 0.ab̄'],
              examTip: 'Expressing 0.235̄ in p/q form is a 3-mark board favorite.',
              color: 'purple'
            },
            {
              title: '3. Operations & Rationalization',
              subtopics: ['Addition/Multiplication of surds', 'Conjugate pairs', 'Rationalizing 1/(√a ± √b)', 'Algebraic identities with surds'],
              examTip: 'Use (√a + √b)(√a - √b) = a - b for zero error in denominator.',
              color: 'emerald'
            },
            {
              title: '4. Exponents & Roots',
              subtopics: ['Fractional exponents a^(m/n)', 'Laws of exponents', 'Simplification numericals', 'Radical notation'],
              examTip: 'Remember: Negative power inverts base: (a/b)^(-n) = (b/a)^n.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Polynomials',
        keyTopics: [
          'Polynomials in one variable: Degree, coefficients, monomial, binomial, trinomial',
          'Zeroes of a polynomial and geometrical interpretation',
          'Factor Theorem: (x - a) is a factor of p(x) if p(a) = 0',
          'Algebraic Identities: (x+y+z)², (x±y)³, x³+y³+z³ - 3xyz, and cubic factorisation'
        ],
        readingTime: '24 mins',
        verifiedBy: 'VVS Maths Academic Panel',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 20,
        fileSize: '2.5 MB',
        rating: 4.97,
        upvotes: 870,
        videoDuration: '4m 50s',
        summaryTelugu: 'బహుపదులు: పరిమాణం, శూన్యాలు, కారణాంక సిద్ధాంతం (Factor Theorem) మరియు బీజగణిత సర్వసమీకరణాలు.',
        summaryEnglish: 'Mastering cubic factorisation by trial method and applying the condition x + y + z = 0 -> x³ + y³ + z³ = 3xyz.',
        examWeightage: '10 Marks',
        formulaeCount: 8,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Degree & Zeroes of Polynomial',
            quickTake: 'Degree is the highest exponent of the variable with non-zero coefficient.',
            keyPoints: [
              'Linear polynomial (Degree 1), Quadratic (Degree 2), Cubic (Degree 3).',
              'A zero of polynomial p(x) is a real number c such that p(c) = 0.',
              'A polynomial of degree n can have at most n real zeroes.'
            ],
            formulaOrEquation: 'p(x) = an·xⁿ + an-1·xⁿ⁻¹ + ... + a0'
          },
          {
            topic: 'Factor Theorem & Cubic Factorisation',
            quickTake: '(x - a) is a factor of p(x) if and only if p(a) = 0.',
            keyPoints: [
              'Step 1: Find one factor (x - a) using trial values of factors of constant term.',
              'Step 2: Divide p(x) by (x - a) using long division or synthetic division to get a quadratic quotient.',
              'Step 3: Factorise the quadratic quotient by splitting the middle term.'
            ],
            formulaOrEquation: 'p(x) = (x - a) · q(x) + p(a); if p(a) = 0, p(x) = (x - a)·q(x)'
          },
          {
            topic: 'Essential Algebraic Identities',
            quickTake: 'High-frequency identities for expansion and factoring in Class 9 exams.',
            keyPoints: [
              '(x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx.',
              '(x + y)³ = x³ + y³ + 3xy(x + y); (x - y)³ = x³ - y³ - 3xy(x - y).',
              'x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx).',
              'Special property: If x + y + z = 0, then x³ + y³ + z³ = 3xyz!'
            ],
            formulaOrEquation: 'If x + y + z = 0 -> x³ + y³ + z³ = 3xyz'
          }
        ],
        mindmap: {
          center: 'Polynomials',
          branches: [
            {
              title: '1. Types & Terms',
              subtopics: ['Degree of polynomial', 'Monomial, Binomial, Trinomial', 'Constant & Zero polynomial', 'Non-negative integer power condition'],
              examTip: 'Degree of zero polynomial is not defined; degree of non-zero constant polynomial is 0.',
              color: 'blue'
            },
            {
              title: '2. Zeroes & Evaluation',
              subtopics: ['Value of p(x) at x = k', 'Finding zeroes of linear polynomial', 'Verification of zeroes'],
              examTip: 'A non-zero constant polynomial has no zero.',
              color: 'purple'
            },
            {
              title: '3. Factor Theorem',
              subtopics: ['Statement & proof', 'Splitting middle term (ax²+bx+c)', 'Factorising cubic polynomial by trial method'],
              examTip: 'For cubic factorisation: test ±1, ±2 to find the first factor (x - a).',
              color: 'emerald'
            },
            {
              title: '4. Algebraic Identities',
              subtopics: ['(x+y+z)²', '(x±y)³ expansions', 'x³±y³ sum/diff cubes', 'x³+y³+z³=3xyz when x+y+z=0'],
              examTip: 'Without calculating cubes, evaluate (-12)³ + (7)³ + (5)³ using 3(-12)(7)(5).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Coordinate Geometry & Linear Equations',
        keyTopics: [
          'Cartesian plane: Coordinate axes (x-axis, y-axis), Origin (0,0), and 4 Quadrants',
          'Coordinates of a point: Abscissa (x) and Ordinate (y)',
          'Linear equation in two variables: Standard form ax + by + c = 0',
          'Solutions of linear equations (infinitely many) and plotting straight line graph'
        ],
        readingTime: '20 mins',
        verifiedBy: 'VVS Senior Mathematics Faculty',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 16,
        fileSize: '2.1 MB',
        rating: 4.95,
        upvotes: 780,
        videoDuration: '4m 10s',
        summaryTelugu: 'నిరూపక రేఖాగణితం మరియు రెండు చరరాశులలో రేఖీయ సమీకరణాలు: కార్టీసియన్ తలం, పాదాలు (Quadrants) మరియు ax + by + c = 0 గ్రాఫ్.',
        summaryEnglish: 'Quick quadrant sign table (+/-, -/-, etc.), finding linear equation solutions, and drawing straight line graphs.',
        examWeightage: '8 Marks',
        formulaeCount: 4,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Cartesian Coordinate Plane',
            quickTake: 'Two mutually perpendicular number lines intersecting at origin (0,0) divide plane into 4 quadrants.',
            keyPoints: [
              'Quadrant I: (+, +); Quadrant II: (-, +); Quadrant III: (-, -); Quadrant IV: (+, -).',
              'Abscissa is x-coordinate (perpendicular distance from y-axis).',
              'Ordinate is y-coordinate (perpendicular distance from x-axis).',
              'Points on x-axis have y = 0 (x, 0); points on y-axis have x = 0 (0, y).'
            ],
            formulaOrEquation: 'Origin = (0, 0); Any point = (Abscissa, Ordinate)'
          },
          {
            topic: 'Linear Equations in Two Variables',
            quickTake: 'Any equation that can be put in form ax + by + c = 0 with a, b not both zero.',
            keyPoints: [
              'A linear equation in two variables has infinitely many solutions.',
              'Each solution (x, y) corresponds to a point on the line representing the equation.',
              'Graph of ax + by + c = 0 is always a straight line.',
              'Equation of x-axis is y = 0; equation of y-axis is x = 0; line parallel to y-axis is x = a; parallel to x-axis is y = b.'
            ],
            formulaOrEquation: 'ax + by + c = 0; Graph is a straight line'
          }
        ],
        mindmap: {
          center: 'Coordinate & Linear Eq',
          branches: [
            {
              title: '1. Cartesian Plane',
              subtopics: ['Origin (0,0)', 'x-axis & y-axis', 'Abscissa vs Ordinate', '4 Quadrants sign conventions'],
              examTip: 'Distance of point P(x, y) from y-axis is |x|; from x-axis is |y|.',
              color: 'blue'
            },
            {
              title: '2. Point Plotting',
              subtopics: ['Locating points', 'Points on axes (x, 0) and (0, y)', 'Shapes formed by joining coordinates'],
              examTip: 'Sign of abscissa and ordinate reveals quadrant without plotting.',
              color: 'purple'
            },
            {
              title: '3. Linear Equation Standard Form',
              subtopics: ['ax + by + c = 0', 'Finding values of a, b, c', 'Infinitely many solutions', 'Finding 4 distinct solutions'],
              examTip: 'To find solutions quickly: set x = 0 to get y, and set y = 0 to get x.',
              color: 'emerald'
            },
            {
              title: '4. Straight Line Graphs',
              subtopics: ['Plotting points table', 'Lines parallel to axes (x = k, y = k)', 'Line passing through origin (y = mx)'],
              examTip: 'Every point on the line satisfies the equation, and vice versa.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 4,
        title: 'Lines and Angles & Triangles',
        keyTopics: [
          'Intersecting lines, vertically opposite angles, linear pair axiom',
          'Parallel lines and transversal: Alternate interior angles, corresponding angles',
          'Congruence of Triangles criteria: SAS, ASA, AAS, SSS, and RHS',
          'Isosceles triangle theorem: Angles opposite to equal sides are equal'
        ],
        readingTime: '26 mins',
        verifiedBy: 'VVS Geometry Lead',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 22,
        fileSize: '2.9 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'రేఖలు - కోణాలు మరియు త్రిభుజాలు: సమాంతర రేఖలు, తిర్యగ్రేఖ, త్రిభుజ సర్వసమానత్వ నియమాలు (SAS, ASA, AAS, SSS, RHS).',
        summaryEnglish: 'Rigorous geometric proofs: Vertically opposite angles theorem, transversal angle relations, and 5 triangle congruence criteria.',
        examWeightage: '12 Marks in CBSE Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 20,
        topicAtAGlance: [
          {
            topic: 'Linear Pair & Parallel Lines with Transversal',
            quickTake: 'Adjacent angles on a line sum to 180°; parallel lines create equal corresponding and alternate angles.',
            keyPoints: [
              'Linear Pair Axiom: Sum of two adjacent angles forming a straight line is 180°.',
              'Vertically opposite angles formed by intersecting lines are equal.',
              'Transversal intersecting parallel lines: Corresponding angles are equal; Alternate interior angles are equal; Consecutive interior angles sum to 180° (co-interior).'
            ],
            formulaOrEquation: 'Linear Pair = 180°; Co-interior angles sum = 180°'
          },
          {
            topic: 'Triangle Congruence Criteria',
            quickTake: 'Two triangles are congruent if all corresponding sides and corresponding angles are equal (CPCTC).',
            keyPoints: [
              'SAS: Two sides and the included angle.',
              'ASA: Two angles and the included side; AAS: Two angles and non-included side.',
              'SSS: Three corresponding sides equal.',
              'RHS: Right angle, Hypotenuse, and one Side equal.',
              'Note: AAA and SSA are NOT valid congruence criteria!'
            ],
            formulaOrEquation: 'ΔABC ≅ ΔPQR -> CPCTC (Corresponding Parts of Congruent Triangles are Congruent)'
          },
          {
            topic: 'Isosceles Triangle Properties',
            quickTake: 'Angles opposite to equal sides are equal, and sides opposite to equal angles are equal.',
            keyPoints: [
              'In ΔABC, if AB = AC, then ∠C = ∠B.',
              'Altitude to base of isosceles triangle bisects the base and vertical angle.',
              'In equilateral triangle, each interior angle is exactly 60°.'
            ],
            formulaOrEquation: 'AB = AC <=> ∠C = ∠B'
          }
        ],
        mindmap: {
          center: 'Lines, Angles & Triangles',
          branches: [
            {
              title: '1. Lines & Intersections',
              subtopics: ['Linear pair axiom', 'Vertically opposite angles theorem', 'Adjacent & Complementary/Supplementary'],
              examTip: 'Complementary angles sum to 90°; Supplementary angles sum to 180°.',
              color: 'blue'
            },
            {
              title: '2. Parallel Lines & Transversal',
              subtopics: ['Corresponding angles', 'Alternate interior/exterior angles', 'Consecutive interior angles sum 180°', 'Conditions for parallel lines'],
              examTip: 'Draw auxiliary parallel line through vertex in zig-zag angle problems.',
              color: 'purple'
            },
            {
              title: '3. Triangle Congruence',
              subtopics: ['SAS & ASA criteria', 'AAS & SSS criteria', 'RHS (Right angle-Hypotenuse-Side)', 'CPCTC application'],
              examTip: 'Angle MUST be strictly included between the two sides for SAS.',
              color: 'emerald'
            },
            {
              title: '4. Isosceles & Equilateral Theorems',
              subtopics: ['Angles opposite equal sides theorem', 'Converse theorem', 'Equilateral triangle angles 60°', 'Perpendicular bisector proof'],
              examTip: 'State Given, To Prove, Construction, and Proof stepwise for full 5 marks.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 5,
        title: 'Heron\'s Formula & Surface Areas',
        keyTopics: [
          'Heron\'s formula for area of triangle with semi-perimeter s = (a + b + c) / 2',
          'Area of scalene triangles, isosceles triangles, and equilateral triangles using Heron\'s formula',
          'Surface area of right circular cone (Curved surface area πrl and Total surface area πr(l + r))',
          'Surface area and volume of spheres (4πr²) and hemispheres (CSA 2πr², TSA 3πr², Volume ⅔πr³)'
        ],
        readingTime: '22 mins',
        verifiedBy: 'VVS Mensuration Faculty',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 18,
        fileSize: '2.4 MB',
        rating: 4.96,
        upvotes: 810,
        videoDuration: '4m 30s',
        summaryTelugu: 'హెరాన్స్ సూత్రం & ఉపరితల వైశాల్యాలు: త్రిభుజ వైశాల్యం √[s(s-a)(s-b)(s-c)], శంఖువు (Cone) మరియు గోళం (Sphere) వైశాల్యాలు-ఘనపరిమాణాలు.',
        summaryEnglish: 'Step-by-step application of Heron\'s formula and cone slant height l = √(r² + h²) numericals.',
        examWeightage: '8 Marks',
        formulaeCount: 7,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Heron\'s Formula for Triangle Area',
            quickTake: 'Calculates area of any triangle when lengths of all three sides a, b, c are given without height.',
            keyPoints: [
              'Semi-perimeter s = (a + b + c) / 2.',
              'Area = √[s · (s - a) · (s - b) · (s - c)].',
              'For equilateral triangle of side a: Area = (√3 / 4) · a².'
            ],
            formulaOrEquation: 'Area = √[s(s - a)(s - b)(s - c)]; s = (a + b + c)/2'
          },
          {
            topic: 'Right Circular Cone Formulas',
            quickTake: '3D shape generated by rotating a right-angled triangle around its vertical leg.',
            keyPoints: [
              'Slant height l = √(r² + h²).',
              'Curved Surface Area (CSA) = π · r · l.',
              'Total Surface Area (TSA) = π · r · l + π · r² = π · r · (l + r).',
              'Volume of Cone = ⅓ · π · r² · h (Exactly 1/3rd volume of cylinder with same r and h!).'
            ],
            formulaOrEquation: 'CSA = π·r·l; TSA = π·r(l + r); Volume = ⅓·π·r²·h'
          },
          {
            topic: 'Sphere & Hemisphere Formulas',
            quickTake: 'Perfect symmetrical curved solids with single parameter radius r.',
            keyPoints: [
              'Surface Area of Sphere = 4 · π · r²; Volume = ⁴⁄₃ · π · r³.',
              'Hemisphere Curved Surface Area (CSA) = 2 · π · r².',
              'Hemisphere Total Surface Area (TSA) = 3 · π · r² (includes circular base!).',
              'Hemisphere Volume = ⅔ · π · r³.'
            ],
            formulaOrEquation: 'Sphere SA = 4πr²; Hemi TSA = 3πr²; Sphere Vol = ⁴⁄₃πr³'
          }
        ],
        mindmap: {
          center: 'Heron\'s & Mensuration',
          branches: [
            {
              title: '1. Heron\'s Formula',
              subtopics: ['Semi-perimeter s = (a+b+c)/2', '√[s(s-a)(s-b)(s-c)] formula', 'Equilateral triangle area (√3/4)a²', 'Word problems with cost/painting'],
              examTip: 'Check if s - a, s - b, s - c are positive; if any is negative, triangle is invalid.',
              color: 'blue'
            },
            {
              title: '2. Cone Mensuration',
              subtopics: ['Slant height l = √(r²+h²)', 'CSA = πrl', 'TSA = πr(l+r)', 'Volume = ⅓πr²h'],
              examTip: 'Take care: canvas required for conical tent requires CSA, not TSA.',
              color: 'purple'
            },
            {
              title: '3. Sphere & Hemisphere',
              subtopics: ['Sphere surface area 4πr²', 'Hemisphere CSA 2πr²', 'Hemisphere TSA 3πr²', 'Volumes (⁴⁄₃πr³, ⅔πr³)'],
              examTip: 'Hemisphere TSA is 3πr² because of the flat circular top.',
              color: 'emerald'
            },
            {
              title: '4. Conversion of Solids',
              subtopics: ['Volume conservation during melting', 'Number of smaller spheres formed', 'Ratio of surface areas vs volumes'],
              examTip: 'When a solid is recast into another shape, its total volume remains invariant.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
