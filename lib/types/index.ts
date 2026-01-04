export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  location: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
  icon?: string;
  color?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'hackathon' | 'award' | 'community';
  icon?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  publishedDate: string;
  thumbnail?: string;
  readTime?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  medium: string;
  email: string;
  twitter?: string;
}
