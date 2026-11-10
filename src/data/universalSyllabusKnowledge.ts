import { TopicGlance, KeywordDefinition } from '../types';
import { CLASS_9_SCIENCE_KNOWLEDGE } from './knowledgeClass9Science';
import { CLASS_10_SCIENCE_KNOWLEDGE } from './knowledgeClass10Science';
import { COLLEGE_AND_AI_KNOWLEDGE } from './knowledgeCollegeAndAI';

export interface ChapterKnowledge {
  titleMatcher: string;
  topics: TopicGlance[];
  keywords: KeywordDefinition[];
}

export const UNIVERSAL_SYLLABUS_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // CLASS 9 SCIENCE: MATTER IN OUR SURROUNDINGS
  // ==========================================
  {
    titleMatcher: 'matter in our surroundings',
    topics: [
      {
        topic: '1. Particulate Nature of Matter',
        inBrief: 'Matter is anything that has mass and occupies space, made up of extremely tiny particles with spaces between them.',
        definition: 'Matter is formally defined as any physical substance that possesses rest mass, occupies a volume of three-dimensional space, and is composed of fundamental microscopic particles in perpetual thermodynamic motion.',
        detailedExplanation: 'All matter in the universe is discontinuous and particulate in nature. The particles are atomic or molecular in scale, possessing intermolecular spaces (voids) and mutual attractive electrostatic forces. At temperatures above absolute zero (0 K), these particles possess kinetic energy causing continuous random motion (Brownian motion). Heating increases particle kinetic energy, expanding the intermolecular spaces and weakening cohesive forces.',
        quickTake: 'Particles of matter have spaces between them, are constantly moving, and attract each other.',
        keyPoints: [
          'Evidence: Dissolving potassium permanganate crystals in water shows matter divides into millions of tiny particles.',
          'Diffusion: Spontaneous intermixing of particles of two different types of matter on their own.',
          'Rate of diffusion increases directly with temperature because particle kinetic energy increases.'
        ],
        formulaOrEquation: 'Kinetic Energy KE = ½ m·v² ∝ Temperature (K)'
      },
      {
        topic: '2. The Three States of Matter (Solid, Liquid, Gas)',
        inBrief: 'Matter exists primarily in solid, liquid, and gaseous states depending on the strength of intermolecular forces and particle kinetic energy.',
        definition: 'States of matter are distinct macroscopic forms that different phases of matter take on, characterized by structural rigidity, fluidity, and compressibility.',
        detailedExplanation: 'In solids, intermolecular forces are strongest and intermolecular spaces are minimum; particles vibrate only about fixed lattice positions, giving solids definite shape and volume. In liquids, forces are intermediate; particles can glide past one another, resulting in definite volume but variable container-conforming shape. In gases, intermolecular attractions are negligible and spaces are maximum; particles move at high velocities randomly in all directions, exerting uniform pressure on container walls.',
        quickTake: 'Solids: rigid with fixed shape; Liquids: fluid with fixed volume; Gases: highly compressible with no fixed shape or volume.',
        keyPoints: [
          'Compressibility order: Gases > Liquids > Solids (LPG and CNG utilize high gas compressibility).',
          'Intermolecular attraction order: Solids > Liquids > Gases.',
          'Fluidity: Both liquids and gases flow and are classified as fluids.'
        ],
        formulaOrEquation: 'Compressibility: Gases (100x) >> Liquids (~0) ≈ Solids (~0)'
      },
      {
        topic: '3. Change of State: Melting & Boiling Points',
        inBrief: 'Matter transitions between states upon absorption or release of thermal energy at specific characteristic temperatures.',
        definition: 'Melting point is the constant temperature at which a solid converts into a liquid at standard atmospheric pressure; boiling point is the temperature at which liquid vapor pressure equals atmospheric pressure.',
        detailedExplanation: 'When a solid is heated, thermal energy increases particle vibration until the melting point is reached. At this point, additional heat does not raise the temperature; instead, it overcomes the attractive forces binding lattice particles together until the entire mass melts. Similarly, boiling is a bulk phenomenon where particles throughout the liquid gain sufficient kinetic energy to break free into the gaseous state.',
        quickTake: 'Phase changes occur at constant temperature (Ice melts at 0°C / 273.15 K; water boils at 100°C / 373.15 K).',
        keyPoints: [
          'Melting of ice: 0°C (273.15 K); Boiling of pure water: 100°C (373.15 K).',
          'Conversion formula: Temperature in K = Temperature in °C + 273.15.',
          'Boiling is a bulk phenomenon, whereas evaporation is strictly a surface phenomenon.'
        ],
        formulaOrEquation: 'K = °C + 273.15 | °C = K - 273.15'
      },
      {
        topic: '4. Latent Heat of Fusion & Vaporisation',
        inBrief: 'Latent heat is the hidden thermal energy absorbed or released during a change of physical state that does not cause any change in temperature.',
        definition: 'Latent heat is formally defined as the quantity of heat energy absorbed or released per unit mass of a substance during a complete isothermal phase change at constant atmospheric pressure.',
        detailedExplanation: 'The word "latent" means hidden. During melting, latent heat of fusion (3.34 × 10⁵ J/kg for water) breaks intermolecular hydrogen bonds without raising temperature. During boiling, latent heat of vaporisation (22.6 × 10⁵ J/kg for water) completely separates water molecules into steam. Because steam at 100°C contains an extra 2.26 MJ/kg of latent heat compared to water at 100°C, burns caused by steam are far more severe than burns caused by boiling water.',
        quickTake: 'Hidden heat used solely to overcome phase bonds at constant temperature; steam burns more severely than boiling water.',
        keyPoints: [
          'Latent Heat of Fusion: Heat required to convert 1 kg of solid into liquid at atmospheric pressure at its melting point.',
          'Latent Heat of Vaporisation: Heat needed to convert 1 kg of liquid into gas at its boiling point.',
          'Ice at 273 K cools drinks more effectively than water at 273 K because ice absorbs additional latent heat of fusion.'
        ],
        formulaOrEquation: 'Q = m · L | L_fusion(ice) = 3.34×10⁵ J/kg | L_vap(steam) = 2.26×10⁶ J/kg'
      },
      {
        topic: '5. Sublimation and Deposition',
        inBrief: 'Sublimation is the direct transition from solid to gas without entering the liquid phase, while deposition is the reverse process.',
        definition: 'Sublimation is the thermodynamic phase transition where a solid converts directly into vapor on heating without passing through an intermediate liquid state.',
        detailedExplanation: 'Certain substances exhibit vapor pressures that equal atmospheric pressure below their triple points. When heated, camphor, ammonium chloride (NH₄Cl), naphthalene, anthracene, or solid carbon dioxide (dry ice) sublimate directly into vapor. In the laboratory, heating NH₄Cl in a china dish covered with an inverted funnel plugged with cotton causes white crystalline NH₄Cl to deposit directly on the cooler funnel walls (deposition).',
        quickTake: 'Direct solid-to-gas transition (Camphor, Naphthalene balls, Dry ice CO₂, Ammonium chloride).',
        keyPoints: [
          'Sublimation: Solid → Gas directly on heating.',
          'Deposition: Gas → Solid directly on cooling without becoming liquid.',
          'Dry ice (solid CO₂) stored under high pressure converts directly to gas at 1 atmosphere without leaving wet residue.'
        ],
        formulaOrEquation: 'Solid ⇌ Gas (Direct Phase Transition without Liquid Phase)'
      },
      {
        topic: '6. Evaporation & Factors Affecting It',
        inBrief: 'Evaporation is the spontaneous vaporization of a liquid at its surface at any temperature below its normal boiling point.',
        definition: 'Evaporation is a surface phenomenon in which molecules situated at the liquid surface acquire sufficient kinetic energy through molecular collisions to overcome intermolecular attractive forces and escape as vapor.',
        detailedExplanation: 'Unlike boiling which occurs throughout the bulk at a fixed temperature, evaporation occurs only at the liquid surface at all temperatures. The rate of evaporation increases with: 1) Increased Surface Area (spreading out wet clothes), 2) Increased Temperature (faster molecular speeds), 3) Decreased Humidity (air holds limited water vapor), and 4) Increased Wind Speed (blows away vapor particles).',
        quickTake: 'Surface phenomenon below boiling point; rate depends on surface area, temperature, wind speed, and inverse humidity.',
        keyPoints: [
          'Surface Area: Spreading out clothes increases evaporation rate.',
          'Humidity: Low humidity increases rate; high humidity slows evaporation down.',
          'Temperature: Higher temperature provides greater kinetic energy to escape.',
          'Wind Speed: Higher wind speed carries water vapor away from surface.'
        ],
        formulaOrEquation: 'Rate of Evaporation ∝ (Surface Area × Temperature × Wind Speed) / Humidity'
      },
      {
        topic: '7. Evaporative Cooling Mechanism & Daily Life Applications',
        inBrief: 'Evaporation causes cooling because escaping high-energy particles draw their latent heat of vaporization from the remaining liquid and surroundings.',
        definition: 'Evaporative cooling is the reduction in temperature of a liquid and its contact surroundings resulting from the continuous loss of higher-kinetic-energy molecules via surface vaporization.',
        detailedExplanation: 'When molecules evaporate, only those with kinetic energy higher than average can escape. As these energetic molecules leave, the average kinetic energy of the remaining liquid drops, which directly corresponds to a drop in temperature. Daily examples: 1) Water in earthen pots (matkas) remains cool due to evaporation through porous clay walls. 2) Acetone or nail polish remover feels cold on our palm because it absorbs body heat to evaporate. 3) We wear cotton clothes in summer because cotton absorbs perspiration, exposing it to the atmosphere for rapid cooling.',
        quickTake: 'Escaping particles take latent heat of vaporization from surroundings, creating a refreshing cooling effect.',
        keyPoints: [
          'Desert Coolers: Cool better on hot, dry days because high temperature and low humidity maximize evaporation.',
          'Earthen Pots (Matkas): Micropores allow seepage and continuous surface evaporation cooling the stored water.',
          'Cotton clothes: Absorb sweat and expose it to air for fast evaporative cooling in humid Vizag summers.'
        ],
        formulaOrEquation: 'ΔT_cooling ∝ Rate of Evaporation × Latent Heat Absorbed'
      }
    ],
    keywords: [
      {
        keyword: 'Matter',
        definition: 'Anything that has mass, occupies physical space, and offers resistance to an applied force.',
        sentenceExplanation: 'Matter is the fundamental physical stuff that makes up everything around us, from the air we breathe to the chair we sit on.',
        examContext: 'Must state both conditions: has mass AND occupies volume (space).'
      },
      {
        keyword: 'Brownian Motion',
        definition: 'The continuous, rapid, erratic, zig-zag motion of microscopic particles suspended in a fluid caused by collisions with fluid molecules.',
        sentenceExplanation: 'Brownian motion is the random zig-zag dance of tiny pollen grains or dust particles pushed around by invisible water or air molecules.',
        examContext: 'Provides conclusive proof that matter consists of tiny particles that are in continuous motion.'
      },
      {
        keyword: 'Diffusion',
        definition: 'The spontaneous intermixing of particles of two or more different substances on their own due to their continuous kinetic motion.',
        sentenceExplanation: 'Diffusion is the process where scent from an incense stick spreads naturally across an entire room without any stirring.',
        examContext: 'Rate of diffusion increases directly with temperature; fastest in gases, slowest in solids.'
      },
      {
        keyword: 'Latent Heat',
        definition: 'The heat energy absorbed or released by a substance during a change of phase that occurs without any change in temperature.',
        sentenceExplanation: 'Latent heat is hidden thermal energy that works solely to break molecular bonds during melting or boiling instead of raising the thermometer temperature.',
        examContext: 'Examiners award marks for emphasizing that temperature remains strictly constant during phase transition.'
      },
      {
        keyword: 'Sublimation',
        definition: 'The phase transition in which a solid changes directly into gas on heating without passing through the intermediate liquid state.',
        sentenceExplanation: 'Sublimation is what happens when solid camphor or dry ice turns directly into gas without leaving any liquid puddle.',
        examContext: 'Common examples to cite: Camphor, Ammonium Chloride (NH₄Cl), Naphthalene, Solid CO₂.'
      },
      {
        keyword: 'Evaporation',
        definition: 'A surface phenomenon in which liquid molecules convert to vapor at any temperature below the boiling point.',
        sentenceExplanation: 'Evaporation is the gradual drying of water puddles or clothes on a clothesline at ordinary room temperature.',
        examContext: 'Distinguish from boiling: Evaporation is a surface phenomenon at any temp; boiling is a bulk phenomenon at fixed temp.'
      },
      {
        keyword: 'Humidity',
        definition: 'The measure of the amount of water vapor present in the ambient atmosphere at a given temperature.',
        sentenceExplanation: 'Humidity describes how damp or moisture-filled the air is, which determines how fast our sweat can dry.',
        examContext: 'Inverse relationship: Higher humidity causes lower evaporation rate.'
      }
    ]
  },

  // ==========================================
  // CLASS 9 SCIENCE: FORCE AND LAWS OF MOTION
  // ==========================================
  {
    titleMatcher: 'force and laws of motion',
    topics: [
      {
        topic: '1. Force: Balanced vs Unbalanced Forces',
        inBrief: 'Force is an external push or pull that can change the state of rest, motion, speed, direction, or shape of an object.',
        definition: 'Force is a vector quantity defined as an interaction that, when unopposed, changes or tends to change the state of rest or uniform rectilinear motion of a physical body.',
        detailedExplanation: 'Forces are classified as balanced or unbalanced. Balanced forces are equal in magnitude and opposite in direction such that their vector resultant is zero; they cannot change an object\'s velocity, though they can alter its shape (e.g. compressing a rubber ball). Unbalanced forces have a non-zero vector resultant and produce acceleration, changing either speed, direction, or both.',
        quickTake: 'Balanced forces: net force = 0 (no acceleration); Unbalanced forces: net force ≠ 0 (causes acceleration).',
        keyPoints: [
          'Net force of balanced forces is strictly 0 N; cannot change velocity.',
          'Net force of unbalanced forces is non-zero; accelerates the body in the direction of the net force.',
          'Friction is an opposing force exerted by surfaces in contact opposing relative motion.'
        ],
        formulaOrEquation: 'ΣF_balanced = 0 | ΣF_unbalanced = m·a ≠ 0'
      },
      {
        topic: '2. Newton\'s First Law of Motion',
        inBrief: 'An object remains in a state of rest or of uniform motion along a straight line unless acted upon by an external unbalanced force.',
        definition: 'Newton\'s First Law states that every physical body persists in its state of rest or uniform rectilinear motion unless compelled to modify that state by forces impressed upon it.',
        detailedExplanation: 'This law defines the qualitative concept of force. Prior to Galileo and Newton, thinkers believed continuous force was necessary to maintain motion. Galileo showed that an object moving on a frictionless horizontal plane continues to move with constant velocity indefinitely. Newton formalized this as the First Law, also known as the Law of Inertia. If net force ΣF = 0, acceleration a = 0, meaning an object at rest stays at rest, and an object in motion preserves constant velocity.',
        quickTake: 'No net force means no acceleration; objects naturally resist changes to their velocity.',
        keyPoints: [
          'Qualitative definition of force: Force is what changes an object\'s state of rest or motion.',
          'Galileo\'s inclined plane experiment: Ball rolling down an incline attains sufficient speed to reach equal height on an opposing incline.',
          'Safety seatbelts prevent forward injury by arresting passenger forward motion when car decelerates suddenly.'
        ],
        formulaOrEquation: 'If ΣF = 0 ⟹ a = 0 (v = constant or v = 0)'
      },
      {
        topic: '3. Inertia and Mass: Types of Inertia',
        inBrief: 'Inertia is the natural resistance of a body to any change in its state of rest or motion; mass is the quantitative measure of inertia.',
        definition: 'Inertia is the inherent physical property of matter by which it continues in its existing state of rest or uniform motion in a straight line unless that state is changed by an external force.',
        detailedExplanation: 'Inertia manifests in three distinct forms: 1) Inertia of Rest: Inability of a body to move from rest on its own (e.g. passengers jerk backward when a bus accelerates forward; beating a carpet causes dust to fall out). 2) Inertia of Motion: Inability of a moving body to stop on its own (e.g. passengers fall forward when brakes are applied suddenly; an athlete runs a few paces past the finish line). 3) Inertia of Direction: Inability of a body to change its direction of motion without external force (e.g. mud flying off rotating bicycle tires tangentially; passengers tilt outward when a car rounds a sharp bend). Mass is the quantitative measure: a 50 kg boulder has much greater inertia than a 1 kg stone.',
        quickTake: 'Heavier objects have more mass, therefore greater inertia and require larger forces to accelerate.',
        keyPoints: [
          'Three types: Inertia of Rest, Inertia of Motion, Inertia of Direction.',
          'Mass is a direct quantitative measure of inertia (Mass ∝ Inertia).',
          'Sharp turn on road: Passengers sway outward due to inertia of direction.'
        ],
        formulaOrEquation: 'Inertia ∝ Mass (m in kg)'
      },
      {
        topic: '4. Linear Momentum (p = mv)',
        inBrief: 'Momentum is the quantity of motion contained in a moving body, calculated as the product of its mass and velocity.',
        definition: 'Linear momentum is a vector physical quantity defined as the product of the inertial mass of an object and its instantaneous velocity vector.',
        detailedExplanation: 'The impact produced by a moving object depends on both how massive it is and how fast it travels. A slow-moving cricket ball can cause pain, but a tiny 10-gram bullet fired at 400 m/s can pierce steel because of enormous momentum. Momentum is directed in the direction of velocity. If a body of mass m is at rest (v = 0), its momentum is exactly zero.',
        quickTake: 'Product of mass and velocity; vector quantity, SI unit is kg·m/s.',
        keyPoints: [
          'Formula: p = m · v.',
          'SI unit: kilogram metre per second (kg·m/s).',
          'Vector quantity: Possesses both magnitude and direction identical to velocity.',
          'Zero momentum: Any stationary body has p = 0 regardless of its mass.'
        ],
        formulaOrEquation: 'p = m · v | SI Unit: kg·m/s'
      },
      {
        topic: '5. Newton\'s Second Law of Motion: Derivation of F = ma',
        inBrief: 'The rate of change of momentum of an object is directly proportional to the applied unbalanced force in the direction of the force.',
        definition: 'Newton\'s Second Law states that the time rate of change of linear momentum of an object is directly proportional to the impressed unbalanced force and takes place in the direction of that force.',
        detailedExplanation: 'Consider a body of mass m moving with initial velocity u. When an unbalanced force F acts for time t, velocity changes to v. Initial momentum p1 = mu, final momentum p2 = mv. Change in momentum Δp = mv - mu = m(v - u). Rate of change of momentum = m(v - u) / t. Since acceleration a = (v - u) / t, we have Rate of change of momentum = ma. By the Second Law: F ∝ ma, or F = k·ma. In the SI system, 1 Newton is defined as the force that produces an acceleration of 1 m/s² in a mass of 1 kg, setting k = 1. Therefore: F = ma.',
        quickTake: 'F = ma provides the quantitative definition of force; 1 Newton = 1 kg·m/s².',
        keyPoints: [
          'Derivation: F ∝ (mv - mu)/t ⟹ F ∝ m(v-u)/t ⟹ F = k·m·a ⟹ F = ma (with k=1).',
          '1 Newton (N): Force required to accelerate a 1 kg mass at 1 m/s².',
          'Catching cricket ball: A fielder pulls hands backward to increase time (t), reducing force (F) on hands since F = Δp / Δt.'
        ],
        formulaOrEquation: 'F = Δp / Δt = m(v - u)/t = m·a | 1 N = 1 kg·m/s²'
      },
      {
        topic: '6. Newton\'s Third Law of Motion: Action & Reaction',
        inBrief: 'To every action, there is always an equal and opposite reaction acting on two mutually interacting bodies.',
        definition: 'Newton\'s Third Law states that whenever one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body.',
        detailedExplanation: 'Forces in nature always occur in matched pairs: Action and Reaction. Crucially, action and reaction never act on the same body; they act on two different interacting bodies, meaning they never cancel each other out. Examples: 1) Walking on ground: Our feet push the ground backward (action); the ground pushes our feet forward (reaction). 2) Swimming: Swimmer pushes water backward; water pushes swimmer forward. 3) Rocket propulsion: High-speed exhaust gases expelled downward exert an equal upward thrust force on the rocket.',
        quickTake: 'Forces always occur in matched pairs (F_AB = -F_BA); they act on different bodies simultaneously.',
        keyPoints: [
          'F_AB = -F_BA (equal magnitude, opposite direction).',
          'Action and reaction act on two DIFFERENT bodies simultaneously; they never cancel each other.',
          'Rocket propulsion, swimming, rowing a boat, and walking all rely on Third Law action-reaction pairs.'
        ],
        formulaOrEquation: 'F_action = - F_reaction | F_12 = - F_21'
      },
      {
        topic: '7. Law of Conservation of Momentum & Recoil of Gun',
        inBrief: 'The total linear momentum of an isolated system remains constant if no external unbalanced force acts upon it.',
        definition: 'The Law of Conservation of Momentum states that in an isolated system where external resultant force is zero, the total vector momentum before interaction equals the total vector momentum after interaction.',
        detailedExplanation: 'Consider two colliding bodies of masses m1 and m2 with initial velocities u1 and u2. During collision for time t, body 1 exerts force F12 on body 2, and body 2 exerts force F21 on body 1. By Third Law, F12 = -F21. Using Second Law, m1(v1 - u1)/t = - m2(v2 - u2)/t. Simplifying gives: m1·u1 + m2·u2 = m1·v1 + m2·v2. In a gun firing a bullet: initially both are at rest (total p = 0). When fired: M_gun·v_recoil + m_bullet·v_bullet = 0. Therefore, recoil velocity v_recoil = - (m_bullet · v_bullet) / M_gun. Because the gun is much heavier than the bullet, its recoil speed is small but noticeable.',
        quickTake: 'Total momentum before collision = Total momentum after collision; explains gun recoil and rocket staging.',
        keyPoints: [
          'Condition: Isolated system with zero net external force (ΣF_ext = 0).',
          'Collision equation: m1·u1 + m2·u2 = m1·v1 + m2·v2.',
          'Recoil of Gun: v_recoil = - (m_bullet · v_bullet) / M_gun (negative sign shows backward motion).'
        ],
        formulaOrEquation: 'm1·u1 + m2·u2 = m1·v1 + m2·v2 | v_recoil = - (m_b · v_b) / M_gun'
      }
    ],
    keywords: [
      {
        keyword: 'Force',
        definition: 'An external agency in the form of a push or pull that produces or tends to produce acceleration in a body.',
        sentenceExplanation: 'Force is any push or pull that can make a stationary object move, stop a moving object, or change its speed and direction.',
        examContext: 'Vector quantity with SI unit Newton (N); 1 N = 1 kg·m/s².'
      },
      {
        keyword: 'Inertia',
        definition: 'The inherent property of a body by virtue of which it resists any change in its state of rest or uniform rectilinear motion.',
        sentenceExplanation: 'Inertia is an object\'s stubborn natural tendency to keep doing whatever it was already doing until pushed.',
        examContext: 'Qualitative property directly measured by mass; exists as inertia of rest, motion, and direction.'
      },
      {
        keyword: 'Momentum',
        definition: 'The vector quantity of motion contained in a moving object, given by the product of its mass and velocity.',
        sentenceExplanation: 'Momentum describes how much force it would take to stop a moving object, depending on both its mass and its speed.',
        examContext: 'Formula: p = mv; SI Unit: kg·m/s; conserved in isolated systems.'
      },
      {
        keyword: 'Newton (N)',
        definition: 'The SI derived unit of force that imparts an acceleration of 1 m/s² to a mass of 1 kg.',
        sentenceExplanation: 'One Newton is roughly the gentle downward gravitational pull felt when holding a medium-sized apple on your palm.',
        examContext: 'Must state: 1 N = 1 kg × 1 m/s².'
      },
      {
        keyword: 'Action-Reaction Pair',
        definition: 'Simultaneous, equal, and oppositely directed forces exerted between two mutually interacting bodies.',
        sentenceExplanation: 'Action and reaction are the two sides of every physical force: when you push against a wall, the wall pushes back on you with the exact same strength.',
        examContext: 'Crucial exam point: Action and reaction act on two DIFFERENT objects, so they never cancel each other.'
      },
      {
        keyword: 'Recoil Velocity',
        definition: 'The backward velocity acquired by a firearm upon discharging a projectile due to the conservation of momentum.',
        sentenceExplanation: 'Recoil velocity is the backward kick of a rifle into a shooter\'s shoulder caused when a bullet is pushed forward at high speed.',
        examContext: 'Formula: v_recoil = - (m_bullet · v_bullet) / M_gun; always negative indicating backward direction.'
      }
    ]
  },

  // ==========================================
  // CLASS 9 SCIENCE: GRAVITATION
  // ==========================================
  {
    titleMatcher: 'gravitation',
    topics: [
      {
        topic: '1. Universal Law of Gravitation',
        inBrief: 'Every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.',
        definition: 'Newton\'s Universal Law of Gravitation states that any two bodies in the universe attract each other with a force directly proportional to the product of their masses and inversely proportional to the square of the distance separating their centers.',
        detailedExplanation: 'Sir Isaac Newton formulated this law to unify celestial mechanics (planetary orbits around the Sun) with terrestrial observations (an apple falling from a tree). For two masses m1 and m2 separated by center-to-center distance r, gravitational force F = G·(m1·m2)/r². G is the Universal Gravitational Constant, experimentally measured by Henry Cavendish using a torsion balance as 6.674 × 10⁻¹¹ N·m²/kg². Because the force obeys an inverse-square relationship, doubling the separation distance cuts the gravitational pull to one-fourth (¼).',
        quickTake: 'F = G·(m1·m2)/r²; fundamental attractive force binding planets, stars, and keeping atmospheres bound to planets.',
        keyPoints: [
          'Universal Constant G = 6.673 × 10⁻¹¹ N·m²/kg² (remains constant everywhere in the cosmos).',
          'Inverse-Square Law: Gravitational attraction drops rapidly as distance squared (F ∝ 1/r²).',
          'Gravitational force is always purely attractive; it is never repulsive.'
        ],
        formulaOrEquation: 'F = G · (m1 · m2) / r² | G = 6.674 × 10⁻¹¹ N·m²/kg²'
      },
      {
        topic: '2. Free Fall & Acceleration Due to Gravity (g)',
        inBrief: 'Free fall is the motion of an object falling solely under the influence of gravity without any other forces or air resistance.',
        definition: 'Free fall is the unconstrained downward acceleration of a body under the sole influence of an astronomical body\'s gravitational field, where acceleration is independent of the falling object\'s mass.',
        detailedExplanation: 'When an object falls toward Earth solely under gravity, it is in free fall. The acceleration produced during free fall is called acceleration due to gravity, denoted by g. Equating F = m·g with F = G·(M·m)/R² gives g = G·M / R², where M is Earth\'s mass (5.97 × 10²⁴ kg) and R is Earth\'s radius (6.37 × 10⁶ m). On Earth\'s surface, g ≈ 9.8 m/s² (or ~9.81 m/s²). Because g depends only on Earth\'s mass and radius, all objects—whether a feather or an iron anvil—fall with the exact same acceleration in a vacuum.',
        quickTake: 'g = 9.8 m/s² on Earth\'s surface; independent of object mass, verified by Galileo\'s leaning tower thought experiment.',
        keyPoints: [
          'Formula: g = G·M / R²; independent of the falling body\'s mass (m).',
          'Variation with latitude: Earth is flattened at poles and bulges at equator (R_equator > R_pole), so g is maximum at poles and minimum at equator.',
          'Variation with altitude and depth: g decreases as we go above Earth\'s surface and decreases as we go deep inside Earth (g = 0 at Earth\'s center).'
        ],
        formulaOrEquation: 'g = (G · M) / R² ≈ 9.8 m/s² (Earth surface)'
      },
      {
        topic: '3. Mass vs Weight: Moon vs Earth',
        inBrief: 'Mass is the constant quantity of matter in an object; weight is the variable gravitational pull exerted on that mass by a planet.',
        definition: 'Mass is the scalar measure of an object\'s inertia; Weight is the downward vector force exerted on an object by the gravitational pull of a celestial body (W = mg).',
        detailedExplanation: 'Mass remains strictly invariant everywhere in the universe, measured using a physical beam balance in kilograms (kg). Weight is a force, measured using a spring balance in Newtons (N), and changes whenever gravitational field strength g changes. On the Moon, because the Moon\'s mass and radius are smaller (M_moon ≈ 1/100 M_earth, R_moon ≈ ¼ R_earth), acceleration due to gravity on the Moon is exactly one-sixth of Earth\'s gravity: g_moon = ⅙ g_earth ≈ 1.63 m/s². Consequently, an astronaut weighing 600 N on Earth weighs only 100 N on the Moon, although their mass remains exactly 60 kg.',
        quickTake: 'Mass is constant everywhere (kg); Weight is variable gravitational force W = mg (N); W_moon = ⅙ W_earth.',
        keyPoints: [
          'Mass: Scalar, constant everywhere, measured in kg, cannot be zero for matter.',
          'Weight: Vector, variable depending on location, measured in Newtons (N), becomes 0 in deep space or free fall.',
          'Weight on Moon: W_moon = ⅙ · W_earth because g_moon = ⅙ · g_earth.'
        ],
        formulaOrEquation: 'W = m · g | W_moon = ⅙ W_earth | 1 kg-wt = 9.8 N'
      },
      {
        topic: '4. Thrust and Pressure in Fluids',
        inBrief: 'Thrust is total force acting perpendicular to a surface; pressure is thrust exerted per unit area.',
        definition: 'Thrust is the net vector force applied normal (perpendicular) to a surface; Pressure is defined as the scalar ratio of perpendicular thrust force to the contact surface area (P = F / A).',
        detailedExplanation: 'The physical effect of a force depends on the area over which it is spread. A sharp knife cuts vegetables easily because its microscopic blade edge has a tiny surface area, concentrating applied force into enormous pressure. Conversely, camel feet are wide and flat to reduce pressure on desert sand, preventing sinking; heavy trucks have 10-14 wide tires; and school bags have wide straps to minimize painful shoulder pressure.',
        quickTake: 'Pressure = Thrust / Area; smaller area creates larger pressure for the exact same applied force.',
        keyPoints: [
          'Formula: Pressure P = Thrust / Area = F / A.',
          'SI Unit: Pascal (Pa), where 1 Pa = 1 N/m².',
          'Applications: Needles and nails have sharp pointed tips to maximize pressure; foundations of tall buildings are broad to minimize pressure.'
        ],
        formulaOrEquation: 'P = Thrust / Area = F / A | 1 Pa = 1 N/m²'
      },
      {
        topic: '5. Buoyancy & Archimedes\' Principle',
        inBrief: 'When a body is immersed in a fluid, it experiences an upward buoyant force equal to the weight of fluid displaced by the body.',
        definition: 'Archimedes\' Principle states that when a body is fully or partially submerged in a fluid at rest, it experiences an upward buoyant force (upthrust) equal in magnitude to the weight of the fluid displaced by the body.',
        detailedExplanation: 'Fluids exert pressure in all directions. Because fluid pressure increases with depth (P = h·ρ·g), the upward pressure on the bottom of a submerged object exceeds the downward pressure on its top. This differential pressure generates a net upward force called Buoyant Force or Upthrust (F_b = V·ρ_fluid·g). Archimedes\' Principle is the engineering foundation for: 1) Designing ships and submarines, 2) Hydrometers for measuring liquid density, and 3) Lactometers for testing milk purity.',
        quickTake: 'Upward buoyant force equals weight of displaced fluid (F_buoyant = V_displaced · ρ_fluid · g).',
        keyPoints: [
          'Archimedes\' Principle: Upward buoyant force = Weight of fluid displaced.',
          'Floatation condition: Body floats if average density < fluid density; sinks if body density > fluid density.',
          'Why iron ships float while iron nails sink: A hollow ship displaces a huge volume of water whose weight exceeds the ship\'s total weight.'
        ],
        formulaOrEquation: 'F_buoyant = V · ρ_fluid · g | Apparent Weight = Actual Weight - F_buoyant'
      },
      {
        topic: '6. Relative Density',
        inBrief: 'Relative density is the ratio of the density of a substance to the density of pure water at 4°C.',
        definition: 'Relative density is a dimensionless physical quantity defined as the ratio of the mass density of a substance to the mass density of pure water at 4°C (1000 kg/m³).',
        detailedExplanation: 'Density is mass per unit volume (ρ = m/V) with SI unit kg/m³. Pure water at 4°C has a density of 10³ kg/m³ (1 g/cm³). Relative density expresses how many times denser a substance is compared to water. Since it is a ratio of two identical physical dimensions, Relative Density has NO units. If relative density > 1, the substance sinks in water (e.g. iron RD ≈ 7.8, gold RD ≈ 19.3). If relative density < 1, the substance floats (e.g. ice RD ≈ 0.92, cork RD ≈ 0.24).',
        quickTake: 'Relative Density = Density of Substance / Density of Water; dimensionless ratio with no units.',
        keyPoints: [
          'Formula: Relative Density = ρ_substance / ρ_water (at 4°C).',
          'Pure ratio: Has no units and no physical dimensions.',
          'Density of water at 4°C: 1000 kg/m³ = 1 g/cm³.',
          'Gold has relative density 19.3 ⟹ Density of gold = 19.3 × 1000 = 19,300 kg/m³.'
        ],
        formulaOrEquation: 'Relative Density = ρ_substance / ρ_water(4°C) | No Units'
      }
    ],
    keywords: [
      {
        keyword: 'Universal Gravitational Constant (G)',
        definition: 'The fundamental physical constant defining the strength of gravitational interaction throughout the universe (6.674 × 10⁻¹¹ N·m²/kg²).',
        sentenceExplanation: 'Capital G is the universal cosmic constant that determines how strongly any two masses in the universe pull on each other.',
        examContext: 'Value 6.67 × 10⁻¹¹ N·m²/kg²; remains strictly constant everywhere in space, unlike g.'
      },
      {
        keyword: 'Acceleration Due to Gravity (g)',
        definition: 'The uniform acceleration experienced by any freely falling body near a celestial object solely due to its gravitational pull.',
        sentenceExplanation: 'Small g is the speed increase of 9.8 metres per second that a falling object gains with each passing second near Earth\'s surface.',
        examContext: 'Earth surface value 9.8 m/s²; varies with altitude, depth, and latitude; zero at Earth center.'
      },
      {
        keyword: 'Weight',
        definition: 'The downward gravitational force exerted on an object\'s mass by a celestial body (W = mg).',
        sentenceExplanation: 'Weight is the downward gravitational pull of the Earth holding your feet firmly against the floor, measured in Newtons.',
        examContext: 'Vector quantity measured in Newtons (N); becomes zero during free fall or in deep space.'
      },
      {
        keyword: 'Buoyant Force (Upthrust)',
        definition: 'The resultant upward hydrostatic force exerted by a fluid on a body immersed in it.',
        sentenceExplanation: 'Buoyant force is the upward lifting sensation you feel when trying to push a hollow plastic ball under swimming pool water.',
        examContext: 'Equals weight of displaced fluid (Archimedes\' Principle); dependent on fluid density and displaced volume.'
      },
      {
        keyword: 'Pascal (Pa)',
        definition: 'The SI unit of pressure equivalent to one Newton of perpendicular force applied uniformly across an area of one square metre.',
        sentenceExplanation: 'One Pascal is a tiny pressure unit, roughly equal to the light weight of a single dollar bill lying flat on a table.',
        examContext: '1 Pa = 1 N/m²; 1 atmosphere ≈ 101,325 Pa.'
      }
    ]
  },

  // ==========================================
  // COLLEGE: DATA STRUCTURES & ALGORITHMS (R20/R23)
  // ==========================================
  {
    titleMatcher: 'linear data structures: arrays & linked lists',
    topics: [
      {
        topic: '1. Abstract Data Types (ADT)',
        inBrief: 'An ADT is a mathematical model for data types where the type is defined by its behavior (operations) from the user point of view, independent of implementation.',
        definition: 'An Abstract Data Type (ADT) is a formal mathematical specification of a set of data objects and the operations that can be performed on them, completely decoupled from underlying physical memory representations.',
        detailedExplanation: 'ADTs enforce encapsulation and information hiding. The user interacts exclusively with the public operational interface (such as push, pop, insert, delete) without needing to know whether the structure is physically stored using dynamic heap pointers, static contiguous arrays, or balanced trees. In C++, classes and templates realize ADTs, allowing algorithms to operate polymorphically across varying storage topologies.',
        quickTake: 'Separation of what operations are supported from how they are physically coded in memory.',
        keyPoints: [
          'Encapsulation: Users see only the operations, hiding algorithmic complexities.',
          'Modularity: Internal implementation can be upgraded without breaking external code.',
          'Classic ADTs: List ADT, Stack ADT, Queue ADT, Tree ADT, Graph ADT.'
        ],
        formulaOrEquation: 'ADT = Interface (Operations) + Axioms (Behavioral Rules)'
      },
      {
        topic: '2. Singly Linked Lists',
        inBrief: 'A singly linked list is a linear sequence of nodes where each node contains data and a forward pointer to the subsequent node in memory.',
        definition: 'A Singly Linked List is a dynamic linear data structure composed of self-referential nodes, each encapsulating a data field and a single next pointer referencing the subsequent node in heap memory, terminated by a NULL pointer.',
        detailedExplanation: 'Unlike static arrays, singly linked lists do not require contiguous memory allocation. Nodes are allocated dynamically at runtime on the heap using malloc() or the new operator. Prepending a node at the head is achieved in O(1) time by pointing the new node\'s next pointer to the current head and updating the head pointer. However, random access is impossible; traversing to the k-th element requires sequential pointer following in O(k) time.',
        quickTake: 'Dynamic heap allocation with forward pointers; O(1) head insertion/deletion, O(n) linear search.',
        keyPoints: [
          'Node structure: struct Node { int data; struct Node* next; };',
          'Head insertion: O(1) time complexity; requires no element shifting.',
          'Deletion: Requires tracking the predecessor node to bypass the deleted node and free memory.'
        ],
        formulaOrEquation: 'Node = { Data, *Next } | Insertion at Head: O(1) | Search: O(n)'
      },
      {
        topic: '3. Doubly Linked Lists',
        inBrief: 'A doubly linked list is a sequence of nodes where each node contains data, a forward pointer (next), and a backward pointer (prev).',
        definition: 'A Doubly Linked List is a bidirectional linear collection of nodes wherein each node contains a payload and two self-referential pointers: prev referencing the anterior node and next referencing the posterior node.',
        detailedExplanation: 'Doubly linked lists eliminate the unidirectional limitation of singly lists. They permit bi-directional traversal (forward and backward) and allow O(1) deletion of an arbitrary node when a direct pointer to that node is given, since the predecessor can be accessed immediately via node->prev without traversing from the head. The tradeoff is increased memory consumption (two pointers per node: 16 bytes on 64-bit systems) and additional pointer manipulations during insertions and deletions.',
        quickTake: 'Two pointers per node (prev and next); allows bidirectional traversal and O(1) node deletion with pointer.',
        keyPoints: [
          'Node structure: struct Node { struct Node* prev; int data; struct Node* next; };',
          'Bidirectional traversal: Can navigate backwards from tail or forwards from head.',
          'O(1) deletion given pointer: node->prev->next = node->next; node->next->prev = node->prev; free(node).'
        ],
        formulaOrEquation: 'Node = { *Prev, Data, *Next } | Memory Overhead: 2 pointers per node'
      },
      {
        topic: '4. Circular Linked Lists',
        inBrief: 'A circular linked list is a linked list where the last node points back to the first node, forming an unbroken closed loop.',
        definition: 'A Circular Linked List is a linked variation where no NULL pointer terminates the structure; instead, the next pointer of the final node references the head node of the list.',
        detailedExplanation: 'Circular linked lists can be either singly or doubly circular. Because there is no NULL pointer, any node can serve as a starting point for full list traversal. Termination of loops is detected by checking if the pointer returns to the starting node (temp->next == head). Circular lists are fundamental in operating systems for round-robin CPU process scheduling, multiplayer board games where turns cycle continuously, and media playlists that loop playback.',
        quickTake: 'No NULL pointer; final node links back to the head; ideal for Round-Robin process scheduling.',
        keyPoints: [
          'Loop condition: temp->next == head signifies full loop traversal completion.',
          'Tail pointer optimization: Maintaining a tail pointer allows O(1) insertion at both head (tail->next) and tail.',
          'Applications: Round-robin CPU scheduling, buffer loops, Josephus problem.'
        ],
        formulaOrEquation: 'Tail->Next = Head (Unbroken Loop Condition)'
      },
      {
        topic: '5. Polynomial Representation & Addition using Linked Lists',
        inBrief: 'Polynomials are modeled as linked lists where each node represents a non-zero term containing a coefficient, an exponent, and a next link.',
        definition: 'Polynomial linked list modeling is a sparse algebraic storage technique where every non-zero term c_i · x^(e_i) is represented as a node ordered in descending degree sequence.',
        detailedExplanation: 'Modeling sparse polynomials (e.g. 7x¹⁰⁰⁰ + 3x + 5) via arrays requires allocating 1001 array indices, wasting over 99% of memory. Linked lists store only non-zero terms. Polynomial addition is performed in O(m + n) time by simultaneously traversing two polynomial lists using two pointers. At each step, exponents are compared: if exponents match, coefficients are summed and appended to the result list; otherwise, the node with the higher exponent is inserted first.',
        quickTake: 'Efficient sparse polynomial representation; addition performed in O(m + n) linear time by comparing exponents.',
        keyPoints: [
          'Node structure: struct PolyNode { float coeff; int expo; struct PolyNode* next; };',
          'Memory efficiency: Allocates storage solely for non-zero algebraic terms.',
          'Addition logic: Compare p1->expo and p2->expo; sum coefficients if equal; advance larger exponent first.'
        ],
        formulaOrEquation: 'Node = { coeff, expo, *next } | Addition Time Complexity: O(m + n)'
      },
      {
        topic: '6. Asymptotic Notation: Big-O, Big-Omega, Big-Theta',
        inBrief: 'Asymptotic notation describes algorithm performance and growth rate as input size n grows toward infinity.',
        definition: 'Asymptotic notations are formal mathematical tools used to define the upper bound (Big-O), lower bound (Big-Ω), and asymptotically tight bound (Big-Θ) of algorithm runtime and memory complexity.',
        detailedExplanation: '1) Big-O Notation (Worst-Case Upper Bound): f(n) = O(g(n)) if there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n0. It guarantees that the algorithm will never take more than this time ceiling. 2) Big-Omega Notation (Best-Case Lower Bound): f(n) = Ω(g(n)) if there exist constants c and n0 such that 0 ≤ c·g(n) ≤ f(n) for all n ≥ n0. 3) Big-Theta Notation (Tight Envelope): f(n) = Θ(g(n)) if f(n) is bounded both above and below by g(n).',
        quickTake: 'Big-O: upper bound (worst-case); Big-Omega: lower bound (best-case); Big-Theta: tight bound (exact growth).',
        keyPoints: [
          'Standard complexity hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!).',
          'Constants and lower-order terms are ignored because dominant term governs behavior as n → ∞.',
          'Space Complexity: Evaluates auxiliary heap and call stack memory consumed beyond input data.'
        ],
        formulaOrEquation: 'O(g(n)): f(n) ≤ c·g(n) | Ω(g(n)): f(n) ≥ c·g(n) | Θ: c1·g(n) ≤ f(n) ≤ c2·g(n)'
      }
    ],
    keywords: [
      {
        keyword: 'Abstract Data Type (ADT)',
        definition: 'A specification of a data type and its operations that hides the implementation details from the user.',
        sentenceExplanation: 'An ADT is like a car dashboard that lets you drive with a steering wheel and pedals without needing to know the exact gear ratios inside the transmission.',
        examContext: 'Must emphasize: separates operational interface from physical implementation.'
      },
      {
        keyword: 'Singly Linked List',
        definition: 'A linear data structure where each node stores a data value and a pointer to the next node in memory.',
        sentenceExplanation: 'A singly linked list is like a treasure hunt where each clue contains a piece of treasure and directions to where the next clue is hidden.',
        examContext: 'Head insertion O(1); search O(n); sequential traversal only.'
      },
      {
        keyword: 'Doubly Linked List',
        definition: 'A linear list of nodes where each node contains two pointers, referencing both the previous and next nodes.',
        sentenceExplanation: 'A doubly linked list is like a two-way street that allows you to walk forward or walk backward between connected houses.',
        examContext: 'Allows O(1) deletion when node pointer is given; consumes extra memory for prev pointers.'
      },
      {
        keyword: 'Circular Linked List',
        definition: 'A linked list variant in which the last node references the first node, creating a continuous loop with no null termination.',
        sentenceExplanation: 'A circular linked list is like a carousel where reaching the end brings you smoothly back to the beginning without stopping.',
        examContext: 'Key application: Round-robin scheduling in Operating Systems; loop condition is temp->next == head.'
      },
      {
        keyword: 'Big-O Notation',
        definition: 'A mathematical notation describing the limiting behavior of an algorithm runtime as input size tends to infinity, providing an asymptotic upper bound.',
        sentenceExplanation: 'Big-O notation tells engineers the absolute worst-case scenario for how slow an algorithm can run when handling massive datasets.',
        examContext: 'Must state formal definition: 0 ≤ f(n) ≤ c·g(n) for all n ≥ n0.'
      }
    ]
  },
  ...CLASS_9_SCIENCE_KNOWLEDGE,
  ...CLASS_10_SCIENCE_KNOWLEDGE,
  ...COLLEGE_AND_AI_KNOWLEDGE
];

