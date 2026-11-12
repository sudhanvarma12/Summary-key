import { ChapterKnowledge } from './universalSyllabusKnowledge';

export const COLLEGE_ENGINEERING_EXTRA_KNOWLEDGE: ChapterKnowledge[] = [
  // ==========================================
  // 1. OPERATING SYSTEMS: PROCESS MANAGEMENT & SCHEDULING
  // ==========================================
  {
    titleMatcher: 'operating systems',
    topics: [
      {
        topic: '1. Process Lifecycle & Process Control Block (PCB)',
        inBrief: 'A process is an active program in execution, managed by the OS kernel using a PCB data structure that tracks its state, registers, and memory.',
        definition: 'A Process is formally defined as an instance of an executable program in execution, encompassing the current program counter value, CPU register states, stack pointer, data segment, and a dedicated Process Control Block (PCB) maintained within kernel space.',
        detailedExplanation: 'The OS distinguishes a passive program (stored on secondary disk) from an active process (loaded into main memory with allocated resources). A process transitions through five primary lifecycle states: New (created), Ready (waiting in memory queue for CPU dispatch), Running (executing on processor core), Waiting/Blocked (suspended waiting for I/O completion or event signal), and Terminated (execution completed, resources reclaimed). The PCB stores Process ID (PID), program counter, CPU registers, scheduling priority, memory management limits (base/limit registers), and open file descriptors. Context switching occurs when the OS kernel saves the state of an existing process in its PCB and restores another scheduled process state.',
        quickTake: 'Process is a program in execution; 5 states: New, Ready, Running, Waiting, Terminated; PCB stores PID, Program Counter, and CPU registers.',
        keyPoints: [
          'State Transitions: Ready -> Running (Dispatcher assigns CPU); Running -> Ready (Interrupt/Time Slice expired); Running -> Blocked (I/O request).',
          'Context Switch Overhead: CPU performs pure administrative bookkeeping during state save/restore with zero computational progress.',
          'Thread vs Process: A thread is a lightweight execution unit within a process sharing code, data, and OS resources but maintaining its own stack and registers.'
        ],
        formulaOrEquation: 'CPU Overhead Time = T_context_switch × (Frequency of Switches)'
      },
      {
        topic: '2. CPU Scheduling Algorithms (FCFS, SJF, Round Robin)',
        inBrief: 'CPU schedulers allocate processor time to ready processes to maximize CPU utilization and throughput while minimizing turnaround and waiting time.',
        definition: 'CPU Scheduling is the kernel subsystem mechanism that selects a process from the ready queue for execution on available CPU cores according to predefined optimality criteria.',
        detailedExplanation: 'Key performance metrics: 1) Turnaround Time (TAT) = Completion Time - Arrival Time; 2) Waiting Time (WT) = Turnaround Time - Burst Time; 3) Response Time = Time of first CPU allocation - Arrival Time. Primary algorithms:\n- First-Come, First-Served (FCFS): Non-preemptive; susceptible to the Convoy Effect where small processes wait behind a CPU-bound giant.\n- Shortest Job First (SJF): Provably optimal average waiting time; preemptive variant is Shortest Remaining Time First (SRTF); requires predicting future burst times.\n- Round Robin (RR): Preemptive algorithm for time-sharing systems where each process receives a discrete quantum q. If q is too large, RR degrades to FCFS; if too small, context-switch overhead dominates.',
        quickTake: 'TAT = Completion - Arrival; WT = TAT - Burst; SJF minimizes average waiting time; Round Robin prevents starvation using time quantums.',
        keyPoints: [
          'Convoy Effect: In FCFS, short processes suffer long delays waiting for long process burst to finish.',
          'SRTF: Preemptive shortest job scheduler that replaces running process if a new process arrives with smaller remaining burst.',
          'Optimal Quantum in RR: Set quantum large enough that 80% of CPU bursts are shorter than the quantum.'
        ],
        formulaOrEquation: 'Turnaround Time TAT = C.T. - A.T. | Waiting Time W.T. = TAT - B.T.'
      },
      {
        topic: '3. Deadlocks & Banker\'s Algorithm',
        inBrief: 'Deadlock is a permanent stall where competing processes hold resources while waiting for resources held by each other.',
        definition: 'A Deadlock is an operating system state in which two or more concurrent processes are unable to proceed because each holds a shared non-shareable resource while waiting for another resource held by another process in a circular chain.',
        detailedExplanation: 'Coffman\'s Four Necessary Conditions for Deadlock:\n1. Mutual Exclusion: At least one resource must be held in a non-shareable mode.\n2. Hold and Wait: A process must hold at least one resource and request additional resources held by other processes.\n3. No Preemption: Resources cannot be forcibly seized from a process; only voluntarily released upon completion.\n4. Circular Wait: A closed loop {P0, P1, ..., Pn} exists where P0 waits for P1, and Pn waits for P0.\n\nBanker\'s Algorithm (Dijkstra): A deadlock avoidance algorithm that checks whether granting a request leaves the system in a Safe State. A state is safe if there exists a Safe Sequence <P1, P2, ..., Pn> where each process can satisfy its maximum demand using currently available resources plus resources freed by preceding processes.',
        quickTake: 'Deadlock requires 4 Coffman conditions; Banker\'s Algorithm avoids deadlocks by ensuring system never transitions into an unsafe state.',
        keyPoints: [
          'Safety Matrix: Need[i][j] = Max[i][j] - Allocation[i][j].',
          'Resource Allocation Graph (RAG): If RAG has no cycles, no deadlock exists; if cycles exist with single resource instances, deadlock is guaranteed.',
          'Deadlock Handling Strategies: Prevention (negate 1 of 4 conditions), Avoidance (Banker\'s Algorithm), Detection & Recovery, or Ignorance (Ostrich Algorithm).'
        ],
        formulaOrEquation: 'Need[i][j] = Max[i][j] - Allocation[i][j] | Safe State Condition: Need ≤ Available'
      },
      {
        topic: '4. Virtual Memory & Paging Mechanisms',
        inBrief: 'Virtual memory decouples logical process memory from physical RAM, using page tables and TLBs to map virtual pages to physical frames.',
        definition: 'Virtual Memory is a memory management architecture that provides an idealized, contiguous address space to application processes by dynamically translating virtual addresses into non-contiguous physical RAM addresses via hardware-assisted Paging and Segmentation.',
        detailedExplanation: 'Logical memory is partitioned into fixed-size blocks called Pages; physical RAM is divided into equal-sized blocks called Frames. The Memory Management Unit (MMU) uses a Page Table to translate Logical Address (Page Number p, Offset d) into Physical Address (Frame Number f, Offset d). When a requested page is not resident in physical RAM, the MMU triggers a Page Fault interrupt. The OS pauses the thread, fetches the page from backing store (swap disk), updates the Page Table valid bit, and restarts the instruction. Translation Lookaside Buffers (TLBs) cache recent translations in high-speed associative hardware to achieve near 1-cycle lookups.',
        quickTake: 'Logical pages map to physical frames via Page Tables; Page Fault occurs when page is absent in RAM; TLB caches translations for fast lookups.',
        keyPoints: [
          'Address Translation: Virtual Address = (Page Number p, Offset d) ⟹ Physical Address = (Frame Number f, Offset d).',
          'Effective Memory Access Time (EMAT) = Hit_Ratio × (TLB + RAM) + (1 - Hit_Ratio) × (TLB + 2·RAM).',
          'Page Replacement Algorithms: FIFO (suffers Belady\'s Anomaly), LRU (Least Recently Used, optimal practical approximation), and Optimal (clairvoyant minimum).'
        ],
        formulaOrEquation: 'EMAT = h·(t_tlb + t_mem) + (1 - h)·(t_tlb + 2·t_mem) | Offset d remains constant'
      }
    ],
    keywords: [
      {
        keyword: 'Process Control Block (PCB)',
        definition: 'A kernel data structure containing all state metadata required to identify, schedule, and execute a process.',
        sentenceExplanation: 'A PCB is like an identification passport for a computer program that holds its identity number, current progress, and allocated memory.',
        examContext: 'Must enumerate: PID, Program Counter, CPU Registers, Memory Limits, Open Files list.'
      },
      {
        keyword: 'Context Switching',
        definition: 'The procedure of saving the execution state of an active process and restoring the state of another scheduled process.',
        sentenceExplanation: 'Context switching is like a chef bookmarking one recipe card before switching tasks to stir another boiling pot on the stove.',
        examContext: 'Pure CPU overhead; must state that no user work executes during switch duration.'
      },
      {
        keyword: 'Belady\'s Anomaly',
        definition: 'The counterintuitive phenomenon in FIFO page replacement where increasing the number of allocated memory frames causes an increase in page faults.',
        sentenceExplanation: 'Belady\'s anomaly is like buying a larger dining table only to find that it strangely increases the number of times you drop dishes on the floor.',
        examContext: 'Applies specifically to FIFO; does NOT affect stack algorithms like LRU or Optimal.'
      }
    ]
  },

  // ==========================================
  // 2. DATABASE MANAGEMENT SYSTEMS (DBMS)
  // ==========================================
  {
    titleMatcher: 'database',
    topics: [
      {
        topic: '1. Relational Model & Normalization (1NF to BCNF)',
        inBrief: 'Normalization systematically eliminates data redundancy, update anomalies, and inconsistent dependencies by decomposing relations.',
        definition: 'Normalization is a formal database design methodology based on Functional Dependencies (FDs) that decomposes relational tables to eliminate insertion, deletion, and update anomalies while preserving dependencies and lossless joins.',
        detailedExplanation: 'Anomalies in unnormalized databases: 1) Insertion anomaly (cannot add child record without dummy parent data); 2) Deletion anomaly (deleting one attribute inadvertently deletes unrelated entity info); 3) Update anomaly (updating an attribute requires changing multiple redundant tuples). Normal Forms:\n- 1NF: All attribute values must be atomic (no multivalued attributes or repeating groups).\n- 2NF: In 1NF and no non-prime attribute is partially dependent on any candidate key (eliminates partial dependency X -> A where X ⊂ Candidate Key).\n- 3NF: In 2NF and no non-prime attribute is transitively dependent on a candidate key (for every X -> A, either X is a superkey or A is a prime attribute).\n- BCNF (Boyce-Codd NF): Strict 3NF where for every functional dependency X -> A, X must be a superkey.',
        quickTake: '1NF eliminates repeating groups; 2NF removes partial key dependencies; 3NF removes transitive dependencies; BCNF requires every determinant to be a superkey.',
        keyPoints: [
          'Prime Attribute: An attribute that is a member of any candidate key of the relation.',
          'Lossless Join Property: A decomposition R1, R2 of R is lossless if and only if R1 ∩ R2 -> R1 or R1 ∩ R2 -> R2.',
          'BCNF vs 3NF: BCNF achieves zero redundancy but does not always preserve functional dependencies, whereas 3NF always guarantees dependency preservation.'
        ],
        formulaOrEquation: '3NF Rule: For X -> Y, X is Super Key OR Y is Prime Attribute | BCNF: X MUST be Super Key'
      },
      {
        topic: '2. ACID Properties & Transaction Processing',
        inBrief: 'ACID properties guarantee that database transactions execute reliably and maintain database integrity despite system crashes or concurrent access.',
        definition: 'A Transaction is a logical unit of database processing that includes one or more database access operations (read, write), adhering strictly to the ACID guarantees of Atomicity, Consistency, Isolation, and Durability.',
        detailedExplanation: 'The four ACID pillars:\n- Atomicity (All-or-Nothing): Managed by the Recovery Manager using write-ahead logging (WAL); either all transaction operations complete successfully (COMMIT) or all intermediate changes are rolled back (ABORT/ROLLBACK).\n- Consistency: Preserves explicit database integrity constraints (foreign keys, check constraints, domain ranges); a transaction transforms database from one valid state to another.\n- Isolation: Managed by Concurrency Control subsystem; concurrent transactions execute as if they were running serially without interfering with one another.\n- Durability: Once a transaction commits, its updates persist permanently in non-volatile storage even in the event of immediate power failure.',
        quickTake: 'Atomicity (all-or-nothing via rollback), Consistency (preserves constraints), Isolation (concurrency control), Durability (persists after commit).',
        keyPoints: [
          'Concurrency Issues: Dirty Read (reading uncommitted data), Non-repeatable Read (modified values between reads), Phantom Read (new rows inserted during query).',
          'Serializability: The gold standard for concurrency; a concurrent schedule is conflict serializable if its precedence graph has no cycles.',
          'Two-Phase Locking (2PL): Growing phase (locks acquired, none released) and Shrinking phase (locks released, none acquired); guarantees conflict serializability.'
        ],
        formulaOrEquation: 'Conflict Equivalence: Precedence Graph has NO directed cycles ⟹ Conflict Serializable'
      }
    ],
    keywords: [
      {
        keyword: 'Functional Dependency (FD)',
        definition: 'A constraint between two sets of attributes in a relational database, where value of X uniquely determines value of Y (X -> Y).',
        sentenceExplanation: 'A functional dependency is like a student registration number uniquely determining the student\'s full legal name in the college registry.',
        examContext: 'Core notation: X -> Y; must state Armstrong\'s Axioms (Reflexivity, Augmentation, Transitivity).'
      },
      {
        keyword: 'Two-Phase Locking (2PL)',
        definition: 'A concurrency control protocol requiring transactions to acquire all locks in a growing phase before releasing any locks in a shrinking phase.',
        sentenceExplanation: 'Two-phase locking is like shopping in a store where you must collect all items in your cart first and cannot put anything back once you reach checkout.',
        examContext: 'Guarantees conflict serializability; Strict 2PL holds exclusive locks until COMMIT to prevent cascading rollbacks.'
      }
    ]
  },

  // ==========================================
  // 3. COMPUTER NETWORKS: OSI LAYERS & TCP/IP
  // ==========================================
  {
    titleMatcher: 'computer networks',
    topics: [
      {
        topic: '1. OSI 7-Layer Model vs TCP/IP Protocol Suite',
        inBrief: 'The OSI model establishes a theoretical 7-layer architecture for open communications, implemented practically by the 4-layer TCP/IP Internet stack.',
        definition: 'The Open Systems Interconnection (OSI) model is an ISO standard reference model dividing network telecommunication into seven modular functional layers, with encapsulation and decapsulation occurring at each abstraction boundary.',
        detailedExplanation: 'OSI 7 Layers from bottom to top:\n1. Physical: Transmission of raw binary bitstreams over physical copper, fiber, or wireless medium (voltages, pinouts, hubs).\n2. Data Link: Hop-to-hop frame delivery, MAC addressing, error detection (CRC), and flow control (Ethernet, Wi-Fi 802.11).\n3. Network: Logical end-to-end packet routing and IP host addressing (IPv4, IPv6, ICMP, OSPF, BGP).\n4. Transport: End-to-end process-to-process communication, port multiplexing, reliability, flow control, and segmentation (TCP, UDP).\n5. Session: Establishes, manages, and terminates presentation dialog sessions.\n6. Presentation: Data translation, ASCII/Unicode encoding, encryption/decryption (TLS/SSL), and compression.\n7. Application: User-facing network services and protocols (HTTP/HTTPS, DNS, SMTP, FTP, SSH).\n\nThe TCP/IP suite combines Session and Presentation into Application, maintaining 4 operational layers: Network Access, Internet, Transport, and Application.',
        quickTake: 'OSI has 7 layers: Physical (bits), Data Link (frames), Network (packets), Transport (segments), Session, Presentation, Application (data).',
        keyPoints: [
          'Data Encapsulation: Application Data -> Transport Segment (add port) -> Network Packet (add IP) -> Datalink Frame (add MAC & CRC) -> Bits.',
          'TCP vs UDP: TCP is connection-oriented, reliable, byte-stream with 3-way handshake; UDP is connectionless, unreliable, low-overhead datagram.',
          'Port Numbers: Well-known ports (0-1023): HTTP 80, HTTPS 443, DNS 53, SSH 22, SMTP 25.'
        ],
        formulaOrEquation: 'PDU Hierarchy: Data (App) ⟹ Segment (Trans) ⟹ Packet (Net) ⟹ Frame (Data Link) ⟹ Bits (Phys)'
      },
      {
        topic: '2. IP Addressing, Subnetting & CIDR',
        inBrief: 'IP addressing provides hierarchical logical identification for devices across networks, divided into Network ID and Host ID via subnet masks.',
        definition: 'An Internet Protocol (IP) address is a numerical label assigned to every device connected to a computer network that uses the Internet Protocol for communication, governed by Classful (Class A-E) or Classless Inter-Domain Routing (CIDR) notation.',
        detailedExplanation: 'IPv4 addresses are 32 bits long, represented as 4 octets in dotted-decimal notation (e.g. 192.168.1.1). Subnetting borrows bits from the host portion to create smaller, manageable subnets, reducing broadcast domains and saving address space.\nIn CIDR notation (/n), the prefix n indicates the number of continuous 1s in the subnet mask. The remaining (32 - n) bits determine the number of available host addresses per subnet: 2^(32 - n) - 2 (subtracting 2 for the Network Address and Broadcast Address).\nExample for /26: Subnet mask is 255.255.255.192. Host bits = 32 - 26 = 6 bits. Usable hosts = 2^6 - 2 = 64 - 2 = 62 usable host IPs.',
        quickTake: 'IPv4 has 32 bits; CIDR /n defines network bits; usable hosts per subnet = 2^(32 - n) - 2 (reserves network and broadcast IPs).',
        keyPoints: [
          'Network Address: All host bits set to 0 (identifies subnet network).',
          'Broadcast Address: All host bits set to 1 (broadcasts to all hosts on subnet).',
          'Private IP Ranges: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), 192.168.0.0/16 (Class C) - non-routable on public Internet.'
        ],
        formulaOrEquation: 'Usable Hosts = 2^(32 - Prefix_Length) - 2 | Subnet Mask = n consecutive 1s'
      }
    ],
    keywords: [
      {
        keyword: 'TCP 3-Way Handshake',
        definition: 'The synchronization process used by TCP to establish a reliable, full-duplex connection between client and server (SYN -> SYN-ACK -> ACK).',
        sentenceExplanation: 'The TCP handshake is like a polite phone call where you say "Can you hear me?", the other person replies "Yes, I hear you, can you hear me?", and you confirm "Yes, let\'s talk".',
        examContext: 'Must illustrate: Step 1 (Client sends SYN seq=x); Step 2 (Server responds SYN-ACK seq=y, ack=x+1); Step 3 (Client sends ACK ack=y+1).'
      },
      {
        keyword: 'Address Resolution Protocol (ARP)',
        definition: 'A network communication protocol used to discover the Data Link MAC address associated with a given Network IP address.',
        sentenceExplanation: 'ARP is like calling out a student\'s name in a classroom and having them raise their hand so you know their physical seat location.',
        examContext: 'Operates between Network and Data Link layers; uses broadcast request and unicast reply.'
      }
    ]
  },

  // ==========================================
  // 4. BASIC ELECTRICAL & ELECTRONICS (BEEE)
  // ==========================================
  {
    titleMatcher: 'electrical',
    topics: [
      {
        topic: '1. Kirchhoff\'s Laws & Network Theorems',
        inBrief: 'Fundamental electrical principles for analyzing DC and AC linear circuits using conservation of charge and energy.',
        definition: 'Kirchhoff\'s Current Law (KCL) and Voltage Law (KVL) are conservation axioms governing electrical networks: the algebraic sum of currents at a node is zero, and the algebraic sum of potential differences around a closed loop is zero.',
        detailedExplanation: 'Kirchhoff\'s Laws:\n- KCL (Conservation of Electric Charge): Σ I_in = Σ I_out at any junction node. Charge does not accumulate in a circuit node.\n- KVL (Conservation of Energy): Σ V = 0 around any closed mesh loop. The energy gained per unit charge equals the energy dissipated across resistive elements.\n\nNetwork Theorems:\n- Thevenin\'s Theorem: Any linear two-terminal circuit can be replaced by an equivalent circuit containing a single voltage source V_th in series with a resistor R_th.\n- Norton\'s Theorem: Dual of Thevenin\'s; any linear network can be replaced by a single current source I_n in parallel with resistance R_n (where R_n = R_th and I_n = V_th / R_th).\n- Maximum Power Transfer Theorem: Maximum power is transferred from source to load when load resistance equals Thevenin source resistance: R_L = R_th. Maximum efficiency is 50%.',
        quickTake: 'KCL: currents at a node sum to zero (charge); KVL: voltages in a loop sum to zero (energy); Thevenin replaces network with V_th in series with R_th.',
        keyPoints: [
          'V_th is the open-circuit voltage across load terminals (R_L removed).',
          'R_th is the equivalent resistance across open load terminals with all independent voltage sources shorted and current sources open.',
          'Maximum Power Delivered: P_max = V_th² / (4 · R_th).'
        ],
        formulaOrEquation: 'KCL: Σ I = 0 | KVL: Σ V = 0 | Max Power: P_max = V_th² / (4·R_th) when R_L = R_th'
      },
      {
        topic: '2. PN Junction Diode & Full-Wave Rectifiers',
        inBrief: 'PN diodes allow unidirectional current flow; rectifiers convert alternating current (AC) into unidirectional direct current (DC).',
        definition: 'A PN Junction Diode is a two-terminal semiconductor device formed by joining p-type and n-type silicon or germanium crystals, characterized by an asymmetric non-linear current-voltage characteristic governed by the Shockley diode equation.',
        detailedExplanation: 'Operation:\n- Forward Bias (p connected to positive, n to negative): Reduces depletion region width and barrier potential (0.7V for Silicon, 0.3V for Germanium), allowing majority charge carriers to cross freely, producing high forward current.\n- Reverse Bias (p to negative, n to positive): Widens depletion region; only tiny reverse saturation current I_s flows due to minority carriers until breakdown voltage (Zener or Avalanche) is reached.\n\nRectification:\n- Half-Wave Rectifier: Uses 1 diode; conducts only during positive half cycles. Efficiency η = 40.6%; Ripple factor γ = 1.21.\n- Center-Tapped / Bridge Full-Wave Rectifier: Uses 4 diodes in bridge formation; conducts on both positive and negative AC half cycles. Efficiency η = 81.2%; Ripple factor γ = 0.482. Output frequency is double the input AC frequency: f_out = 2 · f_in.',
        quickTake: 'Diode conducts in forward bias (0.7V for Si); Full-wave bridge rectifier converts both AC half-cycles into DC with 81.2% maximum efficiency and ripple factor 0.482.',
        keyPoints: [
          'Depletion Region: Region devoid of mobile charge carriers containing uncompensated immobile donor/acceptor ions.',
          'Ripple Factor γ = √( (V_rms / V_dc)² - 1 ) = 0.482 for full-wave.',
          'Filter Circuits: Shunt capacitor filters smooth pulsating DC output by charging to peak voltage and discharging slowly across load.'
        ],
        formulaOrEquation: 'Diode Current: I = I_s · ( e^(V / η·V_T) - 1 ) | Full-Wave η = 81.2%, γ = 0.482'
      }
    ],
    keywords: [
      {
        keyword: 'Thevenin\'s Equivalent Resistance (R_th)',
        definition: 'The resistance looking into the open load terminals of a linear network with all independent voltage sources replaced by short circuits and current sources by open circuits.',
        sentenceExplanation: 'Thevenin resistance simplifies an entire complicated maze of resistors and batteries into a single simple battery and single resistor.',
        examContext: 'Always clearly state: independent voltage sources shorted (0V) and current sources opened (0A).'
      },
      {
        keyword: 'Ripple Factor (γ)',
        definition: 'A quantitative measure of the residual pulsating AC voltage remaining in the output of a DC power supply rectifier.',
        sentenceExplanation: 'Ripple factor tells engineers how bumpy or clean the converted DC voltage is coming out of a power adapter.',
        examContext: 'Must state formula γ = V_ac / V_dc; Half-wave is 1.21, Full-wave is 0.482.'
      }
    ]
  },

  // ==========================================
  // 5. ENGINEERING MATHEMATICS: MATRICES & CALCULUS
  // ==========================================
  {
    titleMatcher: 'engineering mathematics',
    topics: [
      {
        topic: '1. Matrix Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem',
        inBrief: 'Eigenvalues and eigenvectors represent invariant transformation directions and scaling factors; Cayley-Hamilton states every square matrix satisfies its characteristic polynomial.',
        definition: 'For a square matrix A of order n, a non-zero vector X is an Eigenvector corresponding to scalar Eigenvalue λ if A·X = λ·X, obtained by solving the characteristic equation det(A - λ·I) = 0.',
        detailedExplanation: 'Eigenvalue properties for matrix A:\n1. Sum of eigenvalues equals the Trace of A (sum of main diagonal elements): Σ λ_i = tr(A).\n2. Product of eigenvalues equals the Determinant of A: Π λ_i = det(A).\n3. Eigenvalues of a triangular or diagonal matrix are simply its principal diagonal elements.\n4. If λ is an eigenvalue of A, then λ^k is an eigenvalue of A^k, and 1/λ is an eigenvalue of A^(-1) (if A is non-singular).\n\nCayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation. If characteristic equation is λ^n + c_{n-1}·λ^(n-1) + ... + c_0 = 0, then A^n + c_{n-1}·A^(n-1) + ... + c_0·I = O. This theorem provides an elegant technique to compute high matrix powers A^m and matrix inverses A^(-1) without computing cofactors.',
        quickTake: 'A·X = λ·X; det(A - λ·I) = 0; Sum of eigenvalues = Trace(A); Product = det(A); Matrix satisfies its own characteristic polynomial: f(A) = 0.',
        keyPoints: [
          'Trace property: Σ λ_i = a11 + a22 + ... + ann.',
          'Determinant property: Π λ_i = |A|.',
          'Inverse calculation via Cayley-Hamilton: Multiply matrix equation by A^(-1) to isolate A^(-1).'
        ],
        formulaOrEquation: 'det(A - λ·I) = 0 | Cayley-Hamilton: A^n + c_{n-1}·A^(n-1) + ... + c_0·I = 0'
      },
      {
        topic: '2. Vector Calculus: Gradient, Divergence, Curl & Gauss Theorem',
        inBrief: 'Vector differential operators analyze directional rates of change, flux expansion, and rotational vorticity in 3D fields.',
        definition: 'The Del operator (∇) is a vector differential operator that generates the Gradient of a scalar field (∇φ), Divergence of a vector field (∇·F), and Curl of a vector field (∇ × F), connected through Gauss\'s Divergence Theorem and Stokes\'s Theorem.',
        detailedExplanation: 'Definitions:\n- Gradient (∇φ = ∂φ/∂x i + ∂φ/∂y j + ∂φ/∂z k): Represents a vector pointing in the direction of greatest spatial rate of increase of scalar function φ, with magnitude equal to directional derivative.\n- Divergence (∇·F = ∂Fx/∂x + ∂Fy/∂y + ∂Fz/∂z): Measures the net outward flux of vector field per unit volume. If ∇·F = 0, the field is Solenoidal (incompressible fluid flow).\n- Curl (∇ × F = det([i, j, k; ∂/∂x, ∂/∂y, ∂/∂z; Fx, Fy, Fz])): Measures the infinitesimal rotational circulation of field F around a point. If ∇ × F = 0, the field is Irrotational (conservative force field).\n\nGauss\'s Divergence Theorem: Transforms a closed surface integral into a volume integral: ∬_S F · n dS = ∭_V (∇·F) dV, linking microscopic divergence to macroscopic boundary flux.',
        quickTake: 'Gradient ∇φ gives max increase vector; Divergence ∇·F = 0 means Solenoidal; Curl ∇ × F = 0 means Irrotational; Gauss Theorem: ∬ F·dS = ∭ (∇·F) dV.',
        keyPoints: [
          'Solenoidal Condition: ∇·F = 0 (no source or sink in volume).',
          'Irrotational Condition: ∇ × F = 0 (field derived from scalar potential: F = ∇φ).',
          'Stokes\'s Theorem: ∮_C F · dr = ∬_S (∇ × F) · n dS (relates line integral around closed curve to surface curl).'
        ],
        formulaOrEquation: 'Gauss Divergence Theorem: ∬_S F·n dS = ∭_V (∇·F) dV | Solenoidal: ∇·F = 0'
      }
    ],
    keywords: [
      {
        keyword: 'Cayley-Hamilton Theorem',
        definition: 'A fundamental theorem in linear algebra stating that every square matrix satisfies its own characteristic scalar polynomial.',
        sentenceExplanation: 'Cayley-Hamilton theorem allows engineers to easily calculate huge matrix powers or invert large matrices by substituting the matrix itself into its own characteristic polynomial.',
        examContext: 'Must state formal statement: If det(A - λI) = 0 is characteristic equation, then f(A) = [0]. Used to compute A^(-1) and A^4.'
      },
      {
        keyword: 'Solenoidal Vector Field',
        definition: 'A vector field whose divergence is zero everywhere throughout a region, indicating that it possesses no sources or sinks.',
        sentenceExplanation: 'A magnetic field is solenoidal because magnetic monopoles do not exist, meaning every magnetic field line entering a closed surface must also exit.',
        examContext: 'Condition: ∇ · F = 0; frequently examined as finding unknown constant in vector field.'
      }
    ]
  }
];
