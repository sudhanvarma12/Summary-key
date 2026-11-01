import { Subject, InstitutionId, GradeOrBranchId } from '../types';

// ============================================================================
// COMPREHENSIVE BRANCH-SPECIFIC ("TEAM") ENGINEERING CURRICULUM
// Complete 4 Academic Years for ECE, EEE, MECH, CSM, IT, and CSE
// Detailed with Units, Key Topics, BoS Verifications, Topic-at-a-Glance & Mindmaps
// ============================================================================

export const BRANCH_SPECIFIC_SUBJECTS: Subject[] = [
  // ==========================================================================
  // ECE (ELECTRONICS & COMMUNICATION ENGINEERING)
  // ==========================================================================
  // --- ECE 2ND YEAR ---
  {
    id: 'ece-edc-2nd',
    code: '20EC2101',
    name: 'Electronic Devices & Circuits (EDC)',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'ece',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'PN Junction Diode, Rectifiers & Zener Diode',
        keyTopics: [
          'Energy band diagrams, PN Junction forward and reverse bias V-I characteristics, Diode current equation',
          'Breakdown mechanisms: Zener breakdown (quantum tunneling) vs Avalanche breakdown (impact ionization)',
          'Half Wave and Full Wave Rectifiers (Center-Tapped & Bridge): Ripple factor (γ), Efficiency (η), PIV rating',
          'Zener diode as Voltage Regulator under varying line voltage and load conditions'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. Ch. Kusuma Kumari',
        verifiedRole: 'AUCOE ECE Board of Studies',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'డయోడ్ మరియు రెక్టిఫైయర్స్: PN జంక్షన్ క్యారెక్టరిస్టిక్స్, హాఫ్ వేవ్ vs ఫుల్ వేవ్ రెక్టిఫైయర్ రిపుల్ ఫాక్టర్ (0.482), జెనర్ బ్రేక్‌డౌన్ మరియు వోల్టేజ్ రెగ్యులేటర్.',
        summaryEnglish: 'Complete derivations of full-wave rectifier efficiency (81.2%), ripple factor formulas with capacitor filters, and Zener line/load regulation.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Diode Rectifier Ripple Factor & Efficiency',
            quickTake: 'Quantifies DC rectification quality and residual AC ripple content.',
            keyPoints: [
              'Half-Wave Rectifier: Ripple factor γ = 1.21; Max efficiency η = 40.6%; PIV = Vm.',
              'Full-Wave Center Tapped: Ripple factor γ = 0.482; Max efficiency η = 81.2%; PIV = 2Vm.',
              'Bridge Rectifier: Ripple factor γ = 0.482; Max efficiency η = 81.2%; PIV = Vm (eliminates center-tapped transformer requirement).'
            ],
            formulaOrEquation: 'γ = √( (Irms / Idc)² - 1 ) | HWR γ = 1.21 | FWR γ = 0.482'
          },
          {
            topic: 'Zener Diode Voltage Regulator',
            quickTake: 'Maintains constant output voltage Vz across load in reverse breakdown region.',
            keyPoints: [
              'Series resistor Rs limits current: Rs = (Vin_min - Vz) / (IL_max + Iz_min).',
              'Line Regulation: Keeps Vout stable when supply Vin fluctuates.',
              'Load Regulation: Keeps Vout stable when load resistance RL changes.'
            ],
            formulaOrEquation: 'Vout = Vz | Iz = Is - IL | Rs = (Vin - Vz) / Is'
          }
        ],
        mindmap: {
          center: 'Semiconductor Diodes & Circuits',
          branches: [
            {
              title: '1. PN Junction Physics',
              subtopics: ['Diffusion & Drift currents', 'Diode equation I = I0(e^(V/ηVt) - 1)', 'Depletion & Diffusion capacitance', 'Temperature effects on V-I curve'],
              examTip: 'Reverse saturation current I0 doubles for every 10°C rise in temperature.',
              color: 'blue'
            },
            {
              title: '2. Breakdown Phenomena',
              subtopics: ['Zener breakdown (< 6V, heavily doped)', 'Avalanche breakdown (> 6V, lightly doped)', 'Negative temperature coefficient of Zener', 'Positive temperature coefficient of Avalanche'],
              examTip: 'Zener breakdown occurs due to intense electric field tunneling; Avalanche occurs due to carrier collision multiplication.',
              color: 'purple'
            },
            {
              title: '3. Rectifier Topologies',
              subtopics: ['Half-Wave efficiency 40.6%', 'Full-Wave Center Tapped (PIV = 2Vm)', 'Bridge Rectifier (PIV = Vm)', 'Capacitive C-filter & LC-filters'],
              examTip: 'Always draw input/output waveforms with Peak Inverse Voltage (PIV) labeled.',
              color: 'emerald'
            },
            {
              title: '4. Regulators & Clippers',
              subtopics: ['Zener shunt regulator design', 'Positive and Negative clippers', 'Biased clipping circuits', 'Clamper circuits (DC restorers)'],
              examTip: 'In clampers, total peak-to-peak output swing remains equal to input (2Vm).',
              color: 'amber'
            }
          ]
        }
      },
      {
        unitNumber: 2,
        title: 'Bipolar Junction Transistors (BJT) & Small Signal Amplifiers',
        keyTopics: [
          'BJT Configurations: Common Base (CB), Common Emitter (CE), Common Collector (CC) V-I curves',
          'Current gain relationships: α = β / (1 + β), β = α / (1 - α)',
          'Transistor Biasing: Operating Point (Q-Point), Fixed Bias, Collector-to-Base Bias, Voltage Divider Bias (Stability Factor S)',
          'CE Small Signal h-parameter model: Input impedance (Zi), Output impedance (Zo), Voltage gain (Av), Current gain (Ai)'
        ],
        readingTime: '28 mins',
        verifiedBy: 'M. S. N. Murthy',
        verifiedRole: 'GVPCOE Senior Faculty, ECE',
        pdfPages: 24,
        fileSize: '3.3 MB',
        rating: 4.96,
        upvotes: 910,
        videoDuration: '5m 30s',
        summaryTelugu: 'ట్రాన్సిస్టర్ కాన్ఫిగరేషన్స్ & యాంప్లిఫైయర్స్: CE, CB, CC క్యారెక్టరిస్టిక్స్, వోల్టేజ్ డివైడర్ బయాసింగ్ స్టెబిలిటీ ఫాక్టర్ (S) మరియు h-పారామీటర్ మోడల్.',
        summaryEnglish: 'Derivation of stability factor S for voltage divider bias, thermal runaway conditions, and complete h-parameter equivalent circuit derivations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 11,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'BJT Voltage Divider Bias Stability',
            quickTake: 'Most widely used BJT biasing circuit; provides excellent Q-point stability independent of transistor β.',
            keyPoints: [
              'Thevenin voltage Vth = Vcc * (R2 / (R1 + R2)); Rth = R1 || R2.',
              'Emitter resistor RE provides negative feedback against thermal runaway.',
              'Stability factor S = 1 + (Rth / RE); If Rth << RE, S approaches 1 (ideal stability).'
            ],
            formulaOrEquation: 'S = (1 + β) / (1 + β * (RE / (Rth + RE))) ➔ S ≈ 1 + (Rth / RE)'
          },
          {
            topic: 'h-Parameter Model for CE Amplifier',
            quickTake: 'Two-port hybrid parameter equations for low-frequency small-signal analysis.',
            keyPoints: [
              'Equations: v1 = hie * i1 + hre * v2; i2 = hfe * i1 + hoe * v2.',
              'Input impedance: Zi ≈ hie.',
              'Voltage Gain: Av = -hfe * RL\' / (hie + (hie * hoe - hfe * hre) * RL\') ≈ -hfe * RL / hie.',
              'Negative sign indicates 180° phase inversion in CE amplifier.'
            ],
            formulaOrEquation: 'Av ≈ -hfe * RL / hie | Zi ≈ hie | 180° Phase Shift'
          }
        ],
        mindmap: {
          center: 'BJT & Small Signal Analysis',
          branches: [
            {
              title: '1. BJT Configurations',
              subtopics: ['CB: Low Zi, High Zo, Unity current gain', 'CE: Medium Zi & Zo, High Av & Ai', 'CC (Emitter Follower): High Zi, Low Zo, Unity Av', 'Early effect & Base width modulation'],
              examTip: 'CE is used for voltage amplification; CC (Emitter Follower) is used for impedance matching.',
              color: 'blue'
            },
            {
              title: '2. DC Load Line & Q-Point',
              subtopics: ['Vce = Vcc - Ic * Rc', 'Active, Saturation, and Cutoff regions', 'Thermal runaway prevention (Vce < Vcc/2)', 'AC load line vs DC load line'],
              examTip: 'Q-point should be located in the exact center of the active region for maximum undistorted output swing.',
              color: 'purple'
            },
            {
              title: '3. Biasing Stability',
              subtopics: ['Fixed bias poor stability S = 1 + β', 'Collector-to-base feedback bias', 'Voltage divider bias optimal design', 'Stability factors S(Ico), S(Vbe), S(β)'],
              examTip: 'Show that voltage divider bias is independent of β when β*RE >> R2.',
              color: 'emerald'
            },
            {
              title: '4. h-Parameter Amplifier',
              subtopics: ['hie, hre, hfe, hoe definitions', 'Input and output impedance formulas', 'Voltage & Current gain with load RL', 'Multi-stage RC coupled amplifier bandwidth'],
              examTip: 'Remember hfe is AC current gain (β); hie is input impedance with output short-circuited.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'ece-signals-2nd',
    code: '20EC2102',
    name: 'Signals & Systems',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'ece',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Signal Classification, Operations & LTI Systems',
        keyTopics: [
          'Classification: Continuous-Time (CT) vs Discrete-Time (DT), Periodic vs Aperiodic, Energy (E) vs Power (P) signals',
          'Basic Signals: Unit Impulse δ(t), Unit Step u(t), Ramp r(t), Real and Complex exponentials',
          'Operations: Time Shifting x(t - t0), Time Scaling x(at), Time Reversal x(-t)',
          'Linear Time-Invariant (LTI) Systems: Linearity, Time-Invariance, Causality, Stability (BIBO criterion), Convolution Integral and Sum'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Prof. P. Rajesh Kumar',
        verifiedRole: 'AUCOE Signals & DSP Group',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 930,
        videoDuration: '5m 10s',
        summaryTelugu: 'సిగ్నల్స్ & LTI సిస్టమ్స్: ఎనర్జీ vs పవర్ సిగ్నల్స్, ఇంపల్స్ ఫంక్షన్, టైమ్ స్కేలింగ్ & షిఫ్టింగ్, కన్వల్యూషన్ ఇంటిగ్రల్ మరియు BIBO స్టెబిలిటీ కండిషన్.',
        summaryEnglish: 'Step-by-step graphical convolution integral, impulse response stability conditions (∫|h(t)|dt < ∞), and energy/power calculations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Convolution Integral & LTI Response',
            quickTake: 'Output of any continuous LTI system is convolution of input x(t) with unit impulse response h(t).',
            keyPoints: [
              'Formula: y(t) = x(t) * h(t) = ∫ x(τ) h(t - τ) dτ from -∞ to +∞.',
              'Properties: Commutative (x*h = h*x), Distributive, Associative.',
              'Causality condition: h(t) = 0 for all t < 0.',
              'BIBO Stability: System is stable iff ∫ |h(t)| dt < ∞ (absolutely integrable).'
            ],
            formulaOrEquation: 'y(t) = ∫ x(τ) h(t - τ) dτ | BIBO: ∫ |h(t)| dt < ∞'
          },
          {
            topic: 'Energy vs Power Signal Test',
            quickTake: 'Signals with finite energy are Energy signals (Power = 0); Signals with finite non-zero power are Power signals (Energy = ∞).',
            keyPoints: [
              'Energy: E = ∫ |x(t)|² dt. If 0 < E < ∞ -> Energy Signal.',
              'Power: P = lim (T->∞) (1/T) ∫ |x(t)|² dt. If 0 < P < ∞ -> Power Signal.',
              'Periodic signals are always Power signals.'
            ],
            formulaOrEquation: 'E = ∫ |x(t)|² dt | P = (1/T0) ∫ |x(t)|² dt'
          }
        ],
        mindmap: {
          center: 'Signals & LTI Systems',
          branches: [
            {
              title: '1. Elementary Signals',
              subtopics: ['Dirac delta δ(t) sifting property', 'Unit step u(t) relation d/dt u(t) = δ(t)', 'Even & Odd components decomposition', 'Orthogonality condition ∫ x1(t)x2*(t)dt = 0'],
              examTip: 'Sifting property: ∫ x(t) δ(t - t0) dt = x(t0). High-frequency 2-mark question.',
              color: 'blue'
            },
            {
              title: '2. Transformations',
              subtopics: ['Time shifting x(t ± t0)', 'Time scaling x(at) (compression/expansion)', 'Time inversion x(-t)', 'Order of operations precedence'],
              examTip: 'To plot x(at - b), always write as x(a(t - b/a)) -> scale first, then shift.',
              color: 'purple'
            },
            {
              title: '3. System Properties',
              subtopics: ['Linearity (Additivity + Homogeneity)', 'Time Invariance test', 'Causality h(t) = 0 for t < 0', 'BIBO stability test'],
              examTip: 'If output depends on future inputs (e.g. y(t) = x(t+1)), the system is non-causal.',
              color: 'emerald'
            },
            {
              title: '4. Convolution',
              subtopics: ['Graphical convolution steps: Fold, Shift, Multiply, Integrate', 'Convolution with impulse: x(t) * δ(t - t0) = x(t - t0)', 'Deconvolution concept', 'Interconnected systems cascade & parallel'],
              examTip: 'Duration of convolved signal = Duration of x(t) + Duration of h(t).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- ECE 3RD YEAR ---
  {
    id: 'ece-comms-3rd',
    code: '20EC3103',
    name: 'Analog & Digital Communications',
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
        title: 'Amplitude & Frequency Modulation (AM & FM)',
        keyTopics: [
          'Amplitude Modulation (AM): Time & frequency domain, Modulation index (μ), Power efficiency & Bandwidth (2fm)',
          'Suppressed Carrier systems: DSB-SC (Balanced Modulator), SSB-SC (Phase Shift & Filter method), VSB modulation for television',
          'Frequency Modulation (FM): Narrowband FM (NBFM) vs Wideband FM (WBFM), Carson\'s Rule for Bandwidth: BW = 2(Δf + fm)',
          'Superheterodyne Receiver: RF stage, Local Oscillator, Mixer, Intermediate Frequency (IF = 455 kHz), Image frequency rejection'
        ],
        readingTime: '28 mins',
        verifiedBy: 'Dr. G. Sasibhushana Rao',
        verifiedRole: 'AUCOE Communications Department',
        pdfPages: 24,
        fileSize: '3.3 MB',
        rating: 4.97,
        upvotes: 950,
        videoDuration: '5m 25s',
        summaryTelugu: 'కమ్యూనికేషన్ సిస్టమ్స్: AM మోడ్యులేషన్ ఇండెక్స్ & పవర్ ఈక్వేషన్, DSB-SC vs SSB-SC, FM కార్సన్స్ రూల్ (BW = 2(Δf + fm)), మరియు సూపర్ హెటెరోడైన్ రిసీవర్ IF ఫ్రీక్వెన్సీ.',
        summaryEnglish: 'Derivation of total AM transmitted power Pt = Pc(1 + μ²/2), Carson\'s bandwidth rule for WBFM, and image frequency rejection ratio calculations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 10,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'AM Transmitted Power & Carson\'s Rule',
            quickTake: 'Standard AM wastes 66.7% power in carrier; FM trades wide bandwidth for superior noise immunity.',
            keyPoints: [
              'Total AM Power: Pt = Pc * (1 + μ² / 2). At 100% modulation (μ = 1), Sideband power is only 33.3% of Pt.',
              'AM Bandwidth: BW = 2 * fm.',
              'Carson\'s Rule for FM: BW = 2 * (Δf + fm) = 2 * fm * (β + 1), where β = Δf / fm is modulation index.'
            ],
            formulaOrEquation: 'Pt = Pc(1 + μ²/2) | BW_AM = 2fm | BW_FM = 2(Δf + fm)'
          },
          {
            topic: 'Superheterodyne Receiver & Image Frequency',
            quickTake: 'Converts any incoming RF signal to standard Intermediate Frequency (IF = 455 kHz) for stable amplification.',
            keyPoints: [
              'Local Oscillator frequency: f_LO = f_RF + IF (Higher side tuning).',
              'Image Frequency: f_image = f_RF + 2 * IF.',
              'Image Rejection Ratio: α = √(1 + Q² * ρ²), where ρ = (f_image/f_RF) - (f_RF/f_image).'
            ],
            formulaOrEquation: 'f_image = f_RF + 2*IF | IF = 455 kHz (AM), 10.7 MHz (FM)'
          }
        ],
        mindmap: {
          center: 'Analog Modulation Systems',
          branches: [
            {
              title: '1. AM Variants',
              subtopics: ['Standard AM with carrier', 'DSB-SC ring modulator', 'SSB-SC Hilbert transform', 'VSB vestigial transmission in TV'],
              examTip: 'SSB-SC requires only half the bandwidth (fm) and one-sixth the power compared to standard AM.',
              color: 'blue'
            },
            {
              title: '2. Angle Modulation (FM & PM)',
              subtopics: ['Instantaneous frequency concept', 'Narrowband FM vs AM comparison', 'Wideband FM Bessel functions Jn(β)', 'Carson\'s bandwidth rule'],
              examTip: 'FM is constant envelope; immune to amplitude noise, enabling limiter circuit at receiver.',
              color: 'purple'
            },
            {
              title: '3. Radio Receivers',
              subtopics: ['TRF receiver drawbacks', 'Superheterodyne architecture', 'Image frequency interference', 'Automatic Gain Control (AGC)'],
              examTip: 'Explain why f_LO is kept higher than f_RF (lower capacitance ratio tuning).',
              color: 'emerald'
            },
            {
              title: '4. Noise in CW Modulation',
              subtopics: ['Thermal noise N = kTB', 'Noise Figure F = (SNR)in / (SNR)out', 'Figure of Merit γ across AM/DSB/SSB', 'Pre-emphasis & De-emphasis networks in FM'],
              examTip: 'Pre-emphasis boosts high audio frequencies at transmitter; De-emphasis attenuates them at receiver to suppress noise.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- ECE 4TH YEAR ---
  {
    id: 'ece-vlsi-4th',
    code: '20EC4105',
    name: 'VLSI Design & Verilog HDL',
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
        title: 'CMOS Inverter, Fabrication & Layout Design Rules',
        keyTopics: [
          'MOS Transistor Physics: NMOS, PMOS, Threshold Voltage (Vt), Linear and Saturation current equations',
          'CMOS Inverter: DC Voltage Transfer Characteristics (VTC), Noise Margins (NMH, NML), Switching Threshold (Vm)',
          'CMOS Fabrication Processes: n-well, p-well, Twin-tub process, Silicon-on-Insulator (SOI)',
          'Layout Design Rules: Mead-Conway λ-based design rules, Euler path and stick diagrams for static CMOS gates'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. Ch. Kusuma Kumari',
        verifiedRole: 'GVPCOE VLSI Research Lab',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 970,
        videoDuration: '5m 20s',
        summaryTelugu: 'VLSI డిజైన్: CMOS ఇన్వర్టర్ VTC కర్వ్, నాయిస్ మార్జిన్స్ (NML, NMH), n-వెల్ ఫ్యాబ్రికేషన్ ప్రాసెస్, మరియు స్టిక్ డయాగ్రమ్స్ (ఆయిలర్ పాత్).',
        summaryEnglish: 'Derivation of symmetric CMOS inverter threshold Vm = Vdd/2, dynamic power dissipation P = C*V²*f, and Mead-Conway layout stick diagrams.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'CMOS Inverter VTC & Noise Margins',
            quickTake: 'Zero static power dissipation; high noise immunity defined by steep transition region in VTC.',
            keyPoints: [
              'VTC points: VIL (slope = -1), VIH (slope = -1), VOL, VOH.',
              'Noise Margin Low: NML = VIL - VOL.',
              'Noise Margin High: NMH = VOH - VIH.',
              'Symmetric Inverter: Achieved when (W/L)p ≈ 2.5 * (W/L)n because electron mobility μn is ~2.5x hole mobility μp.'
            ],
            formulaOrEquation: 'NML = VIL - VOL | NMH = VOH - VIH | (W/L)p ≈ 2.5 (W/L)n'
          },
          {
            topic: 'CMOS Power Dissipation Components',
            quickTake: 'Dynamic switching power dominates; static leakage power becomes critical at nanometer nodes.',
            keyPoints: [
              'Dynamic Power: P_dyn = α * C_load * Vdd² * f_clk (α is activity factor).',
              'Short-circuit Power: P_sc occurs during input switching when both NMOS and PMOS conduct simultaneously.',
              'Static Power: P_stat = I_leakage * Vdd (subthreshold and gate oxide tunneling).'
            ],
            formulaOrEquation: 'P_total = α * C * Vdd² * f + I_leakage * Vdd'
          }
        ],
        mindmap: {
          center: 'CMOS VLSI Technology',
          branches: [
            {
              title: '1. MOS Characteristics',
              subtopics: ['NMOS vs PMOS energy bands', 'Linear mode Id = μ Cox (W/L) [(Vgs-Vt)Vds - Vds²/2]', 'Saturation mode Id = 0.5 μ Cox (W/L) (Vgs-Vt)²', 'Channel length modulation λ'],
              examTip: 'MOSFET operates in saturation when Vds >= Vgs - Vt.',
              color: 'blue'
            },
            {
              title: '2. Inverter VTC Curve',
              subtopics: ['5 regions of operation', 'Switching threshold Vm', 'Noise margins NML & NMH', 'Propagation delay tpHL & tpLH'],
              examTip: 'Draw VTC graph labeling VOH, VOL, VIH, VIL and show 5 operating regions.',
              color: 'purple'
            },
            {
              title: '3. Layout & Stick Diagrams',
              subtopics: ['Color codes (Red: Poly, Green: n-diff, Yellow: p-diff, Blue: Metal-1)', 'Euler path algorithm for common diffusion run', 'λ-based design rules', 'DRC & LVS verification'],
              examTip: 'Using an Euler path eliminates breaks in the active diffusion strips, shrinking layout silicon area.',
              color: 'emerald'
            },
            {
              title: '4. Verilog HDL Modeling',
              subtopics: ['Dataflow (assign statements)', 'Behavioral (always @(posedge clk))', 'Structural gate instantiation', 'Blocking (=) vs Non-blocking (<=) assignments'],
              examTip: 'Always use non-blocking (<=) for sequential flip-flop logic to avoid race conditions.',
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
    id: 'eee-circuits-2nd',
    code: '20EE2101',
    name: 'Electrical Circuit Analysis & Network Theory',
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
        title: 'Mesh, Nodal Analysis & Network Theorems',
        keyTopics: [
          'Kirchhoff\'s Laws (KCL, KVL), Supermesh and Supernode techniques with dependent and independent sources',
          'Network Theorems: Thevenin\'s Theorem (Vth, Rth), Norton\'s Theorem (In, Rn), Maximum Power Transfer Theorem for DC & AC',
          'Superposition Theorem (linearity requirement), Reciprocity and Millman\'s Theorems',
          'Resonance: Series and Parallel RLC circuits, Quality factor (Q), Bandwidth (BW = f0 / Q), Half-power frequencies'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. K. Narasimha Rao',
        verifiedRole: 'AUCOE Electrical Engineering HOD',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'సర్క్యూట్ అనాలిసిస్: మెష్ & నోడల్ అనాలిసిస్, తెవెనిన్స్ & నార్టన్స్ సిద్ధాంతాలు, మాక్సిమమ్ పవర్ ట్రాన్స్‌ఫర్ థియరమ్ (RL = Rth) మరియు సిరీస్ RLC రెసొనెన్స్.',
        summaryEnglish: 'Step-by-step Thevenin equivalent circuit with dependent sources, maximum power condition proof (PL_max = Vth² / 4Rth), and RLC bandwidth.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Thevenin\'s & Maximum Power Transfer Theorems',
            quickTake: 'Reduces complex linear networks to single voltage source Vth in series with resistance Rth.',
            keyPoints: [
              'Vth: Open-circuit voltage across load terminals A-B.',
              'Rth: Resistance seen from A-B with all independent sources de-activated (voltage source -> short, current source -> open).',
              'Maximum Power: Maximum power is transferred to load RL when RL = Rth (for DC) or ZL = Zth* (for AC complex impedance).',
              'Max Power Formula: P_max = Vth² / (4 * Rth); Efficiency is 50% at maximum power transfer.'
            ],
            formulaOrEquation: 'RL = Rth | P_max = Vth² / (4 Rth) | Efficiency = 50%'
          },
          {
            topic: 'Series RLC Resonance',
            quickTake: 'Condition where inductive and capacitive reactances cancel (XL = XC), making circuit purely resistive.',
            keyPoints: [
              'Resonant Frequency: f0 = 1 / (2π √(LC)).',
              'Impedance at resonance: Z = R (Minimum impedance; Current I0 = V / R is maximum).',
              'Quality Factor Q: Q = (ω0 L) / R = 1 / (ω0 C R) = (1 / R) * √(L / C).',
              'Bandwidth: BW = f2 - f1 = f0 / Q = R / (2π L).'
            ],
            formulaOrEquation: 'f0 = 1 / (2π √(LC)) | Q = (1/R) √(L/C) | BW = f0 / Q'
          }
        ],
        mindmap: {
          center: 'Network Analysis & Theorems',
          branches: [
            {
              title: '1. Systematic Analysis',
              subtopics: ['KCL at essential nodes', 'KVL in fundamental loops', 'Supernode with floating voltage source', 'Supermesh with shared current source'],
              examTip: 'For circuits with dependent sources, apply a test source (1V or 1A) at terminals to calculate Rth.',
              color: 'blue'
            },
            {
              title: '2. Network Theorems',
              subtopics: ['Thevenin Vth & Rth reduction', 'Norton In & Rn dual equivalence', 'Superposition for multiple sources', 'Maximum power transfer ZL = Zth*'],
              examTip: 'Never deactivate dependent sources when applying Superposition or finding Thevenin resistance!',
              color: 'purple'
            },
            {
              title: '3. AC Resonance',
              subtopics: ['Series RLC minimum impedance Z = R', 'Parallel RLC maximum impedance', 'Quality factor Q selectivity', 'Half-power frequencies f1 and f2'],
              examTip: 'At half-power frequencies, current is I0 / √2 (70.7% of maximum).',
              color: 'emerald'
            },
            {
              title: '4. Two-Port Networks',
              subtopics: ['Z-parameters (Impedance)', 'Y-parameters (Admittance)', 'ABCD Transmission parameters', 'h-parameters & interrelationships'],
              examTip: 'Symmetry condition: Z11 = Z22; Reciprocity condition: Z12 = Z21 or AD - BC = 1.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- EEE 3RD YEAR ---
  {
    id: 'eee-control-3rd',
    code: '20EE3104',
    name: 'Control Systems Engineering',
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
        title: 'Transfer Functions, Block Diagrams & Stability (Routh-Hurwitz)',
        keyTopics: [
          'Open-loop vs Closed-loop systems, Mathematical modeling of electrical and mechanical systems (Force-Voltage & Force-Current analogies)',
          'Block Diagram Reduction rules and Mason\'s Gain Formula using Signal Flow Graphs (SFG)',
          'Time Response of Second Order Systems: Damping ratio (ζ), Undamped natural frequency (ωn), Rise time (tr), Peak time (tp), Maximum peak overshoot (%Mp), Settling time (ts)',
          'Stability Analysis: BIBO stability, Characteristic equation 1 + G(s)H(s) = 0, Routh-Hurwitz Stability Criterion, Special cases (zero first column, row of zeros)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. C. V. K. Bhanu',
        verifiedRole: 'GVPCOE Control Systems Lead',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.98,
        upvotes: 950,
        videoDuration: '5m 15s',
        summaryTelugu: 'కంట్రోల్ సిస్టమ్స్: మేసన్స్ గెయిన్ ఫార్ములా, సెకండ్ ఆర్డర్ టైమ్ రెస్పాన్స్ (డ్యాంపింగ్ రేషియో ζ, పీక్ ఓవర్‌షూట్ %Mp) మరియు రౌత్-హర్విట్జ్ స్టెబిలిటీ టెస్ట్.',
        summaryEnglish: 'Derivation of second order step response for underdamped systems (ζ < 1), peak overshoot %Mp = e^(-πζ/√(1-ζ²)) * 100, and Routh array construction.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Second Order Transient Response Specifications',
            quickTake: 'Quantifies system response speed, oscillation damping, and settling time for a step input.',
            keyPoints: [
              'Standard transfer function: T(s) = ωn² / (s² + 2ζωn s + ωn²).',
              'Rise Time: tr = (π - θ) / ωd, where ωd = ωn √(1 - ζ²) and θ = cos⁻¹(ζ).',
              'Peak Time: tp = π / ωd.',
              'Maximum Peak Overshoot: %Mp = exp(-π ζ / √(1 - ζ²)) * 100%.',
              'Settling Time: ts = 4 / (ζ ωn) for 2% error tolerance band (or 3 / ζωn for 5% band).'
            ],
            formulaOrEquation: '%Mp = e^(-πζ/√(1-ζ²)) * 100% | ts = 4 / (ζ ωn)'
          },
          {
            topic: 'Routh-Hurwitz Stability Criterion',
            quickTake: 'Algebraic method determining number of roots in the right half of s-plane without factoring polynomial.',
            keyPoints: [
              'Characteristic equation: a0 s^n + a1 s^(n-1) + ... + an = 0.',
              'Necessary condition: All coefficients must be positive and non-zero.',
              'Sufficient condition: Number of sign changes in the first column of Routh array equals number of unstable poles in right half s-plane.',
              'System is strictly stable iff all entries in first column are strictly positive.'
            ],
            formulaOrEquation: 'Sign changes in column 1 of Routh array = Unstable poles in RHP'
          }
        ],
        mindmap: {
          center: 'Control Systems & Stability',
          branches: [
            {
              title: '1. System Representation',
              subtopics: ['Transfer function C(s)/R(s)', 'Block diagram algebra reduction', 'Signal flow graph nodes & branches', 'Mason\'s gain formula P = Σ Pk Δk / Δ'],
              examTip: 'Mason\'s formula: Δ = 1 - (sum of individual loops) + (sum of gain products of two non-touching loops) - ...',
              color: 'blue'
            },
            {
              title: '2. Time Domain Response',
              subtopics: ['Undamped (ζ=0), Underdamped (0<ζ<1)', 'Critically damped (ζ=1), Overdamped (ζ>1)', 'Steady state error ess = lim s->0 sR(s)/(1+G(s))', 'Error constants Kp, Kv, Ka'],
              examTip: 'Type 0 system has finite steady-state error to step input; Type 1 has zero error to step input.',
              color: 'purple'
            },
            {
              title: '3. Routh-Hurwitz Stability',
              subtopics: ['Routh array computation', 'Auxiliary polynomial for row of zeros', 'Determining critical gain K for marginal stability', 'Frequency of sustained oscillations ω'],
              examTip: 'A row of all zeros indicates pairs of symmetric roots on the imaginary jω axis.',
              color: 'emerald'
            },
            {
              title: '4. Frequency Response',
              subtopics: ['Bode plot magnitude & phase asymptotes', 'Gain Margin (GM) & Phase Margin (PM)', 'Root Locus angle & magnitude criteria', 'Nyquist stability contour criterion'],
              examTip: 'System is stable if Phase Margin > 0 and Gain Margin > 0 (in dB).',
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
  // --- MECH 2ND YEAR ---
  {
    id: 'mech-som-2nd',
    code: '20ME2101',
    name: 'Strength of Materials / Mechanics of Solids',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'mech',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Simple Stresses, Strains & Mohr\'s Circle',
        keyTopics: [
          'Stress (Tensile, Compressive, Shear) and Strain (Volumetric, Shear), Hooke\'s Law, Elastic constants: Young\'s Modulus (E), Shear Modulus (G), Bulk Modulus (K), Poisson\'s ratio (ν)',
          'Relations between elastic constants: E = 2G(1 + ν) = 3K(1 - 2ν) = 9KG / (3K + G)',
          'Thermal Stresses in bar with fixed and yielding supports',
          'Principal Stresses & Principal Planes: Analytical formulas and Graphical Mohr\'s Circle of Stress'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. B. Govinda Rao',
        verifiedRole: 'AUCOE Mechanical Engineering Faculty',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 930,
        videoDuration: '5m 15s',
        summaryTelugu: 'స్ట్రెంత్ ఆఫ్ మెటీరియల్స్: స్ట్రెస్-స్ట్రెయిన్, ఎలాస్టిక్ కాన్స్టాంట్స్ రిలేషన్స్ (E, G, K, ν), థర్మల్ స్ట్రెసెస్ మరియు మోర్స్ సర్కిల్ ప్రిన్సిపల్ స్ట్రెసెస్.',
        summaryEnglish: 'Derivation of elastic modulus relationships, Mohr\'s circle center (σx+σy)/2 and radius R, and maximum shear stress τ_max formulas.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Elastic Constants & Relationships',
            quickTake: 'Four interrelated fundamental constants governing isotropic elastic material deformation.',
            keyPoints: [
              'Hooke\'s Law: Stress σ = E * ε.',
              'Poisson\'s ratio: ν = Lateral strain / Longitudinal strain (typical metals: 0.25 to 0.35).',
              'Key relation: E = 2G(1 + ν) = 3K(1 - 2ν).',
              'Combined formula: E = 9KG / (3K + G).'
            ],
            formulaOrEquation: 'E = 2G(1 + ν) = 3K(1 - 2ν) = 9KG / (3K + G)'
          },
          {
            topic: 'Principal Stresses & Mohr\'s Circle',
            quickTake: 'Principal planes are planes on which shear stress is strictly zero; normal stresses are maximum/minimum.',
            keyPoints: [
              'Principal Stresses: σ1, σ2 = (σx + σy)/2 ± √[ ((σx - σy)/2)² + τxy² ].',
              'Mohr\'s Circle Center: C = ((σx + σy)/2, 0).',
              'Mohr\'s Circle Radius: R = √[ ((σx - σy)/2)² + τxy² ] = (σ1 - σ2) / 2 = τ_max.',
              'Maximum Shear Stress: τ_max = (σ1 - σ2) / 2.'
            ],
            formulaOrEquation: 'σ1,2 = (σx + σy)/2 ± R | τ_max = R = (σ1 - σ2)/2'
          }
        ],
        mindmap: {
          center: 'Stress, Strain & Principal Planes',
          branches: [
            {
              title: '1. Elasticity Fundamentals',
              subtopics: ['Stress-strain curve for mild steel', 'Proportional limit, Yield point, UTS', 'Volumetric strain ΔV/V = εx + εy + εz', 'Elastic constants E, G, K, ν'],
              examTip: 'For incompressible material (ΔV=0), Bulk Modulus K -> ∞ and Poisson\'s ratio ν = 0.5.',
              color: 'blue'
            },
            {
              title: '2. Thermal Effects',
              subtopics: ['Free expansion δL = α L ΔT', 'Thermal stress σ = E α ΔT with unyielding support', 'Yielding support by amount δ: σ = E(α L ΔT - δ)/L', 'Compound bars in parallel'],
              examTip: 'Thermal stress develops ONLY when free thermal expansion is restrained.',
              color: 'purple'
            },
            {
              title: '3. Mohr\'s Circle Construction',
              subtopics: ['Plot point A(σx, -τxy) & B(σy, τxy)', 'Connect AB to find center on σ-axis', 'Radius equals maximum shear stress τ_max', 'Orientation of principal planes 2θp'],
              examTip: 'Angle on Mohr\'s circle is 2θ, which corresponds to physical angle θ on material element.',
              color: 'emerald'
            },
            {
              title: '4. Beams & SFD/BMD',
              subtopics: ['Cantilever, Simply Supported, Overhanging', 'Shear force dM/dx = V', 'Bending moment dV/dx = -w', 'Point of contraflexure (M = 0)'],
              examTip: 'Bending moment is maximum where shear force crosses zero or changes sign.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'mech-thermo-2nd',
    code: '20ME2102',
    name: 'Engineering Thermodynamics',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'mech',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'engineering',
    units: [
      {
        unitNumber: 1,
        title: 'Laws of Thermodynamics & Air Standard Cycles',
        keyTopics: [
          'Thermodynamic Systems: Closed, Open, Isolated, Intensive vs Extensive properties, Quasi-static process',
          'First Law of Thermodynamics: Q - W = ΔU for non-flow process, Steady Flow Energy Equation (SFEE: Nozzle, Turbine, Compressor)',
          'Second Law of Thermodynamics: Kelvin-Planck & Clausius statements, Carnot Theorem, Clausius Inequality (∮ dQ/T <= 0), Entropy (S)',
          'Air Standard Cycles: Otto Cycle (Spark Ignition), Diesel Cycle (Compression Ignition), Dual Cycle: Efficiency (η) formulas & p-v / T-s diagrams'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. Y. Seetha Rama Rao',
        verifiedRole: 'GVPCOE Thermal Engineering Lead',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.98,
        upvotes: 950,
        videoDuration: '5m 15s',
        summaryTelugu: 'థర్మోడైనమిక్స్: ఫస్ట్ లా SFEE ఈక్వేషన్, సెకండ్ లా కార్నోట్ సైకిల్, ఎంట్రోపీ (dS = dQ/T), మరియు ఒట్టో & డీజిల్ సైకిల్ ఎఫీషియెన్సీ ఫార్ములాలు.',
        summaryEnglish: 'Derivation of Otto cycle efficiency η = 1 - 1/(r^(γ-1)), Diesel cycle cutoff ratio formula, SFEE nozzle velocity, and entropy principle.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Otto & Diesel Air Standard Efficiencies',
            quickTake: 'Otto efficiency depends strictly on compression ratio r; Diesel efficiency also depends on cutoff ratio rc.',
            keyPoints: [
              'Otto Cycle Efficiency: η_otto = 1 - (1 / r^(γ - 1)), where r = V1 / V2 is compression ratio and γ = Cp / Cv = 1.4 for air.',
              'Diesel Cycle Efficiency: η_diesel = 1 - (1 / r^(γ - 1)) * [ (rc^γ - 1) / (γ * (rc - 1)) ], where rc = V3 / V2 is cutoff ratio.',
              'Comparison for same compression ratio r: η_otto > η_dual > η_diesel.',
              'Comparison for same maximum pressure & peak temperature: η_diesel > η_dual > η_otto.'
            ],
            formulaOrEquation: 'η_otto = 1 - 1/r^(γ-1) | For same r: η_otto > η_diesel'
          },
          {
            topic: 'Steady Flow Energy Equation (SFEE)',
            quickTake: 'First law energy conservation for open control volume systems with mass flow rate m_dot.',
            keyPoints: [
              'General SFEE: h1 + V1²/2 + g z1 + Q = h2 + V2²/2 + g z2 + W.',
              'Steam / Gas Nozzle: W = 0, Q = 0 -> Exit velocity V2 = √(2 * (h1 - h2)).',
              'Turbine (Adiabatic): Q = 0, ΔPE ≈ 0, ΔKE ≈ 0 -> Work output W = h1 - h2.'
            ],
            formulaOrEquation: 'h1 + V1²/2 + gz1 + Q = h2 + V2²/2 + gz2 + W | Nozzle: V2 = √(2(h1-h2))'
          }
        ],
        mindmap: {
          center: 'Thermodynamics & Power Cycles',
          branches: [
            {
              title: '1. First Law & Energy',
              subtopics: ['Work W = ∫ P dV across processes (Isobaric, Isothermal, Polytropic)', 'Internal energy ΔU = m Cv ΔT', 'Enthalpy H = U + PV', 'SFEE nozzle, turbine, compressor'],
              examTip: 'Work done in adiabatic process: W = (P1V1 - P2V2) / (γ - 1).',
              color: 'blue'
            },
            {
              title: '2. Second Law & Entropy',
              subtopics: ['Kelvin-Planck & Clausius statements equivalence', 'Carnot efficiency η = 1 - T_L/T_H', 'Clausius inequality ∮ dQ/T <= 0', 'Principle of increase of entropy (dS_univ >= 0)'],
              examTip: 'Carnot efficiency depends only on source and sink temperatures, independent of working fluid.',
              color: 'purple'
            },
            {
              title: '3. Air Standard Cycles',
              subtopics: ['Otto cycle 4 processes (2 isentropic, 2 constant volume)', 'Diesel cycle constant pressure heat addition', 'Dual combustion cycle', 'Mean Effective Pressure (MEP)'],
              examTip: 'Draw both P-v and T-s diagrams side by side with process numbers 1-2-3-4.',
              color: 'emerald'
            },
            {
              title: '4. Pure Substances',
              subtopics: ['P-v-T surface & Phase diagram', 'Dryness fraction x quality of steam', 'Steam tables enthalpy h = hf + x*hfg', 'Mollier diagram (h-s chart)'],
              examTip: 'Superheated steam enthalpy: h = hg + Cps * (T_sup - T_sat).',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- MECH 3RD YEAR ---
  {
    id: 'mech-heat-transfer-3rd',
    code: '20ME3103',
    name: 'Heat & Mass Transfer',
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
        title: 'Conduction, Convection & Heat Exchangers (LMTD)',
        keyTopics: [
          'Modes of Heat Transfer: Fourier\'s Law of Conduction (q = -k A dT/dx), Newton\'s Law of Cooling (q = h A ΔT), Stefan-Boltzmann Law of Radiation (q = ε σ A T⁴)',
          '1D Steady State Conduction: Composite walls, cylinders, and spheres with thermal resistance network R_th',
          'Critical Radius of Insulation: Cylinder rc = k / h, Sphere rc = 2k / h',
          'Heat Exchangers: Parallel flow vs Counter flow, Logarithmic Mean Temperature Difference (LMTD) method, NTU-Effectiveness method'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Prof. V. Dharma Rao',
        verifiedRole: 'AUCOE Thermal & Fluids Chair',
        pdfPages: 22,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 960,
        videoDuration: '5m 20s',
        summaryTelugu: 'హీట్ ట్రాన్స్‌ఫర్: ఫోరియర్స్ లా ఆఫ్ కండక్షన్, థర్మల్ రెసిస్టెన్స్ నెట్‌వర్క్, క్రిటికల్ రేడియస్ ఆఫ్ ఇన్సులేషన్ (rc = k/h) మరియు LMTD హీట్ ఎక్స్ఛేంజర్ మెథడ్.',
        summaryEnglish: 'Derivation of critical radius of insulation for pipes, thermal resistance of composite cylinders, and counter-flow LMTD = (ΔT1 - ΔT2) / ln(ΔT1/ΔT2).',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Critical Radius of Insulation & LMTD',
            quickTake: 'Adding insulation to thin wire/pipe initially increases heat dissipation until radius reaches rc = k / h.',
            keyPoints: [
              'Cylinder Critical Radius: rc = k / h, where k is insulation thermal conductivity and h is ambient convection coefficient.',
              'If outer radius r < rc: Adding insulation INCREASES heat loss.',
              'If outer radius r > rc: Adding insulation DECREASES heat loss.',
              'LMTD Formula: ΔT_lm = (ΔT1 - ΔT2) / ln(ΔT1 / ΔT2). For same inlet/outlet temperatures, Counter-flow has higher LMTD than Parallel-flow.'
            ],
            formulaOrEquation: 'Cylinder: rc = k / h | Sphere: rc = 2k / h | LMTD = (ΔT1 - ΔT2) / ln(ΔT1/ΔT2)'
          },
          {
            topic: 'Three Modes of Heat Transfer',
            quickTake: 'Conduction requires physical medium; Convection requires fluid bulk motion; Radiation requires no medium (electromagnetic).',
            keyPoints: [
              'Conduction: Q = -k * A * (dT/dx) (Fourier\'s Law).',
              'Convection: Q = h * A * (Ts - T∞) (Newton\'s Law).',
              'Radiation: Q = ε * σ * A * (T1⁴ - T2⁴) (Stefan-Boltzmann constant σ = 5.67 x 10⁻⁸ W/m²·K⁴).'
            ],
            formulaOrEquation: 'Q_cond = -kA(dT/dx) | Q_conv = hA ΔT | Q_rad = ε σ A(T1⁴ - T2⁴)'
          }
        ],
        mindmap: {
          center: 'Heat Transfer Principles',
          branches: [
            {
              title: '1. Conduction Heat Transfer',
              subtopics: ['General 3D heat conduction equation', 'Thermal conductivity k of metals vs insulators', 'Thermal contact resistance', 'Fins / Extended surfaces efficiency'],
              examTip: 'Fin effectiveness ε_fin must be > 2 for fin addition to be economically justified.',
              color: 'blue'
            },
            {
              title: '2. Critical Insulation',
              subtopics: ['Conduction resistance vs Convection resistance tradeoff', 'rc = k/h for cylindrical cables', 'rc = 2k/h for spherical containers', 'Electrical cable insulation optimization'],
              examTip: 'Electrical wires are insulated with r = rc to maximize heat dissipation and avoid melting.',
              color: 'purple'
            },
            {
              title: '3. Convection Principles',
              subtopics: ['Hydrodynamic & Thermal boundary layers', 'Dimensionless numbers: Reynolds (Re), Prandtl (Pr), Nusselt (Nu)', 'Free vs Forced convection correlations', 'Grashof number Gr in buoyancy flow'],
              examTip: 'Nusselt number Nu = h L / k represents ratio of convective to conductive heat transfer across boundary layer.',
              color: 'emerald'
            },
            {
              title: '4. Heat Exchangers',
              subtopics: ['Parallel vs Counter flow temperature profiles', 'LMTD = (ΔT1 - ΔT2)/ln(ΔT1/ΔT2)', 'Fouling factor fouling resistance', 'Effectiveness-NTU method for unknown outlet T'],
              examTip: 'Counter-flow heat exchanger requires less surface area than parallel-flow for the same heat duty.',
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
    id: 'csm-data-science-2nd',
    code: '20CSM2101',
    name: 'Foundations of Data Science & Python Analytics',
    semesterOrGrade: '2nd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'csm',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '2nd-year',
    subjectCategory: 'ai',
    units: [
      {
        unitNumber: 1,
        title: 'NumPy Vectorization, Pandas DataFrames & EDA',
        keyTopics: [
          'NumPy Arrays: N-dimensional ndarray, Broadcasting rules, Vectorized operations, Linear Algebra (np.linalg.inv, np.linalg.eig)',
          'Pandas DataFrames: Series vs DataFrames, Indexing (.loc vs .iloc), Missing value imputation (.fillna, .dropna), GroupBy & Aggregations',
          'Exploratory Data Analysis (EDA): Summary statistics, Skewness, Kurtosis, Correlation matrices (Pearson, Spearman), Outlier detection (IQR rule, Z-score)',
          'Data Visualization: Matplotlib & Seaborn (Histograms, Boxplots, Heatmaps, Pairplots, Scatter matrices)'
        ],
        readingTime: '24 mins',
        verifiedBy: 'Dr. Ch. Sita Kameswari',
        verifiedRole: 'GVPCOE AI Research Lead',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.98,
        upvotes: 950,
        videoDuration: '5m 10s',
        summaryTelugu: 'డేటా సైన్స్ & పైథాన్: NumPy వెక్టరైజేషన్, బ్రాడ్‌కాస్టింగ్ రూల్స్, Pandas .loc vs .iloc, మిస్సింగ్ డేటా హ్యాండ్లింగ్ మరియు బాక్స్‌ప్లాట్ ఔట్‌లయర్ డిటెక్షన్ (IQR).',
        summaryEnglish: 'NumPy vectorized broadcasting performance comparisons, Pandas groupby split-apply-combine paradigms, and IQR statistical outlier filtering.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'NumPy Broadcasting Rules',
            quickTake: 'Allows arithmetic operations between arrays of different shapes without copying data.',
            keyPoints: [
              'Rule 1: If arrays differ in number of dimensions, prepend shape of smaller array with 1s.',
              'Rule 2: Two dimensions are compatible if they are equal OR if one of them is 1.',
              'If compatible, the smaller array is stretched along the dimension with length 1 to match the larger array.'
            ],
            formulaOrEquation: 'Compatibility: dim(A) == dim(B) OR dim(A) == 1 OR dim(B) == 1'
          },
          {
            topic: 'Outlier Detection via IQR Method',
            quickTake: 'Robust non-parametric outlier filtering immune to extreme skewness.',
            keyPoints: [
              'Interquartile Range: IQR = Q3 - Q1 (difference between 75th and 25th percentiles).',
              'Lower Bound: Q1 - 1.5 * IQR.',
              'Upper Bound: Q3 + 1.5 * IQR.',
              'Any data point falling outside [Lower Bound, Upper Bound] is flagged as an outlier.'
            ],
            formulaOrEquation: 'IQR = Q3 - Q1 | Outliers: x < Q1 - 1.5*IQR OR x > Q3 + 1.5*IQR'
          }
        ],
        mindmap: {
          center: 'Data Science & Analytics',
          branches: [
            {
              title: '1. NumPy Operations',
              subtopics: ['Contiguous memory buffer ndarray', 'Broadcasting dimensions alignment', 'Universal functions ufuncs (np.sin, np.exp)', 'Slicing produces views vs copies'],
              examTip: 'Modifying a sliced NumPy array modifies the original array because slicing creates a view, not a copy.',
              color: 'blue'
            },
            {
              title: '2. Pandas Wrangling',
              subtopics: ['.loc[label] vs .iloc[integer index]', 'Handling NaN: dropna vs fillna(mean/median)', 'df.groupby("col").agg({"salary": "mean"})', 'pd.merge() vs pd.concat()'],
              examTip: '.loc is label-based and includes the endpoint; .iloc is position-based and excludes the endpoint.',
              color: 'purple'
            },
            {
              title: '3. Statistical EDA',
              subtopics: ['Mean, Median, Mode skewness', 'Variance & Standard deviation', 'Pearson correlation coefficient r', 'IQR vs Z-score outlier detection'],
              examTip: 'If Mean > Median > Mode, the distribution is Positively (Right) Skewed.',
              color: 'emerald'
            },
            {
              title: '4. Visual Storytelling',
              subtopics: ['Seaborn sns.heatmap(df.corr(), annot=True)', 'sns.boxplot for quartile visualization', 'sns.pairplot for pairwise relationships', 'Subplots layout with plt.subplots(r, c)'],
              examTip: 'Box plot displays Min, Q1, Median (Q2), Q3, Max, and Outliers as individual dots.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- CSM 4TH YEAR ---
  {
    id: 'csm-nlp-llm-4th',
    code: '20CSM4103',
    name: 'Natural Language Processing & Large Language Models',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'csm',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'ai',
    units: [
      {
        unitNumber: 1,
        title: 'Tokenization, Embeddings & Transformer Self-Attention',
        keyTopics: [
          'Text Preprocessing: Tokenization (Word, Subword: BPE - Byte Pair Encoding, WordPiece), Lemmatization, Stop-word removal, POS Tagging',
          'Word Vector Embeddings: One-Hot Encoding limitations, Word2Vec (CBOW vs Skip-Gram), GloVe, Cosine similarity: cos(u,v) = (u·v)/(||u|| ||v||)',
          'Sequence Modeling Limitations: Vanishing gradients in standard RNNs, LSTM gating mechanisms (Forget, Input, Output gates)',
          'Transformer Architecture: Scaled Dot-Product Attention: Attention(Q,K,V) = softmax(QKᵀ / √dk) * V, Multi-Head Attention, Positional Encoding'
        ],
        readingTime: '28 mins',
        verifiedBy: 'V. Sandeep',
        verifiedRole: 'AUCOE AI & NLP Faculty',
        pdfPages: 26,
        fileSize: '3.6 MB',
        rating: 4.99,
        upvotes: 990,
        videoDuration: '5m 45s',
        summaryTelugu: 'NLP & ట్రాన్స్‌ఫార్మర్స్: BPE టోకనైజేషన్, Word2Vec (Skip-Gram), సెల్ఫ్-అటెన్షన్ ఫార్ములా softmax(QKᵀ/√dk)V, మల్టీ-హెడ్ అటెన్షన్ మరియు పొజిషనల్ ఎన్‌కోడింగ్.',
        summaryEnglish: 'Mathematical derivation of Scaled Dot-Product Attention, Byte-Pair Encoding merge loops, and Transformer encoder-decoder residual connections.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 9,
        solvedQuestionsCount: 16,
        topicAtAGlance: [
          {
            topic: 'Scaled Dot-Product Attention Mechanism',
            quickTake: 'Calculates importance weight of each token with respect to every other token in parallel.',
            keyPoints: [
              'Inputs: Query matrix Q, Key matrix K, Value matrix V (all derived from word embeddings via learned weight matrices Wq, Wk, Wv).',
              'Scaling factor 1 / √dk: Prevents dot products from growing excessively large for high dimensions, which would push softmax into near-zero gradient regions.',
              'Multi-Head Attention: Projects Q, K, V into h different subspaces, runs attention in parallel, and concatenates results: MultiHead = Concat(head_1, ..., head_h) * Wo.'
            ],
            formulaOrEquation: 'Attention(Q, K, V) = softmax( (Q Kᵀ) / √d_k ) * V'
          },
          {
            topic: 'Word2Vec (Skip-Gram vs CBOW)',
            quickTake: 'Learns dense continuous vector representations where semantic relationships map to vector arithmetic.',
            keyPoints: [
              'Continuous Bag of Words (CBOW): Predicts target center word wt given surrounding context words wt-c ... wt+c.',
              'Skip-Gram: Predicts surrounding context words given center word wt (superior for rare words and large corpora).',
              'Semantic Vector Property: vector("King") - vector("Man") + vector("Woman") ≈ vector("Queen").'
            ],
            formulaOrEquation: 'Cosine Similarity: cos(θ) = (u · v) / (||u|| * ||v||)'
          }
        ],
        mindmap: {
          center: 'NLP & LLM Architectures',
          branches: [
            {
              title: '1. Text Tokenization',
              subtopics: ['Whitespace & regex splits', 'Byte-Pair Encoding (BPE)', 'WordPiece in BERT', 'Out of Vocabulary (OOV) solution'],
              examTip: 'BPE iteratively merges the most frequent pair of adjacent bytes/characters into a single new subword token.',
              color: 'blue'
            },
            {
              title: '2. Word Representations',
              subtopics: ['TF-IDF sparse matrices', 'Word2Vec negative sampling', 'GloVe co-occurrence matrix factorization', 'Contextual embeddings (ELMo vs BERT)'],
              examTip: 'Word2Vec produces static embeddings (same vector for "bank" river vs "bank" finance); BERT produces contextual embeddings.',
              color: 'purple'
            },
            {
              title: '3. Transformer Attention',
              subtopics: ['Query, Key, Value projections', 'Dot product similarity matrix QKᵀ', 'Softmax row-wise normalization', 'Positional Encoding PE(pos, 2i) = sin(pos/10000^(2i/d))'],
              examTip: 'Explain why positional encoding is necessary: Transformers process all tokens simultaneously without inherent recurrence or order awareness.',
              color: 'emerald'
            },
            {
              title: '4. Modern LLMs & GenAI',
              subtopics: ['Encoder-only (BERT for classification)', 'Decoder-only (GPT for generation)', 'Pre-training & Fine-tuning (LoRA, PEFT)', 'Retrieval-Augmented Generation (RAG) with vector databases'],
              examTip: 'RAG grounds LLM responses on external private documents by retrieving relevant chunks via vector similarity search.',
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
  // --- IT 3RD YEAR ---
  {
    id: 'it-web-tech-3rd',
    code: '20IT3102',
    name: 'Full Stack Web Technologies',
    semesterOrGrade: '3rd Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'it',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '3rd-year',
    subjectCategory: 'it',
    units: [
      {
        unitNumber: 1,
        title: 'HTML5, CSS3, Modern JavaScript (ES6+) & DOM',
        keyTopics: [
          'HTML5 Semantic elements, Audio/Video, Web Storage (localStorage vs sessionStorage vs Cookies)',
          'CSS3: Flexbox (justify-content, align-items, flex-direction), Grid system, Responsive Web Design & Media Queries',
          'Modern JavaScript (ES6+): Arrow functions, Destructuring, Promises, async/await, Event Loop (Call Stack, Web APIs, Callback Queue, Microtask Queue)',
          'Document Object Model (DOM) Manipulation: Event bubbling vs Event capturing, Event delegation'
        ],
        readingTime: '24 mins',
        verifiedBy: 'M. Satyanarayana',
        verifiedRole: 'ANITS IT Department Lead',
        pdfPages: 22,
        fileSize: '3.0 MB',
        rating: 4.97,
        upvotes: 910,
        videoDuration: '5m 05s',
        summaryTelugu: 'ఫుల్ స్టాక్ వెబ్ టెక్నాలజీస్: HTML5 సెమాంటిక్ టాగ్స్, CSS ఫ్లెక్స్‌బాక్స్ & గ్రిడ్, జావాస్క్రిప్ట్ ఈవెంట్ లూప్ (కాల్ స్టాక్, మైక్రోటాస్క్ క్యూ), ప్రామిసెస్ మరియు async/await.',
        summaryEnglish: 'Clean JavaScript asynchronous event loop diagrams, Flexbox centering cheatsheet, and DOM event delegation performance patterns.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 5,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'JavaScript Event Loop & Microtasks',
            quickTake: 'Single-threaded non-blocking concurrency model executing synchronous code, microtasks, and macrotasks.',
            keyPoints: [
              'Call Stack: Executes synchronous JavaScript function calls (LIFO).',
              'Microtask Queue (Higher Priority): Promises (.then, .catch), queueMicrotask, MutationObserver.',
              'Macrotask / Callback Queue: setTimeout, setInterval, setImmediate, DOM events.',
              'Execution Order: Stack clears -> ALL microtasks execute -> ONE macrotask executes -> Repeat.'
            ],
            formulaOrEquation: 'Order: Synchronous Stack ➔ Microtask Queue (Promises) ➔ Macrotask Queue (setTimeout)'
          },
          {
            topic: 'CSS Flexbox vs CSS Grid',
            quickTake: 'Flexbox is designed for 1-dimensional layouts (row or column); Grid is designed for 2-dimensional layouts (rows and columns simultaneously).',
            keyPoints: [
              'Flexbox Perfect Centering: display: flex; justify-content: center; align-items: center; on parent container.',
              'CSS Grid: display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); creates fluid responsive columns without media queries.',
              'Event Delegation: Attach single event listener to common parent instead of attaching separate listeners to hundreds of child nodes.'
            ],
            formulaOrEquation: 'Flexbox = 1D Layout (Row OR Col) | Grid = 2D Layout (Rows AND Cols)'
          }
        ],
        mindmap: {
          center: 'Modern Web Architecture',
          branches: [
            {
              title: '1. HTML5 & Storage',
              subtopics: ['Semantic header, nav, main, footer', 'localStorage 5-10MB persistent', 'sessionStorage tab-lifetime', 'HttpOnly Secure cookies'],
              examTip: 'localStorage persists until explicitly cleared; sessionStorage clears when browser tab is closed.',
              color: 'blue'
            },
            {
              title: '2. CSS3 Layouts',
              subtopics: ['Box model: Margin, Border, Padding, Content', 'box-sizing: border-box benefit', 'Flexbox main & cross axis alignment', 'Media queries @media (max-width: 768px)'],
              examTip: 'border-box includes padding and border inside the specified width, eliminating layout overflow bugs.',
              color: 'purple'
            },
            {
              title: '3. Asynchronous JS',
              subtopics: ['Callback hell limitation', 'Promises (Pending, Fulfilled, Rejected)', 'async/await syntactic sugar', 'Event loop call stack & queue processing'],
              examTip: 'Microtask queue (Promise resolution) has strictly higher priority than callback queue (setTimeout).',
              color: 'emerald'
            },
            {
              title: '4. Node.js & REST APIs',
              subtopics: ['Node.js V8 runtime & libuv', 'Express.js middleware pipeline', 'RESTful HTTP methods (GET, POST, PUT, DELETE)', 'Status codes: 200 OK, 201 Created, 400 Bad, 404, 500'],
              examTip: 'PUT is idempotent (replaces entire resource); PATCH updates partial fields of a resource.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- IT 4TH YEAR ---
  {
    id: 'it-cyber-sec-4th',
    code: '20IT4103',
    name: 'Information Security & Cyber Forensics',
    semesterOrGrade: '4th Year Core',
    creditsOrMarks: '3 Credits • 70 Ext / 30 Int',
    gradeOrBranch: 'it',
    institutionId: 'gvp',
    regulationOrBoard: 'R20 Autonomous',
    category: 'Professional Core',
    collegeYear: '4th-year',
    subjectCategory: 'it',
    units: [
      {
        unitNumber: 1,
        title: 'Cryptography, Public Key (RSA) & Cyber Forensics',
        keyTopics: [
          'Security Goals: CIA Triad (Confidentiality, Integrity, Availability), Non-repudiation, Authentication',
          'Symmetric Cryptography: Data Encryption Standard (DES), Advanced Encryption Standard (AES - 128/192/256-bit)',
          'Asymmetric Cryptography: RSA Algorithm (Key generation via Euler\'s totient φ(n), Encryption C = M^e mod n, Decryption M = C^d mod n)',
          'Cryptographic Hash Functions (SHA-256), Digital Signatures, Cyber Forensics Chain of Custody & Evidence Acquisition'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. K. Bharathi',
        verifiedRole: 'AUCOE Cybersecurity Specialist',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.98,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'సైబర్‌ సెక్యూరిటీ: CIA ట్రయాడ్, AES సిమెట్రిక్ ఎన్‌క్రిప్షన్, RSA అల్గారిథమ్ (ప్రైవేట్ & పబ్లిక్ కీ క్యాలిక్యులేషన్), SHA-256 హ్యాషింగ్ మరియు డిజిటల్ సిగ్నేచర్స్.',
        summaryEnglish: 'Complete RSA numerical calculation walkthrough with prime numbers p and q, Euler totient φ(n) modular inverse, and digital forensics chain of custody.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'RSA Asymmetric Key Algorithm',
            quickTake: 'Public key encryption based on mathematical difficulty of factoring large prime numbers.',
            keyPoints: [
              'Choose two large distinct primes p and q. Compute n = p * q.',
              'Compute Euler\'s totient: φ(n) = (p - 1) * (q - 1).',
              'Choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1.',
              'Compute private exponent d: d * e ≡ 1 (mod φ(n)) via Extended Euclidean algorithm.',
              'Public Key: (e, n); Private Key: (d, n).',
              'Encryption: C = M^e mod n; Decryption: M = C^d mod n.'
            ],
            formulaOrEquation: 'C = M^e mod n | M = C^d mod n | d * e ≡ 1 (mod φ(n))'
          },
          {
            topic: 'CIA Triad & Hash Functions',
            quickTake: 'Three pillars of information security enforced via cryptography and access control.',
            keyPoints: [
              'Confidentiality: Data accessible only to authorized entities (AES encryption).',
              'Integrity: Data not altered in transit (SHA-256 cryptographic hashing).',
              'Availability: Services accessible when requested by legitimate users (DDoS prevention).',
              'Digital Signature: Encrypting message digest with Sender\'s PRIVATE key guarantees authenticity and non-repudiation.'
            ],
            formulaOrEquation: 'Digital Signature = Encrypt_PrivKey(Hash(M)) | Verified with PubKey'
          }
        ],
        mindmap: {
          center: 'Cybersecurity & Cryptography',
          branches: [
            {
              title: '1. Security Core & Attacks',
              subtopics: ['CIA Triad fundamental model', 'Active vs Passive attacks', 'Man-in-the-Middle (MITM) & Phishing', 'DDoS volumetric attacks & Botnets'],
              examTip: 'Passive attack threatens confidentiality (eavesdropping); Active attack alters data or fabricates messages.',
              color: 'blue'
            },
            {
              title: '2. Symmetric Encryption',
              subtopics: ['Substitution & Permutation networks', 'DES 56-bit key limitations (vulnerable to brute force)', 'AES Rijndael 128-bit blocks (10, 12, 14 rounds)', 'Block cipher modes (ECB, CBC, GCM)'],
              examTip: 'ECB mode preserves plaintext patterns; always use CBC or GCM with unique Initialization Vector (IV).',
              color: 'purple'
            },
            {
              title: '3. RSA & Key Management',
              subtopics: ['Prime factorization hardness', 'Euler totient φ(n) = (p-1)(q-1)', 'Extended Euclidean algorithm for d', 'Diffie-Hellman Key Exchange'],
              examTip: 'Perform RSA calculation with small numbers (e.g. p=3, q=11, e=7) to earn full 10 marks in university exams.',
              color: 'emerald'
            },
            {
              title: '4. Integrity & Forensics',
              subtopics: ['SHA-256 one-way hashing & Avalanche effect', 'Digital signature non-repudiation', 'Chain of Custody legal evidence documentation', 'Bit-stream disk imaging (dd tool)'],
              examTip: 'Original evidence media is NEVER analyzed directly; always work on verified bit-stream forensic copies with matching hashes.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- EEE 4TH YEAR ---
  {
    id: 'eee-psoc-4th',
    code: '20EE4105',
    name: 'Power System Operation & Control (PSOC)',
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
        title: 'Economic Dispatch, Unit Commitment & Load Flow',
        keyTopics: [
          'Economic Dispatch of Generators: Incremental fuel cost curve, Equal incremental cost criterion (neglecting & including transmission losses using B-coefficients)',
          'Unit Commitment: Priority List method, Dynamic Programming approach',
          'Load Flow Formulations: Gauss-Seidel Method, Newton-Raphson (NR) Method in Polar coordinates, Fast Decoupled Load Flow (FDLF)',
          'Automatic Generation Control (AGC): Single area and two-area load frequency control (LFC), Tie-line bias control, Steady-state frequency deviation'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. K. Narasimha Rao',
        verifiedRole: 'AUCOE Power Systems Lead',
        pdfPages: 24,
        fileSize: '3.2 MB',
        rating: 4.97,
        upvotes: 930,
        videoDuration: '5m 15s',
        summaryTelugu: 'పవర్ సిస్టమ్ ఆపరేషన్: ఎకనామిక్ డిస్పాచ్ (ఈక్వల్ ఇంక్రిమెంటల్ కాస్ట్), న్యూటన్-రాఫ్సన్ లోడ్ ఫ్లో, మరియు లోడ్ ఫ్రీక్వెన్సీ కంట్రోల్ (AGC).',
        summaryEnglish: 'Derivation of penalty factor L_i = 1/(1 - ∂P_L/∂P_i), Newton-Raphson Jacobian matrix structure, and tie-line frequency error calculations.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 8,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Economic Load Dispatch with Transmission Losses',
            quickTake: 'Minimizes total generation fuel cost while satisfying load demand and transmission network losses.',
            keyPoints: [
              'Condition: dF1/dP1 * L1 = dF2/dP2 * L2 = ... = λ (Equal incremental cost with penalty factors).',
              'Penalty Factor: Li = 1 / (1 - ∂P_loss / ∂Pi).',
              'Transmission losses expressed via Kron\'s loss formula: P_loss = Σ Σ Pi Bij Pj + Σ B0i Pi + B00.',
              'Generators with high penalty factor (far from load centers) are backed down.'
            ],
            formulaOrEquation: 'dFi/dPi * Li = λ | Li = 1 / (1 - ∂Ploss/∂Pi)'
          },
          {
            topic: 'Newton-Raphson vs Gauss-Seidel Load Flow',
            quickTake: 'Newton-Raphson exhibits quadratic convergence; independent of bus count; standard across electrical utilities.',
            keyPoints: [
              'Gauss-Seidel: Linear convergence, simple computation per iteration, but iteration count increases rapidly with large power systems.',
              'Newton-Raphson: Quadratic convergence (converges in 3-5 iterations), requires computation and inversion of Jacobian matrix [J1 J2; J3 J4].',
              'Fast Decoupled (FDLF): Decouples active power-angle (P-θ) and reactive power-voltage (Q-V) relationships for lightning-fast solution.'
            ],
            formulaOrEquation: '[ ΔP ; ΔQ ] = [ J11 J12 ; J21 J22 ] * [ Δθ ; Δ|V|/|V| ]'
          }
        ],
        mindmap: {
          center: 'Power System Operation & Control',
          branches: [
            {
              title: '1. Economic Dispatch',
              subtopics: ['Fuel cost curve Fi = ai Pi² + bi Pi + ci', 'Incremental fuel cost dFi/dPi', 'Equal incremental cost rule', 'B-matrix loss coefficients'],
              examTip: 'Neglecting losses: dFi/dPi = λ. With losses: (dFi/dPi) * Li = λ.',
              color: 'blue'
            },
            {
              title: '2. Load Flow Algorithms',
              subtopics: ['Bus types (Slack, PV Generator, PQ Load)', 'Admittance matrix Y_bus formation', 'Newton-Raphson Jacobian sub-matrices', 'Fast decoupled power flow approximations'],
              examTip: 'Slack bus voltage is fixed at 1.0 ∠0° to account for unknown system losses.',
              color: 'purple'
            },
            {
              title: '3. Load Frequency Control',
              subtopics: ['Governor speed droop R (Hz/MW)', 'Single-area turbine-generator model', 'Static frequency drop Δf_ss = -ΔP_L / (D + 1/R)', 'Integral controller for zero steady-state error'],
              examTip: 'Adding an integral controller to LFC eliminates frequency deviation completely (Δf_ss = 0).',
              color: 'emerald'
            },
            {
              title: '4. Voltage & Reactive Power',
              subtopics: ['Q-V sensitivity coupling', 'Synchronous condensers compensation', 'Static VAR Compensator (SVC)', 'STATCOM voltage support'],
              examTip: 'Reactive power cannot be transmitted over long distances; compensation must be localized.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  },

  // --- MECH 4TH YEAR ---
  {
    id: 'mech-cad-cam-4th',
    code: '20ME4105',
    name: 'CAD/CAM & Industrial Robotics',
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
        title: 'Geometric Modeling, CNC Part Programming & Robotics',
        keyTopics: [
          'CAD/CAM Product Life Cycle, 2D/3D Transformations: Translation, Scaling, Rotation, Reflection using 4x4 Homogeneous Transformation Matrices',
          'Geometric Modeling: Wireframe, Surface Modeling (Bezier, B-Spline curves), Solid Modeling (CSG - Constructive Solid Geometry, B-Rep)',
          'CNC Part Programming: G-Codes (G00 Rapid, G01 Linear, G02/G03 Circular interpolation, G71 Turning cycle), M-Codes (M03 Spindle ON, M08 Coolant ON)',
          'Industrial Robotics: Robot Anatomy (Links, Joints, Degrees of Freedom), Configurations (Cartesian, Cylindrical, Spherical, SCARA, Articulated), Forward Kinematics (DH Parameters)'
        ],
        readingTime: '26 mins',
        verifiedBy: 'Dr. B. Govinda Rao',
        verifiedRole: 'GVPCOE Advanced Robotics Center',
        pdfPages: 22,
        fileSize: '3.1 MB',
        rating: 4.97,
        upvotes: 940,
        videoDuration: '5m 15s',
        summaryTelugu: 'CAD/CAM & రోబోటిక్స్: 3D హోమోజీనియస్ ట్రాన్స్‌ఫర్మేషన్స్, CNC పార్ట్ ప్రోగ్రామింగ్ (G00, G01, G02, G71 సైకిల్స్) మరియు SCARA రోబోట్ ఆర్కిటెక్చర్.',
        summaryEnglish: 'Homogeneous transformation matrix multiplication, CNC G-code part program for step turning, and Denavit-Hartenberg (DH) robotics link parameters.',
        examWeightage: '16 Marks in Semester End Exam',
        formulaeCount: 7,
        solvedQuestionsCount: 15,
        topicAtAGlance: [
          {
            topic: 'Homogeneous Transformation Matrices',
            quickTake: 'Combines rotation, translation, scaling, and perspective into a unified 4x4 matrix multiplication.',
            keyPoints: [
              'Translation Matrix T(dx, dy, dz): Diagonal 1s with dx, dy, dz in fourth column.',
              'Rotation about Z-axis by θ: [cos θ, -sin θ, 0, 0; sin θ, cos θ, 0, 0; 0, 0, 1, 0; 0, 0, 0, 1].',
              'Composite Transformation: Multiply individual matrices in reverse order of operation application.'
            ],
            formulaOrEquation: '[x\' y\' z\' 1]ᵀ = [T] * [R] * [x y z 1]ᵀ'
          },
          {
            topic: 'CNC Preparatory (G) & Miscellaneous (M) Codes',
            quickTake: 'Standardized ISO programming language guiding automated CNC machine tool path and spindle control.',
            keyPoints: [
              'G00: Rapid traverse / non-cutting positioning.',
              'G01: Linear interpolation at programmed feed rate (F).',
              'G02 / G03: Circular interpolation Clockwise / Counter-Clockwise (with I, J arc center offsets or R radius).',
              'M03 / M05: Spindle start clockwise / Spindle stop; M08 / M09: Coolant ON / OFF; M30: Program end & rewind.'
            ],
            formulaOrEquation: 'G01 X.. Z.. F.. | G02 X.. Z.. R.. F.. | M03 S1200'
          }
        ],
        mindmap: {
          center: 'CAD/CAM & Robotics Automation',
          branches: [
            {
              title: '1. Geometric Modeling',
              subtopics: ['Wireframe ambiguity limitations', 'Bezier curve blending functions', 'CSG Boolean operations (Union, Intersect, Difference)', 'Boundary Representation (B-Rep)'],
              examTip: 'Bezier curve is always contained within the convex hull formed by its control polygon points.',
              color: 'blue'
            },
            {
              title: '2. CNC Technology',
              subtopics: ['DDA interpolator hardware', 'Canned turning cycles G71 & G70', 'Tool nose radius compensation G41/G42', 'Direct Numerical Control (DNC) networks'],
              examTip: 'G41 is tool cutter compensation Left; G42 is tool cutter compensation Right.',
              color: 'purple'
            },
            {
              title: '3. Robot Manipulators',
              subtopics: ['Joint types: Revolute (R) vs Prismatic (P)', 'SCARA selective compliance for assembly', 'Articulated 6-axis anthropomorphic arm', 'Work volume & reachability envelope'],
              examTip: 'SCARA robot is rigid in Z-axis but compliant in X-Y plane, making it ideal for pick-and-place assembly.',
              color: 'emerald'
            },
            {
              title: '4. Robot Kinematics',
              subtopics: ['Denavit-Hartenberg (DH) 4 link parameters', 'Forward kinematics: Link transformations to end-effector', 'Inverse kinematics complexity & multiple solutions', 'End-effectors & Grippers'],
              examTip: 'The 4 DH parameters are link length a_i, link twist α_i, link offset d_i, and joint angle θ_i.',
              color: 'amber'
            }
          ]
        }
      }
    ]
  }
];
