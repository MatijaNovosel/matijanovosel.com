export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const tagColors = {
  vue: "#42b883",
  vue2: "#3da677",
  vue3: "#228056",
  typescript: "#3178c6",
  markdown: "#ff4200"
};
