import type {
  PosterItem,
  CreativeLeadershipItem,
  UIUXShowcaseItem,
  SocialLink,
} from '../types/portfolio';
import { SHARED_INFO, SHARED_SOCIAL } from './sharedData';

export const CREATIVE_INFO = {
  name: SHARED_INFO.name,
  brandName: SHARED_INFO.brandName,
  role: 'Creative Lead & Visual Designer',
  location: SHARED_INFO.location,
  email: SHARED_INFO.email,
  headline: 'Designing visuals, interfaces, and experiences.',
  subheading: 'Creative Lead • Poster Designer • UI/UX Explorer',
  supportingCopy:
    'I explore the intersection of design, typography, branding, and visual storytelling.',
  resumePath: '/resume-creative.pdf',
  resumeFileName: 'Supriya_Suresh_Creative_Resume.pdf',
};

export const CREATIVE_SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Behance',
    url: 'https://www.behance.net/supriya_suresh',
    label: 'behance.net/supriya_suresh',
    iconName: 'behance',
  },
  {
    platform: 'LinkedIn',
    url: SHARED_SOCIAL.linkedin,
    label: 'linkedin.com/in/supriyasuresh',
    iconName: 'linkedin',
  },
  {
    platform: 'Email',
    url: SHARED_SOCIAL.email,
    label: SHARED_INFO.email,
    iconName: 'mail',
  },
  {
    platform: 'Medium',
    url: SHARED_SOCIAL.medium,
    label: 'medium.com/@supriyasuresh',
    iconName: 'book-open',
  },
];

export const CREATIVE_SKILLS = [
  {
    category: 'Design Direction',
    description: 'Guiding visual strategy and leading collaborative creative efforts',
    skills: [
      'Creative Leadership',
      'Art Direction',
      'Design Mentorship',
      'Visual Storytelling',
      'Event Publicity Strategy',
    ],
  },
  {
    category: 'Poster & Editorial Design',
    description: 'High-impact print & digital artwork with structured typography',
    skills: [
      'Poster Design',
      'Editorial Layouts',
      'Typography Hierarchy',
      'Grid Systems',
      'Visual Composition',
    ],
  },
  {
    category: 'UI / UX Design',
    description: 'Intuitive digital experiences and modern component libraries',
    skills: [
      'User Interface (UI)',
      'User Experience (UX)',
      'Design Systems',
      'Interactive Wireframing',
      'Responsive Web Layouts',
    ],
  },
  {
    category: 'Branding & Social Media',
    description: 'Memorable brand systems and high-engagement digital assets',
    skills: [
      'Brand Identity',
      'Color Palette Design',
      'Social Media Creatives',
      'Promotional Banners',
      'Marketing Collateral',
    ],
  },
  {
    category: 'Creative Tooling',
    description: 'Industry-standard design applications and vector toolkits',
    skills: [
      'Figma',
      'Canva',
      'CorelDRAW',
      'Adobe Illustrator (Basics)',
      'Adobe Photoshop (Basics)',
    ],
  },
];

export const CREATIVE_LEADERSHIP: CreativeLeadershipItem[] = [
  {
    id: 'lead-1',
    role: 'Creative Lead & Design Head',
    organization: 'Synapse Flagship National Technical Symposium',
    year: '2025 – 2026',
    impact:
      'Directed visual strategy, brand guidelines, and high-impact digital publicity across 20+ national events; mentored student designers and standardized design review workflows.',
    deliverables: [
      'Keynote Poster Series',
      'Comprehensive Social Media Kit',
      'Branded Stage Backdrop Graphics',
      'Delegate Badges & Print Collateral',
    ],
  },
  {
    id: 'lead-2',
    role: 'Creative Lead',
    organization: '[Add Organization / Annual Cultural Fest]',
    year: '2024 – 2025',
    impact:
      '[Add impact / responsibility] — Spearheaded festival brand identity, promotional poster series, social media motion graphics, and signage systems; led a team of 10+ student designers.',
    deliverables: [
      'Festival Master Posters',
      'Motion Publicity Guidelines',
      'Typography System',
      'Wayfinding & Event Signage',
    ],
  },
  {
    id: 'lead-3',
    role: 'Design & UI/UX Mentor',
    organization: 'Campus Developer & Design Society',
    year: '2024 – Present',
    impact:
      'Organized hands-on design critique sessions, mentored junior designers in typography, visual hierarchy, Figma component architecture, and responsive design systems.',
    deliverables: [
      'Figma Masterclass Workshops',
      'Weekly Design Critiques',
      'Design-to-Developer Handoff Guides',
    ],
  },
  {
    id: 'lead-4',
    role: 'Visual Identity & Branding Designer',
    organization: 'Collegiate Hackathons & Innovation Challenges',
    year: '2024 – Present',
    impact:
      'Authored dynamic cyber-noir branding systems and promotional artwork for collegiate hackathons, driving record registration numbers.',
    deliverables: [
      'Hackathon Logo & Monogram',
      'Sponsor Prospectus Layouts',
      'Merchandise & Swag Graphics',
    ],
  },
];

