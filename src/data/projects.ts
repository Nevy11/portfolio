export interface ProjectDetails {
  id: string;
  title: string;
  type: string;
  typeColor: string;
  role: string;
  description: string;
  image?: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
    mobile?: string;
  };
  challenge: string;
  solution: string;
  outcomes: string[];
}

export const PROJECTS: ProjectDetails[] = [
  {
    id: 'vault',
    title: 'Vault',
    type: 'Production Live App',
    typeColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    role: 'Lead Full-Stack Developer',
    description: 'A secure financial command center. Features full wallet management, real-time ledger accounting, secure withdrawal validation pipelines, KYC onboarding, and integrations for Stripe Checkout, custom Stripe Issuing cards, and M-Pesa (Daraja API) callback processing. Includes a Gemini-powered AI financial advisor.',
    image: '/projects/vault.jpg',
    stack: ['React 19', 'TanStack Start', 'Supabase', 'Vite 7', 'Tailwind 4', 'Flutter'],
    links: {
      live: 'https://tanstack-start-app.vault-os.workers.dev',
      github: 'https://github.com/Nevy11/Vault',
      mobile: 'https://github.com/Nevy11/vault-mobile'
    },
    challenge: 'Architecting a real-time, highly secure ledger that handles multi-currency transactions, compliance/KYC, and physical/virtual card issuing without relying on monolithic financial platforms. The system needed immediate synchronization across web and mobile clients.',
    solution: 'Engineered a highly resilient edge-compute backend utilizing TanStack Start deployed on Cloudflare Workers. Implemented rigorous Row Level Security (RLS) policies in Supabase. Built a custom synchronization engine with Flutter for the mobile client, and orchestrated complex M-Pesa/Stripe webhook lifecycles.',
    outcomes: [
      'Sub-50ms API response times across the globe via Cloudflare Edge computing.',
      'Achieved 100% ACID compliance on all multi-wallet ledger transactions.',
      'Successfully integrated a Gemini-driven context-aware financial advisor into the user dashboard.'
    ]
  },
  {
    id: 'codevia',
    title: 'Codevia',
    type: 'Production Live App',
    typeColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    role: 'Creator & Full-Stack Engineer',
    description: 'An interactive learning workspace that synchronizes structured YouTube video programming directly with an in-browser, VS Code-like Monaco code editor engine. Leverages reactive state management for real-time code execution and persistence.',
    image: '/projects/codevia.jpg',
    stack: ['Angular', 'Angular Signals', 'Supabase Auth/DB', 'Monaco Editor', 'YouTube Player API'],
    links: {
      live: 'https://codevia.vercel.app',
      github: 'https://github.com/Nevy11/Codevia'
    },
    challenge: 'Creating a seamless, zero-latency learning environment where video timestamps trigger precise code-editor states, preventing students from falling out of sync with complex programming tutorials.',
    solution: 'Designed a highly reactive Angular architecture utilizing Angular Signals to bridge the YouTube iFrame API with Microsoft\'s Monaco Editor. State transitions are memoized and persisted securely in Supabase to allow students to pause and resume their sessions across devices.',
    outcomes: [
      'Zero-lag synchronization between video playback ticks and code editor diffs.',
      'Highly extensible file-tree architecture supporting multiple simulated languages.',
      'Seamless auth and progress tracking via Supabase.'
    ]
  },
  {
    id: 'sbf',
    title: 'Smart Blossoming Foundation',
    type: 'Production Live App',
    typeColor: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    role: 'Core Technical Advisor & Developer',
    description: 'A high-performance, bilingual (English & Kiswahili) wellness and personal transformation portal. Built to scale via Cloudflare serverless workers, featuring an integrated quantitative growth rating dashboard that metrics-tracks progress categories.',
    image: '/projects/sbf.jpg',
    stack: ['TypeScript', 'Cloudflare Workers', 'Tailwind'],
    links: {
      live: 'https://sbf-web.sbf-web.workers.dev',
      github: 'https://github.com/Nevy11/sbf-web'
    },
    challenge: 'Delivering an accessible, fully bilingual application that operates flawlessly on low-bandwidth connections across East Africa, while accurately tracking complex, multi-dimensional psychological growth metrics.',
    solution: 'Leveraged native TypeScript on Cloudflare Workers for an extreme edge-first deployment model, ensuring near-instant hydration. Built a bespoke metrics engine to evaluate and store quantitative progress over time in a localized KV store.',
    outcomes: [
      'Perfect Lighthouse performance scores (100/100/100/100).',
      'Dynamic language routing with zero layout shift.',
      'Secure, localized data retention protecting sensitive wellness metrics.'
    ]
  },
  {
    id: 'mental-health-backend',
    title: 'Mental Health Diary Backend',
    type: 'Architectural Deep-Dive',
    typeColor: 'text-violet-400 border-violet-400/20 bg-violet-400/10',
    role: 'Systems Engineer',
    description: 'A ultra-high-performance, low-memory footprint server architecture built to process high-concurrency requests. Implements a customized engine processing binary audio data stream to execute instant automated text transcriptions via asynchronous endpoints.',
    stack: ['Rust (Actix-web)', 'Python', 'PLpgSQL', 'PostgreSQL'],
    links: {
      github: 'https://github.com/Nevy11/Mental-Health-Diary-backend'
    },
    challenge: 'Processing continuous, high-concurrency binary audio streams for transcription while maintaining an ultra-low memory footprint and strict privacy standards for sensitive mental health logs.',
    solution: 'Architected the core ingestion service in Rust using Actix-web for bare-metal performance and memory safety. Offloaded heavy transcription machine-learning tasks to a Python microservice, bridging the two via efficient PLpgSQL functions in PostgreSQL.',
    outcomes: [
      'Achieved a 90% reduction in RAM overhead compared to a Node.js equivalent.',
      'Implemented robust asynchronous queues capable of handling simultaneous audio stream decoding.',
      'Secured all payloads with robust in-transit and at-rest cryptography.'
    ]
  },
  {
    id: 'fpredict',
    title: 'fpredict',
    type: 'Architectural Deep-Dive',
    typeColor: 'text-violet-400 border-violet-400/20 bg-violet-400/10',
    role: 'ML Developer',
    description: 'A data-driven predictive sports analytics engine compiled for English Premier League match cycles. Employs historical sequence datasets, expected goals calculations, and feature engineering to model upcoming fixture outcomes.',
    stack: ['Python', 'Scikit-Learn', 'TensorFlow', 'HTML'],
    links: {
      github: 'https://github.com/Nevy11/fpredict'
    },
    challenge: 'Building a predictive engine capable of digesting highly noisy, multi-variate historical football datasets (xG, sequence lengths, fatigue) into accurate match outcome probabilities.',
    solution: 'Designed an expansive feature-engineering pipeline using Python and Scikit-Learn to normalize time-series statistics. Built and trained a multi-layer perception (MLP) using TensorFlow, wrapped in a lightweight HTML interface for visualization.',
    outcomes: [
      'Achieved statistically significant predictive accuracy margins over baseline bookmaker models.',
      'Automated the continuous ingestion and data-cleansing pipeline for weekly Premier League stats.',
      'Developed a scalable architecture ready to absorb additional league datasets.'
    ]
  },
  {
    id: 'therapistgpt',
    title: 'TherapistGPT Engine',
    type: 'Architectural Deep-Dive',
    typeColor: 'text-violet-400 border-violet-400/20 bg-violet-400/10',
    role: 'AI/Backend Engineer',
    description: 'A specialized REST API suite hosting fine-tuned neural models for audio feature classification, emotion state parsing, and cognitive counseling assistance responses.',
    stack: ['Python', 'Django REST Framework', 'TensorFlow'],
    links: {
      github: 'https://github.com/Nevy11/therapistGpt'
    },
    challenge: 'Serving massive, fine-tuned deep learning models via a standard REST API without blocking the event loop or causing extensive request timeouts during real-time emotional analysis.',
    solution: 'Engineered a highly optimized Django REST Framework suite. Implemented a decoupled architecture where audio parsing and TensorFlow model inference run on background Celery workers, returning stateful status updates to the client.',
    outcomes: [
      'Successfully decoupled heavy tensor operations from the primary API request cycle.',
      'Enabled near-real-time emotion state classification from raw audio bytes.',
      'Created a secure, rate-limited environment suitable for sensitive cognitive queries.'
    ]
  }
];
