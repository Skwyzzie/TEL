import { SolutionItem, CaseStudy, NaicsCode, ContractVehicle, ComplianceStandard } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_defense_tech_lab_1791397848170.jpg';
export const HARDWARE_IMAGE = '/src/assets/images/tactical_edge_hardware_1791397859762.jpg';
export const SENSOR_IMAGE = '/src/assets/images/phased_array_sensor_1791397869453.jpg';
export const OPERATIONS_IMAGE = '/src/assets/images/mission_operations_center_1791397880658.jpg';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'aegis-node-4x',
    name: 'Aegis-Node 4X Tactical Edge Unit',
    category: 'hardware',
    badgeCategory: 'Ruggedized Embedded Hardware',
    subtitle: 'Conduction-cooled neural compute platform for tactical vehicles & uncrewed platforms',
    trlLevel: 'TRL 7',
    summary: 'A MIL-STD-810H hardened multi-processor compute node delivering 135 TOPS of INT8 inference in an air-gapped, passively cooled billet titanium shell.',
    fullDescription: 'The Aegis-Node 4X bridges raw analog sensor data with on-platform neural inference without reliant satellite or cloud backhaul. Built for extreme thermal ranges and high vibrational shock, it integrates dual lock-step ARM Cortex-R52 safety cores with an open RISC-V coprocessor matrix and military circular connectors.',
    primaryImage: HARDWARE_IMAGE,
    specs: {
      architecture: 'Dual Lock-step ARM R52 + Quad RISC-V Vector Cores + 135 TOPS NPU',
      computeThroughput: '135 TOPS INT8 / 38 TFLOPS FP16',
      powerDraw: '18W Nominal / 42W Peak (12V-36V DC MIL-STD-1275E)',
      operatingTemp: '-45°C to +85°C Operating (Conduction / Cold-Plate)',
      chassisIngress: 'IP67 Submersible / Hermetically Sealed Billet Titanium 6Al-4V',
      weight: '1.42 kg (3.13 lbs)',
      cryptography: 'FIPS 140-3 Level 3 Hardware Security Module (HSM) with Zeroize Pin',
      interfaces: ['4x MIL-DTL-38999 Series III', '2x 10GbE Rugged M12 Optical', '4x CAN-FD', '2x ARINC 429'],
      compliance: ['MIL-STD-810H', 'MIL-STD-461G', 'MIL-STD-1275E', 'ITAR Controlled']
    },
    features: [
      'Sub-150 nanosecond deterministic sensor interrupt handling',
      'Instantaneous physical tamper zeroization and memory bus encryption',
      'Passively cooled conduction chassis with zero moving fans',
      'Drop-in standard NATO STANAG 4754 generic vehicle architecture compatibility'
    ],
    targetMissions: ['Uncrewed Aerial & Ground Systems', 'Naval Surface Craft', 'Contested Forward Edge C2', 'Special Reconnaissance Payloads']
  },
  {
    id: 'echokernel-rtos',
    name: 'EchoKernel Deterministic RTOS',
    category: 'software',
    badgeCategory: 'Mission-Critical Software',
    subtitle: 'Formally verified microkernel runtime with provable zero-panic memory safety',
    trlLevel: 'TRL 8',
    summary: 'A bare-metal, capabilities-based real-time operating system engineered in certified safe Rust for mission-critical aerospace and weapon systems.',
    fullDescription: 'EchoKernel eliminates legacy Linux unpredictable jitter and memory fragmentation. Using formal mathematical proof techniques, it guarantees bounded execution times, hard memory isolation across multiple tenant classification levels, and sub-microsecond IPC latency in air-gapped environments.',
    primaryImage: OPERATIONS_IMAGE,
    specs: {
      architecture: 'Microkernel Architecture (Capabilities-based access control)',
      determinism: 'Sub-400 nanosecond worst-case interrupt latency',
      cryptography: 'Post-Quantum Kyber-1024 & Dilithium signature primitives baked into kernel bus',
      compliance: ['DO-178C Design Assurance Level A', 'POSIX PSE51 Minimal Profile', 'NIST SP 800-53 High'],
      interfaces: ['Rust Bare-Metal FFI', 'Certified C99 Bindings', 'ROS 2 Micro-XRCE Bridge']
    },
    features: [
      'Zero dynamic heap allocation post boot sequence for predictable lifetimes',
      'Hardware-enforced MPU/MMU domain compartmentalization',
      'Sub-50ms cold-start to full flight telemetry readiness',
      'Built-in secure boot with hardware root-of-trust validation'
    ],
    targetMissions: ['Flight Control & Avionics', 'Autonomous Weapons Systems', 'Classified Cryptographic Gateways', 'Spacecraft Guidance Systems']
  },
  {
    id: 'phased-echo-900',
    name: 'Phased-Echo 900 Acoustic & RF Array',
    category: 'dual-use',
    badgeCategory: 'Dual-Use Sensor System',
    subtitle: 'Co-located acoustic micro-Doppler and passive RF directional bearing finder',
    trlLevel: 'TRL 6',
    summary: 'An autonomous multi-aperture array detecting low-observable Class 1-3 uncrewed aerial systems (drones) using acoustic resonance and RF emission synthesis.',
    fullDescription: 'Modern low-cost drones frequently operate under radio silence or frequency hopping. The Phased-Echo 900 pairs a 32-element micro-machined MEMS acoustic microphone lattice with an ultra-wideband passive RF interferometer. The co-located array triangulates drone rotor Doppler harmonics and video link leaks up to 4.5 kilometers away.',
    primaryImage: SENSOR_IMAGE,
    specs: {
      architecture: '32-Channel MEMS Acoustic Phased Array + 4-Channel RF Interferometer',
      computeThroughput: 'Real-time Beamforming at 192 kHz sample rate per channel',
      powerDraw: '24W Average (Solar / POE 802.3bt or 28V DC NATO Input)',
      operatingTemp: '-40°C to +70°C All-Weather (Radome Heating Integration)',
      chassisIngress: 'IP66 Rated Hydrophobic GORE-TEX Acoustic Membrane',
      weight: '4.8 kg (10.6 lbs)',
      interfaces: ['Rugged RJ45 GigE', 'Cursor-on-Target (CoT) XML/Protobuf over UDP', 'ATAK / WinTAK Plugin'],
      compliance: ['Section 889 NDAA Compliant', 'MIL-STD-810H Wind/Rain Tested', 'FCC Part 15 Subpart B']
    },
    features: [
      'Detection of radio-silent autonomous drones via acoustic propeller micro-Doppler',
      'Instantaneous 3D azimuth and elevation vector output within 35 milliseconds',
      'Native Cursor-on-Target (CoT) integration with Team Awareness Kit (ATAK)',
      'Solar-compatible autonomous unattended ground sensor (UGS) deployment'
    ],
    targetMissions: ['Air Base Perimeter Defense', 'Critical Infrastructure Protection', 'Forward Operating Base (FOB) Security', 'Border Reconnaissance']
  },
  {
    id: 'synapse-mesh',
    name: 'Synapse-Mesh Swarm Protocol',
    category: 'software',
    badgeCategory: 'Autonomous Distributed Software',
    subtitle: 'Resilient multi-agent consensus bus for GPS-denied electronic warfare environments',
    trlLevel: 'TRL 7',
    summary: 'A Byzantine fault-tolerant mesh routing and shared situational awareness engine designed to maintain collaborative swarm cohesion under intense jamming.',
    fullDescription: 'When GPS is spoofed and long-range communications are jammed, military squads and autonomous drone swarms lose cohesion. Synapse-Mesh implements an ultra-compact mathematical consensus protocol over ad-hoc peer-to-peer RF links, allowing swarms to cooperatively localize, de-conflict trajectories, and execute mission objectives autonomously.',
    primaryImage: OPERATIONS_IMAGE,
    specs: {
      architecture: 'Decentralized Gossip-based CRDT State Machine with Zero Coordinator Node',
      determinism: 'Guaranteed convergence within 120ms across up to 256 active swarm nodes',
      cryptography: 'ChaCha20-Poly1305 per-hop and end-to-end forward secrecy encryption',
      interfaces: ['ZeroMQ', 'gRPC', 'UDP Broadcast', 'Tactical SDR Waveform Layer'],
      compliance: ['CMMC Level 2 Encrypted In-Transit', 'FIPS 140-3 Validated Crypto Primitives']
    },
    features: [
      'Collaborative relative localization using pairwise RF time-of-flight without GPS',
      'Autonomous role failover: leader destruction triggers immediate election in 15ms',
      'Dynamic bandwidth throttling from 500 bps to 20 Mbps depending on link degradation',
      'Formally validated against split-brain scenarios and rogue adversary injection'
    ],
    targetMissions: ['Autonomous Drone Swarms', 'Subterranean Dismounted Team Tracking', 'Uncrewed Collaborative Combat Aircraft (CCA)', 'Naval Swarm Interceptors']
  },
  {
    id: 'spectraguard-sdr',
    name: 'SpectraGuard Cognitive Transceiver',
    category: 'hardware',
    badgeCategory: 'Ruggedized Communications Hardware',
    subtitle: 'Wideband agile software-defined radio with real-time spectrum de-ghosting',
    trlLevel: 'TRL 6',
    summary: 'A 10 MHz to 6 GHz multi-channel SDR transceiver equipped with on-FPGA neural waveform synthesis for surviving hostile Electronic Warfare (EW).',
    fullDescription: 'SpectraGuard provides autonomous frequency agility in heavily contested electromagnetic spectrums. Built on a direct RF-sampling architecture, the transceiver continuously scans the environment, characterizes hostile jammers in nanoseconds, and synthesizes orthogonal anti-jam wave patterns to punch data through contested corridors.',
    primaryImage: SENSOR_IMAGE,
    specs: {
      architecture: 'Direct RF-Sampling Agile Transceiver with Xilinx UltraScale+ RFSoC',
      computeThroughput: '4 GSPS ADC / DAC with 16-bit resolution',
      powerDraw: '32W Nominal (Conduction Cooled)',
      operatingTemp: '-40°C to +85°C',
      chassisIngress: 'IP67 Sealed Aluminium-Beryllium Alloy',
      weight: '1.85 kg',
      cryptography: 'Type-1 Encryption Architecture Ready & FIPS 140-3 Layer',
      interfaces: ['4x SMA RF Ports', '2x QSFP28 100GbE', 'PPS & 10 MHz Reference Input'],
      compliance: ['MIL-STD-461G Navy Fixed / Army Ground', 'ITAR Controlled Defense Article']
    },
    features: [
      'Agile frequency hopping up to 100,000 hops per second',
      'Autonomous deep-learning RF emitter classification and fingerprinting',
      'Simultaneous multi-beam transmit and receive with digital null steering',
      'Ultra-compact 3U VPX or standalone airborne pod mounting form factor'
    ],
    targetMissions: ['Electronic Warfare (EW) Defense', 'Cognitive Communications Links', 'Signals Intelligence (SIGINT)', 'Tactical Satellite Uplink']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'zephyr-echo',
    codename: 'PROJECT ZEPHYR-ECHO',
    title: 'Autonomous Perimeter Sentry in Contested Arctic Conditions',
    clientSector: 'US DoD Defense Innovation / Cold Regions Test Center',
    missionEnvironment: 'Sub-zero (-38°C) GPS-denied maritime boundary outpost',
    summary: 'Deployed a persistent grid of 12 Phased-Echo 900 sensor nodes linked by Synapse-Mesh to secure an isolated radar installation against low-radar-cross-section sUAS incursions.',
    technicalBreakthrough: 'Synthesized acoustic micro-Doppler signatures with passive RF bearing angles, maintaining 99.4% autonomous target detection accuracy with zero false dispatches across a 6-month continuous trial.',
    image: HERO_IMAGE,
    metrics: [
      { label: 'Detection Range', value: '4.2 km', description: 'Against Class 1 stealth micro-drones under complete radio silence' },
      { label: 'Bearing Latency', value: '< 38 ms', description: 'From first propeller sonic contact to automated ATAK vector broadcast' },
      { label: 'Zero Failure Rate', value: '100 %', description: 'Uptime across 4,300 continuous operating hours without personnel intervention' }
    ],
    hardwareProfile: '12x Phased-Echo 900 + 4x Aegis-Node 4X edge compute clusters',
    softwareStack: 'EchoKernel RTOS running Synapse-Mesh protocol with custom ATAK plugin'
  },
  {
    id: 'hyper-vigil',
    codename: 'PROJECT HYPERVIGIL',
    title: 'Deterministic Sub-Orbital Payload Flight Telemetry',
    clientSector: 'Commercial Aerospace & Defense Prime Contractor',
    missionEnvironment: 'Hypersonic sub-orbital boost-glide test flight (Mach 5.8, 19G acceleration)',
    summary: 'Integrated Third Echo Labs Aegis-Node 4X running EchoKernel into an experimental flight research vehicle to govern real-time control fins and collect multi-axis high-G inertial telemetry.',
    technicalBreakthrough: 'EchoKernel achieved sub-microsecond determinism during extreme atmospheric plasma blackouts, successfully calculating flight surface corrections without a single kernel context stall.',
    image: HARDWARE_IMAGE,
    metrics: [
      { label: 'Control Jitter', value: '< 240 ns', description: 'Peak actuator command jitter under maximum aerodynamic buffet' },
      { label: 'Shock Tolerance', value: '25 G', description: 'Sustained acceleration during re-entry deceleration curve' },
      { label: 'Telemetry Integrity', value: '100 %', description: 'Complete mission blackbox recovery via dual redundant flash banks' }
    ],
    hardwareProfile: 'Aegis-Node 4X Titanium Avionics Enclosure with MIL-DTL-38999 interconnects',
    softwareStack: 'EchoKernel DO-178C DAL-A verified flight control microkernel'
  },
  {
    id: 'strata-acoustic',
    codename: 'PROJECT STRATA-ECHO',
    title: 'Subterranean Acoustic Telemetry for Critical Energy Conduits',
    clientSector: 'Civil Infrastructure & Defense Critical Assets Agency',
    missionEnvironment: 'Underground deep tunnel & bedrock facilities with zero wireless RF penetration',
    summary: 'Engineered an extreme low-power acoustic guided-wave transceiver transmitting telemetry through solid steel pipeline structures and geological rock faces over kilometer distances.',
    technicalBreakthrough: 'Leveraged Third Echo acoustic signal synthesis algorithms to achieve reliable digital data packets across 1.8 kilometers of solid granite and steel without drilling signal conduits.',
    image: SENSOR_IMAGE,
    metrics: [
      { label: 'Through-Rock Range', value: '1.8 km', description: 'Reliable telemetry without cables or RF antennas' },
      { label: 'Battery Lifespan', value: '7.5 Yrs', description: 'Autonomous continuous operation on internal D-cell lithium pack' },
      { label: 'Tamper Detection', value: '< 5 ms', description: 'Immediate acoustic wave distortion alert on physical conduit breach' }
    ],
    hardwareProfile: 'EchoStrata Piezo-Acoustic Transceiver Node in 316L Stainless Steel housing',
    softwareStack: 'EchoKernel Ultra-Low-Power Wakeup Engine with Reed-Solomon Forward Error Correction'
  }
];

