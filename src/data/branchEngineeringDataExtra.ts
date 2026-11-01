import { Subject } from '../types';

// ============================================================================
// COMPREHENSIVE BRANCH-SPECIFIC ("TEAM") ENGINEERING CURRICULUM - EXTRA SUBJECTS
// Completes 2+ high-quality department core subjects for EVERY branch and EVERY year
// ECE, EEE, MECH, CSM, IT, and CSE
// Fully populated with BoS Faculty, Units, Exam Weightage, Topic-at-a-Glance & Mindmaps
// ============================================================================

export const EXTRA_BRANCH_SUBJECTS: Subject[] = [
  // ==========================================================================
  // ECE (ELECTRONICS & COMMUNICATION ENGINEERING)
  // ==========================================================================

  // --- ECE 3RD YEAR ---
  {
    id: 'ece-mpmc-3rd',
    code: '20EC3102',
    name: 'Microprocessors & Microcontrollers (8086 & 8051)',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'ece',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: '8086 Microprocessor Architecture, Memory Segmentation & Instruction Set',
        keyTopics: [
          '8086 internal architecture: Bus Interface Unit (BIU) and Execution Unit (EU)',
          'Memory segmentation: Code, Data, Stack, and Extra segments; 20-bit physical address calculation',
          'Addressing modes (Immediate, Register, Direct, Register Indirect, Based, Indexed)',
          '8086 flag register status bits and pin configuration (Minimum vs Maximum mode)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. V. Leela Rani',
        verifiedRole: 'AUCOE Embedded Systems BoS',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.97,
        upvotes: 930,
        videoDuration: '5m 20s',
        summaryTelugu: '8086 మైక్రోప్రాసెసర్ ఆర్కిటెక్చర్: BIU మరియు EU వర్కింగ్, 20-బిట్ ఫిజికల్ అడ్రస్ జనరేషన్ (Segment * 16 + Offset), అడ్రసింగ్ మోడ్‌లు మరియు మినిమం/మాగ్జిమం మోడ్ పిన్ డయాగ్రామ్.',
        summaryEnglish: 'Complete breakdown of pipelined instruction queue, physical address calculation formula with worked examples, and assembly language addressing modes.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 6,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: '8086 20-bit Physical Address Calculation',
            quickTake: 'Combines 16-bit Segment register with 16-bit Offset register to access 1 MB memory.',
            keyPoints: [
              'Formula: Physical Address = (Segment Register Contents * 10H) + Offset Address.',
              'Example: If CS = 348AH and IP = 4214H, then PA = 348A0H + 4214H = 38AB4H.',
              'Allows dynamic relocation of code and data across memory segments.'
            ],
            formulaOrEquation: 'Physical Address = (Segment * 16) + Offset'
          },
          {
            topic: 'BIU vs EU Pipelined Architecture',
            quickTake: 'Simultaneous instruction fetch and execution using a 6-byte prefetch instruction queue.',
            keyPoints: [
              'BIU (Bus Interface Unit): Fetches instructions, handles bus cycles, computes 20-bit physical addresses.',
              'EU (Execution Unit): Decodes instructions, executes operations using 16-bit ALU and general registers (AX, BX, CX, DX).',
              'Instruction queue implements two-stage instruction pipelining, drastically speeding up processing.'
            ],
            formulaOrEquation: 'Pipelining Speedup: Fetch Next Instruction while Executing Current Instruction'
          }
        ],
        mindmap: {
          center: '8086 Microprocessor',
          branches: [
            {
              title: '1. Internal Architecture',
              subtopics: ['Bus Interface Unit (BIU)', 'Execution Unit (EU)', '6-byte Instruction Queue', 'General Purpose Registers AX, BX, CX, DX'],
              examTip: 'Draw clean diagram separating BIU and EU with the 6-byte FIFO queue in the middle.',
              color: 'blue'
            },
            {
              title: '2. Memory Segmentation',
              subtopics: ['1 MB Memory space (2^20 bytes)', 'Code (CS), Data (DS), Stack (SS), Extra (ES)', 'Logical address Segment:Offset', 'Default segment-offset pairings (CS:IP, SS:SP)'],
              examTip: 'Remember to multiply segment register by 10H (or shift left by 4 bits) before adding offset.',
              color: 'purple'
            },
            {
              title: '3. Addressing Modes',
              subtopics: ['Immediate (MOV AX, 1234H)', 'Direct (MOV AX, [2000H])', 'Register Indirect (MOV AX, [BX])', 'Based Indexed with Displacement'],
              examTip: 'Only BX, BP, SI, and DI can be used inside memory reference brackets [].',
              color: 'emerald'
            },
            {
              title: '4. Minimum vs Maximum Mode',
              subtopics: ['MN/MX pin strapping', 'Min mode: Single processor with 8284 clock generator', 'Max mode: Multiprocessor with 8288 bus controller', 'Control bus signals: RD, WR, M/IO, DEN, DT/R'],
              examTip: 'In Max mode, status pins S0, S1, S2 are decoded by the 8288 bus controller.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- ECE 4TH YEAR ---
  {
    id: 'ece-cellular-4th',
    code: '20EC4102',
    name: 'Wireless & Cellular Communications (5G & IoT)',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'ece',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Cellular Concept, Frequency Reuse & Handover Strategies',
        keyTopics: [
          'Cellular system architecture: Hexagonal cell geometry and frequency reuse cluster sizes (N = i² + ij + j²)',
          'Co-channel interference (CCI) and Signal-to-Interference Ratio (S/I) calculations',
          'Capacity expansion techniques: Cell splitting, cell sectoring, and microcell zones',
          'Handoff strategies: Hard handoff vs Soft handoff, Mobile-Assisted Handoff (MAHO)'
        ],
        readingTime: '25 mins',
        verifiedBy: 'Dr. G. Sasibhushana Rao',
        verifiedRole: 'AUCOE Communications Lab Director',
        pdfPages: 20,
        fileSize: '3.0 MB',
        rating: 4.96,
        upvotes: 910,
        videoDuration: '5m 10s',
        summaryTelugu: 'సెల్యులార్ కమ్యూనికేషన్స్: ఫ్రీక్వెన్సీ రీయూజ్ ఫార్ములా N = i² + ij + j², కో-ఛానల్ ఇంటర్‌ఫెరెన్స్ S/I రేషియో, సెల్ స్ప్లిట్టింగ్ మరియు హ్యాండ్‌ఆఫ్ టెక్నిక్స్.',
        summaryEnglish: 'Rigorous derivation of frequency reuse cluster size, worst-case co-channel interference ratio (18 dB benchmark), and cell sectoring methods.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 12,
        topicAtAGlance: [
          {
            topic: 'Frequency Reuse Cluster Size & Co-channel Distance',
            quickTake: 'Allocates different frequency bands to adjacent cells while reusing them in distant cells to prevent interference.',
            keyPoints: [
              'Cluster Size N = i² + ij + j² (Allowed N values: 3, 4, 7, 9, 12...).',
              'Co-channel reuse ratio Q = D / R = √(3N), where D is distance between co-channel cells and R is cell radius.',
              'For N = 7, Q = √(21) ≈ 4.58. Increasing N decreases capacity but increases carrier-to-interference ratio.'
            ],
            formulaOrEquation: 'N = i² + ij + j² | Q = D / R = √(3N) | S/I = (√(3N))^n / i0'
          },
          {
            topic: 'Capacity Enhancement: Splitting vs Sectoring',
            quickTake: 'Techniques to accommodate explosive user growth without requiring new radio spectrum.',
            keyPoints: [
              'Cell Splitting: Subdividing congested cells into smaller microcells with reduced transmitter power, increasing channel density per km².',
              'Cell Sectoring: Replacing omni-directional antennas with 120° (3 sectors) or 60° (6 sectors) directional antennas to cut co-channel interferers from 6 to 2 or 1.'
            ],
            formulaOrEquation: 'S/I with 120° Sectoring = (√(3N))^n / 2 (Interferers cut from 6 to 2)'
          }
        ],
        mindmap: {
          center: 'Cellular System Engineering',
          branches: [
            {
              title: '1. Cellular Geometry',
              subtopics: ['Hexagonal coverage pattern', 'Cluster size N = i² + ij + j²', 'Channel allocation per cell', 'Traffic engineering & Erlang B'],
              examTip: 'For N = 7, start at cell center, move i=2 cells along any hex chain, turn 60° counter-clockwise and move j=1 cell.',
              color: 'blue'
            },
            {
              title: '2. Interference Analysis',
              subtopics: ['Co-channel interference (CCI)', 'Adjacent channel interference (ACI)', 'Path loss exponent n (typically 4)', 'First-tier 6 interfering cells'],
              examTip: 'Standard target S/I for acceptable voice quality in AMPS/GSM is 18 dB.',
              color: 'purple'
            },
            {
              title: '3. Capacity Expansion',
              subtopics: ['Cell splitting (power scaled down)', '120° & 60° Cell sectoring', 'Microcell zone concept', 'Dynamic channel borrowing'],
              examTip: 'Cell splitting increases number of base stations; sectoring improves S/I without adding base station sites.',
              color: 'emerald'
            },
            {
              title: '4. Handoff Mechanisms',
              subtopics: ['Handoff threshold margin Δ', 'Hard handoff (break before make)', 'Soft handoff in CDMA (make before break)', 'Delaying handoff & Ping-pong effect'],
              examTip: 'Mobile-Assisted Handoff (MAHO) enables the mobile handset to measure beacon signal strengths of neighboring base stations.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================================================
  // EEE (ELECTRICAL & ELECTRONICS ENGINEERING)
  // ==========================================================================

  // --- EEE 2ND YEAR ---
  {
    id: 'eee-machines-2nd',
    code: '20EE2102',
    name: 'DC Machines & Transformers',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'eee',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'DC Generator Principles, EMF Equation & Transformer OC/SC Tests',
        keyTopics: [
          'DC Generator construction: Armature winding (Lap vs Wave winding comparisons)',
          'Generated EMF equation: Eg = (Φ * Z * N * P) / (60 * A)',
          'Armature reaction: Demagnetizing and cross-magnetizing ampere-turns and compensating windings',
          'Single-phase transformer equivalent circuit parameters determination via Open-Circuit (OC) and Short-Circuit (SC) tests'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. K. Narasimha Rao',
        verifiedRole: 'AUCOE Electrical Machines Dept',
        pdfPages: 22,
        fileSize: '3.3 MB',
        rating: 4.97,
        upvotes: 945,
        videoDuration: '5m 20s',
        summaryTelugu: 'DC మెషీన్స్ & ట్రాన్స్‌ఫార్మర్స్: జనరేటర్ EMF ఈక్వేషన్ Eg = (ΦZN/60) * (P/A), ఆర్మేచర్ రియాక్షన్, లాప్ vs వేవ్ వైండింగ్ మరియు ట్రాన్స్‌ఫార్మర్ OC/SC టెస్టులు.',
        summaryEnglish: 'Step-by-step derivation of generated EMF, copper and core loss separation, and predetermination of regulation and efficiency via OC/SC test calculations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'DC Generator EMF Equation & Armature Windings',
            quickTake: 'Quantifies induced electro-motive force produced by rotating armature conductors cutting magnetic flux.',
            keyPoints: [
              'EMF Equation: Eg = (Φ * Z * N / 60) * (P / A).',
              'Lap Winding: Parallel paths A = P (Used for high current, low voltage generators).',
              'Wave Winding: Parallel paths A = 2 (Used for high voltage, low current generators).'
            ],
            formulaOrEquation: 'Eg = (Φ * Z * N * P) / (60 * A) | Lap: A = P | Wave: A = 2'
          },
          {
            topic: 'Transformer Open-Circuit & Short-Circuit Tests',
            quickTake: 'Determines equivalent circuit parameters (R01, X01, Rc, Xm) without actual full-load testing.',
            keyPoints: [
              'Open-Circuit (OC) Test: Conducted at rated voltage on LV side with HV open. Measures core losses (iron loss Pi) and magnetizing parameters (Rc, Xm).',
              'Short-Circuit (SC) Test: Conducted at reduced voltage on HV side with LV shorted. Measures full-load copper losses (Pcu) and series impedance (R01, X01).'
            ],
            formulaOrEquation: 'Pi = Voc * Ioc * cos Φ0 | Pcu = Vsc * Isc * cos Φsc | Efficiency η = V2*I2*cosΦ / (Output + Pi + Pcu)'
          }
        ],
        mindmap: {
          center: 'DC Machines & Transformers',
          branches: [
            {
              title: '1. DC Generator Working',
              subtopics: ['Faraday\'s law of electromagnetic induction', 'Commutator mechanical rectification', 'Lap winding (A=P) vs Wave (A=2)', 'EMF equation derivation'],
              examTip: 'Remember: In wave winding, A is always 2 regardless of the number of magnetic poles P.',
              color: 'blue'
            },
            {
              title: '2. Armature Reaction',
              subtopics: ['Magnetic Neutral Axis (MNA) shift', 'Cross-magnetizing effect (field distortion)', 'Demagnetizing effect (weakens main flux)', 'Compensating windings & Interpoles'],
              examTip: 'Brush shift in generators is in direction of rotation; in motors it is opposite to rotation.',
              color: 'purple'
            },
            {
              title: '3. Transformer Core Losses',
              subtopics: ['Hysteresis loss Wh = η * Bmax^1.6 * f * V', 'Eddy current loss We = Ke * Bmax² * f² * t² * V', 'Thin silicon steel laminations', 'All-day efficiency for distribution transformers'],
              examTip: 'Laminating the transformer core reduces eddy current loss proportional to square of thickness t².',
              color: 'emerald'
            },
            {
              title: '4. Testing & Regulation',
              subtopics: ['OC test for core parameters Rc, Xm', 'SC test for winding parameters R01, X01', 'Voltage regulation: (VNL - VFL) / VFL', 'Condition for maximum efficiency: Copper loss = Iron loss'],
              examTip: 'Maximum efficiency occurs at load fraction k = √(Pi / Pcu_fl).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- EEE 3RD YEAR ---
  {
    id: 'eee-powerelec-3rd',
    code: '20EE3102',
    name: 'Power Electronics & Industrial Drives',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'eee',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Thyristor (SCR) Characteristics, Phase-Controlled Rectifiers & Choppers',
        keyTopics: [
          'Silicon Controlled Rectifier (SCR): Static V-I characteristics, Two-transistor analogy and latching/holding current',
          'SCR turn-on methods (gate triggering, dv/dt triggering) and commutation techniques (Class A to F)',
          'Single-Phase and Three-Phase Fully Controlled Bridge Converters with R and RL loads',
          'DC-DC Switch Mode Converters: Buck (step-down), Boost (step-up), and Buck-Boost operations in CCM'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. P. Mallikarjuna Rao',
        verifiedRole: 'AUCOE Power Electronics BoS',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.96,
        upvotes: 935,
        videoDuration: '5m 15s',
        summaryTelugu: 'పవర్ ఎలక్ట్రానిక్స్: SCR వర్కింగ్, టూ-ట్రాన్సిస్టర్ అనాలజీ, లాచింగ్ vs హోల్డింగ్ కరెంట్, ఫేజ్ కంట్రోల్డ్ రెక్టిఫైయర్స్ మరియు బక్/బూస్ట్ DC-DC ఛాపర్స్.',
        summaryEnglish: 'Rigorous two-transistor mathematical derivation of SCR latching, average output DC voltage expressions for controlled rectifiers, and chopper duty ratio derivations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'SCR Two-Transistor Analogy & Latching vs Holding Current',
            quickTake: 'Models 4-layer PNPN thyristor as coupled PNP and NPN bipolar transistors producing regenerative gate latching.',
            keyPoints: [
              'Anode current equation: Ia = (α2 * Ig + Ico1 + Ico2) / [1 - (α1 + α2)]. When (α1 + α2) -> 1, current shoots to infinity.',
              'Latching Current (IL): Minimum anode current required to transition SCR from OFF to ON and maintain it ON when gate pulse is removed.',
              'Holding Current (IH): Minimum anode current below which SCR turns OFF (IL is typically 2 to 3 times greater than IH).'
            ],
            formulaOrEquation: 'Ia = (α2 * Ig + Icbo1 + Icbo2) / [1 - (α1 + α2)] | IL > IH'
          },
          {
            topic: 'DC-DC Buck & Boost Converters in Continuous Conduction',
            quickTake: 'High-frequency PWM switching converts unregulated DC to regulated stepped-down or stepped-up voltage.',
            keyPoints: [
              'Buck Converter: Vout = D * Vin (Always steps down, 0 < D < 1).',
              'Boost Converter: Vout = Vin / (1 - D) (Always steps up, 0 < D < 1).',
              'Buck-Boost: Vout = -Vin * [D / (1 - D)] (Inverting polarity with variable gain).'
            ],
            formulaOrEquation: 'Buck: V0 = D*Vin | Boost: V0 = Vin / (1 - D) | Duty Ratio D = Ton / (Ton + Toff)'
          }
        ],
        mindmap: {
          center: 'Power Electronics Converters',
          branches: [
            {
              title: '1. SCR Fundamentals',
              subtopics: ['Four-layer PNPN structure', 'Forward blocking vs Forward conduction', 'Latching current IL vs Holding current IH', 'dv/dt and di/dt snubber protection'],
              examTip: 'Snubber circuit consists of series R-C connected across SCR to limit rate of rise of forward voltage dv/dt.',
              color: 'blue'
            },
            {
              title: '2. Controlled Rectifiers',
              subtopics: ['Single-phase full bridge converter V0 = (2Vm/π) cos α', 'Three-phase full converter V0 = (3Vm_L/π) cos α', 'Discontinuous conduction mode', 'Freewheeling diode effect on RL loads'],
              examTip: 'Freewheeling diode prevents negative output voltage swings and dissipates inductive stored energy.',
              color: 'purple'
            },
            {
              title: '3. DC-DC Choppers',
              subtopics: ['Step-down Buck converter (V0 = D*Vin)', 'Step-up Boost converter (V0 = Vin/(1-D))', 'Buck-Boost converter', 'Inductor volt-second balance principle'],
              examTip: 'Inductor volt-second balance: Average voltage across inductor in steady state over one switching cycle is zero.',
              color: 'emerald'
            },
            {
              title: '4. Inverters & Drives',
              subtopics: ['1-phase and 3-phase Voltage Source Inverters (VSI)', 'Sinusoidal Pulse Width Modulation (SPWM)', 'Total Harmonic Distortion (THD)', 'Induction motor V/f speed control'],
              examTip: 'Keeping V/f ratio constant maintains constant air-gap flux and maximum available torque across speeds.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- EEE 4TH YEAR ---
  {
    id: 'eee-ev-smartgrid-4th',
    code: '20EE4102',
    name: 'Electric Vehicles & Smart Grid Technologies',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'eee',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'EV Powertrain Architecture, Battery Management Systems (BMS) & Smart Grids',
        keyTopics: [
          'EV powertrain configurations: Battery Electric Vehicles (BEV), Plug-in Hybrids (PHEV), and Fuel Cell EVs',
          'Electric motors for EV propulsion: Permanent Magnet Synchronous Motors (PMSM) vs BLDC motors vs Induction Motors',
          'Battery Management System (BMS): Cell balancing topologies, State of Charge (SoC) estimation via Coulomb counting & Extended Kalman Filters',
          'Smart Grid architecture: Advanced Metering Infrastructure (AMI), Phasor Measurement Units (PMU), Vehicle-to-Grid (V2G) integration'
        ],
        readingTime: '25 mins',
        verifiedBy: 'Dr. G. V. Siva Krishna Rao',
        verifiedRole: 'AUCOE Clean Energy & Smart Grids Lab',
        pdfPages: 21,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 920,
        videoDuration: '5m 10s',
        summaryTelugu: 'ఎలక్ట్రిక్ వెహికల్స్ & స్మార్ట్ గ్రిడ్: EV పవర్‌ట్రెయిన్, PMSM మోటార్లు, బ్యాటరీ మేనేజ్‌మెంట్ సిస్టమ్ (SoC Coulomb Counting), మరియు వెహికల్-టు-గ్రిడ్ (V2G) టెక్నాలజీ.',
        summaryEnglish: 'Comprehensive powertrain tractive effort equations, Li-ion battery equivalent circuit models, cell passive/active balancing, and bidirectional V2G converter operations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 13,
        topicAtAGlance: [
          {
            topic: 'Vehicle Tractive Effort & Motor Sizing',
            quickTake: 'Calculates total force required at the wheels to overcome rolling resistance, aerodynamic drag, and grade resistance.',
            keyPoints: [
              'Total Tractive Force Ft = Frr + Fad + Fg + Fa.',
              'Rolling resistance: Frr = Crr * M * g * cos θ.',
              'Aerodynamic drag: Fad = 0.5 * ρ * Cd * Af * v².',
              'Grade resistance: Fg = M * g * sin θ.'
            ],
            formulaOrEquation: 'Ft = M*g*Crr + 0.5*ρ*Cd*Af*v² + M*g*sin θ + M*a'
          },
          {
            topic: 'Battery State of Charge (SoC) & Active Cell Balancing',
            quickTake: 'Monitors available chemical energy in lithium cells and equalizes voltage across series battery strings.',
            keyPoints: [
              'Coulomb Counting: SoC(t) = SoC(0) - (1 / Qrated) * ∫ I(t) dt.',
              'Passive Balancing: Bleeds excess energy from highest voltage cells as heat through shunt resistors.',
              'Active Balancing: Shuttles charge between cells using switched-capacitor or inductor circuits with > 85% energy efficiency.'
            ],
            formulaOrEquation: 'SoC(t) = SoC(0) - (1/Q) ∫ I dt | Active Balancing uses Switched Capacitors/Inductors'
          }
        ],
        mindmap: {
          center: 'EV & Smart Grid Systems',
          branches: [
            {
              title: '1. EV Powertrains',
              subtopics: ['BEV vs PHEV architecture', 'Single vs Multi-speed gearboxes', 'PMSM high power density', 'Regenerative braking energy recovery'],
              examTip: 'PMSM offers higher efficiency at low/medium speeds due to permanent magnets, while Induction Motors excel at high-speed field weakening.',
              color: 'blue'
            },
            {
              title: '2. Battery Management (BMS)',
              subtopics: ['LiFePO4 vs NMC chemistries', 'Thermal runaway prevention', 'Coulomb counting & Kalman filter SoC', 'State of Health (SoH) degradation'],
              examTip: 'Coulomb counting accumulates drift over time and requires periodic recalibration at full-charge voltage.',
              color: 'purple'
            },
            {
              title: '3. Charging Infrastructure',
              subtopics: ['AC Level 1 & Level 2 onboard charging', 'DC Fast Charging (CCS2, CHAdeMO)', 'Constant Current - Constant Voltage (CC-CV)', 'Wireless inductive power transfer'],
              examTip: 'Li-ion batteries are charged with Constant Current (CC) up to 4.2V/cell, followed by Constant Voltage (CV) until current tapers.',
              color: 'emerald'
            },
            {
              title: '4. Smart Grid & V2G',
              subtopics: ['Vehicle-to-Grid (V2G) bidirectional power', 'Peak shaving and frequency regulation', 'Phasor Measurement Units (PMU)', 'Microgrid islanding and synchronization'],
              examTip: 'V2G transforms parked EV fleets into distributed battery energy storage systems (BESS) for grid load leveling.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================================================
  // MECH (MECHANICAL ENGINEERING)
  // ==========================================================================

  // --- MECH 3RD YEAR ---
  {
    id: 'mech-fmhm-3rd',
    code: '20ME3102',
    name: 'Fluid Mechanics & Hydraulic Machinery (FMHM)',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'mech',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Fluid Kinematics, Bernoulli\'s Equation & Hydraulic Turbines',
        keyTopics: [
          'Fluid flow classifications: Steady vs Unsteady, Uniform vs Non-uniform, Laminar vs Turbulent (Reynolds Number)',
          'Continuity equation in 3D Cartesian coordinates: ∂ρ/∂t + ∂(ρu)/∂x + ∂(ρv)/∂y + ∂(ρw)/∂z = 0',
          'Euler\'s equation and Bernoulli\'s energy conservation equation along a streamline with head losses',
          'Hydraulic Turbines: Pelton wheel (impulse) vs Francis & Kaplan turbines (reaction) velocity triangles and efficiencies'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. B. V. Ramana Murty',
        verifiedRole: 'AUCOE Fluid Mechanics BoS',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 20s',
        summaryTelugu: 'ఫ్లూయిడ్ మెకానిక్స్ & హైడ్రాలిక్ టర్బైన్లు: బెర్నౌలీ ఈక్వేషన్, కంటిన్యూటీ ఈక్వేషన్, పెల్టన్ వీల్ & ఫ్రాన్సిస్ టర్బైన్ వెలాసిటీ ట్రయాంగిల్స్ మరియు ఎఫిషియన్సీ.',
        summaryEnglish: 'Complete step-by-step derivation of Bernoulli\'s equation from Euler\'s momentum equation, Venturimeter discharge formulas, and Pelton wheel velocity diagrams.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Bernoulli\'s Equation & Discharge Measurement',
            quickTake: 'Conservation of mechanical energy for steady, incompressible, frictionless fluid flow along a streamline.',
            keyPoints: [
              'Total Head = Pressure Head (p / ρg) + Velocity Head (v² / 2g) + Datum Head (z) = Constant.',
              'Venturimeter Actual Discharge: Q_actual = Cd * [a1 * a2 / √(a1² - a2²)] * √(2gh).',
              'Cd (Coefficient of Discharge) for Venturimeter is 0.96 - 0.98; for Orifice meter it is 0.60 - 0.65.'
            ],
            formulaOrEquation: 'p/(ρg) + v²/(2g) + z = Constant | Q = Cd * [a1*a2 / √(a1²-a2²)] * √(2gh)'
          },
          {
            topic: 'Pelton Wheel Impulse Turbine Velocity Triangles',
            quickTake: 'Converts high kinetic energy of high-head water jet into mechanical shaft rotation using double hemispherical buckets.',
            keyPoints: [
              'Water jet velocity: V1 = Cv * √(2gH), where Cv ≈ 0.98 and H is net available head.',
              'Blade velocity: u = φ * √(2gH), where speed ratio φ ≈ 0.44 to 0.46.',
              'Hydraulic Efficiency: ηh = 2 * [Vw1 ± Vw2] * u / V1². Maximum theoretical efficiency = (1 + k cos β) / 2.'
            ],
            formulaOrEquation: 'ηh = 2 * (Vw1 + Vw2) * u / V1² | Max ηh = (1 + k*cos β) / 2'
          }
        ],
        mindmap: {
          center: 'Fluid Dynamics & Turbines',
          branches: [
            {
              title: '1. Fluid Statics & Kinematics',
              subtopics: ['Pascal\'s law & hydrostatic pressure', 'Streamline, Streakline & Pathline', '3D Continuity equation', 'Velocity potential φ and Stream function ψ'],
              examTip: 'For flow to be irrotational, vorticity must be zero and Laplace equation ∇²φ = 0 must hold.',
              color: 'blue'
            },
            {
              title: '2. Bernoulli & Pipe Flow',
              subtopics: ['Euler\'s equation along streamline', 'Bernoulli\'s energy equation', 'Darcy-Weisbach head loss hf = 4fLv²/(2gd)', 'Hydraulic Gradient Line (HGL) vs Total Energy Line (TEL)'],
              examTip: 'TEL is always above HGL by dynamic velocity head v²/(2g).',
              color: 'purple'
            },
            {
              title: '3. Pelton Wheel (Impulse)',
              subtopics: ['High head, low discharge installation', 'Double hemispherical splitter bucket', 'Inlet & Outlet velocity triangles', 'Governing mechanism with spear needle'],
              examTip: 'At inlet of Pelton wheel, blade velocity u1 = u2 = u, and water enters tangentially without guide blades.',
              color: 'emerald'
            },
            {
              title: '4. Reaction Turbines (Francis/Kaplan)',
              subtopics: ['Medium/low head, high discharge', 'Draft tube functions & pressure recovery', 'Cavitation phenomena & Thoma number σ', 'Specific speed Ns = N√P / H^(5/4)'],
              examTip: 'Draft tube converts residual kinetic energy at turbine runner exit into useful pressure head.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- MECH 4TH YEAR ---
  {
    id: 'mech-automobile-4th',
    code: '20ME4102',
    name: 'Automobile Engineering & Power Plant Systems',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'mech',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'IC Engine Cycles, Fuel Injection, Transmission & Power Plants',
        keyTopics: [
          '4-stroke Spark Ignition (Otto) vs Compression Ignition (Diesel) cycles and indicator diagrams',
          'Advanced fuel injection: Common Rail Direct Injection (CRDI) and Multi-Point Fuel Injection (MPFI)',
          'Transmission system: Single plate and multi-plate clutches, Synchromesh gearbox, Differential mechanism',
          'Thermal Power Plant Rankine cycle: Reheat and regenerative feedwater heating efficiency improvements'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. M. Amrita',
        verifiedRole: 'AUCOE Automotive & Thermal Engg Lab',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.96,
        upvotes: 930,
        videoDuration: '5m 15s',
        summaryTelugu: 'ఆటోమొబైల్ ఇంజనీరింగ్: 4-స్ట్రోక్ పెట్రోల్ vs డీజిల్ సైకిల్స్, CRDI ఫ్యూయల్ ఇంజెక్షన్, సింక్రోమెష్ గేర్‌బాక్స్, డిఫరెన్షియల్ మరియు రీహీట్ ర్యాంకైన్ సైకిల్.',
        summaryEnglish: 'Clean labeled schematics of automotive transmission powertrains, differential gear action during cornering, and Rankine T-s thermal efficiency improvements.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Automotive Differential Mechanism Working',
            quickTake: 'Allows outer drive wheel to rotate faster than inner drive wheel when navigating curves.',
            keyPoints: [
              'Crown wheel and pinion drive differential cage; sun gears connect to left and right half-shafts via planet pinions.',
              'Straight line driving: Planet pinions do not rotate on their pins; both wheels spin at identical speed N.',
              'Turning corner: Inner wheel faces resistance; planet pinions rotate on their pins so N_outer = N_cage + ΔN and N_inner = N_cage - ΔN.'
            ],
            formulaOrEquation: 'Speed Relation: N_left + N_right = 2 * N_crown'
          },
          {
            topic: 'CRDI Fuel Injection in Modern Diesel Engines',
            quickTake: 'Maintains ultra-high fuel pressure (up to 2000+ bar) in a common rail independent of engine speed.',
            keyPoints: [
              'High-pressure pump supplies fuel to shared rail with pressure sensor and regulator valve.',
              'Electronically controlled solenoid or piezoelectric injectors provide multi-stage injection: Pilot (reduces knocking), Main (produces power), Post (burns particulates in DPF).'
            ],
            formulaOrEquation: 'Common Rail Pressure: 1500 - 2200 bar | Multi-stage: Pilot, Main, Post Injection'
          }
        ],
        mindmap: {
          center: 'Automotive & Power Plant Systems',
          branches: [
            {
              title: '1. Engine Thermals & Injection',
              subtopics: ['Otto vs Diesel vs Dual cycles', 'CRDI common rail diesel injection', 'MPFI electronic petrol injection', 'Turbocharging & Intercooling'],
              examTip: 'Turbochargers utilize exhaust gas enthalpy to drive a turbine-compressor that increases intake air density.',
              color: 'blue'
            },
            {
              title: '2. Clutches & Transmissions',
              subtopics: ['Single-plate friction clutch torque T = μW R_mean', 'Synchromesh gearbox ring cones', 'Automatic Torque Converters', 'Epicyclic planetary gear trains'],
              examTip: 'Uniform wear theory is used for worn clutches (R_mean = (r1 + r2)/2); uniform pressure is used for brand new clutches.',
              color: 'purple'
            },
            {
              title: '3. Drive Axles & Steering',
              subtopics: ['Propeller shaft & Universal Hooke joints', 'Differential sun and planet gears', 'Ackermann steering geometry condition: cot θ - cot φ = c/b', 'Hydraulic & Electronic Power Steering (EPS)'],
              examTip: 'Ackermann steering ensures all four wheels turn about a single instantaneous center of rotation.',
              color: 'emerald'
            },
            {
              title: '4. Power Plant Rankine Cycles',
              subtopics: ['Basic Rankine cycle T-s diagram', 'Reheat cycle (reduces moisture at LP exit)', 'Regenerative feedwater heaters (FWH)', 'Cogeneration & Combined cycle power plants'],
              examTip: 'Reheating increases turbine work output and keeps steam quality above 88% at turbine exhaust, avoiding blade erosion.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================================================
  // CSM (CSE - AI & MACHINE LEARNING)
  // ==========================================================================

  // --- CSM 2ND YEAR ---
  {
    id: 'csm-math-ds-2nd',
    code: '20AI2102',
    name: 'Mathematics & Statistics for Data Science',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'csm',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'maths',
    units: [
      {
        unitNumber: 1,
        title: 'Probability Distributions, Bayes\' Theorem & Matrix Decompositions',
        keyTopics: [
          'Probability axioms, Conditional probability, Law of Total Probability and Bayes\' Theorem with medical diagnosis applications',
          'Random variables and probability distributions: Normal (Gaussian), Binomial, Poisson, and Central Limit Theorem (CLT)',
          'Covariance, Correlation matrix, and Eigenvalue decomposition in high-dimensional feature spaces',
          'Principal Component Analysis (PCA) and Singular Value Decomposition (SVD): Mathematical formulation and dimensionality reduction'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. S. K. Patnaik',
        verifiedRole: 'AUCOE AI & Statistics BoS',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'డేటా సైన్స్ మ్యాథమెటిక్స్: బేయెస్ సిద్ధాంతం P(A|B), గౌసియన్ నార్మల్ డిస్ట్రిబ్యూషన్, సెంట్రల్ లిమిట్ థియరం (CLT), PCA మరియు SVD మేట్రిక్స్ డికంపోజిషన్.',
        summaryEnglish: 'Rigorous step-by-step proofs of Bayes theorem, covariance matrix diagonalization, PCA projection vector derivations, and SVD low-rank approximation.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Bayes\' Theorem & Prior/Posterior Odds',
            quickTake: 'Updates the probability of a hypothesis H given new observed evidence E.',
            keyPoints: [
              'Formula: P(H|E) = [P(E|H) * P(H)] / P(E).',
              'P(H) is Prior probability; P(E|H) is Likelihood; P(E) is Evidence; P(H|E) is Posterior probability.',
              'P(E) = Σ P(E|Hi) * P(Hi) by the Law of Total Probability.'
            ],
            formulaOrEquation: 'P(H|E) = [P(E|H) * P(H)] / Σ [P(E|Hi) * P(Hi)]'
          },
          {
            topic: 'Principal Component Analysis (PCA) via Covariance Eigenvectors',
            quickTake: 'Projects correlated d-dimensional data onto orthogonal directions of maximum variance.',
            keyPoints: [
              'Center data: X_centered = X - μ.',
              'Compute Covariance matrix: Σ = (1 / n) * X_centeredᵀ * X_centered.',
              'Calculate eigenvalues and eigenvectors of Σ: Principal components correspond to eigenvectors with highest eigenvalues.'
            ],
            formulaOrEquation: 'Σ = (1/n) XᵀX | Σ v = λ v | Projected Data Z = X * V_k'
          }
        ],
        mindmap: {
          center: 'Statistics & Math for AI',
          branches: [
            {
              title: '1. Probability & Bayes',
              subtopics: ['Conditional probability P(A|B)', 'Law of Total Probability', 'Bayes\' theorem formulation', 'Naive Bayes classification independence assumption'],
              examTip: 'In Naive Bayes, features are assumed conditionally independent given the class label: P(X|C) = Π P(xi|C).',
              color: 'blue'
            },
            {
              title: '2. Distributions & CLT',
              subtopics: ['Gaussian Normal distribution N(μ, σ²)', 'Standard normal variable Z = (X - μ)/σ', 'Central Limit Theorem (sample mean distribution)', 'Hypothesis testing (p-value, t-test, z-test)'],
              examTip: 'CLT states that for sample size n ≥ 30, the sampling distribution of the mean approaches normality regardless of population shape.',
              color: 'purple'
            },
            {
              title: '3. Vector Spaces & Matrices',
              subtopics: ['Vector projections & Dot products', 'Matrix rank & Null space', 'Positive semi-definite covariance matrices', 'Orthonormal basis & Gram-Schmidt process'],
              examTip: 'Covariance matrix is always symmetric and positive semi-definite; all its eigenvalues are real and non-negative.',
              color: 'emerald'
            },
            {
              title: '4. Dimensionality Reduction',
              subtopics: ['PCA variance maximization objective', 'SVD: A = U * Σ * Vᵀ', 'Low-rank matrix approximation (Eckart-Young theorem)', 'Scree plot and explained variance ratio'],
              examTip: 'Singular values in Σ of SVD are the square roots of the eigenvalues of AᵀA.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- CSM 3RD YEAR ---
  {
    id: 'csm-ml-deeplearn-3rd',
    code: '20AI3101',
    name: 'Machine Learning & Deep Neural Networks',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'csm',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Supervised Learning, Backpropagation & Convolutional Neural Networks',
        keyTopics: [
          'Supervised learning foundations: Linear regression, Logistic regression, Cost functions, and Regularization (L1 Lasso, L2 Ridge)',
          'Gradient Descent optimization algorithms: Batch, Stochastic (SGD), Mini-batch, Momentum, RMSProp, and Adam optimizer',
          'Multilayer Perceptron (MLP) & Backpropagation: Mathematical chain rule derivations for weight updates',
          'Deep Learning Architectures: Convolutional Neural Networks (CNNs) - Convolution, Stride, Padding, Pooling, and Batch Normalization'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. C. N. Rao',
        verifiedRole: 'AUCOE Deep Learning Lab Head',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 960,
        videoDuration: '5m 25s',
        summaryTelugu: 'డీప్ లెర్నింగ్ & న్యూరల్ నెట్‌వర్క్స్: గ్రేడియంట్ డీసెంట్, బ్యాక్‌ప్రాపగేషన్ చైన్ రూల్ డెరివేషన్, L1/L2 రెగ్యులరైజేషన్, మరియు CNN కన్వల్యూషన్-పూలింగ్ లేయర్స్.',
        summaryEnglish: 'Calculus chain rule for backpropagation gradient updates, cross-entropy loss gradients, Adam adaptive moments formulas, and CNN feature map dimensions.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 10,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Backpropagation Weight Updates via Chain Rule',
            quickTake: 'Propagates prediction error backwards through hidden layers using multivariable calculus to update weights.',
            keyPoints: [
              'Output layer error: δ_out = (y_pred - y_true) * f\'(z).',
              'Hidden layer error: δ_h = (W_nextᵀ * δ_next) ⊙ f\'(z_h).',
              'Weight update equation: W = W - η * (δ * a_prevᵀ), where η is learning rate.'
            ],
            formulaOrEquation: '∂L/∂W = δ * aᵀ | W_new = W_old - η * (∂L/∂W)'
          },
          {
            topic: 'Convolutional Feature Map Output Dimensions',
            quickTake: 'Calculates spatial dimensions of output feature map given input size, kernel size, padding, and stride.',
            keyPoints: [
              'Formula: Output Dimension = ⌊(W - K + 2P) / S⌋ + 1.',
              'W: Input width/height; K: Kernel size; P: Padding; S: Stride.',
              'Max Pooling reduces spatial dimension without learnable parameters while maintaining translational invariance.'
            ],
            formulaOrEquation: 'Output Size = ⌊(Input - Kernel + 2*Padding) / Stride⌋ + 1'
          }
        ],
        mindmap: {
          center: 'Deep Learning & Neural Networks',
          branches: [
            {
              title: '1. Machine Learning Basics',
              subtopics: ['Linear & Logistic Regression', 'Mean Squared Error vs Cross Entropy loss', 'Bias-Variance tradeoff', 'L1 Lasso (sparse) vs L2 Ridge (shrinkage)'],
              examTip: 'L1 regularization produces sparse feature weights by adding λ Σ |wi|, effectively performing automatic feature selection.',
              color: 'blue'
            },
            {
              title: '2. Optimization Algorithms',
              subtopics: ['Vanilla Gradient Descent', 'Stochastic Gradient Descent (noisy trajectory)', 'Momentum (exponential moving average of gradients)', 'Adam (Adaptive Moment Estimation: m_t and v_t)'],
              examTip: 'Adam combines the benefits of AdaGrad (frequent updates) and RMSProp (recent squared gradients).',
              color: 'purple'
            },
            {
              title: '3. Multilayer Perceptrons',
              subtopics: ['Activation functions: Sigmoid, Tanh, ReLU, Leaky ReLU', 'Vanishing/Exploding gradient problems', 'Backpropagation error propagation δ', 'Dropout regularization (p probability)'],
              examTip: 'ReLU activation f(x) = max(0, x) prevents vanishing gradients for positive inputs because its derivative is always 1.',
              color: 'emerald'
            },
            {
              title: '4. CNN Architectures',
              subtopics: ['Convolution operation with kernel filters', 'Valid vs Same padding', 'Max pooling & Average pooling', 'Famous architectures: LeNet, AlexNet, VGG16, ResNet'],
              examTip: 'ResNet introduces skip/residual connections: F(x) + x, solving the degradation problem in extremely deep networks.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- CSM 4TH YEAR (Extra companion to NLP) ---
  {
    id: 'csm-genai-mlops-4th',
    code: '20AI4102',
    name: 'Generative AI & MLOps Architecture',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'csm',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Diffusion Models, Transformer Attention & Production LLM Pipelines',
        keyTopics: [
          'Generative modeling paradigms: Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), and Denoising Diffusion Probabilistic Models (DDPM)',
          'Scaled Dot-Product Self-Attention: Mathematical formulation with Query, Key, and Value matrices (Q, K, V)',
          'Retrieval-Augmented Generation (RAG) Architecture: Embeddings, Vector Databases (Chroma/Pinecone), Chunking, and Top-K retrieval',
          'MLOps production pipelines: Model registry, data versioning (DVC), drift detection (Concept drift vs Data drift), and latency optimization (Quantization INT8/INT4)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. V. Kamakshi Prasad',
        verifiedRole: 'AUCOE Generative AI Research Lead',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 955,
        videoDuration: '5m 25s',
        summaryTelugu: 'జనరేటివ్ AI & MLOps: ట్రాన్స్‌ఫార్మర్ సెల్ఫ్-అటెన్షన్ Attention(Q,K,V), డిఫ్యూజన్ మోడల్స్, RAG వెక్టర్ డేటాబేసెస్ మరియు మోడల్ క్వాంటైజేషన్ (INT8/INT4).',
        summaryEnglish: 'Scaled dot-product attention softmax derivations, VAE reparameterization trick, RAG cosine similarity retrieval pipelines, and MLOps deployment architectures.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Scaled Dot-Product Self-Attention',
            quickTake: 'Calculates dynamic relevance weights between all token pairs in an input sequence.',
            keyPoints: [
              'Attention Formula: Attention(Q, K, V) = softmax( (Q * Kᵀ) / √dk ) * V.',
              'Q (Query), K (Key), V (Value) are linear projections of input embeddings: Q = X * Wq, K = X * Wk, V = X * Wv.',
              'Scaling by 1 / √dk prevents softmax from entering regions with dangerously small gradients when dimensions are large.'
            ],
            formulaOrEquation: 'Attention(Q, K, V) = softmax((Q Kᵀ) / √dk) * V'
          },
          {
            topic: 'Retrieval-Augmented Generation (RAG) Pipeline',
            quickTake: 'Enhances LLM responses with real-time proprietary data retrieved via semantic vector search.',
            keyPoints: [
              'Chunking & Ingestion: Documents split into semantic chunks and encoded into dense vector embeddings.',
              'Vector Indexing: Stored in vector database using approximate nearest neighbor indexing (HNSW).',
              'Generation: Top-K retrieved context is injected into LLM prompt template, eliminating hallucinations.'
            ],
            formulaOrEquation: 'Cosine Similarity = (u · v) / (||u|| ||v||) | Prompt = Template(Context, Query)'
          }
        ],
        mindmap: {
          center: 'Generative AI & MLOps',
          branches: [
            {
              title: '1. Generative Paradigms',
              subtopics: ['Autoencoders & VAE latent space', 'Reparameterization trick z = μ + σ ⊙ ε', 'GAN generator vs discriminator minimax game', 'Diffusion forward noise & reverse denoising'],
              examTip: 'The reparameterization trick makes the sampling operation differentiable so backpropagation can pass through latent space.',
              color: 'blue'
            },
            {
              title: '2. Transformers & LLMs',
              subtopics: ['Scaled dot-product attention', 'Multi-Head Attention (MHA)', 'Positional encodings (Sinusoidal & RoPE)', 'Decoder-only vs Encoder-Decoder LLMs'],
              examTip: 'Multi-head attention enables the model to jointly attend to information from different representation subspaces at different positions.',
              color: 'purple'
            },
            {
              title: '3. RAG Architecture',
              subtopics: ['Document chunking with overlap', 'Embedding models (e.g. OpenAI text-embed-3)', 'Vector databases (Pinecone, Milvus, Chroma)', 'Re-ranking and hybrid search (BM25 + Dense)'],
              examTip: 'Hybrid search combines lexical keyword matching (BM25) with semantic vector search for maximum retrieval accuracy.',
              color: 'emerald'
            },
            {
              title: '4. MLOps Deployment',
              subtopics: ['Model quantization (FP16 -> INT8 / INT4)', 'KV Cache optimization for fast generation', 'Data drift vs Concept drift monitoring', 'CI/CD automated testing for ML models'],
              examTip: 'Data drift is change in P(X) input feature distribution; Concept drift is change in P(Y|X) ground-truth relationship.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // ==========================================================================
  // IT (INFORMATION TECHNOLOGY)
  // ==========================================================================

  // --- IT 2ND YEAR ---
  {
    id: 'it-webdesign-js-2nd',
    code: '20IT2101',
    name: 'Web Application Fundamentals & Modern JavaScript',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'it',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'HTML5 Semantic Layouts, CSS3 Flexbox/Grid & ES6+ JavaScript',
        keyTopics: [
          'HTML5 semantic structure: header, nav, main, section, article, aside, footer, and accessibility (ARIA)',
          'CSS3 Modern Layouts: Flexbox (flex-direction, justify-content, align-items) and CSS Grid (grid-template-columns, fr units)',
          'JavaScript Execution Engine: Call stack, event loop, task queue, microtask queue (Promises vs setTimeout)',
          'ES6+ Features: Destructuring, arrow functions, template literals, spread/rest operators, modules (import/export), and async/await'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. M. P. V. Rao',
        verifiedRole: 'AUCOE IT Web Architecture Lead',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'వెబ్ డెవలప్‌మెంట్ ఫండమెంటల్స్: HTML5 సెమాంటిక్ ట్యాగ్స్, CSS3 ఫ్లెక్స్‌బాక్స్ & గ్రిడ్, జావాస్క్రిప్ట్ ఈవెంట్ లూప్, ప్రోమిసెస్ మరియు ES6+ async/await.',
        summaryEnglish: 'Clean code examples for responsive two-dimensional grid layouts, JavaScript asynchronous microtask vs macrotask execution orders, and DOM event delegation.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 6,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'JavaScript Event Loop & Microtask Priority',
            quickTake: 'Single-threaded non-blocking runtime executes synchronous code, then empties microtask queue before macrotask queue.',
            keyPoints: [
              'Call Stack: Synchronous function frames execute LIFO.',
              'Microtasks (Promise callbacks, queueMicrotask): Emptied completely before next event loop tick.',
              'Macrotasks (setTimeout, setInterval, I/O): Processed one at a time from task queue.'
            ],
            formulaOrEquation: 'Execution Priority: Synchronous Code -> Microtask Queue (Promises) -> Macrotask Queue (Timers)'
          },
          {
            topic: 'CSS Flexbox vs CSS Grid Systems',
            quickTake: 'Flexbox handles 1-dimensional row/column layouts; CSS Grid handles 2-dimensional grid alignments simultaneously.',
            keyPoints: [
              'Flexbox: display: flex; justify-content aligns on main axis; align-items aligns on cross axis.',
              'CSS Grid: display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); creates dynamic responsive cards without media queries.'
            ],
            formulaOrEquation: 'CSS Grid: grid-template-columns: repeat(auto-fit, minmax(min, 1fr))'
          }
        ],
        mindmap: {
          center: 'Web Fundamentals & JS',
          branches: [
            {
              title: '1. Semantic HTML5 & DOM',
              subtopics: ['Semantic markup vs generic div', 'DOM tree representation', 'Event bubbling & Event capturing', 'Event delegation efficiency'],
              examTip: 'Event delegation attaches a single event listener to a parent container to manage events from all present and future children.',
              color: 'blue'
            },
            {
              title: '2. Modern CSS3',
              subtopics: ['Box model (content, padding, border, margin)', 'Box-sizing: border-box', 'Flexbox 1D axis alignment', 'CSS Grid 2D tracks and areas'],
              examTip: 'border-box includes padding and border within the specified element width, preventing layout overflow glitches.',
              color: 'purple'
            },
            {
              title: '3. JavaScript Core Engine',
              subtopics: ['V8 execution context & Hoisting', 'Lexical scoping & Closures', 'Prototypal inheritance', 'Call stack and Heap memory'],
              examTip: 'A closure is the combination of a function bundled together with references to its surrounding lexical state.',
              color: 'emerald'
            },
            {
              title: '4. Asynchronous JS & ES6',
              subtopics: ['Callback hell limitations', 'Promise states (pending, fulfilled, rejected)', 'async / await syntactic sugar', 'ES6 Module bundling'],
              examTip: 'Async functions always return a Promise, whether an explicit return or resolved value.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- IT 3RD YEAR (Companion to Full Stack) ---
  {
    id: 'it-mobile-apps-3rd',
    code: '20IT3102',
    name: 'Mobile Application Development (Flutter & REST APIs)',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'it',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Flutter Widget Tree, State Management & RESTful API Integration',
        keyTopics: [
          'Cross-platform mobile architecture: React Native bridge vs Flutter Skia/Impeller direct canvas rendering',
          'Flutter declarative UI: Stateless vs Stateful widgets, widget lifecycle (initState, build, dispose)',
          'State Management patterns: Provider, InheritedWidget, and Bloc / Cubit reactive architecture',
          'Asynchronous HTTP networking: dio / http package, JSON serialization, SQLite / Hive offline persistence'
        ],
        readingTime: '25 mins',
        verifiedBy: 'Dr. K. B. Madhavi',
        verifiedRole: 'AUCOE Mobile Apps Curriculum Head',
        pdfPages: 21,
        fileSize: '3.0 MB',
        rating: 4.97,
        upvotes: 935,
        videoDuration: '5m 15s',
        summaryTelugu: 'మొబైల్ యాప్ డెవలప్‌మెంట్: ఫ్లట్టర్ విడ్జెట్ ట్రీ, స్టేట్‌లెస్ vs స్టేట్‌ఫుల్ విడ్జెట్స్, ప్రొవైడర్/బ్లాక్ స్టేట్ మేనేజ్‌మెంట్ మరియు REST API నెట్‌వర్కింగ్.',
        summaryEnglish: 'Clean Dart code examples for responsive mobile layouts, reactive state management using Provider, and async HTTP GET/POST with token authorization.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Stateless vs Stateful Widget Lifecycle',
            quickTake: 'Declarative components: Stateless widgets are immutable; Stateful widgets maintain mutable state that triggers rebuilds.',
            keyPoints: [
              'StatelessWidget: Only overrides build(BuildContext context). Lightweight and fast.',
              'StatefulWidget: Creates a State object. Key lifecycle methods: initState() -> didChangeDependencies() -> build() -> dispose().',
              'Calling setState( () { ... } ) marks the widget dirty and schedules a UI rebuild.'
            ],
            formulaOrEquation: 'State Lifecycle: createState() -> initState() -> build() -> dispose()'
          },
          {
            topic: 'Reactive State Management via Provider / BLoC',
            quickTake: 'Decouples business logic and application data from the UI widget presentation tree.',
            keyPoints: [
              'Provider: Uses ChangeNotifier to notify listening widgets (Consumer<T>) when state mutations occur via notifyListeners().',
              'BLoC (Business Logic Component): Converts incoming Events into outgoing States using Dart Streams, ensuring unidirectional data flow.'
            ],
            formulaOrEquation: 'BLoC Pattern: UI Event -> StreamSink -> BLoC Map -> Stream<State> -> UI Rebuild'
          }
        ],
        mindmap: {
          center: 'Mobile Apps & Flutter',
          branches: [
            {
              title: '1. Framework Architecture',
              subtopics: ['Dart AOT (Ahead-of-Time) compilation', 'Flutter Impeller rendering engine', 'Declarative UI paradigm', 'Widget tree & Element tree'],
              examTip: 'Flutter does not use native OEM widgets; it draws every pixel directly onto the screen via its own rendering engine.',
              color: 'blue'
            },
            {
              title: '2. Layout & UI Widgets',
              subtopics: ['Scaffold and AppBar structure', 'Column, Row, and Flex positioning', 'ListView.builder lazy loading', 'Custom animations & Hero transitions'],
              examTip: 'ListView.builder recycles off-screen widgets to guarantee 60/120 FPS buttery smooth scrolling.',
              color: 'purple'
            },
            {
              title: '3. State Architecture',
              subtopics: ['Local state vs Global state', 'ChangeNotifier & ChangeNotifierProvider', 'BLoC Event-to-State streams', 'Redux immutable state container'],
              examTip: 'Always call dispose() on TextEditingControllers and AnimationControllers to prevent critical memory leaks.',
              color: 'emerald'
            },
            {
              title: '4. Networking & Persistence',
              subtopics: ['RESTful API consuming via http/dio', 'JSON decoding to model classes', 'JWT Bearer token authentication', 'Local storage: Hive and SharedPreferences'],
              examTip: 'Secure storage (flutter_secure_storage) uses iOS Keychain and Android KeyStore to safely store JWT tokens.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- IT 4TH YEAR (Companion to Cyber Forensics) ---
  {
    id: 'it-cloud-bigdata-4th',
    code: '20IT4102',
    name: 'Cloud Computing & Big Data Analytics (Spark & AWS)',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'it',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Distributed Computing, Apache Spark & Cloud Infrastructure',
        keyTopics: [
          'Big Data 5 Vs (Volume, Velocity, Variety, Veracity, Value) and Hadoop ecosystem: HDFS architecture and MapReduce',
          'Apache Spark in-memory processing: Resilient Distributed Datasets (RDDs), Transformations vs Actions, and Spark DataFrames',
          'Cloud service models (IaaS, PaaS, SaaS) and deployment models (Public, Private, Hybrid, Multi-cloud)',
          'AWS Core Services: EC2 compute, S3 object storage buckets, Virtual Private Cloud (VPC), and serverless AWS Lambda'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. G. Srinivas',
        verifiedRole: 'AUCOE Cloud & Distributed Systems BoS',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 20s',
        summaryTelugu: 'క్లౌడ్ కంప్యూటింగ్ & బిగ్ డేటా: హడూప్ HDFS, అపాచీ స్పార్క్ RDDs (ఇన్-మెమరీ ప్రాసెసింగ్), క్లౌడ్ సర్వీస్ మోడల్స్ (IaaS, PaaS, SaaS) మరియు AWS EC2/S3 ఆర్కిటెక్చర్.',
        summaryEnglish: 'Complete breakdown of Spark in-memory DAG execution vs Hadoop disk MapReduce, RDD fault tolerance via lineage graphs, and AWS VPC cloud security.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 14,
        topicAtAGlance: [
          {
            topic: 'Apache Spark RDD In-Memory Computing vs MapReduce',
            quickTake: 'Spark is up to 100x faster than Hadoop MapReduce by executing in RAM using Directed Acyclic Graphs (DAG).',
            keyPoints: [
              'Transformations (e.g. map, filter, flatMap): Lazy evaluation; only constructs the computation DAG.',
              'Actions (e.g. count, collect, saveAsTextFile): Triggers actual distributed computation execution.',
              'Fault Tolerance: RDDs are immutable and maintain lineage graphs to recompute lost partitions without disk replication.'
            ],
            formulaOrEquation: 'Spark Speedup: In-memory DAG execution eliminates intermediate HDFS disk I/O bottlenecks'
          },
          {
            topic: 'Cloud Service Models: IaaS vs PaaS vs SaaS',
            quickTake: 'Defines shared responsibility boundaries between cloud provider and customer across the stack.',
            keyPoints: [
              'IaaS (Infrastructure as a Service): Provider manages hardware/virtualization; user manages OS, runtime, and apps (e.g. AWS EC2).',
              'PaaS (Platform as a Service): Provider manages hardware, OS, and runtime; user only deploys code (e.g. AWS Elastic Beanstalk, Heroku).',
              'SaaS (Software as a Service): Provider manages full stack; user accesses via web browser (e.g. Google Workspace, Salesforce).'
            ],
            formulaOrEquation: 'Shared Responsibility: IaaS (Manage OS/App) | PaaS (Manage App only) | SaaS (User only)'
          }
        ],
        mindmap: {
          center: 'Cloud & Big Data Systems',
          branches: [
            {
              title: '1. Big Data & Hadoop HDFS',
              subtopics: ['5 Vs of Big Data', 'HDFS NameNode & DataNode master-worker', 'HDFS 128MB block replication factor (default 3)', 'MapReduce Map, Shuffle, and Reduce phases'],
              examTip: 'NameNode stores metadata in memory (fsimage and edit log); DataNodes store the actual data blocks on local disk.',
              color: 'blue'
            },
            {
              title: '2. Apache Spark Engine',
              subtopics: ['Spark Driver and Executor architecture', 'Resilient Distributed Datasets (RDD)', 'Lazy Transformations vs Immediate Actions', 'Spark SQL and DataFrames optimization'],
              examTip: 'Narrow dependencies (map/filter) do not require data shuffling across nodes; Wide dependencies (groupByKey/reduceByKey) cause expensive cluster shuffling.',
              color: 'purple'
            },
            {
              title: '3. Cloud Architecture & IaaS',
              subtopics: ['NIST Cloud Characteristics', 'IaaS vs PaaS vs SaaS trade-offs', 'Hypervisors: Type 1 (bare metal) vs Type 2 (hosted)', 'AWS EC2 instance types and auto-scaling'],
              examTip: 'Type 1 hypervisors (VMware ESXi, Xen) run directly on host hardware and offer superior performance.',
              color: 'emerald'
            },
            {
              title: '4. Serverless & Cloud Storage',
              subtopics: ['AWS S3 99.999999999% (11 9s) durability', 'Event-driven AWS Lambda execution', 'Virtual Private Cloud (VPC) subnets & Security Groups', 'Cloud security and IAM roles'],
              examTip: 'Serverless architectures scale to zero automatically when idle, charging only for exact compute millisecond execution time.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
