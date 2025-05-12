export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  type: string;
  description: string;
  color: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
}