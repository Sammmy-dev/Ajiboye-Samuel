export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  outcome: string;
  stack: string[];
  gradient: string;
  accentColor: string;
  year: string;
  role: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 'forge-ui',
    title: 'Forge UI',
    tagline: 'A headless component library for design systems.',
    description:
      'Forge UI is a fully accessible, unstyled component library built for teams who want complete visual control without sacrificing functionality. It ships zero-default styles, leaving all aesthetic decisions to the consumer.',
    challenge:
      'Existing libraries either constrain visual identity through opinionated styles or sacrifice accessibility for customizability. Forge bridges this gap by decoupling behaviour from presentation.',
    outcome:
      'Adopted by three product teams internally, reducing time-to-interactive-prototype by 40%. Published to npm with over 600 weekly downloads in the first month.',
    stack: ['TypeScript', 'React', 'Radix UI', 'Rollup', 'Vitest', 'Storybook'],
    gradient: 'linear-gradient(135deg, #38401B 0%, #1C1B1B 60%, #141313 100%)',
    accentColor: '#F1F27C',
    year: '2025',
    role: 'Lead Engineer',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics',
    tagline: 'Real-time data visualisation dashboard.',
    description:
      'A performant, real-time analytics platform that ingests event streams and renders live charts and KPI cards. Designed for operations teams who need millisecond-latency insight into system health.',
    challenge:
      'Handling 50,000+ events per second in the browser without blocking the main thread required a complete rethink of the rendering pipeline.',
    outcome:
      'Achieved sub-50ms render cycles using WebWorkers and virtual DOM diffing strategy. Reduced alert response time from 4 minutes to under 30 seconds for the client.',
    stack: ['React', 'WebSockets', 'D3.js', 'Node.js', 'Kafka', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #2A2A29 60%, #141313 100%)',
    accentColor: '#C58A21',
    year: '2024',
    role: 'Full-Stack Engineer',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'terrain',
    title: 'Terrain',
    tagline: 'AI-assisted project planning for engineering teams.',
    description:
      'Terrain uses language model embeddings to surface similar past tickets, estimate effort, and auto-assign work based on team member skill graphs. Integrates natively with Linear and Jira.',
    challenge:
      'Building a reliable embedding pipeline that could handle unstructured issue descriptions, code snippets, and attachments while returning semantically meaningful similarity scores.',
    outcome:
      'Cut sprint planning sessions from 2 hours to 35 minutes on average. Estimation accuracy improved by 28% over manual estimates after 6 sprints of feedback loops.',
    stack: ['Next.js', 'OpenAI API', 'Pinecone', 'Prisma', 'tRPC', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #0d1a2e 0%, #1C1B1B 60%, #141313 100%)',
    accentColor: '#F1F27C',
    year: '2024',
    role: 'Solo Developer',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'meridian',
    title: 'Meridian',
    tagline: 'Cross-platform mobile app for personal finance.',
    description:
      'Meridian aggregates accounts across multiple banks using open banking APIs, categorises transactions with a fine-tuned classification model, and surfaces actionable spending insights through a clean mobile interface.',
    challenge:
      'Normalising transaction data across 12 different bank APIs, each with their own schema and rate limits, into a single coherent data model.',
    outcome:
      'Over 2,400 users onboarded in private beta. Average session time of 6 minutes — 3× the industry benchmark for personal finance apps.',
    stack: ['React Native', 'Expo', 'Plaid API', 'FastAPI', 'Redis', 'Python'],
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2A2A29 60%, #141313 100%)',
    accentColor: '#C58A21',
    year: '2023',
    role: 'Mobile & Backend Engineer',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Vercel',
    period: '2024 — Present',
    location: 'Remote',
    description:
      'Building the core infrastructure and developer tooling that powers Next.js deployments at global scale.',
    highlights: [
      'Reduced cold-start latency by 220ms through edge runtime caching strategy',
      'Led migration of legacy build pipeline to Turborepo, cutting CI time by 55%',
      'Mentored 3 junior engineers through structured growth programmes',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Stripe',
    period: '2022 — 2024',
    location: 'Dublin, Ireland',
    description:
      'Worked on the Payments API team, owning the developer experience layer for card processing in the EMEA region.',
    highlights: [
      'Shipped SCA (Strong Customer Authentication) compliance features across 12 EU markets',
      'Redesigned the API error response schema, reducing support tickets by 31%',
      'Contributed to open-source SDKs across Python, Ruby, and Node.js',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Intercom',
    period: '2020 — 2022',
    location: 'Dublin, Ireland',
    description:
      'Part of the Messenger product team, building the in-product communication widget used by millions of customers globally.',
    highlights: [
      'Rebuilt the Messenger widget using Preact, achieving a 42% bundle size reduction',
      'Introduced visual regression testing with Percy, catching 15+ design regressions pre-release',
      'Drove adoption of CSS custom properties across the design system',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Rust'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'GraphQL', 'tRPC', 'Prisma', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Vercel', 'Docker', 'Kafka', 'GitHub Actions', 'Terraform'],
  },
];
