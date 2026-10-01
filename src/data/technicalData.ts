import type {
  ProjectItem,
  SkillItem,
  ExperienceItem,
  SocialLink,
} from '../types/portfolio';
import { SHARED_INFO, SHARED_SOCIAL } from './sharedData';

export const TECHNICAL_INFO = {
  name: SHARED_INFO.name,
  brandName: SHARED_INFO.brandName,
  role: 'Computer Science Student & Developer',
  degree: 'B.Tech in Computer Science and Engineering',
  location: SHARED_INFO.location,
  email: SHARED_INFO.email,
  headline: 'Building systems, products, and intelligent solutions.',
  supportingText:
    'B.Tech Computer Science student focused on AI, web development, and building practical digital products.',
  resumePath: '/resume-technical.pdf',
  resumeFileName: 'Supriya_Suresh_Technical_Resume.pdf',
};

export const TECHNICAL_SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/supriyasuresh',
    label: 'github.com/supriyasuresh',
    iconName: 'github',
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

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming Languages
  { name: 'Python', category: 'Languages', highlight: true },
  { name: 'JavaScript', category: 'Languages', highlight: true },
  { name: 'TypeScript', category: 'Languages', highlight: true },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS3', category: 'Languages' },
  { name: 'C / C++', category: 'Languages' },

  // AI & Machine Learning
  { name: 'Machine Learning', category: 'AI / ML', highlight: true },
  { name: 'Agentic AI', category: 'AI / ML', highlight: true },
  { name: 'Deep Learning', category: 'AI / ML', highlight: true },
  { name: 'Computer Vision', category: 'AI / ML', highlight: true },
  { name: 'OpenCV', category: 'AI / ML' },
  { name: 'Scikit-Learn', category: 'AI / ML' },
  { name: 'Neural Networks', category: 'AI / ML' },

  // Web Engineering & Databases
  { name: 'React', category: 'Web', highlight: true },
  { name: 'Node.js', category: 'Web', highlight: true },
  { name: 'Express', category: 'Web', highlight: true },
  { name: 'MongoDB', category: 'Web', highlight: true },
  { name: 'MERN Stack', category: 'Web', highlight: true },
  { name: 'REST APIs', category: 'Web' },
  { name: 'Tailwind CSS', category: 'Web' },

  // Systems & Developer Tooling
  { name: 'Git', category: 'Tools', highlight: true },
  { name: 'GitHub', category: 'Tools', highlight: true },
  { name: 'VS Code', category: 'Tools', highlight: true },
  { name: 'Linux / Bash', category: 'Tools' },
  { name: 'Docker (Foundations)', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
];

