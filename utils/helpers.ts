export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randFloat = (min: number, max: number) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(4));
};

export const formatMonth = (date: Date) => {
  if (date) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {});
};
