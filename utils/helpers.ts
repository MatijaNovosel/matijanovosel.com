import { IDictionaryNumber } from "../models";

const month: IDictionaryNumber<string> = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randFloat = (min: number, max: number) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(4));
};

export const formatMonth = (date: Date) => {
  return `${month[date.getUTCMonth() + 1]} ${date.getUTCDate()} '${date
    .getUTCFullYear()
    .toString()
    .substring(2, 4)}`;
};
