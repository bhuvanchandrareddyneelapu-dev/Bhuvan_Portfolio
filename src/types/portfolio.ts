export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'leetcode' | 'codechef' | 'codeforces' | 'hackerrank' | 'email' | 'other';
  label: string;
  url: string;
  username?: string;
}

export interface ProjectCaseStudy {
  architecture?: string;
  architectureDiagram?: string; // image or description
  keyFeatures: string[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  implementationDetails: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Systems' | 'Mobile' | 'AI / ML' | 'DevOps' | 'Other';
  featured: boolean;
  screenshot: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface SkillCategory {
  categoryName: string;
  description?: string;
  skills: {
    name: string;
    icon?: string;
    levelDescription?: string; // e.g. "Production", "Proficient", "Core" - NO arbitrary percentages
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  jobTitle: string;
  location?: string;
  employmentType?: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  startDate: string;
  endDate: string; // e.g., "Present" or "Dec 2025"
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
  verifiedAchievements?: string[];
}

export interface CodingProfileItem {
  platform: string;
  usernamePlaceholder: string;
  profileUrl: string;
  metricLabel?: string;
  metricValue?: string;
  badges?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Award' | 'Academic' | 'Open Source' | 'Leadership' | 'Other';
  organization?: string;
  date: string;
  description: string;
  evidenceUrl?: string;
  imageUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  scoreOrResult?: string;
  verificationUrl?: string;
  certificateImage?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gradeOrCgpa?: string;
  location?: string;
  highlights?: string[];
  description?: string;
}

export interface PersonalInfo {
  name: string;
  wordmark: string;
  professionalTitle: string;
  tagline: string;
  shortIntroduction: string;
  aboutDescription: string[];
  careerGoals: string;
  educationSummary: string;
  photoPath: string;
  resumePath: string;
  email: string;
  phone?: string;
  location: string;
  coordinates?: string;
  availabilityStatus: string;
}

export interface StudioConfig {
  accentColor: string; // Hex color code
  theme: 'dark'; // The Digital Engineering Studio is dark graphite by specification
  gridPattern: boolean;
  showDevPlaceholderNotice: boolean;
  contactEndpoint?: string; // Optional Formspree / backend URL
}

export interface PortfolioData {
  config: StudioConfig;
  personal: PersonalInfo;
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  codingProfiles: CodingProfileItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
}
