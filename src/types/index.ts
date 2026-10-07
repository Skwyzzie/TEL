export type SolutionCategory = 'all' | 'hardware' | 'software' | 'dual-use';

export interface SystemSpec {
  architecture?: string;
  computeThroughput?: string;
  powerDraw?: string;
  operatingTemp?: string;
  chassisIngress?: string;
  weight?: string;
  cryptography?: string;
  determinism?: string;
  interfaces?: string[];
  compliance?: string[];
}

export interface SolutionItem {
  id: string;
  name: string;
  category: 'hardware' | 'software' | 'dual-use';
  badgeCategory: string;
  subtitle: string;
  trlLevel: string; // Technology Readiness Level (e.g. TRL 7)
  summary: string;
  fullDescription: string;
  primaryImage: string;
  specs: SystemSpec;
  features: string[];
  targetMissions: string[];
}

export interface CaseStudy {
  id: string;
  codename: string;
  title: string;
  clientSector: string;
  missionEnvironment: string;
  summary: string;
  technicalBreakthrough: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  hardwareProfile: string;
  softwareStack: string;
}

export interface NaicsCode {
  code: string;
  title: string;
  isPrimary?: boolean;
}

export interface ContractVehicle {
  id: string;
  name: string;
  type: string;
  scope: string;
  status: string;
}

export interface ComplianceStandard {
  standard: string;
  authority: string;
  status: 'Compliant' | 'Audited' | 'Implementation Active' | 'Certified';
  summary: string;
}
