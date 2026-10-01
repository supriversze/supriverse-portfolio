// Central Aggregator / Backward Compatibility
// Strictly separated sources:
// - technicalData.ts -> Technical projects, skills, experiences, resume
// - creativeData.ts  -> Posters, UI/UX showcase, creative leadership, creative resume
// - sharedData.ts    -> Shared brand, name, location, email

export * from './sharedData';
export * from './technicalData';
export * from './creativeData';

import { SHARED_INFO } from './sharedData';
import { TECHNICAL_INFO, TECHNICAL_PROJECTS } from './technicalData';
import { CREATIVE_INFO } from './creativeData';

export const PERSONAL_INFO = {
  ...SHARED_INFO,
  role: SHARED_INFO.tagline,
  degree: TECHNICAL_INFO.degree,
  heroSupportingCopy:
    'Building intelligent digital experiences while exploring the intersection of technology, design, and creativity.',
  technicalHeroHeading: TECHNICAL_INFO.headline,
  technicalHeroSupportingText: TECHNICAL_INFO.supportingText,
  creativeHeroHeading: CREATIVE_INFO.headline,
  creativeHeroSubheading: CREATIVE_INFO.subheading,
  creativeHeroSupportingCopy: CREATIVE_INFO.supportingCopy,
  resumePath: TECHNICAL_INFO.resumePath,
  resumeFileName: TECHNICAL_INFO.resumeFileName,
  creativeResumePath: CREATIVE_INFO.resumePath,
  creativeResumeFileName: CREATIVE_INFO.resumeFileName,
};

export { TECHNICAL_PROJECTS as PROJECTS };
