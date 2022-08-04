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

export interface IDictionary<T> {
  [index: string]: T;
}

export interface IDictionaryNumber<T> {
  [index: number]: T;
}

export interface TechnologyItem {
  tooltip: string;
  color: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
  img: string;
}

export interface BlogItem {
  title: string;
  subtitle: string;
  tags: string[];
  blogId: number;
  img: string;
  createdAt: Date;
  to: string;
}