export const POSTERS_DATA: PosterItem[] = [
  {
    id: 'poster-1',
    title: 'Synapse 2026',
    eventCampaign: 'National Computing & Innovation Summit',
    year: '2026',
    category: 'Event Creatives',
    image: '/creative/posters/poster-tech-symposium.svg',
    aspectRatio: '3/2',
    brief:
      'Design an avant-garde editorial poster for the annual flagship computing symposium uniting AI researchers and student innovators.',
    concept:
      'Utilized high-contrast solar gold geometry, concentric orbital rings, and layered typographic scales to represent neural firing and intellectual convergence.',
    tools: ['Figma', 'Canva', 'CorelDRAW'],
    role: 'Designer / Creative Lead',
  },
  {
    id: 'poster-2',
    title: 'HackForge 2026',
    eventCampaign: '36-Hour National Code Odyssey',
    year: '2026',
    category: 'Event Creatives',
    image: '/creative/posters/poster-ai-hackathon.svg',
    aspectRatio: '3/2',
    brief:
      'Create an electrifying, cyber-noir promotional poster to attract top collegiate engineering and AI hacker teams.',
    concept:
      'Integrated an acute diagonal slice with neon amber matrix grids, terminal shell styling, and real-time countdown urgency.',
    tools: ['Figma', 'CorelDRAW'],
    role: 'Lead Visual Designer',
  },
  {
    id: 'poster-3',
    title: 'Design Disrupt 2025',
    eventCampaign: 'Creative Conclave Vol. IV',
    year: '2025',
    category: 'Posters',
    image: '/creative/posters/poster-design-summit.svg',
    aspectRatio: '3/2',
    brief:
      'Conceive a modern Bauhaus-inspired conference poster celebrating visual disruption, typography, and human-centered design.',
    concept:
      'Juxtaposed oversized brutalist typography with pure geometric half-arcs and warm yellow gradients, capturing the spirit of modernism.',
    tools: ['Figma', 'CorelDRAW'],
    role: 'Creative Lead',
  },
  {
    id: 'poster-4',
    title: "Aura '25 Cultural Fest",
    eventCampaign: 'Annual University Cultural Carnival',
    year: '2025',
    category: 'Event Creatives',
    image: '/creative/posters/poster-cultural-fest.svg',
    aspectRatio: '3/2',
    brief:
      'Produce the master festival poster showcasing art, music, theatre, and dance across 40+ high-energy intercollegiate competitions.',
    concept:
      'Employed golden undulating fluid ribbons and solar discs to convey unconstrained celebratory motion and festivity.',
    tools: ['Canva', 'CorelDRAW'],
    role: 'Event Creative Lead',
  },
  {
    id: 'poster-5',
    title: 'Supriverse Dual Identity',
    eventCampaign: 'Personal Brand Identity Suite',
    year: '2026',
    category: 'Branding',
    image: '/creative/posters/poster-brand-identity.svg',
    aspectRatio: '3/2',
    brief:
      'Design a brand architectural poster communicating the synthesis between technical engineering (#2563EB) and creative direction (#FACC15).',
    concept:
      'Engineered a balanced dual-hemisphere layout connected by a central glowing monogram, illustrating one brand with two distinct superpowers.',
    tools: ['Figma', 'Illustrator', 'CorelDRAW'],
    role: 'Brand Designer',
  },
  {
    id: 'poster-6',
    title: 'Zero to UI/UX Workshop',
    eventCampaign: 'Modern Design Systems Masterclass',
    year: '2025',
    category: 'Social Media Design',
    image: '/creative/posters/poster-uiux-workshop.svg',
    aspectRatio: '3/2',
    brief:
      'Design an educational, typography-led Instagram carousel and digital banner promoting a beginner-to-advanced Figma workshop.',
    concept:
      'Leveraged structured micro-grids, clean sans-serif type metrics, and high-legibility contrasting badges for instant mobile feed engagement.',
    tools: ['Figma', 'Canva'],
    role: 'Designer & Workshop Lead',
  },
];

