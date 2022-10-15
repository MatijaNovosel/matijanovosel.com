export interface TechnologyItem {
  tooltip: string;
  color: string | null;
  icon: any;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface EducationItem {
  name: string;
  title: string;
  duration: string;
  link: string;
}

export interface BlogListItem {
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  createdAt: string;
  html?: string;
  id: number;
}

export interface LinkItem {
  to: string;
  text: string;
}
