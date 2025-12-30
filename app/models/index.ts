export interface TechnologyItem {
  tooltip?: string;
  color: string | null;
  icon: any;
  filler?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  tags: string[];
  imageUrl?: string;
  bgColor?: string;
}

export interface EducationItem {
  name: string;
  title: string;
  duration: string;
  link: string;
}

export interface WorkExperienceItem {
  company: string;
  position: string;
  link: string;
  description: string[];
  from: Date;
  to: Date | null;
}

export interface BlogListItem {
  title: string;
  subtitle: string;
  tags: string[];
  createdAt: string;
  html?: string;
  id: number;
}

export interface LinkItem {
  to: string;
  text: string;
}
