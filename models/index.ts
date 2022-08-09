export interface SelectItem<T> {
  label: string;
  value: T;
}

export interface TabItem {
  name: string | undefined;
  icon: string;
  to: {
    name: string;
  };
}

export interface IDictionaryNumber<T> {
  [index: number]: T;
}

export interface TechnologyItem {
  tooltip: string;
  color: string;
  icon: any;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  img: string;
}

export interface BlogListItem {
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  createdAt: Date;
  id: number;
}

export interface LinkItem {
  to: string;
  text: string;
  icon: any;
}
