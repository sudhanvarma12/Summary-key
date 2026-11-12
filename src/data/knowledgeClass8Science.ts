import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const CLASS_8_SCIENCE_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. CLASS 8 SCIENCE: CROP PRODUCTION AND MANAGEMENT
  // ==========================================
  {
    titleMatcher: 'crop production and management',
    topics: [
      {
        topic: '1. Agricultural Practices & Soil Preparation',
        inBrief: 'Crops are plants grown on a large scale for food; soil preparation involves ploughing, leveling, and manuring.',
        definition: 'Agricultural practices are the systematic sequence of seasonal activities undertaken by farmers to cultivate crops, beginning with soil tilling to aerate roots and loosen soil.',
        detailedExplanation: 'Crops are classified by seasons: 1) Kharif Crops: Sown in monsoon season (June to September), require abundant water (Paddy, Maize, Soyabean, Groundnut, Cotton). 2) Rabi Crops: Sown in winter season (October to March), require cooler temperatures (Wheat, Gram, Pea, Mustard, Linseed). Basic Practices: 1) Preparation of Soil: Loosening and turning the soil using a plough or tractor cultivator allows roots to penetrate deep, aerates roots, and promotes earthworms and helpful microbes that add humus. 2) Sowing: Selecting clean, healthy seeds; tested by putting seeds in water—hollow damaged seeds float while healthy seeds sink. Sowing done using seed drill to ensure uniform depth and spacing to prevent bird damage and overcrowding.',
        quickTake: 'Kharif (rainy season: paddy, maize); Rabi (winter: wheat, mustard); Soil loosening allows deep root breathing.',
        keyPoints: [
          'Kharif crops: Sown in rainy season (June-September), e.g., Paddy, Maize, Cotton.',
          'Rabi crops: Sown in winter season (October-March), e.g., Wheat, Gram, Mustard.',
          'Ploughing / Tilling: Loosening soil enhances microbial activity, aeration, and humus retention.'
        ],
        formulaOrEquation: 'Healthy Seeds (Dense, Sinks) vs Damaged Seeds (Hollow, Floats in Water)'
      },
      {
        topic: '2. Manures vs Fertilizers & Crop Rotation',
        inBrief: 'Manure is natural decomposed organic matter; Fertilizers are commercially manufactured chemical plant nutrients rich in N, P, K.',
        definition: 'Manure is an organic fertilizer obtained by decomposition of plant and animal wastes, enhancing soil texture and water retention; Fertilizers are synthetic inorganic salts manufactured in factories providing specific nutrients.',
        detailedExplanation: 'Differences: 1) Origin: Manure is natural organic substance prepared in fields (compost, cow dung); Fertilizer is an inorganic chemical salt made in factories (Urea, Ammonium sulphate, NPK). 2) Humus: Manure provides abundant humus to soil; Fertilizers provide zero humus. 3) Nutrients: Fertilizers are very rich in specific plant nutrients like Nitrogen (N), Phosphorus (P), and Potassium (K); Manure has relatively less concentrated nutrients. 4) Environmental Impact: Excessive use of chemical fertilizers makes soil saline/acidic, causes water pollution, and kills helpful earthworms. Crop Rotation: Growing different crops alternately on the same field (e.g. growing legumes like peas or beans after wheat) allows Rhizobium bacteria in root nodules to fix atmospheric nitrogen, naturally replenishing soil fertility.',
        quickTake: 'Manure adds humus and improves soil texture; Fertilizers provide concentrated NPK but cause long-term pollution; Crop rotation uses legumes to fix nitrogen.',
        keyPoints: [
          'Rhizobium Bacteria: Reside in nodules of leguminous plant roots and fix atmospheric Nitrogen into nitrates.',
          'Soil degradation: Overuse of synthetic fertilizers causes water eutrophication and soil salinization.',
          'Vermicomposting: Preparing organic manure using redworms to digest kitchen vegetable waste.'
        ],
        formulaOrEquation: 'Atmospheric N₂ + Rhizobium Legume Nodules ⟶ Soil Nitrates (Natural Replenishment)'
      },
      {
        topic: '3. Modern Irrigation Systems: Drip & Sprinkler',
        inBrief: 'Irrigation is artificial water supply to crops; Drip irrigation delivers water drop-by-drop to roots with zero water wastage.',
        definition: 'Modern irrigation techniques comprise pressure-regulated water distribution networks, specifically Sprinkler systems for uneven terrain and Drip systems delivering water directly to plant root zones.',
        detailedExplanation: 'Traditional irrigation methods (Moat, Chain pump, Dhekli, Rahat) lead to enormous water wastage through evaporation and seepage. Modern Systems: 1) Sprinkler System: Perpendicular pipes with rotating nozzles at regular intervals are connected to a main pipeline. Water under pump pressure escapes through rotating nozzles, sprinkling uniformly like rain. Highly effective for sandy soil and uneven lawns. 2) Drip Irrigation System: Water falls drop by drop directly at the position of the roots through narrow tubing with emitters. There is ZERO water wastage. It is a boon in water-scarce arid regions (like Rayalaseema and dry belts of Andhra Pradesh) for fruit orchards and gardens.',
        quickTake: 'Drip system: zero wastage, drops water at roots; Sprinkler: rotating nozzles simulating rain on uneven sandy soil.',
        keyPoints: [
          'Drip System: Best irrigation method for water scarcity; delivers water drop-by-drop directly to roots.',
          'Sprinkler System: Ideal for uneven terrain and sandy soil where water retention is poor.',
          'Water conservation: Minimizes weed growth by keeping inter-row soil dry.'
        ],
        formulaOrEquation: 'Water Efficiency: Drip System (~95% efficiency) >> Traditional Flood Irrigation (~40%)'
      }
    ],
    keywords: [
      {
        keyword: 'Kharif vs Rabi Crops',
        definition: 'Kharif crops are monsoon-season crops sown in June and harvested in September; Rabi crops are winter crops sown in October and harvested in March.',
        sentenceExplanation: 'Kharif crops are like rain-loving plants like paddy that thrive in monsoon downpours, while Rabi crops like wheat enjoy the crisp winter sunshine.',
        examContext: 'Give 2 examples each: Kharif (Paddy, Maize), Rabi (Wheat, Mustard).'
      },
      {
        keyword: 'Drip Irrigation',
        definition: 'A micro-irrigation system where water is delivered under low pressure directly to the root zone of plants drop by drop through emitter tubing.',
        sentenceExplanation: 'Drip irrigation acts like a direct drinking straw for each plant that gives water drop-by-drop right at the roots without wasting a single splash.',
        examContext: 'State why it is the best method in drought-prone regions (zero water wastage).'
      },
      {
        keyword: 'Crop Rotation',
        definition: 'The agricultural practice of growing different crops sequentially on the same land to naturally preserve soil fertility and break pest cycles.',
        sentenceExplanation: 'Crop rotation is taking turns planting heavy-eating grains and soil-healing beans so the farmer\'s field never gets tired or barren.',
        examContext: 'Explain role of leguminous crops and Rhizobium nitrogen fixation.'
      }
    ]
  },

  // ==========================================
  // 2. CLASS 8 SCIENCE: FORCE AND PRESSURE
  // ==========================================
  {
    titleMatcher: 'force and pressure',
    topics: [
      {
        topic: '1. What is a Force & Types of Forces',
        inBrief: 'A force is a push or pull on an object arising from an interaction, categorized as contact (muscular, friction) or non-contact (magnetic, electrostatic, gravity).',
        definition: 'Force is an external push or pull that changes or tends to change the state of rest, uniform motion, direction, or shape of an object through interaction.',
        detailedExplanation: 'Forces require an interaction between two bodies. Effects of Force: 1) Move a stationary object. 2) Change object speed. 3) Change direction of motion. 4) Change dimensions/shape (e.g., stretching rubber, kneading dough). Categories: 1) Contact Forces (act only when objects physically touch): Muscular force (lifting a school bag, bullocks pulling cart) and Friction (opposes relative motion between surfaces). 2) Non-Contact Forces (act across distance without touching): Magnetic force (magnets attracting iron pins), Electrostatic force (force exerted by a charged body on another, e.g. plastic comb rubbed on dry hair picking paper bits), and Gravitational force (attractive pull exerted by every mass in the universe, pulling dropped objects downward to Earth).',
        quickTake: 'Force is a push or pull (SI unit: Newton); Contact: muscular, friction; Non-contact: gravity, magnetic, electrostatic.',
        keyPoints: [
          'SI Unit of Force: Newton (N).',
          'Contact forces: Muscular force and Frictional force (require physical contact).',
          'Non-contact forces: Gravitational, Electrostatic, and Magnetic forces (act across empty space).'
        ],
        formulaOrEquation: 'Force F = m · a (Newton, N) | Non-Contact: Gravity, Electrostatic, Magnetism'
      },
      {
        topic: '2. Pressure: Force per Unit Area',
        inBrief: 'Pressure is the force acting perpendicularly per unit surface area; smaller area produces much greater pressure.',
        definition: 'Pressure is formally defined as the perpendicular thrust force exerted per unit area of a surface: Pressure = Thrust / Area, measured in Pascals (N/m²).',
        detailedExplanation: 'When a force acts over a small surface area, it exerts enormous pressure. Daily examples: 1) Why nails have pointed tips: The tip has an extremely small contact area, generating immense pressure under a hammer tap to easily penetrate wooden planks. 2) Why school bags have broad shoulder straps: A broader strap increases contact area, significantly reducing pressure on the student\'s shoulders: Pressure ∝ 1/Area. 3) Why sharp knives cut fruit better than blunt knives: A sharp edge has a tiny surface area, concentrating applied hand force into high cutting pressure.',
        quickTake: 'Pressure = Force / Area (N/m² or Pascal); smaller surface area creates much higher pressure.',
        keyPoints: [
          'SI Unit: Pascal (Pa) = 1 Newton per square meter (1 N/m²).',
          'Inverse area relationship: Doubling surface area cuts pressure in half for the same force.',
          'Pointed nail: Small tip area generates huge pressure to pierce wood effortlessly.'
        ],
        formulaOrEquation: 'Pressure P = Thrust / Area = F / A (Unit: Pascal, Pa = N/m²)'
      },
      {
        topic: '3. Liquid & Atmospheric Pressure',
        inBrief: 'Liquids exert pressure in all directions that increases with depth; atmospheric pressure is the weight of the air column above us.',
        definition: 'Hydrostatic pressure is the omnidirectional pressure exerted by fluids increasing linearly with depth P = h·ρ·g; Atmospheric pressure is the weight of atmospheric air exerted per unit surface area of Earth (~101.3 kPa).',
        detailedExplanation: '1) Liquid Pressure: Liquids exert pressure on container walls and bottom. Pressure increases with depth: a bottle with holes at different heights shoots water farthest from the lowest hole. Dam walls are constructed much thicker at the bottom to withstand higher hydrostatic pressure at greater water depths. Liquids exert equal pressure at identical depths in all directions. 2) Atmospheric Pressure: The atmosphere extends hundreds of kilometers above us. The massive weight of this overlying column of air exerts atmospheric pressure on Earth\'s surface (~100,000 Pa). Why are we not crushed? Because internal fluid and blood pressure inside our bodies perfectly balances the atmospheric pressure from outside. Demonstration: Otto von Guericke\'s Magdeburg Hemispheres: Two hollow metal hemispheres evacuated of air could not be pulled apart even by 16 horses.',
        quickTake: 'Liquid pressure increases with depth (dams thicker at base); Atmospheric pressure is ~10⁵ Pa, balanced by internal blood pressure.',
        keyPoints: [
          'Hydrostatic depth dependency: Pressure increases directly with fluid column height h.',
          'Equal depth rule: Fluid pressure is identical in all directions at the same horizontal depth.',
          'Magdeburg Hemispheres: Conclusive demonstration proving the colossal strength of atmospheric pressure.'
        ],
        formulaOrEquation: 'Fluid Pressure P = h · ρ · g | Atmospheric Pressure P_atm ≈ 1.013 × 10⁵ Pa'
      }
    ],
    keywords: [
      {
        keyword: 'Pressure',
        definition: 'The perpendicular thrust force exerted per unit area of a surface, measured in Pascals (N/m²).',
        sentenceExplanation: 'Pressure is how concentrated a push is, which is why stepping on a sharp thumbtack hurts terribly while resting on a wide flat floor does not.',
        examContext: 'State formula P = F / A and SI unit Pascal (N/m²).'
      },
      {
        keyword: 'Non-Contact Force',
        definition: 'A force that can act on an object from a distance without any physical contact between the interacting bodies.',
        sentenceExplanation: 'A non-contact force is like an invisible magnetic hand that pulls an iron paperclip across your desk without touching it.',
        examContext: 'Examples: Gravity, Electrostatic, Magnetic.'
      },
      {
        keyword: 'Atmospheric Pressure',
        definition: 'The pressure exerted by the weight of the blanket of atmospheric air on all surfaces on Earth, approximately 101,325 Pa at sea level.',
        sentenceExplanation: 'Atmospheric pressure is the invisible weight of the entire sky pressing down on your shoulders like holding up a heavy stack of blankets.',
        examContext: 'Explain why human bodies do not collapse (internal fluid pressure balances external air pressure).'
      }
    ]
  }
];
