import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const CLASS_9_SCIENCE_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. IS MATTER AROUND US PURE?
  // ==========================================
  {
    titleMatcher: 'matter around us pure',
    topics: [
      {
        topic: '1. Pure Substances vs Mixtures',
        inBrief: 'A pure substance consists of a single type of particle with fixed composition, whereas a mixture contains two or more substances combined physically in any proportion.',
        definition: 'A pure substance is formally defined as a homogeneous form of matter characterized by a constant chemical composition and discrete, invariant thermodynamic and physical properties throughout.',
        detailedExplanation: 'In scientific terminology, purity implies the absence of any other constituent matter. Pure substances are divided into Elements (substances that cannot be broken down by chemical reactions, e.g., Gold, Copper) and Compounds (substances formed by chemical combination of elements in a fixed ratio, e.g., Water H₂O, Carbon Dioxide CO₂). In contrast, mixtures exhibit variable composition and retain the individual properties of their constituent parts without any chemical bonds forming between them.',
        quickTake: 'Pure substances: fixed composition and sharp melting points; Mixtures: variable ratio retaining original constituent properties.',
        keyPoints: [
          'Elements: Cannot be split chemically into simpler substances (Metals, Non-metals, Metalloids).',
          'Compounds: Composed of elements combined chemically in definite mass proportions; properties differ completely from elements.',
          'Mixtures: Homogeneous (uniform composition, e.g., air, saltwater) or Heterogeneous (non-uniform, e.g., sand in water).'
        ],
        formulaOrEquation: 'Purity Check: Pure water boils sharply at 100°C (373 K) at 1 atm.'
      },
      {
        topic: '2. True Solutions & Concentration',
        inBrief: 'A true solution is a homogeneous mixture of two or more substances where solute particles are smaller than 1 nanometer and never scatter light.',
        definition: 'A solution is a homogeneous mixture consisting of a solute dissolved uniformly in a solvent, with particle diameters under 1 nm (10⁻⁹ m) exhibiting no Tyndall scattering.',
        detailedExplanation: 'Solutions consist of a solvent (bulk component) and solute (dissolved component). Because solute particles are dispersed at atomic or molecular dimensions, they cannot be filtered out using filter paper, do not settle over time (stable), and do not scatter a beam of light. Concentration represents the amount of solute present in a given quantity of solution, expressed as mass percentage, volume percentage, or molarity.',
        quickTake: 'Homogeneous, transparent, stable, particle size < 1 nm, no light scattering.',
        keyPoints: [
          'Particle size: Less than 1 nm (10⁻⁹ m), invisible even under powerful optical microscopes.',
          'Stability: Solute particles do not settle down when left undisturbed.',
          'Filtration: Solute particles pass through filter paper effortlessly.'
        ],
        formulaOrEquation: 'Mass % = (Mass of Solute / Mass of Solution) × 100'
      },
      {
        topic: '3. Suspensions',
        inBrief: 'A suspension is a heterogeneous mixture in which solute particles do not dissolve but remain suspended throughout the bulk of the medium.',
        definition: 'A suspension is a heterogeneous dispersion of solid particles with dimensions exceeding 100 nm suspended within a fluid medium, subject to gravitational sedimentation.',
        detailedExplanation: 'In suspensions (e.g., chalk powder in water, muddy pond water), the particles are macroscopic (> 100 nm) and visible to the naked eye. Suspensions are thermodynamically unstable: when left undisturbed, the suspended particles gradually settle to the bottom due to gravity. While suspended, they scatter light beams, but once settled, light scattering ceases and the mixture can be separated completely by simple filtration.',
        quickTake: 'Heterogeneous, opaque/translucent, unstable; particles settle over time and can be separated by filtration.',
        keyPoints: [
          'Particle diameter: Greater than 100 nm (10⁻⁷ m). Visible to naked eye.',
          'Tyndall effect: Scatters light only while particles remain suspended.',
          'Separation: Readily separated by ordinary gravity filtration.'
        ],
        formulaOrEquation: 'Solute settles under gravity: v_terminal ∝ r² · (ρ_particle - ρ_fluid)'
      },
      {
        topic: '4. Colloidal Solutions & The Tyndall Effect',
        inBrief: 'A colloid is an intermediate heterogeneous mixture where particle size (1-100 nm) causes light scattering but particles never settle down.',
        definition: 'A colloid is a two-phase heterogeneous system comprising a dispersed phase distributed within a continuous dispersion medium, with particle sizes between 1 nm and 100 nm exhibiting the Tyndall effect.',
        detailedExplanation: 'Colloids appear homogeneous macroscopically (e.g., milk, fog, ink, blood) but are heterogeneous at the microscopic level. The particles are small enough that Brownian motion prevents gravitational settling, making colloids remarkably stable. When a beam of light passes through a colloidal sol, the particles scatter light in all directions, illuminating the path of the beam—a phenomenon known as the Tyndall effect, visible when sunlight pierces through dense forest canopy or mist.',
        quickTake: 'Particle size 1-100 nm; appears homogeneous but is heterogeneous; stable and scatters light (Tyndall effect).',
        keyPoints: [
          'Dispersed Phase: The solute-like component (e.g., fat globules in milk).',
          'Dispersion Medium: The continuous fluid medium (e.g., water in milk).',
          'Separation: Cannot be separated by filtration; requires centrifugation.'
        ],
        formulaOrEquation: 'Particle Size: 1 nm < d_colloid < 100 nm | Tyndall Scattering ∝ 1/λ⁴'
      },
      {
        topic: '5. Separation Techniques for Mixtures',
        inBrief: 'Methods based on differences in physical properties (boiling point, solubility, volatility, density) used to isolate pure components.',
        definition: 'Separation techniques are physical unit operations designed to isolate individual constituent chemical species from a heterogeneous or homogeneous mixture based on disparate physical constants.',
        detailedExplanation: '1) Centrifugation: Rotates mixture rapidly, forcing denser particles to the bottom (used in blood/urine clinical diagnostic labs and butter churning). 2) Simple Distillation: Separates liquids with boiling point difference > 25 K. 3) Fractional Distillation: Uses a fractionating column for liquids with boiling points differing by < 25 K (petroleum refining, air separation). 4) Crystallization: Purifies solids by cooling a saturated solution, leaving impurities in the mother liquor (far superior to evaporation which decomposes sensitive compounds).',
        quickTake: 'Separation relies on differences in boiling points, densities, solubilities, or sublimation properties.',
        keyPoints: [
          'Fractional distillation: Fractionating column with glass beads increases condensation cycles.',
          'Crystallization: Produces high-purity crystals without charring or thermal degradation.',
          'Centrifugation: Density-driven separation via high-speed angular momentum.'
        ],
        formulaOrEquation: 'Centrifugal Force: F_c = m · ω² · r'
      },
      {
        topic: '6. Physical vs Chemical Changes',
        inBrief: 'A physical change alters only state, appearance, or shape without forming new substances, whereas a chemical change produces entirely new chemical bonds and substances.',
        definition: 'A physical change is a reversible modification in state, shape, or phase where chemical identity remains invariant; a chemical change is an irreversible reaction creating chemically distinct products with new atomic bonds.',
        detailedExplanation: 'Melting ice into water and evaporating water into steam are physical changes because the molecular formula remains H₂O throughout. In contrast, burning magnesium ribbon in air forms magnesium oxide (2Mg + O₂ → 2MgO), an irreversible chemical reaction with completely different chemical properties and energy release. Rusting of iron, digestion of food, and burning of a candle involve chemical transformations.',
        quickTake: 'Physical change: reversible, no new substance (melting ice); Chemical change: new substance, new bonds (burning, rusting).',
        keyPoints: [
          'Candle burning: Both physical (melting and vaporisation of wax) and chemical (combustion of hydrocarbons to CO₂ and H₂O).',
          'Interconversion of states: Always a physical change (water ⇌ ice ⇌ steam).',
          'Energy change: Chemical changes usually involve significant absorption or release of heat/light.'
        ],
        formulaOrEquation: 'Physical: H₂O(s) ⇌ H₂O(l) | Chemical: 2Mg(s) + O₂(g) → 2MgO(s)'
      }
    ],
    keywords: [
      {
        keyword: 'Pure Substance',
        definition: 'A substance consisting of only one type of particle with uniform chemical composition and constant physical properties.',
        sentenceExplanation: 'A pure substance is like a stack of identical gold bars where every single atom is identical and behaves exactly the same way.',
        examContext: 'Must state: consists of single type of particle and has sharp melting/boiling point.'
      },
      {
        keyword: 'Colloid',
        definition: 'A heterogeneous system where dispersed particles (1-100 nm) remain permanently suspended and scatter incident light rays.',
        sentenceExplanation: 'A colloid is like foggy morning air where tiny water droplets float indefinitely and make car headlights glow in a visible beam.',
        examContext: 'Mention particle size range (1 to 100 nm) and stability under gravity.'
      },
      {
        keyword: 'Tyndall Effect',
        definition: 'The optical scattering of light beams by colloidal or fine suspension particles, making the path of light visible.',
        sentenceExplanation: 'The Tyndall effect is the phenomenon you see when sunlight streams through a classroom window dust cloud and reveals the bright beam.',
        examContext: 'Occurs only in colloids and suspensions, never in true solutions.'
      },
      {
        keyword: 'Centrifugation',
        definition: 'A separation technique that utilizes high-speed centrifugal acceleration to force denser particles to the bottom of a container.',
        sentenceExplanation: 'Centrifugation is the rapid spinning machine used in pathology labs in Vizag to separate red blood cells from clear liquid plasma.',
        examContext: 'High-speed spinning; denser particles forced down, lighter remain on top.'
      },
      {
        keyword: 'Crystallization',
        definition: 'A separation and purification technique where pure solid crystals precipitate out from a hot saturated solution upon cooling.',
        sentenceExplanation: 'Crystallization is the method used to obtain gleaming pure sugar or copper sulphate crystals without decomposing them with heat.',
        examContext: 'Better than evaporation because solids do not char or decompose.'
      }
    ]
  },

  // ==========================================
  // 2. ATOMS AND MOLECULES
  // ==========================================
  {
    titleMatcher: 'atoms and molecules',
    topics: [
      {
        topic: '1. Laws of Chemical Combination',
        inBrief: 'Fundamental chemical laws established by Lavoisier and Proust stating that mass is conserved and elements combine in fixed definite proportions.',
        definition: 'The Laws of Chemical Combination comprise the Law of Conservation of Mass (mass is neither created nor destroyed in a chemical reaction) and the Law of Definite Proportions (a chemical compound always contains elements in fixed mass ratios).',
        detailedExplanation: 'Formulated by Antoine Lavoisier, the Law of Conservation of Mass states that total mass of products equals total mass of reactants: Σ m_reactants = Σ m_products. In Joseph Proust\'s Law of Definite Proportions, pure water (H₂O) from any source on Earth always contains hydrogen and oxygen in a 1:8 mass ratio (2 g H combines with 16 g O). Ammonia (NH₃) always maintains a 14:3 nitrogen-to-hydrogen mass ratio.',
        quickTake: 'Mass cannot be created or destroyed; chemical compounds always contain elements in identical mass proportions.',
        keyPoints: [
          'Conservation of Mass: Verified by reacting barium chloride with sodium sulphate in a sealed conical flask.',
          'Definite Proportions: 9 g of water decomposes into exactly 1 g of Hydrogen and 8 g of Oxygen.',
          'Laid the experimental foundation for John Dalton\'s Atomic Theory.'
        ],
        formulaOrEquation: 'Σ Mass(Reactants) = Σ Mass(Products) | Water H:O Mass Ratio = 1:8'
      },
      {
        topic: '2. Dalton\'s Atomic Theory',
        inBrief: 'Dalton proposed that all matter is composed of indivisible atoms that combine in simple whole-number ratios to form compounds.',
        definition: 'Dalton\'s Atomic Theory is the foundational chemical postulate stating that matter consists of indivisible, indestructible particles called atoms, with identical mass and chemical properties for a given element.',
        detailedExplanation: 'John Dalton synthesized earlier chemical laws into six major postulates: 1) All matter is made of tiny particles called atoms. 2) Atoms are indivisible and cannot be created or destroyed. 3) Atoms of a given element are identical in mass and chemical properties. 4) Atoms of different elements have different masses and properties. 5) Atoms combine in simple whole-number ratios to form compounds. 6) The relative number and kinds of atoms are constant in a given compound.',
        quickTake: 'Atoms are indivisible units of matter that combine in whole-number ratios; explains mass conservation and constant proportions.',
        keyPoints: [
          'Postulate explaining Conservation of Mass: Atoms are indivisible particles that cannot be created or destroyed.',
          'Postulate explaining Definite Proportions: The relative number and kinds of atoms are constant in a given compound.',
          'Modern limitation: Atoms are divisible into subatomic particles (protons, neutrons, electrons) and isotopes exist.'
        ],
        formulaOrEquation: 'Compound Formula: A_x B_y (where x, y are small positive integers)'
      },
      {
        topic: '3. Atomic Mass & Unified Mass Unit (u)',
        inBrief: 'Atomic mass measures the mass of an atom relative to 1/12th the mass of a Carbon-12 isotope atom.',
        definition: 'The atomic mass unit (unified mass, u) is defined as exactly one-twelfth (1/12) of the mass of an unbound neutral Carbon-12 (¹²C) atom in its nuclear ground state.',
        detailedExplanation: 'Because individual atoms have masses on the order of 10⁻²⁷ kg, measuring them in kilograms is impractical. Chemists adopted Carbon-12 as the international reference standard in 1961. One atomic mass unit (1 u) equals 1.6605 × 10⁻²⁷ kg. Thus, Hydrogen has an atomic mass of 1 u, Carbon is 12 u, Nitrogen is 14 u, Oxygen is 16 u, Sodium is 23 u, Chlorine is 35.5 u, and Calcium is 40 u.',
        quickTake: 'Relative mass scale where 1 u = 1/12th mass of one ¹²C atom (1.66 × 10⁻²⁷ kg).',
        keyPoints: [
          'Reference standard: Carbon-12 isotope (¹²C) assigned a mass of exactly 12.000 u.',
          'Unified atomic mass symbol: \'u\' (replaced older amu).',
          'Chlorine\'s fractional mass of 35.5 u is due to its natural isotopic mixture (75% ³⁵Cl and 25% ³⁷Cl).'
        ],
        formulaOrEquation: '1 u = (Mass of 1 Atom of ¹²C) / 12 = 1.660539 × 10⁻²⁷ kg'
      },
      {
        topic: '4. Molecules, Ions & Valency',
        inBrief: 'Molecules are neutral groups of bonded atoms; ions are electrically charged atoms; valency is the combining capacity of an element.',
        definition: 'A molecule is the smallest electrically neutral particle of a substance capable of independent existence; an ion is an atom or group of atoms bearing a net positive or negative electric charge.',
        detailedExplanation: 'Molecules can be homoatomic (elements: O₂, N₂, O₃, P₄, S₈) or heteroatomic (compounds: H₂O, CO₂, CH₄). Atomicity refers to the number of atoms constituting a molecule (e.g., Helium is monoatomic, Oxygen is diatomic, Ozone is triatomic, Sulphur is polyatomic). Ions form when atoms lose electrons (Cations: Na⁺, Mg²⁺, Al³⁺) or gain electrons (Anions: Cl⁻, O²⁻, N³⁻). Polyatomic ions are clusters of covalently bound atoms bearing a net charge (e.g., NH₄⁺, SO₄²⁻, CO₃²⁻, NO₃⁻).',
        quickTake: 'Molecules: neutral bonded groups; Cations (+ charge, lost electrons); Anions (- charge, gained electrons).',
        keyPoints: [
          'Atomicity: Monoatomic (He, Ne, Ar), Diatomic (H₂, N₂, O₂), Triatomic (O₃), Polyatomic (P₄, S₈).',
          'Polyatomic ions: Nitrate (NO₃⁻), Carbonate (CO₃²⁻), Sulphate (SO₄²⁻), Ammonium (NH₄⁺).',
          'Valency: Determined by the number of valence electrons an atom must lose, gain, or share to attain an octet.'
        ],
        formulaOrEquation: 'Cation: M → M^(n+) + n e⁻ | Anion: X + m e⁻ → X^(m-)'
      },
      {
        topic: '5. Writing Chemical Formulae (Criss-Cross Rule)',
        inBrief: 'Chemical formulae are derived by cross-multiplying the valencies of constituent positive and negative ions.',
        definition: 'The criss-cross method is an algorithmic stoichiometric rule where the numerical valency of each radical is transposed as the subscript of the opposite radical to produce an electrically neutral chemical formula.',
        detailedExplanation: 'Step 1: Write symbols of elements/ions side-by-side with cation first (e.g., Al and O). Step 2: Write their valencies below them (Al = 3, O = 2). Step 3: Criss-cross valencies: the valency of the cation becomes the subscript of the anion and vice versa. Step 4: Write formula: Al₂O₃. For polyatomic ions, enclose the radical in brackets if the subscript exceeds 1, e.g., Calcium hydroxide: Ca²⁺ and OH⁻ → Ca(OH)₂; Magnesium nitrate: Mg²⁺ and NO₃⁻ → Mg(NO₃)₂.',
        quickTake: 'Swap valencies between positive and negative ions to ensure total charge sums to zero.',
        keyPoints: [
          'Rule 1: Valencies or charges on the ions must balance out to zero.',
          'Rule 2: Name of metal is written first followed by non-metal (e.g., Calcium Oxide CaO, Sodium Chloride NaCl).',
          'Rule 3: Enclose polyatomic ions in parentheses when subscript is 2 or more: Al₂(SO₄)₃.'
        ],
        formulaOrEquation: 'A^(y+) + B^(x-) ⟹ A_x B_y (Total Charge: (+y)·x + (-x)·y = 0)'
      },
      {
        topic: '6. Molecular Mass & Formula Unit Mass',
        inBrief: 'Molecular mass is the sum of atomic masses of all atoms present in a molecule; formula unit mass applies to ionic compounds.',
        definition: 'Molecular mass is the algebraic summation of the individual atomic masses of all constituent atoms contained within a discrete single molecule of a substance.',
        detailedExplanation: 'To calculate molecular mass of Water (H₂O): 2 × (Atomic mass of H) + 1 × (Atomic mass of O) = (2 × 1 u) + (1 × 16 u) = 18 u. For Nitric Acid (HNO₃): 1 + 14 + (3 × 16) = 63 u. For ionic compounds forming three-dimensional crystal lattices rather than discrete molecules (such as NaCl, CaCl₂), the term "Formula Unit Mass" is formally preferred: for NaCl = 23 u + 35.5 u = 58.5 u.',
        quickTake: 'Add up the atomic masses of every atom in the formula; identical calculation for covalent molecules and ionic lattices.',
        keyPoints: [
          'H₂O: (2 × 1) + 16 = 18 u.',
          'CO₂: 12 + (2 × 16) = 44 u.',
          'NaCl: 23 + 35.5 = 58.5 u (Formula unit mass).'
        ],
        formulaOrEquation: 'M = Σ (n_i · A_i) (where n_i is atom count, A_i is atomic mass)'
      }
    ],
    keywords: [
      {
        keyword: 'Law of Conservation of Mass',
        definition: 'A fundamental law stating that mass can neither be created nor destroyed in a chemical reaction.',
        sentenceExplanation: 'This law guarantees that if you weigh all your chemicals before a reaction in a sealed flask, they will weigh the exact same amount afterward.',
        examContext: 'Must state: total mass of reactants equals total mass of products.'
      },
      {
        keyword: 'Law of Definite Proportions',
        definition: 'A law stating that in a chemical substance, the elements are always present in definite proportions by mass.',
        sentenceExplanation: 'This law explains why water sampled from Rushikonda Beach or glacier ice always contains hydrogen and oxygen in an exact 1:8 mass ratio.',
        examContext: 'Proust\'s law; ratio of elemental masses is strictly fixed regardless of source.'
      },
      {
        keyword: 'Atomicity',
        definition: 'The total number of constituent atoms present within a single molecule of an element or compound.',
        sentenceExplanation: 'Atomicity counts how many atomic building blocks are locked together in one molecule, such as 2 for Oxygen gas (O₂) and 8 for Sulphur (S₈).',
        examContext: 'Classify as monoatomic (Ar), diatomic (O₂), triatomic (O₃), or polyatomic (P₄, S₈).'
      },
      {
        keyword: 'Polyatomic Ion',
        definition: 'A group of covalently bonded atoms that carries an overall positive or negative electrical charge.',
        sentenceExplanation: 'A polyatomic ion is a team of atoms that travel together and act like a single charged particle, like the sulphate ion (SO₄²⁻).',
        examContext: 'Examples: NH₄⁺, CO₃²⁻, SO₄²⁻, OH⁻; must use brackets when subscript > 1.'
      },
      {
        keyword: 'Valency',
        definition: 'The combining capacity of an atom of an element to form chemical bonds with other atoms.',
        sentenceExplanation: 'Valency is like the number of hands an atom has available to hold onto other atoms when building chemical molecules.',
        examContext: 'Equal to valence electrons (for 1-4) or 8 minus valence electrons (for 5-8).'
      }
    ]
  },

  // ==========================================
  // 3. THE FUNDAMENTAL UNIT OF LIFE (CELL)
  // ==========================================
  {
    titleMatcher: 'fundamental unit of life',
    topics: [
      {
        topic: '1. Discovery of the Cell & Cell Theory',
        inBrief: 'Cells were first observed by Robert Hooke in 1665; Cell Theory states that all living organisms are composed of cells arising from pre-existing cells.',
        definition: 'The cell is formally defined as the fundamental structural, functional, and biological unit of all living organisms, capable of independent metabolism and reproduction.',
        detailedExplanation: 'Robert Hooke observed dead box-like compartments in thin cork slices using a primitive microscope in 1665 and termed them "cells". Anton van Leeuwenhoek (1674) first observed free-living cells (bacteria, protozoa) in pond water with an improved lens. In 1838-1839, Matthias Schleiden and Theodor Schwann formulated Cell Theory: 1) All organisms consist of one or more cells. 2) The cell is the basic structural and functional unit of life. In 1855, Rudolf Virchow expanded the theory with the dictum "Omnis cellula-e cellula" (all cells arise from pre-existing cells).',
        quickTake: 'Hooke (1665) discovered cells; Schleiden & Schwann created Cell Theory; Virchow proved all cells arise from pre-existing cells.',
        keyPoints: [
          'Robert Hooke: Coined the term "cell" from cork (dead plant tissue).',
          'Leeuwenhoek: Discovered living cells in pond water.',
          'Virchow: Added the principle that cells divide from pre-existing parent cells.'
        ],
        formulaOrEquation: 'Cell Theory: Cell = Basic Unit of Structure + Function + Heredity'
      },
      {
        topic: '2. Plasma Membrane, Diffusion & Osmosis',
        inBrief: 'The selectively permeable phospholipid bilayer that regulates the transport of substances into and out of the cell via diffusion and osmosis.',
        definition: 'The plasma membrane is a flexible, selectively permeable biological membrane composed of a phospholipid bilayer embedded with proteins that maintains cellular homeostasis.',
        detailedExplanation: 'The plasma membrane regulates entry and exit of molecules. Small non-polar molecules (CO₂, O₂) move passively across via Diffusion (from higher concentration to lower concentration). Water moves across via Osmosis (movement of water from high water potential to low water potential through a selectively permeable membrane). In a Hypotonic solution (dilute), water enters and the cell swells (endosmosis). In a Hypertonic solution (concentrated), water exits and cell shrinks (exosmosis/plasmolysis). In an Isotonic solution, no net water movement occurs.',
        quickTake: 'Selectively permeable membrane; Osmosis moves water into hypotonic (swelling) or hypertonic (shrinking) environments.',
        keyPoints: [
          'Hypotonic: Solution has higher water concentration → cell swells / plant cell becomes turgid.',
          'Hypertonic: Solution has lower water concentration → cell shrinks / plasmolysis in plant cells.',
          'Isotonic: Equal osmotic pressure → cell maintains equilibrium size.'
        ],
        formulaOrEquation: 'Rate of Diffusion: J = -D · (dc/dx) (Fick\'s First Law)'
      },
      {
        topic: '3. Cell Wall & Plasmolysis',
        inBrief: 'A rigid outer cellulose layer found exclusively in plant cells, fungi, and bacteria that provides structural support and prevents osmotic bursting.',
        definition: 'The cell wall is a non-living, rigid, permeable extracellular structural envelope composed predominantly of cellulose in plants, providing tensile strength and mechanical protection.',
        detailedExplanation: 'Unlike animal cells, plant cells possess a tough cell wall outside the plasma membrane. It permits plant cells to withstand substantial internal turgor pressure without bursting when placed in hypotonic media. When a living plant cell loses water in a hypertonic solution (exosmosis), the living cytoplasm and plasma membrane contract and pull away from the rigid cell wall—a phenomenon known as Plasmolysis, easily observed in Rheo leaf peels mounted in strong salt solution.',
        quickTake: 'Cellulose outer layer; withstands high osmotic turgor pressure; shrinks away from cell wall during plasmolysis.',
        keyPoints: [
          'Composition: Plants (Cellulose), Fungi (Chitin), Bacteria (Peptidoglycan).',
          'Permeability: Fully permeable to water and dissolved solutes.',
          'Plasmolysis: Shrinkage of protoplast away from cell wall in hypertonic medium.'
        ],
        formulaOrEquation: 'Turgor Pressure (TP) = Wall Pressure (WP) (Equilibrium in dilute solutions)'
      },
      {
        topic: '4. Nucleus & Prokaryotic vs Eukaryotic Cells',
        inBrief: 'The nucleus is the control center containing genetic DNA; prokaryotes lack a membrane-bound nucleus whereas eukaryotes possess an organized nucleus.',
        definition: 'The nucleus is a double-membrane-bound eukaryotic organelle containing chromatin (DNA and histone proteins) that directs cellular metabolism, enzyme synthesis, and hereditary transmission.',
        detailedExplanation: 'The nucleus is bounded by a double-layered nuclear envelope perforated with nuclear pores. It houses chromatin, which condenses into rod-shaped Chromosomes during cell division. Chromosomes carry Genes made of DNA (Deoxyribonucleic Acid). Prokaryotes (e.g., bacteria, blue-green algae) lack a nuclear membrane; their undefined genetic region is called a Nucleoid. Eukaryotes (plants, animals, fungi) possess a true membrane-bound nucleus and specialized membrane-bound organelles.',
        quickTake: 'Nucleus contains DNA blueprints; Prokaryotes: nucleoid with no nuclear membrane; Eukaryotes: true membrane-enclosed nucleus.',
        keyPoints: [
          'Prokaryotes: Size 1-10 μm, no nuclear membrane (nucleoid), single circular chromosome, lack membrane-bound organelles.',
          'Eukaryotes: Size 5-100 μm, nuclear membrane present, multiple linear chromosomes, possess mitochondria/ER/Golgi.',
          'Nucleolus: Dark spherical body inside nucleus responsible for ribosome assembly.'
        ],
        formulaOrEquation: 'DNA + Histone Proteins ⟹ Chromatin Threads ⟹ Chromosomes'
      },
      {
        topic: '5. Endoplasmic Reticulum & Golgi Apparatus',
        inBrief: 'The ER synthesizes proteins and lipids; the Golgi apparatus packages, modifies, and dispatches them across the cell.',
        definition: 'The Endoplasmic Reticulum is an extensive intracellular membranous network of tubules and cisternae, and the Golgi Apparatus consists of membrane-bound parallel stacks of flattened cisternae that process and package macromolecules.',
        detailedExplanation: 'Rough Endoplasmic Reticulum (RER) is studded with Ribosomes and synthesizes structural and secretory proteins. Smooth Endoplasmic Reticulum (SER) lacks ribosomes, synthesizes lipids and steroid hormones, and detoxifies poisons and drugs in vertebrate liver cells. Membrane Biogenesis is the process where proteins and lipids produced by RER and SER build the cell membrane. Camillo Golgi discovered the Golgi Apparatus, which receives vesicles from ER, chemically modifies proteins, packs them, and dispatches them to intracellular targets or for secretion.',
        quickTake: 'RER (ribosomes, protein synthesis); SER (lipid synthesis, detoxification); Golgi (packaging and secretional dispatch center).',
        keyPoints: [
          'Membrane Biogenesis: RER proteins + SER lipids combine to assemble cell membranes.',
          'Detoxification: Liver SER detoxifies harmful drugs and metabolic byproducts.',
          'Golgi function: Storage, modification, packaging of products into vesicles; also forms Lysosomes.'
        ],
        formulaOrEquation: 'ER (Synthesis) ⟹ Transport Vesicle ⟹ Golgi (Modification/Packaging) ⟹ Secretion'
      },
      {
        topic: '6. Mitochondria & Plastids',
        inBrief: 'Mitochondria are the powerhouses generating ATP; Plastids are plant organelles that perform photosynthesis and food storage.',
        definition: 'Mitochondria are double-membraned semi-autonomous organelles that generate ATP via cellular respiration; Plastids are double-membraned plant organelles containing photosynthetic pigments (Chloroplasts) or storage reserves (Leucoplasts).',
        detailedExplanation: 'Mitochondria have a smooth outer membrane and a deeply folded inner membrane. The folds (cristae) dramatically expand the surface area for ATP-generating chemical reactions. Known as the "Powerhouse of the Cell", mitochondria produce ATP (Adenosine Triphosphate), the cellular energy currency. Plastids exist only in plant cells: 1) Chloroplasts contain chlorophyll for photosynthesis, 2) Chromoplasts impart bright colors to flowers and fruits, 3) Leucoplasts store starch, oils, and protein granules. Notably, both Mitochondria and Plastids possess their own circular DNA and 70S ribosomes, enabling them to synthesize some of their own proteins.',
        quickTake: 'Mitochondria: ATP powerhouses with cristae folds; Plastids: Chloroplasts for photosynthesis; both have their own DNA & ribosomes.',
        keyPoints: [
          'ATP: Adenosine Triphosphate, the universal chemical energy currency of living systems.',
          'Cristae: Inward membrane folds maximizing surface area for ATP synthase complexes.',
          'Semi-autonomous: Both mitochondria and plastids possess self-replicating circular DNA and ribosomes.'
        ],
        formulaOrEquation: 'Cellular Respiration: C₆H₁₂O₆ + 6O₂ ⟹ 6CO₂ + 6H₂O + 38 ATP'
      },
      {
        topic: '7. Lysosomes & Vacuoles',
        inBrief: 'Lysosomes are digestive waste-disposal bags containing hydrolytic enzymes; Vacuoles are fluid-filled storage reservoirs maintaining plant turgidity.',
        definition: 'Lysosomes are single-membrane eukaryotic digestive organelles containing acid hydrolases ("suicide bags"); Vacuoles are membrane-bound organelles bounded by the tonoplast that store water, nutrients, and waste.',
        detailedExplanation: 'Lysosomes contain powerful digestive hydrolytic enzymes manufactured in the RER. They digest foreign microbes, worn-out organelles, and food particles. If a cell undergoes irreversible metabolic damage, lysosomes rupture, releasing enzymes that digest their own host cell—hence their moniker "Suicide Bags of the Cell". Vacuoles are storage sacs: animal cells possess small, transient vacuoles, while mature plant cells contain a single massive central sap vacuole occupying 50% to 90% of cellular volume, lined by the tonoplast membrane to provide mechanical rigidity and turgidity.',
        quickTake: 'Lysosomes: suicide bags with digestive enzymes; Plant central vacuole: tonoplast-bounded reservoir providing turgidity.',
        keyPoints: [
          'Suicide Bags: Lysosomal enzymes digest the cell upon cellular disruption or necrosis.',
          'Tonoplast: The selectively permeable single membrane enclosing the central plant vacuole.',
          'Amoeba Food Vacuole: Specialized vacuole holding ingested food particles for intracellular digestion.'
        ],
        formulaOrEquation: 'Turgidity: Internal Vacuolar Osmotic Pressure ⟹ Cell Firmness'
      }
    ],
    keywords: [
      {
        keyword: 'Cell Theory',
        definition: 'The biological doctrine stating that all living organisms are composed of cells, the cell is the basic unit of life, and all cells arise from pre-existing cells.',
        sentenceExplanation: 'Cell theory proves that whether you look at a gigantic banyan tree or a human being, life is built entirely from microscopic living cellular bricks.',
        examContext: 'Credit Schleiden, Schwann, and Virchow ("Omnis cellula-e cellula").'
      },
      {
        keyword: 'Osmosis',
        definition: 'The net movement of water molecules from a region of higher water concentration to lower water concentration across a selectively permeable membrane.',
        sentenceExplanation: 'Osmosis is the process that causes raisins dropped in water to soak up liquid and puff up into plump, smooth spheres overnight.',
        examContext: 'Must mention selectively permeable membrane and concentration gradient of water.'
      },
      {
        keyword: 'Plasmolysis',
        definition: 'The shrinkage and withdrawal of the plant cell protoplast from its outer cell wall when subjected to a hypertonic environment.',
        sentenceExplanation: 'Plasmolysis is the biological reason why vegetables shrink and shrivel when heavily salted during pickling in Indian homes.',
        examContext: 'Occurs only in living plant cells in hypertonic solution; water moves out via exosmosis.'
      },
      {
        keyword: 'Membrane Biogenesis',
        definition: 'The biological process by which proteins synthesized in the RER and lipids synthesized in the SER assemble to construct the cell membrane.',
        sentenceExplanation: 'Membrane biogenesis is the cell\'s internal manufacturing assembly line where fats and proteins are continuously crafted into new cellular skins.',
        examContext: 'Requires collaboration: RER (proteins) + SER (lipids).'
      },
      {
        keyword: 'ATP (Adenosine Triphosphate)',
        definition: 'The high-energy nucleotide molecule that functions as the universal chemical energy currency driving metabolic cellular work.',
        sentenceExplanation: 'ATP is like the rechargeable battery inside every living cell that powers muscle contractions, nerve signals, and biological growth.',
        examContext: 'Formed on mitochondrial cristae; known as the energy currency of the cell.'
      }
    ]
  },

  // ==========================================
  // 4. TISSUES
  // ==========================================
  {
    titleMatcher: 'tissues',
    topics: [
      {
        topic: '1. Plant Meristematic Tissues',
        inBrief: 'Meristematic tissues are clusters of actively dividing, undifferentiated plant cells responsible for growth in length and girth.',
        definition: 'Meristematic tissue is a localized embryonic plant tissue consisting of thin-walled, densely protoplasmic cells with prominent nuclei and no vacuoles, engaged in continuous mitotic division.',
        detailedExplanation: 'Meristematic tissues occur at specific growth zones in plants: 1) Apical Meristem: Present at root and shoot growing tips; responsible for primary longitudinal growth (increase in plant height). 2) Lateral Meristem (Cambium): Located laterally along the sides of roots and stems; increases girth and diameter (secondary growth). 3) Intercalary Meristem: Located at nodes and base of leaves (e.g., in grasses and bamboo); facilitates rapid stem elongation between nodes.',
        quickTake: 'Actively dividing cells: Apical (height), Lateral (girth/cambium), Intercalary (nodal elongation).',
        keyPoints: [
          'Characteristics: Dense cytoplasm, thin cellulose walls, prominent nuclei, lack vacuoles.',
          'Apical: Increases primary length of stems and roots.',
          'Lateral: Increases secondary girth/width of woody stems (vascular cambium).'
        ],
        formulaOrEquation: 'Growth: Mitotic Cleavage Rate ∝ Auxin/Cytokinin Phytohormone Gradient'
      },
      {
        topic: '2. Simple Permanent Plant Tissues',
        inBrief: 'Permanent plant tissues composed of a single cell type: Parenchyma (storage), Collenchyma (flexibility), and Sclerenchyma (rigidity).',
        definition: 'Simple permanent tissues are differentiated, non-dividing plant tissues composed of structurally and functionally identical cells that provide support, storage, and photosynthesis.',
        detailedExplanation: '1) Parenchyma: Unspecialized living cells with thin cellulose walls and large intercellular spaces. Functions in food storage, photosynthesis (Chlorenchyma in leaves), and floating buoyancy in aquatic plants (Aerenchyma). 2) Collenchyma: Living elongated cells with uneven pectin-cellulose wall thickenings at corners, minimal intercellular spaces; provides mechanical flexibility, allowing leaves and stems to bend without snapping in windy Vizag weather. 3) Sclerenchyma: Dead cells with thick, heavily lignified walls and zero intercellular spaces; provides immense mechanical strength and hardness (e.g., coconut husk fibers, seed coats).',
        quickTake: 'Parenchyma (living storage); Collenchyma (living flexible bending); Sclerenchyma (dead, rigid, lignified walls).',
        keyPoints: [
          'Chlorenchyma: Parenchyma with chlorophyll for photosynthesis in mesophyll.',
          'Aerenchyma: Parenchyma with large air cavities in aquatic plants for buoyancy.',
          'Lignin: Complex chemical cement that renders sclerenchyma cell walls impervious and rock-hard.'
        ],
        formulaOrEquation: 'Sclerenchyma: Cellulose + Lignin Deposition ⟹ Maximum Tensile Strength'
      },
      {
        topic: '3. Complex Permanent Plant Tissues (Xylem & Phloem)',
        inBrief: 'Vascular conducting tissues made of multiple cell types that transport water, minerals, and synthesized organic food throughout the plant.',
        definition: 'Complex permanent tissues are conducting vascular bundles consisting of multiple disparate cell types working cooperatively to transport water, minerals, and photosynthetic sugars.',
        detailedExplanation: '1) Xylem: Conducts water and dissolved minerals unidirectionally from roots to leaves. Composed of Tracheids (tubular dead cells with pits), Vessels (continuous hollow conduits, dead), Xylem Parenchyma (the ONLY living xylem component, stores food), and Xylem Fibres (dead, structural support). 2) Phloem: Conducts synthesized sucrose bidirectionally from source (leaves) to sink (roots, storage organs) via Translocation. Composed of Sieve Tubes (perforated living cells lacking nuclei), Companion Cells (nucleated cells regulating sieve tubes), Phloem Parenchyma (stores food), and Phloem Fibres (the ONLY dead phloem component, e.g., jute fibers).',
        quickTake: 'Xylem (unidirectional water transport, vessels/tracheids); Phloem (bidirectional food translocation, sieve tubes & companion cells).',
        keyPoints: [
          'Xylem: Tracheids, vessels, xylem parenchyma (only living), xylem fibres. Unidirectional upward flow.',
          'Phloem: Sieve tubes, companion cells, phloem parenchyma, phloem fibres (only dead). Bidirectional flow.',
          'Translocation: Active transport in phloem requiring ATP energy.'
        ],
        formulaOrEquation: 'Translocation: Sucrose Loading ⟹ Active Osmotic Flow via Sieve Plates'
      },
      {
        topic: '4. Animal Epithelial & Muscular Tissues',
        inBrief: 'Epithelial tissues form protective outer and inner boundaries; Muscular tissues contain contractile proteins that produce bodily movement.',
        definition: 'Epithelium is a protective, tightly packed avascular animal tissue lining body surfaces and cavities; Muscular tissue is an excitable, contractile tissue composed of muscle fibers containing actin and myosin.',
        detailedExplanation: 'Epithelial types: 1) Squamous (flat cells, diffusion boundary in lung alveoli and blood capillaries; stratified squamous in skin). 2) Cuboidal (cube cells in kidney tubules, salivary ducts). 3) Columnar (pillar-like cells in stomach/intestine; ciliated columnar in respiratory tract). Muscular types: 1) Striated / Skeletal (voluntary, multinucleated, striped bands, attached to bones). 2) Smooth / Unstriated (involuntary, spindle-shaped, uninucleated, in stomach and iris). 3) Cardiac (involuntary, branched, striated, intercalated discs, pumps heart rhythmically without fatigue).',
        quickTake: 'Epithelium: protective boundary sheet; Muscle: Striated (voluntary bones), Smooth (involuntary organs), Cardiac (rhythmic heart).',
        keyPoints: [
          'Ciliated Columnar: Hair-like cilia sweep mucus in human respiratory tract.',
          'Cardiac muscle: Intercalated discs coordinate rhythmic contraction without fatigue throughout life.',
          'Skeletal muscle: Multinucleated and tires easily when fatigued.'
        ],
        formulaOrEquation: 'Muscle Contraction: Actin + Myosin Filaments + ATP ⟹ Sarcomere Shortening'
      },
      {
        topic: '5. Animal Connective & Nervous Tissues',
        inBrief: 'Connective tissues bind, cushion, and support organs (blood, bone, cartilage); Nervous tissue conducts rapid electrical impulses via neurons.',
        definition: 'Connective tissue consists of specialized cells embedded within an abundant extracellular matrix that mechanically binds, cushions, and supports body structures; Nervous tissue consists of specialized excitable neurons that process and transmit electrochemical nerve impulses.',
        detailedExplanation: 'Connective tissues: 1) Blood: Fluid matrix (plasma) carrying RBCs (hemoglobin), WBCs (immunity), and Platelets (clotting). 2) Bone: Hard matrix of calcium and phosphate salts, osteocytes. 3) Cartilage: Flexible matrix of proteins and sugars, found at nose tip, ear pinna, and joint surfaces. 4) Ligament: Elastic tissue connecting bone to bone. 5) Tendon: Tough fibrous tissue connecting muscle to bone. Nervous tissue: The functional unit is the Neuron, comprising a Cell Body (cyton) with nucleus, branching Dendrites (receive signals), and a long Axon (transmits electrical impulse to axon terminals).',
        quickTake: 'Blood (fluid matrix); Bone (Ca/P matrix); Ligament (bone-to-bone); Tendon (muscle-to-bone); Neuron (dendrite, cyton, axon).',
        keyPoints: [
          'Ligament: Connects bone to bone (elastic, high flexibility).',
          'Tendon: Connects skeletal muscle to bone (fibrous, high tensile strength, limited flexibility).',
          'Neuron: Longest animal cell; electrical impulse moves: Dendrite → Cyton → Axon → Synapse.'
        ],
        formulaOrEquation: 'Nerve Impulse: Dendrite ⟹ Cyton ⟹ Axon ⟹ Synaptic Neurotransmitter'
      }
    ],
    keywords: [
      {
        keyword: 'Meristematic Tissue',
        definition: 'Plant tissue composed of actively dividing undifferentiated cells located at growing vegetative zones.',
        sentenceExplanation: 'Meristematic tissue is the engine of plant growth where cells continuously multiply to make the plant taller and wider.',
        examContext: 'Classify as Apical (length), Lateral (girth), or Intercalary (nodes).'
      },
      {
        keyword: 'Xylem',
        definition: 'The complex vascular conducting tissue in vascular plants responsible for the unidirectional transport of water and dissolved minerals from roots to shoots.',
        sentenceExplanation: 'Xylem acts like a bundle of natural underground water pipes sucking moisture up from soil straight to thirsty tree canopy leaves.',
        examContext: 'List 4 elements; note that only xylem parenchyma is living.'
      },
      {
        keyword: 'Phloem',
        definition: 'The vascular tissue in plants responsible for the bidirectional translocation of synthesized sugars and amino acids from photosynthetic sources to storage sinks.',
        sentenceExplanation: 'Phloem is the sugar delivery highway of a plant that carries food cooked in the leaves down to the roots and out to ripening fruit.',
        examContext: 'List 4 elements; note that only phloem fibres are dead.'
      },
      {
        keyword: 'Ligament',
        definition: 'A dense, highly elastic fibrous connective tissue that binds bones together at articulating skeletal joints.',
        sentenceExplanation: 'A ligament is like a tough rubber band holding your knee or elbow bones securely together while still letting you bend your limbs.',
        examContext: 'Connects bone to bone; highly elastic with considerable strength.'
      },
      {
        keyword: 'Neuron',
        definition: 'The structural and functional unit of the nervous system specialized for receiving, conducting, and transmitting electrochemical impulses.',
        sentenceExplanation: 'A neuron is a microscopic biological wire with branching antenna fingers that zaps sensory messages to your brain at lightning speed.',
        examContext: 'Label Cyton, Dendrites, Axon, and Nerve Ending in 3-mark diagram.'
      }
    ]
  },

  // ==========================================
  // 5. WORK AND ENERGY
  // ==========================================
  {
    titleMatcher: 'work and energy',
    topics: [
      {
        topic: '1. Scientific Definition of Work',
        inBrief: 'In physics, work is done only when a force acts on a body and produces a displacement in the direction of the force.',
        definition: 'Work is formally defined as the scalar product of the applied force vector and the displacement vector of the point of application: W = F · s · cos(θ).',
        detailedExplanation: 'In daily language, reading, standing still holding a heavy suitcase, or thinking is called work. However, in physics, two conditions MUST be met for work to be done: 1) A force must act on the object. 2) The object must be displaced. If a person pushes against a rigid concrete wall with 500 N force but the wall does not move (s = 0), scientific work done is ZERO. Work is a scalar quantity with SI unit Joule (J), where 1 Joule = 1 Newton × 1 meter.',
        quickTake: 'Work requires both force and displacement: W = F · s · cos(θ). No displacement means zero work.',
        keyPoints: [
          '1 Joule: The work done when a force of 1 N moves an object through a distance of 1 m in its direction.',
          'Positive Work: Force and displacement in same direction (θ = 0°, cos 0° = +1).',
          'Negative Work: Force opposes displacement (θ = 180°, cos 180° = -1, e.g., friction on sliding box).',
          'Zero Work: Force is perpendicular to displacement (θ = 90°, cos 90° = 0, e.g., coolie carrying luggage on level platform).'
        ],
        formulaOrEquation: 'W = F · s · cos(θ) | 1 J = 1 N · m = 1 kg·m²/s²'
      },
      {
        topic: '2. Kinetic Energy & Its Derivation',
        inBrief: 'Kinetic energy is the energy possessed by an object due to its motion, proportional to mass and velocity squared.',
        definition: 'Kinetic energy is the mechanical work a moving body can perform against an opposing force before being brought to a complete state of rest: E_k = ½ m·v².',
        detailedExplanation: 'Derivation from third equation of motion: v² - u² = 2as ⟹ s = (v² - u²)/(2a). Substituting into work equation W = F · s, where F = m·a: W = m·a · [(v² - u²)/(2a)] = ½ m(v² - u²). If the body starts from rest (u = 0): W = ½ m·v². This work done is stored as kinetic energy. Notice that kinetic energy depends on the square of velocity: doubling an automobile\'s speed quadruples its kinetic energy and braking distance.',
        quickTake: 'Energy of motion: E_k = ½ m·v². Doubling velocity multiplies kinetic energy by 4.',
        keyPoints: [
          'Work-Energy Theorem: Net work done on an object equals change in its kinetic energy: W_net = ΔE_k.',
          'Scalar quantity: Always non-negative for real masses (E_k ≥ 0).',
          'High-speed danger: Fast cars possess enormous kinetic energy requiring proportional braking work.'
        ],
        formulaOrEquation: 'E_k = ½ m·v² | Work-Energy Theorem: W = ½ m·v² - ½ m·u²'
      },
      {
        topic: '3. Gravitational Potential Energy',
        inBrief: 'Potential energy is the stored energy an object possesses by virtue of its position, configuration, or height above the ground.',
        definition: 'Gravitational potential energy is the work performed against the gravitational field in elevating an object of mass m through vertical height h without acceleration: E_p = m·g·h.',
        detailedExplanation: 'To lift an object of mass m vertically through height h at constant velocity, the minimum upward force applied must balance its downward weight: F = m·g. The displacement is upward: s = h. Therefore, Work done W = F · s = (m·g) · h = mgh. This work is stored as gravitational potential energy. Gravitational potential energy depends strictly on the vertical elevation difference between initial and final positions, entirely independent of the geometric path taken (conservative force field).',
        quickTake: 'Stored energy due to elevated position: E_p = m·g·h. Depends only on vertical height, not the path taken.',
        keyPoints: [
          'Path independence: Lifting an object straight up or rolling it up an incline to height h yields identical mgh potential energy.',
          'Elastic potential energy: Energy stored in a stretched rubber band or compressed spring (E_p = ½ k·x²).',
          'Reference datum: E_p is measured relative to an assigned reference level (usually ground = 0 J).'
        ],
        formulaOrEquation: 'E_p = m · g · h (where g = 9.8 m/s²)'
      },
      {
        topic: '4. Law of Conservation of Energy',
        inBrief: 'Energy can neither be created nor destroyed; it can only be transformed from one form into another, with total universe energy remaining constant.',
        definition: 'The Law of Conservation of Energy states that in an isolated physical system subject only to conservative forces, the total mechanical energy (E = E_k + E_p) remains strictly constant over time.',
        detailedExplanation: 'Consider a freely falling body of mass m released from height H. At the top (point A): v = 0, E_k = 0, E_p = mgH ⟹ Total E = mgH. At an intermediate height h (point B): it has fallen distance (H - h), v² = 2g(H - h), E_k = ½ m[2g(H - h)] = mg(H - h), and E_p = mgh ⟹ Total E = mg(H - h) + mgh = mgH. Just before striking ground (point C): h = 0, v² = 2gH, E_k = ½ m(2gH) = mgH, and E_p = 0 ⟹ Total E = mgH. At every single point, E_k + E_p = mgH = Constant.',
        quickTake: 'Mechanical energy is conserved: E_k + E_p = Constant. Potential energy converts seamlessly into kinetic energy.',
        keyPoints: [
          'Free fall: Potential energy drops as height decreases, converted exactly into kinetic energy.',
          'Simple pendulum: Kinetic energy is maximum at mean position; potential energy is maximum at extreme amplitudes.',
          'Real systems: Mechanical energy dissipates partially into thermal and acoustic energy due to friction/drag.'
        ],
        formulaOrEquation: 'E_total = E_k + E_p = ½ m·v² + m·g·h = Constant'
      },
      {
        topic: '5. Rate of Doing Work: Power & Commercial Unit (kWh)',
        inBrief: 'Power is the time rate at which work is performed; the commercial unit of electrical energy is the kilowatt-hour (kWh).',
        definition: 'Power is formally defined as the time rate of doing mechanical work or transferring electrical energy: P = W / t = dW/dt, with SI unit Watt (W).',
        detailedExplanation: 'One Watt is defined as the rate of working of 1 Joule per second (1 W = 1 J/s). Larger units include kilowatt (1 kW = 1000 W) and horsepower (1 hp = 746 W). Electricity distribution companies (like APEPDCL in Visakhapatnam) bill electrical energy consumption in "Units". 1 Commercial Unit equals 1 Kilowatt-hour (kWh). 1 kWh is the electrical energy consumed by a device of 1 kilowatt operating continuously for 1 hour: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules (3.6 MegaJoules).',
        quickTake: 'Power = Work / Time (Watts); 1 Commercial Electrical Unit = 1 kWh = 3.6 × 10⁶ J.',
        keyPoints: [
          'Average Power: P_avg = Total Work Done / Total Time Taken.',
          'Instantaneous Power: P = F · v (Force × Velocity).',
          'Commercial Energy Conversion: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J (High-frequency board derivation).'
        ],
        formulaOrEquation: 'P = W / t = F · v | 1 kWh = 3.6 × 10⁶ J = 3.6 MJ'
      }
    ],
    keywords: [
      {
        keyword: 'Work',
        definition: 'The product of the magnitude of applied force and the displacement of an object in the direction of that force.',
        sentenceExplanation: 'In physics, work is only done when your applied muscular push actually succeeds in rolling or sliding an object across the floor.',
        examContext: 'Must state: W = F · s; zero work when displacement is perpendicular to force (e.g. porter carrying load on head).'
      },
      {
        keyword: 'Joule',
        definition: 'The SI unit of work and energy, defined as the work done when a force of one Newton displaces an object through one meter in the force direction.',
        sentenceExplanation: 'One Joule is roughly the small amount of mechanical energy needed to lift a medium-sized mango one meter straight up into the air.',
        examContext: '1 J = 1 N · 1 m = 1 kg·m²/s².'
      },
      {
        keyword: 'Kinetic Energy',
        definition: 'The mechanical energy possessed by an object by virtue of its physical state of motion, quantified by E_k = ½ m·v².',
        sentenceExplanation: 'Kinetic energy is the crushing momentum inside a speeding cricket ball or moving Vizag city bus that demands heavy braking work to stop.',
        examContext: 'Derive from v² - u² = 2as; mention dependency on v².'
      },
      {
        keyword: 'Gravitational Potential Energy',
        definition: 'The energy stored in an object by virtue of its position relative to a gravitational field, given by E_p = m·g·h.',
        sentenceExplanation: 'Gravitational potential energy is the silent energy stored inside water resting high up in an elevated rooftop water tank waiting to rush down through pipes.',
        examContext: 'E_p = mgh; emphasize that it is path-independent in a uniform gravitational field.'
      },
      {
        keyword: 'Kilowatt-Hour (kWh)',
        definition: 'The commercial unit of electrical energy representing the energy consumed by an electrical appliance of 1000 Watts operating continuously for 1 hour.',
        sentenceExplanation: 'A kilowatt-hour is the single "unit" printed on your monthly household electricity bill that measures power running your fans and ACs.',
        examContext: 'Must prove derivation: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.'
      }
    ]
  },

  // ==========================================
  // 6. SOUND
  // ==========================================
  {
    titleMatcher: 'sound',
    topics: [
      {
        topic: '1. Production & Propagation of Sound',
        inBrief: 'Sound is mechanical energy produced by vibrating bodies that propagates as longitudinal waves through material media.',
        definition: 'Sound is a mechanical form of energy produced by rapid mechanical oscillations of matter, transmitted through material media as longitudinal compression waves.',
        detailedExplanation: 'When a tuning fork prong or vocal cord vibrates forward, it compresses adjacent air molecules, creating a region of high pressure and high density called a Compression (C). When the prong vibrates backward, air expands, producing a region of low pressure and low density called a Rarefaction (R). These alternating compressions and rarefactions propagate outward through the medium. Crucially, sound CANNOT travel through a vacuum: Robert Boyle\'s electric bell jar experiment proves that as air is evacuated, bell sound fades to complete silence.',
        quickTake: 'Vibrations produce sound; propagates as alternating compressions and rarefactions; cannot travel in a vacuum.',
        keyPoints: [
          'Medium requirement: Requires elastic material medium (Solids > Liquids > Gases in speed).',
          'Longitudinal wave: Particle oscillations are parallel to the direction of wave propagation.',
          'Vacuum test: Bell-jar experiment conclusively proves sound requires a material medium to propagate.'
        ],
        formulaOrEquation: 'Speed in Media: v_solid (steel ~5960 m/s) > v_liquid (water ~1480 m/s) > v_gas (air ~343 m/s)'
      },
      {
        topic: '2. Wave Characteristics & The Sound Equation',
        inBrief: 'Sound waves are characterized by wavelength (λ), frequency (ν), time period (T), amplitude (A), and speed (v = ν·λ).',
        definition: 'The wave equation relates wave speed (v) directly to frequency (ν) and wavelength (λ) through the kinematic relation v = ν · λ.',
        detailedExplanation: '1) Wavelength (λ): Distance between two consecutive compressions or two consecutive rarefactions (SI unit: meter, m). 2) Frequency (ν): Number of complete wave oscillations passing a fixed point per second (SI unit: Hertz, Hz). 3) Time Period (T): Time taken for one complete oscillation: T = 1/ν (SI unit: second). 4) Amplitude (A): Maximum displacement of particles from equilibrium position; determines Loudness (Loudness ∝ Amplitude²). 5) Pitch: Sensation of frequency; high frequency creates a shrill, high-pitched sound (whistle), while low frequency creates a grave, deep pitch (drum).',
        quickTake: 'Wave equation: v = ν · λ; Pitch depends on frequency; Loudness depends on amplitude squared.',
        keyPoints: [
          'Speed equation derivation: Speed = Distance/Time = λ / T = λ · (1/T) = ν · λ.',
          'Loudness vs Pitch: Loudness depends on amplitude squared (energy); Pitch depends on vibration frequency.',
          'Timbre / Quality: Characteristic allowing us to distinguish two musical notes having identical pitch and loudness.'
        ],
        formulaOrEquation: 'v = ν · λ | T = 1 / ν | Loudness ∝ (Amplitude)²'
      },
      {
        topic: '3. Reflection of Sound & Echo',
        inBrief: 'Sound reflects from hard surfaces obeying optical reflection laws; an echo is the distinct repetition of sound heard after reflection.',
        definition: 'An echo is the distinct perceptual repetition of an original acoustic pulse produced by sound wave reflection from an acoustic barrier situated at or beyond the minimum threshold distance of 17.2 meters.',
        detailedExplanation: 'Like light, sound reflects off rigid obstacles, obeying the laws of reflection: angle of incidence equals angle of reflection (∠i = ∠r), and incident ray, normal, and reflected ray lie in the same plane. The sensation of sound persists in the human brain for approximately 0.1 seconds (persistence of hearing). For an echo to be heard distinctly, the reflected sound must return after at least 0.1 s. Taking speed of sound in air as 344 m/s at 22°C: Total distance traveled 2d = v · t = 344 m/s × 0.1 s = 34.4 m ⟹ Minimum distance to obstacle d = 34.4 / 2 = 17.2 meters.',
        quickTake: 'Echo requires minimum 17.2 m obstacle distance in air so reflected sound arrives after 0.1 s persistence of hearing.',
        keyPoints: [
          'Persistence of hearing: Acoustic sensory impression lingers in brain for 0.1 s (1/10th second).',
          'Minimum echo distance: d_min = (v · t)/2 = (344 × 0.1)/2 = 17.2 meters at 22°C.',
          'Reverberation: Persistence of sound due to repeated multiple reflections in an enclosed hall; reduced by sound-absorbing panels.'
        ],
        formulaOrEquation: 'Echo Distance: 2d = v · t ⟹ d = (v · t) / 2 | d_min = 17.2 m (at 22°C)'
      },
      {
        topic: '4. Ultrasound & SONAR Applications',
        inBrief: 'Ultrasound consists of high-frequency sound waves above 20,000 Hz, widely used in medicine (ultrasonography) and navigation (SONAR).',
        definition: 'Ultrasound is high-frequency mechanical acoustic waves exceeding the upper limit of human audibility (f > 20 kHz), capable of penetrating deep tissue and metal structures along rectilinear paths.',
        detailedExplanation: 'Audible human hearing ranges from 20 Hz to 20,000 Hz. Infrasound is below 20 Hz (whales, elephants, earthquakes). Ultrasound is above 20 kHz (bats, dolphins, dogs). Applications: 1) Medical Imaging (Echocardiography to image heart valves; Ultrasonography to inspect internal organs and fetal growth). 2) Industrial Flaw Detection: Ultrasound penetrates heavy metallic turbine shafts; reflected signals reveal hidden internal cracks. 3) SONAR (SOund Navigation And Ranging): Ships transmit ultrasound pulses into ocean depths; measuring time delay t between transmission and echo reception reveals ocean depth or submarine position: d = (v · t)/2.',
        quickTake: 'Frequency > 20 kHz; used in SONAR depth sounding, industrial crack detection, and medical ultrasonography.',
        keyPoints: [
          'Human audible range: 20 Hz to 20 kHz (20,000 Hz).',
          'Industrial testing: Internal metal cracks reflect ultrasound prematurely, alerting engineers.',
          'SONAR equation: Depth d = (v_water · t) / 2 where v_water ≈ 1500 m/s.'
        ],
        formulaOrEquation: 'SONAR Depth: d = (v_water · t) / 2 | f_ultrasound > 20,000 Hz'
      },
      {
        topic: '5. Human Ear Structure & Hearing Mechanism',
        inBrief: 'The human ear converts airborne acoustic pressure waves into mechanical vibrations and electrical nerve impulses sent to the brain.',
        definition: 'The human ear is a specialized mechanoreceptive organ comprising outer, middle, and inner anatomical compartments that transduces sound pressure oscillations into auditory nerve action potentials.',
        detailedExplanation: '1) Outer Ear: The Pinna collects sound waves and channels them down the Ear Canal to strike the flexible Eardrum (Tympanic Membrane), setting it into vibration. 2) Middle Ear: Contains three tiny interlocking bones called ossicles: Malleus (Hammer), Incus (Anvil), and Stapes (Stirrup). The ossicles act as levers, amplifying pressure vibrations over 20-fold before delivering them to the oval window. 3) Inner Ear: The fluid-filled coiled snail-shaped Cochlea transduces fluid vibrations into electrical signals using thousands of specialized microscopic sensory hair cells. The Auditory Nerve conveys these electrical nerve impulses directly to the brain for auditory interpretation.',
        quickTake: 'Pinna collects sound ⟹ Tympanic eardrum vibrates ⟹ Hammer, Anvil, Stirrup amplify ⟹ Cochlea converts to electrical signals for brain.',
        keyPoints: [
          'Pinna: Collects and funnels sound waves into ear canal.',
          'Ossicles: Hammer, Anvil, Stirrup amplify pressure waves mechanically.',
          'Cochlea: Transduces mechanical fluid waves into electrical nerve impulses sent via auditory nerve.'
        ],
        formulaOrEquation: 'Acoustic Pressure ⟹ Mechanical Ossicle Lever ⟹ Cochlear Hair Cells ⟹ Auditory Nerve'
      }
    ],
    keywords: [
      {
        keyword: 'Longitudinal Wave',
        definition: 'A wave in which the particles of the medium oscillate back and forth parallel to the direction of wave propagation.',
        sentenceExplanation: 'A longitudinal wave is like a slinky spring that you push and pull forward, sending tight coils and stretched loops zipping down its length.',
        examContext: 'Contrast with transverse waves; sound in air is strictly longitudinal.'
      },
      {
        keyword: 'Frequency (ν)',
        definition: 'The number of complete wave cycles or oscillations executed by a vibrating body per second, measured in Hertz (Hz).',
        sentenceExplanation: 'Frequency is how many times per second a guitar string zips back and forth, determining whether the musical note sounds high or deep.',
        examContext: 'SI unit is Hertz (Hz); 1 Hz = 1 oscillation/sec; determines pitch.'
      },
      {
        keyword: 'Echo',
        definition: 'The repetition of sound caused by reflection of acoustic waves from a distant obstacle, perceived distinctly after 0.1 seconds.',
        sentenceExplanation: 'An echo is your own voice shouting back at you from a high mountain cliff or inside an empty, cavernous room in Kailasagiri.',
        examContext: 'Requires obstacle distance ≥ 17.2 m at 22°C based on 0.1 s persistence of hearing.'
      },
      {
        keyword: 'Reverberation',
        definition: 'The persistence of audible sound within an enclosed space resulting from repeated multiple reflections off walls, ceiling, and floor.',
        sentenceExplanation: 'Reverberation is the hollow, muddy echoey rumble you hear in an empty cinema auditorium before sound-absorbing carpets and curtains are installed.',
        examContext: 'Minimised in auditoriums by sound-absorbing compressed fibreboards, heavy drapery, and upholstered seats.'
      },
      {
        keyword: 'SONAR',
        definition: 'An acronym for Sound Navigation and Ranging, a marine technique utilizing transmitted and reflected ultrasonic pulses to detect underwater objects.',
        sentenceExplanation: 'SONAR is the underwater acoustic radar used by ships and submarines leaving Vizag port to map the seabed and avoid underwater reefs.',
        examContext: 'State acronym; write calculation formula 2d = v · t.'
      }
    ]
  }
];