export const TECHNICAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-internship-1',
    category: 'Internship',
    title: 'Software Development & AI Intern',
    organization: '[Add Internship Company / Tech Organization]',
    duration: 'Jun 2025 – Aug 2025',
    location: 'Remote / Hybrid',
    description:
      '[Add description / responsibilities] — Worked on developing full-stack web features and integrating machine learning models with production backend APIs. Collaborated with senior engineers on performance optimization and code reviews.',
    highlights: [
      'Developed RESTful endpoints using Node.js & Express with MongoDB schema integration',
      'Assisted in data preprocessing and feature engineering for predictive ML pipelines',
      'Implemented clean, responsive React components following modern design systems',
    ],
    skills: ['Python', 'React', 'Node.js', 'MongoDB', 'REST APIs'],
    isEditablePlaceholder: true,
  },
  {
    id: 'exp-hackathon-1',
    category: 'Hackathons',
    title: 'Finalist & Core Developer — National AI Hackathon',
    organization: 'National Collegiate Innovation Hackathon',
    duration: '2025',
    location: 'Bengaluru, India',
    description:
      'Engineered an autonomous multi-agent reasoning application in a high-pressure 36-hour sprint. Designed the system architecture, asynchronous task worker queue, and responsive telemetry dashboard.',
    highlights: [
      'Architected end-to-end prototype under a strict 36-hour deadline',
      'Awarded top finalist ranking out of 180+ competitive collegiate engineering teams',
      'Handled live system demonstrations and technical architecture defense before judging panel',
    ],
    skills: ['Agentic AI', 'Python', 'FastAPI', 'React', 'WebSockets'],
  },
  {
    id: 'exp-research-1',
    category: 'Research',
    title: 'Undergraduate AI & Computer Vision Researcher',
    organization: 'Campus Machine Intelligence Research Lab',
    duration: '2024 – Present',
    location: 'Academic Campus',
    description:
      'Investigating automated visual anomaly detection and convolutional neural network optimizations for low-compute edge hardware environments.',
    highlights: [
      'Benchmarked lightweight CNN architectures against edge device computational constraints',
      'Synthesized comparative experimental evaluations on image segmentation accuracy',
      'Authored comprehensive technical documentation and reproducible benchmarking scripts',
    ],
    skills: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV'],
  },
  {
    id: 'exp-leadership-1',
    category: 'Leadership',
    title: 'Technical Committee Lead',
    organization: 'Campus ACM / IEEE Student Chapter',
    duration: '2024 – Present',
    location: 'University Campus',
    description:
      'Directing technical workshops, coding bootcamps, and hackathons. Mentoring 150+ student developers in foundational data structures, web development, and version control best practices.',
    highlights: [
      'Organized 6 hands-on technical workshops covering MERN stack and Python AI basics',
      'Spearheaded the technical track for the annual campus hackathon with 400+ attendees',
      'Standardized open-source contribution guidelines for collegiate developer clubs',
    ],
    skills: ['Leadership', 'Mentorship', 'Full-Stack Development', 'System Architecture'],
  },
  {
    id: 'exp-tech-activity-1',
    category: 'Technical activities',
    title: 'Open Source Contributor & Competitive Programmer',
    organization: 'Developer Community & Coding Platforms',
    duration: '2023 – Present',
    location: 'Online',
    description:
      'Consistently solving data structure and algorithmic challenges on LeetCode and CodeChef. Actively contributing documentation and bug fixes to developer-centric open-source repositories.',
    highlights: [
      'Solved 250+ algorithmic challenges covering graphs, dynamic programming, and trees',
      'Contributed bug fixes and test suites to open-source developer tooling',
      'Maintained consistent Git version control standards across all personal repositories',
    ],
    skills: ['Data Structures', 'Algorithms', 'Git', 'Problem Solving'],
  },
];

