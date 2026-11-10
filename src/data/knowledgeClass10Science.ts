import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const CLASS_10_SCIENCE_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. CHEMICAL REACTIONS AND EQUATIONS
  // ==========================================
  {
    titleMatcher: 'chemical reactions',
    topics: [
      {
        topic: '1. Chemical Equations & Balancing',
        inBrief: 'A chemical equation represents a chemical reaction using chemical formulas, balanced to satisfy the Law of Conservation of Mass.',
        definition: 'A balanced chemical equation is a symbolic representation of a chemical reaction wherein the total number of atoms of each element on the reactant side equals that on the product side.',
        detailedExplanation: 'In a chemical reaction, existing chemical bonds break and new bonds form to produce distinct substances. Characteristics of reactions include change in state, change in color (e.g., iron nail in CuSO₄ turns solution green), evolution of gas (Zn + H₂SO₄ yields H₂ gas with pop sound), or change in temperature (CaO + H₂O releases intense exothermic heat). Balancing equations via the hit-and-trial method ensures mass conservation: 3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g). State symbols (s, l, g, aq) and catalytic conditions (temperature, pressure, sunlight) provide full stoichiometric precision.',
        quickTake: 'Balancing satisfies conservation of mass; indicators: color change, gas evolution, temp change, precipitate.',
        keyPoints: [
          'Law of Conservation of Mass: Mass of reactants = Mass of products; atoms are neither created nor destroyed.',
          'State symbols: (s) = solid, (l) = liquid, (g) = gas, (aq) = aqueous solution.',
          'Precipitate: An insoluble solid formed during a double-displacement chemical reaction.'
        ],
        formulaOrEquation: '3Fe(s) + 4H₂O(g) ⟶ Fe₃O₄(s) + 4H₂(g)'
      },
      {
        topic: '2. Combination & Decomposition Reactions',
        inBrief: 'Combination merges two or more reactants into a single product; decomposition splits a single reactant into multiple products.',
        definition: 'A combination reaction is a synthesis where two or more chemical species unite to form a single product; a decomposition reaction is an endothermic splitting of a compound into simpler substances via heat, light, or electricity.',
        detailedExplanation: '1) Combination Reaction: CaO(s) (Quicklime) + H₂O(l) → Ca(OH)₂(aq) (Slaked lime) + Heat (vigorous exothermic reaction used for whitewashing). White Ca(OH)₂ reacts with air CO₂ over 2-3 days forming a shiny marble layer of CaCO₃. 2) Thermal Decomposition: 2FeSO₄(s) (green) + heat → Fe₂O₃(s) (red-brown) + SO₂(g) + SO₃(g) (choking sulphur odor); 2Pb(NO₃)₂(s) + heat → 2PbO(s) (yellow) + 4NO₂(g) (brown fumes) + O₂(g). 3) Electrolytic Decomposition: 2H₂O(l) + electricity → 2H₂(g) + O₂(g) (cathode H₂ volume is double anode O₂ volume). 4) Photolytic Decomposition: 2AgCl(s) (white) + sunlight → 2Ag(s) (grey) + Cl₂(g) (black-and-white photography).',
        quickTake: 'Combination: A + B → AB (exothermic); Decomposition: AB → A + B (thermal, electrolytic, or photolytic endothermic).',
        keyPoints: [
          'Whitewashing: CaO + H₂O → Ca(OH)₂; then Ca(OH)₂ + CO₂ → CaCO₃ (shiny marble finish).',
          'Brown fumes: Thermal decomposition of lead nitrate releases pungent brown nitrogen dioxide gas (NO₂).',
          'Electrolysis of water: Hydrogen gas collected at cathode is twice the volume of oxygen collected at anode.'
        ],
        formulaOrEquation: 'CaO + H₂O ⟶ Ca(OH)₂ + ΔH | 2AgCl(s) + hν ⟶ 2Ag(s) + Cl₂(g)'
      },
      {
        topic: '3. Displacement & Double Displacement (Precipitation)',
        inBrief: 'Displacement occurs when a more reactive element kicks out a less reactive one; double displacement is an exchange of ions between two compounds.',
        definition: 'A single displacement reaction is an oxidation-reduction process where a more electropositive element displaces a less active element from its aqueous salt solution; double displacement involves mutual exchange of counterions between two ionic reactants.',
        detailedExplanation: '1) Displacement Reaction: When an iron nail is dipped in blue copper sulphate solution: Fe(s) + CuSO₄(aq) → FeSO₄(aq) (light green) + Cu(s) (reddish-brown deposit on nail). Iron is higher in the reactivity series than copper. 2) Double Displacement Reaction: When sodium sulphate reacts with barium chloride: Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ (dense white precipitate) + 2NaCl(aq). The insoluble solid barium sulphate precipitates out immediately upon mixing.',
        quickTake: 'Displacement: More active metal replaces less active metal; Double displacement: Ion exchange forming an insoluble precipitate.',
        keyPoints: [
          'Reactivity check: Fe > Cu, Zn > Cu, Pb > Cu in electrochemical activity series.',
          'Precipitation reaction: Any double displacement reaction that generates an insoluble solid precipitate.',
          'BaSO₄ test: Formation of white BaSO₄ precipitate is the standard analytical test for sulphate ions (SO₄²⁻).'
        ],
        formulaOrEquation: 'Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s) | Na₂SO₄ + BaCl₂ ⟶ BaSO₄↓ + 2NaCl'
      },
      {
        topic: '4. Oxidation, Reduction & Redox Reactions',
        inBrief: 'Oxidation is gain of oxygen or loss of electrons; reduction is loss of oxygen or gain of electrons; redox involves both simultaneously.',
        definition: 'A redox reaction is a coupled chemical process in which one reacting species undergoes oxidation (electron loss/oxygen addition) while the complementary species undergoes reduction (electron gain/oxygen loss).',
        detailedExplanation: 'When black copper(II) oxide is heated with hydrogen gas: CuO(s) + H₂(g) → Cu(s) + H₂O(l). Here, CuO loses oxygen to become Cu (CuO is reduced; acts as the Oxidizing Agent). Hydrogen gains oxygen to become H₂O (H₂ is oxidized; acts as the Reducing Agent). In modern electronic theory: OIL RIG—Oxidation Is Loss of electrons, Reduction Is Gain of electrons. Both processes occur concurrently to maintain electric charge neutrality.',
        quickTake: 'Oxidation: gain O / lose e⁻; Reduction: lose O / gain e⁻; Oxidizing agent gets reduced; Reducing agent gets oxidized.',
        keyPoints: [
          'Oxidizing Agent: The chemical species that supplies oxygen or accepts electrons.',
          'Reducing Agent: The chemical species that removes oxygen or donates electrons.',
          'Respiration is an exothermic redox process: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.'
        ],
        formulaOrEquation: 'CuO + H₂ ⟶ Cu + H₂O (CuO is reduced, H₂ is oxidized)'
      },
      {
        topic: '5. Corrosion & Rancidity',
        inBrief: 'Corrosion is the gradual oxidation of metals by atmospheric moisture and gases; rancidity is the oxidation of fats and oils causing foul smell.',
        definition: 'Corrosion is the electrochemical deterioration of a metal resulting from chemical reaction with ambient air, moisture, and acid gases; rancidity is the aerial oxidation of unsaturated lipids producing volatile, foul-smelling carboxylic acids and aldehydes.',
        detailedExplanation: '1) Rusting of Iron: Iron exposed to both oxygen and moisture forms hydrated iron(III) oxide (rust): 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (flaky red-brown powder). Copper tarnishes with a green coating of basic copper carbonate [CuCO₃·Cu(OH)₂]. Silver blackens due to silver sulphide (Ag₂S) from atmospheric H₂S. Prevention: painting, greasing, galvanization (coating with zinc), and alloying (stainless steel). 2) Rancidity: When oils and butter are left in air, lipid auto-oxidation ruins taste and smell. Prevention: storing food in airtight containers, refrigeration, and flushing snack bags with inert Nitrogen (N₂) gas.',
        quickTake: 'Corrosion degrades metals (iron rusts to Fe₂O₃·xH₂O); Rancidity oxidizes fats; prevented by nitrogen flushing and antioxidants.',
        keyPoints: [
          'Rust formula: Hydrated iron(III) oxide: Fe₂O₃·xH₂O (red-brown flaky layer).',
          'Nitrogen flushing: Snack chips manufacturers flush bags with inert N₂ gas to prevent oxidative rancidity.',
          'Galvanization: Coating steel/iron with a sacrificial thin layer of metallic zinc (Zn).'
        ],
        formulaOrEquation: '4Fe + 3O₂ + 2xH₂O ⟶ 2Fe₂O₃·xH₂O (Rusting of Iron)'
      }
    ],
    keywords: [
      {
        keyword: 'Precipitate',
        definition: 'An insoluble solid that separates out from an aqueous solution during a double-displacement chemical reaction.',
        sentenceExplanation: 'A precipitate is like white curds of paneer separating immediately out of hot milk when you squeeze fresh lemon juice into it.',
        examContext: 'Represented with downward arrow (↓); example: BaSO₄↓, PbI₂↓ (yellow).'
      },
      {
        keyword: 'Exothermic Reaction',
        definition: 'A chemical reaction accompanied by the net evolution and release of heat energy to the surroundings.',
        sentenceExplanation: 'An exothermic reaction is like dropping quicklime into a water bucket and watching the water boil vigorously and heat the bucket.',
        examContext: 'Respiration and burning of natural gas are exothermic; ΔH is negative.'
      },
      {
        keyword: 'Redox Reaction',
        definition: 'A chemical reaction in which oxidation and reduction occur simultaneously between participating chemical species.',
        sentenceExplanation: 'A redox reaction is like a game of catch where one chemical throws away electrons or oxygen and the partner chemical catches them.',
        examContext: 'Identify both the substance oxidized/reduced and the oxidizing/reducing agent.'
      },
      {
        keyword: 'Galvanization',
        definition: 'The metallurgical method of protecting iron and steel from rusting by coating them with a sacrificial thin layer of molten zinc.',
        sentenceExplanation: 'Galvanization is the zinc armor plating applied to steel sheets used for roofing and ship hulls along the Visakhapatnam port coastline.',
        examContext: 'Protects even if scratched because zinc oxidizes preferentially before iron.'
      },
      {
        keyword: 'Rancidity',
        definition: 'The slow aerial oxidation of unsaturated fats and oils in food items that causes unpleasant odors, bitter tastes, and toxic spoilage.',
        sentenceExplanation: 'Rancidity is the unpleasant stale, sour smell and taste that potato chips develop when left open to the humid air for two days.',
        examContext: 'Prevented by airtight containers, refrigeration, antioxidants (BHA/BHT), and nitrogen gas flushing.'
      }
    ]
  },

  // ==========================================
  // 2. ACIDS, BASES AND SALTS
  // ==========================================
  {
    titleMatcher: 'acids, bases and salts',
    topics: [
      {
        topic: '1. Chemical Properties of Acids and Bases',
        inBrief: 'Acids generate H⁺(aq) ions and turn blue litmus red; bases generate OH⁻(aq) ions, feel soapy, and turn red litmus blue.',
        definition: 'According to Arrhenius theory, an acid is a substance that dissociates in aqueous solution to yield hydronium ions (H₃O⁺), whereas a base dissociates to liberate hydroxide ions (OH⁻).',
        detailedExplanation: '1) Reaction with Metals: Acid + Metal → Salt + Hydrogen gas: Zn + 2HCl → ZnCl₂ + H₂↑ (tested with a burning candle, burns with a characteristic "pop" sound). Strong bases also react with amphoteric metals: 2NaOH + Zn → Na₂ZnO₂ (Sodium zincate) + H₂↑. 2) Reaction with Carbonates: Acid + Metal Carbonate → Salt + H₂O + CO₂↑: 2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂↑ (effervescence; turns limewater milky due to CaCO₃ precipitate). 3) Neutralization: Acid + Base → Salt + Water: HCl + NaOH → NaCl + H₂O.',
        quickTake: 'Acids yield H⁺(aq), react with metals to release H₂ pop gas, carbonates to release CO₂ effervescence.',
        keyPoints: [
          'H⁺ ions in water: Hydrogen ions cannot exist alone; they associate with water to form Hydronium ions: H⁺ + H₂O → H₃O⁺.',
          'Limewater test: CO₂ turns clear limewater milky: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O; excess CO₂ clears it: Ca(HCO₃)₂.',
          'Olfactory Indicators: Substances whose odor changes in acidic or basic media (Vanilla extract, Onion, Clove oil).'
        ],
        formulaOrEquation: 'Zn + 2HCl ⟶ ZnCl₂ + H₂↑ | Ca(OH)₂ + CO₂ ⟶ CaCO₃↓(milky) + H₂O'
      },
      {
        topic: '2. The pH Scale & Daily Life Importance',
        inBrief: 'pH measures hydrogen ion concentration on a 0-14 logarithmic scale; vital for digestive health, soil fertility, and preventing tooth decay.',
        definition: 'The pH scale is a decimal logarithmic metric measuring the molar concentration of hydrogen ions in aqueous solutions: pH = -log₁₀[H⁺], where 7 is neutral, <7 is acidic, and >7 is basic.',
        detailedExplanation: 'A decrease of 1 pH unit represents a 10-fold increase in H⁺ ion concentration. Daily applications: 1) Human Body: Operates within a narrow pH window of 7.0 to 7.8. 2) Acid Rain: When rainwater pH drops below 5.6, it harms aquatic life in rivers and corrodes monuments (marble cancer). 3) Soil pH: Optimal crop cultivation requires neutral to slightly acidic soil (pH 6.5-7.5); acidic soil is treated with slaked lime Ca(OH)₂. 4) Digestion: Stomach produces hydrochloric acid (pH 1.2-1.5); excess acidity causes indigestion, relieved using Antacids (mild bases like Milk of Magnesia Mg(OH)₂ or NaHCO₃). 5) Tooth Decay: Enamel (calcium hydroxyapatite) corrodes when mouth bacteria ferment sugars producing acids that drop mouth pH below 5.5.',
        quickTake: 'pH < 7 acidic, pH 7 neutral, pH > 7 basic; acid rain pH < 5.6; tooth decay starts below pH 5.5.',
        keyPoints: [
          'Antacids: Weak bases such as Magnesium Hydroxide [Mg(OH)₂] that neutralize excess stomach gastric HCl.',
          'Nettle sting: Injects methanoic acid (formic acid); neutralized by rubbing leaves of the dock plant (contains mild base).',
          'Tooth enamel: Hardest substance in human body (Calcium hydroxyapatite) dissolved below pH 5.5.'
        ],
        formulaOrEquation: 'pH = -log₁₀[H⁺] | pH + pOH = 14 (at 25°C)'
      },
      {
        topic: '3. Chlor-Alkali Process & Bleaching Powder',
        inBrief: 'Electrolysis of aqueous NaCl yields NaOH, Cl₂, and H₂; passing chlorine gas over dry slaked lime produces bleaching powder (CaOCl₂).',
        definition: 'The Chlor-Alkali process is the industrial electrolysis of brine (saturated aqueous sodium chloride) that simultaneously produces sodium hydroxide, chlorine gas, and hydrogen gas.',
        detailedExplanation: '1) Chlor-Alkali Process: 2NaCl(aq) + 2H₂O(l) + electricity → 2NaOH(aq) + Cl₂(g) (anode) + H₂(g) (cathode). Products: NaOH (soaps, paper manufacturing), Cl₂ (water purification, PVC, CFCs), H₂ (rocket fuel, ammonia for fertilizers). 2) Bleaching Powder [CaOCl₂]: Prepared by passing chlorine gas over dry slaked lime: Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O. Uses: Bleaching cotton/linen in textile mills, wood pulp in paper factories, and disinfecting municipal drinking water against bacteria.',
        quickTake: 'Brine electrolysis produces NaOH + Cl₂ + H₂; Slaked lime + Cl₂ produces Bleaching Powder CaOCl₂ for water disinfection.',
        keyPoints: [
          'Anode product: Chlorine gas (Cl₂); Cathode product: Hydrogen gas (H₂); Near cathode: Sodium hydroxide solution (NaOH).',
          'Bleaching action: CaOCl₂ acts via nascent oxygen release: CaOCl₂ + 2HCl → CaCl₂ + H₂O + Cl₂.',
          'Oxidizing agent: Bleaching powder is widely utilized as a strong industrial oxidizing and germicidal agent.'
        ],
        formulaOrEquation: '2NaCl + 2H₂O ⟶ 2NaOH + Cl₂↑ + H₂↑ | Ca(OH)₂ + Cl₂ ⟶ CaOCl₂ + H₂O'
      },
      {
        topic: '4. Baking Soda, Washing Soda & Plaster of Paris',
        inBrief: 'Baking soda (NaHCO₃) is a mild non-corrosive base used in cooking; Washing soda (Na₂CO₃·10H₂O) removes water hardness; POP (CaSO₄·½H₂O) sets hard with water.',
        definition: 'Baking soda is sodium hydrogen carbonate (NaHCO₃), Washing soda is hydrated sodium carbonate decahydrate (Na₂CO₃·10H₂O), and Plaster of Paris is calcium sulphate hemihydrate (CaSO₄·½H₂O).',
        detailedExplanation: '1) Baking Soda (NaHCO₃): Produced via Solvay process: NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃. On heating during baking: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑. The liberated CO₂ bubbles make bread and cakes soft and spongy. Baking powder is a mixture of baking soda and a mild edible acid (tartaric acid) to eliminate bitter taste. 2) Washing Soda (Na₂CO₃·10H₂O): Recrystallization of sodium carbonate: Na₂CO₃ + 10H₂O → Na₂CO₃·10H₂O. Used in glass/soap manufacture and to remove permanent hardness of water. 3) Plaster of Paris (CaSO₄·½H₂O): Prepared by heating Gypsum (CaSO₄·2H₂O) carefully at 373 K (100°C): CaSO₄·2H₂O + heat → CaSO₄·½H₂O + 1½ H₂O. When mixed with water, it rehydrates back into rock-hard Gypsum within minutes (used for setting fractured bones and making decorative casts).',
        quickTake: 'Baking soda: NaHCO₃ (spongy cakes); Washing soda: Na₂CO₃·10H₂O (water softener); POP: CaSO₄·½H₂O (fracture casts).',
        keyPoints: [
          'Baking Powder vs Baking Soda: Baking powder contains baking soda plus tartaric acid to prevent bitter taste.',
          'Water of Crystallization: Fixed number of water molecules chemically bonded in one formula unit (CuSO₄·5H₂O blue → heating → white anhydrous CuSO₄).',
          'POP Temperature Caution: Heating gypsum above 373 K burns it into "dead burnt plaster" (anhydrous CaSO₄) which loses setting ability.'
        ],
        formulaOrEquation: '2NaHCO₃ ⟶ Na₂CO₃ + H₂O + CO₂↑ | CaSO₄·½H₂O + 1½ H₂O ⟶ CaSO₄·2H₂O (Gypsum)'
      }
    ],
    keywords: [
      {
        keyword: 'Hydronium Ion (H₃O⁺)',
        definition: 'The hydrated hydrogen ion cation formed when an acid dissociates and releases a proton into liquid water.',
        sentenceExplanation: 'A hydronium ion is a hydrogen proton clinging tightly to a water molecule because bare protons cannot survive alone in solution.',
        examContext: 'Must explain why H⁺ is represented as H⁺(aq) or H₃O⁺.'
      },
      {
        keyword: 'pH Scale',
        definition: 'A mathematical logarithmic scale from 0 to 14 measuring hydrogen ion concentration in solution, quantifying acidity and basicity.',
        sentenceExplanation: 'The pH scale is like a color-coded acidity ruler where lemon juice sits at 2, pure water sits at 7, and caustic soda sits up at 14.',
        examContext: 'Inverse relationship: higher [H⁺] yields lower pH value.'
      },
      {
        keyword: 'Water of Crystallization',
        definition: 'The fixed stoichiometric number of water molecules chemically incorporated into the crystalline lattice of a salt formula unit.',
        sentenceExplanation: 'Water of crystallization is the hidden water trapped inside dry-looking crystals like blue copper sulphate that escapes as steam when heated.',
        examContext: 'Examples: CuSO₄·5H₂O (blue to white), FeSO₄·7H₂O, Na₂CO₃·10H₂O, CaSO₄·2H₂O.'
      },
      {
        keyword: 'Plaster of Paris',
        definition: 'Calcium sulphate hemihydrate (CaSO₄·½H₂O) obtained by calcining gypsum at 373 K, forming a moldable paste that sets into a hard solid.',
        sentenceExplanation: 'Plaster of Paris is the white medical chalk powder orthopedic doctors in Vizag mix with water to set rigid white casts around broken arm bones.',
        examContext: 'Must state formula CaSO₄·½H₂O and heating limit of 373 K (100°C).'
      }
    ]
  },

  // ==========================================
  // 3. LIFE PROCESSES
  // ==========================================
  {
    titleMatcher: 'life processes',
    topics: [
      {
        topic: '1. Autotrophic Nutrition & Photosynthesis',
        inBrief: 'Green plants synthesize glucose from CO₂ and H₂O using sunlight absorbed by chlorophyll, releasing oxygen as a byproduct.',
        definition: 'Autotrophic nutrition is an anabolic biochemical process wherein photosynthetic organisms convert inorganic carbon dioxide and water into energy-rich glucose using solar radiation trapped by chlorophyll pigments.',
        detailedExplanation: 'Three sequential steps of photosynthesis: 1) Absorption of light energy by chlorophyll. 2) Conversion of light energy into chemical energy and splitting (photolysis) of water molecules into hydrogen and oxygen: 2H₂O → 4H⁺ + 4e⁻ + O₂↑. 3) Reduction of carbon dioxide to carbohydrates (glucose). Stomata are microscopic epidermal pores guarded by kidney-shaped Guard Cells that swell (turgid) to open stomatal pores for CO₂ exchange, or shrink (flaccid) to close pores and prevent transpirational water loss. In desert plants (CAM pathways), stomata open at night to take up CO₂, synthesizing an intermediate acid processed during daytime sunlight.',
        quickTake: '6CO₂ + 12H₂O + sunlight ⟹ C₆H₁₂O₆ + 6O₂ + 6H₂O; guard cells open/close stomata via turgidity.',
        keyPoints: [
          'Overall equation: 6CO₂ + 12H₂O ⟹ C₆H₁₂O₆ + 6O₂ + 6H₂O (requires chlorophyll + sunlight).',
          'Photolysis of water: Source of liberated atmospheric oxygen is WATER (H₂O), not carbon dioxide.',
          'Desert plants: Take up CO₂ at night to minimize transpiration water loss in hot arid conditions.'
        ],
        formulaOrEquation: '6CO₂ + 12H₂O + Sunlight/Chlorophyll ⟶ C₆H₁₂O₆ + 6O₂ + 6H₂O'
      },
      {
        topic: '2. Heterotrophic Nutrition & Human Digestion',
        inBrief: 'Complex organic food is broken down into simple absorbable nutrients by digestive enzymes across the human alimentary canal.',
        definition: 'Heterotrophic holozoic nutrition is the ingestion, enzymatic digestion, intestinal absorption, assimilation, and egestion of complex organic nutrients by the human digestive tract.',
        detailedExplanation: 'Digestion pathway: 1) Mouth: Salivary Amylase breaks down starch into maltose sugars (optimal at pH 6.8). 2) Stomach: Gastric glands secrete Hydrochloric Acid (creates acidic pH 1.5-2.0 to activate enzymes and kill bacteria), Pepsin (digests proteins into peptones), and Mucus (protects stomach lining from acid erosion). 3) Small Intestine (Site of complete digestion): Receives Bile juice from liver (Bile salts emulsify large fat globules into micro-droplets and neutralize acid chyme) and Pancreatic juice (Trypsin digests proteins, Lipase breaks down emulsified fats, Pancreatic amylase digests carbohydrates). 4) Absorption: Millions of finger-like projections called Villi lined with microvilli dramatically maximize surface area, packed with blood capillaries and lymph lacteals to absorb glucose, amino acids, and fatty acids.',
        quickTake: 'Mouth (salivary amylase); Stomach (pepsin, HCl, mucus); Small intestine (bile emulsification, trypsin, lipase, absorption via villi).',
        keyPoints: [
          'Emulsification: Bile salts break large fat droplets into tiny droplets, vastly increasing lipase enzyme surface area.',
          'Villi: Finger-like projections in small intestine maximizing absorption surface area.',
          'Pepsin vs Trypsin: Pepsin functions in acidic stomach medium; Trypsin acts in alkaline small intestine medium.'
        ],
        formulaOrEquation: 'Starch ⟹ Maltose (Amylase) | Proteins ⟹ Amino Acids (Pepsin/Trypsin) | Fats ⟹ Fatty Acids (Lipase)'
      },
      {
        topic: '3. Respiration: Aerobic vs Anaerobic Pathways',
        inBrief: 'Respiration releases cellular ATP energy through glucose breakdown via aerobic (with O₂) or anaerobic (without O₂) pathways.',
        definition: 'Cellular respiration is a catabolic metabolic pathway in which hexose glucose molecules undergo enzymatic oxidation to yield metabolic ATP energy, water, and carbon dioxide.',
        detailedExplanation: 'Step 1 (Cytoplasm): Glycolysis breaks 6-carbon Glucose into two 3-carbon Pyruvate molecules, producing 2 net ATP. Step 2 depends on oxygen presence: 1) Aerobic Respiration (Mitochondria): In presence of O₂, pyruvate breaks down completely into CO₂ + H₂O + 38 ATP (high energy yield). 2) Anaerobic Respiration in Yeast (Fermentation): In absence of O₂, pyruvate converts into Ethanol + CO₂ + 2 ATP. 3) Anaerobic Respiration in Human Muscle: During intense sprinting, oxygen deficit forces muscle cells to convert pyruvate into Lactic Acid + 2 ATP. Accumulation of lactic acid in muscle fibers causes painful muscle cramps.',
        quickTake: 'Aerobic (mitochondria, 38 ATP, CO₂ + H₂O); Anaerobic yeast (ethanol + CO₂); Muscle anaerobic (lactic acid causing cramps).',
        keyPoints: [
          'Common Step: Glycolysis occurs in cytoplasm without oxygen, yielding 2 pyruvate molecules.',
          'Mitochondrial oxidation: Generates 19 times more ATP than anaerobic fermentation.',
          'Muscle cramps: Caused by sudden anaerobic build-up of 3-carbon Lactic Acid during vigorous exercise.'
        ],
        formulaOrEquation: 'Glucose(6C) ⟶ 2 Pyruvate(3C) ⟹ 6CO₂ + 6H₂O + 38 ATP (Aerobic Mitochondria)'
      },
      {
        topic: '4. Human Circulatory System & Double Circulation',
        inBrief: 'The four-chambered heart pumps blood through two separate circuits: pulmonary (lungs) and systemic (body tissues).',
        definition: 'Double circulation is a dual cardiovascular circulatory pathway wherein blood passes through the four-chambered human heart twice during one complete cycle through the body (pulmonary circuit and systemic circuit).',
        detailedExplanation: 'Structure: Right Atrium and Right Ventricle handle deoxygenated blood; Left Atrium and Left Ventricle handle oxygenated blood. 1) Pulmonary Circuit: Deoxygenated blood from body enters Right Atrium via Vena Cava, flows into Right Ventricle, and is pumped via Pulmonary Artery to lungs for oxygenation. Oxygen-rich blood returns to Left Atrium via Pulmonary Veins. 2) Systemic Circuit: Oxygenated blood flows into thick muscular Left Ventricle, which pumps it at high pressure through the Aorta to all body tissues. Complete septum separation prevents mixing of oxygenated and deoxygenated blood, ensuring highly efficient oxygen delivery required for warm-blooded human endothermy.',
        quickTake: 'Four-chambered heart prevents blood mixing; Pulmonary (heart-lungs-heart), Systemic (heart-body-heart); Left ventricle has thickest walls.',
        keyPoints: [
          'Arteries vs Veins: Arteries carry oxygenated blood at high pressure from heart (thick elastic walls, no valves; exception: pulmonary artery); Veins carry blood to heart (thin walls, possess valves to prevent backflow; exception: pulmonary vein).',
          'Blood pressure: Measured with Sphygmomanometer; normal resting adult BP is 120/80 mm Hg (Systolic/Diastolic).',
          'Platelets: Form fibrin clots to seal vascular wounds; Lymph (tissue fluid) carries digested fats and returns excess fluid.'
        ],
        formulaOrEquation: 'Cardiac Output: Stroke Volume (~70 mL) × Heart Rate (~72 bpm) ≈ 5 L/min'
      },
      {
        topic: '5. Human Excretory System & Nephron Function',
        inBrief: 'Kidneys remove nitrogenous urea from blood using millions of filtration units called nephrons via filtration, reabsorption, and secretion.',
        definition: 'Excretion is the biological removal of toxic metabolic waste products (predominantly nitrogenous urea) from the body; the Nephron is the microscopic structural and functional filtration unit of the human kidney.',
        detailedExplanation: 'Kidney anatomy: Paired kidneys filter blood, passing urine through Ureters into the Urinary Bladder for temporary storage until voided via Urethra. Nephron Mechanism: 1) Ultrafiltration: Renal artery delivers blood at high hydrostatic pressure to the Glomerulus (capillary tuft) enclosed by Bowman\'s Capsule. Water, glucose, amino acids, salts, and urea filter into the capsule, forming initial glomerular filtrate (~180 liters/day). 2) Selective Reabsorption: Along the coiled Renal Tubule (PCT, Henle\'s loop, DCT), essential nutrients (all glucose, amino acids, major salts, and 99% of water) are actively reabsorbed back into peritubular blood capillaries. 3) Tubular Secretion: Extra ions and toxins are secreted into the collecting duct, yielding ~1.5 liters of concentrated urine per day.',
        quickTake: 'Glomerular ultrafiltration ⟹ Selective reabsorption in tubules (99% water restored) ⟹ Tubular secretion of urea into urine.',
        keyPoints: [
          'Initial filtrate volume: ~180 Liters/day; final urine excreted: ~1.5 Liters/day due to 99% tubular water reabsorption.',
          'Selective reabsorption depends on: Amount of excess water in body and quantity of dissolved waste to be excreted.',
          'Hemodialysis (Artificial Kidney): Used in renal failure; uses semipermeable cellophane tubes passing through dialyzing fluid (lacks urea).'
        ],
        formulaOrEquation: 'Excreted Urine = (Glomerular Filtration) - (Tubular Reabsorption) + (Tubular Secretion)'
      }
    ],
    keywords: [
      {
        keyword: 'Stomata',
        definition: 'Microscopic pores present in the epidermis of plant leaves bounded by two kidney-shaped guard cells, regulating transpirational gas exchange.',
        sentenceExplanation: 'Stomata are tiny leaf breathing nostrils that open wide during sunny mornings to inhale carbon dioxide and exhale fresh oxygen.',
        examContext: 'Mechanism: Guard cells swell (turgid) to open stomatal pore; shrink (flaccid) to close it.'
      },
      {
        keyword: 'Emulsification',
        definition: 'The biochemical breakdown of large dietary fat globules into tiny microscopic droplets by amphipathic liver bile salts.',
        sentenceExplanation: 'Emulsification is like using dishwashing liquid on a greasy pan to break down thick cooking oil into tiny washable droplets.',
        examContext: 'Performed by bile salts; significantly expands surface area for pancreatic lipase enzyme activity.'
      },
      {
        keyword: 'Double Circulation',
        definition: 'A cardiovascular circulation pattern wherein blood travels through the heart twice during a single complete journey around the body.',
        sentenceExplanation: 'Double circulation is like an airport transit hub where blood visits the heart once to get redirected to the lung oxygen terminal, and visits again to fly out to the body.',
        examContext: 'Two circuits: Pulmonary and Systemic; prevents mixing of oxygenated and deoxygenated blood.'
      },
      {
        keyword: 'Nephron',
        definition: 'The microscopic structural and functional filtration unit of the mammalian kidney responsible for urine formation.',
        sentenceExplanation: 'A nephron is like a microscopic multi-stage water filtration plant inside your kidney that catches dirt, recovers clean water, and drains away waste.',
        examContext: 'Diagram labeling: Bowman\'s Capsule, Glomerulus, Henle\'s loop, Collecting Duct.'
      }
    ]
  },

  // ==========================================
  // 4. ELECTRICITY
  // ==========================================
  {
    titleMatcher: 'electricity',
    topics: [
      {
        topic: '1. Electric Current & Potential Difference',
        inBrief: 'Electric current is the rate of flow of electric charges; potential difference is the work done to move a unit positive charge between two points.',
        definition: 'Electric current (I) is formally defined as the time rate of flow of net electric charge across a cross-section: I = Q / t; Potential difference (V) is the work done per unit charge in moving it between two points: V = W / Q.',
        detailedExplanation: 'Electric current flows due to directional drift of free valence electrons in metallic conductors. By convention, electric current direction is taken as opposite to electron flow (from positive terminal to negative terminal). Current is measured in Amperes (A) using an Ammeter connected in series (low resistance). Potential difference (voltage) provides the electrical driving pressure and is measured in Volts (V) using a Voltmeter connected in parallel (high resistance). 1 Volt is the potential difference between two points when 1 Joule of work is done in moving 1 Coulomb of charge: 1 V = 1 J / 1 C.',
        quickTake: 'Current I = Q / t (Ampere, measured in series); Voltage V = W / Q (Volt, measured in parallel).',
        keyPoints: [
          '1 Ampere: Flow of 1 Coulomb of electric charge per second (1 A = 1 C/s).',
          'Charge on 1 electron: e = 1.6 × 10⁻¹⁹ C; 1 Coulomb contains ~6.25 × 10¹⁸ electrons.',
          'Ammeter in series (ideal resistance = 0); Voltmeter in parallel (ideal resistance = ∞).'
        ],
        formulaOrEquation: 'I = Q / t | V = W / Q | Q = n · e'
      },
      {
        topic: '2. Ohm\'s Law & Resistance Factors',
        inBrief: 'Ohm\'s Law states V ∝ I at constant temperature (V = I·R); resistance depends on conductor length, cross-sectional area, and material resistivity.',
        definition: 'Ohm\'s Law states that the electric current flowing through a metallic conductor is directly proportional to the potential difference across its terminals, provided temperature and other physical parameters remain constant: V = I · R.',
        detailedExplanation: 'Resistance (R) is the opposition offered by a conductor to electric charge flow, measured in Ohms (Ω). Factors governing resistance: 1) Proportional to length (R ∝ l). 2) Inversely proportional to cross-sectional area (R ∝ 1/A). Combining gives: R = ρ · (l / A), where ρ (rho) is the electrical Resistivity of the material (SI unit: Ω·m). Resistivity is an intrinsic material property independent of dimensions: metals have very low resistivity (10⁻⁸ Ω·m), semiconductors are intermediate, and insulators have very high resistivity (10¹² Ω·m). Alloys (Nichrome, Manganin) have higher resistivity than constituent metals and do not oxidize at high temperatures, making them ideal for heating element coils.',
        quickTake: 'V = I · R; Resistance R = ρ · (l / A); Resistivity depends on material and temperature, not dimensions.',
        keyPoints: [
          'Ohmic conductors: Linear V-I graph passing through origin; slope = 1/R (on I-V graph) or R (on V-I graph).',
          'Heating elements: Made of alloys like Nichrome because of high resistivity and high melting point without rapid oxidation.',
          'Thick vs Thin wire: Thick wire has larger area A, hence lower resistance; thin wire has higher resistance.'
        ],
        formulaOrEquation: 'V = I · R | R = ρ · (l / A) (SI unit of ρ: Ω·m)'
      },
      {
        topic: '3. Resistors in Series & Parallel Combinations',
        inBrief: 'In series, current is identical and resistances add up (Rs = R1+R2); in parallel, voltage is identical and reciprocals add up (1/Rp = 1/R1 + 1/R2).',
        definition: 'Series combination is an end-to-end cascading of resistors where identical current flows sequentially through each; Parallel combination is a concurrent connection across two common electrical nodes where identical potential difference exists across each branch.',
        detailedExplanation: '1) Series Circuit: Total potential difference V = V₁ + V₂ + V₃. Since V = IR: I·R_s = I·R₁ + I·R₂ + I·R₃ ⟹ R_s = R₁ + R₂ + R₃. Equivalent resistance is greater than the largest individual resistor. Disadvantage: If one component fails, the entire circuit opens and stops; current is constrained by the highest resistor. 2) Parallel Circuit: Total current I = I₁ + I₂ + I₃. Since I = V/R: V/R_p = V/R₁ + V/R₂ + V/R₃ ⟹ 1/R_p = 1/R₁ + 1/R₂ + 1/R₃. Equivalent resistance is smaller than the smallest individual resistor. Advantage: Each appliance gets full supply voltage (220 V), operates independently with its own switch, and failure of one branch does not interrupt other appliances—making parallel wiring mandatory for domestic circuits.',
        quickTake: 'Series: R_s = R₁ + R₂ (current constant, R increases); Parallel: 1/R_p = 1/R₁ + 1/R₂ (voltage constant, R decreases, domestic wiring standard).',
        keyPoints: [
          'Domestic wiring is always in parallel: Equal voltage (220 V) across every device; independent switching.',
          'Two identical resistors R in parallel yield R/2; in series they yield 2R.',
          'Series circuit limitation: Different appliances (bulb and heater) require vastly different currents and cannot work efficiently in series.'
        ],
        formulaOrEquation: 'Series: R_s = Σ R_i | Parallel: 1/R_p = Σ (1/R_i)'
      },
      {
        topic: '4. Heating Effect of Current & Joule\'s Law',
        inBrief: 'Flow of current through a resistor dissipates electrical energy as heat: H = I²·R·t.',
        definition: 'Joule\'s Law of Heating states that heat generated in a resistor is directly proportional to the square of electric current (I²), electrical resistance (R), and duration of current flow (t): H = I² · R · t.',
        detailedExplanation: 'When electric charges drift through a conductor, they collide continuously with vibrating metal lattice ions, transferring electrical kinetic energy into thermal vibrations. Mathematical derivation: Electrical work W = V · Q = V · (I · t). From Ohm\'s law V = IR: W = (IR) · (It) = I²Rt. This work converts entirely into heat energy H = I²Rt Joules. Practical applications: 1) Heating Appliances: Electric irons, geysers, toasters use high-resistivity Nichrome coils. 2) Electric Bulb: Tungsten filament has extremely high melting point (3380°C) and glows white-hot, filled with inert nitrogen/argon gas to prevent oxidation. 3) Electric Fuse: Safety device made of lead-tin alloy with low melting point; breaks circuit during overloading or short circuits.',
        quickTake: 'H = I² · R · t; Tungsten filament (3380°C melting point); Fuse wire melts during overloading to protect appliances.',
        keyPoints: [
          'Joule\'s Law dependencies: H ∝ I² (doubling current quadruples heat!), H ∝ R, H ∝ t.',
          'Tungsten properties: Extremely high melting point (3380°C), retains mechanical strength at incandescent temperatures.',
          'Electric fuse: Connected in series with the live wire; rated current must not exceed safe limit (e.g. 5 A, 15 A).'
        ],
        formulaOrEquation: 'H = I² · R · t = V · I · t = (V² / R) · t'
      },
      {
        topic: '5. Electric Power & Commercial Consumption',
        inBrief: 'Electric power is the rate of electrical energy consumption (P = V·I); 1 commercial unit equals 1 kWh = 3.6 × 10⁶ Joules.',
        definition: 'Electric power (P) is formally defined as the time rate at which electrical energy is consumed, converted, or dissipated in an electrical circuit: P = V · I = I² · R = V² / R, measured in Watts (W).',
        detailedExplanation: 'One Watt is the power consumed by a device operating at 1 Volt potential difference carrying 1 Ampere current: 1 W = 1 V × 1 A. For commercial energy billing, power is multiplied by operational time: Electrical Energy E = P × t. The commercial unit is the Kilowatt-hour (kWh), commonly called a "Unit". Calculation: 1 kWh = (1000 W) × (3600 seconds) = 3,600,000 Joules = 3.6 × 10⁶ J. Example board problem: A 100 W bulb operated 10 hours daily consumes E = 0.1 kW × 10 h = 1 unit/day, costing ₹150 monthly at ₹5/unit.',
        quickTake: 'Power P = V · I = I²R = V²/R; 1 Commercial Unit = 1 kWh = 3.6 × 10⁶ Joules.',
        keyPoints: [
          'Power formulas: P = V · I = I² · R = V² / R (use V²/R for parallel appliances where voltage is constant).',
          'Bulb rating: A "220 V, 100 W" bulb has resistance R = V² / P = (220)² / 100 = 484 Ω.',
          'Commercial conversion: Energy in kWh = [Power(Watts) × Time(Hours)] / 1000.'
        ],
        formulaOrEquation: 'P = V · I = I² · R = V² / R | 1 kWh = 3.6 × 10⁶ J'
      }
    ],
    keywords: [
      {
        keyword: 'Ohm\'s Law',
        definition: 'A physical law stating that electric current through a metallic conductor is directly proportional to potential difference across it at constant temperature.',
        sentenceExplanation: 'Ohm\'s law is like water pressure in a garden hose where doubling the tap pressure doubles the speed and amount of water spurting out.',
        examContext: 'Must state: V = IR provided physical conditions and temperature remain constant.'
      },
      {
        keyword: 'Resistivity (ρ)',
        definition: 'An intrinsic material property measuring how strongly a given substance opposes electric current, quantified in Ohm-meters (Ω·m).',
        sentenceExplanation: 'Resistivity is the chemical personality trait of a metal that determines whether electrons glide through easily like copper or fight through friction like nichrome.',
        examContext: 'SI unit: Ω·m; depends strictly on material nature and temperature, NOT on length or wire thickness.'
      },
      {
        keyword: 'Joule\'s Law of Heating',
        definition: 'A physical principle stating that heat produced in a resistor is proportional to the square of current, resistance, and time duration: H = I²Rt.',
        sentenceExplanation: 'Joule\'s law explains why your laptop charger gets warm after an hour of use, and why electric geysers heat bathwater in Vizag winters.',
        examContext: 'Write all 3 proportionalities: H ∝ I², H ∝ R, H ∝ t.'
      },
      {
        keyword: 'Electric Fuse',
        definition: 'A protective safety device containing a low-melting-point alloy wire that melts and breaks an electrical circuit when current exceeds safe thresholds.',
        sentenceExplanation: 'An electric fuse is the circuit\'s sacrificial bodyguard wire that burns itself out to protect expensive televisions and refrigerators from power surges.',
        examContext: 'Always connected in series with the Live wire; low melting point lead-tin alloy.'
      }
    ]
  },

  // ==========================================
  // 5. METALS AND NON-METALS
  // ==========================================
  {
    titleMatcher: 'metals and non-metals',
    topics: [
      {
        topic: '1. Physical & Chemical Properties of Metals',
        inBrief: 'Metals are electropositive elements that are malleable, ductile, sonorous, good conductors of heat/electricity, and form basic oxides.',
        definition: 'Metals are electropositive chemical elements characterized by crystalline luster, high electrical and thermal conductivity, ductility, and tendency to lose valence electrons to form cations.',
        detailedExplanation: 'Physical properties: Malleability (beaten into thin foils, Gold and Silver are most malleable), Ductility (drawn into thin wires, 1 g of gold can yield 2 km of wire), and electrical conductivity (Silver is best, followed by Copper; Lead and Mercury are poor conductors). Chemical properties: 1) Reaction with Oxygen: Metals form basic or amphoteric oxides: 2Cu + O₂ → 2CuO (black); 4Al + 3O₂ → 2Al₂O₃ (amphoteric oxide reacting with both acids and bases). 2) Reaction with Water: Sodium and Potassium react violently with cold water, catching fire: 2Na + 2H₂O → 2NaOH + H₂↑ + heat (stored under kerosene). Calcium floats because H₂ bubbles stick to its surface. Magnesium reacts with hot water; Aluminium, Iron, and Zinc react only with steam: 3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂.',
        quickTake: 'Malleable, ductile, conductors; basic/amphoteric oxides; Na/K react violently with cold water, Fe with steam.',
        keyPoints: [
          'Amphoteric Oxides: Al₂O₃ and ZnO react with BOTH acids and bases to yield salt and water.',
          'Liquid Metal: Mercury (Hg) is the only liquid metal at room temperature; Gallium and Cesium melt in your palm.',
          'Kerosene Storage: Sodium and Potassium are stored under kerosene to prevent explosive contact with air and moisture.'
        ],
        formulaOrEquation: 'Al₂O₃ + 6HCl ⟶ 2AlCl₃ + 3H₂O | Al₂O₃ + 2NaOH ⟶ 2NaAlO₂ + H₂O'
      },
      {
        topic: '2. Reactivity Series & Displacement Mechanisms',
        inBrief: 'The reactivity series arranges metals in descending order of their chemical reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.',
        definition: 'The reactivity series is an empirically determined vertical hierarchy of metals ordered by decreasing standard electrode reduction potential and electropositive chemical activity.',
        detailedExplanation: 'Metals placed above hydrogen in the series displace hydrogen gas from dilute acids (HCl, H₂SO₄): Zn + 2HCl → ZnCl₂ + H₂↑. Metals placed below hydrogen (Cu, Ag, Au, Pt) cannot liberate H₂ from acids. Exception: Nitric acid (HNO₃) is a strong oxidizing agent, oxidizing liberated H₂ into water while reducing itself to nitrogen oxides (NO₂, N₂O)—only Magnesium (Mg) and Manganese (Mn) react with extremely dilute (1%) HNO₃ to liberate H₂ gas. Any metal higher in the reactivity series displaces a lower metal from its aqueous salt solution.',
        quickTake: 'Reactivity hierarchy: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Ag > Au; higher metal displaces lower metal.',
        keyPoints: [
          'Mnemonic: Please Send Cats Monkeys And Zebras In Lead Heavy Cages Securely Guarded.',
          'Nitric Acid Exception: Only Mg and Mn produce H₂ gas with very dilute (1%) HNO₃.',
          'Displacement test: Fe nail in blue CuSO₄ yields light green FeSO₄ and red-brown copper coating.'
        ],
        formulaOrEquation: 'Zn(s) + CuSO₄(aq) ⟶ ZnSO₄(aq) + Cu(s) | Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)'
      },
      {
        topic: '3. Ionic Compounds: Formation & Distinct Properties',
        inBrief: 'Ionic compounds form via complete transfer of valence electrons from metals to non-metals, held by strong electrostatic crystal lattices.',
        definition: 'Ionic compounds are neutral crystalline chemical substances composed of positively charged cations and negatively charged anions bound by omnidirectional electrostatic Coulombic attractive forces.',
        detailedExplanation: 'Formation of Sodium Chloride: Sodium (2,8,1) donates 1 electron to become stable Na⁺ (2,8); Chlorine (2,8,7) accepts that electron to become Cl⁻ (2,8,8). Electrostatic attraction locks them into a 3D crystal lattice. Characteristic Properties: 1) Physical State: Hard, crystalline, brittle solids due to strong electrostatic attraction. 2) High Melting & Boiling Points: Considerable thermal energy is needed to break the immense electrostatic inter-ionic bonds (NaCl melting point is 801°C / 1074 K). 3) Solubility: Readily soluble in polar solvents (water) but insoluble in non-polar solvents (kerosene, petrol). 4) Electrical Conduction: Insulators in solid state (ions locked in fixed positions), but conduct electricity brilliantly in molten or aqueous states because ions are free to migrate to electrodes.',
        quickTake: 'Formed by electron transfer (Na⁺ + Cl⁻); high melting points, soluble in water, conduct electricity in molten/aqueous state.',
        keyPoints: [
          'Electron Dot Structure: Show complete transfer of electrons with brackets and charge superscripts: [Na]⁺ [ :Cl: ]⁻.',
          'Solid insulation: Solid ionic salts do not conduct electricity because ions cannot move freely in the rigid lattice.',
          'Brittleness: Applying mechanical shear stress causes like charges to align, repelling and cleaving the crystal.'
        ],
        formulaOrEquation: 'Coulomb\'s Law: F = k · (|q₁ · q₂|) / r² | Na(2,8,1) + Cl(2,8,7) ⟶ [Na]⁺[:Cl:]⁻'
      },
      {
        topic: '4. Metallurgy: Roasting, Calcination & Refining',
        inBrief: 'Metallurgy is the scientific process of extracting pure metals from natural ores through concentration, reduction, and refining.',
        definition: 'Metallurgy comprises the sequential chemical and thermodynamic operations required to extract economically viable elemental metals from mineral ores and refine them to commercial purity.',
        detailedExplanation: '1) Enrichment of Ore: Removing unwanted rock and sand gangue via gravity separation, magnetic separation, or froth flotation. 2) Converting Ore to Metal Oxide: Carbonate ores undergo Calcination (heating in limited air: ZnCO₃ + heat → ZnO + CO₂↑). Sulphide ores undergo Roasting (heating strongly in excess air: 2ZnS + 3O₂ + heat → 2ZnO + 2SO₂↑). 3) Reduction to Metal: Zinc oxide is reduced using carbon/coke: ZnO + C → Zn + CO. Highly reactive metals (Na, Ca, Al) are extracted via electrolytic reduction of molten salts (Al₂O₃ dissolved in cryolite). Thermite Reaction: Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + massive heat (liquid molten iron is used on-site to weld cracked railway tracks in Vizag). 4) Electrolytic Refining: Impure copper is the anode, thin pure copper strip is the cathode, and acidified CuSO₄ is electrolyte. Pure Cu deposits on cathode while insoluble impurities settle as "Anode Mud".',
        quickTake: 'Calcination (carbonate ores in limited air); Roasting (sulphide ores in excess air); Thermite reaction welds railway tracks.',
        keyPoints: [
          'Calcination vs Roasting: Calcination = Carbonate ore, no/low air; Roasting = Sulphide ore, excess air.',
          'Thermite Process: Exothermic reaction of Fe₂O₃ with Al producing liquid molten iron used for railway welding.',
          'Anode Mud: Precious metals (gold, silver, platinum) settling under the anode during electrolytic copper refining.'
        ],
        formulaOrEquation: 'Roasting: 2ZnS + 3O₂ ⟶ 2ZnO + 2SO₂ | Thermite: Fe₂O₃ + 2Al ⟶ 2Fe(l) + Al₂O₃ + ΔH'
      }
    ],
    keywords: [
      {
        keyword: 'Amphoteric Oxide',
        definition: 'A metallic oxide that exhibits dual chemical behavior by reacting with both acids and bases to produce salt and water.',
        sentenceExplanation: 'An amphoteric oxide like aluminium oxide acts like a chemical chameleon, behaving like a base against acids and like an acid against bases.',
        examContext: 'Must write equations with both HCl and NaOH for Al₂O₃ or ZnO.'
      },
      {
        keyword: 'Thermite Reaction',
        definition: 'A highly exothermic redox reaction between ferric oxide and powdered aluminium that liberates molten iron at temperatures exceeding 2500°C.',
        sentenceExplanation: 'The thermite reaction is the intense white-hot chemical weld Indian Railway engineers ignite to fuse broken steel train tracks together on the spot.',
        examContext: 'Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + heat; state application in railway track welding.'
      },
      {
        keyword: 'Roasting vs Calcination',
        definition: 'Roasting heats sulphide ores in excess air liberating SO₂; Calcination heats carbonate ores in limited air liberating CO₂.',
        sentenceExplanation: 'Roasting bakes smelly sulphur ores in open breezy air, while calcination bakes carbonate ores in a tight closed oven to drive off trapped gas.',
        examContext: 'Roasting: 2ZnS + 3O₂ → 2ZnO + 2SO₂; Calcination: ZnCO₃ → ZnO + CO₂.'
      },
      {
        keyword: 'Anode Mud',
        definition: 'The insoluble sludge of precious non-oxidizable metals that settles beneath the sacrificial anode during electrolytic refining.',
        sentenceExplanation: 'Anode mud is the valuable sludge residue rich in gold and silver flakes that drops to the tank floor during copper refining.',
        examContext: 'Contains impurities like gold, silver, platinum below anode in electrolytic copper cell.'
      }
    ]
  },

  // ==========================================
  // 6. CARBON AND ITS COMPOUNDS
  // ==========================================
  {
    titleMatcher: 'carbon and its compounds',
    topics: [
      {
        topic: '1. Covalent Bonding & Tetravalency of Carbon',
        inBrief: 'Carbon forms stable covalent bonds by sharing 4 valence electrons; catenation allows carbon to form millions of chain and ring molecules.',
        definition: 'Covalent bonding is the directional sharing of electron pairs between participating non-metallic atoms; Carbon\'s versatile nature stems from its tetravalency (valency 4) and unique catenation capacity.',
        detailedExplanation: 'With atomic number 6 (electronic configuration 2,4), carbon cannot easily gain 4 electrons to form C⁴⁻ (nucleus with 6 protons cannot hold 10 electrons) or lose 4 electrons to form C⁴⁺ (demands unfeasibly high ionization energy). Instead, carbon attains a stable neon octet by sharing valence electrons, forming covalent bonds (single, double, or triple). The reasons for carbon forming over 3 million compounds: 1) Catenation: The unique ability of carbon atoms to form strong covalent C-C bonds with one another, generating endless straight chains, branched trees, and closed rings. 2) Tetravalency: Capability of bonding with 4 other monovalent atoms (H, Cl, Br) or multivalent atoms (O, N, S). 3) Small Atomic Size: Nucleus holds shared electron pairs tightly, making carbon-carbon bonds exceptionally strong and thermally stable.',
        quickTake: 'Carbon shares electrons (covalent bonds); millions of compounds due to Catenation (self-linking) and Tetravalency.',
        keyPoints: [
          'Allotropes of Carbon: Diamond (rigid 3D tetrahedral, hardest natural substance, insulator), Graphite (hexagonal layers with free delocalized electrons, soft, lubricant, good conductor), Fullerene (C₆₀ soccer ball shape).',
          'Single, Double, Triple Bonds: Alkane (C-C single), Alkene (C=C double), Alkyne (C≡C triple).',
          'Small atomic radius: Gives immense bond strength and stability to carbon compounds compared to silicon.'
        ],
        formulaOrEquation: 'Catenation: -C-C-C-C- (Infinite Stable Covalent Networks)'
      },
      {
        topic: '2. Homologous Series & Nomenclature',
        inBrief: 'A homologous series is a family of organic compounds sharing the same functional group where consecutive members differ by a -CH₂- unit.',
        definition: 'A homologous series is a succession of organic compounds possessing identical functional groups and similar chemical characteristics, in which adjacent members differ by a methylene (-CH₂-) group and 14 unified atomic mass units.',
        detailedExplanation: '1) Alkanes (Saturated, single bonds, general formula C_n H_(2n+2)): Methane CH₄, Ethane C₂H₆, Propane C₃H₈, Butane C₄H₁₀. 2) Alkenes (Unsaturated, double bond, C_n H_2n): Ethene C₂H₄, Propene C₃H₆. 3) Alkynes (Unsaturated, triple bond, C_n H_(2n-2)): Ethyne (Acetylene) C₂H₂, Propyne C₃H₄. Functional Groups: Alcohol (-OH, suffix -ol: Ethanol CH₃CH₂OH), Aldehyde (-CHO, suffix -al: Ethanal CH₃CHO), Ketone (-CO-, suffix -one: Propanone CH₃COCH₃), Carboxylic Acid (-COOH, suffix -oic acid: Ethanoic acid CH₃COOH), Halogen (-Cl, -Br, prefix chloro-, bromo-). As molecular mass increases along a series, physical properties (melting/boiling point, density) show a gradual gradation due to increasing van der Waals intermolecular attractions.',
        quickTake: 'Homologous series members differ by -CH₂- and 14 u; general formulas: Alkanes C_n H_(2n+2), Alkenes C_n H_2n, Alkynes C_n H_(2n-2).',
        keyPoints: [
          'Saturated Hydrocarbons: Single bonds only; burn with clean blue flame. Unsaturated: Double/triple bonds; burn with yellow sooty flame.',
          'Isomerism: Structural isomers share identical molecular formula but possess different chain connectivity (e.g. n-butane and isobutane C₄H₁₀).',
          'Mass increment: Every successive member differs by exactly 14 u (C=12 u, 2H=2 u).'
        ],
        formulaOrEquation: 'Alkanes: C_n H_(2n+2) | Alkenes: C_n H_2n | Alkynes: C_n H_(2n-2) | ΔM = 14 u (-CH₂-)'
      },
      {
        topic: '3. Chemical Properties of Carbon Compounds',
        inBrief: 'Carbon compounds undergo combustion, oxidation, addition (hydrogenation of oils), and substitution reactions.',
        definition: 'Fundamental organic reaction types comprising exothermic Combustion (oxidation to CO₂ + H₂O), controlled Oxidation, catalytic Addition across unsaturated double bonds, and free-radical Substitution.',
        detailedExplanation: '1) Combustion: CH₄ + 2O₂ → CO₂ + 2H₂O + heat and light (exothermic). 2) Oxidation: Alkaline KMnO₄ or acidified K₂Cr₂O₇ act as oxidizing agents converting alcohols to carboxylic acids: CH₃CH₂OH + [O] → CH₃COOH. 3) Addition Reaction: Unsaturated hydrocarbons add hydrogen in presence of Nickel (Ni) or Palladium catalyst to form saturated fats: Vegetable oil (unsaturated liquid) + H₂ + Ni catalyst → Vanaspati Ghee (saturated solid fat). This is industrial Hydrogenation. 4) Substitution Reaction: In presence of sunlight, Chlorine replaces hydrogen atoms from alkanes one by one: CH₄ + Cl₂ + sunlight → CH₃Cl + HCl.',
        quickTake: 'Combustion yields CO₂ + H₂O; Alcohols oxidize to acids; Hydrogenation converts liquid oils to solid ghee using Ni catalyst.',
        keyPoints: [
          'Industrial Hydrogenation: Converts healthy unsaturated vegetable oils into saturated solid fats using Nickel catalyst.',
          'Oxidizing Agents: Alkaline Potassium Permanganate (KMnO₄) or Acidified Potassium Dichromate (K₂Cr₂O₇).',
          'Substitution: Saturated alkanes are unreactive but undergo substitution in sunlight with chlorine.'
        ],
        formulaOrEquation: 'R₂C=CR₂ + H₂ (Ni catalyst, 200°C) ⟶ R₂CH-CHR₂ (Addition / Hydrogenation)'
      },
      {
        topic: '4. Ethanol & Ethanoic Acid (Acetic Acid)',
        inBrief: 'Ethanol (CH₃CH₂OH) is an active solvent; Ethanoic acid (CH₃COOH) is vinegar; they react to form sweet-smelling esters (esterification).',
        definition: 'Ethanol is a commercial grain alcohol, and Ethanoic Acid is a weak carboxylic acid; their acid-catalyzed condensation produces sweet-smelling ethyl ethanoate esters via esterification.',
        detailedExplanation: '1) Ethanol (CH₃CH₂OH): Active ingredient in all alcoholic beverages; universal solvent for tinctures and cough syrups. Reaction with Sodium: 2Na + 2CH₃CH₂OH → 2CH₃CH₂ONa (Sodium ethoxide) + H₂↑. Dehydration: Heating ethanol with concentrated H₂SO₄ at 443 K removes water to form ethene: CH₃CH₂OH + conc. H₂SO₄ → CH₂=CH₂ + H₂O. 2) Ethanoic Acid (CH₃COOH): A 5-8% solution in water is Vinegar (food preservative). Pure ethanoic acid freezes at 290 K (17°C) into ice-like crystals, called Glacial Acetic Acid. 3) Esterification: Heating ethanol and ethanoic acid with conc. H₂SO₄ catalyst yields sweet, fruity-smelling Ester: CH₃COOH + CH₃CH₂OH + H₂SO₄ → CH₃COOCH₂CH₃ (Ethyl ethanoate) + H₂O (used in perfumes and flavorings). 4) Saponification: Esters react with sodium hydroxide base back into alcohol and sodium salt of carboxylic acid (Soap): CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH.',
        quickTake: 'Ethanol + Ethanoic acid + H₂SO₄ ⟹ sweet fruity Ester; Ester + NaOH ⟹ Soap (Saponification); Vinegar is 5-8% acetic acid.',
        keyPoints: [
          'Esterification: Acid + Alcohol → Ester (sweet fruity fragrance) + H₂O.',
          'Saponification: Alkaline hydrolysis of esters producing soap: Basis of all commercial soap manufacturing.',
          'Glacial Acetic Acid: Pure anhydrous ethanoic acid freezing at 17°C (290 K).'
        ],
        formulaOrEquation: 'CH₃COOH + C₂H₅OH (conc. H₂SO₄) ⇌ CH₃COOC₂H₅ (Ester) + H₂O'
      },
      {
        topic: '5. Soaps, Detergents & Micelle Cleansing Mechanism',
        inBrief: 'Soap molecules possess a hydrophilic ionic head and a hydrophobic hydrocarbon tail that form spherical micelles around oily dirt to wash it away.',
        definition: 'Soaps are sodium or potassium salts of long-chain fatty acids (e.g., sodium stearate C₁₇H₃₅COO⁻Na⁺); cleansing occurs through spherical thermodynamic colloidal aggregates called micelles.',
        detailedExplanation: 'A soap molecule has two contrasting ends: 1) Hydrophobic Tail (non-polar hydrocarbon chain): Water-hating, oil-soluble. 2) Hydrophilic Head (polar ionic group -COO⁻Na⁺): Water-loving, oil-insoluble. In water containing oily dirt, the hydrophobic tails dissolve into the interior oily dirt droplet, while the hydrophilic ionic heads point outward into water. This forms a spherical cluster called a Micelle. The oil droplet remains trapped inside the micelle core. Because the outer heads carry like negative charges (-COO⁻), micelles repel each other and remain suspended as a stable emulsion that rinses away easily with water. Hard Water Issue: Hard water contains Ca²⁺ and Mg²⁺ ions which react with soap to form an insoluble grey sticky precipitate called Scum, wasting soap. Detergents (sodium salts of sulphonic acids) do NOT form scum with Ca²⁺/Mg²⁺, lathering freely even in hard water.',
        quickTake: 'Micelle structure: hydrophobic tails grab oil, hydrophilic ionic heads face water; detergents work in hard water without forming scum.',
        keyPoints: [
          'Micelle Formation: Spherical colloidal cluster keeping oily dirt in emulsion center.',
          'Scum: Insoluble calcium/magnesium curds formed when soap reacts with hard water ions.',
          'Synthetic Detergents: Sodium alkyl sulphonates or sulphates that do not precipitate with hard water.'
        ],
        formulaOrEquation: 'C₁₇H₃₅COO⁻Na⁺ (Soap) + Ca²⁺ ⟶ (C₁₇H₃₅COO)₂Ca↓ (Insoluble Sticky Scum)'
      }
    ],
    keywords: [
      {
        keyword: 'Catenation',
        definition: 'The unique self-linking ability of carbon atoms to bond covalently with other carbon atoms to form extended stable chains and rings.',
        sentenceExplanation: 'Catenation is like carbon holding hands with fellow carbon atoms to create an unbreakable conga line stretching thousands of atoms long.',
        examContext: 'Must state: carbon-carbon bond is exceptionally strong due to small atomic size; silicon catenates poorly.'
      },
      {
        keyword: 'Homologous Series',
        definition: 'A family of structurally related organic compounds sharing the same functional group, where adjacent members differ by -CH₂- and 14 u.',
        sentenceExplanation: 'A homologous series is like a biological family of chemicals that all look and react similarly, growing heavier by one carbon and two hydrogens each generation.',
        examContext: 'State common formula, chemical similarity, gradation in physical properties.'
      },
      {
        keyword: 'Esterification',
        definition: 'The acid-catalyzed condensation reaction between a carboxylic acid and an alcohol that produces a sweet-smelling ester and water.',
        sentenceExplanation: 'Esterification is the magical laboratory perfume reaction where harsh vinegar and stinging alcohol combine to create the sweet scent of fresh bananas or apples.',
        examContext: 'Equation: CH₃COOH + C₂H₅OH (conc. H₂SO₄) → CH₃COOC₂H₅ + H₂O.'
      },
      {
        keyword: 'Micelle',
        definition: 'A spherical colloidal structure formed by amphipathic soap molecules in water, with hydrophobic tails inward trapping oil and hydrophilic heads outward.',
        sentenceExplanation: 'A micelle is a microscopic soap ball where hundreds of soap tails hug a drop of grease tightly while their heads face the water, pulling the grease right off your shirt.',
        examContext: 'Diagram requirement: Draw spherical cluster showing hydrophobic tails inward and ionic heads outward.'
      }
    ]
  },

  // ==========================================
  // 7. LIGHT – REFLECTION AND REFRACTION
  // ==========================================
  {
    titleMatcher: 'light',
    topics: [
      {
        topic: '1. Spherical Mirrors & Mirror Formula',
        inBrief: 'Concave mirrors converge light to focus; convex mirrors diverge light and give wide rearview views; Mirror formula is 1/f = 1/v + 1/u.',
        definition: 'A spherical mirror is a reflecting surface forming part of an imaginary hollow sphere; concave mirrors possess reflective inner curves and convex mirrors possess reflective outer bulges.',
        detailedExplanation: 'Key terms: Pole (P), Center of Curvature (C), Radius of Curvature (R = 2f), Principal Focus (F), and Focal Length (f). Sign Convention (New Cartesian): Pole is origin; incident light direction is positive; distances left of pole are negative (object distance u is ALWAYS negative). Mirror Formula relates object distance (u), image distance (v), and focal length (f): 1/f = 1/v + 1/u. Linear Magnification: m = h\' / h = -v / u. Applications: 1) Concave Mirrors: Solar furnaces, headlights, shaving/dentist mirrors (when object is between P and F, image is virtual, erect, and magnified). 2) Convex Mirrors: Vehicle rearview mirrors because they always produce an erect, diminished virtual image and provide an exceptionally wide field of view.',
        quickTake: 'Mirror formula: 1/f = 1/v + 1/u; m = -v/u; convex mirrors are rearview vehicle mirrors; concave mirrors focus headlights.',
        keyPoints: [
          'Sign Convention: u is always negative (-); Concave focal length f is negative (-); Convex focal length f is positive (+).',
          'Dentist mirror condition: Object placed between Pole (P) and Focus (F) yields an erect, virtual, and enlarged image.',
          'Convex mirror benefit: Always gives an erect, diminished virtual image with an expanded panoramic viewing angle.'
        ],
        formulaOrEquation: 'Mirror Formula: 1/f = 1/v + 1/u | Magnification: m = h\'/h = -v/u | R = 2f'
      },
      {
        topic: '2. Refraction of Light & Snell\'s Law',
        inBrief: 'Refraction is the bending of light as it passes obliquely from one transparent optical medium to another due to change in light speed.',
        definition: 'Refraction is the change in propagation velocity and direction of a light wave occurring at the interface between two optically disparate media obeying Snell\'s Law: sin(i) / sin(r) = n₂₁.',
        detailedExplanation: 'When light travels from an Optically Rarer medium (air) to a Denser medium (glass/water), it slows down and bends TOWARD the normal (∠i > ∠r). When traveling from denser to rarer, it speeds up and bends AWAY from the normal (∠i < ∠r). Snell\'s Law states that the ratio of sine of angle of incidence to sine of angle of refraction is a constant: sin(i) / sin(r) = n₂ / n₁ = n₂₁. Absolute Refractive Index (n) of a medium is the ratio of speed of light in vacuum (c = 3 × 10⁸ m/s) to speed in the medium (v): n = c / v. For glass n ≈ 1.5, water n ≈ 1.33, diamond n = 2.42 (highest refractive index, causes intense internal light trapping and brilliance). Refraction through a glass slab causes Lateral Displacement: emergent ray is strictly parallel to incident ray but shifted sideways.',
        quickTake: 'Snell\'s Law: sin(i)/sin(r) = n; bends toward normal when slowing down (rarer to denser); n = c / v.',
        keyPoints: [
          'Snell\'s Law: sin(i) / sin(r) = constant = n₂₁ (valid for 0 < i < 90°).',
          'Refractive index of diamond: n = 2.42 means speed of light in diamond is 1/2.42 times its speed in vacuum.',
          'Glass slab: Angle of incidence equals angle of emergence (∠i = ∠e); emergent ray is parallel with lateral shift.'
        ],
        formulaOrEquation: 'Snell\'s Law: (sin i) / (sin r) = n₂ / n₁ | n = c / v | Lateral Shift d ∝ slab thickness'
      },
      {
        topic: '3. Spherical Lenses & Lens Formula',
        inBrief: 'Convex lenses converge light rays to a real focus; concave lenses diverge light; Lens formula is 1/f = 1/v - 1/u.',
        definition: 'A spherical lens is a transparent optical medium bounded by two spherical refracting surfaces; convex lenses possess positive converging focal lengths, and concave lenses possess negative diverging focal lengths.',
        detailedExplanation: 'Convex Lens: Thicker at center than edges; converges parallel incident light rays to a real focus on the opposite side (f is positive). Ray diagrams: 1) Object at infinity → Image at F₂ (point-sized, real). 2) Object between F₁ and 2F₁ → Image beyond 2F₂ (magnified, inverted, real). 3) Object between Optical Center (O) and Focus (F₁) → Image on same side (virtual, erect, magnified: used in magnifying glasses). Concave Lens: Thicker at edges; diverges light rays; always forms an erect, virtual, diminished image on the same side as object (f is negative). Lens Formula: 1/f = 1/v - 1/u. Magnification: m = h\' / h = +v / u.',
        quickTake: 'Lens formula: 1/f = 1/v - 1/u; m = +v/u; convex (+f, converging); concave (-f, diverging, always virtual/diminished).',
        keyPoints: [
          'Lens vs Mirror Formula Sign: Lens uses minus: 1/f = 1/v - 1/u; Mirror uses plus: 1/f = 1/v + 1/u.',
          'Magnification Sign: Lens m = +v/u; Mirror m = -v/u.',
          'Magnifying glass: Object placed within focal length (u < f) of a convex lens produces an enlarged, erect virtual image.'
        ],
        formulaOrEquation: 'Lens Formula: 1/f = 1/v - 1/u | Magnification: m = h\'/h = +v/u'
      },
      {
        topic: '4. Power of a Lens (Dioptre)',
        inBrief: 'Power of a lens is the reciprocal of its focal length in meters (P = 1/f), measured in Dioptres (D).',
        definition: 'The optical power of a lens is a quantitative measure of its degree of convergence or divergence, mathematically defined as the reciprocal of its focal length expressed in meters: P = 1 / f(m).',
        detailedExplanation: 'One Dioptre (1 D) is defined as the power of a lens having a focal length of exactly 1 meter (1 D = 1 m⁻¹). Convex lenses have positive focal lengths, so their optical power is positive (+P, e.g. +2.5 D for reading glasses treating hypermetropia). Concave lenses have negative focal lengths, so their power is negative (-P, e.g. -1.5 D for spectacles correcting myopia). When thin lenses are placed in contact, their powers add up algebraically: P_net = P₁ + P₂ + P₃. Example: Combining a +2.0 D convex lens and a -1.5 D concave lens produces a net converging power of P = +0.5 D with effective focal length f = 1 / 0.5 = +2.0 meters.',
        quickTake: 'P = 1 / f (in meters); unit is Dioptre (D); convex lens power is positive (+), concave lens power is negative (-).',
        keyPoints: [
          'Focal length must be converted to METERS before calculating power: P = 100 / f(cm).',
          'Convex lens: P > 0 (+Dioptres); Concave lens: P < 0 (-Dioptres).',
          'Lens combination formula: P_total = P₁ + P₂ + P₃ (simple algebraic addition).'
        ],
        formulaOrEquation: 'P = 1 / f(m) = 100 / f(cm) (Unit: Dioptre, D) | P_net = Σ P_i'
      }
    ],
    keywords: [
      {
        keyword: 'Snell\'s Law',
        definition: 'The fundamental law of refraction stating that the ratio of the sine of incidence angle to the sine of refraction angle is a constant for a given pair of media.',
        sentenceExplanation: 'Snell\'s law explains why a drinking straw looks abruptly bent and broken right at the boundary where it dips into a clear glass of water.',
        examContext: 'State: sin(i) / sin(r) = n₂₁; valid for given color of light and pair of media.'
      },
      {
        keyword: 'Refractive Index',
        definition: 'The dimensionless ratio of the speed of light in vacuum to the speed of light in a transparent material medium: n = c / v.',
        sentenceExplanation: 'Refractive index is the optical speed brake of a material telling you how much light slows down when plunging into water, glass, or diamond.',
        examContext: 'n = c / v; higher n means optically denser medium where light travels slower.'
      },
      {
        keyword: 'Dioptre',
        definition: 'The SI unit of optical power of a lens, equivalent to the reciprocal of a focal length of one meter (1 D = 1 m⁻¹).',
        sentenceExplanation: 'A Dioptre is the exact optometrist number stamped on your spectacle prescription card that describes how sharply your lenses bend light.',
        examContext: '1 D = 1 m⁻¹; positive for convex spectacles, negative for concave spectacles.'
      },
      {
        keyword: 'Lateral Displacement',
        definition: 'The perpendicular lateral shift between the path of the original incident light ray and the emergent ray after passing through a parallel-sided glass slab.',
        sentenceExplanation: 'Lateral displacement is the sideways step a light ray takes after crossing a rectangular glass block, emerging shifted but heading in the exact same direction.',
        examContext: 'Emergent ray is parallel to incident ray (∠i = ∠e); displacement depends on slab thickness and refractive index.'
      }
    ]
  }
];

