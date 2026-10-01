export type PortfolioMode = 'technical' | 'creative';

export type ProjectTypeBadge = 
  | 'Internship Project' 
  | 'Mini Project' 
  | 'Hackathon Project' 
  | 'Personal Project' 
  | 'Research Project';

export interface ProjectItem {
  id: string;
  title: string;
  typeBadge: ProjectTypeBadge;
  tagline: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  // Modal detailed fields
  modalDetails: {
    problem: string;
    approach: string;
    technologiesDetailed: string[];
    outcome: string;
    keyLearnings: string[];
  };
}

export type SkillCategory = 'Languages' | 'AI / ML' | 'Web' | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level?: string;
  highlight?: boolean;
}

export type ExperienceCategory = 
  | 'Internship' 
  | 'Hackathons' 
  | 'Research' 
  | 'Leadership' 
  | 'Technical activities';

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  isEditablePlaceholder?: boolean;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Behance' | 'Medium';
  url: string;
  label: string;
  iconName: string;
}

// ========================
// CREATIVE MODE TYPES
// ========================

export type CreativeCategory =
  | 'All'
  | 'Posters'
  | 'UI/UX'
  | 'Branding'
  | 'Event Creatives'
  | 'Social Media Design';

export interface PosterItem {
  id: string;
  title: string;
  eventCampaign: string;
  year: string;
  category: 'Posters' | 'Branding' | 'Event Creatives' | 'Social Media Design';
  image: string;
  aspectRatio: string; // e.g. "3/2"
  brief: string;
  concept: string;
  tools: string[];
  role: string;
}

export interface CreativeLeadershipItem {
  id: string;
  role: string;
  organization: string;
  year: string;
  impact: string;
  deliverables?: string[];
}

export interface UIUXShowcaseItem {
  id: string;
  title: string;
  shortDescription: string;
  coverImage: string;
  screenshots: string[];
  category: string;
  tools: string[];
  modalDetails: {
    problem: string;
    targetUsers: string;
    designDirection: string;
    wireframes: string;
    finalUI: string;
    interactionNotes: string;
    tools: string[];
  };
}