export const UIUX_SHOWCASE: UIUXShowcaseItem[] = [
  {
    id: 'ui-flowsync',
    title: 'FlowSync — Cognitive Task & Workspace Platform',
    category: 'Web App & Dashboard UI',
    shortDescription:
      'Designed an end-to-end task workspace emphasizing progressive disclosure, low visual clutter, and accessible dark-mode data hierarchies.',
    coverImage: '/creative/ui-ux/ui-flowsync-task.svg',
    screenshots: ['/creative/ui-ux/ui-flowsync-task.svg'],
    tools: ['Figma', 'Design Systems', 'Prototyping'],
    modalDetails: {
      problem:
        'Productivity tools are commonly overloaded with redundant buttons, inconsistent margins, and harsh high-contrast borders that induce user fatigue during long deep-work sessions.',
      targetUsers:
        'Engineers, product designers, and academic researchers managing multi-threaded projects with strict milestone tracking.',
      designDirection:
        'Employed an obsidian dark palette (#0A0F1D) accented with purposeful solar gold highlights. Standardized an 8pt spatial grid, generous line-heights, and distinct pill tags.',
      wireframes:
        'Mapped 14 primary screens from initial user onboarding to daily timeline views, modal detail editors, and team workspace settings.',
      finalUI:
        'Delivered responsive desktop and tablet interactive Figma components with auto-layout v5, variant states (hover, focus, active, disabled), and WCAG AAA compliance.',
      interactionNotes:
        'Micro-transitions engineered with 200ms ease-out dampening, tactile hover elevations (+4px Y-axis lift), and subtle gold border illumination.',
      tools: ['Figma', 'Auto-Layout', 'Component Variants', 'WCAG Audits'],
    },
  },
  {
    id: 'ui-aura-design-system',
    title: 'Aura Design System & Component Library',
    category: 'Design Systems',
    shortDescription:
      'Crafted a cohesive, token-driven multi-brand design system with modular typography scales, harmonious color tokens, and accessible button architectures.',
    coverImage: '/creative/ui-ux/ui-aura-design-system.svg',
    screenshots: ['/creative/ui-ux/ui-aura-design-system.svg'],
    tools: ['Figma Tokens', 'UI Architecture', 'Branding'],
    modalDetails: {
      problem:
        'Multi-event student organizations suffered from fragmented branding, inconsistent typography usage, and ad-hoc CSS colors across disparate landing pages.',
      targetUsers:
        'Student developers, creative teams, and event organizers requiring plug-and-play visual components for rapid campaign launches.',
      designDirection:
        'Created a unified token foundation: 5-level elevation system, standardized typography scale (12px to 48px), curated HSL color ramps, and reusable form components.',
      wireframes:
        'Documented atomic elements (atoms, molecules, organisms) with explicit spacing guidelines, border radius tokens, and interactive state tables.',
      finalUI:
        'Constructed a 60+ component master Figma library linked to shared token variables with automated dark/light mode token swapping.',
      interactionNotes:
        'Consistent keyboard focus indicators with 2px offset rings and smooth hover brightness shifts.',
      tools: ['Figma Variables', 'Design Tokens', 'Accessibility Guides'],
    },
  },
  {
    id: 'ui-solarpulse-telemetry',
    title: 'SolarPulse — Telemetry & Energy Monitoring Interface',
    category: 'Data Visualization UI',
    shortDescription:
      'Engineered an intuitive visual interface translating real-time power metrics, load forecasts, and sensor telemetry into clear visual dashboards.',
    coverImage: '/creative/ui-ux/ui-solarpulse-telemetry.svg',
    screenshots: ['/creative/ui-ux/ui-solarpulse-telemetry.svg'],
    tools: ['Figma', 'Information Architecture', 'Dashboard UI'],
    modalDetails: {
      problem:
        'Complex industrial energy metrics are typically represented as raw numeric spreadsheets or cluttered gauge clusters that make anomaly identification difficult.',
      targetUsers:
        'Facility managers and campus sustainability directors monitoring power loads, solar generation spikes, and tariff thresholds.',
      designDirection:
        'Designed high-contrast temporal sparklines, status badges with clear semantic meanings, and large legible metric callouts for rapid scanning.',
      wireframes:
        'Iterated through 3 distinct information architecture concepts before choosing a card-based modular layout that adapts gracefully from 4K displays to mobile screens.',
      finalUI:
        'Produced clean dark-mode dashboard mockups featuring smooth glowing curve lines, real-time alert toast notifications, and customizable time range selectors.',
      interactionNotes:
        'Interactive chart scrubber tooltips with micro-animations and zero latency feel.',
      tools: ['Figma', 'Data Viz Design', 'Responsive Grids'],
    },
  },
];
