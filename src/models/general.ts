export interface SelectItem<T> {
  label: string;
  value: T;
}

export interface IDictionary<T> {
  [index: string]: T;
}