export const NAICS_CODES: NaicsCode[] = [
  { code: '541715', title: 'Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)', isPrimary: true },
  { code: '541512', title: 'Computer Systems Design Services', isPrimary: false },
  { code: '334511', title: 'Search, Detection, Navigation, Guidance, Aeronautical, and Nautical System Instrument Manufacturing', isPrimary: false },
  { code: '334418', title: 'Printed Circuit Assembly (Electronic Assembly) Manufacturing', isPrimary: false },
  { code: '541330', title: 'Engineering Services (Military and Aerospace Equipment)', isPrimary: false },
  { code: '541519', title: 'Other Computer Related Services', isPrimary: false }
];

export const CONTRACT_VEHICLES: ContractVehicle[] = [
  {
    id: 'sbir-sttr',
    name: 'SBIR / STTR Phase I & Phase II',
    type: 'Federal R&D Grants & Direct Awards',
    scope: 'Rapid transition of dual-use hardware & software technologies across DoD, AFWERX, Navy, Army, and DARPA solicitations.',
    status: 'Ready for Submissions & Teaming'
  },
  {
    id: 'ota',
    name: 'Other Transaction Authority (OTA)',
    type: 'Prototype OTA Consortia',
    scope: 'Streamlined non-FAR procurement for rapid defense prototyping, speed-of-relevance hardware deployment, and flight trials.',
    status: 'Consortia Membership Pending / Open'
  },
  {
    id: 'subcontract-prime',
    name: 'Prime Contractor Subcontracting (FAR 19.7)',
    type: 'Tier-1 & Tier-2 Defense Teaming',
    scope: 'Subcontractor integration of custom rugged embedded nodes, certified RTOS software, and sensor payloads into Major Defense Acquisition Programs (MDAP).',
    status: 'Actively Teaming'
  },
  {
    id: 'cso',
    name: 'Commercial Solutions Opening (CSO)',
    type: 'DoD / DIU Direct Procurement',
    scope: 'Procurement of innovative commercial dual-use solutions solving specific national security defense operational challenges.',
    status: 'Qualified Catalog Ready'
  }
];