// Helper lookup function to enrich any unit automatically with robust and precise matching
export function getEnrichedKnowledge(unitTitle: string): ChapterKnowledge | undefined {
  const normalized = unitTitle.toLowerCase().trim();
  
  // 1. Exact match
  const exact = UNIVERSAL_SYLLABUS_KNOWLEDGE.find(k => k.titleMatcher === normalized);
  if (exact) return exact;

  // 2. Unit title contains the chapter matcher (e.g., "Unit 1: Chemical Reactions and Equations" contains "chemical reactions")
  const subMatch = UNIVERSAL_SYLLABUS_KNOWLEDGE.find(k => normalized.includes(k.titleMatcher));
  if (subMatch) return subMatch;

  // 3. Distinctive keyword token matching scored by count (filters out noise like 'unit', 'chapter')
  const stopwords = new Set(['unit', 'chapter', 'cbse', 'notes', 'revision', 'part', 'core', 'foundation']);
  const titleTokens = normalized
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 4 && !stopwords.has(w));
  
  let bestMatch: ChapterKnowledge | undefined;
  let maxMatchedTokens = 0;

  for (const k of UNIVERSAL_SYLLABUS_KNOWLEDGE) {
    const matcherTokens = k.titleMatcher
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 4 && !stopwords.has(w));
    
    const matchCount = titleTokens.filter(t => matcherTokens.includes(t)).length;
    if (matchCount > maxMatchedTokens) {
      maxMatchedTokens = matchCount;
      bestMatch = k;
    }
  }

  return maxMatchedTokens > 0 ? bestMatch : undefined;
}
