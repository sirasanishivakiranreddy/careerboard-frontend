/**
 * CareerBoard Mock Job Dataset
 * 26 realistic, diverse job records with comprehensive role descriptions,
 * compensation packages, requirements, and metadata.
 */

const JOB_DATA = [
  {
    id: "job-1",
    title: "Senior Full-Stack Engineer",
    company: "Stripe",
    department: "Core Payments",
    companyInitials: "ST",
    companyLogoBg: "#635BFF",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 165000,
    maxSalary: 210000,
    salaryDisplay: "$165,000 - $210,000",
    equity: "0.08% - 0.15% Equity",
    postedDaysAgo: 1,
    postedDate: "1 day ago",
    applicantsCount: 42,
    isFeatured: true,
    isUrgent: false,
    skills: ["React", "TypeScript", "Node.js", "Go", "Distributed Systems", "PostgreSQL"],
    shortDesc: "Build the next generation of global financial infrastructure and high-throughput transaction pipelines.",
    description: "At Stripe, we are building the economic infrastructure for the internet. As a Senior Full-Stack Engineer on the Core Payments team, you will design, build, and maintain mission-critical payment services handling billions of dollars in daily volume with 99.999% uptime.",
    responsibilities: [
      "Architect and ship robust, high-performance web applications and backend microservices.",
      "Collaborate with product designers and financial compliance partners to craft frictionless checkout flows.",
      "Design resilient APIs and distributed processing pipelines that scale gracefully across multi-region clusters.",
      "Mentor mid-level engineers, conduct comprehensive code reviews, and drive engineering excellence.",
      "Identify bottlenecks in database queries and real-time event streaming systems to maintain sub-100ms latencies."
    ],
    requirements: [
      "5+ years of production experience building scalable full-stack web applications.",
      "Strong proficiency in TypeScript, modern React, and backend technologies like Node.js or Go.",
      "Deep understanding of relational databases (PostgreSQL/MySQL), transaction isolation, and schema design.",
      "Demonstrated experience designing idempotent RESTful or GraphQL APIs.",
      "Excellent communication skills and an empathetic, customer-first problem-solving mindset."
    ],
    benefits: [
      "100% company-paid Health, Dental & Vision insurance for you and dependents",
      "401(k) with 5% immediate company match",
      "$3,500 annual continuous learning and conference budget",
      "Flexible PTO with mandatory minimum 20 days off per year",
      "$2,000 ergonomic home office equipment stipend",
      "16 weeks paid parental leave for all new parents"
    ],
    companyProfile: {
      size: "7,000+ employees",
      industry: "Financial Technology",
      founded: 2010,
      website: "https://stripe.com"
    }
  },
  {
    id: "job-2",
    title: "Lead Product Designer (Design Systems)",
    company: "Figma",
    department: "Design Systems",
    companyInitials: "FG",
    companyLogoBg: "#F24E1E",
    companyLogoColor: "#FFFFFF",
    location: "Remote - US",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 180000,
    maxSalary: 235000,
    salaryDisplay: "$180,000 - $235,000",
    equity: "0.10% - 0.20% Equity",
    postedDaysAgo: 2,
    postedDate: "2 days ago",
    applicantsCount: 68,
    isFeatured: true,
    isUrgent: true,
    skills: ["Figma", "Design Systems", "UI/UX", "Accessibility", "Design Tokens", "Prototyping"],
    shortDesc: "Shape the future of collaborative design tools by establishing world-class design systems and component libraries.",
    description: "Figma is where teams design, prototype, and build digital experiences together. We are seeking a visionary Lead Product Designer to spearhead our unified Design Systems organization, ensuring cohesive, delightful, and highly accessible user experiences across desktop, web, and mobile platforms.",
    responsibilities: [
      "Define the visual identity, interaction paradigms, and multi-platform design tokens for Figma's ecosystem.",
      "Partner closely with frontend architects to bridge the gap between design tokens and production React components.",
      "Champion WCAG 2.1 AAA accessibility standards across all core workflows and UI primitives.",
      "Conduct user research sessions with millions of global designers to validate new component interactions.",
      "Evangelize design system adoption and write comprehensive documentation and guidelines."
    ],
    requirements: [
      "7+ years of product design experience with at least 3 years focused specifically on design systems at scale.",
      "Mastery of Figma, advanced autolayout, component variables, and interactive prototyping.",
      "Solid understanding of frontend technologies (HTML5, CSS3, DOM structure, ARIA roles).",
      "Proven track record of building and evolving multi-brand, multi-theme design systems.",
      "Compelling portfolio demonstrating systems thinking, motion design, and meticulous typography."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision coverage",
      "Annual $4,000 Wellness & Lifestyle spending account",
      "Generous equity package with standard 4-year vesting",
      "Unlimited paid time off + two company-wide recharge weeks",
      "Monthly $250 remote work and internet stipend",
      "Top-tier MacBook Pro + dual 4K monitor home setup"
    ],
    companyProfile: {
      size: "1,500+ employees",
      industry: "Design & Collaboration Software",
      founded: 2012,
      website: "https://figma.com"
    }
  },
  {
    id: "job-3",
    title: "Staff Frontend Architect",
    company: "Linear",
    department: "Web Platform",
    companyInitials: "LN",
    companyLogoBg: "#5E6AD2",
    companyLogoColor: "#FFFFFF",
    location: "Remote - Worldwide",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 195000,
    maxSalary: 250000,
    salaryDisplay: "$195,000 - $250,000",
    equity: "0.15% - 0.30% Equity",
    postedDaysAgo: 0,
    postedDate: "Just now",
    applicantsCount: 19,
    isFeatured: true,
    isUrgent: true,
    skills: ["React", "TypeScript", "Performance", "WebAssembly", "IndexedDB", "Offline First"],
    shortDesc: "Build ultra-fast, local-first client architecture with sub-50ms interaction response times.",
    description: "Linear builds high-performance tools for modern software development teams. We obsess over milliseconds, micro-interactions, and keyboard-first workflows. As Staff Frontend Architect, you will own the core client engine, offline synchronization layer, and client-side database caching.",
    responsibilities: [
      "Drive the core architecture of our desktop and web apps, maintaining 60 FPS animations and instant responsiveness.",
      "Design sync protocols and optimistic mutation pipelines powered by client-side SQLite/IndexedDB.",
      "Profile CPU and memory usage to eliminate layout thrashing, excessive re-renders, and garbage collection pauses.",
      "Collaborate with founders and principal engineers to set technical direction for the next 3-5 years.",
      "Contribute to open-source developer tooling and represent Linear at technical summits."
    ],
    requirements: [
      "8+ years of engineering experience with deep specialization in modern browser internals and rendering engines.",
      "Exceptional mastery of TypeScript, modern JavaScript, web workers, and state synchronization paradigms.",
      "Hands-on experience building local-first or collaborative real-time web applications.",
      "Passionate about craft, visual precision, keyboard navigation, and developer experience.",
      "Strong background in technical writing and architectural RFC leadership."
    ],
    benefits: [
      "Top 1% market compensation & meaningful equity",
      "Work from anywhere in the world (fully distributed from day one)",
      "30 days minimum mandatory vacation per year",
      "Annual team retreats in breathtaking global destinations",
      "Generous hardware refresh budget every 18 months",
      "Comprehensive global healthcare coverage"
    ],
    companyProfile: {
      size: "80+ employees",
      industry: "Productivity & Developer Tools",
      founded: 2019,
      website: "https://linear.app"
    }
  },
  {
    id: "job-4",
    title: "Machine Learning & AI Platform Engineer",
    company: "OpenAI",
    department: "Applied AI",
    companyInitials: "OA",
    companyLogoBg: "#10A37F",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "onsite",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 210000,
    maxSalary: 300000,
    salaryDisplay: "$210,000 - $300,000",
    equity: "Competitive Stock / PPU Units",
    postedDaysAgo: 3,
    postedDate: "3 days ago",
    applicantsCount: 115,
    isFeatured: true,
    isUrgent: false,
    skills: ["Python", "PyTorch", "Kubernetes", "CUDA", "Distributed Training", "Ray"],
    shortDesc: "Scale large language model inference clusters and high-throughput real-time AI serving engines.",
    description: "OpenAI conducts fundamental AI research and deploys state-of-the-art models worldwide. On the Applied AI team, you will build and optimize the distributed serving infrastructure that powers ChatGPT and our developer API for hundreds of millions of daily active users.",
    responsibilities: [
      "Build high-throughput, low-latency model inference pipelines running across tens of thousands of GPUs.",
      "Optimize KV cache management, tensor parallelism, and batching algorithms for large foundation models.",
      "Design auto-scaling orchestration systems with Kubernetes, Triton, and custom CUDA kernels.",
      "Work with research scientists to take frontier multimodal models from laboratory experiments into production.",
      "Implement robust monitoring, anomaly detection, and safety evaluation safeguards."
    ],
    requirements: [
      "4+ years of production experience in machine learning systems, distributed computing, or systems programming.",
      "Proficiency in Python and C++/CUDA with experience profiling GPU utilization and memory bandwidth.",
      "Strong grasp of transformer architectures, attention mechanisms, and model quantization (FP8, INT4).",
      "Experience with Kubernetes, Ray, Slurm, or large-scale cluster scheduling.",
      "BS, MS, or PhD in Computer Science or equivalent practical track record."
    ],
    benefits: [
      "Industry-leading total compensation and equity participation",
      "Unlimited PTO with generous culture of taking time off",
      "Full premium coverage for Medical, Dental, Vision, and Mental Health",
      "On-site gourmet meals, snacks, and artisan barista bar",
      "Generous fertility, adoption, and family planning benefits",
      "Relocation assistance and temporary housing support"
    ],
    companyProfile: {
      size: "1,200+ employees",
      industry: "Artificial Intelligence",
      founded: 2015,
      website: "https://openai.com"
    }
  },
  {
    id: "job-5",
    title: "Senior DevOps & Cloud Infrastructure Engineer",
    company: "Datadog",
    department: "Platform Engineering",
    companyInitials: "DD",
    companyLogoBg: "#632CA6",
    companyLogoColor: "#FFFFFF",
    location: "New York, NY",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 155000,
    maxSalary: 195000,
    salaryDisplay: "$155,000 - $195,000",
    equity: "RSU Equity Grants",
    postedDaysAgo: 4,
    postedDate: "4 days ago",
    applicantsCount: 34,
    isFeatured: false,
    isUrgent: false,
    skills: ["AWS", "Kubernetes", "Terraform", "Go", "Docker", "CI/CD", "Observability"],
    shortDesc: "Manage multi-region multi-cloud Kubernetes clusters processing trillions of observability events.",
    description: "Datadog is the monitoring and security platform for cloud applications. Our engineering team handles massive data ingestion rates. In this role, you will build infrastructure tooling, automate cloud provisioning, and elevate reliability for thousands of internal engineers.",
    responsibilities: [
      "Manage and scale multi-tenant Kubernetes clusters across AWS, GCP, and Azure.",
      "Develop Infrastructure as Code (IaC) modules using Terraform and internal Go-based controllers.",
      "Build automated canary deployment pipelines and zero-downtime release workflows.",
      "Partner with product development squads to establish SLOs, SLIs, and chaos engineering practices.",
      "Participate in on-call rotations with well-defined runbooks and post-incident blameless reviews."
    ],
    requirements: [
      "5+ years of DevOps, SRE, or Cloud Platform engineering experience.",
      "Hands-on expertise with AWS/GCP architecture and deep Kubernetes networking knowledge.",
      "Proficient in Terraform, Bash, and at least one programming language (Go or Python).",
      "Solid understanding of CI/CD systems (GitHub Actions, ArgoCD, GitLab CI).",
      "Demonstrated experience maintaining high-availability 24/7 production environments."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision insurance",
      "Employee Stock Purchase Plan (ESPP) with 15% discount",
      "401(k) matching up to 4%",
      "Flexible hybrid work environment (2 days in office)",
      "$1,200 annual fitness and wellness reimbursement",
      "Tuition assistance and professional certification reimbursement"
    ],
    companyProfile: {
      size: "5,000+ employees",
      industry: "Cloud Monitoring & Observability",
      founded: 2010,
      website: "https://datadoghq.com"
    }
  },
  {
    id: "job-6",
    title: "Staff Product Manager - Growth & Monetization",
    company: "Notion",
    department: "Product",
    companyInitials: "NT",
    companyLogoBg: "#000000",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 185000,
    maxSalary: 240000,
    salaryDisplay: "$185,000 - $240,000",
    equity: "0.05% - 0.12% Equity",
    postedDaysAgo: 5,
    postedDate: "5 days ago",
    applicantsCount: 52,
    isFeatured: false,
    isUrgent: false,
    skills: ["Product Strategy", "Growth", "A/B Testing", "SQL", "User Analytics", "SaaS Pricing"],
    shortDesc: "Lead product initiatives to drive conversion, self-serve upgrade funnels, and enterprise expansion.",
    description: "Notion is the all-in-one workspace for notes, docs, project management, and AI. As Staff Product Manager for Growth, you will own the user activation journey, viral adoption loops, and monetization strategy that drives sustainable revenue expansion across our 100M+ users.",
    responsibilities: [
      "Define product roadmaps for onboarding, plan upgrades, and workspace team collaboration loops.",
      "Design and execute hundreds of high-velocity A/B tests to optimize user conversion and retention.",
      "Collaborate with engineering, data science, design, and product marketing to launch frictionless features.",
      "Conduct deep quantitative analyses using SQL and qualitative interviews to uncover user pain points.",
      "Establish north-star growth metrics and present strategy updates to executive leadership."
    ],
    requirements: [
      "6+ years of product management experience with a strong track record in B2B SaaS or PLG growth.",
      "Exceptional quantitative analytical skills and hands-on SQL experience.",
      "Proven ability to run rigorous experimentation programs and synthesize complex data insights.",
      "Deep empathy for user experience and visual craft.",
      "Excellent written communication and stakeholder leadership abilities."
    ],
    benefits: [
      "Full health, dental, and vision insurance premiums paid",
      "Flexible PTO policy with mandatory company holidays",
      "Annual $3,000 professional growth stipend",
      "Daily catered lunches and dinners in our SF office",
      "Commuter benefits and transit subsidies",
      "Generous family leave policies"
    ],
    companyProfile: {
      size: "800+ employees",
      industry: "Productivity Software",
      founded: 2013,
      website: "https://notion.so"
    }
  },
  {
    id: "job-7",
    title: "Junior Frontend Developer",
    company: "Shopify",
    department: "Merchant Solutions",
    companyInitials: "SH",
    companyLogoBg: "#96BF48",
    companyLogoColor: "#FFFFFF",
    location: "Austin, TX",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "entry",
    minSalary: 85000,
    maxSalary: 110000,
    salaryDisplay: "$85,000 - $110,000",
    equity: "Stock Option Grants",
    postedDaysAgo: 1,
    postedDate: "1 day ago",
    applicantsCount: 142,
    isFeatured: false,
    isUrgent: false,
    skills: ["JavaScript", "HTML5", "CSS3", "React", "Git", "Web Standards"],
    shortDesc: "Kickstart your engineering career building accessible storefronts and merchant admin tools.",
    description: "Shopify powers millions of businesses worldwide. We are looking for an ambitious Junior Frontend Developer to join our Merchant Solutions team. You will work alongside experienced mentors to create responsive, accessible, and delightful merchant web experiences.",
    responsibilities: [
      "Build semantic HTML, modular CSS, and responsive React UI components according to spec.",
      "Write unit and integration tests using Jest and React Testing Library.",
      "Debug cross-browser compatibility issues across modern mobile and desktop browsers.",
      "Participate actively in team standups, sprint planning, and constructive code reviews.",
      "Learn and apply modern web accessibility (a11y) standards and performance techniques."
    ],
    requirements: [
      "1-2 years of frontend experience (including internships, bootcamps, or personal portfolio projects).",
      "Strong foundational understanding of JavaScript (ES6+), HTML5, and modern CSS (Flexbox, Grid).",
      "Familiarity with React, component lifecycles, and state management basics.",
      "Proficiency with Git version control and collaborative workflows.",
      "Eager curiosity to learn, receive feedback, and grow as a software craftsman."
    ],
    benefits: [
      "Comprehensive medical, dental, and health spending account",
      "Dedicated mentorship program and quarterly career advancement paths",
      "$2,000 annual education allowance for books and courses",
      "Work-from-home allowance and ergonomic chair/desk subsidy",
      "Competitive paid vacation and personal wellness days",
      "Employee discounts across thousands of Shopify merchant stores"
    ],
    companyProfile: {
      size: "10,000+ employees",
      industry: "E-Commerce Technology",
      founded: 2006,
      website: "https://shopify.com"
    }
  },
  {
    id: "job-8",
    title: "Senior Backend Engineer (Distributed Databases)",
    company: "Snowflake",
    department: "Database Engine",
    companyInitials: "SN",
    companyLogoBg: "#29B5E8",
    companyLogoColor: "#FFFFFF",
    location: "Seattle, WA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 175000,
    maxSalary: 225000,
    salaryDisplay: "$175,000 - $225,000",
    equity: "Generous RSU Allocation",
    postedDaysAgo: 6,
    postedDate: "6 days ago",
    applicantsCount: 29,
    isFeatured: false,
    isUrgent: false,
    skills: ["C++", "Java", "Distributed Systems", "SQL Query Engine", "Concurrency", "Linux Internals"],
    shortDesc: "Optimize core query processing engines and distributed storage layers for petabyte-scale workloads.",
    description: "Snowflake is the Data Cloud enabling thousands of organizations to unite siloed data. As a Senior Backend Engineer on the Database Engine team, you will tackle hard problems in distributed transaction management, vectorized query execution, and high-performance file formats.",
    responsibilities: [
      "Develop high-throughput query compilation and execution engines in modern C++ and Java.",
      "Design fault-tolerant distributed algorithms for query scheduling and cache coherence.",
      "Optimize data compression algorithms and I/O efficiency against cloud object stores.",
      "Conduct memory leak profiling, lock-free concurrency tuning, and system benchmarks.",
      "Author detailed architectural design documents for mission-critical engine subsystems."
    ],
    requirements: [
      "5+ years of backend or systems engineering experience with C++, Java, or Rust.",
      "Strong understanding of computer architecture, memory hierarchies, and concurrency primitives.",
      "Experience with relational database internals, query optimizers, or distributed storage systems.",
      "Solid foundation in data structures, algorithmic complexity, and operating systems.",
      "BS/MS in Computer Science or related technical discipline."
    ],
    benefits: [
      "Top-tier medical, prescription, dental, and vision plans",
      "401(k) retirement plan with corporate match",
      "Generous initial RSU grant with quarterly vesting",
      "Flexible hybrid work policy",
      "$1,500 annual fitness and wellbeing allowance",
      "20 days paid vacation + 12 annual holidays"
    ],
    companyProfile: {
      size: "6,000+ employees",
      industry: "Cloud Data Platforms",
      founded: 2012,
      website: "https://snowflake.com"
    }
  },
  {
    id: "job-9",
    title: "Senior Application Security Engineer",
    company: "GitHub",
    department: "Security Engineering",
    companyInitials: "GH",
    companyLogoBg: "#24292E",
    companyLogoColor: "#FFFFFF",
    location: "Remote - US",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 160000,
    maxSalary: 215000,
    salaryDisplay: "$160,000 - $215,000",
    equity: "Microsoft Stock (RSUs)",
    postedDaysAgo: 3,
    postedDate: "3 days ago",
    applicantsCount: 22,
    isFeatured: false,
    isUrgent: true,
    skills: ["AppSec", "Threat Modeling", "Penetration Testing", "Ruby", "TypeScript", "Cryptography", "OAuth"],
    shortDesc: "Safeguard over 100 million software developers and billions of code repositories from cyber threats.",
    description: "GitHub is the home for all developers. The Application Security team protects GitHub's code, infrastructure, and user data. You will conduct threat models, perform secure code reviews, build automated security scanners, and partner with product squads to eliminate vulnerabilities before they reach production.",
    responsibilities: [
      "Perform architecture reviews and threat modeling for new product features and APIs.",
      "Build automated static and dynamic analysis (SAST/DAST) tooling integrated into CI pipelines.",
      "Triage bug bounty submissions, investigate vulnerabilities, and collaborate on rapid patches.",
      "Conduct internal penetration tests and security assessments of core web services.",
      "Develop secure coding guidelines and conduct engaging training workshops for engineers."
    ],
    requirements: [
      "5+ years in application security, penetration testing, or software engineering with security focus.",
      "Deep understanding of web vulnerabilities (OWASP Top 10, SSRF, XSS, CSRF, IDOR) and their remediations.",
      "Proficiency in reading and auditing code written in Ruby, TypeScript, Go, or Python.",
      "Experience with authentication protocols (OAuth 2.0, SAML, OIDC, WebAuthn).",
      "Strong offensive and defensive security mindset with industry certifications (OSCP, CISSP) a plus."
    ],
    benefits: [
      "100% company-paid healthcare and dental coverage",
      "Microsoft 401(k) plan with 50% match up to IRS maximum",
      "Unlimited PTO and flexible work hours across time zones",
      "Annual $2,500 training, conference, and certification stipend",
      "Home office ergonomic setup package",
      "Generous family caregiver and parental leave"
    ],
    companyProfile: {
      size: "3,000+ employees",
      industry: "Software Development Platforms",
      founded: 2008,
      website: "https://github.com"
    }
  },
  {
    id: "job-10",
    title: "Senior Product Designer (Mobile & Web)",
    company: "Airbnb",
    department: "Guest Experience",
    companyInitials: "AB",
    companyLogoBg: "#FF5A5F",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 160000,
    maxSalary: 205000,
    salaryDisplay: "$160,000 - $205,000",
    equity: "Annual Equity Refreshers",
    postedDaysAgo: 4,
    postedDate: "4 days ago",
    applicantsCount: 77,
    isFeatured: false,
    isUrgent: false,
    skills: ["Figma", "Interaction Design", "Mobile UI", "User Research", "Storyboarding", "Design Tokens"],
    shortDesc: "Design intuitive booking journeys and immersive discovery experiences for millions of global travelers.",
    description: "Airbnb creates a world where anyone can belong anywhere. On the Guest Experience team, you will craft the search, exploration, and reservation flows that inspire millions of guests to discover unique stays and experiences across the globe.",
    responsibilities: [
      "Lead end-to-end design for major mobile (iOS/Android) and web features from discovery to launch.",
      "Partner with product managers, data scientists, and content strategists to identify user opportunities.",
      "Build high-fidelity prototypes to test hypotheses and validate usability with global user cohorts.",
      "Contribute reusable patterns and components to the Airbnb Design Language System (DLS).",
      "Present strategic design rationales clearly to cross-functional leaders and executive design heads."
    ],
    requirements: [
      "5+ years designing consumer-facing digital products across mobile and responsive web.",
      "Outstanding visual aesthetic, typography, composition, and micro-interaction skills.",
      "Proven ability to translate complex user journeys into simple, elegant, and frictionless interfaces.",
      "Experience conducting user interviews, usability testing, and interpreting quantitative telemetry.",
      "Extensive portfolio demonstrating product impact, craft, and end-to-end execution."
    ],
    benefits: [
      "$2,000 annual Airbnb travel credit to explore the world",
      "Comprehensive medical, dental, and vision insurance",
      "Live and work anywhere policy with temporary international travel freedom",
      "401(k) retirement savings plan with matching",
      "Paid volunteer time off and philanthropic matching",
      "Annual wellness and fitness allowance"
    ],
    companyProfile: {
      size: "6,800+ employees",
      industry: "Travel & Hospitality Tech",
      founded: 2008,
      website: "https://airbnb.com"
    }
  },
  {
    id: "job-11",
    title: "Lead Edge Cloud Platform Engineer",
    company: "Cloudflare",
    department: "Workers & Edge Computing",
    companyInitials: "CF",
    companyLogoBg: "#F38020",
    companyLogoColor: "#FFFFFF",
    location: "Austin, TX",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 185000,
    maxSalary: 245000,
    salaryDisplay: "$185,000 - $245,000",
    equity: "Competitive RSU Packages",
    postedDaysAgo: 2,
    postedDate: "2 days ago",
    applicantsCount: 31,
    isFeatured: true,
    isUrgent: false,
    skills: ["Rust", "C++", "V8 Engine", "WebAssembly", "Networking", "TCP/IP", "BGP"],
    shortDesc: "Empower millions of developers to execute code in milliseconds at over 300 global edge locations.",
    description: "Cloudflare helps build a better internet. The Workers Edge Platform allows developers to deploy serverless functions globally with instant cold starts. As a Lead Edge Cloud Engineer, you will work on the core runtime isolation, memory sandboxing, and networking fabric that powers Cloudflare Workers.",
    responsibilities: [
      "Design and implement high-performance runtime features in V8, Rust, and C++ for Cloudflare Workers.",
      "Optimize sandboxing mechanics, process isolation, and sub-millisecond execution startups.",
      "Collaborate with global networking teams on Anycast routing, HTTP/3, and QUIC optimization.",
      "Lead architectural discussions and mentor senior and staff engineering peers.",
      "Write high-quality technical posts breaking down low-level performance breakthroughs."
    ],
    requirements: [
      "7+ years of experience in systems programming with Rust or C++.",
      "Deep understanding of browser runtimes (V8/JavaScriptCore), WebAssembly, or process isolation.",
      "Strong knowledge of network protocols (HTTP/2, HTTP/3, TLS, DNS, TCP/IP).",
      "Experience optimizing systems for extreme concurrency, throughput, and low latency.",
      "BS/MS or equivalent practical expertise in computer science or related discipline."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision plans",
      "Competitive 401(k) matching program",
      "Generous equity grants with standard vesting schedules",
      "Continuous learning and conference sponsorship",
      "Generous parental leave and family assistance",
      "Annual wellness stipend and gym reimbursement"
    ],
    companyProfile: {
      size: "3,500+ employees",
      industry: "Cloud Infrastructure & Cybersecurity",
      founded: 2009,
      website: "https://cloudflare.com"
    }
  },
  {
    id: "job-12",
    title: "Data Scientist - Analytics & Experimentation",
    company: "Spotify",
    department: "Personalization",
    companyInitials: "SP",
    companyLogoBg: "#1DB954",
    companyLogoColor: "#FFFFFF",
    location: "New York, NY",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "mid",
    minSalary: 135000,
    maxSalary: 170000,
    salaryDisplay: "$135,000 - $170,000",
    equity: "Stock Option Program",
    postedDaysAgo: 5,
    postedDate: "5 days ago",
    applicantsCount: 88,
    isFeatured: false,
    isUrgent: false,
    skills: ["Python", "SQL", "Statistics", "A/B Testing", "Machine Learning", "Tableau", "Causal Inference"],
    shortDesc: "Drive data-informed decisions and statistical modeling behind Discover Weekly and Spotify playlists.",
    description: "Spotify is the world's most popular audio streaming service. As a Data Scientist on the Personalization team, you will design experiments, build predictive models, and deliver quantitative insights that enhance music and podcast recommendation algorithms for 600M+ listeners.",
    responsibilities: [
      "Design, analyze, and interpret complex A/B and multi-armed bandit experiments at scale.",
      "Build causal inference models to evaluate long-term listener retention and subscriber engagement.",
      "Author optimized SQL pipelines and automate dashboard reports for engineering and product leads.",
      "Collaborate with algorithmic researchers to test new recommendation model candidates.",
      "Present data-backed product recommendations to cross-functional leadership."
    ],
    requirements: [
      "3+ years of professional data science or product analytics experience.",
      "Strong foundation in statistics, probability theory, hypothesis testing, and causal inference.",
      "Expert-level SQL and strong proficiency in Python (pandas, NumPy, statsmodels, scikit-learn).",
      "Experience working with big data tooling (BigQuery, Spark, or Databricks).",
      "Clear storytelling ability to translate complex data into actionable product strategies."
    ],
    benefits: [
      "All The Feels health and wellness program (100% covered health, dental, vision)",
      "Spotify premium subscription + family allowance",
      "Global Work From Anywhere policy",
      "6 months fully paid parental leave for all parents",
      "Annual education and development fund",
      "Flexible public holiday policy"
    ],
    companyProfile: {
      size: "9,000+ employees",
      industry: "Digital Media & Audio Streaming",
      founded: 2006,
      website: "https://spotify.com"
    }
  },
  {
    id: "job-13",
    title: "Senior QA & Test Automation Engineer",
    company: "Canva",
    department: "Quality Engineering",
    companyInitials: "CV",
    companyLogoBg: "#00C4CC",
    companyLogoColor: "#FFFFFF",
    location: "Remote - US",
    workMode: "remote",
    type: "contract",
    experienceLevel: "senior",
    minSalary: 120000,
    maxSalary: 150000,
    salaryDisplay: "$120,000 - $150,000 (Contract)",
    equity: "N/A",
    postedDaysAgo: 3,
    postedDate: "3 days ago",
    applicantsCount: 39,
    isFeatured: false,
    isUrgent: false,
    skills: ["Playwright", "Cypress", "TypeScript", "Jest", "CI/CD", "Web Performance", "Accessibility"],
    shortDesc: "Architect automated end-to-end testing frameworks ensuring rock-solid visual editor stability.",
    description: "Canva makes visual design accessible to everyone. Our rich web canvas handles complex vector geometry, video editing, and generative graphics. We are seeking an experienced Contract QA Automation Engineer to build reliable automated test suites using Playwright and TypeScript.",
    responsibilities: [
      "Design and maintain end-to-end automated test suites for desktop and mobile web editors.",
      "Build visual regression test pipelines using Playwright and pixel-comparison algorithms.",
      "Integrate automated test runs into GitHub Actions pipelines with parallelized workers.",
      "Identify edge cases, performance regressions, and accessibility defects across release candidates.",
      "Provide actionable debugging logs, traces, and reproduction scripts to feature development squads."
    ],
    requirements: [
      "4+ years of test automation experience with modern frameworks (Playwright, Cypress, WebdriverIO).",
      "Strong JavaScript / TypeScript coding skills.",
      "Deep understanding of DOM rendering, async operations, and canvas / WebGL testing challenges.",
      "Experience with CI/CD integration and test shard optimization.",
      "Detail-oriented problem solver with strong written documentation skills."
    ],
    benefits: [
      "Competitive hourly / annual contract compensation",
      "Flexible schedule with remote-first collaboration",
      "Canva Pro lifetime subscription",
      "High-impact projects with rapid deployment cycles",
      "Potential conversion to full-time employment based on performance"
    ],
    companyProfile: {
      size: "4,000+ employees",
      industry: "Visual Communications Software",
      founded: 2013,
      website: "https://canva.com"
    }
  },
  {
    id: "job-14",
    title: "Developer Relations & Technical Advocate",
    company: "Supabase",
    department: "Community & Ecosystem",
    companyInitials: "SB",
    companyLogoBg: "#3ECF8E",
    companyLogoColor: "#FFFFFF",
    location: "Remote - Worldwide",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "mid",
    minSalary: 130000,
    maxSalary: 165000,
    salaryDisplay: "$130,000 - $165,000",
    equity: "0.08% - 0.15% Equity",
    postedDaysAgo: 1,
    postedDate: "1 day ago",
    applicantsCount: 45,
    isFeatured: true,
    isUrgent: false,
    skills: ["PostgreSQL", "Next.js", "TypeScript", "Technical Writing", "Public Speaking", "Open Source"],
    shortDesc: "Inspire developers worldwide with open-source sample apps, technical guides, and conference workshops.",
    description: "Supabase is the open-source Firebase alternative providing Postgres, Auth, Realtime, Functions, and Storage. As a Developer Advocate, you will be the voice of developers internally and the bridge to our vibrant global open-source community.",
    responsibilities: [
      "Build inspiring, high-quality open-source reference applications showcasing Supabase features.",
      "Author clear technical tutorials, migration guides, and video breakdowns for the developer community.",
      "Speak at major developer conferences, host community live streams, and lead interactive workshops.",
      "Gather developer feedback and collaborate with core engineering teams to improve APIs and SDKs.",
      "Engage with developers on Discord, GitHub Discussions, and Twitter to solve technical roadblocks."
    ],
    requirements: [
      "3+ years of software development experience with modern full-stack web stacks (React/Next.js, Node.js).",
      "Strong understanding of PostgreSQL, database relationships, and backend concepts.",
      "Proven track record of technical content creation (blogs, videos, podcasts, or conference talks).",
      "Active participation in open-source projects or developer communities.",
      "Warm, engaging communication style and genuine passion for helping developers succeed."
    ],
    benefits: [
      "Work from anywhere in the world on your own schedule",
      "Generous equity package and transparent salary tiers",
      "Unlimited paid time off with mandatory 25 days minimum",
      "Annual $3,000 home office and tech setup fund",
      "Full health insurance coverage or local stipend equivalent",
      "Company retreats twice a year in inspiring international spots"
    ],
    companyProfile: {
      size: "120+ employees",
      industry: "Open Source Database Tools",
      founded: 2020,
      website: "https://supabase.com"
    }
  },
  {
    id: "job-15",
    title: "Frontend Engineering Intern (Summer 2026)",
    company: "Vercel",
    department: "Next.js Framework",
    companyInitials: "VC",
    companyLogoBg: "#000000",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "internship",
    experienceLevel: "entry",
    minSalary: 55000,
    maxSalary: 75000,
    salaryDisplay: "$55,000 - $75,000 (Prorated)",
    equity: "N/A",
    postedDaysAgo: 2,
    postedDate: "2 days ago",
    applicantsCount: 260,
    isFeatured: false,
    isUrgent: true,
    skills: ["JavaScript", "HTML5", "CSS3", "React", "Next.js", "Git"],
    shortDesc: "Join the team behind Next.js and Vercel for a 12-week paid engineering internship with mentorship.",
    description: "Vercel provides developer tools and cloud infrastructure to build and deploy the web. Our 12-week summer internship pairs you with a Staff Engineer to contribute real production code to Next.js, v0, and the Vercel dashboard.",
    responsibilities: [
      "Collaborate with senior engineers to implement UI components and improve framework documentation.",
      "Write unit tests and documentation for open-source Next.js examples and templates.",
      "Participate in daily engineering scrums, design reviews, and hackathons.",
      "Present a final capstone project to the entire Vercel engineering organization.",
      "Learn modern CI/CD, release management, and high-performance web optimization."
    ],
    requirements: [
      "Currently enrolled in or recent graduate of a Computer Science or related degree / bootcamp.",
      "Strong understanding of JavaScript fundamentals, HTML5 semantics, and CSS layout models.",
      "Hands-on project experience with React or Next.js.",
      "Curiosity about web performance, developer experience, and modern frontend tooling.",
      "Ability to work full-time (40 hrs/week) for 12 weeks during Summer 2026."
    ],
    benefits: [
      "Competitive hourly wage + housing relocation stipend",
      "1-on-1 mentorship from industry-leading frontend architects",
      "Brand new MacBook Pro provided for the duration of the internship",
      "Executive speaker sessions and professional networking events",
      "High probability of full-time return offer upon graduation"
    ],
    companyProfile: {
      size: "600+ employees",
      industry: "Frontend Cloud Platforms",
      founded: 2015,
      website: "https://vercel.com"
    }
  },
  {
    id: "job-16",
    title: "Staff Site Reliability Engineer (Global Latency)",
    company: "Discord",
    department: "Core Infrastructure",
    companyInitials: "DC",
    companyLogoBg: "#5865F2",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 190000,
    maxSalary: 250000,
    salaryDisplay: "$190,000 - $250,000",
    equity: "Significant Stock Grants",
    postedDaysAgo: 6,
    postedDate: "6 days ago",
    applicantsCount: 38,
    isFeatured: false,
    isUrgent: false,
    skills: ["Rust", "Elixir", "Kubernetes", "Linux Kernel", "eBPF", "Prometheus", "WebSockets"],
    shortDesc: "Scale voice, video, and real-time chat infrastructure handling billions of daily messages.",
    description: "Discord connects hundreds of millions of people around the world for gaming, studying, and hanging out. On the SRE team, you will keep Discord up and fast, optimizing Elixir/Rust microservices and real-time WebRTC media routing.",
    responsibilities: [
      "Own reliability, capacity planning, and latency budgets for our global real-time gateway.",
      "Deploy eBPF kernel tracing to analyze network packet drops and tail latency anomalies.",
      "Lead incident command during major platform events and author detailed blameless postmortems.",
      "Develop automated self-healing infrastructure agents in Rust and Python.",
      "Scale ScyllaDB and Cassandra clusters storing petabytes of user communications."
    ],
    requirements: [
      "7+ years of experience supporting massive-scale, high-availability internet services.",
      "Deep understanding of the Linux networking stack, TCP/UDP tuning, and system internals.",
      "Proficiency in Rust, Python, Go, or Elixir.",
      "Experience with large-scale distributed databases and observability stacks.",
      "Calm and methodical leadership under high-severity incident conditions."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision insurance with 100% covered premiums",
      "401(k) retirement plan with 4% company matching",
      "Unlimited paid time off with 4 mandatory wellness weeks",
      "Parental leave with 18 weeks fully paid for all parents",
      "Annual $3,000 fitness and personal wellness stipend",
      "Gourmet lunch and dinner provided daily on-site"
    ],
    companyProfile: {
      size: "1,000+ employees",
      industry: "Real-Time Communications",
      founded: 2015,
      website: "https://discord.com"
    }
  },
  {
    id: "job-17",
    title: "Senior UI/UX Researcher",
    company: "Atlassian",
    department: "Jira Product Discovery",
    companyInitials: "AT",
    companyLogoBg: "#0052CC",
    companyLogoColor: "#FFFFFF",
    location: "Boston, MA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 145000,
    maxSalary: 185000,
    salaryDisplay: "$145,000 - $185,000",
    equity: "Restricted Stock Units",
    postedDaysAgo: 7,
    postedDate: "1 week ago",
    applicantsCount: 41,
    isFeatured: false,
    isUrgent: false,
    skills: ["User Research", "Usability Testing", "Journey Mapping", "Qualitative Analysis", "Figma", "Workshops"],
    shortDesc: "Uncover deep user insights that transform how hundreds of thousands of agile teams plan software.",
    description: "Atlassian builds teamwork software like Jira, Confluence, and Trello. As a Senior UI/UX Researcher for Jira, you will lead foundational generative research and evaluative studies that uncover product manager workflows and collaboration friction points.",
    responsibilities: [
      "Design and execute qualitative and mixed-methods research studies with global enterprise customers.",
      "Synthesize research findings into actionable opportunity maps, personas, and design frameworks.",
      "Collaborate with designers, PMs, and engineering leaders to translate insights into roadmap priorities.",
      "Facilitate cross-functional ideation workshops and design thinking sessions.",
      "Maintain a centralized research repository to democratize customer insights across Atlassian."
    ],
    requirements: [
      "5+ years of UX research experience in enterprise software or complex digital products.",
      "Mastery of generative interviews, contextual inquiry, diary studies, and usability testing.",
      "Strong storytelling skills with the ability to influence executive roadmap decisions.",
      "Experience with research tooling (Dovetail, UserTesting, Qualtrics, Figma).",
      "Degree in Human-Computer Interaction, Cognitive Psychology, or equivalent practical experience."
    ],
    benefits: [
      "Flexible 'Work Any Place' policy with hybrid hubs",
      "Comprehensive medical, dental, and visual health benefits",
      "Annual $2,000 learning and development budget",
      "Generous paid volunteering leave (5 days per year)",
      "Employee share purchase plan with matching contribution",
      "Recharge days and progressive mental health support"
    ],
    companyProfile: {
      size: "11,000+ employees",
      industry: "Enterprise Collaboration Software",
      founded: 2002,
      website: "https://atlassian.com"
    }
  },
  {
    id: "job-18",
    title: "Staff Security Architect",
    company: "Palantir",
    department: "Information Security",
    companyInitials: "PL",
    companyLogoBg: "#101114",
    companyLogoColor: "#FFFFFF",
    location: "New York, NY",
    workMode: "onsite",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 215000,
    maxSalary: 280000,
    salaryDisplay: "$215,000 - $280,000",
    equity: "Competitive Equity & Bonuses",
    postedDaysAgo: 5,
    postedDate: "5 days ago",
    applicantsCount: 26,
    isFeatured: false,
    isUrgent: false,
    skills: ["Zero Trust", "Cloud Security", "Cryptography", "Identity & Access", "FedRAMP", "Python", "Go"],
    shortDesc: "Design impenetrable security boundaries and cryptographic enclaves for critical enterprise platforms.",
    description: "Palantir creates software that empowers organizations to effectively integrate their data, decisions, and operations. As Staff Security Architect, you will design the end-to-end security architecture protecting sensitive government, healthcare, and financial data ecosystems worldwide.",
    responsibilities: [
      "Architect Zero Trust identity systems, attribute-based access control (ABAC), and data encryption models.",
      "Lead technical evaluations for high-assurance compliance accreditations (FedRAMP High, IL6, SOC 2).",
      "Collaborate with core platform engineers to embed cryptographic verification into distributed storage.",
      "Perform architecture threat models and code audits for novel AI and data mesh features.",
      "Define security response protocols and advise Fortune 50 enterprise CISOs."
    ],
    requirements: [
      "8+ years of experience in security architecture, cloud security, or cryptography engineering.",
      "Deep expertise in PKI, HSMs, envelope encryption, and modern auth protocols (OAuth, SAML, mTLS).",
      "Strong understanding of AWS/Azure/GCP security primitives and container sandboxing.",
      "Ability to write and review code in Go, Python, or Java.",
      "Demonstrated experience securing mission-critical enterprise or defense systems."
    ],
    benefits: [
      "Industry-leading total compensation and equity growth potential",
      "Full premium medical, dental, and vision insurance coverage",
      "Daily breakfast, lunch, and dinner prepared by on-site chefs",
      "Gym membership subsidy and personal wellness allowances",
      "Comprehensive 401(k) matching",
      "Relocation benefits and housing stipends"
    ],
    companyProfile: {
      size: "3,800+ employees",
      industry: "Enterprise Data & Defense Tech",
      founded: 2003,
      website: "https://palantir.com"
    }
  },
  {
    id: "job-19",
    title: "Mid-Level Frontend Engineer",
    company: "Retool",
    department: "Core App Builder",
    companyInitials: "RT",
    companyLogoBg: "#3D5AFE",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "mid",
    minSalary: 140000,
    maxSalary: 175000,
    salaryDisplay: "$140,000 - $175,000",
    equity: "0.05% - 0.10% Equity",
    postedDaysAgo: 3,
    postedDate: "3 days ago",
    applicantsCount: 63,
    isFeatured: false,
    isUrgent: false,
    skills: ["React", "TypeScript", "Redux", "DOM Manipulation", "CSS-in-JS", "WebSockets"],
    shortDesc: "Build the drag-and-drop canvas and visual component library that powers internal tools worldwide.",
    description: "Retool is the fast way to build internal software. Thousands of companies—from DoorDash to Amazon—rely on Retool to operate. As a Mid-Level Frontend Engineer, you will build responsive UI components, canvas layout algorithms, and real-time collaborative editing features.",
    responsibilities: [
      "Build drag-and-drop canvas widgets, table grids, and interactive chart components.",
      "Optimize virtualized list rendering and state updates for complex nested applications.",
      "Collaborate with product designers to implement clean, intuitive developer-first interfaces.",
      "Write thorough end-to-end tests and documentation for custom component APIs.",
      "Investigate and resolve customer-reported edge cases and UI quirks."
    ],
    requirements: [
      "3+ years of experience building modern web applications with React and TypeScript.",
      "Deep understanding of browser layout, event propagation, and canvas rendering.",
      "Experience optimizing client-side performance and state management architectures.",
      "Strong attention to detail, typography, and responsive design execution.",
      "Strong enthusiasm for developer tooling and productivity platforms."
    ],
    benefits: [
      "100% employer-covered health, dental, and vision insurance",
      "401(k) retirement plan with corporate matching",
      "Unlimited PTO with recommended minimum 20 days off",
      "Daily gourmet lunch and snacks in the SF office",
      "Annual $2,000 learning, conference, and book budget",
      "Commuter and public transit subsidies"
    ],
    companyProfile: {
      size: "400+ employees",
      industry: "Developer Tooling & Internal Software",
      founded: 2017,
      website: "https://retool.com"
    }
  },
  {
    id: "job-20",
    title: "Vice President of Engineering",
    company: "Brex",
    department: "Executive Leadership",
    companyInitials: "BX",
    companyLogoBg: "#F15B2A",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "executive",
    minSalary: 275000,
    maxSalary: 380000,
    salaryDisplay: "$275,000 - $380,000",
    equity: "Executive Equity Package",
    postedDaysAgo: 8,
    postedDate: "1 week ago",
    applicantsCount: 14,
    isFeatured: true,
    isUrgent: false,
    skills: ["Engineering Leadership", "Organization Scaling", "Fintech", "System Architecture", "Hiring & Culture"],
    shortDesc: "Lead, inspire, and scale a high-velocity 200+ person engineering organization across fintech domains.",
    description: "Brex provides corporate cards, expense management, and banking services for modern enterprises. As VP of Engineering, you will set organizational strategy, foster an elite engineering culture, and scale our technical infrastructure through the next phase of exponential growth.",
    responsibilities: [
      "Lead and mentor a high-performing engineering organization of 200+ software engineers, managers, and directors.",
      "Partner with the CEO, CPO, and CTO to align technical roadmaps with business revenue goals.",
      "Champion architectural modernization, reliability standards, and compliance across global banking rails.",
      "Attract, hire, and retain world-class diverse technical talent and engineering leadership.",
      "Establish engineering performance metrics, promotion frameworks, and operational rhythms."
    ],
    requirements: [
      "10+ years of engineering experience with at least 5 years managing managers in high-growth technology companies.",
      "Proven track record scaling engineering organizations from 100 to 300+ people.",
      "Deep understanding of distributed systems, financial compliance, security, and cloud operations.",
      "Exceptional executive presence, strategic clarity, and cross-functional communication.",
      "Demonstrated ability to inspire teams, navigate ambiguous challenges, and drive results."
    ],
    benefits: [
      "Executive compensation package with top-tier equity grants",
      "Comprehensive family health, dental, and executive healthcare coverage",
      "Unlimited PTO with executive sabbatical program",
      "Dedicated executive coach and continuous leadership development stipend",
      "Premier Brex corporate card with travel perks",
      "Comprehensive 401(k) with company match"
    ],
    companyProfile: {
      size: "1,200+ employees",
      industry: "Financial Services & SaaS",
      founded: 2017,
      website: "https://brex.com"
    }
  },
  {
    id: "job-21",
    title: "Senior API & Integration Engineer",
    company: "Postman",
    department: "Developer Platform",
    companyInitials: "PM",
    companyLogoBg: "#FF6C37",
    companyLogoColor: "#FFFFFF",
    location: "Austin, TX",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 150000,
    maxSalary: 190000,
    salaryDisplay: "$150,000 - $190,000",
    equity: "Competitive Stock Options",
    postedDaysAgo: 4,
    postedDate: "4 days ago",
    applicantsCount: 37,
    isFeatured: false,
    isUrgent: false,
    skills: ["Node.js", "TypeScript", "REST APIs", "GraphQL", "OpenAPI", "OAuth", "Microservices"],
    shortDesc: "Build developer-first API tooling, mock servers, and automated collection execution engines.",
    description: "Postman is the leading API platform used by 30 million developers worldwide. As a Senior API Engineer on the Developer Platform team, you will design extensible API runtimes, OpenAPI converters, and cloud integration connectors that streamline the full API lifecycle.",
    responsibilities: [
      "Design and maintain scalable backend services powering API documentation and collaborative workspaces.",
      "Build high-speed parsing engines for OpenAPI, AsyncAPI, and GraphQL schemas in TypeScript and Node.js.",
      "Integrate third-party CI/CD providers and authentication systems with Postman's cloud backend.",
      "Optimize WebSocket communication channels for real-time collaborative API testing.",
      "Collaborate with developer advocates and external partner engineering teams."
    ],
    requirements: [
      "5+ years of software development experience specializing in API architecture and backend microservices.",
      "Expertise in TypeScript/Node.js, asynchronous programming, and RESTful API standards.",
      "Deep familiarity with OpenAPI specification (OAS), GraphQL, and HTTP protocol semantics.",
      "Experience with relational and NoSQL databases (PostgreSQL, Redis, MongoDB).",
      "Strong passion for developer tooling and API design best practices."
    ],
    benefits: [
      "100% remote-first company culture with global flexibility",
      "Comprehensive medical, dental, and vision insurance coverage",
      "Generous stock option plan with early exercise availability",
      "Annual $2,500 continuous learning and conference fund",
      "Ergonomic home office stipend and monthly internet subsidy",
      "Flexible PTO policy with annual wellness shut-downs"
    ],
    companyProfile: {
      size: "1,000+ employees",
      industry: "API Management Software",
      founded: 2014,
      website: "https://postman.com"
    }
  },
  {
    id: "job-22",
    title: "AI Research Scientist - Vision & Multimodal",
    company: "DeepMind",
    department: "Frontier Intelligence",
    companyInitials: "DM",
    companyLogoBg: "#4285F4",
    companyLogoColor: "#FFFFFF",
    location: "London, UK",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 170000,
    maxSalary: 230000,
    salaryDisplay: "£135,000 - £180,000 ($170k - $230k)",
    equity: "Alphabet Stock Units (GSUs)",
    postedDaysAgo: 2,
    postedDate: "2 days ago",
    applicantsCount: 54,
    isFeatured: true,
    isUrgent: false,
    skills: ["PyTorch", "JAX", "Multimodal AI", "Computer Vision", "Transformers", "Reinforcement Learning"],
    shortDesc: "Conduct breakthrough research on unified multimodal foundation models spanning vision, video, and text.",
    description: "Google DeepMind advances AI responsibly to benefit humanity. We are looking for an exceptional AI Research Scientist to join our Multimodal team in London, inventing next-generation architectures for visual understanding, spatial reasoning, and continuous video synthesis.",
    responsibilities: [
      "Conceive, implement, and evaluate novel machine learning algorithms in JAX and PyTorch.",
      "Train large-scale multimodal neural networks on massive TPU and GPU compute clusters.",
      "Publish cutting-edge findings in premier AI conferences (NeurIPS, ICML, CVPR, ICLR).",
      "Collaborate with applied product teams to transfer research milestones into real-world applications.",
      "Engage in safety and alignment research to ensure beneficial and robust model behaviors."
    ],
    requirements: [
      "PhD in Computer Science, Machine Learning, Robotics, or equivalent research accomplishments.",
      "Demonstrated publication track record in top-tier AI venues (NeurIPS, CVPR, ICML, ECCV).",
      "Deep expertise in PyTorch or JAX with large-scale distributed training experience.",
      "Thorough understanding of attention mechanisms, diffusion models, and self-supervised learning.",
      "Excellent collaborative skills and passion for answering fundamental questions in artificial intelligence."
    ],
    benefits: [
      "Top-tier compensation with Alphabet GSUs and competitive bonuses",
      "Relocation package with comprehensive visa sponsorship to London, UK",
      "World-class private healthcare, dental, and optical insurance",
      "Access to virtually limitless TPU/GPU compute infrastructure",
      "Generous pension scheme with substantial company contributions",
      "On-site gourmet dining, fitness classes, and wellness amenities"
    ],
    companyProfile: {
      size: "2,000+ employees",
      industry: "Artificial Intelligence & Research",
      founded: 2010,
      website: "https://deepmind.google"
    }
  },
  {
    id: "job-23",
    title: "Part-Time Technical Content Writer",
    company: "Twilio",
    department: "Developer Marketing",
    companyInitials: "TW",
    companyLogoBg: "#F22F46",
    companyLogoColor: "#FFFFFF",
    location: "Remote - US",
    workMode: "remote",
    type: "part-time",
    experienceLevel: "mid",
    minSalary: 45000,
    maxSalary: 65000,
    salaryDisplay: "$45,000 - $65,000 (20 hrs/week)",
    equity: "N/A",
    postedDaysAgo: 9,
    postedDate: "1 week ago",
    applicantsCount: 71,
    isFeatured: false,
    isUrgent: false,
    skills: ["Technical Writing", "JavaScript", "Python", "SMS & Voice APIs", "Markdown", "SEO"],
    shortDesc: "Write engaging code tutorials, API guides, and developer stories on the Twilio Developer Blog (20 hrs/week).",
    description: "Twilio fuels communications across voice, SMS, WhatsApp, and email. We are looking for a creative, code-savvy Part-Time Technical Writer to craft compelling hands-on tutorials that help developers build communication workflows in Python, Node.js, and modern frameworks.",
    responsibilities: [
      "Write 2-3 detailed, engaging developer tutorials per month with working code samples.",
      "Build sample applications demonstrating Twilio Voice, Messaging, and Serverless Functions.",
      "Collaborate with developer marketing on SEO optimization and editorial review cycles.",
      "Test all code walkthroughs meticulously to ensure flawless reader reproduction.",
      "Engage with community questions and comments on published articles."
    ],
    requirements: [
      "2+ years of technical writing or software development experience.",
      "Hands-on coding ability in JavaScript/Node.js or Python.",
      "Demonstrated ability to explain complex technical concepts with warmth and clarity.",
      "Strong portfolio of published technical articles or documentation.",
      "Self-directed worker capable of managing deadlines in a remote setting."
    ],
    benefits: [
      "Competitive hourly rate / part-time salary",
      "Maximum flexibility: work whenever and wherever you choose",
      "Twilio API credits to build and experiment",
      "Byline on a blog read by millions of global developers",
      "Mentorship from experienced developer relations leaders"
    ],
    companyProfile: {
      size: "6,000+ employees",
      industry: "Cloud Communications Platform",
      founded: 2008,
      website: "https://twilio.com"
    }
  },
  {
    id: "job-24",
    title: "Cybersecurity Incident Response Lead",
    company: "Coinbase",
    department: "Security Operations",
    companyInitials: "CB",
    companyLogoBg: "#0052FF",
    companyLogoColor: "#FFFFFF",
    location: "Remote - US",
    workMode: "remote",
    type: "full-time",
    experienceLevel: "lead",
    minSalary: 180000,
    maxSalary: 230000,
    salaryDisplay: "$180,000 - $230,000",
    equity: "Coinbase Stock Grants",
    postedDaysAgo: 4,
    postedDate: "4 days ago",
    applicantsCount: 33,
    isFeatured: false,
    isUrgent: true,
    skills: ["Incident Response", "Digital Forensics", "Threat Hunting", "SIEM", "Python", "Cloud Security", "Blockchain"],
    shortDesc: "Defend crypto assets and trading platforms against nation-state actors and advanced threats.",
    description: "Coinbase is building the cryptoeconomy—a more fair, accessible, and transparent financial system. Our Incident Response team safeguards billions of customer digital assets. In this lead role, you will command high-stakes investigations, orchestrate response playbooks, and conduct threat hunting across cloud environments.",
    responsibilities: [
      "Lead 24/7 security incident response investigations across AWS cloud and corporate endpoints.",
      "Perform deep memory forensics, network packet analysis, and log reconstruction.",
      "Automate response workflows using Python and SOAR platforms to reduce MTTR.",
      "Collaborate with blockchain security engineers to track on-chain malicious transactions.",
      "Conduct post-incident reviews and present strategic hardening roadmaps to executives."
    ],
    requirements: [
      "6+ years of specialized experience in cybersecurity incident response or digital forensics.",
      "Deep understanding of cloud threats (AWS IAM abuse, Kubernetes compromises, credential theft).",
      "Proficient in Python for scripting detection rules, log parsing, and API integrations.",
      "Experience with SIEM tools (Splunk, Snowflake/Panther, Datadog Security).",
      "Industry certifications (GCIH, GCFA, GNFA) or equivalent military/enterprise IR experience."
    ],
    benefits: [
      "Comprehensive medical, dental, and vision insurance (100% covered for employee + dependents)",
      "401(k) matching up to 5% with immediate vesting",
      "Generous Coinbase equity package",
      "Remote-first work environment with flexible location choices",
      "Annual $5,000 mental health and wellness benefit",
      "Recharge weeks and generous paid parental leave"
    ],
    companyProfile: {
      size: "3,500+ employees",
      industry: "Cryptocurrency & Financial Platforms",
      founded: 2012,
      website: "https://coinbase.com"
    }
  },
  {
    id: "job-25",
    title: "Senior Marketing & Brand Designer",
    company: "Loom",
    department: "Brand & Creative",
    companyInitials: "LM",
    companyLogoBg: "#625DF5",
    companyLogoColor: "#FFFFFF",
    location: "San Francisco, CA",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "senior",
    minSalary: 140000,
    maxSalary: 175000,
    salaryDisplay: "$140,000 - $175,000",
    equity: "Atlassian Stock Grants",
    postedDaysAgo: 5,
    postedDate: "5 days ago",
    applicantsCount: 51,
    isFeatured: false,
    isUrgent: false,
    skills: ["Brand Design", "Visual Identity", "Motion Graphics", "Figma", "After Effects", "Web Design"],
    shortDesc: "Elevate brand storytelling and design viral marketing campaigns for asynchronous video messaging.",
    description: "Loom (an Atlassian company) helps teams communicate faster and more clearly through async video. As Senior Marketing & Brand Designer, you will craft visual campaigns, launch web pages, product animation reels, and brand identity systems that engage millions of workplace communicators.",
    responsibilities: [
      "Design high-converting marketing landing pages, launch visual assets, and product announcement graphics.",
      "Create captivating 2D motion graphics and UI micro-animations for social campaigns and web teasers.",
      "Evolve and expand the Loom brand guidelines across visual, typographic, and color standards.",
      "Partner with product marketing, content creators, and growth engineers on high-velocity creative campaigns.",
      "Lead art direction for major brand events, webinars, and annual customer summits."
    ],
    requirements: [
      "5+ years of brand, marketing, or digital design experience in high-growth tech or creative agencies.",
      "Mastery of Figma, Adobe Creative Cloud (Illustrator, Photoshop), and motion design tools (After Effects).",
      "Strong portfolio demonstrating expressive typography, visual narrative, and responsive web design.",
      "Knowledge of web constraints, HTML/CSS fundamentals, and design-to-development handoffs.",
      "Energetic creative spirit with high standards for craft and detail."
    ],
    benefits: [
      "Full medical, dental, and vision insurance coverage",
      "401(k) matching program through Atlassian",
      "Flexible PTO policy with mandatory rest days",
      "Generous lifestyle and wellness spending allowance",
      "Top-spec MacBook Pro and creative software subscriptions provided",
      "Annual team offsites in creative destinations"
    ],
    companyProfile: {
      size: "250+ employees",
      industry: "Asynchronous Video Communication",
      founded: 2015,
      website: "https://loom.com"
    }
  },
  {
    id: "job-26",
    title: "Junior Data Analyst & BI Developer",
    company: "Slack",
    department: "Business Analytics",
    companyInitials: "SL",
    companyLogoBg: "#4A154B",
    companyLogoColor: "#FFFFFF",
    location: "Austin, TX",
    workMode: "hybrid",
    type: "full-time",
    experienceLevel: "entry",
    minSalary: 80000,
    maxSalary: 105000,
    salaryDisplay: "$80,000 - $105,000",
    equity: "Salesforce Stock Grants",
    postedDaysAgo: 2,
    postedDate: "2 days ago",
    applicantsCount: 94,
    isFeatured: false,
    isUrgent: false,
    skills: ["SQL", "Tableau", "Python", "Excel", "Data Modeling", "Business Intelligence"],
    shortDesc: "Analyze enterprise customer metrics, build executive BI dashboards, and uncover business trends.",
    description: "Slack makes work life simpler, more pleasant, and more productive. As a Junior Data Analyst on the Business Analytics team, you will turn complex user telemetry and revenue streams into intuitive Tableau dashboards and actionable business insights.",
    responsibilities: [
      "Write efficient SQL queries to extract, transform, and aggregate data from Snowflake data warehouses.",
      "Design and maintain interactive Tableau dashboards tracking daily active users and team expansion.",
      "Conduct exploratory analysis to identify trends in customer feature adoption and product churn.",
      "Partner with product managers and sales operations to define and standardize key performance indicators (KPIs).",
      "Document data dictionaries and metric definitions in our centralized BI repository."
    ],
    requirements: [
      "1-2 years of analytical experience (internships, university research, or professional analyst roles).",
      "Solid SQL fundamentals (joins, window functions, aggregations, subqueries).",
      "Experience building visual dashboards in Tableau, PowerBI, or Looker.",
      "Basic Python knowledge for data wrangling (pandas) is a plus.",
      "Strong communication skills and enthusiasm for translating numbers into business stories."
    ],
    benefits: [
      "Salesforce competitive health, dental, and vision insurance",
      "401(k) with match up to 6%",
      "Employee Stock Purchase Plan (ESPP) with discount",
      "Tuition reimbursement and continuous professional education",
      "Monthly wellness stipend for fitness and mental wellness",
      "Volunteering time off (7 paid days annually)"
    ],
    companyProfile: {
      size: "8,000+ employees",
      industry: "Workplace Collaboration",
      founded: 2009,
      website: "https://slack.com"
    }
  }
];

