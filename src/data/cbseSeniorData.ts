import { Subject } from '../types';

// =========================================================================
// CBSE CLASS 12 & CLASS 11 RATIONALIZED NEW SYLLABUS (2024-25 / 2025-26)
// Standard across all affiliated schools: Visakha Valley, Timpany, DPS, NCS, SSSVV
// =========================================================================

export const CBSE_12_SUBJECTS: Subject[] = [
  // ----------------------------------------------------
  // CLASS 12: PHYSICS (CBSE CODE 042)
  // ----------------------------------------------------
  {
    id: 'vvs-cbse12-physics',
    code: 'CBSE-042',
    name: 'Class 12 Physics (Electrostatics, Optics & Modern Physics)',
    semesterOrGrade: 'Class 12 Board',
    creditsOrMarks: '70 Marks Theory + 30 Practical',
    gradeOrBranch: 'class12-sci',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Senior Science Core',
    subjectCategory: 'science',
    units: [
      {
        unitNumber: 1,
        title: 'Electrostatics, Gauss\'s Law & Capacitance',
        keyTopics: [
          'Coulomb\'s Law in vector form, Principle of Superposition, Electric Field intensity',
          'Electric dipole: Field at axial & equatorial points, Torque in uniform electric field (τ = p × E)',
          'Gauss\'s Theorem: Flux definition (Φ = ∮ E·dA = q/ε0) and applications (infinite wire, infinite sheet)',
          'Electric Potential, Equipotential surfaces, Capacitors in series/parallel, Energy stored (U = 1/2 CV²)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'S. Ananya (99/100 Physics)',
        verifiedRole: 'Visakha Valley School Topper',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 980,
        videoDuration: '5m 15s',
        summaryTelugu: 'ఎలక్ట్రోస్టాటిక్స్ & కెపాసిటెన్స్: కూలుంబ్స్ నియమం, గాస్ సిద్ధాంతం (అనంతమైన వైర్/షీట్ అప్లికేషన్స్), ఈక్విపొటెన్షియల్ సర్ఫేసెస్ మరియు కెపాసిటర్లలో శక్తి (U = 1/2 CV²).',
        summaryEnglish: 'Derivations for axial & equatorial dipole field, Gauss law proofs, and dielectric slab insertion effects on capacitance.',
        examWeightage: '16 Marks in CBSE Board',
        formulaeCount: 9,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Gauss\'s Theorem & Applications',
            quickTake: 'Total electric flux through any closed Gaussian surface equals 1/ε0 times net enclosed charge.',
            keyPoints: [
              'Flux: Φ = ∮ E·dA = q_enclosed / ε0.',
              'Infinitely long straight charged wire: E = λ / (2πε0r).',
              'Uniformly charged infinite plane sheet: E = σ / (2ε0) (independent of distance r).',
              'Inside a charged thin spherical shell: E = 0 (electrostatic shielding).'
            ],
            formulaOrEquation: 'Φ = ∮ E·dA = q_enc / ε0 | Infinite Wire: E = λ / (2πε0r)'
          },
          {
            topic: 'Parallel Plate Capacitor with Dielectric',
            quickTake: 'Capacitance increases by dielectric constant K when insulating medium is inserted.',
            keyPoints: [
              'Air capacitor: C0 = ε0·A / d.',
              'With dielectric slab of thickness t: C = ε0·A / (d - t + t/K).',
              'If completely filled (t = d): C = K · C0.',
              'Energy density in electric field: u = (1/2) ε0 E².'
            ],
            formulaOrEquation: 'C = K · ε0·A / d | U = (1/2) CV² = Q² / (2C) = (1/2) QV'
          }
        ],
        mindmap: {
          center: 'Class 12 Electrostatics',
          branches: [
            {
              title: '1. Electric Charges & Field',
              subtopics: ['Coulomb\'s vector law', 'Electric field lines properties', 'Dipole axial field E = 2kp/r³', 'Dipole equatorial field E = -kp/r³'],
              examTip: 'Field at axial point is twice the equatorial point for a short dipole (r >> 2a).',
              color: 'blue'
            },
            {
              title: '2. Gauss\'s Law & Flux',
              subtopics: ['Electric flux Φ = E·A·cos θ', 'Gauss law statement & proof', 'Field due to line charge', 'Field due to infinite plane sheet'],
              examTip: 'Electric field due to infinite sheet does not depend on distance r from the sheet.',
              color: 'purple'
            },
            {
              title: '3. Electric Potential',
              subtopics: ['Potential V = kq/r', 'Equipotential surfaces properties', 'Potential energy of dipole U = -p·E', 'Electrostatic shielding Faraday cage'],
              examTip: 'Electric field is always perpendicular to equipotential surfaces: E = -dV/dr.',
              color: 'emerald'
            },
            {
              title: '4. Capacitance',
              subtopics: ['Parallel plate capacitor C = ε0A/d', 'Dielectric polarization K', 'Series (1/C = 1/C1 + 1/C2)', 'Parallel (C = C1 + C2)', 'Energy U = 1/2 CV²'],
              examTip: 'Battery connected: V stays constant; Battery disconnected: Q stays constant when dielectric inserted.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Current Electricity & Circuit Laws',
        keyTopics: [
          'Electric current, drift velocity derivation (vd = eEτ/m), mobility, and Ohm\'s Law deduction',
          'Temperature dependence of resistance (Rt = R0(1 + αt)), Resistivity of metals vs semiconductors',
          'EMF, Internal resistance of a cell (r), Terminal potential difference (V = E - Ir)',
          'Kirchhoff\'s Rules (KCL junction law, KVL loop law) and Wheatstone Bridge balanced condition'
        ],
        readingTime: '24 mins',
        verifiedBy: 'V. Ramanath (Physics HOD)',
        verifiedRole: 'Visakha Valley Senior Faculty',
        pdfPages: 22,
        fileSize: '2.9 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '4m 50s',
        summaryTelugu: 'కరెంట్ ఎలక్ట్రిసిటీ: డ్రిఫ్ట్ వెలాసిటీ డెరివేషన్ (I = n e A vd), కిర్చాఫ్ నియమాలు (KCL, KVL), వీట్‌స్టోన్ బ్రిడ్జ్ మరియు బ్యాటరీ అంతర్గత నిరోధం.',
        summaryEnglish: 'Derivation of Ohm\'s law from microscopic electron drift, Kirchhoff loop equations for multi-cell networks, and balanced bridge proofs.',
        examWeightage: '14 Marks in CBSE Board',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Drift Velocity & Microscopic Ohm\'s Law',
            quickTake: 'Relates macroscopic electric current to microscopic electron drift under applied field.',
            keyPoints: [
              'Drift velocity: vd = (e·E·τ) / m, where τ is the relaxation time.',
              'Current relation: I = n · e · A · vd = (n · e² · A · τ · V) / (m · l).',
              'Comparing with I = V/R yields Resistance: R = (m · l) / (n · e² · A · τ).',
              'Resistivity: ρ = m / (n · e² · τ) (independent of dimensions of conductor).'
            ],
            formulaOrEquation: 'I = n·e·A·vd | ρ = m / (n·e²·τ) | vd = (e·E·τ) / m'
          },
          {
            topic: 'Kirchhoff\'s Rules & Wheatstone Bridge',
            quickTake: 'KCL conserves electric charge; KVL conserves energy around closed loops.',
            keyPoints: [
              'Kirchhoff\'s Current Law (Junction Rule): Σ I_in = Σ I_out (Conservation of Charge).',
              'Kirchhoff\'s Voltage Law (Loop Rule): In any closed loop, Σ ΔV = 0 (Conservation of Energy).',
              'Wheatstone Bridge balanced condition: When galvanometer shows zero deflection, P / Q = R / S.'
            ],
            formulaOrEquation: 'KCL: Σ I = 0 | KVL: Σ E = Σ IR | Wheatstone: P/Q = R/S'
          }
        ],
        mindmap: {
          center: 'Current Electricity',
          branches: [
            {
              title: '1. Microscopic Current',
              subtopics: ['Drift velocity vd = eEτ/m', 'Current density j = σE', 'Ohm\'s law deduction', 'Temperature coefficient α'],
              examTip: 'For metals α > 0 (resistance increases with temp); for semiconductors α < 0.',
              color: 'blue'
            },
            {
              title: '2. Cells & Combinations',
              subtopics: ['Electromotive Force (EMF)', 'Internal resistance r', 'Terminal voltage V = E - Ir', 'Cells in series & parallel equivalent'],
              examTip: 'When charging a cell, terminal voltage V = E + Ir (greater than EMF).',
              color: 'purple'
            },
            {
              title: '3. Kirchhoff\'s Rules',
              subtopics: ['1st Law (KCL) Charge conservation', '2nd Law (KVL) Energy conservation', 'Sign conventions for resistors and batteries', 'Solving 2-mesh circuit problems'],
              examTip: 'Traversing against current direction: +IR potential rise; with current: -IR drop.',
              color: 'emerald'
            },
            {
              title: '4. Measuring Instruments',
              subtopics: ['Wheatstone bridge derivation', 'Meter bridge unknown resistance', 'Galvanometer to ammeter (shunt S in parallel)', 'Galvanometer to voltmeter (high R in series)'],
              examTip: 'To convert galvanometer into ammeter: connect low resistance shunt S = Ig·G / (I - Ig) in parallel.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 3,
        title: 'Ray Optics, Wave Optics & Modern Physics',
        keyTopics: [
          'Ray Optics: Lens Maker\'s Formula (1/f = (n-1)(1/R1 - 1/R2)), Refraction through Prism, Astronomical Telescope',
          'Wave Optics: Huygens\' Principle, Proof of reflection/refraction laws, Young\'s Double Slit Experiment (YDSE fringe width β = λD/d)',
          'Dual Nature: Photoelectric Effect, Einstein\'s Equation (hν = Φ0 + Kmax), de Broglie wavelength (λ = h/p)',
          'Semiconductor Devices: p-n junction diode, Forward & Reverse bias V-I characteristics, Full wave rectifier'
        ],
        readingTime: '28 mins',
        verifiedBy: 'K. S. Rao (CBSE Examiner)',
        verifiedRole: 'Visakha Valley Senior Physics Faculty',
        pdfPages: 26,
        fileSize: '3.5 MB',
        rating: 4.99,
        upvotes: 990,
        videoDuration: '5m 30s',
        summaryTelugu: 'ఆప్టిక్స్ & మోడరన్ ఫిజిక్స్: లెన్స్ మేకర్స్ ఫార్ములా, యంగ్స్ డబుల్ స్లిట్ ఎక్స్‌పెరిమెంట్ (ఫ్రింజ్ విడ్త్ β = λD/d), ఐన్‌స్టీన్ ఫోటోఎలెక్ట్రిక్ సమీకరణం మరియు రెక్టిఫైయర్.',
        summaryEnglish: 'Step-by-step derivation of Lens Maker\'s equation, YDSE fringe width formula, and labeled ray diagrams of compound microscope and telescope.',
        examWeightage: '18 Marks in CBSE Board',
        formulaeCount: 11,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Lens Maker\'s Formula & Prism Dispersion',
            quickTake: 'Relates focal length of thin lens to radii of curvature and refractive index of lens material.',
            keyPoints: [
              'Lens Maker\'s Formula: 1/f = (n2/n1 - 1) * (1/R1 - 1/R2).',
              'When a convex lens is placed in a liquid of higher refractive index, its focal length becomes negative and it acts as a concave diverging lens.',
              'Prism Refraction: n = sin((A + Dm)/2) / sin(A/2), where A is prism angle and Dm is minimum deviation angle.'
            ],
            formulaOrEquation: '1/f = (n - 1)(1/R1 - 1/R2) | Prism: n = sin((A + Dm)/2) / sin(A/2)'
          },
          {
            topic: 'Young\'s Double Slit Experiment (YDSE)',
            quickTake: 'Demonstrates wave nature of light producing alternate bright and dark interference fringes.',
            keyPoints: [
              'Path difference for bright fringe: Δx = n·λ; for dark fringe: Δx = (2n - 1)·λ/2.',
              'Fringe width: β = (λ · D) / d, where D is screen distance and d is slit separation.',
              'If entire YDSE apparatus is immersed in water (index n), fringe width decreases to β\' = β / n.'
            ],
            formulaOrEquation: 'Fringe Width: β = λ·D / d | In medium: β\' = β / n'
          }
        ],
        mindmap: {
          center: 'Optics & Modern Physics',
          branches: [
            {
              title: '1. Ray Optics Devices',
              subtopics: ['Lens Maker\'s formula derivation', 'Prism formula n = sin((A+Dm)/2)/sin(A/2)', 'Compound microscope magnifying power', 'Astronomical telescope in normal adjustment'],
              examTip: 'Astronomical telescope magnifying power m = -fo/fe; length of tube L = fo + fe.',
              color: 'blue'
            },
            {
              title: '2. Wave Optics',
              subtopics: ['Huygens wavelets principle', 'Wavefront types (spherical, plane, cylindrical)', 'YDSE fringe width β = λD/d', 'Single slit diffraction central maxima width = 2λD/a'],
              examTip: 'Central diffraction maximum is twice as wide as secondary maxima: width = 2λD/a.',
              color: 'purple'
            },
            {
              title: '3. Quantum & Dual Nature',
              subtopics: ['Photoelectric threshold frequency ν0', 'Stopping potential eV0 = Kmax', 'Einstein equation hν = Φ0 + eV0', 'de Broglie wavelength λ = h / √(2m·e·V)'],
              examTip: 'Number of emitted photoelectrons depends on light intensity; maximum kinetic energy depends strictly on light frequency.',
              color: 'emerald'
            },
            {
              title: '4. Semiconductors',
              subtopics: ['Energy bands (Conduction, Valence, Band gap Eg)', 'Intrinsic vs Extrinsic (n-type & p-type)', 'p-n junction depletion layer & barrier potential', 'Full wave center-tapped rectifier working'],
              examTip: 'Full wave rectifier has ripple frequency 2f (100 Hz in India for 50 Hz input supply).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // CLASS 12: CHEMISTRY (CBSE CODE 043)
  // ----------------------------------------------------
  {
    id: 'vvs-cbse12-chemistry',
    code: 'CBSE-043',
    name: 'Class 12 Chemistry (Physical, Inorganic & Organic)',
    semesterOrGrade: 'Class 12 Board',
    creditsOrMarks: '70 Marks Theory + 30 Practical',
    gradeOrBranch: 'class12-sci',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Senior Science Core',
    subjectCategory: 'science',
    units: [
      {
        unitNumber: 1,
        title: 'Solutions & Electrochemistry',
        keyTopics: [
          'Solutions: Raoult\'s Law, Ideal vs Non-ideal solutions (positive/negative deviations, Azeotropes)',
          'Colligative Properties: Relative lowering of vapour pressure, Elevation in boiling point (ΔTb = Kb·m), Depression in freezing point (ΔTf = Kf·m), Osmotic pressure (π = CRT), van \'t Hoff factor (i)',
          'Electrochemistry: Nernst Equation (Ecell = E°cell - 0.0591/n log Q), Kohlrausch\'s Law of independent migration of ions',
          'Batteries & Fuel Cells: Lead-acid storage battery reactions, H2-O2 fuel cell, Corrosion mechanism'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. P. V. Lakshmi (Chemistry Lead)',
        verifiedRole: 'Visakha Valley Senior Chemistry Faculty',
        pdfPages: 24,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 950,
        videoDuration: '5m 10s',
        summaryTelugu: 'సొల్యూషన్స్ & ఎలక్ట్రోకెమిస్ట్రీ: రౌల్ట్స్ నియమం, కొలిగేటివ్ ప్రాపర్టీస్, వాంట్ హాఫ్ ఫాక్టర్ (i), నెర్నస్ట్ ఈక్వేషన్ మరియు కోల్‌రాష్ నియమం.',
        summaryEnglish: 'Numerical solving strategies for Nernst equation at 298 K, van \'t Hoff factor dissociation degree α = (i - 1)/(n - 1), and fuel cell electrochemistry.',
        examWeightage: '16 Marks in CBSE Board',
        formulaeCount: 9,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Colligative Properties & van \'t Hoff factor (i)',
            quickTake: 'Properties depending only on number of solute particles, not on their chemical identity.',
            keyPoints: [
              'Relative lowering of vapour pressure: (P° - P) / P° = i · x_solute.',
              'Elevation in boiling point: ΔTb = i · Kb · m.',
              'Depression in freezing point: ΔTf = i · Kf · m.',
              'Osmotic pressure: π = i · C · R · T.',
              'Degree of dissociation: α = (i - 1) / (n - 1); Degree of association: α = (1 - i) / (1 - 1/n).'
            ],
            formulaOrEquation: 'π = i·CRT | ΔTb = i·Kb·m | α = (i - 1) / (n - 1)'
          },
          {
            topic: 'Nernst Equation & Gibbs Free Energy',
            quickTake: 'Determines cell potential under non-standard concentration and temperature conditions.',
            keyPoints: [
              'Nernst equation at 298 K: Ecell = E°cell - (0.0591 / n) * log10( [Products] / [Reactants] ).',
              'Relationship with Equilibrium Constant: E°cell = (0.0591 / n) * log10 Kc.',
              'Standard Gibbs free energy: ΔG° = -n · F · E°cell. A positive E°cell indicates spontaneous reaction (ΔG° < 0).'
            ],
            formulaOrEquation: 'Ecell = E°cell - (0.0591 / n) log Q | ΔG° = -n·F·E°cell'
          }
        ],
        mindmap: {
          center: 'Solutions & Electrochemistry',
          branches: [
            {
              title: '1. Solutions & Raoult\'s Law',
              subtopics: ['Ideal solutions (ΔH_mix = 0, ΔV_mix = 0)', 'Positive deviation (Ethanol + Acetone)', 'Negative deviation (Chloroform + Acetone)', 'Azeotropic minimum & maximum boiling mixtures'],
              examTip: 'Positive deviation has higher vapour pressure and lower boiling point than ideal.',
              color: 'blue'
            },
            {
              title: '2. Colligative Formulas',
              subtopics: ['Vapour pressure lowering (P°-P)/P°', 'Boiling point elevation ΔTb = iKbm', 'Freezing depression ΔTf = iKfm', 'Osmotic pressure π = iCRT'],
              examTip: 'Calculate molar mass using M2 = (1000 * Kf * w2) / (ΔTf * w1).',
              color: 'purple'
            },
            {
              title: '3. Conductance & Kohlrausch',
              subtopics: ['Specific conductivity κ = G * (l/A)', 'Molar conductivity Λm = (κ * 1000)/M', 'Kohlrausch law: Λ°m = ν+λ°+ + ν-λ°-', 'Determination of degree of dissociation α = Λm / Λ°m'],
              examTip: 'Kohlrausch law allows calculation of limiting molar conductivity of weak electrolytes like CH3COOH.',
              color: 'emerald'
            },
            {
              title: '4. Cells & Nernst Equation',
              subtopics: ['Galvanic cell notation', 'Nernst formula E = E° - (0.0591/n)logQ', 'ΔG° = -nFE°cell relationship', 'Lead storage battery discharging/recharging reactions'],
              examTip: 'During discharge of lead storage battery, H2SO4 is consumed and its density decreases.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Chemical Kinetics & d/f-Block Elements',
        keyTopics: [
          'Rate of reaction, Order (0th, 1st, 2nd) vs Molecularity of an elementary reaction',
          'Integrated rate equations & Half-life formulas (Zero order t1/2 = [A]0/2k; First order t1/2 = 0.693/k)',
          'Arrhenius Equation (k = A·e^(-Ea/RT)) and activation energy graphical calculation',
          'Transition Metals (d-block): Electronic configuration, variable oxidation states, catalytic properties, interstitial compounds, KMnO4 and K2Cr2O7 preparations & oxidizing actions'
        ],
        readingTime: '24 mins',
        verifiedBy: 'T. Subrahmanyam',
        verifiedRole: 'Visakha Valley Chemistry Academic Coordinator',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.96,
        upvotes: 910,
        videoDuration: '4m 45s',
        summaryTelugu: 'కెమికల్ కైనెటిక్స్ & డి-బ్లాక్ మూలకాలు: ఆర్డర్ vs మాలిక్యులారిటీ, మొదటి ఆర్డర్ హాఫ్-లైఫ్ (t1/2 = 0.693/k), అర్హీనియస్ సమీకరణం మరియు ట్రాన్సిషన్ మూలకాల లక్షణాలు.',
        summaryEnglish: 'First-order rate law derivations, half-life numericals, KMnO4 redox titrations in acidic medium, and lanthanoid contraction consequences.',
        examWeightage: '14 Marks in CBSE Board',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'First Order Kinetics & Half-Life',
            quickTake: 'Rate depends linearly on first power of reactant concentration; half-life is independent of initial concentration.',
            keyPoints: [
              'Integrated rate equation: k = (2.303 / t) * log10([A]0 / [A]).',
              'Half-life: t1/2 = 0.693 / k (strictly independent of [A]0).',
              'Radioactive decay processes strictly follow first-order kinetics.',
              'Unit of rate constant k: s⁻¹ or min⁻¹.'
            ],
            formulaOrEquation: 'k = (2.303 / t) log([A]0 / [A]) | t1/2 = 0.693 / k'
          },
          {
            topic: 'Lanthanoid Contraction in Transition Elements',
            quickTake: 'Steady decrease in atomic and ionic radii along lanthanoid series due to poor shielding of 4f electrons.',
            keyPoints: [
              'Cause: 4f electrons have diffuse shapes and provide very poor shielding for outer electrons against increasing nuclear charge.',
              'Consequences: 1. Zr and Hf have almost identical atomic radii (160 pm and 159 pm) and identical chemical properties.',
              '2. Separation of lanthanoids from minerals is extremely difficult.',
              '3. Basicity of lanthanoid hydroxides decreases from La(OH)3 to Lu(OH)3.'
            ],
            formulaOrEquation: 'Lanthanoid Contraction = Poor 4f Shielding -> High Effective Nuclear Charge Zeff'
          }
        ],
        mindmap: {
          center: 'Kinetics & d/f-Block',
          branches: [
            {
              title: '1. Rate Laws & Order',
              subtopics: ['Rate of reaction expression', 'Order (experimental) vs Molecularity (theoretical)', 'Zero order integrated law [A] = [A]0 - kt', 'First order integrated law k = (2.303/t)log([A]0/[A])'],
              examTip: 'Molecularity cannot be zero or fractional; order can be zero, fractional, or negative.',
              color: 'blue'
            },
            {
              title: '2. Temperature & Catalysis',
              subtopics: ['Arrhenius equation k = A·e^(-Ea/RT)', 'Two-temperature formula log(k2/k1) = Ea/2.303R * (1/T1 - 1/T2)', 'Collision theory orientation factor P', 'Catalyst lowers activation energy Ea'],
              examTip: 'A catalyst increases the rate of reaction by providing an alternative pathway of lower activation energy, without affecting equilibrium constant Kc.',
              color: 'purple'
            },
            {
              title: '3. Transition Elements (d-block)',
              subtopics: ['Variable oxidation states due to (n-1)d and ns participation', 'Paramagnetism spin-only magnetic moment μ = √(n(n+2)) BM', 'Colored ions from d-d transitions', 'Catalytic activity and alloy formation'],
              examTip: 'Sc³⁺ and Zn²⁺ are colorless because they have empty d⁰ and fully filled d¹⁰ configurations respectively.',
              color: 'emerald'
            },
            {
              title: '4. Coordination & Lanthanoids',
              subtopics: ['Lanthanoid contraction cause & consequences', 'KMnO4 oxidizing actions in acidic medium (MnO4⁻ + 8H⁺ + 5e⁻ -> Mn²⁺ + 4H2O)', 'K2Cr2O7 in acidic medium (Cr2O7²⁻ + 14H⁺ + 6e⁻ -> 2Cr³⁺ + 7H2O)'],
              examTip: 'In acidic medium 1 mole of KMnO4 consumes 5 electrons (Equivalent weight = M / 5).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // CLASS 12: MATHEMATICS (CBSE CODE 041)
  // ----------------------------------------------------
  {
    id: 'vvs-cbse12-maths',
    code: 'CBSE-041',
    name: 'Class 12 Mathematics (Calculus, Vectors & 3D)',
    semesterOrGrade: 'Class 12 Board',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class12-sci',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Senior Science Core',
    subjectCategory: 'maths',
    units: [
      {
        unitNumber: 1,
        title: 'Relations, Functions, Matrices & Determinants',
        keyTopics: [
          'Types of Relations: Reflexive, Symmetric, Transitive, and Equivalence relations',
          'Functions: One-One (Injective), Onto (Surjective), and Bijective functions',
          'Matrices: Operations, Symmetric and Skew-symmetric matrices (A = 1/2(A+A\') + 1/2(A-A\'))',
          'Determinants: Minors, Cofactors, Adjoint, Inverse of a matrix, and solving linear systems by Matrix Method (X = A⁻¹B)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'M. Sitarama Raju (Maths HOD)',
        verifiedRole: 'Visakha Valley School Senior Faculty',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.98,
        upvotes: 960,
        videoDuration: '4m 50s',
        summaryTelugu: 'రిలేషన్స్, ఫంక్షన్స్ & మ్యాట్రిసెస్: ఈక్వివలెన్స్ రిలేషన్స్, వన్-వన్ & ఆన్‌టు ఫంక్షన్స్, ఇన్వర్స్ ఆఫ్ ఎ మ్యాట్రిక్స్ (A⁻¹) మరియు మ్యాట్రిక్స్ మెథడ్ ద్వారా సమీకరణాలు సాల్వ్ చేయడం.',
        summaryEnglish: 'Step-by-step 6-mark Matrix Method solutions for 3-variable linear systems, bijective function proofs, and determinant properties.',
        examWeightage: '16 Marks in CBSE Board',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Matrix Method for System of Linear Equations',
            quickTake: 'Standard 6-mark CBSE board question format for solving AX = B.',
            keyPoints: [
              'Write system in matrix form: AX = B, where A is coefficient matrix, X is variable vector, B is constants vector.',
              'Calculate |A|. If |A| ≠ 0, system is consistent with a unique solution X = A⁻¹ · B.',
              'Inverse formula: A⁻¹ = (1 / |A|) * adj(A), where adj(A) is transpose of cofactor matrix.',
              'If |A| = 0 and (adj A)·B ≠ 0, system is inconsistent (No solution).'
            ],
            formulaOrEquation: 'AX = B ⟹ X = A⁻¹B | A⁻¹ = (1 / |A|) · adj(A)'
          },
          {
            topic: 'Equivalence Relations & Bijective Functions',
            quickTake: 'Equivalence requires Reflexive, Symmetric, Transitive; Bijective requires both Injective and Surjective.',
            keyPoints: [
              'Reflexive: (a, a) ∈ R for all a ∈ A.',
              'Symmetric: If (a, b) ∈ R, then (b, a) ∈ R.',
              'Transitive: If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R.',
              'Injective (One-One): f(x1) = f(x2) implies x1 = x2.',
              'Surjective (Onto): For every y in codomain, exists x in domain such that f(x) = y (Range = Codomain).'
            ],
            formulaOrEquation: 'Bijective = One-One (Injective) + Onto (Surjective)'
          }
        ],
        mindmap: {
          center: 'Algebra & Matrices',
          branches: [
            {
              title: '1. Relations & Functions',
              subtopics: ['Equivalence relations proof', 'Equivalence classes partitions', 'Injectivity test f(x1)=f(x2)', 'Surjectivity test Range=Codomain'],
              examTip: 'To prove onto, express x in terms of y and show x belongs to the domain.',
              color: 'blue'
            },
            {
              title: '2. Matrix Algebra',
              subtopics: ['Matrix multiplication non-commutativity', 'Transpose properties (AB)\' = B\'A\'', 'Symmetric A\' = A & Skew-symmetric A\' = -A', 'Every square matrix as sum of symmetric and skew-symmetric'],
              examTip: 'Diagonal elements of a skew-symmetric matrix are always zero.',
              color: 'purple'
            },
            {
              title: '3. Determinants & Adjoint',
              subtopics: ['Determinant expansion', 'Minors Mij and Cofactors Aij = (-1)^(i+j)Mij', 'A · adj(A) = |A| · I', '|adj(A)| = |A|^(n-1)'],
              examTip: 'Remember: det(kA) = k^n * det(A) for n x n matrix.',
              color: 'emerald'
            },
            {
              title: '4. System of Equations',
              subtopics: ['Matrix equation AX = B', 'Cofactor matrix computation', 'Adjoint transpose', 'X = A⁻¹B computation'],
              examTip: 'Carefully compute all 9 cofactors with correct +/- signs before transposing to get adj(A).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Calculus: Continuity, Differentiability & Integrals',
        keyTopics: [
          'Continuity at a point, Differentiability, Chain Rule, Logarithmic Differentiation, Parametric forms, Second order derivatives',
          'Applications of Derivatives: Increasing/Decreasing functions, Tangents and Normals, Maxima and Minima (First and Second Derivative Tests)',
          'Indefinite Integrals: Integration by Substitution, Partial Fractions, Integration by Parts (ILATE rule)',
          'Definite Integrals: Fundamental Theorem of Calculus, Properties of Definite Integrals (King\'s Property ∫0 to a f(x)dx = ∫0 to a f(a-x)dx), Area under simple curves'
        ],
        readingTime: '28 mins',
        verifiedBy: 'K. V. Ramana',
        verifiedRole: 'AUCOE Mathematics Alumni & VVS Mentor',
        pdfPages: 26,
        fileSize: '3.4 MB',
        rating: 4.99,
        upvotes: 995,
        videoDuration: '5m 30s',
        summaryTelugu: 'క్యాలిక్యులస్: కంటిన్యుయిటీ, లాగరిథమిక్ డిఫరెన్షియేషన్, మ్యాక్సిమా-మినిమా (సెకండ్ డెరివేటివ్ టెస్ట్), ఇంటిగ్రేషన్ బై పార్ట్స్ (ILATE) మరియు డెఫినైట్ ఇంటిగ్రల్స్ ప్రాపర్టీస్ (కింగ్స్ ప్రాపర్టీ).',
        summaryEnglish: 'Comprehensive King\'s property definite integral evaluation tricks, logarithmic differentiation for variable powers, and maximum volume optimization word problems.',
        examWeightage: '35 Marks in CBSE Board (Heaviest Weightage)',
        formulaeCount: 14,
        solvedQuestionsCount: 18,
        topicAtAGlance: [
          {
            topic: 'Definite Integral Properties (King\'s Property)',
            quickTake: 'The most evaluated property in CBSE Class 12 board examinations for proving standard identities.',
            keyPoints: [
              'King\'s Property: ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx.',
              'Generalized King\'s Property: ∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx.',
              'Standard evaluation: Add the original integral I and modified integral I to get 2I, canceling the denominator.',
              'Example: ∫[0 to π/2] (sin^n x) / (sin^n x + cos^n x) dx = π/4 for all real powers n.'
            ],
            formulaOrEquation: '∫[0 to a] f(x)dx = ∫[0 to a] f(a-x)dx | 2I trick gives answer = (b-a)/2'
          },
          {
            topic: 'Maxima and Minima Word Problems',
            quickTake: 'Optimization problems using second derivative test f\'\'(x) to verify maximum or minimum.',
            keyPoints: [
              'Step 1: Set up single-variable objective function f(x) from geometric constraints.',
              'Step 2: Find critical points by setting first derivative f\'(x) = 0.',
              'Step 3: Evaluate second derivative f\'\'(x) at critical point: if f\'\'(x) < 0 ⟹ Local Maximum; if f\'\'(x) > 0 ⟹ Local Minimum.',
              'Classic problem: Cylinder of maximum volume inscribed in a cone has height h = H/3.'
            ],
            formulaOrEquation: 'Critical: f\'(x) = 0 | Max if f\'\'(x) < 0 | Min if f\'\'(x) > 0'
          }
        ],
        mindmap: {
          center: 'Class 12 Calculus',
          branches: [
            {
              title: '1. Differentiation Methods',
              subtopics: ['Chain rule', 'Implicit differentiation', 'Logarithmic differentiation for y = u(x)^v(x)', 'Parametric equations dy/dx = (dy/dt)/(dx/dt)'],
              examTip: 'Take natural log ln on both sides whenever variable is in the exponent: y = x^sin x.',
              color: 'blue'
            },
            {
              title: '2. Application of Derivatives',
              subtopics: ['Strictly increasing f\'(x) > 0', 'Strictly decreasing f\'(x) < 0', 'First derivative sign change test', 'Second derivative test for max/min'],
              examTip: 'Always state domain constraints (e.g. radius r > 0, height h > 0) in optimization proofs.',
              color: 'purple'
            },
            {
              title: '3. Indefinite Integration',
              subtopics: ['Standard formula tables', 'Substitution method', 'Partial fractions decomposition', 'Integration by parts ∫ u v dx using ILATE'],
              examTip: 'ILATE priority: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.',
              color: 'emerald'
            },
            {
              title: '4. Definite Integrals & Areas',
              subtopics: ['Fundamental theorem of calculus', 'King\'s property ∫0 to a f(x)dx = ∫0 to a f(a-x)dx', 'Even-odd function property', 'Area between curve and x-axis ∫ y dx'],
              examTip: 'If f(-x) = -f(x) (odd function), then ∫[-a to a] f(x) dx = 0 immediately.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];

// =========================================================================
// CBSE CLASS 11 RATIONALIZED NEW SYLLABUS (2024-25 / 2025-26)
// =========================================================================

export const CBSE_11_SUBJECTS: Subject[] = [
  // ----------------------------------------------------
  // CLASS 11: PHYSICS (CBSE CODE 042)
  // ----------------------------------------------------
  {
    id: 'vvs-cbse11-physics',
    code: 'CBSE-042',
    name: 'Class 11 Physics (Mechanics, Thermodynamics & Waves)',
    semesterOrGrade: 'Class 11 (CBSE)',
    creditsOrMarks: '70 Marks Theory + 30 Practical',
    gradeOrBranch: 'class11-sci',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Senior Science Core',
    subjectCategory: 'science',
    units: [
      {
        unitNumber: 1,
        title: 'Kinematics, Vectors & Laws of Motion',
        keyTopics: [
          'Motion in a straight line: Position-time and velocity-time graphs, Equations of motion by calculus method',
          'Motion in a plane: Vectors (Unit vectors, Dot product, Cross product), Projectile Motion (Trajectory, Time of flight, Maximum height, Range)',
          'Newton\'s Laws of Motion: Inertia, Momentum, Impulse-Momentum theorem, Conservation of Linear Momentum',
          'Friction: Static vs Kinetic friction, Laws of limiting friction, Angle of friction, Motion on banked curved circular tracks'
        ],
        readingTime: '25 mins',
        verifiedBy: 'S. N. Murthy (Class 11 Physics In-Charge)',
        verifiedRole: 'Visakha Valley Faculty',
        pdfPages: 22,
        fileSize: '2.9 MB',
        rating: 4.96,
        upvotes: 890,
        videoDuration: '5m 00s',
        summaryTelugu: 'కైనెమాటిక్స్ & గమన నియమాలు: కాలిక్యులస్ ద్వారా ఈక్వేషన్స్ ఆఫ్ మోషన్, ప్రొజెక్టైల్ మోషన్ (రేంజ్, టైమ్ ఆఫ్ ఫ్లైట్), న్యూటన్ నియమాలు మరియు బ్యాంక్డ్ రోడ్స్.',
        summaryEnglish: 'Calculus derivation of v = u + at and s = ut + 1/2 at², complete projectile motion formulas, and optimum banking velocity on friction-free roads.',
        examWeightage: '16 Marks in CBSE Annual Exam',
        formulaeCount: 10,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Projectile Motion Formulas',
            quickTake: 'Two-dimensional motion under constant gravitational acceleration acting vertically downward.',
            keyPoints: [
              'Horizontal velocity component ux = u cos θ remains constant throughout flight.',
              'Vertical velocity component uy = u sin θ - gt.',
              'Time of Flight: T = (2 · u · sin θ) / g.',
              'Maximum Height: H = (u² · sin² θ) / (2g).',
              'Horizontal Range: R = (u² · sin 2θ) / g. Range is maximum at launch angle θ = 45°.'
            ],
            formulaOrEquation: 'T = (2u sin θ)/g | H = (u² sin² θ)/(2g) | R = (u² sin 2θ)/g'
          },
          {
            topic: 'Circular Motion & Banked Roads',
            quickTake: 'Centripetal force Fc = mv²/r provided by normal reaction component to avoid vehicle skidding.',
            keyPoints: [
              'Optimum speed on banked curve without friction: v = √(r · g · tan θ).',
              'Maximum safe speed on rough banked road: vmax = √[ r·g·(μ + tan θ) / (1 - μ·tan θ) ].',
              'Angle of banking: θ = tan⁻¹(v² / rg).'
            ],
            formulaOrEquation: 'Optimum Speed: v = √(r·g·tan θ) | vmax = √[rg(μ + tan θ)/(1 - μ tan θ)]'
          }
        ],
        mindmap: {
          center: 'Kinematics & Dynamics',
          branches: [
            {
              title: '1. Calculus Kinematics',
              subtopics: ['v = dx/dt & a = dv/dt', 'Derivation of v² = u² + 2as', 'Relative velocity in 1D & 2D', 'Distance in nth second Sn = u + a/2(2n-1)'],
              examTip: 'In calculus derivations, write definite integral limits clearly: ∫[u to v] v dv = ∫[0 to s] a ds.',
              color: 'blue'
            },
            {
              title: '2. Vectors & Projectile',
              subtopics: ['Dot product A·B = AB cos θ', 'Cross product A×B = AB sin θ n̂', 'Parabolic trajectory y = x tan θ - gx²/(2u²cos²θ)', 'Complementary angles θ and 90°-θ have same range'],
              examTip: 'Two angles of projection θ and (90° - θ) yield the exact same horizontal range R.',
              color: 'purple'
            },
            {
              title: '3. Newton\'s Laws & Momentum',
              subtopics: ['First law inertia', 'Second law F = dp/dt = ma', 'Third law action-reaction', 'Recoil of gun & rocket propulsion'],
              examTip: 'Recoil velocity of gun: V_gun = - (m_bullet * v_bullet) / M_gun.',
              color: 'emerald'
            },
            {
              title: '4. Friction & Banking',
              subtopics: ['Static friction fs <= μs N', 'Kinetic friction fk = μk N', 'Angle of repose = Angle of friction', 'Banked curved roads centripetal force'],
              examTip: 'Static friction is a self-adjusting force up to its limiting maximum value μs N.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Work, Energy, Gravitation & Thermodynamics',
        keyTopics: [
          'Work-Energy Theorem: Statement, proof for variable force, Conservative vs Non-conservative forces',
          'Gravitation: Kepler\'s Laws of planetary motion, Universal Law of Gravitation, Acceleration due to gravity (g) variation with altitude, depth and latitude',
          'Thermodynamics: Zeroth Law (temperature concept), First Law (ΔQ = ΔU + ΔW), Isothermal vs Adiabatic processes (PV^γ = constant)',
          'Second Law of Thermodynamics: Heat engines, Refrigerator COP, Carnot cycle & thermal efficiency (η = 1 - T2/T1)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'D. Mary Pushpa (VVS Senior Faculty)',
        verifiedRole: 'Visakha Valley Science Faculty',
        pdfPages: 24,
        fileSize: '3.0 MB',
        rating: 4.97,
        upvotes: 910,
        videoDuration: '5m 10s',
        summaryTelugu: 'వర్క్-ఎనర్జీ & థర్మోడైనమిక్స్: వర్క్-ఎనర్జీ థియరం, గ్రావిటేషన్ (ఎత్తు & లోతుతో g విలువ మార్పు), థర్మోడైనమిక్స్ మొదటి & రెండవ నియమాలు మరియు కార్నాట్ ఇంజిన్ ఎఫీషియన్సీ.',
        summaryEnglish: 'Work-energy theorem proofs, variation of g with height (gh = g(1 - 2h/R)) and depth (gd = g(1 - d/R)), and adiabatic work done formula.',
        examWeightage: '16 Marks in CBSE Annual Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Variation of Acceleration due to Gravity (g)',
            quickTake: 'Acceleration due to gravity g = GM/R² decreases with both altitude and depth.',
            keyPoints: [
              'At height h (for h << R): gh = g · (1 - 2h/R).',
              'At depth d below surface: gd = g · (1 - d/R).',
              'At the center of Earth (d = R): gd = 0.',
              'Escape velocity from Earth\'s surface: ve = √(2gR) ≈ 11.2 km/s.'
            ],
            formulaOrEquation: 'Height: gh = g(1 - 2h/R) | Depth: gd = g(1 - d/R) | Escape: ve = √(2gR)'
          },
          {
            topic: 'First Law of Thermodynamics & Carnot Engine',
            quickTake: 'Conservation of energy for thermodynamic systems; Carnot efficiency sets theoretical limit.',
            keyPoints: [
              'First Law: ΔQ = ΔU + ΔW = n·Cv·ΔT + P·ΔV.',
              'Isothermal Process (T = const): ΔU = 0 ⟹ W = nRT ln(V2/V1).',
              'Adiabatic Process (ΔQ = 0): PV^γ = const ⟹ W = nR(T1 - T2) / (γ - 1).',
              'Carnot Engine Efficiency: η = 1 - (T2 / T1) = 1 - (Q2 / Q1).'
            ],
            formulaOrEquation: 'ΔQ = ΔU + ΔW | Carnot: η = 1 - (T_cold / T_hot)'
          }
        ],
        mindmap: {
          center: 'Work & Thermodynamics',
          branches: [
            {
              title: '1. Work-Energy Theorem',
              subtopics: ['W = ∫ F·dx work integral', 'Theorem: W_net = ΔK = 1/2 mv² - 1/2 mu²', 'Potential energy of spring U = 1/2 kx²', 'Conservation of mechanical energy'],
              examTip: 'Work done by conservative forces around any closed loop is strictly zero: ∮ F·dr = 0.',
              color: 'blue'
            },
            {
              title: '2. Gravitation & Satellites',
              subtopics: ['Kepler\'s 3 laws (Orbits, Areas, Periods T² ∝ r³)', 'g variation with altitude & depth', 'Gravitational potential V = -GM/r', 'Orbital velocity vo = √(gR) ≈ 7.92 km/s'],
              examTip: 'Kepler\'s second law (law of areas) is a direct consequence of the conservation of angular momentum.',
              color: 'purple'
            },
            {
              title: '3. Thermodynamic Processes',
              subtopics: ['State variables P, V, T', 'Isochoric (V=const, W=0)', 'Isobaric (P=const, W=PΔV)', 'Isothermal W = 2.303 nRT log(V2/V1)', 'Adiabatic PV^γ = const'],
              examTip: 'Mayer\'s relation: Cp - Cv = R for one mole of an ideal gas.',
              color: 'emerald'
            },
            {
              title: '4. Second Law & Carnot',
              subtopics: ['Kelvin-Planck statement', 'Clausius statement', 'Carnot 4-stroke cycle', 'Efficiency η = 1 - T2/T1'],
              examTip: 'Carnot engine efficiency can be 100% (η = 1) only if the sink temperature T2 is absolute zero (0 Kelvin).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ----------------------------------------------------
  // CLASS 11: MATHEMATICS (CBSE CODE 041)
  // ----------------------------------------------------
  {
    id: 'vvs-cbse11-maths',
    code: 'CBSE-041',
    name: 'Class 11 Mathematics (Algebra, Coordinate & Calculus)',
    semesterOrGrade: 'Class 11 (CBSE)',
    creditsOrMarks: '80 Marks Theory + 20 Internal',
    gradeOrBranch: 'class11-sci',
    institutionId: 'vvs',
    regulationOrBoard: 'CBSE 2024-25',
    category: 'CBSE Senior Science Core',
    subjectCategory: 'maths',
    units: [
      {
        unitNumber: 1,
        title: 'Sets, Relations, Functions & Trigonometry',
        keyTopics: [
          'Sets: Subsets, Power set, Union, Intersection, Difference, De Morgan\'s Laws',
          'Relations & Cartesian Products: Domain, Co-domain, Range',
          'Trigonometric Functions: Signs in quadrants, Formulas for sin(x±y), cos(x±y), tan(x±y), Product to Sum & Sum to Product transformations',
          'Domain and Range of standard functions (Modulus, Greatest Integer, Signum, Rational functions)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'G. V. Subba Rao',
        verifiedRole: 'Visakha Valley Senior Maths Faculty',
        pdfPages: 22,
        fileSize: '2.8 MB',
        rating: 4.97,
        upvotes: 930,
        videoDuration: '4m 50s',
        summaryTelugu: 'సెట్స్, ఫంక్షన్స్ & త్రికోణమితి: డి మోర్గాన్స్ లాస్, కార్టీసియన్ ప్రాడక్ట్, గ్రేటెస్ట్ ఇంటిజర్ ఫంక్షన్, మరియు sin(x±y), cos(x±y) త్రికోణమితి సమీకరణాలు.',
        summaryEnglish: 'Venn diagram proofs of De Morgan\'s laws, domain and range evaluation for radical and rational functions, and trigonometric transformation formulas.',
        examWeightage: '16 Marks in CBSE Annual Exam',
        formulaeCount: 12,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'De Morgan\'s Laws & Set Properties',
            quickTake: 'Fundamental dual identities governing complementation of union and intersection.',
            keyPoints: [
              'Law 1: (A ∪ B)\' = A\' ∩ B\'.',
              'Law 2: (A ∩ B)\' = A\' ∪ B\'.',
              'Cardinality formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
              'For 3 sets: n(A ∪ B ∪ C) = Σ n(A) - Σ n(A ∩ B) + n(A ∩ B ∩ C).'
            ],
            formulaOrEquation: '(A ∪ B)\' = A\' ∩ B\' | (A ∩ B)\' = A\' ∪ B\''
          },
          {
            topic: 'Trigonometric Addition & Transformation Formulas',
            quickTake: 'Core identities required across Class 11 and 12 calculus and coordinate geometry.',
            keyPoints: [
              'cos(A ± B) = cos A cos B ∓ sin A sin B.',
              'sin(A ± B) = sin A cos B ± cos A sin B.',
              '2 sin A cos B = sin(A + B) + sin(A - B).',
              'sin C + sin D = 2 sin((C + D)/2) · cos((C - D)/2).'
            ],
            formulaOrEquation: 'sin(A+B) = sin A cos B + cos A sin B | cos 2A = cos²A - sin²A'
          }
        ],
        mindmap: {
          center: 'Sets & Trigonometry',
          branches: [
            {
              title: '1. Set Operations',
              subtopics: ['Empty set & Universal set', 'Power set cardinality = 2^n', 'De Morgan\'s laws proof', 'Venn diagram word problems'],
              examTip: 'If a set A has n elements, its power set P(A) contains 2^n elements.',
              color: 'blue'
            },
            {
              title: '2. Standard Functions',
              subtopics: ['Modulus function |x|', 'Signum function sgn(x)', 'Greatest integer function [x]', 'Fractional part {x} = x - [x]'],
              examTip: 'Greatest integer function [x] is discontinuous at all integer points.',
              color: 'purple'
            },
            {
              title: '3. Trig Addition Formulas',
              subtopics: ['cos(A+B) and cos(A-B)', 'sin(A+B) and sin(A-B)', 'tan(A+B) = (tan A + tan B)/(1 - tan A tan B)', 'Double angle formulas sin 2A, cos 2A'],
              examTip: 'cos 2A = 2 cos² A - 1 = 1 - 2 sin² A = (1 - tan² A)/(1 + tan² A).',
              color: 'emerald'
            },
            {
              title: '4. Trig Transformations',
              subtopics: ['2 sin A cos B formulas', '2 cos A sin B formulas', 'CD formulas for sin C ± sin D', 'CD formulas for cos C ± cos D'],
              examTip: 'Watch out for cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2) with negative sign.',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Permutations, Combinations & Limits',
        keyTopics: [
          'Fundamental Principle of Counting (Multiplication & Addition principles)',
          'Permutations: Arrangements nPr = n! / (n - r)!, permutations with repeated objects (n! / (p!·q!·r!))',
          'Combinations: Selections nCr = n! / (r!(n - r)!), Pascal\'s Identity (nCr + nCr-1 = n+1Cr)',
          'Limits & Derivatives: Intuitive idea of limits, Standard algebraic and trigonometric limits (lim x->0 (sin x / x) = 1), First principle derivative definition'
        ],
        readingTime: '26 mins',
        verifiedBy: 'S. N. V. Prasad (VVS Faculty)',
        verifiedRole: 'Visakha Valley School Faculty',
        pdfPages: 24,
        fileSize: '3.0 MB',
        rating: 4.97,
        upvotes: 920,
        videoDuration: '5m 10s',
        summaryTelugu: 'పెర్ముటేషన్స్, కాంబినేషన్స్ & లిమిట్స్: ప్రిన్సిపల్ ఆఫ్ కౌంటింగ్, nPr vs nCr, పాస్కల్స్ ఐడెంటిటీ, మరియు ఫస్ట్ ప్రిన్సిపల్ ద్వారా డెరివేటివ్స్.',
        summaryEnglish: 'Combinatorics word problem casework, Pascal\'s identity combinatorial proof, and first principle evaluation of sin x and x^n derivatives.',
        examWeightage: '16 Marks in CBSE Annual Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Permutations (nPr) vs Combinations (nCr)',
            quickTake: 'Permutation is an ordered arrangement; combination is an unordered selection.',
            keyPoints: [
              'Permutation: Order matters (e.g. forming a 4-digit PIN, arranging books on a shelf). nPr = n! / (n - r)!.',
              'Combination: Order does not matter (e.g. selecting a committee of 3 students, choosing lottery numbers). nCr = n! / [r! (n - r)!].',
              'Relationship: nPr = r! * nCr.',
              'Pascal\'s Identity: nCr + nCr-1 = n+1Cr.'
            ],
            formulaOrEquation: 'nPr = n! / (n-r)! | nCr = n! / [r!(n-r)!] | nCr + nCr-1 = n+1Cr'
          },
          {
            topic: 'First Principle Derivative & Standard Limits',
            quickTake: 'The derivative represents the instantaneous rate of change defined via the limit of difference quotient.',
            keyPoints: [
              'First Principle: f\'(x) = lim(h ➔ 0) [ f(x + h) - f(x) ] / h.',
              'Standard trig limit: lim(x ➔ 0) (sin x / x) = 1 (where x is in radians!).',
              'Standard algebraic limit: lim(x ➔ a) (x^n - a^n) / (x - a) = n · a^(n - 1).'
            ],
            formulaOrEquation: 'f\'(x) = lim_{h ➔ 0} [f(x+h) - f(x)] / h | lim_{x ➔ 0} (sin x / x) = 1'
          }
        ],
        mindmap: {
          center: 'Combinatorics & Limits',
          branches: [
            {
              title: '1. Counting Principles',
              subtopics: ['Multiplication rule (AND)', 'Addition rule (OR)', 'Factorial notation n! properties', 'Linear vs Circular arrangements'],
              examTip: 'Circular permutations of n distinct objects = (n - 1)!. For garland/necklace = (n - 1)! / 2.',
              color: 'blue'
            },
            {
              title: '2. Permutations & Combinations',
              subtopics: ['nPr formula derivation', 'Identical objects rearrangement n!/(p!q!)', 'nCr combination formula', 'Pascal\'s triangle identity'],
              examTip: 'Remember nCr = nCn-r (e.g. 100C98 = 100C2 = (100 * 99) / 2 = 4950).',
              color: 'purple'
            },
            {
              title: '3. Limits Evaluation',
              subtopics: ['Left hand limit (LHL) & Right hand limit (RHL)', 'Factorization method', 'Rationalization method', 'Trigonometric limit lim (sin x / x) = 1'],
              examTip: 'A limit exists iff LHL = RHL = finite real number.',
              color: 'emerald'
            },
            {
              title: '4. First Principle Derivative',
              subtopics: ['Definition f\'(x) = lim [f(x+h)-f(x)]/h', 'Derivative of x^n = n x^(n-1)', 'Derivative of sin x = cos x', 'Derivative of cos x = -sin x'],
              examTip: 'Always expand sin(x + h) using sin A cos B + cos A sin B before taking the limit.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
