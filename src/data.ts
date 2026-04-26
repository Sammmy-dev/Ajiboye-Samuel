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
    id: 'tbmi-studio',
    title: 'TBMI Studio',
    tagline: 'A full-stack creative studio platform for lead capture and course enrollment.',
    description:
    'TBMI Studio is a responsive React application for a creative brand offering media services and training programs. It combines a marketing site with structured quote-request and enrollment flows, backed by an Express API, MongoDB persistence, and Cloudinary-powered receipt uploads.',
    challenge:
    'The platform needed to present multiple studio services and training offers clearly while also turning visitor interest into actionable submissions. The core problem was connecting a polished front-end experience to a lightweight backend that could reliably capture contact requests, course enrollments, and uploaded payment receipts.',
    outcome:
    'Delivered a production-ready full-stack site with service discovery, contact intake, enrollment submission, receipt upload handling, and an internal submissions view for reviewing quote requests and student applications.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary', 'Multer', 'Vercel Analytics'],
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 55%, #BF3A2B 100%)',
    accentColor: '#BF3A2B',
    year: '2026',
    role: 'Full-Stack Developer',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'far-app',
    title: 'FAR',
    tagline: 'A staffing and HR operations platform for recruitment, deployment, and internal workforce management.',
    description:
      'FAR, short for Flavour Airhis Resources, is a fullstack staffing management web app built for a Nigerian HR and recruitment agency. It combines a public-facing brand and job portal with a protected admin system for managing job posts, clients, employees, and candidate assessments.',
    challenge:
      'The business needed one system to handle two very different audiences: job seekers who should be able to browse roles publicly without friction, and internal staff who need secure operational tools for managing recruitment, deployment records, and sensitive employee data with role-based access.',
    outcome:
      'Delivered an in-development MVP with a public landing page, live jobs portal, secure staff dashboard, CRUD workflows for jobs, clients, and employees, role-based protection for financial data, and an assessment module for candidate testing and result review.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'NextAuth.js', 'Zod', 'Cloudinary'],
    gradient: 'linear-gradient(135deg, #9E0000 0%, #CC0000 100%)',
    accentColor: '#CC0000',
    year: '2026',
    role: 'Fullstack Engineer',
    liveUrl: 'https://far-5eez.vercel.app',
    githubUrl: '#',
    featured: true,
},
  {
  id: 'ore-port',
  title: 'SKYVAR Designs Portfolio',
  tagline: 'A modern portfolio showcasing creative design services.',
  description:
    'SKYVAR Designs is a professional portfolio website showcasing graphic design and branding services. Features an interactive showcase of social media flyer designs, brand publicity designs, and client testimonials with smooth animations and a modern aesthetic.',
  challenge:
    'Creating a visually stunning, performance-optimized portfolio that effectively showcases diverse design work while maintaining smooth animations and responsive behavior across all devices.',
  outcome:
    'Delivered a fast, modern portfolio with scroll-triggered animations and dynamic service showcases. Users can easily browse design samples and contact the designer through integrated social media links.',
  stack: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'React Icons', 'SWC', 'ESLint'],
  gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c4a6e 100%)',
  accentColor: '#0ea5e9',
  year: '2025',
  role: 'Full Stack Developer',
  liveUrl: '#',
  githubUrl: '#',
  featured: false,
},
  // {
  //   id: 'meridian',
  //   title: 'Meridian',
  //   tagline: 'Cross-platform mobile app for personal finance.',
  //   description:
  //     'Meridian aggregates accounts across multiple banks using open banking APIs, categorises transactions with a fine-tuned classification model, and surfaces actionable spending insights through a clean mobile interface.',
  //   challenge:
  //     'Normalising transaction data across 12 different bank APIs, each with their own schema and rate limits, into a single coherent data model.',
  //   outcome:
  //     'Over 2,400 users onboarded in private beta. Average session time of 6 minutes — 3× the industry benchmark for personal finance apps.',
  //   stack: ['React Native', 'Expo', 'Plaid API', 'FastAPI', 'Redis', 'Python'],
  //   gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2A2A29 60%, #141313 100%)',
  //   accentColor: '#C58A21',
  //   year: '2023',
  //   role: 'Mobile & Backend Engineer',
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   featured: false,
  // },
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
    items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'SQL'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'React Native', 'Flutter', 'Expo', 'Tailwind CSS', 'D3.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'GraphQL', 'tRPC', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'AI & Automation',
    items: ['OpenAI API', 'LangChain', 'Pinecone', 'Vercel AI SDK'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Vercel', 'Firebase', 'Docker', 'GitHub Actions'],
  },
];
