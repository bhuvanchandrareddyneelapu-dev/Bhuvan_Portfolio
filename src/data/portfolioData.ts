import type { PortfolioData } from '../types/portfolio';

/**
 * =========================================================================
 * 🛠️ THE DIGITAL ENGINEERING STUDIO — CENTRALIZED PORTFOLIO CONFIGURATION
 * =========================================================================
 *
 * Developer: Bhuvan Chandra Reddy Neelapu
 * Specialization: Full Stack Developer | Java Developer
 * Location: Visakhapatnam (VSKP)
 * =========================================================================
 */

export const portfolioData: PortfolioData = {
  config: {
    accentColor: '#10b981', // Precision Emerald
    theme: 'dark',
    gridPattern: true,
    showDevPlaceholderNotice: false,
    contactEndpoint: '', // Optional: Add Formspree endpoint when desired
  },

  personal: {
    name: 'Bhuvan Chandra Reddy Neelapu',
    wordmark: 'BHUVAN // DEV',
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
      'B.Tech CSE, Raghu Engineering College, 2023–2027 expected, CGPA 8.62',
    professionalFocus:
      'Full Stack Development | Java Development | Problem-Solving',
    photoPath: '/profile-placeholder.svg',
    resumePath: '/resume.pdf',
    email: 'bhuvanchandrareddyneelapu@gmail.com',
    location: 'Visakhapatnam (VSKP)',
    coordinates: 'LAT: 17.6868° N // LONG: 83.2185° E',
    availabilityStatus: 'Open to Opportunities',
  },

  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/bhuvanchandrareddyneelapu-dev',
      username: '@bhuvanchandrareddyneelapu-dev',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhuvan-chandra-reddy-neelapu-35aaa0369/',
      username: 'in/bhuvan-chandra-reddy-neelapu',
    },
    {
      platform: 'leetcode',
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Bhuvan_chandra_reddy/',
      username: 'Bhuvan_chandra_reddy',
    },
    {
      platform: 'codechef',
      label: 'CodeChef',
      url: 'https://www.codechef.com/users/rag_23981a4689',
      username: 'rag_23981a4689',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:bhuvanchandrareddyneelapu@gmail.com',
    },
  ],

  skills: [
    {
      categoryName: 'Programming Languages',
      description: 'Core languages utilized for application development and systems logic',
      skills: [
        { name: 'Java', levelDescription: 'Core Language', tags: ['Backend', 'OOP', 'Spring'] },
        { name: 'TypeScript', levelDescription: 'Production Stack', tags: ['Typed', 'Frontend', 'React'] },
        { name: 'JavaScript (ESNext)', levelDescription: 'Web Standard', tags: ['Web', 'Async', 'DOM'] },
        { name: 'SQL', levelDescription: 'Data Modeling', tags: ['PostgreSQL', 'Queries', 'DDL'] },
        { name: 'C / C++', levelDescription: 'Foundations', tags: ['Memory', 'Algorithms'] },
      ],
    },
    {
      categoryName: 'Backend Development',
      description: 'Enterprise server runtimes, robust API contracts, and microservice architectures',
      skills: [
        { name: 'Spring Boot', levelDescription: 'Framework', tags: ['Java', 'REST APIs', 'Spring Security'] },
        { name: 'RESTful API Design', levelDescription: 'API Contracts', tags: ['Endpoints', 'HTTP/JSON'] },
        { name: 'Node.js & Express', levelDescription: 'Runtime', tags: ['JavaScript', 'Services'] },
        { name: 'Authentication & Security', levelDescription: 'Implementation', tags: ['JWT', 'OAuth2', 'RBAC'] },
      ],
    },
    {
      categoryName: 'Frontend Development',
      description: 'Modern component systems, responsive interfaces, and interactive web apps',
      skills: [
        { name: 'React 18 / 19', levelDescription: 'UI Library', tags: ['Hooks', 'Components', 'Vite'] },
        { name: 'HTML5 & Modern CSS', levelDescription: 'Standards', tags: ['Responsive', 'Semantic', 'Flex/Grid'] },
        { name: 'Tailwind CSS / Vanilla CSS', levelDescription: 'Styling', tags: ['Utility', 'Tokens'] },
        { name: 'State Management', levelDescription: 'State Node', tags: ['Hooks', 'Context', 'Zustand'] },
      ],
    },
    {
      categoryName: 'Databases',
      description: 'Relational data stores, query execution, and schema modeling',
      skills: [
        { name: 'PostgreSQL', levelDescription: 'Relational DB', tags: ['ACID', 'Indexing', 'Schemas'] },
        { name: 'MySQL', levelDescription: 'RDBMS', tags: ['Relational', 'Queries'] },
        { name: 'Database Normalization', levelDescription: 'Theory', tags: ['1NF-3NF', 'Constraints'] },
      ],
    },
    {
      categoryName: 'Computer Science Fundamentals',
      description: 'Foundational algorithmic proficiency and theoretical computer science',
      skills: [
        { name: 'Data Structures and Algorithms', levelDescription: 'Proficient', tags: ['Arrays', 'Trees', 'Graphs', 'DP'] },
        { name: 'Object-Oriented Programming (OOP)', levelDescription: 'Principles', tags: ['Encapsulation', 'Polymorphism', 'SOLID'] },
        { name: 'Database Management Systems (DBMS)', levelDescription: 'Core Theory', tags: ['Transactions', 'Concurrency', 'ACID'] },
        { name: 'Operating Systems & Networking', levelDescription: 'Foundations', tags: ['Processes', 'Threads', 'TCP/IP'] },
      ],
    },
    {
      categoryName: 'Developer Tools',
      description: 'Version control, build environments, testing, and developer workflow',
      skills: [
        { name: 'Git & GitHub', levelDescription: 'Version Control', tags: ['Branching', 'Collaboration'] },
        { name: 'Vite', levelDescription: 'Bundler', tags: ['HMR', 'ESBuild'] },
        { name: 'Postman / REST Clients', levelDescription: 'API Testing', tags: ['Endpoints', 'Payloads'] },
        { name: 'IntelliJ IDEA & VS Code', levelDescription: 'IDEs', tags: ['Java', 'TypeScript'] },
      ],
    },
    {
      categoryName: 'Other Skills',
      description: 'Collaboration, problem-solving, and continuous engineering development',
      skills: [
        { name: 'Problem-Solving & Competitive Programming', levelDescription: 'Active', tags: ['CodeChef 1000+', 'LeetCode 500+'] },
        { name: 'Agile & Team Collaboration', levelDescription: 'Practice', tags: ['Sprints', 'Code Reviews'] },
        { name: 'Technical Documentation', levelDescription: 'Communication', tags: ['Markdown', 'Architecture RFCs'] },
      ],
    },
  ],

  projects: [
    {
      id: 'project-1',
      title: 'NovaFinance Pro Suite / Smart Personal Finance Tracker',
      summary: 'A full-stack financial management solution providing automated income/expense tracking, monthly budgets, and actionable fiscal analytics.',
      description:
        'Engineered a complete financial tracking application featuring modular accounting ledgers, category-wise expenditure analytics, and customizable budget limit alerts. Built with a decoupled Java Spring Boot backend communicating with a responsive React and TypeScript frontend, backed by PostgreSQL for transactional consistency.',
      category: 'Full-Stack',
      featured: true,
      screenshot: '/projects/project-placeholder.svg',
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
      githubUrl: 'https://github.com/bhuvanchandrareddyneelapu-dev',
      caseStudy: {
        architecture:
          'Client-Server Architecture with Spring Boot REST API layer, JPA / Hibernate ORM, and PostgreSQL ACID database.',
        keyFeatures: [
          'Dynamic expense categorized logging with currency and transaction date filtering.',
          'Real-time monthly budgeting thresholds with visual health indicators.',
          'Interactive spending breakdown charts and historical monthly comparisons.',
          'Secure REST API endpoints with robust error handling and input validation.',
        ],
        technicalChallenges: [
          {
            challenge: 'Ensuring transaction atomicity and accurate balance computation during concurrent updates.',
            solution: 'Utilized PostgreSQL transactional boundaries (@Transactional in Spring Boot) and database constraints.',
          },
        ],
        implementationDetails: [
          'RESTful controllers mapped to business service layers adhering to Clean Architecture.',
          'Type-safe frontend data models matching backend DTO schemas.',
        ],
      },
    },
    {
      id: 'project-2',
      title: 'Donation.App',
      summary: 'A transparent donation platform connecting verified community causes with donors, featuring real-time fundraising goal progress.',
      description:
        'Designed and developed a full-stack donation application facilitating seamless contributions to social welfare campaigns. The system provides transparency through real-time funding milestone visualization, donor listings, and an intuitive campaign exploration interface.',
      category: 'Full-Stack',
      featured: true,
      screenshot: '/projects/project-placeholder.svg',
      technologies: ['React', 'TypeScript', 'Node.js / Java', 'REST APIs', 'Tailwind CSS / CSS'],
      githubUrl: 'https://github.com/bhuvanchandrareddyneelapu-dev',
      caseStudy: {
        architecture: 'Modular Web Application utilizing REST API contracts for campaign state management.',
        keyFeatures: [
          'Campaign discovery catalogue with search and category filtering.',
          'Real-time donation progress bars showing pledged amounts against target goals.',
          'Responsive checkout flow supporting multiple simulated payment methods.',
          'Accessible, high-contrast UI optimized for both desktop and mobile devices.',
        ],
        technicalChallenges: [
          {
            challenge: 'Rendering live fundraising progress without UI lag.',
            solution: 'Optimized state transitions using React hooks and memoized components.',
          },
        ],
        implementationDetails: [
          'Component-driven architecture using TypeScript and modular styling.',
          'Validated form inputs ensuring clean and sanitised contribution data.',
        ],
      },
    },
  ],

  experience: [
    {
      id: 'exp-1',
      organization: 'Avaintern',
      jobTitle: 'Full Stack Developer Intern',
      location: 'Remote',
      employmentType: 'Internship',
      startDate: '2024',
      endDate: 'Present',
      isCurrent: true,
      responsibilities: [
        'Designed and implemented full-stack web application features using Java, Spring Boot, React, and TypeScript.',
        'Developed structured RESTful API endpoints and integrated relational PostgreSQL database schemas.',
        'Collaborated on code reviews, bug fixes, and continuous improvements to application responsiveness.',
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
      verifiedAchievements: [
        'Successfully contributed to core application workflows and backend API endpoints during the internship.',
      ],
    },
  ],

  codingProfiles: [
    {
      platform: 'CodeChef',
      usernamePlaceholder: 'rag_23981a4689',
      profileUrl: 'https://www.codechef.com/users/rag_23981a4689',
      metricLabel: 'Problems Solved',
      metricValue: '1000+ Solved',
      badges: ['1000+ Problems', 'Active Solver', 'Practice Track'],
    },
    {
      platform: 'LeetCode',
      usernamePlaceholder: 'Bhuvan_chandra_reddy',
      profileUrl: 'https://leetcode.com/u/Bhuvan_chandra_reddy/',
      metricLabel: 'Problems Solved',
      metricValue: '500+ Solved',
      badges: ['500+ Problems', 'DSA & Algorithms', 'Consistent Solver'],
    },
    {
      platform: 'SkillRack',
      usernamePlaceholder: 'Verified Profile',
      profileUrl: '', // URL omitted as not provided; card renders cleanly without broken link
      metricLabel: 'Platform Status',
      metricValue: 'Active Practice',
      badges: ['SkillRack Certified', 'Problem Solving'],
    },
    {
      platform: 'GitHub',
      usernamePlaceholder: 'bhuvanchandrareddyneelapu-dev',
      profileUrl: 'https://github.com/bhuvanchandrareddyneelapu-dev',
      metricLabel: 'Code Repositories',
      metricValue: 'Open Source',
      badges: ['Portfolio', 'Full Stack Projects'],
    },
  ],

  achievements: [
    {
      id: 'ach-1',
      title: 'HACKVERSE 2.0 — 24-Hour Hackathon Certificate',
      category: 'Hackathon',
      organization: 'HACKVERSE 2.0',
      date: '2024',
      description:
        'Participated in HACKVERSE 2.0, an intensive 24-hour national hackathon prototyping real-world technology solutions and collaborating under strict delivery deadlines.',
      evidenceUrl: 'https://github.com/bhuvanchandrareddyneelapu-dev',
    },
    {
      id: 'ach-2',
      title: 'CodeChef 1000+ Problems Solved — Problem Solver Diamond Badge',
      category: 'Competition',
      organization: 'CodeChef',
      date: 'Active',
      description:
        'Successfully completed and verified over 1000 algorithmic and programming challenges on the CodeChef competitive platform, earning the Problem Solver Diamond Badge (Username: rag_23981a4689).',
      evidenceUrl: 'https://www.codechef.com/users/rag_23981a4689',
      imageUrl: '/certificates/codechef-1000-diamond.jpg',
    },
    {
      id: 'ach-3',
      title: 'LeetCode 500+ Problems Solved Milestone',
      category: 'Competition',
      organization: 'LeetCode',
      date: 'Active',
      description:
        'Solved 500+ algorithmic problems covering data structures, dynamic programming, trees, and graphs on LeetCode (Profile: Bhuvan_chandra_reddy).',
      evidenceUrl: 'https://leetcode.com/u/Bhuvan_chandra_reddy/',
    },
  ],

  certifications: [
    // NPTEL Certificates
    {
      id: 'cert-nptel-java',
      name: 'Programming in Java — NPTEL Online Certification',
      issuingOrganization: 'NPTEL / IIT (Ministry of Education)',
      category: 'NPTEL',
      issueDate: 'Verified',
      scoreOrResult: 'Score: 83% (Elite Certificate)',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: false,
    },
    {
      id: 'cert-nptel-dbms',
      name: 'Database Management Systems (DBMS) — NPTEL Online Certification',
      issuingOrganization: 'NPTEL / IIT (Ministry of Education)',
      category: 'NPTEL',
      issueDate: 'Verified',
      scoreOrResult: 'Score: 65% (Elite Certificate)',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: false,
    },

    // Internship Certificates
    {
      id: 'cert-intern-avaintern',
      name: 'Full Stack Developer Internship Certificate',
      issuingOrganization: 'Avaintern',
      category: 'Internship',
      issueDate: '2024',
      scoreOrResult: 'Completed Internship',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: false,
    },

    // Hackathon Certificates
    {
      id: 'cert-hack-hackverse',
      name: 'HACKVERSE 2.0 — 24-Hour Hackathon Certificate',
      issuingOrganization: 'HACKVERSE 2.0',
      category: 'Hackathon',
      issueDate: '2024',
      scoreOrResult: '24-Hour Hackathon Participant',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: false,
    },

    // CodeChef Certificates & Verified Achievements
    {
      id: 'cert-cc-diamond',
      name: 'CodeChef 1000 Problems Solved — Problem Solver Diamond Badge',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: 'Verified Milestone',
      scoreOrResult: '1000 Problems Solved • Diamond Badge',
      verificationUrl: 'https://www.codechef.com/users/rag_23981a4689',
      certificateImage: '/certificates/codechef-1000-diamond.jpg',
      isPendingFile: false,
    },
    {
      id: 'cert-cc-css',
      name: 'CSS — Certificate of Completion',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: '15th March 2026',
      credentialId: '85679b6',
      scoreOrResult: 'Completed all lessons and projects • rag_23981a4689',
      verificationUrl: 'https://www.codechef.com/certificates/verify',
      certificateImage: '/certificates/codechef-css-preview.svg',
      certificatePdf: '/certificates/codechef-css.pdf',
      isPendingFile: false,
    },
    {
      id: 'cert-cc-js',
      name: 'Learn JavaScript — Certificate of Completion',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: '25th March 2026',
      credentialId: '308ee48',
      scoreOrResult: 'Completed all lessons and projects • rag_23981a4689',
      verificationUrl: 'https://www.codechef.com/certificates/verify',
      certificateImage: '/certificates/codechef-javascript-preview.svg',
      certificatePdf: '/certificates/codechef-javascript.pdf',
      isPendingFile: false,
    },
    {
      id: 'cert-cc-html',
      name: 'HTML — Certificate of Completion',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: '5th March 2026',
      credentialId: 'f1aedb8',
      scoreOrResult: 'Completed all lessons and projects • rag_23981a4689',
      verificationUrl: 'https://www.codechef.com/certificates/verify',
      certificateImage: '/certificates/codechef-html-preview.svg',
      certificatePdf: '/certificates/codechef-html.pdf',
      isPendingFile: false,
    },
    {
      id: 'cert-cc-500',
      name: '500 Difficulty Rating — Certificate of Completion',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: '22nd December 2025',
      credentialId: '8fd7745',
      scoreOrResult: 'Completed all practice problems • plush_web_08',
      verificationUrl: 'https://www.codechef.com/certificates/verify',
      certificateImage: '/certificates/codechef-500-rating-preview.svg',
      certificatePdf: '/certificates/codechef-500-rating.pdf',
      isPendingFile: false,
    },
    {
      id: 'cert-cc-6',
      name: 'CodeChef Problem Solving Certificate 06',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: 'Pending File Placement',
      scoreOrResult: 'Contest Challenge Track',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: true,
    },
    {
      id: 'cert-cc-7',
      name: 'CodeChef Problem Solving Certificate 07',
      issuingOrganization: 'CodeChef',
      category: 'CodeChef',
      issueDate: 'Pending File Placement',
      scoreOrResult: 'Algorithmic Track',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: true,
    },

    // SkillRack Certificates (2 entries)
    {
      id: 'cert-sr-1',
      name: 'SkillRack Certification 01',
      issuingOrganization: 'SkillRack',
      category: 'SkillRack',
      issueDate: 'Verified',
      scoreOrResult: 'Programming Proficiency',
      certificateImage: '/certificates/skillrack-cert-1.jpg',
      isPendingFile: true,
    },
    {
      id: 'cert-sr-2',
      name: 'SkillRack Certification 02',
      issuingOrganization: 'SkillRack',
      category: 'SkillRack',
      issueDate: 'Verified',
      scoreOrResult: 'Code Challenges Track',
      certificateImage: '/certificates/skillrack-cert-2.jpg',
      isPendingFile: true,
    },

    // LeetCode Achievements
    {
      id: 'cert-lc-500',
      name: 'LeetCode 500+ Problems Solved Milestone',
      issuingOrganization: 'LeetCode',
      category: 'LeetCode',
      issueDate: 'Verified',
      scoreOrResult: '500+ Algorithms Solved',
      verificationUrl: 'https://leetcode.com/u/Bhuvan_chandra_reddy/',
      certificateImage: '/certificates/cert-placeholder.svg',
      isPendingFile: false,
    },
  ],

  education: [
    {
      id: 'edu-btech',
      institution: 'Raghu Engineering College',
      degree: 'Bachelor of Technology (B.Tech)',
      fieldOfStudy: 'Computer Science and Engineering',
      startDate: '2023',
      endDate: '2027 (Expected)',
      gradeOrCgpa: 'CGPA: 8.62 / 10.0',
      location: 'Visakhapatnam, Andhra Pradesh',
      highlights: [
        'Core coursework: Data Structures and Algorithms, Object-Oriented Programming (Java), Database Management Systems, Operating Systems, Computer Networks',
        'Consistently maintained a high academic CGPA of 8.62',
      ],
      description:
        'Pursuing Bachelor of Technology with a strong foundation in software engineering, Java development, and full stack web technologies.',
    },
    {
      id: 'edu-inter',
      institution: 'Narayana Junior College',
      degree: 'Intermediate (Class XII)',
      fieldOfStudy: 'MPC (Mathematics, Physics, Chemistry)',
      startDate: '2021',
      endDate: '2023',
      gradeOrCgpa: 'Percentage: 90.2%',
      location: 'Visakhapatnam, Andhra Pradesh',
      highlights: [
        'Specialization in Mathematics, Physics, and Chemistry with 90.2% aggregate',
      ],
      description:
        'Pre-university higher secondary education with strong analytical and mathematical problem-solving foundations.',
    },
    {
      id: 'edu-tenth',
      institution: 'Priyankas Vidyodaya High School',
      degree: 'Secondary School Certificate (Class X)',
      fieldOfStudy: 'General Schooling',
      startDate: '2020',
      endDate: '2021',
      gradeOrCgpa: 'Score: 100% (10.0 CGPA)',
      location: 'Visakhapatnam, Andhra Pradesh',
      highlights: [
        'Achieved a perfect 100% score (10.0 CGPA) in Class X Board examinations',
      ],
      description:
        'Completed secondary school education with distinction and top academic honors.',
    },
  ],
};
