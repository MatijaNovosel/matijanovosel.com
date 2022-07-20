import { Screen } from "quasar";

export const smAndDown = () => {
  return ["xs", "sm"].includes(Screen.name);
};

export const mdAndUp = () => {
  return ["md", "lg", "xl"].includes(Screen.name);
};
