export interface Opportunity {
  type: string;
  name: string;
  model: string;
}

export interface Problem {
  id: string;
  title: string;
  desc: string;
  pain: number;
  money: number;
  freq: number;
  gap: number;
  opps: Opportunity[];
  countries: string[]; 
  budget: 'low' | 'medium' | 'high';
  b2x: 'B2B' | 'B2C' | 'B2G' | 'B2B2C';
  globalResolution?: {
    caseStudy: string;
    historicalContext: string; 
    sufferingCountries: string[]; // Countries that faced this
    successCountries: { name: string; flag: string; reason: string }[]; // Top benchmarks
    resolutionSteps: string[];
    successConditions: string[];
    currentManagementModel: string; // Detailed: How they manage it correctly now
    localApplication: {
      strategy: string;
      phases: string[];
    };
  };
}

export interface SubSector {
  id: string;
  name: string;
  count: number;
  problems: Problem[];
}

export interface Sector {
  id: string;
  icon: any;
  name: string;
  count: number;
  color: string;
  subs: SubSector[];
}