export const COMPLIANCE_STANDARDS: ComplianceStandard[] = [
  {
    standard: 'CMMC 2.0 Level 2',
    authority: 'US Department of Defense (DoD)',
    status: 'Implementation Active',
    summary: 'Third Echo Labs information infrastructure implements all 110 NIST SP 800-171 controls protecting Controlled Unclassified Information (CUI).'
  },
  {
    standard: 'NIST SP 800-171 Rev 2',
    authority: 'National Institute of Standards and Technology',
    status: 'Compliant',
    summary: 'System Security Plan (SSP) and Plan of Action & Milestones (POAM) fully documented with dedicated enclave isolation.'
  },
  {
    standard: 'ITAR / EAR Export Control',
    authority: 'US Department of State / Commerce',
    status: 'Compliant',
    summary: 'Technical data and defense articles managed under strict access controls. All engineering staff are US Persons.'
  },
  {
    standard: 'Section 889 NDAA',
    authority: 'National Defense Authorization Act',
    status: 'Certified',
    summary: 'Supply chain audit certifies zero use of covered telecommunications equipment or banned video surveillance hardware.'
  },
  {
    standard: 'MIL-STD-810H & 461G',
    authority: 'DoD Environmental & Electromagnetic Qualification',
    status: 'Audited',
    summary: 'Hardware enclosures and power distribution modules undergo independent laboratory vibration, thermal shock, and EMI testing.'
  }
];