export const TECHNICAL_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-energy-optimization',
    title: 'AI-Driven Smart Energy Optimization & Load Forecasting',
    typeBadge: 'Research Project',
    tagline: 'Predictive intelligence model for automated grid telemetry and consumption optimization',
    shortDescription:
      'Built a machine learning system using time-series forecasting and agentic decision logic to predict peak electrical load demand and schedule automated consumption throttling.',
    technologies: ['Python', 'Machine Learning', 'Agentic AI', 'FastAPI', 'React'],
    image: '/projects/ai-energy-optimizer.svg',
    githubUrl: 'https://github.com/supriyasuresh',
    liveDemoUrl: 'https://github.com/supriyasuresh',
    modalDetails: {
      problem:
        'Commercial and residential facilities suffer significant financial penalties and carbon emissions due to unpredicted peak-demand load spikes and reactive HVAC/generator switching.',
      approach:
        'Developed an end-to-end predictive pipeline using Python time-series regression models (ARIMA / LSTM principles) coupled with an autonomous decision agent that evaluates real-time tariff rates and triggers scheduled load shedding.',
      technologiesDetailed: [
        'Python 3.11 & NumPy / Pandas data manipulation',
        'Agentic AI framework & state-machine logic',
        'Scikit-learn & Time-Series Forecasting models',
        'FastAPI for real-time telemetry endpoints',
        'React 19 & Tailwind CSS monitoring dashboard',
        'MQTT IoT protocol simulation',
      ],
      outcome:
        'Simulated a 24.3% cost reduction during peak tariff cycles with zero compromise to comfort thresholds and guaranteed fail-safe manual overrides.',
      keyLearnings: [
        'Agentic state machines and deterministic fallback mechanisms',
        'Handling asynchronous telemetry data streams under real-time constraints',
        'Balancing predictive machine learning outputs with strict heuristic guardrails',
        'Designing intuitive data dashboards that translate complex ML decisions for non-technical users',
      ],
    },
  },
  {
    id: 'mern-cloud-platform',
    title: 'MERN Developer & Task Workspace',
    typeBadge: 'Personal Project',
    tagline: 'High-performance collaborative platform with real-time sync and modern UI',
    shortDescription:
      'Engineered an end-to-end web application with robust MongoDB schemas, Express/Node.js REST APIs, and a sleek glassmorphic React frontend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
    image: '/projects/mern-platform.svg',
    githubUrl: 'https://github.com/supriyasuresh',
    liveDemoUrl: 'https://github.com/supriyasuresh',
    modalDetails: {
      problem:
        'Developers frequently deal with disjointed task tracking, code snippet bookmarking, and documentation tools that lack modern responsive aesthetics and fast search.',
      approach:
        'Architected a unified full-stack MERN application utilizing normalized MongoDB data collections, Express authentication middleware with JWT tokens, and an optimized React component tree with responsive state caching.',
      technologiesDetailed: [
        'MongoDB Atlas & Mongoose ORM',
        'Node.js & Express RESTful API architecture',
        'React 19, TypeScript, and Vite',
        'Tailwind CSS design system with dark mode',
        'JSON Web Tokens (JWT) & bcrypt encryption',
      ],
      outcome:
        'Achieved sub-90ms API responses, 98+ Lighthouse scores across performance and accessibility, and seamless mobile-to-desktop responsiveness.',
      keyLearnings: [
        'Robust MongoDB index optimization and aggregation pipelines',
        'Securing REST endpoints against CORS vulnerabilities and rate abuses',
        'State normalization in React with custom hooks and zero unnecessary re-renders',
      ],
    },
  },
  {
    id: 'computer-vision-engine',
    title: 'Intelligent Vision Diagnostic Engine',
    typeBadge: 'Research Project',
    tagline: 'Deep learning pipeline for automated feature extraction and anomaly classification',
    shortDescription:
      'Developed a deep learning model pipeline leveraging convolutional neural networks to classify anomaly patterns in image datasets with high precision.',
    technologies: ['Python', 'Machine Learning', 'AI', 'OpenCV'],
    image: '/projects/vision-diagnostic.svg',
    githubUrl: 'https://github.com/supriyasuresh',
    liveDemoUrl: 'https://github.com/supriyasuresh',
    modalDetails: {
      problem:
        'Manual visual inspection of components is time-consuming, prone to human fatigue error, and difficult to audit at scale.',
      approach:
        'Created a Python-based pipeline employing OpenCV for image pre-processing (histogram equalization, Gaussian filtering) followed by custom CNN feature extraction layers with validation curves.',
      technologiesDetailed: [
        'Python 3.10 with PyTorch / TensorFlow basics',
        'OpenCV for spatial filtering and morphological operations',
        'Matplotlib & Seaborn for confusion matrices and loss curves',
        'NumPy vectorized image array manipulation',
      ],
      outcome:
        'Achieved 94.2% test-set classification accuracy across multi-class benchmark datasets with robust tolerance to varying illumination.',
      keyLearnings: [
        'Handling skewed dataset distributions with data augmentation techniques',
        'Analyzing overfitting via validation loss monitoring and dropout layers',
        'Vectorized matrix computation performance optimizations in Python',
      ],
    },
  },
  {
    id: 'agentic-orchestrator',
    title: 'Autonomous Multi-Agent Research Orchestrator',
    typeBadge: 'Hackathon Project',
    tagline: 'Distributed multi-agent pipeline for autonomous web research, summarization, and synthesis',
    shortDescription:
      'Architected a multi-agent system where autonomous agents decompose broad research queries into discrete search, extraction, and fact-checking subtasks.',
    technologies: ['Agentic AI', 'Python', 'FastAPI', 'React'],
    image: '/projects/agentic-orchestrator.svg',
    githubUrl: 'https://github.com/supriyasuresh',
    liveDemoUrl: 'https://github.com/supriyasuresh',
    modalDetails: {
      problem:
        'Conducting in-depth academic literature review requires cross-referencing dozens of papers, extracting methodologies, and reconciling conflicting conclusions manually.',
      approach:
        'Designed an agentic coordinator graph with dedicated worker nodes: a Planner Agent, a Search & Fetch Agent, a Verifier Agent, and an Executive Summarizer Agent with human-in-the-loop overrides.',
      technologiesDetailed: [
        'Python asynchronous asyncio task execution',
        'State-machine agent orchestration logic',
        'FastAPI streaming SSE (Server-Sent Events) backend',
        'React frontend with live thought-chain visualization',
      ],
      outcome:
        'Reduced research briefing compilation time from 3 hours to under 4 minutes while providing verified citation links for every synthesized claim.',
      keyLearnings: [
        'Multi-agent state synchronization and cyclic recovery strategies',
        'Prompt engineering guardrails and schema validation with Pydantic',
        'Streaming real-time agent trajectories over WebSockets / Server-Sent Events',
      ],
    },
  },
  {
    id: 'sensor-telemetry-pipeline',
    title: 'Real-Time IoT Sensor Telemetry Pipeline',
    typeBadge: 'Personal Project',
    tagline: 'Asynchronous event-driven data streaming engine for distributed hardware nodes',
    shortDescription:
      'Engineered an event-driven telemetry ingester processing high-frequency sensor readings with WebSocket broadcasting and dynamic metric graphing.',
    technologies: ['Node.js', 'MongoDB', 'React', 'Web'],
    image: '/projects/sensor-telemetry.svg',
    githubUrl: 'https://github.com/supriyasuresh',
    liveDemoUrl: 'https://github.com/supriyasuresh',
    modalDetails: {
      problem:
        'IoT device networks generate bursty, unpredictable data volumes that overwhelm conventional synchronous HTTP request-response architectures.',
      approach:
        'Implemented a pub/sub event architecture utilizing Node.js streams, buffer-pooling mechanisms, and MongoDB time-series collections with a React telemetry client.',
      technologiesDetailed: [
        'Node.js asynchronous event emitter architecture',
        'Socket.io for bi-directional live metric streaming',
        'MongoDB Time-Series collections with automated TTL indexing',
        'Canvas-accelerated chart rendering in React',
      ],
      outcome:
        'Sustained continuous throughput of 1,200 events/second with sub-40ms end-to-end glass latency.',
      keyLearnings: [
        'Backpressure handling in Node.js streaming pipelines',
        'Time-series bucket optimization in NoSQL databases',
        'Client-side Canvas rendering optimizations for high-frequency chart updates',
      ],
    },
  },
];

export const TECHNICAL_EDUCATION = {
  degree: 'B.Tech in Computer Science and Engineering',
  university: '[Add University / College Name]',
  graduationYear: 'Expected 2026',
  location: SHARED_INFO.location,
  coreCoursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++/Java/Python)',
    'Database Management Systems (SQL & NoSQL)',
    'Operating Systems & System Architecture',
    'Computer Networks & Protocols',
    'Artificial Intelligence & Machine Learning',
    'Software Engineering Principles',
  ],
  academicAchievements: [
    'Consistently ranked among the top percentile of Computer Science cohort',
    'Led multiple collegiate technical development initiatives & hackathons',
    'Active participant in regional engineering competitions & coding summits',
  ],
};
