import type { PortfolioData } from '../types/portfolio';

/**
 * =========================================================================
 * 🛠️ THE DIGITAL ENGINEERING STUDIO — CENTRALIZED PORTFOLIO CONFIGURATION
 * =========================================================================
 *
 * INSTRUCTIONS FOR MANUAL CUSTOMIZATION:
 * 1. Replace all 'YOUR_*' and placeholder values below with your real information.
 * 2. Place images, resumes, and screenshots in the /public folder:
 *    - Profile Photo: Place at /public/profile.jpg (or update photoPath below)
 *    - Resume PDF: Place at /public/resume.pdf (or update resumePath below)
 *    - Project Screenshots: Place at /public/projects/project-1.jpg, etc.
 *    - Certificate Images: Place at /public/certificates/cert-1.jpg, etc.
 * 3. Adding/removing items: Simply add or remove objects in the respective arrays.
 * 4. Empty arrays or placeholder values are automatically handled gracefully by the UI.
 * =========================================================================
 */

export const portfolioData: PortfolioData = {
  // Studio UI & Feature Configuration
  config: {
    accentColor: '#10b981', // Precision Emerald (supports any HEX code: e.g. #06b6d4, #f59e0b, #6366f1)
    theme: 'dark',
    gridPattern: true,
    showDevPlaceholderNotice: true, // Set to false when you have completed entering your details
    contactEndpoint: '', // Optional: Enter your Formspree/Getform/custom API endpoint URL here
  },

  // Personal Information
  personal: {
    name: 'Bhuvan Chandra Reddy Neelapu',
    wordmark: 'STUDIO // DEV',
    professionalTitle: 'Full Stack Developer | Java Developer',
    tagline: 'Designing & Engineering High-Performance Scalable Software Systems',
    shortIntroduction:
      "Hi, I'm Bhuvan Chandra Reddy Neelapu, a Computer Science and Engineering student passionate about software development, problem-solving, and building practical applications.",
    aboutDescription: [
      "Hi, I'm Bhuvan Chandra Reddy Neelapu, a Computer Science and Engineering student passionate about software development, problem-solving, and building practical applications.",
      "I focus on Java, Spring Boot, React, TypeScript, PostgreSQL, and REST APIs, along with strengthening my Data Structures and Algorithms skills. I enjoy turning ideas into useful software solutions, learning new technologies, and improving my development skills through hands-on projects.",
      "My goal is to contribute to meaningful software projects, collaborate with development teams, and build reliable, maintainable applications while continuously growing as a developer.",
    ],
    careerGoals:
      'Seeking software development opportunities where I can learn, contribute, and build reliable applications.',
    educationSummary:
      'Computer Science and Engineering student',
    professionalFocus:
      'Full Stack Development | Java Development | Problem-Solving',
    photoPath: '/profile-placeholder.svg', // Replace with your photo path, e.g. '/profile.jpg'
    resumePath: '/resume.pdf', // Put your resume PDF in the public folder as 'resume.pdf'
    email: 'your.email@example.com',
    phone: '', // Optional
    location: '[YOUR CITY, COUNTRY]',
    coordinates: 'LAT: 00.0000° N // LONG: 00.0000° E',
    availabilityStatus: 'Open to Opportunities',
  },

  // Social Profile & External Links
  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/your-username',
      username: '@your-username',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      username: 'in/your-profile',
    },
    {
      platform: 'twitter',
      label: 'X (Twitter)',
      url: 'https://x.com/your-handle',
      username: '@your-handle',
    },
    {
      platform: 'email',
      label: 'Direct Email',
      url: 'mailto:your.email@example.com',
    },
  ],

  // Technical Skills (Organized into 7 designated engineering groups)
  skills: [
    {
      categoryName: 'Programming Languages',
      description: 'Core languages utilized for system logic and application development',
      skills: [
        { name: 'TypeScript', levelDescription: 'Core Language', tags: ['Typed', 'Frontend', 'Backend'] },
        { name: 'JavaScript (ESNext)', levelDescription: 'Core Language', tags: ['Web', 'Async'] },
        { name: 'Python', levelDescription: 'Proficient', tags: ['Data', 'Automation', 'Scripting'] },
        { name: 'Go / Golang', levelDescription: 'Systems / Services', tags: ['Concurrency', 'High Performance'] },
        { name: 'Java / C++', levelDescription: 'Academic / Core', tags: ['OOP', 'Algorithms'] },
        { name: '[ADD LANGUAGE]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
    {
      categoryName: 'Frontend Development',
      description: 'Modern component architectures, UI performance, and state management',
      skills: [
        { name: 'React 18 / 19', levelDescription: 'Core Framework', tags: ['Components', 'Hooks', 'Vite'] },
        { name: 'Next.js', levelDescription: 'Production Stack', tags: ['SSR', 'App Router'] },
        { name: 'HTML5 & Modern CSS', levelDescription: 'Design Systems', tags: ['Semantic', 'Responsive'] },
        { name: 'State Management (Zustand / Redux)', levelDescription: 'Architecture', tags: ['Global State'] },
        { name: 'Tailwind CSS / Vanilla CSS', levelDescription: 'Styling', tags: ['Utility', 'Tokens'] },
        { name: '[ADD FRONTEND TECH]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
    {
      categoryName: 'Backend Development',
      description: 'API services, microservices, authentication, and server-side runtime',
      skills: [
        { name: 'Node.js & Express', levelDescription: 'Server Runtime', tags: ['RESTful', 'Microservices'] },
        { name: 'FastAPI / Django', levelDescription: 'Services', tags: ['Python', 'Async APIs'] },
        { name: 'REST & GraphQL APIs', levelDescription: 'Contract Design', tags: ['Schema', 'OpenAPI'] },
        { name: 'Auth & Security (JWT, OAuth2)', levelDescription: 'Implementation', tags: ['RBAC', 'Sessions'] },
        { name: 'WebSockets & gRPC', levelDescription: 'Real-time', tags: ['Bidirectional', 'Protobuf'] },
        { name: '[ADD BACKEND TECH]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
    {
      categoryName: 'Databases',
      description: 'Relational, document, and in-memory data storage systems',
      skills: [
        { name: 'PostgreSQL', levelDescription: 'Relational Database', tags: ['ACID', 'Indexing', 'ORM'] },
        { name: 'MongoDB', levelDescription: 'Document Store', tags: ['NoSQL', 'Aggregation'] },
        { name: 'Redis', levelDescription: 'In-Memory Cache', tags: ['Caching', 'PubSub', 'Queues'] },
        { name: 'Prisma / Drizzle ORM', levelDescription: 'Data Modeling', tags: ['Type Safety', 'Migrations'] },
        { name: '[ADD DATABASE]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
    {
      categoryName: 'Developer Tools',
      description: 'Build tooling, containerization, orchestration, and version control',
      skills: [
        { name: 'Git & GitHub Workflows', levelDescription: 'Version Control', tags: ['CI/CD', 'Branching'] },
        { name: 'Docker & Containers', levelDescription: 'Containerization', tags: ['Images', 'Docker Compose'] },
        { name: 'Linux / POSIX Shell', levelDescription: 'Environment', tags: ['Bash', 'Automation'] },
        { name: 'Vite / Webpack', levelDescription: 'Build Tooling', tags: ['Bundlers', 'HMR'] },
        { name: 'Postman / Bruno', levelDescription: 'API Testing', tags: ['Integration'] },
        { name: '[ADD TOOL]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
    {
      categoryName: 'Computer Science Fundamentals',
      description: 'Foundational algorithmic concepts and system engineering principles',
      skills: [
        { name: 'Data Structures & Algorithms', levelDescription: 'Foundations', tags: ['Complexity Analysis', 'Graphs', 'Trees'] },
        { name: 'System Design & Scalability', levelDescription: 'Architecture', tags: ['Distributed Systems', 'Load Balancing'] },
        { name: 'Object-Oriented Design', levelDescription: 'Principles', tags: ['SOLID', 'Design Patterns'] },
        { name: 'Operating Systems & Networking', levelDescription: 'Core Theory', tags: ['Concurrency', 'TCP/IP', 'HTTP/3'] },
        { name: 'Database Normalization & Query Optimization', levelDescription: 'Theory', tags: ['B-Trees', 'Transactions'] },
      ],
    },
    {
      categoryName: 'Other Skills',
      description: 'Complementary technical disciplines and engineering practices',
      skills: [
        { name: 'Agile & Scrum Methodologies', levelDescription: 'Process', tags: ['Sprints', 'Collaboration'] },
        { name: 'Unit & Integration Testing (Jest, Vitest)', levelDescription: 'Quality', tags: ['TDD', 'Coverage'] },
        { name: 'Cloud Basics (AWS / GCP / Cloudflare)', levelDescription: 'Infrastructure', tags: ['S3', 'Serverless', 'CDN'] },
        { name: 'Technical Documentation & Architecture RFCs', levelDescription: 'Communication', tags: ['Markdown', 'Diagrams'] },
        { name: '[ADD OTHER SKILL]', levelDescription: 'Configurable', tags: ['Custom'] },
      ],
    },
  ],

  // Featured Projects
  projects: [
    {
      id: 'project-1',
      title: '[FEATURED PROJECT 01]',
      summary: '[PROJECT 01 SUMMARY — A concise 1-2 sentence statement explaining the problem and your solution.]',
      description:
        '[PROJECT 01 DETAILED DESCRIPTION — Thorough breakdown of the project architecture, operational workflow, user capabilities, and technical delivery.]',
      category: 'Full-Stack',
      featured: true,
      screenshot: '/projects/project-placeholder.svg',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/your-username/project-01',
      liveDemoUrl: 'https://your-project-01-demo.com',
      caseStudy: {
        architecture:
          'Client-Server Architecture with decoupled API layer, cached query responses via Redis, and automated CI/CD pipeline.',
        keyFeatures: [
          'High-throughput data ingestion pipeline handling real-time state changes.',
          'Type-safe end-to-end client communications with strict schema validation.',
          'Granular Role-Based Access Control (RBAC) with tokenized authentication.',
          'Responsive, high-density dashboard rendering under 60fps budget.',
        ],
        technicalChallenges: [
          {
            challenge: 'High latency during real-time event aggregation across concurrent sessions.',
            solution: 'Implemented in-memory caching and Redis pub/sub channels, reducing query overhead by over 70%.',
          },
          {
            challenge: 'State desynchronization across distributed client views.',
            solution: 'Designed an optimistic concurrency control protocol with fallback reconciliation mechanisms.',
          },
        ],
        implementationDetails: [
          'Modular code structure adhering to Clean Architecture principles.',
          'Comprehensive automated unit and integration tests with mock services.',
          'Containerized deployment with multi-stage Docker builds.',
        ],
      },
    },
    {
      id: 'project-2',
      title: '[FEATURED PROJECT 02]',
      summary: '[PROJECT 02 SUMMARY — High-performance distributed system or interactive web application.]',
      description:
        '[PROJECT 02 DETAILED DESCRIPTION — Detail the technical choices, domain logic, data models, and outcomes of this project.]',
      category: 'Systems',
      featured: true,
      screenshot: '/projects/project-placeholder.svg',
      technologies: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Kubernetes'],
      githubUrl: 'https://github.com/your-username/project-02',
      liveDemoUrl: 'https://your-project-02-demo.com',
      caseStudy: {
        architecture: 'Event-driven microservice system communicating over binary gRPC protocols.',
        keyFeatures: [
          'Sub-millisecond serialization using Protocol Buffers.',
          'Resilient fault tolerance with circuit breaker patterns.',
          'Health monitoring and telemetry metrics instrumentation.',
        ],
        technicalChallenges: [
          {
            challenge: 'Handling burst traffic spikes without dropping database connections.',
            solution: 'Implemented adaptive token-bucket rate limiting and asynchronous worker queues.',
          },
        ],
        implementationDetails: [
          'Zero external dependency microservice core.',
          'Structured JSON logging and Prometheus metrics endpoint.',
        ],
      },
    },
    {
      id: 'project-3',
      title: '[FEATURED PROJECT 03]',
      summary: '[PROJECT 03 SUMMARY — Creative engineering platform or full-stack web application.]',
      description:
        '[PROJECT 03 DETAILED DESCRIPTION — Explain the frontend ergonomics, backend services, and interactive components.]',
      category: 'Frontend',
      featured: true,
      screenshot: '/projects/project-placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Web Workers'],
      githubUrl: 'https://github.com/your-username/project-03',
      liveDemoUrl: 'https://your-project-03-demo.com',
      caseStudy: {
        architecture: 'Single Page Application utilizing Web Workers for client-side heavy computation.',
        keyFeatures: [
          'Zero-jank UI updates through off-main-thread processing.',
          'Accessible keyboard navigation across all component trees.',
          'Offline capabilities with Service Worker caching.',
        ],
        technicalChallenges: [
          {
            challenge: 'Large dataset rendering causing frame drops in virtualized list views.',
            solution: 'Implemented windowing algorithms and dynamic node recycling.',
          },
        ],
        implementationDetails: [
          'Design token system built with custom CSS variables.',
          'Lighthouse accessibility score audited at 100/100.',
        ],
      },
    },
  ],

  // Professional Experience
  experience: [
    {
      id: 'exp-1',
      organization: '[ORGANIZATION / COMPANY NAME]',
      jobTitle: '[JOB TITLE / ROLE]',
      location: '[CITY, STATE / REMOTE]',
      employmentType: 'Full-time',
      startDate: '[START DATE — e.g. Jan 2024]',
      endDate: 'Present',
      isCurrent: true,
      responsibilities: [
        '[RESPONSIBILITY 01 — Architectural design and implementation of core modules.]',
        '[RESPONSIBILITY 02 — Collaborated across engineering teams to ship production features on time.]',
        '[RESPONSIBILITY 03 — Conducted code reviews and established automated testing guidelines.]',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
      verifiedAchievements: [
        '[VERIFIED ACHIEVEMENT 01 — Optimized page load times or reduced API latency by X%.]',
        '[VERIFIED ACHIEVEMENT 02 — Led migration or built a core module used by Y users.]',
      ],
    },
    {
      id: 'exp-2',
      organization: '[PREVIOUS ORGANIZATION / COMPANY]',
      jobTitle: '[SOFTWARE ENGINEERING INTERN / JUNIOR ENGINEER]',
      location: '[CITY, STATE / REMOTE]',
      employmentType: 'Internship',
      startDate: '[START DATE — e.g. Jun 2023]',
      endDate: '[END DATE — e.g. Dec 2023]',
      isCurrent: false,
      responsibilities: [
        '[RESPONSIBILITY 01 — Developed responsive UI components and backend REST endpoints.]',
        '[RESPONSIBILITY 02 — Wrote unit tests and improved test suite code coverage.]',
      ],
      technologies: ['JavaScript', 'Python', 'FastAPI', 'SQLite', 'Git'],
      verifiedAchievements: [
        '[VERIFIED ACHIEVEMENT 01 — Automated manual deployment script reducing release cycle by X minutes.]',
      ],
    },
  ],

  // Coding Profiles (Platforms and profile handles)
  codingProfiles: [
    {
      platform: 'GitHub',
      usernamePlaceholder: 'github.com/[YOUR-USERNAME]',
      profileUrl: 'https://github.com/your-username',
      metricLabel: 'Repositories & Contributions',
      metricValue: 'Active Contributor',
      badges: ['Open Source', 'Code Reviewer'],
    },
    {
      platform: 'LeetCode',
      usernamePlaceholder: 'leetcode.com/u/[YOUR-USERNAME]',
      profileUrl: 'https://leetcode.com/u/your-username',
      metricLabel: 'Problem Solving Profile',
      metricValue: 'Active Solver',
      badges: ['Algorithms', 'Data Structures'],
    },
    {
      platform: 'CodeChef',
      usernamePlaceholder: 'codechef.com/users/[YOUR-USERNAME]',
      profileUrl: 'https://www.codechef.com/users/your-username',
      metricLabel: 'Competitive Programming',
      metricValue: 'Contestant',
      badges: ['Contests', 'Div Division'],
    },
    {
      platform: 'Codeforces / HackerRank',
      usernamePlaceholder: 'codeforces.com/profile/[YOUR-USERNAME]',
      profileUrl: 'https://codeforces.com/profile/your-username',
      metricLabel: 'Problem Solving Platform',
      metricValue: 'Verified Profile',
      badges: ['Problem Solving', 'Mathematics'],
    },
  ],

  // Achievements (Hackathons, Awards, Leadership, Competitions)
  achievements: [
    {
      id: 'ach-1',
      title: '[ACHIEVEMENT TITLE 01 — e.g. 1st Place at National Hackathon]',
      category: 'Hackathon',
      organization: '[ORGANIZATION / SPONSOR]',
      date: '[DATE — e.g. Oct 2024]',
      description:
        '[ACHIEVEMENT DESCRIPTION — Built a prototype addressing [Problem Statement] within 36 hours. Evaluated on architecture, user experience, and technical execution.]',
      evidenceUrl: 'https://example.com/certificate-or-project-proof',
    },
    {
      id: 'ach-2',
      title: '[ACHIEVEMENT TITLE 02 — e.g. Finalist / Merit Award in Coding Competition]',
      category: 'Competition',
      organization: '[ORGANIZATION / PLATFORM]',
      date: '[DATE — e.g. Jun 2024]',
      description:
        '[ACHIEVEMENT DESCRIPTION — Ranked among top participants across algorithmic challenge tracks.]',
      evidenceUrl: 'https://example.com/proof',
    },
    {
      id: 'ach-3',
      title: '[ACHIEVEMENT TITLE 03 — e.g. Technical Club Lead / Open Source Contributor]',
      category: 'Leadership',
      organization: '[UNIVERSITY / COMMUNITY]',
      date: '[DATE — e.g. 2023 - 2024]',
      description:
        '[ACHIEVEMENT DESCRIPTION — Conducted technical workshops on modern web architecture and mentored fellow students.]',
      evidenceUrl: 'https://example.com/proof',
    },
  ],

  // Certifications
  certifications: [
    {
      id: 'cert-1',
      name: '[CERTIFICATION NAME 01 — e.g. AWS Certified Cloud Practitioner / Meta Frontend Developer]',
      issuingOrganization: '[ISSUING ORGANIZATION — e.g. Amazon Web Services / Coursera / Meta]',
      issueDate: '[ISSUE DATE — e.g. Aug 2024]',
      expirationDate: '[EXPIRATION DATE / Does Not Expire]',
      credentialId: '[CREDENTIAL ID / CERT-12345678]',
      scoreOrResult: '[SCORE OR GRADE — Optional]',
      verificationUrl: 'https://example.com/verify-credential',
      certificateImage: '/certificates/cert-placeholder.svg',
    },
    {
      id: 'cert-2',
      name: '[CERTIFICATION NAME 02 — e.g. Algorithmic Problem Solving Specialization]',
      issuingOrganization: '[ISSUING ORGANIZATION — e.g. University / Platform]',
      issueDate: '[ISSUE DATE — e.g. Mar 2024]',
      credentialId: '[CREDENTIAL ID / CERT-87654321]',
      scoreOrResult: '[Grade: 98% / Completed with Honors]',
      verificationUrl: 'https://example.com/verify-credential',
      certificateImage: '/certificates/cert-placeholder.svg',
    },
  ],

  // Education Timeline
  education: [
    {
      id: 'edu-1',
      institution: '[YOUR UNIVERSITY / COLLEGE NAME]',
      degree: '[YOUR DEGREE — e.g. Bachelor of Technology / B.S.]',
      fieldOfStudy: '[FIELD OF STUDY — e.g. Computer Science and Engineering]',
      startDate: '2022',
      endDate: '2026',
      gradeOrCgpa: '[CGPA OR PERCENTAGE — e.g. 8.8 / 10.0 or 3.8 / 4.0]',
      location: '[CITY, STATE / COUNTRY]',
      highlights: [
        'Relevant Coursework: Data Structures, Operating Systems, Database Management Systems, Computer Networks, Software Engineering',
        'Academic Honors & Dean\'s List recognition',
      ],
      description:
        '[OPTIONAL DESCRIPTION — Key projects completed, academic focus areas, or student committee roles.]',
    },
    {
      id: 'edu-2',
      institution: '[YOUR HIGH SCHOOL / PRE-UNIVERSITY COLLEGE]',
      degree: '[SENIOR SECONDARY / HIGHER SECONDARY]',
      fieldOfStudy: '[SCIENCE / MATHEMATICS & COMPUTER SCIENCE]',
      startDate: '2020',
      endDate: '2022',
      gradeOrCgpa: '[PERCENTAGE OR GRADE — e.g. 92%]',
      location: '[CITY, STATE]',
      highlights: [
        'Majors in Physics, Chemistry, Mathematics, and Computer Science',
      ],
      description:
        '[OPTIONAL DESCRIPTION — Foundational academic excellence and early programming achievements.]',
    },
  ],
};