// Helper functions for data management
const DataService = {
  getAllJobs() {
    return [...JOB_DATA];
  },

  getJobById(id) {
    return JOB_DATA.find(job => job.id === id) || null;
  },

  getSimilarJobs(currentJobId, limit = 3) {
    const current = this.getJobById(currentJobId);
    if (!current) return [];
    
    return JOB_DATA
      .filter(job => job.id !== currentJobId)
      .map(job => {
        let score = 0;
        if (job.department === current.department) score += 4;
        if (job.workMode === current.workMode) score += 2;
        if (job.experienceLevel === current.experienceLevel) score += 2;
        const sharedSkills = job.skills.filter(s => current.skills.includes(s)).length;
        score += sharedSkills * 2;
        return { job, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.job);
  },

  getAllSkills() {
    const skillSet = new Set();
    JOB_DATA.forEach(job => job.skills.forEach(skill => skillSet.add(skill)));
    return Array.from(skillSet).sort();
  },

  getAllLocations() {
    const locSet = new Set();
    JOB_DATA.forEach(job => locSet.add(job.location));
    return Array.from(locSet).sort();
  }
};

// Storage helper for saved jobs and submitted applications
const StorageService = {
  KEYS: {
    SAVED_JOBS: 'careerboard_saved_jobs',
    APPLICATIONS: 'careerboard_applications',
    SEARCH_HISTORY: 'careerboard_search_history'
  },

  getSavedJobIds() {
    try {
      const data = localStorage.getItem(this.KEYS.SAVED_JOBS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Storage error reading saved jobs:", e);
      return [];
    }
  },

  isJobSaved(jobId) {
    const saved = this.getSavedJobIds();
    return saved.includes(jobId);
  },

  toggleSaveJob(jobId) {
    const saved = this.getSavedJobIds();
    const index = saved.indexOf(jobId);
    let isSavedNow = false;
    
    if (index > -1) {
      saved.splice(index, 1);
      isSavedNow = false;
    } else {
      saved.push(jobId);
      isSavedNow = true;
    }

    try {
      localStorage.setItem(this.KEYS.SAVED_JOBS, JSON.stringify(saved));
      window.dispatchEvent(new CustomEvent('careerboard:saved_updated', { detail: { jobId, isSaved: isSavedNow, count: saved.length } }));
    } catch (e) {
      console.warn("Storage error saving job:", e);
    }
    return isSavedNow;
  },

  getApplications() {
    try {
      const data = localStorage.getItem(this.KEYS.APPLICATIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Storage error reading applications:", e);
      return [];
    }
  },

  getApplicationByJobId(jobId) {
    const apps = this.getApplications();
    return apps.find(app => app.jobId === jobId) || null;
  },

  saveApplication(applicationData) {
    const apps = this.getApplications();
    // Generate distinct reference number
    const refNum = `CB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newApp = {
      ...applicationData,
      referenceNumber: refNum,
      appliedAt: new Date().toISOString(),
      status: 'Under Review'
    };

    // Remove any previous app for this job or update
    const filtered = apps.filter(app => app.jobId !== applicationData.jobId);
    filtered.push(newApp);

    try {
      localStorage.setItem(this.KEYS.APPLICATIONS, JSON.stringify(filtered));
      window.dispatchEvent(new CustomEvent('careerboard:applied_updated', { detail: { application: newApp, count: filtered.length } }));
    } catch (e) {
      console.warn("Storage error saving application:", e);
    }

    return newApp;
  }
};
